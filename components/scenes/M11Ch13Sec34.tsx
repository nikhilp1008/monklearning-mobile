/**
 * M11 Ch13 · Section 34 — "Procedure: comparing two distributions for consistency"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (procedure).
 *
 * Beats (board_reveal_at_english [0, 7.68, 19.71, 29.61, 43.18, 53.93, 65.45]):
 *  0 anchor: heading
 *  1 represent: Step 1 — compute x̄ and σ for each series
 *  2 represent: Step 2 — if means equal, compare σ directly
 *  3 land (boxed, high emphasis): otherwise C.V. = (σ/x̄)×100 for each
 *  4 represent: Step 3 — smaller C.V. = more consistent; larger = more variable
 *  5 note (red-margin): why divide by the mean — absolute → relative wobble
 *  6 land (boxed, amber): reverse form, x̄ = (σ/C.V.)×100
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | Step 1 (14, ink)                 | T+Row st | x140 y110
 *  b2 | Step 2 (14, ink)                 | T st  | x140 y138
 *  b3 | boxed formula (Row, green)       | Draw+Row | box x260..820 y156..202
 *  b4 | Step 3 (14, ink)                 | T st  | x140 y228
 *  b5 | red bar + note (14)              | Draw+T| x60 y250..268 · text y264
 *  b6 | boxed reverse form (amber)       | Draw+Row | box x310..770 y292..334
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

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

export default function M11Ch13Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={19} fill={RED} anchor="middle" script>
          {t("Comparing Two Distributions for Consistency", "Do Distributions Ki Consistency Compare Karna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("A clean three-step comparison", "Ek clean three-step comparison")}
        </T>
      </Fade>

      {/* beat 1 — step 1: compute x̄ and σ */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={140} y={110} size={14} fill={INK} anchor="start" weight={700}>{t("Step 1: compute", "Step 1: har series ke liye")}</T>
      </Fade>
      <XBar on={beat >= 1} delay={dl(1, 0.5)} x={335} y={110} size={14} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={348} y={110} size={14} fill={INK} anchor="start" weight={700}>
          {t("and σ for each series.", "aur σ compute karo.")}
        </T>
      </Fade>

      {/* beat 2 — step 2: if means equal */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={140} y={138} size={14} fill={INK} anchor="start" weight={700}>
          {t("Step 2: if the means are equal, compare σ directly.", "Step 2: means barabar hon toh σ seedhe compare karo.")}
        </T>
      </Fade>

      {/* beat 3 — land (boxed, high emphasis): otherwise compute C.V. */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(220, 156, 640, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={250} y={185} size={15} fill={INK} anchor="start" weight={700}>
          {t("Otherwise: C.V. = σ/", "Warna: C.V. = σ/")}
        </T>
      </Fade>
      <XBar on={beat >= 3} delay={dl(3, 1.6)} x={en ? 449 : 430} y={185} size={15} fill={GREEN} weight={800} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={en ? 462 : 443} y={185} size={15} fill={GREEN} anchor="start" weight={800}>
          {t(" × 100 for each series", " × 100 har series ke liye")}
        </T>
      </Fade>

      {/* beat 4 — step 3: read the verdict */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={140} y={228} size={14} fill={INK} anchor="start" weight={700}>
          {t(
            "Step 3: smaller C.V. = more consistent; larger C.V. = more variable.",
            "Step 3: chhota C.V. = zyada consistent; bada C.V. = zyada variable."
          )}
        </T>
      </Fade>

      {/* beat 5 — note: why divide by the mean */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 250 L 60 268" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={264} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Dividing by the mean turns an absolute wobble into a relative one — fair across scales.",
            "Mean se divide karna absolute wobble ko relative banata hai — scales ke aar-paar fair."
          )}
        </T>
      </Fade>

      {/* beat 6 — land (boxed, amber): reverse form */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(280, 292, 520, 42)} stroke={AMBER_DARK} sw={2} dur={0.8} />
      <XBar on={beat >= 6} delay={dl(6, 1)} x={310} y={318} size={15} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={324} y={318} size={15} fill={INK} anchor="start" weight={700}>
          {" = (σ / C.V.) × 100"}
        </T>
      </Fade>
    </Scene>
  );
}
