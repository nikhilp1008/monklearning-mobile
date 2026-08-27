/**
 * M11 Ch10 · Section 16 — "Four parabolas, one rule: the squared variable is trapped"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — Subtopic 3 (The Parabola), sec 16 of 20. FLAGGED
 * orientation-reading section (task brief) — extra scrutiny: does each of the
 * four mini-parabolas actually open the direction its equation claims?
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 8.36, 16.47, 29.35, 40.79, 53.25,
 * 68.1, 81.15]; reveals_hinglish = [0, 8.19, 15.87, 28.76, 40.02, 48.73,
 * 60.25, 70.14].
 *
 * All four curves share the SAME a=32px and are literal 90°-rotations of one
 * another (cell3/4 swap which screen axis carries the s²/(4a) term) — not
 * four independently-eyeballed shapes. Verified by construction: cell1 at
 * s=±64 reaches x=F1.x (the focus's x-coordinate) exactly, same identity
 * checked for all four cells (the latus-rectum-through-focus property),
 * confirming each curve's focus placement is self-consistent with its curve.
 *
 * Row of 4 mini-diagrams (y104-296) + equation labels (y320) + open-direction
 * tags (y346), then the explanatory beats stack below (y380-470).
 *
 * Beats:
 *  0(title,always-on) | "Four parabolas, one rule: the squared variable is trapped"
 *  1 | diagram: all 4 mini-parabolas + equations
 *  2 | tags: opens RIGHT / opens LEFT
 *  3 | tags: opens UP / opens DOWN
 *  4 | guardrail (red,HIGH): squared variable = axis, sign = opening direction
 *  5 | axis identification: y squared -> x-axis; x squared -> y-axis
 *  6 | |4a| = latus rectum; focus at distance a from vertex along axis
 *  7 | guardrail (red,HIGH): no linear term of squared var -> vertex at origin
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, curveD } from "./math-kit";

const A = 32;
const S = Array.from({ length: 17 }, (_, i) => -64 + i * 8);

const V1 = { x: 170, y: 200 }, F1 = { x: V1.x + A, y: V1.y };
const V2 = { x: 400, y: 200 }, F2 = { x: V2.x - A, y: V2.y };
const V3 = { x: 630, y: 264 }, F3 = { x: V3.x, y: V3.y - A };
const V4 = { x: 860, y: 136 }, F4 = { x: V4.x, y: V4.y + A };

const CURVE1 = curveD(S.map((s) => ({ x: V1.x + (s * s) / (4 * A), y: V1.y + s })));
const CURVE2 = curveD(S.map((s) => ({ x: V2.x - (s * s) / (4 * A), y: V2.y + s })));
const CURVE3 = curveD(S.map((s) => ({ x: V3.x + s, y: V3.y - (s * s) / (4 * A) })));
const CURVE4 = curveD(S.map((s) => ({ x: V4.x + s, y: V4.y + (s * s) / (4 * A) })));

export default function M11Ch10Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} anchor="middle" script>
          {t("Four parabolas, one rule: the squared variable is trapped", "Chaar parabolas, ek rule: squared variable trapped hai")}
        </T>
      </Fade>

      {/* beat 1 — the 4-cell diagram */}
      {/* cell 1: y²=4ax, opens right */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={lineD(138, 136, 138, 264)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={CURVE1} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}><Circle cx={F1.x} cy={F1.y} r={3} fill={INK} /></Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}><T x={170} y={320} size={14} fill={INK} anchor="middle" weight={700}>y² = 4ax</T></Fade>

      {/* cell 2: y²=-4ax, opens left */}
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={lineD(432, 136, 432, 264)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={CURVE2} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}><Circle cx={F2.x} cy={F2.y} r={3} fill={INK} /></Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}><T x={400} y={320} size={14} fill={INK} anchor="middle" weight={700}>y² = −4ax</T></Fade>

      {/* cell 3: x²=4ay, opens up */}
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={lineD(566, 296, 694, 296)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={CURVE3} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}><Circle cx={F3.x} cy={F3.y} r={3} fill={INK} /></Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}><T x={630} y={320} size={14} fill={INK} anchor="middle" weight={700}>x² = 4ay</T></Fade>

      {/* cell 4: x²=-4ay, opens down */}
      <Draw on={beat >= 1} delay={dl(1, 3.9)} d={lineD(796, 104, 924, 104)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d={CURVE4} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4.7)}><Circle cx={F4.x} cy={F4.y} r={3} fill={INK} /></Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.9)}><T x={860} y={320} size={14} fill={INK} anchor="middle" weight={700}>x² = −4ay</T></Fade>

      {/* beat 2 — opens RIGHT / LEFT tags */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={170} y={346} size={11} fill={AMBER_DARK} anchor="middle" weight={700}>{t("opens RIGHT", "opens RIGHT")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={400} y={346} size={11} fill={AMBER_DARK} anchor="middle" weight={700}>{t("opens LEFT", "opens LEFT")}</T>
      </Fade>

      {/* beat 3 — opens UP / DOWN tags */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={630} y={346} size={11} fill={AMBER_DARK} anchor="middle" weight={700}>{t("opens UP", "opens UP")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={860} y={346} size={11} fill={AMBER_DARK} anchor="middle" weight={700}>{t("opens DOWN", "opens DOWN")}</T>
      </Fade>

      {/* beat 4 — guardrail (HIGH) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={380} size={15} fill={RED} anchor="middle" weight={700}>
          {t("The SQUARED variable is the axis; the sign points the opening.", "SQUARED variable hi axis hai; sign opening ki direction batata hai.")}
        </T>
      </Fade>

      {/* beat 5 — axis identification */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={412} size={14} fill={INK} anchor="middle">
          {t("If y is squared, axis = x-axis; if x is squared, axis = y-axis.", "Agar y squared hai, axis = x-axis; agar x squared hai, axis = y-axis.")}
        </T>
      </Fade>

      {/* beat 6 — latus rectum + focus distance */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={436} size={14} fill={INK} anchor="middle">
          {t("|4a| = latus rectum; focus sits a from vertex along the axis.", "|4a| = latus rectum; focus vertex se a distance par axis par hai.")}
        </T>
      </Fade>

      {/* beat 7 — guardrail (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={466} size={14} fill={RED} anchor="middle" weight={700}>
          {t("No linear term of the squared variable → vertex is the origin.", "Squared variable mein koi linear term nahi → vertex origin hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
