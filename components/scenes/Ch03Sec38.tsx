/**
 * Ch03 · Section 38 — "JEE Advanced: radius of curvature of a path"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.0, 31.9, 45.7, 57.9, 68.5, 86.5, 91.9]):
 *  0 heading + problem
 *  1 formula box: R = v²/a⊥
 *  2 velocity at t = 1 → 10√2
 *  3 geometry: 45° below horizontal
 *  4 diagram: split g along/across v
 *  5 a⊥ = 5√2 → R = 20√2
 *  6 ANSWER ≈ 28.3 m
 *  7 only the across-part bends
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | box x84..470 y104..150 text cx277 bl 136 s16 · caption st x84 bl 172 s11
 *  b2 | st x84 bl 210 / 238 s14
 *  b3 | st x84 bl 276 s12
 *  b4 | P(700,250) · v →(800,350) lbl st (810,356) · g →(700,364) lbl st (712,340) ·
 *       45° lbl st (712,306) · along →(757,307) lbl st (765,315) s11 ·
 *       across →(643,307) lbl end (635,300) s12
 *  b5 | st x84 bl 314 / 342 s14
 *  b6 | box x84..470 y364..410 text cx277 bl 396 s17
 *  b7 | bar M66 470 v52 · lines st x84 bl 488 / 512 s12
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

export default function Ch03Sec38({ currentTime, reveals, language }: SceneProps) {
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
            "JEE ADVANCED — what actually bends a path?",
            "JEE ADVANCED — path ko asal mein kya modta hai?"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "launched with v₀ = 10î m/s under a = −10ĵ — radius of curvature at t = 1 s?",
            "v₀ = 10î m/s se phenka, a = −10ĵ — t = 1 s par radius of curvature?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the tool */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 96 104 h 362 q 12 0 12 12 v 22 q 0 12 -12 12 h -362 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={277} y={136} size={16} fill={INK} weight={800}>
          R = v² ⁄ a⊥
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={84} y={172} size={11} fill={MUTED} script anchor="start">
          {t(
            "so we need: the speed, and the across-slice of the acceleration",
            "to chahiye: speed, aur acceleration ka aar-paar wala hissa"
          )}
        </T>
      </Fade>

      {/* beat 2 — the speed at t = 1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={210} size={14} fill={INK} weight={700} anchor="start">
          vx = 10 · vy = −10 × 1 = −10
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={238} size={14} fill={INK} weight={700} anchor="start">
          speed = √(100 + 100) = 10√2 m/s
        </T>
      </Fade>

      {/* beat 3 — the 45° geometry */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={276} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "equal components → v points exactly 45° below the horizontal",
            "barabar components → v theek 45° neeche jhuka hua hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — split g */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Circle cx={700} cy={250} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(700, 250, 800, 350)} stroke={INK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={810} y={356} size={13} fill={INK} weight={700} anchor="start">v</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d={arrowD(700, 250, 700, 364)} stroke={INK_LIGHT} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={712} y={340} size={13} fill={INK_LIGHT} weight={700} anchor="start">g</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={712} y={306} size={11} fill={AMBER_DARK} weight={700} anchor="start">45°</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 5.2)} d={arrowD(700, 250, 757, 307)} stroke={MUTED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 5.8)}>
        <T x={765} y={315} size={11} fill={MUTED} script anchor="start">
          {t("along v — changes speed", "v ke saath — speed badalta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6.8)} d={arrowD(700, 250, 643, 307)} stroke={GREEN} sw={2.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={635} y={300} size={12} fill={GREEN} weight={700} anchor="end">
          a⊥
        </T>
      </Fade>

      {/* beat 5 — feed the formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={84} y={314} size={14} fill={INK} weight={700} anchor="start">
          a⊥ = g cos45° = 10 ⁄ √2 = 5√2
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={342} size={14} fill={INK} weight={700} anchor="start">
          R = (10√2)² ⁄ 5√2 = 200 ⁄ 5√2 = 20√2
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 96 364 h 362 q 12 0 12 12 v 22 q 0 12 -12 12 h -362 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={277} y={396} size={17} fill={INK} weight={800}>
          R = 20√2 ≈ 28.3 m
        </T>
      </Fade>

      {/* beat 7 — carry the trick */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 470 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={488} size={12} fill={GREEN} script anchor="start">
          {t(
            "split a against v: the along-part changes SPEED, the across-part BENDS",
            "a ko v ke hisaab se todo: saath wala SPEED badalta hai, aar-paar wala MODTA hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={512} size={12} fill={INK} script anchor="start">
          {t(
            "only the across-part sets the radius of curvature",
            "radius of curvature sirf aar-paar wale hisse se tay hota hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
