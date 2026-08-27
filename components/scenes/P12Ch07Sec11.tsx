/**
 * P12Ch07 · Section 11 — "Worked example: RMS of a DC current with AC riding on top"
 * Subtopic: AC Fundamentals, Peak, RMS & Mean Values
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
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

export default function P12Ch07Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("JEE Superimposed Waveform: I_rms = √(I_dc² + I_ac,rms²)", "JEE Superimposed Waveform: I_rms = √(I_dc² + I_ac,rms²)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Superimposed Equation */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 1: SUPERIMPOSED I(t) = 3 + 4 sin(ωt) A", "STEP 1: SUPERIMPOSED I(t) = 3 + 4 sin(ωt) A")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            I(t)² = 3² + 2(3)(4) sin(ωt) + 4² sin²(ωt)
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            Middle cross-term average vanishes to 0 over full period!
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Orthogonal Pythagorean Addition */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: I_rms = √(3² + (4/√2)²) = √(9 + 8) = √17 = 4.12 A", "STEP 2: I_rms = √(3² + (4/√2)²) = √(9 + 8) = √17 = 4.12 A")}
        </T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={18} fill={GREEN} weight={800}>
            I_rms = √(I_dc² + I_ac,rms²) = √17 ≈ 4.12 A
          </T>
          <T x={240} y={52} anchor="middle" size={14} fill={INK} weight={700}>
            {t("DC and AC components add orthogonally in quadrature!", "DC and AC components quadrature me orthogonally add hote hain!")}
          </T>
        </G>
      </Fade>

      {/* BEAT 7: General Superposition Master Formula */}
      <Badge n={3} cx={52} cy={340} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={345} size={14} fill={RED} weight={700} anchor="start">
          {t("JEE MAIN SUPERPOSITION MASTER FORMULA", "JEE MAIN SUPERPOSITION MASTER FORMULA")}
        </T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 360)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            For I(t) = I_dc + I₁ sin(ω₁t) + I₂ sin(ω₂t): Total I_rms = √(I_dc² + I₁,rms² + I₂,rms²)!
          </T>
        </G>
      </Fade>

      {/* Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={490} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Superposed Waveform: I(t) = 3 + 4 sin(ωt) yields total RMS current I_rms = √(3² + 8) = √17 ≈ 4.12 A! ✓",
            "★ Superposed Waveform: I(t) = 3 + 4 sin(ωt) yields total RMS current I_rms = √(3² + 8) = √17 ≈ 4.12 A! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
