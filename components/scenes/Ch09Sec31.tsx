/**
 * Ch09 · Section 31 — "Forty-five degrees means a equals g" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.12, 14.42, 23.21, 31.23, 38.31, 44.63]):
 *  0 title (always-on)
 *  1 text: surface makes 45°; find the cart's acceleration
 *  2 right triangle: g (down), a (across, equal length), 45° hypotenuse
 *  3 red-margin note: the angle depends only on a/g
 *  4 formula (green) a = g tan45° = g×1 = 10 m/s²
 *  5 red-margin note: anchor the benchmark — 45° means a = g
 *  6 text: anything steeper needs a > g
 *
 * Layout plan:
 *  b2 | g leg (down)             | Draw+T | (450,220)→(450,340) · "g" x465 bl 284
 *  b2 | a leg (across)           | Draw+T | (450,340)→(570,340) · "a" x510 bl 358
 *  b2 | hypotenuse (green)       | Draw   | (450,220)→(570,340)
 *  b2 | "45°" (13, green)        | T st   | x465  bl 239
 *  b1 | text (14, script)        | T mid  | x540  bl 114
 *  b3 | margin bar (red)         | Draw   | x460  y400..424
 *  b3 | note (script 14, red)    | T st   | x476.. bl 420
 *  b4 | formula (20, w800, grn)  | T mid  | x540  bl 460
 *  b5 | margin bar (red)         | Draw   | x460  y484..508
 *  b5 | note (script 14, red)    | T st   | x476.. bl 504
 *  b6 | text (14, script)        | T mid  | x540  bl 538
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("NEET speed trap: 45 degrees", "NEET speed trap: 45 degrees")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("surface makes 45° — find the cart's acceleration", "surface 45° banata — cart ka acceleration nikalo")}
        </T>
      </Fade>

      {/* beat 2 — the right triangle */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 450 220 V 340" stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={465} y={284} size={14} fill={INK} anchor="start">
          g
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 450 340 H 570" stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={510} y={358} size={14} fill={INK} anchor="middle">
          a
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d="M 450 220 L 570 340" stroke={GREEN} sw={3} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={465} y={239} size={13} fill={GREEN} anchor="start">
          45°
        </T>
      </Fade>

      {/* beat 3 */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 400 L 460 424" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={420} size={14} fill={RED} script anchor="start">
          {t("the angle depends only on a/g", "angle sirf a/g pe depend karta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={460} size={20} fill={GREEN} weight={800} anchor="middle">
          a = g tan45° = g×1 = 10 m/s²
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 484 L 460 508" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={504} size={14} fill={RED} script anchor="start">
          {t("anchor the benchmark: 45° means a = g", "benchmark yaad rakho: 45° matlab a = g")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={538} size={14} fill={MUTED} script anchor="middle">
          {t("anything steeper needs a greater than g", "usse steeper ke liye a, g se zyada chahiye")}
        </T>
      </Fade>
    </Scene>
  );
}
