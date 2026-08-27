/**
 * Ch04 · Section 39 — "Derivation: angle of repose equals angle of friction"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.5, 30.0, 49.7, 69.1, 83.3, 104.2, 126.8]):
 *  0 title
 *  1 setup line + incline figure + θr
 *  2 red bar (right): 'on the verge' = ceiling, only here f = μsN
 *  3 forces on figure: mg, N, f up-slope
 *  4 perpendicular equation
 *  5 along-the-verge equation
 *  6 hero box: tan θr = μs ⇒ θr = λ ∎
 *  7 red margin: mg cancels — mass-independent, feather/anvil, cone
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · setup st x84 bl 92
 *  fig | incline M120 400 L520 400 L520 210 Z · block M310 310 L346 292 L332 265 L296 283 Z ·
 *    θr arc at (120,400) "θr"(184,388) ·
 *    mg (335,300)→(335,365) "mg"(351,348) · N (318,268)→(298,222) "N"(288,214 end) ·
 *    f (350,286)→(420,252) "f = μs·N"(432,246 st)
 *  b2 | bar x560 y110..168 · lines st x578 bl 130 / 154
 *  b4 st x560 bl 210 · b5 st x560 bl 250 · b6 box x560..1010 y280..332 bl 312
 *  b7 | bar x66 y460..565 · lines st x84 bl 480 / 504 / 528 / 552
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "CBSE Derivation — the angle of repose, in four lines",
            "CBSE Derivation — angle of repose, chaar lines mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "rough incline, θ slowly raised — at θr the block is JUST about to slide down",
            "rough incline, θ dheere-dheere badhta — θr par block bas sarakne hi waala hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d="M 120 400 L 520 400 L 520 210 Z"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.2)}
        d="M 310 310 L 346 292 L 332 265 L 296 283 Z"
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d="M 176 400 Q 174 384 162 382"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={188} y={390} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          θr
        </T>
      </Fade>

      {/* beat 2 — the verge */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 560 110 v 58" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={578} y={130} size={13} fill={RED} script anchor="start">
          {t(
            "'on the VERGE' = static friction has hit its ceiling",
            "'KAGAR par' = static friction apni chhat par pahunch chuki"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={578} y={154} size={13} fill={RED} script anchor="start">
          {t(
            "here, and ONLY here, may you write f = μs·N",
            "yahan, aur SIRF yahan, f = μs·N likh sakte ho"
          )}
        </T>
      </Fade>

      {/* beat 3 — the three forces */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={arrowD(335, 300, 335, 365)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d={arrowD(318, 268, 298, 222)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d={arrowD(350, 286, 420, 252)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={351} y={348} size={13} fill={RED} weight={700} anchor="start">
          mg
        </T>
        <T x={288} y={214} size={13} fill={GREEN} weight={700} anchor="end">
          N
        </T>
        <T x={432} y={246} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          f = μs·N ↑
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={320} y={445} size={12} fill={AMBER_DARK} script>
          {t(
            "friction points UP the slope — opposing the impending slide",
            "friction slope ke UPAR — aane waali fisalan ka virodh"
          )}
        </T>
      </Fade>

      {/* beat 4 — perpendicular */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={560} y={210} size={14} fill={INK} weight={700} anchor="start">
          ⊥ :&nbsp;&nbsp;N = mg·cosθr
        </T>
      </Fade>

      {/* beat 5 — along, at the verge */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={560} y={250} size={14} fill={INK} weight={700} anchor="start">
          ∥ at the verge:&nbsp;&nbsp;mg·sinθr = μs·N = μs·mg·cosθr
        </T>
      </Fade>

      {/* beat 6 — proved */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 572 280 h 426 q 12 0 12 12 v 28 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={790} y={312} size={16} fill={INK} weight={800}>
          tan θr = μs&nbsp;&nbsp;·&nbsp;&nbsp;tan λ = μs&nbsp;&nbsp;⇒&nbsp;&nbsp;θr = λ&nbsp;&nbsp;∎
        </T>
      </Fade>

      {/* beat 7 — what the cancellation means */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 460 v 102" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={480} size={14} fill={RED} script anchor="start">
          {t(
            "mg CANCELLED — the steepest safe slope ignores the mass entirely",
            "mg CANCEL ho gaya — sabse teekhi surakshit dhalan mass ko poori tarah andekha karti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={504} size={14} fill={RED} script anchor="start">
          {t(
            "a feather or an anvil: both let go at exactly the same angle",
            "pankh ho ya nihai: dono theek ek hi angle par chhootte hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={84} y={528} size={14} fill={RED} script anchor="start">
          {t(
            "heavier → more friction, but pulled downhill harder in the SAME proportion",
            "bhaari → zyada friction, par utne hi anupat mein neeche bhi khincha jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 17)}>
        <T x={84} y={552} size={14} fill={GREEN} script anchor="start">
          {t(
            "and that is why every sand pile wears the same cone",
            "aur isiliye har ret ka dher wahi ek shanku pehanta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
