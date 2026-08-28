/**
 * Ch09 · Section 45 — "Continuity then Bernoulli: the pressure drop" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.06, 19.11, 25.77, 31.06, 40.7, 49.32, 50.32]):
 *  0 title (always-on)
 *  1 text: wide 8cm², 3.0 m/s, 2.0×10⁵ Pa. narrow 2cm²
 *  2 tapered pipe + pressure gauges (tall/short) + speed arrows
 *  3 formula v2 = v1(A1/A2) = 3.0×4 = 12 m/s
 *  4 text: horizontal pipe, so Bernoulli drops the height terms
 *  5 formula P2 = P1 + ½ρ(v1²−v2²)
 *  6 formula (green) P2 = 2.0×10⁵ + 500(9−144) = 1.325×10⁵ Pa
 *  7 red-margin note: the pressure drops because the water sped up
 *
 * Layout plan:
 *  b2 | gauge tall + "P₁"         | rect+T | x260..280  y180..230 · bl 172
 *  b2 | gauge short + "P₂"        | rect+T | x640..660  y215..230 · bl 207
 *  b2 | pipe walls                 | Draw   | x150..750  y255→285 / 345→315
 *  b2 | slow/fast arrows           | Draw+T | (200,300)→(320,300) / (560,300)→(740,300)
 *  b1 | text (13, script)          | T mid  | x540  bl 114
 *  b3 | formula (16, w700)         | T mid  | x540  bl 405
 *  b4 | text (13, script)          | T mid  | x540  bl 432
 *  b5 | formula (16, w700)         | T mid  | x540  bl 460
 *  b6 | formula (15, w800, grn)    | T mid  | x540  bl 490
 *  b7 | margin bar (red)           | Draw   | x460  y508..532
 *  b7 | note (script 13, red)      | T st   | x476.. bl 528
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={20} fill={RED} script>
          {t("JEE Main: continuity then Bernoulli", "JEE Main: continuity then Bernoulli")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={13} fill={MUTED} script anchor="middle">
          {t("wide: 8cm², 3.0 m/s, 2.0×10⁵ Pa. narrow: 2cm²", "wide: 8cm², 3.0 m/s, 2.0×10⁵ Pa. narrow: 2cm²")}
        </T>
      </Fade>

      {/* beat 2 — the pipe, pressures, and speeds */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={260} y={180} width={20} height={50} fill={AMBER} stroke={INK} strokeWidth={1.4} />
        <T x={270} y={172} size={12} fill={INK} anchor="middle">
          P₁
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Rect x={640} y={215} width={20} height={15} fill={AMBER} stroke={INK} strokeWidth={1.4} />
        <T x={650} y={207} size={12} fill={INK} anchor="middle">
          P₂
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 150 255 H 400 L 500 285 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 1.9)} d="M 150 345 H 400 L 500 315 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Draw on={beat >= 2} d={arrowD(200, 300, 320, 300)} stroke={INK} sw={2.2} dur={0.5} />
        <T x={260} y={285} size={13} fill={INK} anchor="middle">
          v₁
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <Draw on={beat >= 2} d={arrowD(560, 300, 740, 300)} stroke={INK} sw={2.8} dur={0.4} />
        <T x={650} y={285} size={13} fill={INK} anchor="middle">
          v₂
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={405} size={16} fill={INK} weight={700} anchor="middle">
          v₂ = v₁(A₁/A₂) = 3.0×4 = 12 m/s
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={432} size={13} fill={MUTED} script anchor="middle">
          {t("horizontal pipe — Bernoulli drops the height terms", "horizontal pipe — Bernoulli height terms drop karta")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={460} size={16} fill={INK} weight={700} anchor="middle">
          P₂ = P₁ + ½ρ(v₁²−v₂²)
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={490} size={15} fill={GREEN} weight={800} anchor="middle">
          P₂ = 2.0×10⁵ + 500(9−144) = 1.325×10⁵ Pa
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 508 L 460 532" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={528} size={13} fill={RED} script anchor="start">
          {t("the pressure drops because the water sped up", "pressure isliye drop hota kyunki water speed up hua")}
        </T>
      </Fade>
    </Scene>
  );
}
