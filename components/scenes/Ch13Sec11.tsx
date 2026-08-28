/**
 * Ch13 · Section 11 — "Common pitfalls and pro-tips" (closes SHM Concepts & Kinematics)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.08, 20.01, 32.63, 47.41, 60.95, 70.8, 78.5]):
 *  0 shelf
 *  1 trap 1 (high): never drop the minus sign
 *  2 trap 2: fastest ≠ most accelerated
 *  3 trap 3: not every periodic motion is SHM
 *  4 trap 4: ω (rad/s) ≠ f (Hz)
 *  5 pro-tip 1 (high): use the ratio shortcuts directly
 *  6 pro-tip 2: two speeds, two positions ⇒ square and subtract
 *  7 formula: the memory hook — MAX at MEAN
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl115 size15 red weight800
 *  b2 | st x70 bl150 size13 red
 *  b3 | st x70 bl180 size13 red
 *  b4 | st x70 bl210 size13 red
 *  b5 | st x70 bl250 size14 green weight700
 *  b6 | st x70 bl280 size13 green
 *  b7 | box x180..900 y468..558 rx18 · L1 cx540 bl510 size26 · L2 cx540 bl546 size15
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  GREEN,
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

export default function Ch13Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Where marks quietly leak away", "Marks chupke se kahan nikal jaate hain")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — trap 1: the minus sign, high emphasis */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={115} size={15} fill={RED} anchor="start" weight={800}>
          {t("✗ NEVER drop the minus: a = −ω²x (not +ω²x!)", "✗ minus kabhi mat giro: a = −ω²x (+ω²x nahi!)")}
        </T>
      </Fade>

      {/* beat 2 — trap 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={150} size={13} fill={RED} anchor="start">
          {t(
            "✗ fastest ≠ most accelerated: max speed at O, max accel at ±A",
            "✗ fastest ≠ most accelerated: O par max speed, ±A par max accel"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={180} size={13} fill={RED} anchor="start">
          {t(
            "✗ not all periodic = SHM (Earth's orbit, 2-freq sum ≠ SHM)",
            "✗ har periodic SHM nahi (Earth ka orbit, 2-freq sum ≠ SHM)"
          )}
        </T>
      </Fade>

      {/* beat 4 — trap 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={210} size={13} fill={RED} anchor="start">
          {t("✗ ω (rad/s) ≠ f (Hz) — factor of 2π, check your units", "✗ ω (rad/s) ≠ f (Hz) — 2π ka factor, units check karo")}
        </T>
      </Fade>

      {/* beat 5 — pro-tip 1, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={250} size={14} fill={GREEN} anchor="start" weight={700}>
          ✓ {t("both maxima given ⇒ use ", "dono maxima diye ⇒ seedha ")}ω = a<Sub>max</Sub>
          <Up>/v</Up>
          <Sub>max</Sub>
          <Up> , A = v</Up>
          <Sub>max</Sub>
          <Up>²/a</Up>
          <Sub>max</Sub>
        </T>
      </Fade>

      {/* beat 6 — pro-tip 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={280} size={13} fill={GREEN} anchor="start">
          {t(
            "✓ two speeds, two positions ⇒ square v(x), subtract",
            "✓ do speeds, do positions ⇒ v(x) square karo, subtract karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the memory hook */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 198 468 h 684 q 18 0 18 18 v 36 q 0 18 -18 18 h -684 q -18 0 -18 -18 v -36 q 0 -18 18 -18"
          stroke={GREEN}
          sw={2.6}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={510} size={26} fill={INK} weight={800}>
          MAX at MEAN
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={540} y={546} size={15} fill={INK} weight={700}>
          v<Sub>max</Sub>
          <Up> at x = 0  ·  a</Up>
          <Sub>max</Sub>
          <Up> at x = ±A</Up>
        </T>
      </Fade>
    </Scene>
  );
}
