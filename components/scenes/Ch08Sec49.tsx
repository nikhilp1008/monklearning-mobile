/**
 * Ch08 · Section 49 — "JEE Advanced: strong, stiff and tough are independent"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 2..5 are ~1s each — short delays throughout for English.
 *
 * Beats (en [0, 11.18, 12.18, 13.18, 14.18, 15.18, 16.18]):
 *  0 title only
 *  1 diagram: A (steep, high, brittle) vs B (gentler, long plateau, tough)
 *  2 text: Y=slope; A steeper → greater Y → A stiffer
 *  3 text: breaking stress=fracture height; A higher → A stronger
 *  4 text: ductility=plastic extent; B's long plateau → B far more ductile
 *  5 text: toughness=total area; B's huge strain-area → B tougher
 *  6 red margin: strong/stiff/tough independent — glass wins two, steel the rest
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..780 y140..400
 *  b1 | A curve+cross+label | Draw/T| (150,400)→(245,155) x300 bl145
 *  b1 | B curve+cross+label | Draw/T| (150,400)→(600,250) x610 bl270
 *  b1 | caption (11)        | T mid| x540 bl420
 *  b1 | key (9)             | T mid| x540 bl438
 *  b2 | tick/text (12)      | T st | x80..338 bl462
 *  b3 | tick/text (12)      | T st | x80..416 bl486
 *  b4 | tick/text (12)      | T st | x80..416 bl510
 *  b5 | tick/text (12)      | T st | x80..416 bl534
 *  b6 | margin bar          | Draw | x60 y555..583
 *  b6 | note (14)           | T st | x76..~607 bl573
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
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("strong, stiff and tough are independent", "strong, stiff aur tough independent hain")}
        </T>
      </Fade>

      {/* beat 1 — materials A and B compared */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 400, 150, 140)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(150, 400, 780, 400)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M150 400 L245 155" stroke={RED} sw={2.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={crossD(245, 155, 14, 14)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={300} y={145} size={10} fill={RED} anchor="start">
          {t("A: stiff, strong, brittle", "A: stiff, strong, brittle")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d="M150 400 L280 290 C360 250 480 240 600 250" stroke={GREEN} sw={2.6} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={crossD(600, 250, 14, 14)} stroke={GREEN} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={610} y={270} size={10} fill={GREEN} anchor="start">
          {t("B: ductile, tough", "B: ductile, tough")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={540} y={420} size={11} fill={INK}>
          {t("A is stiff and strong; B is ductile and tough", "A stiff aur strong hai; B ductile aur tough hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.1)}>
        <T x={540} y={438} size={9} fill={MUTED}>
          slope = Y · fracture height = strength · reach = ductility · area = toughness
        </T>
      </Fade>

      {/* beat 2 — Young's modulus: the slope */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 458 h8" stroke={RED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={462} size={12} fill={RED} anchor="start">
          Y = slope; A steeper → greater Y → A stiffer
        </T>
      </Fade>

      {/* beat 3 — breaking stress: the fracture height */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 482 h8" stroke={RED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={486} size={12} fill={RED} anchor="start">
          {t("breaking stress = fracture height; A higher → A stronger", "breaking stress = fracture height; A zyada → A stronger")}
        </T>
      </Fade>

      {/* beat 4 — ductility: the plastic reach */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 506 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={510} size={12} fill={GREEN} anchor="start">
          {t("ductility = plastic extent; B's long plateau → B far more ductile", "ductility = plastic extent; B ka lamba plateau → B zyada ductile")}
        </T>
      </Fade>

      {/* beat 5 — toughness: the total area */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M65 530 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={534} size={12} fill={GREEN} anchor="start">
          {t("toughness = total area; B's huge strain-area → B tougher", "toughness = total area; B ka bada strain-area → B tougher")}
        </T>
      </Fade>

      {/* beat 6 — the deep takeaway */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 555 L60 583" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={573} size={14} fill={RED} script anchor="start">
          {t("strong, stiff, tough are independent — glass wins two, steel the rest", "strong, stiff, tough independent — glass do jeete, steel baaki")}
        </T>
      </Fade>
    </Scene>
  );
}
