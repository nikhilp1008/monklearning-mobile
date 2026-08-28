/**
 * Ch09 · Section 57 — "Pitfalls and pro-tips: viscosity" (tips recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.55, 18.09, 34.65, 46.08, 47.08, 48.08]):
 *  1 red: liquids get less viscous when heated; gases get more
 *  2 amber: terminal velocity goes as r², not r or r³
 *  3 amber: the driving term is the density difference, not the body alone
 *  4 red: for a bubble the term is negative, so it rises
 *  5 amber: 1 poise = 0.1 Pa·s — convert before substituting
 *  6 red: write the three-force balance as your first line
 *
 * Layout plan — six rows, coloured bar + text, baselines 75px apart:
 *  b1 | bar (red) + text (17)   | Draw+T | x80 y112..138 · bl 130
 *  b2 | bar (amber-dk) + text   | Draw+T | x80 y187..213 · bl 205
 *  b3 | bar (amber-dk) + text   | Draw+T | x80 y262..288 · bl 280
 *  b4 | bar (red) + text        | Draw+T | x80 y337..363 · bl 355
 *  b5 | bar (amber-dk) + text   | Draw+T | x80 y412..438 · bl 430
 *  b6 | bar (red) + text        | Draw+T | x80 y487..513 · bl 505
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; en: string; hi: string }[] = [
    {
      y: 130,
      color: RED,
      en: "liquids get less viscous when heated; gases get more",
      hi: "liquids heat karne se less viscous ho jaate; gases zyada",
    },
    {
      y: 205,
      color: AMBER_DARK,
      en: "terminal velocity goes as r², not r or r³",
      hi: "terminal velocity r² ki tarah jaati, r ya r³ nahi",
    },
    {
      y: 280,
      color: AMBER_DARK,
      en: "the driving term is the density difference, not the body alone",
      hi: "driving term density difference hai, sirf body nahi",
    },
    {
      y: 355,
      color: RED,
      en: "for a bubble the term is negative, so it rises",
      hi: "bubble ke liye term negative hota, isliye woh rises hota",
    },
    {
      y: 430,
      color: AMBER_DARK,
      en: "1 poise = 0.1 Pa·s — convert before substituting",
      hi: "1 poise = 0.1 Pa·s — substitute karne se pehle convert karo",
    },
    {
      y: 505,
      color: RED,
      en: "write the three-force balance as your first line",
      hi: "three-force balance ko apni first line likho",
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
