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
const DESIGN_WIDTH = 390;

/**
 * Onest is optically larger than Anek Latin at the same nominal size -- its
 * x-height is 0.527 of the em against Anek's 0.489, and its caps 0.707 against
 * 0.639. Setting a spec drawn for one in the other, unchanged, reads about a
 * tenth too big and a tenth too loose.
 *
 * `fs` carries that correction so the design numbers can be transcribed off
 * the spec untouched; `ds` stays linear because padding, radii and heights are
 * geometry and must not move. Same 0.9 / 0.75 pair the rest of the app uses.
 */
const ONEST_SIZE = 0.9;
const ONEST_TRACKING = 0.75;

export function useDesignScale() {
  const { width } = useWindowDimensions();
  return useMemo(() => {
    const ratio = width / DESIGN_WIDTH;
    return {
      /** Geometry: padding, radii, heights. Linear. */
      ds: (size: number) => size * ratio,
      /** Type size, corrected for Onest's larger x-height. */
      fs: (size: number) => size * ratio * ONEST_SIZE,
      // CSS letter-spacing is in em; React Native wants absolute px.
      // tracking(-0.034, 31) === CSS `letter-spacing:-.034em` at 31px.
      tracking: (em: number, fontSize: number) =>
        em * fontSize * ratio * ONEST_SIZE * ONEST_TRACKING,
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

  // --- pass, promo and confirmation (handoff-onboarding) ---
  /** Field and row outlines. */
  fieldBorder: 'rgba(28,26,22,.13)',
  /** Ledger rules inside a section. Lighter than a field's own edge. */
  rule: 'rgba(28,26,22,.09)',
  /** A read-only field: the verified email on Details. */
  fieldMuted: '#FBFAF8',
  /** The confirmation screen is the only dark ground in onboarding. */
  night: '#1A1814',
  onNight: 'rgba(255,255,255,.72)',
  onNightDim: 'rgba(255,255,255,.6)',
  nightRule: 'rgba(255,255,255,.13)',
} as const;

/**
 * Passes.
 *
 * Prices are real and final; the charge is not. There is no payment provider
 * wired yet, so the flow reaches ₹0 through the promo code and completes from
 * there -- see app/(onboarding)/pass.tsx.
 */
export const PASSES = [
  { id: 'day', name: '1 day', note: '24 hours from payment', price: 149 },
  { id: 'week', name: '7 days', note: 'Works out to ₹107 a day', price: 749 },
] as const;

export type PassKey = (typeof PASSES)[number]['id'];

/**
 * The one code that works, and it clears the balance rather than discounting
 * it.
 *
 * The handoff wired two codes at partial discounts (FIRST100 −₹75, MONK50
 * −₹50), which cannot complete without a payment sheet to take the remainder.
 * Until there is one, a code either brings the total to zero or the student
 * cannot get through -- so there is exactly one, and it is worth the whole
 * amount. Client-side by design; nothing is validated on a server.
 */
export const PROMO_CODE = 'FIRST100';

export function promoDiscount(code: string, price: number) {
  return code.trim().toUpperCase() === PROMO_CODE ? price : 0;
}

export const rupees = (n: number) => `₹${n.toLocaleString('en-IN')}`;

/**
 * Onest, loaded app-wide in app/_layout.tsx.
 *
 * Onboarding was the last surface still set in Anek Latin, which meant the
 * very first screens a student ever sees were in a different typeface from
 * every screen after them. The new handoff specifies Onest throughout, so the
 * two answers agree. Sizes are corrected by `fs` above rather than re-typed.
 *
 * The handoff asks for nothing heavier than medium; sb600 and b700 are kept
 * for the micro-labels, where 500 at 10px on a light ground disappears.
 */
export const obFont = {
  r400: 'Onest_400Regular',
  m500: 'Onest_500Medium',
  sb600: 'Onest_600SemiBold',
  b700: 'Onest_700Bold',
  xb800: 'Onest_800ExtraBold',
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
