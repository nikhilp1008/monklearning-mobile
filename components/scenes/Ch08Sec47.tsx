/**
 * Ch08 · Section 47 — "NEET: stiffness versus ductility"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 2..6 are ~1s each — short delays throughout for English.
 *
 * Beats (en [0, 7.68, 8.68, 9.68, 10.68, 11.68, 12.68]):
 *  0 title only
 *  1 diagram: P (steep, snaps early) vs Q (gentler, long reach) curves
 *  2 text: trap — steeper/higher curve assumed better in every way
 *  3 text: Y = slope of linear part; P steeper → stiffer (greater Y)
 *  4 text: ductility = reach before fracture; Q reaches farther → ductile
 *  5 red margin: stiffness ≠ ductility — eliminate any bundling option
 *  6 text: stiff can be brittle; flexible can be ductile — independent
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..780 y140..400
 *  b1 | P curve+cross+label | Draw/T| (150,400)→(235,165) x290 bl155
 *  b1 | Q curve+cross+label | Draw/T| (150,400)→(500,225) x510 bl245
 *  b1 | caption (11)        | T mid| x465 bl420
 *  b2 | tick/text (13)      | T st | x80..457 bl460
 *  b3 | tick/text (12)      | T st | x80..434 bl488
 *  b4 | tick/text (12)      | T st | x80..464 bl515
 *  b5 | margin bar          | Draw | x60 y535..563
 *  b5 | note (14)           | T st | x76..~492 bl553
 *  b6 | tick/text (12)      | T st | x80..446 bl582
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("NEET: stiffness versus ductility", "NEET: stiffness versus ductility")}
        </T>
      </Fade>

      {/* beat 1 — two curves, P and Q */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 400, 150, 140)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(150, 400, 780, 400)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M150 400 L235 165" stroke={RED} sw={2.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={crossD(235, 165, 14, 14)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={290} y={155} size={10} fill={RED} anchor="start">
          {t("P: steep, snaps early", "P: steep, jaldi snap")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d="M150 400 C260 300 380 250 500 225" stroke={GREEN} sw={2.6} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={crossD(500, 225, 14, 14)} stroke={GREEN} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={510} y={245} size={10} fill={GREEN} anchor="start">
          {t("Q: gentler, long reach", "Q: gentle, lambi reach")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={465} y={420} size={11} fill={INK}>
          {t("P rises steeply and ends early; Q is gentler and reaches far", "P steeply chadhti, jaldi khatam; Q gentle hai aur door tak jaati")}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 456 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={460} size={13} fill={INK} weight={600} anchor="start">
          {t("trap: assume steeper/higher curve is better in every way", "trap: maan lo steeper/higher curve har tarah behtar hai")}
        </T>
      </Fade>

      {/* beat 3 — Young's modulus from slope */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 484 h8" stroke={RED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={488} size={12} fill={RED} anchor="start">
          Y = slope of linear part; P steeper → stiffer (greater Y)
        </T>
      </Fade>

      {/* beat 4 — ductility from reach */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 511 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={515} size={12} fill={GREEN} anchor="start">
          {t("ductility = reach before fracture; Q reaches farther → ductile", "ductility = fracture se pehle reach; Q door → ductile")}
        </T>
      </Fade>

      {/* beat 5 — the eliminate-on-sight rule */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M60 535 L60 563" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={553} size={14} fill={RED} script anchor="start">
          {t("stiffness ≠ ductility — eliminate any bundling option", "stiffness ≠ ductility — bundling option hata do")}
        </T>
      </Fade>

      {/* beat 6 — the general takeaway */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M65 578 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={582} size={12} fill={INK} weight={600} anchor="start">
          {t("stiff can be brittle; flexible can be ductile — independent", "stiff brittle ho sakta; flexible ductile — independent hain")}
        </T>
      </Fade>
    </Scene>
  );
}
