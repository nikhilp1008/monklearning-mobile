/**
 * M11 Ch09 · Section 61 — "Formula Recap II: Distance, Family, Bisectors, Reflection"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formula_recap — the SECOND of this chapter's two formula-recap boards (after
 * Sec60), a "notes page" moment per the formula_recap/cheat_sheet contract: every formula here
 * was already taught and verified in its own earlier section, this is the consolidated grid.
 * GRID LAYOUT borrowed from M11Ch04Sec65 (a formula_recap section from a different chapter, the
 * task's explicit precedent for the "2-col x 3-row grid of Card components + 7th full-width card"
 * layout): a reusable `Card` (title + up to 2 stacked lines) placed on COL=[60,560], CARD_W=460,
 * with a 7th card spanning the full width below the grid. BEAT-GATING follows THIS chapter's own
 * convention (established across all 59 already-authored Ch09 sections, e.g. Sec1/Sec30/Sec39/
 * Sec47/Sec55), NOT Ch04Sec65's: board_content item[0] (heading, reveal_at=0) is the ALWAYS-ON
 * title (`<Fade on={true}>`, no beat gating — Ch04Sec65 instead beat-gated its own item[0] as a
 * "subtitle", which Ch09 does not do), items[1..8] gate at beat>=1..beat>=8.
 *
 * DEVIATION FROM Ch04Sec65's EXACT ROW/CARD_H NUMBERS (documented per SCENE_AUTHORING.md Step 3 —
 * "if you deviate, your layout plan must say so"): Ch04Sec65 had 8 total beats (title + 7 cards)
 * with card7 as its LAST beat, nothing below it. This section has 9 beats — the same 7 formula
 * cards PLUS a beat-8 closing red-margin guardrail that must sit below everything. Reusing
 * Ch04Sec65's literal ROW=[112,234,356]/CARD_H=112 (card7 bottom at y=590) would leave only 6px
 * before the y=596 safe floor — not enough room for a guardrail bar+text. So the grid geometry is
 * reused in FORM (2 cols at COL=[60,560], CARD_W=460, same Card anatomy: bordered rounded rect +
 * small title + stacked formula lines, 7th card full-width below the grid) but compressed
 * vertically (CARD_H=96 vs 112, 12px inter-row gap vs Ch04Sec65's ~10px, card7 h=84 vs 100/112)
 * to free ~74px at the foot of the board for the beat-8 guardrail — verified by real box math
 * below, every clearance still clears its spec floor.
 *
 * Beats (reveals_english [0.0, 6.14, 16.64, 22.7, 27.39, 37.29, 45.31, 54.02, 60.25]; reveals_
 * hinglish [0.0, 5.12, 16.47, 22.61, 27.05, 35.67, 41.73, 49.24, 55.21]):
 *  0 (title, always-on) | "Formula Recap II: Distance, Family, Bisectors, Reflection"
 *  1 card r0c0 | distance formulas (point-to-line + parallel-lines), 2 lines
 *  2 card r0c1 | symmetric/parametric line form, 1 line
 *  3 card r1c0 | Cramer's-rule intersection point (x, y), 2 lines
 *  4 card r1c1 | concurrency determinant (flattened) + family of lines, 2 lines
 *  5 card r2c0 | angle-bisector pair (±), split across 2 lines for card width
 *  6 card r2c1 | foot of perpendicular, 1 line (GREEN — paired with card 7)
 *  7 card, full width | image/reflection formula, 1 line (GREEN — paired with card 6, same
 *    typography: same size14/weight700/anchor=start, "Foot:"/"Image:" label echo, so the two
 *    read as the same shape with only the "-2(...)" swapped in, per the task's pairing note)
 *  8 RED-MARGIN CLOSING NOTE (not a card) | "Complete toolkit for the back half — your
 *    one-glance revision board."
 *
 * CONSISTENCY REQUIREMENT — every formula below is character-for-character verified against the
 * sibling toolkit section it recaps (read directly from those files before writing this one):
 *  - card1 (distance) — M11Ch09Sec30.tsx beats 1-2 verbatim: "Point to line: d = |Ax₁ + By₁ + C|
 *    / √(A² + B²)" and "Parallel lines: d = |C₁ - C₂| / √(A² + B²)".
 *  - card2 (symmetric form) — M11Ch09Sec30.tsx beat 4 verbatim: "Symmetric form: (x - x₁)/cosθ =
 *    (y - y₁)/sinθ = r".
 *  - card3 (Cramer's rule) — M11Ch09Sec39.tsx beat 1 verbatim (split onto 2 lines, "Cramer:"
 *    prefix dropped since the card's own title already says "Cramer's Rule"): "x = (b₁c₂ -
 *    b₂c₁)/(a₁b₂ - a₂b₁)" / "y = (c₁a₂ - c₂a₁)/(a₁b₂ - a₂b₁)".
 *  - card4 (concurrency + family) — M11Ch09Sec39.tsx beat 5's determinant (a₁ b₁ c₁ / a₂ b₂ c₂ /
 *    a₃ b₃ c₃ = 0, same 9 entries/subscripts) FLATTENED to one inline pipe-delimited line per the
 *    task's explicit space constraint (a literal drawn 3×3 grid, Sec39's own construction, does
 *    not fit a ~460×96 card — see DETERMINANT FLATTENING note below) plus beat 6's family formula
 *    verbatim: "L₁ + λL₂ = 0".
 *  - card5 (angle bisector) — M11Ch09Sec47.tsx beat 1 verbatim, split at the "=" onto 2 lines for
 *    card width: "(a₁x + b₁y + c₁) / √(a₁² + b₁²) =" / "±(a₂x + b₂y + c₂) / √(a₂² + b₂²)".
 *  - card6 (foot) — M11Ch09Sec55.tsx beat 1 verbatim: "Foot: (x - x₁)/a = (y - y₁)/b =
 *    -(ax₁ + by₁ + c)/(a² + b²)".
 *  - card7 (image) — M11Ch09Sec55.tsx beat 2 verbatim: "Image: (x' - x₁)/a = (y' - y₁)/b =
 *    -2(ax₁ + by₁ + c)/(a² + b²)".
 * No arithmetic, variable name, or sign convention was invented here — every string above is
 * copied byte-for-byte from its source section (only re-wrapped onto multiple lines where the
 * card's 460px width required it; the wrap point never splits inside a token).
 *
 * DETERMINANT FLATTENING DECISION (card4, task-flagged as the hardest layout call): Sec38/39's
 * literal construction (2 Draw delimiter bars + a 3×3 grid of <T> entries, ~130px tall on its own)
 * does not fit inside a ~460×96 recap card alongside a title and a second formula (family). Per
 * the task's explicit fallback instruction, flattened to one inline pipe-delimited line instead:
 * "Concurrency: |a₁ b₁ c₁; a₂ b₂ c₂; a₃ b₃ c₃| = 0" — single "|...|" pair brackets the whole
 * flattened block (the standard determinant notation, a bar on each side of the matrix), rows
 * separated by "; " so the 3×3 structure is still legible as 3 groups of 3 rather than reading as
 * 9 flat entries. At size 13 this is 47 chars ≈ 305.5px (0.50×13×47), comfortably inside the
 * card's ~420px usable width (34px+ clear of both edges) — legible-at-a-glance, not a redrawn
 * teaching moment (that stays owned by Sec38/39, per the task's explicit instruction not to
 * reattempt the drawn-bars construction here).
 *
 * BILINGUAL: following every sibling toolkit section's established convention (Sec30/39/47/55 —
 * formula/text rows render identically in both languages, only the always-on title is translated
 * via t()), every card title/line below is a SHARED string, not run through t() (task confirms:
 * "Formula card text can be shared... since these are symbolic formulas"). Only the section title
 * (beat 0) and the closing red-margin note (beat 8) use t().
 *
 * NOTATION: minus sign is a plain hyphen throughout (matches every source section, no en/em-dash
 * escape bug). λ used freely (safe-fallback Greek, established since Sec36/37, reused verbatim
 * from Sec39's family formula). θ used freely (this chapter's most-used symbol, native-but-
 * fallback per the 3rd/7th glyph audits). √ ² ± are native to both fonts (no-fallback list).
 * Absolute value "|...|" is plain U+007C (native), never U+2223. Apostrophe in "x'"/"y'" (image
 * point) is plain ASCII U+0027 (native), matching Sec55's own confirmation. Numeral subscripts
 * (x₁, y₁, A₁, B₁, C₁, a₁, b₁, c₁, a₂...) are real Unicode subscript digits in non-script Anek
 * text (every <T> below has script=false, the T default) per the font-audit rule that Kalam is
 * missing most subscript/superscript digits — matches every sibling toolkit section.
 *
 * COLOR CHOICE (documented, since it deviates from Ch04Sec65's card-color scheme): cards 1-5 use
 * AMBER_DARK (the standard formula-card border, matching Sec30/39/47/55's AMBER/AMBER_DARK "boxed
 * formula" language). Cards 6-7 (foot + image) both use GREEN instead — the deliberate visual
 * pairing signal the task asked for ("same shape, factor of 2"), distinct from the other five
 * one-off formulas. RED is reserved exclusively for the beat-8 closing guardrail (this chapter's
 * highest-emphasis signal) — Ch04Sec65 used RED on its own full-width 7th card, but doing that
 * here would visually conflate two different RED elements (a card border vs. the actual guardrail
 * bar) with different meanings on the same board, so card 7 is GREEN like card 6, not RED.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script; over-estimate; char counts cross-checked
 * against Sec30/39/47/55's own header comments where the string is copied verbatim from them) —
 * every card line comfortably inside its card's usable width (card interior = w-20 from the
 * left-padded start x to the card's right edge; cards 1-6 usable ≈440px, card7 usable ≈940px):
 *   card1 L1 "Point to line: d = |Ax₁ + By₁ + C| / √(A² + B²)"   47ch@13 -> 305.5px
 *   card1 L2 "Parallel lines: d = |C₁ - C₂| / √(A² + B²)"        42ch@13 -> 273.0px
 *   card2 L1 "Symmetric form: (x - x₁)/cosθ = (y - y₁)/sinθ = r" 49ch@14 -> 343.0px
 *   card3 L1 "x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)"                   32ch@13 -> 208.0px
 *   card3 L2 "y = (c₁a₂ - c₂a₁)/(a₁b₂ - a₂b₁)"                   32ch@13 -> 208.0px
 *   card4 L1 "Concurrency: |a₁ b₁ c₁; a₂ b₂ c₂; a₃ b₃ c₃| = 0"   47ch@13 -> 305.5px
 *   card4 L2 "Family: L₁ + λL₂ = 0"                               20ch@13 -> 130.0px
 *   card5 L1 "(a₁x + b₁y + c₁) / √(a₁² + b₁²) ="                 33ch@13 -> 214.5px
 *   card5 L2 "±(a₂x + b₂y + c₂) / √(a₂² + b₂²)"                  33ch@13 -> 214.5px
 *   card6 L1 "Foot: (x - x₁)/a = (y - y₁)/b = -(ax₁ + by₁ + c)/(a² + b²)"   58ch@14 -> 406.0px
 *   card7 L1 "Image: (x' - x₁)/a = (y' - y₁)/b = -2(ax₁ + by₁ + c)/(a² + b²)" 62ch@14 -> 434.0px
 *   guardrail (EN, longer of the two languages) "Complete toolkit for the back half — your
 *     one-glance revision board."                                69ch@15 -> 517.5px (anchor start
 *     x450 -> right edge 967.5, 76.5px clear of the x1044 safe edge)
 * Widest grid-card line is card6's foot formula (406px in a ~440px usable card width, 34px+
 * clear); no card line comes close to overflowing. No 2-column-within-card split ever needed.
 *
 * Layout plan (Anek text box top=y-0.78×size, bottom=y+0.31×size; Kalam title top=y-1.3×size,
 * bottom=y+0.5×size; card rect box=[x,x+w]×[y,y+h] directly):
 *  title(always-on)     | T mid script size22 RED       | x540 y64   box y35.4..75.0
 *  b1 card r0c0 (AMBER_DARK) | rect x60..520 y100..196
 *    title "Distance Formulas"                            | x80 y118
 *    L1                                                    | x80 y144
 *    L2                                                    | x80 y168
 *  b2 card r0c1 (AMBER_DARK) | rect x560..1020 y100..196
 *    title "Symmetric / Parametric Form"                   | x580 y118
 *    L1 (single line, centered lower)                      | x580 y158
 *  b3 card r1c0 (AMBER_DARK) | rect x60..520 y208..304
 *    title "Cramer's Rule (Intersection)"                  | x80 y226
 *    L1 / L2                                                | x80 y252 / y276
 *  b4 card r1c1 (AMBER_DARK) | rect x560..1020 y208..304
 *    title "Concurrency & Family"                          | x580 y226
 *    L1 / L2                                                | x580 y252 / y276
 *  b5 card r2c0 (AMBER_DARK) | rect x60..520 y316..412
 *    title "Angle Bisector Pair"                           | x80 y334
 *    L1 / L2                                                | x80 y360 / y384
 *  b6 card r2c1 (GREEN, paired) | rect x560..1020 y316..412
 *    title "Foot of Perpendicular"                         | x580 y334
 *    L1 (single line)                                       | x580 y374
 *  b7 card full-width (GREEN, paired) | rect x60..1020 y438..522
 *    title "Image (Reflection)"                            | x80 y456
 *    L1 (single line)                                       | x80 y488
 *  b8 RED guardrail | Draw bar x434 y550..582 | T start size15 x450 y570
 * Vertical gaps (box-bottom -> next box-top): title(75)->b1/b2(100) 25.0, row0 bottom(196)->row1
 * top(208) 12.0, row1 bottom(304)->row2 top(316) 12.0, row2 bottom(412)->b7 top(438) 26.0, b7
 * bottom(522)->guardrail bar top(550) 28.0. Guardrail bar bottom 582, text baseline 570 (text box
 * bottom 574.65) — 21.35px clear of the y596 safe floor. Column gap (520->560) 40px, matching
 * Ch04Sec65's own COL/CARD_W exactly. Right edge of every grid card and card7 is x1020, 24px clear
 * of the x1044 safe edge.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const COL = [60, 560];
const ROW = [100, 208, 316];
const CARD_W = 460;
const CARD_H = 96;

function Card({
  on,
  delay,
  x,
  y,
  w = CARD_W,
  h = CARD_H,
  stroke,
  title,
  children,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w?: number;
  h?: number;
  stroke: string;
  title: string;
  children: React.ReactNode;
}) {
  const sw = stroke === GREEN ? 2.6 : 2;
  return (
    <>
      <Fade on={on} delay={delay}>
        <Rect x={x} y={y} width={w} height={h} rx={14} fill={CREAM} stroke={stroke} strokeWidth={sw} />
      </Fade>
      <Fade on={on} delay={delay + 0.3}>
        <T x={x + 20} y={y + 18} size={12} fill={stroke} anchor="start" weight={700}>
          {title}
        </T>
      </Fade>
      {children}
    </>
  );
}

export default function M11Ch09Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t(
            "Formula Recap II: Distance, Family, Bisectors, Reflection",
            "Formula Recap II: Distance, Family, Bisectors aur Reflection"
          )}
        </T>
      </Fade>

      {/* beat 1 — distance formulas (point-to-line + parallel lines), verbatim from Sec30 */}
      <Card on={beat >= 1} delay={dl(1, 0)} x={COL[0]} y={ROW[0]} stroke={AMBER_DARK} title="Distance Formulas">
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={COL[0] + 20} y={ROW[0] + 44} size={13} fill={INK} anchor="start">
            Point to line: d = |Ax₁ + By₁ + C| / √(A² + B²)
          </T>
          <T x={COL[0] + 20} y={ROW[0] + 68} size={13} fill={INK} anchor="start">
            Parallel lines: d = |C₁ - C₂| / √(A² + B²)
          </T>
        </Fade>
      </Card>

      {/* beat 2 — symmetric / parametric form, verbatim from Sec30 */}
      <Card on={beat >= 2} delay={dl(2, 0)} x={COL[1]} y={ROW[0]} stroke={AMBER_DARK} title="Symmetric / Parametric Form">
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={COL[1] + 20} y={ROW[0] + 58} size={14} fill={INK} anchor="start">
            Symmetric form: (x - x₁)/cosθ = (y - y₁)/sinθ = r
          </T>
        </Fade>
      </Card>

      {/* beat 3 — Cramer's rule intersection point, verbatim from Sec39 (split onto 2 lines) */}
      <Card on={beat >= 3} delay={dl(3, 0)} x={COL[0]} y={ROW[1]} stroke={AMBER_DARK} title="Cramer's Rule (Intersection)">
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={COL[0] + 20} y={ROW[1] + 44} size={13} fill={INK} anchor="start">
            x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)
          </T>
          <T x={COL[0] + 20} y={ROW[1] + 68} size={13} fill={INK} anchor="start">
            y = (c₁a₂ - c₂a₁)/(a₁b₂ - a₂b₁)
          </T>
        </Fade>
      </Card>

      {/* beat 4 — concurrency determinant (flattened, see DETERMINANT FLATTENING note) + family,
          both verbatim from Sec39 */}
      <Card on={beat >= 4} delay={dl(4, 0)} x={COL[1]} y={ROW[1]} stroke={AMBER_DARK} title="Concurrency & Family">
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={COL[1] + 20} y={ROW[1] + 44} size={13} fill={INK} anchor="start">
            Concurrency: |a₁ b₁ c₁; a₂ b₂ c₂; a₃ b₃ c₃| = 0
          </T>
          <T x={COL[1] + 20} y={ROW[1] + 68} size={13} fill={INK} anchor="start">
            Family: L₁ + λL₂ = 0
          </T>
        </Fade>
      </Card>

      {/* beat 5 — angle-bisector pair, verbatim from Sec47 (split at the "=" onto 2 lines) */}
      <Card on={beat >= 5} delay={dl(5, 0)} x={COL[0]} y={ROW[2]} stroke={AMBER_DARK} title="Angle Bisector Pair">
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={COL[0] + 20} y={ROW[2] + 44} size={13} fill={INK} anchor="start">
            (a₁x + b₁y + c₁) / √(a₁² + b₁²) =
          </T>
          <T x={COL[0] + 20} y={ROW[2] + 68} size={13} fill={INK} anchor="start">
            ±(a₂x + b₂y + c₂) / √(a₂² + b₂²)
          </T>
        </Fade>
      </Card>

      {/* beat 6 — foot of perpendicular, verbatim from Sec55. GREEN: paired with card 7 below —
          see COLOR CHOICE note. */}
      <Card on={beat >= 6} delay={dl(6, 0)} x={COL[1]} y={ROW[2]} stroke={GREEN} title="Foot of Perpendicular">
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={COL[1] + 20} y={ROW[2] + 58} size={14} fill={INK} anchor="start">
            Foot: (x - x₁)/a = (y - y₁)/b = -(ax₁ + by₁ + c)/(a² + b²)
          </T>
        </Fade>
      </Card>

      {/* beat 7 — image / reflection formula, verbatim from Sec55, full width. GREEN + identical
          size14/weight700/anchor=start typography to card 6 — the deliberate "same shape, factor
          of 2" echo the task asked for. */}
      <Card on={beat >= 7} delay={dl(7, 0)} x={60} y={438} w={960} h={84} stroke={GREEN} title="Image (Reflection)">
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={80} y={488} size={14} fill={INK} anchor="start">
            Image: (x' - x₁)/a = (y' - y₁)/b = -2(ax₁ + by₁ + c)/(a² + b²)
          </T>
        </Fade>
      </Card>

      {/* beat 8 — CLOSING red-margin note (NOT a card). This chapter's established red-bar +
          bold-red-text guardrail treatment, alone at the foot of the board. */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 434 550 L 434 582" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={450} y={570} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Complete toolkit for the back half — your one-glance revision board.",
            "Poora toolkit — back half ka one-glance revision board."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
