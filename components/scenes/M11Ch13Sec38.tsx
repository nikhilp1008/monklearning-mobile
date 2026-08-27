/**
 * M11 Ch13 · Section 38 — "Worked example: consistency vs. performance (two batsmen)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * Arjun: mean=50, SD=10 → C.V.=10/50×100=20%. Vikram: mean=40, SD=6 →
 * C.V.=6/40×100=15%. 15<20 so Vikram is more consistent, but Arjun's
 * higher average (50>40) makes him the better bet to chase a big total —
 * a genuine split verdict, not a contradiction.
 *
 * Beats (board_reveal_at_english [0, 21.76, 32.94, 39.94, 48.21, 59.05, 72.36]):
 *  0 anchor: heading
 *  1 represent: given (Arjun 50/10, Vikram 40/6, different means → C.V.)
 *  2 represent: boxed C.V._Arjun = 10/50×100 = 20% (LEFT)
 *  3 land (boxed, high emphasis, RIGHT): C.V._Vikram = 6/40×100 = 15%
 *  4 explain: lower C.V. → Vikram more consistent
 *  5 note (red-margin, high emphasis): Arjun's higher average, better chase bet
 *  6 land: split verdict — two chips, consistency vs performance
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y84
 *  b1 | text (14, ink)                   | T mid | x540 y108
 *  b2 | boxed (green, LEFT)              | Draw+T| x120..500 y130..172
 *  b3 | boxed (green, RIGHT)             | Draw+T| x580..960 y130..172
 *  b4 | text (14, ink)                   | T mid | x540 y198
 *  b5 | red bar + note (14)              | Draw+T| x60 y220..238 · text y234
 *  b6 | 2 chips + closing text           | Chip+T| x230/x610 y296..328 · text y280
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch13Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Worked Example: Consistency vs. Performance", "Worked Example: Consistency vs. Performance")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("CBSE level: who is more consistent?", "CBSE level: kaun zyada consistent hai?")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={14} fill={INK} anchor="middle">
          {t(
            "Arjun: mean 50, SD 10.  Vikram: mean 40, SD 6.  Different means → use C.V.",
            "Arjun: mean 50, SD 10.  Vikram: mean 40, SD 6.  Alag means → C.V. use karo."
          )}
        </T>
      </Fade>

      {/* beat 2 — boxed: C.V. Arjun */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(120, 130, 380, 42)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={310} y={157} size={15} fill={INK} anchor="middle" weight={700}>
          {"C.V._Arjun = 10/50 × 100 = 20%"}
        </T>
      </Fade>

      {/* beat 3 — land (boxed, high emphasis): C.V. Vikram */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(580, 130, 380, 42)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={770} y={157} size={15} fill={GREEN} anchor="middle" weight={800}>
          {"C.V._Vikram = 6/40 × 100 = 15%"}
        </T>
      </Fade>

      {/* beat 4 — explain: lower C.V. wins consistency */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={198} size={14} fill={INK} anchor="middle">
          {t(
            "15% < 20% → Vikram is the more consistent scorer.",
            "15% < 20% → Vikram zyada consistent scorer hai."
          )}
        </T>
      </Fade>

      {/* beat 5 — note: Arjun's higher average */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 220 L 60 238" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={234} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "But Arjun's higher average (50 vs 40) is the better bet to chase a steep total.",
            "Par Arjun ka higher average (50 vs 40) steep total chase karne ke liye better bet hai."
          )}
        </T>
      </Fade>

      {/* beat 6 — land: the split verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={280} size={14} fill={INK} anchor="middle" script>
          {t(
            "\"Consistent\" and \"best\" are different questions.",
            "\"Consistent\" aur \"best\" alag sawaal hain."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Chip x={230} y={296} w={280} h={32} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("Consistency → Vikram", "Consistency → Vikram")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <Chip x={570} y={296} w={280} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
          {t("Chase a steep total → Arjun", "Steep total chase → Arjun")}
        </Chip>
      </Fade>
    </Scene>
  );
}
