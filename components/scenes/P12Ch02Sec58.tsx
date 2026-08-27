/**
 * P12Ch02 · Section 58 — "Deriving the parallel combination formula"
 * Subtopic: Series & Parallel Combinations Derivations
 *
 * THREE DEFECTS FIXED (2026-08-21):
 *
 * 1. THE BOARD DERIVED A DIFFERENT FORMULA FROM THE VOICE. The scene was built
 *    for an older section titled "Deriving common potential and energy loss on
 *    connecting two conductors": it ran the whole U_i − U_f algebra and ended
 *    at ΔU = ½[C₁C₂/(C₁+C₂)](V₁ − V₂)². The narration now at position 58 is the
 *    PARALLEL combination derivation — C₁, C₂, C₃ across one source, V factored
 *    out, C_parallel = C₁ + C₂ + C₃ — and never mentions common potential or
 *    energy loss. (That derivation is what position 59 narrates.) Narration is
 *    authoritative, so every line on the board is now a step the voice takes.
 *
 * 2. A WHOLE BLOCK NEVER RENDERED. The verdict badge, its heading, its two
 *    lines and the footer chip were gated on `beat >= 7`, but this section has
 *    7 narration segments so useBeat only ever returns 0..6.
 *
 * 3. DEAD AIR. The old gate set was {0,1,3,4,6,7}: beats 2 and 5 drew nothing.
 *
 * Beats now map 1:1 onto the seven segments
 * (board_reveal_at_english [0, 5.63, 15.87, 22.19, 33.37, 45.06, 56.66]):
 *
 *   0  "the mirror-image path"                      title
 *   1  "C₁, C₂, C₃ side by side, same V on each"     three-branch schematic
 *   2  "each draws its own capacitance times V"      Q₁ = C₁V, Q₂ = C₂V, Q₃ = C₃V
 *   3  "the battery supplies the total; factor out   Q = ΣQᵢ = (C₁+C₂+C₃)V
 *       the common V"
 *   4  "here it is V that factors out, not Q"        the mirror observation
 *   5  "Q = C_parallel V, comparing gives the sum"   the result
 *   6  "always exceeds the largest member"           verdict + chip
 *
 * NUMBERS: this derivation is purely symbolic — no worked numbers to check
 * against the narration.
 */

import React from "react";
import { G, Line } from 'react-native-svg';
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

