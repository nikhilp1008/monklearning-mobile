/**
 * P12Ch02 · Section 20 — "Superconductivity, thermistors and the limits of the law"
 * Beats (en [0,10,19,31,41,54,67,77]): 8 beats
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

export default function P12Ch03Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Superconductivity, thermistors & limits of Ohm's law", "Superconductivity, thermistors & limits of Ohm's law")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SUPERCONDUCTIVITY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUPERCONDUCTIVITY (ZERO RESISTANCE REGIME)", "SUPERCONDUCTIVITY (ZERO RESISTANCE REGIME)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={GREEN} weight={800} anchor="start">
            1. Sudden Transition: Below critical T_c, resistivity ρ drops to 0!
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Quantum Pairing: Cooper pairs move without scattering.
          </T>

          <T x={45} y={170} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            3. Persistent Current: Flow continues without voltage source!
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Breakdown of Ohm's Law: V = IR fails since R = 0!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Discovered by Kamerlingh Onnes in Mercury at 4.2 K in 1911)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: THERMISTORS & NON-OHMIC DEVICES */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THERMISTORS & NON-OHMIC DEVICES", "THERMISTORS & NON-OHMIC DEVICES")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Thermistors: Oxide semiconductors with high negative α.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. High Sensitivity: Small T rise causes massive R drop.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Non-Ohmic Devices: Diodes & thermistors disobey V = IR.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Applications: Thermal sensors & current protectors!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Ohm's law is an empirical relation, not a universal law)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("LIMITS OF OHM'S LAW VERDICT", "LIMITS OF OHM'S LAW VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Ohm's law fails in superconductors (R=0), thermistors (non-linear V-I curve), and p-n junction diodes.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            It applies strictly to metallic conductors under constant temperature and physical dimensions.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Superconductors: ρ=0 below T_c! Thermistors: Sensitive temperature sensors (NTC)! ✓",
            "★ Superconductors: ρ=0 below T_c! Thermistors: Sensitive temperature sensors (NTC)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
