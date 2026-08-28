/**
 * Ch09 · Section 27 — "Deriving the tilt angle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.72, 6.72, 7.72, 8.72, 9.72, 10.72]):
 *  0 title (always-on)
 *  1 text: take a fluid element at the surface, mass m
 *  2 vector diagram: mg (down), ma (across), net (green, diagonal) + surface tick
 *  3 red-margin note: the surface cannot support a force along itself
 *  4 text: so the net of gravity and pseudo-force is perpendicular
 *  5 formula (green) tan θ = ma/mg = a/g
 *  6 red-margin note: the height gap over length L is aL/g
 *
 * Layout plan:
 *  b2 | mg vector (down)         | Draw+T | (400,280)→(400,360) · "mg" x415 bl 324
 *  b2 | ma vector (across)       | Draw+T | (400,360)→(480,360) · "ma" x440 bl 378
 *  b2 | net vector (green)       | Draw+T | (400,280)→(480,360) · "net" x455 bl 306
 *  b2 | surface tick (amber-dk)  | Draw+T | (460,340)→(500,380) · label x505 bl 375
 *  b1 | text (14, script)        | T mid  | x540  bl 114
 *  b3 | margin bar (red)         | Draw   | x460  y415..439
 *  b3 | note (script 14, red)    | T st   | x476.. bl 435
 *  b4 | text (14, script)        | T mid  | x540  bl 468
 *  b5 | formula (20, w800, grn)  | T mid  | x540  bl 505
 *  b6 | margin bar (red)         | Draw   | x460  y525..549
 *  b6 | note (script 14, red)    | T st   | x476.. bl 545
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("deriving tan θ = a/g", "tan θ = a/g derive karte hain")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("take a fluid element at the surface, mass m", "surface pe ek fluid element lo, mass m")}
        </T>
      </Fade>

      {/* beat 2 — the vector picture */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Draw on={beat >= 2} d={arrowD(400, 280, 400, 360)} stroke={INK} sw={2.4} dur={0.5} />
        <T x={415} y={324} size={14} fill={INK} anchor="start">
          mg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d={arrowD(400, 360, 480, 360)} stroke={INK} sw={2.4} dur={0.5} />
        <T x={440} y={378} size={14} fill={INK} anchor="middle">
          ma
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Draw on={beat >= 2} d={arrowD(400, 280, 480, 360)} stroke={GREEN} sw={3} dur={0.6} />
        <T x={455} y={306} size={14} fill={GREEN} weight={700} anchor="start">
          {t("net", "net")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Draw on={beat >= 2} d="M 460 340 L 500 380" stroke={AMBER_DARK} sw={2} dur={0.4} />
        <T x={505} y={375} size={11} fill={AMBER_DARK} anchor="start">
          {t("surface", "surface")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 415 L 460 439" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={435} size={14} fill={RED} script anchor="start">
          {t("the surface can't support a force along itself", "surface apne aap ke saath force support nahi karta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={468} size={14} fill={MUTED} script anchor="middle">
          {t("so the net is perpendicular to the surface", "isliye net surface ke perpendicular hota")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={505} size={20} fill={GREEN} weight={800} anchor="middle">
          tan θ = ma/mg = a/g
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 525 L 460 549" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={545} size={14} fill={RED} script anchor="start">
          {t("the height gap over length L is aL/g", "length L par height gap aL/g hota")}
        </T>
      </Fade>
    </Scene>
  );
}
