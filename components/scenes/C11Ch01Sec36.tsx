/**
 * C11 Ch01 · Section 36 — "Pitfalls and the particle-comparison shortcut"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,5.8,24.58,36.1,53.25,69.21,88.33]):
 *  0 anchor: closing with the four mistakes that cost the most marks
 *  1 pitfall 1: confusing molecules with atoms
 *  2 pitfall 2: skipping the mole hub
 *  3 pitfall 3: average atomic mass treated as a real single atom
 *  4 pitfall 4: misapplying the molar volume
 *  5 the pro-tip: compare fractions, don't compute (boxed)
 *  6 four memory aids
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script15 ink)        | T mid | x540  y95
 *  b1-4 | mistake (13 red, start)    | T st  | x90   y130/168/206/244
 *  b1-4 | rule (13 green, start)     | T st  | x560  y130/168/206/244
 *  b5 | box (dashed amber, w500h90)  | Draw  | x290..790 y290..380
 *  b5 | title/l1/l2 inside           | T mid | x540  y315/340/365
 *  b6 | aid l1/l2/l3/l4 (13 amber)   | T mid | x540  y400/422/444/466
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [string, string, string, string][] = [
  [
    "confusing molecules with atoms?",
    "molecules aur atoms ko ghulmul karna?",
    "N₂: 1mol=Nₐ molecules but 2×Nₐ atoms — read the NOUN!",
    "N₂: 1mol=Nₐ molecules par 2×Nₐ atoms — NOUN padho!",
  ],
  [
    "skipping the mole hub?",
    "mole hub skip karna?",
    "NEVER leap grams→particles directly — land on MOLES first",
    "grams→particles seedha mat kudo — pehle MOLES par utro",
  ],
  [
    "average atomic mass = a real single atom?",
    "average atomic mass = ek real single atom?",
    "NO! a WEIGHTED AVERAGE — never use it in nuclear/single-atom contexts",
    "NAHI! ek WEIGHTED AVERAGE — nuclear/single-atom mein use mat karo",
  ],
  [
    "misapplying the molar volume?",
    "molar volume galat lagana?",
    "22.4L = gas @ STP ONLY — never liquids/solids, check WHICH STP",
    "22.4L = gas @ STP HI — liquids/solids kabhi nahi, WHICH STP check karo",
  ],
];

export default function C11Ch01Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("pitfalls and the particle-comparison shortcut", "pitfalls aur particle-comparison shortcut")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} script>
          {t(
            "closing with the four mistakes that cost the most marks",
            "un chaar mistakes ke saath band karte hain jo sabse zyada marks le jaati"
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

      {/* beat 5 — the pro-tip: compare fractions, don't compute */}
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
          {t("SPEED: COMPARE FRACTIONS, DON'T COMPUTE", "SPEED: FRACTIONS COMPARE KARO, COMPUTE NAHI")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={340} size={13} fill={AMBER_DARK} script>
          {t("write mass/M (× atomicity if atoms are wanted)", "mass/M likho (× atomicity agar atoms chahiye)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={540} y={365} size={13} fill={AMBER_DARK} script>
          {t("Nₐ cancels — you never need to touch it", "Nₐ cancel ho jaata — usse touch karne ki zaroorat nahi")}
        </T>
      </Fade>

      {/* beat 6 — four memory aids */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={400} size={13} fill={AMBER_DARK} script>
          {t(
            "everything passes through MOLES — convert first, always",
            "sab kuch MOLES se guzarta — pehle convert karo, hamesha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={422} size={13} fill={AMBER_DARK} script>
          {t("average = WEIGHTED (by abundance), never a plain mean", "average = WEIGHTED (abundance se), plain mean kabhi nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={444} size={13} fill={AMBER_DARK} script>
          vapour density × 2 = molar mass
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={540} y={466} size={13} fill={AMBER_DARK} script>
          {t(
            "22.4 L = a GAS-ONLY ticket — never solids or liquids",
            "22.4 L = ek GAS-ONLY ticket — solids/liquids ke liye kabhi nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
