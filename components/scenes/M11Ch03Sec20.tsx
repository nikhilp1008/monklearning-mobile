/**
 * M11 Ch03 · Section 20 — "A graph is the unit circle, unrolled"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED, real graph geometry (waveD), extra eye-check.
 * Opens subtopic 4 (Graphs and Periodicity of Trigonometric Functions).
 *
 * Beats (board_reveal_at_english [0, 5.8, 20.39, 25.6, 40.19, 43.69, 54.78, 65.45]):
 *  0 subtitle: unrolling the circle into a wave
 *  1 text: walk anticlockwise, plot height (sin x) vs distance walked
 *  2 THE DIAGRAM: y=sinx wave, axes, one full period 0..2π
 *  3 key points: max +1 at π/2, 0 at π, min -1 at 3π/2, 0 at 2π
 *  4 subheading: periodicity - the pattern that repeats
 *  5 formula: f(x+T)=f(x), T smallest positive (boxed)
 *  6 text: sin,cos T=2π; tan T=π
 *  7 red-margin: tangent = line direction, same after 180° ⇒ period π
 *
 * Layout plan — single column: intro, wave graph, periodicity block below:
 *  b0 | subtitle (15,amber)                | T mid | x300..780  y82..97  (bl 90)
 *  b1 | intro line (14)                     | T mid | x250..830  y104..118 (bl 112)
 *  b2 | caption (14,w700)                   | T mid | x430..690  y139..153 (bl 147)
 *  b2 | axes origin(150,250) x110..1000     | Draw  | y160..340
 *  b2 | sine curve (waveD)                  | Draw  | x150..967  y175..325
 *  b3 | dots + max/min callouts + x-ticks    | Fade  | around curve
 *  b4 | "Periodicity..." (17,amber,w700)     | T st  | x60..430   y372..388 (bl 380)
 *  b4 | underline                           | Draw  | x60..430  y388
 *  b5 | chip "f(x+T)=f(x), T smallest+"      | Chip  | x300..780  y405..443
 *  b6 | "sin,cos: T=2π. tan: T=π." (15)      | T mid | x420..660  y459..475 (bl 467)
 *  b7 | margin bar (red)                     | Draw | x60  y490..535
 *  b7 | closer 2 lines (14,red)               | T st | x76..600   y510..532
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, waveD } from "./math-kit";

const ORIGIN_X = 150;
const ORIGIN_Y = 250;
const AMP = 75;
const PX_PER_RAD = 130;
const CURVE_X1 = ORIGIN_X + 2 * Math.PI * PX_PER_RAD;

const HALF_PI_X = ORIGIN_X + (Math.PI / 2) * PX_PER_RAD;
const PI_X = ORIGIN_X + Math.PI * PX_PER_RAD;
const THREE_HALF_PI_X = ORIGIN_X + (3 * Math.PI / 2) * PX_PER_RAD;
const TWO_PI_X = CURVE_X1;

export default function M11Ch03Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("A Graph Is the Unit Circle, Unrolled", "Graph Hai Unit Circle, Unrolled")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Unrolling the circle into a wave", "Circle ko unroll karke wave banana")}
        </T>
      </Fade>

      {/* beat 1 — the idea in words */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={112} size={14} fill={INK} anchor="middle">
          {t(
            "Walk anticlockwise round the circle; plot height (sin x) vs distance walked.",
            "Circle ke around anticlockwise chalo; height (sin x) ko distance ke against plot karo."
          )}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: the sine wave, one full period */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={558} y={147} size={14} fill={INK} anchor="middle" weight={700}>
          {t("y = sin x  (one full period = 2π)", "y = sin x  (ek poora period = 2π)")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 2} delay={dl(2, 0.3)} originX={ORIGIN_X} originY={ORIGIN_Y} xLeft={110} xRight={1000} yTop={160} yBottom={340} showTicks={false} />
      <Draw on={beat >= 2} d={waveD(ORIGIN_X, CURVE_X1, ORIGIN_Y, AMP, PX_PER_RAD, 0, Math.sin)} stroke={INK} sw={2.6} delay={dl(2, 0.8)} dur={1.6} />

      {/* beat 3 — the key points, read off the wave */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Circle cx={HALF_PI_X} cy={ORIGIN_Y - AMP} r={4} fill={RED} />
        <T x={HALF_PI_X} y={ORIGIN_Y - AMP - 12} size={12} fill={RED} anchor="middle" weight={700}>+1</T>
        <T x={HALF_PI_X} y={345} size={12} fill={MUTED} anchor="middle">π/2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={PI_X} cy={ORIGIN_Y} r={4} fill={INK} />
        <T x={PI_X} y={345} size={12} fill={MUTED} anchor="middle">π</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <Circle cx={THREE_HALF_PI_X} cy={ORIGIN_Y + AMP} r={4} fill={RED} />
        <T x={THREE_HALF_PI_X + 30} y={ORIGIN_Y + AMP + 4} size={12} fill={RED} anchor="middle" weight={700}>-1</T>
        <T x={THREE_HALF_PI_X} y={345} size={12} fill={MUTED} anchor="middle">3π/2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Circle cx={TWO_PI_X} cy={ORIGIN_Y} r={4} fill={INK} />
        <T x={TWO_PI_X} y={345} size={12} fill={MUTED} anchor="middle">2π</T>
      </Fade>

      {/* beat 4 — periodicity, subheading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={380} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Periodicity - the pattern that repeats", "Periodicity - jo pattern repeat hota hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 60 388 L 430 388" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.5)} />

      {/* beat 5 — the formal definition, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={300} y={405} w={480} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={16} script={false}>
          f(x+T)=f(x), T = smallest positive
        </Chip>
      </Fade>

      {/* beat 6 — the periods */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={467} size={15} fill={INK} anchor="middle" weight={700}>
          sin, cos: T=2π.  tan: T=π.
        </T>
      </Fade>

      {/* beat 7 — red-margin: why tangent's period is only π */}
      <Draw on={beat >= 7} d="M 60 490 L 60 535" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={510} size={14} fill={RED} anchor="start">
          {t("Tangent = direction of the line through O -", "Tangent = O se guzarti line ki direction -")}
        </T>
        <T x={76} y={532} size={14} fill={RED} anchor="start" weight={700}>
          {t("same after 180°, hence period π.", "180° baad wahi, isliye period π.")}
        </T>
      </Fade>
    </Scene>
  );
}
