/**
 * P12Ch06 · Section 57 — "JEE Main level: torque required to turn an AC generator under load"
 * Subtopic: AC Generator & Energy Density
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

export default function P12Ch06Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Main: Retarding Torque τ(t) & Mechanical Power in AC Generator", "JEE Main: Retarding Torque τ(t) & Mechanical Power in AC Generator")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: INSTANTANEOUS TORQUE: τ(t) = [ε₀² / (ω R)] sin²(ωt) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INSTANTANEOUS TORQUE: τ(t) = [ε₀² / (ω R)] sin²(ωt)", "INSTANTANEOUS TORQUE: τ(t) = [ε₀² / (ω R)] sin²(ωt)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Dipole Moment: m(t) = N I(t) A = N [ (ε_0 sin ωt) / R ] A.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Magnetic Torque: τ(t) = m(t) B sin(ωt) = [ N B A ε_0 / R ] sin²(ωt).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Substitute N B A = ε_0 / ω: τ(t) = [ ε_0² / (ω R) ] sin²(ωt).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Retarding Nature: Torque opposes rotation per Lenz's Law!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (External prime mover must supply matching forward torque)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: AVERAGE TORQUE: ⟨τ⟩ = ε₀² / (2 ω R) ⇒ ⟨P_mech⟩ = ⟨P_elec⟩ */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("AVERAGE TORQUE: ⟨τ⟩ = ε₀² / (2 ω R) ⇒ ⟨P_mech⟩ = ⟨P_elec⟩", "AVERAGE TORQUE: ⟨τ⟩ = ε₀² / (2 ω R) ⇒ ⟨P_mech⟩ = ⟨P_elec⟩")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Average sin²(ωt): ⟨sin²(ωt)⟩ = ½ over one complete cycle.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Average Torque: ⟨τ⟩ = [ ε_0² / (ω R) ] × ½ = ε_0² / (2 ω R).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Mechanical Input Power: ⟨P_mech⟩ = ⟨τ⟩ ω = [ ε_0² / (2 ω R) ] × ω.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Energy Balance: ⟨P_mech⟩ = ε_0² / (2 R) = ⟨P_elec⟩!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (100% mechanical input power converts into electrical output power)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JEE MAIN GENERATOR TORQUE RECAP", "JEE MAIN GENERATOR TORQUE RECAP")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Torque-Power Relation: Average mechanical retarding torque is simply ⟨τ⟩ = ⟨P_elec⟩ / ω.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            No Load Condition: If R → ∞ (open circuit), I = 0 → zero retarding torque required!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ JEE Main Result: AC Generator Average Retarding Torque ⟨τ⟩ = ε₀² / (2 ω R), ensuring ⟨P_mech⟩ = ⟨τ⟩ ω = ⟨P_elec⟩! ✓",
            "★ JEE Main Result: AC Generator Average Retarding Torque ⟨τ⟩ = ε₀² / (2 ω R), ensuring ⟨P_mech⟩ = ⟨τ⟩ ω = ⟨P_elec⟩! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
