/**
 * Ch09 · Section 65 — "Halving the radius drops the flow sixteenfold" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.31, 7.31, 8.31, 9.31, 10.31, 11.31]):
 *  0 title (always-on)
 *  1 text: same length and pressure, but half the radius — new flow rate?
 *  2 tube (radius r) vs tube (radius r/2)
 *  3 red-margin note: do not scale with area (Q/4) or radius (Q/2)
 *  4 formula Q ∝ r⁴
 *  5 formula (green) Q′ = Q(1/2)⁴ = Q/16
 *  6 red-margin note: radius to the fourth — halving cuts flow sixteenfold
 *
 * Layout plan:
 *  b2 | tube (r)                  | Draw  | x200..450  y260..320
 *  b2 | "r" (13)                  | T mid  | x325  bl 345
 *  b2 | tube (r/2)                | Draw   | x600..850  y275..305
 *  b2 | "r/2" (13)                | T mid  | x725  bl 330
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | margin bar (red)          | Draw   | x460  y362..386
 *  b3 | note (script 14, red)     | T st   | x476.. bl 382
 *  b4 | formula (18, w700)        | T mid  | x540  bl 415
 *  b5 | formula (20, w800, grn)   | T mid  | x540  bl 450
 *  b6 | margin bar (red)          | Draw   | x460  y472..496
 *  b6 | note (script 14, red)     | T st   | x476.. bl 492
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("NEET speed trap: halve the radius", "NEET speed trap: halve the radius")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("same length and pressure, but half the radius — new Q?", "same length aur pressure, par half radius — naya Q?")}
        </T>
      </Fade>

      {/* beat 2 — two tubes, dramatic difference */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 200 260 H 450" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 200 320 H 450" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={325} y={345} size={13} fill={MUTED} anchor="middle">
          r
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 600 275 H 850" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d="M 600 305 H 850" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={725} y={330} size={13} fill={MUTED} anchor="middle">
          r/2
        </T>
      </Fade>

      {/* beat 3 */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 362 L 460 386" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={382} size={14} fill={RED} script anchor="start">
          {t("do not scale with area (Q/4) or radius (Q/2)", "area (Q/4) ya radius (Q/2) se scale mat karo")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={415} size={18} fill={INK} weight={700} anchor="middle">
          Q ∝ r⁴
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={450} size={20} fill={GREEN} weight={800} anchor="middle">
          Q′ = Q(1/2)⁴ = Q/16
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 472 L 460 496" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={492} size={14} fill={RED} script anchor="start">
          {t("radius to the fourth: halving cuts flow sixteenfold", "radius fourth power: halving se flow sixteen guna kam")}
        </T>
      </Fade>
    </Scene>
  );
}
