/**
 * C11 Ch01 · Section 14 — "Pitfalls and unit-tracking as an error detector"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,7,23.64,39,56.24,68.78,90.63,107.61]):
 *  0 anchor: closing Part one with unit mistakes that quietly sink answers
 *  1 pitfall 1: forgetting to cube/square the conversion factor
 *  2 pitfall 2: conversion factor flipped upside down
 *  3 pitfall 3: wrong temperature offset / negative kelvin
 *  4 pitfall 4: confusing mass and weight
 *  5 the pro-tip: unit tracking = a free error detector (boxed)
 *  6 three memory aids
 *  7 closing: units are right — next, how many digits are trustworthy?
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script15 ink)        | T mid | x540  y95
 *  b1-4 | mistake (13 red, start)    | T st  | x90   y130/168/206/244
 *  b1-4 | rule (13 green, start)     | T st  | x560  y130/168/206/244
 *  b5 | box (dashed amber, w500h90)  | Draw  | x290..790 y290..380
 *  b5 | title/l1/l2 inside           | T mid | x540  y315/340/365
 *  b6 | aid l1/l2/l3 (13 amber-drk)  | T mid | x540  y400/424/448
 *  b7 | closing (script15 green)     | T mid | x540  y486
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [string, string, string, string][] = [
  [
    "forgetting to cube/square the conversion factor",
    "cube/square karna bhool jaana",
    "1 m³ = 10⁶ cm³, not 100 — raise to the unit's power",
    "1 m³ = 10⁶ cm³, 100 nahi — unit ki power tak uthao",
  ],
  [
    "conversion factor flipped upside down",
    "conversion factor ulta rakh diya",
    "units don't cancel? flip the fraction",
    "units cancel nahi hoti? fraction palato",
  ],
  [
    "wrong temperature offset / negative K reported",
    "galat temperature offset / negative K likha",
    "use 273.15 (round only if told) · K never negative",
    "273.15 use karo (round sirf jab kaha jaaye) · K kabhi negative nahi",
  ],
  [
    "confusing mass and weight",
    "mass aur weight ghulmul karna",
    "mass (kg) fixed · weight (N) depends on gravity",
    "mass (kg) fixed · weight (N) gravity par depend karta hai",
  ],
];

export default function C11Ch01Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} script>
          {t("pitfalls and unit-tracking as an error detector", "pitfalls aur unit-tracking as error detector")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} script>
          {t(
            "closing Part one with the unit mistakes that quietly sink correct answers",
            "Part one band karte hain un unit mistakes se jo chup-chaap sahi jawab doobo dete hain"
          )}
        </T>
      </Fade>

      {/* beats 1-4 — the four pitfalls, mistake vs correct rule */}
      {PITFALLS.map(([mEn, mHi, rEn, rHi], i) => {
        const k = i + 1;
        const rowY = [130, 168, 206, 244][i];
        return (
          <React.Fragment key={rowY}>
            <Fade on={beat >= k} delay={dl(k, 0.3)}>
              <T x={90} y={rowY} size={13} fill={RED} script anchor="start">
                ✗ {t(mEn, mHi)}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 1.2)}>
              <T x={560} y={rowY} size={13} fill={GREEN} script anchor="start">
                ✓ {t(rEn, rHi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 5 — the pro-tip: unit tracking as a free error detector */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M 306 290 h 468 q 16 0 16 16 v 58 q 0 16 -16 16 h -468 q -16 0 -16 -16 v -58 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={315} size={15} fill={INK} weight={700} script={false}>
          {t("UNIT TRACKING = A FREE ERROR DETECTOR", "UNIT TRACKING = EK FREE ERROR DETECTOR")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={340} size={13} fill={AMBER_DARK} script>
          {t(
            "carry units through the WHOLE calculation, not just at the end",
            "units ko POORI calculation mein saath rakho, sirf end mein nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={540} y={365} size={13} fill={AMBER_DARK} script>
          {t(
            "units don't simplify as expected? the mistake is already made",
            "units expected jaisi simplify nahi hoti? mistake pehle hi ho chuki"
          )}
        </T>
      </Fade>

      {/* beat 6 — three memory aids */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={400} size={13} fill={AMBER_DARK} script>
          {t(
            "cube the cube: volume conversions raise the factor to the 3rd power",
            "cube the cube: volume conversions factor ko 3rd power tak uthate hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={424} size={13} fill={AMBER_DARK} script>
          {t(
            "cancel to convert: orient factors so unwanted units vanish",
            "cancel to convert: factors ko aise rakho ki anchahi units gayab ho jaaye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={448} size={13} fill={AMBER_DARK} script>
          {t("kelvin never goes negative — your red flag", "kelvin kabhi negative nahi hota — tumhara red flag")}
        </T>
      </Fade>

      {/* beat 7 — closing: transition to Part two */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={486} size={15} fill={GREEN} script>
          {t(
            "units are right — but how many digits are trustworthy? next: uncertainty & significant figures",
            "units sahi hain — par kitne digits bharosemand hain? aage: uncertainty & significant figures"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
