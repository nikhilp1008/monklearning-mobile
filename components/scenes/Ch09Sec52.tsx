/**
 * Ch09 · Section 52 — "Your viscosity toolkit" (formulas recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 3.41, 10.58, 21.25, 33.02, 34.02, 35.02, 36.02]):
 *  1 F = −ηA(dv/dx)
 *  2 η = (F/A)/(dv/dx),  [η] = [ML⁻¹T⁻¹]
 *  3 red note: SI unit Pa·s = decapoise = poiseuille; 1 Pa·s = 10 poise
 *  4 ν = η/ρ
 *  5 F = 6πηrv
 *  6 v_t = (2/9) r²(ρ_b−ρ_f)g/η
 *  7 red note: scalings — v_t goes as r², density difference, and 1/η
 *
 * Layout plan — seven rows, coloured bar + formula, baselines ~68px apart:
 *  b1 | bar (amber-dk) + formula | Draw+T | x80 y107..133 · bl 125
 *  b2 | bar (amber-dk) + formula | Draw+T | x80 y172..198 · bl 190
 *  b3 | bar (red) + note (14)    | Draw+T | x80 y237..263 · bl 255
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

export default function Ch09Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; node: React.ReactNode; note?: boolean; size?: number }[] = [
    { y: 125, color: AMBER_DARK, node: <>F = −ηA(dv/dx)</> },
    { y: 190, color: AMBER_DARK, node: <>η = (F/A)/(dv/dx),  [η] = [ML⁻¹T⁻¹]</>, size: 15 },
    {
      y: 255,
      color: RED,
      node: t("SI unit Pa·s = decapoise = poiseuille; 1 Pa·s = 10 poise", "SI unit Pa·s = decapoise = poiseuille; 1 Pa·s = 10 poise"),
      note: true,
    },
    { y: 320, color: AMBER_DARK, node: <>ν = η / ρ</> },
    { y: 385, color: AMBER_DARK, node: <>F = 6πηrv</> },
    {
      y: 450,
      color: AMBER_DARK,
      node: (
        <>
          v<TSpan fontSize={12} dy={4}>t</TSpan>
          <TSpan dy={-4}> = (2/9) r²(ρ</TSpan>
          <TSpan fontSize={12} dy={4}>b</TSpan>
          <TSpan dy={-4}>−ρ</TSpan>
          <TSpan fontSize={12} dy={4}>f</TSpan>
          <TSpan dy={-4}>)g / η</TSpan>
        </>
      ),
      size: 16,
    },
    {
      y: 515,
      color: RED,
      node: t("scalings: v_t goes as r², density difference, and 1/η", "scalings: v_t r², density difference, aur 1/η ki tarah jaata"),
      note: true,
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("your viscosity toolkit", "tumhara viscosity toolkit")}
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
