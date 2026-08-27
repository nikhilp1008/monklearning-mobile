/**
 * Ch02 · Section 56 — "Example 4 [JEE Advanced]: two balls, and the quadratic that vanishes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.5, 49.3, 73.1, 82.7, 107.5, 108.5, 133.4, 158.2]):
 *  0 title + problem line
 *  1 picture: shaft, ball up at 25, ball dropped from 100 · honest-route note
 *  2 red note: a_rel = 0, t² vanishes
 *  3 relative quantities line
 *  4 the startling reading
 *  5 result card: t = 100/25 = 4 s
 *  6 where: 20 m, checked both ways
 *  7 red note: verify both airborne (5 s > 4 s)
 *  8 green: two quadratics vs one division
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  ground y440 x100..310 · shaft x200 y140..440 dashed · ball1 (200,420) up arrow
 *  (225,420)→(225,360) "25" st (238,394) · ball2 (200,150) "from rest" st (225,155) ·
 *  bracket x120 y150..420 · "100 m" end (112,290)
 *  b1 note st x380 bl 130 · b2 bar x370 y175..240, lines st x386 bl 195 / 220
 *  b3 st x386 bl 268 · b4 st x386 bl 300 / 324
 *  b5 card x386..900 y350..410 (bl 386) · b6 st x386 bl 440 / 468
 *  b7 | bar x66 y495..550 · lines st x84 bl 514 / 540
 *  b8 | bar x56 y565..594 · line st x72 bl 585
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the most satisfying problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — the quadratic that vanishes",
            "Example 4 [JEE Advanced] — quadratic jo gayab ho jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "ball 1 up at 25 m/s · ball 2 released from 100 m above, same instant — when and where do they meet?",
            "ball 1 upar 25 m/s se · ball 2 usi pal 100 m upar se chhodi — kab aur kahan milengi?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup and the honest route */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 100 440 h 210 M 130 440 l -10 12 M 200 440 l -10 12 M 270 440 l -10 12"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Path
          d="M 200 160 V 410"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="5 7"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d="M 192 420 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d={arrowD(225, 420, 225, 360)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={238} y={394} size={12} fill={GREEN} anchor="start" weight={700}>
          25 m/s
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.2)}
        d="M 192 150 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={225} y={155} size={11} fill={MUTED} script anchor="start">
          {t("released from rest", "rest se chhodi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d="M 120 150 V 420 M 114 150 h 12 M 114 420 h 12"
        stroke={MUTED}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 7.8)}>
        <T x={112} y={290} size={13} fill={INK} anchor="end" weight={700}>
          100 m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={380} y={130} size={12} fill={MUTED} script anchor="start">
          {t(
            "the honest route: two position functions, set equal — several minutes of quadratics",
            "imaandaar raasta: do position functions, barabar rakho — kai minute ke quadratics"
          )}
        </T>
      </Fade>

      {/* beat 2 — read the red note first */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 370 175 v 62" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={386} y={195} size={13} fill={RED} script anchor="start">
          {t(
            "both are in free fall ⇒ a_rel = −g − (−g) = 0",
            "dono free fall mein ⇒ a_rel = −g − (−g) = 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={386} y={220} size={13} fill={RED} script anchor="start">
          {t(
            "so the t² term VANISHES from the relative equation entirely",
            "isliye relative equation se t² waala term POORA gayab"
          )}
        </T>
      </Fade>

      {/* beat 3 — the relative quantities */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={386} y={268} size={14} fill={INK} anchor="start" weight={700}>
          u_rel = 25 − 0 = 25 m/s · a_rel = 0
        </T>
      </Fade>

      {/* beat 4 — gravity, switched off */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={386} y={300} size={12} fill={INK} script anchor="start">
          {t(
            "in ball 2's frame, ball 1 approaches at a CONSTANT 25 m/s",
            "ball 2 ke frame mein, ball 1 CONSTANT 25 m/s se paas aati hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={386} y={324} size={12} fill={INK} script anchor="start">
          {t(
            "both accelerating madly — yet the drift is steady, as if weightless",
            "dono zor se accelerate karti — phir bhi sarakna ek chaal, jaise bhaar hi na ho"
          )}
        </T>
      </Fade>

      {/* beat 5 — one division */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 398 350 h 490 q 12 0 12 12 v 36 q 0 12 -12 12 h -490 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={643} y={386} size={16} fill={INK} weight={800}>
          {t("t = 100 ⁄ 25 = 4 s — one division, no roots", "t = 100 ⁄ 25 = 4 s — ek bhaag, koi roots nahi")}
        </T>
      </Fade>

      {/* beat 6 — where, checked twice */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={386} y={440} size={13} fill={INK} anchor="start" weight={700}>
          {t("where: y₁ = 25·4 − ½·10·16 = 20 m", "kahan: y₁ = 25·4 − ½·10·16 = 20 m")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={386} y={468} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("check ball 2: 100 − 80 = 20 m ✓ — they agree", "jaanch ball 2: 100 − 80 = 20 m ✓ — dono sehmat")}
        </T>
      </Fade>

      {/* beat 7 — is the meeting real? */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 495 v 55" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={514} size={13} fill={RED} script anchor="start">
          {t(
            "verify it is REAL: ball 1's flight time = 2u⁄g = 5 s > 4 s — both still airborne",
            "jaancho ki milna ASLI hai: ball 1 ka udaan-samay = 2u⁄g = 5 s > 4 s — dono hawa mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={540} size={13} fill={RED} script anchor="start">
          {t(
            "at 6 s the whole calculation would have been fiction — ball 1 already landed",
            "6 s par poora hisaab kalpana hota — ball 1 zameen par aa chuki hoti"
          )}
        </T>
      </Fade>

      {/* beat 8 — what a good frame buys */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 56 565 v 30" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={72} y={585} size={13} fill={GREEN} script anchor="start">
          {t(
            "ground frame: two quadratics · relative frame: one division — same physics, a fraction of the algebra",
            "ground frame: do quadratics · relative frame: ek bhaag — wahi physics, algebra ka chhota sa hissa"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
