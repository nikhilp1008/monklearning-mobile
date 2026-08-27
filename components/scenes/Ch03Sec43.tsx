/**
 * Ch03 · Section 43 — "Board derivation: time of flight and maximum height"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.0, 25.3, 34.8, 53.6, 67.1, 76.8, 84.6]):
 *  0 heading
 *  1 setup: axes + components
 *  2 labelled parabola diagram
 *  3 time of flight condition
 *  4 T = 2u sinθ/g box
 *  5 apex: vy = 0 at T/2
 *  6 H = u²sin²θ/2g box
 *  7 no cosine — vertical channel only
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x84 bl 112 s13 · st x84 bl 140 s13
 *  b2 | ground M80 470 h440 · parabola M110 470 Q300 270 490 470 · apex dot (300,370) ·
 *       "vy = 0" cx300 bl 352 s11 · dash M300 370 V470 · "H" st (310,425) ·
 *       R arrows (300,500)→(110,500)/(490,500) · "R" cx300 bl 522
 *  b3 | st x560 bl 130 s12 · st x560 bl 158 s13
 *  b4 | box x560..1010 y178..224 text cx785 bl 208 s16 · caption st x560 bl 246 s11
 *  b5 | st x560 bl 286 s13
 *  b6 | box x560..1010 y306..352 text cx785 bl 336 s16
 *  b7 | bar M546 384 v52 · lines st x560 bl 402 / 426 s12
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

export default function Ch03Sec43({ currentTime, reveals, language }: SceneProps) {
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
            "CBSE DERIVATION — time of flight & max height",
            "CBSE DERIVATION — time of flight aur max height"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={112} size={13} fill={INK} script anchor="start">
          {t(
            "origin at the launch point · x horizontal · y up",
            "origin launch point par · x horizontal · y upar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={84} y={140} size={13} fill={INK} weight={700} anchor="start">
          ux = u cosθ · uy = u sinθ · ax = 0 · ay = −g
        </T>
      </Fade>

      {/* beat 2 — the labelled parabola */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 80 470 h 440" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 110 470 Q 300 270 490 470" stroke={INK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Circle cx={300} cy={370} r={5} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={300} y={352} size={11} fill={AMBER_DARK} weight={700}>vy = 0</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.2)} d="M 300 376 V 470" stroke={GREEN} sw={1.6} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={312} y={428} size={14} fill={GREEN} weight={800} anchor="start">H</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6)} d={arrowD(300, 500, 112, 500)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 6.6)} d={arrowD(300, 500, 488, 500)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 7.4)}>
        <T x={300} y={524} size={14} fill={AMBER_DARK} weight={800}>R</T>
      </Fade>

      {/* beat 3 — flight ends at y = 0 */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={560} y={130} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the flight ends when y = 0 again, after launch",
            "udaan tab khatam jab y phir 0 ho jaye, launch ke baad"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={560} y={158} size={13} fill={INK} weight={700} anchor="start">
          u sinθ · t − ½ g t² = 0
        </T>
      </Fade>

      {/* beat 4 — time of flight */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 572 178 h 426 q 12 0 12 12 v 22 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={785} y={208} size={16} fill={INK} weight={800}>
          T = 2u sinθ ⁄ g
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={560} y={246} size={11} fill={GREEN} script anchor="start">
          {t(
            "symmetric free fall — time up = time down",
            "symmetric free fall — chadhne ka time = utarne ka"
          )}
        </T>
      </Fade>

      {/* beat 5 — the apex */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={286} size={13} fill={INK} weight={700} anchor="start">
          u sinθ − g t = 0 → t_top = u sinθ ⁄ g = T⁄2
        </T>
      </Fade>

      {/* beat 6 — max height */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 306 h 426 q 12 0 12 12 v 22 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={785} y={336} size={16} fill={INK} weight={800}>
          H = u² sin²θ ⁄ 2g
        </T>
      </Fade>

      {/* beat 7 — notice what is missing */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 546 384 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={560} y={402} size={12} fill={RED} script anchor="start">
          {t(
            "no cosθ anywhere in H — only the VERTICAL channel sets the height",
            "H mein kahin cosθ nahi — height sirf VERTICAL channel tay karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={560} y={426} size={12} fill={INK} script anchor="start">
          {t(
            "the horizontal drift is completely irrelevant to how high it climbs",
            "horizontal drift ka chadhai se koi lena-dena hi nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
