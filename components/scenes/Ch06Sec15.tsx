/**
 * Ch06 · Section 15 — "The cross-product toolkit" (formulas, 9 beats)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.34, 22.02, 34.3, 40.36, 51.63, 62.38, 78.34, 89.43]):
 *  0 title
 *  1 cyclic ring figure right: circle c(830,190) r60, i/j/k labels, chord arrows,
 *    caption forward + / backward −
 *  2 defining formula + n̂ note
 *  3 magnitude line
 *  4 anti-commutative + self-cross line
 *  5 unit-vector products line
 *  6 determinant box (green) right: bars + 3 rows + minus-on-j warning
 *  7 geometry chips: parallelogram / triangle
 *  8 identity line + complementary note
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl 52
 *  b1 | circle (830,190) r60 muted · "i" cx830 bl 122 · "j" st(894,238) ·
 *       "k" end(766,238) · arrows (843,141)→(876,205) / (868,228)→(792,228) /
 *       (784,205)→(817,141) amber · caption script12 cx830 bl 292
 *  b2 | sans18 st x70 bl 140 · note script11 st x90 bl 164
 *  b3 | sans16 st x70 bl 205
 *  b4 | sans16 st x70 bl 250
 *  b5 | sans16 st x70 bl 295
 *  b6 | green box x600..1040 y330..470 · "A × B =" st(620,405) · bars x730/x1000
 *       y345..455 · rows bl 370/405/440, cols cx780/865/950 · warning script12
 *       cx815 bl 490
 *  b7 | chipA x70 y350 w310 h36 · chipB x70 y400 w270 h36
 *  b8 | sans16 st x70 bl 480 · note script11 st x90 bl 508
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
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

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the toolkit */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("the cross-product toolkit", "cross product ka poora toolkit")}
        </T>
      </Fade>

      {/* beat 1 — the cyclic ring */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 770 190 a 60 60 0 1 0 120 0 a 60 60 0 1 0 -120 0"
        stroke={MUTED}
        sw={1.6}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={830} y={122} size={16} fill={INK} weight={700}>
          i
        </T>
        <T x={894} y={238} size={16} fill={INK} anchor="start" weight={700}>
          j
        </T>
        <T x={766} y={238} size={16} fill={INK} anchor="end" weight={700}>
          k
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d={arrowD(843, 141, 876, 205)} stroke={AMBER} sw={2.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 5)} d={arrowD(868, 228, 792, 228)} stroke={AMBER} sw={2.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 6)} d={arrowD(784, 205, 817, 141)} stroke={AMBER} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={830} y={292} size={12} fill={AMBER_DARK} script>
          {t("forward = + · backward = −", "aage jao = + · peechhe = −")}
        </T>
      </Fade>

      {/* beat 2 — the defining formula */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={70} y={140} size={18} fill={INK} anchor="start" weight={700}>
          A × B = (AB sinθ) n
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={90} y={164} size={11} fill={MUTED} script anchor="start">
          {t(
            "n = unit vector ⊥ both, right-hand sense",
            "n = unit vector ⊥ dono, right-hand sense"
          )}
        </T>
      </Fade>

      {/* beat 3 — magnitude only */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={70} y={205} size={16} fill={INK} anchor="start" weight={700}>
          |A × B| = AB sinθ
        </T>
      </Fade>

      {/* beat 4 — two core properties */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={70} y={250} size={16} fill={INK} anchor="start" weight={700}>
          A × B = − B × A ,    A × A = 0
        </T>
      </Fade>

      {/* beat 5 — unit-vector products */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={70} y={295} size={16} fill={INK} anchor="start" weight={700}>
          i × j = k  ·  j × k = i  ·  k × i = j
        </T>
      </Fade>

      {/* beat 6 — the determinant workhorse */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 612 330 h 416 q 12 0 12 12 v 116 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -116 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={620} y={405} size={17} fill={INK} anchor="start" weight={700}>
          A × B =
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.8)}
        d="M 730 345 V 455 M 1000 345 V 455"
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={780} y={370} size={15} fill={INK} weight={700}>
          i
        </T>
        <T x={865} y={370} size={15} fill={INK} weight={700}>
          j
        </T>
        <T x={950} y={370} size={15} fill={INK} weight={700}>
          k
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={780} y={405} size={15} fill={INK} weight={700}>
          A
          <Sub>x</Sub>
        </T>
        <T x={865} y={405} size={15} fill={INK} weight={700}>
          A
          <Sub>y</Sub>
        </T>
        <T x={950} y={405} size={15} fill={INK} weight={700}>
          A
          <Sub>z</Sub>
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.4)}>
        <T x={780} y={440} size={15} fill={INK} weight={700}>
          B
          <Sub>x</Sub>
        </T>
        <T x={865} y={440} size={15} fill={INK} weight={700}>
          B
          <Sub>y</Sub>
        </T>
        <T x={950} y={440} size={15} fill={INK} weight={700}>
          B
          <Sub>z</Sub>
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={815} y={490} size={12} fill={RED} script>
          {t(
            "don't forget the MINUS on the j term",
            "j waale term par MINUS mat bhoolna"
          )}
        </T>
      </Fade>

      {/* beat 7 — geometric payoffs */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Chip x={70} y={350} w={310} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("parallelogram area = |A × B|", "parallelogram area = |A × B|")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <Chip x={70} y={400} w={270} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("triangle = ½ |A × B|", "triangle = ½ |A × B|")}
        </Chip>
      </Fade>

      {/* beat 8 — the linking identity */}
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={70} y={480} size={16} fill={INK} anchor="start" weight={700}>
          |A × B|² + (A · B)² = A²B²
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={90} y={508} size={11} fill={GREEN_DARK} script anchor="start">
          {t(
            "cross & dot carry complementary information",
            "cross aur dot — ek doosre ki poorak jaankari"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
