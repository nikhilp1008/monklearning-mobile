/**
 * P12Ch02 · Section 39 — "Why the field inside a conductor is exactly zero"
 * Subtopic: Conductors & Spherical Capacitors
 *
 * BOARD (unchanged): a solid conductor in an external field E₀; free electrons
 * drift to the left face (−σ_ind) leaving positive ions on the right (+σ_ind);
 * the induced field E_ind grows until it exactly cancels E₀, so E_inside = 0.
 *
 * BEAT GATING FIXED (2026-08-21):
 *
 * 1. A WHOLE BLOCK NEVER RENDERED. The conductor-rule badge, its heading, its
 *    two lines and the footer chip were gated on `beat >= 7`. This section has
 *    7 narration segments, so useBeat only ever returns 0..6 — the headline
 *    rule never actually reached the board.
 *
 * 2. DEAD AIR. The old gate set was {0,1,3,4,6,7}: beats 2 and 5 went unused,
 *    the whole drift diagram appeared at once on beat 1, and the whole
 *    right-hand argument at once on beat 4. Gates now map 1:1 onto the
 *    segments, so the diagram builds as the voice builds it:
 *
 *      0  "a material packed with free electrons"  title
 *      1  "an obedient crowd… any field"           E₀ arrows + conductor body
 *      2  "they shuffle until they cancel it"      induced ±σ + E_ind arrow
 *      3  "not merely small — exactly zero"        E_inside = E₀ − E_ind = 0
 *      4  "the argument is airtight"               force → drift → cancellation
 *      5  "settles once nobody is being pushed"    the equilibrium contradiction
 *      6  "only in electrostatic equilibrium"      conductor rule + footer
 *
 * No numbers were changed. The one figure the board carries that the voice
 * does not quote is the ~10⁻¹⁴ s relaxation time; it agrees with the voice's
 * "instantly rearranges", so it was left as a supporting detail.
 */

import React from "react";
import { G, Path, Rect } from 'react-native-svg';
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

export default function P12Ch02Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Electron drift animation inside conductor
  const driftX = Math.min(60, currentTime * 20);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Why Electrostatic Field Inside a Conductor is EXACTLY Zero (E_inside = 0)", "Why Electrostatic Field Inside a Conductor is EXACTLY Zero (E_inside = 0)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: CONDUCTOR INDUCED CHARGE DRIFT */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FREE ELECTRON DRIFT & INDUCED OPPOSING FIELD", "FREE ELECTRON DRIFT & INDUCED OPPOSING FIELD")}
          </T>
        </Fade>

        {/* beat 1 — the crowd of free electrons, and the field pushing on it */}
        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          {/* External Field Arrows E0 */}
          <Path d={arrowD(20, 95, 380, 95)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(20, 155, 380, 155)} stroke={RED} strokeWidth={2.5} />
          <Path d={arrowD(20, 215, 380, 215)} stroke={RED} strokeWidth={2.5} />
          <T x={395} y={159} size={13} fill={RED} weight={800} anchor="start">E₀ External</T>

          {/* Conductor Block Outline (Open Chalkboard) */}
          <Rect x="110" y="80" width="220" height="150" rx={12} fill="none" stroke={INK} strokeWidth={1.8} strokeDasharray="6 4" />
        </Fade>

        {/* beat 2 — they shuffle until their own field cancels the intruder */}
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          {/* Induced Charges on Boundaries */}
          <T x={125} y={145} size={18} fill={GREEN} weight={900} anchor="middle">− − − −</T>
          <T x={315} y={145} size={18} fill={RED} weight={900} anchor="middle">+ + + +</T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.7)}>
          {/* Opposing Internal Field E_ind */}
          <Path d={arrowD(300, 175, 140, 175)} stroke={GREEN} strokeWidth={2.5} />
          <T x={220} y={195} size={13} fill={GREEN} weight={900} anchor="middle">E_ind (Opposes E₀)</T>
        </Fade>

        {/* beat 3 — the headline result */}
        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            Net Internal Field E_inside = E₀ − E_ind = 0 N/C !
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: EQUILIBRIUM MECHANISM STEPS */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("EQUILIBRIUM MECHANISM IN ~10⁻¹⁴ SECONDS", "EQUILIBRIUM MECHANISM IN ~10⁻¹⁴ SECONDS")}
          </T>
        </Fade>

        {/* beat 4 — the airtight chain: force, drift, cancellation */}
        <Fade on={beat >= 4} delay={dl(4, 0.8)}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. External field E₀ exerts force F = −e E₀ on free electrons.
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.2)}>
          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Electrons drift left, creating surface charge density ±σ_ind.
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.6)}>
          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. E_ind grows until E_ind = E₀ exactly canceling E₀.
          </T>
        </Fade>

        {/* beat 5 — the crowd only settles once nobody is being pushed */}
        <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. If E ≠ 0 inside, charge would flow (Not Static)!
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.9)}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Equilibrium means ALL internal charge motion has ceased)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FOUNDATIONAL CONDUCTOR RULE", "FOUNDATIONAL CONDUCTOR RULE")}
          </T>
        </Fade>

        <Fade on={beat >= 6} delay={dl(6, 0.8)}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Inside any conductor in electrostatic equilibrium (solid or hollow), E_inside = 0 N/C!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            This holds regardless of external charge configuration or shape!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip — beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Conductor Rule 1 Mastered: Internal electric field E_inside = 0 N/C in electrostatic equilibrium! ✓",
            "★ Conductor Rule 1 Mastered: Internal electric field E_inside = 0 N/C in electrostatic equilibrium! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
