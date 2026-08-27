/**
 * P12Ch02 · Section 1 — "Random motion and the birth of drift"
 * Beats (en [0,8,20,35,50,63,64,65]): 8 beats
 */

import React from "react";
import { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';
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

export default function P12Ch03Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Random motion and the birth of drift", "Random motion and the birth of drift")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: WIRE CONDUCTOR & DRIFT ILLUSTRATION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CONDUCTOR LATTICE & DRIFT MOTION", "CONDUCTOR LATTICE & DRIFT MOTION")}
          </T>
        </Fade>

        {/* Conductor Wireframe Diagram (Open Chalkboard) */}
        <Fade on={beat >= 1}>
          <G transform="translate(20, 75)">
            {/* Conductor body */}
            <Rect x={0} y={0} width={400} height={145} rx={12} fill="none" stroke={INK} strokeWidth={2} />
            <Ellipse cx={0} cy={72} rx={15} ry={72} fill="none" stroke={INK} strokeWidth={2} />
            <Ellipse cx={400} cy={72} rx={15} ry={72} fill="none" stroke={INK} strokeWidth={2} />

            {/* Fixed Lattice Ions */}
            {[
              { x: 80, y: 35 }, { x: 200, y: 35 }, { x: 320, y: 35 },
              { x: 80, y: 110 }, { x: 200, y: 110 }, { x: 320, y: 110 },
            ].map((ion, idx) => (
              <G key={idx}>
                <Circle cx={ion.x} cy={ion.y} r={13} fill="none" stroke={RED} strokeWidth={1.8} />
                <T x={ion.x} y={ion.y + 4} size={12} fill={RED} weight={800}>+</T>
              </G>
            ))}

            {/* Field OFF: Random Zig-Zag Path */}
            <Fade on={beat >= 2 && beat < 5}>
              <Path d="M 140 72 L 180 40 L 210 100 L 160 120 L 140 72" fill="none" stroke={INK} strokeWidth={1.8} strokeDasharray="4 3" />
              <Circle cx={140} cy={72} r={5} fill={INK} />
              <T x={140} y={58} size={12} fill={INK} weight={700}>e⁻</T>
            </Fade>

            {/* Field ON: Tilted Path with Net Drift */}
            <Fade on={beat >= 5}>
              <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 50 -18 L 350 -18" stroke={RED} sw={2.2} />
              <Path d="M 340 -24 L 355 -18 L 340 -12" fill={RED} />
              <T x={200} y={-26} size={12} fill={RED} weight={800}>Electric Field E →</T>

              {/* Tilted Path towards left */}
              <Path d="M 140 72 L 175 42 L 200 103 L 145 122 L 115 74" fill="none" stroke={GREEN} strokeWidth={2} />
              <Circle cx={115} cy={74} r={5} fill={GREEN} />
              <Draw on={beat >= 6} delay={dl(6, 0.4)} d="M 140 72 L 115 74" stroke={RED} sw={2.5} />
              <T x={125} y={95} size={12} fill={RED} weight={800}>Net Drift v_d ←</T>
            </Fade>
          </G>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Thermal velocity ~ 10⁵ m/s is random, resulting in zero net current)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: DRIFT VELOCITY MECHANICS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DRIFT VELOCITY MECHANICS", "DRIFT VELOCITY MECHANICS")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 2}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Thermal Chaos: Electrons move at ~10⁵ m/s in random directions.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Zero Current: Equal charges cross left & right (Net I = 0).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Field Applied: Force F = −eE drives net drift opposite to field.
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Net Drift v_d: Small average speed superimposed on chaos!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Drift velocity v_d is typically ~ 10⁻⁴ m/s, very slow compared to thermal speed!)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("KEY CONCEPT VERDICT", "KEY CONCEPT VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Without an electric field, net electron displacement is zero.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            When E is applied, electric force F = −eE causes a slow, steady drift v_d opposite to E!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Drift velocity (v_d): Small net average velocity superimposed on thermal chaos! ✓",
            "★ Drift velocity (v_d): Thermal chaos ke upar choti si net average velocity! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
