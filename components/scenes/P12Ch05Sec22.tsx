/**
 * P12Ch05 · Section 22 — "Derivation: why a tilted dip circle lies to you"
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

export default function P12Ch05Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Two Apparent Dips to Find True Dip", "Derivation: Two Apparent Dips to Find True Dip")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: APPARENT DIPS IN PERPENDICULAR PLANES */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: APPARENT DIPS IN PERPENDICULAR PLANES", "STEP 1: APPARENT DIPS IN PERPENDICULAR PLANES")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Apparent Dip Plane 1: tan δ₁ = tan δ / cos α ⇒ cot δ₁ = cot δ cos α.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Plane 2 (at 90° - α): tan δ₂ = tan δ / cos(90° - α).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Second Relation: tan δ₂ = tan δ / sin α.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Cotangent Form: cot δ₂ = cot δ sin α!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Note that dip circle is turned by 90° between two measurements)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: SQUARE AND ADD BOTH EQUATIONS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: SQUARE AND ADD BOTH EQUATIONS", "STEP 2: SQUARE AND ADD BOTH EQUATIONS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Square First Equation: cot² δ₁ = cot² δ cos² α.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Square Second Equation: cot² δ₂ = cot² δ sin² α.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Add Equations: cot² δ₁ + cot² δ₂ = cot² δ (cos² α + sin² α).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Apply Identity: cos² α + sin² α = 1!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Eliminates unknown meridian offset angle α completely)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MASTER TWO-APPARENT-DIPS FORMULA", "MASTER TWO-APPARENT-DIPS FORMULA")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Master Formula: cot² δ = cot² δ₁ + cot² δ₂.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Practical Exam Shortcut: Measure dip in any two mutually perpendicular vertical planes to get TRUE dip δ.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Master Formula: cot² δ = cot² δ₁ + cot² δ₂ finds true dip δ without knowing meridian angle α! ✓",
            "★ Master Formula: cot² δ = cot² δ₁ + cot² δ₂ finds true dip δ without knowing meridian angle α! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
