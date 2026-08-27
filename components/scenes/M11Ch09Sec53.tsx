/**
 * M11 Ch09 · Section 53 — "Proof: the foot of the perpendicular"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, titled "Proof:" — FLAGGED for extra eye-scrutiny per task brief (Sec54
 * right after this one is also flagged). Single-column build: statement -> schematic diagram
 * (a real line, point P off it, foot Q on it, the perpendicular step drawn and landed) -> caption
 * -> symbolic derivation stacked top-to-bottom (parametrize Q, substitute, solve for t) -> boxed
 * HIGH-emphasis compact foot formula.
 *
 * board_content has 8 items. seq1 (heading) is the always-on title. seq2..seq8 gate at
 * beat>=1..beat>=7. reveals_english=[0,6.83,18.26,26.79,34.99,43.69,55.3,66.73] (8 values).
 * reveals_hinglish=[0,5.12,14.08,21.16,29.1,36.78,48.04,58.11] (8 values).
 *
 * DIAGRAM geometry — built fresh (not pasted), a real computed line in screen-pixel "coordinate"
 * space: pixel (x,y) is treated as a real coordinate pair satisfying a·x + b·y + c = 0 for the
 * chosen line, exactly as the proof's own algebra does. Chosen a=1, b=4, c=-1400 (line
 * x + 4y - 1400 = 0), drawn from L1=(200,300) to L2=(800,150). P=(420,140) is a point off the
 * line (chosen, not on it). t is computed by the REAL formula t = -(a·Px+b·Py+c)/(a²+b²), then
 * Q = (Px+t·a, Py+t·b) — this is genuinely computed in the component's own consts below (not
 * hand-picked pixels), and the whole point of the proof is that this Q lands on the line.
 *
 * Verified numerically (Node, same formulas as the component):
 *   L1 check: 1*200 + 4*300 - 1400 = 0   ✓  (on the line)
 *   L2 check: 1*800 + 4*150 - 1400 = 0   ✓  (on the line)
 *   t = -(1*420 + 4*140 - 1400) / (1² + 4²) = -(-420) / 17 = 24.705882352941178
 *   Q = (420 + t*1, 140 + t*4) = (444.70588235294116, 238.8235294117647)
 *   Line check at Q: 1*Qx + 4*Qy - 1400 = 0.0  (computed exactly 0 in Node — Q genuinely lands
 *     on the line, not merely close to it). Exact-fraction cross-check: t=420/17, Qx=7560/17,
 *     Qy=4060/17, so Qx+4Qy-1400 = 23800/17 - 1400 = 1400 - 1400 = 0 (23800 = 17*1400).
 *   Also PQ ⊥ line, by construction: line direction ∝ (L2-L1) = (600,-150) ∝ (4,-1); PQ
 *     direction = Q-P = t*(a,b) ∝ (1,4). Dot product (4)(1)+(-1)(4) = 0 — perpendicular, confirmed.
 *
 * Beats:
 *  0(title, always-on) | "Proof: Foot of the Perpendicular"
 *  1 | text: PQ ⊥ line, so it points along the normal (a, b)
 *  2 | THE DIAGRAM: line -> P dot+tag -> segment (the "step") draws -> Q dot+tag lands -> "step
 *      t(a, b)" label -> caption underneath
 *  3 | formula: Q = (x₁ + ta, y₁ + tb)
 *  4 | text: since Q lies on the line, substitute and solve for the scalar t
 *  5 | formula: a(x₁ + ta) + b(y₁ + tb) + c = 0
 *  6 | formula: t = -(ax₁ + by₁ + c) / (a² + b²)
 *  7 | formula (boxed, HIGH emphasis): (x-x₁)/a = (y-y₁)/b = -(ax₁+by₁+c)/(a²+b²)
 *
 * Layout plan (single column, formulas centered x540, non-script Anek throughout so the ₁/²
 * sub/superscripts stay native — see SCENE_AUTHORING_MATHS.md's Kalam-digit-gap rule):
 *  b0 | title (26,red,script)                    | T mid | x540 y62
 *  b1 | statement text (16,ink)                   | T mid | x540 y92
 *  b2 | line L1->L2 (ink)                         | Draw  | (200,300)->(800,150)
 *  b2 | P dot (amber_dark, r4.5)                  | circle| (420,140)
 *  b2 | "P" tag (amber_dark,14,w700)               | T st  | (434,134)
 *  b2 | segment P->Q (muted, "the step")           | Draw  | (420,140)->(444.71,238.82)
 *  b2 | Q dot (green, r4.5)                        | circle| (444.71,238.82)
 *  b2 | "Q" tag (green,14,w700)                     | T st  | (458.71,256.82)
 *  b2 | "step t(a, b)" (muted,12)                   | T st  | (485.71,176.07)
 *  b2 | caption (14,ink)                            | T mid | x540 y330
 *  b3 | formula "Q=(x₁+ta,y₁+tb)" (18,ink,w700)      | T mid | x540 y368
 *  b4 | text (15,ink)                                | T mid | x540 y404
 *  b5 | formula "a(..)+b(..)+c=0" (18,amber_dark,w700)| T mid | x540 y442
 *  b6 | formula "t=-(..)/( ..)" (18,green,w700)       | T mid | x540 y480
 *  b7 | boxed rect x280 y514 w520 h46 (amber_dark border, cream fill) | rect
 *  b7 | boxed formula (19,green,w700)                 | T mid | x540 y543.46
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

// the chosen line, in real screen-pixel "coordinate" space: a*x + b*y + c = 0
const LINE_A = 1;
const LINE_B = 4;
const LINE_C = -1400;

// drawn endpoints of the line segment (both satisfy LINE_A*x+LINE_B*y+LINE_C=0 — see header)
const L1 = { x: 200, y: 300 };
const L2 = { x: 800, y: 150 };

// P is a point OFF the line (chosen, not solved for)
const P = { x: 420, y: 140 };

// t computed by the real formula — this is the whole point of the proof
const T_SCALAR =
  -(LINE_A * P.x + LINE_B * P.y + LINE_C) / (LINE_A * LINE_A + LINE_B * LINE_B);

// Q computed from P, t, and the normal (a,b) — genuinely lands on the line (verified in header)
const Q = { x: P.x + T_SCALAR * LINE_A, y: P.y + T_SCALAR * LINE_B };

// label anchors
const P_LABEL = { x: P.x + 14, y: P.y - 6 };
const Q_LABEL = { x: Q.x + 14, y: Q.y + 18 };

// "step t(a, b)" label: offset perpendicular to PQ, away from the line, so it never sits on
// the drawn segment or crosses the line stroke (computed from real segment geometry).
const MID = { x: (P.x + Q.x) / 2, y: (P.y + Q.y) / 2 };
const SEG_LEN = Math.hypot(Q.x - P.x, Q.y - P.y);
const PERP = { x: (Q.y - P.y) / SEG_LEN, y: -(Q.x - P.x) / SEG_LEN };
const STEP_OFFSET = 55;
const STEP_LABEL = {
  x: MID.x + PERP.x * STEP_OFFSET,
  y: MID.y + PERP.y * STEP_OFFSET,
};

// boxed final formula
const BOX = { x: 280, y: 514, w: 520, h: 46 };
const BOX_TEXT_Y = BOX.y + BOX.h / 2 + 19 * 0.34;

export default function M11Ch09Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Proof: Foot of the Perpendicular", "Proof: Perpendicular Ka Foot")}
        </T>
      </Fade>

      {/* beat 1 — statement */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={92} size={16} fill={INK} anchor="middle">
          {t(
            "The segment PQ is perpendicular to the line, so it points along the normal (a, b).",
            "Segment PQ line ke perpendicular hai, isiliye yeh normal (a, b) ki direction mein jaata hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: line, P off it, the step drawn, Q lands on the line */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={lineD(L1.x, L1.y, L2.x, L2.y)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={P_LABEL.x} y={P_LABEL.y} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          P
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Circle cx={Q.x} cy={Q.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={Q_LABEL.x} y={Q_LABEL.y} size={14} fill={GREEN} anchor="start" weight={700}>
          Q
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={STEP_LABEL.x} y={STEP_LABEL.y} size={12} fill={MUTED} anchor="start">
          step t(a, b)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={540} y={330} size={14} fill={INK} anchor="middle">
          {t(
            "Q = P + t(a, b), with t chosen so Q lands on the line.",
            "Q = P + t(a, b), jahan t aisa chuna jaata hai ki Q line par aa jaaye."
          )}
        </T>
      </Fade>

      {/* beat 3 — formula: Q parametrized along the normal from P */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={368} size={18} fill={INK} anchor="middle" weight={700}>
          Q = (x₁ + ta, y₁ + tb)
        </T>
      </Fade>

      {/* beat 4 — since Q lies on the line, substitute and solve for t */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={404} size={15} fill={INK} anchor="middle">
          {t(
            "Since Q lies on the line, substitute and solve for the scalar t.",
            "Kyunki Q line par hai, ise substitute karke scalar t nikalte hain."
          )}
        </T>
      </Fade>

      {/* beat 5 — substituted into the line equation */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={442} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          a(x₁ + ta) + b(y₁ + tb) + c = 0
        </T>
      </Fade>

      {/* beat 6 — solved for t */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={480} size={18} fill={GREEN} anchor="middle" weight={700}>
          t = -(ax₁ + by₁ + c) / (a² + b²)
        </T>
      </Fade>

      {/* beat 7 — boxed, HIGH-emphasis compact foot formula */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Rect x={BOX.x} y={BOX.y} width={BOX.w} height={BOX.h} rx={10} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2.4} />
        <T x={540} y={BOX_TEXT_Y} size={19} fill={GREEN} anchor="middle" weight={700}>
          (x - x₁)/a = (y - y₁)/b = -(ax₁ + by₁ + c)/(a² + b²)
        </T>
      </Fade>
    </Scene>
  );
}
