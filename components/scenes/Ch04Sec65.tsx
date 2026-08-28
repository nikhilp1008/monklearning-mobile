/**
 * Ch04 · Section 65 — "Worked Example 1 [CBSE Board]: the spring in the lift"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.3, 35.2, 60.0, 82.1, 99.6, 100.6]):
 *  0 title
 *  1 problem + find (a) (b)
 *  2 panel (a): spring hanging, block, kx1 = mg → x1 = 10 cm
 *  3 panel (b): lift accelerating up, kx2 = m(g+a) setup
 *  4 → x2 = 12 cm box
 *  5 red margin: spring scale = weighing scale you can watch stretch
 *  6 green closing: down accel shrinks it, free fall = zero, unstretched
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  L panel | ceiling M120 150 H260 · spring zigzag x190 y150..220 ·
 *    block x160..220 y220..255 · caption cx190 bl 280 ·
 *    eq st x84 bl 320 · box x84..330 y340..380 bl 366
 *  R panel | lift outline x620..820 y140..340 · spring+block inside ·
 *    up-arrow (720,140)→(720,110) "a"(730,120 st) · caption cx720 bl 360 ·
 *    eq st x600 bl 320 (aligned diff col) — actually keep single column layout below
 *  b4 box x560..1000 y150..192 bl 178 (result)
 *  b5 | bar x66 y420..500 · lines st x84 bl 440 / 466 / 490
 *  b6 line cx540 bl 545
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const zigzag = (x: number, y0: number) =>
    `M ${x} ${y0} l -14 12 l 20 12 l -20 12 l 20 12 l -20 12 l 14 12`;

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "Example 1 [CBSE Board] — the spring in the lift",
            "Example 1 [CBSE Board] — lift mein spring"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "spring k = 200 N⁄m · block m = 2 kg hangs in equilibrium · g = 10",
            "spring k = 200 N⁄m · block m = 2 kg equilibrium mein latka · g = 10"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "(a) extension  (b) new extension in a lift accelerating up at 2 m⁄s²",
            "(a) extension  (b) 2 m⁄s² se upar accelerate karti lift mein naya extension"
          )}
        </T>
      </Fade>

      {/* beat 2 — panel (a) */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 120 150 H 260" stroke={INK} sw={2.4} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d={zigzag(190, 150)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d="M 160 222 h 60 v 32 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={190} y={280} size={12} fill={AMBER_DARK} script>
          (a)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={84} y={320} size={15} fill={INK} weight={700} anchor="start">
          k·x₁ = mg = 2×10 = 20
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 9)}
        d="M 96 340 h 234 q 12 0 12 12 v 16 q 0 12 -12 12 h -234 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 9.6)}>
        <T x={213} y={366} size={16} fill={INK} weight={800}>
          x₁ = 0.10 m = 10 cm
        </T>
      </Fade>

      {/* beat 3 — panel (b) */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 620 140 H 820 V 340 H 620 Z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d={zigzag(720, 165)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d="M 690 237 h 60 v 32 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.8)}
        d={arrowD(770, 155, 770, 118)}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={780} y={124} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          a
        </T>
        <T x={720} y={360} size={12} fill={AMBER_DARK} script>
          (b)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={560} y={92} size={13} fill={RED} script anchor="start">
          {t(
            "no longer equilibrium — accelerating WITH the lift",
            "ab equilibrium nahi — lift ke SAATH accelerate"
          )}
        </T>
      </Fade>

      {/* beat 4 — the numbers */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={560} y={150} size={15} fill={INK} weight={700} anchor="start">
          k·x₂ = m(g+a) = 2×12 = 24
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 6)}
        d="M 572 168 h 300 q 12 0 12 12 v 16 q 0 12 -12 12 h -300 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.6)}>
        <T x={722} y={194} size={16} fill={INK} weight={800}>
          x₂ = 0.12 m = 12 cm
        </T>
      </Fade>

      {/* beat 5 — the connection */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 420 v 90" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={440} size={14} fill={RED} script anchor="start">
          {t(
            "a spring scale never reads TRUE weight — it reads the force it must supply",
            "spring scale kabhi TRUE weight nahi padhta — jo force deni padti hai wo padhta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={84} y={466} size={14} fill={RED} script anchor="start">
          {t(
            "the same self-adjusting, normal-reaction-type force — 20 N grew to 24 N",
            "wahi self-adjusting, normal-reaction jaisi force — 20 N badhkar 24 N"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={84} y={490} size={14} fill={GREEN} script anchor="start">
          {t(
            "a spring is a weighing scale you can watch stretch",
            "spring ek weighing scale hai jise aap khinchte dekh sakte ho"
          )}
        </T>
      </Fade>

      {/* beat 6 — the mirror */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={545} size={13} fill={GREEN} script>
          {t(
            "down acceleration shrinks it · free fall → 0, hangs completely unstretched",
            "neeche acceleration se sikudta · free fall → 0, bilkul bina khinche latka"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
