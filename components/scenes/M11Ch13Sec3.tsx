/**
 * M11 Ch13 · Section 3 — "Mean deviation: averaging the distances"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 14.68, 31.06, 45.48, 59.14, 76.89, 88.58]):
 *  0 anchor: heading "a smarter idea than the range"
 *  1 explain: measure each observation's distance from a centre, then average
 *  2 explain: distance ignores direction — mini symmetric ±5 diagram
 *  3 guardrail (red-margin): drop signs, use ABSOLUTE values or deviations cancel to 0
 *  4 represent: formula Σ(x_i - x̄) = 0, always (x̄ via Overline)
 *  5 THE DIAGRAM: number line, point a, 4 observations, alternating distance arrows
 *  6 land: mean deviation = average of these absolute distances
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 22, red, always-on)     | T mid | x540 y58
 *  b0 | heading (script 17, amber_dark)  | T mid | x540 y92
 *  b1 | text (sans 15, ink)              | T mid | x540 y122
 *  b2 | caption (13, muted)              | T mid | x540 y150
 *  b2 | mini ±5 diagram                  | Draw  | x480..600 y180..222
 *  b3 | red bar + guardrail text (15)    | Draw+T| x60 y240..256 · text x76 y252
 *  b4 | formula (sans 22 w800) + "always"| T mid | x540 y290 · "always" x680 y290
 *  b5 | axis (y380) + 4 dots             | Draw  | x140..940
 *  b5 | dashed line "a" (x540)           | Draw+T| y355..405 · label y420
 *  b5 | 4 distance lines (blue, alt.)    | Draw  | above/below axis
 *  b6 | closing (script 16) boxed        | Draw+T| box x210..870 y500..548
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
import { axisD, lineD, roundRectD, Overline } from "./math-kit";

const BLUE = "#2C6FA6";

/** "x" with a drawn overline (mean) — x/y/size/anchor must match the T call it sits above. */
function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "middle",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          x
        </T>
      </Fade>
      <Overline on={on} delay={delay} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

const DOT_X = [281, 422, 670, 846];

export default function M11Ch13Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const A_X = 540;
  const AXIS_Y = 380;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} anchor="middle" script>
          {t("Mean Deviation: Averaging the Distances", "Mean Deviation: Distances Ka Average")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={17} fill={AMBER_DARK} anchor="middle" script>
          {t("A smarter idea than the range", "Range se ek smarter idea")}
        </T>
      </Fade>

      {/* beat 1 — explain: measure distance from centre, then average */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={122} size={15} fill={INK} anchor="middle">
          {t(
            "Measure each observation's distance from a central value, then average.",
            "Har observation ki central value se distance measure karo, phir average lo."
          )}
        </T>
      </Fade>

      {/* beat 2 — explain: distance ignores direction (mini symmetric diagram) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={150} size={13} fill={MUTED} anchor="middle">
          {t("Distance ignores direction:", "Distance mein direction nahi chalti:")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={180} size={12} fill={MUTED} anchor="middle">-5</T>
        <T x={600} y={180} size={12} fill={MUTED} anchor="middle">+5</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Circle cx={540} cy={198} r={4} fill={RED} />
        <Circle cx={480} cy={198} r={4} fill={INK} />
        <Circle cx={600} cy={198} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={lineD(480, 198, 540, 198)} stroke={BLUE} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={lineD(540, 198, 600, 198)} stroke={BLUE} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={510} y={222} size={12} fill={BLUE} anchor="middle">5</T>
        <T x={570} y={222} size={12} fill={BLUE} anchor="middle">5</T>
      </Fade>

      {/* beat 3 — guardrail: drop signs, use absolute values */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 60 240 L 60 256" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={252} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Drop the signs → take ABSOLUTE values, or deviations cancel to 0.",
            "Signs hatao → ABSOLUTE value lo, warna deviations 0 mein cancel ho jaate."
          )}
        </T>
      </Fade>

      {/* beat 4 — represent: the zero-sum identity */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={430} y={290} size={22} fill={INK} anchor="middle" weight={800}>
          {"Σ (x_i - "}
        </T>
      </Fade>
      <XBar on={beat >= 4} delay={dl(4, 0.2)} x={493} y={290} size={22} anchor="start" />
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={508} y={290} size={22} fill={INK} anchor="start" weight={800}>
          {") = 0"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={640} y={290} size={15} fill={AMBER_DARK} anchor="start" script>
          {t("— always", "— hamesha")}
        </T>
      </Fade>

      {/* beat 5 — THE DIAGRAM: number line, point a, distance arrows */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={axisD(140, 940, AXIS_Y)} stroke={INK} sw={2} dur={0.8} />
      {DOT_X.map((x, i) => (
        <Fade key={x} on={beat >= 5} delay={dl(5, 0.8 + i * 0.25)}>
          <Circle cx={x} cy={AXIS_Y} r={5} fill={INK} />
        </Fade>
      ))}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.9)}
        d={lineD(A_X, AXIS_Y - 25, A_X, AXIS_Y + 25)}
        stroke={RED}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={A_X} y={AXIS_Y + 40} size={14} fill={RED} anchor="middle" weight={700}>a</T>
      </Fade>
      {/* alternating above/below distance lines, same convention as the reference diagram */}
      <Draw on={beat >= 5} delay={dl(5, 3)} d={lineD(DOT_X[0], AXIS_Y - 15, A_X, AXIS_Y - 15)} stroke={BLUE} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 3.5)} d={lineD(DOT_X[1], AXIS_Y + 15, A_X, AXIS_Y + 15)} stroke={BLUE} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4)} d={lineD(A_X, AXIS_Y - 15, DOT_X[2], AXIS_Y - 15)} stroke={BLUE} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4.5)} d={lineD(A_X, AXIS_Y + 15, DOT_X[3], AXIS_Y + 15)} stroke={BLUE} sw={1.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 5.2)}>
        <T x={(DOT_X[0] + A_X) / 2} y={AXIS_Y - 22} size={12} fill={BLUE} anchor="middle">|x-a|</T>
        <T x={(A_X + DOT_X[3]) / 2} y={AXIS_Y + 32} size={12} fill={BLUE} anchor="middle">|x-a|</T>
      </Fade>

      {/* beat 6 — land: mean deviation defined */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(210, 500, 660, 48)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={530} size={16} fill={INK} anchor="middle" script>
          {t(
            "Mean deviation = average of these absolute distances.",
            "Mean deviation = in absolute distances ka average."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
