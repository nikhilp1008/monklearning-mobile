/**
 * Ch09 · Section 68 — "Pitfalls and pro-tips: Poiseuille flow" (tips recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.4, 19.71, 31.57, 42.58, 43.58, 44.58]):
 *  1 red: flow goes as radius to the fourth, not r² or r³
 *  2 amber: series — resistances add. parallel — reciprocals add
 *  3 amber: Poiseuille holds for laminar flow only; check the Reynolds number
 *  4 amber: mean speed is half the maximum; use the mean for flow rate
 *  5 red: lean on ratios — Q goes as ΔPr⁴/ηl
 *  6 red: pressure is voltage, flow is current, R = 8ηl/πr⁴
 *
 * Layout plan — six rows, coloured bar + text, baselines 75px apart:
 *  b1 | bar (red) + text (17)   | Draw+T | x80 y112..138 · bl 130
 *  b2 | bar (amber-dk) + text   | Draw+T | x80 y187..213 · bl 205
 *  b3 | bar (amber-dk) + text   | Draw+T | x80 y262..288 · bl 280
 *  b4 | bar (amber-dk) + text   | Draw+T | x80 y337..363 · bl 355
 *  b5 | bar (red) + text        | Draw+T | x80 y412..438 · bl 430
 *  b6 | bar (red) + text        | Draw+T | x80 y487..513 · bl 505
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; en: string; hi: string }[] = [
    {
      y: 130,
      color: RED,
      en: "flow goes as radius to the fourth, not r² or r³",
      hi: "flow radius ki fourth power ki tarah jaata, r² ya r³ nahi",
    },
    {
      y: 205,
      color: AMBER_DARK,
      en: "series: resistances add. parallel: reciprocals add",
      hi: "series: resistances add. parallel: reciprocals add",
    },
    {
      y: 280,
      color: AMBER_DARK,
      en: "Poiseuille holds only for laminar flow — check Re",
      hi: "Poiseuille sirf laminar flow ke liye — Re check karo",
    },
    {
      y: 355,
      color: AMBER_DARK,
      en: "mean speed is half the maximum — use mean for flow rate",
      hi: "mean speed maximum ka half hoti — flow rate ke liye mean use karo",
    },
    {
      y: 430,
      color: RED,
      en: "lean on ratios: Q goes as ΔPr⁴/ηl",
      hi: "ratios pe rely karo: Q ΔPr⁴/ηl ki tarah jaata",
    },
    {
      y: 505,
      color: RED,
      en: "pressure is voltage, flow is current, R = 8ηl/πr⁴",
      hi: "pressure voltage hai, flow current hai, R = 8ηl/πr⁴",
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
