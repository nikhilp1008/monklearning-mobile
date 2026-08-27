/**
 * P12Ch05 · Section 1 — "Iron filings and the shape of a magnetic field"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
 */

import React from "react";
import { G, Path, Rect } from 'react-native-svg';
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

export default function P12Ch05Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Iron Filings and the Shape of a Magnetic Field", "Iron Filings and the Shape of a Magnetic Field")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: BAR MAGNET & FIELD LINES */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("BAR MAGNET & FIELD LINES", "BAR MAGNET & FIELD LINES")}
          </T>
        </Fade>

        {/* Bar Magnet Visual */}
        <Fade on={beat >= 1}>
          <G transform="translate(60, 45)">
            <Rect x={60} y={15} width={80} height={35} fill={RED} rx={4} />
            <Rect x={140} y={15} width={80} height={35} fill={INK} rx={4} />
            <T x={100} y={38} size={18} fill="#ffffff" weight={800}>S</T>
            <T x={180} y={38} size={18} fill="#ffffff" weight={800}>N</T>

            {/* Field Lines */}
            <Path d="M 180 15 C 180 -20, 100 -20, 100 15" stroke={AMBER_DARK} strokeWidth={1.8} fill="none" strokeDasharray="5 3" />
            <Path d="M 180 50 C 180 85, 100 85, 100 50" stroke={AMBER_DARK} strokeWidth={1.8} fill="none" strokeDasharray="5 3" />
          </G>

          <T x={45} y={170} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Iron Filings: Align along continuous magnetic field lines.
          </T>
          <T x={45} y={210} size={14} fill={GREEN} weight={800} anchor="start">
            2. Closed Loops: Lines run N → S outside, S → N inside magnet.
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: MAGNETIC DIPOLE MOMENT (m) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MAGNETIC DIPOLE MOMENT (m)", "MAGNETIC DIPOLE MOMENT (m)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Definition: m = q_m × 2l (pole strength q_m × magnetic length 2l).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Current Loop Equivalent: m = I × A (current I × area vector A).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Vector Direction: Points from South Pole to North Pole INSIDE magnet!
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. SI Unit: A m² or J T^-1; Vector quantity!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Always measure dipole vector m from South to North inside the magnet)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FIELD LINE DENSITY & STRENGTH", "FIELD LINE DENSITY & STRENGTH")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Dense lines near poles indicate STRONG magnetic field B.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Spreading lines near equator indicate WEAK magnetic field B.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Magnetic field lines are continuous closed loops (S → N inside, N → S outside)! ✓",
            "★ Magnetic field lines are continuous closed loops (S → N inside, N → S outside)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
