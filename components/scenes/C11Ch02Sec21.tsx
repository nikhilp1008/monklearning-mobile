/**
 * C11 Ch02 · Section 21 — "Wave and Planck relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: formulas` — toolkit recap.
 *
 * Re-verified against real audio/reveals (en [0,7.77,15.53,25.77,38.74,
 * 47.19,56.92,68.86]) — content/beat mapping unchanged, VERDICT PASS.
 *
 * Beats:
 *  0 anchor: "the wave-and-quantum toolkit"
 *  1 formula (high): c = νλ, ν̄ = 1/λ
 *  2 explain: ν̄ = wavenumber, waves per unit length (m⁻¹)
 *  3 formula (high): E = hν = hc/λ = hcν̄
 *  4 formula: Etotal = nhν
 *  5 guardrail (high): shortcut E(eV) = 1240/λ(nm)
 *  6 explain: h = 6.626×10⁻³⁴ J s, dimensions = action
 *  7 guardrail: metres→J OR shortcut→eV, never mix
 *
 * Layout plan (single column, x540 center):
 *  title (always)             | T mid | x540 y52 size15 script red
 *  b0 | anchor caption         | T mid | x540 y76             [dims@b1]
 *  b1 | c=νλ card (GREEN)      | Chip  | x380..700 y96..132
 *  b2 | wavenumber caption     | T mid | x540 y160
 *  b3 | E=hν card (GREEN)      | Chip  | x350..730 y180..216
 *  b4 | Etotal card (AMBER)    | Chip  | x320..760 y240..274
 *  b5 | shortcut card (RED)    | Chip  | x370..710 y300..338
 *  b6 | h + dimensions caption | T mid | x540 y368
 *  b7 | guardrail caption      | T mid | x540 y402
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, MUTED, AMBER_DARK, GREEN, RED, CREAM, INK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("wave and Planck relations", "wave aur Planck ke relations")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("the wave-and-quantum toolkit", "wave-and-quantum toolkit")}
        </T>
      </Fade>

      {/* beat 1 — c = νλ, ν̄ = 1/λ (high emphasis) */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={380} y={96} w={320} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={17} script={false}>
          c = νλ,   ν̄ = 1/λ
        </Chip>
      </Fade>

      {/* beat 2 — explain: the wavenumber */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={160} size={12} fill={MUTED} script>
          {t(
            "ν̄ = wavenumber — waves per unit length (m⁻¹)",
            "ν̄ = wavenumber — waves per unit length (m⁻¹)"
          )}
        </T>
      </Fade>

      {/* beat 3 — E = hν = hc/λ = hcν̄ (high emphasis) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={350} y={180} w={380} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={17} script={false}>
          E = hν = hc/λ = hcν̄
        </Chip>
      </Fade>

      {/* beat 4 — Etotal = nhν */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={320} y={240} w={440} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          Eₜₒₜₐₗ = n h ν  (n = quanta)
        </Chip>
      </Fade>

      {/* beat 5 — guardrail (high): the shortcut */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={370} y={300} w={340} h={38} fill={CREAM} stroke={RED} textFill={RED} size={17} script={false}>
          E(eV) = 1240 / λ(nm)
        </Chip>
      </Fade>

      {/* beat 6 — explain: h and its dimensions */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={368} size={12} fill={INK} script>
          {t(
            "h = 6.626×10⁻³⁴ J s — dimensions = angular momentum (action)",
            "h = 6.626×10⁻³⁴ J s — dimensions = angular momentum (action)"
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail: never mix units */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={402} size={13} fill={RED} script>
          {t(
            "keep λ in metres for J, OR use the shortcut for eV — never mix",
            "J ke liye λ metres mein rakho, YA eV shortcut use karo — kabhi mix mat karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
