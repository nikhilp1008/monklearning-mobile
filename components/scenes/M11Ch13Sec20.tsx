/**
 * M11 Ch13 · Section 20 — "Deriving the workhorse shortcut formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — a genuine algebraic derivation, built live line by
 * line (same discipline as a "formulas" section per the maths spec: assemble
 * the identity in the order the derivation actually proceeds, never fade in
 * the finished result). FLAGGED for extra scrutiny — verify every algebraic
 * step below is actually correct, not just plausible-looking.
 *
 * Derivation (verified):
 *  σ² = (1/n)Σ(x_i-x̄)²
 *     = (1/n)Σ(x_i² - 2x̄x_i + x̄²)                          [expand square]
 *  σ² = (1/n)Σx_i² - (2x̄/n)Σx_i + (1/n)Σx̄²                  [Σ distributes]
 *  (1/n)Σx_i = x̄  ⇒  middle term = -2x̄·x̄ = -2x̄²
 *  Σx̄² = n·x̄² (x̄² is a constant, summed n times) ⇒ (1/n)(nx̄²) = x̄²
 *  ⇒ σ² = (1/n)Σx_i² - 2x̄² + x̄² = (1/n)Σx_i² - x̄²           [combine, done]
 *
 * Beats (board_reveal_at_english [0, 10.41, 29.35, 41.05, 59.82, 83.46, 96.94]):
 *  0 anchor: heading
 *  1 represent: definition, then expand the square (2 stacked lines)
 *  2 explain: splitting the sum is legal (Σ distributes over +)
 *  3 represent: the sum split into three pieces (1 line)
 *  4 explain: (1/n)Σx_i=x̄ and Σx̄²=nx̄² — the two facts used
 *  5 land (boxed, high emphasis): the workhorse, σ² = (1/n)Σx_i² - x̄²
 *  6 note (red-margin): avoids every individual deviation
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | L1 (sans 18)                     | Row   | x140 y115
 *  b1 | L2 (sans 18, indented)           | Row   | x180 y148
 *  b2 | annotation (13, muted)           | T st  | x140 y178
 *  b3 | L3 (sans 17)                     | Row   | x140 y215
 *  b4 | annotation line 1/2 (13, muted)  | T st  | x140 y248/268
 *  b5 | boxed L4 (sans 20, green)        | Draw+Row | box x260..820 y292..340
 *  b6 | red bar + note (14)              | Draw+T| x60 y368..386 · text y382
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
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

export default function M11Ch13Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={18} fill={RED} anchor="middle" script>
          {t("Deriving the Workhorse Shortcut Formula", "Workhorse Shortcut Formula Derive Karna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("From the definition to the fast form", "Definition se fast form tak")}
        </T>
      </Fade>

      {/* beat 1 — definition, then expand the square */}
      <FormulaRow on={beat >= 1} delay={dl(1, 0.2)} x={140} y={115} size={18} parts={["σ² = (1/n) Σ(x_i - ", "xbar", ")²"]} />
      <FormulaRow
        on={beat >= 1}
        delay={dl(1, 1.4)}
        x={180}
        y={148}
        size={18}
        parts={["= (1/n) Σ(x_i² - 2", "xbar", "·x_i + ", "xbar", "²)"]}
      />

      {/* beat 2 — explain: splitting the sum is legal */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={140} y={178} size={13} fill={MUTED} anchor="start">
          {t(
            "Split the sum into three pieces — legal, since Σ distributes over addition.",
            "Sum ko teen tukdon mein baanto — legal hai, kyunki Σ addition pe distribute hota hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — the sum split into three pieces */}
      <FormulaRow
        on={beat >= 3}
        delay={dl(3, 0.2)}
        x={140}
        y={215}
        size={17}
        parts={["σ² = (1/n)Σx_i² - (2", "xbar", "/n)Σx_i + (1/n)Σ", "xbar", "²"]}
      />

      {/* beat 4 — explain: the two facts used */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={140} y={248} size={13} fill={MUTED} anchor="start">
          {t(
            "(1/n)Σx_i = x_bar, so the middle term = -2·x_bar·x_bar = -2x_bar².",
            "(1/n)Σx_i = x_bar, toh middle term = -2·x_bar·x_bar = -2x_bar²."
          )}
        </T>
        <T x={140} y={268} size={13} fill={MUTED} anchor="start">
          {t(
            "And Σx_bar² = n·x_bar² (a constant, summed n times), so (1/n)(n·x_bar²) = x_bar².",
            "Aur Σx_bar² = n·x_bar² (constant, n baar summed), toh (1/n)(n·x_bar²) = x_bar²."
          )}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): the workhorse */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(260, 292, 560, 48)} stroke={GREEN} sw={2.2} dur={0.8} />
      <FormulaRow
        on={beat >= 5}
        delay={dl(5, 1)}
        x={290}
        y={322}
        size={20}
        parts={["σ² = (1/n)Σx_i² - ", "xbar", "²"]}
        fill={GREEN}
        weight={800}
      />

      {/* beat 6 — note: avoids every individual deviation */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 368 L 60 386" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={382} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "The workhorse: avoids every individual deviation — ideal when the mean isn't whole.",
            "Workhorse: ek bhi individual deviation nahi — best jab mean whole number na ho."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
