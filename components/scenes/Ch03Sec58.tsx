/**
 * Ch03 · Section 58 — "Board-level: a boat pointed straight across"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.1, 32.0, 43.8, 54.5, 64.0, 65.0, 80.1]):
 *  0 heading + problem
 *  1 the key insight: ⊥ channels
 *  2 river diagram: across 4, current 3, resultant
 *  3 crossing time = 100/4 = 25 s
 *  4 drift = 3 × 25 = 75 m
 *  5 resultant = √(16+9)
 *  6 = 5 m/s
 *  7 ANSWER box + verdict
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line st x84 bl 118 s13 · underline M84 128 h440
 *  b2 | banks M80 180 h420 / M80 420 h420 · boat (150,400) · across →(150,250)
 *       lbl end (138,320) · current →(260,400) lbl st (270,406) · result →(260,250)
 *       green lbl st (270,300) · width bar (110,420)→(110,180) lbl end (100,268)
 *  b3 | st x560 bl 190 s14
 *  b4 | st x560 bl 230 s14
 *  b5 | st x560 bl 270 s14
 *  b6 | st x560 bl 298 s14
 *  b7 | box x560..1030 y326..374 text cx795 bl 358 s15 · verdict st x560 bl 414 s12
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

export default function Ch03Sec58({ currentTime, reveals, language }: SceneProps) {
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
            "CBSE BOARD LEVEL — a boat pointed straight across",
            "CBSE BOARD LEVEL — naav seedha saamne taani hui"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "river 100 m wide flowing at 3 m/s · boat 4 m/s in the water — time, drift, ground speed?",
            "nadi 100 m chaudi, bahaav 3 m/s · naav paani mein 4 m/s — time, drift, ground speed?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the key insight */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "across-velocity ⊥ current → independent channels, exactly as before",
            "aar-paar velocity ⊥ bahaav → azaad channels, bilkul pehle jaise"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 84 128 h 440" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 2 — the river picture */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 80 180 h 420" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 80 420 h 420" stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Circle cx={150} cy={400} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={arrowD(150, 400, 150, 250)} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={138} y={320} size={12} fill={AMBER_DARK} weight={700} anchor="end">4 m/s</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4)} d={arrowD(150, 400, 262, 400)} stroke={INK_LIGHT} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={272} y={406} size={12} fill={INK_LIGHT} weight={700} anchor="start">3 m/s</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.6)} d={arrowD(150, 400, 262, 250)} stroke={GREEN} sw={3} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={272} y={300} size={12} fill={GREEN} weight={700} anchor="start">5 m/s</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.4)} d="M 110 420 V 180" stroke={MUTED} sw={1.3} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={100} y={268} size={11} fill={MUTED} script anchor="end">100 m</T>
      </Fade>

      {/* beat 3 — the crossing time */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={560} y={190} size={14} fill={INK} weight={700} anchor="start">
          t = 100 ⁄ 4 = 25 s   (current irrelevant)
        </T>
      </Fade>

      {/* beat 4 — the drift */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={560} y={230} size={14} fill={INK} weight={700} anchor="start">
          drift = 3 × 25 = 75 m downstream
        </T>
      </Fade>

      {/* beat 5 — combine */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={270} size={14} fill={INK} weight={700} anchor="start">
          ground speed = √(16 + 9)
        </T>
      </Fade>

      {/* beat 6 — the value */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={560} y={298} size={14} fill={INK} weight={800} anchor="start">
          = √25 = 5 m/s
        </T>
      </Fade>

      {/* beat 7 — the answers */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 572 326 h 446 q 12 0 12 12 v 24 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={795} y={358} size={15} fill={INK} weight={800}>
          25 s · 75 m drift · 5 m/s over ground
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={560} y={414} size={12} fill={GREEN} script anchor="start">
          {t(
            "the across-motion set the TIME, the along-motion the DRIFT — never interfering",
            "aar-paar chaal ne TIME diya, bahaav ne DRIFT — kabhi ek doosre mein nahi ghuse"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
