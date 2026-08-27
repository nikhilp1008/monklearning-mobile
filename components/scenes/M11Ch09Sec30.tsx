/**
 * M11 Ch09 · Section 30 — "Distance Formulas — Toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a pure reference-card recap of every distance tool taught in
 * secs 27-29 (point-to-line distance, distance between parallels, the symmetric/parametric
 * line form, and the side-test for two points relative to a line). Same "formula_recap /
 * cheat_sheet" discipline as this chapter's three finished sibling toolkit sections
 * (M11Ch09Sec5, M11Ch09Sec13, M11Ch09Sec22 — the direct layout precedent): one formula per
 * beat, HIGH-emphasis items boxed as a Chip (CREAM fill / AMBER stroke / AMBER_DARK text),
 * normal-emphasis items as plain bold ink text, single centered column, no live derivation,
 * no math-kit diagram. UNLIKE the three siblings (which each have exactly one closing
 * red-margin guardrail), this section's JSON flags TWO red-margin notes: one MID-LIST
 * (seq4, "normalize to identical A,B first") sitting between the two HIGH formula chips, and
 * one CLOSING (seq8, the same-side/opposite-side sign rule) at the very end — see the
 * mid-list-vs-closing visual-distinction note below.
 *
 * board_content seq1 is the heading ("Distance Formulas — Toolkit") -> always-on title.
 * seq2..seq8 (7 items) gate at beat>=1..beat>=7. reveals_english (8 values) = [0.0, 4.52,
 * 17.41, 23.72, 33.88, 44.29, 52.48, 61.53]; reveals_hinglish (8 values) = [0.0, 5.55, 17.49,
 * 23.55, 32.26, 42.33, 49.15, 54.95].
 *
 * Emphasis from JSON: seq2 (point-to-line) HIGH, seq3 (parallel lines) HIGH, seq4 (mid-list
 * guardrail: normalize A,B) HIGH + red-margin, seq5 (symmetric form) normal, seq6 (r is
 * signed distance) normal, seq7 (side test) normal, seq8 (closing guardrail: same/opposite
 * sign) HIGH + red-margin. Two HIGH formulas -> two Chips (beat1, beat2); three normal
 * formulas/text -> plain bold ink T (beat4, beat5, beat6); two HIGH red-margin notes -> the
 * Sec1/Sec5/Sec13/Sec22 red-bar + red-text convention (beat3, beat7).
 *
 * MID-LIST vs CLOSING GUARDRAIL — visual distinction (per task instruction, so they don't
 * read as duplicate callouts): both use the same red-bar-plus-text *family* (house style for
 * "style":"red-margin"), but they are structurally different shapes so a glance tells them
 * apart even out of narration order: beat3 (mid-list) is a SINGLE unbroken sentence on ONE
 * line, sitting between the two formula chips with formula rows both above (beat1/beat2) and
 * below (beat4/5/6) it — it reads as an inline aside interrupting the formula flow. beat7
 * (closing) is a TWO-line note (clause broken at the semicolon, matching the Sec13/Sec22
 * closing-guardrail precedent) sitting alone at the foot of the board with nothing below it —
 * it reads as the final "remember this" takeaway. Different line-count, different position in
 * the row order (interruption vs. capstone), and ~148px of vertical separation with three
 * unrelated formula rows between them — not adjacent, not same shape, not mistakable for a
 * repeated note.
 *
 * NOTATION: minus sign is a plain hyphen throughout (C₁ - C₂, x - x₁). θ used freely (no
 * plain-letter substitute for Greek, native-but-fallback per the 3rd/7th glyph audits, this
 * chapter's most-used symbol already). √ ² are native to both fonts (confirmed no-fallback
 * list). Absolute value uses plain "|...|" (U+007C, native to both fonts), never U+2223.
 * \frac{a}{b} flattened inline as "a/b" — applies to both distance formulas' fraction and to
 * both fractions inside the symmetric form (kept as two separate "= ... = r" clauses rather
 * than a single division, since that IS the symmetric form's actual structure, not a fraction
 * to flatten away). \text{...} label prefixes ("Point to line:", "Parallel lines:",
 * "Symmetric form:", "Side test:") kept in English for both languages, matching this
 * chapter's established convention (segments_hinglish itself code-switches these exact
 * English terms: "Point to line: d hai...", "Parallel lines: d hai...", "Symmetric form:
 * ..."). Numeral subscripts (x₁, y₁, A², B², C₁, C₂) rendered as real Unicode subscript/
 * superscript digits in non-script Anek text (script={false} on every Chip here, matching
 * Sec5/13/22's precedent) per the font-audit rule that Kalam is missing most of that glyph
 * set. Per SCENE_AUTHORING_MATHS.md a symbolic formula is byte-identical between languages;
 * following Sec13's precedent (its closing guardrail's prose was ALSO left untranslated, not
 * just its formulas), every non-title string below — formulas AND the two guardrail/text
 * notes — is shared by both t() branches. Only the always-on title differs by language.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script; over-estimate) — single centered column,
 * all comfortably inside the 1008px-wide safe span (x36-1044); the two lines flagged by the
 * task as likely-widest (symmetric form, side test) budgeted alongside the two formula chips:
 *   b1 chip   "Point to line: d = |Ax₁ + By₁ + C| / √(A² + B²)"   47 ch @17 -> 399.5px
 *   b2 chip   "Parallel lines: d = |C₁ - C₂| / √(A² + B²)"        42 ch @17 -> 357.0px
 *   b3 note   "Normalize to identical A, B before using the        67 ch @15 -> 502.5px
 *              parallel-line formula."                                          (anchor start)
 *   b4 text   "Symmetric form: (x - x₁)/cosθ = (y - y₁)/sinθ = r"  49 ch @16 -> 392.0px
 *   b5 text   "r is the signed distance from (x₁, y₁) along        59 ch @15 -> 442.5px
 *              inclination θ."
 *   b6 text   "Side test: sign of (Ax₁ + By₁ + C)"                 34 ch @18 -> 306.0px
 *   b7 line1  "Same sign ⇒ same side;"                             22 ch @15 -> 165.0px  (anchor start)
 *   b7 line2  "opposite signs ⇒ line separates the points."        43 ch @15 -> 322.5px  (anchor start)
 * Widest is b3's single-line guardrail at 502.5px, anchor=start from x450 -> right edge
 * x952.5, still 91.5px clear of the x1044 safe edge. Every centered (anchor=middle) row is
 * far narrower than the 1008px column. Single centered column confirmed sufficient for all 7
 * rows — no 2-column split needed, consistent with all three sibling toolkit sections.
 *
 * Layout plan (anchor=middle at x540 for formula/text rows, anchor=start at x450 for both
 * guardrails' text, matching the Sec1/Sec5/Sec13/Sec22 red-margin convention; Anek text box
 * top=y-0.78×size, bottom=y+0.31×size; Kalam title top=y-1.3×size, bottom=y+0.5×size; Chip
 * box = [x,x+w]×[y,y+h] directly, no baseline math):
 *  title(always-on) | T mid script size22        | x540 y64  | box y35.4..75.0
 *  b1 HIGH           | Chip size17 w460 h44        | x310..770 y104..148
 *  b2 HIGH           | Chip size17 w420 h44         | x330..750 y178..222
 *  b3 HIGH guardrail | Draw bar x434 y252..284 (mid-list, single line)
 *                    | T start size15               | x450 y272 box x450..952.5  y260.3..276.65
 *  b4 normal         | T mid size16                 | x540 y326 box x344..736    y313.52..330.96
 *  b5 normal         | T mid size15                 | x540 y372 box x318.75..761.25 y360.3..376.65
 *  b6 normal         | T mid size18                 | x540 y420 box x387..693    y405.96..425.58
 *  b7 HIGH guardrail | Draw bar x434 y455.58..511 (closing, two lines)
 *                    | T start size15 line1         | x450 y475 box x450..615    y463.3..479.65
 *                    | T start size15 line2         | x450 y499 box x450..772.5  y487.3..503.65
 * Vertical gaps (box-bottom -> next box-top): title->b1 29.0, b1->b2 30.0, b2->b3(bar) 30.0,
 * b3(bar)->b4 29.52, b4->b5 29.34, b5->b6 29.31, b6->b7(bar) 30.0 — all comfortably >= the
 * 24px group-clearance floor. Closing guardrail bar bottom 511, leaving 85px of unused margin
 * above the y596 safe floor — same deliberate-margin discipline as the three siblings.
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

export default function M11Ch09Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Distance Formulas — Toolkit", "Distance Formulas — Poora Toolkit")}
        </T>
      </Fade>

      {/* beat 1 — point to line (HIGH) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={310} y={104} w={460} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={17} script={false}>
          Point to line: d = |Ax₁ + By₁ + C| / √(A² + B²)
        </Chip>
      </Fade>

      {/* beat 2 — parallel lines (HIGH) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={330} y={178} w={420} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={17} script={false}>
          Parallel lines: d = |C₁ - C₂| / √(A² + B²)
        </Chip>
      </Fade>

      {/* beat 3 — MID-LIST guardrail (HIGH, red-margin: normalize A,B first).
          Single-line note, sits between the two formula chips — see header note on how
          this reads distinct from the closing (beat 7) two-line guardrail below. */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d="M 434 252 L 434 284" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={450} y={272} size={15} fill={RED} anchor="start" weight={700}>
          Normalize to identical A, B before using the parallel-line formula.
        </T>
      </Fade>

      {/* beat 4 — symmetric form (normal) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={326} size={16} fill={INK} anchor="middle" weight={700}>
          Symmetric form: (x - x₁)/cosθ = (y - y₁)/sinθ = r
        </T>
      </Fade>

      {/* beat 5 — r is the signed distance (normal) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={372} size={15} fill={INK} anchor="middle" weight={700}>
          r is the signed distance from (x₁, y₁) along inclination θ.
        </T>
      </Fade>

      {/* beat 6 — side test (normal) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={420} size={18} fill={INK} anchor="middle" weight={700}>
          Side test: sign of (Ax₁ + By₁ + C)
        </T>
      </Fade>

      {/* beat 7 — CLOSING guardrail (HIGH, red-margin: same/opposite sign rule).
          Two-line note, alone at the foot of the board — the "remember this" capstone,
          structurally distinct from the mid-list single-line guardrail above. */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 434 455.58 L 434 511" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={450} y={475} size={15} fill={RED} anchor="start" weight={700}>
          Same sign ⇒ same side;
        </T>
        <T x={450} y={499} size={15} fill={RED} anchor="start" weight={700}>
          opposite signs ⇒ line separates the points.
        </T>
      </Fade>
    </Scene>
  );
}
