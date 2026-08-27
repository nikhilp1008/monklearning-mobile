/**
 * Ch02 · Section 42 — "Example 4 [JEE Advanced]: the last second of a fall"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.8, 42.6, 59.7, 84.6, 108.3, 124.8, 146.4, 155.2]):
 *  0 title + problem line
 *  1 picture: shaft H, last-second slice bracket, 9H/25 label
 *  2 red note: last second = T−1 → T · strategy
 *  3 build: h(t) = ½gt² → fraction = (2T−1)/T²
 *  4 green: g cancelled — same on the Moon
 *  5 set = 9/25 → 9T² − 50T + 25 = 0
 *  6 quadratic → T = 5 or 5/9
 *  7 result box: H = 125 m
 *  8 red note: reject 5/9 — the premise dies
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  shaft x180 y130..440 dashed · ball (180,135) · ground y440 x100..300 ·
 *  H bracket x110 (label end (100,290)) · slice bracket x230 y360..440 ·
 *  slice label st x245 bl 396 · "9H⁄25" end (165,404)
 *  right st x386: b2 bar x370 y110..162 (bl 130/154) · b3 bl 192/220/248 ·
 *  b4 bl 280 · b5 bl 312 · b6 bl 344/372 · b7 box x386..800 y395..450 (bl 428)
 *  b8 | bar x66 y490..566 · lines st x84 bl 508 / 532 / 556
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the final boss */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — the last second of a fall",
            "Example 4 [JEE Advanced] — girne ka aakhri second"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "dropped from H; the LAST second covers 9⁄25 of H (g = 10) — find T and H",
            "H se giraya; AAKHRI second mein 9⁄25 H girta hai (g = 10) — T aur H nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the interval defined by the unknown */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Path
          d="M 180 145 V 435"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="5 7"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 172 135 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.4)}
        d="M 100 440 h 200 M 130 440 l -10 12 M 200 440 l -10 12 M 270 440 l -10 12"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d="M 110 130 V 440 M 104 130 h 12 M 104 440 h 12"
        stroke={MUTED}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={100} y={290} size={14} fill={INK} anchor="end" weight={700}>
          H
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.5)}
        d="M 230 360 V 440 M 224 360 h 12 M 224 440 h 12"
        stroke={RED}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.5)}>
        <T x={245} y={396} size={11} fill={RED} script anchor="start">
          {t("the LAST second (T−1 → T)", "AAKHRI second (T−1 → T)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={165} y={404} size={12} fill={AMBER_DARK} anchor="end" weight={700}>
          9H⁄25
        </T>
      </Fade>

      {/* beat 2 — let the note do the work */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 370 110 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={386} y={130} size={12} fill={RED} script anchor="start">
          {t(
            "'last second' = the interval T−1 → T — defined by the unknown T",
            "'aakhri second' = antraal T−1 → T — anjaan T se hi bana hua"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={386} y={154} size={12} fill={RED} script anchor="start">
          {t(
            "strategy: distance(last second) ⁄ H = 9 ⁄ 25",
            "chaal: doori(aakhri second) ⁄ H = 9 ⁄ 25"
          )}
        </T>
      </Fade>

      {/* beat 3 — build the fraction */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={386} y={192} size={13} fill={INK} anchor="start" weight={700}>
          {t("h(t) = ½gt²  (from rest)", "h(t) = ½gt²  (rest se)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={386} y={220} size={13} fill={INK} anchor="start" weight={700}>
          last second = ½gT² − ½g(T−1)²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={386} y={248} size={13} fill={INK} anchor="start" weight={700}>
          fraction = [T² − (T−1)²] ⁄ T² = (2T − 1) ⁄ T²
        </T>
      </Fade>

      {/* beat 4 — the lovely cancellation */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={386} y={280} size={12} fill={GREEN} script anchor="start">
          {t(
            "g cancelled — pure timing geometry; the same fraction on the Moon",
            "g kat gaya — sirf samay ki geometry; chaand par bhi wahi fraction"
          )}
        </T>
      </Fade>

      {/* beat 5 — the quadratic appears */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={386} y={312} size={13} fill={INK} anchor="start" weight={700}>
          (2T − 1) ⁄ T² = 9 ⁄ 25 → 9T² − 50T + 25 = 0
        </T>
      </Fade>

      {/* beat 6 — two roots */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={386} y={344} size={13} fill={INK} anchor="start" weight={700}>
          T = (50 ± √1600) ⁄ 18 = (50 ± 40) ⁄ 18
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={386} y={372} size={13} fill={INK} anchor="start" weight={700}>
          T = 5 s&nbsp;&nbsp;or&nbsp;&nbsp;T = 5⁄9 s
        </T>
      </Fade>

      {/* beat 7 — done */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 398 395 h 390 q 12 0 12 12 v 31 q 0 12 -12 12 h -390 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={593} y={428} size={15} fill={INK} weight={700}>
          T = 5 s → H = ½·10·25 = 125 m
        </T>
      </Fade>

      {/* beat 8 — the real lesson */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 490 v 76" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={508} size={13} fill={RED} script anchor="start">
          {t(
            "why reject 5⁄9 s? not because it is small or ugly —",
            "5⁄9 s kyun khaarij? isliye nahi ki chhota ya bhadda hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.5)}>
        <T x={84} y={532} size={13} fill={RED} script anchor="start">
          {t(
            "a fall shorter than 1 s has no 'last second' — the premise itself dies",
            "1 s se chhoti girawat ka koi 'aakhri second' nahi — premise hi mar jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={556} size={13} fill={RED} script anchor="start">
          {t(
            "test roots against the PHYSICS, not just the algebra",
            "roots ko PHYSICS se jaancho, sirf algebra se nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
