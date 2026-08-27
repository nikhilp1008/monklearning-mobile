/**
 * P12Ch01 · Section 14 — "Newton's Third Law in Electrostatics"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Action-Reaction pair: F₁₂ = - F₂₁ (equal magnitude, opposite direction)
 *  - Central force property: acts along the line joining the centers of the two point charges
 *  - Drawn vector diagram showing F₁₂ and F₂₁ on charges q₁ and q₂
 *
 * Beats (en [0, 6, 16, 30, 44, 56, 70, 82]):
 *  0 Title "newton's third law in electrostatics" + drawn underline
 *  1 Hook note: electrostatic forces form a perfect action-reaction pair!
 *  2 Badge 1 & Action-Reaction Law: F₁₂ = - F₂₁
 *  3 Vector diagram: q₁ and q₂ with equal & opposite force vectors along line of centers
 *  4 Badge 2 & Central Force property: acts strictly along the line joining charge centers
 *  5 Mass-independence note: force magnitude is EQUAL regardless of charge ratio (q₁ >> q₂)!
 *  6 Acceleration ratio: a₁ / a₂ = m₂ / m₁ (different masses accelerate differently)
 *  7 Grand Verdict: F₁₂ = -F₂₁ (Equal & opposite central force pair!)
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

export default function P12Ch01Sec14({ currentTime, reveals, language }: SceneProps) {
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
            "newton's third law in electrostatics",
            "electrostatics mein newton ka third law"
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
            "electrostatic forces form a perfect action-reaction pair!",
            "electrostatic forces ek perfect action-reaction pair banate hain!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Vector Action-Reaction Relation ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("ACTION-REACTION PAIR", "ACTION-REACTION PAIR")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={26} fill={INK} weight={800}>
            F₁₂ = - F₂₁
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Equal in magnitude, strictly opposite in direction", "Magnitude equal, direction strictly opposite")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 140 56 h 150 M 140 60 h 150" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Vector Diagram Along Line of Centers ── */}
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          {/* Line of Centers */}
          <Line x1={40} y1={50} x2={360} y2={50} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 4" />

          {/* Charge q₁ */}
          <Circle cx={140} cy={50} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={140} y={56} anchor="middle" size={12} fill={RED} weight={800}>q₁</T>

          {/* Force F₁₂ on q₁ */}
          <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(115, 50, 45, 50)} stroke={RED} sw={2.2} />
          <T x={75} y={35} anchor="middle" size={12} fill={RED} weight={800}>F₁₂</T>

          {/* Charge q₂ */}
          <Circle cx={260} cy={50} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={260} y={56} anchor="middle" size={12} fill={RED} weight={800}>q₂</T>

          {/* Force F₂₁ on q₂ */}
          <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(285, 50, 355, 50)} stroke={RED} sw={2.2} />
          <T x={325} y={35} anchor="middle" size={12} fill={RED} weight={800}>F₂₁</T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Central Force Property ── */}
      <Badge n={2} cx={52} cy={300} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={305} size={14} fill={RED} weight={700} anchor="start">
          {t("CENTRAL FORCE PROPERTY", "CENTRAL FORCE PROPERTY")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 325)">
          <T x={0} y={20} anchor="start" size={13.5} fill={INK}>
            {t(
              "Forces act strictly along the line joining the centers of the two charges!",
              "Forces strictly dono charges ke centers ko jodne wali line ke along act karte hain!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5 & 6: Mass-Independence & Acceleration Ratio ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 325)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={AMBER_DARK}>
            {t("Charge Ratio Trap: Even if q₁ = 100 q₂", "Charge Ratio Trap: Chahe q₁ = 100 q₂ ho")}
          </T>
          <T x={0} y={45} anchor="start" size={15} fill={RED} weight={800}>
            |F₁₂| = |F₂₁| (Forces are ALWAYS equal!)
          </T>
          <T x={0} y={75} anchor="start" size={13} fill={GREEN} weight={700}>
            Acceleration ratio: a₁ / a₂ = m₂ / m₁
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
            "★ VERDICT: F₁₂ = -F₂₁ (Equal & opposite central force pair!)",
            "★ VERDICT: F₁₂ = -F₂₁ (Equal & opposite central force pair!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
