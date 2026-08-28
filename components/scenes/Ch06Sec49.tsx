/**
 * Ch06 · Section 49 — "Worked example: solid sphere by integration [JEE Advanced]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,17.06,28.49,46.33] — b0..b3 fast in EN;
 * hi [0,10.75,19.71,29.1,30.1,31.1,32.1,47.63] — b3,b4,b5 fast in HI →
 * b0..b5 kept ≤0.9 s; b6/b7 have room in both languages):
 *  0 title + subline
 *  1 figure: sphere sliced into discs, one slice highlighted at height y
 *  2 r = √(R²−y²), thickness dy
 *  3 dm = ρπ(R²−y²)dy
 *  4 dI = ½dm·r² = ½ρπ(R²−y²)²dy  (uses the disc result)
 *  5 integrate → ½ρπ·(16R⁵/15)
 *  6 substitute ρ → green box I = (2/5)MR²
 *  7 theme: chained the disc into the sphere
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | circle c(270,175) r80 · axis dashed x270 y90..260 ·
 *       faint lines y120 x218..322 / y230 x218..322 (MUTED) ·
 *       highlight band y155 x196..344 amber sw6 · y-dash (270,175)→(270,155) ·
 *       "y" st(280,167) · "r" st(305,148) · "dy" st(348,158)
 *  b2 | sans13 st x60 bl300
 *  b3 | sans13 st x60 bl330
 *  b4 | sans12 st x60 bl360
 *  b5 | sans12 st x60 bl392
 *  b6 | sans13 st x60 bl425 · green box x560..960 y450..495 cx760 bl480
 *  b7 | script13 cx540 bl525 · underline y540 x300..780
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the JEE Advanced showpiece */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "solid sphere by integration [JEE Advanced]",
            "integration se solid sphere [JEE Advanced]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "slice into discs, stack along a diameter — derive I from scratch",
            "discs mein slice karo, diameter ke saath stack — I scratch se derive"
          )}
        </T>
      </Fade>

      {/* beat 1 — the sphere, sliced into discs */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 190 175 a 80 80 0 1 0 160 0 a 80 80 0 1 0 -160 0"
        stroke={INK}
        sw={2.2}
        fill={CREAM}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Path
          d="M 270 90 V 260"
          fill="none"
          stroke={INK}
          strokeWidth={1.6}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Path
          d="M 218 120 H 322 M 218 230 H 322"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.2}
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 196 155 H 344"
        stroke={AMBER}
        sw={6}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Path
          d="M 270 175 V 155"
          fill="none"
          stroke={AMBER_DARK}
          strokeWidth={1.6}
          strokeDasharray="4 3"
        />
        <T x={280} y={167} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          y
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={305} y={148} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          r
        </T>
        <T x={348} y={158} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          dy
        </T>
      </Fade>

      {/* beat 2 — the slice geometry */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={300} size={13} fill={INK} anchor="start" weight={700}>
          r = √(R² − y²) ,  {t("thickness dy", "thickness dy")}
        </T>
      </Fade>

      {/* beat 3 — the slice mass */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={330} size={13} fill={INK} anchor="start" weight={700}>
          dm = ρπr²dy = ρπ(R² − y²) dy
        </T>
      </Fade>

      {/* beat 4 — the slice's moment, from the disc result */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={360} size={12} fill={INK} anchor="start" weight={700}>
          dI = ½(dm)r² = ½ρπ(R² − y²)² dy
        </T>
      </Fade>

      {/* beat 5 — integrate over the whole sphere */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={392} size={12} fill={INK} anchor="start" weight={700}>
          I = ½ρπ ∫₋ᴿᴿ (R² − y²)² dy = ½ρπ · (16R⁵/15)
        </T>
      </Fade>

      {/* beat 6 — substitute the density, land the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={425} size={13} fill={INK} anchor="start" weight={700}>
          ρ = M / ((4/3)πR³)
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.6)}
        d="M 572 450 h 386 q 12 0 12 12 v 21 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={760} y={480} size={19} fill={INK} weight={700}>
          I = (2/5)MR²
        </T>
      </Fade>

      {/* beat 7 — the theme once more */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={525} size={13} fill={GREEN_DARK} script>
          {t(
            "the slice used the disc result — disc chained into sphere, once again",
            "slice ne disc result use kiya — disc ko sphere mein chain kiya, phir se"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2)} d="M 300 540 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