export default function P12Ch02Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Deriving C_parallel = C₁ + C₂ + C₃ — the mirror image of the series proof",
             "Deriving C_parallel = C₁ + C₂ + C₃ — the mirror image of the series proof")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.0)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THREE BRANCHES ACROSS ONE SOURCE */}
      <G transform="translate(40, 75)">
        {/* beat 1 — the same V across each */}
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THREE CAPACITORS SIDE BY SIDE ACROSS ONE SOURCE", "THREE CAPACITORS SIDE BY SIDE ACROSS ONE SOURCE")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          {/* rails */}
          <Line x1="45" y1="165" x2="100" y2="165" stroke={INK} strokeWidth={2} />
          <Line x1="100" y1="100" x2="100" y2="230" stroke={INK} strokeWidth={2} />
          <Line x1="320" y1="100" x2="320" y2="230" stroke={INK} strokeWidth={2} />
          <Line x1="320" y1="165" x2="380" y2="165" stroke={INK} strokeWidth={2} />

          {/* branch 1 — C1 */}
          <Line x1="100" y1="100" x2="200" y2="100" stroke={INK} strokeWidth={2} />
          <Line x1="200" y1="80" x2="200" y2="120" stroke={RED} strokeWidth={3} />
          <Line x1="220" y1="80" x2="220" y2="120" stroke={RED} strokeWidth={3} />
          <Line x1="220" y1="100" x2="320" y2="100" stroke={INK} strokeWidth={2} />
          <T x={210} y={70} size={13} fill={RED} weight={900} anchor="middle">C₁</T>

          {/* branch 2 — C2 */}
          <Line x1="100" y1="165" x2="200" y2="165" stroke={INK} strokeWidth={2} />
          <Line x1="200" y1="145" x2="200" y2="185" stroke={GREEN} strokeWidth={3} />
          <Line x1="220" y1="145" x2="220" y2="185" stroke={GREEN} strokeWidth={3} />
          <Line x1="220" y1="165" x2="320" y2="165" stroke={INK} strokeWidth={2} />
          <T x={210} y={137} size={13} fill={GREEN} weight={900} anchor="middle">C₂</T>

          {/* branch 3 — C3 */}
          <Line x1="100" y1="230" x2="200" y2="230" stroke={INK} strokeWidth={2} />
          <Line x1="200" y1="210" x2="200" y2="250" stroke={AMBER_DARK} strokeWidth={3} />
          <Line x1="220" y1="210" x2="220" y2="250" stroke={AMBER_DARK} strokeWidth={3} />
          <Line x1="220" y1="230" x2="320" y2="230" stroke={INK} strokeWidth={2} />
          <T x={210} y={202} size={13} fill={AMBER_DARK} weight={900} anchor="middle">C₃</T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.3)}>
          <T x={45} y={282} anchor="start" size={13.5} fill={INK} weight={800}>
            {t("All three hang on the same two rails — so each has exactly the same V across it.",
               "All three hang on the same two rails — so each has exactly the same V across it.")}
          </T>
        </Fade>

        {/* beat 2 — each draws its own charge */}
        <Fade on={beat >= 2} delay={dl(2, 0.3)}>
          <T x={45} y={314} anchor="start" size={15} fill={AMBER_DARK} weight={900}>
            Q₁ = C₁ V,   Q₂ = C₂ V,   Q₃ = C₃ V
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: FACTOR OUT THE SHARED V */}
      <G transform="translate(540, 75)">
        {/* beat 3 — the total, then factor */}
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FACTOR OUT THE QUANTITY THEY SHARE", "FACTOR OUT THE QUANTITY THEY SHARE")}
          </T>
        </Fade>

        <Fade on={beat >= 3} delay={dl(3, 0.8)}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. The battery supplies the total: Q = Q₁ + Q₂ + Q₃
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.2)}>
          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Q = C₁V + C₂V + C₃V = (C₁ + C₂ + C₃) V
          </T>
        </Fade>

        {/* beat 4 — it is V that factors out here, not Q */}
        <Fade on={beat >= 4} delay={dl(4, 0.2)}>
          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Here it is V that factors out — in series it was Q.
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 0.6)}>
          <T x={45} y={194} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
            {t("the exact mirror of the series derivation — it traces straight back to which quantity is shared",
               "the exact mirror of the series derivation — it traces straight back to which quantity is shared")}
          </T>
        </Fade>

        {/* beat 5 — compare with Q = C_parallel V */}
        <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M 45 214 L 450 214" stroke={INK} sw={1.8} dur={0.5} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={252} size={16} fill={GREEN} weight={900} anchor="start">
            4. Q = C_parallel V  ⇒  C_parallel = C₁ + C₂ + C₃
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.9)}>
          <T x={45} y={282} anchor="start" size={13} fill={MUTED} weight={600}>
            (the one equivalent capacitor holds the same total charge at the same voltage V)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: THE VERDICT */}
      <G transform="translate(40, 410)">
        {/* beat 6 */}
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DERIVATION VERDICT", "DERIVATION VERDICT")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 0.9)}>
          <T x={45} y={54} size={14.5} anchor="start" fill={GREEN} weight={900}>
            {t("Because the capacitances add directly, the parallel value always exceeds the largest member of the group.",
               "Because the capacitances add directly, the parallel value always exceeds the largest member of the group.")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.2)}>
          <T x={45} y={80} size={13} anchor="start" fill={INK} weight={700}>
            {t("Which quantity is shared decides which one factors out — and that single fact separates the two derivations.",
               "Which quantity is shared decides which one factors out — and that single fact separates the two derivations.")}
          </T>
        </Fade>
      </G>

      {/* beat 6 — footer */}
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Shared V factors out ⇒ C_parallel = C₁ + C₂ + C₃, always larger than the biggest capacitor in the group",
            "★ Shared V factors out ⇒ C_parallel = C₁ + C₂ + C₃, always larger than the biggest capacitor in the group"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
