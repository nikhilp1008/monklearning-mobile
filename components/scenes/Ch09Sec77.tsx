/**
 * Ch09 · Section 77 — "Your surface tension toolkit" (formulas recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 16.41]):
 *  1 S = F/L,  [S] = [MT⁻²]
 *  2 E = S (energy per area)
 *  3 ΔP_drop = 2S/r,  ΔP_bubble = 4S/r
 *  4 F_wire = 2Sl,  F_ring = 4πrS
 *  5 red note: angle of contact — acute wets, obtuse does not
 *  6 h = 2Scosθ / rρg
 *  7 red note: surface tension falls with temperature, zero at critical
 *
 * Layout plan — seven rows, coloured bar + formula, baselines ~68px apart:
 *  b1 | bar (amber-dk) + formula | Draw+T | x80 y107..133 · bl 125
 *  b2 | bar (amber-dk) + formula | Draw+T | x80 y172..198 · bl 190
 *  b3 | bar (amber-dk) + formula | Draw+T | x80 y237..263 · bl 255
 *  b4 | bar (amber-dk) + formula | Draw+T | x80 y302..328 · bl 320
 *  b5 | bar (red) + note (14)    | Draw+T | x80 y367..393 · bl 385
 *  b6 | bar (amber-dk) + formula | Draw+T | x80 y432..458 · bl 450
 *  b7 | bar (red) + note (14)    | Draw+T | x80 y497..523 · bl 515
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec77({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; node: React.ReactNode; note?: boolean; size?: number }[] = [
    { y: 125, color: AMBER_DARK, node: <>S = F/L,  [S] = [MT⁻²]</> },
    { y: 190, color: AMBER_DARK, node: <>E = S  (energy per area)</> },
    {
      y: 255,
      color: AMBER_DARK,
      node: (
        <>
          ΔP<TSpan fontSize={11} dy={4}>drop</TSpan>
          <TSpan dy={-4}> = 2S/r,  ΔP</TSpan>
          <TSpan fontSize={11} dy={4}>bubble</TSpan>
          <TSpan dy={-4}> = 4S/r</TSpan>
        </>
      ),
      size: 16,
    },
    {
      y: 320,
      color: AMBER_DARK,
      node: (
        <>
          F<TSpan fontSize={11} dy={4}>wire</TSpan>
          <TSpan dy={-4}> = 2Sl,  F</TSpan>
          <TSpan fontSize={11} dy={4}>ring</TSpan>
          <TSpan dy={-4}> = 4πrS</TSpan>
        </>
      ),
    },
    {
      y: 385,
      color: RED,
      node: t("angle of contact: acute wets, obtuse does not", "angle of contact: acute wets, obtuse nahi"),
      note: true,
    },
    { y: 450, color: AMBER_DARK, node: <>h = 2Scosθ / rρg</> },
    {
      y: 515,
      color: RED,
      node: t("surface tension falls with temperature, zero at critical", "surface tension temperature se girti, critical pe zero"),
      note: true,
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("your surface tension toolkit", "tumhara surface tension toolkit")}
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
