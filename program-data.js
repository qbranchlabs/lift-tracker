// Program: Strong as an Ox - 12 Week PPL
// Training days: 54 | Rest days: 37 | Total: 91
// Phase 1 (Assessment/Acclimation): Week 1 Day 1 - Week 3 Day 6 (programDay 1-20)
// Phase 2 (Progressive Overload): Week 3 Day 7 - Week 8 Day 2 (programDay 21-51)
// Phase 3 (Advancement & Variety): Week 8 Day 3 - Week 10 Day 7 (programDay 52-70)
// Phase 4 (Super-Compensation): Week 11 Day 1 - Week 13 Day 7 (programDay 71-91)

const PROGRAM = {
  name: 'Strong as an Ox',
  totalWeeks: 13,
  totalDays: 91,
  trainingDays: 54,
  restDays: 37,
  phases: [
    { number: 1, name: 'Assessment/Acclimation', startWeek: 1, endWeek: 3, description: 'Finding weights for each rep range' },
    { number: 2, name: 'Progressive Overload', startWeek: 3, endWeek: 8, description: 'Heavy progression, beat your logbook' },
    { number: 3, name: 'Advancement & Variety', startWeek: 8, endWeek: 10, description: 'Exercise variation and manipulation' },
    { number: 4, name: 'Super-Compensation', startWeek: 11, endWeek: 13, description: 'Maximum intensity, everything you have' }
  ],
  schedule: [
    // ============================================================
    // WEEK 1
    // ============================================================

    // Week 1 Day 1: Push 1 (Chest Focus) - Phase 1
    {
      programDay: 1,
      week: 1,
      day: 1,
      phase: 1,
      type: 'training',
      workoutType: 'push1',
      workoutName: 'Push 1',
      focus: 'Chest Focus',
      exercises: [
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm Up - Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Shoulder Press',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Smith Machine Close Grip Bench Press',
          sets: 2,
          repRanges: ['6-9', '10-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Tricep Extensions',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Decline Dumbbell Bench Press',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-2-2-2',
          rest: '2-5 Min',
          notes: 'Regular Eccentric, Explosive Concentric',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Lateral Raises',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tricep Rope Pushdown',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '1-3 Min',
          notes: 'Really Squeeze At The Bottom',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Chest Fly',
          sets: 2,
          repRanges: ['8-20', '8-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 1 Day 2: Pull 1 (Back Width Focus) - Phase 1
    {
      programDay: 2,
      week: 1,
      day: 2,
      phase: 1,
      type: 'training',
      workoutType: 'pull1',
      workoutName: 'Pull 1',
      focus: 'Back Width Focus',
      exercises: [
        {
          name: 'Pullover Machine or Rope Pullovers',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Plate-Loaded Pull Down',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Cable Lat Pulldown',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tbar Row',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '2-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Underhand Seated Cable Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bent Over Dumbbell Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Face Pulls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On Second Set If Needed',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 1 Day 3: Rest Day - Phase 1
    {
      programDay: 3,
      week: 1,
      day: 3,
      phase: 1,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 1 Day 4: Legs 1 (Quad Focus) - Phase 1
    {
      programDay: 4,
      week: 1,
      day: 4,
      phase: 1,
      type: 'training',
      workoutType: 'legs1',
      workoutName: 'Legs 1',
      focus: 'Quad Focus',
      exercises: [
        {
          name: 'Leg Curls',
          sets: 2,
          repRanges: ['10-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 3,
          repRanges: ['15-20', '12-15', '12-15'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Lower Weight 25% No Rest, Immediately Into Next Set (Drop Set)',
          setTypes: ['normal', 'drop_set', 'drop_set']
        },
        {
          name: 'Adductors',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hack Squats',
          sets: 2,
          repRanges: ['6-9', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Back Squat',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Leg Curls',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '2-2-2-0',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Calf Raises',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '4-3-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 1 Day 5: Rest Day - Phase 1
    {
      programDay: 5,
      week: 1,
      day: 5,
      phase: 1,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 1 Day 6: Push 2 (Shoulder Focus) - Phase 1
    {
      programDay: 6,
      week: 1,
      day: 6,
      phase: 1,
      type: 'training',
      workoutType: 'push2',
      workoutName: 'Push 2',
      focus: 'Shoulder Focus',
      exercises: [
        {
          name: 'Dumbbell Y Raises',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shoulder Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '4-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Seated Overhead Press',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Incline Chest Press Machine',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Incline Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Dips',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Set Cables Slightly Above Shoulder Height',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Dumbbell Lateral Raise',
          sets: 2,
          repRanges: ['10-15', '12-15'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Chest Fly Press',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Tricep Pushdown',
          sets: 2,
          repRanges: ['10-12', '13-15'],
          tempo: '2-2-2-2',
          rest: '2-5 Min',
          notes: 'Hold For 2 Seconds In The Stretch At The Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 1 Day 7: Pull 2 (Back Thickness Focus) - Phase 1
    {
      programDay: 7,
      week: 1,
      day: 7,
      phase: 1,
      type: 'training',
      workoutType: 'pull2',
      workoutName: 'Pull 2',
      focus: 'Back Thickness Focus',
      exercises: [
        {
          name: 'Straight Leg Deadlift',
          sets: 1,
          repRanges: ['6-9'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-2',
          rest: '1-2 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Chest Supported Row',
          sets: 2,
          repRanges: ['6-9', '10-13'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Please Use Hammer Strength Row If Available',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Pull-Ups',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Use Bands If Needed/Add Weight If Too Light',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Neutral Grip',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Lat Pulldown',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rear Delt Rows',
          sets: 2,
          repRanges: ['9-12', '13-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 1,
          repRanges: ['6x4'],
          tempo: '3-1-2-2',
          rest: '10 sec',
          notes: '10s Between Sets, See Cluster Set in Glossary',
          setTypes: ['cluster']
        },
        {
          name: 'Reverse Cable Curls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: 'Slow and Controlled, Zero Ego Here',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // ============================================================
    // WEEK 2
    // ============================================================

    // Week 2 Day 1: Rest Day - Phase 1
    {
      programDay: 8,
      week: 2,
      day: 1,
      phase: 1,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 2 Day 2: Legs 2 (Hamstring & Glute Focus) - Phase 1
    {
      programDay: 9,
      week: 2,
      day: 2,
      phase: 1,
      type: 'training',
      workoutType: 'legs2',
      workoutName: 'Legs 2',
      focus: 'Hamstring & Glute Focus',
      exercises: [
        {
          name: 'Single Leg Standing Leg Curl',
          sets: 2,
          repRanges: ['10-12', '12-15'],
          tempo: '3-1-2-2',
          rest: '30s/Leg, 1-2 Min/Set',
          notes: 'Keep Your Hips Locked in Place & Arch Your Back',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['20+', '12-16'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Take 2-5 Minutes Between Set 1 and Set 2, Set 2 See Glossary for Rest Pause',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Adductor',
          sets: 1,
          repRanges: ['15-20'],
          tempo: '4-1-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Leg Press',
          sets: 2,
          repRanges: ['6-9', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Feet Higher On Platform',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Walking Lunge',
          sets: 2,
          repRanges: ['12-15 per leg', '12-15 per leg'],
          tempo: '4-1-2-1',
          rest: '30s/Leg, 2-5 Min/Set',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Leg Curl',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '3-1-2-1',
          rest: null,
          notes: 'Bottom Is When Knees Start Coming Forward',
          setTypes: ['normal']
        },
        {
          name: 'Sitting Calf Raise',
          sets: 2,
          repRanges: ['10-12', '10-12'],
          tempo: '5-5-2-2',
          rest: '2-5 Min',
          notes: 'Slow On The Way Down & Hold Stretch--Good Luck',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 2 Day 3: Rest Day - Phase 1
    {
      programDay: 10,
      week: 2,
      day: 3,
      phase: 1,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 2 Day 4: Push 1 (Chest Focus) - Phase 1
    {
      programDay: 11,
      week: 2,
      day: 4,
      phase: 1,
      type: 'training',
      workoutType: 'push1',
      workoutName: 'Push 1',
      focus: 'Chest Focus',
      exercises: [
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm Up - Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Press Machine',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Shoulder Press',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Smith Machine Close Grip Bench Press',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Tricep Extensions',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Decline Dumbbell Bench Press',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '3-2-2-2',
          rest: '2-5 Min',
          notes: 'Regular Eccentric, Explosive Concentric',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Lateral Raises',
          sets: 2,
          repRanges: ['12-15', '12-16'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Tricep Rope Pushdown',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '2-1-1-1',
          rest: '1-3 Min',
          notes: 'Really Squeeze At The Bottom',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Chest Fly',
          sets: 2,
          repRanges: ['8-20', '8-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 2 Day 5: Pull 1 (Back Width Focus) - Phase 1
    {
      programDay: 12,
      week: 2,
      day: 5,
      phase: 1,
      type: 'training',
      workoutType: 'pull1',
      workoutName: 'Pull 1',
      focus: 'Back Width Focus',
      exercises: [
        {
          name: 'Pullover Machine or Rope Pullovers',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Plate-Loaded Pull Down',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Cable Lat Pulldown',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tbar Row',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['10-15'],
          tempo: '2-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Underhand Seated Cable Row',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bent Over Dumbbell Rows',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['12-15', '6x4'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top, Use Same Weight For Clusters',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Face Pulls',
          sets: 2,
          repRanges: ['15-20', '15-20'],
          tempo: '2-1-1-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On Second Set If Needed',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 2 Day 6: Rest Day - Phase 1
    {
      programDay: 13,
      week: 2,
      day: 6,
      phase: 1,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 2 Day 7: Legs 1 (Quad Focus) - Phase 1
    {
      programDay: 14,
      week: 2,
      day: 7,
      phase: 1,
      type: 'training',
      workoutType: 'legs1',
      workoutName: 'Legs 1',
      focus: 'Quad Focus',
      exercises: [
        {
          name: 'Leg Curls',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 3,
          repRanges: ['15-20', '12-15', '12-15'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Lower Weight 25% No Rest, Immediately Into Next Set (Drop Set)',
          setTypes: ['normal', 'drop_set', 'drop_set']
        },
        {
          name: 'Adductors',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hack Squats',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Back Squat',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Leg Curls',
          sets: 1,
          repRanges: ['15-20'],
          tempo: '2-2-2-0',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['6-9'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Calf Raises',
          sets: 2,
          repRanges: ['10-12', '10-12'],
          tempo: '4-3-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // ============================================================
    // WEEK 3
    // ============================================================

    // Week 3 Day 1: Rest Day - Phase 1
    {
      programDay: 15,
      week: 3,
      day: 1,
      phase: 1,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 3 Day 2: Push 2 (Shoulder Focus) - Phase 1
    {
      programDay: 16,
      week: 3,
      day: 2,
      phase: 1,
      type: 'training',
      workoutType: 'push2',
      workoutName: 'Push 2',
      focus: 'Shoulder Focus',
      exercises: [
        {
          name: 'Dumbbell Y Raises',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shoulder Press Machine',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Seated Overhead Press',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Incline Chest Press Machine',
          sets: 2,
          repRanges: ['6-9', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Incline Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Dips',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Set Cables Slightly Above Shoulder Height',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Dumbbell Lateral Raise',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Chest Fly Press',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Tricep Pushdown',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-2-2-2',
          rest: '2-5 Min',
          notes: 'Hold For 2 Seconds In The Stretch At The Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 3 Day 3: Pull 2 (Back Thickness Focus) - Phase 1
    {
      programDay: 17,
      week: 3,
      day: 3,
      phase: 1,
      type: 'training',
      workoutType: 'pull2',
      workoutName: 'Pull 2',
      focus: 'Back Thickness Focus',
      exercises: [
        {
          name: 'Straight Leg Deadlift',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '3-1-2-2',
          rest: '1-2 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Chest Supported Row',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Please Use Hammer Strength Row If Available',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Pull-Ups',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Use Bands If Needed/Add Weight If Too Light',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Rows',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Neutral Grip',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Lat Pulldown',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rear Delt Rows',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 1,
          repRanges: ['6x4'],
          tempo: '3-1-2-2',
          rest: '10 sec',
          notes: '10s Between Sets, See Cluster Set in Glossary',
          setTypes: ['cluster']
        },
        {
          name: 'Reverse Cable Curls',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: 'Slow and Controlled, Zero Ego Here',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 3 Day 4: Rest Day - Phase 1
    {
      programDay: 18,
      week: 3,
      day: 4,
      phase: 1,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 3 Day 5: Legs 2 (Hamstring and Glute Focus) - Phase 1
    {
      programDay: 19,
      week: 3,
      day: 5,
      phase: 1,
      type: 'training',
      workoutType: 'legs2',
      workoutName: 'Legs 2',
      focus: 'Hamstring and Glute Focus',
      exercises: [
        {
          name: 'Single Leg Standing Leg Curl',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '30s/Leg, 1-2 Min/Set',
          notes: 'Keep Your Hips Locked in Place & Arch Your Back',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['6-10', '10-15'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Adductor',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '4-1-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Leg Press',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Feet Higher On Platform',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Walking Lunge',
          sets: 2,
          repRanges: ['8-12 per leg', '8-12 per leg'],
          tempo: '4-1-2-1',
          rest: '30s/Leg, 2-5 Min/Set',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Leg Curl',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: null,
          notes: 'Bottom Is When Knees Start Coming Forward',
          setTypes: ['normal']
        },
        {
          name: 'Sitting Calf Raise',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '5-5-2-2',
          rest: '2-5 Min',
          notes: 'Slow On The Way Down & Hold Stretch--Good Luck',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 3 Day 6: Rest Day - Phase 1
    {
      programDay: 20,
      week: 3,
      day: 6,
      phase: 1,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // ============================================================
    // WEEK 3 Day 7 -> PHASE 2 BEGINS
    // ============================================================

    // Week 3 Day 7: Push 1 (Chest Focus) - Phase 2
    {
      programDay: 21,
      week: 3,
      day: 7,
      phase: 2,
      type: 'training',
      workoutType: 'push1',
      workoutName: 'Push 1',
      focus: 'Chest Focus',
      exercises: [
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm Up - Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Shoulder Press',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Smith Machine Close Grip Bench Press',
          sets: 2,
          repRanges: ['6-9', '10-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Tricep Extensions',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Decline Dumbbell Bench Press',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-2-2-2',
          rest: '2-5 Min',
          notes: 'Regular Eccentric, Explosive Concentric',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Lateral Raises',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tricep Rope Pushdown',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '1-3 Min',
          notes: 'Really Squeeze At The Bottom',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Chest Fly',
          sets: 2,
          repRanges: ['8-20', '8-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // ============================================================
    // WEEK 4
    // ============================================================

    // Week 4 Day 1: Pull 1 (Back Width Focus) - Phase 2
    {
      programDay: 22,
      week: 4,
      day: 1,
      phase: 2,
      type: 'training',
      workoutType: 'pull1',
      workoutName: 'Pull 1',
      focus: 'Back Width Focus',
      exercises: [
        {
          name: 'Pullover Machine or Rope Pullovers',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Plate-Loaded Pull Down',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Cable Lat Pulldown',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tbar Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['6-10'],
          tempo: '2-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Underhand Seated Cable Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bent Over Dumbbell Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Face Pulls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On Second Set If Needed',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 4 Day 2: Rest Day - Phase 2
    {
      programDay: 23,
      week: 4,
      day: 2,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 4 Day 3: Legs 1 (Quad Focus) - Phase 2
    {
      programDay: 24,
      week: 4,
      day: 3,
      phase: 2,
      type: 'training',
      workoutType: 'legs1',
      workoutName: 'Legs 1',
      focus: 'Quad Focus',
      exercises: [
        {
          name: 'Leg Curls',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 3,
          repRanges: ['8-12', '12-15', '12-15'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Lower Weight 25% No Rest, Immediately Into Next Set (Drop Set)',
          setTypes: ['normal', 'drop_set', 'drop_set']
        },
        {
          name: 'Adductors',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Really feel the stretch, helps growth + flexibility',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hack Squats',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Back Squat',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Leg Curls',
          sets: 1,
          repRanges: ['15-20'],
          tempo: '2-2-2-0',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Calf Raises',
          sets: 2,
          repRanges: ['10-12', '10-12'],
          tempo: '4-3-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 4 Day 4: Rest Day - Phase 2
    {
      programDay: 25,
      week: 4,
      day: 4,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 4 Day 5: Push 2 (Shoulder Focus) - Phase 2
    {
      programDay: 26,
      week: 4,
      day: 5,
      phase: 2,
      type: 'training',
      workoutType: 'push2',
      workoutName: 'Push 2',
      focus: 'Shoulder Focus',
      exercises: [
        {
          name: 'Dumbbell Y Raises',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shoulder Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '4-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Seated Overhead Press',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Incline Chest Press Machine',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Incline Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Dips',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Set Cables Slightly Above Shoulder Height',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Dumbbell Lateral Raise',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Chest Fly Press',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Tricep Pushdown',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-2-2-2',
          rest: '2-5 Min',
          notes: 'Hold For 2 Seconds In The Stretch At The Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 4 Day 6: Pull 2 (Back Thickness Focus) - Phase 2
    {
      programDay: 27,
      week: 4,
      day: 6,
      phase: 2,
      type: 'training',
      workoutType: 'pull2',
      workoutName: 'Pull 2',
      focus: 'Back Thickness Focus',
      exercises: [
        {
          name: 'Straight Leg Deadlift',
          sets: 1,
          repRanges: ['6-9'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-2',
          rest: '1-2 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Chest Supported Row',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Please Use Hammer Strength Row If Available',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rack Chins',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Use an EZ Bar To Add Weight, Set Bench So Legs Are Parallel at Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Rows',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Neutral Grip',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Lat Pulldown',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rear Delt Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '10 sec',
          notes: '10s Between Sets, See Cluster Set in Glossary',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Reverse Cable Curls',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: 'Slow and Controlled, Zero Ego Here',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 4 Day 7: Rest Day - Phase 2
    {
      programDay: 28,
      week: 4,
      day: 7,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // ============================================================
    // WEEK 5
    // ============================================================

    // Week 5 Day 1: Legs 2 (Hamstring and Glute Focus) - Phase 2
    {
      programDay: 29,
      week: 5,
      day: 1,
      phase: 2,
      type: 'training',
      workoutType: 'legs2',
      workoutName: 'Legs 2',
      focus: 'Hamstring and Glute Focus',
      exercises: [
        {
          name: 'Single Leg Standing Leg Curl',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '30s/Leg, 1-2 Min/Set',
          notes: 'Keep Your Hips Locked in Place & Arch Your Back',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Adductor',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '4-1-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Leg Press',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Feet Higher On Platform',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Walking Lunge',
          sets: 2,
          repRanges: ['12-15 per leg', '12-15 per leg'],
          tempo: '4-1-2-1',
          rest: '30s/Leg, 2-5 Min/Set',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Leg Curl',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: null,
          notes: 'Bottom Is When Knees Start Coming Forward',
          setTypes: ['normal']
        },
        {
          name: 'Sitting Calf Raise',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '5-5-2-2',
          rest: '2-5 Min',
          notes: 'Slow On The Way Down & Hold Stretch--Good Luck',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 5 Day 2: Rest Day - Phase 2
    {
      programDay: 30,
      week: 5,
      day: 2,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 5 Day 3: Push 1 (Chest Focus) - Phase 2
    {
      programDay: 31,
      week: 5,
      day: 3,
      phase: 2,
      type: 'training',
      workoutType: 'push1',
      workoutName: 'Push 1',
      focus: 'Chest Focus',
      exercises: [
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm Up - Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Shoulder Press',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Smith Machine Close Grip Bench Press',
          sets: 2,
          repRanges: ['6-9', '10-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Tricep Extensions',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Decline Dumbbell Bench Press',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-2-2-2',
          rest: '2-5 Min',
          notes: 'Regular Eccentric, Explosive Concentric',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Lateral Raises',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tricep Rope Pushdown',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '1-3 Min',
          notes: 'Really Squeeze At The Bottom',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Chest Fly',
          sets: 2,
          repRanges: ['8-20', '8-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 5 Day 4: Pull 1 (Back Width Focus) - Phase 2
    {
      programDay: 32,
      week: 5,
      day: 4,
      phase: 2,
      type: 'training',
      workoutType: 'pull1',
      workoutName: 'Pull 1',
      focus: 'Back Width Focus',
      exercises: [
        {
          name: 'Pullover Machine or Rope Pullovers',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Plate-Loaded Pull Down',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Cable Lat Pulldown',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tbar Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '2-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Underhand Seated Cable Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bent Over Dumbbell Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Face Pulls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On Second Set If Needed',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 5 Day 5: Rest Day - Phase 2
    {
      programDay: 33,
      week: 5,
      day: 5,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 5 Day 6: Legs 1 (Quad Focus) - Phase 2
    {
      programDay: 34,
      week: 5,
      day: 6,
      phase: 2,
      type: 'training',
      workoutType: 'legs1',
      workoutName: 'Legs 1',
      focus: 'Quad Focus',
      exercises: [
        {
          name: 'Leg Curls',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Really feel the stretch, helps growth + flexibility',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Adductors',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hack Squats',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Back Squat',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Leg Curls',
          sets: 1,
          repRanges: ['15-20'],
          tempo: '2-2-2-0',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Calf Raises',
          sets: 2,
          repRanges: ['10-12', '10-12'],
          tempo: '4-3-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 5 Day 7: Rest Day - Phase 2
    {
      programDay: 35,
      week: 5,
      day: 7,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // ============================================================
    // WEEK 6
    // ============================================================

    // Week 6 Day 1: Push 2 (Shoulder Focus) - Phase 2
    {
      programDay: 36,
      week: 6,
      day: 1,
      phase: 2,
      type: 'training',
      workoutType: 'push2',
      workoutName: 'Push 2',
      focus: 'Shoulder Focus',
      exercises: [
        {
          name: 'Dumbbell Y Raises',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shoulder Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '4-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Seated Overhead Press',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Incline Chest Press Machine',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Incline Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Dips',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Set Cables Slightly Above Shoulder Height',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Dumbbell Lateral Raise',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Chest Fly Press',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Tricep Pushdown',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-2-2-2',
          rest: '2-5 Min',
          notes: 'Hold For 2 Seconds In The Stretch At The Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 6 Day 2: Pull 2 (Back Thickness Focus) - Phase 2
    {
      programDay: 37,
      week: 6,
      day: 2,
      phase: 2,
      type: 'training',
      workoutType: 'pull2',
      workoutName: 'Pull 2',
      focus: 'Back Thickness Focus',
      exercises: [
        {
          name: 'Straight Leg Deadlift',
          sets: 1,
          repRanges: ['6-9'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-2',
          rest: '1-2 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Chest Supported Row',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Please Use Hammer Strength Row If Available',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rack Chins',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Use an EZ Bar To Add Weight, Set Bench So Legs Are Parallel at Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Rows',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Neutral Grip',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Lat Pulldown',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rear Delt Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '10 sec',
          notes: '10s Between Sets, See Cluster Set in Glossary',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Reverse Cable Curls',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: 'Slow and Controlled, Zero Ego Here',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 6 Day 3: Rest Day - Phase 2
    {
      programDay: 38,
      week: 6,
      day: 3,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 6 Day 4: Legs 2 (Hamstring and Glute Focus) - Phase 2
    {
      programDay: 39,
      week: 6,
      day: 4,
      phase: 2,
      type: 'training',
      workoutType: 'legs2',
      workoutName: 'Legs 2',
      focus: 'Hamstring and Glute Focus',
      exercises: [
        {
          name: 'Single Leg Standing Leg Curl',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '30s/Leg, 1-2 Min/Set',
          notes: 'Keep Your Hips Locked in Place & Arch Your Back',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Adductor',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '4-1-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Leg Press',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Feet Higher On Platform',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Walking Lunge',
          sets: 2,
          repRanges: ['12-15 per leg', '12-15 per leg'],
          tempo: '4-1-2-1',
          rest: '30s/Leg, 2-5 Min/Set',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Leg Curl',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: null,
          notes: 'Bottom Is When Knees Start Coming Forward',
          setTypes: ['normal']
        },
        {
          name: 'Sitting Calf Raise',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '5-5-2-2',
          rest: '2-5 Min',
          notes: 'Slow On The Way Down & Hold Stretch--Good Luck',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 6 Day 5: Rest Day - Phase 2
    {
      programDay: 40,
      week: 6,
      day: 5,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 6 Day 6: Push 1 (Chest Focus) - Phase 2
    {
      programDay: 41,
      week: 6,
      day: 6,
      phase: 2,
      type: 'training',
      workoutType: 'push1',
      workoutName: 'Push 1',
      focus: 'Chest Focus',
      exercises: [
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm Up - Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Shoulder Press',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Smith Machine Close Grip Bench Press',
          sets: 2,
          repRanges: ['6-9', '10-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Tricep Extensions',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Decline Dumbbell Bench Press',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-2-2-2',
          rest: '2-5 Min',
          notes: 'Regular Eccentric, Explosive Concentric',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Lateral Raises',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tricep Rope Pushdown',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '1-3 Min',
          notes: 'Really Squeeze At The Bottom',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Chest Fly',
          sets: 2,
          repRanges: ['8-20', '8-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 6 Day 7: Pull 1 (Back Width Focus) - Phase 2
    {
      programDay: 42,
      week: 6,
      day: 7,
      phase: 2,
      type: 'training',
      workoutType: 'pull1',
      workoutName: 'Pull 1',
      focus: 'Back Width Focus',
      exercises: [
        {
          name: 'Pullover Machine or Rope Pullovers',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Plate-Loaded Pull Down',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Cable Lat Pulldown',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tbar Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '2-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Underhand Seated Cable Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bent Over Dumbbell Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Face Pulls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On Second Set If Needed',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // ============================================================
    // WEEK 7
    // ============================================================

    // Week 7 Day 1: Rest Day - Phase 2
    {
      programDay: 43,
      week: 7,
      day: 1,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 7 Day 2: Legs 1 (Quad Focus) - Phase 2
    {
      programDay: 44,
      week: 7,
      day: 2,
      phase: 2,
      type: 'training',
      workoutType: 'legs1',
      workoutName: 'Legs 1',
      focus: 'Quad Focus',
      exercises: [
        {
          name: 'Leg Curls',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Really feel the stretch, helps growth + flexibility',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Adductors',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hack Squats',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Back Squat',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Leg Curls',
          sets: 1,
          repRanges: ['15-20'],
          tempo: '2-2-2-0',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Calf Raises',
          sets: 2,
          repRanges: ['10-12', '10-12'],
          tempo: '4-3-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 7 Day 3: Rest Day - Phase 2
    {
      programDay: 45,
      week: 7,
      day: 3,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 7 Day 4: Push 2 (Shoulder Focus) - Phase 2
    {
      programDay: 46,
      week: 7,
      day: 4,
      phase: 2,
      type: 'training',
      workoutType: 'push2',
      workoutName: 'Push 2',
      focus: 'Shoulder Focus',
      exercises: [
        {
          name: 'Dumbbell Y Raises',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shoulder Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '4-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Seated Overhead Press',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Incline Chest Press Machine',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Incline Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Dips',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Set Cables Slightly Above Shoulder Height',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Dumbbell Lateral Raise',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Chest Fly Press',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Tricep Pushdown',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-2-2-2',
          rest: '2-5 Min',
          notes: 'Hold For 2 Seconds In The Stretch At The Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 7 Day 5: Pull 2 (Back Thickness Focus) - Phase 2
    {
      programDay: 47,
      week: 7,
      day: 5,
      phase: 2,
      type: 'training',
      workoutType: 'pull2',
      workoutName: 'Pull 2',
      focus: 'Back Thickness Focus',
      exercises: [
        {
          name: 'Straight Leg Deadlift',
          sets: 1,
          repRanges: ['6-9'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-2',
          rest: '1-2 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Chest Supported Row',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Please Use Hammer Strength Row If Available',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rack Chins',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Use an EZ Bar To Add Weight, Set Bench So Legs Are Parallel at Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Rows',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Neutral Grip',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Lat Pulldown',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rear Delt Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '10 sec',
          notes: '10s Between Sets, See Cluster Set in Glossary',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Reverse Cable Curls',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: 'Slow and Controlled, Zero Ego Here',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 7 Day 6: Rest Day - Phase 2
    {
      programDay: 48,
      week: 7,
      day: 6,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 7 Day 7: Legs 2 (Hamstring and Glute Focus) - Phase 2
    {
      programDay: 49,
      week: 7,
      day: 7,
      phase: 2,
      type: 'training',
      workoutType: 'legs2',
      workoutName: 'Legs 2',
      focus: 'Hamstring and Glute Focus',
      exercises: [
        {
          name: 'Single Leg Standing Leg Curl',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '30s/Leg, 1-2 Min/Set',
          notes: 'Keep Your Hips Locked in Place & Arch Your Back',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Adductor',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '4-1-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Leg Press',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Feet Higher On Platform',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Walking Lunge',
          sets: 2,
          repRanges: ['12-15 per leg', '12-15 per leg'],
          tempo: '4-1-2-1',
          rest: '30s/Leg, 2-5 Min/Set',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Leg Curl',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: null,
          notes: 'Bottom Is When Knees Start Coming Forward',
          setTypes: ['normal']
        },
        {
          name: 'Sitting Calf Raise',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '5-5-2-2',
          rest: '2-5 Min',
          notes: 'Slow On The Way Down & Hold Stretch--Good Luck',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // ============================================================
    // WEEK 8
    // ============================================================

    // Week 8 Day 1: Rest Day - Phase 2
    {
      programDay: 50,
      week: 8,
      day: 1,
      phase: 2,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 8 Day 2: Push 1 (Chest Focus) - Phase 2
    {
      programDay: 51,
      week: 8,
      day: 2,
      phase: 2,
      type: 'training',
      workoutType: 'push1',
      workoutName: 'Push 1',
      focus: 'Chest Focus',
      exercises: [
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm Up - Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Shoulder Press',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Machine Dips',
          sets: 2,
          repRanges: ['6-9', '10-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Regular Dips. Keep body more upright for tricep focus.',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tricep Rope Pushdown',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-2-2-2',
          rest: '2-5 Min',
          notes: 'Regular Eccentric, Explosive Concentric',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Lateral Raises',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Low Cable Chest Fly',
          sets: 2,
          repRanges: ['15-20', '15-20'],
          tempo: '3-1-2-3',
          rest: '1-3 Min',
          notes: 'Start With Cable Low and Bring Up',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Chest Fly',
          sets: 2,
          repRanges: ['8-20', '8-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // ============================================================
    // WEEK 8 Day 3 -> PHASE 3 BEGINS
    // ============================================================

    // Week 8 Day 3: Pull 1 (Back Width Focus) - Phase 3
    {
      programDay: 52,
      week: 8,
      day: 3,
      phase: 3,
      type: 'training',
      workoutType: 'pull1',
      workoutName: 'Pull 1',
      focus: 'Back Width Focus',
      exercises: [
        {
          name: 'Pullover Machine or Rope Pullovers',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Plate-Loaded Pull Down',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Cable Lat Pulldown',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Low Row Machine',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-2',
          rest: '2-5 Min',
          notes: 'Can Substitute With Yates Rows',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Single Arm Shrug',
          sets: 1,
          repRanges: ['8-12'],
          tempo: null,
          rest: '2-5 Min',
          notes: 'Use Other Hand To Support on An Incline Bench',
          setTypes: ['normal']
        },
        {
          name: 'Underhand Seated Cable Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Meadows Rows',
          sets: 2,
          repRanges: ['6-9', '10-13'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Quick Youtube Search',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hammer Curls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Keep Strict Form, Don\'t Move Elbows/Shoulders',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Face Pulls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On Second Set If Needed',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 8 Day 4: Rest Day - Phase 3
    {
      programDay: 53,
      week: 8,
      day: 4,
      phase: 3,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 8 Day 5: Legs 1 (Quad Focus) - Phase 3
    {
      programDay: 54,
      week: 8,
      day: 5,
      phase: 3,
      type: 'training',
      workoutType: 'legs1',
      workoutName: 'Legs 1',
      focus: 'Quad Focus',
      exercises: [
        {
          name: 'Single Arm Cable Curl',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '4-2-2-2',
          rest: '30-60 Sec',
          notes: 'Going For Pump Here.',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Leg Curls',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Pendulum Squats or Hack Squat',
          sets: 2,
          repRanges: ['6-9', '20+'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Aim for 20, But Go To Failure Wherever You Land',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Adductors',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Really feel the stretch, helps growth + flexibility',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Sitting Leg Curls',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: '45 Degree Hyperextensions',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Grab An Ez Bar if Need To Add Weight',
          setTypes: ['normal']
        },
        {
          name: 'Calf Raises',
          sets: 2,
          repRanges: ['10-12', '10-12'],
          tempo: '4-3-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 8 Day 6: Rest Day - Phase 3
    {
      programDay: 55,
      week: 8,
      day: 6,
      phase: 3,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 8 Day 7: Push 2 (Shoulder Focus) - Phase 3
    {
      programDay: 56,
      week: 8,
      day: 7,
      phase: 3,
      type: 'training',
      workoutType: 'push2',
      workoutName: 'Push 2',
      focus: 'Shoulder Focus',
      exercises: [
        {
          name: 'Dumbbell Y Raises',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shoulder Press Machine',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Seated Overhead Press',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Incline Dumbbell "A" Press',
          sets: 2,
          repRanges: ['6-9', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Regular Dumbbell Incline Bench With Hand Rotated Slightly to Form "A" at Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Dips',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Set Cables Slightly Above Shoulder Height',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Cuff Lateral Raise',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Think "Bring Elbows Together" not Fists/Hands',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Tricep Pushdown',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-2-2-2',
          rest: '2-5 Min',
          notes: 'Hold For 2 Seconds In The Stretch At The Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // ============================================================
    // WEEK 9
    // ============================================================

    // Week 9 Day 1: Pull 2 (Back Thickness Focus) - Phase 3
    {
      programDay: 57,
      week: 9,
      day: 1,
      phase: 3,
      type: 'training',
      workoutType: 'pull2',
      workoutName: 'Pull 2',
      focus: 'Back Thickness Focus',
      exercises: [
        {
          name: 'Adductors',
          sets: 1,
          repRanges: ['15-20'],
          tempo: '4-2-3-2',
          rest: '1-2 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Rack Pulls',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-2-2-1',
          rest: '1-2 Min',
          notes: 'Set Catches At Knee Height',
          setTypes: ['normal']
        },
        {
          name: 'Chest Supported Row',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Please Use Hammer Strength Row If Available',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rack Chins',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Use an EZ Bar To Add Weight, Set Bench So Legs Are Parallel at Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Rows',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Neutral Grip',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Lat Pulldown',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rear Delt Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '15-29'],
          tempo: '3-1-2-2',
          rest: '1-3 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Reverse Cable Curls',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: 'Slow and Controlled, Zero Ego Here',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 9 Day 2: Rest Day - Phase 3
    {
      programDay: 58,
      week: 9,
      day: 2,
      phase: 3,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 9 Day 3: Legs 2 (Hamstring and Glute Focus) - Phase 3
    {
      programDay: 59,
      week: 9,
      day: 3,
      phase: 3,
      type: 'training',
      workoutType: 'legs2',
      workoutName: 'Legs 2',
      focus: 'Hamstring and Glute Focus',
      exercises: [
        {
          name: 'Single Leg Standing Leg Curl',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '30s/Leg, 1-2 Min/Set',
          notes: 'Keep Your Hips Locked in Place & Arch Your Back',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '16'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Aim For 16 Reps Total in Your Rest Pause Set',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Adductor',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '4-1-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Straight Leg Deadlift',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'If No Machine, Do Dumbbell SLDL',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Walking Lunge',
          sets: 2,
          repRanges: ['8-12 per leg', '8-12 per leg'],
          tempo: '4-1-2-1',
          rest: '30s/Leg, 2-5 Min/Set',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Leg Curl',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: null,
          notes: 'Bottom Is When Knees Start Coming Forward',
          setTypes: ['normal']
        },
        {
          name: 'Sitting Calf Raise',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '5-5-2-2',
          rest: '2-5 Min',
          notes: 'Slow On The Way Down & Hold Stretch--Good Luck',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 9 Day 4: Rest Day - Phase 3
    {
      programDay: 60,
      week: 9,
      day: 4,
      phase: 3,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 9 Day 5: Push 1 (Chest Focus) - Phase 3
    {
      programDay: 61,
      week: 9,
      day: 5,
      phase: 3,
      type: 'training',
      workoutType: 'push1',
      workoutName: 'Push 1',
      focus: 'Chest Focus',
      exercises: [
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm Up - Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Press Machine',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Dumbbell Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Dumbbell Front Press',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'This Looks Like a Reverse Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Machine Dips',
          sets: 2,
          repRanges: ['6-9', '10-15'],
          tempo: '3-2-2-2',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Regular Dips. Keep body more upright for tricep focus.',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Tricep Rope Pushdown',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Regular Eccentric, Explosive Concentric',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Lateral Raises',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-3',
          rest: '2-5 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Low Cable Chest Fly',
          sets: 2,
          repRanges: ['15-20', '15-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Start With Cable Low and Bring Up',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Chest Fly',
          sets: 2,
          repRanges: ['8-20', '8-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 9 Day 6: Pull 1 (Back Width Focus) - Phase 3
    {
      programDay: 62,
      week: 9,
      day: 6,
      phase: 3,
      type: 'training',
      workoutType: 'pull1',
      workoutName: 'Pull 1',
      focus: 'Back Width Focus',
      exercises: [
        {
          name: 'Pullover Machine or Rope Pullovers',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Plate-Loaded Pull Down',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Cable Lat Pulldown',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Low Row Machine',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-2',
          rest: '2-5 Min',
          notes: 'Can Substitute With Yates Rows',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Single Arm Shrug',
          sets: 1,
          repRanges: ['8-12'],
          tempo: null,
          rest: '2-5 Min',
          notes: 'Use Other Hand To Support on An Incline Bench',
          setTypes: ['normal']
        },
        {
          name: 'Underhand Seated Cable Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Meadows Rows',
          sets: 2,
          repRanges: ['6-9', '10-13'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Quick Youtube Search',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hammer Curls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Keep Strict Form, Don\'t Move Elbows/Shoulders',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Face Pulls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On Second Set If Needed',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 9 Day 7: Rest Day - Phase 3
    {
      programDay: 63,
      week: 9,
      day: 7,
      phase: 3,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // ============================================================
    // WEEK 10
    // ============================================================

    // Week 10 Day 1: Legs 1 (Quad Focus) - Phase 3
    // NOTE: PDF heading says "Legs 1" but exercises match Pull 2 pattern.
    // Using the exercises as printed in the PDF for this day.
    {
      programDay: 64,
      week: 10,
      day: 1,
      phase: 3,
      type: 'training',
      workoutType: 'legs1',
      workoutName: 'Legs 1',
      focus: 'Quad Focus',
      exercises: [
        {
          name: 'Single Arm Cable Curl',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '4-2-2-2',
          rest: '30-60 Sec',
          notes: 'Going For Pump Here.',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Leg Curls',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Pendulum Squats or Hack Squat',
          sets: 2,
          repRanges: ['6-9', '20+'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Aim for 20, But Go To Failure Wherever You Land',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Adductors',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Really feel the stretch, helps growth + flexibility',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Sitting Leg Curls',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: '45 Degree Hyperextensions',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Grab An Ez Bar if Need To Add Weight',
          setTypes: ['normal']
        },
        {
          name: 'Calf Raises',
          sets: 2,
          repRanges: ['10-12', '10-12'],
          tempo: '4-3-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 10 Day 2: Rest Day - Phase 3
    {
      programDay: 65,
      week: 10,
      day: 2,
      phase: 3,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 10 Day 3: Push 2 (Shoulder Focus) - Phase 3
    {
      programDay: 66,
      week: 10,
      day: 3,
      phase: 3,
      type: 'training',
      workoutType: 'push2',
      workoutName: 'Push 2',
      focus: 'Shoulder Focus',
      exercises: [
        {
          name: 'Dumbbell Y Raises',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shoulder Press Machine',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Seated Overhead Press',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Incline Dumbbell "A" Press',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Regular Dumbbell Incline Bench With Hand Rotated Slightly to Form "A" at Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Dips',
          sets: 2,
          repRanges: ['12-15', '6x4'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Set Cables Slightly Above Shoulder Height',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Lying Cuff Lateral Raise',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Think "Bring Elbows Together" not Fists/Hands',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Tricep Pushdown',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-2-2-2',
          rest: '2-5 Min',
          notes: 'Hold For 2 Seconds In The Stretch At The Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 10 Day 4: Pull 2 (Back Thickness Focus) - Phase 3
    // NOTE: PDF heading says "Pull 2" but exercises match Legs 1 pattern.
    // Using exercises as printed in the PDF for this day.
    {
      programDay: 67,
      week: 10,
      day: 4,
      phase: 3,
      type: 'training',
      workoutType: 'pull2',
      workoutName: 'Pull 2',
      focus: 'Back Thickness Focus',
      exercises: [
        {
          name: 'Adductors',
          sets: 1,
          repRanges: ['15-20'],
          tempo: '4-2-3-2',
          rest: '1-2 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Rack Pulls',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-2-2-1',
          rest: '1-2 Min',
          notes: 'Set Catches At Knee Height',
          setTypes: ['normal']
        },
        {
          name: 'Chest Supported Row',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Please Use Hammer Strength Row If Available',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rack Chins',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Use an EZ Bar To Add Weight, Set Bench So Legs Are Parallel at Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Rows',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Neutral Grip',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Lat Pulldown',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Rear Delt Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '15-29'],
          tempo: '3-1-2-2',
          rest: '1-3 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Reverse Cable Curls',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: 'Slow and Controlled, Zero Ego Here',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 10 Day 5: Rest Day - Phase 3
    {
      programDay: 68,
      week: 10,
      day: 5,
      phase: 3,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 10 Day 6: Legs 2 (Hamstring and Glute Focus) - Phase 3
    {
      programDay: 69,
      week: 10,
      day: 6,
      phase: 3,
      type: 'training',
      workoutType: 'legs2',
      workoutName: 'Legs 2',
      focus: 'Hamstring and Glute Focus',
      exercises: [
        {
          name: 'Single Leg Standing Leg Curl',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '30s/Leg, 1-2 Min/Set',
          notes: 'Keep Your Hips Locked in Place & Arch Your Back',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '16'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Aim For 16 Reps Total in Your Rest Pause Set',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Adductor',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '4-1-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Straight Leg Deadlift',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'If No Machine, Do Dumbbell SLDL',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Dumbbell Walking Lunge',
          sets: 2,
          repRanges: ['8-12 per leg', '8-12 per leg'],
          tempo: '4-1-2-1',
          rest: '30s/Leg, 2-5 Min/Set',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Leg Curl',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Hip Thrust',
          sets: 1,
          repRanges: ['8-12'],
          tempo: '3-1-2-1',
          rest: null,
          notes: 'Bottom Is When Knees Start Coming Forward',
          setTypes: ['normal']
        },
        {
          name: 'Sitting Calf Raise',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '5-5-2-2',
          rest: '2-5 Min',
          notes: 'Slow On The Way Down & Hold Stretch--Good Luck',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 10 Day 7: Rest Day - Phase 3
    {
      programDay: 70,
      week: 10,
      day: 7,
      phase: 3,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // ============================================================
    // WEEK 11 -> PHASE 4 BEGINS
    // ============================================================

    // Week 11 Day 1: Push 1 (Chest Focus) - Phase 4
    {
      programDay: 71,
      week: 11,
      day: 1,
      phase: 4,
      type: 'training',
      workoutType: 'push1',
      workoutName: 'Push 1',
      focus: 'Chest Focus',
      exercises: [
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm Up - Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Press Machine',
          sets: 2,
          repRanges: ['6-9', '16'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Do Not Rest Pause Any Non Machine W/O Spotter',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Lying Dumbbell Front Press',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'This Looks Like a Reverse Bench',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Machine Dips',
          sets: 1,
          repRanges: ['16'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Regular Dips. Keep body more upright for tricep focus.',
          setTypes: ['rest_pause']
        },
        {
          name: 'Tricep Rope Pushdown',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-2-2-2',
          rest: '2-5 Min',
          notes: 'Regular Eccentric, Explosive Concentric',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Cable Lateral Raises',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Low Cable Chest Fly',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-3',
          rest: '1-3 Min',
          notes: 'Start With Cable Low and Bring Up',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Chest Fly',
          sets: 2,
          repRanges: ['15-20', '15-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 11 Day 2: Pull 1 (Back Width Focus) - Phase 4
    {
      programDay: 72,
      week: 11,
      day: 2,
      phase: 4,
      type: 'training',
      workoutType: 'pull1',
      workoutName: 'Pull 1',
      focus: 'Back Width Focus',
      exercises: [
        {
          name: 'Pullover Machine or Rope Pullovers',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Plate-Loaded Pull Down',
          sets: 2,
          repRanges: ['6-9', '16'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Cable Lat Pulldown',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Tbar Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shrugs',
          sets: 1,
          repRanges: ['6-10'],
          tempo: '2-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal']
        },
        {
          name: 'Underhand Seated Cable Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Bent Over Dumbbell Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'drop_set']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Face Pulls',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '2-1-1-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On Second Set If Needed',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 11 Day 3: Rest Day - Phase 4
    {
      programDay: 73,
      week: 11,
      day: 3,
      phase: 4,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 11 Day 4: Legs 1 (Quad Focus) - Phase 4
    {
      programDay: 74,
      week: 11,
      day: 4,
      phase: 4,
      type: 'training',
      workoutType: 'legs1',
      workoutName: 'Legs 1',
      focus: 'Quad Focus',
      exercises: [
        {
          name: 'Adductors',
          sets: 1,
          repRanges: ['15-20'],
          tempo: '4-2-3-2',
          rest: '1-2 Min',
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Rack Pulls',
          sets: 2,
          repRanges: ['6-9', '10-13'],
          tempo: '3-2-2-1',
          rest: '1-2 Min',
          notes: 'Set Catches At Knee Height',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Supported Row',
          sets: 2,
          repRanges: ['6-9', '16'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Please Use Hammer Strength Row If Available',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Rack Chins',
          sets: 2,
          repRanges: ['6-9', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Use an EZ Bar To Add Weight, Set Bench So Legs Are Parallel at Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Cable Rows',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Neutral Grip',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Lat Pulldown',
          sets: 3,
          repRanges: ['8-12', '12-15', '15-20'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal', 'drop_set']
        },
        {
          name: 'Rear Delt Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '1-3 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Reverse Cable Curls',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: 'Slow and Controlled, Zero Ego Here',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 11 Day 5: Rest Day - Phase 4
    {
      programDay: 75,
      week: 11,
      day: 5,
      phase: 4,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 11 Day 6: Push 2 (Shoulder Focus) - Phase 4
    {
      programDay: 76,
      week: 11,
      day: 6,
      phase: 4,
      type: 'training',
      workoutType: 'push2',
      workoutName: 'Push 2',
      focus: 'Shoulder Focus',
      exercises: [
        {
          name: 'Dumbbell Y Raises',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shoulder Press Machine',
          sets: 2,
          repRanges: ['8-12', '16'],
          tempo: '4-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Seated Overhead Press',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Incline Dumbbell "A" Press',
          sets: 3,
          repRanges: ['8-12', '12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Regular Dumbbell Incline Bench With Hand Rotated Slightly to Form "A" at Top',
          setTypes: ['normal', 'normal', 'normal']
        },
        {
          name: 'Cable Dips',
          sets: 2,
          repRanges: ['12-15', '6x4'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Set Cables Slightly Above Shoulder Height',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Lying Cuff Lateral Raise',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Think "Bring Elbows Together" not Fists/Hands, Double Drop Set',
          setTypes: ['normal', 'drop_set']
        },
        {
          name: 'Single-Arm Cable Tricep Pushdown',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-2-2-2',
          rest: '2-5 Min',
          notes: 'Hold For 2 Seconds In The Stretch At The Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 11 Day 7: Pull 2 (Back Thickness Focus) - Phase 4
    {
      programDay: 77,
      week: 11,
      day: 7,
      phase: 4,
      type: 'training',
      workoutType: 'pull2',
      workoutName: 'Pull 2',
      focus: 'Back Thickness Focus',
      exercises: [
        {
          name: 'Single Arm Cable Curl',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '4-2-2-2',
          rest: '30-60 Sec',
          notes: 'Going For Pump Here.',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Leg Curls',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Pendulum Squats or Hack Squat',
          sets: 3,
          repRanges: ['6-9', '12-15', '20+'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Aim for 20, But Go To Failure Wherever You Land',
          setTypes: ['normal', 'normal', 'normal']
        },
        {
          name: 'Adductors',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Really feel the stretch, helps growth + flexibility',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Sitting Leg Curls',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-3-2',
          rest: '2-5 Min',
          notes: 'Double Drop Set',
          setTypes: ['normal', 'drop_set']
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: '45 Degree Hyperextensions',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Grab An Ez Bar if Need To Add Weight',
          setTypes: ['normal']
        },
        {
          name: 'Calf Raises',
          sets: 2,
          repRanges: ['10-12', '10-12'],
          tempo: '4-3-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // ============================================================
    // WEEK 12
    // ============================================================

    // Week 12 Day 1: Rest Day - Phase 4
    {
      programDay: 78,
      week: 12,
      day: 1,
      phase: 4,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 12 Day 2: Legs 2 (Hamstring and Glute Focus) - Phase 4
    {
      programDay: 79,
      week: 12,
      day: 2,
      phase: 4,
      type: 'training',
      workoutType: 'legs2',
      workoutName: 'Legs 2',
      focus: 'Hamstring and Glute Focus',
      exercises: [
        {
          name: 'Single Leg Standing Leg Curl',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '30s/Leg, 1-2 Min/Set',
          notes: 'Keep Your Hips Locked in Place & Arch Your Back',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Aim For 16 Reps Total in Your Rest Pause Set',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Adductor',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '4-1-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Straight Leg Deadlift',
          sets: 3,
          repRanges: ['6-9', '10-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'If No Machine, Do Dumbbell SLDL',
          setTypes: ['normal', 'normal', 'normal']
        },
        {
          name: 'Dumbbell Walking Lunge',
          sets: 2,
          repRanges: ['12-15 per leg', '12-15 per leg'],
          tempo: '4-1-2-1',
          rest: '30s/Leg, 2-5 Min/Set',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Seated Leg Curl',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Double Drop Set',
          setTypes: ['normal', 'drop_set']
        },
        {
          name: 'Hip Thrust',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: null,
          notes: 'Bottom Is When Knees Start Coming Forward',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Sitting Calf Raise',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '5-5-2-2',
          rest: '2-5 Min',
          notes: 'Slow On The Way Down & Hold Stretch--Good Luck',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 12 Day 3: Rest Day - Phase 4
    {
      programDay: 80,
      week: 12,
      day: 3,
      phase: 4,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 12 Day 4: Push 1 (Chest Focus) - Phase 4
    {
      programDay: 81,
      week: 12,
      day: 4,
      phase: 4,
      type: 'training',
      workoutType: 'push1',
      workoutName: 'Push 1',
      focus: 'Chest Focus',
      exercises: [
        {
          name: 'Pec Dec',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm Up - Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Press Machine',
          sets: 3,
          repRanges: ['6-9', '10-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Do Not Rest Pause Any Non Machine W/O Spotter',
          setTypes: ['normal', 'normal', 'normal']
        },
        {
          name: 'Lying Dumbbell Front Press',
          sets: 3,
          repRanges: ['8-12', '12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'This Looks Like a Reverse Bench',
          setTypes: ['normal', 'normal', 'normal']
        },
        {
          name: 'Machine Dips',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Regular Dips. Keep body more upright for tricep focus.',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Tricep Rope Pushdown',
          sets: 2,
          repRanges: ['8-12', '20'],
          tempo: '3-2-2-2',
          rest: '2-5 Min',
          notes: 'Regular Eccentric, Explosive Concentric',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Cable Lateral Raises',
          sets: 2,
          repRanges: ['8-12', '8-12'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Low Cable Chest Fly',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-3',
          rest: '1-3 Min',
          notes: 'Start With Cable Low and Bring Up, Double Drop Set',
          setTypes: ['normal', 'drop_set']
        },
        {
          name: 'Seated Cable Chest Fly',
          sets: 2,
          repRanges: ['15-20', '15-20'],
          tempo: '3-2-3-2',
          rest: '1-3 Min',
          notes: 'Lower Weight On 2nd Set If Needed',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 12 Day 5: Pull 1 (Back Width Focus) - Phase 4
    {
      programDay: 82,
      week: 12,
      day: 5,
      phase: 4,
      type: 'training',
      workoutType: 'pull1',
      workoutName: 'Pull 1',
      focus: 'Back Width Focus',
      exercises: [
        {
          name: 'Pullover Machine or Rope Pullovers',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Plate-Loaded Pull Down',
          sets: 3,
          repRanges: ['6-9', '10-12', '12-15'],
          tempo: '3-2-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Cable Lat Pulldown',
          setTypes: ['normal', 'normal', 'normal']
        },
        {
          name: 'Tbar Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Lat Pulldown',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Neutral Grip, Lat Bias',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Underhand Seated Cable Row',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: 'Double Drop Set',
          setTypes: ['normal', 'drop_set']
        },
        {
          name: 'Bent Over Dumbbell Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '2-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Squeeze At The Top',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Face Pulls',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-1-1-1',
          rest: '2-5 Min',
          notes: 'Lower Weight On Second Set If Needed, Double Drop Set',
          setTypes: ['normal', 'drop_set']
        }
      ]
    },

    // Week 12 Day 6: Rest Day - Phase 4
    {
      programDay: 83,
      week: 12,
      day: 6,
      phase: 4,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 12 Day 7: Legs 1 (Quad Focus) - Phase 4
    {
      programDay: 84,
      week: 12,
      day: 7,
      phase: 4,
      type: 'training',
      workoutType: 'legs1',
      workoutName: 'Legs 1',
      focus: 'Quad Focus',
      exercises: [
        {
          name: 'Single Arm Cable Curl',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '4-2-2-2',
          rest: '30-60 Sec',
          notes: 'Going For Pump Here.',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Lying Leg Curls',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Pendulum Squats or Hack Squat',
          sets: 2,
          repRanges: ['6-9', '6x4'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Aim for 20, But Go To Failure Wherever You Land',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Adductors',
          sets: 2,
          repRanges: ['10-15', '15-20'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Really feel the stretch, helps growth + flexibility',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Sitting Leg Curls',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-3-2',
          rest: '2-5 Min',
          notes: 'Double Drop Set',
          setTypes: ['normal', 'drop_set']
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: '45 Degree Hyperextensions',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '3-1-2-2',
          rest: '2-5 Min',
          notes: 'Grab An Ez Bar if Need To Add Weight',
          setTypes: ['normal']
        },
        {
          name: 'Calf Raises',
          sets: 2,
          repRanges: ['10-12', '10-12'],
          tempo: '4-3-2-2',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // ============================================================
    // WEEK 13
    // ============================================================

    // Week 13 Day 1: Rest Day - Phase 4
    {
      programDay: 85,
      week: 13,
      day: 1,
      phase: 4,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 13 Day 2: Push 2 (Shoulder Focus) - Phase 4
    {
      programDay: 86,
      week: 13,
      day: 2,
      phase: 4,
      type: 'training',
      workoutType: 'push2',
      workoutName: 'Push 2',
      focus: 'Shoulder Focus',
      exercises: [
        {
          name: 'Dumbbell Y Raises',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '1-2 Min',
          notes: 'Warm-Up Not Done To Failure',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Shoulder Press Machine',
          sets: 2,
          repRanges: ['8-12', '16'],
          tempo: '4-1-2-1',
          rest: '2-5 Min',
          notes: 'Can Substitute W/ Seated Overhead Press',
          setTypes: ['normal', 'rest_pause']
        },
        {
          name: 'Incline Dumbbell "A" Press',
          sets: 10,
          repRanges: ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: '100 Reps As Fast In As Little Time As Possible',
          setTypes: ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal']
        },
        {
          name: 'Lying Cuff Lateral Raise',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Single-Arm Cable Tricep Pushdown',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '2-2-2-2',
          rest: '2-5 Min',
          notes: 'Hold For 2 Seconds In The Stretch At The Top',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Abs',
          sets: 3,
          repRanges: ['8-20', '8-20', '8-20'],
          tempo: null,
          rest: '1-2 Min',
          notes: 'Favorite Exercise, Nothing Heavy',
          setTypes: ['normal', 'normal', 'normal']
        }
      ]
    },

    // Week 13 Day 3: Pull 2 (Back Thickness Focus) - Phase 4
    {
      programDay: 87,
      week: 13,
      day: 3,
      phase: 4,
      type: 'training',
      workoutType: 'pull2',
      workoutName: 'Pull 2',
      focus: 'Back Thickness Focus',
      exercises: [
        {
          name: 'Adductors',
          sets: 1,
          repRanges: ['15-20'],
          tempo: '4-2-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal']
        },
        {
          name: 'Rack Pulls',
          sets: 2,
          repRanges: ['6-9', '10-13'],
          tempo: '3-2-2-1',
          rest: '1-2 Min',
          notes: 'Set Catches At Knee Height',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Chest Supported Row',
          sets: 2,
          repRanges: ['6-9', '6x4'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Please Use Hammer Strength Row If Available',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Pull-Ups',
          sets: 5,
          repRanges: ['AMRAP', 'AMRAP', 'AMRAP', 'AMRAP', 'AMRAP'],
          tempo: '3-1-2-2',
          rest: '60 Sec',
          notes: 'Don\'t Add Weight, Goal is 50 Reps',
          setTypes: ['normal', 'normal', 'normal', 'normal', 'normal']
        },
        {
          name: 'Seated Cable Rows',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: 'Neutral Grip, Double Drop Set',
          setTypes: ['normal', 'drop_set']
        },
        {
          name: 'Rear Delt Rows',
          sets: 2,
          repRanges: ['8-12', '12-15'],
          tempo: '3-1-2-1',
          rest: '2-5 Min',
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Cable Curls',
          sets: 1,
          repRanges: ['12-15'],
          tempo: '3-1-2-2',
          rest: null,
          notes: 'Triple Drop Set',
          setTypes: ['drop_set']
        },
        {
          name: 'Hammer Curls',
          sets: 2,
          repRanges: ['6-9', '10-12'],
          tempo: '3-1-3-1',
          rest: '2-5 Min',
          notes: 'Slow and Controlled, Zero Ego Here',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 13 Day 4: Rest Day - Phase 4
    {
      programDay: 88,
      week: 13,
      day: 4,
      phase: 4,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 13 Day 5: Legs 2 (Hamstring and Glute Focus) - Phase 4
    {
      programDay: 89,
      week: 13,
      day: 5,
      phase: 4,
      type: 'training',
      workoutType: 'legs2',
      workoutName: 'Legs 2',
      focus: 'Hamstring and Glute Focus',
      exercises: [
        {
          name: 'Single Leg Standing Leg Curl',
          sets: 2,
          repRanges: ['8-12', '15-20'],
          tempo: '3-1-2-2',
          rest: '30s/Leg, 1-2 Min/Set',
          notes: 'Keep Your Hips Locked in Place & Arch Your Back',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Extensions',
          sets: 2,
          repRanges: ['8-12', '6x4'],
          tempo: '4-1-3-2',
          rest: '2-5 Min',
          notes: 'Aim For 16 Reps Total in Your Rest Pause Set',
          setTypes: ['normal', 'cluster']
        },
        {
          name: 'Adductor',
          sets: 2,
          repRanges: ['12-15', '15-20'],
          tempo: '4-1-3-2',
          rest: null,
          notes: null,
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Leg Press',
          sets: 5,
          repRanges: ['10-15', '10-15', '10-15', '10-15', '10-15'],
          tempo: '3-1-2-1',
          rest: 'Superset with Leg Curl',
          notes: 'Go Lighter, Be Safe, Goal Is Max Pump',
          setTypes: ['normal', 'normal', 'normal', 'normal', 'normal']
        },
        {
          name: 'Seated Leg Curl',
          sets: 5,
          repRanges: ['10-15', '10-15', '10-15', '10-15', '10-15'],
          tempo: '3-1-2-2',
          rest: '60 Sec',
          notes: 'Rest 60 Sec Between Superset After Leg Curls',
          setTypes: ['normal', 'normal', 'normal', 'normal', 'normal']
        },
        {
          name: 'Hip Thrust',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '3-1-2-1',
          rest: null,
          notes: 'Bottom Is When Knees Start Coming Forward',
          setTypes: ['normal', 'normal']
        },
        {
          name: 'Sitting Calf Raise',
          sets: 2,
          repRanges: ['12-15', '12-15'],
          tempo: '5-5-2-2',
          rest: '2-5 Min',
          notes: 'Slow On The Way Down & Hold Stretch--Good Luck',
          setTypes: ['normal', 'normal']
        }
      ]
    },

    // Week 13 Day 6: Rest Day (Deload) - Phase 4
    {
      programDay: 90,
      week: 13,
      day: 6,
      phase: 4,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    },

    // Week 13 Day 7: Rest Day (Send Ox) - Phase 4
    {
      programDay: 91,
      week: 13,
      day: 7,
      phase: 4,
      type: 'rest',
      workoutType: null,
      workoutName: null,
      focus: null,
      exercises: []
    }
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROGRAM;
}
