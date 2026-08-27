/**
 * M11 Ch13 · Section 23 — "Variance & SD: every formula in one place"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a restated reference card (not new teaching, per
 * its own narration), so a boxed card grid, fractions flattened inline
 * throughout for space (the true stacked forms already got their moment in
 * Sec7/8/22 — this is a notes page, not a re-derivation).
 *
 * Beats (board_reveal_at_english [0, 12.12, 29.01, 42.92, 60.42, 78.42, 98.73]):
 *  0 anchor: heading
 *  1 card (high, full width): core variance + shortcut + SD
 *  2 card (normal, left): frequency-distribution variance
 *  3 card (normal, right): grouped/coded (step-deviation) variance
 *  4 card (high, full width): C.V. + transformation rule
 *  5 card (normal, full width): combined variance of two groups
 *  6 land (red-margin, high): standard result + sanity checks
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y78
 *  b1 | card (green, full width)         | Draw+Row | x100..980 y96..138
 *  b2 | card (amber, left)               | Draw+T   | x100..510 y148..206
 *  b3 | card (amber, right)              | Draw+T   | x570..980 y148..206
 *  b4 | card (green, full width)         | Draw+Row | x100..980 y216..256
 *  b5 | card (amber, full width)         | Draw+Row | x100..980 y266..308
 *  b6 | red bar + note (14)              | Draw+T   | x60 y326..344 · text y340
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

export default function M11Ch13Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={18} fill={RED} anchor="middle" script>
          {t("Variance & SD: The Formula Toolkit", "Variance & SD: Formula Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={78} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Subtopic 2: every formula in one place", "Subtopic 2: saare formulas ek jagah")}
        </T>
      </Fade>

      {/* beat 1 — card: core variance + shortcut + SD */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(100, 96, 880, 42)} stroke={GREEN} sw={2.2} dur={0.8} />
      <FormulaRow
        on={beat >= 1}
        delay={dl(1, 1)}
        x={130}
        y={122}
        size={14}
        parts={["σ² = (1/n)Σ(x_i-", "xbar", ")² = (1/n)Σx_i² - ", "xbar", "²"]}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={700} y={122} size={14} fill={INK} anchor="start" weight={700}>
          {"σ = +√(σ²)"}
        </T>
      </Fade>

      {/* beat 2 — card: frequency-distribution variance */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(100, 148, 410, 58)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={305} y={173} size={12} fill={INK} anchor="middle" weight={700}>
          {"σ² = (1/N)Σf_ix_i² - (Σf_ix_i/N)²"}
        </T>
        <T x={305} y={192} size={11} fill={INK} anchor="middle">{"(N = Σf_i)"}</T>
      </Fade>

      {/* beat 3 — card: grouped/coded (step-deviation) variance */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(570, 148, 410, 58)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={775} y={173} size={12} fill={INK} anchor="middle" weight={700}>
          {"σ² = h²[Σf_id_i²/N - (Σf_id_i/N)²]"}
        </T>
        <T x={775} y={192} size={11} fill={INK} anchor="middle">{"(d_i = (x_i-A)/h)"}</T>
      </Fade>

      {/* beat 4 — card: C.V. + transformation rule */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(100, 216, 880, 40)} stroke={GREEN} sw={2.2} dur={0.8} />
      <FormulaRow
        on={beat >= 4}
        delay={dl(4, 1)}
        x={130}
        y={240}
        size={14}
        parts={["C.V. = σ/", "xbar", " × 100      x→ax+b:  σ²→a²σ²,  σ→|a|σ"]}
      />

      {/* beat 5 — card: combined variance of two groups */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(100, 266, 880, 42)} stroke={AMBER_DARK} sw={1.8} dur={0.8} />
      <FormulaRow
        on={beat >= 5}
        delay={dl(5, 1)}
        x={130}
        y={292}
        size={13}
        parts={["σ² = [n1(σ1²+d1²)+n2(σ2²+d2²)] / (n1+n2)    d_i = x_bar_i - ", "xbar"]}
      />

      {/* beat 6 — land (red-margin, high emphasis): standard result + sanity */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 326 L 60 344" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={340} size={14} fill={RED} anchor="start" weight={700}>
          {"Std: Var(1..n) = (n²-1)/12.   Sanity: σ² ≥ 0,  σ ≤ range."}
        </T>
      </Fade>
    </Scene>
  );
}
