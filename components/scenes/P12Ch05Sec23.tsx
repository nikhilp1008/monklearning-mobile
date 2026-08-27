/**
 * P12Ch05 · Section 23 — "Derivation: neutral points, where the magnet cancels the Earth"
 * Subtopic: Earth's Magnetism
 */

import React from "react";
import { G } from 'react-native-svg';
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

export default function P12Ch05Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Neutral Points: Where Magnet Cancels Earth's B_H", "Neutral Points: Where Magnet Cancels Earth's B_H")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CASE 1: NORTH POLE POINTING NORTH (N → N) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CASE 1: NORTH POLE POINTING NORTH (N → N)", "CASE 1: NORTH POLE POINTING NORTH (N → N)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Orientation: Magnet's North pole points towards Geographic North.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Neutral Location: Lies on the EQUATORIAL line of the magnet.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Field Balance: B_eq = (μ_0 / 4π) (m / d³) = B_H.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Distance Formula: d = [(μ_0 / 4π) (m / B_H)]^(1/3)!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Two symmetrical neutral points exist east and west of magnet)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: CASE 2: NORTH POLE POINTING SOUTH (N → S) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CASE 2: NORTH POLE POINTING SOUTH (N → S)", "CASE 2: NORTH POLE POINTING SOUTH (N → S)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Orientation: Magnet's North pole points towards Geographic South.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Neutral Location: Lies on the AXIAL line of the magnet.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Field Balance: B_ax = (μ_0 / 4π) (2m / d³) = B_H.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Distance Formula: d = [(μ_0 / 4π) (2m / B_H)]^(1/3)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Two symmetrical neutral points exist north and south of magnet)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("B_NET AT NEUTRAL POINT = 0", "B_NET AT NEUTRAL POINT = 0")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Field Cancellation: Vector sum B_net = B_magnet + B_H = 0 (equal magnitude, 180° opposite direction).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Compass Behavior: Compass needle stops pointing in any fixed horizontal direction at a neutral point.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ N → N gives equatorial neutral points (m/d³ = B_H); N → S gives axial neutral points (2m/d³ = B_H)! ✓",
            "★ N → N gives equatorial neutral points (m/d³ = B_H); N → S gives axial neutral points (2m/d³ = B_H)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
