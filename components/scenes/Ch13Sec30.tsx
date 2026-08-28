/**
 * Ch13 · Section 30 — "Worked example (NEET): pendulum in a descending lift"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.95, 17.79, 30.67, 40.89, 58.68, 69.66, 84.81]):
 *  0 shelf
 *  1 given: T=2s stationary, lift descends at (3/4)g · find T'
 *  2 trap (high): downward accel ⇒ lighter ⇒ g_eff DECREASES
 *  3 g_eff = g − (3/4)g = (1/4)g
 *  4 hero (high): T'/T = √(g/g_eff) = 2 ⇒ T' = 4 s
 *  5 ratio form: length L cancels
 *  6 sanity check (high): free fall (a=g) ⇒ g_eff=0 ⇒ T'→∞
 *  7 closing: answer approaches that limit correctly
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size13 · st x70 bl142 size13
 *  b2 | st x70 bl180 size13 red
 *  b3 | st x70 bl218 size14
 *  b4 | box x70..470 y240..295 rx14 · line cx270 bl273 size17
 *  b5 | script12 st x70 bl335
 *  b6 | script13 st x70 bl375 amber
 *  b7 | script12 st x70 bl415
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t("A lighter bob means a longer period", "Halka bob matlab lamba period")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          T = 2s (stationary) , lift descends at (3/4)g
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={142} size={13} fill={INK} anchor="start" weight={700}>
          {t("find: T'", "nikaalo: T'")}
        </T>
      </Fade>

      {/* beat 2 — the trap, high emphasis */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={180} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "✗ trap: downward accel ⇒ LIGHTER ⇒ g_eff DECREASES",
            "✗ trap: neeche accel ⇒ HALKA ⇒ g_eff GHATTA hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — compute effective gravity */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={218} size={14} fill={INK} anchor="start" weight={700}>
          g_eff = g − (3/4)g = (1/4)g
        </T>
      </Fade>

      {/* beat 4 — the hero result via ratio */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 240 h 372 q 14 0 14 14 v 27 q 0 14 -14 14 h -372 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={270} y={273} size={17} fill={INK} weight={800}>
          T'/T = √(g/g_eff) = √4 = 2 ⇒ T' = 4 s
        </T>
      </Fade>

      {/* beat 5 — why the ratio form is smart */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={335} size={12} fill={INK} script anchor="start">
          {t(
            "ratio form: length L cancels, only g-ratio matters",
            "ratio form: length L cancel ho jaati hai, sirf g-ratio matter karta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the sanity check, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={375} size={13} fill={AMBER_DARK} script anchor="start">
          sanity check: free fall (a=g) ⇒ g_eff=0 ⇒ T'→∞
        </T>
      </Fade>

      {/* beat 7 — the closing confirmation */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={415} size={12} fill={INK} script anchor="start">
          {t(
            "answer correctly approaches that limit as descent grows",
            "answer sahi tarah us limit ki taraf badhta hai jaise descent badhta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
