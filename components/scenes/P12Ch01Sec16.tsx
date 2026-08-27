/**
 * P12Ch01 · Section 16 — "Building the Vector Form of Coulomb's Law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Position vectors r₁ and r₂ from origin O
 *  - Relative displacement vector r₂₁ = r₂ - r₁
 *  - Unit vector r̂₂₁ = r₂₁ / |r₂₁|
 *  - Vector Coulomb Law: F₂₁ = (k q₁ q₂ / r₂₁²) r̂₂₁
 *
 * Beats (en [0, 6, 18, 32, 42, 54, 66, 78, 92]):
 *  0 Title "building the vector form of coulomb's law" + drawn underline
 *  1 Hook note: forces have direction — writing Coulomb's Law in 3D coordinate space!
 *  2 Position vectors r₁ and r₂ drawn from origin O
 *  3 Badge 1 & Relative displacement vector: r₂₁ = r₂ - r₁
 *  4 Unit vector definition: r̂₂₁ = r₂₁ / |r₂₁|
 *  5 Badge 2 & Vector Coulomb Law: F₂₁ = (k q₁ q₂ / |r₂₁|²) r̂₂₁
 *  6 Unit vector vs magnitude cube form: F₂₁ = (k q₁ q₂ / |r₂₁|³) r₂₁
 *  7 Opposite direction consistency: F₁₂ = - F₂₁ (because r̂₁₂ = - r̂₂₁)
 *  8 Grand Verdict: F₂₁ = (k q₁ q₂ / r₂₁²) r̂₂₁ (3D Vector Coulomb's Law!)
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

export default function P12Ch01Sec16({ currentTime, reveals, language }: SceneProps) {
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
            "building the vector form of coulomb's law",
            "coulomb's law ka vector form"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 300 70 C 440 66, 640 74, 780 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "forces have direction — writing Coulomb's Law in 3D coordinate space!",
            "forces ke paas direction hai — Coulomb's Law ko 3D space mein likhna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Badge 1 & Vector Diagram (Origin O, r₁, r₂, r₂₁) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("DISPLACEMENT VECTOR r₂₁ = r₂ - r₁", "DISPLACEMENT VECTOR r₂₁ = r₂ - r₁")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          {/* Origin O */}
          <Circle cx={40} cy={110} r={4} fill={INK} />
          <T x={30} y={125} anchor="end" size={12} weight={700} fill={INK}>O (Origin)</T>

          {/* Position vector r₁ to q₁ */}
          <Draw on={beat >= 2} delay={dl(2, 0.5)} d={arrowD(40, 110, 140, 40)} stroke="#0284c7" sw={2} />
          <Circle cx={140} cy={40} r={14} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />
          <T x={140} y={45} anchor="middle" size={11} fill={RED} weight={800}>q₁</T>
          <T x={80} y={65} anchor="end" size={11} fill="#0284c7" weight={700}>r₁</T>

          {/* Position vector r₂ to q₂ */}
          <Draw on={beat >= 2} delay={dl(2, 0.5)} d={arrowD(40, 110, 260, 110)} stroke="#0284c7" sw={2} />
          <Circle cx={260} cy={110} r={14} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />
          <T x={260} y={115} anchor="middle" size={11} fill={RED} weight={800}>q₂</T>
          <T x={150} y={125} anchor="middle" size={11} fill="#0284c7" weight={700}>r₂</T>

          {/* Relative displacement vector r₂₁ from q₁ to q₂ */}
          <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(140, 40, 260, 110)} stroke={AMBER_DARK} sw={2.2} />
          <T x={215} y={65} anchor="start" size={12} fill={AMBER_DARK} weight={800}>r₂₁ = r₂ - r₁</T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Badge 2 & Vector Coulomb Law F₂₁ = (k q₁ q₂ / r₂₁²) r̂₂₁ ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("VECTOR COULOMB'S LAW", "VECTOR COULOMB'S LAW")}
        </T>
      </Fade>

      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 185)">
          <Rect x={0} y={10} width={450} height={90} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            F₂₁ = (k q₁ q₂ / |r₂₁|²) r̂₂₁
          </T>
          <T x={225} y={80} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("where unit vector r̂₂₁ = r₂₁ / |r₂₁|", "jahan unit vector r̂₂₁ = r₂₁ / |r₂₁|")}
          </T>
          <Draw on={beat >= 5} delay={dl(5, 1.6)} d="M 120 56 h 210 M 120 60 h 210" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 6: Cube Form Equivalent ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(60, 330)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill="#0369a1">
            {t("Cube Form Equivalent:", "Cube Form Equivalent:")}
          </T>
          <T x={200} y={20} anchor="start" size={18} fill="#0369a1" weight={800}>
            F₂₁ = (k q₁ q₂ / |r₂₁|³) r₂₁
          </T>
          <T x={0} y={50} anchor="start" size={12.5} script={true} fill={MUTED}>
            {t("Note denominator power becomes 3 when using full vector r₂₁ instead of unit vector r̂₂₁!", "Full vector r₂₁ use karne par denominator power 3 ho jaati hai!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Newton's Third Law Consistency ── */}
      <Fade on={beat >= 7} dim={beat >= 8}>
        <G transform="translate(540, 330)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={GREEN}>
            {t("Consistency with Newton's 3rd Law:", "Consistency with Newton's 3rd Law:")}
          </T>
          <T x={0} y={50} anchor="start" size={16} fill={GREEN} weight={800}>
            r̂₁₂ = - r̂₂₁  ⇒  F₁₂ = - F₂₁
          </T>
        </G>
      </Fade>

      {/* ── BEAT 8: Grand Verdict Chip ── */}
      <Fade on={beat >= 8}>
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
            "★ VERDICT: F₂₁ = (k q₁ q₂ / r₂₁²) r̂₂₁ (3D Vector Coulomb's Law!)",
            "★ VERDICT: F₂₁ = (k q₁ q₂ / r₂₁²) r̂₂₁ (3D Vector Coulomb's Law!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
