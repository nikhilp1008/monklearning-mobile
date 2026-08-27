/**
 * P12Ch02 · Section 5 — "When Ohm's law fails: non-linear and one-way devices"
 * Beats (en [0,11,12,13,14,25,39,52]): 8 beats
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

export default function P12Ch03Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("When Ohm's law fails: non-linear & one-way devices", "When Ohm's law fails: non-linear & one-way devices")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: FILAMENT LAMP NON-LINEARITY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NON-OHMIC BEHAVIOR: FILAMENT LAMP", "NON-OHMIC BEHAVIOR: FILAMENT LAMP")}
          </T>
        </Fade>

        {/* Filament V-I Graph (Open Chalkboard) */}
        <Fade on={beat >= 1}>
          <G transform="translate(0, 10)">
            <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 45 200 L 260 200" stroke={INK} sw={2} />
            <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 45 200 L 45 50" stroke={INK} sw={2} />
            <T x={270} y={205} size={13} fill={INK} weight={800}>V</T>
            <T x={45} y={38} size={13} fill={INK} weight={800}>I</T>

            {/* Ohmic Straight Reference Line */}
            <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 45 200 L 220 50" stroke={MUTED} sw={1.5} />
            <T x={160} y={65} size={11} fill={MUTED} weight={700}>Ohmic (Straight)</T>

            {/* Filament Bending Curve */}
            <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M 45 200 Q 150 90 240 80" stroke={RED} sw={2.5} />
            <T x={170} y={100} size={12} fill={RED} weight={800}>Filament (R rises)</T>
          </G>
        </Fade>

        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (As V increases, filament heats up, τ decreases, and R rises non-linearly)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: DIRECTION-DEPENDENT DEVICE (DIODE) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIRECTION-DEPENDENT DEVICE: DIODE", "DIRECTION-DEPENDENT DEVICE: DIODE")}
          </T>
        </Fade>

        {/* Diode V-I Graph (Open Chalkboard) */}
        <Fade on={beat >= 4}>
          <G transform="translate(0, 10)">
            <Draw on={beat >= 4} delay={dl(4, 0.4)} d="M 45 130 L 450 130" stroke={INK} sw={2} />
            <Draw on={beat >= 4} delay={dl(4, 0.4)} d="M 245 200 L 245 40" stroke={INK} sw={2} />
            <T x={465} y={135} size={13} fill={INK} weight={800}>+V</T>
            <T x={25} y={135} size={13} fill={INK} weight={800}>-V</T>
            <T x={245} y={28} size={13} fill={INK} weight={800}>+I</T>

            {/* Forward Bias Curve */}
            <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M 245 130 L 305 130 Q 360 125 390 50" stroke={GREEN} sw={2.5} />
            <T x={340} y={70} size={12} fill={GREEN} weight={800}>Forward (Conducts)</T>

            {/* Reverse Bias Line */}
            <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M 245 130 L 90 132" stroke={RED} sw={2} />
            <T x={100} y={155} size={12} fill={RED} weight={800}>Reverse (Blocked)</T>
          </G>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={12} fill={GREEN} weight={800}>
            (Diodes conduct in ONE direction only, violating V=IR symmetry)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NON-OHMIC VERDICT", "NON-OHMIC VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Ohm's law V = IR is an empirical rule for good metallic conductors at constant temperature, NOT a universal law.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Filament lamps, P-N junction diodes, transistors, and electrolytes are non-Ohmic materials!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Ohm's law is NOT a universal law! Non-Ohmic: Filament lamps, Diodes, Transistors. ✓",
            "★ Ohm's law is NOT a universal law! Non-Ohmic: Filament lamps, Diodes, Transistors. ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
