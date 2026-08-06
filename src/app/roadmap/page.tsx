"use client";

import { useCallback } from 'react';
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
import { ArrowLeft, Lock } from 'lucide-react';
import { careerRoles } from '@/lib/career-data';

const previewRole = careerRoles[0];
const initialNodes = [
  { id: '1', position: { x: 250, y: 0 }, data: { label: 'Current: Tech Support' }, type: 'input', style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px' } },
  { id: '2', position: { x: 100, y: 100 }, data: { label: `${previewRole.skills[0]} (Mastered)` }, style: { background: '#059669', color: 'white', border: 'none', borderRadius: '8px', padding: '12px' } },
  { id: '3', position: { x: 400, y: 100 }, data: { label: previewRole.skills[3] }, style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px' } },
  { id: '4', position: { x: 250, y: 200 }, data: { label: previewRole.milestones[1].title }, style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px' } },
  { id: '5', position: { x: 250, y: 300 }, data: { label: previewRole.milestones[2].title }, style: { background: '#27272a', color: 'white', border: '1px solid #3f3f46', borderRadius: '8px', padding: '12px' } },
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

export default function RoadmapPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const role = previewRole;

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

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
          <div className="text-sm font-semibold text-zinc-200">Tech Support → {role.title}</div>
          <div className="text-xs text-emerald-400">Estimated Salary: {role.salaryRange} | {role.estimatedMonths} months</div>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm">
            <Lock className="w-4 h-4" /> Unlock Full Blueprint ($49)
          </button>
        </div>
      </header>

      <div className="flex-grow w-full relative">
        {/* Paywall Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent flex flex-col items-center justify-end pb-32">
          <div className="pointer-events-auto bg-zinc-900 border border-zinc-800 p-8 rounded-2xl max-w-md text-center shadow-2xl">
            <Lock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Unlock Your Path</h2>
            <p className="text-zinc-400 mb-6">
              Get access to the full interactive roadmap, including curated courses, API credits, and our Trust-by-Default 6-month money-back guarantee.
            </p>
            <button className="w-full bg-white text-black font-semibold rounded-lg py-3 hover:bg-zinc-200 transition-colors">
              Unlock for $49
            </button>
          </div>
        </div>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
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
        </ReactFlow>
      </div>
    </div>
  );
}
