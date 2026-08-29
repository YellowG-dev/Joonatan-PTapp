/**
 * Joonatan — program data.
 *
 * Ported from pt-app-joonatan.jsx (the monolith) with no programming changes:
 * same split, same exercises, same prescriptions, same mobility flow, same
 * schedule. Only the structure moved.
 *
 * Differences from Henna, which is why the engine had to grow:
 *   - tracks bodyweight (kg) and sleep (hours) as measured numbers
 *   - deload is a manual toggle, trimming volume ~40%
 *   - four training days rather than three
 *   - nutrition and testing were already switched off in his app
 */

export const PROGRAM_ID = "joonatan";
export const CLIENT_NAME = "Joonatan";
export const APP_VERSION = "2.0.0";

export const SLOTS = ["strength"];

/* ------------------------------- Strength -------------------------------- */

const PUSH = {
  label: "Push — Chest, Shoulders, Triceps",
  cat: "strength",
  exercises: [
    { id: "ps-1", name: "Barbell Bench Press", presc: "4×6–10 · RPE 7–9", sets: 4 },
    { id: "ps-2", name: "Overhead Press (Barbell)", presc: "4×6–10 · RPE 7–9", sets: 4 },
    { id: "ps-3", name: "Incline Dumbbell Press", presc: "3×8–12 · RPE 7–8", sets: 3 },
    { id: "ps-4", name: "Lateral Raise", presc: "3×12–15 · RPE 8", sets: 3 },
    { id: "ps-5", name: "Triceps Pushdown", presc: "3×12–15 · RPE 8", sets: 3 },
    { id: "ps-6", name: "Ab Wheel Rollout (or Hollow Body Hold)", presc: "3×8–12 · RPE 7–8", sets: 3 },
  ],
};

const PULL = {
  label: "Pull — Back, Biceps, Rear Delts",
  cat: "strength",
  exercises: [
    { id: "pl-1", name: "Conventional Deadlift", presc: "4×5–8 · RPE 7–9", sets: 4 },
    { id: "pl-2", name: "Pull-Up / Lat Pulldown", presc: "4×6–10 · RPE 7–9", sets: 4 },
    { id: "pl-3", name: "Barbell Row", presc: "3×8–12 · RPE 7–8", sets: 3 },
    { id: "pl-4", name: "Face Pull", presc: "3×12–15 · RPE 8", sets: 3 },
    { id: "pl-5", name: "Barbell or Dumbbell Curl", presc: "3×10–15 · RPE 8", sets: 3 },
    { id: "pl-6", name: "Pallof Press", presc: "2×12–15/side · RPE 7", sets: 2 },
  ],
};

const LEGS = {
  label: "Legs — Squat, Hinge & Unilateral",
  cat: "strength",
  exercises: [
    { id: "lg-1", name: "Back Squat", presc: "4×6–10 · RPE 7–9", sets: 4 },
    { id: "lg-2", name: "Romanian Deadlift", presc: "3×8–12 · RPE 7–8", sets: 3 },
    { id: "lg-3", name: "Bulgarian Split Squat", presc: "3×10–12/leg · RPE 7–8", sets: 3 },
    { id: "lg-4", name: "Leg Curl", presc: "3×10–15 · RPE 8", sets: 3 },
    { id: "lg-5", name: "Standing Calf Raise", presc: "3×12–15 · RPE 8", sets: 3 },
    { id: "lg-6", name: "Hanging Leg Raise", presc: "3×10–15 · RPE 8", sets: 3 },
  ],
};

const FULL = {
  label: "Full Body — Second Exposure",
  cat: "strength",
  exercises: [
    { id: "fb-1", name: "Front Squat (or Goblet Squat)", presc: "3×8–10 · RPE 7–8", sets: 3 },
    { id: "fb-2", name: "Incline Dumbbell Press", presc: "3×8–12 · RPE 7–8", sets: 3 },
    { id: "fb-3", name: "Seated Cable Row", presc: "3×10–12 · RPE 7–8", sets: 3 },
    { id: "fb-4", name: "Barbell Hip Thrust", presc: "3×10–12 · RPE 7–8", sets: 3 },
    { id: "fb-5", name: "Lateral Raise", presc: "3×12–15 · RPE 8", sets: 3 },
    { id: "fb-6", name: "Side Plank", presc: "3×30–45s/side · RPE 7–8", sets: 3 },
  ],
};

export const BLOCKS = {
  strength: { push: PUSH, pull: PULL, legs: LEGS, full: FULL },
};

export const SLOT_OPTIONS = {
  strength: [
    { value: null, label: "Rest" },
    { value: "push", label: "Push" },
    { value: "pull", label: "Pull" },
    { value: "legs", label: "Legs" },
    { value: "full", label: "Full Body" },
  ],
};

