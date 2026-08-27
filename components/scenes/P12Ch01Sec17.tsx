/**
 * P12Ch01 · Section 17 — "The Superposition Principle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Superposition Principle statement: net force on any charge is the vector sum of individual forces
 *  - Master formula: F_net = F₁ + F₂ + F₃ + ... + F_n = Σ F_i
 *  - Unaffected pairwise property: presence of third charge q₃ does NOT alter force between q₁ and q₂!
 *  - Drawn vector addition triangle / parallelogram showing vector sum F_net
 *
 * Beats (en [0, 6, 16, 30, 44, 58, 72, 84]):
 *  0 Title "the superposition principle" + drawn underline
 *  1 Hook note: finding net electrostatic force when multiple charges act simultaneously!
 *  2 Badge 1 & Superposition Principle statement: F_net = Σ F_i (vector sum)
 *  3 Drawn vector addition diagram showing q₀ acted on by q₁, q₂, q₃
 *  4 Badge 2 & Unaffected Pairwise Property: presence of q₃ NEVER alters pairwise F₁₂!
 *  5 Parallelogram law of vector addition formula: F_net = √(F₁² + F₂² + 2 F₁ F₂ cos θ)
 *  6 Worked vector resolution tip: resolve components along x and y axes!
 *  7 Grand Verdict: F_net = Σ F_i (Vector sum of unaffected pairwise forces!)
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
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

export default function P12Ch01Sec17({ currentTime, reveals, language }: SceneProps) {
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
            "the superposition principle",
            "superposition ka siddhant"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 340 70 C 440 66, 640 74, 740 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "finding net electrostatic force when multiple charges act simultaneously!",
            "multiple charges ek saath act karne par net force nikaalna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Badge 1 & Superposition Master Formula ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("THE SUPERPOSITION PRINCIPLE", "THE SUPERPOSITION PRINCIPLE")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            F_net = F₁ + F₂ + F₃ + ... + F_n
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Net force on any charge is vector sum of individual forces!", "Kisi charge par net force saare forces ka vector sum hota hai!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Vector Addition Diagram (q₀ acted on by q₁, q₂) ── */}
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          {/* Target charge q₀ */}
          <Circle cx={140} cy={60} r={16} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={140} y={66} anchor="middle" size={11} fill={RED} weight={800}>q₀</T>

          {/* Force F₁ vector arrow */}
          <Draw on={beat >= 3} delay={dl(3, 0.5)} d={arrowD(140, 60, 240, 30)} stroke="#0284c7" sw={2.2} />
          <T x={200} y={25} anchor="middle" size={12} fill="#0284c7" weight={800}>F₁</T>

          {/* Force F₂ vector arrow */}
          <Draw on={beat >= 3} delay={dl(3, 0.5)} d={arrowD(140, 60, 220, 110)} stroke="#0284c7" sw={2.2} />
          <T x={190} y={105} anchor="middle" size={12} fill="#0284c7" weight={800}>F₂</T>

          {/* Resultant F_net vector arrow */}
          <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(140, 60, 310, 75)} stroke={RED} sw={2.5} />
          <T x={325} y={80} anchor="start" size={13} fill={RED} weight={800}>F_net</T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Unaffected Pairwise Property ── */}
      <Badge n={2} cx={52} cy={300} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={305} size={14} fill={RED} weight={700} anchor="start">
          {t("UNAFFECTED PAIRWISE PROPERTY", "UNAFFECTED PAIRWISE PROPERTY")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 325)">
          <T x={0} y={20} anchor="start" size={13.5} fill={INK}>
            {t(
              "Presence of a third charge q₃ NEVER alters the force between q₁ and q₂!",
              "Teesra charge q₃ aane se q₁ aur q₂ ke beech ka pairwise force NAHI badalta!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5: Parallelogram Law for 2 Forces ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 325)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={GREEN}>
            Parallelogram Vector Resultant Formula:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={GREEN} weight={800}>
            F_net = √(F₁² + F₂² + 2 F₁ F₂ cos θ)
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
            "★ VERDICT: F_net = Σ F_i (Vector sum of unaffected pairwise forces!)",
            "★ VERDICT: F_net = Σ F_i (Vector sum of unaffected pairwise forces!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
