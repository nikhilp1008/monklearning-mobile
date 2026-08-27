/**
 * M11 Ch09 · Section 62 — "Cheat sheet: one-line memory aids"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: cheat_sheet — FINAL section of the ENTIRE 62-section "Straight Lines" chapter
 * (closes Subtopic 8, Recap/Cheat Sheet, secs 60-62). board_content has 9 items, ALL type="note"
 * style="red-margin": item[0]=heading -> always-on title (Ch09's own convention — item[0] is the
 * always-on title, items[1..N-1] gate at beat>=1..beat>=(N-1); Ch04Sec66's "beat0-as-subtitle"
 * convention does NOT apply here, per task instruction). items[1..8] gate at beat>=1..8, one
 * mnemonic card each. item[8] (beat 8) is JSON emphasis="high" — the chapter's literal final beat.
 *
 * LAYOUT — reuses Ch04Sec66's grid-of-mnemonic-cards GEOMETRY (COL/ROW constants, CARD_W/H,
 * a Card helper drawing a CREAM rect + staggered text lines) adapted to 2 COLUMNS x 4 ROWS (8
 * cards, not 6+1 — every item here is a comparable-weight red-margin mnemonic, no natural
 * full-width 8th split the way the formula-recap sections had). All 8 cards get a RED border
 * (this chapter's own "flagged/memorable note" convention, Sec43/51/59) instead of Sec66's
 * mixed amber/red scheme (there every card there was a *different* fact; here every card is
 * uniformly a red-margin note per the JSON). Card 8 (HIGH, final beat of the final section) gets
 * a visibly thicker RED border (sw 3.4 vs 2.2, mirrocing Ch04Sec65's HIGH=thicker-border
 * convention) so it reads as the capstone card, plus a closing chip below the grid extending
 * this chapter's "Subtopic N — complete" convention (Sec9/17/26/34/43/51/59) up to the whole
 * chapter: "Straight Lines — complete!".
 *
 * Card format (per task spec): the quoted catchphrase renders as the card's bold RED headline;
 * a short plain-INK gloss sits below it. Cards 1-3 carry ONE catchphrase (2 lines); cards 4-8
 * bundle TWO catchphrases each (4 lines, quote+gloss stacked twice) per the JSON's own semicolon-
 * separated text. Where the JSON supplies an inline gloss ("for perpendicular slopes", "for
 * parallel lines", "(family)", etc.) it is used verbatim (translated via t() where it's natural
 * prose; left shared where it's already just a bare math term, e.g. "collinearity", "concurrency"
 * — segments_hinglish itself keeps those English loanwords un-translated inline). Where the JSON's
 * second quote in a bundled pair has NO trailing gloss clause (card4's "±1" quote, card5's "p is
 * positive" quote, card6's "root-sum-squares" quote, and BOTH quotes in card8), a short topical
 * gloss is supplied from the section that actually taught it (sourced below). Quote marks are
 * straight ASCII apostrophes ('...'), matching the chapter's convention; the catchphrases
 * themselves stay in English in both language variants (translating "Flip and Negate" would break
 * the memory hook) — this matches segments_hinglish, which keeps every catchphrase in English
 * inside its otherwise-Hinglish sentence.
 *
 * CONSISTENCY VERIFICATION (task-required; done by reading the actual earlier section files) —
 * every mnemonic checked against the section that taught it, no contradictions found:
 *  - card1 "internal adds, external subtracts / m±n denominator": Sec3 derives internal
 *    P=(m·x2+n·x1)/(m+n); Sec5's recap chip states external "(mx2-nx1)/(m-n)" — adds vs
 *    subtracts, m+n vs m-n, confirmed.
 *  - card2 "area zero means in a row / collinearity": Sec4 beat7 closing line verbatim: "When
 *    Δ = 0, the three points are collinear."
 *  - card3 "Horizontal Zero, Vertical Void / slope 0 vs undefined": Sec10 beat6 guardrail
 *    verbatim: "Vertical line: slope is UNDEFINED — never 'infinite', never 'zero'."; horizontal
 *    = slope 0 is the section's own companion fact.
 *  - card4 "Flip and Negate / perpendicular slopes": Sec11 beat6 derives m2 = -1/m1 (negative
 *    reciprocal = flip the fraction, negate the sign) and Sec12 confirms 1+m1m2=0. "equally
 *    inclined ⇒ ±1": Sec13 beat7 board text verbatim "Equally inclined to both axes ⇒ m = ±1
 *    (θ = 45° or 135°)" — gloss "(θ = 45° or 135°)" sourced directly from there.
 *  - card5 "Minus A over B / general form slope": Sec22 beat8 closing-note formula verbatim
 *    "m = -A/B   a = -C/A   b = -C/B". "p is positive, period": Sec21 beat3 guardrail verbatim
 *    "Pick the sign OPPOSITE to C — p is a distance, never negative" — gloss "(normal form)"
 *    matches that section's own subject (reducing general form to normal form).
 *  - card6 "Normalize, then subtract / parallel lines": Sec29/30 guardrail "share A, B —
 *    normalize first" plus the landed result d = |C1-C2|/√(A²+B²) (Sec29 beat3) — subtract the
 *    constants once A,B match. "modulus on top, root-sum-squares below": the same shape recurs
 *    in the point-to-line distance itself, d = |Ax1+By1+C|/√(A²+B²) (Sec27 beat4) — gloss
 *    "(distance formula)" names that shared formula shape.
 *  - card7 "Both zero ⇒ sum zero / family": Sec37 beat4 derives L1(x0,y0)+λL2(x0,y0) = 0+λ·0 = 0
 *    at the junction point — both terms individually zero, so the sum is zero for every λ.
 *    "determinant dies ⇒ they meet": Sec38 beat5 guardrail — three lines concurrent only if the
 *    3x3 determinant vanishes; gloss "(concurrency)" names that section's subject directly.
 *  - card8 (HIGH) "Positive constants first, then plus is the origin's side / bisectors": Sec46
 *    beat1-2 verbatim "Why positive constants? They pin the origin to the '+' side of both
 *    lines" — matches exactly, including "origin('s) side" wording; gloss "(angle bisectors)"
 *    names that section's own subject. "one step to the foot, two to the mirror / foot & image":
 *    this is Sec59's OWN beat-7 closing line verbatim (itself already cross-verified there
 *    against Sec52-55: the foot's step is -(ax1+by1+c)/(a²+b²), the image uses exactly double
 *    that parameter — one step vs two). Re-used here rather than re-deriving, since Sec59 already
 *    did that verification directly against Sec52-55's formulas.
 *  All eleven spot-checks the task named were directly confirmed by reading the cited files —
 *  nothing had to be left unverified.
 *
 * Beats (board_reveal_at_english [0, 8.36, 17.15, 21.93, 31.15, 40.62, 49.41, 58.88, 68.01]):
 *  0 (title, always-on) | "Cheat Sheet: One-Line Memory Aids"
 *  1 | card1 (single)  — section-formula sign mnemonic
 *  2 | card2 (single)  — collinearity
 *  3 | card3 (single)  — slope poles
 *  4 | card4 (bundled) — perpendicular flip/negate + equally-inclined ±1
 *  5 | card5 (bundled) — general-form slope -A/B + normal-form p>0
 *  6 | card6 (bundled) — parallel-line normalize/subtract + distance-formula shape
 *  7 | card7 (bundled) — family both-zero + concurrency determinant
 *  8 | card8 (bundled, HIGH, final beat) — bisector positive-constants + foot/image factor-of-2,
 *      followed by the "Straight Lines — complete!" closing chip (chapter capstone)
 *
 * Grid: 2 cols (x=60,560, w=460) x 4 rows (y=94,206,318,430, h=100) — 12px row gaps, 40px column
 * gap. Card content: quote baseline dy+42/gloss dy+70 for single cards (roomy — less content);
 * quoteA/glossA/quoteB/glossB at dy+22/38/62/80 for bundled cards (checked: every baseline clears
 * its box edge and its neighbour line by >=10px, all text widths << the 420px usable card width
 * even for card8's 58-char quote, see WORKFLOW report). Closing chip: x400 y552 w280 h36
 * (22px clear of row4's bottom, 8px clear of the y596 safe floor).
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  RED,
  CREAM,
  GREEN,
  GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';

const COL = [60, 560];
const ROW = [94, 206, 318, 430];
const CARD_W = 460;
const CARD_H = 100;

type Line = { text: React.ReactNode; dy: number; size: number; fill: string; weight?: number };

/** One mnemonic card: a CREAM box (RED border, thicker for the HIGH capstone card) with its
 * quote+gloss line(s) fading in staggered after the box — same "box first, text second" order
 * as every other card component in this chapter, generalised to take 2 lines (single mnemonic)
 * or 4 lines (bundled pair) so one component serves both card shapes. */
