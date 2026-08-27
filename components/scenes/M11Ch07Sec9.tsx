/**
 * M11 Ch07 · Section 9 — "The general term as a catalogue lookup"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Opens subtopic 2 (General/Middle/Independent Terms).
 * 7 board_content items, seq1 doubles as title (sections 1-5 pattern).
 *
 * Beats (en [0, 15.19, 29.95, 44.46, 60.25, 79.96, 97.8]):
 *  0 title (always-on)
 *  1 exams want ONE term, not the whole expansion
 *  2 the lookup formula T(r+1)=nCr a^(n-r) b^r, boxed (HIGH)
 *  3 feed in r, get that term — no full expansion
 *  4 three named terms = three ways to choose r (3 chips)
 *  5 red-margin: m-th term ⇒ r=m-1
 *  6 example: 6th term ⇒ r=5; middle (n even) ⇒ r=n/2
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, CREAM, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("jump straight to the term you want", "seedha uss term pe pahuncho jo chahiye")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={102} size={17} fill={MUTED} script>
          {t("want ONE term — 7th, middle, constant — not the whole expansion", "ek hi term chahiye — 7th, middle, constant — poora expansion nahi")}
        </T>
      </Fade>

      {/* beat 2 — the lookup formula, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={158} size={24} fill={AMBER_DARK} script>
          T(r+1) = nCr a^(n-r) b^r
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={roundRectD(300, 130, 480, 52)} stroke={AMBER_DARK} sw={2.6} dur={1} />

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={225} size={16} fill={INK} script>
          {t("feed in r, get that exact term — no full expansion", "sahi r daalo, seedha woh term milega — full expansion nahi")}
        </T>
      </Fade>

      {/* beat 4 — three ways to choose r */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={185} y={270} w={190} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14}>
          {t("given directly", "seedha diya hua")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Chip x={445} y={270} w={190} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14}>
          {t("the balance point", "balance point")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={705} y={270} w={190} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14}>
          {t("the power that cancels", "jo power cancel ho")}
        </Chip>
      </Fade>

      {/* beat 5 — red-margin */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 150 358 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={170} y={382} size={16} fill={RED} script anchor="start">
          {t("the m-th term ⇒ r = m-1   ('7th term' means r=6)", "m-vaan term ⇒ r = m-1   ('7th term' matlab r=6)")}
        </T>
      </Fade>

      {/* beat 6 — worked mini-example */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={432} size={17} fill={INK} script anchor="start">
          {t("6th term ⇒ r = 5;    middle (n even) ⇒ r = n/2", "6th term ⇒ r = 5;    middle (n even) ⇒ r = n/2")}
        </T>
      </Fade>
    </Scene>
  );
}
