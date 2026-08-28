/**
 * Ch09 · Section 48 — "Viscosity: fluid friction"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 9.64, 19.88, 30.29, 40.79, 51.54, 63.66, 64.66]):
 *  0 title (always-on)
 *  1 text: water splashes away; honey crawls down in a lazy ribbon
 *  2 two plates + 4 velocity arrows (growing bottom→top)
 *  3 text: each thin layer slides a little faster than the one below
 *  4 text + dv/dx bracket: this sets up a velocity gradient
 *  5 formula (green) F = −ηA(dv/dx)
 *  6 red-margin note: the negative sign — force opposes relative motion
 *  7 text: large for honey, small for water, tinier still for air
 *
 * Layout plan:
 *  b2 | top plate + label         | Draw+T | x280..720  y190 · bl 175
 *  b2 | bottom plate + label      | Draw+T | x280..720  y380 · bl 398
 *  b2 | velocity arrows ×4         | Draw   | x350  y350/300/250/205 (len 15/55/95/135)
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | text (13, script)          | T mid  | x540  bl 425
 *  b4 | text (13, script)          | T mid  | x540  bl 452
 *  b4 | dv/dx bracket + label      | Draw+T | x520  y205..350 · bl 280
 *  b5 | formula (19, w800, grn)    | T mid  | x540  bl 484
 *  b6 | margin bar (red)           | Draw   | x460  y502..526
 *  b6 | note (script 13, red)      | T st   | x476.. bl 522
 *  b7 | text (13, script)          | T mid  | x540  bl 552
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("viscosity: fluid friction", "viscosity: fluid friction")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("water splashes away; honey crawls in a lazy ribbon", "water splash hokar phaila jaata; honey lazy ribbon mein crawl karta")}
        </T>
      </Fade>

      {/* beat 2 — the velocity gradient */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 280 190 H 720" stroke={INK} sw={3} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={500} y={175} size={12} fill={MUTED} anchor="middle">
          {t("moving plate, F", "moving plate, F")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 280 380 H 720" stroke={INK} sw={3} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={500} y={398} size={12} fill={MUTED} anchor="middle">
          {t("fixed plate", "fixed plate")}
        </T>
      </Fade>
      {[
        [350, 15],
        [300, 55],
        [250, 95],
        [205, 135],
      ].map(([y, len], i) => (
        <Fade key={y} on={beat >= 2} delay={dl(2, 2.4 + i * 0.35)}>
          <Draw on={beat >= 2} d={arrowD(350, y, 350 + len, y)} stroke={INK} sw={2} dur={0.4} />
        </Fade>
      ))}

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={425} size={13} fill={MUTED} script anchor="middle">
          {t("each thin layer slides a little faster than the one below", "har thin layer, uske neeche wali se thoda faster slide karti")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={452} size={13} fill={MUTED} script anchor="middle">
          {t("this sets up a velocity gradient, dv/dx", "isse ek velocity gradient, dv/dx, ban jaata")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Draw on={beat >= 4} d="M 515 205 H 525 M 515 350 H 525 M 520 205 V 350" stroke={INK} sw={1.4} dur={0.5} />
        <T x={535} y={280} size={12} fill={INK} anchor="start">
          dv/dx
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={484} size={19} fill={GREEN} weight={800} anchor="middle">
          F = −ηA(dv/dx)
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 502 L 460 526" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={522} size={13} fill={RED} script anchor="start">
          {t("the negative sign: force opposes relative motion", "negative sign: force relative motion ko oppose karta")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={552} size={13} fill={MUTED} script anchor="middle">
          {t("large for honey, small for water, tinier still for air", "honey ke liye large, water ke liye small, air ke liye aur bhi tiny")}
        </T>
      </Fade>
    </Scene>
  );
}
