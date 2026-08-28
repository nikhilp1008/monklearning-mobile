/**
 * Ch09 · Section 84 — "Pitfalls and pro-tips: surface tension" (tips recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 9.47, 25.34, 40.11, 53.85, 54.85, 55.85]):
 *  1 red: a soap bubble has two surfaces — excess 4S/r, not 2S/r
 *  2 amber: Jurin — rise goes as 1/r; narrower tubes rise higher
 *  3 amber: acute angle wets and rises; obtuse does not and is depressed
 *  4 red: tube radius is not the meniscus radius unless angle is zero
 *  5 amber: before any calculation — how many surfaces, and is the angle zero?
 *  6 red: for ratios, both excess pressure and rise go as 1/r
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

export default function Ch09Sec84({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; en: string; hi: string }[] = [
    {
      y: 130,
      color: RED,
      en: "a soap bubble has two surfaces — excess 4S/r, not 2S/r",
      hi: "soap bubble ke do surfaces — excess 4S/r, 2S/r nahi",
    },
    {
      y: 205,
      color: AMBER_DARK,
      en: "Jurin: rise goes as 1/r — narrower tubes rise higher",
      hi: "Jurin: rise 1/r ki tarah jaati — narrow tubes zyada rise",
    },
    {
      y: 280,
      color: AMBER_DARK,
      en: "acute angle wets and rises; obtuse doesn't and is depressed",
      hi: "acute angle wets aur rises; obtuse nahi aur depressed hota",
    },
    {
      y: 355,
      color: RED,
      en: "tube radius ≠ meniscus radius unless angle is zero",
      hi: "tube radius ≠ meniscus radius jab tak angle zero na ho",
    },
    {
      y: 430,
      color: AMBER_DARK,
      en: "before any calculation: how many surfaces, angle zero?",
      hi: "calculation se pehle: kitne surfaces, angle zero hai?",
    },
    {
      y: 505,
      color: RED,
      en: "for ratios, both excess pressure and rise go as 1/r",
      hi: "ratios ke liye, excess pressure aur rise dono 1/r jaate",
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
