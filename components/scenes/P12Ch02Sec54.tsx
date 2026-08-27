/**
 * P12Ch02 · Section 54 — "Reconnecting charged capacitors — energy always leaks away"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 *
 * THREE DEFECTS FIXED (2026-08-21):
 *
 * 1. THE BOARD TAUGHT A DIFFERENT TOPIC FROM THE VOICE. The scene was built
 *    for an older section on the Van de Graaff generator — belt, dome, spray
 *    comb, ΔV = (q/4πε₀)(1/r − 1/R), a 10⁷ V breakdown limit and SF₆ at 15 atm.
 *    None of that appears anywhere in this chapter's narration any more; the
 *    voice at position 54 talks about joining two already-charged capacitors,
 *    charge conservation, and the energy that is always lost. Narration is
 *    authoritative, so every quantity on the board has been replaced with the
 *    ones the voice actually uses: V_com, q₁ + q₂, and
 *    ΔU = ½[C₁C₂/(C₁+C₂)](V₁ − V₂)². The unused belt-animation term
 *    (`currentTime * 40 % 80`) went with it.
 *
 * 2. A WHOLE BLOCK NEVER RENDERED. The applications badge, its heading, its
 *    two lines and the footer chip were gated on `beat >= 7`, but this section
 *    has 7 narration segments so useBeat only ever returns 0..6.
 *
 * 3. DEAD AIR. The old gate set was {0,1,3,4,6,7}: beats 2 and 5 drew nothing.
 *
 * Beats now map 1:1 onto the seven segments
 * (board_reveal_at_english [0, 4.61, 9.22, 16.59, 23.35, 32.87, 43.32]):
 *
 *   0  "a third situation worth flagging"          title
 *   1  "two charged capacitors at different        the two-capacitor diagram
 *       potentials, joined together"
 *   2  "charge sloshes across until both settle    the flow arrow + V_com
 *       at one common potential"
 *   3  "total charge is conserved"                 the conservation line
 *   4  "total energy is NOT conserved — lost as    ΔU, heat and radiation
 *       heat in the wires and a little radiation"
 *   5  "the loss is unavoidable; it vanishes only  (V₁−V₂)² ≥ 0 verdict
 *       when both already sit at the same V"
 *   6  "assume like plate to like plate"           the stated assumption + chip
 */

