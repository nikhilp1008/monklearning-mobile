/**
 * Ch02 · Section 67 — "Example 1 [CBSE]: a = 4t, integrate twice"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.7, 33.1, 49.2, 71.3, 88.7, 113.5, 138.3]):
 *  0 title + problem line
 *  1 mini ladder: a → v → x with ∫dt arrows
 *  2 data card: v₀ = 0, x₀ = 0, a = 4t
 *  3 diagnosis line
 *  4 climb-1 card: v = 2t² → 18 m/s
 *  5 climb-2 card: x = ⅔t³ → 18 m
 *  6 red note: v = u + at forbidden
 *  7 red note: the digit coincidence
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  ladder boxes y110..160: a x150..240 · v x330..420 · x x510..600 · arrows + "∫ dt"
 *  b2 card x650..1030 y110..165 (bl 142)
 *  b3 line st x84 bl 200
 *  b4 card x84..540 y225..310 (hdr bl 248 · l1 bl 276 · l2 bl 302)
 *  b5 card x580..1030 y225..310 (same rows)
 *  b6 | bar x66 y345..410 · lines st x84 bl 364 / 390
 *  b7 | bar x66 y435..495 · lines st x84 bl 454 / 480
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the cleanest case-1 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 1 [CBSE] — a = 4t: integrate twice",
            "Example 1 [CBSE] — a = 4t: do baar integrate"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "from rest at the origin, a = 4t — find v and x at t = 3 s",
            "origin par rest se, a = 4t — t = 3 s par v aur x nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the whole solution, before a symbol */}
      {["a", "v", "x"].map((q, i) => (
        <G key={q}>
          <Draw
            on={beat >= 1}
            delay={dl(1, 0.6 + i * 1.6)}
            d={`M ${162 + i * 180} 110 h 66 q 12 0 12 12 v 26 q 0 12 -12 12 h -66 q -12 0 -12 -12 v -26 q 0 -12 12 -12`}
            stroke={INK}
            sw={2.4}
            dur={0.5}
          />
          <Fade on={beat >= 1} delay={dl(1, 1.2 + i * 1.6)}>
            <T x={195 + i * 180} y={142} size={18} fill={INK} weight={800}>
              {q}
            </T>
          </Fade>
        </G>
      ))}
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.5)}
        d={arrowD(245, 135, 340, 135)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.2)}
        d={arrowD(425, 135, 520, 135)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={292} y={118} size={11} fill={GREEN} script>
          ∫ dt
        </T>
        <T x={472} y={118} size={11} fill={GREEN} script>
          ∫ dt
        </T>
      </Fade>

      {/* beat 2 — the data, both anchors zero */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 662 110 h 356 q 12 0 12 12 v 31 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={840} y={142} size={14} fill={INK} weight={700}>
          v₀ = 0 · x₀ = 0 · a = 4t
        </T>
      </Fade>

      {/* beat 3 — the explicit diagnosis */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={84} y={200} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "diagnose first: a depends on TIME → case 1, integrate w.r.t. t — done explicitly, not by habit",
            "pehle diagnose: a TIME par nirbhar → case 1, t par integrate — aadat se nahi, saaf keh kar"
          )}
        </T>
      </Fade>

      {/* beat 4 — first climb */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 96 225 h 432 q 12 0 12 12 v 61 q 0 12 -12 12 h -432 q -12 0 -12 -12 v -61 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={312} y={248} size={12} fill={GREEN} script>
          {t("climb 1: a → v", "chadhaai 1: a → v")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={312} y={276} size={14} fill={INK} weight={700}>
          v = 0 + ∫ 4t dt = 2t²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={312} y={302} size={14} fill={GREEN} weight={700}>
          v(3) = 2·9 = 18 m/s
        </T>
      </Fade>

      {/* beat 5 — second climb, order forced */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 592 225 h 426 q 12 0 12 12 v 61 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -61 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={805} y={248} size={12} fill={GREEN} script>
          {t("climb 2: v → x (needs v — order forced)", "chadhaai 2: v → x (v chahiye — kram tay)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={805} y={276} size={14} fill={INK} weight={700}>
          x = 0 + ∫ 2t² dt = ⅔ t³
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={805} y={302} size={14} fill={GREEN} weight={700}>
          x(3) = ⅔·27 = 18 m
        </T>
      </Fade>

      {/* beat 6 — the forbidden shortcut */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 345 v 65" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={364} size={13} fill={RED} script anchor="start">
          {t(
            "v = u + at was FORBIDDEN here: a = 4t is 4 at t = 1 and 8 at t = 2 — not constant",
            "v = u + at yahan VARJIT tha: a = 4t, t = 1 par 4 aur t = 2 par 8 — constant nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={84} y={390} size={13} fill={RED} script anchor="start">
          {t(
            "the formula would still hand you a number — and it would be wrong",
            "formula phir bhi number de deta — aur woh galat hota"
          )}
        </T>
      </Fade>

      {/* beat 7 — the digit coincidence */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 435 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={454} size={13} fill={RED} script anchor="start">
          {t(
            "both answers read '18' — that is NOT a check: 18 m/s and 18 m are different things",
            "dono jawaab '18' hain — yeh jaanch NAHI: 18 m/s aur 18 m alag cheezein hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={480} size={13} fill={RED} script anchor="start">
          {t(
            "a coincidence of digits must never buy your confidence",
            "digits ka sanyog kabhi bharosa na kharide"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
