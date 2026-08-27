/**
 * P12Ch05 · Section 2 — "Why you can never hold a single magnetic pole"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch05Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Why You Can Never Hold a Single Magnetic Pole", "Why You Can Never Hold a Single Magnetic Pole")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CUTTING A MAGNET CREATES TWO DIPOLE MAGNETS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CUTTING A MAGNET CREATES TWO DIPOLE MAGNETS", "CUTTING A MAGNET CREATES TWO DIPOLE MAGNETS")}
          </T>
        </Fade>

        {/* Magnet Cutting Visual */}
        <Fade on={beat >= 1}>
          <G transform="translate(45, 45)">
            {/* Original */}
            <Rect x={0} y={0} width={45} height={25} fill={RED} rx={3} />
            <Rect x={45} y={0} width={45} height={25} fill={INK} rx={3} />
            <T x={22} y={17} size={13} fill="#ffffff" weight={800}>S</T>
            <T x={67} y={17} size={13} fill="#ffffff" weight={800}>N</T>

            <T x={105} y={17} size={16} fill={AMBER_DARK} weight={800}>➔ Cut ➔</T>

            {/* Pieces */}
            <Rect x={160} y={0} width={25} height={25} fill={RED} rx={3} />
            <Rect x={185} y={0} width={25} height={25} fill={INK} rx={3} />
            <T x={172} y={17} size={11} fill="#ffffff" weight={800}>S</T>
            <T x={197} y={17} size={11} fill="#ffffff" weight={800}>N</T>

            <Rect x={220} y={0} width={25} height={25} fill={RED} rx={3} />
            <Rect x={245} y={0} width={25} height={25} fill={INK} rx={3} />
            <T x={232} y={17} size={11} fill="#ffffff" weight={800}>S</T>
            <T x={257} y={17} size={11} fill="#ffffff" weight={800}>N</T>
          </G>

          <T x={45} y={105} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Transverse Cut: Creates 2 magnets, each of length l.
          </T>
          <T x={45} y={145} size={14} fill={GREEN} weight={800} anchor="start">
            2. New Dipole Moment: Each new piece has moment m' = m / 2.
          </T>
          <T x={45} y={185} size={14} fill={RED} weight={800} anchor="start">
            3. Longitudinal Cut: Cut along axis halves pole strength q_m' = q_m / 2.
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: GAUSS'S LAW FOR MAGNETISM */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GAUSS'S LAW FOR MAGNETISM", "GAUSS'S LAW FOR MAGNETISM")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Flux Equation: ∮ B · dA = 0 (closed surface integral).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Net Flux: Magnetic flux entering ANY closed surface equals flux leaving.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. No Isolated Poles: Magnetic monopoles CANNOT exist in nature!
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Electrostatics Contrast: ∮ E · dA = Q_encl / ε_0 (charges exist)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Every magnetic field line entering a closed surface must also exit)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MICROSCOPIC ORIGIN OF DIPOLES", "MICROSCOPIC ORIGIN OF DIPOLES")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Magnetism originates from atomic electron loops — loops have no 'ends'.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Breaking a magnet down to single atoms still leaves atomic current loops (dipoles)!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Monopoles do not exist: cutting a magnet yields 2 new dipoles, each with m' = m/2! ✓",
            "★ Monopoles do not exist: cutting a magnet yields 2 new dipoles, each with m' = m/2! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
