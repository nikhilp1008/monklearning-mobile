/**
 * Ch02 · Section 55 — "Example 3 [JEE Main]: car B chases car A"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.6, 35.9, 50.4, 72.3, 83.9, 108.7, 133.6, 144.6]):
 *  0 title + problem line
 *  1 picture: road, B behind, A ahead, 75 m bracket
 *  2 multi-concept flag
 *  3 frame choice: A's frame (unaccelerated ⇒ legit)
 *  4 relative quantities card
 *  5 red note: the gap widens FIRST
 *  6 setup + quadratic
 *  7 result box: t = 15 s
 *  8 red closing: the overhaul story
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  road y165 x100..980 · B x180..260 y135..165 (lbl cx220 bl 122) ·
 *  A x680..760 y135..165 (lbl cx720 bl 122) · bracket M265,178 v8 h410 v-8 ·
 *  "75 m" cx470 bl 205
 *  b2 line cx540 bl 235 · b3 line st x84 bl 265
 *  b4 card x84..520 y285..350 (st x110 bl 312 / 340)
 *  b5 | bar x560 y285..350 · lines st x576 bl 305 / 331
 *  b6 | st x110 bl 390 / 420 · b7 box x560..960 y375..435 (bl 410)
 *  b8 | bar x66 y470..545 · lines st x84 bl 490 / 514 / 538
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — a technique now */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — car B chases car A",
            "Example 3 [JEE Main] — gaadi B, gaadi A ka peechha karti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "A: steady 20 m/s · B: 75 m behind at 10 m/s, accelerating at 2 m/s² — when does B catch A?",
            "A: 20 m/s steady · B: 75 m peechhe, 10 m/s par, 2 m/s² se tez hoti — B kab pakdegi?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the gap is everything */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 100 165 H 980"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 180 165 v -30 h 80 v 30 M 680 165 v -30 h 80 v 30"
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={220} y={122} size={12} fill={INK} weight={700}>
          B: 10 m/s, a = 2
        </T>
        <T x={720} y={122} size={12} fill={INK} weight={700}>
          A: 20 m/s
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d="M 265 178 v 8 h 410 v -8"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={470} y={205} size={13} fill={AMBER_DARK} script>
          {t("75 m — the gap to eliminate", "75 m — jo gap mitaana hai")}
        </T>
      </Fade>

      {/* beat 2 — why multi-concept */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={540} y={235} size={12} fill={MUTED} script>
          {t(
            "relative velocity AND relative acceleration, in a frame where one body sits still",
            "relative velocity AUR relative acceleration, aise frame mein jahan ek body sthir hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — pick A's frame */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={84} y={265} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "work in A's frame — A is unaccelerated, so its frame is legitimate; A parks, only B moves",
            "A ke frame mein kaam karo — A accelerate nahi karta, frame jaayaz hai; A khada, sirf B chalta"
          )}
        </T>
      </Fade>

      {/* beat 4 — the two subtractions */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 96 285 h 412 q 12 0 12 12 v 41 q 0 12 -12 12 h -412 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={110} y={312} size={14} fill={INK} anchor="start" weight={700}>
          u_rel = 10 − 20 = −10 m/s
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={110} y={340} size={14} fill={INK} anchor="start" weight={700}>
          a_rel = 2 − 0 = +2 m/s²
        </T>
      </Fade>

      {/* beat 5 — the minus IS the story */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 560 285 v 62" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={576} y={305} size={12} fill={RED} script anchor="start">
          {t(
            "that minus IS the story: B starts by LOSING ground —",
            "wahi minus poori kahaani hai: B pehle PICHHADTI hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={576} y={331} size={12} fill={RED} script anchor="start">
          {t(
            "the gap widens before it closes; most students never notice",
            "gap pehle badhta hai, phir band hota hai; zyadatar dhyan hi nahi dete"
          )}
        </T>
      </Fade>

      {/* beat 6 — set it up */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={110} y={390} size={14} fill={INK} anchor="start" weight={700}>
          75 = −10t + ½·2·t² = −10t + t²
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={110} y={420} size={14} fill={INK} anchor="start" weight={700}>
          t² − 10t − 75 = 0 → (t − 15)(t + 5) = 0
        </T>
      </Fade>

      {/* beat 7 — fifteen seconds */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 572 375 h 376 q 12 0 12 12 v 36 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={760} y={410} size={15} fill={INK} weight={700}>
          {t("t = 15 s (reject −5: before the chase)", "t = 15 s (−5 hatao: peechha shuru hone se pehle)")}
        </T>
      </Fade>

      {/* beat 8 — the honest answer */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 470 v 75" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={490} size={13} fill={RED} script anchor="start">
          {t(
            "B overhauls A only after its acceleration eats the deficit —",
            "B tabhi aage nikalti hai jab uska acceleration ghaata kha jaata hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 5)}>
        <T x={84} y={514} size={13} fill={RED} script anchor="start">
          {t(
            "it falls further behind first, then claws back all of it, plus the 75 m",
            "pehle aur pichhadti hai, phir sab wasool karti hai, aur upar se 75 m"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={84} y={538} size={13} fill={RED} script anchor="start">
          {t(
            "a small answer = you missed the minus on u_rel — arithmetic fine, physics quietly wrong",
            "chhota jawaab = u_rel ka minus chhoot gaya — hisaab theek, physics chupchaap galat"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
