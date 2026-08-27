/**
 * P12Ch02 · Section 43 — "Power, energy, Joule's law and the commercial unit"
 * Beats (en [0,1,3,5,7]): 5 beats
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
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

export default function P12Ch03Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Power, Energy, Joule's Law & Commercial Unit (kWh)", "Power, Energy, Joule's Law & Commercial Unit (kWh)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: JOULE'S LAW */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JOULE'S LAW OF HEATING (H = I² R t)", "JOULE'S LAW OF HEATING (H = I² R t)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Proportional to I²: Heat output quadruples if current doubles!
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Proportional to R: Heat increases linearly with resistance R.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Proportional to Time: Heat accumulates linearly with duration t.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Joule's Law: H = I² R t (SI unit: Joules, [M L² T⁻²])!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Governs electric heaters, irons, toasters, and fuses)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: COMMERCIAL UNIT */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("COMMERCIAL UNIT OF ENERGY (1 kWh)", "COMMERCIAL UNIT OF ENERGY (1 kWh)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Definition: Power of 1 kW operated continuously for 1 hour.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. SI Conversion: 1 kWh = (1000 W) × (3600 s) = 3,600,000 J.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Scientific Notation: 1 kWh = 3.6 × 10⁶ Joules = 3.6 MJ.
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Board Standard: 1 kWh = 3.6 × 10⁶ J (1 Board Unit)!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (1 'Unit' on monthly electricity bill = 1 kWh)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JOULE HEATING & COMMERCIAL UNIT VERDICT", "JOULE HEATING & COMMERCIAL UNIT VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Joule heating H = I² R t calculates heat loss in Joules; Commercial unit 1 kWh = 3.6 × 10⁶ J.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            To convert Joules to Board Units: Divide total heat energy H (Joules) by 3.6 × 10⁶ J/kWh.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 4}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: 1 kWh = 3.6×10⁶ Joules. Master this standard board conversion! ✓",
            "★ Result: 1 kWh = 3.6×10⁶ Joules. Master this standard board conversion! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
