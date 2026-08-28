/**
 * Ch09 · Section 29 — "Your accelerated and rotating toolkit" (formulas recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 7.17, 18.26, 23.47, 34.56, 40.36, 50.01, 51.01]):
 *  1 tan θ = a/g,  g_eff = √(a²+g²)
 *  2 Δh = aL/g
 *  3 g_eff = g±a,  P = P₀+ρ(g±a)h
 *  4 dP/dr = ρω²r
 *  5 y(r) = ω²r²/2g,  Δh = ω²R²/2g
 *  6 red note: volume conservation — rim rises ω²R²/4g
 *  7 red note: all of fluid statics still holds — just use g_eff
 *
 * Layout plan — seven rows, coloured bar + formula, baselines ~68px apart:
 *  b1 | bar (amber-dk) + formula | Draw+T | x80 y107..133 · bl 125
 *  b2 | bar (amber-dk) + formula | Draw+T | x80 y172..198 · bl 190
 *  b3 | bar (amber-dk) + formula | Draw+T | x80 y237..263 · bl 255
 *  b4 | bar (amber-dk) + formula | Draw+T | x80 y302..328 · bl 320
 *  b5 | bar (amber-dk) + formula | Draw+T | x80 y367..393 · bl 385
 *  b6 | bar (red) + note (14)    | Draw+T | x80 y432..458 · bl 450
 *  b7 | bar (red) + note (14)    | Draw+T | x80 y497..523 · bl 515
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; node: React.ReactNode; note?: boolean; size?: number }[] = [
    { y: 125, color: AMBER_DARK, node: <>tan θ = a/g,  g_eff = √(a²+g²)</> },
    { y: 190, color: AMBER_DARK, node: <>Δh = aL / g</> },
    { y: 255, color: AMBER_DARK, node: <>g_eff = g ± a,  P = P₀+ρ(g±a)h</>, size: 16 },
    { y: 320, color: AMBER_DARK, node: <>dP/dr = ρω²r</> },
    { y: 385, color: AMBER_DARK, node: <>y(r) = ω²r²/2g,  Δh = ω²R²/2g</>, size: 16 },
    {
      y: 450,
      color: RED,
      node: t("volume conservation: rim rises ω²R²/4g", "volume conservation: rim ω²R²/4g rises hota"),
      note: true,
    },
    {
      y: 515,
      color: RED,
      node: t("all of fluid statics still holds — just use g_eff", "fluid statics sab kuch chalti — bas g_eff use karo"),
      note: true,
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("accelerated and rotating toolkit", "accelerated aur rotating toolkit")}
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
