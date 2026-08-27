/**
 * P12Ch02 · Section 12 — "JEE Advanced: field from a potential function"
 * Subtopic: Electrostatic Potential & Equipotentials
 * OPEN CHALKBOARD DESIGN WITH 3D GRADIENT VECTOR FIELD (NO CONTAINER BOXES):
 *  - Partial derivatives: E_x = -∂V/∂x, E_y = -∂V/∂y, E_z = -∂V/∂z
 *  - 3D Gradient Vector E_vector = - ∇ V
 *  - JEE Advanced Worked Problem: V(x,y,z) = 3x²y - y³z at (1, 1, 1)
 *  - Step-by-step partial differentiation & magnitude calculation E = √37 N/C
 */

import React from "react";
import { G, Line, Path } from 'react-native-svg';
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

export default function P12Ch02Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Advanced: 3D Gradient Vector Field E = −∇V = −(∂V/∂x i + ∂V/∂y j + ∂V/∂z k)", "JEE Advanced: 3D Gradient Vector Field E = −∇V = −(∂V/∂x i + ∂V/∂y j + ∂V/∂z k)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: 3D GRADIENT CONCEPT & FORMULAS */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={22} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("3D PARTIAL DERIVATIVE GRADIENT COMPONENTS", "3D PARTIAL DERIVATIVE GRADIENT COMPONENTS")}
          </T>
        </Fade>

        {/* 3D Coordinate Axis drawing */}
        <Fade on={beat >= 1}>
          <Line x1="200" y1="180" x2="380" y2="180" stroke={INK} strokeWidth={2.5} />
          <T x={395} y={185} size={13} fill={INK} weight={800}>X axis</T>

          <Line x1="200" y1="180" x2="200" y2="60" stroke={INK} strokeWidth={2.5} />
          <T x={200} y={48} size={13} fill={INK} weight={800}>Y axis</T>

          <Line x1="200" y1="180" x2="115" y2="245" stroke={INK} strokeWidth={2.5} />
          <T x={95} y={258} size={13} fill={INK} weight={800}>Z axis</T>

          {/* Resultant Electric Field Vector E */}
          <Path d={arrowD(200, 180, 310, 90)} stroke={RED} strokeWidth={4} />
          <T x={325} y={85} size={15} fill={RED} weight={900}>E = −∇V</T>
        </Fade>

        {/* Free Floating Partial Derivatives (Spacious, No Box) */}
        <Fade on={beat >= 3}>
          <T x={220} y={305} anchor="middle" size={15} fill={GREEN} weight={800}>
            E_x = − ∂V / ∂x   |   E_y = − ∂V / ∂y   |   E_z = − ∂V / ∂z
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: JEE ADVANCED WORKED PROBLEM */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={22} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("WORKED PROBLEM: V(x,y,z) = 3x²y − y³z AT (1,1,1)", "WORKED PROBLEM: V(x,y,z) = 3x²y − y³z AT (1,1,1)")}
          </T>
        </Fade>

        {/* Floating Problem Steps (No Card Boxes) */}
        <Fade on={beat >= 4}>
          <T x={45} y={75} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            1. E_x = − ∂/∂x (3x²y − y³z) = − 6xy = − 6
          </T>

          <T x={45} y={125} size={15} fill={GREEN} weight={800} anchor="start">
            2. E_y = − ∂/∂y (3x²y − y³z) = − (3x² − 3y²z) = 0
          </T>

          <T x={45} y={175} size={15} fill={RED} weight={800} anchor="start">
            3. E_z = − ∂/∂z (3x²y − y³z) = − (− y³) = + 1
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 200 L 450 200" stroke={INK} sw={2} />

          <T x={45} y={240} size={18} fill={RED} weight={800} anchor="start">
            4. E_vector = − 6 i^ + 1 k^   ⇒   |E| = √(36 + 1) = √37 N/C
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={240} y={285} anchor="middle" size={13} fill={GREEN} weight={800}>
            Partial derivative ∂/∂x treats y and z as constant parameters!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE ADVANCED STRATEGY: INTEGRATION IN REVERSE", "JEE ADVANCED STRATEGY: INTEGRATION IN REVERSE")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            {t("Reverse Operation: V(B) − V(A) = − ∫_A^B E_vector · d r_vector = − ∫ (E_x dx + E_y dy + E_z dz)!", "Reverse Operation: V(B) − V(A) = − ∫_A^B E_vector · d r_vector = − ∫ (E_x dx + E_y dy + E_z dz)!")}
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            {t("If E is uniform: ΔV = − E_vector · Δr_vector = − E d cosθ!", "If E is uniform: ΔV = − E_vector · Δr_vector = − E d cosθ!")}
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Gradient Method Solved: E_vector = −∇V gives E_vector = −6 i^ + 1 k^ with magnitude |E| = √37 N/C! ✓",
            "★ Gradient Method Solved: E_vector = −∇V gives E_vector = −6 i^ + 1 k^ with magnitude |E| = √37 N/C! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
