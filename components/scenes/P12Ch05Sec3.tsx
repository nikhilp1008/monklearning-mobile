/**
 * P12Ch05 · Section 3 — "The magnet as a solenoid, and why iron sticks to it"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
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

export default function P12Ch05Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Magnet as a Solenoid & Why Iron Sticks to It", "The Magnet as a Solenoid & Why Iron Sticks to It")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: EQUIVALENT SOLENOID MODEL */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("EQUIVALENT SOLENOID MODEL", "EQUIVALENT SOLENOID MODEL")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Finite Solenoid: Solenoid with N turns, area A, current I has m = N I A.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Axial Field Equivalence: B_solenoid = (μ_0 / 4π) · (2m / x³) at far points.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Field Lines Identity: Solenoid and bar magnet fields are identical.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Core Principle: Bar magnet is a stack of circular current loops!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Solenoid current loops create equivalent North and South magnetic poles)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: INDUCED DIPOLE ATTRACTION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INDUCED DIPOLE ATTRACTION", "INDUCED DIPOLE ATTRACTION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Non-Uniform Field: Field near magnet pole is strongest close to pole.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Induction: External field aligns atomic dipoles in unmagnetized iron.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Opposite Pole Closer: Opposite induced pole is closer → strong attraction!
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Force Formula: Net attractive force F = m · (dB / dx)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Iron is always attracted to a magnet, regardless of which pole faces it)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INDUCED MAGNETISATION PRINCIPLE", "INDUCED MAGNETISATION PRINCIPLE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            A bar magnet is physically equivalent to a finite solenoid carrying total moment m = N I A.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Unmagnetised iron becomes an induced dipole pulled toward regions of stronger B field.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ A bar magnet is physically equivalent to a solenoid with moment m = NIA! ✓",
            "★ A bar magnet is physically equivalent to a solenoid with moment m = NIA! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
