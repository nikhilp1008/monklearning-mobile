/**
 * Ch01 · Section 22 — "Dimensional formulae: the mechanics core"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.6, 28.0, 41.9, 52.8, 77.7, 88.6, 106.2]):
 *  0 title + table header (drawn underline)
 *  1 velocity · 2 acceleration · 3 force · 4 work/energy/torque (shared!)
 *  5 power · 6 pressure/stress/Young's (shared!)
 *  7 the clustering pattern — where match-the-dimensions questions come from
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red) mid bl 62 · header (sans 13) bl 132 · underline y142
 *  b1-6 | rows bl 170+52i: quantity x70 st (sans 16) · from x300 st (script 13) ·
 *        dim x560 st (sans 16, amber, w700) · unit x800 st (script 15) ·
 *        shared-notes (script 13, red) x880 st on rows 4 & 6
 *  b7 | red underlines y342 x555..645 · y446 x555..650
 *  b7 | line1 (script 16, red) x60..524 bl 500 · line2 (script 15, amber) x60..460 bl 545 · bar x51
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

/** [quantity, from-en, from-hi, dim, unit, beat] */
const ROWS: [string, string, string, string, string, number][] = [
  ["velocity", "= disp ÷ time", "= disp ÷ time", "[M⁰ L T⁻¹]", "m/s", 1],
  ["acceleration", "= velocity ÷ time", "= velocity ÷ time", "[M⁰ L T⁻²]", "m/s²", 2],
  ["force", "= m × a", "= m × a", "[M L T⁻²]", "newton", 3],
  ["work · energy · torque", "= force × distance", "= force × distance", "[M L² T⁻²]", "joule", 4],
  ["power", "= work ÷ time", "= work ÷ time", "[M L² T⁻³]", "watt", 5],
  ["pressure · stress · Y", "= force ÷ area", "= force ÷ area", "[M L⁻¹ T⁻²]", "pascal", 6],
];

const rowY = (i: number) => 170 + i * 52;

export default function Ch01Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the core list */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("the mechanics core — learn it by heart", "mechanics core — dil se yaad karo")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={70} y={132} size={13} fill={MUTED} anchor="start">
          {t("quantity", "quantity")}
        </T>
        <T x={300} y={132} size={13} fill={MUTED} anchor="start">
          {t("built from", "kis se bana")}
        </T>
        <T x={560} y={132} size={13} fill={MUTED} anchor="start">
          {t("dimensions", "dimensions")}
        </T>
        <T x={800} y={132} size={13} fill={MUTED} anchor="start">
          unit
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 60 142 H 1000"
        stroke={MUTED}
        sw={1.4}
        dur={0.7}
      />

      {/* the six rows */}
      {ROWS.map(([qty, fEn, fHi, dim, unit, k], i) => {
        const y = rowY(i);
        return (
          <G key={qty}>
            <Fade on={beat >= k} delay={dl(k, 1)}>
              <T x={70} y={y} size={16} fill={INK} weight={600} anchor="start">
                {qty}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 3)}>
              <T x={300} y={y} size={13} fill={MUTED} script anchor="start">
                {t(fEn, fHi)}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 6)}>
              <T x={560} y={y} size={16} fill={AMBER_DARK} weight={700} anchor="start">
                {dim}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 8)}>
              <T x={800} y={y} size={15} fill={INK} script anchor="start">
                {unit}
              </T>
            </Fade>
          </G>
        );
      })}
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={880} y={rowY(3)} size={13} fill={RED} script anchor="start">
          {t("3 in 1 recipe!", "3 ki 1 recipe!")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={880} y={rowY(5)} size={13} fill={RED} script anchor="start">
          {t("3 more share it!", "3 aur same!")}
        </T>
      </Fade>

      {/* beat 7 — the clustering is the exam bait */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 2)}
        d="M 555 342 C 585 339, 615 344, 645 341"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 4)}
        d="M 555 446 C 585 443, 620 448, 650 445"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={60} y={500} size={16} fill={RED} script anchor="start">
          {t(
            "this clustering is exactly what examiners build questions from",
            "isi clustering se examiner apne sawaal banate hain"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 15)}
        d="M 51 528 L 51 556"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={62} y={548} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "families: work = energy = torque · pressure = stress = Young's",
            "families: work = energy = torque · pressure = stress = Young's"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
