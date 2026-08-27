/**
 * M11 Ch11 · Section 13 — "Complete formula recap — Chapter 11"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formula_recap — a MID-CHAPTER checkpoint (NOT the chapter's ending — the real
 * 3D content starts right after at sec15 and runs to sec37). This section recaps ONLY the
 * self-contained 2D "Applications: Centroid, Collinearity & Locus" unit that was secs 1-12
 * (octant/plane facts carried over as a bridge line, but everything else here is the 2D unit's
 * own toolkit — distance/section/centroid/sphere/ellipsoid as taught, not new 3D teaching).
 * segments_english/segments_hinglish are EMPTY (silent/text-only section) — board_content (9
 * items) IS the whole section, built straight from it, no narration to cross-reference.
 *
 * board_content -> beat mapping: seq1 (heading) = always-on title (not beat-gated, per the
 * blank-board-contract exception). seq2..seq9 (8 formula/note items) = beat 1..8 respectively
 * (reveals[1]..reveals[8]).
 * reveals_english = [0, 10.24, 25.34, 35.24, 46.08, 55.81, 64.85, 73.22, 83.8]
 * reveals_hinglish = [0, 10.75, 25.0, 32.94, 41.56, 51.11, 59.56, 67.67, 77.74]
 *
 * VISUAL LANGUAGE (distinct from Sec14): every formula is boxed as its own Chip — a "flashcard
 * deck" read top-to-bottom, one card per beat, generous 24px+ air between cards. This is the
 * "notes page" treatment SCENE_AUTHORING_MATHS.md calls for on formula_recap/cheat_sheet types,
 * applied uniformly here (unlike the M11Ch09Sec5 precedent, which only boxed its HIGH-emphasis
 * items) because the task explicitly calls for every item boxed as a "notes card" for THIS pair
 * of sections, and because doing so is what visually separates the recap (big boxed formula
 * cards) from the cheat sheet (terser unboxed list, see Sec14). Single centered column (anchor
 * middle, x=540) — mirrors the M11Ch09Sec5 precedent for laying out a dense formula list without
 * overlap; a 2/3-column grid was rejected because several items (Internal/External section
 * formulas) run 65-70 characters and would not fit a half-width or third-width column even at
 * the size floor (14) — single column with the full 1008px safe span was the only geometry that
 * held every item on one line with real margins either side.
 *
 * NOTATION translations (LaTeX -> board text, see SCENE_AUTHORING_MATHS.md "Notation"):
 *  - \! (negative thin space), \left(/\right), \quad/\qquad -> dropped/replaced by real x-gaps.
 *  - \text{...} -> plain words ("Internal", "External:", "tetra:", "Sphere:", "Ellipsoid:").
 *  - \frac{a}{b} -> flattened "a/b" throughout (no stacked-fraction primitive exists yet).
 *  - x_2,x_1,y_2... -> real Unicode subscript digits (x₂,x₁,y₂,y₁,z₂,z₁ etc, native to Anek).
 *  - ^2 -> real superscript ² (native to both fonts); 2^3 -> "2³" (numeric power, Anek).
 *  - \sqrt{...} -> √(...), \div -> ÷ — both native/safe operators.
 *  - seq8 ellipsoid: source latex literally has \frac{z^2}{b^2} (SAME b² denominator as the y²
 *    term, not c²) followed by "b^2=a^2-c^2". Verified this is NOT a data-entry typo: it is the
 *    standard ellipsoid-of-revolution (spheroid) formed by spinning an ellipse (semi-major a,
 *    semi-minor b, focal distance c, with the classic conic relation b²=a²-c² from Ch10) about
 *    the x-axis — y and z are geometrically symmetric under that rotation and correctly share
 *    the same denominator b². Written on the board exactly as the source gives it.
 *  - seq9 note: split into two board lines for readability (no LaTeX, plain English/Hinglish
 *    prose in the source) — meaning preserved: reflections flip 1/2/3 signs by plane/axis/origin;
 *    equidistant-from-2-points -> a plane, equidistant-from-1-point -> a sphere (a locus preview,
 *    consistent with the guardrail's "high"/red-margin JSON styling).
 *  - Every formula string is byte-identical between English and Hinglish (symbols are language-
 *    agnostic per spec) — only the always-on title and the seq9 note prose differ by language.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek, over-estimate) at the chosen chip text size 14:
 *   b1 octants/planes   "XY: z=0,  YZ: x=0,  ZX: y=0    octants = 2³ = 8"        47ch -> 329px
 *   b2 distance PQ      "PQ = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)"                 38ch -> 266px
 *   b3 internal section "Internal m:n = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), ...)" 66ch -> 462px
 *   b4 external+midpt   "External: m-n denominators;   M = ((x₁+x₂)/2, ...)"     67ch -> 469px
 *   b5 centroid+tetra   "G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3, (z₁+z₂+z₃)/3) (÷4)"    60ch -> 420px
 *   b6 sphere           "Sphere: (x-a)² + (y-b)² + (z-c)² = r²"                  37ch -> 259px
 *   b7 ellipsoid        "Ellipsoid: x²/a² + y²/b² + z²/b² = 1,   b² = a²-c²"     52ch -> 364px
 *   b8 note line1 (en)  "Reflections: plane flips 1 sign, axis flips 2, ..."     66ch -> 462px
 *   b8 note line1 (hi, longer) "Reflection mein: plane se 1 sign badalta..."     75ch -> 525px
 * All chip widths chosen with real padding above textWidth+26 minimum; widest chip (b4, 550px)
 * centered at x540 spans x265..815 — 229px clear of both safe-x edges.
 *
 * Layout plan (all chips centered x=540, anchor middle; heights h=38 unless noted; box = rect
 * y..y+h, which IS the visible chip and the real clearance boundary — no separate text-box math
 * needed since the chip rect fully contains its single line of size-14 text with padding):
 *  title (always-on)     | T mid script size20 RED   | x540 y58  | box y32.0..68.0  x390..690(en)
 *  b1 (beat1) planes/oct  | Chip w400              | x340..740  y92..130
 *  b2 (beat2) distance    | Chip w340              | x370..710  y154..192
 *  b3 (beat3) internal    | Chip w540              | x270..810  y216..254
 *  b4 (beat4) external+M  | Chip w550              | x265..815  y278..316
 *  b5 (beat5) centroid    | Chip w490              | x295..785  y340..378
 *  b6 (beat6) sphere      | Chip w330              | x375..705  y402..440
 *  b7 (beat7) ellipsoid   | Chip w440              | x320..760  y464..502
 *  b8 (beat8) guardrail   | Draw bar + 2×T start RED | bar x270 y526..576 | line1 x290 y545 box
 *                           top534.1 bottom549.3 | line2 x290 y568 box top557.1 bottom572.3
 * Vertical gaps (box-bottom -> next box-top): title->b1 24, b1->b2 24, b2->b3 24, b3->b4 24,
 * b4->b5 24, b5->b6 24, b6->b7 24, b7->bar 24 — every gap meets the >=24px group-clearance
 * floor exactly or with margin. Final content bottom (note bar/line2, ~576) leaves 20px before
 * the y<=596 safe-area floor — the deliberate unused margin the base spec calls for at the foot.
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
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch11Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} anchor="middle" script>
          {t("Your complete Chapter 11 toolkit", "Aapka poora Chapter 11 toolkit")}
        </T>
      </Fade>

      {/* beat 1 — planes + octant count (seq2) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={340} y={92} w={400} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          XY: z=0,  YZ: x=0,  ZX: y=0    octants = 2³ = 8
        </Chip>
      </Fade>

      {/* beat 2 — distance formula (seq3) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={370} y={154} w={340} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          PQ = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)
        </Chip>
      </Fade>

      {/* beat 3 — internal section formula (seq4) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={270} y={216} w={540} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          Internal m:n = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n))
        </Chip>
      </Fade>

      {/* beat 4 — external section + midpoint (seq5) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Chip x={265} y={278} w={550} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          External: m-n denominators;   M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)
        </Chip>
      </Fade>

      {/* beat 5 — centroid (+ tetrahedron) (seq6) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={295} y={340} w={490} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3, (z₁+z₂+z₃)/3)   (tetra: ÷4)
        </Chip>
      </Fade>

      {/* beat 6 — sphere equation (seq7) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={375} y={402} w={330} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          Sphere: (x-a)² + (y-b)² + (z-c)² = r²
        </Chip>
      </Fade>

      {/* beat 7 — ellipsoid equation (seq8) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={320} y={464} w={440} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          Ellipsoid: x²/a² + y²/b² + z²/b² = 1,   b² = a² - c²
        </Chip>
      </Fade>

      {/* beat 8 — guardrail (seq9, HIGH + red-margin): reflections + equidistant-locus preview */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 270 526 L 270 576" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={290} y={545} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Reflections: plane flips 1 sign, axis flips 2, origin flips all 3.",
            "Reflection mein: plane se 1 sign badalta hai, axis se 2, origin se teeno 3."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={290} y={568} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Equidistant: 2 points → a plane; 1 point → a sphere.",
            "Equidistant: 2 points se → plane; 1 point se → sphere banta hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
