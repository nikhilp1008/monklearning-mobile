/**
 * C11 Ch02 · Section 8 — "Specific charge and the electron's mass"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: formulas` — a formula-card
 * recap, not a fresh derivation: single stacked column, one fact per beat.
 *
 * Beats (en [0, 8.11, 21.76, 37.03, 50.18, 60.07, 74.07, 83.54]):
 *  0 anchor: "pinning down the electron's numbers"
 *  1 formula (high): e/m = 1.758×10¹¹ C kg⁻¹
 *  2 guardrail: same e/m for every electron (Thomson)
 *  3 formula: q = ne, e = 1.602×10⁻¹⁹ C
 *  4 explain: Thomson → ratio only; Millikan → e alone; combine
 *  5 land (high, GREEN): mₑ = e/(e/m) = 9.109×10⁻³¹ kg
 *  6 guardrail: mₑ ≈ 1/1837 of a hydrogen atom
 *  7 particle data: proton ≈ 1.0073 u, neutron ≈ 1.0087 u
 *
 * Layout plan (single column, x540 center):
 *  title (always)         | T mid | x540 y62 size19 script red
 *  b0 | anchor caption     | T mid | x540 y100          [dims@b1]
 *  b1 | e/m card (AMBER)   | Chip  | x370..710 y122..164
 *  b2 | "same for every…"  | T mid | x540 y190
 *  b3 | q=ne card (INK)    | Chip  | x310..770 y210..246
 *  b4 | "combine them" cap | T mid | x540 y276
 *  b5 | mₑ card (GREEN)    | Chip  | x330..750 y300..348
 *  b6 | "1/1837 of H" note | T mid | x540 y378
 *  b7 | proton/neutron ×2  | Chip  | x340..520 / x560..740 y400..430
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} script>
          {t("specific charge and the electron's mass", "specific charge aur electron ka mass")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={14} fill={RED} script>
          {t("pinning down the electron's numbers", "electron ke numbers pin karna")}
        </T>
      </Fade>

      {/* beat 1 — e/m (high emphasis) */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={370} y={122} w={340} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          e/m = 1.758 × 10¹¹ C kg⁻¹
        </Chip>
      </Fade>

      {/* beat 2 — guardrail: universal ratio */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={190} size={12} fill={MUTED} script>
          {t(
            "same for every electron — independent of gas or electrode (Thomson)",
            "har electron ke liye same — gas ya electrode se independent (Thomson)"
          )}
        </T>
      </Fade>

      {/* beat 3 — q = ne */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={310} y={210} w={460} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          q = ne (n=1,2,3,…)   e = 1.602×10⁻¹⁹ C
        </Chip>
      </Fade>

      {/* beat 4 — combine them */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={276} size={13} fill={INK} script>
          {t(
            "Thomson → ratio e/m only; Millikan → e alone. Combine them.",
            "Thomson → sirf ratio e/m; Millikan → sirf e. Dono combine karo."
          )}
        </T>
      </Fade>

      {/* beat 5 — land (high, GREEN): the electron's mass */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={330} y={300} w={420} h={48} fill={GREEN} textFill="#fff" size={17} script={false}>
          mₑ = e/(e/m) = 9.109 × 10⁻³¹ kg
        </Chip>
      </Fade>

      {/* beat 6 — guardrail: scale vs hydrogen */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={378} size={13} fill={RED} script>
          {t("mₑ ≈ 1/1837 of a hydrogen atom", "mₑ ≈ 1/1837 hydrogen atom ka")}
        </T>
      </Fade>

      {/* beat 7 — particle data: proton, neutron */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={340} y={400} w={180} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          proton ≈ 1.0073 u
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Chip x={560} y={400} w={180} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          neutron ≈ 1.0087 u
        </Chip>
      </Fade>
    </Scene>
  );
}
