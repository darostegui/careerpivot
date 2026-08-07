import { getCareerRole } from "@/lib/career-data";

export type MarketDemandLevel = "high" | "steady" | "emerging";

export type MarketData = {
  slug: string;
  title: string;
  salaryRange: string;
  demand: {
    level: MarketDemandLevel;
    summary: string;
  };
  source: {
    status: "live" | "fallback";
    provider: string;
  };
  refreshedAt: string | null;
  fallback: boolean;
};

export type MarketDataProvider = {
  name: string;
  getRoleMarketData(slug: string): Promise<{
    salaryRange: string;
    demand: { level: MarketDemandLevel; summary: string };
    refreshedAt: string;
  } | null>;
};

const curatedDemand: Record<string, MarketData["demand"]> = {
  "cloud-devops-engineer": { level: "high", summary: "Strong demand across cloud operations and platform teams." },
  "site-reliability-engineer": { level: "high", summary: "Strong demand for reliability and production engineering skills." },
  "security-analyst": { level: "high", summary: "Steady demand as organizations expand security operations." },
  "data-analyst": { level: "steady", summary: "Steady demand across teams that rely on measurable decisions." },
  "frontend-engineer": { level: "steady", summary: "Steady demand for accessible, product-focused web development." },
  "backend-engineer": { level: "high", summary: "Strong demand for API, service, and data platform builders." },
  "data-engineer": { level: "high", summary: "Strong demand for dependable data platforms and pipelines." },
  "machine-learning-engineer": { level: "high", summary: "Growing demand where applied ML can improve products and operations." },
  "renewable-energy-technician": { level: "high", summary: "Growing demand alongside renewable infrastructure deployment." },
};

function curatedMarketData(slug: string): MarketData | null {
  const role = getCareerRole(slug);
  if (!role) return null;

  return {
    slug: role.slug,
    title: role.title,
    salaryRange: role.salaryRange,
    demand: curatedDemand[role.slug] ?? {
      level: "steady",
      summary: "Curated directional demand estimate; it is not live labor-market data.",
    },
    source: { status: "fallback", provider: "curated-catalog" },
    refreshedAt: null,
    fallback: true,
  };
}

function isDemandLevel(value: unknown): value is MarketDemandLevel {
  return value === "high" || value === "steady" || value === "emerging";
}

function isProviderPayload(value: unknown): value is {
  salaryRange: string;
  demand: { level: MarketDemandLevel; summary: string };
  refreshedAt: string;
} {
  if (!value || typeof value !== "object") return false;
  const payload = value as Record<string, unknown>;
  const demand = payload.demand;
  if (!demand || typeof demand !== "object") return false;
  const demandRecord = demand as Record<string, unknown>;

  return (
    typeof payload.salaryRange === "string" &&
    payload.salaryRange.trim().length > 0 &&
    isDemandLevel(demandRecord.level) &&
    typeof demandRecord.summary === "string" &&
    demandRecord.summary.trim().length > 0 &&
    typeof payload.refreshedAt === "string" &&
    !Number.isNaN(Date.parse(payload.refreshedAt))
  );
}

function configuredProvider(): MarketDataProvider | null {
  const endpoint = process.env.MARKET_DATA_PROVIDER_URL;
  if (!endpoint) return null;

  return {
    name: "configured-provider",
    async getRoleMarketData(slug) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);
      try {
        const response = await fetch(`${endpoint.replace(/\/$/, "")}/${encodeURIComponent(slug)}`, {
          headers: {
            Accept: "application/json",
            ...(process.env.MARKET_DATA_API_KEY
              ? { Authorization: `Bearer ${process.env.MARKET_DATA_API_KEY}` }
              : {}),
          },
          signal: controller.signal,
          cache: "no-store",
        });
        if (!response.ok) return null;
        const payload: unknown = await response.json();
        return isProviderPayload(payload) ? payload : null;
      } catch {
        return null;
      } finally {
        clearTimeout(timeout);
      }
    },
  };
}

export async function getMarketData(slug: string): Promise<MarketData | null> {
  const fallback = curatedMarketData(slug);
  if (!fallback) return null;

  const provider = configuredProvider();
  if (!provider) return fallback;

  const live = await provider.getRoleMarketData(slug);
  if (!live) return fallback;

  return {
    ...fallback,
    salaryRange: live.salaryRange,
    demand: live.demand,
    source: { status: "live", provider: provider.name },
    refreshedAt: live.refreshedAt,
    fallback: false,
  };
}
