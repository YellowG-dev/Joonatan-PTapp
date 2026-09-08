/**
 * Joonatan — config. Same shape as Henna's; different program, different
 * theme. app.jsx is byte-identical between the two apps.
 *
 * Theme kept as the original dark amber/teal so the app looks the same to him
 * as it did before the rebuild.
 */
import React from "react";
import { Dumbbell, Wind, Scale, Footprints, Flame } from "lucide-react";
import PROGRAM_DATA, { MOBILITY, BLOCKS, SLOT_OPTIONS, SLOT_META, APP_VERSION } from "./core/program-joonatan.js";

export { MOBILITY, BLOCKS, SLOT_OPTIONS, SLOT_META, APP_VERSION };

export const PROGRAM = PROGRAM_DATA;
export const CLIENT_LABEL = "Daily PT · Joonatan";
// Used to tag rows in the shared backup sheet. Must match the tab name.
export const CLIENT_NAME = "Joonatan";

// Prefix matters: localStorage is scoped per ORIGIN, not per path, so all
// three apps on yellowg-dev.github.io share one bucket. The previous build
// used bare keys, which would have collided with the other apps the moment
// two were opened on the same device.
export const STORAGE_PREFIX = "ptAppJoonatan_";

export const START_DATE = new Date(2026, 0, 1);
export const RAMP_WEEKS = 0; // no easing-in period; he is already training

export const BACKUP_URL = "";

// Supabase connection. Safe to commit — the publishable key is designed to be
// public and only says "a browser is calling". Row-level security is what
// protects the data. NEVER put the sb_secret_ key here.
export const SUPABASE_URL = "https://qpkdqyazdzhoohowkouy.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_VCvYuYUAC9Dnf3kiLNB93g_tP_5c473";

const ACCENT = "#E3A23C";   // amber
const ACCENT_2 = "#4CB6C4"; // teal

export const THEME = {
  BG: "#10131A",
  CARD: "#1A1F29",
  BORDER: "#2A3140",
  TEXT_PRIMARY: "#EEF0F3",
  TEXT_SECONDARY: "#8891A3",
  TEXT_MUTED: "#5C6577",
  ACCENT,
  ACCENT_2,
  HEAT_RGB: "111,207,151",
  FONT_DISPLAY: "'Space Grotesk', system-ui, sans-serif",
  FONT_BODY: "'IBM Plex Sans', system-ui, sans-serif",
  FONT_MONO: "'IBM Plex Mono', ui-monospace, monospace",
  FONT_IMPORT:
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
  CATS: {
    strength: { label: "Strength", color: ACCENT, Icon: Dumbbell },
    mobility: { label: "Mobility", color: "#7FB88F", Icon: Wind },
    check: { label: "Check", color: "#8891A3", Icon: Scale },
    rest: { label: "Rest", color: "#8891A3", Icon: Scale },
    activity: { label: "Activity", color: "#9C8CF0", Icon: Footprints },
    yoga: { label: "Yoga", color: "#9C8CF0", Icon: Flame },
  },
};

/* ------------------------------ Program tab ------------------------------- */

export function ProgramView({ Section, ExerciseList, theme }) {
  const { ACCENT: A, TEXT_MUTED, TEXT_SECONDARY, FONT_MONO } = theme;
  return (
    <div className="px-4 max-w-md mx-auto space-y-3">
      <Section title="The week" subtitle="4 sessions · Push / Pull / Legs / Full" color={A} defaultOpen>
        <div className="space-y-1 text-xs">
          {[["Mon", "Rest"], ["Tue", "Legs"], ["Wed", "Rest"], ["Thu", "Full Body"], ["Fri", "Rest"], ["Sat", "Push"], ["Sun", "Pull"]].map(([d, s]) => (
            <div key={d} className="flex items-center justify-between">
              <span style={{ fontFamily: FONT_MONO, color: TEXT_SECONDARY, width: 46 }} className="shrink-0">{d}</span>
              <span className="flex-1">{s}</span>
            </div>
          ))}
        </div>
        <p style={{ color: TEXT_MUTED }} className="text-xs">
          Every muscle group gets hit twice a week — the classic split plus a full-body second exposure. Mobility
          flow daily, on training days and rest days alike.
        </p>
      </Section>

      {["push", "pull", "legs", "full"].map((k) => (
        <Section key={k} title={BLOCKS.strength[k].label} color={A}>
          <ExerciseList exercises={BLOCKS.strength[k].exercises} color={A} />
        </Section>
      ))}

      <Section title="Progression" subtitle="Double progression" color={A}>
        <div className="text-xs space-y-2">
          <p>
            Work at the given RPE. When every set hits the top of the rep range at the target RPE, add the smallest
            increment available and drop back to the bottom of the range.
          </p>
          <p style={{ color: TEXT_MUTED }}>
            RPE 7 means roughly 3 reps left in the tank; RPE 9 means about 1. If a session feels like a 10 across the
            board, that's a signal to use the deload switch rather than push through.
          </p>
        </div>
      </Section>

      <Section title="Deload" color={theme.ACCENT_2}>
        <p className="text-xs">
          The switch in Settings trims volume by roughly 40% while keeping the weight the same. Roughly every fourth
          week, or whenever sleep and energy have been poor for a stretch.
        </p>
      </Section>

      <Section title="Daily mobility" subtitle="~10 min" color="#7FB88F">
        <ExerciseList exercises={MOBILITY} color="#7FB88F" />
      </Section>

      <Section title="What gets tracked" color={theme.CATS.check.color}>
        <div className="text-xs space-y-2">
          <p><strong>Bodyweight</strong> — watch the 7-day rolling average, not the daily number.</p>
          <p><strong>Sleep</strong> — the single best predictor of whether a session will go well.</p>
          <p><strong>Loads</strong> — weight and reps per set. This is what builds the strength chart in Progress.</p>
          <p style={{ color: TEXT_MUTED }}>
            Nutrition tracking and testing are switched off. Say the word if you want either turned on.
          </p>
        </div>
      </Section>
    </div>
  );
}
