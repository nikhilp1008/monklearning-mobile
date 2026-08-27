/**
 * P12Ch02 · Section 44 — "Appliance ratings and maximum power transfer"
 * Beats (en [0,1,4,5,6,7]): 6 beats
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

export default function P12Ch03Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Appliance Ratings & Max Power Formula", "Appliance Ratings & Max Power Formula")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: R FROM APPLIANCE RATING */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RESISTANCE FROM APPLIANCE RATING", "RESISTANCE FROM APPLIANCE RATING")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Stated Rating: Appliances specify (P_rated, V_rated) e.g., (100 W, 220 V).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Inherent Resistance Formula: R_appliance = (V_rated)² / P_rated.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Constant Property: Resistance R remains fixed regardless of applied V!
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Rating Rule: Higher power rating = SMALLER filament resistance!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Always calculate R first before analyzing non-standard circuit voltages)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: COLD VS HOT FILAMENT */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("COLD VS HOT FILAMENT RESISTANCE TRAP", "COLD VS HOT FILAMENT RESISTANCE TRAP")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Cold State (OFF): Filament is at room temperature T ≈ 25 °C.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Hot State (ON): Filament glows at T ≈ 2500 °C (R_hot ≈ 10 × R_cold).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Inrush Surge Current: When switched ON, I_initial is 10× higher than normal!
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Filament Failure: Bulbs almost ALWAYS blow out when turned ON!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (High inrush current thermal shock snaps fragile cold filament)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("APPLIANCE POWER & SURGE VERDICT", "APPLIANCE POWER & SURGE VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Appliance internal resistance R = (V_rated)² / P_rated is constant under normal operating temperatures.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Actual power consumption under modified voltage V_actual is P_actual = (V_actual)² / R_appliance.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Rating R = V²_rated/P_rated. Maximum load power P_max = E²/(4r) at R = r! ✓",
            "★ Rating R = V²_rated/P_rated. Maximum load power P_max = E²/(4r) at R = r! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
