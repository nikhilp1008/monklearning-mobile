/**
 * Ch13 · Section 27 — "Derivation: mass-spring, and why vertical equals horizontal"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.15, 11.69, 16.3, 21.22, 27.37, 33.22, 37.68]):
 *  0 shelf
 *  1 horizontal: F = −kx directly ⇒ ω = √(k/m)
 *  2 diagram: vertical spring — ceiling, natural length, equilibrium block, displaced ghost
 *  3 labels x₀ and y + text: equilibrium kx₀=mg, measure y from here
 *  4 F_net = mg − k(x₀+y) = (mg−kx₀) − ky = −ky
 *  5 hero: T = 2π√(m/k) (vertical = horizontal)
 *  6 note (high): gravity only relocates the mean, period untouched
 *  7 same period regardless of g, even on the Moon
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size13
 *  b2 | ceiling x680..750 y90..100 · spring 715,100→715,235 ·
 *      natural-length tick y170 x690..740 dashed + label x745 bl174 ·
 *      block x685..745 y235..270 "m" cx715 bl256 · ghost x685..745 y275..310 dashed outline
 *  b3 | x₀-bracket x665 y170..235 + "x₀" x650 bl205 anchor-end ·
 *      y-bracket x665 y235..275 + "y" x650 bl258 anchor-end · st x70 bl145 size12
 *  b4 | st x70 bl180 size12
 *  b5 | box x70..420 y210..265 rx14 · line cx245 bl243 size17
 *  b6 | script13 st x70 bl305 red
 *  b7 | script12 st x70 bl345
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("The initial stretch quietly cancels gravity", "Initial stretch chupke se gravity cancel kar deta hai")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the easy horizontal case */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          {t("horizontal: F = −kx directly ⇒ ω = √(k/m)", "horizontal: F = −kx seedha ⇒ ω = √(k/m)")}
        </T>
      </Fade>

      {/* beat 2 — the vertical spring picture */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 680 90 h 70 v 10 h -70 z" stroke={INK} sw={1.6} dur={0.4} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 715 100 L 705 112 L 725 124 L 705 136 L 725 148 L 705 160 L 715 170 V 235" stroke={INK} sw={1.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Path d="M 690 170 H 740" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
        <T x={745} y={174} size={10} fill={MUTED} anchor="start">
          {t("natural length", "natural length")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M 685 235 h 60 v 35 h -60 z" stroke={INK} sw={1.6} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={715} y={256} size={12} fill={INK} weight={800}>
          m
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <Path d="M 685 275 h 60 v 35 h -60 z" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
      </Fade>

      {/* beat 3 — the two measurements */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Path d="M 665 170 V 235 M 659 170 H 671 M 659 235 H 671" stroke={AMBER_DARK} strokeWidth={1.4} fill="none" />
        <T x={650} y={205} size={12} fill={AMBER_DARK} anchor="end">
          x₀
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Path d="M 665 235 V 275 M 659 275 H 671" stroke={RED} strokeWidth={1.4} fill="none" />
        <T x={650} y={258} size={12} fill={RED} anchor="end">
          y
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={70} y={145} size={12} fill={INK} anchor="start" weight={700}>
          {t(
            "equilibrium: kx₀ = mg (measure y from here)",
            "equilibrium: kx₀ = mg (yahan se y measure karo)"
          )}
        </T>
      </Fade>

      {/* beat 4 — the net force at displacement y */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={180} size={12} fill={INK} anchor="start" weight={700}>
          F_net = mg − k(x₀+y) = (mg−kx₀) − ky = −ky
        </T>
      </Fade>

      {/* beat 5 — the hero result */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 210 h 322 q 14 0 14 14 v 27 q 0 14 -14 14 h -322 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={245} y={243} size={17} fill={INK} weight={800}>
          T = 2π√(m/k)  (vertical = horizontal)
        </T>
      </Fade>

      {/* beat 6 — the moral, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={305} size={13} fill={RED} script anchor="start">
          {t(
            "gravity only relocates the mean by x₀=mg/k — period untouched",
            "gravity sirf mean ko x₀=mg/k se shift karti hai — period untouched"
          )}
        </T>
      </Fade>

      {/* beat 7 — why it works even on the Moon */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={345} size={12} fill={INK} script anchor="start">
          {t("same period regardless of g — even on the Moon", "g chahe kuch bhi ho, period same rehta hai — Moon par bhi")}
        </T>
      </Fade>
    </Scene>
  );
}
