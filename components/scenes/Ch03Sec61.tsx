/**
 * Ch03 · Section 61 — "JEE Advanced: the closest approach of two ships"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1.0, 13.1, 27.5, 40.4, 48.5, 62.5, 74.9]):
 *  0 heading + problem
 *  1 the master trick: sit on B
 *  2 frozen B, A drifts in a straight line
 *  3 v_AB = (-10, 10) computed
 *  4 A starts at (20,0), drifts NW at 45°
 *  5 perpendicular distance = 20/√2
 *  6 timing: closest after 1 hour
 *  7 ANSWER box + the one decision
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line st x84 bl 118 s13
 *  b2 | line st x84 bl 150 s13 · underline M84 160 h420
 *  b3 | B(150,470) dot · A-path dashed (330,470)→(150,290) NW-45° ·
 *       lbl st (340,472) "A(20,0)" · perp (150,470)→(240,380) green lbl st (250,376)
 *  b4 | st x560 bl 190 s14
 *  b5 | st x560 bl 230 s13
 *  b6 | box x560..1010 y254..300 text cx785 bl 286 s16
 *  b7 | st x560 bl 340 s13
 *  boxB | box x84..500 y500..546 text cx292 bl 532 s15 · verdict cx292 bl 570 s11
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

export default function Ch03Sec61({ currentTime, reveals, language }: SceneProps) {
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
            "JEE ADVANCED — the closest approach of two ships",
            "JEE ADVANCED — do jahazon ki sabse kam doori"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "A is 20 km due east of B · A moves north at 10 km/h, B east at 10 km/h — closest distance and when?",
            "A, B se 20 km east par · A north 10 km/h, B east 10 km/h — sabse kam doori aur kab?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the master trick */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={84} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the master trick: sit on B and treat it as at rest",
            "asli chaal: B par baith jao aur use sthir maano"
          )}
        </T>
      </Fade>

      {/* beat 2 — frozen B, straight-line A */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={84} y={150} size={13} fill={INK} script anchor="start">
          {t(
            "in B's frame, A moves in a STRAIGHT LINE, along v(AB)",
            "B ke frame mein, A ek SEEDHI LINE mein chalta hai, v(AB) ke saath"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 84 160 h 420" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 3 — compute v_AB */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={210} size={14} fill={INK} weight={700} anchor="start">
          v(AB) = (0,10) − (10,0) = (−10, 10) km/h
        </T>
      </Fade>

      {/* beat 4 — the diagram */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Circle cx={150} cy={470} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={140} y={494} size={12} fill={INK} weight={700} anchor="end">B</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 330 470 L 150 290" stroke={INK_LIGHT} sw={1.8} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <Circle cx={330} cy={470} r={5} fill={AMBER_DARK} />
        <T x={340} y={472} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          A (20,0)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={220} y={340} size={11} fill={INK_LIGHT} script>
          {t("drifts NW at 45°", "NW mein 45° par baha")}
        </T>
      </Fade>

      {/* beat 5 — the perpendicular */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={arrowD(150, 470, 240, 380)} stroke={GREEN} sw={2.8} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={250} y={376} size={13} fill={GREEN} weight={800} anchor="start">
          {t("closest = ⊥ distance", "sabse kam = ⊥ doori")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={84} y={190} size={12} fill={GREEN} script anchor="start">
          {t(
            "the line sits at 45° → closest = 20 ⁄ √2 = 10√2 ≈ 14.1 km",
            "line 45° par hai → sabse kam = 20 ⁄ √2 = 10√2 ≈ 14.1 km"
          )}
        </T>
      </Fade>

      {/* beat 6 — the timing */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={560} y={230} size={13} fill={INK} script anchor="start">
          {t(
            "the along-the-line component closes the 20 km gap in exactly 1 hour",
            "line ke saath wala hissa 20 km ka fasla theek 1 ghante mein banda karta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the answer + the one decision */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 572 254 h 426 q 12 0 12 12 v 22 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={785} y={286} size={15} fill={INK} weight={800}>
          {t("closest ≈ 14.1 km, after 1 h", "sabse kam ≈ 14.1 km, 1 ghante baad")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={560} y={340} size={12} fill={GREEN} script anchor="start">
          {t(
            "one decision — jump into B's frame — turned two moving ships into one-line geometry",
            "ek faisla — B ke frame mein kood jao — do chalte jahazon ko ek-line geometry bana deta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
