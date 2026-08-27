/**
 * C11 Ch02 · Section 22 — "The photoelectric toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: formulas` — toolkit recap.
 *
 * Re-verified against real audio/reveals (en [0,8.79,16.38,26.97,41.05,
 * 51.71,64.85,73.98]) — content/beat mapping unchanged, VERDICT PASS.
 *
 * Beats:
 *  0 anchor: "everything the photoelectric effect needs"
 *  1 formula: p = h/λ = E/c
 *  2 guardrail: photon — zero rest mass, real momentum
 *  3 formula (high, GREEN): hν = W₀ + KEmax ⇒ KEmax = h(ν−ν₀)
 *  4 explain: W₀ = work function = hν₀
 *  5 formula: eV₀ = h(ν−ν₀)
 *  6 guardrail (high): V₀(volts) = KEmax(eV) numerically
 *  7 formula: N = Pt/hν = Ptλ/hc
 *
 * Layout plan (single column, x540 center):
 *  title (always)             | T mid | x540 y52 size15 script red
 *  b0 | anchor caption         | T mid | x540 y76             [dims@b1]
 *  b1 | p=h/λ card (GREEN)     | Chip  | x400..680 y96..130
 *  b2 | guardrail caption      | T mid | x540 y160
 *  b3 | hν=W₀+KEmax (GREEN)    | Chip  | x310..770 y180..218
 *  b4 | W₀ explain caption     | T mid | x540 y248
 *  b5 | eV₀ card (AMBER)       | Chip  | x400..680 y266..300
 *  b6 | guardrail card (RED)   | Chip  | x320..760 y324..362
 *  b7 | N card (AMBER)         | Chip  | x380..700 y386..420
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("the photoelectric toolkit", "photoelectric toolkit")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("everything the photoelectric effect needs", "photoelectric effect ko chahiye sab kuch")}
        </T>
      </Fade>

      {/* beat 1 — photon momentum */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={400} y={96} w={280} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={17} script={false}>
          p = h/λ = E/c
        </Chip>
      </Fade>

      {/* beat 2 — guardrail: zero rest mass, real momentum */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={160} size={12} fill={RED} script>
          {t("photon: ZERO rest mass, but real momentum h/λ", "photon: ZERO rest mass, par real momentum h/λ")}
        </T>
      </Fade>

      {/* beat 3 — Einstein's equation (high emphasis) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={310} y={180} w={460} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          hν = W₀ + KEmax  ⇒  KEmax = h(ν−ν₀)
        </Chip>
      </Fade>

      {/* beat 4 — explain: the work function */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={248} size={12} fill={INK} script>
          {t(
            "W₀ = work function = hν₀ (ν₀ = threshold frequency)",
            "W₀ = work function = hν₀ (ν₀ = threshold frequency)"
          )}
        </T>
      </Fade>

      {/* beat 5 — stopping-potential formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={400} y={266} w={280} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          eV₀ = h(ν−ν₀)
        </Chip>
      </Fade>

      {/* beat 6 — guardrail (high): the numeric shortcut */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={320} y={324} w={440} h={38} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("V₀ (volts) = KEmax (eV) — numerically equal", "V₀ (volts) = KEmax (eV) — numerically barabar")}
        </Chip>
      </Fade>

      {/* beat 7 — photon counting */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={380} y={386} w={320} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          N = Pt/hν = Ptλ/hc
        </Chip>
      </Fade>
    </Scene>
  );
}
