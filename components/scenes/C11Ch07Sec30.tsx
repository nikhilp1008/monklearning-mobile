/**
 * C11 Ch07 · Section 30 — Worked example (JEE Advanced): does Cu⁺ disproportionate?
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 13.48, 24.83, 39.42, 54.78, 63.91, 72.96, 91.39]):
 *  0 heading: use E° to test Cu⁺ stability
 *  1 given: Cu⁺+e⁻→Cu, E°=+0.52V ; Cu²⁺+e⁻→Cu⁺, E°=+0.16V
 *  2 setup: 2Cu⁺ → Cu + Cu²⁺ as a cell (one reduced=cathode, one oxidised=anode)
 *  3 cathode: Cu⁺/Cu at +0.52 ; anode: Cu²⁺/Cu⁺ at +0.16
 *  4 E°cell = 0.52 − 0.16 = +0.36V
 *  5 red-margin: E°cell>0 ⇒ spontaneous — Cu⁺ unstable in water
 *  6 log K = (1)(0.36)/0.0591 ≈ 6.09 ⇒ K ≈ 1.2×10⁶
 *  7 closer: large K is why cuprous salts are rare, Cu²⁺ dominates
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | given (sans15)          | T mid | x540 bl134
 *  b2 | setup (sans15)          | T mid | x540 bl168
 *  b3 | cathode/anode (sans16)  | T mid | x540 bl202
 *  b4 | E°cell (sans19 800)     | T mid | x540 bl240
 *  b5 | margin bar x64 y262..296, text (sans16 red) x80 bl280
 *  b6 | log K (sans17)          | T mid | x540 bl330
 *  b7 | closer (sans15 green)   | T mid | x540 bl364
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("disproportionation just needs a positive E°cell", "disproportionation ko bas positive E°cell chahiye")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("use E° to test Cu⁺ stability", "Cu⁺ ki stability E° se test karo")}
        </T>
      </Fade>

      {/* ===== beat 1 — given ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={15} fill={INK}>
          Cu⁺ + e⁻ → Cu, E°=+0.52V    ·    Cu²⁺ + e⁻ → Cu⁺, E°=+0.16V
        </T>
      </Fade>

      {/* ===== beat 2 — setup ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={15} fill={INK}>
          {t(
            "set up 2Cu⁺ → Cu + Cu²⁺ as a cell (one reduced, one oxidised)",
            "2Cu⁺ → Cu + Cu²⁺ ko cell ki tarah socho (ek reduced, ek oxidised)"
          )}
        </T>
      </Fade>

      {/* ===== beat 3 — cathode / anode ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={202} size={16} fill={INK}>
          {t("cathode: Cu⁺/Cu at +0.52   ·   anode: Cu²⁺/Cu⁺ at +0.16", "cathode: Cu⁺/Cu +0.52   ·   anode: Cu²⁺/Cu⁺ +0.16")}
        </T>
      </Fade>

      {/* ===== beat 4 — E°cell ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={240} size={19} fill={INK} weight={800}>
          E°cell = 0.52 − 0.16 = +0.36 V
        </T>
      </Fade>

      {/* ===== beat 5 — spontaneous ===== */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 64 262 L 64 296" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={280} size={16} fill={RED} weight={700} anchor="start">
          {t("E°cell > 0 ⇒ spontaneous — Cu⁺ is unstable in water", "E°cell > 0 ⇒ spontaneous — Cu⁺ paani mein unstable hai")}
        </T>
      </Fade>

      {/* ===== beat 6 — equilibrium constant ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={330} size={17} fill={INK} weight={700}>
          log K = (1)(0.36) / 0.0591 ≈ 6.09   ⇒   K ≈ 1.2 × 10⁶
        </T>
      </Fade>

      {/* ===== beat 7 — closer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={364} size={15} fill={GREEN} weight={700}>
          {t("that huge K is why cuprous salts are rare — Cu²⁺ dominates in water", "itna bada K isliye — cuprous salts rare, Cu²⁺ paani mein dominate karta")}
        </T>
      </Fade>
    </Scene>
  );
}
