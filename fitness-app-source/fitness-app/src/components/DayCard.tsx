import { useState, useEffect } from 'react';
import type { WorkoutDay, Exercise, CheckMap, PRMap } from '../types';

const SECTION_ICONS: Record<string, string> = {
  warmup: '🔥',
  workout: '💪',
  stretching: '🧘',
  cardio: '🏃',
  swim: '🏊',
};

const SECTION_COLORS: Record<string, string> = {
  warmup: '#fb923c',
  workout: '#b5ff3e',
  stretching: '#a78bfa',
  cardio: '#38bdf8',
  swim: '#22d3ee',
};

const TYPE_BADGE: Record<string, string> = {
  compound: '🟦',
  isolation: '🟩',
  optional: '🟨',
};

function YoutubeButton({ url }: { url: string }) {
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        window.open(url, '_blank', 'noopener,noreferrer');
      }}
      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide transition-all active:scale-95 shrink-0"
      style={{ background: '#ff000022', color: '#ff4444', border: '1px solid #ff333333' }}
      title="Watch on YouTube"
    >
      <svg width="11" height="8" viewBox="0 0 11 8" fill="currentColor">
        <path d="M10.8 1.25S10.67.33 10.29.0C9.82-.4 9.28-.4 9.04-.38 7.56-.29 5.5-.29 5.5-.29s-2.06 0-3.54.09C1.72-.1 1.18-.06.71.34.33.67.2 1.59.2 1.59S.07 2.69.07 3.8v1.03c0 1.1.13 2.2.13 2.2s.13.92.51 1.25c.47.43 1.09.42 1.37.46C3.08 8.8 5.5 8.82 5.5 8.82s2.06 0 3.54-.12c.24-.04.78-.05 1.25-.48.38-.33.51-1.25.51-1.25s.13-1.1.13-2.2V3.8c0-1.11-.13-2.21-.13-2.21zM4.35 5.45V2.27L7.3 3.87 4.35 5.45z"/>
      </svg>
      YT
    </button>
  );
}