import React from "react";
import { G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED,
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

export default function P12Ch02Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Reconnecting two charged capacitors — the charge survives, the energy does not",
             "Reconnecting two charged capacitors — the charge survives, the energy does not")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.0)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THE TWO CAPACITORS, JOINED */}
      <G transform="translate(40, 75)">
        {/* beat 1 — already charged, sitting at different potentials */}
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("TWO ALREADY-CHARGED CAPACITORS, JOINED UP", "TWO ALREADY-CHARGED CAPACITORS, JOINED UP")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          {/* capacitor 1 */}
          <Line x1="70" y1="152" x2="150" y2="152" stroke={RED} strokeWidth={3} />
          <Line x1="70" y1="178" x2="150" y2="178" stroke={RED} strokeWidth={3} />
          <Line x1="110" y1="112" x2="110" y2="152" stroke={INK} strokeWidth={2} />
          <Line x1="110" y1="178" x2="110" y2="218" stroke={INK} strokeWidth={2} />
          <T x={110} y={248} size={13.5} fill={RED} weight={900} anchor="middle">C₁ at V₁</T>

          {/* capacitor 2 */}
          <Line x1="250" y1="152" x2="330" y2="152" stroke={GREEN} strokeWidth={3} />
          <Line x1="250" y1="178" x2="330" y2="178" stroke={GREEN} strokeWidth={3} />
          <Line x1="290" y1="112" x2="290" y2="152" stroke={INK} strokeWidth={2} />
          <Line x1="290" y1="178" x2="290" y2="218" stroke={INK} strokeWidth={2} />
          <T x={290} y={248} size={13.5} fill={GREEN} weight={900} anchor="middle">C₂ at V₂</T>

          {/* joining wires, with a switch in the top run */}
          <Line x1="110" y1="112" x2="176" y2="112" stroke={INK} strokeWidth={2} />
          <Line x1="224" y1="112" x2="290" y2="112" stroke={INK} strokeWidth={2} />
          <Line x1="176" y1="112" x2="220" y2="96" stroke={INK} strokeWidth={2} />
          <Line x1="110" y1="218" x2="290" y2="218" stroke={INK} strokeWidth={2} />
          <T x={200} y={82} size={12} fill={MUTED} weight={700} anchor="middle">switch</T>
        </Fade>

        {/* beat 2 — charge sloshes across until one common potential */}
        <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(150, 132, 250, 132)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={200} y={126} size={12.5} fill={AMBER_DARK} weight={800} anchor="middle">higher V → lower V</T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.8)}>
          <T x={45} y={282} anchor="start" size={13.5} fill={INK} weight={800}>
            {t("Charge keeps flowing until both settle at one single common potential:",
               "Charge keeps flowing until both settle at one single common potential:")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.1)}>
          <T x={45} y={310} anchor="start" size={15} fill={AMBER_DARK} weight={900}>
            V_com = (C₁ V₁ + C₂ V₂) / (C₁ + C₂)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: WHAT SURVIVES AND WHAT DOES NOT */}
      <G transform="translate(540, 75)">
        {/* beat 3 — total charge is conserved */}
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("WHAT SURVIVES, AND WHAT DOES NOT", "WHAT SURVIVES, AND WHAT DOES NOT")}
          </T>
        </Fade>

        <Fade on={beat >= 3} delay={dl(3, 0.8)}>
          <T x={45} y={80} size={14} fill={GREEN} weight={800} anchor="start">
            1. Charge IS conserved: q₁ + q₂ = C₁V₁ + C₂V₂
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.1)}>
          <T x={45} y={106} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
            {t("whatever leaves one capacitor arrives at the other — nothing is created, nothing vanishes",
               "whatever leaves one capacitor arrives at the other — nothing is created, nothing vanishes")}
          </T>
        </Fade>

        {/* beat 4 — energy is not conserved */}
        <Fade on={beat >= 4} delay={dl(4, 0.2)}>
          <T x={45} y={150} size={14} fill={RED} weight={800} anchor="start">
            2. Energy is NOT conserved: ΔU = U_initial − U_final
          </T>
        </Fade>
        <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 45 175 L 450 175" stroke={INK} sw={1.8} dur={0.5} />
        <Fade on={beat >= 4} delay={dl(4, 0.9)}>
          <T x={45} y={214} size={16} fill={RED} weight={900} anchor="start">
            ΔU = ½ [ (C₁ C₂) / (C₁ + C₂) ] (V₁ − V₂)²
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.3)}>
          <T x={45} y={244} anchor="start" size={13} fill={MUTED} weight={600}>
            (lost as heat in the connecting wires, and a little as radiation)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: THE LOSS IS UNAVOIDABLE */}
      <G transform="translate(40, 400)">
        {/* beat 5 */}
        <Badge n={3} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THE LOSS IS UNAVOIDABLE", "THE LOSS IS UNAVOIDABLE")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.9)}>
          <T x={45} y={54} size={14.5} anchor="start" fill={GREEN} weight={900}>
            {t("(V₁ − V₂)² ≥ 0, so ΔU ≥ 0 always — it vanishes only when V₁ = V₂ already, and then no charge flows at all.",
               "(V₁ − V₂)² ≥ 0, so ΔU ≥ 0 always — it vanishes only when V₁ = V₂ already, and then no charge flows at all.")}
          </T>
        </Fade>

        {/* beat 6 — the stated assumption */}
        <Fade on={beat >= 6} delay={dl(6, 0.3)}>
          <T x={45} y={84} size={13.5} anchor="start" fill={INK} weight={700}>
            {t("One assumption worth stating: the capacitors are joined like plate to like plate — positive terminal to positive terminal —",
               "One assumption worth stating: the capacitors are joined like plate to like plate — positive terminal to positive terminal —")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 0.55)}>
          <T x={45} y={106} size={13.5} anchor="start" fill={INK} weight={700}>
            {t("unless a problem explicitly tells you otherwise.",
               "unless a problem explicitly tells you otherwise.")}
          </T>
        </Fade>
      </G>

      {/* beat 6 — footer */}
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Charge is conserved, energy is not: V_com = (C₁V₁ + C₂V₂)/(C₁ + C₂), and ΔU = ½[C₁C₂/(C₁+C₂)](V₁ − V₂)² always leaks away",
            "★ Charge is conserved, energy is not: V_com = (C₁V₁ + C₂V₂)/(C₁ + C₂), and ΔU = ½[C₁C₂/(C₁+C₂)](V₁ − V₂)² always leaks away"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
