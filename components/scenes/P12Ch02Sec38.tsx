/**
 * P12Ch02 · Section 38 — "Pitfalls: the battery check and the right energy formula"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 * OPEN CHALKBOARD DESIGN WITH SUBTOPIC 3 RECAP & PITFALL CHECKLIST (NO CONTAINER BOXES):
 *  - Pitfall 1: Battery Check Failure -> Always test connection before choosing formula!
 *  - Pitfall 2: Wrong Energy Formula -> Use ½CV² for V constant, Q²/(2C) for Q constant!
 *  - Pitfall 3: Ignoring 50% Battery Charging Energy Loss
 *  - Subtopic 3 Master Checklist (Sec 26 – 38)
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

export default function P12Ch02Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Subtopic 3 Pitfalls & Master Checklist: Capacitors, Dielectrics & Energy", "Subtopic 3 Pitfalls & Master Checklist: Capacitors, Dielectrics & Energy")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THREE MAJOR PITFALLS IN CAPACITORS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THE 3 CLASSIC CAPACITOR PITFALLS", "THE 3 CLASSIC CAPACITOR PITFALLS")}
          </T>
        </Fade>

        {/* Floating Pitfalls */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={RED} weight={800} anchor="start">
            1. Battery Check: Verify whether battery is connected!
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Formula Choice: Use ½CV² (V const) or Q²/(2C) (Q const)!
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Dielectric Slips: C ↑ by K; V, E ↓ by 1/K (disconnected)!
          </T>

          <T x={45} y={215} size={14} fill={INK} weight={800} anchor="start">
            4. Charging Loss: W_batt = Q V = 2 × U_stored (50% heat)!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MASTER FORMULA MATRIX */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CAPACITOR MASTER FORMULA MATRIX", "CAPACITOR MASTER FORMULA MATRIX")}
          </T>
        </Fade>

        {/* Floating Matrix Features */}
        <Fade on={beat >= 2}>
          <T x={45} y={80} size={14} fill={GREEN} weight={800} anchor="start">
            • Parallel Plate: C = ε₀ A / d  (Vacuum)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            • With Dielectric Slab: C = K C₀ = K ε₀ A / d
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            • Partial Slab (t &lt; d): C = ε₀ A / [ d − t + (t/K) ]
          </T>

          <T x={45} y={215} size={14} fill={GREEN} weight={800} anchor="start">
            • Energy Density: u_E = ½ ε₀ E²  (J/m³)
          </T>
        </Fade>
      </G>

      {/* MIDDLE BRIDGE LINE */}
      <G transform="translate(40, 325)">
        <Fade on={beat >= 4}>
          <Line x1="20" y1="10" x2="980" y2="10" stroke={INK} strokeWidth={1.8} />
          <T x={500} y={38} anchor="middle" size={16} fill={AMBER_DARK} weight={800}>
            GOLDEN RULE: Capacitance depends ONLY on Geometry (A, d) and Medium (K) — NOT on Q or V!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: SUBTOPIC 3 MASTER CHECKLIST */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUBTOPIC 3 MASTER CHECKLIST (SECTIONS 26 – 38)", "SUBTOPIC 3 MASTER CHECKLIST (SECTIONS 26 – 38)")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            ✓ C = Q/V   ✓ C = ε₀A/d   ✓ C = KC₀   ✓ Connected V const   ✓ Disconnected Q const   ✓ u_E = ½ε₀E²!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Subtopic 3 Complete (Sec 26–38): Parallel Plate Capacitors, Dielectrics & Stored Energy 100% Mastered! ✓",
            "★ Subtopic 3 Complete (Sec 26–38): Parallel Plate Capacitors, Dielectrics & Stored Energy 100% Mastered! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