function ExerciseRow({
  exercise,
  checked,
  onCheck,
  prValue,
  weightValue,
  onWeightChange,
  newPR,
  hasPR,
}: {
  exercise: Exercise;
  checked: boolean;
  onCheck: () => void;
  prValue: number;
  weightValue: string;
  onWeightChange: (val: string) => void;
  newPR: boolean;
  hasPR: boolean;
}) {
  const weight = parseFloat(weightValue) || 0;
  const isPRBeaten = hasPR && weight > 0 && weight > prValue;

  return (
    <div className={`flex items-start gap-2.5 py-2.5 border-b border-[#1a1a1a] last:border-0 transition-opacity ${checked ? 'opacity-40' : ''}`}>
      {/* Checkbox */}
      <button
        onClick={onCheck}
        className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border-2 transition-all ${
          checked ? 'bg-[#b5ff3e] border-[#b5ff3e]' : 'border-[#444] bg-transparent hover:border-[#666]'
        }`}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Name row */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <YoutubeButton url={exercise.url} />
          <span className="text-[13px] text-[#ddd] font-semibold leading-snug">{exercise.name}</span>
          {exercise.type !== 'none' && TYPE_BADGE[exercise.type] && (
            <span className="text-[10px]">{TYPE_BADGE[exercise.type]}</span>
          )}
          {exercise.setsReps && (
            <span className="text-[11px] text-[#555] font-mono">{exercise.setsReps}</span>
          )}
        </div>

        {exercise.notes && (
          <p className="text-[10px] text-[#444] mt-0.5 leading-snug">{exercise.notes}</p>
        )}

        {/* Weight + PR row */}
        {hasPR && (
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <div className="flex items-center bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg overflow-hidden">
              <input
                type="number"
                step="0.5"
                min="0"
                value={weightValue}
                onChange={e => onWeightChange(e.target.value)}
                onClick={e => e.stopPropagation()}
                placeholder="0"
                className="w-16 bg-transparent px-2 py-1.5 text-sm font-mono text-[#e0e0e0] outline-none text-right placeholder-[#333]"
              />
              <span className="text-[11px] text-[#555] pr-2 font-bold">kg</span>
            </div>

            <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide transition-all ${
              isPRBeaten
                ? 'bg-[#b5ff3e] text-black'
                : prValue > 0
                ? 'bg-[#1a1a1a] text-[#555] border border-[#2a2a2a]'
                : weight > 0
                ? 'bg-[#1a221a] text-[#4ade80] border border-[#2a3a2a]'
                : 'bg-[#1a1a1a] text-[#444] border border-[#222]'
            }`}>
              {isPRBeaten
                ? `🏆 NEW PR!`
                : prValue > 0
                ? `PR: ${prValue}kg`
                : weight > 0
                ? '🎯 First rep!'
                : 'No PR yet'}
            </div>

            {newPR && (
              <span className="text-[13px] animate-bounce">🎉</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function SectionBlock({
  section,
  checks,
  onCheck,
  prs,
  weights,
  onWeightChange,
  newPRs,
}: {
  section: WorkoutDay['sections'][0];
  checks: CheckMap;
  onCheck: (id: string) => void;
  prs: PRMap;
  weights: Record<string, string>;
  onWeightChange: (prKey: string, val: string) => void;
  newPRs: Set<string>;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const allChecked = section.exercises.every(e => checks[e.id]);
  const anyChecked = section.exercises.some(e => checks[e.id]);
  const color = SECTION_COLORS[section.type] || '#888';
  const icon = SECTION_ICONS[section.type] || '•';

  useEffect(() => {
    if (allChecked && section.exercises.length > 0) {
      const t = setTimeout(() => setCollapsed(true), 600);
      return () => clearTimeout(t);
    }
  }, [allChecked, section.exercises.length]);

  return (
    <div className="mb-2">
      <button
        className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors"
        style={{ background: collapsed && allChecked ? `${color}18` : '#1c1c1c' }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">{icon}</span>
          <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color }}>{section.title}</span>
          {!collapsed && anyChecked && !allChecked && (
            <span className="text-[10px] text-[#555]">{section.exercises.filter(e => checks[e.id]).length}/{section.exercises.length}</span>
          )}
        </div>
        {allChecked ? (
          <span className="text-[#b5ff3e] font-bold text-sm">✓</span>
        ) : (
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            className={`transition-transform ${collapsed ? '' : 'rotate-180'}`}
            style={{ color: '#444' }}
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {!collapsed && (
        <div className="px-3 pt-1 pb-2 border-l-2 ml-4" style={{ borderColor: `${color}30` }}>
          {section.exercises.map(exercise => (
            <ExerciseRow
              key={exercise.id}
              exercise={exercise}
              checked={!!checks[exercise.id]}
              onCheck={() => onCheck(exercise.id)}
              hasPR={!!exercise.prKey}
              prValue={exercise.prKey ? (prs[exercise.prKey] ?? 0) : 0}
              weightValue={exercise.prKey ? (weights[exercise.prKey] ?? '') : ''}
              onWeightChange={(val) => exercise.prKey && onWeightChange(exercise.prKey, val)}
              newPR={!!(exercise.prKey && newPRs.has(exercise.prKey))}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function DayCard({
  day,
  prs,
  onPRUpdate,
}: {
  day: WorkoutDay;
  prs: PRMap;
  onPRUpdate: (key: string, value: number) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [checks, setChecks] = useState<CheckMap>(() => {
    try { return JSON.parse(localStorage.getItem(`fit_checks_${day.id}`) || '{}'); } catch { return {}; }
  });
  const [weights, setWeights] = useState<Record<string, string>>(() => {
    try { return JSON.parse(localStorage.getItem('fit_weights') || '{}'); } catch { return {}; }
  });
  const [newPRs, setNewPRs] = useState<Set<string>>(new Set());

  const saveChecks = (c: CheckMap) => {
    setChecks(c);
    localStorage.setItem(`fit_checks_${day.id}`, JSON.stringify(c));
  };

  const handleCheck = (exerciseId: string) => {
    saveChecks({ ...checks, [exerciseId]: !checks[exerciseId] });
  };

  const handleWeightChange = (prKey: string, val: string) => {
    const newWeights = { ...weights, [prKey]: val };
    setWeights(newWeights);
    localStorage.setItem('fit_weights', JSON.stringify(newWeights));
    const numVal = parseFloat(val);
    const currentPR = prs[prKey] ?? 0;
    if (numVal > 0 && numVal > currentPR) {
      onPRUpdate(prKey, numVal);
      setNewPRs(prev => new Set([...prev, prKey]));
      setTimeout(() => {
        setNewPRs(prev => { const s = new Set(prev); s.delete(prKey); return s; });
      }, 3000);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    saveChecks({});
  };

  const workoutSection = day.sections.find(s => s.type === 'workout');
  const workoutExercises = workoutSection?.exercises || [];
  const checkedWorkout = workoutExercises.filter(e => checks[e.id]).length;
  const totalWorkout = workoutExercises.length;
  const totalAll = day.sections.reduce((s, sec) => s + sec.exercises.length, 0);
  const checkedAll = day.sections.reduce((s, sec) => s + sec.exercises.filter(e => checks[e.id]).length, 0);
  const allDone = totalAll > 0 && checkedAll === totalAll;
  const progress = totalWorkout > 0 ? checkedWorkout / totalWorkout : checkedAll / Math.max(totalAll, 1);

  useEffect(() => {
    if (allDone) {
      const today = new Date().toISOString().split('T')[0];
      const completions: string[] = JSON.parse(localStorage.getItem('fit_completions') || '[]');
      if (!completions.includes(today)) {
        completions.push(today);
        localStorage.setItem('fit_completions', JSON.stringify(completions));
      }
    }
  }, [allDone]);

  // Saturday (swim-only day) has no workout section — show swim progress
  const isSwimDay = !workoutSection;

  return (
    <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
      allDone
        ? 'border-[#b5ff3e] bg-[#0f1a05]'
        : expanded
        ? 'border-[#2a2a2a] bg-[#141414]'
        : 'border-[#1e1e1e] bg-[#0f0f0f]'
    }`}>
      {/* Card Header */}
      <button
        className="w-full px-4 py-4 flex items-center justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{day.emoji}</span>
          <div className="text-left">
            <p className={`text-[15px] font-black tracking-wider ${allDone ? 'text-[#b5ff3e]' : 'text-[#e0e0e0]'}`}>
              {day.name}
            </p>
            <p className="text-[10px] text-[#444] font-mono mt-0.5">
              {isSwimDay
                ? `${checkedAll}/${totalAll} done`
                : `${checkedWorkout}/${totalWorkout} workout · ${checkedAll}/${totalAll} total`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!allDone && (
            <div className="relative w-8 h-8">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="13" fill="none" stroke="#1e1e1e" strokeWidth="3"/>
                <circle
                  cx="16" cy="16" r="13" fill="none"
                  stroke={progress > 0 ? '#b5ff3e' : '#2a2a2a'}
                  strokeWidth="3"
                  strokeDasharray={`${2 * Math.PI * 13}`}
                  strokeDashoffset={`${2 * Math.PI * 13 * (1 - progress)}`}
                  strokeLinecap="round"
                  transform="rotate(-90 16 16)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-[#888]">
                {Math.round(progress * 100)}%
              </span>
            </div>
          )}
          {allDone && (
            <div className="w-8 h-8 rounded-full bg-[#b5ff3e] flex items-center justify-center">
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path d="M1 5L5 9L13 1" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            style={{ color: '#444' }}
          >
            <path d="M3 5L8 10L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="px-4 pb-4">
          {day.sections.map(section => (
            <SectionBlock
              key={`${day.id}-${section.type}-${section.title}`}
              section={section}
              checks={checks}
              onCheck={handleCheck}
              prs={prs}
              weights={weights}
              onWeightChange={handleWeightChange}
              newPRs={newPRs}
            />
          ))}
          <button
            onClick={handleReset}
            className="w-full mt-3 py-2.5 rounded-xl border border-[#2a2a2a] text-[#555] text-[10px] font-bold tracking-widest uppercase hover:text-[#888] hover:border-[#444] transition-colors"
          >
            Reset Day
          </button>
        </div>
      )}
    </div>
  );
}
