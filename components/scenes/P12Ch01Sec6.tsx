/**
 * P12Ch01 · Section 6 — "The Gold-Leaf Electroscope and Why Quantisation Hides"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Detailed drawn Gold-Leaf Electroscope (glass jar, metal disc, rod, gold leaves diverging with angle θ)
 *  - Calculation card: 1 µC = 6.25 × 10¹² electrons (6.25 trillion electrons!)
 *  - 1 in 6 trillion grain size comparison note showing why charge feels continuous
 *
 * Beats (en [0, 6, 16, 30, 42, 54, 66, 82]):
 *  0 Title "the gold-leaf electroscope & quantisation scale" + drawn underline
 *  1 Hook note: detect charge + why quantisation grain size hides
 *  2 Badge 1 & Gold-Leaf Electroscope apparatus drawing
 *  3 Charge conduction down rod & divergence angle θ ∝ Q
 *  4 Badge 2 & Macro scale calculation: 1 µC = 6.25 × 10¹² electrons!
 *  5 1 electron change = 1 part in 6 trillion (utterly undetectable → smooth fluid)
 *  6 Grand Verdict: θ ∝ Q | 1 µC ≈ 6 Trillion e⁻ (smooth macro scale!)
 */

import React from "react";
import { G, Line, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "the gold-leaf electroscope & quantisation scale",
            "gold-leaf electroscope aur quantisation scale"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 320 70 C 440 66, 640 74, 760 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "how to detect & measure charge — plus why quantum grains feel smooth in real life!",
            "charge kaise detect karein — aur quantum grains real life mein smooth kyun lagte hain!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Drawn Gold-Leaf Electroscope ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("THE GOLD-LEAF ELECTROSCOPE", "THE GOLD-LEAF ELECTROSCOPE")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          {/* Glass Jar Outline */}
          <Rect x={120} y={40} width={120} height={160} rx={12} fill="#f8fafc" stroke="#94a3b8" strokeWidth={1.8} />

          {/* Metal Disc Top Knob */}
          <Rect x={155} y={15} width={50} height={10} rx={3} fill="#cbd5e1" stroke="#475569" strokeWidth={1.5} />

          {/* Central Metal Rod */}
          <Line x1={180} y1={25} x2={180} y2={140} stroke="#475569" strokeWidth={2.5} />

          {/* Diverging Gold Leaves */}
          <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 180 140 L 155 175" stroke="#eab308" sw={3} />
          <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 180 140 L 205 175" stroke="#eab308" sw={3} />

          {/* Divergence Angle Arc */}
          <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 165 160 A 20 20 0 0 1 195 160" stroke={RED} sw={1.5} />
          <T x={180} y={155} anchor="middle" size={10} fill={RED}>θ</T>

          <T x={300} y={75} anchor="start" size={12} fill={INK}>
            {t("Metal Disc + Rod + Gold Leaves", "Metal Disc + Rod + Gold Leaves")}
          </T>
          <T x={300} y={115} anchor="start" size={13} script={true} fill={RED}>
            {t("Same sign charge ⇒ Leaves diverge by θ!", "Same sign charge ⇒ Leaves diverge hongi!")}
          </T>
          <T x={300} y={150} anchor="start" size={13} weight={700} fill={GREEN}>
            {t("Divergence angle θ ∝ charge Q", "Divergence angle θ ∝ charge Q")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Why Quantisation Hides at Macro Scale ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("WHY QUANTISATION HIDES AT MACRO SCALE", "MACRO SCALE PAR QUANTISATION KYUN CHHIPTA HAI")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <Rect x={0} y={10} width={450} height={100} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />

          <T x={225} y={42} anchor="middle" size={18} weight={800} fill={INK}>
            1 µC = 6.25 × 10¹² e⁻
          </T>
          <T x={225} y={72} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            {t("(6.25 Trillion Electrons in just 1 microcoulomb!)", "(1 microcoulomb mein 6.25 Trillion Electrons!)")}
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.4)} d={ringD(225, 40, 220, 16)} stroke={AMBER_DARK} sw={1.8} />
        </G>
      </Fade>

      {/* ── BEAT 5: 1 Electron Change Grain Size Comparison ── */}
      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(540, 315)">
          <T x={0} y={20} anchor="start" size={13} script={true} fill={INK}>
            {t(
              "Adding 1 electron changes total by 1 part in 6 trillion!",
              "1 electron add karne se sirf 1 in 6 trillion shift hota hai!"
            )}
          </T>
          <T x={0} y={50} anchor="start" size={13.5} script={true} fill={RED}>
            {t(
              "Utterly undetectable → Charge feels like a continuous smooth fluid!",
              "Detect karna impossible → Charge continuous smooth fluid lagta hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Grand Verdict Chip ── */}
      <Fade on={beat >= 6}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: θ ∝ Q (Electroscope) | 1 µC ≈ 6 Trillion e⁻ (Smooth at macro scale!)",
            "★ VERDICT: θ ∝ Q (Electroscope) | 1 µC ≈ 6 Trillion e⁻ (Smooth at macro scale!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
