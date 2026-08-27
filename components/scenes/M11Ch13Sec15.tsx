/**
 * M11 Ch13 · Section 15 — "Pitfalls and pro-tips: the four ways students lose marks"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes Subtopic 1. A rapid sequence of ringed/boxed
 * pitfalls, one per beat, per the maths spec's "tips" flow.
 *
 * Beats (board_reveal_at_english [0, 9.81, 31.49, 48.38, 69.03, 85.5, 104.36]):
 *  0 anchor: heading
 *  1 pitfall 1 (red-margin, high): dropping the modulus
 *  2 pitfall 2: wrong divisor (rows vs N)
 *  3 pitfall 3: mean vs median for "least M.D."
 *  4 pitfall 4: shift doesn't change spread
 *  5 land (boxed, high emphasis, green): the transformation rule
 *  6 note (red-margin): the permanent sanity check, M.D. ≤ Range
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y84
 *  b1 | card 1 (red, LEFT-top)           | Draw+T| x60..520  y100..160
 *  b2 | card 2 (amber, RIGHT-top)        | Draw+T| x560..1020 y100..160
 *  b3 | card 3 (amber, LEFT-bottom)      | Draw+T| x60..520  y172..232
 *  b4 | card 4 (amber, RIGHT-bottom)     | Draw+T| x560..1020 y172..232
 *  b5 | boxed rule (green, high)         | Draw+T| box x140..940 y248..296
 *  b6 | red bar + sanity text + checkD   | Draw+T| x60 y330..348 · text y344
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD } from "./math-kit";

export default function M11Ch13Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Four Ways Students Lose Marks", "Chaar Tareeke Jinse Marks Katte Hain")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("The four classic slips — and how to dodge them", "Chaar classic slips — aur inhe kaise dodge karein")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1 (red, most severe) */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(60, 100, 460, 60)} stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={290} y={135} size={13} fill={RED} anchor="middle" weight={700}>
          {t("1. Drop the modulus →", "1. Modulus drop karo →")}
        </T>
        <T x={290} y={153} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Σ(x_i-x_bar)=0 → wrongly \"M.D.=0\"", "Σ(x_i-x_bar)=0 → galat \"M.D.=0\"")}
        </T>
      </Fade>

      {/* beat 2 — pitfall 2: wrong divisor */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(560, 100, 460, 60)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={790} y={130} size={13} fill={INK} anchor="middle" weight={700}>
          {t("2. Wrong divisor: use N = Σf_i,", "2. Galat divisor: N = Σf_i use karo,")}
        </T>
        <T x={790} y={149} size={12} fill={INK} anchor="middle">
          {t("never rows/classes — #1 mark-loss cause.", "kabhi rows/classes nahi — #1 mark-loss cause.")}
        </T>
      </Fade>

      {/* beat 3 — pitfall 3: mean vs median for "least M.D." */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(60, 172, 460, 60)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={290} y={198} size={13} fill={INK} anchor="middle" weight={700}>
          {t("3. \"Least M.D.\" asked? Anchor to", "3. \"Least M.D.\" poocha? MEDIAN pe")}
        </T>
        <T x={290} y={217} size={13} fill={INK} anchor="middle">
          {t("the MEDIAN, not the mean.", "anchor karo, mean pe nahi.")}
        </T>
      </Fade>

      {/* beat 4 — pitfall 4: shift doesn't change spread */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(560, 172, 460, 60)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={790} y={198} size={13} fill={INK} anchor="middle" weight={700}>
          {t("4. A shift changes spread?", "4. Shift se spread badalta hai?")}
        </T>
        <T x={790} y={217} size={13} fill={INK} anchor="middle">
          {t("No — neither range nor M.D. moves.", "Nahi — na range na M.D. hilta hai.")}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis, green): the transformation rule */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(140, 248, 800, 48)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={277} size={15} fill={GREEN} anchor="middle" weight={800}>
          {"x_i → a·x_i+b :  Range, M.D. → |a|×(old),  b ignored"}
        </T>
      </Fade>

      {/* beat 6 — note: the permanent sanity check */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 330 L 60 348" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={344} size={15} fill={RED} anchor="start" weight={700}>
          {t("Sanity check before committing: M.D. ≤ Range, always.", "Commit karne se pehle sanity check: M.D. ≤ Range, hamesha.")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={checkD(880, 338, 18)} stroke={GREEN} sw={3} dur={0.4} />
    </Scene>
  );
}
