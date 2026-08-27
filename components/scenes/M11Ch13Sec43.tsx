/**
 * M11 Ch13 · Section 43 — "Chapter 13: your complete formula toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formula_recap — every formula across all 3 subtopics, restated
 * (not derived). Boxed card grid like Sec29/Sec37's recaps; fractions flattened
 * inline throughout, and x̄ uses the plain `x_bar` text fallback everywhere
 * (six dense cards, several with 1-2 x̄ occurrences each — consistency and
 * spacing safety beat exactness here, per the Sec37 dense-recap precedent).
 *
 * Beats (board_reveal_at_english [0, 14.17, 24.58, 39.85, 53.16, 68.01, 88.83, 108.54]):
 *  0 anchor: heading
 *  1 card (normal, amber): Range & coefficient of range
 *  2 card (high, green): mean deviation about a, least at median
 *  3 card (high, green): variance shortcut + frequency form, σ=+√σ²
 *  4 card (normal, amber): grouped/coded variance, step deviation d_i
 *  5 card (high, green): C.V. + transformation scaling rules
 *  6 card (normal, amber): combined variance, Var(1..n), two master totals
 *  7 land (red-margin, high emphasis): the four permanent guardrails
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 17, red, always-on)     | T mid | x540 y48
 *  b0 | heading (script 13, amber_dark)  | T mid | x540 y74
 *  b1 | card (amber, full width)         | Draw+T| x60..1000 y92..124
 *  b2 | card (green, full width)         | Draw+T| x60..1000 y132..164
 *  b3 | card (green, full width)         | Draw+T| x60..1000 y172..204
 *  b4 | card (amber, full width)         | Draw+T| x60..1000 y212..244
 *  b5 | card (green, full width)         | Draw+T| x60..1000 y252..284
 *  b6 | card (amber, full width)         | Draw+T| x60..1000 y292..324
 *  b7 | red bar + note (13)              | Draw+T| x60 y340..358 · text y354
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch13Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={48} size={17} fill={RED} anchor="middle" script>
          {t("Your Complete Formula Toolkit", "Aapka Complete Formula Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={74} size={13} fill={AMBER_DARK} anchor="middle" script>
          {t("Statistics — every formula, all three subtopics", "Statistics — har formula, teeno subtopics")}
        </T>
      </Fade>

      {/* beat 1 — card: range & coefficient of range */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(60, 92, 940, 32)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={530} y={113} size={12} fill={INK} anchor="middle" weight={700}>
          {"Range = x_max - x_min,   Coeff. = (x_max-x_min)/(x_max+x_min)"}
        </T>
      </Fade>

      {/* beat 2 — card: mean deviation about a */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(60, 132, 940, 32)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={530} y={153} size={12} fill={INK} anchor="middle" weight={700}>
          {"M.D.(a) = (1/n)Σ|x_i-a| = (1/N)Σf_i|x_i-a|   (least at a=median)"}
        </T>
      </Fade>

      {/* beat 3 — card: variance shortcut + frequency form */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(60, 172, 940, 32)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={530} y={193} size={11} fill={INK} anchor="middle" weight={700}>
          {"σ² = (1/n)Σx_i²-x_bar² = (1/N)Σf_ix_i²-(Σf_ix_i/N)²,   σ = +√σ²"}
        </T>
      </Fade>

      {/* beat 4 — card: grouped/coded variance */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(60, 212, 940, 32)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={530} y={233} size={12} fill={INK} anchor="middle" weight={700}>
          {"σ² = h²[Σf_id_i²/N - (Σf_id_i/N)²],   d_i = (x_i-A)/h"}
        </T>
      </Fade>

      {/* beat 5 — card: C.V. + transformation scaling */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(60, 252, 940, 32)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={530} y={273} size={11} fill={INK} anchor="middle" weight={700}>
          {"C.V. = σ/x_bar × 100;   x↦ax+b: Range,M.D.,σ↦|a|(·),  σ²↦a²σ²"}
        </T>
      </Fade>

      {/* beat 6 — card: combined variance, Var(1..n), master totals */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(60, 292, 940, 32)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={530} y={313} size={10} fill={INK} anchor="middle" weight={700}>
          {"σ²=[n1(σ1²+d1²)+n2(σ2²+d2²)]/(n1+n2);  Var(1..n)=(n²-1)/12;  Σx_i=n·x_bar,Σx_i²=n(σ²+x_bar²)"}
        </T>
      </Fade>

      {/* beat 7 — land (red-margin, high emphasis): the four permanent guardrails */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 340 L 60 358" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={354} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "Sanity, always: M.D. ≤ Range, σ² ≥ 0, σ ≤ Range, C.V. dimensionless.",
            "Sanity, hamesha: M.D. ≤ Range, σ² ≥ 0, σ ≤ Range, C.V. dimensionless."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
