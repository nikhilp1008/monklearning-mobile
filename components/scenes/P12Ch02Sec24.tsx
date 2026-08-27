/**
 * P12Ch02 · Section 24 — "JEE Advanced: dipole released, rotational energy conservation"
 * Subtopic: Potential Energy & External Fields
 * OPEN CHALKBOARD DESIGN WITH ROTATIONAL DIPOLE OSCILLATION (NO CONTAINER BOXES):
 *  - Dipole (moment p, moment of inertia I) released from rest at θ₁ = 90° in uniform field E
 *  - Rotational Energy Conservation: ½ I ω² + U(θ) = const
 *  - At θ₂ = 0°: ½ I ω² - p E = 0  =>  ω = √ (2 p E / I)
 *  - Zero card box containers
 */

import React from "react";
import { Circle, G, Line, Path } from 'react-native-svg';
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

export default function P12Ch02Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Rotating dipole animation
  const rotAngle = Math.cos(Math.min(Math.PI, currentTime * 0.8)) * (Math.PI / 2);
  const px = 200 + Math.cos(rotAngle) * 75;
  const py = 180 - Math.sin(rotAngle) * 75;

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Advanced: Dipole Rotational Speed ω = √(2pE/I) via Rotational Energy Conservation", "JEE Advanced: Dipole Rotational Speed ω = √(2pE/I) via Rotational Energy Conservation")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: ROTATING DIPOLE GEOMETRY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIPOLE RELEASED FROM REST AT 90°", "DIPOLE RELEASED FROM REST AT 90°")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Uniform E field lines */}
          <Path d={arrowD(40, 90, 420, 90)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(40, 170, 420, 170)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(40, 230, 420, 230)} stroke={RED} strokeWidth={2.5} />
          <T x={435} y={175} size={14} fill={RED} weight={800} anchor="start">Field E</T>

          {/* Rotating Dipole vector */}
          <Line x1="200" y1="170" x2={px} y2={py} stroke={GREEN} strokeWidth={4} />
          <Circle cx={px} cy={py} r={7} fill={GREEN} />
          <T x={px + 12} y={py - 8} size={14} fill={GREEN} weight={800} anchor="start">Dipole (p, I)</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Rotational Kinetic Energy K_rot = ½ I ω²
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: DERIVATION OF ANGULAR SPEED ω */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ROTATIONAL ENERGY CONSERVATION PROOF", "ROTATIONAL ENERGY CONSERVATION PROOF")}
          </T>
        </Fade>

        {/* Floating Derivation Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Initial Energy (θ = 90°, ω = 0): E_i = 0 − pE cos 90° = 0
          </T>

          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Final Energy (θ = 0°, max ω): E_f = ½ I ω² − pE cos 0°
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Equate: ½ I ω² − p E = 0   ⇒   ½ I ω² = p E
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={800} anchor="start">
            4. Angular Speed ω = √ ( 2 p E / I )
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Small-angle SHM frequency f = (1/2π) √(pE/I) )
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE ADVANCED SHM COMPARISON", "JEE ADVANCED SHM COMPARISON")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Restoring Torque for small angles θ: τ = − p E sinθ ≈ − (pE) θ   (Analogous to C = pE)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Time Period T = 2π √ (I / pE) !
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Rotational Energy Mastered: Maximum angular speed ω = √(2pE/I) and SHM period T = 2π√(I/pE)! ✓",
            "★ Rotational Energy Mastered: Maximum angular speed ω = √(2pE/I) and SHM period T = 2π√(I/pE)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
