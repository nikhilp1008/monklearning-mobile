/**
 * M11 Ch07 · Section 37 — "A divisibility proof, and a remainder mod 25"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 8 board_content items, seq1="Example 1" label — title invented, always-on.
 * Continues the 7^103 mod 25 example set up in Sec 34.
 *
 * Beats (en [0, 9.9, 32, 54.87, 63.91, 86.61, 105.22, 121.09]):
 *  0 Example 1 [CBSE] label — show 8 | (9^n - 1)
 *  1 9^n = (1+8)^n expanded
 *  2 9^n-1 = 8(...) ⇒ 8 | (9^n-1), boxed (HIGH)
 *  3 Example 2 [JEE Main] label — remainder of 7^103 mod 25
 *  4 7^103 = 7(7²)^51 = 7(50-1)^51
 *  5 (50-1)^51 ≡ (-1)^51 = -1 (mod 25)
 *  6 7^103 ≡ -7 ≡ 18 (mod 25), boxed (HIGH)
 *  7 red-margin HIGH: the trap and the spot
 *
 * Math hand-verified: 9^n-1=8(nC1+nC2·8+...) so 8|9^n-1; 50≡0(mod25) so
 * (50-1)^51≡(-1)^51=-1(mod25), 7·(-1)=-7≡18(mod25).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={INK} script>
          {t("a divisibility proof, and a remainder mod 25", "ek divisibility proof, aur ek remainder mod 25")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} script anchor="start">
          Example 1 [CBSE] — show 8 | (9^n - 1)
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={138} size={15} fill={INK} anchor="start">
          9^n = (1+8)^n = 1 + nC1·8 + nC2·8² + ⋯ + 8^n
        </T>
      </Fade>

      {/* beat 2 — boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={182} size={16} fill={AMBER_DARK} script anchor="start">
          9^n - 1 = 8(nC1 + nC2·8 + ⋯)   ⇒   8 | (9^n - 1)
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 160, 560, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — Example 2 label */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={248} size={15} fill={AMBER_DARK} anchor="start">
          Example 2 [JEE Main] — remainder of 7¹⁰³ mod 25
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={283} size={16} fill={INK} anchor="start">
          7¹⁰³ = 7(7²)⁵¹ = 7(50-1)⁵¹
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={318} size={16} fill={INK} anchor="start">
          (50-1)⁵¹ ≡ (-1)⁵¹ = -1   (mod 25)
        </T>
      </Fade>

      {/* beat 6 — boxed final */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={362} size={17} fill={AMBER_DARK} anchor="start">
          7¹⁰³ ≡ 7·(-1) = -7 ≡ 18   (mod 25)
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(135, 340, 440, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 400 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={424} size={15} fill={RED} script anchor="start">
          {t("trap: computing powers of 7 directly — spot 7²=50-1 so the modulus sits inside", "trap: 7 ki powers seedha nikaalna — 7²=50-1 dekho, modulus andar aa jaata")}
        </T>
      </Fade>
    </Scene>
  );
}
