/**
 * M11 Ch04 · Section 48 — "Euler, De Moivre and roots toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a consolidated "notes page" grid, revealed in the order taught.
 *
 * Beats (board_reveal_at_english [0, 6.74, 16.9, 28.5, 42.75, 57.17, 71.34, 82.94]):
 *  0 heading: consolidated exponential form (subtitle)
 *  1 formula (high): e^(iθ)=cosθ+isinθ, z=r·e^(iθ)                — grid cell (col1,row1)
 *  2 formula: cosθ=(e^(iθ)+e^(-iθ))/2, sinθ=(e^(iθ)-e^(-iθ))/2i    — grid cell (col2,row1)
 *  3 formula: z^n=r^n·e^(inθ)=r^n(cos nθ+i sin nθ)                — grid cell (col1,row2)
 *    also: mini diagram appears bottom-right — n=5 generic "roots on a circle"
 *  4 formula (high): w_k=r^(1/n)e^(i(θ+2kπ)/n), k=0..n-1 (exactly n) — grid cell (col2,row2)
 *  5 formula: unity 1,α,...,α^(n-1), α=e^(i2π/n); sum=0            — grid cell (col1,row3)
 *  6 formula: 1,ω,ω²; ω³=1; 1+ω+ω²=0; ω²=ω̄                        — grid cell (col2,row3)
 *    mini diagram ERASES the n=5 pentagon and redraws as the n=3 triangle (ω labeled)
 *  7 formula: a³+b³+c³-3abc=(a+b+c)(a+bω+cω²)(a+bω²+cω)            — full-width row4
 *
 * Layout plan (2-col grid, col1 x60-520, col2 x560-1020):
 *  b0 | subtitle                          | T mid | x540 y90
 *  b1 | chip row1 col1                    | Chip  | x60  y120..156
 *  b2 | chip row1 col2                    | Chip  | x560 y120..156
 *  b3 | chip row2 col1                    | Chip  | x60  y172..208
 *  b3 | mini pentagon c(950,470) r55      | Draw/T|
 *  b4 | chip row2 col2                    | Chip  | x560 y172..208
 *  b5 | chip row3 col1                    | Chip  | x60  y224..260
 *  b6 | chip row3 col2                    | Chip  | x560 y224..260
 *  b6 | mini triangle replaces pentagon   | Draw/T| c(950,470) r55
 *  b7 | chip row4 full width              | Chip  | x60  y276..316
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, circleD, Overline } from "./math-kit";

const MCX = 950, MCY = 470, MR = 55;
const pentPts = [0, 1, 2, 3, 4].map((k) => pointOnCircle(MCX, MCY, MR, (Math.PI / 2) + k * ((2 * Math.PI) / 5)));
const triPts = [0, 1, 2].map((k) => pointOnCircle(MCX, MCY, MR, k * ((2 * Math.PI) / 3)));
const triLabelPts = [0, 1, 2].map((k) => pointOnCircle(MCX, MCY, MR + 20, k * ((2 * Math.PI) / 3)));
const triLabels = ["1", "ω", "ω²"];

export default function M11Ch04Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const pentOn = beat >= 3 && beat < 6;
  const triOn = beat >= 6;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Euler, De Moivre and Roots — the Toolkit", "Euler, De Moivre aur Roots — Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Consolidated: exponential form", "Consolidated: exponential form")}
        </T>
      </Fade>

      {/* row 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={60} y={120} w={460} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          e^(iθ)=cosθ+isinθ, z=r·e^(iθ)
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={560} y={120} w={460} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          cosθ=(e^(iθ)+e^(-iθ))/2, sinθ=(e^(iθ)-e^(-iθ))/2i
        </Chip>
      </Fade>

      {/* row 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={60} y={172} w={460} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          z^n=r^n·e^(inθ)=r^n(cos nθ+i sin nθ)
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={560} y={172} w={460} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          w_k=r^(1/n)e^(i(θ+2kπ)/n), k=0..n-1 (exactly n)
        </Chip>
      </Fade>

      {/* row 3 */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={60} y={224} w={460} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          unity: 1,α,…,α^(n-1), α=e^(i2π/n); sum=0
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Rect x={560} y={224} width={460} height={36} rx={14} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        <T x={576} y={247} size={14} fill={INK} anchor="start">
          1, ω, ω²;&nbsp; ω³=1;&nbsp; 1+ω+ω²=0;&nbsp; ω²=
        </T>
        <T x={812} y={247} size={14} fill={INK} anchor="start">ω</T>
        <Overline on={beat >= 6} delay={dl(6, 0)} x={812} y={247} size={14} textWidth={11} anchor="start" />
      </Fade>

      {/* row 4 — the star identity, full width */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={60} y={276} w={960} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          a³+b³+c³-3abc=(a+b+c)(a+bω+cω²)(a+bω²+cω)
        </Chip>
      </Fade>

      {/* footnote diagram — a generic n=5 "roots on a circle" that pivots to the ω triangle */}
      <Draw on={pentOn || triOn} delay={dl(3, 0.4)} d={circleD(MCX, MCY, MR)} stroke={MUTED} sw={1.3} dur={0.6} />
      {pentPts.map((p, i) => (
        <Fade key={i} on={pentOn} delay={dl(3, 0.7 + i * 0.15)}>
          <Circle cx={p.x} cy={p.y} r={3.5} fill={AMBER_DARK} />
        </Fade>
      ))}
      <Fade on={pentOn} delay={dl(3, 1.5)}>
        <T x={MCX} y={MCY + MR + 22} size={11} fill={MUTED} anchor="middle" script>
          {t("n roots, one circle", "n roots, ek circle")}
        </T>
      </Fade>
      {triPts.map((p, i) => (
        <React.Fragment key={i}>
          <Draw on={triOn} delay={dl(6, 0.3 + i * 0.2)} d={arrowD(MCX, MCY, p.x, p.y)} stroke={i === 0 ? INK : AMBER_DARK} sw={1.8} dur={0.4} />
          <Fade on={triOn} delay={dl(6, 0.5 + i * 0.2)}>
            <T x={triLabelPts[i].x} y={triLabelPts[i].y} size={12} fill={i === 0 ? INK : AMBER_DARK} anchor="middle" weight={700}>
              {triLabels[i]}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={triOn} delay={dl(6, 1.1)}>
        <T x={MCX} y={MCY + MR + 40} size={11} fill={MUTED} anchor="middle" script>
          {t("n = 3: the workhorse", "n = 3: the workhorse")}
        </T>
      </Fade>
    </Scene>
  );
}
