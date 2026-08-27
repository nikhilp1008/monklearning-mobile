/**
 * C11 Ch09 · Section 10 — "Preparing alkanes I: hydrogenation and reduction"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.57, 16.61, 23.81, 30.36, 40.85, 48.26, 53.81]):
 *  0 heading: 4 routes, start with 2 · 1 (a) hydrogenation label ·
 *  2 CH2=CH2 + H2 --Pt/Pd/Ni--> CH3-CH3 · 3 metal adsorbs H2, activates H-H
 *  · 4 Pt/Pd room temp; Ni needs heat+pressure · 5 (b) reduction label ·
 *  6 R-X + 2[H] --Zn,dil.HCl--> R-H + HX · 7 RED: not the fluoride
 *
 * Layout plan — two reaction rows:
 *  b1 | "(a) Hydrogenation"    | T st  | x60 y120
 *  b2 | reaction arrow row A   | Draw+T| x150..500 y160
 *  b3 | adsorb note            | T mid | y205
 *  b4 | Pt/Pd vs Ni note       | T mid | y235
 *  b5 | "(b) Reduction…"       | T st  | x60 y310
 *  b6 | reaction arrow row B   | Draw+T| x150..500 y350
 *  b7 | margin bar + red note  | Draw+T| bar x60 y400..436 · text bl420
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Draw,
  INK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("preparing alkanes I: hydrogenation and reduction", "alkanes banana I: hydrogenation aur reduction")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={100} size={16} fill={INK} weight={700}>
          {t("four reliable routes — start with two", "chaar reliable routes — do se shuru")}
        </T>
      </Fade>

      {/* beat 1 — route a label */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={140} size={17} fill={INK} weight={800} anchor="start">
          {t("(a) Hydrogenation", "(a) Hydrogenation")}
        </T>
      </Fade>

      {/* beat 2 — the equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={175} y={185} size={17} fill={INK} weight={700} anchor="start">
          CH2=CH2 + H2
        </T>
      </Fade>
      <ReactionArrow on={beat >= 2} delay={dl(2, 1.1)} x1={370} x2={500} y={180} over={t("Pt/Pd/Ni", "Pt/Pd/Ni")} color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={520} y={185} size={17} fill={INK} weight={700} anchor="start">
          CH3–CH3
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={230} size={15} fill={INK}>
          {t("metal surface adsorbs H2 and activates the H–H bond", "metal surface H2 ko adsorb karti aur H–H bond activate karti")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={260} size={15} fill={INK}>
          {t("Pt/Pd work at room temperature; Ni needs heat and pressure", "Pt/Pd room temperature pe kaam karte; Ni ko heat aur pressure")}
        </T>
      </Fade>

      {/* beat 5 — route b label */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={330} size={17} fill={INK} weight={800} anchor="start">
          {t("(b) Reduction of alkyl halides", "(b) Alkyl halides ka reduction")}
        </T>
      </Fade>

      {/* beat 6 — the equation */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={175} y={375} size={17} fill={INK} weight={700} anchor="start">
          R–X + 2[H]
        </T>
      </Fade>
      <ReactionArrow on={beat >= 6} delay={dl(6, 1.1)} x1={340} x2={500} y={370} over={t("Zn, dil. HCl", "Zn, dil. HCl")} color={INK} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={520} y={375} size={17} fill={INK} weight={700} anchor="start">
          R–H + HX
        </T>
      </Fade>

      {/* beat 7 — not the fluoride */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 420 L 60 456" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={442} size={16} fill={RED} script anchor="start">
          {t(
            "not the fluoride — nascent hydrogen replaces the halogen",
            "fluoride nahi — nascent hydrogen halogen ko replace karta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
