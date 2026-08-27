/**
 * M11 Ch09 · Section 5 — "Coordinate Foundations — Toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas, but every item here recaps a result already taught+demoed in
 * secs 1-4 (distance/section/midpoint/centroid/area all got their own derivation) — per
 * task guidance this reads as a formula_recap/cheat_sheet "notes page" (M11Ch05Sec42 is the
 * precedent for that layout in this codebase): each formula lands directly, one per beat,
 * boxed/chip'd for the JSON's emphasis:"high" items, plain text for "normal" ones. No live
 * derivation, no math-kit diagram — this is a pure text/chip reference card.
 *
 * board_content seq1 is the heading ("Coordinate Foundations — Toolkit") -> always-on title.
 * seq2..seq9 gate at beat>=1..beat>=8. reveals_english (8 boundaries after the always-on
 * title) = [0, 4.95, 20.57, 29.1, 37.8, 45.82, 51.88, 58.03, 67.67]; reveals_hinglish =
 * [0, 6.14, 19.8, 28.84, 35.75, 43.86, 49.75, 54.7, 61.18].
 *
 * Emphasis from JSON: seq2 (distance) HIGH, seq3/4/5 (internal/external/midpoint) normal,
 * seq6 (centroid) HIGH, seq7 (area) HIGH, seq8 (collinear note) HIGH + red-margin style,
 * seq9 (shift of origin) normal. HIGH formulas get a Chip (CREAM fill / AMBER stroke /
 * AMBER_DARK text, same treatment M11Ch05Sec42 uses for its boxed rules); normal formulas
 * are plain bold ink text; the collinear guardrail gets the Sec1-style red bar + red text.
 *
 * NOTATION: \frac{a}{b} flattened inline as "a/b" (house convention, no stacked-fraction
 * primitive exists) INCLUDING \tfrac{1}{2} in the area formula -> "1/2", not "½", per the
 * task's explicit flatten-every-fraction instruction. \left(/\right) -> plain "(" ")".
 * \text{...} labels -> plain word prefixes ("Internal:", "External:", ...), kept in English
 * for both languages (the Hinglish narration itself code-switches these same English words
 * in segments_hinglish, e.g. "internal section point", "Triangle ka centroid"). Numeral
 * subscripts/superscripts (x₂, x₁, ², Δ) go in non-script Anek text/Chips (script={false}
 * everywhere here) per the font-audit rule that Kalam is missing most of that glyph set.
 * Per SCENE_AUTHORING_MATHS.md, a symbolic formula is byte-identical between languages, so
 * every formula string below is shared by both t() branches (only the always-on title and
 * the guardrail sentence, both short prose, differ by language).
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek; over-estimate) — all comfortably inside the
 * 1008px-wide safe span (x36-1044), single centered column, no 2-column split needed:
 *   distance  "AB = √((x₂ - x₁)² + (y₂ - y₁)²)"                    31 ch @17 -> 263.5px
 *   internal  "Internal: ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))"   48 ch @16 -> 384.0px
 *   external  "External: ((mx₂ - nx₁)/(m-n), (my₂ - ny₁)/(m-n))"   48 ch @16 -> 384.0px
 *   midpoint  "Midpoint: ((x₁ + x₂)/2, (y₁ + y₂)/2)"                36 ch @16 -> 288.0px
 *   centroid  "Centroid: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)"              46 ch @16 -> 368.0px
 *   area      "Δ = 1/2 |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|"         49 ch @16 -> 392.0px
 *   guardrail "Collinear ⇔ Δ = 0."                                  18 ch @20 -> 180.0px
 *   shift     "Shift of origin to (h, k): X = x - h, Y = y - k"     47 ch @16 -> 376.0px
 * Widest (area chip, textW 392) + 50px chip padding = 442px, centered -> x319..761. Still
 * 283px clear of both safe-x edges. Single vertical column confirmed sufficient.
 *
 * Layout plan (all anchor=middle at x540 unless noted; boxes = Anek text-box formula,
 * top=y-0.78×size, bottom=y+0.31×size, or Kalam top=y-1.3×size/bottom=y+0.5×size for the
 * script title):
 *  title(always-on)  | T mid script size22 | x540 y64  | box y35.4..75.0   x340..740(en)
 *  b1 distance HIGH   | Chip size17 w320 h44 | x380..700 y104..148
 *  b2 internal normal | T mid size16 w700   | x540 y190 | box x348..732 y177.5..195.0
 *  b3 external normal | T mid size16 w700   | x540 y238 | box x348..732 y225.5..243.0
 *  b4 midpoint normal | T mid size16 w700   | x540 y286 | box x396..684 y273.5..291.0
 *  b5 centroid HIGH   | Chip size16 w420 h44 | x330..750 y320..364
 *  b6 area HIGH       | Chip size16 w450 h44 | x315..765 y394..438
 *  b7 guardrail HIGH   | Draw bar + T start size20 | bar x434 y466..494 | text x450 y484 box x450..630 y468.4..490.2
 *  b8 shift normal    | T mid size16 w700   | x540 y536 | box x352..728 y523.5..541.0
 * Vertical gaps (title->b1->b2->...->b8): 29, 29.5, 30.6, 30.6, 29, 30, 28(bar)/29.5(shift) —
 * all >= the 24px group-clearance floor, most with several px of margin. Last box bottom
 * 541.0, well inside safe y<=596 (55px of unused margin at the foot, deliberate — a crowded
 * bottom edge is the #1 way this section type overflows).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch09Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Coordinate Foundations — Toolkit", "Coordinate Foundations — Poora Toolkit")}
        </T>
      </Fade>

      {/* beat 1 — distance (HIGH) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={380} y={104} w={320} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={17} script={false}>
          AB = √((x₂ - x₁)² + (y₂ - y₁)²)
        </Chip>
      </Fade>

      {/* beat 2 — internal section (normal) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={190} size={16} fill={INK} anchor="middle" weight={700}>
          Internal: ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))
        </T>
      </Fade>

      {/* beat 3 — external section (normal) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={238} size={16} fill={INK} anchor="middle" weight={700}>
          External: ((mx₂ - nx₁)/(m-n), (my₂ - ny₁)/(m-n))
        </T>
      </Fade>

      {/* beat 4 — midpoint (normal) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={286} size={16} fill={INK} anchor="middle" weight={700}>
          Midpoint: ((x₁ + x₂)/2, (y₁ + y₂)/2)
        </T>
      </Fade>

      {/* beat 5 — centroid (HIGH) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={330} y={320} w={420} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          Centroid: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)
        </Chip>
      </Fade>

      {/* beat 6 — area (HIGH) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={315} y={394} w={450} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          Δ = 1/2 |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|
        </Chip>
      </Fade>

      {/* beat 7 — guardrail (HIGH, red-margin: collinear <=> area 0) */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 434 466 L 434 494" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={450} y={484} size={20} fill={RED} anchor="start" weight={700}>
          Collinear ⇔ Δ = 0.
        </T>
      </Fade>

      {/* beat 8 — shift of origin (normal) */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={540} y={536} size={16} fill={INK} anchor="middle" weight={700}>
          Shift of origin to (h, k): X = x - h, Y = y - k
        </T>
      </Fade>
    </Scene>
  );
}
