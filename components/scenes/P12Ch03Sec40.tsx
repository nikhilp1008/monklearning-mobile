/**
 * P12Ch02 · Section 40 — "Where the energy actually goes"
 * Beats (en [0,1,2,3,4,5,6,7]): 8 beats
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

export default function P12Ch03Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Where the energy actually goes: Electrical Energy & Power", "Where the energy actually goes: Electrical Energy & Power")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MICROSCOPIC MECHANISM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JOULE HEATING (LATTICE COLLISIONS)", "JOULE HEATING (LATTICE COLLISIONS)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. E-Field Acceleration: Battery accelerates free electrons in conductor.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Inelastic Collisions: Electrons collide with vibrating lattice ions.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Kinetic Transfer: Kinetic energy converts directly into Heat.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Microscopic Origin: Resistor heat is electron collision energy loss!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Why electrical wires get warm under heavy current)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: WORK & POWER FORMULAS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("WORK & POWER MASTER FORMULAS", "WORK & POWER MASTER FORMULAS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Work Done W: W = q V = (I t) V = V I t (Joules).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Power P: Dissipation rate P = W / t = V I (Watts).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Ohm's Forms: P = V I = I² R = V² / R.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Power Trio: P = V I = I² R = V² / R !
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Use I² R for series circuits; V² / R for parallel circuits)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTRICAL POWER & ENERGY VERDICT", "ELECTRICAL POWER & ENERGY VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Electrical energy dissipated per unit time is power P = V I = I² R = V² / R.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Electricity utility meters bill for total energy W = P × t (measured in kilowatt-hours, kWh).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Power P = VI = I²R = V²/R. Electricity bills charge for total energy W = P × t! ✓",
            "★ Power P = VI = I²R = V²/R. Electricity bills charge for total energy W = P × t! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
