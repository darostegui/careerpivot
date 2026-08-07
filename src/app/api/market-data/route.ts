import { NextRequest, NextResponse } from "next/server";
import { getCareerRole } from "@/lib/career-data";
import { getMarketData } from "@/lib/market-data";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug")?.trim();

  if (!slug) {
    return NextResponse.json({ error: "A role slug is required." }, { status: 400 });
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !getCareerRole(slug)) {
    return NextResponse.json({ error: "Unknown role slug." }, { status: 404 });
  }

  const marketData = await getMarketData(slug);
  if (!marketData) {
    return NextResponse.json({ error: "Market data is unavailable for this role." }, { status: 404 });
  }

  return NextResponse.json({ marketData });
}
