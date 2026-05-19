import type { WorkoutDay } from '../types';

export const PPL_SPLIT: WorkoutDay[] = [
  {
    id: 'ppl-push-a',
    name: 'PUSH A',
    shortName: 'PUSH A',
    emoji: '🏋️',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'ppl-pa-wu-1', name: 'Arm Circles', url: 'https://www.youtube.com/results?search_query=arm+circles+warm+up', type: 'none', notes: '10 forward, 10 backward' },
          { id: 'ppl-pa-wu-2', name: 'Band Pull-Aparts', url: 'https://www.youtube.com/results?search_query=band+pull+aparts+form', type: 'none', notes: '15 x 2' },
          { id: 'ppl-pa-wu-3', name: 'Light Cable Fly / Pec Deck', url: 'https://www.youtube.com/results?search_query=pec+deck+fly+form+technique', type: 'none', notes: 'Activation only, very light — 15 x 2' },
          { id: 'ppl-pa-wu-4', name: 'Push-Up Hold at Bottom', url: 'https://www.youtube.com/results?search_query=push+up+bottom+hold+chest+activation', type: 'none', notes: '20s x 2' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'ppl-pa-w-1', name: 'Flat Bench Press', url: 'https://www.youtube.com/watch?v=vcBig73ojpE', setsReps: '4 × 6–8', prKey: 'flat-bench-press', type: 'compound', notes: 'Primary chest compound' },
          { id: 'ppl-pa-w-2', name: 'Incline Dumbbell Press', url: 'https://www.youtube.com/results?search_query=jeff+nippard+incline+dumbbell+press+form', setsReps: '3 × 8–10', prKey: 'incline-db-press', type: 'compound', notes: 'Upper chest' },
          { id: 'ppl-pa-w-3', name: 'Decline Crossover', url: 'https://www.youtube.com/results?search_query=high+to+low+cable+fly+form+technique', setsReps: '3 × 12–15', prKey: 'decline-crossover', type: 'isolation', notes: 'Feel the stretch' },
          { id: 'ppl-pa-w-4', name: 'Pec Deck Fly', url: 'https://www.youtube.com/results?search_query=pec+deck+fly+machine+form+technique', setsReps: '2 × 12–15', prKey: 'pec-deck-fly', type: 'isolation', notes: '2s slow eccentric' },
          { id: 'ppl-pa-w-5', name: 'Seated DB Shoulder Press', url: 'https://www.youtube.com/results?search_query=dumbbell+shoulder+press+seated+form+technique', setsReps: '2 × 10–12', prKey: 'seated-db-shoulder-press', type: 'compound', notes: 'Front delt primer for the week' },
          { id: 'ppl-pa-w-6', name: 'Lateral Raises', url: 'https://www.youtube.com/watch?v=SgyUoY0IZ7A', setsReps: '3 × 12–15', prKey: 'lateral-raises', type: 'isolation', notes: '3s slow eccentric' },
          { id: 'ppl-pa-w-7', name: 'Cable Tricep Pushdown', url: 'https://www.youtube.com/results?search_query=cable+tricep+pushdown+form+technique+lockout', setsReps: '3 × 12–15', prKey: 'cable-tricep-pushdown', type: 'isolation', notes: 'Full lockout' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'ppl-pa-s-1', name: 'Doorway Chest Stretch', url: 'https://www.youtube.com/results?search_query=doorway+chest+stretch+how+to', type: 'none', notes: '30s x 2' },
          { id: 'ppl-pa-s-2', name: 'Cross-Body Shoulder Stretch', url: 'https://www.youtube.com/results?search_query=cross+body+shoulder+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'ppl-pa-s-3', name: 'Overhead Tricep Stretch', url: 'https://www.youtube.com/results?search_query=overhead+tricep+stretch+how+to', type: 'none', notes: '30s each arm' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'ppl-pa-c-1', name: 'Stationary Bike', url: 'https://www.youtube.com/results?search_query=stationary+bike+cardio+technique', type: 'none', notes: '15 min · 70–80 RPM, low resistance · 65% max HR' },
        ],
      },
    ],
  },
  {
    id: 'ppl-pull-a',
    name: 'PULL A',
    shortName: 'PULL A',
    emoji: '🦅',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'ppl-la-wu-1', name: 'Dead Hangs', url: 'https://www.youtube.com/results?search_query=dead+hang+how+to+scapular', type: 'none', notes: '25s x 2' },
          { id: 'ppl-la-wu-2', name: 'Scapular Retractions', url: 'https://www.youtube.com/results?search_query=scapular+retraction+exercise+how+to', type: 'none', notes: '15 x 2' },
          { id: 'ppl-la-wu-3', name: 'Face Pulls with Band', url: 'https://www.youtube.com/results?search_query=band+face+pull+form+technique', type: 'none', notes: '15 x 2' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'ppl-la-w-1', name: 'Lat Pulldown', url: 'https://www.youtube.com/results?search_query=jeff+nippard+lat+pulldown+technique+form', setsReps: '4 × 8–10', prKey: 'lat-pulldown', type: 'compound', notes: 'Primary vertical pull' },
          { id: 'ppl-la-w-2', name: 'Barbell Row', url: 'https://www.youtube.com/results?search_query=jeff+nippard+barbell+row+technique+form', setsReps: '4 × 6–8', prKey: 'barbell-row', type: 'compound', notes: 'Primary horizontal pull' },
          { id: 'ppl-la-w-3', name: 'Seated Cable Row', url: 'https://www.youtube.com/results?search_query=seated+cable+row+form+technique', setsReps: '3 × 10–12', prKey: 'seated-cable-row', type: 'isolation', notes: 'Squeeze scapulae at peak' },
          { id: 'ppl-la-w-4', name: 'Straight Arm Pulldown', url: 'https://www.youtube.com/results?search_query=straight+arm+pulldown+lat+isolation+form', setsReps: '2 × 12–15', prKey: 'straight-arm-pulldown', type: 'isolation', notes: 'Arms stay straight — pure lat isolation' },
          { id: 'ppl-la-w-5', name: 'Barbell Bicep Curl', url: 'https://www.youtube.com/watch?v=i1YgFZB6alI', setsReps: '3 × 8–10', prKey: 'barbell-curl', type: 'isolation', notes: 'Main bicep compound' },
          { id: 'ppl-la-w-6', name: 'Hammer Curl', url: 'https://www.youtube.com/results?search_query=hammer+curl+form+brachialis+technique', setsReps: '2 × 10–12', prKey: 'hammer-curl', type: 'isolation', notes: 'Brachialis emphasis' },
          { id: 'ppl-la-w-7', name: 'Hanging Leg Raise', url: 'https://www.youtube.com/results?search_query=hanging+leg+raise+form+technique+abs', setsReps: '3 × 10–12', type: 'isolation', notes: 'Controlled, no swing' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'ppl-la-s-1', name: "Child's Pose Lat Stretch", url: 'https://www.youtube.com/results?search_query=childs+pose+lat+stretch+how+to', type: 'none', notes: '45s' },
          { id: 'ppl-la-s-2', name: 'Doorway Rear Delt Stretch', url: 'https://www.youtube.com/results?search_query=doorway+rear+delt+stretch+how+to', type: 'none', notes: '30s each side' },
          { id: 'ppl-la-s-3', name: 'Cat-Cow', url: 'https://www.youtube.com/results?search_query=cat+cow+stretch+how+to', type: 'none', notes: '10 reps slow' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'ppl-la-c-1', name: 'Rowing Machine', url: 'https://www.youtube.com/results?search_query=rowing+machine+technique+how+to', type: 'none', notes: '15 min · 18–20 strokes/min · Reinforces the pulling pattern' },
        ],
      },
    ],
  },
  {
    id: 'ppl-legs-a',
    name: 'LEGS A',
    shortName: 'LEGS A',
    emoji: '🦵',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'ppl-lga-wu-1', name: 'Leg Swings', url: 'https://www.youtube.com/results?search_query=leg+swings+dynamic+warm+up+how+to', type: 'none', notes: '15 forward-back, 15 side-to-side each leg' },
          { id: 'ppl-lga-wu-2', name: 'Cossack Squats', url: 'https://www.youtube.com/results?search_query=cossack+squat+mobility+how+to', type: 'none', notes: '10 each side' },
          { id: 'ppl-lga-wu-3', name: 'Hamstring Scoops', url: 'https://www.youtube.com/results?search_query=hamstring+scoops+dynamic+warm+up', type: 'none', notes: '10 each leg' },
          { id: 'ppl-lga-wu-4', name: 'Bodyweight Squats', url: 'https://www.youtube.com/results?search_query=bodyweight+squat+form+technique', type: 'none', notes: '30 x 2' },
          { id: 'ppl-lga-wu-5', name: 'Kneeling Hip Flexor Lunge', url: 'https://www.youtube.com/results?search_query=kneeling+hip+flexor+lunge+stretch+how+to', type: 'none', notes: '30s each side' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'ppl-lga-w-1', name: 'Barbell Squat', url: 'https://www.youtube.com/watch?v=bEv6CCg2BC8', setsReps: '4 × 6–8', prKey: 'barbell-squat', type: 'compound' },
          { id: 'ppl-lga-w-2', name: 'Leg Press', url: 'https://www.youtube.com/results?search_query=jeff+nippard+leg+press+form+foot+placement', setsReps: '3 × 8–10', prKey: 'leg-press', type: 'compound' },
          { id: 'ppl-lga-w-3', name: 'Leg Extensions', url: 'https://www.youtube.com/results?search_query=leg+extension+machine+form+technique+quad', setsReps: '3 × 12–15', prKey: 'leg-extensions', type: 'isolation' },
          { id: 'ppl-lga-w-4', name: 'Romanian Deadlift', url: 'https://www.youtube.com/watch?v=_oyxCn2iSjU', setsReps: '3 × 8–10', prKey: 'romanian-deadlift', type: 'compound', notes: 'Lighter than Legs B — hamstring primer' },
          { id: 'ppl-lga-w-5', name: 'Hip Thrust', url: 'https://www.youtube.com/results?search_query=barbell+hip+thrust+form+technique+glutes', setsReps: '2 × 12–15', prKey: 'hip-thrust', type: 'optional', notes: 'Glute activation, optional' },
          { id: 'ppl-lga-w-6', name: 'Calf Raises', url: 'https://www.youtube.com/results?search_query=standing+calf+raise+form+technique+full+range', setsReps: '4 × 15–20', prKey: 'calf-raises', type: 'isolation', notes: 'Full ROM' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'ppl-lga-s-1', name: 'Standing Quad Stretch', url: 'https://www.youtube.com/results?search_query=standing+quad+stretch+how+to', type: 'none', notes: '30s each' },
          { id: 'ppl-lga-s-2', name: 'Seated Hamstring Stretch', url: 'https://www.youtube.com/results?search_query=seated+hamstring+stretch+how+to+hinge', type: 'none', notes: '45s each leg' },
          { id: 'ppl-lga-s-3', name: 'Kneeling Hip Flexor Stretch', url: 'https://www.youtube.com/results?search_query=kneeling+hip+flexor+lunge+stretch+how+to', type: 'none', notes: '45s each side' },
          { id: 'ppl-lga-s-4', name: 'Wall Calf Stretch', url: 'https://www.youtube.com/results?search_query=wall+calf+stretch+straight+bent+knee', type: 'none', notes: '30s each — straight + bent knee' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'ppl-lga-c-1', name: 'Slow Treadmill Walk', url: 'https://www.youtube.com/results?search_query=treadmill+walking+form', type: 'none', notes: '10 min ONLY · Flat, zero incline · Recovery flush only' },
        ],
      },
    ],
  },
  {
    id: 'ppl-push-b',
    name: 'PUSH B',
    shortName: 'PUSH B',
    emoji: '🏋️',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'ppl-pb-wu-1', name: 'Shoulder CARs', url: 'https://www.youtube.com/results?search_query=shoulder+CARs+controlled+articular+rotation+how+to', type: 'none', notes: '5 slow full circles each arm' },
          { id: 'ppl-pb-wu-2', name: 'Band Pull-Aparts', url: 'https://www.youtube.com/results?search_query=band+pull+aparts+form', type: 'none', notes: '15 x 2' },
          { id: 'ppl-pb-wu-3', name: 'Face Pulls with Band', url: 'https://www.youtube.com/results?search_query=band+face+pull+form+technique', type: 'none', notes: '15 x 2' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'ppl-pb-w-1', name: 'Barbell Overhead Press', url: 'https://www.youtube.com/watch?v=_RlRDWO2jfg', setsReps: '4 × 6–8', prKey: 'barbell-ohp', type: 'compound', notes: 'Heaviest shoulder compound' },
          { id: 'ppl-pb-w-2', name: 'Lateral Raises', url: 'https://www.youtube.com/watch?v=SgyUoY0IZ7A', setsReps: '4 × 12–15', prKey: 'lateral-raises', type: 'isolation', notes: '3s slow eccentric' },
          { id: 'ppl-pb-w-3', name: 'Rear Delt Machine', url: 'https://www.youtube.com/results?search_query=rear+delt+machine+form+technique', setsReps: '3 × 12–15', prKey: 'rear-delt-machine', type: 'isolation', notes: "Don't neglect rear delts" },
          { id: 'ppl-pb-w-4', name: 'Cable Face Pulls', url: 'https://www.youtube.com/results?search_query=cable+face+pull+form+rear+delt+external+rotation', setsReps: '2 × 15–20', prKey: 'cable-face-pulls', type: 'isolation', notes: 'Shoulder health — never skip' },
          { id: 'ppl-pb-w-5', name: 'Incline Dumbbell Press', url: 'https://www.youtube.com/results?search_query=jeff+nippard+incline+dumbbell+press+form', setsReps: '3 × 8–10', prKey: 'incline-db-press', type: 'compound', notes: 'Chest top-up from Push A' },
          { id: 'ppl-pb-w-6', name: 'Skull Crushers', url: 'https://www.youtube.com/watch?v=popGXI-qs98', setsReps: '3 × 8–10', prKey: 'skull-crushers', type: 'compound', notes: 'Elbows tight, long head' },
          { id: 'ppl-pb-w-7', name: 'Overhead DB Tricep Extension', url: 'https://www.youtube.com/results?search_query=overhead+dumbbell+tricep+extension+form+long+head', setsReps: '3 × 12–15', prKey: 'overhead-db-tricep-extension', type: 'isolation', notes: 'Long head stretch' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'ppl-pb-s-1', name: 'Cross-Body Shoulder Stretch', url: 'https://www.youtube.com/results?search_query=cross+body+shoulder+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'ppl-pb-s-2', name: 'Neck Rolls', url: 'https://www.youtube.com/results?search_query=neck+rolls+stretch+how+to+safely', type: 'none', notes: '10 each direction — slow, controlled' },
          { id: 'ppl-pb-s-3', name: 'Thread the Needle', url: 'https://www.youtube.com/results?search_query=thread+the+needle+thoracic+stretch', type: 'none', notes: '30s each side' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'ppl-pb-c-1', name: 'Elliptical or Treadmill', url: 'https://www.youtube.com/results?search_query=elliptical+machine+technique', type: 'none', notes: '15–20 min · 60–65% max HR · Elliptical preferred' },
        ],
      },
    ],
  },
  {
    id: 'ppl-pull-b',
    name: 'PULL B',
    shortName: 'PULL B',
    emoji: '🦅',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'ppl-lb-wu-1', name: 'Dead Hangs', url: 'https://www.youtube.com/results?search_query=dead+hang+how+to+scapular', type: 'none', notes: '20s x 2' },
          { id: 'ppl-lb-wu-2', name: 'Scapular Retractions', url: 'https://www.youtube.com/results?search_query=scapular+retraction+exercise+how+to', type: 'none', notes: '15 x 2' },
          { id: 'ppl-lb-wu-3', name: 'Light Reverse Curls', url: 'https://www.youtube.com/results?search_query=reverse+barbell+curl+form+technique', type: 'none', notes: 'Forearm activation — 15 reps' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'ppl-lb-w-1', name: 'Pull-Ups', url: 'https://www.youtube.com/results?search_query=pull+up+form+technique+lat+activation', setsReps: '3 × 6–10', prKey: 'pull-ups', type: 'compound', notes: 'Different vertical pull to Lat Pulldown' },
          { id: 'ppl-lb-w-2', name: 'Wide Grip Cable Row', url: 'https://www.youtube.com/results?search_query=wide+grip+cable+row+upper+back+form', setsReps: '3 × 10–12', prKey: 'wide-grip-cable-row', type: 'isolation', notes: 'Elbows flare, upper back emphasis' },
          { id: 'ppl-lb-w-3', name: 'Single-Arm DB Row', url: 'https://www.youtube.com/results?search_query=single+arm+dumbbell+row+form+technique+lat', setsReps: '3 × 10–12 each', prKey: 'single-arm-db-row', type: 'isolation', notes: 'Full stretch at bottom, feel the lat' },
          { id: 'ppl-lb-w-4', name: 'Rear Delt Machine', url: 'https://www.youtube.com/results?search_query=rear+delt+machine+form+technique', setsReps: '3 × 12–15', prKey: 'rear-delt-machine', type: 'isolation', notes: '2s slow eccentric' },
          { id: 'ppl-lb-w-5', name: 'Incline DB Curl', url: 'https://www.youtube.com/results?search_query=seated+incline+dumbbell+curl+long+head+bicep+form', setsReps: '3 × 10–12', prKey: 'incline-db-curl', type: 'isolation', notes: 'Long head stretch' },
          { id: 'ppl-lb-w-6', name: 'One-Arm Preacher Curl', url: 'https://www.youtube.com/results?search_query=single+arm+preacher+curl+form+technique', setsReps: '3 × 10–12', prKey: 'preacher-curl', type: 'isolation', notes: 'Peak focused' },
          { id: 'ppl-lb-w-7', name: 'Reverse Barbell Curl', url: 'https://www.youtube.com/results?search_query=reverse+barbell+curl+form+brachialis', setsReps: '2 × 12–15', prKey: 'reverse-curl', type: 'optional', notes: 'Brachialis + forearm, optional' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'ppl-lb-s-1', name: "Child's Pose Lat Stretch", url: 'https://www.youtube.com/results?search_query=childs+pose+lat+stretch+how+to', type: 'none', notes: '45s' },
          { id: 'ppl-lb-s-2', name: 'Standing Bicep Wall Stretch', url: 'https://www.youtube.com/results?search_query=standing+bicep+wall+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'ppl-lb-s-3', name: 'Thoracic Spine Rotation', url: 'https://www.youtube.com/results?search_query=thoracic+spine+rotation+mobility+exercise', type: 'none', notes: '10 each side' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'ppl-lb-c-1', name: 'Treadmill or Bike', url: 'https://www.youtube.com/results?search_query=cardio+steady+state+technique', type: 'none', notes: '15–20 min · 65% max HR · Wind down the pull week' },
        ],
      },
    ],
  },
  {
    id: 'ppl-legs-b',
    name: 'LEGS B',
    shortName: 'LEGS B',
    emoji: '🦵',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'ppl-lgb-wu-1', name: 'Leg Swings', url: 'https://www.youtube.com/results?search_query=leg+swings+dynamic+warm+up+how+to', type: 'none', notes: '15 each direction, each leg' },
          { id: 'ppl-lgb-wu-2', name: 'Cossack Squats', url: 'https://www.youtube.com/results?search_query=cossack+squat+mobility+how+to', type: 'none', notes: '10 each side' },
          { id: 'ppl-lgb-wu-3', name: 'Hamstring Scoops', url: 'https://www.youtube.com/results?search_query=hamstring+scoops+dynamic+warm+up', type: 'none', notes: '10 each leg' },
          { id: 'ppl-lgb-wu-4', name: 'Kneeling Hip Flexor Lunge', url: 'https://www.youtube.com/results?search_query=kneeling+hip+flexor+lunge+stretch+how+to', type: 'none', notes: '45s each side' },
          { id: 'ppl-lgb-wu-5', name: 'Glute Bridges', url: 'https://www.youtube.com/results?search_query=glute+bridge+bodyweight+form+how+to', type: 'none', notes: 'Bodyweight — 20 x 2' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'ppl-lgb-w-1', name: 'Hip Thrust', url: 'https://www.youtube.com/results?search_query=barbell+hip+thrust+form+technique+glutes', setsReps: '4 × 8–12', prKey: 'hip-thrust', type: 'compound', notes: 'Glute compound — squeeze at the top' },
          { id: 'ppl-lgb-w-2', name: 'Romanian Deadlift', url: 'https://www.youtube.com/watch?v=_oyxCn2iSjU', setsReps: '4 × 6–8', prKey: 'romanian-deadlift', type: 'compound', notes: 'Heavier than Legs A — primary hamstring hinge' },
          { id: 'ppl-lgb-w-3', name: 'Seated Hamstring Curl', url: 'https://www.youtube.com/results?search_query=seated+lying+hamstring+curl+machine+form', setsReps: '3 × 10–12', prKey: 'hamstring-curl', type: 'isolation' },
          { id: 'ppl-lgb-w-4', name: 'Weighted Lunges', url: 'https://www.youtube.com/results?search_query=weighted+dumbbell+lunge+form+technique', setsReps: '3 × 10–12 each', prKey: 'weighted-lunges', type: 'isolation', notes: 'Torso upright, knee tracks over toe' },
          { id: 'ppl-lgb-w-5', name: 'Cable Glute Kickbacks', url: 'https://www.youtube.com/results?search_query=cable+glute+kickback+form+technique', setsReps: '2 × 15 each', type: 'optional', notes: 'Glute isolation, optional' },
          { id: 'ppl-lgb-w-6', name: 'Calf Raises', url: 'https://www.youtube.com/results?search_query=standing+calf+raise+form+technique+full+range', setsReps: '4 × 15–20', prKey: 'calf-raises', type: 'isolation', notes: 'Full ROM, pause at bottom' },
          { id: 'ppl-lgb-w-7', name: 'Cable Crunch', url: 'https://www.youtube.com/results?search_query=cable+crunch+weighted+abs+form+technique', setsReps: '3 × 12–15', prKey: 'cable-crunch', type: 'isolation', notes: 'Weighted abs' },
          { id: 'ppl-lgb-w-8', name: 'Hanging Knee Raise', url: 'https://www.youtube.com/results?search_query=hanging+knee+raise+form+technique+abs', setsReps: '2 × 10–12', type: 'isolation' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'ppl-lgb-s-1', name: 'Pigeon Pose', url: 'https://www.youtube.com/results?search_query=pigeon+pose+hip+glute+stretch+how+to', type: 'none', notes: '60s each side' },
          { id: 'ppl-lgb-s-2', name: 'Seated Hamstring Stretch', url: 'https://www.youtube.com/results?search_query=seated+hamstring+stretch+how+to+hinge', type: 'none', notes: '45s each leg' },
          { id: 'ppl-lgb-s-3', name: 'Standing Quad Stretch', url: 'https://www.youtube.com/results?search_query=standing+quad+stretch+how+to', type: 'none', notes: '30s each' },
          { id: 'ppl-lgb-s-4', name: 'Butterfly Stretch', url: 'https://www.youtube.com/results?search_query=butterfly+groin+inner+thigh+stretch+how+to', type: 'none', notes: '45s' },
          { id: 'ppl-lgb-s-5', name: 'Wall Calf Stretch', url: 'https://www.youtube.com/results?search_query=wall+calf+stretch+straight+bent+knee', type: 'none', notes: '30s each — straight + bent knee' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'ppl-lgb-c-1', name: 'Slow Treadmill Walk', url: 'https://www.youtube.com/results?search_query=treadmill+walking+form', type: 'none', notes: '10 min ONLY · Flat, zero incline · Recovery flush only' },
        ],
      },
    ],
  },
];
