// constants/theme.js
// monklearning design tokens — the single source every screen pulls its
// colors and spacing from, instead of hardcoding values screen by screen.

export const colors = {
  ink: '#1C1A16',      // primary text, borders, ink-offset shadows
  paper: '#FFFDF8',     // background — warm off-white, never pure white
  welcomePaper: '#FFFEFB', // onboarding-only background, distinct from paper
  // The textbook reader's ground, and the cards on it.
  //
  // Currently both pure white, on trial. The argument for warming them is real
  // (a student sits on this page for a long stretch rather than scanning it,
  // and white is heavy over that long) and two warmer values were tried:
  // #FAF6EA read as its own theme beside the app's pure-white screens, and
  // #FBF8F0 was better but still visibly a different page. They stay as named
  // tokens rather than being inlined so warming them again is one line each,
  // and so nothing else in the app can pick the value up by accident.
  reading: '#FFFFFF',
  // Block cards inside the reader. Not pure white: against a warm page a pure
  // white card is a hard edge, and the reader has enough of them that the page
  // starts to look patched. One step off the ground is enough to lift a card.
  readingCard: '#FFFFFF',
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

  // --- the night ground ---
  //
  // Home's header is the only full-bleed dark surface in the app, and the
  // Select Teacher screen stands on the same ground. The sky itself is a
  // shader (see components/night-sky.tsx) and most of its colours live inside
  // it, where nothing else can reach them. These three are the parts that
  // surface as real UI and therefore have to be tokens.
  //
  // `night` is also the flat colour the header shows for the frame before the
  // shader has drawn, which is why it has to match the sky's mid tone rather
  // than being merely dark.
  night: '#2E2A24',
  nightDeep: '#1A1814',   // the Select Teacher page's ground
  // Ink for a link or an active state reversed out of either of the above.
  // Marigold is the accent on paper; on this ground it is too close in value
  // to the sky's own glow to read as a control.
  paleGold: '#FBDDA0',
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