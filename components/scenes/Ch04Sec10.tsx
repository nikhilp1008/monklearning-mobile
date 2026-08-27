/**
 * Ch04 · Section 10 — "Worked Example 3 [JEE Main]: impulse from a floor"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.6, 30.3, 41.0, 57.4, 74.5, 85.3, 99.8]):
 *  0 title
 *  1 problem data + find
 *  2 figure: floor, drop column (5 m), rebound column (1.8 m), translate note
 *  3 v₁ = √(2gh₁) = 10 m/s ↓ + label at drop arrow
 *  4 v₂ = √(2gh₂) = 6 m/s ↑ + label at rebound arrow
 *  5 up = positive → v₁ = −10, v₂ = +6
 *  6 J = 3 + 5 → green box 8 N·s upward
 *  7 red margin: unequal speeds, energy loss counted, gravity negligible
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  fig | floor M100 400 H380 · ball c(150,170) r10 · drop (150,188)→(150,385) ·
 *    "5 m" cx120 bl 280 · "10 m⁄s" end x138 bl 370 · rebound (300,385)→(300,312) ·
 *    "1.8 m" cx335 bl 340 · "6 m⁄s" st x312 bl 370 · note cx240 bl 432
 *  R col | v₁ st x430 bl 160 · v₂ st x430 bl 196 · sign note st x430 bl 236 ·
 *    values st x430 bl 266 · J line st x430 bl 306 · box x430..700 y322..362 bl 348
 *  b7 | bar x66 y470..560 · lines st x84 bl 490 / 516 / 542
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
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — impulse from a floor",
            "Example 3 [JEE Main] — floor se impulse"
          )}
        </T>
      </Fade>

      {/* beat 1 — the problem */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "ball 0.5 kg · dropped from 5 m · rebounds to 1.8 m · g = 10 m⁄s²",
            "ball 0.5 kg · 5 m se giri · 1.8 m tak rebound · g = 10 m⁄s²"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: |impulse| delivered by the floor",
            "nikaalo: floor ke impulse ki magnitude"
          )}
        </T>
      </Fade>

      {/* beat 2 — heights in, speeds out */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 100 400 H 380" stroke={INK} sw={2.8} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d={circleD(150, 170, 10)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.4)}
        d={arrowD(150, 188, 150, 385)}
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={120} y={280} size={13} fill={INK} script>
          5 m
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.2)}
        d={arrowD(300, 385, 300, 312)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={335} y={340} size={13} fill={INK} script>
          1.8 m
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={240} y={432} size={13} fill={AMBER_DARK} script>
          {t("heights in → speeds out", "heights andar → speeds bahar")}
        </T>
      </Fade>

      {/* beat 3 — speed in */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={430} y={160} size={15} fill={INK} weight={700} anchor="start">
          v₁ = √(2gh₁) = √(2×10×5) = √100 = 10 m⁄s ↓
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={138} y={370} size={12} fill={RED} script anchor="end">
          10 m⁄s
        </T>
      </Fade>

      {/* beat 4 — speed out */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={430} y={196} size={15} fill={INK} weight={700} anchor="start">
          v₂ = √(2gh₂) = √(2×10×1.8) = √36 = 6 m⁄s ↑
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={312} y={370} size={12} fill={GREEN} script anchor="start">
          6 m⁄s
        </T>
      </Fade>

      {/* beat 5 — the same discipline */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={430} y={236} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "same discipline as the cricket ball: UP = positive",
            "wahi discipline jo cricket ball mein thi: UPAR = positive"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={430} y={266} size={16} fill={INK} weight={700} anchor="start">
          v₁ = −10 m⁄s&nbsp;&nbsp;&nbsp;v₂ = +6 m⁄s
        </T>
      </Fade>

      {/* beat 6 — the theorem */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={430} y={306} size={15} fill={INK} weight={700} anchor="start">
          J = m·v₂ − m·v₁ = 0.5(+6) − 0.5(−10) = 3 + 5
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 6)}
        d="M 442 322 h 246 q 12 0 12 12 v 16 q 0 12 -12 12 h -246 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 6.6)}>
        <T x={565} y={348} size={18} fill={INK} weight={800}>
          {t("J = 8 N·s, upward", "J = 8 N·s, upar")}
        </T>
      </Fade>

      {/* beat 7 — what we quietly did not do */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 470 v 88" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={490} size={14} fill={RED} script anchor="start">
          {t(
            "10 in, 6 out — we never assumed equal speeds",
            "10 andar, 6 bahar — speeds barabar kabhi nahi maani"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={516} size={14} fill={RED} script anchor="start">
          {t(
            "the bounce lost energy — the impulse already counts it",
            "bounce mein energy gayi — impulse usse gin chuka hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={84} y={542} size={14} fill={GREEN} script anchor="start">
          {t(
            "gravity's impulse during contact: negligible next to the floor's",
            "contact ke dauraan gravity ka impulse: floor ke aage negligible"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
