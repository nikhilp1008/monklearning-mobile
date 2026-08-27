/**
 * P12Ch02 · Section 14 — "Potential energy — the cost of assembling a configuration"
 * Subtopic: Potential Energy & External Fields
 *
 * BOARD (unchanged): 3 charges q₁, q₂, q₃ assembled one by one from infinity,
 * the per-step work cost W₁ = 0, W₂ = k q₁q₂/r₁₂, W₃ = k q₁q₃/r₁₃ + k q₂q₃/r₂₃,
 * and the total U = Σ_pairs k q_i q_j / r_ij.
 *
 * BEAT GATING FIXED (2026-08-21):
 *
 * 1. A WHOLE BLOCK NEVER RENDERED. The summary badge, its heading, its two
 *    lines and the footer chip were gated on `beat >= 7`, but this section has
 *    7 narration segments, so useBeat only ever returns 0..6. That content was
 *    invisible in production.
 *
 * 2. DEAD AIR. The old gate set was {0,1,2,3,4,6,7}: beat 5 was never used and
 *    the whole right-hand work breakdown landed at beat 3, so the board froze
 *    from 28s to 61s while the narration kept going. Gates now map 1:1 onto
 *    the seven segments:
 *
 *      0  "an energy bill for a whole arrangement"   title
 *      1  "push two relatives close together…"       assembly heading
 *      2  "others are inseparable…"                  the three charges
 *      3  "depends on who sits next to whom"         the pair separations r_ij
 *      4  "the total work an external agent must do" work steps + total U
 *      5  "conservative — never the path or order"   order-independence + meaning
 *      6  "one number attached to a configuration"   footer verdict
 *
 * No numbers were changed: the board is symbolic and every symbol it uses
 * (W₁/W₂/W₃, r_ij, the pair sum) is what the narration describes.
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
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

export default function P12Ch02Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Electrostatic Potential Energy: The Work Cost of Assembling Charges", "Electrostatic Potential Energy: The Work Cost of Assembling Charges")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: STEP-BY-STEP ASSEMBLY DIAGRAM */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={25} cy={22} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("ASSEMBLING CHARGES ONE-BY-ONE FROM ∞", "ASSEMBLING CHARGES ONE-BY-ONE FROM ∞")}
          </T>
        </Fade>

        {/* beat 2 — the guests take their seats */}
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          {/* Charge 1 */}
          <Circle cx={200} cy={75} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={200} y={80} size={15} fill={RED} weight={800}>+q₁</T>

          {/* Charge 2 */}
          <Circle cx={80} cy={230} r={18} fill="#dcfce7" stroke={GREEN} strokeWidth={2} />
          <T x={80} y={235} size={16} fill={GREEN} weight={800}>-q₂</T>

          {/* Charge 3 */}
          <Circle cx={340} cy={230} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={340} y={235} size={15} fill={RED} weight={800}>+q₃</T>
        </Fade>

        {/* beat 3 — who ends up sitting next to whom: the pair separations */}
        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          {/* Pair distance lines */}
          <Line x1="185" y1="90" x2="95" y2="215" stroke={AMBER_DARK} strokeWidth={2} strokeDasharray="4 4" />
          <T x={125} y={155} size={12} fill={AMBER_DARK} weight={800}>r₁₂</T>

          <Line x1="100" y1="230" x2="320" y2="230" stroke={GREEN} strokeWidth={2} strokeDasharray="4 4" />
          <T x={210} y={248} size={12} fill={GREEN} weight={800}>r₂₃</T>

          <Line x1="215" y1="90" x2="325" y2="215" stroke={RED} strokeWidth={2} strokeDasharray="4 4" />
          <T x={290} y={155} size={12} fill={RED} weight={800}>r₁₃</T>
        </Fade>

        {/* beat 4 — the total, once the three work steps are on the board */}
        <Fade on={beat >= 4} delay={dl(4, 1.6)}>
          <T x={210} y={305} anchor="middle" size={15} fill={INK} weight={800}>
            Total Energy U = W₁ + W₂ + W₃ (Stored in configuration field!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: WORK COMPUTATION BREAKDOWN */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={25} cy={22} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={26} size={15} fill={RED} weight={800} anchor="start">
            {t("WORK COST PER CHARGE STEP", "WORK COST PER CHARGE STEP")}
          </T>
        </Fade>

        {/* beat 4 — the work an external agent pays, charge by charge */}
        <Fade on={beat >= 4} delay={dl(4, 0.8)}>
          <T x={45} y={75} size={15} fill={AMBER_DARK} weight={800} anchor="start">
            1. Bring q₁ from ∞: W₁ = 0  (No existing field!)
          </T>

          <T x={45} y={125} size={15} fill={GREEN} weight={800} anchor="start">
            2. Bring q₂ into q₁ field: W₂ = q₂ V₁(r₁₂) = k q₁ q₂ / r₁₂
          </T>

          <T x={45} y={175} size={15} fill={RED} weight={800} anchor="start">
            3. Bring q₃ into (q₁+q₂) fields: W₃ = k q₁q₃/r₁₃ + k q₂q₃/r₂₃
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 200 L 450 200" stroke={INK} sw={2} />

          <T x={45} y={240} size={18} fill={GREEN} weight={800} anchor="start">
            4. U_total = Σ_pairs (k q_i q_j / r_ij)
          </T>
        </Fade>

        {/* beat 5 — path & order independence */}
        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <T x={240} y={285} anchor="middle" size={13} fill={GREEN} weight={800}>
            Independent of the order in which charges are brought together!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.5)} />
        <Fade on={beat >= 5} delay={dl(5, 0.8)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("PHYSICAL MEANING OF POTENTIAL ENERGY", "PHYSICAL MEANING OF POTENTIAL ENERGY")}
          </T>
        </Fade>

        <Fade on={beat >= 5} delay={dl(5, 1.1)}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            {t("U represents work done by external agent without acceleration from initial infinite separation!", "U represents work done by external agent without acceleration from initial infinite separation!")}
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            {t("Pair counting formula: N(N-1)/2 total pairs for N charges!", "Pair counting formula: N(N-1)/2 total pairs for N charges!")}
          </T>
        </Fade>
      </G>

      {/* beat 6 — one number attached to the configuration */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Potential Energy Assembly Mastered: U = Σ k q_i q_j / r_ij equals total work done in bringing charges from ∞! ✓",
            "★ Potential Energy Assembly Mastered: U = Σ k q_i q_j / r_ij equals total work done in bringing charges from ∞! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
