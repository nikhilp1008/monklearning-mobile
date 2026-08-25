// constants/theme.js
// MonkLearning design tokens — the single source every screen pulls its
// colors and spacing from, instead of hardcoding values screen by screen.

export const colors = {
  ink: '#1C1A16',      // primary text, borders, ink-offset shadows
  paper: '#FFFDF8',     // background — warm off-white, never pure white
  welcomePaper: '#FFFEFB', // onboarding-only background, distinct from paper
  // The textbook reader's ground, and only that. A student sits on this page
  // for a long stretch rather than scanning it, and white is heavy over that
  // long. Every other screen in this app is pure white, so this has to be warm
  // enough to rest the eye and light enough not to read as a second theme
  // sitting next to them. An earlier, warmer #FAF6EA did read as its own
  // theme, and the white block cards on top of it looked pasted on.
  reading: '#FBF8F0',
  // Block cards inside the reader. Not pure white: against a warm page a pure
  // white card is a hard edge, and the reader has enough of them that the page
  // starts to look patched. One step off the ground is enough to lift a card.
  readingCard: '#FFFDF7',
  marigold: '#EEA31F',  // focus dot, primary accent, "the daily goal"
  slate: '#57534B',     // secondary/muted text
  faint: '#9C988C',     // tertiary text, overline labels
  // Lighter than `faint`, for text that must recede behind it without
  // disappearing: list numbers beside a title, a swipe hint. Added with the
  // Textbooks reader, which is the first surface that needed two tiers of
  // quiet at once.
  quiet: '#C0B8A6',
  // A control that is present but cannot be used, e.g. the prev-topic chevron
  // on the first topic. Deliberately not `faint`: disabled is a lighter state
  // than merely secondary, and using one token for both made a live control
  // and a dead one look the same.
  disabled: '#D8D2C2',
  // The warm tint behind a selected row, a revealed answer, or a pressed
  // surface. Same value the icon chip and filter pills already use.
  tint: '#FCF4E0',
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