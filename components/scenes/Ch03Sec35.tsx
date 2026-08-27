/**
 * Ch03 · Section 35 — "Board-level: velocity and position after 2 seconds"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.5, 28.8, 42.9, 55.1, 66.8, 79.5, 91.9]):
 *  0 heading + problem
 *  1 setup splits (mini diagram)
 *  2 velocity equation → 4î + 6ĵ
 *  3 |v| = √52 ≈ 7.2
 *  4 position x-part = 8
 *  5 y-part = 6 → r, |r| = 10
 *  6 ANSWER box
 *  7 read what happened
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | origin (140,400) · v₀ →(260,400) lbl cx200 bl 424 · a →(140,300)
 *       lbl end (128,340) · caption cx220 bl 456 s11
 *  b2 | st x540 bl 130 s14 · st x540 bl 160 s15
 *  b3 | st x540 bl 196 s14 · caption st x540 bl 220 s11
 *  b4 | st x540 bl 260 s14
 *  b5 | st x540 bl 292 s14 · st x540 bl 320 s14
 *  b6 | box x520..1020 y346..394 text cx770 bl 378 s14
 *  b7 | bar M66 480 v52 · lines st x84 bl 498 / 522 s12
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

export default function Ch03Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "CBSE BOARD LEVEL — velocity & position at t = 2 s",
            "CBSE BOARD LEVEL — t = 2 s par velocity aur position"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "from the origin: v₀ = 4î m/s, constant a = 3ĵ m/s² — find v and r at t = 2 s",
            "origin se: v₀ = 4î m/s, constant a = 3ĵ m/s² — t = 2 s par v aur r nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup splits */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Circle cx={140} cy={400} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(140, 400, 260, 400)} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={200} y={424} size={13} fill={AMBER_DARK} weight={700}>v₀ = 4î</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d={arrowD(140, 400, 140, 300)} stroke={GREEN} sw={2.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={128} y={340} size={13} fill={GREEN} weight={700} anchor="end">a = 3ĵ</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={220} y={456} size={11} fill={MUTED} script>
          {t(
            "cleanly separate — shared only through t",
            "saaf-saaf alag — sirf t se jude hue"
          )}
        </T>
      </Fade>

      {/* beat 2 — the velocity */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={130} size={14} fill={INK} weight={700} anchor="start">
          v = v₀ + a t = 4î + (3 × 2)ĵ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={540} y={160} size={15} fill={INK} weight={800} anchor="start">
          v = 4î + 6ĵ  m/s
        </T>
      </Fade>

      {/* beat 3 — its magnitude */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={196} size={14} fill={INK} weight={700} anchor="start">
          |v| = √(16 + 36) = √52 ≈ 7.2 m/s
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={540} y={220} size={11} fill={MUTED} script anchor="start">
          {t("Pythagoras — the components are ⊥", "Pythagoras — components ⊥ hain")}
        </T>
      </Fade>

      {/* beat 4 — position, x-part */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={260} size={14} fill={INK} weight={700} anchor="start">
          r = v₀t + ½at² :   x-part = 4 × 2 = 8
        </T>
      </Fade>

      {/* beat 5 — y-part and the whole r */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={292} size={14} fill={INK} weight={700} anchor="start">
          y-part = ½ · 3 · 2² = 6
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={540} y={320} size={14} fill={INK} weight={800} anchor="start">
          r = 8î + 6ĵ m · |r| = √100 = 10 m
        </T>
      </Fade>

      {/* beat 6 — the answers */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 532 346 h 476 q 12 0 12 12 v 24 q 0 12 -12 12 h -476 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={770} y={378} size={14} fill={INK} weight={800}>
          v = 4î+6ĵ (≈7.2 m/s)  ·  r = 8î+6ĵ (10 m)
        </T>
      </Fade>

      {/* beat 7 — read what happened */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 480 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={498} size={12} fill={GREEN} script anchor="start">
          {t(
            "x ran uniform at 4 m/s · y accelerated from rest",
            "x uniform chala 4 m/s par · y ne rest se raftar pakdi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={522} size={12} fill={INK} script anchor="start">
          {t(
            "each solved alone as 1-D, combined at the end — the recipe again",
            "har ek akela 1-D jaisa hal hua, aakhir mein joda — wahi recipe"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
