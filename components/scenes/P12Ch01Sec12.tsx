/**
 * P12Ch01 · Section 12 — "Force Across Empty Space and Coulomb's Torsion Balance"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Drawn Coulomb's Torsion Balance apparatus (suspension fiber, insulating arm, charged sphere A & B, twist angle θ)
 *  - Inverse square law relationship F ∝ 1/r² (double r → 1/4 F, triple r → 1/9 F)
 *  - Coulomb Constant k = 1 / (4πε₀) = 9 × 10⁹ N·m²/C²
 *
 * Beats (en [0, 6, 20, 30, 44, 58, 68, 84]):
 *  0 Title "coulomb's torsion balance & inverse square law" + drawn underline
 *  1 Hook note: how Coulomb measured the invisible force between charges in 1785!
 *  2 Badge 1 & Torsion Balance apparatus drawing: fiber twist angle θ ∝ F
 *  3 Badge 2 & Inverse Square Law: F ∝ 1/r² (double r → 1/4 F, triple r → 1/9 F)
 *  4 Charge product dependence: F ∝ |q₁ q₂|
 *  5 Coulomb's Law formula: F = k |q₁ q₂| / r²
 *  6 Coulomb Constant: k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C²
 *  7 Grand Verdict: F = k |q1 q2| / r² (Electrostatic Inverse-Square Law!)
 */

import React from "react";
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "coulomb's torsion balance & inverse square law",
            "coulomb ka torsion balance & inverse square law"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 280 70 C 440 66, 640 74, 800 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "how Coulomb measured the invisible force between charges in 1785!",
            "1785 mein Coulomb ne charges ke beech ka invisible force kaise maapa!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Drawn Torsion Balance ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("COULOMB'S TORSION BALANCE", "COULOMB'S TORSION BALANCE")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          {/* Glass Cylinder Case */}
          <Rect x={120} y={30} width={110} height={150} rx={10} fill="#f8fafc" stroke="#94a3b8" strokeWidth={1.8} />

          {/* Top Fiber Tube & Suspension Line */}
          <Line x1={175} y1={5} x2={175} y2={100} stroke="#475569" strokeWidth={1.8} />

          {/* Horizontal Insulating Arm */}
          <Line x1={135} y1={100} x2={215} y2={100} stroke="#b45309" strokeWidth={2.5} />

          {/* Charged Sphere A & Counterweight */}
          <Circle cx={135} cy={100} r={10} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />
          <Circle cx={215} cy={100} r={8} fill="#cbd5e1" stroke="#64748b" strokeWidth={1.5} />

          {/* Fixed Sphere B */}
          <Circle cx={112} cy={100} r={10} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />

          {/* Twist Angle θ Arc */}
          <Path d="M 165 75 A 15 15 0 0 1 185 75" stroke={RED} strokeWidth={1.5} fill="none" />
          <T x={175} y={68} anchor="middle" size={10} fill={RED}>θ</T>

          <T x={250} y={80} anchor="start" size={12} fill={INK}>
            {t("Suspension fiber twist angle θ ∝ Force F", "Fiber twist angle θ ∝ Force F")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Inverse Square Law F ∝ 1/r² ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("INVERSE SQUARE DEPENDENCE: F ∝ 1 / r²", "INVERSE SQUARE DEPENDENCE: F ∝ 1 / r²")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={30} anchor="start" size={14} fill={INK} weight={700}>
            Double distance (2r) ⇒ Force drops to ¼ F !
          </T>
          <T x={0} y={65} anchor="start" size={14} fill={INK} weight={700}>
            Triple distance (3r) ⇒ Force drops to ⅑ F !
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Master Coulomb Formula ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(60, 320)">
          <Rect x={0} y={10} width={430} height={90} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={26} fill={INK} weight={800}>
            F = k |q₁ q₂| / r²
          </T>
          <T x={215} y={80} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Electrostatic force between two point charges", "Do point charges ke beech ka electrostatic force")}
          </T>
          <Draw on={beat >= 5} delay={dl(5, 1.6)} d="M 120 56 h 190 M 120 60 h 190" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 6: Coulomb Constant Value k ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(540, 320)">
          <T x={0} y={30} anchor="start" size={14} weight={700} fill={GREEN}>
            Coulomb Constant k = 1 / (4πε₀)
          </T>
          <T x={0} y={68} anchor="start" size={20} fill={GREEN} weight={800}>
            k ≈ 9 × 10⁹ N·m²/C²
          </T>
          <Draw on={beat >= 6} delay={dl(6, 1.4)} d={ringD(140, 64, 130, 18)} stroke={GREEN} sw={1.8} />
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: F = k |q1 q2| / r² (Electrostatic Inverse-Square Law!)",
            "★ VERDICT: F = k |q1 q2| / r² (Electrostatic Inverse-Square Law!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
