/**
 * M11 Ch11 · Section 14 — "Chapter 11 cheat sheet"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: cheat_sheet — the second half of the MID-CHAPTER checkpoint (sec13=recap,
 * sec14=cheat sheet). Still recapping ONLY the 2D "Applications" unit (secs 1-12) — the real 3D
 * content starts at sec15. segments_english/segments_hinglish are EMPTY (silent/text-only) —
 * board_content (9 items) IS the whole section, built straight from it.
 *
 * board_content -> beat mapping: seq1 (heading) = always-on title. seq2..seq9 (8 items) = beat
 * 1..8 (reveals[1]..reveals[8]). seq4 is a `type:"diagram"` item (raw decorative SVG in the
 * JSON, off-palette colors #023047/#f5f7fa/system-ui font) — NOT pasted verbatim (violates the
 * house-palette-only rule and the hand-drawn-board aesthetic); rebuilt natively below as a
 * compact octant sign table using T/Draw in house colors, carrying the identical sign data.
 * reveals_english = [0, 8.7, 20.05, 29.7, 35.67, 43.18, 56.06, 66.82, 76.03]
 * reveals_hinglish = [0, 7.51, 18.69, 27.82, 33.88, 40.28, 51.97, 62.38, 72.62]
 *
 * VISUAL LANGUAGE (distinct from Sec13's boxed flashcard deck): a terse, left-aligned crib
 * list — small amber bullet + one line of plain (unboxed) text per fact, read top-to-bottom
 * like a real cheat sheet's margin notes, tighter row rhythm than Sec13's chips. The one
 * exception is the final item (seq9, HIGH + red-margin), which gets the same red-bar guardrail
 * treatment as Sec13's closer and every other chapter's guardrail beat, for visual consistency.
 * The octant sign table (beat 3) is the section's one real diagram — centered, boxed off by
 * its own header rule, breaking the left-aligned rhythm on purpose since it's the visual
 * centerpiece unique to this section.
 *
 * NOTATION: \sqrt{} -> √(...), \Delta -> Δ (native to Anek, non-script text used throughout).
 * \iff -> ⇔ (safe operator). "\quad"/"\qquad" -> real x-gaps, not encoded as spaces-in-string.
 * No blackboard-bold, no unresolved LaTeX commands. Octant sign data (verified against the
 * JSON's raw SVG octant-sign table and cross-checked against math-kit.tsx's own project3D
 * comment, which independently derives octant I=+++, VII=---, II=-++): I(+,+,+) II(-,+,+)
 * III(-,-,+) IV(+,-,+) V(+,+,-) VI(-,+,-) VII(-,-,-) VIII(+,-,-) for (x,y,z) respectively.
 * Plain ASCII hyphen-minus used for negative signs (not U+2212), per the notation doc's
 * "plain hyphen-minus, native to both fonts" guidance for minus-like glyphs.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek; over-estimate) at body size 16, left-aligned from
 * x=108 (bullet at x=88), longest-of-both-languages:
 *   b1 axes/planes    "3 axes, 3 planes, 8 octants: XY: z=0, ..."        56ch -> 448px -> x556
 *   b2 coordinates    "Coordinates = signed perpendicular distances..."  82ch -> 656px -> x764
 *   b4 reflections    "Reflections: plane flips 1 sign, ..."             66ch -> 528px -> x636
 *   b5 distance/sect  "Distance = √(Δx² + Δy² + Δz²); ..."               73ch -> 584px -> x692
 *   b6 centroid       "Centroid = plain average (÷3); ..."               75ch -> 600px -> x708
 *   b7 collinear      "Collinear ⇔ one ratio k:1 fits x, y, z..."        63ch -> 504px -> x612
 *   b8 guardrail(17)  "Locus: two points → a plane; ..."                 80ch -> 680px -> x788
 * All comfortably inside safe x<=1044 (smallest right margin ~256px on b8).
 *
 * Layout plan (bullets x=88 r=3 AMBER; text anchor start x=108 unless noted; box = Anek text
 * box, top=y-0.78×size, bottom=y+0.31×size):
 *  title (always-on) | T mid script size20 RED | x540 y58 | box y32.0..68.0
 *  b1 (beat1) axes/planes  | bullet + T size16   | baseline y105 | box y92.5..109.96
 *  b2 (beat2) coordinates  | bullet + T size16   | baseline y150 | box y137.5..154.96
 *  b3 (beat3) OCTANT TABLE | centered diagram, x540 | header baseline y196 (box top186.6) ..
 *      caption baseline y336 (box bottom340.0) — see in-code beat-3 block for the 4-row grid
 *      (header I..VIII + x/y/z sign rows, 8 data columns at x=312..816 step72, row-label col
 *      at x=234) and the AMBER header-rule at y211. Full sub-box list in the beat-3 JSX below.
 *  b4 (beat4) reflections  | bullet + T size16   | baseline y382 | box y369.5..386.96
 *  b5 (beat5) distance/sec | bullet + T size16   | baseline y427 | box y414.5..431.96
 *  b6 (beat6) centroid rule| bullet + T size16   | baseline y472 | box y459.5..476.96
 *  b7 (beat7) collinear    | bullet + T size16   | baseline y517 | box y504.5..521.96
 *  b8 (beat8) guardrail    | Draw bar + T size17 RED | bar x88 y548..586 | text baseline y572
 *      box top558.7 bottom577.3
 * Vertical gaps (box-bottom -> next box-top): title->b1 24.5, b1->b2 27.5, b2->diagram-top 31.7,
 * diagram-caption-bottom->b4 29.5, b4->b5 27.5, b5->b6 27.5, b6->b7 27.5, b7->bar 26.0 — every
 * gap clears the >=24px group floor. Final content bottom (guardrail bar, 586) leaves 10px
 * before the y<=596 safe floor.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  RED,
  AMBER,
  GREEN,
  MUTED,
  Scene,
} from '@/components/scenes/kit';

const OCT_LABELS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const X_ROW = ["+", "-", "-", "+", "+", "-", "-", "+"];
const Y_ROW = ["+", "+", "-", "-", "+", "+", "-", "-"];
const Z_ROW = ["+", "+", "+", "+", "-", "-", "-", "-"];
const COL_X = [312, 384, 456, 528, 600, 672, 744, 816];

function signColor(s: string) {
  return s === "+" ? GREEN : RED;
}

/** One left-aligned crib-list row: small amber bullet + one line of text. */
function Row({
  on,
  delay,
  y,
  children,
}: {
  on: boolean;
  delay: number;
  y: number;
  children: React.ReactNode;
}) {
  return (
    <Fade on={on} delay={delay}>
      <Circle cx={88} cy={y - 5} r={3} fill={AMBER} />
      <T x={108} y={y} size={16} fill={INK} anchor="start" weight={700}>
        {children}
      </T>
    </Fade>
  );
}

