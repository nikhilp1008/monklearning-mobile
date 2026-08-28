/**
 * Ch08 · Section 35 — "NEET: area under the curve is a density"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 2..6 are ~1s each — short delays throughout for English.
 *
 * Pure algebra cascade, single column, no diagram needed.
 *
 * Beats (en [0, 7.17, 8.17, 9.17, 10.17, 11.17, 12.17]):
 *  0 title only
 *  1 trap: area ≠ total energy — it's per unit volume
 *  2 given: area=8×10⁴ J/m³, volume=5×10⁻⁶ m³
 *  3 boxed hero: U = u×V = 0.4 J
 *  4 red margin: 8×10⁴ J option = the trap
 *  5 text: unit J/m³ on the area = it's a density
 *  6 text: ×volume → units resolve to clean J
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | tick                | Draw | x65..73 y146
 *  b1 | trap (15)           | T st | x80..493 bl150
 *  b2 | tick                | Draw | x65..73 y186
 *  b2 | given (15)          | T st | x80..388 bl190
 *  b3 | hero box            | Draw | x60..620 y225..290
 *  b3 | formula (20)        | T st | x80..430 bl265
 *  b4 | margin bar          | Draw | x60 y325..353
 *  b4 | note (15)           | T st | x76..423 bl345
 *  b5 | tick                | Draw | x65..73 y381
 *  b5 | text (14)           | T st | x80..370 bl385
 *  b6 | tick                | Draw | x65..73 y421
 *  b6 | text (14)           | T st | x80..350 bl425
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("NEET speed trap: area under the curve", "NEET speed trap: curve ke neeche ka area")}
        </T>
      </Fade>

      {/* beat 1 — the trap */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M65 146 h8" stroke={RED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={150} size={15} fill={RED} script anchor="start">
          {t("trap: area ≠ total energy — it's per unit volume", "trap: area ≠ total energy — yeh per unit volume hai")}
        </T>
      </Fade>

      {/* beat 2 — the given data */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 186 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={190} size={15} fill={INK} weight={600} anchor="start">
          given: area=8×10⁴ J/m³, volume=5×10⁻⁶ m³
        </T>
      </Fade>

      {/* beat 3 — the total energy */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d="M72 225 h536 q12 0 12 12 v41 q0 12 -12 12 h-536 q-12 0 -12 -12 v-41 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={265} size={20} fill={INK} weight={800} anchor="start">
          U = u×V = (8×10⁴)(5×10⁻⁶) = 0.4 J
        </T>
      </Fade>

      {/* beat 4 — spot the plant */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M60 325 L60 353" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={345} size={15} fill={RED} script anchor="start">
          {t("8×10⁴ J option = the trap — eliminate it", "8×10⁴ J option = trap — eliminate karo")}
        </T>
      </Fade>

      {/* beat 5 — the unit tell */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M65 381 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={385} size={14} fill={AMBER_DARK} script anchor="start">
          {t("unit J/m³ on the area = it's a density", "unit J/m³ area par = yeh density hai")}
        </T>
      </Fade>

      {/* beat 6 — the units resolve */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M65 421 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={425} size={14} fill={GREEN} script anchor="start">
          {t("×volume → units resolve to clean J", "×volume → units clean J mein resolve")}
        </T>
      </Fade>
    </Scene>
  );
}
