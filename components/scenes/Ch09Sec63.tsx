/**
 * Ch09 · Section 63 — "Your Poiseuille toolkit" (formulas recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 3.5, 12.29, 20.57, 27.39, 35.5, 46.85, 56.66]):
 *  1 Q = πΔPr⁴/8ηl
 *  2 red note: scalings — Q goes as ΔP, r⁴, 1/l, and 1/η
 *  3 R = ΔP/Q = 8ηl/πr⁴
 *  4 R_eq(series) = ΣRi,  1/R_eq(parallel) = Σ1/Ri
 *  5 v(s) = ΔP/4ηl(r²−s²),  v_avg = v_max/2
 *  6 v_c = Re·η/(ρD)
 *  7 red note: valid only for steady, laminar, Newtonian flow
 *
 * Layout plan — seven rows, coloured bar + formula, baselines ~68px apart:
 *  b1 | bar (amber-dk) + formula | Draw+T | x80 y107..133 · bl 125
 *  b2 | bar (red) + note (14)    | Draw+T | x80 y172..198 · bl 190
 *  b3 | bar (amber-dk) + formula | Draw+T | x80 y237..263 · bl 255
 *  b4 | bar (amber-dk) + formula | Draw+T | x80 y302..328 · bl 320
 *  b5 | bar (amber-dk) + formula | Draw+T | x80 y367..393 · bl 385
 *  b6 | bar (amber-dk) + formula | Draw+T | x80 y432..458 · bl 450
 *  b7 | bar (red) + note (14)    | Draw+T | x80 y497..523 · bl 515
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; node: React.ReactNode; note?: boolean; size?: number }[] = [
    { y: 125, color: AMBER_DARK, node: <>Q = πΔPr⁴ / 8ηl</> },
    {
      y: 190,
      color: RED,
      node: t("scalings: Q goes as ΔP, r⁴, 1/l, and 1/η", "scalings: Q ΔP, r⁴, 1/l, aur 1/η ki tarah jaata"),
      note: true,
    },
    { y: 255, color: AMBER_DARK, node: <>R = ΔP/Q = 8ηl / πr⁴</> },
    {
      y: 320,
      color: AMBER_DARK,
      node: (
        <>
          R<TSpan fontSize={11} dy={4}>series</TSpan>
          <TSpan dy={-4}> = ΣR</TSpan>
          <TSpan fontSize={11} dy={4}>i</TSpan>
          <TSpan dy={-4}>,  1/R</TSpan>
          <TSpan fontSize={11} dy={4}>parallel</TSpan>
          <TSpan dy={-4}> = Σ1/R</TSpan>
          <TSpan fontSize={11} dy={4}>i</TSpan>
        </>
      ),
      size: 13,
    },
    {
      y: 385,
      color: AMBER_DARK,
      node: <>v(s) = ΔP/4ηl(r²−s²),  v_avg = v_max/2</>,
      size: 14,
    },
    {
      y: 450,
      color: AMBER_DARK,
      node: (
        <>
          v<TSpan fontSize={12} dy={4}>c</TSpan>
          <TSpan dy={-4}> = Re·η / (ρD)</TSpan>
        </>
      ),
    },
    {
      y: 515,
      color: RED,
      node: t("valid only for steady, laminar, Newtonian flow", "sirf steady, laminar, Newtonian flow ke liye valid"),
      note: true,
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("your Poiseuille toolkit", "tumhara Poiseuille toolkit")}
        </T>
      </Fade>

      {rows.map((row, i) => (
        <React.Fragment key={row.y}>
          <Draw
            on={beat >= i + 1}
            delay={dl(i + 1, 0)}
            d={`M 80 ${row.y - 16} L 80 ${row.y + 8}`}
            stroke={row.color}
            sw={3.2}
            dur={0.4}
          />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.4)}>
            {row.note ? (
              <T x={100} y={row.y} size={14} fill={RED} script anchor="start">
                {row.node}
              </T>
            ) : (
              <T x={100} y={row.y} size={row.size ?? 18} fill={INK} weight={700} anchor="start">
                {row.node}
              </T>
            )}
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
