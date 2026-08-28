/**
 * Ch13 · Section 14 — "The energy formulas at a glance" (the energy toolkit)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.58, 19.89, 29.68, 39.79, 51.47, 63.47, 73.9]):
 *  0 shelf
 *  1 K = ½mv² = ½mω²(A²−x²)
 *  2 U = ½kx² = ½mω²x²
 *  3 E = K + U = ½kA² = ½mω²A²
 *  4 bar chart: K(green)/U(amber) split at x=0, A/2, A/√2, A
 *  5 ratios: K/E, U/E, K/U
 *  6 hero: K=U at x=A/√2, ⟨K⟩=⟨U⟩=E/2
 *  7 note: displacement at f, K & U both at 2f
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size15
 *  b2 | st x70 bl145 size15
 *  b3 | st x70 bl180 size15 amber
 *  b4 | baseline y300 x650..1030 · E-dash y160 x650..1030 · "total E (constant)" x655 bl152 ·
 *      bar1 x680..730(green full 160..300) "x=0" cx705 bl322 ·
 *      bar2 x780..830(green195..300 + amber160..195) "x=A/2" cx805 bl322 ·
 *      bar3 x880..930(green230..300 + amber160..230) "x=A/√2" cx905 bl322 ·
 *      bar4 x980..1030(amber full160..300) "x=A" cx1005 bl322
 *  b5 | st x70 bl225 size13
 *  b6 | box x70..470 y245..300 rx14 · line cx270 bl278 size16
 *  b7 | script13 st x70 bl340 red
 */

import React from "react";
import { Path, Rect } from 'react-native-svg';
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Kinetic, potential, total, and their ratios", "Kinetic, potential, total, aur unke ratios")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — kinetic energy */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={15} fill={INK} anchor="start" weight={700}>
          K = ½mv² = ½mω²(A² − x²)
        </T>
      </Fade>

      {/* beat 2 — potential energy */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={145} size={15} fill={INK} anchor="start" weight={700}>
          U = ½kx² = ½mω²x²
        </T>
      </Fade>

      {/* beat 3 — the total */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={180} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          E = K + U = ½kA² = ½mω²A²
        </T>
      </Fade>

      {/* beat 4 — the bars: K/U split at four positions */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 650 300 L 1030 300" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Path d="M 650 160 L 1030 160" stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 4" fill="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={655} y={152} size={11} fill={MUTED} anchor="start">
          {t("total E (constant)", "total E (constant)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Rect x={680} y={160} width={50} height={140} fill={GREEN} opacity={0.85} />
        <T x={705} y={322} size={11} fill={INK}>
          x = 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <Rect x={780} y={195} width={50} height={105} fill={GREEN} opacity={0.85} />
        <Rect x={780} y={160} width={50} height={35} fill={AMBER} opacity={0.85} />
        <T x={805} y={322} size={11} fill={INK}>
          x = A/2
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Rect x={880} y={230} width={50} height={70} fill={GREEN} opacity={0.85} />
        <Rect x={880} y={160} width={50} height={70} fill={AMBER} opacity={0.85} />
        <T x={905} y={322} size={11} fill={INK}>
          x = A/√2
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <Rect x={980} y={160} width={50} height={140} fill={AMBER} opacity={0.85} />
        <T x={1005} y={322} size={11} fill={INK}>
          x = A
        </T>
      </Fade>

      {/* beat 5 — the ratios */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={225} size={13} fill={INK} anchor="start" weight={700}>
          K/E = 1 − x²/A²  ,  U/E = x²/A²  ,  K/U = (A²−x²)/x²
        </T>
      </Fade>

      {/* beat 6 — the hero landmark */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 84 245 h 372 q 14 0 14 14 v 27 q 0 14 -14 14 h -372 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={270} y={278} size={16} fill={INK} weight={800}>
          K = U at x = A/√2 , ⟨K⟩ = ⟨U⟩ = E/2
        </T>
      </Fade>

      {/* beat 7 — the frequency fact */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={340} size={13} fill={RED} script anchor="start">
          {t(
            "displacement @ f, but K & U both @ 2f (cos², sin² terms)",
            "displacement f pe, par K aur U dono 2f pe (cos², sin² terms)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
