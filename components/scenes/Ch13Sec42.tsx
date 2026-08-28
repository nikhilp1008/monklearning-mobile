/**
 * Ch13 · Section 42 — "Worked example (JEE Main): frequencies, decay time, and energy left"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.04, 17.62, 24.41, 35.23, 40.77, 49.58, 63.16]):
 *  0 shelf
 *  1 given: m=0.5kg, k=50N/m, b=0.1kg/s · find ω₀,ω',t(A→A₀/e),E fraction
 *  2 ω₀ = √(k/m) = 10 rad/s
 *  3 hero (high): ω' = √(100−0.01) ≈ 10.0 rad/s
 *  4 frequency essentially unchanged ⇒ confirms light damping
 *  5 bt/2m = 1 ⇒ t = 2m/b = 10 s
 *  6 hero (high): bt/m = 2 ⇒ E = E₀e⁻² ≈ 0.135E₀
 *  7 closing (high): cross-check via A=A₀/e ⇒ E=E₀/e²=0.135E₀ (13.5%)
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl100 size12 · st x70 bl128 size11
 *  b2 | st x70 bl165 size13
 *  b3 | box x70..380 y185..225 rx14 · line cx225 bl210 size15
 *  b4 | script11 st x70 bl262
 *  b5 | st x70 bl300 size13
 *  b6 | box x70..390 y320..360 rx14 · line cx230 bl345 size15
 *  b7 | box x100..980 y380..430 rx16 · line cx540 bl409 size13
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Light damping barely moves the frequency", "Light damping frequency ko mushkil se hilaati hai")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={100} size={12} fill={INK} anchor="start" weight={700}>
          m=0.5kg, k=50N/m, b=0.1kg/s
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={128} size={11} fill={INK} anchor="start" weight={700}>
          {t("find: ω₀, ω', t(A→A₀/e), E fraction then", "nikaalo: ω₀, ω', t(A→A₀/e), tab E fraction")}
        </T>
      </Fade>

      {/* beat 2 — the natural frequency */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={165} size={13} fill={INK} anchor="start" weight={700}>
          ω₀ = √(k/m) = √100 = 10 rad/s
        </T>
      </Fade>

      {/* beat 3 — the damped frequency, hero */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Draw
          on={beat >= 3}
          delay={dl(3, 0.3)}
          d="M 84 185 h 282 q 14 0 14 14 v 12 q 0 14 -14 14 h -282 q -14 0 -14 -14 v -12 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.5}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={225} y={210} size={15} fill={INK} weight={800}>
          ω&apos; = √(100−0.01) ≈ 10.0 rad/s
        </T>
      </Fade>

      {/* beat 4 — light damping confirmed */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={262} size={11} fill={INK} script anchor="start">
          {t(
            "frequency essentially unchanged ⇒ confirms light damping",
            "frequency essentially unchanged ⇒ light damping confirm karta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the 1/e time */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={300} size={13} fill={INK} anchor="start" weight={700}>
          bt/2m = 1 ⇒ t = 2m/b = 10 s
        </T>
      </Fade>

      {/* beat 6 — the energy left, hero */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 84 320 h 292 q 14 0 14 14 v 12 q 0 14 -14 14 h -292 q -14 0 -14 -14 v -12 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.5}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={230} y={345} size={15} fill={INK} weight={800}>
          bt/m = 2 ⇒ E = E₀e⁻² ≈ 0.135E₀
        </T>
      </Fade>

      {/* beat 7 — the cross-check, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 116 380 h 848 q 16 0 16 16 v 18 q 0 16 -16 16 h -848 q -16 0 -16 -16 v -18 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={540} y={409} size={13} fill={INK} weight={700}>
          {t(
            "cross-check: A=A₀/e ⇒ E=E₀/e² = 0.135E₀ (13.5% remains)",
            "cross-check: A=A₀/e ⇒ E=E₀/e²=0.135E₀ (13.5% bacha)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
