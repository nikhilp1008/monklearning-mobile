/**
 * M11 Ch11 · Section 12 — "Pitfalls and the pro-move for applications"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid sequence of ringed/boxed pitfalls, one per beat, each with a
 * wrong-vs-right pair where the JSON's note implies one (mirrors M11Ch01Sec9's {0} vs ∅ pattern:
 * plain red ✗ / green ✓ text side by side, no crossD needed for a fast-paced list like this).
 * CLOSES subtopic 1 (Applications: Centroid, Collinearity & Locus) — next up is the mid-chapter
 * recap at sec 13 (not part of this scene). Content mixes callbacks to the 2D secs 1-9 (collinear
 * k, centroid/midpoint) with the 3D secs 10-11 just taught (tetrahedron, plane/sphere, the
 * radical-locus rigour rule) — expected for a closer, not a data error.
 *
 * board_content seq2 (beat1) and seq7 (beat6) are the two JSON items styled "note"/"red-margin" —
 * per SCENE_AUTHORING_MATHS.md ("render red-margin as ringed or boxed asides"), only those two
 * rows get a drawn red box; the other five are plain numbered rows (M11Ch03Sec7 precedent).
 * Wrong-vs-right pairs are staged only where the JSON's own phrasing implies a wrong version
 * (collinear-from-one-coordinate, reverse-centroid ×3, square-both-radicals) — rows 2,4,6 are
 * reference facts / contrasts, not corrections, so they get a single-color detail line instead.
 *
 * reveals_english = [0, 9.98, 25.69, 43.43, 55.47, 72.45, 82.26, 97.11] (8 values, beats 0-7).
 *
 * Beats:
 *  0(title, always-on) | "Pitfalls and the Pro-Move for Applications"
 *  0 | subtitle: rapid-fire framing
 *  1 | #1 RED-BOXED: collinear-from-one-coordinate — wrong vs right
 *  2 | #2 averages reference: centroid ÷3/÷4, midpoint ÷2, incentre weighted
 *  3 | #3 reverse centroid — wrong vs right (keep the ×3)
 *  4 | #4 locus type: 2 points equidistant (plane) vs 1 point fixed distance (sphere)
 *  5 | #5 sum-of-distances radical — wrong vs right (isolate one at a time)
 *  6 | #6 RED-BOXED: figure-type reference (rhombus / rectangle / square)
 *  7 | pro-move closer (green check): solve k from one coordinate, verify the other two
 *
 * Layout plan (single column, circle badges cx58, rows cy 132..524, ~64-66px apart):
 *  b0 | subtitle (15,amber_dark,bold,mid)  | T mid  | x540 y94
 *  b1 | red box                            | Draw   | roundRectD(40,112,604,62)
 *  b1 | circle#1(red) + main (16,bold)     | Fade   | cy132, text x90 y137
 *  b1 | sub: red ✗ / green ✓               | T      | x110/x420 y161
 *  b2 | circle#2 + main (15)               | Fade   | cy196, text x90 y201
 *  b2 | sub: amber_dark fact               | T      | x110 y225
 *  b3 | circle#3 + main (16,bold)          | Fade   | cy262, text x90 y267
 *  b3 | sub: red ✗ / green ✓               | T      | x110/x420 y291
 *  b4 | circle#4 + main (15)               | Fade   | cy328, text x90 y333
 *  b4 | sub: amber / amber_dark contrast   | T      | x110/x420 y357
 *  b5 | circle#5 + main (16,bold)          | Fade   | cy394, text x90 y399
 *  b5 | sub: red ✗ / green ✓               | T      | x110/x420 y423
 *  b6 | red box                            | Draw   | roundRectD(40,440,569,64)
 *  b6 | circle#6(red) + main (16,bold)     | Fade   | cy460, text x90 y465
 *  b6 | sub: ink reference facts           | T      | x110 y489
 *  b7 | green circle + white check         | Fade+Draw| cy524
 *  b7 | main (16,bold,green) + sub (13,ink)| T      | x90 y529 / x110 y553
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD } from "./math-kit";

export default function M11Ch11Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const badge = (cy: number, n: string | null, fill: string) => (
    <>
      <Circle cx={58} cy={cy} r={13} fill={fill} />
      {n && (
        <T x={58} y={cy + 5} size={13} fill="#FFFEFB" anchor="middle" weight={700}>
          {n}
        </T>
      )}
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={RED} anchor="middle" script>
          {t("Pitfalls and the Pro-Move for Applications", "Pitfalls Aur Applications Ka Pro-Move")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={94} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Rapid-fire: the mistakes that quietly cost marks.", "Rapid-fire: wo galtiyan jo chupke se marks le jaati hain.")}
        </T>
      </Fade>

      {/* beat 1 — #1 RED-BOXED: collinear from one coordinate */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(40, 112, 604, 62, 12)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        {badge(132, "1", RED)}
        <T x={90} y={137} size={16} fill={INK} anchor="start" weight={700}>
          {t("Top error: matching ONE coordinate ≠ collinear.", "Sabse badi galti: sirf EK coordinate match karna ≠ collinear.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={110} y={161} size={13} fill={RED} anchor="start" weight={700}>
          {t('✗ x matches → "collinear!"', '✗ x match hua → "collinear!"')}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={420} y={161} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("✓ same k in y AND z too", "✓ wahi k y aur z mein bhi")}
        </T>
      </Fade>

      {/* beat 2 — #2 averages reference */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        {badge(196, "2", RED)}
        <T x={90} y={201} size={15} fill={INK} anchor="start" weight={600}>
          {t(
            "Averages: centroid ÷3 (Δ) or ÷4 (tetrahedron); midpoint ÷2.",
            "Averages: centroid ÷3 (Δ) ya ÷4 (tetrahedron); midpoint ÷2."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={110} y={225} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Incentre = weighted average — never a plain one.", "Incentre = weighted average — kabhi plain nahi.")}
        </T>
      </Fade>

      {/* beat 3 — #3 reverse centroid */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        {badge(262, "3", RED)}
        <T x={90} y={267} size={16} fill={INK} anchor="start" weight={700}>
          {t("Reverse centroid: don't drop the ×3.", "Reverse centroid: ×3 mat bhoolo.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={110} y={291} size={13} fill={RED} anchor="start" weight={700}>
          {t("✗ sum of vertices = G", "✗ vertices ka sum = G")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={420} y={291} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("✓ sum of vertices = 3G", "✓ vertices ka sum = 3G")}
        </T>
      </Fade>

      {/* beat 4 — #4 locus type: plane vs sphere */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        {badge(328, "4", RED)}
        <T x={90} y={333} size={15} fill={INK} anchor="start" weight={600}>
          {t("Know your locus before you compute:", "Compute karne se pehle apna locus pehchaano:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={110} y={357} size={13} fill={AMBER} anchor="start" weight={700}>
          {t("2 pts equidistant → PLANE (linear)", "2 points equidistant → PLANE (linear)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={420} y={357} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("1 pt, fixed distance → SPHERE (quadratic)", "1 point, fixed distance → SPHERE (quadratic)")}
        </T>
      </Fade>

      {/* beat 5 — #5 sum-of-distances radical */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        {badge(394, "5", RED)}
        <T x={90} y={399} size={16} fill={INK} anchor="start" weight={700}>
          {t("Sum-of-distances locus: isolate ONE radical at a time.", "Sum-of-distances locus: ek baar mein ek hi radical isolate karo.")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={110} y={423} size={13} fill={RED} anchor="start" weight={700}>
          {t("✗ square both radicals together", "✗ dono radicals ek saath square")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={420} y={423} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("✓ isolate → square → isolate → square", "✓ isolate → square → isolate → square")}
        </T>
      </Fade>

      {/* beat 6 — #6 RED-BOXED: figure-type reference */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(40, 440, 569, 64, 12)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        {badge(460, "6", RED)}
        <T x={90} y={465} size={16} fill={INK} anchor="start" weight={700}>
          {t("Figure type, read off the sides & diagonals:", "Figure type, sides aur diagonals se pehchaano:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={110} y={489} size={13} fill={INK} anchor="start">
          {t(
            "all sides equal = RHOMBUS; equal diagonals = RECTANGLE; both = SQUARE",
            "saari sides equal = RHOMBUS; diagonals equal = RECTANGLE; dono = SQUARE"
          )}
        </T>
      </Fade>

      {/* beat 7 — pro-move closer */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        {badge(524, null, GREEN)}
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.25)} d={checkD(58, 526, 12)} stroke="#FFFEFB" sw={2.4} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={90} y={529} size={16} fill={GREEN} anchor="start" weight={700}>
          {t(
            "Pro-move: solve k from ONE coordinate, verify the other two.",
            "Pro-move: EK coordinate se k nikaalo, baaki do pe verify karo."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={110} y={553} size={13} fill={INK} anchor="start">
          {t(
            "Faster than 3 distance checks — and the ratio comes free.",
            "3 distance checks se tez — aur ratio muft milta hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
