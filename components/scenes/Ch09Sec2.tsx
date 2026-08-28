/**
 * Ch09 · Section 2 — "Why pressure deepens with depth"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 7.08, 12.89, 19.63, 26.37, 33.88, 34.88, 35.88]):
 *  0 title + "increasing depth ↓" orienting arrow (dims once the tank appears)
 *  1 LEFT: tank drawn, 3 depth lines, caption "each layer carries weight above"
 *  2 3 arrows (growing with depth) + P₁ P₂ P₃ labels
 *  3 inequality line P₁ < P₂ < P₃
 *  4 RIGHT: formula P = P₀ + ρgh
 *  5 red-margin note "grows linearly with depth h" + small P-vs-h line graph
 *  6 two chips: surface (atmosphere only) vs deeper (atmosphere + column)
 *  7 red-margin note: depends on depth & density, not total volume
 *
 * Layout plan (Kalam bl −1.3s..+0.5s, Anek bl −0.78s..+0.31s):
 *  b0 | intro arrow (amber-dk)      | Draw  | (250,110)→(250,235)
 *  b0 | "increasing depth" (12)     | T mid  | x199..301  y240..255 (bl 252)
 *  b1 | "surface" (12, muted)       | T mid  | x357..423  y252..274 (bl 268)
 *  b1 | water line                  | Draw   | x300..480  y286
 *  b1 | tank walls                  | Draw   | x300..480  y292..460
 *  b1 | depth lines ×3 (muted)      | line   | x306..474  y330/380/430
 *  b1 | "bottom" (12, muted)        | T mid  | x357..423  y470..492 (bl 486)
 *  b1 | caption (script 13)         | T mid  | x247..533  y505..531 (bl 524)
 *  b2 | arrows ×3 (ink), tips ≤550  | Draw   | y330/380/430 from x480, len 25/45/70
 *  b2 | P₁ P₂ P₃ (12) st            | T st   | x510/530/555  y334/384/434
 *  b3 | inequality (script 15,grn)  | T mid  | x315..465  y546..573 (bl 565)
 *  b4 | formula (34, w800)          | T mid  | x661..899  y286..323 (bl 312)
 *  b5 | margin bar (red)            | Draw   | x600  y340..364
 *  b5 | note (script 15, red)       | T st   | x616..863  y339..366 (bl 358)
 *  b5 | graph axes                  | Draw   | x606..700  y380..430
 *  b5 | graph line (amber-dk)       | Draw   | (606,430)→(694,384)
 *  b5 | "h"/"P" axis tags (11,muted)| T      | x700 y450 / x594 y376
 *  b6 | chip "surface: atm only"    | Chip   | x600..860  y468..498
 *  b6 | chip "deeper: atm+column"   | Chip   | x600..900  y512..542
 *  b7 | margin bar (red)            | Draw   | x600  y558..582
 *  b7 | note (script 15, red)       | T st   | x616..979  y557..584 (bl 576)
 */

import React from "react";
import { Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const P_ARROWS: [number, number][] = [
  [330, 25],
  [380, 45],
  [430, 70],
];

export default function Ch09Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("deeper means higher pressure", "jitna deep, utna pressure")}
        </T>
      </Fade>

      {/* beat 0 — orienting arrow */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <Draw on={beat >= 0} d={arrowD(250, 110, 250, 235)} stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 1.2)}>
        <T x={250} y={252} size={12} fill={MUTED} anchor="middle">
          {t("increasing depth", "badhti depth")}
        </T>
      </Fade>

      {/* beat 1 — the tank, three depth levels */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={390} y={268} size={12} fill={MUTED} script>
          {t("surface", "surface")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d="M 300 286 q 15 -7 30 0 q 15 7 30 0 q 15 -7 30 0 q 15 7 30 0 q 15 -7 30 0 q 15 7 30 0"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 300 292 V 460 H 480 V 292"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      {P_ARROWS.map(([y], i) => (
        <Fade key={y} on={beat >= 1} delay={dl(1, 2 + i * 0.3)}>
          <Line x1={306} y1={y} x2={474} y2={y} stroke={MUTED} strokeWidth={1.2} />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={390} y={486} size={12} fill={MUTED} script>
          {t("bottom", "bottom")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={390} y={524} size={13} fill={INK} script>
          {t("each layer carries the weight above", "har layer upar ka weight uthati hai")}
        </T>
      </Fade>

      {/* beat 2 — arrows grow with depth, labelled */}
      {P_ARROWS.map(([y, len], i) => (
        <Fade key={y} on={beat >= 2} delay={dl(2, 0.6 + i * 1)}>
          <Draw on={beat >= 2} d={arrowD(480, y, 480 + len, y)} stroke={INK} sw={2.2} dur={0.4} />
          <T x={480 + len + 6} y={y + 4} size={12} fill={INK} anchor="start">
            P{"₁₂₃"[i]}
          </T>
        </Fade>
      ))}

      {/* beat 3 — the trend, stated */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={390} y={565} size={15} fill={GREEN} script>
          P₁ &lt; P₂ &lt; P₃
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={780} y={312} size={34} fill={INK} weight={800}>
          P = P₀ + ρgh
        </T>
      </Fade>

      {/* beat 5 — linear growth, with a small graph */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 600 340 L 600 364" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={616} y={358} size={15} fill={RED} script anchor="start">
          {t("grows linearly with depth h", "depth h ke saath linearly badhta")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Draw on={beat >= 5} d="M 606 380 V 430 H 700" stroke={INK} sw={1.8} dur={0.6} />
        <Draw
          on={beat >= 5}
          delay={dl(5, 2.2)}
          d="M 606 430 L 694 384"
          stroke={AMBER_DARK}
          sw={2.2}
          dur={0.6}
        />
        <T x={700} y={450} size={11} fill={MUTED} anchor="start">
          h
        </T>
        <T x={594} y={376} size={11} fill={MUTED} anchor="end">
          P
        </T>
      </Fade>

      {/* beat 6 — surface vs deeper */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={600} y={468} w={260} h={30} fill="#fff" stroke={AMBER_DARK} textFill={INK} size={14} script>
          {t("surface: atmosphere only", "surface: sirf atmosphere")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={600} y={512} w={300} h={30} fill="#fff" stroke={AMBER_DARK} textFill={INK} size={14} script>
          {t("deeper: atmosphere + column", "deeper: atmosphere + column")}
        </Chip>
      </Fade>

      {/* beat 7 — the exam trap */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 600 558 L 600 582" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={616} y={576} size={15} fill={RED} script anchor="start">
          {t("depth & density, not total volume", "depth & density, na ki total volume")}
        </T>
      </Fade>
    </Scene>
  );
}
