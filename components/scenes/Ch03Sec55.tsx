/**
 * Ch03 · Section 55 — "Where the subtraction rule comes from"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.4, 22.5, 31.8, 46.9, 58.2, 71.9, 86.7]):
 *  0 heading
 *  1 relative position: r_AB = r_A − r_B (+ B→A diagram)
 *  2 differentiate the relative position
 *  3 v_AB = v_A − v_B box
 *  4 nothing new — position rule differentiated
 *  5 one more step: a_AB = a_A − a_B
 *  6 same acceleration → relative a = 0
 *  7 straight lines relative to each other
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x84 bl 116 s14 · diagram: O(150,330) dot · B(420,250) dot · A(300,170) dot ·
 *       rA (150,330)→(300,170) · rB (150,330)→(420,250) · rAB (420,250)→(300,170) green ·
 *       lbls: rA end (210,240) · rB cx300 bl 312 · rAB st (372,196) · caption cx300 bl 372
 *  b2 | st x560 bl 116 s13 · st x580 bl 148 s14
 *  b3 | box x560..990 y170..216 text cx775 bl 202 s16
 *  b4 | green st x560 bl 252 s12
 *  b5 | st x560 bl 292 s14
 *  b6 | bar M546 320 v52 · lines st x560 bl 338 / 362 s12
 *  b7 | lines st x84 bl 440 / 464 s12 · underline M84 474 h480
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "The rule is just DIFFERENTIATED positions",
            "Yeh rule bas positions ka DERIVATIVE hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — relative position */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={116} size={14} fill={INK} weight={700} anchor="start">
          r(AB) = rA − rB
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <Circle cx={150} cy={330} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={arrowD(150, 330, 300, 170)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={210} y={240} size={13} fill={INK} weight={700} anchor="end">rA</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5)} d={arrowD(150, 330, 420, 250)} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={300} y={312} size={13} fill={AMBER_DARK} weight={700}>rB</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6.6)} d={arrowD(420, 250, 300, 170)} stroke={GREEN} sw={2.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={378} y={196} size={13} fill={GREEN} weight={800} anchor="start">r(AB)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={300} y={372} size={11} fill={GREEN} script>
          {t("simply the vector from B to A", "seedha B se A tak ka vector")}
        </T>
      </Fade>

      {/* beat 2 — differentiate */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={560} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "relative velocity = the rate of change of that relative position",
            "relative velocity = usi relative position ke badalne ki dar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={580} y={148} size={14} fill={INK} weight={700} anchor="start">
          d⁄dt (rA − rB) = vA − vB
        </T>
      </Fade>

      {/* beat 3 — the rule appears */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 572 170 h 406 q 12 0 12 12 v 22 q 0 12 -12 12 h -406 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={775} y={202} size={16} fill={INK} weight={800}>
          v(AB) = vA − vB
        </T>
      </Fade>

      {/* beat 4 — nothing new */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={560} y={252} size={12} fill={GREEN} script anchor="start">
          {t(
            "nothing new — the position rule, differentiated once. derived, not assumed",
            "kuchh naya nahi — position rule, ek baar differentiate. derive kiya, maana nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — one more step */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={292} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "differentiate again:  a(AB) = aA − aB",
            "phir differentiate karo:  a(AB) = aA − aB"
          )}
        </T>
      </Fade>

      {/* beat 6 — the beautiful special case */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 546 320 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={560} y={338} size={12} fill={GREEN} script anchor="start">
          {t(
            "same acceleration for both — like gravity — → relative acceleration = ZERO",
            "dono ka acceleration ek — jaise gravity — → relative acceleration = ZERO"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={560} y={362} size={12} fill={INK} script anchor="start">
          {t(
            "each falls at g, so the difference cancels exactly",
            "dono g par girte hain, isliye antar poora kat jata hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the striking consequence */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={84} y={440} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "consequence: two projectiles thrown together, seen from each other…",
            "nateeja: saath phenke do projectiles, ek doosre ki nazar se…"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={84} y={464} size={12} fill={GREEN} script anchor="start">
          {t(
            "…move in perfectly STRAIGHT LINES — no relative acceleration at all",
            "…bilkul SEEDHI LINE mein chalte hain — koi relative acceleration hi nahi"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 7)} d="M 84 474 h 480" stroke={GREEN} sw={1.8} dur={0.6} />
    </Scene>
  );
}
