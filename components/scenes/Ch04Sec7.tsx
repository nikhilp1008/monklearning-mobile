/**
 * Ch04 · Section 7 — "Newton's Laws and Impulse: the formula set"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.2, 14.9, 31.3, 42.0, 52.9, 58.1, 69.8, 86.0, 97.3]):
 *  0 title
 *  1 band 1 outline + p = m·v
 *  2 band 1 units/dimensions line
 *  3 band 2 outline + F = dp⁄dt · F = m·a
 *  4 band 2 units line
 *  5 band 3 outline + J = F·Δt
 *  6 J = ∫F dt = area line
 *  7 J = Δp + F_avg line (green)
 *  8 band 4 outline + conservation chain
 *  9 red margin: N·s ≡ kg·m/s free mark
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · bands x60..1020:
 *  band1 y84..172  header st x76 bl 104 · lines cx540 bl 130 / 156
 *  band2 y184..272 header bl 204 · lines cx540 bl 230 / 256
 *  band3 y284..396 header bl 304 · lines cx540 bl 330 / 354 / 382
 *  band4 y408..478 header bl 426 · line cx540 bl 458
 *  b9 | bar x66 y496..566 · lines st x84 bl 516 / 542
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
  MUTED,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function band(y: number, h: number) {
  return `M 72 ${y} h 936 q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h -936 q -12 0 -12 -12 v -${
    h - 24
  } q 0 -12 12 -12`;
}

export default function Ch04Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the toolkit, one place */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Subtopic 1 — the whole toolkit in one frame",
            "Subtopic 1 — poori toolkit ek frame mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — momentum */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={band(84, 88)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={84} y={104} size={11} fill={MUTED} script anchor="start">
          {t("1 · linear momentum", "1 · linear momentum")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={130} size={16} fill={INK} weight={700}>
          {t("p = m·v — a vector, along the velocity", "p = m·v — vector, velocity ki disha mein")}
        </T>
      </Fade>

      {/* beat 2 — units of momentum */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={156} size={14} fill={INK} weight={600}>
          SI: kg·m⁄s = N·s&nbsp;&nbsp;·&nbsp;&nbsp;[M¹ L¹ T⁻¹]
        </T>
      </Fade>

      {/* beat 3 — force, both forms */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={band(184, 88)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={84} y={204} size={11} fill={MUTED} script anchor="start">
          {t("2 · force — the Second Law", "2 · force — Second Law")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={230} size={16} fill={INK} weight={700}>
          {t(
            "F = dp⁄dt (ALWAYS) · F = m·a (constant mass only)",
            "F = dp⁄dt (HAMESHA) · F = m·a (sirf constant mass)"
          )}
        </T>
      </Fade>

      {/* beat 4 — units of force */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={256} size={14} fill={INK} weight={600}>
          SI: newton, N = kg·m⁄s²&nbsp;&nbsp;·&nbsp;&nbsp;[M¹ L¹ T⁻²]
        </T>
      </Fade>

      {/* beat 5 — impulse, constant force */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={band(284, 112)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={84} y={304} size={11} fill={MUTED} script anchor="start">
          {t("3 · impulse", "3 · impulse")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={330} size={16} fill={INK} weight={700}>
          {t("J = F·Δt  (constant force)", "J = F·Δt  (constant force)")}
        </T>
      </Fade>

      {/* beat 6 — impulse, variable force */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={354} size={15} fill={INK} weight={600}>
          {t(
            "J = ∫ F dt = area under F–t — rescues spiky forces",
            "J = ∫ F dt = F–t ke neeche ka area — spiky force mein yahi bachata hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the theorem + average force */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={382} size={15} fill={GREEN} weight={700}>
          {t(
            "J = Δp = m·v_f − m·vᵢ · F_avg = Δp⁄Δt — the Board numericals",
            "J = Δp = m·v_f − m·vᵢ · F_avg = Δp⁄Δt — yahi Board numericals"
          )}
        </T>
      </Fade>

      {/* beat 8 — conservation */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d={band(408, 70)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={84} y={426} size={11} fill={MUTED} script anchor="start">
          {t("4 · conservation of momentum", "4 · conservation of momentum")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={540} y={458} size={16} fill={INK} weight={700}>
          F_ext = 0&nbsp;&nbsp;⇒&nbsp;&nbsp;pᵢ = p_f&nbsp;&nbsp;⇒&nbsp;&nbsp;Σ mᵢvᵢ = constant
        </T>
      </Fade>

      {/* beat 9 — the free mark */}
      <Draw on={beat >= 9} delay={dl(9, 0.6)} d="M 66 496 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 9} delay={dl(9, 1.4)}>
        <T x={84} y={516} size={14} fill={RED} script anchor="start">
          {t(
            "free mark: impulse & momentum share [M L T⁻¹]",
            "free mark: impulse aur momentum ka same [M L T⁻¹]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6)}>
        <T x={84} y={542} size={14} fill={RED} script anchor="start">
          {t(
            "so N·s and kg·m⁄s are the SAME unit in different clothes — NEET asks this",
            "to N·s aur kg·m⁄s EK hi unit hain, bas kapde alag — NEET seedha poochta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
