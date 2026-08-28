/**
 * Ch09 · Section 43 — "A narrowing pipe: the speed jumps ninefold" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 8.89, 14.86, 19.81]):
 *  0 title (always-on)
 *  1 text: diameter narrows from 6 cm to 2 cm; inlet speed 2.0 m/s
 *  2 tapered pipe + d1/d2 labels + slow/fast arrows
 *  3 formula v2 = v1(d1/d2)²
 *  4 formula v2 = 2.0×(6/2)² = 2.0×9
 *  5 formula (green) v2 = 18 m/s
 *  6 red-margin note: diameter thirds, so speed jumps ninefold
 *
 * Layout plan:
 *  b2 | pipe walls                | Draw  | x150..750  y255→285 / 345→315
 *  b2 | "d₁=6cm" (12)              | T mid  | x270  bl 370
 *  b2 | "d₂=2cm" (12)              | T mid  | x650  bl 340
 *  b2 | slow arrow "v1"            | Draw+T | (200,300)→(320,300) · bl 285
 *  b2 | fast arrow "v2"            | Draw+T | (560,300)→(740,300) · bl 285
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | formula (18, w700)         | T mid  | x540  bl 405
 *  b4 | formula (17, w700)         | T mid  | x540  bl 437
 *  b5 | formula (20, w800, grn)    | T mid  | x540  bl 469
 *  b6 | margin bar (red)           | Draw   | x460  y488..512
 *  b6 | note (script 14, red)      | T st   | x476.. bl 508
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("CBSE: a narrowing pipe", "CBSE: a narrowing pipe")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("diameter narrows 6 cm → 2 cm; inlet speed 2.0 m/s", "diameter 6 cm se 2 cm hota; inlet speed 2.0 m/s")}
        </T>
      </Fade>

      {/* beat 2 — the pipe and speeds */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 150 255 H 400 L 500 285 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 150 345 H 400 L 500 315 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={270} y={370} size={12} fill={MUTED} anchor="middle">
          d₁ = 6 cm
        </T>
        <T x={650} y={340} size={12} fill={MUTED} anchor="middle">
          d₂ = 2 cm
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <Draw on={beat >= 2} d={arrowD(200, 300, 320, 300)} stroke={INK} sw={2.2} dur={0.5} />
        <T x={260} y={285} size={13} fill={INK} anchor="middle">
          v₁
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Draw on={beat >= 2} d={arrowD(560, 300, 740, 300)} stroke={INK} sw={2.8} dur={0.4} />
        <T x={650} y={285} size={13} fill={INK} anchor="middle">
          v₂
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={405} size={18} fill={INK} weight={700} anchor="middle">
          v₂ = v₁(d₁/d₂)²
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={437} size={17} fill={INK} weight={700} anchor="middle">
          v₂ = 2.0×(6/2)² = 2.0×9
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={469} size={20} fill={GREEN} weight={800} anchor="middle">
          v₂ = 18 m/s
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 488 L 460 512" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={508} size={14} fill={RED} script anchor="start">
          {t("diameter thirds, so speed jumps ninefold", "diameter third hota, speed ninefold jump karti")}
        </T>
      </Fade>
    </Scene>
  );
}
