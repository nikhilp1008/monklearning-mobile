/**
 * M11 Ch09 · Section 47 — "Angle bisectors: formula toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — closes out the concept/formula portion of subtopic 6 (Angle Bisectors
 * of Two Lines, secs 44-51) before worked examples 48/49/50 and the tips-closer 51. Same
 * "formula_recap / cheat_sheet" discipline as this chapter's four finished sibling toolkit
 * sections (M11Ch09Sec5, Sec13, Sec22, Sec30, Sec39 — the direct layout precedent, Sec39 freshest):
 * one item per beat, HIGH-emphasis formula boxed as a Chip (CREAM fill / AMBER stroke /
 * AMBER_DARK text), normal-emphasis items as plain bold ink text, single centered column, no
 * live derivation, no math-kit diagram (pure recap, matches Sec5/13/22/30/39's diagram-free
 * precedent). Like Sec30, this section's JSON flags TWO red-margin notes: one MID-LIST (seq3,
 * "normalize c1,c2>0 first") sitting between the HIGH chip and the normal-emphasis rows, and one
 * CLOSING (seq8, "each line keeps its own denominator") at the very end — see the visual-
 * distinction note below, same treatment as Sec30's mid-list/closing pair.
 *
 * board_content (queried live from Supabase lesson_sections, chapter_id
 * 5edf4eb2-af54-5da2-b8fa-bfbb3270e702, position 47 — verified byte-for-byte against the task
 * brief) seq1 is the heading ("Angle Bisectors — Toolkit") -> always-on title. seq2..seq8 (7
 * items) gate at beat>=1..beat>=7. reveals_english (8 values) = [0.0, 5.03, 13.4, 20.05, 25.77,
 * 42.15, 50.77, 57.26]; reveals_hinglish (8 values) = [0.0, 4.69, 14.08, 18.86, 24.15, 35.24,
 * 43.09, 48.98] — both confirmed against board_reveal_at_english/hinglish columns directly.
 *
 * Emphasis from JSON: seq2 (the ± bisector-pair formula) HIGH, seq3 (normalize guardrail) HIGH +
 * red-margin, seq4 (origin's bisector = '+' sign) normal, seq5 (acute/obtuse sign test) normal,
 * seq6 (only compute when asked) normal, seq7 (bisectors' slopes multiply to -1) normal, seq8
 * (own-denominator guardrail) HIGH + red-margin. One HIGH formula -> one Chip (beat1); four
 * normal formula/text rows -> plain bold ink T (beat3, beat4, beat5, beat6); two HIGH red-margin
 * notes -> the Sec1/Sec5/Sec13/Sec22/Sec30/Sec39 red-bar + red-text convention (beat2, beat7).
 *
 * MID-LIST vs CLOSING GUARDRAIL — visual distinction (per task instruction and Sec30's precedent,
 * so the two red-margin notes don't read as duplicate callouts even though both are on screen by
 * the final frame): beat2 (mid-list) is a SINGLE unbroken sentence on ONE line, sitting directly
 * under the lone HIGH chip with only normal-emphasis rows below it — reads as an inline aside
 * clarifying the formula just shown. beat7 (closing) is a TWO-line note (broken at the em dash,
 * matching Sec30's closing-guardrail line-break precedent) sitting alone at the foot of the board
 * with nothing below it — reads as the final "remember this" takeaway. Different line-count,
 * different position in the row order (early interruption vs. capstone), ~212px of vertical
 * separation with four unrelated rows between them — not adjacent, not same shape, not mistakable
 * for a repeated note.
 *
 * VERIFICATION NOTE (task-required): sections 44, 45, 46, 48, 49, 50 are still unauthored
 * placeholders in this repo (checked directly — no rendered precedent exists to diff against), so
 * "already-verified formulas" was cross-checked against the actual Supabase board_content JSON
 * for positions 44-51 (pulled live via the REST API), not against sibling .tsx files. Every
 * formula below is character-for-character consistent with that source: the ± bisector-pair
 * formula (seq2) is byte-identical to Sec44 seq5 / Sec45 seq6's LaTeX; the c1>0,c2>0 normalize
 * guardrail (seq3) matches Sec44 seq7 / Sec46 seq2's phrasing; the '+' = origin's bisector (seq4)
 * matches Sec46 seq3; the acute/obtuse sign test (seq5) matches Sec46 seq6/seq7 combined into one
 * line (same as the source JSON does here); "each line its own √(a²+b²)" (seq8) is byte-identical
 * to Sec45 seq8's guardrail. ONE deliberate simplification: seq7's raw LaTeX is
 * `m_{b_1}\,m_{b_2}=-1` (slope of bisector 1 times slope of bisector 2) — a genuine two-level
 * subscript (digit subscripted onto a subscripted "b") that neither board font can render (no
 * Unicode subscript "b" exists at all, unlike the digits). Sec46 seq8 states the identical fact
 * in this exact subtopic using the simpler `m_1 m_2 = -1` (plain numeral subscripts, no "b"
 * level) — since that IS one of the "already-verified" sections 44-46 this section recaps, seq7
 * here follows Sec46's own simpler phrasing rather than inventing new subscript notation: "Always:
 * m₁·m₂ = -1", context (an angle-bisectors toolkit, immediately after the acute/obtuse bisector
 * rule) makes clear m₁/m₂ are the two bisectors' slopes, not the original lines'.
 *
 * BILINGUAL: following Sec5/13/22/30/39's own established convention for this exact section type
 * (all five toolkit siblings render every formula/text/guardrail row identically in both
 * languages — only the always-on title is translated), every row below except the title is a
 * shared string, not run through t(). Title: t("Angle Bisectors — Toolkit", "Angle Bisectors —
 * Poora Toolkit") — matches Sec30/Sec39's "— Poora Toolkit" Hinglish-title pattern exactly.
 *
 * NOTATION: minus sign is a plain hyphen throughout. ± √ ² are native to both fonts (confirmed
 * no-fallback list). ⇒ is a safe operator (6th-audit operator list). · (middle dot) native to
 * both fonts (6th glyph audit). Numeral subscripts (a₁ b₁ c₁, a₂ b₂ c₂, m₁ m₂) are real Unicode
 * subscript digits in non-script Anek text — T's default is already script=false, and the one
 * Chip below is given explicit script={false} (Kalam is missing most subscript/superscript
 * digits per the font-audit rule; Sec30/Sec39 do the same). \frac{a}{b} flattened inline as
 * "a / b" (house convention, matches Sec30's "d = |Ax₁+By₁+C| / √(A²+B²)" spacing) even for the
 * HIGH-emphasis star formula — no stacked-fraction primitive exists yet (still future work per
 * SCENE_AUTHORING_MATHS.md). \text{...} labels flattened to plain words. \quad -> a plain space
 * (no real 2-D gap primitive needed for an inline semicolon-separated clause).
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script; over-estimate) — single centered column,
 * all comfortably inside the 1008px-wide safe span (x36-1044):
 *   b1 chip "(a₁x + b₁y + c₁) / √(a₁² + b₁²) = ±(a₂x + b₂y + c₂) / √(a₂² + b₂²)"
 *                                                          66 ch @15 -> 495.0px (chip w570)
 *   b2 note "Normalize first: make c₁ > 0 and c₂ > 0."     40 ch @15 -> 300.0px (anchor start)
 *   b3 text "Origin's bisector: the '+' sign"               31 ch @18 -> 279.0px
 *   b4 text "a₁a₂ + b₁b₂ > 0 ⇒ '+' obtuse; < 0 ⇒ '+' acute" 45 ch @16 -> 360.0px
 *   b5 text "Decide acute versus obtuse only when the        62 ch @15 -> 465.0px
 *            question asks for it."
 *   b6 text "Always: m₁·m₂ = -1"                             18 ch @20 -> 180.0px
 *   b7 line1 "Each line carries its own √(a² + b²)            50 ch @15 -> 375.0px (anchor start)
 *             denominator —"
 *   b7 line2 "do not share one."                              17 ch @15 -> 127.5px (anchor start)
 * Widest is b1's chip at 495px text (chip w570, x255-825), 219px clear on both sides of the
 * 1008px safe span. Every anchor-start guardrail row (b2, b7) sits well left of the x1044 edge.
 * Single centered column confirmed sufficient — no 2-column split needed, consistent with all
 * five sibling toolkit sections.
 *
 * Layout plan (anchor=middle at x540 for formula/text rows, anchor=start at x450 for both
 * guardrails' text, matching the established red-margin convention; Anek text box
 * top=y-0.78×size, bottom=y+0.31×size; Kalam title top=y-1.3×size, bottom=y+0.5×size; Chip
 * box=[x,x+w]×[y,y+h] directly):
 *  title(always-on)     | T mid script size22          | x540 y64   | box y35.4..75.0
 *  b1 HIGH chip          | Chip size15 w570 h44          | x255..825 y104..148
 *  b2 HIGH guardrail bar | Draw x434                      | y176..208 (mid-list, single line)
 *                        | T start size15                 | x450 y196 box x450..750  y184.3..200.65
 *  b3 normal              | T mid size18                  | x540 y248 box x400.5..679.5 y233.96..253.58
 *  b4 normal              | T mid size16                  | x540 y292 box x360..720    y279.52..296.96
 *  b5 normal               | T mid size15                 | x540 y336 box x307.5..772.5 y324.3..340.65
 *  b6 normal               | T mid size20                 | x540 y384 box x450..630    y368.4..390.2
 *  b7 HIGH guardrail bar  | Draw x434                      | y420..476 (closing, two lines)
 *                        | T start size15 line1           | x450 y440 box x450..825    y428.3..444.65
 *                        | T start size15 line2           | x450 y465 box x450..577.5  y453.3..469.65
 * Vertical gaps (box-bottom -> next box-top): title->b1 29.0, b1->b2bar 28.0, b2(group bottom
 * 208)->b3 25.96, b3->b4 25.94, b4->b5 27.34, b5->b6 27.75, b6->b7bar 29.8 — all comfortably >=
 * the 24px group-clearance floor. Within-group text-vs-stroke clearance (guardrail bar at x434 to
 * text starting x450) is 16px, >= the 10px floor, on both guardrails. b7-line1 -> b7-line2
 * baseline gap is 25px, >= the 1.6×15=24px stacked-line floor. Closing bar bottom 476, leaving
 * 120px of unused margin above the y596 safe floor.
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

export default function M11Ch09Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Angle Bisectors — Toolkit", "Angle Bisectors — Poora Toolkit")}
        </T>
      </Fade>

      {/* beat 1 — the ± bisector-pair formula (HIGH) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={255} y={104} w={570} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15} script={false}>
          (a₁x + b₁y + c₁) / √(a₁² + b₁²) = ±(a₂x + b₂y + c₂) / √(a₂² + b₂²)
        </Chip>
      </Fade>

      {/* beat 2 — MID-LIST guardrail (HIGH, red-margin: normalize c1,c2>0 first).
          Single-line note, sits directly under the HIGH chip — see header note on how this reads
          distinct from the closing (beat 7) two-line guardrail below. */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 434 176 L 434 208" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={450} y={196} size={15} fill={RED} anchor="start" weight={700}>
          Normalize first: make c₁ &gt; 0 and c₂ &gt; 0.
        </T>
      </Fade>

      {/* beat 3 — origin's bisector = '+' sign (normal) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={248} size={18} fill={INK} anchor="middle" weight={700}>
          Origin&apos;s bisector: the &apos;+&apos; sign
        </T>
      </Fade>

      {/* beat 4 — acute/obtuse sign test (normal) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={292} size={16} fill={INK} anchor="middle" weight={700}>
          a₁a₂ + b₁b₂ &gt; 0 ⇒ &apos;+&apos; obtuse; &lt; 0 ⇒ &apos;+&apos; acute
        </T>
      </Fade>

      {/* beat 5 — only compute when asked (normal) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={336} size={15} fill={INK} anchor="middle" weight={700}>
          Decide acute versus obtuse only when the question asks for it.
        </T>
      </Fade>

      {/* beat 6 — bisector slopes multiply to -1 (normal) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={384} size={20} fill={INK} anchor="middle" weight={700}>
          Always: m₁·m₂ = -1
        </T>
      </Fade>

      {/* beat 7 — CLOSING guardrail (HIGH, red-margin: each line keeps its own denominator).
          Two-line note, alone at the foot of the board — the "remember this" capstone,
          structurally distinct from the mid-list single-line guardrail above. */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 434 420 L 434 476" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={450} y={440} size={15} fill={RED} anchor="start" weight={700}>
          Each line carries its own √(a² + b²) denominator —
        </T>
        <T x={450} y={465} size={15} fill={RED} anchor="start" weight={700}>
          do not share one.
        </T>
      </Fade>
    </Scene>
  );
}
