/**
 * M11 Ch09 · Section 13 — "Slope and Angles: Formula Toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a reference-toolkit recap of results already taught in this
 * subtopic (slope, two-point slope, parallel/perpendicular conditions, angle between two
 * lines, collinearity, the equally-inclined special case). Same "formula_recap / cheat_sheet"
 * discipline as M11Ch09Sec5 (this chapter's finished sibling formulas-toolkit section, used
 * as the layout precedent here): one formula per beat, HIGH-emphasis items boxed as a Chip
 * (CREAM fill / AMBER stroke / AMBER_DARK text), normal-emphasis items as plain bold ink
 * text, the closing red-margin note as a Sec1-style red bar + red text. No live derivation,
 * no math-kit diagram — pure text/chip reference card.
 *
 * board_content seq1 is the heading ("Slope & Angles — Toolkit") -> always-on title.
 * seq2..seq8 gate at beat>=1..beat>=7. reveals_english = [0, 7.08, 15.45, 24.41, 29.44,
 * 37.21, 46.76, 52.48]; reveals_hinglish = [0, 7.34, 14.93, 23.47, 29.53, 38.4, 47.53, 53.08]
 * (8 boundaries each, matching the always-on title + 7 gated beats).
 *
 * Emphasis from JSON: seq2 (m=tanθ) HIGH, seq3 (two-point slope) HIGH, seq4 (parallel)
 * normal, seq5 (perpendicular) HIGH, seq6 (angle between) normal, seq7 (collinear) normal,
 * seq8 (equally-inclined note) HIGH + red-margin style. Three HIGH formulas -> three Chips
 * (the "must-know" facts: m=tanθ, the two-point slope formula, and the perpendicular
 * condition — the task explicitly called out perpendicular, and the JSON's own emphasis
 * flags the other two the same way, so all three get the boxed treatment for consistency
 * with Sec5's convention); three normal formulas -> plain bold ink T; the guardrail -> red
 * bar + red text.
 *
 * NOTATION: \quad conditions folded onto the same line in parens, e.g. "m = tanθ (θ ≠ 90°)"
 * (a visual gap via a real space, not stacked as a separate line — keeps the row count at 7
 * and matches Sec5's one-item-per-beat rhythm). \frac{a}{b} flattened inline "a/b". \left|
 * \right| -> plain "|...|" (native to both fonts, per SCENE_AUTHORING_MATHS's \mid rule).
 * m_1 m_2 (implied product, no LaTeX operator) written as "m1·m2" — "·" is native to both
 * fonts (2nd glyph audit) and reads more clearly than bare "m1m2" given no true subscript
 * styling is available. \text{...} labels ("Parallel:", "Perpendicular:", "Collinear:")
 * kept in English for both languages — segments_hinglish itself code-switches these exact
 * English words ("Parallel lines ki slope...", "Perpendicular lines satisfy...", "...
 * collinear hain"). Per SCENE_AUTHORING_MATHS.md a symbolic formula is byte-identical
 * between languages, so (as in Sec5) every formula/guardrail string below is shared by both
 * t() branches — only the always-on title differs by language.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script; over-estimate) — single centered column,
 * all comfortably inside the 1008px-wide safe span (x36–1044):
 *   b1 chip "m = tanθ (θ ≠ 90°)"                    18 ch @18 -> 162.0px  (chip w220)
 *   b2 chip "m = (y2 - y1)/(x2 - x1) (x1 ≠ x2)"      33 ch @16 -> 264.0px  (chip w320)
 *   b3 text "Parallel: m1 = m2"                      17 ch @18 -> 153.0px
 *   b4 chip "Perpendicular: m1·m2 = -1"               25 ch @18 -> 225.0px  (chip w280)
 *   b5 text "tanθ = |(m2 - m1)/(1 + m1·m2)|"          30 ch @18 -> 270.0px
 *   b6 text "Collinear: slope(AB) = slope(BC)"        32 ch @18 -> 288.0px
 *   b7 note "Equally inclined to both axes ⇒ m = ±1"  38 ch @15 -> 285.0px
 *           "(θ = 45° or 135°)"                       17 ch @15 -> 127.5px
 * Widest single element is b2's chip (w320, x380..700) — 344px clear of both safe-x edges.
 * A 2-column split was considered (per task guidance) but every row already has 300px+ of
 * slack on both sides in a single column, and this chapter's sibling Sec5 (8 rows, wider
 * formulas up to 450px chips) already proved a single centered column fits comfortably — a
 * 2-column split would only add unnecessary alignment bookkeeping for no space benefit here.
 *
 * Layout plan (all anchor=middle at x540 unless noted; Anek box top=y-0.78×size,
 * bottom=y+0.31×size; Kalam title top=y-1.3×size, bottom=y+0.5×size):
 *  title(always-on) | T mid script size22 | x540 y64  | box y35.4..75.0
 *  b1 HIGH  | Chip size18 w220 h44 | x430..650 y104..148
 *  b2 HIGH  | Chip size16 w320 h44 | x380..700 y176..220
 *  b3 normal| T mid size18 w700    | x540 y266 | box x463.5..616.5 y251.96..271.58
 *  b4 HIGH  | Chip size18 w280 h44 | x400..680 y300..344
 *  b5 normal| T mid size18 w700    | x540 y390 | box x405..675 y375.96..395.58
 *  b6 normal| T mid size18 w700    | x540 y440 | box x396..684 y425.96..445.58
 *  b7 HIGH  | Draw bar + T start size15 x2 lines | bar x434 y474..528
 *           line1 x450 y496 box x450..735 y484.85..500.65
 *           line2 x450 y520 box x450..577.5 y508.85..524.65
 * Vertical gaps (title->b1->b2->...->b7): 29, 28, 31.96, 28.42, 31.96, 30.38, 28.42 — all
 * >= the 24px group-clearance floor. Last box (guardrail line2) bottom 524.65, bar bottom
 * 528 — 68px of unused margin above the y596 safe floor, same deliberate-margin discipline
 * as Sec5.
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch09Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Slope & Angles — Toolkit", "Slope aur Angles — Toolkit")}
        </T>
      </Fade>

      {/* beat 1 — m = tanθ (HIGH) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={430} y={104} w={220} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={18} script={false}>
          m = tanθ (θ ≠ 90°)
        </Chip>
      </Fade>

      {/* beat 2 — two-point slope (HIGH) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={380} y={176} w={320} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          m = (y2 - y1)/(x2 - x1) (x1 ≠ x2)
        </Chip>
      </Fade>

      {/* beat 3 — parallel (normal) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={266} size={18} fill={INK} anchor="middle" weight={700}>
          Parallel: m1 = m2
        </T>
      </Fade>

      {/* beat 4 — perpendicular (HIGH) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Chip x={400} y={300} w={280} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={18} script={false}>
          Perpendicular: m1·m2 = -1
        </Chip>
      </Fade>

      {/* beat 5 — angle between two lines (normal) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={390} size={18} fill={INK} anchor="middle" weight={700}>
          tanθ = |(m2 - m1)/(1 + m1·m2)|
        </T>
      </Fade>

      {/* beat 6 — collinear (normal) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={440} size={18} fill={INK} anchor="middle" weight={700}>
          Collinear: slope(AB) = slope(BC)
        </T>
      </Fade>

      {/* beat 7 — guardrail (HIGH, red-margin: equally-inclined special case) */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 434 474 L 434 528" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={450} y={496} size={15} fill={RED} anchor="start" weight={700}>
          Equally inclined to both axes ⇒ m = ±1
        </T>
        <T x={450} y={520} size={15} fill={RED} anchor="start" weight={700}>
          (θ = 45° or 135°)
        </T>
      </Fade>
    </Scene>
  );
}
