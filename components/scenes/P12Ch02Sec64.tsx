/**
 * P12Ch02 · Section 64 — "Pitfalls: swapped formulas and the conservation trap"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 *
 * TWO DEFECTS FIXED (2026-08-21):
 *
 * 1. THE BOARD TAUGHT A DIFFERENT LESSON FROM THE VOICE. The old scene was a
 *    whole-chapter "Synthesis Part 1" concept map — eight numbered pillars
 *    covering V = kQ/r, dipole energy U = −pE cosθ, C = ε₀A/d, the dielectric
 *    battery fork, Faraday shielding and charge sharing. The narration for this
 *    section is not a synthesis at all: it is a four-item pitfall list about
 *    series and parallel combinations, closing on a pro-tip. None of the eight
 *    pillars is spoken. The board is rebuilt from the narration, item for item.
 *
 *    Numbers checked: this narration asserts no worked example and no numeric
 *    quantity, so there was no arithmetic to recompute — the formulas kept
 *    (C_eq = ΣC in parallel, 1/C_eq = Σ1/C in series, product over sum for two)
 *    are exactly the ones the voice states.
 *
 * 2. UNREACHABLE BLOCK + DEAD AIR. The section has 7 narration segments
 *    (board_reveal_at_english [0, 3.58, 15.62, 28.33, 44.89, 56.23, 69.55]), so
 *    useBeat only ever returns 0..6 — yet the closing badge, its heading, its
 *    two lines and the footer chip were gated on `beat >= 7` and never
 *    rendered. The old gate set was {0,1,2,3,6,7}: beats 4 and 5 were unused,
 *    so the board froze for ~25 s across the third and fourth pitfalls. Every
 *    beat 0..6 now carries the item the voice is on.
 *
 * Beats (7 segments → valid beats 0..6):
 *  0 "let's consolidate the traps"                     title + underline
 *  1 "swapping the series and parallel formulas"       pitfall 1 + both formulas
 *  2 "anchor them with the shared quantity"            the anchor line
 *  3 "forgetting same charge / same voltage"           pitfall 2
 *  4 "skipping the sanity check"                       pitfall 3
 *  5 "assuming energy is conserved on reconnection"    pitfall 4
 *  6 "pro-tip: reduce networks in stages"              pro-tip + footer chip
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
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

export default function P12Ch02Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Four traps this subtopic sets", "Four traps this subtopic sets")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)} d="M 360 62 C 480 58, 620 66, 730 60" stroke={RED} sw={2.4} dur={0.7} />

      {/* ─────────── LEFT: pitfalls 1 and 2, with the anchor between them ─────────── */}
      <G transform="translate(40, 92)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("PITFALL 1 — SWAPPING THE FORMULAS", "PITFALL 1 — SWAPPING THE FORMULAS")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.8)}>
          <T x={45} y={58} size={14.5} fill={GREEN} weight={900} anchor="start">
            Parallel:  C_eq = C₁ + C₂ + C₃ + …
          </T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.1)}>
          <T x={45} y={86} size={14.5} fill={GREEN} weight={900} anchor="start">
            Series:  1/C_eq = 1/C₁ + 1/C₂ + 1/C₃ + …
          </T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.4)}>
          <T x={45} y={110} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
            {t("the exact opposite of resistors", "the exact opposite of resistors")}
          </T>
        </Fade>

        {/* beat 2 — the anchor */}
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          <T x={45} y={152} size={14} fill={AMBER_DARK} weight={900} anchor="start">
            {t("ANCHOR: series shares CHARGE, parallel shares VOLTAGE",
               "ANCHOR: series shares CHARGE, parallel shares VOLTAGE")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.6)}>
          <T x={45} y={176} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
            {t("don't memorise the formulas in isolation — everything follows from this",
               "don't memorise the formulas in isolation — everything follows from this")}
          </T>
        </Fade>

        {/* beat 3 — pitfall 2 */}
        <Badge n={2} cx={20} cy={214} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={219} size={14} fill={RED} weight={800} anchor="start">
            {t("PITFALL 2 — LOSING THE SHARED QUANTITY", "PITFALL 2 — LOSING THE SHARED QUANTITY")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 0.8)}>
          <T x={45} y={250} size={13.5} fill={INK} weight={800} anchor="start">
            {t("Same charge in series. Same voltage in parallel.",
               "Same charge in series. Same voltage in parallel.")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.1)}>
          <T x={45} y={274} size={13.5} fill={INK} weight={700} anchor="start">
            {t("That is what gives you Q or V on one capacitor inside a network.",
               "That is what gives you Q or V on one capacitor inside a network.")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.4)}>
          <T x={45} y={298} size={12.5} fill={RED} weight={700} anchor="start">
            {t("get it backwards and every per-capacitor value is wrong",
               "get it backwards and every per-capacitor value is wrong")}
          </T>
        </Fade>
      </G>

      {/* ─────────── RIGHT: pitfalls 3 and 4 ─────────── */}
      <G transform="translate(560, 92)">
        <Badge n={3} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("PITFALL 3 — SKIPPING THE SANITY CHECK", "PITFALL 3 — SKIPPING THE SANITY CHECK")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 0.8)}>
          <T x={45} y={58} size={14} fill={GREEN} weight={900} anchor="start">
            {t("Series must come out BELOW the smallest value.",
               "Series must come out BELOW the smallest value.")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.1)}>
          <T x={45} y={84} size={14} fill={GREEN} weight={900} anchor="start">
            {t("Parallel must come out ABOVE the largest value.",
               "Parallel must come out ABOVE the largest value.")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.4)}>
          <T x={45} y={108} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
            {t("a single glance catches most slips before they cost marks",
               "a single glance catches most slips before they cost marks")}
          </T>
        </Fade>

        {/* beat 5 — pitfall 4 */}
        <Badge n={4} cx={20} cy={152} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={157} size={14} fill={RED} weight={800} anchor="start">
            {t("PITFALL 4 — THE CONSERVATION TRAP", "PITFALL 4 — THE CONSERVATION TRAP")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.8)}>
          <T x={45} y={188} size={14} fill={INK} weight={800} anchor="start">
            {t("Energy is NOT conserved when capacitors are reconnected.",
               "Energy is NOT conserved when capacitors are reconnected.")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.1)}>
          <T x={45} y={214} size={14.5} fill={GREEN} weight={900} anchor="start">
            {t("Only charge is conserved.", "Only charge is conserved.")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.4)}>
          <T x={45} y={238} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("always a loss unless the two voltages were already equal",
               "always a loss unless the two voltages were already equal")}
          </T>
        </Fade>
      </G>

      {/* ─────────── LOWER: the pro-tip ─────────── */}
      <G transform="translate(40, 430)">
        <Fade on={beat >= 6} delay={dl(6, 0.2)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("PRO-TIP FOR EXAM DAY", "PRO-TIP FOR EXAM DAY")}
          </T>
        </Fade>
        <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 45 33 L 240 33" stroke={RED} sw={2} dur={0.4} />

        <Fade on={beat >= 6} delay={dl(6, 0.8)}>
          <T x={45} y={62} size={14.5} anchor="start" fill={GREEN} weight={800}>
            {t("Reduce networks in stages, redrawing the circuit after each step, and label the Q and V you know at every node.",
               "Reduce networks in stages, redrawing the circuit after each step, and label the Q and V you know at every node.")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.1)}>
          <T x={45} y={86} size={13} anchor="start" fill={INK} weight={700}>
            {t("For two capacitors, memorise product over sum — far faster than reciprocals under time pressure.",
               "For two capacitors, memorise product over sum — far faster than reciprocals under time pressure.")}
          </T>
        </Fade>
      </G>

      {/* footer chip */}
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={40} y={546} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={15}>
          {t("★ Parallel adds · series adds reciprocally · series shares Q, parallel shares V · only charge survives a reconnection",
             "★ Parallel adds · series adds reciprocally · series shares Q, parallel shares V · only charge survives a reconnection")}
        </Chip>
      </Fade>
    </Scene>
  );
}
