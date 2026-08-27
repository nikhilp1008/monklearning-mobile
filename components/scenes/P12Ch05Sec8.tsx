/**
 * P12Ch05 · Section 8 — "Derivation: torque on a dipole in a uniform field"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
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

export default function P12Ch05Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Torque on a Dipole in a Uniform Field", "Derivation: Torque on a Dipole in a Uniform Field")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP 1: FORCES FORM A COUPLE */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 1: FORCES FORM A COUPLE (NET FORCE = 0)", "STEP 1: FORCES FORM A COUPLE (NET FORCE = 0)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. North Pole Force: F_N = +q_m B pointing ALONG magnetic field B.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. South Pole Force: F_S = -q_m B pointing OPPOSITE to magnetic field B.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Zero Net Force: F_net = F_N + F_S = 0 (no translational acceleration).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Pure Couple: Equal &amp; opposite forces form a pure turning couple!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Uniform B field produces pure rotation with zero net linear force)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STEP 2: PERPENDICULAR ARM = 2l sin θ */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STEP 2: PERPENDICULAR ARM = 2l sin θ", "STEP 2: PERPENDICULAR ARM = 2l sin θ")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Dipole Geometry: Poles separated by magnetic length 2l at angle θ to B.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Perpendicular Arm: Arm distance between force action lines is 2l sin θ.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Torque Calculation: τ = Force × Arm = (q_m B) (2l sin θ).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Moment Substitution: τ = (q_m 2l) B sin θ = m B sin θ!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Where m = q_m 2l is the magnetic dipole moment vector)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FINAL VECTOR TORQUE FORMULA", "FINAL VECTOR TORQUE FORMULA")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Vector Cross Product: τ = m × B (direction given by right-hand thumb rule).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Restoring Effect: Torque τ acts to rotate magnetic dipole moment m into alignment with B.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Torque τ = m × B tends to rotate dipole m parallel to uniform field B! ✓",
            "★ Torque τ = m × B tends to rotate dipole m parallel to uniform field B! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
