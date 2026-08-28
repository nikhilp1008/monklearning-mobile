/**
 * Ch09 · Section 86 — "Chapter cheat sheet"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 * Final section of the chapter — one red-margin takeaway per subtopic.
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 12.3, 22.8, 29.88, 37.56]):
 *  1 pressure is a scalar; deeper is denser × g × depth
 *  2 buoyancy belongs to the fluid; sink if denser, float if lighter
 *  3 liquid lags and rises at the rear; free fall, no pressure
 *  4 fast and low, slow and high; continuity first, Bernoulli second
 *  5 terminal velocity goes as r²; liquids loosen, gases gum up
 *  6 flow goes as radius to the fourth; add resistances in series
 *  7 bubble is 4, drop is 2; narrow tube, high climb
 *
 * Layout plan — seven rows, red bar + text, baselines ~65px apart:
 *  b1 | bar (red) + text (16)  | Draw+T | x80 y107..131 · bl 125
 *  b2 | bar (red) + text       | Draw+T | x80 y172..196 · bl 190
 *  b3 | bar (red) + text       | Draw+T | x80 y237..261 · bl 255
 *  b4 | bar (red) + text       | Draw+T | x80 y302..326 · bl 320
 *  b5 | bar (red) + text       | Draw+T | x80 y367..391 · bl 385
 *  b6 | bar (red) + text       | Draw+T | x80 y432..456 · bl 450
 *  b7 | bar (red) + text       | Draw+T | x80 y497..521 · bl 515
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec86({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; en: string; hi: string }[] = [
    {
      y: 125,
      en: "pressure is a scalar; deeper is denser × g × depth",
      hi: "pressure scalar hai; deeper is denser × g × depth",
    },
    {
      y: 190,
      en: "buoyancy belongs to the fluid; sink if denser, float if lighter",
      hi: "buoyancy fluid ki hai; denser toh sink, lighter toh float",
    },
    {
      y: 255,
      en: "liquid lags and rises at the rear; free fall, no pressure",
      hi: "liquid lag karta, rear mein rises hota; free fall, no pressure",
    },
    {
      y: 320,
      en: "fast and low, slow and high; continuity first, Bernoulli second",
      hi: "fast aur low, slow aur high; pehle continuity, phir Bernoulli",
    },
    {
      y: 385,
      en: "terminal velocity goes as r²; liquids loosen, gases gum up",
      hi: "terminal velocity r² jaati; liquids loosen, gases gum up hote",
    },
    {
      y: 450,
      en: "flow goes as radius to the fourth; add resistances in series",
      hi: "flow radius ki fourth power jaata; series mein resistances add",
    },
    {
      y: 515,
      en: "bubble is 4, drop is 2; narrow tube, high climb",
      hi: "bubble 4 hai, drop 2; narrow tube, high climb",
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("chapter cheat sheet", "chapter cheat sheet")}
        </T>
      </Fade>

      {rows.map((row, i) => (
        <React.Fragment key={row.y}>
          <Draw
            on={beat >= i + 1}
            delay={dl(i + 1, 0)}
            d={`M 80 ${row.y - 18} L 80 ${row.y + 8}`}
            stroke={RED}
            sw={3.2}
            dur={0.4}
          />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.4)}>
            <T x={100} y={row.y} size={16} fill={RED} script anchor="start">
              {t(row.en, row.hi)}
            </T>
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
