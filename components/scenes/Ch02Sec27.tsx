/**
 * Ch02 · Section 27 — "Example 4 [JEE Advanced]: climbing from a-t to v-t to displacement"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 45, 64.3, 89.2, 107.5, 120.3, 143.5, 159.7]):
 *  0 title + problem line
 *  1 strategy note: climb twice
 *  2 a-t graph (steps +6 / −3) · v-t axes · green climb arrow
 *  3 v-t line built + computation card
 *  4 ring the peak: v_max = 12 at t = 2
 *  5 reversal label at t = 6
 *  6 areas card (12 · 24 · −6)
 *  7 results card (30 m · 42 m)
 *  8 red note: negative a ≠ moving backward (4 s where that fails)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  a-t: axis y210 x130..610 · y-line x150 y150..250 · steps (150,162)H250 · (250,234)H550 ·
 *       "+6" end (142,166) · "−3" end (142,238) · "2" (250,196) · "8" (550,196) · tag (185,148)
 *  climb arrow (340,268)→(340,305) + label st x360 bl 292
 *  v-t: axis y430 x130..610 · y-line x150 y330..470 · line (150,430)L(250,346)L(550,472) ·
 *       "12" end (142,350) · "2" (250,450) · "6" (445,452) · "8" st (562,478) · tag (180,320)
 *  right: b1 note cx845 bl 150 · b3 card x650..1040 y180..280 (bl 208/234/260) ·
 *         b6 card y300..400 (bl 324/352/378) · b7 card y420..500 (bl 448/476)
 *  b4 ring c(250,346) + label st x290 bl 330 · b5 label st x470 bl 408
 *  b8 | bar x66 y515..590 · lines st x84 bl 534 / 558 / 582
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
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec27({ currentTime, reveals, language }: SceneProps) {
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
            "Example 4 [JEE Advanced] — climb from a-t to v-t to displacement",
            "Example 4 [JEE Advanced] — a-t se v-t, phir displacement tak chadho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "from rest: a = +6 for 2 s, then −3 for 6 s — find v_max, reversal, Δx, distance",
            "rest se: a = +6, 2 s tak · phir −3, 6 s tak — v_max, palatna, Δx, distance nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the whole strategy */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={845} y={150} size={12} fill={AMBER_DARK} script>
          {t(
            "a-t → (area) → v-t → (area) → Δx — climb twice",
            "a-t → (area) → v-t → (area) → Δx — do baar chadho"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two graphs */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={185} y={148} size={12} fill={MUTED} script>
          a-t
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.2)}
        d={arrowD(130, 210, 610, 210)}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d="M 150 250 V 150"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d="M 150 162 H 250 M 250 162 V 234 M 250 234 H 550"
        stroke={INK}
        sw={2.6}
        dur={1.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={142} y={166} size={12} fill={INK} anchor="end" weight={700}>
          +6
        </T>
        <T x={142} y={238} size={12} fill={INK} anchor="end" weight={700}>
          −3
        </T>
        <T x={266} y={196} size={12} fill={INK} weight={700}>
          2
        </T>
        <T x={550} y={196} size={12} fill={INK} weight={700}>
          8
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 8)}
        d={arrowD(340, 268, 340, 305)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={360} y={292} size={11} fill={GREEN} script anchor="start">
          {t("area → Δv (v₀ = 0, from rest)", "area → Δv (v₀ = 0, rest se)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 11)}>
        <T x={180} y={320} size={12} fill={MUTED} script>
          v-t
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 12)}
        d={arrowD(130, 430, 610, 430)}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 13)}
        d="M 150 470 V 330"
        stroke={INK}
        sw={2}
        dur={0.4}
      />

      {/* beat 3 — build the v-t graph */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 150 430 L 250 346"
        stroke={INK}
        sw={2.8}
        dur={0.9}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 10)}
        d="M 250 346 L 550 472"
        stroke={INK}
        sw={2.8}
        dur={1.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={142} y={350} size={12} fill={INK} anchor="end" weight={700}>
          12
        </T>
        <T x={250} y={450} size={12} fill={INK} weight={700}>
          2
        </T>
        <T x={445} y={452} size={12} fill={INK} weight={700}>
          6
        </T>
        <T x={562} y={478} size={12} fill={INK} anchor="start" weight={700}>
          8
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.5)}
        d="M 662 180 h 366 q 12 0 12 12 v 76 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -76 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={845} y={208} size={13} fill={INK} weight={700}>
          Δv = 6×2 = +12 → v(2) = 12
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={845} y={234} size={13} fill={INK} weight={700}>
          then v = 12 − 3(t − 2)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={845} y={260} size={13} fill={INK} weight={700}>
          v(6) = 0 · v(8) = −6
        </T>
      </Fade>

      {/* beat 4 — the peak sits where a crosses zero */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={ringD(250, 346, 12, 11)}
        stroke={AMBER}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={290} y={330} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "v_max = 12 at t = 2 — where a crosses zero",
            "v_max = 12, t = 2 par — jahan a zero paar karta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the reversal */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={470} y={408} size={12} fill={RED} script anchor="start">
          {t("v = 0 → t = 6 s: reverses", "v = 0 → t = 6 s: palat'ta hai")}
        </T>
      </Fade>

      {/* beat 6 — the pieces */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 662 300 h 366 q 12 0 12 12 v 76 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -76 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={845} y={324} size={12} fill={AMBER_DARK} script>
          {t("v-t areas, piece by piece", "v-t ke areas, tukda-tukda")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={845} y={352} size={13} fill={INK} weight={700}>
          ½·2·12 = 12 · ½·4·12 = 24
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={845} y={378} size={13} fill={INK} weight={700}>
          {t("below: ½·2·6 = 6 → counts −6", "neeche: ½·2·6 = 6 → ginti −6")}
        </T>
      </Fade>

      {/* beat 7 — added twice */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 662 420 h 366 q 12 0 12 12 v 56 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -56 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={845} y={448} size={14} fill={INK} weight={700}>
          Δx = 12 + 24 − 6 = 30 m
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={845} y={476} size={14} fill={INK} weight={700}>
          distance = 12 + 24 + 6 = 42 m
        </T>
      </Fade>

      {/* beat 8 — the subtlety that separates strong students */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 515 v 75" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={534} size={13} fill={RED} script anchor="start">
          {t(
            "a turns negative at t = 2, but the particle moves FORWARD till t = 6",
            "a, t = 2 par negative hua, par particle t = 6 tak AAGE hi chala"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={84} y={558} size={13} fill={RED} script anchor="start">
          {t(
            "negative a first slows the body — only after v = 0 does it push backward",
            "negative a pehle dheema karta hai — v = 0 ke baad hi peechhe dhakelta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 11)}>
        <T x={84} y={582} size={13} fill={RED} script anchor="start">
          {t(
            "'negative a = moving backward' — the classic trap, wrong for 4 full seconds here",
            "'negative a = peechhe chalna' — classic trap, yahan poore 4 second galat"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
