/**
 * Ch09 · Section 42 — "Your flow toolkit" (formulas recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 4.78, 14.93, 26.97, 34.9, 43.35, 52.82, 53.82]):
 *  1 A1v1 = A2v2 = Q
 *  2 P + ½ρv² + ρgh = constant
 *  3 P + ½ρv² = P_stag
 *  4 v = √(2g(H−h))
 *  5 R = 2√(h(H−h)), R_max = H at h = H/2
 *  6 Re = ρvD/η
 *  7 red note: continuity first, Bernoulli second
 *
 * Layout plan — seven rows, coloured bar + formula, baselines ~68px apart:
 *  b1 | bar (amber-dk) + formula | Draw+T | x80 y107..133 · bl 125
 *  b2 | bar (amber-dk) + formula | Draw+T | x80 y172..198 · bl 190
 *  b3 | bar (amber-dk) + formula | Draw+T | x80 y237..263 · bl 255
 *  b4 | bar (amber-dk) + formula | Draw+T | x80 y302..328 · bl 320
 *  b5 | bar (amber-dk) + formula | Draw+T | x80 y367..393 · bl 385
 *  b6 | bar (amber-dk) + formula | Draw+T | x80 y432..458 · bl 450
 *  b7 | bar (red) + note (15)    | Draw+T | x80 y497..523 · bl 515
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; node: React.ReactNode; note?: boolean; size?: number }[] = [
    { y: 125, color: AMBER_DARK, node: <>A₁v₁ = A₂v₂ = Q</> },
    { y: 190, color: AMBER_DARK, node: <>P + ½ρv² + ρgh = constant</> },
    {
      y: 255,
      color: AMBER_DARK,
      node: (
        <>
          P + ½ρv² = P<TSpan fontSize={12} dy={4}>stag</TSpan>
        </>
      ),
    },
    { y: 320, color: AMBER_DARK, node: <>v = √(2g(H−h))</> },
    {
      y: 385,
      color: AMBER_DARK,
      node: (
        <>
          R = 2√(h(H−h)),  R<TSpan fontSize={11} dy={4}>max</TSpan>
          <TSpan dy={-4}> = H at h = H/2</TSpan>
        </>
      ),
      size: 15,
    },
    { y: 450, color: AMBER_DARK, node: <>Re = ρvD / η</> },
    {
      y: 515,
      color: RED,
      node: t("continuity first, Bernoulli second", "pehle continuity, phir Bernoulli"),
      note: true,
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("your flow toolkit", "tumhara flow toolkit")}
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
              <T x={100} y={row.y} size={15} fill={RED} script anchor="start">
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
