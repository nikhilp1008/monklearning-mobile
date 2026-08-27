/**
 * C11 Ch09 · Section 53 — "Polymerisation of ethyne"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.51, 16.13, 22.61, 30.81, 39.77, 48.81]):
 *  0 heading: two polymerisations of ethyne ·
 *  1 (a) linear -> polyacetylene · 2 draw the polyene chain, -(CH=CH)-n ·
 *  3 conducts electricity when doped · 4 (b) cyclic label ·
 *  5 3 HC≡CH --red-hot Fe, 873K--> benzene ring (drawn) ·
 *  6 RED: bridge into arenes of Sub-04
 *
 * Layout plan:
 *  b1 | "(a) Linear…" label   | T st   | x140 y145
 *  b2 | zigzag polyene chain  | Draw   | x150..430 y195..215
 *  b2 | chain label           | T mid  | x290 y240
 *  b3 | conducts text         | T mid  | x540 y275
 *  b4 | "(b) Cyclic…" label   | T st   | x140 y320
 *  b5 | "3 HC≡CH" label       | T st   | x150 y365
 *  b5 | reaction arrow        | Draw+T | x330..510 y360 (over: red-hot Fe, 873 K)
 *  b5 | benzene ring          | Draw   | cx600 cy360 r34
 *  b5 | ring label            | T mid  | x600 y412
 *  b6 | red bar + note        | Draw+T | bar x60 y450..494, text bl472/494
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Draw,
  INK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow, bondD, doubleBondD, ringD } from "./chem-kit";

export default function C11Ch09Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // polyene zigzag: 4 vertices, alternating single/double bond
  const pts: [number, number][] = [
    [150, 210],
    [220, 190],
    [290, 210],
    [360, 190],
    [430, 210],
  ];
  const chainD =
    doubleBondD(pts[0][0], pts[0][1], pts[1][0], pts[1][1], 3) +
    " " +
    bondD(pts[1][0], pts[1][1], pts[2][0], pts[2][1]) +
    " " +
    doubleBondD(pts[2][0], pts[2][1], pts[3][0], pts[3][1], 3) +
    " " +
    bondD(pts[3][0], pts[3][1], pts[4][0], pts[4][1]);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("polymerisation of ethyne", "ethyne ka polymerisation")}
        </T>
      </Fade>

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={104} size={16} fill={INK} weight={700}>
          {t("two polymerisations of ethyne", "ethyne ke do polymerisations")}
        </T>
      </Fade>

      {/* beat 1 — linear label */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={140} y={150} size={17} fill={INK} weight={800} anchor="start">
          {t("(a) Linear polymerisation", "(a) Linear polymerisation")}
        </T>
      </Fade>

      {/* beat 2 — draw the polyene chain */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={chainD} stroke={INK} sw={2.4} dur={1.2} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={290} y={245} size={15} fill={INK}>
          {t("–(CH=CH)–ₙ  →  polyacetylene", "–(CH=CH)–ₙ  →  polyacetylene")}
        </T>
      </Fade>

      {/* beat 3 — conducts electricity */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={285} size={15} fill={INK}>
          {t("suitably treated, it conducts electricity", "suitably treat karne pe, ye electricity conduct karta hai")}
        </T>
      </Fade>

      {/* beat 4 — cyclic label */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={140} y={330} size={17} fill={INK} weight={800} anchor="start">
          {t("(b) Cyclic polymerisation", "(b) Cyclic polymerisation")}
        </T>
      </Fade>

      {/* beat 5 — the equation + benzene ring product */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={375} size={17} fill={INK} weight={700} anchor="start">
          3 HC≡CH
        </T>
      </Fade>
      <ReactionArrow
        on={beat >= 5}
        delay={dl(5, 1.1)}
        x1={310}
        x2={490}
        y={370}
        over={t("red-hot Fe tube, 873 K", "red-hot Fe tube, 873 K")}
        color={INK}
      />
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d={ringD(600, 375, 34)} stroke={INK} sw={2.4} dur={1} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Circle cx={600} cy={375} r={18} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.3)}>
        <T x={600} y={432} size={14} fill={INK}>
          {t("C6H6 (benzene)", "C6H6 (benzene)")}
        </T>
      </Fade>

      {/* beat 6 — RED: bridge to arenes */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 470 L 60 524" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={492} size={16} fill={RED} script anchor="start">
          {t("that cyclic route is the bridge", "wahi cyclic route hai bridge")}
        </T>
        <T x={76} y={520} size={16} fill={RED} script anchor="start">
          {t("into the arenes of Sub-04", "arenes (Sub-04) tak")}
        </T>
      </Fade>
    </Scene>
  );
}
