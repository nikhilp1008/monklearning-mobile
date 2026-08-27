/**
 * C11 Chemistry Ch03 · Section 32 — "Valence: the N or 8 minus N rule"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.51, 20.99, 34.3, 52.65, 70.57, 88.15, 101.03]):
 *  0 title + underline
 *  1 valence = N or (8-N), whichever reaches the octet
 *  2 red-margin: group number (old A) = valence electrons
 *  3 O-scale bar chart, climbing 1..7 (Na..Cl)
 *  4 matching oxides under each bar
 *  5 H-scale bar chart, tent shape 1,2,3,4,3,2,1
 *  6 matching hydrides under each bar
 *  7 red-margin closing: O-scale climbs 1→7; H-scale rises then falls
 *
 * Layout plan:
 *  b1 | line (14, ink)              | T mid | x?..?     y93..106 (bl 100)
 *  b2 | red margin bar + line       | Draw  | x70 y115..147 (bl 137)
 *  b3 | O-scale bars (7, climbing)  | Draw  | x140..940 y161..280
 *  b4 | oxide labels                | T mid | bl 316
 *  b5 | H-scale bars (7, tent)      | Draw  | x140..940 y362..430
 *  b6 | hydride labels              | T mid | bl 466
 *  b7 | red margin bar + line       | Draw  | x70 y485..517 (bl 507)
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
  RED,
  Scene,
} from '@/components/scenes/kit';

const SYM = ["Na", "Mg", "Al", "Si", "P", "S", "Cl"];
const BAR_X = [140, 260, 380, 500, 620, 740, 860];
const BAR_W = 80;
const OXIDES = ["Na₂O", "MgO", "Al₂O₃", "SiO₂", "P₂O₅", "SO₃", "Cl₂O₇"];
const O_VALS = [1, 2, 3, 4, 5, 6, 7];
const HYDRIDES = ["NaH", "MgH₂", "AlH₃", "SiH₄", "PH₃", "H₂S", "HCl"];
const H_VALS = [1, 2, 3, 4, 3, 2, 1];

function BarRow({
  on,
  delay,
  baseY,
  values,
  labelBelow,
}: {
  on: boolean;
  delay: number;
  baseY: number;
  values: number[];
  labelBelow: string[];
}) {
  return (
    <>
      {values.map((v, i) => {
        const h = v * 17;
        const top = baseY - h;
        const cx = BAR_X[i] + BAR_W / 2;
        return (
          <Fade key={i} on={on} delay={delay + i * 0.15}>
            <Rect x={BAR_X[i]} y={top} width={BAR_W} height={h} fill={AMBER} fillOpacity={0.35} stroke={AMBER_DARK} strokeWidth={2} />
            <T x={cx} y={top - 6} size={12} fill={INK} weight={700}>{v}</T>
            <T x={cx} y={baseY + 16} size={12} fill={MUTED}>{SYM[i]}</T>
          </Fade>
        );
      })}
    </>
  );
}

export default function C11Ch03Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("valence: the N or 8-N rule", "valence: N ya 8-N rule")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={14} fill={INK}>
          {t("valence = N or (8−N), whichever reaches the octet", "valence = N ya (8−N), jo octet tak pahunche")}
        </T>
      </Fade>

      {/* beat 2 — red-margin: group = valence electrons */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 70 115 L 70 147" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={94} y={137} size={15} weight={700} fill={INK} anchor="start">
          {t("group number (old A) = valence electrons", "group number (old A) = valence electrons")}
        </T>
      </Fade>

      {/* beat 3 — the oxygen scale climbs */}
      <BarRow on={beat >= 3} delay={dl(3, 0.2)} baseY={280} values={O_VALS} labelBelow={SYM} />

      {/* beat 4 — the matching oxides */}
      {OXIDES.map((ox, i) => (
        <Fade key={ox} on={beat >= 4} delay={dl(4, 0.1 * i)}>
          <T x={BAR_X[i] + BAR_W / 2} y={316} size={11} fill={MUTED}>{ox}</T>
        </Fade>
      ))}

      {/* beat 5 — the hydrogen scale: rise then fall */}
      <BarRow on={beat >= 5} delay={dl(5, 0.2)} baseY={430} values={H_VALS} labelBelow={SYM} />

      {/* beat 6 — the matching hydrides */}
      {HYDRIDES.map((hy, i) => (
        <Fade key={hy} on={beat >= 6} delay={dl(6, 0.1 * i)}>
          <T x={BAR_X[i] + BAR_W / 2} y={466} size={11} fill={MUTED}>{hy}</T>
        </Fade>
      ))}

      {/* beat 7 — red-margin closing comparison */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 70 485 L 70 517" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={94} y={507} size={14} weight={700} fill={INK} anchor="start">
          {t("O-scale climbs 1→7; H-scale rises 1→4 then falls to 1", "O-scale 1→7 chadhta; H-scale 1→4 chadhke 1 tak girta")}
        </T>
      </Fade>
    </Scene>
  );
}
