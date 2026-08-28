/**
 * Ch06 · Section 46 — "Worked example: four masses on a square [CBSE]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,5,13.62,24.11] — b0..b4 fast in EN;
 * hi [0,15.1,23.81,30.81,44.46,55.3,62.81,63.81] — b6,b7 fast in HI →
 * all kept ≤0.9 s except b5, which has room in both languages):
 *  0 title + subline
 *  1 figure: square, 4 corner masses, centre axis, diagonal r
 *  2 givens
 *  3 r = a√2/2 ⇒ r² = ½ m²
 *  4 I = Σmᵢrᵢ² = 4mr²
 *  5 substitute → green box I = 4 kg·m²
 *  6 red note: ⊥ distance is half the DIAGONAL, not half the side
 *  7 clean confirmation line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | square x320..460 y150..290 · corner dots r5 · axis ⊙ (390,220) r6+ticks ·
 *       diagonal r line (390,220)→(460,290) green · "r" st(432,258) ·
 *       "a = 1 m" cx390 bl138 · caption script12 cx390 bl320
 *  b2 | sans14 st x80 bl362
 *  b3 | sans15 st x80 bl397
 *  b4 | sans15 st x80 bl432
 *  b5 | sans15 st x80 bl470 · green box x560..960 y455..510 cx760 bl490
 *  b6 | red bar x66 y525..565 · L st x84 bl548
 *  b7 | script13 cx540 bl582
 */

import React from "react";
import { Circle, Path, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — drilling the definition */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "four masses on a square [CBSE board]",
            "square par chaar masses [CBSE board]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "2 kg at each corner, side 1 m — I about a ⊥ axis through the centre?",
            "har corner par 2 kg, side 1 m — centre se ⊥ axis ke baare mein I?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the key distance: half the diagonal */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 320 150 h 140 v 140 h -140 z"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 320 150 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 460 150 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 320 290 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 460 290 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Path
          d="M 390 214 v -8 M 390 226 v 8 M 384 220 h -8 M 396 220 h 8"
          stroke={INK}
          strokeWidth={1.6}
          fill="none"
        />
        <Circle cx={390} cy={220} r={5} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.85)}
        d="M 390 220 L 460 290"
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={432} y={258} size={12} fill={GREEN_DARK} anchor="start" weight={700}>
          r
        </T>
        <T x={390} y={138} size={12} fill={INK} weight={700}>
          a = 1 m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={390} y={320} size={12} fill={MUTED} script>
          {t("each corner — 2 kg", "har corner — 2 kg")}
        </T>
      </Fade>

      {/* beat 2 — givens */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={362} size={14} fill={INK} anchor="start" weight={700}>
          {t(
            "given: 4 × 2 kg at corners, a = 1 m, axis ⊥ through centre",
            "diya: corners par 4 × 2 kg, a = 1 m, centre se ⊥ axis"
          )}
        </T>
      </Fade>

      {/* beat 3 — r² from the diagonal */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={397} size={15} fill={INK} anchor="start" weight={700}>
          r = a√2/2  ⇒  r² = a²/2 = 1/2 m²
        </T>
      </Fade>

      {/* beat 4 — the definition applied */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={432} size={15} fill={INK} anchor="start" weight={700}>
          I = Σ m
          <Sub>i</Sub>
          <Up>r</Up>
          <Sub>i</Sub>
          <Up>² = 4 × m × r²</Up>
        </T>
      </Fade>

      {/* beat 5 — substitute, and land the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={470} size={15} fill={INK} anchor="start" weight={700}>
          I = 4 × 2 × (1/2)
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.5)}
        d="M 572 455 h 386 q 12 0 12 12 v 31 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={760} y={490} size={19} fill={INK} weight={700}>
          I = 4 kg·m²
        </T>
      </Fade>

      {/* beat 6 — the classic slip */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 66 525 v 40" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={84} y={548} size={13} fill={RED} script anchor="start">
          {t(
            "⊥ distance = half the DIAGONAL — not half the side",
            "⊥ distance = aadhi DIAGONAL — aadha side nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — clean once you use the right distance */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={582} size={13} fill={GREEN_DARK} script>
          {t(
            "clean, once you use the right distance ✓",
            "saaf, jaise hi sahi distance use kiya ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
