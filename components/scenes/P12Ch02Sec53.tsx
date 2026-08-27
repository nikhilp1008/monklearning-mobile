/**
 * P12Ch02 · Section 53 — "Parallel — side by side, sharing voltage"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 *
 * THREE DEFECTS FIXED (2026-08-21):
 *
 * 1. THE BOARD TAUGHT A DIFFERENT TOPIC FROM THE VOICE. The scene was built
 *    for an older section called "Charge redistribution — connecting two
 *    charged spheres": it drew two spheres on a wire, the common potential
 *    V_com = (C₁V₁ + C₂V₂)/(C₁ + C₂) and the energy loss ΔU. The narration now
 *    at position 53 is the PARALLEL combination, start to finish, and never
 *    mentions spheres, common potential or energy loss. (That material is what
 *    position 54 now narrates.) Narration is authoritative, so the board was
 *    rebuilt around parallel: the side-by-side schematic, the shared V, the
 *    charges adding, and the series-vs-parallel mnemonic segment 6 delivers.
 *
 * 2. A WHOLE BLOCK NEVER RENDERED. The recap badge, its heading, its two lines
 *    and the footer chip were gated on `beat >= 7`, but this section has 7
 *    narration segments so useBeat only ever returns 0..6.
 *
 * 3. DEAD AIR. The old gate set was {0,1,3,4,6,7}: beats 2 and 5 drew nothing.
 *
 * Beats now map 1:1 onto the seven segments
 * (board_reveal_at_english [0, 5.29, 12.29, 23.47, 34.13, 45.99, 54.61]):
 *
 *   0  "the opposite arrangement, mirror image"       title
 *   1  "all left plates joined, all right joined"     parallel schematic
 *   2  "every capacitor sees the same voltage V"      the shared-V annotation
 *   3  "each grabs its own charge, Q = CV, and        Q₁ = C₁V … total Q
 *       they all add up to the battery's total"
 *   4  "more plate area ⇒ the capacitances just add"  C_eq = C₁ + C₂ + C₃
 *   5  "spot which quantity is shared"                the mnemonic
 *   6  "capacitors are the mirror image of            the resistor mirror + chip
 *       resistors"
 *
 * NUMBERS: this scene carries no numeric worked example — nothing to check
 * against the narration, and nothing was changed.
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
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

export default function P12Ch02Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Parallel — side by side, every capacitor across the same voltage V",
             "Parallel — side by side, every capacitor across the same voltage V")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.0)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THE PARALLEL SCHEMATIC */}
      <G transform="translate(40, 75)">
        {/* beat 1 — all left plates joined, all right plates joined */}
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ALL LEFT PLATES JOINED, ALL RIGHT PLATES JOINED", "ALL LEFT PLATES JOINED, ALL RIGHT PLATES JOINED")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          <Line x1="45" y1="170" x2="100" y2="170" stroke={INK} strokeWidth={2} />
          <Line x1="100" y1="110" x2="100" y2="230" stroke={INK} strokeWidth={2} />

          {/* Top branch C1 */}
          <Line x1="100" y1="110" x2="190" y2="110" stroke={INK} strokeWidth={2} />
          <Line x1="190" y1="90" x2="190" y2="130" stroke={RED} strokeWidth={3} />
          <Line x1="210" y1="90" x2="210" y2="130" stroke={RED} strokeWidth={3} />
          <T x={200} y={80} size={13} fill={RED} weight={900} anchor="middle">C₁</T>
          <Line x1="210" y1="110" x2="300" y2="110" stroke={INK} strokeWidth={2} />

          {/* Bottom branch C2 */}
          <Line x1="100" y1="230" x2="190" y2="230" stroke={INK} strokeWidth={2} />
          <Line x1="190" y1="210" x2="190" y2="250" stroke={GREEN} strokeWidth={3} />
          <Line x1="210" y1="210" x2="210" y2="250" stroke={GREEN} strokeWidth={3} />
          <T x={200} y={200} size={13} fill={GREEN} weight={900} anchor="middle">C₂</T>
          <Line x1="210" y1="230" x2="300" y2="230" stroke={INK} strokeWidth={2} />

          <Line x1="300" y1="110" x2="300" y2="230" stroke={INK} strokeWidth={2} />
          <Line x1="300" y1="170" x2="380" y2="170" stroke={INK} strokeWidth={2} />
        </Fade>

        {/* beat 2 — clipped to the very same two terminals, so the same V */}
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          <Circle cx={100} cy={170} r={4.5} fill={INK} />
          <Circle cx={300} cy={170} r={4.5} fill={INK} />
          <T x={92} y={272} size={13} fill={AMBER_DARK} weight={900} anchor="middle">terminal A</T>
          <T x={308} y={272} size={13} fill={AMBER_DARK} weight={900} anchor="middle">terminal B</T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.6)}>
          <T x={45} y={298} anchor="start" size={13.5} fill={INK} weight={800}>
            {t("Both ends of every capacitor sit on the very same two terminals —",
               "Both ends of every capacitor sit on the very same two terminals —")}
          </T>
          <T x={45} y={318} anchor="start" size={13.5} fill={INK} weight={800}>
            {t("there is no way for them to see anything but the same V.",
               "there is no way for them to see anything but the same V.")}
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: THE CHARGES ADD UP */}
      <G transform="translate(540, 75)">
        {/* beat 3 — each grabs its own charge and they add */}
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("EACH ONE GRABS ITS OWN CHARGE", "EACH ONE GRABS ITS OWN CHARGE")}
          </T>
        </Fade>

        <Fade on={beat >= 3} delay={dl(3, 0.8)}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Individually: Q₁ = C₁ V,  Q₂ = C₂ V,  Q₃ = C₃ V
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.2)}>
          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. The battery supplies the total: Q = Q₁ + Q₂ + Q₃
          </T>
        </Fade>

        {/* beat 4 — more plate area, so the capacitances add */}
        <Fade on={beat >= 4} delay={dl(4, 0.2)}>
          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. More capacitors = more plate area to store charge.
          </T>
        </Fade>
        <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} dur={0.5} />
        <Fade on={beat >= 4} delay={dl(4, 0.9)}>
          <T x={45} y={235} size={17} fill={GREEN} weight={900} anchor="start">
            C_eq = C₁ + C₂ + C₃   (they simply add)
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.3)}>
          <T x={45} y={268} anchor="start" size={13} fill={MUTED} weight={600}>
            (so parallel C_eq is always larger than the largest member)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: HOLDING BOTH ARRANGEMENTS AT ONCE */}
      <G transform="translate(40, 400)">
        {/* beat 5 — spot what is shared */}
        <Badge n={3} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SPOT WHICH QUANTITY IS SHARED — EVERYTHING ELSE FOLLOWS", "SPOT WHICH QUANTITY IS SHARED — EVERYTHING ELSE FOLLOWS")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.9)}>
          <T x={45} y={54} size={14.5} anchor="start" fill={GREEN} weight={900}>
            {t("Series shares CHARGE → reciprocals add.    Parallel shares VOLTAGE → capacitances add directly.",
               "Series shares CHARGE → reciprocals add.    Parallel shares VOLTAGE → capacitances add directly.")}
          </T>
        </Fade>

        {/* beat 6 — the resistor mirror */}
        <Fade on={beat >= 6} delay={dl(6, 0.3)}>
          <T x={45} y={82} size={13.5} anchor="start" fill={INK} weight={700}>
            {t("Capacitors are the mirror image of resistors: series C behaves like parallel R, parallel C like series R.",
               "Capacitors are the mirror image of resistors: series C behaves like parallel R, parallel C like series R.")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 0.6)}>
          <T x={45} y={106} size={12.5} anchor="start" fill={INK_LIGHT} weight={600}>
            {t("remember one of the pair and you get the other by flipping the words",
               "remember one of the pair and you get the other by flipping the words")}
          </T>
        </Fade>
      </G>

      {/* beat 6 — footer */}
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Parallel shares the VOLTAGE: same V everywhere, charges add, and C_eq = C₁ + C₂ + C₃",
            "★ Parallel shares the VOLTAGE: same V everywhere, charges add, and C_eq = C₁ + C₂ + C₃"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
