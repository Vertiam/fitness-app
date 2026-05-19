import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import type { MacroEntry } from '../types';
import { PRESET_MEALS, TARGETS } from '../data/presets';

const dateStr = (d: Date) => d.toISOString().split('T')[0];

const getWeekDates = () => {
  const today = new Date();
  const dow = today.getDay(); // 0 = Sun
  const mon = new Date(today);
  mon.setDate(today.getDate() - ((dow + 6) % 7));
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(mon);
    d.setDate(mon.getDate() + i);
    return d;
  });
};

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function MacroBar({ label, current, target, color }: { label: string; current: number; target: number; color: string }) {
  const pct = Math.min((current / target) * 100, 100);
  const over = current > target;
  return (
    <div className="mb-3">
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{label}</span>
        <span className="text-xs font-mono" style={{ color: over ? '#ff4d4d' : '#888' }}>
          <span style={{ color: over ? '#ff4d4d' : '#e0e0e0' }} className="font-bold">{Math.round(current)}</span>
          <span className="text-[#555]"> / {target}{label === 'CALORIES' ? ' kcal' : 'g'}</span>
        </span>
      </div>
      <div className="h-2 rounded-full bg-[#222] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, background: over ? '#ff4d4d' : color }}
        />
      </div>
    </div>
  );
}

