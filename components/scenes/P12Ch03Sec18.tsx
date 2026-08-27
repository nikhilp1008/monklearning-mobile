/**
 * P12Ch02 · Section 18 — "Why copper conducts and rubber blocks"
 * Beats (en [0,8,19,29,39,52,60,74]): 8 beats
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

export default function P12Ch03Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Why copper conducts and rubber blocks", "Why copper conducts and rubber blocks")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CARRIER DENSITY CONTROLS CONDUCTIVITY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CARRIER DENSITY n CONTROLS CONDUCTIVITY", "CARRIER DENSITY n CONTROLS CONDUCTIVITY")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Master Relation: ρ = m / (n e² τ)
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Electron Pool: n = free electron density (carriers per m³).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Relaxation Time τ: Mean time between electron-ion collisions.
          </T>

          <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Key Insight: Variation in n spans over 24 orders of magnitude!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Free electron concentration n dictates if material is conductor or insulator)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: METALS VS INSULATORS COMPARISON */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("METALS VS INSULATORS COMPARISON", "METALS VS INSULATORS COMPARISON")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={GREEN} weight={800} anchor="start">
            1. Copper (Conductor): Huge n ≈ 8.5×10²⁸ m⁻³  ⇒  Tiny ρ ≈ 1.7×10⁻⁸ Ω·m.
          </T>

          <T x={45} y={125} size={14} fill={RED} weight={800} anchor="start">
            2. Rubber (Insulator): Negligible n ≈ 0 (tightly bound e⁻)  ⇒  Huge ρ &gt; 10¹⁶ Ω·m.
          </T>

          <T x={45} y={170} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            3. Semiconductors (Silicon): Intermediate n ~ 10¹⁶ m⁻³ (tunable by doping).
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Vast Contrast: Resistivity ratio ρ_insulator / ρ_metal ~ 10²⁴ !
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (One of the widest physical property spectrums in all of physics)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MATERIAL RESISTIVITY VERDICT", "MATERIAL RESISTIVITY VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Copper conducts electricity because every atom donates ~1 free electron, creating an ocean of charge carriers.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Rubber blocks electricity because all electrons are firmly trapped in covalent bonds with virtually zero free carriers.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Span of 24 orders of magnitude in resistivity between copper and rubber! ✓",
            "★ Span of 24 orders of magnitude in resistivity between copper and rubber! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
