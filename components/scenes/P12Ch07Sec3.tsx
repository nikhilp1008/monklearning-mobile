/**
 * P12Ch07 · Section 03 — "The half-cycle mean, the phasor, and where the clean factors break"
 * Subtopic: AC Fundamentals, Peak, RMS & Mean Values
 * OPEN CHALKBOARD DESIGN (ZERO CONTAINER BOXES):
 *  - Spacious open layout with half-cycle mean graph, rotating phasor vector, and waveform ratios
 *  - Zero enclosing box cards around formulas/text
 */

import React from "react";
import { Circle, G, Line, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
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

export default function P12Ch07Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Rotating Phasor Animation
  const angle = (currentTime * 2.5) % (2 * Math.PI);
  const px = 120 + 70 * Math.cos(angle);
  const py = 180 - 70 * Math.sin(angle);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Half-Cycle Mean Value, Rotating Phasors & Form/Peak Factors", "Half-Cycle Mean Value, Rotating Phasors & Form/Peak Factors")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: OPEN HALF-CYCLE MEAN GRAPH */}
      <G transform="translate(40, 85)">
        <Badge n={1} cx={25} cy={25} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={48} y={30} size={16} fill={RED} weight={800} anchor="start">
            {t("HALF-CYCLE MEAN CURRENT: I_mean = (2/π) I₀ = 0.637 I₀", "HALF-CYCLE MEAN CURRENT: I_mean = (2/π) I₀ = 0.637 I₀")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Open Axes */}
          <Line x1="20" y1="260" x2="460" y2="260" stroke={INK} strokeWidth={2} />
          <Line x1="20" y1="260" x2="20" y2="70" stroke={INK} strokeWidth={2} />

          {/* Half cycle shaded area */}
          <Path d="M 20 260 Q 240 70, 460 260 Z" fill={AMBER_DARK} opacity={0.25} />
          <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 20 260 Q 240 70, 460 260" stroke={AMBER_DARK} sw={3.5} />

          {/* Mean Height Line at 63.7% height */}
          <Line x1="20" y1="190" x2="460" y2="190" stroke={GREEN} strokeWidth={2.5} strokeDasharray="6 4" />
          <T x={450} y={180} size={14} fill={GREEN} weight={800} anchor="end">I_mean = 0.637 I₀</T>

          <T x={20} y={280} size={12} fill={INK}>0</T>
          <T x={460} y={280} size={12} fill={INK} anchor="end">T/2 (Half Cycle)</T>
        </Fade>

        {/* Free Floating Formula (Spacious, No Box) */}
        <Fade on={beat >= 1}>
          <T x={240} y={340} anchor="middle" size={16} fill={INK} weight={800}>
            ΔQ = ∫₀^(T/2) I(t) dt = I_mean × (T/2)  (Total charge in half cycle!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: OPEN ROTATING PHASOR DIAGRAM */}
      <G transform="translate(540, 85)">
        <Badge n={2} cx={25} cy={25} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={48} y={30} size={16} fill={RED} weight={800} anchor="start">
            {t("ROTATING PHASOR VECTOR & PROJECTION", "ROTATING PHASOR VECTOR & PROJECTION")}
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          {/* Circular Orbit & Axes */}
          <Circle cx={120} cy={180} r={75} stroke={MUTED} strokeWidth={1.5} fill="none" strokeDasharray="4 4" />
          <Line x1="25" y1="180" x2="215" y2="180" stroke={INK} strokeWidth={1.5} />
          <Line x1="120" y1="80" x2="120" y2="280" stroke={INK} strokeWidth={1.5} />

          {/* Rotating Phasor Vector I0 */}
          <Line x1="120" y1="180" x2={px} y2={py} stroke={RED} strokeWidth={3.5} />
          <Circle cx={px} cy={py} r={6} fill={RED} />

          {/* Horizontal Projection to Sine Wave */}
          <Line x1={px} y1={py} x2={270} y2={py} stroke={AMBER_DARK} strokeWidth={1.5} strokeDasharray="3 3" />
          <Circle cx={270} cy={py} r={5} fill={GREEN} />

          {/* Sine Wave preview */}
          <Path d="M 270 180 Q 325 90, 380 180 T 480 180" stroke={MUTED} strokeWidth={1.5} fill="none" />

          <T x={120} y={65} size={13} fill={RED} weight={800} anchor="middle">Phasor Vector I₀ (ωt)</T>
          <T x={380} y={65} size={13} fill={GREEN} weight={800} anchor="middle">I(t) = I₀ sin(ωt)</T>
        </Fade>

        {/* Free Floating Ratios (Spacious, No Box) */}
        <Fade on={beat >= 5}>
          <T x={250} y={340} anchor="middle" size={17} fill={GREEN} weight={800}>
            Form Factor = I_rms / I_mean = 1.11   |   Peak Factor = I₀ / I_rms = 1.414
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 470)">
        <Badge n={3} cx={25} cy={25} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={48} y={30} size={16} fill={RED} weight={800} anchor="start">
            {t("AC VALUE RATIOS & NON-SINUSOIDAL WAVEFORM WARNING", "AC VALUE RATIOS & NON-SINUSOIDAL WAVEFORM WARNING")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={500} y={30} anchor="middle" size={17} fill={GREEN} weight={800}>
            Form Factor = 1.11 & Peak Factor = 1.414 ONLY hold for pure Sine Waves!
          </T>
          <T x={500} y={65} anchor="middle" size={15} fill={INK} weight={700}>
            For Square Waves: I_rms = I₀ & Form Factor = 1.0   |   For Triangular Waves: I_rms = I₀ / √3 ≈ 0.577 I₀ !
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={570} w={880} h={42} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Half-Cycle Mean I_mean = 2I₀/π ≈ 0.637 I₀, Phasors project I(t)=I₀ sin(ωt), with Form Factor = 1.11 & Peak Factor = 1.414! ✓",
            "★ Half-Cycle Mean I_mean = 2I₀/π ≈ 0.637 I₀, Phasors project I(t)=I₀ sin(ωt), with Form Factor = 1.11 & Peak Factor = 1.414! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
