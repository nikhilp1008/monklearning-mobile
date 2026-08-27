/**
 * M11 Ch13 · Section 16 — "Why we square the deviations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens Subtopic 2 (Variance & Standard Deviation).
 *
 * Beats (board_reveal_at_english [0, 12.54, 26.88, 39.17, 54.44, 65.88, 84.48]):
 *  0 anchor: heading "from absolute values to squares"
 *  1 represent (LEFT): mini |x| V-icon, ringed corner — the old problem
 *  2 represent (RIGHT): arrow → mini smooth-curve icon — the new fix
 *  3 note (red-margin, high emphasis): squaring does 3 jobs, checklist
 *  4 land (boxed, high emphasis): σ² = (1/n)Σ(x_i-x̄)²
 *  5 THE DIAGRAM: deviations as squares on a number line (area = dev²)
 *  6 explain: labels the arithmetic (2²=4, 10²=100) + closing line
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y84
 *  b1 | V icon + label (RED)             | Draw+T| vertex(150,155) · label y178
 *  b2 | arrow + U icon + label (GREEN)   | Draw+T| (210,145)→(350,145) · icon x400
 *  b3 | red bar + checklist (14)         | Draw+T| x60 y195..215 · text y208
 *  b4 | boxed formula (Row, green)       | Draw+Row | box x300..780 y228..272
 *  b5 | axis(430) + dashed mean + 4 sq   | Draw   | x140..940
 *  b6 | "2²=4"/"10²=100" labels + close  | T      | y396/308 · closing y480
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED, arrowD,
  Scene,
} from '@/components/scenes/kit';
import { axisD, lineD, curveD, roundRectD, Overline } from "./math-kit";

const BLUE = "#2980B9";
const PURPLE = "#8E44AD";

function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
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

const AXIS_Y = 430;
const MEAN_X = 540;
const SQUARES = [
  { x: 500, side: 10, color: BLUE },
  { x: 580, side: 10, color: BLUE },
  { x: 620, side: 20, color: PURPLE },
  { x: 780, side: 100, color: RED },
];

export default function M11Ch13Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Why We Square the Deviations", "Deviations Ko Square Kyun Karte Hain")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("From absolute values to squares", "Absolute values se squares tak")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: the old problem, |x| has a corner */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={lineD(130, 130, 150, 155)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={lineD(150, 155, 170, 130)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 138 152 A 14 12 0 1 1 162 152 A 14 12 0 1 1 138 152" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={150} y={178} size={12} fill={RED} anchor="middle" weight={700}>
          {"|dev| → corner"}
        </T>
      </Fade>

      {/* beat 2 — RIGHT: the fix, a smooth curve instead */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={arrowD(215, 145, 345, 145)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.7)}
        d={curveD([
          { x: 380, y: 130 },
          { x: 390, y: 142 },
          { x: 400, y: 155 },
          { x: 410, y: 142 },
          { x: 420, y: 130 },
        ])}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={400} y={178} size={12} fill={GREEN} anchor="middle" weight={700}>
          {"(dev)² → smooth"}
        </T>
      </Fade>

      {/* beat 3 — note: squaring does three jobs */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 60 195 L 60 215" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={208} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "✓ kills the sign   ✓ stays smooth   ✓ punishes large deviations",
            "✓ sign khatam   ✓ smooth rehta hai   ✓ badi deviations punish"
          )}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): the variance formula */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(300, 228, 480, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={332} y={256} size={17} fill={INK} anchor="start" weight={700}>
          {"σ² = (1/n) Σ(x_i - "}
        </T>
      </Fade>
      <XBar on={beat >= 4} delay={dl(4, 1)} x={558} y={256} size={17} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={572} y={256} size={17} fill={INK} anchor="start" weight={700}>
          {")²"}
        </T>
      </Fade>

      {/* beat 5 — THE DIAGRAM: deviations as squares */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={axisD(140, 940, AXIS_Y)} stroke={INK} sw={2} dur={0.8} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d={lineD(MEAN_X, 300, MEAN_X, 450)}
        stroke={RED}
        sw={1.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={MEAN_X} y={465} size={13} fill={RED} anchor="middle">
          {t("mean", "mean")}
        </T>
      </Fade>
      {SQUARES.map((s, i) => (
        <Fade key={i} on={beat >= 5} delay={dl(5, 1.5 + i * 0.4)}>
          <Circle cx={s.x} cy={AXIS_Y} r={3} fill={INK} />
          <Rect
            x={s.x - s.side / 2}
            y={AXIS_Y - s.side}
            width={s.side}
            height={s.side}
            fill={s.color}
            opacity={0.3}
            stroke={s.color}
            strokeWidth={1.4}
          />
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <T x={780} y={290} size={12} fill={RED} anchor="middle" weight={700}>
          {t("distant outlier dominates", "door ka outlier dominate karta hai")}
        </T>
      </Fade>

      {/* beat 6 — explain: the punishment arithmetic */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={620} y={396} size={12} fill={PURPLE} anchor="middle" weight={700}>{"2² = 4"}</T>
        <T x={780} y={310} size={13} fill={RED} anchor="middle" weight={700}>{"10² = 100"}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={480} size={13} fill={INK} anchor="middle">
          {t(
            "2 units away contributes 4; 10 units away contributes 100.",
            "2 units door → 4 contribute karta hai; 10 units door → 100."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
