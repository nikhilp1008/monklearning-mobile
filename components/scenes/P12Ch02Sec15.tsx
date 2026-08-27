/**
 * P12Ch02 · Section 15 — "The sign of U tells the story of the system"
 * Subtopic: Potential Energy & External Fields
 *
 * BOARD (unchanged): two configurations side by side —
 *  - Case 1: like charges (+q, +q) → repulsion (← →), U > 0, unbound
 *  - Case 2: unlike charges (+q, −q) → attraction (→ ←), U < 0, bound
 *
 * BEAT GATING FIXED (2026-08-21):
 *
 * 1. A WHOLE BLOCK NEVER RENDERED. The sign-convention badge, its heading, its
 *    two lines and the footer chip were gated on `beat >= 7`. This section has
 *    7 narration segments, so useBeat only ever returns 0..6 — that content was
 *    invisible in production.
 *
 * 2. DEAD AIR. The old gate set was {0,1,3,4,6,7}: beats 2 and 5 were unused,
 *    so the whole like-charge case landed in one dump at beat 1 and the board
 *    then sat still through two segments. Gates now map 1:1 onto the segments:
 *
 *      0  "the sign is not a technicality"        title
 *      1  "look at the two configurations here"   like-charge pair + repulsion
 *      2  "external agent does positive work"     U = +k q₁q₂/r > 0
 *      3  "wound up like a compressed spring"     why the work had to be done
 *      4  "their attraction does the work"        unlike-charge pair + U < 0
 *      5  "bound, like a fixed deposit"           energy released / BOUND
 *      6  "every bound system carries negative U" sign rules + footer verdict
 *
 * No numbers were changed: the board is symbolic (q₁, q₂, r) throughout and
 * matches the narration, which quotes no worked figures either.
 */

import React from "react";
import { Circle, G, Path } from 'react-native-svg';
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

export default function P12Ch02Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Sign of Potential Energy U: Positive (Repulsive) vs Negative (Bound)", "The Sign of Potential Energy U: Positive (Repulsive) vs Negative (Bound)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: LIKE CHARGES (+q, +q) -> U > 0 */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("LIKE CHARGES (+q, +q): U > 0 (REPULSIVE)", "LIKE CHARGES (+q, +q): U > 0 (REPULSIVE)")}
          </T>
        </Fade>

        {/* beat 1 — the first of the two configurations */}
        <Fade on={beat >= 1} delay={dl(1, 0.8)}>
          <Circle cx={140} cy={165} r={22} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={140} y={172} size={18} fill={RED} weight={800}>+q₁</T>

          <Circle cx={320} cy={165} r={22} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={320} y={172} size={18} fill={RED} weight={800}>+q₂</T>

          {/* Repulsive force arrows pointing outward ← → */}
          <Path d={arrowD(110, 165, 50, 165)} stroke={RED} strokeWidth={3} />
          <Path d={arrowD(350, 165, 410, 165)} stroke={RED} strokeWidth={3} />

          <T x={230} y={130} size={14} fill={RED} weight={800} anchor="middle">Force Repels ← →</T>
        </Fade>

        {/* beat 2 — the external agent does positive work, so U > 0 */}
        <Fade on={beat >= 2} delay={dl(2, 0.3)}>
          <T x={230} y={210} size={18} fill={RED} weight={900} anchor="middle">U = + k q₁q₂ / r &gt; 0</T>
        </Fade>

        {/* beat 3 — wound up like a compressed spring */}
        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={230} y={268} anchor="middle" size={14} fill={INK} weight={800}>
            Work must be done by external force
          </T>
          <T x={230} y={290} anchor="middle" size={14} fill={INK} weight={800}>
            to push them together against repulsion!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: UNLIKE CHARGES (+q, -q) -> U < 0 */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("UNLIKE CHARGES (+q, −q): U < 0 (BOUND SYSTEM)", "UNLIKE CHARGES (+q, −q): U < 0 (BOUND SYSTEM)")}
          </T>
        </Fade>

        {/* Sphere pair & attraction arrows */}
        <Fade on={beat >= 4}>
          <Circle cx={140} cy={165} r={22} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={140} y={172} size={18} fill={RED} weight={800}>+q₁</T>

          <Circle cx={320} cy={165} r={22} fill="#dcfce7" stroke={GREEN} strokeWidth={2} />
          <T x={320} y={172} size={20} fill={GREEN} weight={800}>-q₂</T>

          {/* Attraction force arrows pointing inward → ← */}
          <Path d={arrowD(170, 165, 215, 165)} stroke={GREEN} strokeWidth={3} />
          <Path d={arrowD(290, 165, 245, 165)} stroke={GREEN} strokeWidth={3} />

          <T x={230} y={130} size={14} fill={GREEN} weight={800} anchor="middle">Force Attracts → ←</T>
          <T x={230} y={210} size={18} fill={GREEN} weight={900} anchor="middle">U = − k q₁q₂ / r &lt; 0</T>
        </Fade>

        {/* beat 5 — bound, like money locked in a fixed deposit */}
        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <T x={230} y={268} anchor="middle" size={14} fill={GREEN} weight={800}>
            Energy released as they attract —
          </T>
          <T x={230} y={290} anchor="middle" size={14} fill={GREEN} weight={800}>
            System is BOUND (like e⁻ & p⁺ in atom)!
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ENERGY SIGN CONVENTION RULES", "ENERGY SIGN CONVENTION RULES")}
          </T>
        </Fade>

        <Fade on={beat >= 6} delay={dl(6, 0.8)}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            U &lt; 0 means Bound System (Requires external work to separate to infinity U(∞) = 0)!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            U &gt; 0 means Unbound System (Releases kinetic energy if released from rest)!
          </T>
        </Fade>
      </G>

      {/* beat 6 — the rule every bound system in nature obeys */}
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Sign Convention Mastered: Positive U = Repulsive/Unbound; Negative U = Attractive/Bound System! ✓",
            "★ Sign Convention Mastered: Positive U = Repulsive/Unbound; Negative U = Attractive/Bound System! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
