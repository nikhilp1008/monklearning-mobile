/**
 * M11 Ch13 · Section 4 — "Two honest weaknesses of mean deviation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 8.02, 20.99, 32.51, 47.62, 62.98, 76.29]):
 *  0 anchor: heading "where mean deviation falls short"
 *  1 represent (LEFT col): weakness 1 — y=|x| mini-graph, ring the sharp corner
 *  2 explain (LEFT col): "not differentiable at 0" caption under the graph
 *  3 note (red-margin, full width): why the next subtopic switches to variance
 *  4 represent (RIGHT col): weakness 2 — number line, mean vs median anchors
 *    on a real skewed data set {2,4,5,6,20}
 *  5 represent: formula Σ|x_i - a| is minimum when a = median
 *  6 land: deviation smallest about the MEDIAN, boxed
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 22, red, always-on)     | T mid | x540 y58
 *  b0 | heading (script 17, amber_dark)  | T mid | x540 y92
 *  b1 | caption "Weakness 1" (13,muted)  | T st  | x140 y128
 *  b1 | V-graph (axes+2 lines)           | Draw  | x180..380 y130..225 vertex(280,220)
 *  b1 | ring on corner + label (12,red)  | Draw+T| (280,220) rx22 ry18 · label y258
 *  b3 | red bar + note (full width)      | Draw+T| x60 y300..316 · text x76 y312
 *  b4 | caption "Weakness 2" (13,muted)  | T st  | x460 y128
 *  b4 | axis (y220) + 5 dots             | Draw  | x480..930
 *  b4 | mean/median dashed anchors       | Draw+T| x647(mean,red) x592(median,green)
 *  b5 | formula (sans 20 w700)           | T mid | x540 y360
 *  b6 | boxed closing (script 16)        | Draw+T| box x230..850 y420..468
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
  ringD,
  Scene,
} from '@/components/scenes/kit';
import { axisD, lineD, roundRectD } from "./math-kit";

const DATA = [2, 4, 5, 6, 20];
const MEAN = 7.4;
const MEDIAN = 5;
const MD_MEAN = 5.04;
const MD_MEDIAN = 4.0;
const AXIS_X0 = 480;
const AXIS_X1 = 930;
const scaleV = (v: number) => AXIS_X0 + (v / 20) * (AXIS_X1 - AXIS_X0);

export default function M11Ch13Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const meanX = scaleV(MEAN);
  const medianX = scaleV(MEDIAN);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} anchor="middle" script>
          {t("Two Honest Weaknesses of Mean Deviation", "Mean Deviation Ki Do Honest Weaknesses")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={17} fill={AMBER_DARK} anchor="middle" script>
          {t("Where mean deviation falls short", "Mean deviation kahaan kam padta hai")}
        </T>
      </Fade>

      {/* beat 1 — weakness 1: y = |x| has a sharp corner at 0 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={140} y={128} size={13} fill={MUTED} anchor="start">
          {t("Weakness 1: a sharp corner", "Weakness 1: ek sharp corner")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(180, 220, 380, 220)} stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(280, 130, 280, 225)} stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={lineD(205, 145, 280, 220)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={lineD(280, 220, 355, 145)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={300} y={148} size={13} fill={INK} anchor="start">
          y = |x|
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={ringD(280, 220, 22, 18)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={280} y={258} size={12} fill={RED} anchor="middle" weight={700}>
          {t("sharp corner!", "sharp corner!")}
        </T>
      </Fade>

      {/* beat 2 — explain: not differentiable */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={280} y={276} size={12} fill={INK} anchor="middle">
          {t("→ can't differentiate cleanly", "→ cleanly differentiate nahi ho sakta")}
        </T>
      </Fade>

      {/* beat 3 — note: this is why the next subtopic uses variance instead */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 60 300 L 60 316" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={312} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "→ next: variance SQUARES deviations instead — smooth everywhere.",
            "→ next: variance deviations ko SQUARE karta hai — sab jagah smooth."
          )}
        </T>
      </Fade>

      {/* beat 4 — weakness 2: M.D. depends on the anchor (mean vs median) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={460} y={128} size={13} fill={MUTED} anchor="start">
          {t("Weakness 2: depends on the anchor", "Weakness 2: anchor pe depend karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={axisD(480, 930, 220)} stroke={INK} sw={2} dur={0.7} />
      {DATA.map((v, i) => (
        <Fade key={v} on={beat >= 4} delay={dl(4, 1 + i * 0.2)}>
          <Circle cx={scaleV(v)} cy={220} r={5} fill={INK} />
        </Fade>
      ))}
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={lineD(medianX, 195, medianX, 245)} stroke={GREEN} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={medianX - 8} y={188} size={13} fill={GREEN} anchor="end" weight={700}>
          {t("median = 5", "median = 5")}
        </T>
        <T x={medianX - 8} y={261} size={13} fill={GREEN} anchor="end" weight={700}>
          {t("MD = 4.0 (smallest!)", "MD = 4.0 (sabse kam!)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.4)} d={lineD(meanX, 195, meanX, 245)} stroke={RED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={meanX + 8} y={172} size={13} fill={RED} anchor="start" weight={700}>
          {t("mean = 7.4", "mean = 7.4")}
        </T>
        <T x={meanX + 8} y={261} size={13} fill={RED} anchor="start" weight={700}>
          {t("MD = 5.04", "MD = 5.04")}
        </T>
      </Fade>

      {/* beat 5 — represent: the minimising formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={360} size={20} fill={INK} anchor="middle" weight={700}>
          {"Σ |x_i - a|  is minimum when  a = median"}
        </T>
      </Fade>

      {/* beat 6 — land: smallest about the median */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(230, 420, 620, 48)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={450} size={16} fill={INK} anchor="middle" script>
          {t(
            "Deviation is smallest about the MEDIAN — a favourite exam shortcut.",
            "Deviation MEDIAN ke baare mein sabse kam — ek favourite exam shortcut."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
