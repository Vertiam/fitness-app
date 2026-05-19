import type { WorkoutDay } from '../types';

export const HOME_CIRCUIT: WorkoutDay[] = [
  {
    id: 'home-chest',
    name: 'CHEST',
    shortName: 'CHEST',
    emoji: '🏋️',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'hm-ch-wu-1', name: 'Arm Circles', url: 'https://www.youtube.com/results?search_query=arm+circles+warm+up', type: 'none', notes: '10 forward, 10 backward' },
          { id: 'hm-ch-wu-2', name: 'Band Pull-Aparts', url: 'https://www.youtube.com/results?search_query=band+pull+aparts+form', type: 'none', notes: '15 x 2' },
          { id: 'hm-ch-wu-3', name: 'Light Cable Fly / Pec Deck', url: 'https://www.youtube.com/results?search_query=pec+deck+fly+form+technique', type: 'none', notes: 'Activation only, very light — 15 x 2' },
          { id: 'hm-ch-wu-4', name: 'Push-Up Hold at Bottom', url: 'https://www.youtube.com/results?search_query=push+up+bottom+hold+chest+activation', type: 'none', notes: '20s x 2' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'hm-ch-w-1', name: 'Flat Bench Press', url: 'https://www.youtube.com/watch?v=vcBig73ojpE', setsReps: '4 × 6–8', prKey: 'flat-bench-press', type: 'compound', notes: 'Beat 50kg PR' },
          { id: 'hm-ch-w-2', name: 'Incline Dumbbell Press', url: 'https://www.youtube.com/results?search_query=jeff+nippard+incline+dumbbell+press+form', setsReps: '3 × 8–10', prKey: 'incline-db-press', type: 'compound', notes: 'Beat 17.5kg PR' },
          { id: 'hm-ch-w-3', name: 'Decline Crossover', url: 'https://www.youtube.com/results?search_query=high+to+low+cable+fly+form+technique', setsReps: '3 × 12–15', prKey: 'decline-crossover', type: 'isolation', notes: 'Feel the stretch, don\'t rush' },
          { id: 'hm-ch-w-4', name: 'Pec Deck Fly', url: 'https://www.youtube.com/results?search_query=pec+deck+fly+machine+form+technique', setsReps: '3 × 12–15', prKey: 'pec-deck-fly', type: 'isolation', notes: '2s slow eccentric · Alt: DB Fly on flat bench' },
          { id: 'hm-ch-w-5', name: 'Chest Dips', url: 'https://www.youtube.com/results?search_query=chest+dips+form+lean+forward+technique', setsReps: '2 × 10–12', type: 'isolation', notes: 'Lean forward, bodyweight' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'hm-ch-s-1', name: 'Doorway Chest Stretch', url: 'https://www.youtube.com/results?search_query=doorway+chest+stretch+how+to', type: 'none', notes: '30s x 2' },
          { id: 'hm-ch-s-2', name: 'Cross-Body Shoulder Stretch', url: 'https://www.youtube.com/results?search_query=cross+body+shoulder+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'hm-ch-s-3', name: 'Thread the Needle', url: 'https://www.youtube.com/results?search_query=thread+the+needle+thoracic+stretch', type: 'none', notes: '30s each side' },
          { id: 'hm-ch-s-4', name: 'Wrist Flexor Stretch', url: 'https://www.youtube.com/results?search_query=wrist+flexor+stretch+how+to', type: 'none', notes: '20s each' },
        ],
      },
      {
        type: 'swim',
        title: 'Evening Swim — Upper Body Flush',
        exercises: [
          { id: 'hm-ch-sw-1', name: 'Warm-Up', url: 'https://www.youtube.com/results?search_query=swimming+warm+up+drills', type: 'none', notes: '4 laps easy freestyle or breaststroke — just loosen up' },
          { id: 'hm-ch-sw-2', name: 'Main Set', url: 'https://www.youtube.com/results?search_query=freestyle+swimming+technique+intervals', type: 'none', notes: '8 rounds: 2 laps hard freestyle → 20s rest at wall. Push the pace.' },
          { id: 'hm-ch-sw-3', name: 'Cool-Down', url: 'https://www.youtube.com/results?search_query=swimming+cool+down+backstroke', type: 'none', notes: '4 laps easy backstroke or breaststroke — slow, controlled breathing' },
        ],
      },
    ],
  },
  {
    id: 'home-back',
    name: 'BACK',
    shortName: 'BACK',
    emoji: '🦅',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'hm-bk-wu-1', name: 'Dead Hangs', url: 'https://www.youtube.com/results?search_query=dead+hang+how+to+scapular', type: 'none', notes: '25s x 2' },
          { id: 'hm-bk-wu-2', name: 'Scapular Retractions', url: 'https://www.youtube.com/results?search_query=scapular+retraction+exercise+how+to', type: 'none', notes: '15 x 2' },
          { id: 'hm-bk-wu-3', name: 'Face Pulls with Band', url: 'https://www.youtube.com/results?search_query=band+face+pull+form+technique', type: 'none', notes: '15 x 2' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'hm-bk-w-1', name: 'Lat Pulldown', url: 'https://www.youtube.com/results?search_query=jeff+nippard+lat+pulldown+technique+form', setsReps: '4 × 8–10', prKey: 'lat-pulldown', type: 'compound', notes: 'Beat 65kg PR · Alt: Assisted Pull-Ups' },
          { id: 'hm-bk-w-2', name: 'Barbell Row', url: 'https://www.youtube.com/results?search_query=jeff+nippard+barbell+row+technique+form', setsReps: '3 × 6–8', prKey: 'barbell-row', type: 'compound', notes: 'Beat 50kg PR · Brace the core hard' },
          { id: 'hm-bk-w-3', name: 'Seated Cable Row', url: 'https://www.youtube.com/results?search_query=seated+cable+row+form+technique', setsReps: '3 × 10–12', prKey: 'seated-cable-row', type: 'isolation', notes: 'Squeeze scapulae at peak' },
          { id: 'hm-bk-w-4', name: 'Wide Grip Cable Row', url: 'https://www.youtube.com/results?search_query=wide+grip+cable+row+upper+back+form', setsReps: '2 × 12–15', prKey: 'wide-grip-cable-row', type: 'isolation', notes: 'Elbows flare, upper back emphasis' },
          { id: 'hm-bk-w-5', name: 'Rear Delt Machine', url: 'https://www.youtube.com/results?search_query=rear+delt+machine+form+technique', setsReps: '3 × 12–15', prKey: 'rear-delt-machine', type: 'isolation', notes: '2s slow eccentric · Alt: Reverse Pec Deck or Bent-Over DB Fly' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'hm-bk-s-1', name: "Child's Pose Lat Stretch", url: 'https://www.youtube.com/results?search_query=childs+pose+lat+stretch+how+to', type: 'none', notes: '45s' },
          { id: 'hm-bk-s-2', name: 'Doorway Rear Delt Stretch', url: 'https://www.youtube.com/results?search_query=doorway+rear+delt+stretch+how+to', type: 'none', notes: '30s each side' },
          { id: 'hm-bk-s-3', name: 'Thoracic Spine Rotation', url: 'https://www.youtube.com/results?search_query=thoracic+spine+rotation+mobility+exercise', type: 'none', notes: '10 each side' },
          { id: 'hm-bk-s-4', name: 'Cat-Cow', url: 'https://www.youtube.com/results?search_query=cat+cow+stretch+how+to', type: 'none', notes: '10 reps slow' },
        ],
      },
      {
        type: 'swim',
        title: 'Evening Swim — Upper Body Flush',
        exercises: [
          { id: 'hm-bk-sw-1', name: 'Warm-Up', url: 'https://www.youtube.com/results?search_query=backstroke+swimming+technique', type: 'none', notes: '4 laps easy backstroke — decompresses spine after rowing' },
          { id: 'hm-bk-sw-2', name: 'Main Set', url: 'https://www.youtube.com/results?search_query=freestyle+swimming+technique+intervals', type: 'none', notes: '3 rounds: 4 laps freestyle hard → 30s rest → 2 laps breaststroke easy → 15s rest' },
          { id: 'hm-bk-sw-3', name: 'Cool-Down', url: 'https://www.youtube.com/results?search_query=swimming+cool+down+easy', type: 'none', notes: '4 laps easy, any stroke — slow breathing' },
        ],
      },
    ],
  },
  {
    id: 'home-legs',
    name: 'LEGS',
    shortName: 'LEGS',
    emoji: '🦵',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'hm-lg-wu-1', name: 'Leg Swings', url: 'https://www.youtube.com/results?search_query=leg+swings+dynamic+warm+up+how+to', type: 'none', notes: '15 forward-back, 15 side-to-side each leg' },
          { id: 'hm-lg-wu-2', name: 'Cossack Squats', url: 'https://www.youtube.com/results?search_query=cossack+squat+mobility+how+to', type: 'none', notes: '10 each side' },
          { id: 'hm-lg-wu-3', name: 'Hamstring Scoops', url: 'https://www.youtube.com/results?search_query=hamstring+scoops+dynamic+warm+up', type: 'none', notes: '10 each leg' },
          { id: 'hm-lg-wu-4', name: 'Kneeling Hip Flexor Lunge', url: 'https://www.youtube.com/results?search_query=kneeling+hip+flexor+lunge+stretch+how+to', type: 'none', notes: '30s each side' },
          { id: 'hm-lg-wu-5', name: 'Bodyweight Squats', url: 'https://www.youtube.com/results?search_query=bodyweight+squat+form+technique', type: 'none', notes: '30 x 2' },
          { id: 'hm-lg-wu-6', name: 'Walking Lunges', url: 'https://www.youtube.com/results?search_query=walking+lunges+form+technique', type: 'none', notes: 'Bodyweight — 10 each leg' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'hm-lg-w-1', name: 'Smith Machine / Barbell Squat', url: 'https://www.youtube.com/watch?v=bEv6CCg2BC8', setsReps: '4 × 6–8', prKey: 'barbell-squat', type: 'compound', notes: 'Beat 84.5kg PR' },
          { id: 'hm-lg-w-2', name: 'Leg Press', url: 'https://www.youtube.com/results?search_query=jeff+nippard+leg+press+form+foot+placement', setsReps: '3 × 8–10', prKey: 'leg-press', type: 'compound', notes: 'Beat 203kg PR' },
          { id: 'hm-lg-w-3', name: 'Leg Extensions', url: 'https://www.youtube.com/results?search_query=leg+extension+machine+form+technique+quad', setsReps: '3 × 12–15 + F1', prKey: 'leg-extensions', type: 'isolation', notes: 'F1 = one dropset after last set' },
          { id: 'hm-lg-w-4', name: 'Hamstring Curls', url: 'https://www.youtube.com/results?search_query=seated+lying+hamstring+curl+machine+form', setsReps: '3 × 10–12', prKey: 'hamstring-curl', type: 'isolation', notes: 'Beat 52.5kg PR' },
          { id: 'hm-lg-w-5', name: 'Romanian Deadlift', url: 'https://www.youtube.com/watch?v=_oyxCn2iSjU', setsReps: '3 × 6–8', prKey: 'romanian-deadlift', type: 'compound', notes: 'Hinge deep, feel the hamstrings load' },
          { id: 'hm-lg-w-6', name: 'Weighted Lunges', url: 'https://www.youtube.com/results?search_query=weighted+dumbbell+lunge+form+technique', setsReps: '2 × 10–12 each', prKey: 'weighted-lunges', type: 'isolation' },
          { id: 'hm-lg-w-7', name: 'Calf Raises', url: 'https://www.youtube.com/results?search_query=standing+calf+raise+form+technique+full+range', setsReps: '4 × 15–20', prKey: 'calf-raises', type: 'isolation', notes: 'Full ROM, pause at bottom' },
          { id: 'hm-lg-w-8', name: 'Cable Crunch', url: 'https://www.youtube.com/results?search_query=cable+crunch+weighted+abs+form+technique', setsReps: '3 × 12–15', prKey: 'cable-crunch', type: 'isolation' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'hm-lg-s-1', name: 'Pigeon Pose', url: 'https://www.youtube.com/results?search_query=pigeon+pose+hip+glute+stretch+how+to', type: 'none', notes: '60s each side' },
          { id: 'hm-lg-s-2', name: 'Seated Hamstring Stretch', url: 'https://www.youtube.com/results?search_query=seated+hamstring+stretch+how+to+hinge', type: 'none', notes: '45s each leg' },
          { id: 'hm-lg-s-3', name: 'Standing Quad Stretch', url: 'https://www.youtube.com/results?search_query=standing+quad+stretch+how+to', type: 'none', notes: '30s each' },
          { id: 'hm-lg-s-4', name: 'Kneeling Hip Flexor Stretch', url: 'https://www.youtube.com/results?search_query=kneeling+hip+flexor+lunge+stretch+how+to', type: 'none', notes: '45s each side' },
          { id: 'hm-lg-s-5', name: 'Wall Calf Stretch', url: 'https://www.youtube.com/results?search_query=wall+calf+stretch+straight+bent+knee', type: 'none', notes: '30s each — straight + bent knee' },
          { id: 'hm-lg-s-6', name: 'Butterfly Stretch', url: 'https://www.youtube.com/results?search_query=butterfly+groin+inner+thigh+stretch+how+to', type: 'none', notes: '45s' },
        ],
      },
      {
        type: 'swim',
        title: 'Evening Swim — Recovery Only',
        exercises: [
          { id: 'hm-lg-sw-1', name: 'Easy Swim', url: 'https://www.youtube.com/results?search_query=breaststroke+swimming+technique+easy', type: 'none', notes: '10–12 laps easy breaststroke or backstroke — no flip turns, no intensity. Legs are done. Blood flow only. Skip entirely if genuinely wrecked.' },
        ],
      },
    ],
  },
  {
    id: 'home-shoulders',
    name: 'SHOULDERS + ABS',
    shortName: 'SHOULDERS',
    emoji: '💪',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'hm-sh-wu-1', name: 'Shoulder CARs', url: 'https://www.youtube.com/results?search_query=shoulder+CARs+controlled+articular+rotation+how+to', type: 'none', notes: '5 slow full circles each arm' },
          { id: 'hm-sh-wu-2', name: 'Band Pull-Aparts', url: 'https://www.youtube.com/results?search_query=band+pull+aparts+form', type: 'none', notes: '15 x 2' },
          { id: 'hm-sh-wu-3', name: 'Face Pulls with Band', url: 'https://www.youtube.com/results?search_query=band+face+pull+form+technique', type: 'none', notes: '15 x 2' },
          { id: 'hm-sh-wu-4', name: 'Arm Circles', url: 'https://www.youtube.com/results?search_query=arm+circles+warm+up', type: 'none', notes: '15 each direction' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'hm-sh-w-1', name: 'Barbell / DB Overhead Press', url: 'https://www.youtube.com/watch?v=_RlRDWO2jfg', setsReps: '4 × 6–8', prKey: 'barbell-ohp', type: 'compound', notes: 'Heaviest compound first' },
          { id: 'hm-sh-w-2', name: 'Seated DB Shoulder Press', url: 'https://www.youtube.com/results?search_query=dumbbell+shoulder+press+seated+form+technique', setsReps: '3 × 8–10', prKey: 'seated-db-shoulder-press', type: 'compound' },
          { id: 'hm-sh-w-3', name: 'Lateral Raises', url: 'https://www.youtube.com/watch?v=SgyUoY0IZ7A', setsReps: '4 × 12–15', prKey: 'lateral-raises', type: 'isolation', notes: '3s slow eccentric — most important cue today' },
          { id: 'hm-sh-w-4', name: 'Rear Delt Machine', url: 'https://www.youtube.com/results?search_query=rear+delt+machine+form+technique', setsReps: '3 × 12–15', prKey: 'rear-delt-machine', type: 'isolation' },
          { id: 'hm-sh-w-5', name: 'Cable Face Pulls', url: 'https://www.youtube.com/results?search_query=cable+face+pull+form+rear+delt+external+rotation', setsReps: '2 × 15–20', prKey: 'cable-face-pulls', type: 'isolation', notes: 'Shoulder health — never skip' },
          { id: 'hm-sh-w-6', name: 'Cable Crunch', url: 'https://www.youtube.com/results?search_query=cable+crunch+weighted+abs+form+technique', setsReps: '3 × 12–15', prKey: 'cable-crunch', type: 'isolation', notes: 'Weighted' },
          { id: 'hm-sh-w-7', name: 'Hanging Leg Raise', url: 'https://www.youtube.com/results?search_query=hanging+leg+raise+form+technique+abs', setsReps: '2 × 10–12', type: 'isolation', notes: 'No swing, controlled' },
          { id: 'hm-sh-w-8', name: 'Plank', url: 'https://www.youtube.com/results?search_query=plank+form+technique+how+to', setsReps: '2 × 30–45s', type: 'optional', notes: 'Optional' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'hm-sh-s-1', name: 'Cross-Body Shoulder Stretch', url: 'https://www.youtube.com/results?search_query=cross+body+shoulder+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'hm-sh-s-2', name: 'Overhead Tricep Stretch', url: 'https://www.youtube.com/results?search_query=overhead+tricep+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'hm-sh-s-3', name: 'Neck Rolls', url: 'https://www.youtube.com/results?search_query=neck+rolls+stretch+how+to+safely', type: 'none', notes: '10 each direction — slow, controlled' },
          { id: 'hm-sh-s-4', name: 'Thread the Needle', url: 'https://www.youtube.com/results?search_query=thread+the+needle+thoracic+stretch', type: 'none', notes: '30s each side' },
        ],
      },
      {
        type: 'swim',
        title: 'Evening Swim — Interval Set',
        exercises: [
          { id: 'hm-sh-sw-1', name: 'Warm-Up', url: 'https://www.youtube.com/results?search_query=swimming+warm+up+drills', type: 'none', notes: '4 laps easy (2 freestyle + 2 backstroke)' },
          { id: 'hm-sh-sw-2', name: 'Main Set', url: 'https://www.youtube.com/results?search_query=freestyle+swimming+technique+intervals', type: 'none', notes: '5 rounds: 4 laps freestyle @ 85% → 30s rest. Your hardest swim of the week.' },
          { id: 'hm-sh-sw-3', name: 'Kick Set', url: 'https://www.youtube.com/results?search_query=flutter+kick+swimming+wall+drill', type: 'none', notes: 'Flutter kicks holding wall × 3 (30s on, 20s off) — core + hip flexors' },
          { id: 'hm-sh-sw-4', name: 'Cool-Down', url: 'https://www.youtube.com/results?search_query=breaststroke+swimming+technique', type: 'none', notes: '4 laps easy breaststroke' },
        ],
      },
    ],
  },
  {
    id: 'home-arms',
    name: 'ARMS',
    shortName: 'ARMS',
    emoji: '💪',
    sections: [
      {
        type: 'warmup',
        title: 'Warm-Up',
        exercises: [
          { id: 'hm-ar-wu-1', name: 'Wrist Circles', url: 'https://www.youtube.com/results?search_query=wrist+circles+warm+up+how+to', type: 'none', notes: '10 each direction' },
          { id: 'hm-ar-wu-2', name: 'Light Reverse Curls', url: 'https://www.youtube.com/results?search_query=reverse+barbell+curl+form+technique', type: 'none', notes: 'Forearm activation — 15 reps' },
          { id: 'hm-ar-wu-3', name: 'Band Tricep Pushdowns', url: 'https://www.youtube.com/results?search_query=band+tricep+pushdown+warm+up', type: 'none', notes: '15 x 2' },
          { id: 'hm-ar-wu-4', name: 'Finger Extensions with Band', url: 'https://www.youtube.com/results?search_query=finger+extension+band+exercise+hand+strength', type: 'none', notes: '10 reps' },
        ],
      },
      {
        type: 'workout',
        title: 'Workout',
        exercises: [
          { id: 'hm-ar-w-1', name: 'Barbell Bicep Curl', url: 'https://www.youtube.com/watch?v=i1YgFZB6alI', setsReps: '3 × 8–10', prKey: 'barbell-curl', type: 'compound', notes: 'Full ROM, zero swing' },
          { id: 'hm-ar-w-2', name: 'Incline DB Curl', url: 'https://www.youtube.com/results?search_query=seated+incline+dumbbell+curl+long+head+bicep+form', setsReps: '3 × 10–12', prKey: 'incline-db-curl', type: 'isolation', notes: 'Long head — feel the stretch at bottom' },
          { id: 'hm-ar-w-3', name: 'One-Arm Preacher Curl', url: 'https://www.youtube.com/results?search_query=single+arm+preacher+curl+form+technique', setsReps: '3 × 10–12', prKey: 'preacher-curl', type: 'isolation', notes: 'Beat 18.75kg PR' },
          { id: 'hm-ar-w-4', name: 'Reverse Barbell Curl', url: 'https://www.youtube.com/results?search_query=reverse+barbell+curl+form+brachialis', setsReps: '2 × 10–12', prKey: 'reverse-curl', type: 'optional', notes: 'Beat 30kg PR' },
          { id: 'hm-ar-w-5', name: 'Skull Crushers', url: 'https://www.youtube.com/watch?v=popGXI-qs98', setsReps: '3 × 8–10', prKey: 'skull-crushers', type: 'compound', notes: 'Elbows tight, long head' },
          { id: 'hm-ar-w-6', name: 'Cable Tricep Pushdown', url: 'https://www.youtube.com/results?search_query=cable+tricep+pushdown+form+technique+lockout', setsReps: '3 × 12–15', prKey: 'cable-tricep-pushdown', type: 'isolation', notes: 'Full lockout at bottom' },
          { id: 'hm-ar-w-7', name: 'Overhead DB Tricep Extension', url: 'https://www.youtube.com/results?search_query=overhead+dumbbell+tricep+extension+form+long+head', setsReps: '2 × 12–15', prKey: 'overhead-db-tricep-extension', type: 'isolation', notes: 'Long head stretch' },
          { id: 'hm-ar-w-8', name: 'Wrist Curls', url: 'https://www.youtube.com/results?search_query=dumbbell+wrist+curl+forearm+exercise+form', setsReps: '2 × 15–20', type: 'optional', notes: 'Optional' },
        ],
      },
      {
        type: 'stretching',
        title: 'Stretching',
        exercises: [
          { id: 'hm-ar-s-1', name: 'Standing Bicep Wall Stretch', url: 'https://www.youtube.com/results?search_query=standing+bicep+wall+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'hm-ar-s-2', name: 'Overhead Tricep Stretch', url: 'https://www.youtube.com/results?search_query=overhead+tricep+stretch+how+to', type: 'none', notes: '30s each arm' },
          { id: 'hm-ar-s-3', name: 'Wrist Flexor Stretch', url: 'https://www.youtube.com/results?search_query=wrist+flexor+stretch+how+to', type: 'none', notes: '20s each' },
          { id: 'hm-ar-s-4', name: 'Wrist Extensor Stretch', url: 'https://www.youtube.com/results?search_query=wrist+extensor+stretch+how+to', type: 'none', notes: '20s each' },
        ],
      },
      {
        type: 'swim',
        title: 'Evening Swim — Long Moderate',
        exercises: [
          { id: 'hm-ar-sw-1', name: 'Warm-Up', url: 'https://www.youtube.com/results?search_query=swimming+warm+up+drills', type: 'none', notes: '4 laps easy mixed strokes' },
          { id: 'hm-ar-sw-2', name: 'Main Set', url: 'https://www.youtube.com/results?search_query=swimming+endurance+training+continuous', type: 'none', notes: '20 min continuous — alternate strokes every 4 laps: Freestyle → Breaststroke → Backstroke. Best fat-burn swim of the week.' },
          { id: 'hm-ar-sw-3', name: 'Cool-Down', url: 'https://www.youtube.com/results?search_query=swimming+cool+down+easy', type: 'none', notes: '4 laps very easy — long slow exhales underwater' },
        ],
      },
    ],
  },
  {
    id: 'home-saturday',
    name: 'SATURDAY',
    shortName: 'SAT SWIM',
    emoji: '🏊',
    sections: [
      {
        type: 'swim',
        title: 'Long Swim Session — 35–40 min',
        exercises: [
          { id: 'hm-sat-sw-1', name: 'Warm-Up', url: 'https://www.youtube.com/results?search_query=swimming+warm+up+drills', type: 'none', notes: '6 laps easy mixed strokes (~5 min)' },
          { id: 'hm-sat-sw-2', name: 'Endurance Block', url: 'https://www.youtube.com/results?search_query=swimming+endurance+training+continuous', type: 'none', notes: '25 min continuous: 10 min easy breaststroke/backstroke → 15 min alternating 4 laps freestyle hard + 2 laps easy backstroke' },
          { id: 'hm-sat-sw-3', name: 'Kick Set', url: 'https://www.youtube.com/results?search_query=flutter+kick+swimming+wall+drill', type: 'none', notes: 'Flutter kicks holding wall × 4 (30s on, 20s off)' },
          { id: 'hm-sat-sw-4', name: 'Treading Water', url: 'https://www.youtube.com/results?search_query=treading+water+technique', type: 'none', notes: '3 × 60s — full body isometric, harder than it sounds' },
          { id: 'hm-sat-sw-5', name: 'Cool-Down', url: 'https://www.youtube.com/results?search_query=swimming+cool+down+easy', type: 'none', notes: '4 laps slow — focus on breathing and form. Est. burn: 500–600 kcal.' },
        ],
      },
      {
        type: 'stretching',
        title: 'Mobility (10 min, anytime)',
        exercises: [
          { id: 'hm-sat-s-1', name: 'Pigeon Pose', url: 'https://www.youtube.com/results?search_query=pigeon+pose+hip+glute+stretch+how+to', type: 'none', notes: '60s each side' },
          { id: 'hm-sat-s-2', name: 'Cat-Cow', url: 'https://www.youtube.com/results?search_query=cat+cow+stretch+how+to', type: 'none', notes: '10 slow reps' },
          { id: 'hm-sat-s-3', name: 'Thoracic Spine Rotation', url: 'https://www.youtube.com/results?search_query=thoracic+spine+rotation+mobility+exercise', type: 'none', notes: '10 each side' },
          { id: 'hm-sat-s-4', name: "Child's Pose", url: 'https://www.youtube.com/results?search_query=childs+pose+lat+stretch+how+to', type: 'none', notes: '60s' },
          { id: 'hm-sat-s-5', name: 'Butterfly Stretch', url: 'https://www.youtube.com/results?search_query=butterfly+groin+inner+thigh+stretch+how+to', type: 'none', notes: '45s' },
        ],
      },
    ],
  },
];
