/**
 * Ch08 · Section 56 — "Searle's experiment for Young's modulus"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..3 are ~1s each; hi beats 4..7 are ~1s apart —
 * short delays there.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 15.63, 31.5, 43.36, 59.06]):
 *  0 title only
 *  1 diagram: twin wires (reference + experimental) from one support, frame
 *  2 text: two identical wires, one support — reference (fixed load) + experimental
 *  3 text: frame with spirit level + micrometer measures the difference in elongation
 *  4 text: add loads, level the bubble, record extension → straight line
 *  5 boxed hero: Y = MgL/(πr²ΔL) (from the slope)
 *  6 red margin: reference wire cancels temperature & support errors — both shift together
 *  7 text: measure radius carefully — Y∝1/r², a small error is doubled
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 18, red, ALWAYS ON) cx540 bl64
 *  b1 | ceiling+hatch        | Draw | x400..680 y85
 *  b1 | reference wire       | Draw | x460 y85..170
 *  b1 | experimental wire    | Draw | x620 y85..170
 *  b1 | frame+level+microm   | Draw | x440..640 y170..186
 *  b1 | fixed/load blocks    | Draw/Fade | x448..472 · x608..632 y186..216
 *  b1 | labels (9)           | T    | x460 bl130 · x620 bl130
 *  b1 | caption (11)         | T mid| x540 bl250
 *  b2 | tick/text (12)       | T st | x80..512 bl275
 *  b3 | tick/text (12)       | T st | x80..476 bl301
 *  b4 | tick/text (12)       | T st | x80..548 bl326
 *  b5 | hero box             | Draw | x60..420 y350..415
 *  b5 | result (17)          | T st | x80..378 bl388
 *  b6 | margin bar           | Draw | x60 y435..463
 *  b6 | note (13)            | T st | x76..~576 bl453
 *  b7 | tick/text (12)       | T st | x80..416 bl485
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={18} fill={RED} script>
          {t("measuring Y: Searle's experiment", "Y napna: Searle's experiment")}
        </T>
      </Fade>

      {/* beat 1 — the twin-wire apparatus */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M400 85 h280" stroke={INK} sw={3} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.25)} d="M420 85 l-8 -8 M460 85 l-8 -8 M500 85 l-8 -8 M540 85 l-8 -8 M580 85 l-8 -8 M620 85 l-8 -8 M660 85 l-8 -8" stroke={INK} sw={1.2} dur={0.2} />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M460 85 V170" stroke={GREEN} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M620 85 V170" stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={460} y={128} size={9} fill={GREEN} anchor="end">
          {t("reference", "reference")}
        </T>
        <T x={632} y={128} size={9} fill={AMBER_DARK} anchor="start">
          {t("experimental", "experimental")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M440 170 h200 v16 h-200 Z" stroke={INK} sw={1.6} dur={0.4} fill="none" />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d="M545 164 A5 5 0 1 1 544.9 164" stroke={INK} sw={1.4} dur={0.2} fill="none" />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M500 178 h80" stroke={INK} sw={1} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={540} y={200} size={9} fill={INK}>
          {t("spirit level + micrometer", "spirit level + micrometer")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d="M448 186 h24 v22 h-24 Z" stroke={INK} sw={1.4} dur={0.3} fill="none" />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={460} y={202} size={8} fill={INK}>
          {t("fixed", "fixed")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <Rect x={608} y={186} width={24} height={30} fill={AMBER} fillOpacity={0.55} stroke={INK} strokeWidth={1.4} />
        <T x={620} y={205} size={8} fill={INK}>
          {t("load", "load")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={540} y={250} size={11} fill={INK}>
          {t("a reference wire beside the experimental wire cancels stray errors", "reference wire, experimental wire ke saath, stray errors cancel karta")}
        </T>
      </Fade>

      {/* beat 2 — the two wires, one support */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 271 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={275} size={12} fill={INK} weight={600} anchor="start">
          {t("two identical wires, one support — reference (fixed load) + experimental", "do identical wires, ek support — reference (fixed load) + experimental")}
        </T>
      </Fade>

      {/* beat 3 — the frame measures the difference */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 297 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={301} size={12} fill={INK} weight={600} anchor="start">
          {t("frame with spirit level + micrometer measures the difference in elongation", "frame ke spirit level + micrometer se elongation ka farak napte")}
        </T>
      </Fade>

      {/* beat 4 — the procedure */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 322 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={326} size={12} fill={INK} weight={600} anchor="start">
          {t("add loads, level the bubble, record extension → straight line", "loads jodo, bubble level karo, extension record karo → straight line")}
        </T>
      </Fade>

      {/* beat 5 — the boxed working formula */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M72 350 h348 q12 0 12 12 v41 q0 12 -12 12 h-348 q-12 0 -12 -12 v-41 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={388} size={17} fill={INK} weight={800} anchor="start">
          {t("Y = MgL/(πr²ΔL)  (from the slope)", "Y = MgL/(πr²ΔL)  (slope se)")}
        </T>
      </Fade>

      {/* beat 6 — why two wires */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 435 L60 463" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={453} size={13} fill={RED} script anchor="start">
          {t("reference wire cancels temperature & support errors — both shift together", "reference wire temperature & support errors cancel karta — dono saath shift")}
        </T>
      </Fade>

      {/* beat 7 — the radius warning */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M65 481 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={80} y={485} size={12} fill={INK} weight={600} anchor="start">
          {t("measure radius carefully — Y∝1/r², a small error is doubled", "radius carefully napo — Y∝1/r², chhoti error double ho jaati")}
        </T>
      </Fade>
    </Scene>
  );
}
