/**
 * Ch13 · Section 38 — "Framework: the damped oscillator and exponential decay"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.88, 18.47, 28.25, 41.64, 53.96, 66.99, 82.93]):
 *  0 shelf
 *  1 mass m, spring k, resistive drag −bv ⇒ apply Newton's law
 *  2 mẍ + bẋ + kx = 0
 *  3 light damping ⇒ expect oscillation × shrinking factor
 *  4 diagram: cosine inside a shrinking envelope
 *  5 x(t) = A₀e^(−bt/2m)cos(ω't+φ) , ω'=√(ω₀²−(b/2m)²)
 *  6 note (high): damping shrinks A and slows slightly, shift ~b² negligible
 *  7 hero (high): E(t) = ½kA₀²e^(−bt/m) = E₀e^(−bt/m)
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size12
 *  b2 | st x70 bl145 size15
 *  b3 | st x70 bl180 size12
 *  b4 | "x(t)" x605 bl150 · eq-line y190 x600..920 dashed · curve (alternating decaying humps) ·
 *      envelope-top dashed 600,155→920,189 · envelope-bottom dashed 600,225→920,191 · "t →" x930 bl193
 *  b5 | st x70 bl220 size12
 *  b6 | script13 st x70 bl258 amber
 *  b7 | box x70..430 y290..345 rx14 · line cx250 bl323 size17
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
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("An oscillation multiplied by a shrinking factor", "Ek oscillation jo shrinking factor se multiply hota hai")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={12} fill={INK} anchor="start">
          {t(
            "mass m, spring k, resistive drag −bv ⇒ apply Newton's law",
            "mass m, spring k, resistive drag −bv ⇒ Newton ka law lagao"
          )}
        </T>
      </Fade>

      {/* beat 2 — the governing equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={145} size={15} fill={INK} anchor="start" weight={700}>
          mẍ + bẋ + kx = 0
        </T>
      </Fade>

      {/* beat 3 — reasoning toward the shape of the answer */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={180} size={12} fill={INK} anchor="start">
          {t(
            "light damping ⇒ expect oscillation × shrinking factor",
            "light damping ⇒ ek oscillation jo shrinking factor se multiply ho"
          )}
        </T>
      </Fade>

      {/* beat 4 — the picture: cosine inside a shrinking envelope */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={605} y={150} size={11} fill={INK} anchor="start">
          x(t)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Path d="M 600 190 H 920" stroke={MUTED} strokeWidth={1.1} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.0)}
        d="M600 190 Q625 155 650 190 Q675 220 700 190 Q722 165 744 190 Q766 210 788 190 Q807 172 826 190 Q843 205 860 190 Q876 178 892 190 Q906 200 920 190"
        stroke={INK}
        sw={2.2}
        dur={1.0}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <Path d="M600 155 Q700 175 920 189" stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
        <Path d="M600 225 Q700 205 920 191" stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <T x={930} y={193} size={11} fill={INK} anchor="start">
          t →
        </T>
      </Fade>

      {/* beat 5 — the solution */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={220} size={12} fill={INK} anchor="start" weight={700}>
          x(t) = A₀e^(−bt/2m)cos(ω&apos;t+φ) , ω&apos;=√(ω₀²−(b/2m)²)
        </T>
      </Fade>

      {/* beat 6 — reading the physics, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={258} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "damping shrinks A AND slows slightly, but shift ~b² ⇒ negligible",
            "damping A ghataati hai AUR thoda slow karti hai, par shift ~b² ⇒ negligible"
          )}
        </T>
      </Fade>

      {/* beat 7 — the energy, hero */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 84 290 h 322 q 14 0 14 14 v 27 q 0 14 -14 14 h -322 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={250} y={323} size={17} fill={INK} weight={800}>
          E(t) = ½kA₀²e^(−bt/m) = E₀e^(−bt/m)
        </T>
      </Fade>
    </Scene>
  );
}
