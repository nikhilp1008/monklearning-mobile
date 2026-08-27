/**
 * M11 Ch13 · Section 32 — "Running the machinery backwards: the two master totals"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — foundational for every reverse problem ahead
 * (Sec 35/36 lean on exactly these two identities), so extra care here.
 *
 * Beats (board_reveal_at_english [0, 6.83, 20.91, 39.94, 53.42, 70.14, 81.58]):
 *  0 anchor: heading
 *  1 explain: a second family of problems runs the machinery backwards
 *  2 explain: mean built from Σx_i, variance from Σx_i² — track both totals
 *  3 land (boxed, high emphasis, LEFT): Master Total #1, Σx_i = nx̄
 *  4 land (boxed, high emphasis, RIGHT): Master Total #2, Σx_i² = n(σ²+x̄²)
 *  5 note (red-margin): every reverse problem is bookkeeping on these two
 *  6 explain: two unknowns need two constraints
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | text (13, ink)                   | T mid | x540 y104
 *  b2 | text (13, ink)                   | T mid | x540 y128
 *  b3 | boxed (green, LEFT)              | Draw+T| x120..500 y150..230
 *  b4 | boxed (green, RIGHT)             | Draw+T| x580..960 y150..230
 *  b5 | red bar + note (14)              | Draw+T| x60 y252..270 · text y266
 *  b6 | text (13, ink)                   | T mid | x540 y296
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

export default function M11Ch13Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={18} fill={RED} anchor="middle" script>
          {t("The Two Master Totals", "Do Master Totals")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("The engine behind every reverse problem", "Har reverse problem ka engine")}
        </T>
      </Fade>

      {/* beat 1 — explain */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={13} fill={INK} anchor="middle">
          {t(
            "A second family of problems runs the machinery backwards: given mean & variance, reconstruct data.",
            "Ek doosri family of problems machinery ulti chalati hai: mean & variance diye, data reconstruct karo."
          )}
        </T>
      </Fade>

      {/* beat 2 — explain */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={128} size={13} fill={INK} anchor="middle">
          {t(
            "Mean is built from Σx_i; variance from Σx_i². Track those two totals.",
            "Mean Σx_i se banta hai; variance Σx_i² se. In do totals ko track karo."
          )}
        </T>
      </Fade>

      {/* beat 3 — land (boxed, high emphasis, LEFT): master total #1 */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(120, 150, 380, 80)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={310} y={172} size={13} fill={GREEN} anchor="middle" weight={800}>
          {t("MASTER TOTAL #1", "MASTER TOTAL #1")}
        </T>
      </Fade>
      <XBar on={beat >= 3} delay={dl(3, 1.4)} x={150} y={198} size={15} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={163} y={198} size={15} fill={INK} anchor="start" weight={700}>{" = Σx_i/n"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={150} y={220} size={15} fill={INK} anchor="start" weight={700}>{"⇒  Σx_i = n·"}</T>
      </Fade>
      <XBar on={beat >= 3} delay={dl(3, 2)} x={278} y={220} size={15} />

      {/* beat 4 — land (boxed, high emphasis, RIGHT): master total #2 */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(580, 150, 380, 80)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={770} y={172} size={13} fill={GREEN} anchor="middle" weight={800}>
          {t("MASTER TOTAL #2", "MASTER TOTAL #2")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={610} y={198} size={15} fill={INK} anchor="start" weight={700}>{"σ² = Σx_i²/n - "}</T>
      </Fade>
      <XBar on={beat >= 4} delay={dl(4, 1.4)} x={772} y={198} size={15} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={785} y={198} size={15} fill={INK} anchor="start" weight={700}>{"²"}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={610} y={220} size={15} fill={INK} anchor="start" weight={700}>{"⇒ Σx_i² = n(σ²+"}</T>
      </Fade>
      <XBar on={beat >= 4} delay={dl(4, 2)} x={815} y={220} size={15} />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={828} y={220} size={15} fill={INK} anchor="start" weight={700}>{"²)"}</T>
      </Fade>

      {/* beat 5 — note: bookkeeping on these two numbers */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 252 L 60 270" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={266} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Every missing-observation and correction question is bookkeeping on these two.",
            "Har missing-observation aur correction question in dono pe bookkeeping hai."
          )}
        </T>
      </Fade>

      {/* beat 6 — explain: two unknowns need two constraints */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={296} size={13} fill={INK} anchor="middle">
          {t(
            "Two unknowns need two constraints — the mean and variance supply exactly that.",
            "Do unknowns ko do constraints chahiye — mean aur variance exactly wahi dete hain."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
