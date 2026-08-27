/**
 * P12Ch02 · Section 2 — "Slow carriers, fast signal"
 * Beats (en [0,5,15,23,35,47,60,73]): 8 beats
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
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

export default function P12Ch03Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Slow carriers, fast signal", "Slow carriers, fast signal")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: PARADOX & DRIFT VS SIGNAL SPEED */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DRIFT SPEED VS SIGNAL SPEED PARADOX", "DRIFT SPEED VS SIGNAL SPEED PARADOX")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Carrier Speed: v_d ≈ 10⁻⁴ m/s = 0.1 mm/s (Slower than a snail!)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Signal Speed: v_signal ≈ c ≈ 3 × 10⁸ m/s (Speed of Light!)
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Paradox Solved: Electric field travels at ~c, pushing ALL electrons together!
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Bulb Glows Instantly because filament electrons move immediately!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Electrons do NOT need to travel from switch to bulb; they are already everywhere!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MARBLE PIPE ANALOGY */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MARBLE PIPE PHYSICAL ANALOGY", "MARBLE PIPE PHYSICAL ANALOGY")}
          </T>
        </Fade>

        {/* Pipe Diagram (Open Chalkboard) */}
        <Fade on={beat >= 4}>
          <G transform="translate(0, 15)">
            <T x={250} y={55} size={12} fill={INK} weight={800} anchor="middle">Pipe Packed Full of Marbles (Free Electron Sea)</T>
            <Rect x={45} y={80} width={410} height={45} rx={8} fill="none" stroke={INK} strokeWidth={2} />

            {[75, 115, 155, 195, 235, 275, 315, 355, 395, 425].map((x, idx) => (
              <Circle key={idx} cx={x} cy={102} r={12} fill="none" stroke={idx === 0 ? RED : (idx === 9 ? GREEN : INK)} strokeWidth={1.8} />
            ))}

            {/* Push arrow on left */}
            <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M 10 102 L 40 102" stroke={RED} sw={2.2} />
            <T x={25} y={72} size={11} fill={RED} weight={800}>Push</T>

            {/* Pop arrow on right */}
            <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M 460 102 L 490 102" stroke={GREEN} sw={2.2} />
            <T x={475} y={72} size={11} fill={GREEN} weight={800}>Instant!</T>
          </G>

          <T x={45} y={170} size={14} fill={INK} weight={800} anchor="start">
            • Pushing 1 marble on left instantly pops 1 marble out on right!
          </T>

          <T x={45} y={215} size={14} fill={INK} weight={800} anchor="start">
            • Individual marbles move slowly, but pressure wave travels at ~c!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Electric field acts as the instantaneous pressure wave across the circuit!)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUMMARY VERDICT", "SUMMARY VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Drift velocity v_d is extremely slow (~10⁻⁴ m/s), but electric field signal propagates at light speed (~3×10⁸ m/s).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Bulb filament electrons drift immediately upon closing switch without waiting for battery electrons!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Signal is fast (~c), carriers are slow (~10⁻⁴ m/s). Bulb glows instantly! ✓",
            "★ Signal is fast (~c), carriers are slow (~10⁻⁴ m/s). Bulb glows instantly! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
