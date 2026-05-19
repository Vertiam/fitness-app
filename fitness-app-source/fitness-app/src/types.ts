export type SplitType = 'bro' | 'ppl' | 'home';
export type SectionType = 'warmup' | 'workout' | 'stretching' | 'cardio' | 'swim';
export type ExerciseType = 'compound' | 'isolation' | 'optional' | 'none';

export interface Exercise {
  id: string;
  name: string;
  url: string;
  setsReps?: string;
  prKey?: string;
  type: ExerciseType;
  notes?: string;
}

export interface Section {
  type: SectionType;
  title: string;
  exercises: Exercise[];
}

export interface WorkoutDay {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  sections: Section[];
}

export interface MacroEntry {
  id: string;
  name: string;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface PRMap {
  [prKey: string]: number;
}

export interface CheckMap {
  [exerciseId: string]: boolean;
}
