// constants/theme.js
// MonkLearning design tokens — the single source every screen pulls its
// colors and spacing from, instead of hardcoding values screen by screen.

export const colors = {
  ink: '#1C1A16',      // primary text, borders, ink-offset shadows
  paper: '#FFFDF8',     // background — warm off-white, never pure white
  welcomePaper: '#FFFEFB', // onboarding-only background, distinct from paper
  marigold: '#EEA31F',  // focus dot, primary accent, "the daily goal"
  slate: '#57534B',     // secondary/muted text
  faint: '#9C988C',     // tertiary text, overline labels
  red: '#DD4433',       // handwritten red-pen accents, checkmarks, alt dot
  hairline: 'rgba(28,26,22,.12)',  // card/row borders
  inputBorder: 'rgba(28,26,22,.14)', // form field borders (unfocused)
  segmentTrack: '#F4EFE3',  // segmented-tab control background
  amberText: '#9A6A12',  // links/labels on the amber accent (e.g. "Forgot?")
  ruledLine: 'rgba(28,26,22,.05)', // ruled-paper background texture
  success: '#1C9B57',  // met validation state, positive confirmations

  // Mastery bar states.
  masteryStrong: '#1C9B57',
  masteryBuilding: '#EEA31F',
  masteryWeak: '#DD4433',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radii = {
  pill: 999,  // full-width pill buttons
  card: 12,
};