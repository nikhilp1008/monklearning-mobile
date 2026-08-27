/**
 * C11 Ch07 · Section 43 — "Formula recap: every engine of the chapter in one place"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * section_type: formula_recap — opens Subtopic 5 (Consolidation). Reference sheet, accumulates.
 *
 * Beats (en [0, 7.51, 24.83, 40.62, 53.59, 62.55, 77.99, 95.49, 105.47]):
 *  0 heading: the whole chapter's working relations
 *  1 Σ(O.N.) = net charge (7.1: assign any O.N.)
 *  2 electrons lost = electrons gained (7.2: balancing)
 *  3 M₁n₁V₁=M₂n₂V₂, N=M×n (7.3: titration)
 *  4 E°cell = E°cathode − E°anode
 *  5 ΔG° = −nFE°cell, F=96500 C/mol
 *  6 log K = nE°cell/0.0591, Ecell = E°cell − (0.0591/n)log Q
 *  7 red-margin: n-factor memory table
 *  8 closer: same electron-conservation idea, different hat
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1..b6 | formulas (sans16-17) | T mid | x540 bl130/160/190/220/250/280 (pitch 30)
 *  b7 | margin bar x64 y306..360, 2 lines (sans14 red) x80 bl326/350
 *  b8 | closer (sans15 green)   | T mid | x540 bl390
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("one law, many disguises: electron conservation", "ek law, kai roop: electron conservation")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("the whole chapter's working relations", "poore chapter ki working relations")}
        </T>
      </Fade>

      {/* ===== beat 1 — charge balance ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={130} size={16} fill={INK} weight={700}>
          Σ (O.N.) = {t("net charge", "net charge")}   <TSpan fill={MUTED} fontWeight={600}>(7.1)</TSpan>
        </T>
      </Fade>

      {/* ===== beat 2 — electron balance ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={160} size={16} fill={INK} weight={700}>
          {t("electrons lost = electrons gained", "electrons lost = electrons gained")}   <TSpan fill={MUTED} fontWeight={600}>(7.2)</TSpan>
        </T>
      </Fade>

      {/* ===== beat 3 — titration ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={190} size={16} fill={INK} weight={700}>
          M₁n₁V₁ = M₂n₂V₂   ·   N = M×n   <TSpan fill={MUTED} fontWeight={600}>(7.3)</TSpan>
        </T>
      </Fade>

      {/* ===== beat 4 — E°cell ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={220} size={16} fill={INK} weight={700}>
          E°cell = E°cathode − E°anode
        </T>
      </Fade>

      {/* ===== beat 5 — free energy ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={250} size={16} fill={INK} weight={700}>
          ΔG° = −nFE°cell    ·    F = 96500 C mol⁻¹
        </T>
      </Fade>

      {/* ===== beat 6 — equilibrium + Nernst ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={280} size={15} fill={INK} weight={700}>
          log K = nE°cell / 0.0591    ·    Ecell = E°cell − (0.0591/n) log Q
        </T>
      </Fade>

      {/* ===== beat 7 — n-factor memory ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 306 L 64 360" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={326} size={14} fill={RED} weight={700} anchor="start">
          {t("n-factor memory: MnO₄⁻ acid=5/neutral=3 · Cr₂O₇²⁻=6", "n-factor yaad: MnO₄⁻ acid=5/neutral=3 · Cr₂O₇²⁻=6")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={80} y={350} size={14} fill={RED} weight={700} anchor="start">
          C₂O₄²⁻ = 2   ·   Fe²⁺ = 1
        </T>
      </Fade>

      {/* ===== beat 8 — closer ===== */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={390} size={15} fill={GREEN} weight={700}>
          {t("every relation here is electron-conservation wearing a different hat", "yahan har relation electron-conservation hai, bas alag hat pehne")}
        </T>
      </Fade>
    </Scene>
  );
}
