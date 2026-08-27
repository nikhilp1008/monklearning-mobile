/**
 * M11 Ch11 · Section 33 — "Worked example: a right-angled isosceles triangle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — given -> set up -> step by step -> boxed answer -> sanity check.
 * Points A(0,7,10), B(-1,6,6), C(-4,9,6), genuinely 3D (every coordinate triple has a distinct z).
 *
 * HAND-VERIFIED ARITHMETIC (independent of the JSON):
 *  AB = B-A = (-1,-1,-4) -> AB² = 1+1+16 = 18. Matches JSON.
 *  BC = C-B = (-3,3,0)   -> BC² = 9+9+0  = 18. Matches JSON.
 *  CA = A-C = (4,-2,4)   -> CA² = 16+4+16 = 36. Matches JSON.
 *  AB²=BC²=18 -> two sides equal -> isosceles. AB²+BC²=36=CA² -> converse of Pythagoras -> the
 *  right angle is at B (the vertex common to the two equal, shorter sides AB and BC — the side
 *  CA, opposite B, is the one satisfying the Pythagoras identity). Matches JSON exactly, no data
 *  bugs found.
 *
 * reveals_english = [0, 10.75, 24.92, 38.31, 50.6, 60.93, 77.57, 90.28, 105.56] (9 values, beats
 * 0-8). reveals_hinglish = [0, 11.01, 23.04, 39.68, 53.08, 67.5, 82.18, 92.67, 106.33].
 * board_content seq1(heading)->title(always-on); seq2..9 -> beats 1-8 (given, AB², BC², CA²,
 * isosceles HIGH, Pythagoras-check, right-angle HIGH, guardrail HIGH/red-margin).
 *
 * PROJECTION (math-kit project3D, OX=600 OY=540 SCALE=32; screenX=OX+32y-16.628x,
 * screenY=OY-32z+9.6x): A(0,7,10)->(824.0,220.0)  B(-1,6,6)->(808.6,338.4)  C(-4,9,6)->(954.5,309.6).
 * All 3 hand-verified against the formula directly, matches script output exactly.
 * Screen side lengths (for reference only — oblique projection does NOT preserve the true 3D
 * equal-length AB=BC visually, that is expected/inherent to cavalier projection, not a bug):
 * AB≈119.4px, BC≈148.7px, CA≈158.3px.
 * Point labels: A anchor=middle (824,200) — clears the point (r4, top edge 216) by 12.8px.
 * B anchor=end (794,366) — clears point (bottom edge 342.4) by 13.5px, placed down-left into the
 * empty region outside the triangle. C anchor=start (970,314) — clears point (right edge 958.5)
 * by 11.5px, into empty space to the right.
 * Equal-side tick marks (beat5, AMBER, short perpendicular dashes at each segment's midpoint,
 * classic geometry "these sides are equal" convention): AB mid(816.3,279.2), tick "M 808.4 278.2
 * L 824.2 280.2"; BC mid(881.55,324.0), tick "M 880.0 316.2 L 883.1 331.9" — both hand-computed
 * from the segment's own unit vector rotated 90°, verified they sit ON the segment (not the
 * points/labels).
 * Right-angle indicator at B (beat7, GREEN small square-corner mark, computed from B's own unit
 * vectors toward A and toward C, side length 14px): uBA=(0.129,-0.992), uBC=(0.981,-0.194).
 * P1=B+14·uBA=(810.4,324.5), P2=P1+14·uBC=(824.1,321.8), P3=B+14·uBC=(822.3,335.7). Path
 * "M 810.4 324.5 L 824.1 321.8 L 822.3 335.7" — sits inside the triangle at the B corner, clear
 * of B's label (which is 20px further down-left) and of both other vertices.
 * Small orientation triad (decorative reference icon, NOT to scale against the triangle, same
 * device as Sec9/Sec15/Sec23): ThreeDAxes at origin(980,560) scale14 axisLen1.6 -> tips
 * X'(968.4,566.7) Y'(1002.4,560) Z'(980,537.6), all safe, well clear of the triangle (which sits
 * in x808..1029(labels) / y200..366) and of C's label.
 *
 * Layout plan — left column (x50, narration/derivation, anchor start) | right region (diagram,
 * x750-1030):
 *  title (always-on)         | T mid script sz24 red   | x540 y58
 *  b1 | 2L given               | T sz14  | x50 y100/123
 *  b1 | triad+labels, A/B/C dots+labels (no segments yet) | Draw+Fade
 *  b2 | 2L AB² derivation      | T sz13  | x50 y162/182
 *  b2 | segment AB (INK)                                  | Draw
 *  b3 | 2L BC² derivation      | T sz13  | x50 y220/240
 *  b3 | segment BC (INK)                                  | Draw
 *  b4 | 2L CA² derivation      | T sz13  | x50 y278/298
 *  b4 | segment CA (INK, completes the triangle outline)  | Draw
 *  b5 | AMBER chip "AB²=BC²=18 -> isosceles" | Chip sz14 w208 h36 | x50 y326..362
 *  b5 | equal-side tick marks on AB, BC (AMBER)            | Draw
 *  b6 | 1L Pythagoras check     | T sz14  | x50 y397
 *  b6 | confirming checkmark (GREEN)                       | Draw
 *  b7 | GREEN chip "Right angle at B — right-angled isosceles." | Chip sz13 w299 h38 | x50 y425..463
 *  b7 | right-angle indicator at B (GREEN)                 | Draw
 *  b8 | red bar + 2L guardrail  | Draw+T sz13 | x50 y483..534 / x66 y497/526
 * Vertical gaps (box-bottom[n] -> box-top[n+1], all Anek sz13/14): b1L2->b2L1 24.2, b2L2->b3L1
 * 24.2, b3L2->b4L1 24.4, b4L2->b5chip 24.0, b5chip->b6L1 24.1, b6L1->b7chip 24.1,
 * b7chip->b8bar 24.0, b8L1->b8L2 14.8 (same-idea, >=14 floor). Final content bottom (b8 L2 box
 * bottom ~530) leaves ~66px above the y596 safe floor.
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
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D, ThreeDAxes, lineD, checkD } from "./math-kit";

const OX = 600;
const OY = 540;
const SCALE = 32;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const A = proj(0, 7, 10); // (824.0, 220.0)
const B = proj(-1, 6, 6); // (808.6, 338.4)
const C = proj(-4, 9, 6); // (954.5, 309.6)

const AB_TICK = "M 808.4 278.2 L 824.2 280.2";
const BC_TICK = "M 880.0 316.2 L 883.1 331.9";
const RIGHT_ANGLE_MARK = "M 810.4 324.5 L 824.1 321.8 L 822.3 335.7";

export default function M11Ch11Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Worked example: classify the triangle", "Worked example: triangle ko classify karo")}
        </T>
      </Fade>

      {/* beat 1 — given: state the points, plot them in 3D */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={50} y={100} size={14} fill={INK} anchor="start">
          {t("Show A(0,7,10), B(-1,6,6),", "Dikhao A(0,7,10), B(-1,6,6),")}
        </T>
        <T x={50} y={123} size={14} fill={INK} anchor="start">
          {t("C(-4,9,6) is right-angled & isosceles.", "C(-4,9,6) right-angled aur isosceles hai.")}
        </T>
      </Fade>
      <ThreeDAxes on={beat >= 1} delay={dl(1, 0)} originX={980} originY={560} scale={14} axisLen={1.6} stroke={MUTED} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={958} y={571} size={11} fill={MUTED} anchor="end">x</T>
        <T x={1008} y={564} size={11} fill={MUTED} anchor="start">y</T>
        <T x={980} y={530} size={11} fill={MUTED} anchor="middle">z</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={824} y={200} size={13} fill={INK} anchor="middle" weight={700}>A(0,7,10)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={794} y={366} size={13} fill={INK} anchor="end" weight={700}>B(-1,6,6)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={970} y={314} size={13} fill={INK} anchor="start" weight={700}>C(-4,9,6)</T>
      </Fade>

      {/* beat 2 — AB², drawing the side as it's measured */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={lineD(A.x, A.y, B.x, B.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={50} y={162} size={13} fill={INK} anchor="start">AB² = (-1)² + (-1)² + (-4)²</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={50} y={182} size={13} fill={INK} anchor="start" weight={700}>= 1 + 1 + 16 = 18</T>
      </Fade>

      {/* beat 3 — BC² */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(B.x, B.y, C.x, C.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={50} y={220} size={13} fill={INK} anchor="start">BC² = (-3)² + (3)² + (0)²</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={50} y={240} size={13} fill={INK} anchor="start" weight={700}>= 9 + 9 + 0 = 18</T>
      </Fade>

      {/* beat 4 — CA², completing the triangle outline */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={lineD(C.x, C.y, A.x, A.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={50} y={278} size={13} fill={INK} anchor="start">CA² = (4)² + (-2)² + (4)²</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={50} y={298} size={13} fill={INK} anchor="start" weight={700}>= 16 + 4 + 16 = 36</T>
      </Fade>

      {/* beat 5 — AB²=BC² -> isosceles; mark the two equal sides */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={AB_TICK} stroke={AMBER} sw={2.4} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 0.35)} d={BC_TICK} stroke={AMBER} sw={2.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <Chip x={50} y={326} w={208} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          AB² = BC² = 18 → isosceles
        </Chip>
      </Fade>

      {/* beat 6 — sanity check: Pythagoras on the squares */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={50} y={397} size={14} fill={INK} anchor="start">AB² + BC² = 18+18 = 36 = CA²</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={checkD(266, 393, 12)} stroke={GREEN} sw={2.2} dur={0.35} />

      {/* beat 7 — converse of Pythagoras: right angle at B (boxed answer) */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={RIGHT_ANGLE_MARK} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Chip x={50} y={425} w={299} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          Right angle at B — right-angled isosceles.
        </Chip>
      </Fade>

      {/* beat 8 — guardrail: stay in squared lengths */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 50 483 L 50 534" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={66} y={497} size={13} fill={RED} anchor="start" weight={700}>
          {t("Stay in squared lengths —", "Squared lengths mein raho —")}
        </T>
        <T x={66} y={526} size={13} fill={RED} anchor="start" weight={700}>
          {t("take a root only if the question asks for a length.", "root tabhi lo jab sawaal length maange.")}
        </T>
      </Fade>
    </Scene>
  );
}