export const SLOT_META = {
  strength: { label: "Strength", color: "#E3A23C" },
};

/* ------------------------------- Schedule -------------------------------- */
// Tue / Thu / Sat / Sun, as in the original. No A/B alternation.

const WEEK = {
  1: { strength: null, note: "Rest day" },
  2: { strength: "legs" },
  3: { strength: null, note: "Rest day" },
  4: { strength: "full" },
  5: { strength: null, note: "Rest day" },
  6: { strength: "push" },
  0: { strength: "pull" },
};

export const SCHEDULE = { A: WEEK, B: WEEK };

/* ------------------------------- Mobility -------------------------------- */

export const MOBILITY = [
  { id: "mob-1", name: "Neck CARs", presc: "45s · Bodyweight", video: "https://www.youtube.com/watch?v=kSTk327mllo" },
  { id: "mob-2", name: "Chin Nod / Chin Tuck Holds", presc: "45s (3×10s) · Bodyweight", video: "https://www.youtube.com/watch?v=_AknIUAwvP0" },
  { id: "mob-3", name: "Upper Trap + Levator Scapulae Stretch", presc: "60s (30/side)", video: "https://www.youtube.com/watch?v=DZs3FNcuoXA" },
  { id: "mob-4", name: "Wall Slides", presc: "60s · Wall", video: "https://www.youtube.com/watch?v=UB_n4DxOTCo" },
  { id: "mob-5", name: "Thoracic Extension over Roller", presc: "60s · Foam roller", video: "https://www.youtube.com/watch?v=9Y11Kc0E0og" },
  { id: "mob-6", name: "Shoulder CARs", presc: "45s · Bodyweight", video: "https://www.youtube.com/watch?v=Ag1yVYbPXeg" },
  { id: "mob-7", name: "90/90 Hip Switch", presc: "90s · Mat/floor", video: "https://www.youtube.com/watch?v=qq_Z7sAmVrA" },
  { id: "mob-8", name: "Half-kneeling Hip Flexor + Reach", presc: "90s (45/side) · Mat/pad", video: "https://www.youtube.com/watch?v=KyoK4Rf6_bE" },
  { id: "mob-9", name: "Adductor Rock-back", presc: "60s (30/side) · Mat/floor", video: "https://www.youtube.com/watch?v=uZyLZDxcD38" },
  { id: "mob-10", name: "Ankle Dorsiflexion Rock", presc: "60s · Wall", video: "https://www.youtube.com/watch?v=Y1IZXkdPPdw" },
];

/* --------------------------- Daily sections ------------------------------ */

export const DAILY = [
  {
    key: "mobility",
    cat: "mobility",
    title: "Daily Mobility Flow",
    subtitle: "~10 min · evening default, morning is fine too",
    tasks: MOBILITY.map((m) => ({ id: m.id, name: m.name, presc: m.presc, video: m.video })),
  },
  {
    key: "check",
    cat: "check",
    title: "Daily Check",
    subtitle: null,
    tasks: [
      { id: "chk-weigh", type: "number", unit: "kg", name: "Morning weigh-in", presc: "7-day rolling avg" },
      { id: "chk-sleep", type: "number", unit: "h", name: "Sleep", presc: "Hours slept last night" },
      { id: "chk-walk", name: "Walk 10,000 steps", presc: "Daily step target" },
      { id: "chk-water", name: "Drink 2 L water", presc: "Daily hydration target" },
      { id: "chk-notes", type: "notes", name: "Notes", presc: "Optional — how the day felt" },
    ],
  },
];

/* -------------------------------- Wiring --------------------------------- */

export const PROGRAM = {
  id: PROGRAM_ID,
  clientName: CLIENT_NAME,
  slots: SLOTS,
  blocks: BLOCKS,
  schedule: SCHEDULE,
  daily: DAILY,
  restLabel: "Rest Day",
  restSubtitle: "No strength scheduled today — mobility still applies",
  gentlerNote: "Deload week — cut sets ~40%, same intensity",
  deloadAnchor: null,
  // UI flags. showDeloadToggle draws the weekly D column in the Calendar;
  // usesHeartRate reveals the Max HR field in Settings.
  showDeloadToggle: true,
  usesHeartRate: false,
  tracking: {
    scales: [],
    numbers: [
      { id: "chk-weigh", label: "Bodyweight", unit: "kg", chart: true, rolling: 7 },
      { id: "chk-sleep", label: "Sleep", unit: "h", chart: true, rolling: 7 },
    ],
  },
};

export default PROGRAM;
