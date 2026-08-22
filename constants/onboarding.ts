// Design tokens for the onboarding flow, transcribed verbatim from
// design_handoff_onboarding_flow/README.md + the HTML prototype.
//
// These are deliberately scoped to onboarding rather than merged into
// constants/brand.ts — the handoff is a self-contained, signed-off design
// with its own ramp of neutrals, and folding them into the app-wide palette
// would silently change every other screen.
import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

// The handoff is drawn on a 430 x 932 pt frame (iPhone 14/15 Pro logical
// size). The rest of the app scales against a 390 pt reference instead
// (constants/scale.ts), so design numbers cannot be fed into that helper —
// they'd come out ~10% oversized. `ds()` converts a raw design px straight
// off the spec into device px: exact at 430 pt wide, proportional elsewhere.
const DESIGN_WIDTH = 430;

export function useDesignScale() {
  const { width } = useWindowDimensions();
  return useMemo(() => {
    const ratio = width / DESIGN_WIDTH;
    return {
      ds: (size: number) => size * ratio,
      // CSS letter-spacing is in em; React Native wants absolute px.
      // tracking(-0.035, 44) === CSS `letter-spacing:-.035em` at 44px.
      tracking: (em: number, fontSize: number) => em * fontSize * ratio,
    };
  }, [width]);
}

export const ob = {
  // Colour — README "Design tokens" table.
  ink: '#1C1A16',
  ink80: '#5F5A50',
  ink55: '#8C867A',
  ink40: '#A39B8B',
  ink30: '#B4AC9B',
  // Placeholders only. Lighter than any text tone on purpose: at ink30 a
  // placeholder was being read as a filled-in answer, which is the whole
  // failure mode a placeholder has.
  placeholder: 'rgba(28,26,22,.26)',
  surface: '#FFFFFF',
  surfaceWarm: '#F7F4EC',
  cream: '#FBF9F2',
  amber: '#EEA31F',
  amberLight: '#F3C969',
  amberDark: '#8F5E0B',
  link: '#B97A0F',

  // Hairlines / rules.
  hairline10: 'rgba(28,26,22,.10)',
  hairline12: 'rgba(28,26,22,.12)',
  hairline14: 'rgba(28,26,22,.14)',
  hairline16: 'rgba(28,26,22,.16)',
  hairline18: 'rgba(28,26,22,.18)',
  // Dotted leader lines.
  leader26: 'rgba(28,26,22,.26)',
  leader28: 'rgba(28,26,22,.28)',
  leaderCream: 'rgba(251,249,242,.35)',

  // Type on photography.
  creamDim: 'rgba(251,249,242,.72)',
  creamRule: 'rgba(251,249,242,.24)',
  creamPillIdle: 'rgba(251,249,242,.4)',

  // Amber focus ring (CSS `box-shadow:0 0 0 Npx rgba(238,163,31,.18)`).
  focusRing: 'rgba(238,163,31,.18)',

  // Selected exam / year row wash — CSS
  // `linear-gradient(90deg, rgba(238,163,31,.42) 0%, rgba(238,163,31,.2) 48%, rgba(238,163,31,.05) 100%)`.
  wash: ['rgba(238,163,31,.42)', 'rgba(238,163,31,.2)', 'rgba(238,163,31,.05)'] as const,
  washLocations: [0, 0.48, 1] as const,

  headlineShadow: 'rgba(20,17,12,.5)',
} as const;

// Anek Latin is already loaded app-wide in app/_layout.tsx.
export const obFont = {
  r400: 'AnekLatin_400Regular',
  m500: 'AnekLatin_500Medium',
  sb600: 'AnekLatin_600SemiBold',
  b700: 'AnekLatin_700Bold',
  xb800: 'AnekLatin_800ExtraBold',
} as const;

// Full-bleed photo veils — README per-screen gradients, verbatim.
export const WELCOME_1_VEIL = {
  colors: [
    'rgba(18,15,10,.72)',
    'rgba(18,15,10,.38)',
    'rgba(18,15,10,.16)',
    'rgba(18,15,10,.52)',
    'rgba(18,15,10,.9)',
    'rgba(18,15,10,.96)',
  ] as const,
  locations: [0, 0.24, 0.4, 0.62, 0.84, 1] as const,
};

export const WELCOME_2_VEIL = {
  colors: [
    'rgba(18,15,10,.72)',
    'rgba(18,15,10,.34)',
    'rgba(18,15,10,.14)',
    'rgba(18,15,10,.5)',
    'rgba(18,15,10,.9)',
    'rgba(18,15,10,.96)',
  ] as const,
  locations: [0, 0.2, 0.34, 0.54, 0.76, 1] as const,
};

// Syllabus data — README "Syllabus data (live counts)", cross-checked against
// the prototype's own EXAMS object. Totals: JEE 54, NEET 79, Both 93.
export type ExamKey = 'jee' | 'neet' | 'both';
export type YearKey = 'class11' | 'class12' | 'dropper';

export const EXAMS: Record<
  ExamKey,
  {
    /** Row title on screen 05. */
    name: string;
    /** Subject tag on the right of the row. */
    tag: string;
    /** CTA label — "Continue with <label>". */
    label: string;
    /** "WE TEACH ALL OF <upper>". */
    upper: string;
    subjects: { name: string; count: number }[];
    sample: string;
  }
> = {
  jee: {
    name: 'JEE Main',
    tag: 'PCM',
    label: 'JEE Main',
    upper: 'JEE MAIN',
    subjects: [
      { name: 'Physics', count: 20 },
      { name: 'Chemistry', count: 20 },
      { name: 'Maths', count: 14 },
    ],
    sample:
      'Rotational Motion · Thermodynamics · Electrostatics · Coordination Compounds · Calculus — NTA syllabus, complete.',
  },
  neet: {
    name: 'NEET UG',
    tag: 'PCB',
    label: 'NEET UG',
    upper: 'NEET UG',
    subjects: [
      { name: 'Physics', count: 20 },
      { name: 'Chemistry', count: 20 },
      { name: 'Biology', count: 39 },
    ],
    sample:
      'Human Physiology · Genetics · Thermodynamics · Coordination Compounds · Ecology — NTA syllabus, complete.',
  },
  both: {
    name: 'Both',
    tag: 'PCMB',
    label: 'both exams',
    upper: 'JEE MAIN + NEET UG',
    subjects: [
      { name: 'Physics', count: 20 },
      { name: 'Chemistry', count: 20 },
      { name: 'Maths', count: 14 },
      { name: 'Biology', count: 39 },
    ],
    sample:
      'Rotational Motion · Calculus · Human Physiology · Genetics · Coordination Compounds — both syllabi, complete.',
  },
};

export const YEARS: Record<YearKey, string> = {
  class11: 'Class 11',
  class12: 'Class 12',
  dropper: 'Dropper',
};

export function examTotal(exam: ExamKey) {
  return EXAMS[exam].subjects.reduce((n, s) => n + s.count, 0);
}

// A number the prototype treats as already registered — entering it is
// recognised at the OTP step and skips screens 04-06 (README "Interactions").
export const RETURNING_USER_PHONE = '9821143307';
