/**
 * P12Ch02 · Section 25 — "Pitfalls: one over r, sign slips, and pair-counting"
 * Subtopic: Potential Energy & External Fields
 * OPEN CHALKBOARD DESIGN WITH SUBTOPIC 2 RECAP & PITFALL CHECKLIST (NO CONTAINER BOXES):
 *  - Pitfall 1: Pair Counting Error -> Use N(N-1)/2 formula!
 *  - Pitfall 2: Sign Slips -> Always carry + / - charge signs into U formulas!
 *  - Pitfall 3: Distancing Error -> 1/r for potential energy, 1/r² for forces!
 *  - Subtopic 2 Master Checklist (Sec 14 – 25)
 */

import React from "react";
import { G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch02Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Subtopic 2 Pitfalls & Master Checklist: Potential Energy & External Fields", "Subtopic 2 Pitfalls & Master Checklist: Potential Energy & External Fields")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THREE MAJOR PITFALLS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THE 3 CLASSIC PITFALLS IN POTENTIAL ENERGY", "THE 3 CLASSIC PITFALLS IN POTENTIAL ENERGY")}
          </T>
        </Fade>

        {/* Floating Pitfalls */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={RED} weight={800} anchor="start">
            1. Pair Counting Slips: For N charges, total unique pairs = N(N−1)/2 !
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Charge Sign Omission: Always include + and − signs in U = k q₁ q₂ / r !
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Distancing Mistake: Energy U ∝ 1/r (Do NOT square r!)
          </T>

          <T x={45} y={215} size={14} fill={INK} weight={800} anchor="start">
            4. External Field Confusion: U_ext = q₁ V(r₁) + q₂ V(r₂) + k q₁ q₂ / r₁₂
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: DIPOLE & WORK SUMMARY */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIPOLE IN FIELD & CONSERVATION SUMMARY", "DIPOLE IN FIELD & CONSERVATION SUMMARY")}
          </T>
        </Fade>

        {/* Floating Dipole Summary */}
        <Fade on={beat >= 2}>
          <T x={45} y={80} size={14} fill={GREEN} weight={800} anchor="start">
            • Torque: τ = p × E  (τ = p E sinθ)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            • Potential Energy: U(θ) = − p · E = − p E cosθ
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            • Rotation Work: W_ext = p E (cosθ₁ − cosθ₂)
          </T>

          <T x={45} y={215} size={14} fill={GREEN} weight={800} anchor="start">
            • Angular Speed: ω = √ (2 p E / I) at θ = 0°
          </T>
        </Fade>
      </G>

      {/* MIDDLE BRIDGE LINE */}
      <G transform="translate(40, 315)">
        <Fade on={beat >= 4}>
          <Line x1="20" y1="10" x2="980" y2="10" stroke={INK} strokeWidth={1.8} />
          <T x={500} y={40} anchor="middle" size={17} fill={AMBER_DARK} weight={800}>
            WORK-ENERGY EQUIVALENCE: W_ext = + ΔU  while  W_field = − ΔU = ΔK
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: SUBTOPIC 2 MASTER CHECKLIST */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUBTOPIC 2 MASTER CHECKLIST (SECTIONS 14 – 25)", "SUBTOPIC 2 MASTER CHECKLIST (SECTIONS 14 – 25)")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            ✓ Assembly U = Σ kq_i q_j/r_ij   ✓ U &lt; 0 Bound   ✓ W_ext = qΔV   ✓ Dipole U = −pE cosθ   ✓ Energy Conservation!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Subtopic 2 Complete (Sec 14–25): Potential Energy & External Field Dipole Dynamics 100% Mastered! ✓",
            "★ Subtopic 2 Complete (Sec 14–25): Potential Energy & External Field Dipole Dynamics 100% Mastered! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
