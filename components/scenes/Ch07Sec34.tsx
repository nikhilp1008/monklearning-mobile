/**
 * Ch07 · Section 34 — "Worked example: the height where g becomes a quarter (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 17.25, 25.1, 31.59, 47.97]):
 *  0 title + problem
 *  1 diagram: R and 2R circles, "h = R, not small" caption
 *  2 amber: must use exact form
 *  3 setup line
 *  4 square-root step
 *  5 green box: h = R
 *  6 red trap: 3R/8 crossed out
 *  7 red margin: ask "is h small?" first
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  R circle c(220,270) r70 · 2R circle c(220,270) r140 dashed · "R" (220,265) ·
 *   "2R" cx220 bl140 · caption cx220 bl430
 *  right col x480: b2 line bl150 · b3 line bl195 · b4 line bl235 ·
 *   b5 green box x480..760 y260..312 (bl292)
 *  b6 bar x66 y360..412 · trap text bl380 + "3R/8" crossed x300 bl405
 *  b7 bar x66 y440..492 lines bl460/486
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
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the speed trap */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [NEET] — where g falls to g⁄4",
            "Example [NEET] — g kahan g⁄4 ho jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "at what height above the surface is g = g⁄4?",
            "surface se kitni height par g = g⁄4 hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the diagram flags the danger */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 220 200 A 70 70 0 1 1 219.9 200"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Circle
          cx={220}
          cy={270}
          r={140}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="6 7"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={220} y={275} size={13} fill={INK} weight={700}>
          R
        </T>
        <T x={220} y={140} size={12} fill={MUTED} weight={700}>
          2R
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={220} y={430} size={13} fill={RED} script>
          {t(
            "g⁄4 → distance doubled → h = R, NOT small",
            "g⁄4 → distance double → h = R, CHHOTA NAHI"
          )}
        </T>
      </Fade>

      {/* beat 2 — exact form only */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "must use the EXACT form — never the small-h approximation",
            "EXACT form use karo — small-h approximation kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — set up */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={14} fill={INK} anchor="start" weight={700}>
          g·R² ⁄ (R+h)² = g⁄4  →  R² ⁄ (R+h)² = ¼
        </T>
      </Fade>

      {/* beat 4 — square root */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={235} size={14} fill={INK} anchor="start" weight={700}>
          R ⁄ (R+h) = ½  →  R+h = 2R
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 492 260 h 268 q 12 0 12 12 v 28 q 0 12 -12 12 h -268 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={626} y={292} size={20} fill={INK} weight={800}>
          h = R
        </T>
      </Fade>

      {/* beat 6 — the linear-form trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 66 360 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={84} y={380} size={13} fill={RED} script anchor="start">
          {t(
            "trap: g(1−2h/R)=g/4 wrongly gives h =",
            "trap: g(1−2h/R)=g/4 galat se deta hai h ="
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={300} y={410} size={17} fill={RED} weight={800}>
          3R⁄8
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4)}
        d={crossD(280, 394, 60, 20)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />

      {/* beat 7 — ask "is h small" first */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "large change (¼, ⅑, …) → always the full (R+h)² form",
            "bada change (¼, ⅑, …) → hamesha poora (R+h)² form"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "\"is h small?\" — asking that first IS the whole skill",
            "\"kya h chhota hai?\" — yehi poochhna asli skill hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
