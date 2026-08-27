/**
 * M11 Ch09 · Section 39 — "Intersection and family: formula toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — reference-toolkit recap of intersection/parallel/coincident tests,
 * the concurrency determinant, and the family-of-lines trick. Same "formula_recap / cheat_sheet"
 * discipline as this chapter's four finished sibling toolkit sections (M11Ch09Sec5, Sec13, Sec22,
 * Sec30 — the direct layout precedent): one formula per beat, HIGH-emphasis items boxed (Chip for
 * plain formulas), normal-emphasis items as plain bold ink text, the closing red-margin note as
 * the Sec1/Sec5/Sec13/Sec22/Sec30-style red bar + red text. M11Ch09Sec38 (the preceding proof
 * section, which also needed a determinant) was still its unbuilt placeholder at authoring time,
 * so the determinant grid below is built fresh from first principles (Draw bar strokes + a 3×3
 * grid of <T> calls), per the task's explicit fallback instruction — no math-kit primitive exists
 * for a literal determinant and none is added here (single-occurrence-per-chapter primitives are
 * house policy against, per SCENE_AUTHORING_MATHS's \underbrace/\begin{cases} precedent).
 *
 * board_content seq1 is the heading ("Intersection & Family — Toolkit") -> always-on title.
 * seq2..seq8 (7 items) gate at beat>=1..beat>=7. reveals_english (8 values) = [0.0, 5.55, 24.23,
 * 32.09, 38.06, 44.97, 51.29, 58.28]; reveals_hinglish (8 values) = [0.0, 6.23, 22.61, 30.21,
 * 34.99, 40.87, 46.93, 53.33].
 *
 * Emphasis from JSON: seq2 (Cramer x/y) normal, seq3 (parallel) normal, seq4 (intersecting)
 * normal, seq5 (coincident) normal, seq6 (concurrency determinant) HIGH, seq7 (family L1+λL2=0)
 * HIGH, seq8 (guardrail: concurrency assumes no two of three lines parallel) HIGH + red-margin.
 * Three normal formulas -> plain bold ink T; family -> Chip (CREAM/AMBER/AMBER_DARK, matching
 * Sec5/13/22/30's HIGH convention); guardrail -> red bar + red text. The concurrency determinant
 * is this section's ONE genuinely-2-D item — see DETERMINANT GRID section below for how it gets
 * its HIGH "boxed" treatment without a literal Chip rect.
 *
 * DETERMINANT GRID — 2-D footprint vs. the single-centered-column precedent (per task's explicit
 * request to document this reasoning): Sec5/13/22/30 all fit as ONE centered text/Chip column
 * because every row is a single text line ~20-45px tall with 28-30px of clearance to spare above
 * the 24px floor, leaving 45-90px of unused margin at the foot of the board. This section has 8
 * items (as many as Sec5/22, the densest siblings) PLUS one item — the concurrency determinant —
 * that cannot be a text line at all: a literal 3×3 grid of entries bracketed by delimiter bars
 * needs real 2-D space (three text ROWS, not one), not just a wider or taller single line. Rather
 * than break the single-centered-column layout (a 2-column split was considered per the task's
 * suggestion, but nothing else in this section is wide enough to need one — see WIDTH ESTIMATES
 * below — so splitting columns would only fragment reading order for no space benefit), the
 * determinant beat gets a TALLER row: label + 3 grid rows + "=0" occupy roughly 250px of vertical
 * span (y274.5-442) versus a normal row's ~20-45px. This is paid for by tightening the OTHER
 * rows' clearances down to the 24px floor (vs. the 28-30px comfort margin siblings could afford)
 * and by accepting a smaller foot margin (29px unused below the last element, vs. 45-90px in the
 * lighter siblings) — every individual clearance below is still independently verified >=24px
 * (or >=10px for the text-vs-stroke case within the determinant's own group), so nothing is
 * actually squeezed below the spec floor; the density just used up the slack. Single centered
 * column confirmed sufficient — no 2-column split needed.
 * BOXED TREATMENT: the task allows either wrapping the grid in a roundRectD outline OR letting
 * the bars carry the visual weight. Chose the latter — an outer rounded-rect AROUND vertical
 * delimiter bars would read as two nested "box" motifs fighting each other, busier than either
 * alone. Instead the determinant's bars, its 9 entries, its label and its "=0" are all rendered
 * in AMBER / AMBER_DARK (the same palette Sec5/13/22/30 already use to mark a HIGH-emphasis boxed
 * formula via Chip) — the color IS the "boxed" signal here, consistent with sibling sections'
 * HIGH visual language without a second competing outline.
 *
 * NOTATION: minus sign is a plain hyphen throughout. λ used freely (native-but-fallback Greek,
 * no plain-letter substitute, per the 6th glyph audit). ≠ native to both fonts. \frac{a}{b}
 * flattened inline as "a/b" (house convention) for the three ratio-condition formulas (parallel/
 * intersecting/coincident); the two Cramer's-rule formulas (which share one denominator) are laid
 * out SIDE BY SIDE as "x = ..." / "y = ..." rather than flattened into one run-on line or stacked
 * as true fractions (no stacked-fraction primitive exists anywhere in this codebase, and a single
 * 70-char run-on line would be markedly harder to read than the shared-denominator pair sitting
 * next to each other the way a teacher would actually write them on a board). \text{...} label
 * prefixes ("Cramer:", "Parallel:", "Intersecting:", "Coincident:", "Concurrency:", "Family:")
 * kept in English for both languages, matching every sibling toolkit section's established
 * convention (segments_hinglish itself code-switches these exact English terms). The closing
 * guardrail sentence is likewise kept identical (untranslated) in both languages, following
 * Sec13's and Sec30's precedent for full-sentence red-margin notes (both left their guardrail
 * prose in English rather than translating it) — only the always-on title differs by language.
 * Numeral subscripts (a₁ b₁ c₁, a₂ b₂ c₂, a₃ b₃ c₃, x₁ x₂, L₁ L₂) are real Unicode subscript
 * digits in non-script Anek text (script={false} on every Chip here) per the font-audit rule that
 * Kalam is missing most subscript/superscript digits.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script; over-estimate; char counts verified via
 * script, not by hand) — single centered column, all comfortably inside the 1008px-wide safe
 * span (x36-1044):
 *   b1L "Cramer: x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)"     39 ch @15 -> 292.5px (anchor end,   x558)
 *   b1R "y = (c₁a₂ - c₂a₁)/(a₁b₂ - a₂b₁)"              31 ch @15 -> 232.5px (anchor start, x582)
 *   b2  "Parallel: a₁/a₂ = b₁/b₂ ≠ c₁/c₂"               31 ch @18 -> 279.0px
 *   b3  "Intersecting: a₁/a₂ ≠ b₁/b₂"                   27 ch @18 -> 243.0px
 *   b4  "Coincident: a₁/a₂ = b₁/b₂ = c₁/c₂"              33 ch @17 -> 280.5px
 *   b5  label "Concurrency:"                             12 ch @16 -> 96.0px
 *   b5  grid entries (e.g. "a₁")                          2 ch @20 -> 20.0px each, 9 total
 *   b5  "= 0"                                              3 ch @22 -> 33.0px
 *   b6  chip "Family: L₁ + λL₂ = 0"                       20 ch @18 -> 180.0px (chip w220)
 *   b7  guardrail "The concurrency test assumes no two    68 ch @15 -> 510.0px (anchor start,
 *       of the three lines are parallel."                                       x450, ends x960)
 * Widest single-line item is b7's guardrail at 510px from x450 -> x960, 84px clear of the x1044
 * safe edge. b1's split pair spans x265.5-814.5 combined (center 540), 229.5px clear on both
 * sides. The determinant's own group (bars + grid + "=0") spans x387-694, ~350px clear on both
 * sides — by far the narrowest-relative-to-safe-width item, since its footprint is vertical, not
 * horizontal. No 2-column split needed anywhere.
 *
 * Layout plan (anchor=middle at x540 unless noted; Anek text box top=y-0.78×size,
 * bottom=y+0.31×size; Kalam title top=y-1.3×size, bottom=y+0.5×size; Chip box=[x,x+w]×[y,y+h]):
 *  title(always-on)   | T mid script size22          | x540 y64   | box y35.4..75.0
 *  b1 normal (Cramer) | T end size15 x558             | y114 | box x265.5..558   y102.3..118.65
 *                      | T start size15 x582           | y114 | box x582..814.5  y102.3..118.65
 *  b2 normal          | T mid size18                  | x540 y158  | box x400.5..679.5 y143.96..163.58
 *  b3 normal          | T mid size18                  | x540 y202  | box x418.5..661.5 y187.96..207.58
 *  b4 normal          | T mid size17                  | x540 y245  | box x399.75..680.25 y231.74..250.27
 *  b5 HIGH label       | T mid size16 (AMBER_DARK)     | x540 y287  | box x492..588 y274.52..291.96
 *  b5 HIGH bars        | Draw x387/x637                | y312..442  (AMBER, sw3)
 *  b5 HIGH grid r1      | T mid size20 x432/512/592     | y336 | boxes ~±10 around each col
 *  b5 HIGH grid r2      | T mid size20 x432/512/592     | y380
 *  b5 HIGH grid r3      | T mid size20 x432/512/592     | y424
 *  b5 HIGH "=0"         | T start size22 x661           | y380 | box x661..694 y362.84..386.82
 *  b6 HIGH chip (Family)| Chip size18 w220 h44          | x430..650 y468..512
 *  b7 HIGH guardrail bar| Draw x434                     | y538..567 (RED, sw4)
 *  b7 HIGH guardrail txt| T start size15 x450           | y556 | box x450..960 y544.3..560.65
 * Vertical gaps (box-bottom -> next box-top): title->b1 27.3, b1->b2 25.31, b2->b3 24.38,
 * b3->b4 24.16, b4->b5label 24.25, b5label->b5bars 20.04 (text-stroke, same group, >=10 floor),
 * b5bars->b6chip 26.0, b6chip->b7bar 26.0 — every group-to-group gap >=24, every same-group
 * text-to-stroke gap >=10. Last element (guardrail bar) bottom 567, leaving 29px of unused margin
 * above the y596 safe floor.
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

export default function M11Ch09Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Intersection & Family — Toolkit", "Intersection & Family — Poora Toolkit")}
        </T>
      </Fade>

      {/* beat 1 — Cramer's rule x, y (normal, shared denominator, side by side) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={558} y={114} size={15} fill={INK} anchor="end" weight={700}>
          Cramer: x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={582} y={114} size={15} fill={INK} anchor="start" weight={700}>
          y = (c₁a₂ - c₂a₁)/(a₁b₂ - a₂b₁)
        </T>
      </Fade>

      {/* beat 2 — parallel (normal) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={158} size={18} fill={INK} anchor="middle" weight={700}>
          Parallel: a₁/a₂ = b₁/b₂ ≠ c₁/c₂
        </T>
      </Fade>

      {/* beat 3 — intersecting (normal) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={202} size={18} fill={INK} anchor="middle" weight={700}>
          Intersecting: a₁/a₂ ≠ b₁/b₂
        </T>
      </Fade>

      {/* beat 4 — coincident (normal) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={245} size={17} fill={INK} anchor="middle" weight={700}>
          Coincident: a₁/a₂ = b₁/b₂ = c₁/c₂
        </T>
      </Fade>

      {/* beat 5 — concurrency determinant (HIGH). Built fresh: two Draw bars as delimiters,
          a 3x3 grid of T entries, "=0" alongside. Amber palette (not a literal box) carries the
          HIGH "boxed" signal — see header note. */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={287} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          Concurrency:
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        dur={0.6}
        d="M 387 312 L 387 442 M 637 312 L 637 442"
        stroke={AMBER}
        sw={3}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={432} y={336} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>a₁</T>
        <T x={512} y={336} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>b₁</T>
        <T x={592} y={336} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>c₁</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={432} y={380} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>a₂</T>
        <T x={512} y={380} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>b₂</T>
        <T x={592} y={380} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>c₂</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={432} y={424} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>a₃</T>
        <T x={512} y={424} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>b₃</T>
        <T x={592} y={424} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>c₃</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={661} y={380} size={22} fill={AMBER_DARK} anchor="start" weight={700}>= 0</T>
      </Fade>

      {/* beat 6 — family of lines (HIGH) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={430} y={468} w={220} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={18} script={false}>
          Family: L₁ + λL₂ = 0
        </Chip>
      </Fade>

      {/* beat 7 — guardrail (HIGH, red-margin: concurrency test assumes no two lines parallel) */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 434 538 L 434 567" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={450} y={556} size={15} fill={RED} anchor="start" weight={700}>
          The concurrency test assumes no two of the three lines are parallel.
        </T>
      </Fade>
    </Scene>
  );
}
