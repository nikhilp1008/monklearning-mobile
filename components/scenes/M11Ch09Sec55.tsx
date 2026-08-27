/**
 * M11 Ch09 · Section 55 — "Foot, image and reflection: formula toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — closes out the concept/formula portion of the final content subtopic
 * (Foot of Perpendicular, Image and Reflection) before worked examples 56/57/58 and the
 * tips-closer 59. Same "formula_recap / cheat_sheet" discipline as this chapter's finished sibling
 * toolkit sections (M11Ch09Sec5, Sec13, Sec22, Sec30, Sec39, Sec47 — Sec47 is the freshest direct
 * precedent, Sec5/13/22/30/39 the earlier instances of the same layout): one item per beat,
 * HIGH-emphasis formulas boxed as a Chip (CREAM fill / AMBER stroke / AMBER_DARK text),
 * normal-emphasis items as plain bold ink text, single centered column, no live derivation, no
 * math-kit diagram (pure recap, matches every sibling toolkit section's diagram-free precedent).
 * 9 board_content beats (one more than the usual 8), same count as Sec48's precedent.
 *
 * board_content seq1 is the heading ("Foot, Image & Reflection — Toolkit") -> always-on title.
 * seq2..seq9 (8 items) gate at beat>=1..beat>=8. reveals_english (9 values) = [0.0, 5.89, 22.44,
 * 29.44, 35.75, 41.3, 46.34, 50.94, 56.23]; reveals_hinglish (9 values) = [0.0, 4.52, 18.01, 23.55,
 * 30.04, 34.3, 38.23, 42.07, 47.87].
 *
 * Emphasis from JSON: seq2 (foot formula) HIGH, seq3 (image formula) HIGH, seq4 (foot = midpoint
 * of point and image) normal, seq5 (mirror y=x) normal formula, seq6 (mirror x-axis) normal
 * formula, seq7 (mirror y-axis) normal formula, seq8 (reflect a line by reflecting two points)
 * normal, seq9 (denominator a²+b², no square root) HIGH + red-margin. Two HIGH formulas -> two
 * Chips (beat1, beat2); four normal formulas/text -> plain bold ink T (beat3, beat4, beat5, beat6,
 * beat7 — five rows total, one more than the "four" count above because seq4 and seq8 are both
 * plain-prose normal rows bracketing the three mirror-formula rows); one HIGH red-margin note ->
 * the Sec1/Sec5/Sec13/Sec22/Sec30/Sec39/Sec47 red-bar + red-text convention (beat8). UNLIKE Sec30/
 * Sec47/Sec49 (which each flag TWO red-margin notes, needing a mid-list-vs-closing visual
 * distinction), this section has only ONE guardrail — it gets the plain established closing-
 * guardrail look (bar + text, alone at the foot of the board), no second-guardrail distinction
 * needed.
 *
 * TWO-CHIP PAIRING (per task instruction): the foot formula (beat1) and the image formula (beat2)
 * are algebraically the same shape — image = foot's numerator formula with an extra factor of 2 —
 * so instead of the usual ~29-30px gap between successive HIGH chips (see Sec30's b1->b2 gap), they
 * are stacked directly with a tight 14px gap (chip1 y104..148, chip2 y162..206) and given the SAME
 * box width (560px, both centered at x540) so the two rects read as a matched pair at a glance: same
 * shape, same size, "Foot:" on top / "Image:" directly below with its extra "2". 14px still clears
 * the base spec's implicit stroke-to-stroke separation (well above the 10px text-vs-stroke floor)
 * while reading visibly tighter than every other inter-row gap in this section (all >=18.47px).
 *
 * MIRROR-FAMILY RHYTHM (per task instruction): the three special-case mirror formulas (beat4 y=x,
 * beat5 x-axis, beat6 y-axis) are a natural mini-group — same "(x, y) → ..." shape, same → arrow
 * glyph, same font size (17), same weight — so they use a tighter 18.47px box-to-box gap (baseline
 * spacing 37px) versus the >=24px group-clearance floor used at every OTHER row boundary in this
 * section (title->chip1, chip2->beat3, beat3->beat4, beat6->beat7, beat7->guardrail). This is still
 * comfortably above the base spec's 14px text-vs-text floor for related/stacked content — the tight
 * rhythm is a deliberate "these three belong together" visual cue, not a squeeze.
 *
 * VERIFICATION (task-required, no-square-root consistency check): this section is a pure recap of
 * formulas already established in Sec52-54 (checked live via Supabase REST, chapter_id
 * 5edf4eb2-af54-5da2-b8fa-bfbb3270e702, positions 52-54 — all three are worked/concept sections
 * that build the SAME foot/image formula this toolkit recaps). Every formula below is
 * character-for-character consistent with the given board_content and with this chapter's running
 * variable/sign conventions: line ax+by+c=0, point (x1,y1), foot (x,y), image (x',y') — identical
 * variable names to Sec52-54. Denominator is written as (a² + b²) with NO square root anywhere in
 * this file — verified by grep, zero "√" characters present — which is exactly what the JSON's own
 * beat-9 guardrail (seq9) insists on: "no square root, unlike the distance formula" (contrasted
 * against Sec27-30's d = |Ax₁+By₁+C| / √(A²+B²), which DOES take a square root of the same
 * a²+b²-shaped denominator — the foot/image formulas divide by the RAW a²+b², never its root, and
 * that contrast is precisely the point the guardrail is teaching). Sign convention matches Sec52-54:
 * the numerator of the shared ratio is -(ax1+by1+c), i.e. the RHS carries a leading minus, and the
 * image formula is the same ratio with an extra factor of -2 (not -1) — reproduced verbatim from
 * the task's given board_content strings, no arithmetic invented here.
 *
 * BILINGUAL: following every sibling toolkit section's established convention for this exact
 * section type (all render every formula/text/guardrail row IDENTICALLY in both languages — only
 * the always-on title is translated), every row below except the title is a shared string, not run
 * through t(). Title: t("Foot, Image & Reflection — Toolkit", "Foot, Image aur Reflection — Poora
 * Toolkit") — matches Sec30/Sec39/Sec47's "— Poora Toolkit" Hinglish-title pattern exactly.
 *
 * NOTATION: minus sign is a plain hyphen throughout (no en/em-dash escape bug, checked). Apostrophe
 * (x', y' for the image point) is a plain ASCII apostrophe, native to both fonts. → is a confirmed
 * safe operator (this chapter's transformation-mapping notation, used identically across the three
 * mirror rows — see MIRROR-FAMILY RHYTHM above). ² is native to both fonts (no-fallback list).
 * Numeral subscripts (x₁, y₁) are real Unicode subscript digits in non-script Anek text — both Chip
 * calls below use explicit script={false} (Kalam is missing most subscript/superscript digits per
 * the font-audit rule; every sibling toolkit section's Chip does the same). \frac{a}{b} flattened
 * inline as "a/b" (house convention, matches every sibling's chip formulas) for both HIGH formulas.
 * The em dash "—" inside the closing guardrail (beat8, breaking the sentence into two lines) is the
 * same literal character Sec30/Sec39/Sec47's closing guardrails already use without issue, not the
 * Chapter-3 double-escaped-backslash bug (checked: no backslash-u sequences anywhere in this file).
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script; over-estimate) — single centered column, all
 * comfortably inside the 1008px-wide safe span (x36-1044):
 *   b1 chip "Foot: (x - x₁)/a = (y - y₁)/b = -(ax₁ + by₁ + c)/(a² + b²)"        58 ch @16 -> 464.0px
 *   b2 chip "Image: (x' - x₁)/a = (y' - y₁)/b = -2(ax₁ + by₁ + c)/(a² + b²)"   62 ch @16 -> 496.0px
 *   b3 text "The foot is the midpoint of the point and its image."             52 ch @17 -> 442.0px
 *   b4 text "Mirror y = x: (x, y) → (y, x)"                                    29 ch @17 -> 246.5px
 *   b5 text "Mirror x-axis: (x, y) → (x, -y)"                                  31 ch @17 -> 263.5px
 *   b6 text "Mirror y-axis: (x, y) → (-x, y)"                                  31 ch @17 -> 263.5px
 *   b7 text "Reflect a line: reflect two of its points, then rejoin."          55 ch @16 -> 440.0px
 *   b8 line1 "Denominator here is a² + b² —"                                   29 ch @15 -> 217.5px
 *   b8 line2 "no square root, unlike the distance formula."                    44 ch @15 -> 330.0px
 * Widest is b2's chip at 496px text (chip w560, x260-820), 224px clear on both sides of the 1008px
 * safe span. Every other row is narrower still. Single centered column confirmed sufficient — no
 * 2-column split needed, consistent with all six sibling toolkit sections.
 *
 * Layout plan (anchor=middle at x540 for chip/text rows, anchor=start at x450 for the guardrail's
 * text, matching the established red-margin convention; Anek text box top=y-0.78×size,
 * bottom=y+0.31×size; Kalam title top=y-1.3×size, bottom=y+0.5×size; Chip box=[x,x+w]×[y,y+h]):
 *  title(always-on)      | T mid script size22          | x540 y64   | box y35.4..75.0
 *  b1 HIGH chip (Foot)   | Chip size16 w560 h44          | x260..820 y104..148
 *  b2 HIGH chip (Image)  | Chip size16 w560 h44          | x260..820 y162..206   (14px gap to b1)
 *  b3 normal              | T mid size17                 | x540 y245  box x319..761   y231.74..250.27
 *  b4 normal (mirror y=x)| T mid size17                  | x540 y290  box x416.75..663.25 y276.74..295.27
 *  b5 normal (mirror x)  | T mid size17                  | x540 y327  box x408.25..671.75 y313.74..332.27
 *  b6 normal (mirror y)  | T mid size17                  | x540 y364  box x408.25..671.75 y350.74..369.27
 *  b7 normal              | T mid size16                 | x540 y408  box x320..760   y395.52..412.96
 *  b8 HIGH guardrail bar  | Draw x434                     | y440..496 (single, closing)
 *                          | T start size15 line1          | x450 y460  box x450..667.5 y448.3..464.65
 *                          | T start size15 line2          | x450 y485  box x450..780   y473.3..489.65
 * Vertical gaps (box-bottom -> next box-top): title->b1 29.0, b1->b2 14.0 (deliberate tight pair),
 * b2->b3 25.73, b3->b4 26.47, b4->b5 18.47, b5->b6 18.47 (deliberate tight family), b6->b7 26.25,
 * b7->b8bar 27.04. Every "different idea" boundary >=24 (group-clearance floor); the two
 * deliberately-tight groups (chip pair 14px, mirror family 18.47px) both clear the base 10-14px
 * text/stroke floors while visibly reading as tighter than their neighbours. Closing guardrail bar
 * bottom 496, leaving 100px of unused margin above the y596 safe floor — matches every sibling's
 * deliberate-margin discipline, plenty of headroom for this section's extra (9th) beat.
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

const TITLE_Y = 64;
const CHIP_X = 260;
const CHIP_W = 560;
const CHIP_H = 44;
const CHIP1_Y = 104;
const CHIP2_Y = 162;
const B3_Y = 245;
const B4_Y = 290;
const B5_Y = 327;
const B6_Y = 364;
const B7_Y = 408;
const GUARD_BAR_Y1 = 440;
const GUARD_TEXT1_Y = 460;
const GUARD_TEXT2_Y = 485;
const GUARD_BAR_Y2 = 496;

export default function M11Ch09Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={TITLE_Y} size={22} fill={RED} anchor="middle" script>
          {t("Foot, Image & Reflection — Toolkit", "Foot, Image aur Reflection — Poora Toolkit")}
        </T>
      </Fade>

      {/* beat 1 — foot of perpendicular formula (HIGH) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={CHIP_X} y={CHIP1_Y} w={CHIP_W} h={CHIP_H} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          Foot: (x - x₁)/a = (y - y₁)/b = -(ax₁ + by₁ + c)/(a² + b²)
        </Chip>
      </Fade>

      {/* beat 2 — image formula (HIGH). Stacked directly under beat1 with a tight 14px gap and the
          same chip width — same shape as the foot formula, factor of 2 different, paired at a
          glance. See TWO-CHIP PAIRING header note. */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={CHIP_X} y={CHIP2_Y} w={CHIP_W} h={CHIP_H} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          Image: (x' - x₁)/a = (y' - y₁)/b = -2(ax₁ + by₁ + c)/(a² + b²)
        </Chip>
      </Fade>

      {/* beat 3 — the foot is the midpoint of the point and its image (normal) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={B3_Y} size={17} fill={INK} anchor="middle" weight={700}>
          The foot is the midpoint of the point and its image.
        </T>
      </Fade>

      {/* beat 4 — mirror y = x (normal formula). Mirror-family row 1 of 3, see MIRROR-FAMILY
          RHYTHM header note: same → glyph, same size17, tighter inter-row rhythm than the rest of
          the section. */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={B4_Y} size={17} fill={INK} anchor="middle" weight={700}>
          Mirror y = x: (x, y) → (y, x)
        </T>
      </Fade>

      {/* beat 5 — mirror x-axis (normal formula). Mirror-family row 2 of 3. */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={B5_Y} size={17} fill={INK} anchor="middle" weight={700}>
          Mirror x-axis: (x, y) → (x, -y)
        </T>
      </Fade>

      {/* beat 6 — mirror y-axis (normal formula). Mirror-family row 3 of 3. */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={B6_Y} size={17} fill={INK} anchor="middle" weight={700}>
          Mirror y-axis: (x, y) → (-x, y)
        </T>
      </Fade>

      {/* beat 7 — reflect a line by reflecting two of its points, then rejoin (normal) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={B7_Y} size={16} fill={INK} anchor="middle" weight={700}>
          Reflect a line: reflect two of its points, then rejoin.
        </T>
      </Fade>

      {/* beat 8 — CLOSING guardrail (HIGH, red-margin: denominator is a²+b², no square root).
          Only guardrail in this section, so it gets the plain established closing-guardrail look
          (bar + two-line text, alone at the foot of the board) — no second-guardrail distinction
          needed, unlike Sec30/Sec47/Sec49's mid-list/closing pairs. */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d={`M 434 ${GUARD_BAR_Y1} L 434 ${GUARD_BAR_Y2}`} stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={450} y={GUARD_TEXT1_Y} size={15} fill={RED} anchor="start" weight={700}>
          Denominator here is a² + b² —
        </T>
        <T x={450} y={GUARD_TEXT2_Y} size={15} fill={RED} anchor="start" weight={700}>
          no square root, unlike the distance formula.
        </T>
      </Fade>
    </Scene>
  );
}
