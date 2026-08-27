/**
 * P12Ch02 · Section 16 — "Worked example: a tapering conductor"
 * Beats (en [0,11,22,33,48,56,66,79]): 8 beats
 */

import React from "react";
import { Ellipse, G } from 'react-native-svg';
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

export default function P12Ch03Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Advanced: A Tapering Conductor", "JEE Advanced: A Tapering Conductor")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: TAPERING GEOMETRY & DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TAPERING CONDUCTOR GEOMETRY & DRIFT VELOCITY", "TAPERING CONDUCTOR GEOMETRY & DRIFT VELOCITY")}
          </T>
        </Fade>

        {/* Tapering Wire Open Vector Diagram */}
        <Fade on={beat >= 1}>
          <G transform="translate(45, 45)">
            <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 0 40 L 320 10 M 0 120 L 320 150" stroke={INK} sw={2} />
            <Ellipse cx={0} cy={80} rx={12} ry={40} fill="none" stroke={INK} strokeWidth={2} />
            <Ellipse cx={320} cy={80} rx={18} ry={70} fill="none" stroke={INK} strokeWidth={2} />

            {/* Radii labels */}
            <T x={-20} y={85} size={13} fill={RED} weight={800}>r = a</T>
            <T x={350} y={85} size={13} fill={RED} weight={800}>r = b</T>
            <T x={160} y={170} size={13} fill={INK} weight={800}>Length L</T>

            {/* Current arrow */}
            <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M -30 80 L 390 80" stroke={GREEN} sw={2.5} />
          </G>
        </Fade>

        <Fade on={beat >= 3}>
          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            1. Steady Current I: Constant throughout tapering wire!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Drift speed v_d(x) ∝ 1/r(x)² is highest at narrower end r=a)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: INTEGRATING ELEMENTAL RESISTANCE */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INTEGRATING ELEMENTAL RESISTANCE dR", "INTEGRATING ELEMENTAL RESISTANCE dR")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Linear Radius Profile: r(x) = a + (b - a)(x / L)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Elemental Resistance: dR = (ρ dx) / [π r(x)²]
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Definite Integral: R = ∫₀ᴸ (ρ dx) / [π r(x)²]
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Integrated Result: R = (ρ L) / (π a b) !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Replaces circular area π r² with geometric mean area π a b)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GEOMETRIC MEAN AREA VERDICT", "GEOMETRIC MEAN AREA VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Total resistance of a tapering conductor R = (ρ L)/(π a b) depends on the geometric mean of end areas A₁ and A₂.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Effective cross-sectional area A_eff = √(A₁ A₂) = √(π a² × π b²) = π a b.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: R = (ρ L)/(π a b). Equivalent to geometric mean area A_eq = π a b! ✓",
            "★ Result: R = (ρ L)/(π a b). Equivalent to geometric mean area A_eq = π a b! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
