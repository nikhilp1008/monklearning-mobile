/**
 * Ch10 · Section 9 — "Deriving the 1-2-3: why gamma = 3 alpha"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.07, 11.07, 12.07, 13.07, 26.13, 39.95, 53.52] — beats
 * 1-3 only 1s apart, so those Fade delays stay ≤ ~0.4s):
 *  0 hook: the most-asked derivation — short and beautiful
 *  1 cube setup: side L₀, volume V₀ = L₀³
 *  2 heat it: edge grows — L = L₀(1+αΔT)
 *  3 cube stays cube: V = V₀(1+αΔT)³
 *  4 expand the binomial: V₀[1 + 3αΔT + 3(αΔT)² + (αΔT)³]
 *  5 physics: α~10⁻⁵ ⇒ higher powers are millionths/billionths — drop them
 *  6 survives: V = V₀(1+3αΔT); compare V₀(1+γΔT) ⇒ γ = 3α
 *  7 same on a square face ⇒ β = 2α; 1,2,3 = powers of length
 *
 * Layout plan (left cube x150..420, right algebra x550..1000):
 *  b0 | hook mid x540 bl100
 *  b1 | cube x180..320 y160..300 · L₀ mid x230 bl320 · V₀ mid x230 bl345
 *  b2 | tick at (288,300) · L= mid x230 bl370 (red)
 *  b3 | V= mid x230 bl395 (red)
 *  b4 | binomial mid x770 bl160
 *  b5 | x-marks ~x850..920 y168 · note mid x770 bl195
 *  b6 | survives mid x770 bl240 · compare mid x770 bl270 · γ=3α mid x770 bl305
 *  b7 | β=2α mid x770 bl345 · powers note mid x770 bl375
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("deriving the 1-2-3 — why γ = 3α", "1-2-3 ki derivation — γ = 3α kyun")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={INK} script anchor="middle">
          {t("the most-asked derivation — short and beautiful", "sabse zyada poocha jaane wala — chhota aur khoobsurat")}
        </T>
      </Fade>

      {/* beat 1 — cube setup */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M180 200 h100 v100 h-100 z M180 200 l40 -40 h100 l-40 40 M280 200 l40 -40 v100 l-40 40"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={230} y={320} size={13} fill={INK} anchor="middle">L₀</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={230} y={345} size={12} fill={MUTED} anchor="middle">V₀ = L₀³</T>
      </Fade>

      {/* beat 2 — edge grows */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M280 300 l10 10 M320 240 l10 10" stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <T x={230} y={370} size={12} fill={RED} anchor="middle">L = L₀(1+αΔT)</T>
      </Fade>

      {/* beat 3 — cube stays a cube */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={230} y={395} size={12} fill={RED} anchor="middle">V = V₀(1+αΔT)³</T>
      </Fade>

      {/* beat 4 — expand the binomial */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={770} y={160} size={14} fill={INK} anchor="middle">
          V = V₀[1 + 3αΔT + 3(αΔT)² + (αΔT)³]
        </T>
      </Fade>

      {/* beat 5 — negligible, drop them */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M850 165 l10 10 M860 165 l-10 10 M905 165 l10 10 M915 165 l-10 10" stroke={RED} sw={1.5} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={770} y={195} size={12} fill={MUTED} script anchor="middle">
          {t(
            "α~10⁻⁵ ⇒ (αΔT)² and (αΔT)³ are millionths, billionths — drop",
            "α~10⁻⁵ ⇒ (αΔT)² aur (αΔT)³ chhote — hata do"
          )}
        </T>
      </Fade>

      {/* beat 6 — γ = 3α */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={770} y={240} size={14} fill={INK} anchor="middle">V = V₀(1 + 3αΔT)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={770} y={270} size={13} fill={MUTED} anchor="middle">{t("compare: V₀(1 + γΔT)", "compare karo: V₀(1 + γΔT)")}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={770} y={305} size={20} fill={GREEN} weight={800} anchor="middle">⇒ γ = 3α</T>
      </Fade>

      {/* beat 7 — β = 2α, the powers pattern */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={770} y={345} size={13} fill={INK} script anchor="middle">
          {t("same argument on a square face ⇒ β = 2α", "square face pe wahi tark ⇒ β = 2α")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={770} y={375} size={13} fill={GREEN} script anchor="middle">
          {t("1, 2, 3 = powers to which length is raised", "1, 2, 3 = length ki powers")}
        </T>
      </Fade>
    </Scene>
  );
}
