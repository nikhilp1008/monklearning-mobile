/**
 * P12Ch05 · Section 17 — "The three elements that pin down the field"
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

export default function P12Ch05Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Three Magnetic Elements of the Earth", "The Three Magnetic Elements of the Earth")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: 1. DECLINATION (D) & 2. INCLINATION / DIP (I) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("1. DECLINATION (D) & 2. INCLINATION / DIP (I)", "1. DECLINATION (D) & 2. INCLINATION / DIP (I)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Declination (D): Angle between Geo &amp; Mag Meridians.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Geographic Meridian: Vertical plane with spin axis.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Magnetic Meridian: Vertical plane with dipole axis.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Dip Angle (I): Angle made by total field B_E with horizontal!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Dip needle turns in magnetic meridian plane to point along B_E)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: 3. HORIZONTAL & VERTICAL COMPONENTS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("3. HORIZONTAL & VERTICAL COMPONENTS", "3. HORIZONTAL & VERTICAL COMPONENTS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Horizontal Component: B_H = B_E cos I.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Vertical Component: B_V = B_E sin I.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Tangent Dip Relation: tan I = B_V / B_H.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Resultant Field Magnitude: B_E = √(B_H² + B_V²)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (At equator: I = 0°, B_H = B_E, B_V = 0 ; At poles: I = 90°, B_H = 0, B_V = B_E)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("COMPLETE EARTH FIELD SPECIFICATION", "COMPLETE EARTH FIELD SPECIFICATION")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Three Magnetic Elements: Declination (D), Dip Angle (I), and Horizontal Component (B_H).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Complete Determination: These 3 independent parameters uniquely specify vector B_E anywhere on Earth.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ 3 Elements of Earth's field: Declination D, Dip I, and Horizontal Component B_H! ✓",
            "★ 3 Elements of Earth's field: Declination D, Dip I, and Horizontal Component B_H! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
