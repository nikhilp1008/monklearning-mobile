/**
 * P12Ch01 · Section 10 — "Worked Example: Repeated Contact and Geometric Decay"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem setup: Sphere A (Q₀) touches N identical neutral spheres sequentially
 *  - Contact 1: Q₁ = Q₀ / 2
 *  - Contact 2: Q₂ = Q₀ / 4
 *  - Contact N: Q_N = Q₀ / (2^N)
 *  - Drawn exponential halving geometric decay curve
 *
 * Beats (en [0, 6, 18, 32, 46, 60, 74, 86]):
 *  0 Title "worked example: repeated contact & geometric decay" + drawn underline
 *  1 Hook note: what happens when a charged sphere touches N neutral spheres in a row?
 *  2 Badge 1 & Problem statement: Sphere A (Q₀) touches N neutral spheres sequentially
 *  3 Step-by-step halving chain: Q₁ = Q₀/2, Q₂ = Q₀/4, Q₃ = Q₀/8
 *  4 Badge 2 & General formula: Q_N = Q₀ / 2ᴺ
 *  5 Numerical example: N = 5 touches → Q₅ = Q₀ / 32 = 3.125% of Q₀
 *  6 Drawn geometric decay curve (1 → 1/2 → 1/4 → 1/8 → 1/16 → 1/32)
 *  7 Grand Verdict: Q_N = Q₀ / 2ᴺ (Geometric halving sequence after N touches!)
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

export default function P12Ch01Sec10({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: repeated contact & geometric decay",
            "worked example: repeated contact & geometric decay"
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
            "what happens when a charged sphere touches N neutral spheres in a row?",
            "kya hota hai jab ek charged sphere N neutral spheres ko ek-ek karke touch kare?"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Problem Setup ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PROBLEM SETUP", "PROBLEM SETUP")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <T x={0} y={20} anchor="start" size={13} fill={INK}>
            {t(
              "Sphere A has initial charge Q₀. Touches N identical neutral spheres sequentially.",
              "Sphere A ka initial charge Q₀ hai. N identical neutral spheres ko sequentially touch karta hai."
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Step-by-Step Halving Chain ── */}
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(60, 240)">
          <T x={0} y={16} anchor="start" size={13.5} weight={700} fill="#0369a1">
            {t("Sequential Halving Steps:", "Sequential Halving Steps:")}
          </T>
          <T x={0} y={45} anchor="start" size={13} fill={INK}>
            Touch 1: Q₁ = Q₀ / 2
          </T>
          <T x={140} y={45} anchor="start" size={13} fill={INK}>
            Touch 2: Q₂ = Q₀ / 4
          </T>
          <T x={280} y={45} anchor="start" size={13} fill={INK}>
            Touch 3: Q₃ = Q₀ / 8
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & General Geometric Formula Q_N = Q₀ / 2ᴺ ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("GENERAL GEOMETRIC FORMULA", "GENERAL GEOMETRIC FORMULA")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(540, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            Q_N = Q₀ / 2ᴺ
          </T>
          <T x={215} y={76} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("after N sequential contacts with identical neutral spheres", "identical neutral spheres ke N contacts ke baad")}
          </T>
          <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 140 55 h 150 M 140 59 h 150" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 5: Numerical Example N = 5 ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(60, 315)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            {t("Example: N = 5 touches", "Example: N = 5 touches")}
          </T>
          <T x={0} y={50} anchor="start" size={16} fill={GREEN} weight={800}>
            Q₅ = Q₀ / 2⁵ = Q₀ / 32 = 3.125% of Q₀
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Drawn Geometric Decay Curve ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(540, 315)">
          <T x={0} y={16} anchor="start" size={13} weight={700} fill="#0369a1">
            {t("Exponential Geometric Decay Curve:", "Exponential Geometric Decay Curve:")}
          </T>

          {/* Axes */}
          <Line x1={40} y1={40} x2={40} y2={120} stroke="#64748b" strokeWidth={1.5} />
          <Line x1={40} y1={120} x2={360} y2={120} stroke="#64748b" strokeWidth={1.5} />

          {/* Curve */}
          <Draw
            on={beat >= 6}
            delay={dl(6, 0.5)}
            d="M 40 45 Q 120 100, 350 118"
            stroke={RED}
            sw={2.2}
            dur={0.9}
          />
          <T x={360} y={115} anchor="start" size={10} fill={MUTED}>N</T>
          <T x={40} y={32} anchor="middle" size={10} fill={MUTED}>Q</T>
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
            "★ VERDICT: Q_N = Q₀ / 2ᴺ (Geometric halving sequence after N touches!)",
            "★ VERDICT: Q_N = Q₀ / 2ᴺ (Geometric halving sequence after N touches!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
