/**
 * Ch04 · Section 30 — "Concurrent Forces and Equilibrium: the formula set"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.6, 32.9, 45.6, 54.8, 69.2, 83.0, 106.9, 119.3, 140.2]):
 *  0 title · 1 band1 master · 2 band2 + resolution · 3 equilibrant line ·
 *  4 band3 Lami · 5 band4 + incline parallel · 6 horizontal-string line ·
 *  7 band5 + lift · 8 pseudo set line · 9 red units bar
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · bands x60..1020:
 *  band1 y84..148  hdr bl 104 · line cx540 bl 132
 *  band2 y158..246 hdr bl 178 · lines cx540 bl 204 / 230
 *  band3 y256..320 hdr bl 276 · line cx540 bl 304
 *  band4 y330..418 hdr bl 350 · lines cx540 bl 376 / 402
 *  band5 y428..516 hdr bl 448 · lines cx540 bl 474 / 500
 *  b9 | bar x66 y532..578 · line st x84 bl 556
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

export default function Ch04Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const hdr = (k: number, y: number, txt: string) => (
    <Fade on={beat >= k} delay={dl(k, 1)}>
      <T x={84} y={y} size={11} fill={MUTED} script anchor="start">
        {txt}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "photograph this board — everything at your fingertips",
            "is board ki photo lo — sab kuchh ungliyon par"
          )}
        </T>
      </Fade>

      {/* beat 1 — master condition */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={band(84, 64)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(1, 104, t("1 · the master condition", "1 · master condition"))}
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={132} size={15} fill={INK} weight={700}>
          {t(
            "Σ F = 0 ⇔ Σ Fx = 0 and Σ Fy = 0 — left is physics, right is what you compute",
            "Σ F = 0 ⇔ Σ Fx = 0 aur Σ Fy = 0 — baayan physics, daayan calculation"
          )}
        </T>
      </Fade>

      {/* beat 2 — resolution */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={band(158, 88)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(2, 178, t("2 · resolution · equilibrant", "2 · resolution · equilibrant"))}
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={204} size={15} fill={INK} weight={700}>
          {t(
            "F_x = F·cosθ · F_y = F·sinθ — cos hugs the angle, sin sits across",
            "F_x = F·cosθ · F_y = F·sinθ — cos angle se chipka, sin saamne"
          )}
        </T>
      </Fade>

      {/* beat 3 — equilibrant */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={230} size={14} fill={INK} weight={600}>
          {t(
            "F_equilibrant = −R — same size, opposite direction",
            "F_equilibrant = −R — wahi size, ulti direction"
          )}
        </T>
      </Fade>

      {/* beat 4 — Lami */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={band(256, 64)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(4, 276, t("3 · Lami's theorem + check", "3 · Lami's theorem + check"))}
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={540} y={304} size={15} fill={INK} weight={700}>
          P⁄sinα = Q⁄sinβ = R⁄sinγ&nbsp;&nbsp;·&nbsp;&nbsp;α + β + γ = 360°
        </T>
      </Fade>

      {/* beat 5 — incline, parallel string */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={band(330, 88)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(5, 350, t("4 · block on a smooth incline", "4 · smooth incline par block"))}
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={376} size={15} fill={INK} weight={700}>
          {t(
            "string ∥ slope: T = mg·sinθ · N = mg·cosθ — the default result",
            "string ∥ slope: T = mg·sinθ · N = mg·cosθ — default result"
          )}
        </T>
      </Fade>

      {/* beat 6 — horizontal string */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={402} size={14} fill={GREEN} weight={700}>
          {t(
            "HORIZONTAL string: T = mg·tanθ · N = mg⁄cosθ — both larger; exams love this switch",
            "HORIZONTAL string: T = mg·tanθ · N = mg⁄cosθ — dono bade; exams ko ye palti pasand hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — lift */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={band(428, 88)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(7, 448, t("5 · lifts · accelerating frames", "5 · lifts · accelerating frames"))}
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={474} size={15} fill={INK} weight={700}>
          {t(
            "lift: R = m(g+a) up · R = m(g−a) down · R = 0 free fall — mass never changes",
            "lift: R = m(g+a) upar · R = m(g−a) neeche · R = 0 free fall — mass nahi badalta"
          )}
        </T>
      </Fade>

      {/* beat 8 — pseudo set */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={540} y={500} size={14} fill={INK} weight={600}>
          F_pseudo = −m·a₀&nbsp;&nbsp;·&nbsp;&nbsp;tanθ = a⁄g&nbsp;&nbsp;·&nbsp;&nbsp;g_eff = √(g² + a²)
        </T>
      </Fade>

      {/* beat 9 — housekeeping */}
      <Draw on={beat >= 9} delay={dl(9, 0.6)} d="M 66 532 v 42" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={84} y={556} size={14} fill={RED} script anchor="start">
          {t(
            "CBSE housekeeping: force → newton (N) · dimensions [M¹ L¹ T⁻²]",
            "CBSE housekeeping: force → newton (N) · dimensions [M¹ L¹ T⁻²]"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
