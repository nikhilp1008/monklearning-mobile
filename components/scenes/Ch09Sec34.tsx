/**
 * Ch09 · Section 34 — "Pitfalls and pro-tips: accelerated and rotating fluids" (tips recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 12.43, 21.65, 30.87, 37.1, 51.26]):
 *  1 red: tilt the surface up at the rear, opposite the acceleration
 *  2 amber: volume conservation — add only half the height gap
 *  3 red: once a fluid accelerates, use g_eff, not g
 *  4 amber: free fall — g_eff = 0, hydrostatic pressure vanishes
 *  5 amber: rim rises ω²R²/4g — half the total
 *  6 red: benchmarks — tanθ = a/g, and rim−centre = ω²R²/2g
 *
 * Layout plan — six rows, coloured bar + text, baselines 75px apart:
 *  b1 | bar (red) + text (17)   | Draw+T | x80 y112..138 · bl 130
 *  b2 | bar (amber-dk) + text   | Draw+T | x80 y187..213 · bl 205
 *  b3 | bar (red) + text        | Draw+T | x80 y262..288 · bl 280
 *  b4 | bar (amber-dk) + text   | Draw+T | x80 y337..363 · bl 355
 *  b5 | bar (amber-dk) + text   | Draw+T | x80 y412..438 · bl 430
 *  b6 | bar (red) + text        | Draw+T | x80 y487..513 · bl 505
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; en: string; hi: string }[] = [
    {
      y: 130,
      color: RED,
      en: "tilt the surface up at the rear, opposite the acceleration",
      hi: "surface rear mein upar tilt hota, acceleration ke opposite",
    },
    {
      y: 205,
      color: AMBER_DARK,
      en: "volume conservation: add only half the height gap",
      hi: "volume conservation: sirf half height gap jodo",
    },
    {
      y: 280,
      color: RED,
      en: "once a fluid accelerates, use g_eff, not g",
      hi: "fluid accelerate hote hi, g_eff use karo, g nahi",
    },
    {
      y: 355,
      color: AMBER_DARK,
      en: "free fall: g_eff = 0, hydrostatic pressure vanishes",
      hi: "free fall: g_eff = 0, hydrostatic pressure gayab",
    },
    {
      y: 430,
      color: AMBER_DARK,
      en: "rim rises ω²R²/4g — half the total",
      hi: "rim ω²R²/4g rises hota — total ka half",
    },
    {
      y: 505,
      color: RED,
      en: "benchmarks: tanθ = a/g, and rim−centre = ω²R²/2g",
      hi: "benchmarks: tanθ = a/g, aur rim−centre = ω²R²/2g",
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("pitfalls and pro-tips", "pitfalls aur pro-tips")}
        </T>
      </Fade>

      {rows.map((row, i) => (
        <React.Fragment key={row.y}>
          <Draw
            on={beat >= i + 1}
            delay={dl(i + 1, 0)}
            d={`M 80 ${row.y - 18} L 80 ${row.y + 8}`}
            stroke={row.color}
            sw={3.2}
            dur={0.4}
          />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.4)}>
            <T x={100} y={row.y} size={17} fill={row.color} script anchor="start">
              {t(row.en, row.hi)}
            </T>
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
