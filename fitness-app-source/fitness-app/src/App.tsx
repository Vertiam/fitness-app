import { useState } from 'react';
import MacroTracker from './components/MacroTracker';
import Circuit from './components/Circuit';
import './index.css';

type Tab = 'macros' | 'circuit';

const MacroIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="10" width="3" height="10" rx="1" fill={active ? '#b5ff3e' : '#444'}/>
    <rect x="7" y="6" width="3" height="14" rx="1" fill={active ? '#b5ff3e' : '#444'}/>
    <rect x="12" y="2" width="3" height="18" rx="1" fill={active ? '#b5ff3e' : '#444'}/>
    <rect x="17" y="7" width="3" height="13" rx="1" fill={active ? '#b5ff3e' : '#444'}/>
  </svg>
);

const CircuitIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M4 11C4 7.13 7.13 4 11 4s7 3.13 7 7-3.13 7-7 7S4 14.87 4 11z" stroke={active ? '#b5ff3e' : '#444'} strokeWidth="2"/>
    <path d="M11 8v3l2 2" stroke={active ? '#b5ff3e' : '#444'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 11h3M18 11h3M11 1v3M11 18v3" stroke={active ? '#b5ff3e' : '#444'} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('macros');

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] max-w-md mx-auto relative">
      {/* Top bar */}
      <div className="px-5 pt-5 pb-3 flex items-center justify-between shrink-0">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#444] font-bold">Your Fitness</p>
          <h1 className="text-xl font-black tracking-wider text-[#e0e0e0]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {activeTab === 'macros' ? 'MACRO TRACKER' : 'CIRCUIT'}
          </h1>
        </div>
        <div className="text-right">
          <p className="text-[9px] tracking-widest uppercase text-[#333] font-bold">Goal</p>
          <p className="text-[11px] font-bold text-[#555]">92.4 <span className="text-[#333]">→</span> 85<span className="text-[9px]">kg</span></p>
          <p className="text-[9px] text-[#333]">8 weeks</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#1a1a1a] mx-4 mb-1 shrink-0" />

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'macros' ? <MacroTracker /> : <Circuit />}
        <div className="h-20" />
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="flex">
          <button
            className="flex-1 flex flex-col items-center py-3 gap-1 transition-colors"
            onClick={() => setActiveTab('macros')}
          >
            <MacroIcon active={activeTab === 'macros'} />
            <span
              className="text-[9px] font-black tracking-widest uppercase transition-colors"
              style={{ color: activeTab === 'macros' ? '#b5ff3e' : '#444' }}
            >
              Macros
            </span>
          </button>
          <button
            className="flex-1 flex flex-col items-center py-3 gap-1 transition-colors"
            onClick={() => setActiveTab('circuit')}
          >
            <CircuitIcon active={activeTab === 'circuit'} />
            <span
              className="text-[9px] font-black tracking-widest uppercase transition-colors"
              style={{ color: activeTab === 'circuit' ? '#b5ff3e' : '#444' }}
            >
              Circuit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
