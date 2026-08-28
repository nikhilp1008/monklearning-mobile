/**
 * Ch09 · Section 53 — "Dragging a plate over glycerine" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 7.97, 13.01, 21.71, 31.44]):
 *  0 title (always-on)
 *  1 text: plate area 0.10 m², glycerine 2.0 mm thick, dragged at 0.50 m/s
 *  2 top plate (moving) + bottom plate (fixed) + 3 velocity arrows (long→short)
 *  3 text: velocity gradient — top moving, bottom stuck
 *  4 formula dv/dx = 0.50/(2.0×10⁻³) = 250 s⁻¹
 *  5 formula F = ηA(dv/dx) = 1.5×0.10×250
 *  6 formula (green) F = 37.5 N
 *
 * Layout plan:
 *  b2 | top plate + "v=0.50m/s"   | Draw+T | x300..700  y200 · bl 185
 *  b2 | bottom plate + "fixed"    | Draw+T | x300..700  y320 · bl 338
 *  b2 | velocity arrows ×3         | Draw   | x400  y220/260/300 (len 100/60/25)
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | text (14, script)          | T mid  | x540  bl 370
 *  b4 | formula (18, w700)         | T mid  | x540  bl 405
 *  b5 | formula (17, w700)         | T mid  | x540  bl 437
 *  b6 | formula (22, w800, grn)    | T mid  | x540  bl 472
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("CBSE: dragging a plate", "CBSE: dragging a plate")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("plate 0.10 m², glycerine 2.0 mm thick, dragged at 0.50 m/s", "plate 0.10 m², glycerine 2.0 mm thick, 0.50 m/s se dragged")}
        </T>
      </Fade>

      {/* beat 2 — the layer, moving on top, fixed below */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 300 200 H 700" stroke={INK} sw={3} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={500} y={185} size={13} fill={MUTED} anchor="middle">
          v = 0.50 m/s
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 300 320 H 700" stroke={INK} sw={3} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={500} y={338} size={13} fill={MUTED} anchor="middle">
          {t("fixed", "fixed")}
        </T>
      </Fade>
      {[
        [220, 100],
        [260, 60],
        [300, 25],
      ].map(([y, len], i) => (
        <Fade key={y} on={beat >= 2} delay={dl(2, 2.4 + i * 0.4)}>
          <Draw on={beat >= 2} d={arrowD(400, y, 400 + len, y)} stroke={INK} sw={2} dur={0.4} />
        </Fade>
      ))}

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={370} size={14} fill={MUTED} script anchor="middle">
          {t("velocity gradient: top moving, bottom stuck", "velocity gradient: top moving, bottom stuck")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={405} size={18} fill={INK} weight={700} anchor="middle">
          dv/dx = 0.50/(2.0×10⁻³) = 250 s⁻¹
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={437} size={17} fill={INK} weight={700} anchor="middle">
          F = ηA(dv/dx) = 1.5×0.10×250
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={472} size={22} fill={GREEN} weight={800} anchor="middle">
          F = 37.5 N
        </T>
      </Fade>
    </Scene>
  );
}
