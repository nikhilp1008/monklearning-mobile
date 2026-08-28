/**
 * Ch03 · Section 75 — "Every key formula of Motion in a Plane, in one place"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.64, 25.86, 39.77, 53.5, 64.94, 81.24, 95.32]):
 *  0 heading
 *  1 row ① Vector Algebra & Resolution — R, tan α formula
 *  2 row ② Vector Products (Dot & Cross) — Ax/Ay, dot, cross formula
 *  3 row ③ 2-D Kinematics — v, r per-component formula
 *  4 row ④ Projectile Motion — T, H, R formula
 *  5 row ⑤ Relative Velocity — v_AB, river formula
 *  6 row ⑥ Circular Motion — v, a_c, banking formula
 *  7 closing note: one thread across all six (green hero box)
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | st cx540 bl48 s20 script · underline M340 62 h400
 *  rows | circle cx100 r14 · num cx100 · label st x130 · formula st x130 s15
 *  b1 | circle cy96 · label bl100 s12 · formula bl126
 *  b2 | circle cy168 · label bl172 · formula bl198
 *  b3 | circle cy240 · label bl244 · formula bl270
 *  b4 | circle cy312 · label bl316 · formula bl342
 *  b5 | circle cy384 · label bl388 · formula bl414
 *  b6 | circle cy456 · label bl460 · formula bl486
 *  b7 | box x180..900 y514..566 text cx540 bl542 s15 script
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
  AMBER,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Row({
  on,
  delay,
  circleCy,
  labelY,
  formulaY,
  num,
  label,
  formula,
}: {
  on: boolean;
  delay: number;
  circleCy: number;
  labelY: number;
  formulaY: number;
  num: string;
  label: string;
  formula: string;
}) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M 86 ${circleCy} a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0`}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.5}>
        <T x={100} y={circleCy + 4.5} size={13} fill={AMBER_DARK} weight={800}>
          {num}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 0.9}>
        <T x={130} y={labelY} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {label}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 1.6}>
        <T x={130} y={formulaY} size={15} fill={INK} weight={700} anchor="start">
          {formula}
        </T>
      </Fade>
    </>
  );
}

export default function Ch03Sec75({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "FORMULA RECAP — the whole chapter on one board",
            "FORMULA RECAP — poora chapter ek board par"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — vector algebra & resolution */}
      <Row
        on={beat >= 1}
        delay={dl(1, 0.6)}
        circleCy={96}
        labelY={100}
        formulaY={126}
        num="1"
        label={t("VECTOR ALGEBRA & RESOLUTION", "VECTOR ALGEBRA aur RESOLUTION")}
        formula="R = √(A² + B² + 2AB cos θ)   ·   tan α = B sin θ ⁄ (A + B cos θ)"
      />

      {/* beat 2 — vector products */}
      <Row
        on={beat >= 2}
        delay={dl(2, 0.6)}
        circleCy={168}
        labelY={172}
        formulaY={198}
        num="2"
        label={t("VECTOR PRODUCTS (DOT & CROSS)", "VECTOR PRODUCTS (DOT aur CROSS)")}
        formula="A_x = A cos θ,  A_y = A sin θ   ·   A·B = AB cos θ,  |A×B| = AB sin θ"
      />

      {/* beat 3 — 2-D kinematics */}
      <Row
        on={beat >= 3}
        delay={dl(3, 0.6)}
        circleCy={240}
        labelY={244}
        formulaY={270}
        num="3"
        label={t("2-D KINEMATICS", "2-D KINEMATICS")}
        formula="v = v₀ + a t      r = r₀ + v₀t + ½at²   (per component)"
      />

      {/* beat 4 — projectile motion */}
      <Row
        on={beat >= 4}
        delay={dl(4, 0.6)}
        circleCy={312}
        labelY={316}
        formulaY={342}
        num="4"
        label={t("PROJECTILE MOTION", "PROJECTILE MOTION")}
        formula="T = 2u sin θ ⁄ g    H = u² sin²θ ⁄ 2g    R = u² sin 2θ ⁄ g  (max @ 45°)"
      />

      {/* beat 5 — relative velocity */}
      <Row
        on={beat >= 5}
        delay={dl(5, 0.6)}
        circleCy={384}
        labelY={388}
        formulaY={414}
        num="5"
        label={t("RELATIVE VELOCITY", "RELATIVE VELOCITY")}
        formula="v_AB = v_A − v_B     river: t_min = d ⁄ v_b,  sin θ = v_r ⁄ v_b"
      />

      {/* beat 6 — circular motion */}
      <Row
        on={beat >= 6}
        delay={dl(6, 0.6)}
        circleCy={456}
        labelY={460}
        formulaY={486}
        num="6"
        label={t("CIRCULAR MOTION", "CIRCULAR MOTION")}
        formula="v = ω r     a_c = v² ⁄ r = ω² r     tan θ = v² ⁄ (r g)  (banking)"
      />

      {/* beat 7 — the one thread */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 192 514 h 696 q 12 0 12 12 v 28 q 0 12 -12 12 h -696 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={542} size={15} fill={GREEN} weight={800} script>
          {t(
            "one thread: resolve into perpendicular components, solve each axis alone",
            "ek dhaaga: perpendicular components mein todo, har axis alag solve karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
