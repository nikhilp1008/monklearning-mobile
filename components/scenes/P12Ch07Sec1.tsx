/**
 * P12Ch07 · Section 01 — "From steady DC to the restless sine wave"
 * Subtopic: AC Fundamentals, Peak, RMS & Mean Values
 * OPEN CHALKBOARD DESIGN (ZERO CONTAINER BOXES):
 *  - Spacious layout with rich open SVG waveforms & conductor charge motion
 *  - Zero enclosing card boxes around formulas/text
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
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

export default function P12Ch07Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Time evolution for live waveform animation
  const phase = (currentTime * 3) % (2 * Math.PI);
  const acPos = Math.sin(phase);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("From Steady Direct Current (DC) to Restless Sinusoidal Alternating Current (AC)", "Steady Direct Current (DC) Se Restless Sinusoidal Alternating Current (AC)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: OPEN DC WAVEFORM & WIRE DRIFT */}
      <G transform="translate(40, 85)">
        <Badge n={1} cx={25} cy={25} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={48} y={30} size={16} fill={RED} weight={800} anchor="start">
            {t("DIRECT CURRENT (DC)", "DIRECT CURRENT (DC)")}
          </T>
        </Fade>

        {/* Open DC Grid Axes */}
        <Fade on={beat >= 1}>
          <Line x1="20" y1="220" x2="460" y2="220" stroke={INK} strokeWidth={2} />
          <Line x1="20" y1="220" x2="20" y2="60" stroke={INK} strokeWidth={2} />

          {/* DC Flat Line */}
          <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 20 120 L 450 120" stroke={AMBER_DARK} sw={4} />
          <T x={440} y={105} size={15} fill={AMBER_DARK} weight={800} anchor="end">I(t) = I₀ (Constant)</T>
          <T x={460} y={245} size={12} fill={INK} anchor="end">Time (t) →</T>

          {/* Open Conductor Wire Line */}
          <Line x1="20" y1="290" x2="450" y2="290" stroke={MUTED} strokeWidth={2.5} />
          <T x={20} y={275} size={13} fill={INK} weight={700} anchor="start">Conductor (DC Drift):</T>

          {/* Electrons drifting steadily rightward */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const cx = 170 + ((i * 45 + currentTime * 60) % 270);
            return (
              <G key={i}>
                <Circle cx={cx} cy={290} r={9} fill={RED} opacity={0.9} />
                <T x={cx} y={293} size={11} fill="#ffffff" weight={900}>-</T>
              </G>
            );
          })}
        </Fade>

        {/* Spacious Open Text */}
        <Fade on={beat >= 1}>
          <T x={235} y={355} anchor="middle" size={15} fill={INK} weight={800}>
            Steady unidirectional electron drift without polarity reversal
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: OPEN AC WAVEFORM & OSCILLATING DRIFT */}
      <G transform="translate(540, 85)">
        <Badge n={2} cx={25} cy={25} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={48} y={30} size={16} fill={RED} weight={800} anchor="start">
            {t("ALTERNATING CURRENT (AC)", "ALTERNATING CURRENT (AC)")}
          </T>
        </Fade>

        {/* Open AC Grid Axes */}
        <Fade on={beat >= 5}>
          <Line x1="20" y1="170" x2="470" y2="170" stroke={INK} strokeWidth={2} />
          <Line x1="20" y1="230" x2="20" y2="70" stroke={INK} strokeWidth={2} />

          {/* Smooth Sinusoidal Path */}
          <Draw on={beat >= 5} delay={dl(5, 0.6)}
            d="M 20 170 Q 77.5 70, 135 170 T 250 170 T 365 170 T 470 170"
            stroke={GREEN} sw={3.5} />

          <Circle cx={77.5} cy={70} r={5} fill={GREEN} />
          <T x={77.5} y={55} size={13} fill={GREEN} weight={800}>+I₀ (Peak)</T>
          <Circle cx={192.5} cy={270} r={5} fill={RED} />
          <T x={192.5} y={290} size={13} fill={RED} weight={800}>-I₀ (Peak)</T>

          <T x={250} y={190} size={12} fill={INK} anchor="middle">T/2</T>
          <T x={470} y={190} size={12} fill={INK} anchor="end">T (Period)</T>

          {/* Open Conductor Wire Line */}
          <Line x1="20" y1="320" x2="470" y2="320" stroke={MUTED} strokeWidth={2.5} />
          <T x={20} y={305} size={13} fill={INK} weight={700} anchor="start">Conductor (AC Oscillation):</T>

          {/* Electrons oscillating back and forth */}
          {[0, 1, 2, 3, 4].map((i) => {
            const baseCx = 170 + i * 55;
            const cx = baseCx + acPos * 22;
            return (
              <G key={i}>
                <Circle cx={cx} cy={320} r={9} fill={GREEN} opacity={0.9} />
                <T x={cx} y={323} size={11} fill="#ffffff" weight={900}>-</T>
              </G>
            );
          })}
        </Fade>

        {/* Spacious Open Text */}
        <Fade on={beat >= 5}>
          <T x={245} y={355} anchor="middle" size={15} fill={GREEN} weight={800}>
            Electrons oscillate back & forth at frequency f = ω / 2π
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS FORMULAS */}
      <G transform="translate(40, 470)">
        <Badge n={3} cx={25} cy={25} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={48} y={30} size={16} fill={RED} weight={800} anchor="start">
            {t("AC MATHEMATICAL FORMULATION", "AC MATHEMATICAL FORMULATION")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={500} y={30} anchor="middle" size={20} fill={GREEN} weight={800}>
            Instantaneous Current: I(t) = I₀ sin(ωt + φ)   |   Angular Frequency: ω = 2π f = 2π / T
          </T>
          <T x={500} y={65} anchor="middle" size={15} fill={AMBER_DARK} weight={700}>
            Indian Mains Standard: f = 50 Hz (T = 20 ms), ω = 314.16 rad/s (Reverses direction 100 times per second!)
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={570} w={880} h={42} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ AC Fundamentals: I(t) = I₀ sin(ωt) periodically reverses polarity with f = 50 Hz (T = 20 ms) in Indian mains! ✓",
            "★ AC Fundamentals: I(t) = I₀ sin(ωt) Indian mains me f = 50 Hz (T = 20 ms) ke sath polarity reverse karta hai! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
