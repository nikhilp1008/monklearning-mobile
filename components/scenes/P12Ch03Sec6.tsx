/**
 * P12Ch03 · Section 6 — "Non-unique characteristics and two kinds of resistance"
 * Subtopic: Limitations of Ohm's Law
 *
 * DEFECT FIXED (2026-08-21) — UNREACHABLE TRAILING BLOCK.
 * This section has 8 narration segments (board_reveal_at_english
 * [0, 9.11, 18.59, 27.7, 39.73, 52.85, 63.42, 76.17]), so useBeat only ever
 * returns 0..7. The closing badge, its heading, its two summary lines and the
 * footer chip were all gated on `beat >= 8` — they never rendered in
 * production. They now land on beat 7, the segment that actually states them
 * ("for an ordinary ohmic resistor the two are identical … in a negative-
 * resistance region the dynamic value turns negative while the static stays
 * firmly positive").
 *
 * Beat 6 was also near-dead: the only element gated on it was a horizontal
 * rule. Steps 3 and 4 of the right-hand column moved off beat 5 so the reading
 * fills 5 → 6 → 7 instead of dumping in one go.
 *
 * Numbers/claims checked against the narration: GaAs, negative-resistance
 * region, dV/dI < 0, R_static = V/I, R_dynamic = dV/dI — all match the voice;
 * nothing had to be rewritten.
 *
 *   0  "third failure … two meanings of resistance"    title
 *   1  "the relation can be non-unique"                axes + panel heading
 *   2  "the characteristic bends back on itself"       the S-curve
 *   3  "gallium arsenide … negative-resistance region" highlighted branch
 *   4  "clean classification: ohmic vs non-ohmic"      the GaAs note
 *   5  "we define two resistances"                     static + dynamic defs
 *   6  "read them off the graph"                       rule + ohmic equality
 *   7  "for an ohmic resistor the two are identical"   verdict + chip
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

export default function P12Ch03Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Non-unique characteristics & two kinds of resistance", "Non-unique characteristics & two kinds of resistance")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: GaAs CHARACTERISTICS & GRAPH */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GaAs V-I CHARACTERISTIC & NEGATIVE R", "GaAs V-I CHARACTERISTIC & NEGATIVE R")}
          </T>
        </Fade>

        {/* GaAs V-I Graph (Open Chalkboard) */}
        <Fade on={beat >= 1}>
          <G transform="translate(0, 10)">
            <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 45 200 L 320 200" stroke={INK} sw={2} />
            <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 45 200 L 45 40" stroke={INK} sw={2} />
            <T x={330} y={205} size={13} fill={INK} weight={800}>V</T>
            <T x={45} y={28} size={13} fill={INK} weight={800}>I</T>

            {/* S-shaped curve for GaAs */}
            <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M 45 190 C 90 70 130 50 170 70 C 210 90 230 160 270 170 C 290 175 310 130 320 70" stroke={AMBER_DARK} sw={2.5} />

            {/* Negative resistance region highlight */}
            <Fade on={beat >= 3}>
              <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 170 70 C 210 90 230 160 270 170" stroke={RED} sw={3.5} />
              <T x={220} y={120} size={12} fill={RED} weight={800}>Negative R (dV/dI &lt; 0)</T>
            </Fade>
          </G>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (In GaAs, increasing voltage V reduces current I in the negative resistance zone)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: STATIC VS DYNAMIC RESISTANCE */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("STATIC VS DYNAMIC RESISTANCE", "STATIC VS DYNAMIC RESISTANCE")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Static Resistance: R_static = V / I (Chord slope from origin, always &gt; 0)
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Dynamic Resistance: R_dynamic = dV / dI (Tangent slope at operating point)
          </T>
        </Fade>

        {/* beat 6 — reading the two off the graph */}
        <Fade on={beat >= 6} delay={dl(6, 0.3)}>
          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Ohmic Equality: For linear Ohmic materials, R_static = R_dynamic.
          </T>
        </Fade>

        <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

        {/* beat 7 — where the two part company */}
        <Fade on={beat >= 7} delay={dl(7, 0.2)}>
          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Non-Ohmic: R_dynamic = dV/dI can be positive, zero, or negative!
          </T>
        </Fade>

        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Gallium Arsenide (GaAs) exhibits negative dynamic resistance region)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("RESISTANCE CLASSIFICATION VERDICT", "RESISTANCE CLASSIFICATION VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Static resistance R_static = V/I measures total opposition and is strictly positive for active elements.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Dynamic resistance R_dynamic = dV/dI measures incremental opposition and can be negative in devices like GaAs!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Ohmic: R_static = R_dynamic. Non-Ohmic: R_dynamic = dV/dI (can be negative like in GaAs)! ✓",
            "★ Ohmic: R_static = R_dynamic. Non-Ohmic: R_dynamic = dV/dI (can be negative like in GaAs)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