export default function M11Ch11Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} anchor="middle" script>
          {t("Chapter 11 quick-recall cheat sheet", "Chapter 11 ka quick-recall cheat sheet")}
        </T>
      </Fade>

      {/* beat 1 — axes/planes/octants (seq2) */}
      <Row on={beat >= 1} delay={dl(1, 0.2)} y={105}>
        {t(
          "3 axes, 3 planes, 8 octants: XY: z=0, YZ: x=0, ZX: y=0.",
          "3 axes, 3 planes, 8 octants; teen planes: XY: z=0, YZ: x=0, ZX: y=0."
        )}
      </Row>

      {/* beat 2 — coordinates = signed distances (seq3) */}
      <Row on={beat >= 2} delay={dl(2, 0.2)} y={150}>
        {t(
          "Coordinates = signed perpendicular distances; distance from a plane = |x|,|y|,|z|.",
          "Coordinates matlab signed perpendicular distances; plane se distance = |x|,|y|,|z|."
        )}
      </Row>

      {/* beat 3 — THE OCTANT SIGN TABLE (seq4, diagram) — one-hand staggered build */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={234} y={196} size={12} fill={INK} anchor="start" weight={700}>
          Oct
        </T>
        {OCT_LABELS.map((lab, i) => (
          <T key={lab} x={COL_X[i]} y={196} size={12} fill={INK} anchor="middle" weight={700}>
            {lab}
          </T>
        ))}
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 224 211 L 840 211" stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={234} y={234} size={13} fill={MUTED} anchor="start" weight={700}>
          x
        </T>
        {X_ROW.map((s, i) => (
          <T key={i} x={COL_X[i]} y={234} size={14} fill={signColor(s)} anchor="middle" weight={700}>
            {s}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={234} y={268} size={13} fill={MUTED} anchor="start" weight={700}>
          y
        </T>
        {Y_ROW.map((s, i) => (
          <T key={i} x={COL_X[i]} y={268} size={14} fill={signColor(s)} anchor="middle" weight={700}>
            {s}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={234} y={302} size={13} fill={MUTED} anchor="start" weight={700}>
          z
        </T>
        {Z_ROW.map((s, i) => (
          <T key={i} x={COL_X[i]} y={302} size={14} fill={signColor(s)} anchor="middle" weight={700}>
            {s}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={540} y={336} size={13} fill={MUTED} anchor="middle">
          {t("Octant signs (I-VIII), NCERT convention", "Octant signs (I-VIII), NCERT convention")}
        </T>
      </Fade>

      {/* beat 4 — reflections rule (seq5) */}
      <Row on={beat >= 4} delay={dl(4, 0.2)} y={382}>
        {t(
          "Reflections: plane flips 1 sign, axis flips 2, origin flips all 3.",
          "Reflection mein: plane se 1 sign badalta hai, axis se 2, origin se teeno 3."
        )}
      </Row>

      {/* beat 5 — distance + section rule (seq6) */}
      <Row on={beat >= 5} delay={dl(5, 0.2)} y={427}>
        {t(
          "Distance = √(Δx² + Δy² + Δz²); section: INT adds, EXT subtracts; use k:1.",
          "Distance = √(Δx² + Δy² + Δz²); section mein INT jodta hai, EXT ghatata hai; ratio k:1 lo."
        )}
      </Row>

      {/* beat 6 — centroid rule (seq7) */}
      <Row on={beat >= 6} delay={dl(6, 0.2)} y={472}>
        {t(
          "Centroid = plain average (÷3); tetrahedron ÷4; incentre = weighted average.",
          "Centroid = seedha average (÷3); tetrahedron mein ÷4; incentre = weighted average."
        )}
      </Row>

      {/* beat 7 — collinearity test (seq8) */}
      <Row on={beat >= 7} delay={dl(7, 0.2)} y={517}>
        {t(
          "Collinear ⇔ one ratio k:1 fits x, y, z together, or AB+BC = AC.",
          "Collinear ⇔ ek hi ratio k:1 x, y, z teeno mein fit ho, ya AB+BC = AC."
        )}
      </Row>

      {/* beat 8 — guardrail (seq9, HIGH + red-margin): locus preview */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 88 548 L 88 586" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={108} y={572} size={17} fill={RED} anchor="start" weight={700}>
          {t(
            "Locus: two points → a plane; distance r → a sphere; constant sum → an ellipsoid.",
            "Locus: do points → plane; distance r → sphere; constant sum → ellipsoid banta hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
