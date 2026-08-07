"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock } from 'lucide-react';
import { careerRoles } from '@/lib/career-data';
import { getRoadmapContent } from '@/lib/roadmap-content';
import type { RoadmapTopic } from '@/lib/roadmap-content/types';
import { getCertifications } from '@/lib/certifications';
import { getSupabaseClient } from '@/lib/supabase';

const previewRole = careerRoles[0];
const initialNodes = [
  { id: '1', position: { x: 250, y: 0 }, data: { label: 'Current: Tech Support' }, type: 'input', style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px' } },
  { id: '2', position: { x: 100, y: 100 }, data: { label: `${previewRole.skills[0]} (Mastered)`, topicIndex: 0 }, style: { background: '#059669', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', cursor: 'pointer' } },
  { id: '3', position: { x: 400, y: 100 }, data: { label: previewRole.milestones[0].title }, style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px', cursor: 'pointer' } },
  { id: '4', position: { x: 250, y: 200 }, data: { label: previewRole.milestones[1].title }, style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px', cursor: 'pointer' } },
  { id: '5', position: { x: 250, y: 300 }, data: { label: previewRole.milestones[2].title }, style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px', cursor: 'pointer' } },
  { id: '6', position: { x: 250, y: 450 }, data: { label: `Target: ${previewRole.title}` }, type: 'output', style: { background: '#0891b2', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: 'bold' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: false, style: { stroke: '#059669' } },
  { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#a1a1aa' } },
  { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#a1a1aa' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#a1a1aa' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#a1a1aa' } },
  { id: 'e5-6', source: '5', target: '6', animated: true, style: { stroke: '#a1a1aa' } },
];

type GeneratedAnalysis = {
  currentRole: string;
  strengths: string[];
  suggestedRoles: Array<{
    title: string;
    fitScore: number;
    estimatedMonths: number;
    salaryRange: string;
    rationale: string;
    nextSkills: string[];
  }>;
};

function nodesForAnalysis(analysis: GeneratedAnalysis) {
  const target = analysis.suggestedRoles[0];
  const skills = target.nextSkills.slice(0, 3);
  return [
    { id: '1', position: { x: 250, y: 0 }, data: { label: `Current: ${analysis.currentRole}` }, type: 'input', style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px' } },
    { id: '2', position: { x: 100, y: 100 }, data: { label: `${analysis.strengths[0] ?? 'Transferable strengths'} (Mastered)`, topicIndex: 0 }, style: { background: '#059669', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', cursor: 'pointer' } },
    { id: '3', position: { x: 400, y: 100 }, data: { label: skills[0] ?? 'Core skill gap' }, style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px', cursor: 'pointer' } },
    { id: '4', position: { x: 250, y: 200 }, data: { label: skills[1] ?? 'Applied practice' }, style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px', cursor: 'pointer' } },
    { id: '5', position: { x: 250, y: 300 }, data: { label: skills[2] ?? 'Interview readiness' }, style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px', cursor: 'pointer' } },
    { id: '6', position: { x: 250, y: 450 }, data: { label: `Target: ${target.title}` }, type: 'output', style: { background: '#0891b2', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: 'bold' } },
  ];
}

export default function RoadmapPage() {
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const role = previewRole;
  const [analysis, setAnalysis] = useState<GeneratedAnalysis | null>(null);
  const [selectedRoleTitle, setSelectedRoleTitle] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<RoadmapTopic | null>(null);
  const [selectedTopicMastered, setSelectedTopicMastered] = useState(false);
  const targetRole = analysis?.suggestedRoles.find((candidate) => candidate.title === selectedRoleTitle) ?? analysis?.suggestedRoles[0];
  const roadmapSkills = useMemo(
    () => (analysis ? [...analysis.strengths.slice(0, 1), ...(targetRole?.nextSkills ?? [])] : undefined),
    [analysis, targetRole],
  );
  const roadmapContent = useMemo(
    () => getRoadmapContent(targetRole?.title ?? role.title, roadmapSkills),
    [role.title, targetRole, roadmapSkills],
  );
  const certifications = getCertifications(targetRole?.title ?? role.title);

  useEffect(() => {
    setIsMounted(true);
    async function loadPurchase() {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return;
      const session = (await getSupabaseClient().auth.getSession()).data.session;
      if (!session) return;
      const response = await fetch("/api/purchases", {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (!response.ok) throw new Error("Unable to verify your blueprint purchase.");
      const data = await response.json() as { unlocked?: boolean };
      setIsUnlocked(data.unlocked === true);
    }

    void loadPurchase().catch((error: unknown) => {
      console.error("Purchase status error:", error);
    });
  }, []);

  useEffect(() => {
    const stored =
      window.sessionStorage.getItem("careerpivot-analysis") ??
      window.localStorage.getItem("careerpivot-analysis");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as GeneratedAnalysis;
      if (parsed.currentRole && parsed.suggestedRoles?.length) {
        setAnalysis(parsed);
        const savedTitle = window.sessionStorage.getItem("careerpivot-selected-role") ?? window.localStorage.getItem("careerpivot-selected-role");
        const chosenTitle = parsed.suggestedRoles.some((candidate) => candidate.title === savedTitle) ? savedTitle ?? "" : parsed.suggestedRoles[0].title;
        setSelectedRoleTitle(chosenTitle);
        const chosenRole = parsed.suggestedRoles.find((candidate) => candidate.title === chosenTitle);
        setNodes(nodesForAnalysis(chosenRole ? { ...parsed, suggestedRoles: [chosenRole, ...parsed.suggestedRoles.filter((candidate) => candidate.title !== chosenTitle)] } : parsed));
      }
    } catch {
      window.sessionStorage.removeItem("careerpivot-analysis");
    }
  }, [setNodes]);

  useEffect(() => {
    setSelectedTopic(roadmapContent.topics[0] ?? null);
  }, [roadmapContent]);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const openCheckout = async () => {
    setCheckoutError("");
    setIsCheckingOut(true);
    try {
      const session = (await getSupabaseClient().auth.getSession()).data.session;
      if (!session) {
        router.push("/login?returnTo=/roadmap");
        return;
      }

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      const data = await response.json() as { url?: string; error?: string };
      if (!response.ok || !data.url) throw new Error(data.error ?? "Unable to start checkout.");
      window.location.assign(data.url);
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : "Unable to start checkout.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white font-sans">
      <header className="flex-shrink-0 flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-950 z-10 relative">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="text-xl font-bold tracking-tight">CareerPivot<span className="text-emerald-500">.me</span></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right mr-4">
          <div className="text-sm font-semibold text-zinc-200">
            {analysis ? `${analysis.currentRole} → ${analysis.suggestedRoles[0].title}` : `Tech Support → ${role.title}`}
          </div>
          <div className="text-xs text-emerald-400">
            {analysis
              ? `Estimated Salary: ${analysis.suggestedRoles[0].salaryRange} | ${analysis.suggestedRoles[0].estimatedMonths} months`
              : `Estimated Salary: ${role.salaryRange} | ${role.estimatedMonths} months`}
          </div>
          </div>
          <button onClick={() => void openCheckout()} disabled={isCheckingOut} className="bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm disabled:cursor-wait disabled:opacity-60">
            <Lock className="w-4 h-4" /> {isCheckingOut ? "Opening checkout..." : "Unlock Full Blueprint ($49)"}
          </button>
          {checkoutError && <p className="absolute right-6 top-full mt-2 max-w-xs text-right text-xs text-red-300">{checkoutError}</p>}
        </div>
      </header>

      <div className="flex-grow w-full relative">
        {/* Paywall Overlay */}
        {!isUnlocked && <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent flex flex-col items-center justify-end pb-32">
          <div className="pointer-events-auto bg-zinc-900 border border-zinc-800 p-8 rounded-2xl max-w-md text-center shadow-2xl">
            <Lock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Unlock Your Path</h2>
            <p className="text-zinc-400 mb-6">
              Get access to the full interactive roadmap, including curated courses, API credits, and our Trust-by-Default 6-month money-back guarantee.
            </p>
            <button onClick={() => void openCheckout()} className="w-full bg-white text-black font-semibold rounded-lg py-3 hover:bg-zinc-200 transition-colors">
              Unlock for $49
            </button>
          </div>
        </div>}

        {isMounted && <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(_, node) => {
            const label = String(node.data.label).replace(/\s*\(Mastered\)\s*$/, "").trim().toLowerCase();
            const mastered = node.id === "2" || String(node.data.label).includes("(Mastered)");
            let topic = roadmapContent.topics.find((candidate) => {
              const title = candidate.title.toLowerCase();
              return title === label || title.includes(label) || label.includes(title);
            });
            if (!topic && mastered) {
              const keywords = label.split(/[^a-z0-9]+/).filter((word) => word.length > 4);
              const ranked = roadmapContent.topics
                .map((candidate) => {
                  const searchable = `${candidate.title} ${candidate.outcome} ${candidate.studyPlan.join(" ")}`.toLowerCase();
                  const score = keywords.reduce((total, keyword) => total + (searchable.includes(keyword) ? 1 : 0), 0);
                  return { candidate, score };
                })
                .sort((a, b) => b.score - a.score);
              if (ranked[0]?.score) topic = ranked[0].candidate;
            }
            if (topic) {
              setSelectedTopic(topic);
              setSelectedTopicMastered(mastered);
            } else if (typeof node.data.topicIndex === "number") {
              setSelectedTopic(roadmapContent.topics[node.data.topicIndex] ?? roadmapContent.topics[0] ?? null);
              setSelectedTopicMastered(mastered);
            }
          }}
          fitView
          className="bg-zinc-950"
        >
          <Controls className="bg-zinc-800 fill-zinc-200 border-zinc-700" />
          <MiniMap 
            nodeColor={(node) => {
              if (node.style?.background) return node.style.background as string;
              return '#27272a';
            }}
            maskColor="#000000"
            style={{ backgroundColor: '#18181b' }}
          />
          <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#3f3f46" />
        </ReactFlow>}

        {selectedTopic && (isUnlocked || selectedTopicMastered) && (
          <aside className="roadmap-panel absolute right-6 top-6 z-10 max-h-[calc(100%-3rem)] w-[min(420px,calc(100%-3rem))] overflow-y-auto rounded-2xl border p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">{selectedTopicMastered ? "Completed module" : "Study module"}</p>
              {selectedTopicMastered && <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">Mastered</span>}
            </div>
            <h2 className="mt-2 text-2xl font-bold">{selectedTopic.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              {selectedTopicMastered ? "You already demonstrate this capability. Review the evidence and use the module to deepen it or connect it to the next skill." : selectedTopic.outcome}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {roadmapContent.topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${selectedTopic.id === topic.id ? "border-emerald-400 bg-emerald-500/20 text-emerald-200" : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"}`}
                >
                  {topic.title}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white">What to study</h3>
              <ol className="mt-3 space-y-2">
                {selectedTopic.studyPlan.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-zinc-300">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-300">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
              <h3 className="text-sm font-semibold text-cyan-200">Build this</h3>
              <p className="mt-2 text-sm leading-5 text-zinc-300">{selectedTopic.project}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white">Recommended resources</h3>
              <div className="mt-3 space-y-3">
                {selectedTopic.resources.map((resource) => (
                  <a key={resource.title} href={resource.url} target="_blank" rel="noreferrer" className="block rounded-xl border border-zinc-800 p-3 transition hover:border-emerald-500/60">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-medium text-zinc-100">{resource.title}</span>
                      <div className="flex items-center gap-2">
                        {(resource.provider.toLowerCase().includes("google") || resource.title.toLowerCase().includes("google")) && (
                          <span className="whitespace-nowrap rounded-full bg-amber-400/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-300">Recommended</span>
                        )}
                        <span className="whitespace-nowrap text-[10px] uppercase tracking-wide text-emerald-400">{resource.access}</span>
                      </div>
                    </div>

                    {certifications.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-sm font-semibold text-white">Optional certifications</h3>
                        <p className="mt-1 text-xs leading-5 text-zinc-500">Use certifications to signal structured knowledge; they complement, not replace, practical evidence.</p>
                        <div className="mt-3 space-y-3">
                          {certifications.map((certification) => (
                            <a key={certification.name} href={certification.url} target="_blank" rel="noreferrer" className="block rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 transition hover:border-amber-400/60">
                              <div className="flex items-start justify-between gap-3">
                                <span className="text-sm font-medium text-zinc-100">{certification.name}</span>
                                <span className="whitespace-nowrap rounded-full bg-amber-400/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-300">Optional</span>
                              </div>
                              <p className="mt-1 text-xs text-zinc-500">{certification.provider}</p>
                              <p className="mt-2 text-xs leading-5 text-zinc-400">{certification.why}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    <p className="mt-1 text-xs text-zinc-500">{resource.provider} · {resource.format}</p>
                    <p className="mt-2 text-xs leading-5 text-zinc-400">{resource.note}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-800 pt-4">
              <h3 className="text-sm font-semibold text-white">Checkpoint</h3>
              <p className="mt-2 text-sm leading-5 text-zinc-400">{selectedTopic.checkpoint}</p>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
