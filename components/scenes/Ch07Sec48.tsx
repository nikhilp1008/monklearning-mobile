/**
 * Ch07 · Section 48 — "Worked example: relative velocity of approach (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 10.02, 16.51, 28.28, 38.01, 45.61, 59.94]):
 *  0 title + problem: m and 2m at rest, separation d
 *  1 amber: two laws — momentum + energy
 *  2 momentum: m·v1 = 2m·v2
 *  3 v1 = 2v2, arrows sized accordingly
 *  4 energy conservation setup
 *  5 substitute → 3m·v2²
 *  6 solve for v2²
 *  7 green box: v(rel) = √(6Gm(1/r − 1/d))
 *  8 red margin: momentum decides the unequal share
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  m (180,260) r10 · 2m (420,260) r16 · dash M195 260 H404 · "d" cx300 bl244 ·
 *   caption cx300 bl300
 *  b1 | line cx540 bl150
 *  b2 | line st x100 bl340
 *  b3 | v1 arrow (180,280)→(140,280) long / v2 arrow (420,280)→(450,280) short ·
 *      labels + line st x100 bl370
 *  b4 | line st x480 bl150 (wraps, small text)
 *  b5 | line st x480 bl235
 *  b6 | line st x480 bl275
 *  b7 | green box x480..980 y400..452(bl432)
 *  b8 | bar x66 y500..552 lines bl520/546
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — released from rest */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Advanced] — relative velocity of approach",
            "Example [JEE Advanced] — approach ki relative velocity"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "m, 2m at rest, separation d — find v(rel) when separation is r",
            "m, 2m rest par, separation d — jab separation r ho, v(rel) nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 0 diagram */}
      <Fade on={beat >= 0} delay={dl(0, 1.5)}>
        <Circle cx={180} cy={260} r={10} fill={INK} />
        <Circle cx={420} cy={260} r={16} fill={INK} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.3)}>
        <Path d="M 195 260 H 404" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 6" fill="none" />
        <T x={300} y={244} size={12} fill={INK} weight={700}>
          d
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={180} y={296} size={12} fill={INK} weight={700}>
          m
        </T>
        <T x={420} y={300} size={12} fill={INK} weight={700}>
          2m
        </T>
      </Fade>

      {/* beat 1 — two laws in play */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={150} size={13} fill={AMBER_DARK} script>
          {t(
            "no external force → momentum conserved · gravity conservative → energy conserved",
            "koi external force nahi → momentum conserved · gravity conservative → energy conserved"
          )}
        </T>
      </Fade>

      {/* beat 2 — momentum conservation */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={100} y={340} size={15} fill={INK} anchor="start" weight={700}>
          m·v₁ = 2m·v₂
        </T>
      </Fade>

      {/* beat 3 — v1 = 2v2, shown by arrow length */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d={arrowD(178, 280, 118, 280)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.2)}
        d={arrowD(422, 280, 452, 280)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={100} y={370} size={15} fill={INK} anchor="start" weight={700}>
          v₁ = 2v₂
        </T>
      </Fade>

      {/* beat 4 — energy conservation set up */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={150} size={13} fill={INK} anchor="start" weight={700}>
          −2Gm² ⁄ d = ½mv₁² + ½(2m)v₂² − 2Gm² ⁄ r
        </T>
      </Fade>

      {/* beat 5 — substitute */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={235} size={14} fill={INK} anchor="start" weight={700}>
          {t("substitute v₁=2v₂:", "v₁=2v₂ substitute karo:")}  KE = 3m·v₂²
        </T>
      </Fade>

      {/* beat 6 — solve for v2² */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={275} size={14} fill={INK} anchor="start" weight={700}>
          v₂² = (2Gm ⁄ 3)·(1⁄r − 1⁄d)
        </T>
      </Fade>

      {/* beat 7 — the relative velocity */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.5)}
          d="M 492 400 h 476 q 12 0 12 12 v 28 q 0 12 -12 12 h -476 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={730} y={432} size={15} fill={INK} weight={800}>
          v(rel) = v₁+v₂ = √(6Gm·(1⁄r − 1⁄d))
        </T>
      </Fade>

      {/* beat 8 — momentum decides the split */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 500 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "cannot split the energy in half — momentum decides the share",
            "energy aadha-aadha nahi bant sakti — momentum share tay karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={84} y={546} size={13} fill={RED} script anchor="start">
          {t(
            "the lighter mass moves faster, carries more KE",
            "halka mass tez chalta hai, zyada KE le jaata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
