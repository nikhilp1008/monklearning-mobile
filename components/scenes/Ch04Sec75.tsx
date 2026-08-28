/**
 * Ch04 · Section 75 — "Worked Example 1 [CBSE Board]: the Atwood machine by numbers"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.29, 26.11, 45.82, 61.61, 86.44, 111.27]):
 *  0 title
 *  1 problem: m1=5kg, m2=3kg over light frictionless pulley, find a & T, g=10
 *  2 diagram: pulley + two blocks, caption — dilutes gravity to a gentle 2.5 m/s²
 *  3 formula box: a = (5−3)(10)/8 = 20/8 = 2.5 m/s²
 *  4 formula box: T = 2(5)(3)(10)/8 = 300/8 = 37.5 N
 *  5 red margin: check — T between 30N and 50N, outside = sign error
 *  6 closing: gravity diluted 10→2.5, slow enough to time by hand, Atwood's method
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  diagram: pulley c(540,150) r16 · m1(5kg) x455..530 y200..248 · m2(3kg) x565..620 y200..234 ·
 *    lbl "5 kg" cx492 y265 · lbl "3 kg" cx592 y251 · caption cx540 bl 288
 *  b3 box x300..780 y310..354 bl 338
 *  b4 box x300..780 y374..418 bl 402
 *  b5 | bar x66 y446..516 · lines st x84 bl 466 / 492
 *  b6 line cx540 bl 548 · line cx540 bl 572
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec75({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "Example 1 [CBSE Board] — the Atwood machine by numbers",
            "Example 1 [CBSE Board] — numbers waali Atwood machine"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "masses 5 kg and 3 kg hang over a light, frictionless pulley",
            "5 kg aur 3 kg masses ek halki, frictionless pulley par latakte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("find: acceleration a and tension T · g = 10 m⁄s²", "nikaalo: acceleration a aur tension T · g = 10 m⁄s²")}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={ringD(540, 150, 16, 16)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 528 160 L 495 200" stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d="M 552 160 L 585 200" stroke={INK} sw={1.8} dur={0.3} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.9)}
        d="M 455 200 h 75 v 48 h -75 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d="M 565 200 h 55 v 34 h -55 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={492} y={265} size={12} fill={INK} weight={700}>
          5 kg
        </T>
        <T x={592} y={251} size={12} fill={INK} weight={700}>
          3 kg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={540} y={288} size={11} fill={MUTED} script>
          {t(
            "the device dilutes gravity to a gentle 2.5 m⁄s²",
            "ye yukti gravity ko patla karke kar deti hai 2.5 m⁄s²"
          )}
        </T>
      </Fade>

      {/* beat 3 — the acceleration */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 312 310 h 456 q 12 0 12 12 v 20 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={540} y={338} size={16} fill={INK} weight={800}>
          a = (5−3)(10) ÷ 8 = 20 ÷ 8 = 2.5 m⁄s²
        </T>
      </Fade>

      {/* beat 4 — the tension */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 312 374 h 456 q 12 0 12 12 v 20 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={540} y={402} size={16} fill={INK} weight={800}>
          T = 2(5)(3)(10) ÷ 8 = 300 ÷ 8 = 37.5 N
        </T>
      </Fade>

      {/* beat 5 — the five-second check */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 446 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={466} size={14} fill={RED} script anchor="start">
          {t(
            "check: T = 37.5 N lies between the two weights, 30 N and 50 N",
            "check: T = 37.5 N dono weights ke beech, 30 N aur 50 N"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={84} y={492} size={14} fill={RED} script anchor="start">
          {t(
            "outside that range? a sign error — no further arithmetic rescues it",
            "us range se bahar? sign ki galti — aage ki arithmetic nahi bachaati"
          )}
        </T>
      </Fade>

      {/* beat 6 — the dilution of gravity */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={548} size={13} fill={AMBER_DARK} script>
          {t(
            "gravity diluted from 10 to 2.5 m⁄s² — slow enough to time by hand",
            "gravity 10 se ghatkar 2.5 m⁄s² — haath se naapne laayak dheemi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={540} y={572} size={13} fill={GREEN} script>
          {t(
            "exactly how Atwood first measured g, two centuries ago",
            "isi tarah Atwood ne pehli baar g naapa tha, do sadiyaan pehle"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
