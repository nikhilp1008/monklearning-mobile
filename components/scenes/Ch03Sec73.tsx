/**
 * Ch03 · Section 73 — "The five pitfalls in circular motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.7, 25.5, 32.3, 49.8, 64.3, 78.9, 89.8]):
 *  0 heading
 *  1 ① "constant speed means no acceleration"
 *  2 ② centripetal force treated as a NEW force
 *  3 it's always some REAL force — never add it on top
 *  4 ③ inventing outward "centrifugal force" in an inertial frame
 *  5 ④ forgetting radians
 *  6 ⑤ adding a_radial and a_tangential arithmetically
 *  7 the theme: keep inward and along-motion separate
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  rows: circles cx100 r14 · titles st x130
 *  r1 | cy140 title bl 146 / sub bl 172
 *  r2 | cy225 title bl 231
 *  r3 | sub bl 257 / 281
 *  r4 | cy335 title bl 341
 *  r5 | cy390 title bl 396
 *  r6 | cy445 title bl 451
 *  b7 | bar M66 500 v56 · lines st x84 bl 518 / 542 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function NumCircle({ on, delay, cy, n }: { on: boolean; delay: number; cy: number; n: string }) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M 86 ${cy} a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.6}>
        <T x={100} y={cy + 4.5} size={13} fill={RED} weight={800}>{n}</T>
      </Fade>
    </>
  );
}

export default function Ch03Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("FIVE PITFALLS in circular motion", "Circular motion ke PAANCH PITFALLS")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* ① constant speed = no acceleration */}
      <NumCircle on={beat >= 1} delay={dl(1, 0.6)} cy={140} n="1" />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={130} y={146} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "“constant speed means no acceleration”",
            "“constant speed ka matlab acceleration nahi”"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={130} y={172} size={12} fill={RED} script anchor="start">
          {t(
            "the direction turns, so there IS acceleration — toward the centre",
            "direction ghoomti hai, isliye acceleration HAI — kendra ki taraf"
          )}
        </T>
      </Fade>

      {/* ② centripetal as a new force */}
      <NumCircle on={beat >= 2} delay={dl(2, 0.6)} cy={225} n="2" />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={130} y={231} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "treating centripetal force as a NEW, separate force",
            "centripetal force ko NAYA, alag force samajhna"
          )}
        </T>
      </Fade>

      {/* beat 3 — always a real force */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={130} y={257} size={12} fill={GREEN} script anchor="start">
          {t(
            "it is always some REAL force — tension, gravity, friction, normal",
            "yeh hamesha koi ASLI force hai — tension, gravity, friction, normal"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={130} y={281} size={12} fill={RED} script anchor="start">
          {t(
            "never draw it as an extra arrow on top",
            "kabhi ek extra arrow ki tarah upar mat banao"
          )}
        </T>
      </Fade>

      {/* ③ centrifugal force */}
      <NumCircle on={beat >= 4} delay={dl(4, 0.6)} cy={335} n="3" />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={130} y={341} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "inventing an outward “centrifugal force” in an inertial frame",
            "inertial frame mein “centrifugal force” bahar ki taraf bana lena"
          )}
        </T>
      </Fade>

      {/* ④ forgetting radians */}
      <NumCircle on={beat >= 5} delay={dl(5, 0.6)} cy={390} n="4" />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={130} y={396} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "forgetting radians — ω, v = ωr, s = rθ all need radians",
            "radians bhool jana — ω, v = ωr, s = rθ sabko radians chahiye"
          )}
        </T>
      </Fade>

      {/* ⑤ adding radial and tangential */}
      <NumCircle on={beat >= 6} delay={dl(6, 0.6)} cy={445} n="5" />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={130} y={451} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "adding a_radial and a_tangential arithmetically",
            "a_radial aur a_tangential ko seedha jod dena"
          )}
        </T>
      </Fade>

      {/* beat 7 — the theme */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 500 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={518} size={12} fill={GREEN} script anchor="start">
          {t(
            "they are perpendicular — combine by Pythagoras, never arithmetic",
            "dono perpendicular hain — Pythagoras se jodo, arithmetic se nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={542} size={12} fill={INK} script anchor="start">
          {t(
            "the theme: keep INWARD and ALONG-MOTION directions separate",
            "theme: ANDAR aur MOTION KE SAATH wali disha ko alag rakho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
