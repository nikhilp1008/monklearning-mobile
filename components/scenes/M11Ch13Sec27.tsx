/**
 * M11 Ch13 · Section 27 — "Worked example: combined standard deviation of two groups"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (JEE Advanced).
 *
 * Section A: n=30, mean=60, σ=8. Section B: n=20, mean=70, σ=6. Combined
 * mean=(30·60+20·70)/50=3200/50=64. d1=60-64=-4, d2=70-64=6.
 * σ²=[30(8²+4²)+20(6²+6²)]/50=[30·80+20·72]/50=[2400+1440]/50=3840/50=76.8.
 * σ=√76.8≈8.76 — exceeds BOTH group SDs (8 and 6).
 *
 * Beats (board_reveal_at_english [0, 24.83, 37.12, 48.64, 66.3, 88.92, 97.88]):
 *  0 anchor: heading
 *  1 represent: given (two group cards)
 *  2 represent: combined mean = Frac(30(60)+20(70), 50) = 3200/50 = 64
 *  3 represent: THE DIAGRAM — number line, A-mean/combined/B-mean, d1/d2
 *  4 land (boxed, high emphasis): σ² = [30(8²+4²)+20(6²+6²)]/50 = 76.8
 *  5 land (boxed, high emphasis): σ = √76.8 ≈ 8.76
 *  6 note (red-margin): combined SD exceeds BOTH group SDs
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | 2 cards (LEFT/RIGHT)             | Draw+T| x120..500 / x580..960 y100..150
 *  b2 | x̄ = Frac(...)/50 = 3200/50 = 64  | Row/Frac | x300 y185
 *  b3 | axis(240) + 3 marks + d1/d2      | Draw+T| x250..850
 *  b4 | boxed σ² (green)                 | Draw+T| box x140..940 y318..364
 *  b5 | boxed σ (green)                  | Draw+T| box x340..740 y374..412
 *  b6 | red bar + note (14)              | Draw+T| x60 y434..452 · text y448
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, lineD, roundRectD, Frac, Overline } from "./math-kit";

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

const xForV = (v: number) => 250 + (v - 55) * 30;

export default function M11Ch13Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const xA = xForV(60);
  const xC = xForV(64);
  const xB = xForV(70);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={18} fill={RED} anchor="middle" script>
          {t("Worked Example: Combined SD of Two Groups", "Worked Example: Do Groups ka Combined SD")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("JEE Advanced: you cannot average two SDs", "JEE Advanced: do SDs ka average nahi le sakte")}
        </T>
      </Fade>

      {/* beat 1 — given: two group cards */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(120, 100, 380, 50)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={310} y={130} size={14} fill={INK} anchor="middle" weight={700}>
          {t("Section A: n=30, mean=60, σ=8", "Section A: n=30, mean=60, σ=8")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={roundRectD(580, 100, 380, 50)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={770} y={130} size={14} fill={INK} anchor="middle" weight={700}>
          {t("Section B: n=20, mean=70, σ=6", "Section B: n=20, mean=70, σ=6")}
        </T>
      </Fade>

      {/* beat 2 — combined mean */}
      <XBar on={beat >= 2} delay={dl(2, 0)} x={260} y={195} size={16} />
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={274} y={195} size={16} fill={INK} anchor="start" weight={700}>{"="}</T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 0.6)} x={365} y={195} size={16} numerator="30(60)+20(70)" denominator="50" width={135} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={445} y={195} size={16} fill={INK} anchor="start" weight={700}>{"= 3200/50 = 64"}</T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: number line, means and d1/d2 */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={axisD(250, 850, 260)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Circle cx={xA} cy={260} r={5} fill={AMBER_DARK} />
        <T x={xA} y={244} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>{"A: 60"}</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1)} d={lineD(xC, 234, xC, 286)} stroke={RED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={xC} y={222} size={13} fill={RED} anchor="middle" weight={700}>{t("combined: 64", "combined: 64")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Circle cx={xB} cy={260} r={5} fill={AMBER_DARK} />
        <T x={xB} y={244} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>{"B: 70"}</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.5)} d={lineD(xA, 300, xC, 300)} stroke={GREEN} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={(xA + xC) / 2} y={318} size={12} fill={GREEN} anchor="middle" weight={700}>{"d1 = -4"}</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={lineD(xC, 300, xB, 300)} stroke={GREEN} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <T x={(xC + xB) / 2} y={318} size={12} fill={GREEN} anchor="middle" weight={700}>{"d2 = 6"}</T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): combined variance */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(140, 340, 800, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={369} size={15} fill={GREEN} anchor="middle" weight={800}>
          {"σ² = [30(8²+4²)+20(6²+6²)] / 50 = [2400+1440]/50 = 76.8"}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): combined SD */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(340, 396, 400, 40)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={540} y={422} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"σ = √76.8 ≈ 8.76"}
        </T>
      </Fade>

      {/* beat 6 — note: combined SD exceeds both */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 452 L 60 470" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={466} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Combined SD (8.76) exceeds BOTH group SDs — the d² terms inject extra spread.",
            "Combined SD (8.76) DONO group SDs se zyada — d² terms extra spread jodte hain."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
