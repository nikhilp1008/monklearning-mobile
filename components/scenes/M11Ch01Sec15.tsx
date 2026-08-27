/**
 * M11 Ch01 · Section 15 — "Speed trap: from n[P(A)] = 256 to n(A) and proper subsets"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples (SPEED TRAP).
 *
 * Beats (board_reveal_at_english [0, 11.86, 26.11, 35.67, 45.14, 62.55]):
 *  0 title (always-on)
 *  1 speed move: recognise 256 = 2⁸
 *  2 LEFT col: n[P(A)] = 2^n(A) = 2⁸ ⇒ n(A) = 8
 *  3 RIGHT col: proper = 2⁸ − 1 = 255
 *  4 TRAP A (left): stage "n(A) = 256" wrong, cross it, correct
 *  5 TRAP B (right): stage "proper = 254" wrong, cross it, correct
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "256 = 2⁸" (30,red,mid)      | T mid | x540 y130
 *  b1 | caption                      | T mid script | x540 y160
 *  b2 | "n[P(A)] = 2^n(A) = 2⁸" (17) | T mid | x290 y300
 *  b2 | "⇒ n(A) = 8 ✓" (20,green)    | T mid | x290 y332
 *  b3 | "proper = 2⁸ − 1" (17)       | T mid | x790 y300
 *  b3 | "= 255 ✓" (20,green)         | T mid | x790 y332
 *  b4 | crossed chip "n(A) = 256"    | Chip+Draw | x180 y358 w220 h32
 *  b4 | "✗ that's the SUBSET count!" | T mid script red | x290 y400
 *  b5 | crossed chip "proper = 254"  | Chip+Draw | x680 y358 w220 h32
 *  b5 | "✗ subtract 1, not 2!"       | T mid script red | x790 y400
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch01Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("given n[P(A)] = 256", "diya hai n[P(A)] = 256")}
        </T>
      </Fade>

      {/* beat 1 — speed move: recognise the power of two */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={130} size={30} fill={RED} weight={800}>
          {"256 = 2⁸"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={540} y={160} size={14} fill={MUTED} script>
          {t("recognise the power of two!", "power of two pehchano!")}
        </T>
      </Fade>

      {/* beat 2 — LEFT: n(A) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={290} y={300} size={17} fill={INK} weight={700}>
          {"n[P(A)] = 2^n(A) = 2⁸"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={290} y={332} size={20} fill={GREEN} weight={800}>
          {"⇒  n(A) = 8 ✓"}
        </T>
      </Fade>

      {/* beat 3 — RIGHT: proper subsets */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={790} y={300} size={17} fill={INK} weight={700}>
          {"proper = 2⁸ − 1"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={790} y={332} size={20} fill={GREEN} weight={800}>
          {"= 255 ✓"}
        </T>
      </Fade>

      {/* beat 4 — TRAP A: n(A) = 256 is wrong */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={180} y={358} w={220} h={32} fill={CREAM} stroke={RED} textFill={INK} size={16} script={false}>
          {"n(A) = 256"}
        </Chip>
      </Fade>
      <Draw on={beat >= 4} d={crossD(180, 358, 220, 32)} stroke={RED} sw={2.4} delay={dl(4, 1.2)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={290} y={412} size={13} fill={RED} script>
          {t(
            "✗ that's the SUBSET count, not elements!",
            "✗ yeh SUBSET count hai, elements nahi!"
          )}
        </T>
      </Fade>

      {/* beat 5 — TRAP B: proper = 254 is wrong */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={680} y={358} w={220} h={32} fill={CREAM} stroke={RED} textFill={INK} size={16} script={false}>
          {"proper = 254"}
        </Chip>
      </Fade>
      <Draw on={beat >= 5} d={crossD(680, 358, 220, 32)} stroke={RED} sw={2.4} delay={dl(5, 1.2)} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={790} y={412} size={13} fill={RED} script>
          {t("✗ subtract 1, not 2!", "✗ ek ghatao, do nahi!")}
        </T>
      </Fade>
    </Scene>
  );
}
