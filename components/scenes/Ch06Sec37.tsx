/**
 * Ch06 · Section 37 — "Worked example: seesaw balance [NEET]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 8.42, 20.8, 31.55, 38.8, 46.14, 53.82]; hi b2..b7 are 1 s
 * → ALL staggers ≤0.8 s):
 *  0 title + subline (instant)
 *  1 seesaw figure: 30 kg far left, 45 kg dashed closer right, d markers
 *  2 red g-cancels trap
 *  3 givens
 *  4 moments equation
 *  5 green d₂ = 1.0 m box + figure label swap
 *  6 heavier-closer line
 *  7 sanity line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | plank (160,230)→(640,230) sw4 · pivot apex(400,234) base 382/418 y262 ·
 *       child1 rect x212..248 y188..224 "30 kg" cx230 bl 170 · child2 dashed rect
 *       x506..534 y194..222 "45 kg" cx520 bl 176 · d1 dash (230,248)→(400,248)
 *       "1.5 m" cx315 bl 272 · d2 dash (400,248)→(520,248) "d₂?" cx460 bl 272
 *       (b1..4) / "1.0 m" green (b5+)
 *  b2 | red bar x680 y140..210 · L1 st x698 bl 163 · L2 st x698 bl 191
 *  b3 | sans14 st x680 bl 250 / bl 280
 *  b4 | sans15 st x80 bl 380
 *  b5 | green box x560..900 y355..415 · cx730 bl 392
 *  b6 | script13 st x80 bl 445
 *  b7 | script13 st x80 bl 495 · underline y515 x80..600
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
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the quick version */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("seesaw balance [NEET speed trap]", "seesaw balance [NEET speed trap]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "30 kg child at 1.5 m — where must the 45 kg child sit?",
            "1.5 m par 30 kg bachcha — 45 kg bachcha kahan baithe?"
          )}
        </T>
      </Fade>

      {/* beat 1 — heavier sits closer */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 160 230 H 640" stroke={INK} sw={4} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d="M 400 234 L 382 262 h 36 z"
        stroke={INK}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 212 188 h 36 v 36 h -36 z"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={230} y={170} size={13} fill={INK} weight={700}>
          30 kg
        </T>
        <Path
          d="M 506 194 h 28 v 28 h -28 z"
          fill="none"
          stroke={AMBER}
          strokeWidth={2}
          strokeDasharray="6 5"
        />
        <Path
          d="M 230 248 H 400 M 400 248 H 520"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.3}
          strokeDasharray="5 4"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={520} y={176} size={13} fill={AMBER_DARK} weight={700}>
          45 kg
        </T>
        <T x={315} y={272} size={12} fill={MUTED} weight={700}>
          1.5 m
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.9)}>
        <T x={460} y={272} size={12} fill={AMBER_DARK} weight={700}>
          d₂?
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={460} y={272} size={12} fill={GREEN_DARK} weight={700}>
          1.0 m
        </T>
      </Fade>

      {/* beat 2 — the procedural trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 680 140 v 70" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={698} y={163} size={13} fill={RED} script anchor="start">
          {t("TRAP: don't multiply by g = 9.8", "TRAP: g = 9.8 se guna mat karo")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={698} y={191} size={13} fill={RED} script anchor="start">
          {t("it cancels — use mass × distance", "wo cancel hota hai — mass × distance lo")}
        </T>
      </Fade>

      {/* beat 3 — givens */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={680} y={250} size={14} fill={INK} anchor="start" weight={700}>
          m₁ = 30 kg , d₁ = 1.5 m
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={680} y={280} size={14} fill={INK} anchor="start" weight={700}>
          m₂ = 45 kg , d₂ = ?
        </T>
      </Fade>

      {/* beat 4 — moments */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={380} size={15} fill={INK} anchor="start" weight={700}>
          m₁d₁ = m₂d₂  ⇒  (30)(1.5) = (45) d₂
        </T>
      </Fade>

      {/* beat 5 — solve */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.1)}
        d="M 572 355 h 316 q 12 0 12 12 v 36 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={730} y={392} size={18} fill={INK} weight={700}>
          d₂ = 45 / 45 = 1.0 m
        </T>
      </Fade>

      {/* beat 6 — closer in */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={445} size={13} fill={INK} script anchor="start">
          {t(
            "the heavier 45 kg child sits 1 m out — closer than the lighter child",
            "bhaari 45 kg bachcha 1 m par baithta hai — halke se zyada paas"
          )}
        </T>
      </Fade>

      {/* beat 7 — the seesaw agrees */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={80} y={495} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "sanity: heavier-closer, lighter-farther — every real seesaw agrees ✓",
            "sanity: bhaari-paas, halka-door — har asli seesaw yahi kehta hai ✓"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d="M 80 515 h 520" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
