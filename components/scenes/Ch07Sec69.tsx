/**
 * Ch07 · Section 69 — "The two-body problem and reduced mass"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.8, 15.62, 27.05, 28.05, 29.05, 30.05, 31.05, 44.36]):
 *  0 title
 *  1 diagram: heavy star small circle, light star big circle, common centre
 *  2 formula: r1 = m2·r/(m1+m2), m1r1 = m2r2
 *  3 amber: heavier → closer in, tighter circle
 *  4 green box: ω² = G(m1+m2)/r³
 *  5 amber: Kepler III with the sum — how binaries are weighed
 *  6 reduced mass definition
 *  7 T and E formulas
 *  8 red margin: m2≫m1 limit recovers fixed-centre approx
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  com dot (280,300) · heavy star c(220,300) r16 orbit r60 dashed ·
 *   light star c(430,300) r8 orbit r150 dashed · caption cx280 bl400
 *  right col x480: b2 line bl150 · b3 line bl195 ·
 *  b4 green box x480..820 y220..272(bl252)
 *  b5 line st x480 bl310
 *  b6 line bl350 · b7 line bl385
 *  b8 bar x66 y440..492 lines bl460/486
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — both orbit the centre of mass */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Both bodies orbit the centre of mass",
            "Dono bodies centre of mass ke charon or orbit"
          )}
        </T>
      </Fade>

      {/* beat 1 — the geometry */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle
          cx={280}
          cy={300}
          r={60}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 6"
        />
        <Circle
          cx={280}
          cy={300}
          r={150}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={280} cy={300} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={220} cy={300} r={16} fill={AMBER_DARK} />
        <T x={220} y={340} size={11} fill={AMBER_DARK} weight={700}>
          m₁ ({t("heavy", "bhaari")})
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={430} cy={300} r={8} fill={INK} />
        <T x={430} y={330} size={11} fill={INK} weight={700}>
          m₂ ({t("light", "halka")})
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={280} y={475} size={12} fill={INK} script>
          {t(
            "heavier star: smaller circle",
            "bhaari star: chhota circle"
          )}
        </T>
      </Fade>

      {/* beat 2 — the formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={14} fill={INK} anchor="start" weight={700}>
          r₁ = m₂·r ⁄ (m₁+m₂) ,  m₁r₁ = m₂r₂
        </T>
      </Fade>

      {/* beat 3 — inversely to the masses */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "divides the separation INVERSELY to the masses",
            "separation ko masses ke INVERSE mein baantta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — ω² formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 492 220 h 316 q 12 0 12 12 v 28 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={650} y={252} size={17} fill={INK} weight={800}>
          ω² = G(m₁+m₂) ⁄ r³
        </T>
      </Fade>

      {/* beat 5 — how binaries are weighed */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={310} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "Kepler III with the SUM — how binary stars are weighed",
            "Kepler III SUM ke saath — binary stars aise tole jaate"
          )}
        </T>
      </Fade>

      {/* beat 6 — reduced mass */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={350} size={15} fill={INK} anchor="start" weight={700}>
          μ = m₁·m₂ ⁄ (m₁+m₂)
        </T>
      </Fade>

      {/* beat 7 — T and E */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={480} y={385} size={13} fill={INK} anchor="start" weight={700}>
          T = 2π√(r³⁄G(m₁+m₂)) ,  E = −Gm₁m₂⁄2r
        </T>
      </Fade>

      {/* beat 8 — the limiting case */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "m₂ ≫ m₁: μ → m₁, heavy body becomes fixed",
            "m₂ ≫ m₁: μ → m₁, bhaari body fixed ban jaata"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={84} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "recovers exactly the satellite approximation",
            "satellite wali approximation wapas mil jaati"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
