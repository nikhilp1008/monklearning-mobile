/**
 * M11 Ch08 · Section 9 — "An AP is repeated addition — the staircase"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. Opens subtopic 2 (AP).
 *
 * Beats (en [0, 9.3, 20.31, 30.89, 45.4, 61.95, 73.3, 86.87]):
 *  0 title (always-on) — "Arithmetic progression: add the same step, over and over"
 *  1 THE DEMO — two panels: staircase (left, rising bars a/a+d/a+2d/a+3d) +
 *     graph (right, a_n vs n plotted as a straight line with 4 discrete dots)
 *  2 defining property: gap never changes
 *  3 formula: d = a_2-a_1 = a_3-a_2 = ... = a_k-a_(k-1)
 *  4 climb (n-1) steps from a
 *  5 real-world examples
 *  6 red-margin: AP is linear — slope d
 *  7 closer chip: AP properties are facts about lines
 *
 * Layout plan:
 *  b1 | LEFT staircase: 4 bars x100..274 y110..230, baseline y230, labels above bars,
 *       caption bl250 cx190 | RIGHT graph: axes origin(650,230) x650..900 y110..230,
 *       line + 4 dots, caption bl250 cx770
 *  b2 | text bl284 cx540
 *  b3 | formula bl320 cx540
 *  b4 | text bl352 cx540
 *  b5 | text bl386 cx540
 *  b6 | red bar x76 y410..482 · text bl430/470 x96
 *  b7 | chip x290 y500 w500 h40 (text bl~526)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, IntervalDot } from "./math-kit";

export default function M11Ch08Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const bars = [
    { x: 100, h: 30, label: "a" },
    { x: 144, h: 60, label: "a+d" },
    { x: 188, h: 90, label: "a+2d" },
    { x: 232, h: 120, label: "a+3d" },
  ];
  const baseline = 230;

  const dotX = [680, 730, 780, 830];
  const dotY = [200, 178, 157, 136];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} anchor="middle" script>
          {t("Arithmetic progression: add the same step, over and over", "Arithmetic progression: baar baar wahi step jodo")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: staircase */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={lineD(90, baseline, 290, baseline)} stroke={MUTED} sw={1.6} dur={0.4} />
      {bars.map((b, i) => (
        <Fade key={`bar${i}`} on={beat >= 1} delay={dl(1, 0.4 + i * 0.3)}>
          <Rect x={b.x} y={baseline - b.h} width={42} height={b.h} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
          <T x={b.x + 21} y={baseline - b.h - 8} size={12} fill={AMBER_DARK} anchor="middle">{b.label}</T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={190} y={250} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("equal steps of height d", "har step ki height d, barabar")}
        </T>
      </Fade>

      {/* beat 1 — RIGHT: a_n vs n graph */}
      <CartesianAxes on={beat >= 1} delay={dl(1, 2.1)} originX={650} originY={230} xLeft={650} xRight={900} yTop={110} yBottom={230} showTicks={false} />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={lineD(665, 206, 895, 108)} stroke={GREEN_DARK} sw={2.2} dur={0.6} />
      {dotX.map((x, i) => (
        <IntervalDot key={`d${i}`} on={beat >= 1} delay={dl(1, 2.9 + i * 0.2)} x={x} y={dotY[i]} open={false} r={4.5} stroke={GREEN_DARK} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={770} y={250} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("a_n vs n : slope d", "a_n vs n : slope d")}
        </T>
      </Fade>

      {/* beat 2 — defining property */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={284} size={15} fill={INK} anchor="middle" script>
          {t(
            "the defining property: the gap between consecutive terms never changes",
            "defining property: consecutive terms ka gap kabhi nahi badalta"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={320} size={16} fill={INK} anchor="middle">
          {"d = a_2 - a_1 = a_3 - a_2 = ... = a_k - a_(k-1)"}
        </T>
      </Fade>

      {/* beat 4 — climb n-1 steps */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={352} size={15} fill={INK} anchor="middle" script>
          {t(
            "climb (n-1) steps from a and you already have a + (n-1)d",
            "a se (n-1) steps chado, aur tumhare paas hai a + (n-1)d"
          )}
        </T>
      </Fade>

      {/* beat 5 — real-world examples */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={386} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "savings, stadium seating, auto-fare — all everyday APs",
            "savings, stadium seating, auto-fare — sab everyday APs hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — red-margin: AP is linear */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 410 v 72" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={430} size={15} fill={RED} anchor="start" script>
          {t("an AP is 'linear': plot a_n vs n", "AP 'linear' hai: a_n vs n plot karo")}
        </T>
        <T x={96} y={470} size={15} fill={RED} anchor="start" script>
          {t("and you get a straight line of slope d", "aur ek straight line milegi, slope d")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={290} y={500} w={500} h={40} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={15}>
          {t("nearly every AP property is a fact about straight lines", "har AP property, seedhi lines ka fact hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
