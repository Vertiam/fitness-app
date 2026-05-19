import type { WorkoutDay } from '../types';

export const BRO_SPLIT: WorkoutDay[] = [
  {
    id: 'bro-chest',
    name: 'CHEST',
    shortName: 'CHEST',
    emoji: '🏋️',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'bro-chest-wu-1', name: 'Arm Circles', url: 'https://www.youtube.com/results?search_query=arm+circles+warm+up', type: 'none', notes: '10 forward, 10 backward' },
          { id: 'bro-chest-wu-2', name: 'Band Pull-Aparts', url: 'https://www.youtube.com/results?search_query=band+pull+aparts+form', type: 'none', notes: '15 x 2' },
          { id: 'bro-chest-wu-3', name: 'Light Cable Fly / Pec Deck', url: 'https://www.youtube.com/results?search_query=pec+deck+fly+form+technique', type: 'none', notes: 'Activation only, very light — 15 x 2' },
          { id: 'bro-chest-wu-4', name: 'Push-Up Hold at Bottom', url: 'https://www.youtube.com/results?search_query=push+up+bottom+hold+chest+activation', type: 'none', notes: '20s x 2' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'bro-chest-w-1', name: 'Flat Bench Press', url: 'https://www.youtube.com/watch?v=vcBig73ojpE', setsReps: '4 × 6–8', prKey: 'flat-bench-press', type: 'compound' },
          { id: 'bro-chest-w-2', name: 'Incline Dumbbell Press', url: 'https://www.youtube.com/results?search_query=jeff+nippard+incline+dumbbell+press+form', setsReps: '3 × 8–10', prKey: 'incline-db-press', type: 'compound' },
          { id: 'bro-chest-w-3', name: 'Decline Crossover', url: 'https://www.youtube.com/results?search_query=high+to+low+cable+fly+form+technique', setsReps: '3 × 12–15', prKey: 'decline-crossover', type: 'isolation' },
          { id: 'bro-chest-w-4', name: 'Pec Deck Fly', url: 'https://www.youtube.com/results?search_query=pec+deck+fly+machine+form+technique', setsReps: '3 × 12–15', prKey: 'pec-deck-fly', type: 'isolation', notes: '2s slow eccentric' },
          { id: 'bro-chest-w-5', name: 'Chest Dips', url: 'https://www.youtube.com/results?search_query=chest+dips+form+lean+forward+technique', setsReps: '2 × 10–12', type: 'isolation', notes: 'Lean forward, bodyweight' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'bro-chest-s-1', name: 'Doorway Chest Stretch', url: 'https://www.youtube.com/results?search_query=doorway+chest+stretch+how+to', type: 'none', notes: '30s x 2' },
          { id: 'bro-chest-s-2', name: 'Cross-Body Shoulder Stretch', url: 'https://www.youtube.com/results?search_query=cross+body+shoulder+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'bro-chest-s-3', name: 'Thread the Needle', url: 'https://www.youtube.com/results?search_query=thread+the+needle+thoracic+stretch', type: 'none', notes: '30s each side' },
          { id: 'bro-chest-s-4', name: 'Wrist Flexor Stretch', url: 'https://www.youtube.com/results?search_query=wrist+flexor+stretch+how+to', type: 'none', notes: '20s each' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'bro-chest-c-1', name: 'Stationary Bike', url: 'https://www.youtube.com/results?search_query=stationary+bike+cardio+technique', type: 'none', notes: '15–20 min · 70–80 RPM, low resistance · Target 65–70% max HR' },
        ],
      },
    ],
  },
  {
    id: 'bro-back',
    name: 'BACK',
    shortName: 'BACK',
    emoji: '🦅',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'bro-back-wu-1', name: 'Dead Hangs', url: 'https://www.youtube.com/results?search_query=dead+hang+how+to+scapular', type: 'none', notes: '25s x 2' },
          { id: 'bro-back-wu-2', name: 'Scapular Retractions', url: 'https://www.youtube.com/results?search_query=scapular+retraction+exercise+how+to', type: 'none', notes: '15 x 2' },
          { id: 'bro-back-wu-3', name: 'Face Pulls with Band', url: 'https://www.youtube.com/results?search_query=band+face+pull+form+technique', type: 'none', notes: '15 x 2' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'bro-back-w-1', name: 'Lat Pulldown', url: 'https://www.youtube.com/results?search_query=jeff+nippard+lat+pulldown+technique+form', setsReps: '4 × 8–10', prKey: 'lat-pulldown', type: 'compound' },
          { id: 'bro-back-w-2', name: 'Barbell Row', url: 'https://www.youtube.com/results?search_query=jeff+nippard+barbell+row+technique+form', setsReps: '3 × 6–8', prKey: 'barbell-row', type: 'compound', notes: 'Brace your core' },
          { id: 'bro-back-w-3', name: 'Seated Cable Row', url: 'https://www.youtube.com/results?search_query=seated+cable+row+form+technique', setsReps: '3 × 10–12', prKey: 'seated-cable-row', type: 'isolation', notes: 'Squeeze scapulae at peak' },
          { id: 'bro-back-w-4', name: 'Wide Grip Cable Row', url: 'https://www.youtube.com/results?search_query=wide+grip+cable+row+upper+back+form', setsReps: '2 × 12–15', prKey: 'wide-grip-cable-row', type: 'isolation', notes: 'Elbows flare out, upper back emphasis' },
          { id: 'bro-back-w-5', name: 'Rear Delt Machine', url: 'https://www.youtube.com/results?search_query=rear+delt+machine+form+technique', setsReps: '3 × 12–15', prKey: 'rear-delt-machine', type: 'isolation', notes: '2s slow eccentric' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'bro-back-s-1', name: "Child's Pose Lat Stretch", url: 'https://www.youtube.com/results?search_query=childs+pose+lat+stretch+how+to', type: 'none', notes: '45s' },
          { id: 'bro-back-s-2', name: 'Doorway Rear Delt Stretch', url: 'https://www.youtube.com/results?search_query=doorway+rear+delt+stretch+how+to', type: 'none', notes: '30s each side' },
          { id: 'bro-back-s-3', name: 'Thoracic Spine Rotation', url: 'https://www.youtube.com/results?search_query=thoracic+spine+rotation+mobility+exercise', type: 'none', notes: '10 each side' },
          { id: 'bro-back-s-4', name: 'Cat-Cow', url: 'https://www.youtube.com/results?search_query=cat+cow+stretch+how+to', type: 'none', notes: '10 reps slow' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'bro-back-c-1', name: 'Rowing Machine', url: 'https://www.youtube.com/results?search_query=rowing+machine+technique+how+to', type: 'none', notes: '15–20 min · 18–20 strokes/min · Reinforces pulling pattern' },
        ],
      },
    ],
  },
  {
    id: 'bro-legs',
    name: 'LEGS',
    shortName: 'LEGS',
    emoji: '🦵',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'bro-legs-wu-1', name: 'Leg Swings', url: 'https://www.youtube.com/results?search_query=leg+swings+dynamic+warm+up+how+to', type: 'none', notes: '15 forward-back, 15 side-to-side each leg' },
          { id: 'bro-legs-wu-2', name: 'Cossack Squats', url: 'https://www.youtube.com/results?search_query=cossack+squat+mobility+how+to', type: 'none', notes: '10 each side' },
          { id: 'bro-legs-wu-3', name: 'Hamstring Scoops', url: 'https://www.youtube.com/results?search_query=hamstring+scoops+dynamic+warm+up', type: 'none', notes: '10 each leg' },
          { id: 'bro-legs-wu-4', name: 'Kneeling Hip Flexor Lunge', url: 'https://www.youtube.com/results?search_query=kneeling+hip+flexor+lunge+stretch+how+to', type: 'none', notes: '30s each side' },
          { id: 'bro-legs-wu-5', name: 'Bodyweight Squats', url: 'https://www.youtube.com/results?search_query=bodyweight+squat+form+technique', type: 'none', notes: '30 x 2' },
          { id: 'bro-legs-wu-6', name: 'Walking Lunges', url: 'https://www.youtube.com/results?search_query=walking+lunges+form+technique', type: 'none', notes: 'Bodyweight — 10 each leg' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'bro-legs-w-1', name: 'Barbell Squat', url: 'https://www.youtube.com/watch?v=bEv6CCg2BC8', setsReps: '4 × 6–8', prKey: 'barbell-squat', type: 'compound' },
          { id: 'bro-legs-w-2', name: 'Leg Press', url: 'https://www.youtube.com/results?search_query=jeff+nippard+leg+press+form+foot+placement', setsReps: '3 × 8–10', prKey: 'leg-press', type: 'compound' },
          { id: 'bro-legs-w-3', name: 'Leg Extensions', url: 'https://www.youtube.com/results?search_query=leg+extension+machine+form+technique+quad', setsReps: '3 × 12–15 + F1', prKey: 'leg-extensions', type: 'isolation', notes: 'F1 = one dropset after last set' },
          { id: 'bro-legs-w-4', name: 'Romanian Deadlift', url: 'https://www.youtube.com/watch?v=_oyxCn2iSjU', setsReps: '3 × 6–8', prKey: 'romanian-deadlift', type: 'compound', notes: 'Control the eccentric, feel the hamstrings' },
          { id: 'bro-legs-w-5', name: 'Hamstring Curl', url: 'https://www.youtube.com/results?search_query=seated+lying+hamstring+curl+machine+form', setsReps: '3 × 10–12', prKey: 'hamstring-curl', type: 'isolation' },
          { id: 'bro-legs-w-6', name: 'Weighted Lunges', url: 'https://www.youtube.com/results?search_query=weighted+dumbbell+lunge+form+technique', setsReps: '2 × 10–12 each', prKey: 'weighted-lunges', type: 'isolation', notes: 'Torso upright' },
          { id: 'bro-legs-w-7', name: 'Calf Raises', url: 'https://www.youtube.com/results?search_query=standing+calf+raise+form+technique+full+range', setsReps: '4 × 15–20', prKey: 'calf-raises', type: 'isolation', notes: 'Full ROM, pause at the bottom stretch' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'bro-legs-s-1', name: 'Pigeon Pose', url: 'https://www.youtube.com/results?search_query=pigeon+pose+hip+glute+stretch+how+to', type: 'none', notes: '60s each side' },
          { id: 'bro-legs-s-2', name: 'Seated Hamstring Stretch', url: 'https://www.youtube.com/results?search_query=seated+hamstring+stretch+how+to+hinge', type: 'none', notes: '45s each leg' },
          { id: 'bro-legs-s-3', name: 'Standing Quad Stretch', url: 'https://www.youtube.com/results?search_query=standing+quad+stretch+how+to', type: 'none', notes: '30s each' },
          { id: 'bro-legs-s-4', name: 'Kneeling Hip Flexor Stretch', url: 'https://www.youtube.com/results?search_query=kneeling+hip+flexor+lunge+stretch+how+to', type: 'none', notes: '45s each side' },
          { id: 'bro-legs-s-5', name: 'Wall Calf Stretch', url: 'https://www.youtube.com/results?search_query=wall+calf+stretch+straight+bent+knee', type: 'none', notes: '30s each — straight + bent knee' },
          { id: 'bro-legs-s-6', name: 'Butterfly Stretch', url: 'https://www.youtube.com/results?search_query=butterfly+groin+inner+thigh+stretch+how+to', type: 'none', notes: '45s' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'bro-legs-c-1', name: 'Slow Treadmill Walk', url: 'https://www.youtube.com/results?search_query=treadmill+walking+form', type: 'none', notes: '10 min ONLY · Flat, zero incline · Recovery flush only' },
        ],
      },
    ],
  },
  {
    id: 'bro-shoulders',
    name: 'SHOULDERS + ABS',
    shortName: 'SHOULDERS',
    emoji: '💪',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'bro-sho-wu-1', name: 'Shoulder CARs', url: 'https://www.youtube.com/results?search_query=shoulder+CARs+controlled+articular+rotation+how+to', type: 'none', notes: '5 slow full circles each arm' },
          { id: 'bro-sho-wu-2', name: 'Band Pull-Aparts', url: 'https://www.youtube.com/results?search_query=band+pull+aparts+form', type: 'none', notes: '15 x 2' },
          { id: 'bro-sho-wu-3', name: 'Face Pulls with Band', url: 'https://www.youtube.com/results?search_query=band+face+pull+form+technique', type: 'none', notes: '15 x 2' },
          { id: 'bro-sho-wu-4', name: 'Arm Circles', url: 'https://www.youtube.com/results?search_query=arm+circles+warm+up', type: 'none', notes: '15 each direction' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'bro-sho-w-1', name: 'Barbell Overhead Press', url: 'https://www.youtube.com/watch?v=_RlRDWO2jfg', setsReps: '4 × 6–8', prKey: 'barbell-ohp', type: 'compound', notes: 'Heaviest compound first' },
          { id: 'bro-sho-w-2', name: 'Seated DB Shoulder Press', url: 'https://www.youtube.com/results?search_query=dumbbell+shoulder+press+seated+form+technique', setsReps: '3 × 8–10', prKey: 'seated-db-shoulder-press', type: 'compound' },
          { id: 'bro-sho-w-3', name: 'Lateral Raises', url: 'https://www.youtube.com/watch?v=SgyUoY0IZ7A', setsReps: '4 × 12–15', prKey: 'lateral-raises', type: 'isolation', notes: '3s slow eccentric — this builds side delts' },
          { id: 'bro-sho-w-4', name: 'Rear Delt Machine', url: 'https://www.youtube.com/results?search_query=rear+delt+machine+form+technique', setsReps: '3 × 12–15', prKey: 'rear-delt-machine', type: 'isolation', notes: 'External rotation at peak' },
          { id: 'bro-sho-w-5', name: 'Cable Face Pulls', url: 'https://www.youtube.com/results?search_query=cable+face+pull+form+rear+delt+external+rotation', setsReps: '2 × 15–20', prKey: 'cable-face-pulls', type: 'isolation', notes: 'Shoulder health — never skip' },
          { id: 'bro-sho-w-6', name: 'Cable Crunch', url: 'https://www.youtube.com/results?search_query=cable+crunch+weighted+abs+form+technique', setsReps: '3 × 12–15', prKey: 'cable-crunch', type: 'isolation', notes: 'Weighted — abs respond to resistance' },
          { id: 'bro-sho-w-7', name: 'Hanging Leg Raise', url: 'https://www.youtube.com/results?search_query=hanging+leg+raise+form+technique+abs', setsReps: '2 × 10–12', type: 'isolation', notes: 'Controlled, no swing' },
          { id: 'bro-sho-w-8', name: 'Plank', url: 'https://www.youtube.com/results?search_query=plank+form+technique+how+to', setsReps: '2 × 30–45s', type: 'optional', notes: 'Optional' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'bro-sho-s-1', name: 'Cross-Body Shoulder Stretch', url: 'https://www.youtube.com/results?search_query=cross+body+shoulder+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'bro-sho-s-2', name: 'Overhead Tricep Stretch', url: 'https://www.youtube.com/results?search_query=overhead+tricep+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'bro-sho-s-3', name: 'Neck Rolls', url: 'https://www.youtube.com/results?search_query=neck+rolls+stretch+how+to+safely', type: 'none', notes: '10 each direction — slow, controlled' },
          { id: 'bro-sho-s-4', name: 'Thread the Needle', url: 'https://www.youtube.com/results?search_query=thread+the+needle+thoracic+stretch', type: 'none', notes: '30s each side' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'bro-sho-c-1', name: 'Elliptical or Treadmill', url: 'https://www.youtube.com/results?search_query=elliptical+machine+technique', type: 'none', notes: '15–20 min · 60–65% max HR · Elliptical preferred' },
        ],
      },
    ],
  },
  {
    id: 'bro-arms',
    name: 'ARMS',
    shortName: 'ARMS',
    emoji: '💪',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'bro-arms-wu-1', name: 'Wrist Circles', url: 'https://www.youtube.com/results?search_query=wrist+circles+warm+up+how+to', type: 'none', notes: '10 each direction' },
          { id: 'bro-arms-wu-2', name: 'Light Reverse Curls', url: 'https://www.youtube.com/results?search_query=reverse+barbell+curl+form+technique', type: 'none', notes: 'Forearm activation — 15 reps' },
          { id: 'bro-arms-wu-3', name: 'Band Tricep Pushdowns', url: 'https://www.youtube.com/results?search_query=band+tricep+pushdown+warm+up', type: 'none', notes: '15 x 2' },
          { id: 'bro-arms-wu-4', name: 'Finger Extensions with Band', url: 'https://www.youtube.com/results?search_query=finger+extension+band+exercise+hand+strength', type: 'none', notes: '10 reps' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'bro-arms-w-1', name: 'Barbell Bicep Curl', url: 'https://www.youtube.com/watch?v=i1YgFZB6alI', setsReps: '3 × 8–10', prKey: 'barbell-curl', type: 'compound', notes: 'Full ROM, no swing' },
          { id: 'bro-arms-w-2', name: 'Incline DB Curl', url: 'https://www.youtube.com/results?search_query=seated+incline+dumbbell+curl+long+head+bicep+form', setsReps: '3 × 10–12', prKey: 'incline-db-curl', type: 'isolation', notes: 'Long head — feel the stretch at bottom' },
          { id: 'bro-arms-w-3', name: 'One-Arm Preacher Curl', url: 'https://www.youtube.com/results?search_query=single+arm+preacher+curl+form+technique', setsReps: '3 × 10–12', prKey: 'preacher-curl', type: 'isolation' },
          { id: 'bro-arms-w-4', name: 'Reverse Barbell Curl', url: 'https://www.youtube.com/results?search_query=reverse+barbell+curl+form+brachialis', setsReps: '2 × 10–12', prKey: 'reverse-curl', type: 'optional', notes: 'Brachialis + brachioradialis' },
          { id: 'bro-arms-w-5', name: 'Skull Crushers', url: 'https://www.youtube.com/watch?v=popGXI-qs98', setsReps: '3 × 8–10', prKey: 'skull-crushers', type: 'compound', notes: 'Elbows tight, long head' },
          { id: 'bro-arms-w-6', name: 'Cable Tricep Pushdown', url: 'https://www.youtube.com/results?search_query=cable+tricep+pushdown+form+technique+lockout', setsReps: '3 × 12–15', prKey: 'cable-tricep-pushdown', type: 'isolation', notes: 'Full lockout at bottom' },
          { id: 'bro-arms-w-7', name: 'Overhead DB Tricep Extension', url: 'https://www.youtube.com/results?search_query=overhead+dumbbell+tricep+extension+form+long+head', setsReps: '2 × 12–15', prKey: 'overhead-db-tricep-extension', type: 'isolation', notes: 'Long head stretch' },
          { id: 'bro-arms-w-8', name: 'Wrist Curls', url: 'https://www.youtube.com/results?search_query=dumbbell+wrist+curl+forearm+exercise+form', setsReps: '2 × 15–20', type: 'optional', notes: 'Forearm isolation, optional' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'bro-arms-s-1', name: 'Standing Bicep Wall Stretch', url: 'https://www.youtube.com/results?search_query=standing+bicep+wall+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'bro-arms-s-2', name: 'Overhead Tricep Stretch', url: 'https://www.youtube.com/results?search_query=overhead+tricep+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'bro-arms-s-3', name: 'Wrist Flexor Stretch', url: 'https://www.youtube.com/results?search_query=wrist+flexor+stretch+how+to', type: 'none', notes: '20s each' },
          { id: 'bro-arms-s-4', name: 'Wrist Extensor Stretch', url: 'https://www.youtube.com/results?search_query=wrist+extensor+stretch+how+to', type: 'none', notes: '20s each' },
        ],
      },
      {
        type: 'cardio',
        title: 'Cardio',
        exercises: [
          { id: 'bro-arms-c-1', name: 'Treadmill / Bike / Elliptical', url: 'https://www.youtube.com/results?search_query=cardio+steady+state+technique', type: 'none', notes: '20–25 min · 65–70% max HR · Your pick — lightest training day' },
        ],
      },
    ],
  },
];
