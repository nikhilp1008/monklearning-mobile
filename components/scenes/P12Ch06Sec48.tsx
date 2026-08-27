/**
 * P12Ch06 · Section 48 — "Where the sine wave comes from: the projection of a rotating vector"
 * Subtopic: AC Generator & Energy Density
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

export default function P12Ch06Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Phasor Derivation: Rotating Vector Projection & 90° Phase Shift", "Phasor Derivation: Rotating Vector Projection & 90° Phase Shift")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: FLUX Φ(t) = Φ_max cos(ωt) VS EMF ε(t) = ε₀ sin(ωt) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FLUX Φ(t) = Φ_max cos(ωt) VS EMF ε(t) = ε₀ sin(ωt)", "FLUX Φ(t) = Φ_max cos(ωt) VS EMF ε(t) = ε₀ sin(ωt)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Magnetic Flux Function: Φ(t) = Φ_max cos(ωt) (cosine variation).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Induced EMF Function: ε(t) = -dΦ/dt = ε_0 sin(ωt) (sine variation).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Phase Difference: EMF leads flux in phase by 90° (π/2 radians).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Zero Point Swap: When flux is MAXIMUM (cos=1), EMF is ZERO (sin=0)!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (EMF depends on rate of flux change, not absolute magnitude of flux)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: PEAK EMF ε₀ OCCURS WHEN COIL PLANE IS PARALLEL TO B */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PEAK EMF ε₀ OCCURS WHEN COIL PLANE IS PARALLEL TO B", "PEAK EMF ε₀ OCCURS WHEN COIL PLANE IS PARALLEL TO B")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Parallel Orientation (θ = 90°): Normal vector n is perpendicular to B.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Flux through Coil: Φ_B = B A cos(90°) = 0.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Rate of Cutting Lines: dθ/dt is perpendicular to B → max rate!
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Maximum EMF: ε(t) = ε_0 sin(90°) = ε_0!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Armature conductors cut magnetic field lines at maximum speed)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PHASOR ROTATION SUMMARY", "PHASOR ROTATION SUMMARY")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Phasor Kinematics: Cosine wave flux projection produces sine wave EMF due to d/dt [cos(ωt)] = -ω sin(ωt).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Perpendicular Orientation (θ = 0°): Flux is maximum, but rate of flux change dΦ/dt = 0 → EMF = 0.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Peak EMF occurs when coil is PARALLEL to B (flux=0, rate of cutting lines max); zero EMF occurs when PERPENDICULAR to B! ✓",
            "★ Peak EMF occurs when coil is PARALLEL to B (flux=0, rate of cutting lines max); zero EMF occurs when PERPENDICULAR to B! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
