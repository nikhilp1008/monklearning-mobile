/**
 * Ch03 · Section 34 — "The toolkit: equations of motion, special cases, and curvature"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.7, 21.2, 34.0, 41.2, 55.0, 71.4, 80.8]):
 *  0 heading
 *  1 velocity equations, per axis
 *  2 position equations
 *  3 eliminate time header
 *  4 the v² relations
 *  5 special-case chips
 *  6 radius of curvature box
 *  7 only a⊥ bends the path
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x104 / x560 bl 116 s14
 *  b2 | st x104 / x560 bl 152 s14 · caption cx540 bl 182 s11
 *  b3 | line st x84 bl 222 s12 · underline M84 232 h420
 *  b4 | st x104 / x560 bl 258 s14 · caption cx540 bl 286 s11
 *  b5 | chip x110 y320 w400 h38 · chip x570 y320 w420 h38
 *  b6 | box x300..780 y390..440 text cx540 bl 422 s16
 *  b7 | bar M66 470 v52 · lines st x84 bl 488 / 512 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec34({ currentTime, reveals, language }: SceneProps) {
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
            "TOOLKIT 2 — equations of motion, per component",
            "TOOLKIT 2 — equations of motion, har component par"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — velocity equations */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={104} y={116} size={14} fill={INK} weight={700} anchor="start">
          vx = v₀x + ax t
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={560} y={116} size={14} fill={INK} weight={700} anchor="start">
          vy = v₀y + ay t
        </T>
      </Fade>

      {/* beat 2 — position equations */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={104} y={152} size={14} fill={INK} weight={700} anchor="start">
          x = x₀ + v₀x t + ½ ax t²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={560} y={152} size={14} fill={INK} weight={700} anchor="start">
          y = y₀ + v₀y t + ½ ay t²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={540} y={182} size={11} fill={MUTED} script>
          {t(
            "four scalar equations — two per axis, each using only its own quantities",
            "chaar scalar equations — har axis par do, har ek apni hi cheezein"
          )}
        </T>
      </Fade>

      {/* beat 3 — eliminate time */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={222} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "time not wanted? eliminate it PER AXIS — exactly like straight-line motion",
            "time nahi chahiye? use HAR AXIS par hatao — bilkul straight-line jaisa"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2)} d="M 84 232 h 420" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 4 — time-free relations */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={104} y={258} size={14} fill={INK} weight={700} anchor="start">
          vx² = v₀x² + 2 ax Δx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={560} y={258} size={14} fill={INK} weight={700} anchor="start">
          vy² = v₀y² + 2 ay Δy
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={540} y={286} size={11} fill={MUTED} script>
          {t("one time-free relation per direction", "har direction ki apni time-free relation")}
        </T>
      </Fade>

      {/* beat 5 — special cases */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Chip x={110} y={320} w={400} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14}>
          {t("projectile: ax = 0 · ay = −g", "projectile: ax = 0 · ay = −g")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <Chip x={570} y={320} w={420} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14}>
          {t("circular: |a| = v²⁄r, aimed at the centre", "circular: |a| = v²⁄r, centre ki taraf")}
        </Chip>
      </Fade>

      {/* beat 6 — radius of curvature */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 312 390 h 456 q 12 0 12 12 v 26 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={422} size={16} fill={INK} weight={800}>
          {t("R (radius of curvature) = v² ⁄ a⊥", "R (radius of curvature) = v² ⁄ a⊥")}
        </T>
      </Fade>

      {/* beat 7 — what bends the path */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 470 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={488} size={12} fill={GREEN} script anchor="start">
          {t(
            "only the PERPENDICULAR part of a bends the path",
            "sirf a ka PERPENDICULAR hissa path ko modta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={512} size={12} fill={INK} script anchor="start">
          {t(
            "the along-part merely changes the speed",
            "saath waala hissa bas speed badalta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
