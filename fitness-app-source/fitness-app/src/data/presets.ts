import type { MacroEntry } from '../types';

export const PRESET_MEALS: Omit<MacroEntry, 'id'>[] = [
  { name: 'Breakfast Base (5 eggs + 1 scoop whey)', kcal: 550, protein: 57, carbs: 8, fat: 28 },
  { name: 'Whey Shake', kcal: 120, protein: 27, carbs: 3, fat: 2 },
  { name: 'Dal + 2 Roti', kcal: 350, protein: 12, carbs: 58, fat: 6 },
  { name: 'Paneer 100g', kcal: 265, protein: 18, carbs: 4, fat: 20 },
  { name: 'Curd 200g', kcal: 120, protein: 7, carbs: 8, fat: 4 },
  { name: 'Soy Chunks 50g dry', kcal: 180, protein: 26, carbs: 10, fat: 1 },
];

export const TARGETS = {
  kcal: 2000,
  protein: 145,
  carbs: 180,
  fat: 55,
};
