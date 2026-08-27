/**
 * M11 Ch13 · Section 21 — "Why the mean, and no other anchor"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — a calculus proof, built live line by line.
 *
 * Derivation (verified):
 *  g(a) = (1/n)Σ(x_i-a)²
 *  g'(a) = (1/n)Σ·2(x_i-a)(-1) = -(2/n)Σ(x_i-a)     [chain rule]
 *  Set g'(a)=0 ⇒ Σ(x_i-a)=0 ⇒ Σx_i - na = 0 ⇒ Σx_i = na ⇒ a = x̄
 *
 * Beats (board_reveal_at_english [0, 10.33, 28.42, 45.23, 57.69, 73.47, 87.55]):
 *  0 anchor: heading
 *  1 represent: g(a) = (1/n)Σ(x_i-a)² — define the function to minimise
 *  2 represent: g'(a) = (1/n)Σ2(x_i-a)(-1) = -(2/n)Σ(x_i-a)   [differentiate]
 *  3 explain: set the derivative to zero
 *  4 land (boxed, high emphasis): Σx_i = na ⇒ a = x̄
 *  5 note (red-margin, high emphasis): the mean is the UNIQUE minimiser
 *  6 explain: the parallel — median↔|·|, mean↔(·)² (two chips)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | L1 (sans 18)                     | T st  | x140 y115
 *  b2 | L2 (sans 17)                     | T st  | x140 y150
 *  b3 | text (13, ink)                   | T st  | x140 y182
 *  b4 | boxed formula (Row, green)       | Draw+Row | box x350..760 y205..251
 *  b5 | red bar + note (14)              | Draw+T| x60 y275..293 · text y289
 *  b6 | two chips + "vs" + caption       | Chip+T| x150/x700 y330..366 · caption y392
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
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

function FormulaRow({
  on,
  delay = 0,
  x,
  y,
  size,
  parts,
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  parts: (string | "xbar")[];
  fill?: string;
  weight?: number;
}) {
  let cursor = x;
  const gap = size * 0.1;
  return (
    <>
      {parts.map((p, i) => {
        if (p === "xbar") {
          const w = size * 0.6;
          const el = (
            <XBar key={i} on={on} delay={delay} x={cursor} y={y} size={size} anchor="start" fill={fill} weight={weight} />
          );
          cursor += w + gap;
          return el;
        }
        const w = size * 0.52 * p.length;
        const el = (
          <Fade key={i} on={on} delay={delay}>
            <T x={cursor} y={y} size={size} fill={fill} anchor="start" weight={weight}>
              {p}
            </T>
          </Fade>
        );
        cursor += w + gap;
        return el;
      })}
    </>
  );
}

export default function M11Ch13Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={18} fill={RED} anchor="middle" script>
          {t("Why the Mean, and No Other Anchor", "Sirf Mean Hi Kyun, Koi Aur Anchor Nahi")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("The mean minimises mean-square deviation", "Mean mean-square deviation ko minimise karta hai")}
        </T>
      </Fade>

      {/* beat 1 — define g(a) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={140} y={115} size={18} fill={INK} anchor="start" weight={700}>
          {"g(a) = (1/n) Σ(x_i - a)²"}
        </T>
      </Fade>

      {/* beat 2 — differentiate */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={140} y={150} size={17} fill={INK} anchor="start" weight={700}>
          {"g'(a) = (1/n)Σ·2(x_i-a)(-1) = -(2/n)Σ(x_i-a)"}
        </T>
      </Fade>

      {/* beat 3 — explain: set derivative to zero */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={140} y={182} size={13} fill={MUTED} anchor="start">
          {t(
            "Set the derivative to zero to find the minimising anchor.",
            "Minimising anchor dhoondhne ke liye derivative ko zero karo."
          )}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): a = x̄ */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(350, 205, 410, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <FormulaRow
        on={beat >= 4}
        delay={dl(4, 1)}
        x={380}
        y={234}
        size={18}
        parts={["Σx_i = na   ⇒   a = ", "xbar"]}
        fill={GREEN}
        weight={800}
      />

      {/* beat 5 — note: the mean is the unique minimiser */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 275 L 60 293" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={289} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "The mean is the UNIQUE anchor giving the smallest average squared spread.",
            "Mean hi wo UNIQUE anchor hai jo sabse chhota average squared spread deta hai."
          )}
        </T>
      </Fade>

      {/* beat 6 — the perfect parallel */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={150} y={330} w={330} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("median → minimises Σ|x_i-a|", "median → Σ|x_i-a| minimise")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={352} size={16} fill={MUTED} anchor="middle" weight={700}>vs</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={600} y={330} w={330} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("mean → minimises Σ(x_i-a)²", "mean → Σ(x_i-a)² minimise")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={392} size={14} fill={GREEN} anchor="middle" script>
          {t("Two centres, two minimisation crowns.", "Do centres, do minimisation crowns.")}
        </T>
      </Fade>
    </Scene>
  );
}
