/**
 * P12Ch01 · Section 22 — "Worked Example: Force From a Charged Rod by Integration"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Uniformly charged thin rod of length L and total charge Q (linear charge density λ = Q/L)
 *  - Point charge q₀ placed at distance a from one end along axial line
 *  - Infinitesimal charge element dq = λ dx = (Q/L) dx at position x
 *  - Differential force dF = k q₀ dq / x² = k q₀ (Q/L) dx / x²
 *  - Integration limits from x = a to x = a + L
 *  - Integrated Force: F = ∫[a → a+L] k q₀ (Q/L) dx / x² = k q₀ Q / [a(a + L)]
 *
 * Beats (en [0, 6, 18, 32, 44, 56, 68, 82, 92, 102]):
 *  0 Title "worked example: force from charged rod by integration" + drawn underline
 *  1 Hook note: applying calculus integration for continuous charge distributions!
 *  2 Badge 1 & Continuous setup: Rod length L, charge Q (λ = Q/L), point charge q₀ at distance a
 *  3 Drawn axial rod geometry with element dq at position x
 *  4 Badge 2 & Differential Force dF = k q₀ dq / x² = k q₀ (Q/L) (dx / x²)
 *  5 Integration limits x = a to x = a + L
 *  6 Integration step: ∫ dx/x² = -1/x evaluated from a to a+L
 *  7 Integrated Result: F = k q₀ Q / [a(a + L)]
 *  8 Limiting check for a >> L: F ≈ k q₀ Q / a² (rod acts like point charge!)
 *  9 Grand Verdict: F = k q₀ Q / [a(a + L)] (Integrated axial force!)
 */

import React from "react";
import { Circle, G, Line, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
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

export default function P12Ch01Sec22({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: force from charged rod by integration",
            "worked example: charged rod se force integration dwara"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 240 70 C 440 66, 640 74, 840 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "applying calculus integration for continuous charge distributions!",
            "continuous charge distribution par calculus integration apply karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Badge 1 & Drawn Charged Rod ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("CONTINUOUS ROD GEOMETRY", "CONTINUOUS ROD GEOMETRY")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          {/* Rod */}
          <Rect x={120} y={40} width={160} height={16} rx={4} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={200} y={32} anchor="middle" size={11} fill={RED} weight={800}>Rod length L, charge Q (λ = Q/L)</T>

          {/* Differential element dq = dx */}
          <Rect x={180} y={40} width={12} height={16} fill={RED} />
          <T x={186} y={72} anchor="middle" size={10} fill={RED} weight={800}>dq = λ dx</T>

          {/* Point charge q₀ */}
          <Circle cx={40} cy={48} r={12} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />
          <T x={40} y={52} anchor="middle" size={10} fill={RED} weight={800}>q₀</T>

          {/* Distance labels */}
          <Line x1={40} y1={90} x2={120} y2={90} stroke="#475569" strokeWidth={1.2} />
          <T x={80} y={85} anchor="middle" size={11} fill={MUTED}>a</T>

          <Line x1={40} y1={110} x2={186} y2={110} stroke="#475569" strokeWidth={1.2} strokeDasharray="3 3" />
          <T x={113} y={105} anchor="middle" size={11} fill={AMBER_DARK}>x</T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Badge 2 & Differential Force dF ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("DIFFERENTIAL FORCE & INTEGRATION", "DIFFERENTIAL FORCE & INTEGRATION")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            dF = k q₀ dq / x² = k q₀ (Q/L) (dx / x²)
          </T>
          <T x={0} y={60} anchor="start" size={13.5} fill={AMBER_DARK} weight={700}>
            Limits: x = a to x = a + L
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Integrated Result Master Formula ── */}
      <Fade on={beat >= 7} dim={beat >= 9}>
        <G transform="translate(60, 320)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            F = k q₀ Q / [ a (a + L) ]
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Exact axial force on point charge q₀ from charged rod!", "Point charge q₀ par charged rod ka exact axial force!")}
          </T>
          <Draw on={beat >= 7} delay={dl(7, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 8: Limiting Check for a >> L ── */}
      <Fade on={beat >= 8} dim={beat >= 9}>
        <G transform="translate(540, 320)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={GREEN}>
            {t("Limiting Check for a >> L:", "Limiting Check for a >> L:")}
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={GREEN} weight={800}>
            F ≈ k q₀ Q / a²  (behaves as point charge!)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 9: Grand Verdict Chip ── */}
      <Fade on={beat >= 9}>
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
            "★ VERDICT: F = k q₀ Q / [a(a + L)] (Integrated axial force!)",
            "★ VERDICT: F = k q₀ Q / [a(a + L)] (Integrated axial force!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
