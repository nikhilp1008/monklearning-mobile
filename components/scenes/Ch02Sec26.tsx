/**
 * Ch02 · Section 26 — "Example 3 [JEE Main]: piecewise v-t, crossing into negative"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.2, 38.6, 57.9, 82.8, 101.3, 126.1, 147.9]):
 *  0 title + problem line
 *  1 graph: axes, piecewise line, guides, red below-axis hatches + crossing note
 *  2 multi-concept line (three ideas, one graph)
 *  3 computation card: fall slope −4, crossing at t = 8
 *  4 amber ring on the crossing + "NOT t = 5" label
 *  5 piece areas: 18 · 24 · 18 · −2 (with leader)
 *  6 sums card: 58 vs 62
 *  7 red bar note: gap = 2 × backtracked area
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  scale: x = 150+80t · v → y = 380 − 13v · points (150,380)(390,224)(550,224)(870,432)
 *  crossing (790,380) · ticks 3/5 bl 404, "9" (890,404) · "12" end (138,228)
 *  b1 note cx800 bl 160 · b2 line cx350 bl 160
 *  b3 card x60..560 y490..560 (bl 518/546) · b4 label st x820 bl 356
 *  b5 values (300,330)(470,300)(650,330) · "−2 m" st (920,430) + arrow →(858,408)
 *  b6 card x600..1040 y490..560 (bl 518/546) · b7 bar x66 y566..596, line st x84 bl 582
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
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the graph that actually tests you */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — piecewise v-t, crossing into negative",
            "Example 3 [JEE Main] — tukdon wala v-t, negative mein utarta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "v: 0→12 in 3 s · hold till t = 5 · falls to −4 by t = 9 — reversal? Δx? distance?",
            "v: 0→12, 3 s mein · t = 5 tak wahi · t = 9 par −4 — palatna? Δx? distance?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(120, 380, 950, 380)}
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d={arrowD(150, 460, 150, 150)}
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={962} y={386} size={14} fill={INK} anchor="start" weight={700}>
          t
        </T>
        <T x={144} y={138} size={14} fill={INK} weight={700}>
          v
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.6)}
        d="M 150 380 L 390 224 M 390 224 H 550 M 550 224 L 870 432"
        stroke={INK}
        sw={2.8}
        dur={2.2}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.4)}>
        <Path
          d="M 150 224 H 390 M 390 224 V 380 M 550 224 V 380"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={390} y={404} size={12} fill={INK} weight={700}>
          3
        </T>
        <T x={550} y={404} size={12} fill={INK} weight={700}>
          5
        </T>
        <T x={890} y={404} size={12} fill={INK} weight={700}>
          9
        </T>
        <T x={138} y={228} size={12} fill={INK} anchor="end" weight={700}>
          12
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 9)}
        d="M 810 380 V 393 M 830 380 V 406 M 850 380 V 419"
        stroke={RED}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 11)}>
        <T x={800} y={160} size={12} fill={RED} script>
          {t(
            "crosses the axis ⇒ reversal + split the area",
            "axis paar ⇒ palatna + area wahin todo"
          )}
        </T>
      </Fade>

      {/* beat 2 — three ideas, one graph */}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={350} y={160} size={12} fill={AMBER_DARK} script>
          {t(
            "slope + signed area + distance-vs-displacement — miss one, lose all",
            "slope + signed area + distance-vs-displacement — ek chhoota, sab gaya"
          )}
        </T>
      </Fade>

      {/* beat 3 — find the crossing first */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 72 490 h 476 q 12 0 12 12 v 46 q 0 12 -12 12 h -476 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={310} y={518} size={14} fill={INK} weight={700}>
          {t("fall slope = −16 ⁄ 4 = −4 m/s²", "fall slope = −16 ⁄ 4 = −4 m/s²")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={310} y={546} size={14} fill={INK} weight={700}>
          12 − 4(t − 5) = 0 → t = 8 s
        </T>
      </Fade>

      {/* beat 4 — reverses at 8, not 5 */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={ringD(790, 380, 16, 13)}
        stroke={AMBER}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={820} y={356} size={12} fill={AMBER_DARK} script anchor="start">
          {t("reverses at t = 8 — NOT t = 5", "t = 8 par palat'ta hai — t = 5 par NAHI")}
        </T>
      </Fade>

      {/* beat 5 — the four pieces */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={300} y={330} size={15} fill={INK} weight={700}>
          18
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={470} y={300} size={15} fill={INK} weight={700}>
          24
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={650} y={330} size={15} fill={INK} weight={700}>
          18
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={920} y={430} size={13} fill={RED} anchor="start" weight={700}>
          −2 m
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 15.5)}
        d={arrowD(910, 425, 858, 408)}
        stroke={RED}
        sw={1.8}
        dur={0.5}
      />

      {/* beat 6 — read it twice */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 612 490 h 416 q 12 0 12 12 v 46 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={820} y={518} size={14} fill={INK} weight={700}>
          Δx = 18+24+18−2 = 58 m
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={820} y={546} size={14} fill={INK} weight={700}>
          distance = 18+24+18+2 = 62 m
        </T>
      </Fade>

      {/* beat 7 — why exactly twice */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 566 v 28" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={582} size={13} fill={RED} script anchor="start">
          {t(
            "gap = 62 − 58 = 4 = 2 × the backtracked area — subtracted once, added once",
            "gap = 62 − 58 = 4 = 2 × backtrack area — ek baar ghata, ek baar juda"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
