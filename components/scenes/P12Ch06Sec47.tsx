/**
 * P12Ch06 · Section 47 — "The AC generator: turning rotation into a sine wave"
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

export default function P12Ch06Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The AC Generator: Sinusoidal EMF ε(t) = ε₀ sin(ωt)", "The AC Generator: Sinusoidal EMF ε(t) = ε₀ sin(ωt)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: ROTATING COIL FLUX LINKAGE N Φ_B(t) = N B A cos(ωt) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ROTATING COIL FLUX LINKAGE N Φ_B(t) = N B A cos(ωt)", "ROTATING COIL FLUX LINKAGE N Φ_B(t) = N B A cos(ωt)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Rotation Angle: θ = ωt varies continuously as armature spins at angular velocity ω.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Single Turn Flux: Φ_B(t) = B · A = B A cos(ωt).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. N-Turns Total Flux: N Φ_B(t) = N B A cos(ωt).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Maximum Flux: Occurs when coil plane is PERPENDICULAR to B (θ = 0)!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Mechanical rotation constantly alters flux linkage angle)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: SINUSOIDAL INDUCED EMF: ε(t) = ε₀ sin(ωt) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SINUSOIDAL INDUCED EMF: ε(t) = ε₀ sin(ωt)", "SINUSOIDAL INDUCED EMF: ε(t) = ε₀ sin(ωt)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Faraday-Lenz Law: ε(t) = -d[N Φ_B(t)] / dt.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Derivative: -d[N B A cos(ωt)] / dt = N B A ω sin(ωt).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Peak EMF Definition: Let ε_0 = N B A ω.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Instantaneous EMF: ε(t) = ε_0 sin(ωt)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Peak EMF occurs when coil plane is PARALLEL to B field lines)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SLIP RINGS & CARBON BRUSHES FUNCTION", "SLIP RINGS & CARBON BRUSHES FUNCTION")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Slip Rings: Smooth metal rings spin with the armature shaft to conduct alternating current without twisting wires.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Carbon Brushes: Stationary graphite blocks press against slip rings to deliver AC power to external load.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ AC Generator EMF ε(t) = ε₀ sin(ωt) with Peak EMF ε₀ = N B A ω (where ω = 2πf)! ✓",
            "★ AC Generator EMF ε(t) = ε₀ sin(ωt) with Peak EMF ε₀ = N B A ω (where ω = 2πf)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
