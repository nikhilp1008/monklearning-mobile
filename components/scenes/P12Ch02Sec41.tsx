/**
 * P12Ch02 · Section 41 — "The surface field, and the Faraday cage"
 * Subtopic: Conductors & Spherical Capacitors
 * OPEN CHALKBOARD DESIGN WITH FARADAY CAGE SCHEMATIC (NO CONTAINER BOXES):
 *  - Surface Field E = σ / ε₀ (perpendicular ⊥ to conductor surface)
 *  - Faraday Cage Shielding: Metallic cavity shielded 100% from external electric fields (E_cavity = 0)
 *  - Practical applications: Lightning protection in cars, sensitive coaxial cables, electrostatic shielding
 *  - Zero card box containers
 */

import React from "react";
import { Circle, G, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
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

export default function P12Ch02Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Surface Field E = σ/ε₀ & Electrostatic Shielding (The Faraday Cage)", "Surface Field E = σ/ε₀ & Electrostatic Shielding (The Faraday Cage)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: SURFACE FIELD E = σ / ε₀ */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SURFACE FIELD E IS ALWAYS PERPENDICULAR ⊥", "SURFACE FIELD E IS ALWAYS PERPENDICULAR ⊥")}
          </T>
        </Fade>

        {/* Conductor surface and field vector */}
        <Fade on={beat >= 1}>
          <Path d="M 60 230 Q 240 190, 420 230" stroke={INK} strokeWidth={3} fill="none" />
          <T x={240} y={250} size={13} fill={INK} weight={800} anchor="middle">Conductor Surface (σ)</T>

          {/* Perpendicular field arrows E */}
          <Path d={arrowD(150, 215, 150, 95)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(240, 205, 240, 85)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(330, 215, 330, 95)} stroke={RED} strokeWidth={2.5} />

          <T x={240} y={70} size={15} fill={RED} weight={900} anchor="middle">E = (σ / ε₀) n^</T>

          {/* 90 degree symbol */}
          <Path d="M 240 195 L 252 195 L 252 205" stroke={INK} strokeWidth={1.5} fill="none" />
          <T x={265} y={190} size={12} fill={INK} weight={800}>90° ⊥</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            If field had a tangential component, surface charges would move!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: FARADAY CAGE HOLLOW CAVITY SHIELDING */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FARADAY CAGE: HOLLOW CAVITY SHIELDING", "FARADAY CAGE: HOLLOW CAVITY SHIELDING")}
          </T>
        </Fade>

        {/* Hollow Metallic Shell Diagram (Open Chalkboard) */}
        <Fade on={beat >= 4}>
          {/* Outer Field Arrows E0 */}
          <Path d={arrowD(20, 150, 70, 150)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(370, 150, 420, 150)} stroke={RED} strokeWidth={2.5} />

          {/* Metal Shell Ring */}
          <Circle cx={220} cy={150} r={75} stroke={AMBER_DARK} strokeWidth={8} fill="none" />
          <T x={220} y={55} size={13} fill={AMBER_DARK} weight={900} anchor="middle">Metallic Shell / Car Body</T>

          {/* Interior Hollow Cavity */}
          <T x={220} y={142} size={15} fill={GREEN} weight={900} anchor="middle">Hollow Cavity E = 0</T>
          <T x={220} y={168} size={13} fill={GREEN} weight={800} anchor="middle">100% Shielded!</T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Lightning strikes outer shell; flows safely to ground)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FARADAY CAGE PRACTICAL APPLICATIONS", "FARADAY CAGE PRACTICAL APPLICATIONS")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            1. Car in a thunderstorm   |   2. Coaxial cable shielding   |   3. Sensitive instrument enclosures!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Surface field magnitude E = σ / ε₀ (Twice as strong as single infinite sheet field σ / 2ε₀)!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Electrostatic Shielding Mastered: E = σ/ε₀ normal to surface & E_cavity = 0 inside any hollow metallic enclosure! ✓",
            "★ Electrostatic Shielding Mastered: E = σ/ε₀ normal to surface & E_cavity = 0 inside any hollow metallic enclosure! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
