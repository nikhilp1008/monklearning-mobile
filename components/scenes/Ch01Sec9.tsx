/**
 * Ch01 · Section 9 — "Coherent derived units you must know cold"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.8, 29.4, 47.0, 66.1, 83.9, 98.5, 117.5]):
 *  0 title + the word "coherent" (drawn underline)
 *  1 coherent = base units × and ÷ only — a stray "× 2" gets crossed out
 *  2 newton row · 3 joule row · 4 watt row · 5 pascal row
 *  6 coulomb row — so short charge can't be base
 *  7 why coherence matters: conversions just work; a design choice
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)      | T mid | x232..848  y30..76 (bl 62)
 *  b0 | "coherent" (script 24)      | T mid | x487..593  y90..133 (bl 121) · underline y145
 *  b1 | definition (script 16)      | T mid | x347..733  y154..183 (bl 175)
 *  b1 | "× 2" (sans 16) + cross     | T mid | (790,175) · crossD(777,163,27,17)
 *  b2-6 | header bl 214 (sans 13, muted) + underline y224 x60..1000
 *       rows bl 256+48i: quantity x70 st (sans16) · symbol x250 mid (sans17 w800)
 *       · base form x310 st (sans15) · dim x560 st (sans15 amber) · note x720 st (script14)
 *  b7 | bar x51 y503..533 · line1 (script 17, green) x62..567 bl 525
 *  b7 | line2 (script 15, amber)    | T st  | x62..334   y546..573 (bl 565)
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

/** [quantity, symbol, base form, dim, note-en, note-hi, beat] */
const ROWS: [string, string, string, string, string, string, number][] = [
  ["force", "N", "kg·m/s²", "[M L T⁻²]", "straight from F = m·a", "seedha F = m·a se", 2],
  ["energy / work", "J", "kg·m²/s²", "[M L² T⁻²]", "force × distance — the extra metre", "force × distance — extra metre yahin se", 3],
  ["power", "W", "kg·m²/s³", "[M L² T⁻³]", "energy ÷ time — one more s below", "energy ÷ time — ek aur s neeche", 4],
  ["pressure", "Pa", "kg/(m·s²)", "[M L⁻¹ T⁻²]", "Procedure A built this!", "Procedure A mein banaya tha!", 5],
  ["charge", "C", "A·s", "[A T]", "so short → charge can't be base!", "itna chhota → charge base nahi ho sakta!", 6],
];

const rowY = (i: number) => 256 + i * 48;

export default function Ch01Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — one word to understand, not skim */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t(
            "derived units — and the word that matters",
            "derived units — aur ek zaroori shabd"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={121} size={24} fill={AMBER_DARK} script>
          coherent
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 480 145 C 520 141, 560 147, 600 143"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />

      {/* beat 1 — no stray numbers bolted on */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={540} y={175} size={16} fill={INK} script>
          {t(
            "= just base units × and ÷ — no stray numbers",
            "= sirf base units × aur ÷ — koi faltu number nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={790} y={175} size={16} fill={MUTED} weight={700}>
          × 2
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6)}
        d={crossD(777, 163, 27, 17)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />

      {/* table header */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={214} size={13} fill={MUTED} anchor="start">
          {t("quantity", "quantity")}
        </T>
        <T x={250} y={214} size={13} fill={MUTED}>
          unit
        </T>
        <T x={310} y={214} size={13} fill={MUTED} anchor="start">
          {t("in base units", "base units mein")}
        </T>
        <T x={560} y={214} size={13} fill={MUTED} anchor="start">
          {t("dimensions", "dimensions")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.9)}
        d="M 60 224 H 1000"
        stroke={MUTED}
        sw={1.4}
        dur={0.7}
      />

      {/* the five rows */}
      {ROWS.map(([qty, sym, base, dim, nEn, nHi, k], i) => {
        const y = rowY(i);
        return (
          <G key={sym}>
            <Fade on={beat >= k} delay={dl(k, 1.5)}>
              <T x={70} y={y} size={16} fill={INK} weight={600} anchor="start">
                {qty}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 3)}>
              <T x={250} y={y} size={17} fill={INK} weight={800}>
                {sym}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 4.5)}>
              <T x={310} y={y} size={15} fill={INK} weight={600} anchor="start">
                {base}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 7)}>
              <T x={560} y={y} size={15} fill={AMBER_DARK} weight={700} anchor="start">
                {dim}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 11)}>
              <T x={720} y={y} size={14} fill={k === 6 ? RED : MUTED} script anchor="start">
                {t(nEn, nHi)}
              </T>
            </Fade>
          </G>
        );
      })}

      {/* beat 7 — coherence is a design choice */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 51 503 L 51 533"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={62} y={525} size={17} fill={GREEN} script anchor="start">
          {t(
            "inside the SI, conversions never need awkward constants",
            "SI ke andar conversion ko kabhi ajeeb constants nahi chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={62} y={565} size={15} fill={AMBER_DARK} script anchor="start">
          {t("a design choice — not an accident", "design choice hai — accident nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