function Card({
  on,
  delay,
  x,
  y,
  w = CARD_W,
  h = CARD_H,
  sw = 2.2,
  lines,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w?: number;
  h?: number;
  sw?: number;
  lines: Line[];
}) {
  return (
    <>
      <Fade on={on} delay={delay}>
        <Rect x={x} y={y} width={w} height={h} rx={14} fill={CREAM} stroke={RED} strokeWidth={sw} />
      </Fade>
      {lines.map((ln, i) => (
        <Fade key={i} on={on} delay={delay + 0.35 + i * 0.18}>
          <T x={x + 20} y={y + ln.dy} size={ln.size} fill={ln.fill} anchor="start" weight={ln.weight ?? 600}>
            {ln.text}
          </T>
        </Fade>
      ))}
    </>
  );
}

export default function M11Ch09Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} anchor="middle" script>
          {t("Cheat Sheet: One-Line Memory Aids", "Cheat Sheet: Ek-Line Memory Aids")}
        </T>
      </Fade>

      {/* beat 1 — card 1 (single): section-formula sign mnemonic */}
      <Card
        on={beat >= 1}
        delay={dl(1, 0)}
        x={COL[0]}
        y={ROW[0]}
        lines={[
          { text: "'Internal adds, external subtracts'", dy: 42, size: 15, fill: RED, weight: 700 },
          { text: t("the m ± n denominator", "denominator mein m ± n"), dy: 70, size: 13, fill: INK, weight: 500 },
        ]}
      />

      {/* beat 2 — card 2 (single): collinearity */}
      <Card
        on={beat >= 2}
        delay={dl(2, 0)}
        x={COL[1]}
        y={ROW[0]}
        lines={[
          { text: "'Area zero means in a row'", dy: 42, size: 15, fill: RED, weight: 700 },
          { text: "collinearity", dy: 70, size: 13, fill: INK, weight: 500 },
        ]}
      />

      {/* beat 3 — card 3 (single): slope poles */}
      <Card
        on={beat >= 3}
        delay={dl(3, 0)}
        x={COL[0]}
        y={ROW[1]}
        lines={[
          { text: "'Horizontal Zero, Vertical Void'", dy: 42, size: 15, fill: RED, weight: 700 },
          { text: "slope 0 versus undefined", dy: 70, size: 13, fill: INK, weight: 500 },
        ]}
      />

      {/* beat 4 — card 4 (bundled): perpendicular flip/negate + equally-inclined ±1 */}
      <Card
        on={beat >= 4}
        delay={dl(4, 0)}
        x={COL[1]}
        y={ROW[1]}
        lines={[
          { text: "'Flip and Negate'", dy: 22, size: 13, fill: RED, weight: 700 },
          { text: t("for perpendicular slopes", "perpendicular slopes ke liye"), dy: 38, size: 11.5, fill: INK, weight: 500 },
          { text: "'equally inclined ⇒ ±1'", dy: 62, size: 13, fill: RED, weight: 700 },
          { text: "(θ = 45° or 135°)", dy: 80, size: 11.5, fill: INK, weight: 500 },
        ]}
      />

      {/* beat 5 — card 5 (bundled): general-form slope -A/B + normal-form p>0 */}
      <Card
        on={beat >= 5}
        delay={dl(5, 0)}
        x={COL[0]}
        y={ROW[2]}
        lines={[
          { text: "'Minus A over B'", dy: 22, size: 13, fill: RED, weight: 700 },
          { text: t("slope from the general form", "general form se slope"), dy: 38, size: 11.5, fill: INK, weight: 500 },
          { text: "'p is positive, period'", dy: 62, size: 13, fill: RED, weight: 700 },
          { text: "(normal form)", dy: 80, size: 11.5, fill: INK, weight: 500 },
        ]}
      />

      {/* beat 6 — card 6 (bundled): parallel-line normalize/subtract + distance-formula shape */}
      <Card
        on={beat >= 6}
        delay={dl(6, 0)}
        x={COL[1]}
        y={ROW[2]}
        lines={[
          { text: "'Normalize, then subtract'", dy: 22, size: 13, fill: RED, weight: 700 },
          { text: t("for parallel lines", "parallel lines ke liye"), dy: 38, size: 11.5, fill: INK, weight: 500 },
          { text: "'modulus on top, root-sum-squares below'", dy: 62, size: 12, fill: RED, weight: 700 },
          { text: "(distance formula)", dy: 80, size: 11.5, fill: INK, weight: 500 },
        ]}
      />

      {/* beat 7 — card 7 (bundled): family both-zero + concurrency determinant */}
      <Card
        on={beat >= 7}
        delay={dl(7, 0)}
        x={COL[0]}
        y={ROW[3]}
        lines={[
          { text: "'Both zero ⇒ sum zero'", dy: 22, size: 13, fill: RED, weight: 700 },
          { text: "(family)", dy: 38, size: 11.5, fill: INK, weight: 500 },
          { text: "'determinant dies ⇒ they meet'", dy: 62, size: 13, fill: RED, weight: 700 },
          { text: "(concurrency)", dy: 80, size: 11.5, fill: INK, weight: 500 },
        ]}
      />

      {/* beat 8 — card 8 (bundled, HIGH, final beat of the final section): bisector positive-
          constants + foot/image factor-of-two — thicker RED border marks the capstone card */}
      <Card
        on={beat >= 8}
        delay={dl(8, 0)}
        x={COL[1]}
        y={ROW[3]}
        sw={3.4}
        lines={[
          { text: "'Positive constants first, then plus is the origin's side'", dy: 22, size: 13, fill: RED, weight: 700 },
          { text: "(angle bisectors)", dy: 38, size: 11.5, fill: INK, weight: 500 },
          { text: "'one step to the foot, two to the mirror'", dy: 62, size: 13, fill: RED, weight: 700 },
          { text: "(foot & image)", dy: 80, size: 11.5, fill: INK, weight: 500 },
        ]}
      />

      {/* closing flourish — extends this chapter's "Subtopic N — complete" chip convention
          (Sec9/17/26/34/43/51/59) up to the whole chapter; arrives after card 8 settles */}
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <Chip x={400} y={552} w={280} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={16}>
          {t("Straight Lines — complete!", "Straight Lines — complete!")}
        </Chip>
      </Fade>
    </Scene>
  );
}
