/**
 * Ch07 · Section 38 — "Gravitational energy, and why it is negative"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.75, 21.25, 35.5, 49.41, 63.23, 70.74, 77.14]):
 *  0 title
 *  1 stone + Earth: lift arrow, "stored energy" caption
 *  2 U-r valley graph outline, zero line, "entirely below zero" caption
 *  3 mark r=∞, U=0 on the graph
 *  4 ball rolling from ∞ down into the valley (arrow along curve)
 *  5 red: system gives up energy → drops below zero
 *  6 amber: deeper (smaller r) → more negative
 *  7 green margin: negative sign = signature of attraction
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  stone (170,140) r8 · Earth c(170,270) r70 · lift arrow (170,230)→(170,160) ·
 *  caption cx170 bl360
 *  graph axes: zero line M420 130 H960 · curve M420 130 Q560 130 620 280 Q700 380 960 400 ·
 *  "r" (970,400) · "U" (405,120) · "0" st (395,134)
 *  b3 | "∞" label (940,140) · dot (930,130)
 *  b4 | ball dot moving marker (600,180) + arrow along curve
 *  b5 | bar x66 y440..492 lines bl460/486
 *  b6 | line st x480 bl440
 *  b7 | bar x480 y470..522 lines bl490/516
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — energy stored in arrangement */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Energy stored in where masses sit",
            "Masses kahan hain — usme energy stored hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — lift the stone */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 135 240 A 70 70 0 1 1 205 240"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={170} cy={140} r={8} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d={arrowD(170, 225, 170, 155)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={170} y={360} size={12} fill={AMBER_DARK} script>
          {t(
            "lift it: energy stored in stone + Earth",
            "utha lo: stone + Earth mein energy store"
          )}
        </T>
      </Fade>

      {/* beat 2 — the valley graph */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 420 130 H 960" stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={395} y={134} size={11} fill={MUTED} weight={700}>
          0
        </T>
        <T x={405} y={122} size={12} fill={INK} weight={700}>
          U
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.8)}
        d="M 420 130 Q 560 130 620 280 Q 700 380 960 400"
        stroke={GREEN}
        sw={2.8}
        dur={1}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={970} y={400} size={12} fill={INK} weight={700}>
          r
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={690} y={460} size={12} fill={GREEN} script>
          {t(
            "a valley — entirely below zero",
            "ek valley — poori tarah zero ke neeche"
          )}
        </T>
      </Fade>

      {/* beat 3 — the zero at infinity */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Circle cx={930} cy={130} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={930} y={112} size={12} fill={INK} weight={700}>
          r → ∞, U = 0
        </T>
      </Fade>

      {/* beat 4 — rolling down into the valley */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 900 145 Q 780 220 660 320"
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />

      {/* beat 5 — the drop below zero */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "the system GIVES UP energy — like a ball rolling downhill",
            "system energy CHHOD deta hai — jaise ball neeche ludhakti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.5)}>
        <T x={84} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "so its stored energy drops BELOW zero",
            "isliye stored energy ZERO se neeche gir jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — deeper is more negative */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={440} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "smaller r (deeper) → U becomes more and more negative",
            "chhota r (aur gehra) → U aur negative hota jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the negative sign's meaning */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 480 470 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={498} y={490} size={13} fill={GREEN} script anchor="start">
          {t(
            "the minus sign is not a mistake",
            "minus sign koi galti nahi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={498} y={516} size={13} fill={GREEN} script anchor="start">
          {t(
            "it IS the signature of an attractive, bound system",
            "yahi attractive, bound system ki asli pehchaan hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
