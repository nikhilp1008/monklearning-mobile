/**
 * M11 Ch13 · Section 24 — "Worked example: variance and SD of a small data set"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * Data: 12,15,18,21,24. x̄=(12+15+18+21+24)/5=90/5=18. Deviations -6,-3,0,3,6
 * (sum=0, a free check). Squares 36,9,0,9,36 (Σ=90). σ²=90/5=18 (units²).
 * σ=√18=3√2≈4.24 units. Range=24-12=12; 4.24 ≤ 12, consistent.
 *
 * Beats (board_reveal_at_english [0, 8.58, 19.85, 31.65, 43.99, 53.64, 64.37]):
 *  0 anchor: heading
 *  1 represent: given data + question
 *  2 represent: x̄ = Frac(12+15+18+21+24, 5) = 90/5 = 18
 *  3 represent: table — x_i, (x_i-x̄), (x_i-x̄)² + totals
 *  4 land (boxed, high emphasis, LEFT): σ² = 90/5 = 18 (units²)
 *  5 land (boxed, high emphasis, RIGHT): σ = √18 = 3√2 ≈ 4.24 units
 *  6 sanity check (red-margin): units + σ ≤ range
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y84
 *  b1 | text (14, ink)                   | T mid | x540 y108
 *  b2 | x̄ = Frac(...)/5 = 90/5 = 18      | Row/Frac | x300 y150
 *  b3 | table header + 5 rows + totals   | T mid | x160..480 y190..298
 *  b4 | boxed σ² (green, LEFT)           | Draw+T| box x140..500 y320..366
 *  b5 | boxed σ (green, RIGHT)           | Draw+T| box x580..940 y320..366
 *  b6 | red bar + note (14)              | Draw+T| x60 y396..414 · text y410
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Frac, Overline } from "./math-kit";

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

const COL_XI = 220;
const COL_DEV = 320;
const COL_DEV2 = 420;
const ROWS = [
  { y: 214, xi: 12, dev: "-6", dev2: 36 },
  { y: 238, xi: 15, dev: "-3", dev2: 9 },
  { y: 262, xi: 18, dev: "0", dev2: 0 },
  { y: 286, xi: 21, dev: "3", dev2: 9 },
  { y: 310, xi: 24, dev: "6", dev2: 36 },
];

export default function M11Ch13Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Worked Example: Variance & SD of a Small Data Set", "Worked Example: Chhote Data Set ka Variance & SD")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("CBSE level: units sold on five days", "CBSE level: paanch din ki units sold")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={14} fill={INK} anchor="middle">
          {t(
            "Data: 12, 15, 18, 21, 24.  Find the variance and standard deviation.",
            "Data: 12, 15, 18, 21, 24.  Variance aur standard deviation nikaalo."
          )}
        </T>
      </Fade>

      {/* beat 2 — mean */}
      <XBar on={beat >= 2} delay={dl(2, 0)} x={200} y={155} size={16} />
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={214} y={155} size={16} fill={INK} anchor="start" weight={700}>{"="}</T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 0.6)} x={290} y={155} size={16} numerator="12+15+18+21+24" denominator="5" width={135} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={370} y={155} size={16} fill={INK} anchor="start" weight={700}>{"= 90/5 = 18"}</T>
      </Fade>

      {/* beat 3 — table: x_i, deviation, deviation² */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={COL_XI} y={190} size={13} fill={MUTED} anchor="middle" weight={700}>x_i</T>
        <T x={COL_DEV} y={190} size={13} fill={MUTED} anchor="middle" weight={700}>{"x_i - x_bar"}</T>
        <T x={COL_DEV2} y={190} size={13} fill={MUTED} anchor="middle" weight={700}>{"(x_i - x_bar)²"}</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 160 200 L 480 200" stroke={INK} sw={1.6} dur={0.5} />
      {ROWS.map((r, i) => (
        <Fade key={r.y} on={beat >= 3} delay={dl(3, 0.8 + i * 0.3)}>
          <T x={COL_XI} y={r.y} size={14} fill={INK} anchor="middle">{r.xi}</T>
          <T x={COL_DEV} y={r.y} size={14} fill={INK} anchor="middle">{r.dev}</T>
          <T x={COL_DEV2} y={r.y} size={14} fill={INK} anchor="middle">{r.dev2}</T>
        </Fade>
      ))}
      <Draw on={beat >= 3} delay={dl(3, 2.3)} d="M 160 322 L 480 322" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={COL_XI} y={334} size={13} fill={INK} anchor="middle" weight={700}>{t("Total", "Total")}</T>
        <T x={COL_DEV} y={334} size={13} fill={GREEN} anchor="middle" weight={700}>0</T>
        <T x={COL_DEV2} y={334} size={13} fill={GREEN} anchor="middle" weight={700}>90</T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis, LEFT): σ² */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(140, 350, 360, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={320} y={379} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"σ² = 90/5 = 18  (units²)"}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis, RIGHT): σ */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(580, 350, 360, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={760} y={379} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"σ = √18 = 3√2 ≈ 4.24 units"}
        </T>
      </Fade>

      {/* beat 6 — sanity check */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 396 L 60 414" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={410} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Units: variance in units², SD in units. And 4.24 ≤ range (12). Consistent.",
            "Units: variance units² mein, SD units mein. Aur 4.24 ≤ range (12). Consistent."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
