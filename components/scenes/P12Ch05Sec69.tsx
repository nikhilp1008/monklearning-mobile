/**
 * P12Ch05 · Section 69 — "Chapter 5 Grand Synthesis: Bar Magnet, Earth's Field & Materials"
 * Subtopic: Electromagnets, Retentivity, Coercivity & Chapter Close
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

export default function P12Ch05Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Chapter 5 Grand Synthesis: Magnetism & Matter", "Chapter 5 Grand Synthesis: Magnetism & Matter")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Pillar 1 & Pillar 2 */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("PILLAR 1: BAR MAGNET & PILLAR 2: EARTH'S FIELD", "PILLAR 1: BAR MAGNET & PILLAR 2: EARTH'S FIELD")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={14} fill={INK} weight={800}>
            Dipole: m = NIA, τ = m × B, U = −m · B
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            Earth: B_H = B_E cos I, tan I = 2 tan λ, cot² δ = cot² δ₁ + cot² δ₂
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Pillar 3 & Pillar 4 */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("PILLAR 3: MATERIALS & PILLAR 4: GAUSS'S LAW", "PILLAR 3: MATERIALS & PILLAR 4: GAUSS'S LAW")}
        </T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={14} fill={INK} weight={800}>
            Materials: B = μ₀(H + M), μ_r = 1 + χ, χ_para = C/T
          </T>
          <T x={240} y={52} anchor="middle" size={14} fill={GREEN} weight={800}>
            Gauss's Law: ∮ B · dA = 0 (No monopoles, closed loops!)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Complete Mastery Synthesis */}
      <Badge n={3} cx={52} cy={340} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={345} size={14} fill={RED} weight={700} anchor="start">
          {t("CHAPTER 5 COMPLETE MASTERY SYNTHESIS", "CHAPTER 5 COMPLETE MASTERY SYNTHESIS")}
        </T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 360)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            All 70 sections of Magnetism & Matter synthesized: Dipoles, Earth's Field, Dia/Para/Ferro, Hysteresis, and Gauss's Law!
          </T>
        </G>
      </Fade>

      {/* Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={490} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Chapter 5 Synthesis: Mastered bar magnets, Earth's field elements, material classification, hysteresis and Gauss's law! ✓",
            "★ Chapter 5 Synthesis: Bar magnets, Earth's field elements, material classification, hysteresis aur Gauss's law mastered! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
