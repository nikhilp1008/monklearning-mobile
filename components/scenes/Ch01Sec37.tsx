/**
 * Ch01 · Section 37 — "Combination of errors: the heart of every exam question"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.2, 35.1, 49.9, 74.8, 92.3, 115.6, 139.1]):
 *  0 title · 1 the shape: two panels + the worst-case strip
 *  2 rule 1: sum — absolute errors add
 *  3 rule 2: difference — STILL plus (the trap)
 *  4 rule 3: product — relative errors add
 *  5 rule 4: quotient — identical, denominator still +
 *  6 rule 5: power — the exponent multiplies
 *  7 the two surprises, stated plainly
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | panels y96..170: x60..520 / x560..1020 · headers bl 126 · lines bl 156
 *  b1 | strip x60..1020 y182..222 · text bl 207
 *  b2-6 | rows bl 260+44i: op (sans 17) x80 st · rule (sans 17) x320 st · note (script 13) x680 st
 *  b7 | bar x51 y485..550 · surprise lines x80 st bl 500 / 538 · verdict x640 st bl 519
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

/** [op, rule, note-en, note-hi, note-colour, beat] */
const ROWS: [string, string, string, string, string, number][] = [
  ["x = a + b", "Δx = Δa + Δb", "natural — nobody errs", "seedha hai — koi nahi chukta", "muted", 2],
  ["x = a − b", "Δx = Δa + Δb   (STILL plus!)", "the favourite trap", "sabka favourite trap", "red", 3],
  ["x = a · b", "Δx/x = Δa/a + Δb/b", "currency switch: RELATIVE", "currency badli: RELATIVE", "amber", 4],
  ["x = a / b", "Δx/x = Δa/a + Δb/b", "denominator still +", "denominator phir bhi +", "amber", 5],
  ["x = aᵖ bᵍ / cʳ", "Δx/x = p·Δa/a + q·Δb/b + r·Δc/c", "the exponent MULTIPLIES", "exponent GUNA karta hai", "red", 6],
];

const rowY = (i: number) => 260 + i * 44;

export default function Ch01Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the heart */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("combination of errors — the heart", "errors ka jod — asli dil yahi hai")}
        </T>
      </Fade>

      {/* beat 1 — the shape before the algebra */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 72 96 h 436 q 12 0 12 12 v 50 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -50 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={290} y={126} size={18} fill={INK} weight={800}>
          +  and  −
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={290} y={156} size={15} fill={AMBER_DARK} script>
          {t("ABSOLUTE errors add", "ABSOLUTE errors judte hain")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6)}
        d="M 572 96 h 436 q 12 0 12 12 v 50 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -50 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={790} y={126} size={18} fill={INK} weight={800}>
          ×  ÷  powers
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.5)}>
        <T x={790} y={156} size={15} fill={AMBER_DARK} script>
          {t("RELATIVE errors add", "RELATIVE errors judte hain")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 15)}
        d="M 72 182 h 936 q 12 0 12 12 v 16 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={RED}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 17)}>
        <T x={540} y={207} size={14} fill={RED} script>
          {t(
            "always WORST CASE — every error pushes the same unlucky way",
            "hamesha WORST CASE — har error ek hi badqismat disha mein dhakelta hai"
          )}
        </T>
      </Fade>

      {/* rules — revealed across beats 2–6 */}
      {ROWS.map(([op, rule, nEn, nHi, colour, k], i) => {
        const y = rowY(i);
        const noteFill = colour === "red" ? RED : colour === "amber" ? AMBER_DARK : MUTED;
        return (
          <G key={op}>
            <Fade on={beat >= k} delay={dl(k, 1.5)}>
              <T x={80} y={y} size={17} fill={INK} weight={700} anchor="start">
                {op}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 4.5)}>
              <T x={320} y={y} size={17} fill={INK} weight={700} anchor="start">
                {rule}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 9)}>
              <T x={700} y={y} size={13} fill={noteFill} script anchor="start">
                {t(nEn, nHi)}
              </T>
            </Fade>
          </G>
        );
      })}

      {/* beat 7 — the two surprises */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 51 485 L 51 550"
        stroke={RED}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={80} y={500} size={15} fill={RED} script anchor="start">
          {t(
            "surprise 1: in a DIFFERENCE, the errors still ADD",
            "surprise 1: DIFFERENCE mein bhi errors JUDTE hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={80} y={538} size={15} fill={RED} script anchor="start">
          {t(
            "surprise 2: a square DOUBLES it · a square root HALVES it",
            "surprise 2: square DUGNA karta hai · square root AADHA"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 17)}>
        <T x={660} y={519} size={14} fill={INK} script anchor="start">
          {t("miss either → simply wrong", "koi bhi chhoota → seedha galat")}
        </T>
      </Fade>
    </Scene>
  );
}
