/**
 * P12Ch02 · Section 35 — "NEET speed trap: dielectric with the battery disconnected"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 * OPEN CHALKBOARD DESIGN WITH DISCONNECTED BATTERY ANALYSIS (NO CONTAINER BOXES):
 *  - Dielectric K = 5 inserted after battery is DISCONNECTED
 *  - Charge Q = Q₀ (Constant, trapped!)
 *  - Voltage V = V₀ / 5 (Drops to 20%)
 *  - Stored Energy U = U₀ / 5 (Drops to 20%)
 *  - Where did the missing 80% energy go? Electrostatic field pulls slab in (Work done by field W = 0.8 U₀)!
 */

import React from "react";
import { G, Line, Path, Rect } from 'react-native-svg';
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

export default function P12Ch02Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("NEET Speed Trap: Dielectric with Battery Disconnected (Where Did Energy Go?)", "NEET Speed Trap: Dielectric with Battery Disconnected (Where Did Energy Go?)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: DISCONNECTED BATTERY SLAB DRAWING */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIELECTRIC (K = 5) INSERTION (DISCONNECTED)", "DIELECTRIC (K = 5) INSERTION (DISCONNECTED)")}
          </T>
        </Fade>

        {/* Capacitor Diagram */}
        <Fade on={beat >= 1}>
          <Line x1="45" y1="80" x2="380" y2="80" stroke={RED} strokeWidth={4} />
          <T x={395} y={84} size={13} fill={RED} weight={800} anchor="start">+Q₀ Trapped</T>

          <Line x1="45" y1="230" x2="380" y2="230" stroke={GREEN} strokeWidth={4} />
          <T x={395} y={234} size={13} fill={GREEN} weight={800} anchor="start">−Q₀ Trapped</T>

          {/* Dielectric Slab inserted (Open Chalkboard style) */}
          <Rect x="110" y="95" width="230" height="120" fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="6 4" />
          <T x={225} y={160} size={15} fill={AMBER_DARK} weight={900} anchor="middle">Dielectric K = 5</T>

          {/* Suction Force Arrow pulling slab into capacitor */}
          <Path d={arrowD(50, 155, 100, 155)} stroke={GREEN} strokeWidth={3} />
          <T x={45} y={180} size={12} fill={GREEN} weight={800} anchor="start">Field Suction Force F_pull</T>
        </Fade>

        {/* Free Floating Formula */}
        <Fade on={beat >= 3}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Trapped Charge: Q = Q₀  ⇒  Voltage V = Q₀ / (5 C₀) = V₀ / 5 !
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: ENERGY DISSIPATION ACCOUNTING */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("WHERE DID THE 80% MISSING ENERGY GO?", "WHERE DID THE 80% MISSING ENERGY GO?")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Initial Energy U₀ = Q₀² / (2 C₀)
          </T>

          <T x={45} y={125} size={14} fill={RED} weight={800} anchor="start">
            2. Final Energy U = Q₀² / (2 × 5 C₀) = U₀ / 5 = 0.20 U₀
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Energy Loss ΔU = U₀ − U = 0.80 U₀ (80% Lost!)
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. W_field = +0.80 U₀ (Work done pulling slab!)
          </T>
        </Fade>

        {/* Open Text Explanation */}
        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Field sucks slab inward — converts into mechanical work)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NEET MCQ SPEED TRAP WARNING", "NEET MCQ SPEED TRAP WARNING")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Disconnected Battery → Q is constant! Never use U = ½ C V² (since V changes)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Always use U = Q² / (2C) when battery is disconnected!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ NEET Trap Neutralized: Battery Disconnected -> Q constant, U = U₀/K (80% energy converted into mechanical suction work)! ✓",
            "★ NEET Trap Neutralized: Battery Disconnected -> Q constant, U = U₀/K (80% energy converted into mechanical suction work)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
