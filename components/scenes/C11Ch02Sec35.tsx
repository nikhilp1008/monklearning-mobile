/**
 * C11 Ch02 · Section 35 — "The four scaling laws"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: formulas` — reference toolkit.
 *
 * Beats (en [0, 10.07, 17.75, 29.01, 42.15, 49.75, 63.32, 71.85]):
 *  0 anchor: the reference toolkit for Bohr numericals
 *  1 formula: mvr = nh/2π, n=1,2,3,...
 *  2 formula (high, GREEN): rₙ = 0.529(n²/Z) Å = 52.9(n²/Z) pm
 *  3 formula (high, GREEN): Eₙ = −13.6(Z²/n²) eV = −2.18×10⁻¹⁸(Z²/n²) J
 *  4 formula: vₙ = 2.18×10⁶(Z/n) m/s
 *  5 guardrail (high, RED): r∝n²/Z, E∝Z²/n², v∝Z/n, ν̄∝Z²
 *  6 explain: most Z-comparison questions solved by ratios alone
 *  7 note (RED): Bohr radius a₀=0.529Å — hydrogen ground state (n=1,Z=1)
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | formula chip        | Chip  | x390..690 y96..128
 *  b2 | formula chip (GRN)  | Chip  | x310..770 y144..178
 *  b3 | formula chip (GRN)  | Chip  | x260..820 y194..230
 *  b4 | formula chip        | Chip  | x350..730 y246..278
 *  b5 | guardrail (RED)     | Chip  | x230..850 y294..330
 *  b6 | explain caption     | T mid | x540 y358
 *  b7 | note caption (RED)  | T mid | x540 y384
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("the four scaling laws", "chaar scaling laws")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "the reference toolkit for Bohr numericals",
            "Bohr numericals ka reference toolkit"
          )}
        </T>
      </Fade>

      {/* beat 1 — formula: quantisation rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={390} y={96} w={300} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={14} script={false}>
          {"mvr = nh/2π,  n = 1,2,3,..."}
        </Chip>
      </Fade>

      {/* beat 2 — formula (high, GREEN): radius */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={310} y={144} w={460} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          {"rₙ = 0.529 (n²/Z) Å = 52.9 (n²/Z) pm"}
        </Chip>
      </Fade>

      {/* beat 3 — formula (high, GREEN): energy */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={260} y={194} w={560} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"Eₙ = −13.6(Z²/n²) eV = −2.18×10⁻¹⁸(Z²/n²) J"}
        </Chip>
      </Fade>

      {/* beat 4 — formula: speed */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={350} y={246} w={380} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={14} script={false}>
          {"vₙ = 2.18×10⁶ (Z/n) m s⁻¹"}
        </Chip>
      </Fade>

      {/* beat 5 — guardrail (high, RED): the proportionalities */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={230} y={294} w={620} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {"r ∝ n²/Z,  E ∝ Z²/n²,  v ∝ Z/n,  ν̄ ∝ Z²"}
        </Chip>
      </Fade>

      {/* beat 6 — explain: the time-saver */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={358} size={12} fill={INK} script>
          {t(
            "most Z-comparison questions are solved by these ratios alone — no full calculation",
            "zyaadatar Z-comparison sawaal in ratios se hi solve ho jaate — poora calculation nahi chahiye"
          )}
        </T>
      </Fade>

      {/* beat 7 — note (RED): the landmark value */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={384} size={12} fill={RED} script>
          {t(
            "Bohr radius a₀ = 0.529 Å — the hydrogen ground state (n=1, Z=1)",
            "Bohr radius a₀ = 0.529 Å — hydrogen ground state (n=1, Z=1)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
