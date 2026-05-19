import { useState, useMemo } from 'react';
import type { SplitType, PRMap } from '../types';
import { BRO_SPLIT } from '../data/broSplit';
import { PPL_SPLIT } from '../data/pplSplit';
import { HOME_CIRCUIT } from '../data/homeCircuit';
import { INITIAL_PRS } from '../data/prs';
import { DayCard } from './DayCard';

const getWeekStreak = () => {
  try {
    const completions: string[] = JSON.parse(localStorage.getItem('fit_completions') || '[]');
    const today = new Date();
    const dow = today.getDay();
    const mon = new Date(today);
    mon.setDate(today.getDate() - ((dow + 6) % 7));
    let count = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(mon);
      d.setDate(mon.getDate() + i);
      if (completions.includes(d.toISOString().split('T')[0])) count++;
    }
    return count;
  } catch { return 0; }
};

const SPLITS: { id: SplitType; label: string; short: string }[] = [
  { id: 'bro', label: '5-Day Bro Split', short: 'Bro' },
  { id: 'home', label: 'Home Circuit', short: 'Home' },
  { id: 'ppl', label: '6-Day PPL', short: 'PPL' },
];

const SCHEDULES: Record<SplitType, string> = {
  bro:  'Mon Chest · Tue Back · Wed Legs · Thu Shoulders · Fri Arms',
  home: 'Mon Chest · Tue Back · Wed Legs · Thu Shoulders · Fri Arms · Sat Long Swim',
  ppl:  'Mon Push A · Tue Pull A · Wed Legs A · Thu Push B · Fri Pull B · Sat Legs B',
};

const NOTES: Record<SplitType, { icon: string; text: string }[]> = {
  bro: [
    { icon: '🟦', text: 'Compound lifts — 2–3 min rest between sets' },
    { icon: '🟩', text: 'Isolation — 60–90 sec rest' },
    { icon: '📈', text: 'Hit ALL sets at top of range → add 2.5kg next session' },
    { icon: '🔄', text: 'Deload every 6–8 weeks (drop ~40% weight)' },
  ],
  home: [
    { icon: '🏊', text: 'Always swim in the evening — gym first, pool after' },
    { icon: '⚠️', text: 'Never swim before gym — fatigued shoulders + bench = injury' },
    { icon: '🦵', text: 'Leg day swim is optional and light — skip if wrecked' },
    { icon: '📅', text: 'Saturday swim is the most important one — don\'t skip it' },
    { icon: '⚖️', text: 'Weigh yourself Monday morning only, before eating' },
    { icon: '📈', text: 'Week 1 at new gym: use 80–85% of PR. Week 2 onwards: beat them' },
  ],
  ppl: [
    { icon: '🟦', text: 'Compound lifts — 2–3 min rest between sets' },
    { icon: '🟩', text: 'Isolation — 60–90 sec rest' },
    { icon: '📈', text: 'Hit ALL sets at top of range → add 2.5kg next session' },
    { icon: '🔄', text: 'Start PPL after 8 weeks on Bro Split — or when PRs stall 2+ weeks' },
  ],
};

export default function Circuit() {
  const [split, setSplit] = useState<SplitType>(() =>
    (localStorage.getItem('fit_split') as SplitType) || 'bro'
  );
  const [prs, setPRs] = useState<PRMap>(() => {
    try {
      return { ...INITIAL_PRS, ...JSON.parse(localStorage.getItem('fit_prs') || '{}') };
    } catch { return { ...INITIAL_PRS }; }
  });

  const streak = useMemo(() => getWeekStreak(), []);

  const days = split === 'bro' ? BRO_SPLIT : split === 'ppl' ? PPL_SPLIT : HOME_CIRCUIT;

  const handleSplitChange = (s: SplitType) => {
    setSplit(s);
    localStorage.setItem('fit_split', s);
  };

  const handlePRUpdate = (key: string, value: number) => {
    const updated = { ...prs, [key]: value };
    setPRs(updated);
    localStorage.setItem('fit_prs', JSON.stringify(updated));
  };

  return (
    <div className="px-4 pt-4 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#444] font-bold">Active Split</p>
          <p className="text-[17px] font-black text-[#e0e0e0] tracking-wide">
            {SPLITS.find(s => s.id === split)?.label}
          </p>
          {split === 'home' && (
            <p className="text-[10px] text-[#22d3ee] font-bold mt-0.5">🏊 Fat Loss Phase · Gym + Swim</p>
          )}
        </div>
        <div className="flex items-center gap-2 bg-[#141414] border border-[#2a2a2a] rounded-2xl px-4 py-2">
          <span className="text-lg">🔥</span>
          <div className="text-right">
            <p className="text-[10px] text-[#444] font-bold tracking-widest uppercase">Week</p>
            <p className="text-xl font-black text-[#b5ff3e] leading-tight">
              {streak}<span className="text-xs text-[#555] font-normal">/7</span>
            </p>
          </div>
        </div>
      </div>

      {/* 3-way Split Toggle */}
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-1.5 flex gap-1 mb-4">
        {SPLITS.map(s => (
          <button
            key={s.id}
            onClick={() => handleSplitChange(s.id)}
            className={`flex-1 py-2.5 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${
              split === s.id ? 'bg-[#b5ff3e] text-black' : 'text-[#555] hover:text-[#888]'
            }`}
          >
            {s.short}
          </button>
        ))}
      </div>

      {/* Schedule */}
      <div className="mb-4 px-1">
        <p className="text-[9px] text-[#333] font-bold tracking-widest uppercase leading-relaxed">{SCHEDULES[split]}</p>
      </div>

      {/* Day progress dots */}
      <div className="flex gap-1.5 mb-5">
        {Array.from({ length: split === 'ppl' ? 6 : 5 }, (_, i) => {
          const today = new Date();
          const dow = today.getDay();
          const todayIdx = (dow + 6) % 7; // Mon=0
          return (
            <div
              key={i}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                i === todayIdx ? 'bg-[#b5ff3e]'
                : i < todayIdx ? 'bg-[#2a2a2a]'
                : 'bg-[#181818]'
              }`}
            />
          );
        })}
      </div>

      {/* Day Cards */}
      <div className="space-y-3">
        {days.map(day => (
          <DayCard key={`${split}-${day.id}`} day={day} prs={prs} onPRUpdate={handlePRUpdate} />
        ))}
      </div>

      {/* Notes */}
      <div className="mt-5 bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-4">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#333] font-bold mb-3">
          {split === 'home' ? 'Home Circuit Rules' : 'Progressive Overload'}
        </p>
        <div className="space-y-1.5">
          {NOTES[split].map(({ icon, text }) => (
            <p key={text} className="text-[11px] text-[#444] leading-snug">{icon} {text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
