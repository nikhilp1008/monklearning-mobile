/**
 * P12Ch05 · Section 15 — "Pitfalls: swapped fields, lost signs and phantom forces"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: it kept the axial/equatorial swap and the
 * phantom-force trap, but replaced the other two slips with 1/r³, monopole and
 * magnet-cutting items — and it never drew the τ(θ) / U(θ) graphs that the
 * voice points at twice ("the graphs make that impossible to forget", "the
 * graph shows exactly why").
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: four slips, in this order —
 *   1 swapping axial and equatorial (2× and along m, vs smaller and opposite)
 *   2 losing the minus sign in U (0° must come out LOWEST)
 *   3 confusing where τ and U are extremal (90° vs 0°/180°)
 *   4 believing a uniform field pushes the magnet along (F_net = 0)
 * then two exam habits: the 2:1 ratio at equal distance, and the
 * pole-strength / pole-separation question for any cut or bend.
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "four slips that cost marks"        title + underline
 *   1  "look at this picture first"        τ(θ) and U(θ) graphs
 *   2  "swapping axial and equatorial"     slip 1
 *   3  "losing the minus sign in U"        slip 2
 *   4  "where torque and energy are extremal" slip 3 + pointer at the graphs
 *   5  "a uniform field pushes it along"   slip 4
 *   6  "habit one — the 2:1 ratio"         green margin note
 *   7  "habit two — cutting and bending"   amber margin note
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const slip = (k: number, y: number, tag: string, l1: string, l2: string, l2Fill = INK) => (
    <G>
      <Fade on={beat >= k} delay={dl(k, 0.3)}>
        <T x={50} y={y} size={14} fill={RED} weight={800} anchor="start">{tag}</T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 0.8)}>
        <T x={50} y={y + 26} size={13} fill={INK} weight={700} anchor="start">{l1}</T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 1.3)}>
        <T x={50} y={y + 50} size={13} fill={l2Fill} weight={700} anchor="start">{l2}</T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Four slips — none of them difficult physics",
             "Four slips — none of them difficult physics")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 260 62 C 480 58, 660 66, 820 60" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the two graphs ---------------- */}
      <G transform="translate(600, 92)">
        <Fade on={beat >= 1} delay={dl(1, 0.2)}>
          <T x={40} y={16} size={13} fill={GREEN} weight={800} anchor="start">τ = m B sin θ</T>
        </Fade>
        <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 40 100 L 380 100" stroke={INK} sw={1.7} dur={0.5} />
        <Draw on={beat >= 1} delay={dl(1, 0.9)}
          d="M 40 100 C 96 56, 152 40, 210 40 C 268 40, 324 56, 380 100"
          stroke={GREEN} sw={2.4} dur={1.1} />
        <Fade on={beat >= 1} delay={dl(1, 1.9)}>
          <Circle cx={210} cy={40} r={4.5} fill={GREEN} />
          <T x={210} y={30} size={12.5} fill={GREEN} weight={800}>max</T>
          <T x={40} y={120} size={12.5} fill={MUTED} weight={700} anchor="start">0°</T>
          <T x={210} y={120} size={12.5} fill={MUTED} weight={700}>90°</T>
          <T x={380} y={120} size={12.5} fill={MUTED} weight={700} anchor="end">180°</T>
        </Fade>
      </G>

      <G transform="translate(600, 250)">
        <Fade on={beat >= 1} delay={dl(1, 2.3)}>
          <T x={40} y={16} size={13} fill={RED} weight={800} anchor="start">U = − m B cos θ</T>
        </Fade>
        <Draw on={beat >= 1} delay={dl(1, 2.6)} d="M 40 76 L 380 76" stroke={MUTED} sw={1.5} dur={0.5} />
        <Fade on={beat >= 1} delay={dl(1, 3.0)}>
          <T x={392} y={80} size={12.5} fill={MUTED} weight={700} anchor="start">U = 0</T>
        </Fade>
        <Draw on={beat >= 1} delay={dl(1, 3.1)}
          d="M 40 118 C 96 116, 152 100, 210 76 C 268 52, 324 36, 380 34"
          stroke={RED} sw={2.4} dur={1.1} />
        <Fade on={beat >= 1} delay={dl(1, 4.1)}>
          <Circle cx={40} cy={118} r={4.5} fill={RED} />
          <T x={48} y={136} size={12.5} fill={RED} weight={800} anchor="start">min at 0°</T>
          <Circle cx={380} cy={34} r={4.5} fill={RED} />
          <T x={374} y={26} size={12.5} fill={RED} weight={800} anchor="end">max at 180°</T>
        </Fade>
      </G>

      {/* ---------------- beats 2–5 — the four slips ---------------- */}
      {slip(2, 108,
        t("✗ 1   SWAPPING AXIAL AND EQUATORIAL", "✗ 1   SWAPPING AXIAL AND EQUATORIAL"),
        t("axial is twice the equatorial at equal distance, and points along m",
          "axial is twice the equatorial at equal distance, and points along m"),
        t("equatorial is the smaller one, and it points opposite to m",
          "equatorial is the smaller one, and it points opposite to m"))}

      {slip(3, 196,
        t("✗ 2   LOSING THE MINUS SIGN IN U", "✗ 2   LOSING THE MINUS SIGN IN U"),
        t("write U = + m B cos θ and stable and unstable equilibria swap places",
          "write U = + m B cos θ and stable and unstable equilibria swap places"),
        t("0° must always come out as the LOWEST energy",
          "0° must always come out as the LOWEST energy"), RED)}

      {slip(4, 284,
        t("✗ 3   WHERE τ AND U ARE EXTREMAL", "✗ 3   WHERE τ AND U ARE EXTREMAL"),
        t("torque: maximum at 90°, and zero at both 0° and 180°",
          "torque: maximum at 90°, and zero at both 0° and 180°"),
        t("energy: minimum at 0°, maximum at 180° — different places",
          "energy: minimum at 0°, maximum at 180° — different places"))}

      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={arrowD(560, 330, 622, 302)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />

      {slip(5, 372,
        t("✗ 4   “A UNIFORM FIELD PUSHES IT ALONG”", "✗ 4   “A UNIFORM FIELD PUSHES IT ALONG”"),
        t("it does not — in a uniform field the net force is exactly zero, only a torque acts",
          "it does not — in a uniform field the net force is exactly zero, only a torque acts"),
        t("a net translational force always requires a NON-uniform field",
          "a net translational force always requires a NON-uniform field"), GREEN)}

      {/* ---------------- beat 6 — habit one ---------------- */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 66 444 v 44" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={84} y={462} size={14} fill={GREEN} weight={800} anchor="start">
          {t("habit 1 · comparing two fields at the same distance? never plug numbers in at all —",
             "habit 1 · comparing two fields at the same distance? never plug numbers in at all —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={84} y={486} size={14} fill={GREEN} weight={800} anchor="start">
          {t("just use the two-to-one ratio and answer in seconds",
             "just use the two-to-one ratio and answer in seconds")}
        </T>
      </Fade>

      {/* ---------------- beat 7 — habit two ---------------- */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 66 500 v 48" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={84} y={518} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          {t("habit 2 · for any cutting or bending problem, don't rederive — ask one question, twice:",
             "habit 2 · for any cutting or bending problem, don't rederive — ask one question, twice:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={84} y={542} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          {t("what happened to the pole strength, and what happened to the pole separation?",
             "what happened to the pole strength, and what happened to the pole separation?")}
        </T>
      </Fade>
    </Scene>
  );
}
