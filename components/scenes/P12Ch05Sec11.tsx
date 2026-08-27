/**
 * P12Ch05 · Section 11 — "Board level: torque, energy and work at thirty degrees"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: a different worked example entirely —
 * m = 0.40 A m², B = 0.16 T, giving τ = 0.032 N m and U = −0.055 J, and a
 * part (c) that asked for the work to flip 0° → 180° (W = 2mB = 0.128 J).
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: m = 4.5 A m², B = 0.30 T, θ = 30°, and
 * a part (c) that asks for the work from 30° to 90°. Every number on the board
 * is now recomputed from the spoken givens, around the shared product m B:
 *     m B  = 4.5 × 0.30                       = 1.35
 *     (a)  τ = m B sin θ  = 1.35 × 0.5        = 0.675 N m
 *     (b)  U = − m B cos θ = −1.35 × 0.866    = −1.17 J
 *     (c)  W = m B (cos θ₁ − cos θ₂)
 *            = 1.35 (cos 30° − cos 90°)
 *            = 1.35 × 0.866                   = 1.17 J
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "spot the one product all three share"   title + underline
 *   1  "magnet tilted 30° in a uniform field"   set-up diagram
 *   2  "we are given… three things are asked"   givens + the three asks
 *   3  "part a — torque"                        m B = 1.35, then τ = 0.675 N m
 *   4  "part b — potential energy"              U = −1.17 J
 *   5  "part c — work 30° → 90°"                W = 1.17 J
 *   6  "the presentation habit that earns marks" units on every line, keep the sign
 *   7  "what the minus sign is saying"          U(θ) curve + 30° below the 90° zero
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Torque, energy and work — all from one product",
             "Torque, energy and work — all from one product")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 62 C 480 58, 660 66, 830 60" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the set-up ---------------- */}
      <G transform="translate(50, 86)">
        <Fade on={beat >= 1} delay={dl(1, 0.2)}>
          <T x={20} y={20} size={13} fill={GREEN} weight={800} anchor="start">
            {t("uniform field B, horizontal", "uniform field B, horizontal")}
          </T>
        </Fade>
        <Draw on={beat >= 1} delay={dl(1, 0.5)} d={arrowD(20, 36, 420, 36)} stroke={GREEN} sw={1.9} dur={0.7} />
        <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(20, 190, 420, 190)} stroke={GREEN} sw={1.9} dur={0.7} />

        {/* the magnet, tilted 30° above the field */}
        <Fade on={beat >= 1} delay={dl(1, 1.0)}>
          <G transform="rotate(-30 200 110)">
            <Rect x={130} y={96} width={70} height={28} fill={CREAM} stroke={INK} strokeWidth={2} />
            <Rect x={200} y={96} width={70} height={28} fill="#fdece9" stroke={INK} strokeWidth={2} />
            <T x={165} y={115} size={13} fill={INK} weight={800}>S</T>
            <T x={235} y={115} size={13} fill={RED} weight={800}>N</T>
          </G>
        </Fade>

        {/* the moment arrow */}
        <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(200, 110, 302, 51)} stroke={RED} sw={2.6} dur={0.6} />
        <Fade on={beat >= 1} delay={dl(1, 1.9)}>
          <T x={312} y={46} size={13} fill={RED} weight={800} anchor="start">m</T>
        </Fade>

        {/* the angle */}
        <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 266 110 A 66 66 0 0 0 257.2 77" stroke={AMBER_DARK} sw={2} dur={0.4} />
        <Fade on={beat >= 1} delay={dl(1, 2.4)}>
          <T x={280} y={98} size={13} fill={AMBER_DARK} weight={800} anchor="start">θ = 30°</T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 2.7)}>
          <T x={20} y={218} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("moment m tilted up and to the right, field running horizontally",
               "moment m tilted up and to the right, field running horizontally")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 2–5 — the working ---------------- */}
      <G transform="translate(560, 86)">
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          <T x={0} y={16} size={14} fill={RED} weight={800} anchor="start">
            {t("GIVEN, AND WHAT IS ASKED", "GIVEN, AND WHAT IS ASKED")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.6)}>
          <T x={0} y={46} size={14.5} fill={INK} weight={800} anchor="start">
            m = 4.5 A m²   ·   B = 0.30 T   ·   θ = 30°
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.0)}>
          <T x={0} y={72} size={13} fill={AMBER_DARK} weight={700} anchor="start">
            {t("(a) the torque   (b) the potential energy   (c) the work 30° → 90°",
               "(a) the torque   (b) the potential energy   (c) the work 30° → 90°")}
          </T>
        </Fade>

        {/* the shared product */}
        <Draw on={beat >= 3} delay={dl(3, 0.15)} d="M 0 92 L 470 92" stroke={MUTED} sw={1.5} dur={0.5} />
        <Fade on={beat >= 3} delay={dl(3, 0.4)}>
          <T x={0} y={120} size={15} fill={GREEN} weight={900} anchor="start">
            {t("the shared product:  m B = 4.5 × 0.30 = 1.35",
               "the shared product:  m B = 4.5 × 0.30 = 1.35")}
          </T>
        </Fade>

        <Fade on={beat >= 3} delay={dl(3, 0.9)}>
          <T x={0} y={156} size={14.5} fill={INK} weight={800} anchor="start">
            (a)  τ = m B sin θ = 1.35 × 0.5 = 0.675 N m
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 0.3)}>
          <T x={0} y={190} size={14.5} fill={INK} weight={800} anchor="start">
            (b)  U = − m B cos θ = −1.35 × 0.866 = −1.17 J
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.3)}>
          <T x={0} y={224} size={14.5} fill={INK} weight={800} anchor="start">
            (c)  W = m B (cos θ₁ − cos θ₂)
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.8)}>
          <T x={0} y={250} size={14.5} fill={INK} weight={800} anchor="start">
            {"      = 1.35 (0.866 − 0) = 1.17 J"}
          </T>
        </Fade>
      </G>

      {/* ---------------- beat 6 — presentation habits ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={50} y={352} size={14} fill={RED} weight={800} anchor="start">
          {t("THE PRESENTATION HABITS THAT EARN THE MARKS", "THE PRESENTATION HABITS THAT EARN THE MARKS")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={50} y={382} size={13.5} fill={INK} weight={700} anchor="start">
          {t("carry the unit through every single line — never bolt it on at the end",
             "carry the unit through every single line — never bolt it on at the end")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={50} y={406} size={13.5} fill={INK} weight={700} anchor="start">
          {t("and never quietly drop the minus sign on U just because it looks odd",
             "and never quietly drop the minus sign on U just because it looks odd")}
        </T>
      </Fade>

      {/* ---------------- beat 7 — what the minus sign says ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={50} y={446} size={14} fill={RED} weight={800} anchor="start">
          {t("WHAT THAT MINUS SIGN IS SAYING", "WHAT THAT MINUS SIGN IS SAYING")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={50} y={476} size={13.5} fill={INK} weight={700} anchor="start">
          {t("30° sits below the 90° reference, where we set the energy to zero",
             "30° sits below the 90° reference, where we set the energy to zero")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={50} y={502} size={13.5} fill={GREEN} weight={800} anchor="start">
          {t("so the dipole is in a lower-energy, more favourable orientation",
             "so the dipole is in a lower-energy, more favourable orientation")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={50} y={528} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("drop the sign and you are claiming exactly the opposite",
             "drop the sign and you are claiming exactly the opposite")}
        </T>
      </Fade>

      {/* the U(θ) curve, with 30° marked below the zero line */}
      <G transform="translate(660, 424)">
        <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 0 60 L 330 60" stroke={MUTED} sw={1.5} dur={0.5} />
        <Fade on={beat >= 7} delay={dl(7, 0.8)}>
          <T x={342} y={64} size={12.5} fill={MUTED} weight={700} anchor="start">U = 0</T>
        </Fade>
        <Draw on={beat >= 7} delay={dl(7, 0.9)}
          d="M 0 100 C 55 100, 110 79, 165 60 C 220 41, 275 20, 330 20"
          stroke={INK} sw={2.2} dur={1.1} />
        <Fade on={beat >= 7} delay={dl(7, 1.9)}>
          <Circle cx={56} cy={94} r={5} fill={RED} />
          <T x={72} y={90} size={12.5} fill={RED} weight={800} anchor="start">U = −1.17 J</T>
        </Fade>
        <Fade on={beat >= 7} delay={dl(7, 2.2)}>
          <T x={0} y={120} size={12.5} fill={MUTED} weight={700} anchor="start">0°</T>
          <T x={165} y={120} size={12.5} fill={MUTED} weight={700}>90°</T>
          <T x={330} y={120} size={12.5} fill={MUTED} weight={700} anchor="end">180°</T>
        </Fade>
      </G>

      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <Chip x={40} y={552} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ m B = 1.35 · τ = 0.675 N m · U = −1.17 J · W(30° → 90°) = 1.17 J",
             "★ m B = 1.35 · τ = 0.675 N m · U = −1.17 J · W(30° → 90°) = 1.17 J")}
        </Chip>
      </Fade>
    </Scene>
  );
}
