/**
 * M11 Ch09 · Section 3 — "Proof: the internal section formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (subtopic: Coordinate Foundations) — flagged PROOF section, extra scrutiny.
 *
 * board_content seq1 is a heading ("Proof: Internal Section Formula") — always-on title.
 * Remaining 7 items (seq2..seq8) gate at beat>=1..beat>=7.
 * reveals_english = [0, 7.25, 18.09, 26.03, 36.78, 44.97, 58.2, 68.52] (8 values).
 *
 * ILLUSTRATIVE NUMBERS (not given in JSON — the JSON is fully symbolic; chosen so an actual
 * diagram with real coordinates can be drawn, per task brief):
 *   A(1,1), B(7,4), ratio m:n = 2:1 (AP:PB = m:n, standard internal-division convention).
 *   xP = (m·x2 + n·x1)/(m+n) = (2·7 + 1·1)/3 = 15/3 = 5
 *   yP = (m·y2 + n·y1)/(m+n) = (2·4 + 1·1)/3 =  9/3 = 3   →  P = (5, 3)
 * Verify P actually divides AB in ratio m:n = 2:1:
 *   AP = √((5-1)² + (3-1)²) = √(16+4) = √20 = 2√5 ≈ 4.472
 *   PB = √((7-5)² + (4-3)²) = √(4+1)  = √5        ≈ 2.236
 *   AP : PB = 2√5 : √5 = 2 : 1 = m : n  ✓  (P lands closer to B, consistent with m>n — the
 *   formula's x2/y2 term is weighted by the larger m, pulling P toward B; P would sit closer
 *   to A if m<n instead — checked against the formula direction, not assumed).
 * Also verify the x-only projection used by the actual proof (similar triangles collapse the
 * ratio onto the base):  (xP-x1)/(x2-xP) = (5-1)/(7-5) = 4/2 = 2 = m/n = 2/1 = 2  ✓ — this is
 * exactly beat4's equation, confirming the diagram's placement of P is geometrically consistent
 * with the derivation that follows it.
 *
 * Screen mapping: toScreen(x,y) = {x: OX + SCALE·x, y: OY - SCALE·y}, OX=320, OY=390, SCALE=55.
 *   A(1,1) -> (375,335)   B(7,4) -> (705,170)   P(5,3) -> (595,225)
 *   feet on x-axis (y=OY=390): foot_A=(375,390) foot_P=(595,390) foot_B=(705,390)
 *   axis drawn 330..785 at y=390 (arrowhead at 785, matches +x direction).
 *   m-segment = foot_A..foot_P (x 375..595), n-segment = foot_P..foot_B (x 595..705) — in x-units
 *   that's 4 : 2 = 2 : 1 = m : n, matching the chosen ratio exactly (same check as above).
 *
 * Beats:
 *  0(title, always-on) | "Proof: Internal Section Formula"
 *  1 | setup: P divides AB internally m:n, drop perpendiculars to x-axis
 *  2 | THE DIAGRAM: axis -> A -> B (+segment AB) -> P -> 3 perpendiculars (staggered) -> m/n labels
 *  3 | insight: similar triangles split the base in the same ratio m:n
 *  4 | formula: (xP-x1)/(x2-xP) = m/n
 *  5 | formula: cross-multiply & gather -> xP(m+n) = m·x2 + n·x1
 *  6 | formula: xP = (m·x2+n·x1)/(m+n)  (same x-column as beat5, "⇒" continuation)
 *  7 | LANDED (emphasis high): full point P = (..., ...), boxed
 *
 * Layout plan:
 *  b0 | title (22,red,script)                 | T mid | x540 y62
 *  b1 | setup text (15,ink)                    | T mid | x540 y96
 *  b2 | x-axis 330..785 y390                   | Draw (axisD)
 *  b2 | "x" axis label (12,muted)              | T st  | x800 y395
 *  b2 | A dot(375,335) + label "A(x1, y1)"     | circle+T end | x361 y323
 *  b2 | B dot(705,170) + label "B(x2, y2)"     | circle+T st  | x719 y158
 *  b2 | segment AB (green)                     | Draw | (375,335)->(705,170)
 *  b2 | P dot(595,225,amber) + label "P"       | circle+T mid | x595 y197
 *  b2 | perp A (muted) (375,335)->(375,390)    | Draw
 *  b2 | perp P (muted) (595,225)->(595,390)    | Draw
 *  b2 | perp B (muted) (705,170)->(705,390)    | Draw
 *  b2 | "m" label (13,muted)                   | T mid | x485 y352
 *  b2 | "n" label (13,muted)                   | T mid | x650 y352
 *  b3 | insight text (14,ink)                  | T mid | x540 y428
 *  b4 | formula1 (16,ink)                      | T mid | x540 y462
 *  b5 | formula2 (16,ink)                      | T mid | x540 y498
 *  b6 | formula3 "⇒ xP = ..." (18,ink,w700)    | T mid | x540 y532
 *  b7 | box x300..780 y550..590 (green outline)| Draw (roundRectD)
 *  b7 | final point formula (18,ink,w700)      | T mid | x540 y576
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, lineD, roundRectD } from "./math-kit";

const SCALE = 55;
const OX = 320;
const OY = 390;

function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const A = toScreen(1, 1); // (375,335)
const B = toScreen(7, 4); // (705,170)
const P = toScreen(5, 3); // (595,225)
const FOOT_A = { x: A.x, y: OY };
const FOOT_P = { x: P.x, y: OY };
const FOOT_B = { x: B.x, y: OY };

export default function M11Ch09Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Proof: Internal Section Formula", "Saboot: Internal Section Formula")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={15} fill={INK} anchor="middle">
          {t(
            "P divides AB internally in ratio m : n. Drop perpendiculars to the x-axis.",
            "P, AB ko internally m : n ratio mein baantta hai. x-axis tak perpendiculars giraao."
          )}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={axisD(330, 785, OY)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={800} y={395} size={12} fill={MUTED} anchor="start">x</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={A.x} cy={A.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={361} y={323} size={13} fill={INK} anchor="end" weight={700}>A(x1, y1)</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Circle cx={B.x} cy={B.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={719} y={158} size={13} fill={INK} anchor="start" weight={700}>B(x2, y2)</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={lineD(A.x, A.y, B.x, B.y)} stroke={GREEN} sw={2.4} dur={0.6} />

      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={595} y={197} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>P</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 3.1)} d={lineD(A.x, A.y, FOOT_A.x, FOOT_A.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d={lineD(P.x, P.y, FOOT_P.x, FOOT_P.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 4.1)} d={lineD(B.x, B.y, FOOT_B.x, FOOT_B.y)} stroke={MUTED} sw={1.6} dur={0.4} />

      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={485} y={352} size={13} fill={MUTED} anchor="middle" weight={700}>m</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.9)}>
        <T x={650} y={352} size={13} fill={MUTED} anchor="middle" weight={700}>n</T>
      </Fade>

      {/* beat 3 — insight: similar triangles split the base in the same ratio */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={428} size={14} fill={INK} anchor="middle">
          {t(
            "Similar triangles split the base in the same ratio m : n.",
            "Similar triangles base ko usi ratio m : n mein baant dete hain."
          )}
        </T>
      </Fade>

      {/* beat 4 — formula 1: set up the ratio from similar triangles */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={462} size={16} fill={INK} anchor="middle" weight={600}>
          (xP - x1) / (x2 - xP) = m / n
        </T>
      </Fade>

      {/* beat 5 — formula 2: cross-multiply and gather xP terms */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={498} size={16} fill={INK} anchor="middle" weight={600}>
          n(xP - x1) = m(x2 - xP)  ⇒  xP(m + n) = m·x2 + n·x1
        </T>
      </Fade>

      {/* beat 6 — formula 3: xP isolated — same x-column as beat5, continuation */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={532} size={18} fill={INK} anchor="middle" weight={700}>
          ⇒  xP = (m·x2 + n·x1) / (m + n)
        </T>
      </Fade>

      {/* beat 7 — LANDED: full point P, boxed, emphasis high */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={roundRectD(300, 550, 480, 40)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={540} y={576} size={18} fill={INK} anchor="middle" weight={700}>
          P = ( (m·x2 + n·x1)/(m+n),  (m·y2 + n·y1)/(m+n) )
        </T>
      </Fade>
    </Scene>
  );
}
