/**
 * Ch09 · Section 41 — "Torricelli's speed of efflux"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.03, 15.87, 20.39, 25.86, 36.1, 46.17, 54.53]):
 *  0 title (always-on)
 *  1 text: tank filled to height H; a hole at height h from the base
 *  2 tank + H bracket + hole + h label + water jet arc
 *  3 text: both the surface and the hole are at atmospheric pressure
 *  4 text: the large surface descends slowly — v1 nearly zero
 *  5 formula P0+ρgH = P0+½ρv²+ρgh
 *  6 formula (green) v = √(2g(H−h))
 *  7 red-margin note: same speed as a body falling freely through H−h
 *
 * Layout plan:
 *  b2 | tank walls + gap          | Draw  | x300..550  y150..450 (gap y370..390)
 *  b2 | H bracket + label         | Draw+T | x270..280  y150..450 · "H" x260 bl 304
 *  b2 | "h" (12) end               | T end  | x290  bl 383
 *  b2 | water jet arc              | Draw   | (550,380) Q (610,388) (645,415)
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | text (13, script)          | T mid  | x540  bl 462
 *  b4 | text (13, script)          | T mid  | x540  bl 490
 *  b5 | formula (16, w700)         | T mid  | x540  bl 518
 *  b6 | formula (20, w800, grn)    | T mid  | x540  bl 550
 *  b7 | margin bar (red)           | Draw   | x460  y564..588
 *  b7 | note (script 13, red)      | T st   | x476.. bl 584
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("Torricelli's efflux", "Torricelli ka efflux")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("tank filled to height H; a hole at height h from the base", "tank height H tak bhara; base se height h pe ek hole")}
        </T>
      </Fade>

      {/* beat 2 — the tank, hole, and jet */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 300 150 V 450 H 550 V 390" stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d="M 550 370 V 150" stroke={INK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.4)}
        d="M 300 150 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw on={beat >= 2} d="M 270 150 H 280 M 270 450 H 280 M 275 150 V 450" stroke={INK} sw={1.4} dur={0.6} />
        <T x={260} y={304} size={13} fill={INK} anchor="end">
          H
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={290} y={383} size={12} fill={MUTED} anchor="end">
          h
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <Draw on={beat >= 2} d="M 550 380 Q 610 388 645 415" stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={462} size={13} fill={MUTED} script anchor="middle">
          {t("both the surface and hole are at atmospheric pressure", "surface aur hole dono atmospheric pressure pe hote")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={490} size={13} fill={MUTED} script anchor="middle">
          {t("the large surface descends slowly — v₁ nearly zero", "bada surface slowly descend hota — v₁ nearly zero")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={518} size={16} fill={INK} weight={700} anchor="middle">
          P₀ + ρgH = P₀ + ½ρv² + ρgh
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={550} size={20} fill={GREEN} weight={800} anchor="middle">
          v = √(2g(H−h))
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 564 L 460 588" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={584} size={13} fill={RED} script anchor="start">
          {t("same speed as a body falling freely through H−h", "H−h se freely falling body jitni hi speed")}
        </T>
      </Fade>
    </Scene>
  );
}