export default function MacroTracker() {
  const [currentDate, setCurrentDate] = useState(dateStr(new Date()));
  const [allLogs, setAllLogs] = useState<Record<string, MacroEntry[]>>(() => {
    try { return JSON.parse(localStorage.getItem('fit_macros') || '{}'); } catch { return {}; }
  });
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', kcal: '', protein: '', carbs: '', fat: '' });

  const entries = allLogs[currentDate] || [];

  const saveLogs = (logs: Record<string, MacroEntry[]>) => {
    setAllLogs(logs);
    localStorage.setItem('fit_macros', JSON.stringify(logs));
  };

  const totals = useMemo(() => entries.reduce(
    (acc, e) => ({ kcal: acc.kcal + e.kcal, protein: acc.protein + e.protein, carbs: acc.carbs + e.carbs, fat: acc.fat + e.fat }),
    { kcal: 0, protein: 0, carbs: 0, fat: 0 }
  ), [entries]);

  const addEntry = (entry: Omit<MacroEntry, 'id'>) => {
    const newEntry: MacroEntry = { ...entry, id: crypto.randomUUID() };
    const updated = { ...allLogs, [currentDate]: [...(allLogs[currentDate] || []), newEntry] };
    saveLogs(updated);
  };

  const deleteEntry = (id: string) => {
    const updated = { ...allLogs, [currentDate]: entries.filter(e => e.id !== id) };
    saveLogs(updated);
  };

  const shiftDate = (days: number) => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + days);
    setCurrentDate(dateStr(d));
  };

  const handleSubmit = () => {
    if (!form.name || !form.kcal) return;
    addEntry({
      name: form.name,
      kcal: Number(form.kcal) || 0,
      protein: Number(form.protein) || 0,
      carbs: Number(form.carbs) || 0,
      fat: Number(form.fat) || 0,
    });
    setForm({ name: '', kcal: '', protein: '', carbs: '', fat: '' });
    setShowForm(false);
  };

  const weekDates = getWeekDates();
  const weekData = weekDates.map((d, i) => {
    const ds = dateStr(d);
    const log = allLogs[ds] || [];
    const kcal = log.reduce((s, e) => s + e.kcal, 0);
    return { day: DAY_LABELS[i], kcal, target: TARGETS.kcal, isToday: ds === dateStr(new Date()) };
  });

  const displayDate = new Date(currentDate + 'T12:00:00');
  const isToday = currentDate === dateStr(new Date());

  return (
    <div className="px-4 pt-4 pb-4">
      {/* Date Nav */}
      <div className="flex items-center justify-between mb-5">
        <button onClick={() => shiftDate(-1)} className="w-9 h-9 rounded-xl bg-[#1e1e1e] flex items-center justify-center text-[#666] hover:text-[#b5ff3e] hover:bg-[#222] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#444] font-bold">{isToday ? 'TODAY' : ''}</p>
          <p className="text-[15px] font-bold text-[#e0e0e0] tracking-wide">
            {displayDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
          </p>
        </div>
        <button onClick={() => shiftDate(1)} className="w-9 h-9 rounded-xl bg-[#1e1e1e] flex items-center justify-center text-[#666] hover:text-[#b5ff3e] hover:bg-[#222] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Macro Bars */}
      <div className="bg-[#141414] rounded-2xl p-4 mb-4 border border-[#2a2a2a]">
        <MacroBar label="Calories" current={totals.kcal} target={TARGETS.kcal} color="#f97316" />
        <MacroBar label="Protein" current={totals.protein} target={TARGETS.protein} color="#38bdf8" />
        <MacroBar label="Carbs" current={totals.carbs} target={TARGETS.carbs} color="#fbbf24" />
        <MacroBar label="Fat" current={totals.fat} target={TARGETS.fat} color="#f472b6" />
      </div>

      {/* Preset Meals */}
      <div className="mb-4">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#444] font-bold mb-2">Quick Add</p>
        <div className="grid grid-cols-2 gap-2">
          {PRESET_MEALS.map((meal) => (
            <button
              key={meal.name}
              onClick={() => addEntry(meal)}
              className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-3 text-left hover:border-[#b5ff3e] hover:bg-[#1a1a1a] transition-all active:scale-95"
            >
              <p className="text-[11px] text-[#e0e0e0] font-semibold leading-tight mb-1 line-clamp-2">{meal.name}</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] text-[#f97316] font-mono">{meal.kcal}kcal</span>
                <span className="text-[10px] text-[#38bdf8] font-mono">{meal.protein}P</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Food Log */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#444] font-bold">Food Log</p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-lg transition-all"
            style={{ background: showForm ? '#2a2a2a' : '#b5ff3e', color: showForm ? '#888' : '#000' }}
          >
            {showForm ? 'Cancel' : '+ Add Food'}
          </button>
        </div>

        {showForm && (
          <div className="bg-[#141414] border border-[#b5ff3e] rounded-2xl p-4 mb-3">
            <input
              className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl px-3 py-2.5 text-sm text-[#e0e0e0] placeholder-[#444] mb-2 outline-none focus:border-[#b5ff3e]"
              placeholder="Food name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { key: 'kcal', label: 'Calories', color: '#f97316' },
                { key: 'protein', label: 'Protein (g)', color: '#38bdf8' },
                { key: 'carbs', label: 'Carbs (g)', color: '#fbbf24' },
                { key: 'fat', label: 'Fat (g)', color: '#f472b6' },
              ].map(({ key, label, color }) => (
                <div key={key}>
                  <label className="text-[10px] font-bold tracking-widest uppercase mb-1 block" style={{ color }}>{label}</label>
                  <input
                    type="number"
                    className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl px-3 py-2 text-sm font-mono text-[#e0e0e0] placeholder-[#444] outline-none focus:border-[#b5ff3e]"
                    placeholder="0"
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-[#b5ff3e] text-black font-bold text-sm rounded-xl py-2.5 tracking-wide active:scale-95 transition-transform"
            >
              Log Food
            </button>
          </div>
        )}

        {entries.length === 0 ? (
          <div className="text-center py-8 text-[#333] text-sm">No food logged yet</div>
        ) : (
          <div className="space-y-2">
            {entries.map(entry => (
              <div key={entry.id} className="bg-[#141414] border border-[#222] rounded-xl px-4 py-3 flex items-center justify-between">
                <div className="flex-1 min-w-0 mr-3">
                  <p className="text-sm text-[#e0e0e0] font-semibold truncate">{entry.name}</p>
                  <div className="flex gap-3 mt-0.5 flex-wrap">
                    <span className="text-[11px] text-[#f97316] font-mono">{entry.kcal}kcal</span>
                    <span className="text-[11px] text-[#38bdf8] font-mono">{entry.protein}g P</span>
                    <span className="text-[11px] text-[#fbbf24] font-mono">{entry.carbs}g C</span>
                    <span className="text-[11px] text-[#f472b6] font-mono">{entry.fat}g F</span>
                  </div>
                </div>
                <button onClick={() => deleteEntry(entry.id)} className="text-[#444] hover:text-[#ff4d4d] transition-colors w-7 h-7 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Weekly Summary */}
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-4">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#444] font-bold mb-4">This Week — Calories</p>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={weekData} barSize={24} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="day" tick={{ fill: '#555', fontSize: 10, fontWeight: 700 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#555', fontSize: 9 }} axisLine={false} tickLine={false} domain={[0, TARGETS.kcal * 1.2]} tickCount={3} />
            <Tooltip
              contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: 8, fontSize: 12 }}
              labelStyle={{ color: '#888', fontSize: 10, fontWeight: 700 }}
              formatter={(val: unknown) => [`${val} kcal`, '']}
              cursor={{ fill: 'rgba(181,255,62,0.05)' }}
            />
            <Bar dataKey="kcal" radius={[4, 4, 0, 0]}>
              {weekData.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.isToday ? '#b5ff3e' : entry.kcal > TARGETS.kcal ? '#ff4d4d' : '#2a3a1a'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-2">
          <span className="text-[10px] text-[#555]"><span className="inline-block w-2 h-2 rounded-sm bg-[#2a3a1a] mr-1"></span>Under</span>
          <span className="text-[10px] text-[#555]"><span className="inline-block w-2 h-2 rounded-sm bg-[#b5ff3e] mr-1"></span>Today</span>
          <span className="text-[10px] text-[#555]"><span className="inline-block w-2 h-2 rounded-sm bg-[#ff4d4d] mr-1"></span>Over</span>
        </div>
      </div>
    </div>
  );
}
