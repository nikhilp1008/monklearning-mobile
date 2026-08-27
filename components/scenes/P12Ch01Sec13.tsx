/**
 * P12Ch01 · Section 13 — "The Two Dependencies: Product of Charges and Inverse Square"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Product of charges dependence: F ∝ |q₁ q₂| (doubling either charge doubles F)
 *  - Distance dependence: F ∝ 1/r² (doubling distance r reduces F to F/4)
 *  - Combined proportional law & force scaling ratio table
 *
 * Beats (en [0, 6, 20, 34, 48, 62, 76, 88]):
 *  0 Title "the two dependencies: charge product & inverse square" + drawn underline
 *  1 Hook note: understanding how charge magnitudes and distance independently scale electrostatic force!
 *  2 Badge 1 & Dependency 1: Charge product scaling F ∝ |q₁ q₂|
 *  3 Badge 2 & Dependency 2: Inverse square distance scaling F ∝ 1/r²
 *  4 Scaling comparison: 2× charge → 2F | 2× distance → F/4 | 2× both → F/2
 *  5 Combined proportionality formula: F = k |q₁ q₂| / r²
 *  6 Ratio trick pro-tip: (F₂/F₁) = (q₁′/q₁)·(q₂′/q₂)·(r₁/r₂)²
 *  7 Grand Verdict: F ∝ |q1 q2| / r² (Independent product & inverse square scaling!)
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
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

export default function P12Ch01Sec13({ currentTime, reveals, language }: SceneProps) {
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
            "the two dependencies: charge product & inverse square",
            "do dependencies: charge product aur inverse square"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 280 70 C 440 66, 640 74, 800 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "how charge magnitudes and distance independently scale electrostatic force!",
            "charge magnitudes aur distance kaise force ko scale karte hain!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Dependency 1 (Charge Product) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("DEPENDENCY 1: Product of Charges F ∝ |q₁ q₂|", "DEPENDENCY 1: Product of Charges F ∝ |q₁ q₂|")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <T x={0} y={25} anchor="start" size={13.5} fill={INK}>
            {t(
              "Double either charge → Force DOUBLES (2F)",
              "Kisi bhi charge ko double karein → Force DOUBLE hota hai (2F)"
            )}
          </T>
          <T x={0} y={55} anchor="start" size={13.5} fill={INK}>
            {t(
              "Double BOTH charges → Force QUADRUPLES (4F)",
              "DONO charges ko double karein → Force 4 TIMES hota hai (4F)"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Dependency 2 (Inverse Square Distance) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("DEPENDENCY 2: Inverse Square Distance F ∝ 1 / r²", "DEPENDENCY 2: Inverse Square Distance F ∝ 1 / r²")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 4}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={13.5} fill={INK}>
            {t(
              "Double distance (2r) → Force drops to ¼ F",
              "Distance double karein (2r) → Force ¼ F ho jata hai"
            )}
          </T>
          <T x={0} y={55} anchor="start" size={13.5} fill={INK}>
            {t(
              "Halve distance (r/2) → Force QUADRUPLES (4F)",
              "Distance half karein (r/2) → Force 4 TIMES (4F) ho jata hai"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Combined Scaling Formula & Master Relation ── */}
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 300)">
          <Rect x={0} y={10} width={430} height={90} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            F = k · (q₁ q₂ / r²)
          </T>
          <T x={215} y={80} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Combine both proportionalities into one exact relation", "Dono proportionalities ko ek exact relation mein combine karein")}
          </T>
          <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 120 56 h 190 M 120 60 h 190" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 6: Ratio Trick Pro-Tip ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(540, 300)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            {t("EXAM RATIO SHORTCUT:", "EXAM RATIO SHORTCUT:")}
          </T>
          <T x={0} y={55} anchor="start" size={18} fill={GREEN} weight={800}>
            (F₂ / F₁) = (q₁′ / q₁) · (q₂′ / q₂) · (r₁ / r₂)²
          </T>
          <T x={0} y={85} anchor="start" size={13} script={true} fill={MUTED}>
            {t("Solves any MCQ scaling question in 10 seconds!", "Kisi bhi MCQ scaling question ko 10 sec mein solve karein!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
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
            "★ VERDICT: F ∝ |q1 q2| / r² (Independent product & inverse square scaling!)",
            "★ VERDICT: F ∝ |q1 q2| / r² (Independent product & inverse square scaling!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
