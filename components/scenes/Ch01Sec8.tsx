/**
 * Ch01 · Section 8 — "The 2019 SI: seven defining constants"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.7, 36.8, 52.9, 69.0, 81.3, 96.3, 115.0]):
 *  0 title + ledger header (drawn underline)
 *  1 c → metre · 2 Δν(Cs) → second · 3 h → kilogram (replaced the cylinder!)
 *  4 e → ampere · 5 kB → kelvin · 6 NA → mole and Kcd → candela
 *  7 7 ⇔ 7, no artifacts/vaults/drift, the exam answer chip
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)     | T mid | x232..848  y30..76 (bl 62)
 *  b0 | header (sans 13, muted)    | bl 122 · constant x90 st · value x180 st ·
 *       defines x740 mid · underline y132 x70..810
 *  b1-6 | rows, bl 170+48i        | sym sans18 x90 st · value sans15 x180 st (≤x372)
 *       · arrow (620,bl−5)→(668,bl−5) · unit chip x680..810 h34 (y bl−23)
 *  b3 | cylinder note (script 14) | T st | x820..1020  y295..321 (bl 314, red)
 *  b7 | "7 constants" x60 st bl 516 · ⇔ arrows y510 · "7 units" x226 st
 *  b7 | exam chip (h40)           | Chip | x420..1010  y494..534
 *  b7 | "no artifacts…" (16, red) | T st | x60..350    y549..578 (bl 570)
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
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

/** [symbol, exact value, unit, beat, base delay] */
const ROWS: [string, string, string, number, number][] = [
  ["c", "299 792 458 m/s", "metre", 1, 1.5],
  ["Δν(Cs)", "9 192 631 770 Hz", "second", 2, 1],
  ["h", "6.626 070 15 × 10⁻³⁴ J·s", "kilogram", 3, 1],
  ["e", "1.602 176 634 × 10⁻¹⁹ C", "ampere", 4, 1],
  ["kʙ", "1.380 649 × 10⁻²³ J/K", "kelvin", 5, 1],
  ["Nᴀ", "6.022 140 76 × 10²³ /mol", "mole", 6, 1],
  ["Kᴄᴅ", "683 lm/W", "candela", 6, 8],
];

const rowY = (i: number) => 170 + i * 48;

export default function Ch01Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the modern face of the SI */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t(
            "2019: seven exact constants → seven units",
            "2019: saat exact constants → saat units"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={90} y={122} size={13} fill={MUTED} anchor="start">
          {t("constant", "constant")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.3)}>
        <T x={180} y={122} size={13} fill={MUTED} anchor="start">
          {t("exact value — by decree", "exact value — by decree")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.6)}>
        <T x={740} y={122} size={13} fill={MUTED}>
          {t("defines", "defines")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6.2)}
        d="M 70 132 H 810"
        stroke={MUTED}
        sw={1.4}
        dur={0.7}
      />

      {/* the seven rows */}
      {ROWS.map(([sym, val, unit, k, base], i) => {
        const y = rowY(i);
        return (
          <G key={sym}>
            <Fade on={beat >= k} delay={dl(k, base)}>
              <T x={90} y={y} size={18} fill={INK} weight={800} anchor="start">
                {sym}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, base + 1.5)}>
              <T x={180} y={y} size={15} fill={INK} anchor="start" weight={600}>
                {val}
              </T>
            </Fade>
            <Draw
              on={beat >= k}
              delay={dl(k, base + 6)}
              d={arrowD(620, y - 5, 668, y - 5)}
              stroke={AMBER}
              sw={2.4}
              dur={0.4}
            />
            <Fade on={beat >= k} delay={dl(k, base + 6.6)}>
              <Chip x={680} y={y - 23} w={130} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={16}>
                {unit}
              </Chip>
            </Fade>
          </G>
        );
      })}

      {/* beat 3 — the constant that replaced the platinum cylinder */}
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={820} y={314} size={14} fill={RED} script anchor="start">
          {t("this replaced the cylinder!", "isi ne cylinder hataya!")}
        </T>
      </Fade>

      {/* beat 7 — one-to-one, and the exam answer */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={60} y={516} size={17} fill={INK} weight={700} anchor="start">
          7 constants
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.8)}
        d={`${arrowD(170, 510, 214, 510)} ${arrowD(214, 514, 170, 514)}`}
        stroke={AMBER}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 3.4)}>
        <T x={226} y={516} size={17} fill={INK} weight={700} anchor="start">
          7 units
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <Chip x={420} y={494} w={590} h={40} fill={GREEN} textFill="#fff" size={16}>
          {t(
            "exam answer: fixed numerical values of fundamental constants",
            "exam answer: fundamental constants ki fixed numerical values"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={60} y={570} size={16} fill={RED} script anchor="start">
          {t("no artifacts · no vaults · no drift", "na artifact · na vault · na drift")}
        </T>
      </Fade>
    </Scene>
  );
}
