/**
 * M11 Ch13 · Section 25 — "Worked example: the transformation property"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * σ²=5 for 20 obs. Rule y=3x+4. New σ²=3²×5=45. New σ=|3|×√5=3√5≈6.71
 * (√5≈2.236, 3×2.236=6.708≈6.71). Trap: naive σ²×3=15 (wrong, forgot square).
 *
 * Beats (board_reveal_at_english [0, 16.47, 23.89, 39.08, 51.37, 60.5, 74.5]):
 *  0 anchor: heading
 *  1 represent: given (σ²=5 for 20 obs, rule ×3 then +4)
 *  2 explain: +4 shifts (no spread change), ×3 scales
 *  3 note (red-margin, high emphasis): scale factor enters SQUARED, a=3→9
 *  4 land (boxed, high emphasis, LEFT): σ²_new = 3²×5 = 45
 *  5 land (boxed, high emphasis, RIGHT): σ_new = |3|×√5 = 3√5 ≈ 6.71
 *  6 speed trap: wrong "×3→15" vs right "×3²→45" chips + the memorised rule
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y84
 *  b1 | text (14, ink)                   | T mid | x540 y108
 *  b2 | text (14, ink)                   | T mid | x540 y132
 *  b3 | red bar + note (15)              | Draw+T| x60 y152..172 · text y166
 *  b4 | boxed σ²_new (green, LEFT)       | Draw+T| box x140..500 y196..242
 *  b5 | boxed σ_new (green, RIGHT)       | Draw+T| box x580..940 y196..242
 *  b6 | wrong/right chips + closing      | Chip+T| x220/x600 y270..302 · text y332/356
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch13Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Worked Example: The Transformation Property", "Worked Example: Transformation Property")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("JEE Main: multiply by 3, then add 4", "JEE Main: 3 se multiply, phir 4 add")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={14} fill={INK} anchor="middle">
          {t(
            "The variance of 20 observations is 5. Each is transformed by (×3, then +4).",
            "20 observations ka variance 5 hai. Har ek (×3, phir +4) se transform hota hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — explain: shift vs scale */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={132} size={14} fill={INK} anchor="middle">
          {t(
            "+4 shifts all data equally — can't change spread. ×3 scales the spread.",
            "+4 saara data equally shift karta — spread nahi badalta. ×3 spread ko scale karta."
          )}
        </T>
      </Fade>

      {/* beat 3 — note: the scale factor enters SQUARED */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 60 152 L 60 172" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={166} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "For variance, the scale factor enters SQUARED: a = 3 → factor 9.",
            "Variance ke liye, scale factor SQUARED aata hai: a = 3 → factor 9."
          )}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis, LEFT): new variance */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(140, 196, 360, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={320} y={225} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"σ²_new = 3² × 5 = 45"}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis, RIGHT): new SD */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(580, 196, 360, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={760} y={225} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"σ_new = |3|×√5 = 3√5 ≈ 6.71"}
        </T>
      </Fade>

      {/* beat 6 — speed trap: wrong vs right */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={220} y={270} w={220} h={34} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {"5 × 3 = 15  ✗"}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Chip x={600} y={270} w={260} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"5 × 3² = 45  ✓"}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={540} y={332} size={14} fill={INK} anchor="middle">
          {t(
            "Trap: multiplying the variance by 3 straight is wrong.",
            "Trap: variance ko seedhe 3 se multiply karna galat hai."
          )}
        </T>
        <T x={540} y={356} size={14} fill={GREEN} anchor="middle" weight={700}>
          {t("Variance ×a², SD ×|a|, and b does nothing.", "Variance ×a², SD ×|a|, aur b kuch nahi karta.")}
        </T>
      </Fade>
    </Scene>
  );
}
