/**
 * M11 Ch13 · Section 37 — "Analysis & reverse problems: the formula toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a restated reference card (not new teaching),
 * boxed card grid, fractions flattened inline throughout for space (the
 * true stacked forms already had their moment earlier in the chapter).
 *
 * Beats (board_reveal_at_english [0, 9.05, 25.26, 45.06, 61.01, 80.3, 96.17]):
 *  0 anchor: heading
 *  1 card (high, green): C.V. + reverse form
 *  2 card (high, green): the two master totals
 *  3 card (normal, amber): correction formulas
 *  4 card (normal, amber): missing-observations identity + quadratic
 *  5 card (normal, amber): combined mean + combined variance
 *  6 land (red-margin): three quick guardrails
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 17, red, always-on)   | T mid | x540 y50
 *  b0 | heading (script 13, amber_dark)| T mid | x540 y86
 *  b1 | card (green, full width)       | Draw+T| x60..1000 y102..136
 *  b2 | card (green, full width)       | Draw+T| x60..1000 y144..178
 *  b3 | card (amber, full width)       | Draw+T| x60..1000 y186..220
 *  b4 | card (amber, full width)       | Draw+T| x60..1000 y228..262
 *  b5 | card (amber, full width)       | Draw+T| x60..1000 y270..304
 *  b6 | red bar + note (13)            | Draw+T| x60 y320..338 · text y334
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

export default function M11Ch13Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={50} size={17} fill={RED} anchor="middle" script>
          {t("Analysis & Reverse Problems Toolkit", "Analysis & Reverse Problems Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={86} size={13} fill={AMBER_DARK} anchor="middle" script>
          {t("Subtopic 3: every formula in one place", "Subtopic 3: saare formulas ek jagah")}
        </T>
      </Fade>

      {/* beat 1 — card: C.V. + reverse form */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(60, 102, 940, 34)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={90} y={124} size={13} fill={INK} anchor="start" weight={700}>{"C.V. = σ/"}</T>
      </Fade>
      <XBar on={beat >= 1} delay={dl(1, 1.2)} x={187} y={124} size={13} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={199} y={124} size={13} fill={INK} anchor="start" weight={700}>{"×100 (≠0);    "}</T>
      </Fade>
      <XBar on={beat >= 1} delay={dl(1, 1.6)} x={370} y={124} size={13} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={382} y={124} size={13} fill={INK} anchor="start" weight={700}>{"= (σ/C.V.) × 100"}</T>
      </Fade>

      {/* beat 2 — card: the two master totals */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(60, 144, 940, 34)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={90} y={166} size={13} fill={INK} anchor="start" weight={700}>{"Σx_i = n·"}</T>
      </Fade>
      <XBar on={beat >= 2} delay={dl(2, 1.2)} x={187} y={166} size={13} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={199} y={166} size={13} fill={INK} anchor="start" weight={700}>{",     Σx_i² = n(σ²+"}</T>
      </Fade>
      <XBar on={beat >= 2} delay={dl(2, 1.6)} x={392} y={166} size={13} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={404} y={166} size={13} fill={INK} anchor="start" weight={700}>{"²)"}</T>
      </Fade>

      {/* beat 3 — card: correction formulas */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(60, 186, 940, 34)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={530} y={208} size={12} fill={INK} anchor="middle" weight={700}>
          {"Σx_corr = Σx_wrong - w + c,    Σx²_corr = Σx²_wrong - w² + c²"}
        </T>
      </Fade>

      {/* beat 4 — card: missing observations */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(60, 228, 940, 34)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={530} y={250} size={12} fill={INK} anchor="middle" weight={700}>
          {"Missing p,q: (p+q)² = p²+q²+2pq  ⇒  pq  ⇒  t²-(p+q)t+pq=0"}
        </T>
      </Fade>

      {/* beat 5 — card: combined mean + variance */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(60, 270, 940, 34)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={530} y={292} size={11} fill={INK} anchor="middle" weight={700}>
          {"x_bar = (n1·x_bar1+n2·x_bar2)/(n1+n2),   σ² = [n1(σ1²+d1²)+n2(σ2²+d2²)]/(n1+n2)"}
        </T>
      </Fade>

      {/* beat 6 — land (red-margin): three quick guardrails */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 320 L 60 338" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={334} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "Same mean? Skip C.V. — compare σ. Corrected σ² must stay ≥0. C.V. is dimensionless.",
            "Same mean? C.V. skip karo — σ compare karo. Corrected σ²≥0. C.V. dimensionless hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
