/**
 * P12Ch02 · Section 63 — "Pitfalls: charge sharing, delta U, and series voltage division"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 * OPEN CHALKBOARD DESIGN WITH SUBTOPIC 5 RECAP & PITFALL CHECKLIST (NO CONTAINER BOXES):
 *  - Pitfall 1: Series vs Parallel Rule Confusion -> Series 1/C_eq = Σ(1/C_i), Parallel C_eq = Σ C_i!
 *  - Pitfall 2: Polarity Sign Error in Charge Sharing -> Same polarity (+ to +) vs Opposite (+ to -)!
 *  - Pitfall 3: Inverse Voltage Division -> Smaller capacitor takes LARGER voltage V₁ = V C₂/(C₁+C₂)!
 *  - Subtopic 5 Master Checklist (Sec 52 – 63)
 */

import React from "react";
import { G } from 'react-native-svg';
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

export default function P12Ch02Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Subtopic 5 Pitfalls & Master Checklist: Combinations & Charge Sharing", "Subtopic 5 Pitfalls & Master Checklist: Combinations & Charge Sharing")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THREE MAJOR CIRCUIT PITFALLS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THE 3 CLASSIC CIRCUIT & SHARING PITFALLS", "THE 3 CLASSIC CIRCUIT & SHARING PITFALLS")}
          </T>
        </Fade>

        {/* Floating Pitfalls */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={RED} weight={800} anchor="start">
            1. Inversion Slip: Forgetting to invert 1/C_eq at the end of series!
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Polarity Neglect: Connecting opposite plates uses ΔU ∝ (V₁ + V₂)² !
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Inverse Voltage Ratio: V₁ = V [ C₂ / (C₁ + C₂) ] (Smaller C gets LARGER V)!
          </T>

          <T x={45} y={215} size={14} fill={INK} weight={800} anchor="start">
            4. Wire Bridge Illusion: Wire bridges convert series into parallel circuits!
          </T>
        </Fade>

        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Always double-check formulas against physical boundary limits)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MASTER FORMULA MATRIX */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CIRCUIT & SHARING MASTER MATRIX", "CIRCUIT & SHARING MASTER MATRIX")}
          </T>
        </Fade>

        {/* Floating Matrix Features */}
        <Fade on={beat >= 2}>
          <T x={45} y={80} size={14} fill={GREEN} weight={800} anchor="start">
            • Series 2-Capacitor: C_eq = C₁ C₂ / (C₁ + C₂)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            • Charge Sharing: V_com = (C₁ V₁ + C₂ V₂) / (C₁ + C₂)
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            • Infinite Ladder: C_eq = C (1 + √5) / 2
          </T>

          <T x={45} y={215} size={14} fill={GREEN} weight={800} anchor="start">
            • Balanced Wheatstone: Remove central C₅ (C_eq = C)
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Label node potentials V_A, V_B to simplify complex 3D networks)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: SUBTOPIC 5 MASTER CHECKLIST */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUBTOPIC 5 MASTER CHECKLIST (SECTIONS 52 – 63)", "SUBTOPIC 5 MASTER CHECKLIST (SECTIONS 52 – 63)")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            ✓ Series/Parallel   ✓ V-Division   ✓ Q-Division   ✓ V_com   ✓ Heat Loss ΔU   ✓ Wheatstone Bridge!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            All circuit reduction methods and charge sharing energy loss principles 100% verified!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Subtopic 5 Complete (Sec 52–63): Circuits, Charge Sharing & Energy Loss 100% Mastered! ✓",
            "★ Subtopic 5 Complete (Sec 52–63): Circuits, Charge Sharing & Energy Loss 100% Mastered! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
