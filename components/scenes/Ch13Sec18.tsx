/**
 * Ch13 · Section 18 — "Worked example (NEET): where kinetic equals potential"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 3.82, 8.03, 15.87, 23.14, 29.64, 36.14, 41.88]):
 *  0 shelf
 *  1 question: at what x (fraction of A) does K = U?
 *  2 trap (high): x = A/2 crossed out — tempting but wrong (E ∝ x²)
 *  3 ½k(A²−x²) = ½kx² ⇒ A² − x² = x²
 *  4 hero (high): 2x² = A² ⇒ x = A/√2 ≈ 0.707A
 *  5 diagram: K falls, U rises, cross at x=A/√2, height E/2
 *  6 at this point each energy = E/2
 *  7 cousins (high): U=E/4 at A/2, U=¾E at (√3/2)A
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size13
 *  b2 | "x = A/2" x70 bl150 size15 · cross M65,138→128,158 M128,138→65,158 ·
 *      script12 st x70 bl188 red
 *  b3 | st x70 bl225 size14
 *  b4 | box x70..430 y245..300 rx14 · line cx250 bl279 size18
 *  b5 | y-axis x660 y275..95 ↑ · x-axis y260 x645..930 → ·
 *      K curve M660,110 Q800,110 900,260 (ink) · U curve M660,260 Q760,260 900,110 (amber) ·
 *      dot(830,185) · guides 830,185→830,260 & 830,185→660,185 dashed ·
 *      "0" cx660 bl282 · "A/√2" cx830 bl282 · "A" cx900 bl282 · "E/2" x650 bl189 anchor-end ·
 *      legend x935..960 y108/130 + "K"/"U" x965
 *  b6 | st x70 bl335 size13
 *  b7 | script12 st x70 bl375 amber
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

export default function Ch13Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Not at A over two, but at A over root two", "A/2 par nahi, A/√2 par")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the question */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          {t("at what x (as fraction of A) does K = U?", "kis x par (A ka fraction), K = U hota hai?")}
        </T>
      </Fade>

      {/* beat 2 — the trap, high emphasis */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={150} size={15} fill={INK} anchor="start" weight={700}>
          x = A/2
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.0)} d="M 65 138 L 128 158 M 128 138 L 65 158" stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={70} y={188} size={12} fill={RED} script anchor="start">
          {t("✗ tempting but WRONG (E ∝ x²)", "✗ tempting par GALAT (E ∝ x²)")}
        </T>
      </Fade>

      {/* beat 3 — set them equal */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={225} size={14} fill={INK} anchor="start" weight={700}>
          ½k(A² − x²) = ½kx²  ⇒  A² − x² = x²
        </T>
      </Fade>

      {/* beat 4 — the hero result */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 245 h 332 q 14 0 14 14 v 27 q 0 14 -14 14 h -332 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={250} y={279} size={18} fill={INK} weight={800}>
          2x² = A² ⇒ x = A/√2 ≈ 0.707A
        </T>
      </Fade>

      {/* beat 5 — the picture: K falls, U rises, they cross */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={arrowD(660, 275, 660, 95)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={arrowD(645, 260, 930, 260)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d="M 660 110 Q 800 110 900 260" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 2.0)} d="M 660 260 Q 760 260 900 110" stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <Circle cx={830} cy={185} r={5} fill={GREEN} />
        <Path d="M 830 185 V 260 M 830 185 H 660" stroke={MUTED} strokeWidth={1.2} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.1)}>
        <T x={660} y={282} size={11} fill={INK}>
          0
        </T>
        <T x={830} y={282} size={11} fill={INK}>
          A/√2
        </T>
        <T x={900} y={282} size={11} fill={INK}>
          A
        </T>
        <T x={650} y={189} size={11} fill={RED} anchor="end">
          E/2
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <Path d="M 935 108 H 960" stroke={INK} strokeWidth={2.2} />
        <T x={965} y={112} size={12} fill={INK} anchor="start">
          K
        </T>
        <Path d="M 935 130 H 960" stroke={AMBER_DARK} strokeWidth={2.2} />
        <T x={965} y={134} size={12} fill={AMBER_DARK} anchor="start">
          U
        </T>
      </Fade>

      {/* beat 6 — each is E/2 there */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={335} size={13} fill={INK} anchor="start" weight={700}>
          {t("at this point, each energy = E/2", "yahan har energy = E/2")}
        </T>
      </Fade>

      {/* beat 7 — the cousins, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={375} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "cousins: U=E/4 at x=A/2 , U=¾E at x=(√3/2)A",
            "cousins: x=A/2 par U=E/4 , x=(√3/2)A par U=¾E"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
