/**
 * C11 Ch02 · Section 36 — "Rydberg, series, de Broglie, and Heisenberg"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: formulas` — reference toolkit
 * part 2, closes with the death blow to Bohr's model.
 *
 * Beats (en [0, 10.67, 23.13, 35.58, 46.59, 56.32, 68.69, 78.76]):
 *  0 anchor: spectra, matter waves, uncertainty — crowns and buries Bohr
 *  1 formula (high, GREEN): ν̄ = 1/λ = R_H Z²(1/n₁² − 1/n₂²), n₂>n₁
 *  2 explain: R_H value + the named series (Lyman..Pfund)
 *  3 formula: lines from n to ground = n(n−1)/2
 *  4 formula (high, GREEN): λ = h/p = h/mv = h/√(2m·KE) = h/√(2mqV)
 *  5 guardrail: de Broglie waves matter only for light, fast particles
 *  6 formula (high, GREEN): Δx·Δp ≥ h/4π ⇒ Δx·Δv ≥ h/4πm
 *  7 land (RED): uncertainty forbids a definite orbit — the death blow
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | formula chip (GRN)  | Chip  | x230..850 y96..130
 *  b2 | explain caption     | T mid | x540 y158
 *  b3 | formula chip        | Chip  | x360..720 y184..216
 *  b4 | formula chip (GRN)  | Chip  | x210..870 y232..266
 *  b5 | guardrail caption   | T mid | x540 y294
 *  b6 | formula chip (GRN)  | Chip  | x330..750 y320..354
 *  b7 | land caption (RED)  | T mid | x540 y382
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={13} fill={RED} script>
          {t("Rydberg, series, de Broglie, and Heisenberg", "Rydberg, series, de Broglie, aur Heisenberg")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "spectra, matter waves, uncertainty — the trio that crowns and buries Bohr",
            "spectra, matter waves, uncertainty — Bohr ko taaj bhi, dafn bhi"
          )}
        </T>
      </Fade>

      {/* beat 1 — formula (high, GREEN): Rydberg equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={230} y={96} w={620} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"ν̄ = 1/λ = R_H Z²(1/n₁² − 1/n₂²),  n₂ > n₁"}
        </Chip>
      </Fade>

      {/* beat 2 — explain: constant + series */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={158} size={11} fill={INK} script>
          {"R_H = 1.097×10⁷ m⁻¹.  Series: Lyman(1), Balmer(2), Paschen(3), Brackett(4), Pfund(5)"}
        </T>
      </Fade>

      {/* beat 3 — formula: line count */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={360} y={184} w={360} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={14} script={false}>
          {"lines (n → ground) = n(n−1)/2"}
        </Chip>
      </Fade>

      {/* beat 4 — formula (high, GREEN): de Broglie wavelength */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={210} y={232} w={660} h={34} fill={GREEN} textFill="#fff" size={13} script={false}>
          {"λ = h/p = h/mv = h/√(2m·KE) = h/√(2mqV)"}
        </Chip>
      </Fade>

      {/* beat 5 — guardrail: only light, fast particles */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={294} size={12} fill={RED} script>
          {t(
            "de Broglie waves matter only for light, fast particles — a cricket ball's λ is unobservably tiny",
            "de Broglie waves sirf light, fast particles ke liye matter karte — cricket ball ka λ tiny"
          )}
        </T>
      </Fade>

      {/* beat 6 — formula (high, GREEN): uncertainty principle */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={330} y={320} w={420} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          {"Δx·Δp ≥ h/4π  ⇒  Δx·Δv ≥ h/4πm"}
        </Chip>
      </Fade>

      {/* beat 7 — land (RED): the death blow */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={382} size={13} fill={RED} script>
          {t(
            "uncertainty forbids a definite orbit — the death blow to Bohr's sharp path",
            "uncertainty definite orbit forbid karti — Bohr ke sharp path ka death blow"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
