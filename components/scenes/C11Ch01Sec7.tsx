/**
 * C11 Ch01 · Section 7 — "Pitfalls and the two-question filter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,6.83,20.82,38.91,56.07,70.32,90.8,105.99]):
 *  0 anchor: closing this subtopic with the mistakes that cost marks
 *  1 pitfall 1: homogeneous mixture ≈ compound? (fixed/chemical vs variable/physical)
 *  2 pitfall 2: classify by looks? (diamond/graphite, brass/copper) — no, composition
 *  3 pitfall 3: dissolving = chemical? physical, unless colour/gas is a real exception
 *  4 pitfall 4: dramatic = chemical? still physical — THE TEST recap
 *  5 the pro-tip: the two-question filter (boxed)
 *  6 two memory aids: fixed-or-free, looks-lie
 *  7 closing: qualitative picture complete — next, real numbers (units)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script16 ink)        | T mid | x540  y95
 *  b1-4 | mistake (13 red, start)    | T st  | x90   y130/168/206/244
 *  b1-4 | rule (13 green, start)     | T st  | x560  y130/168/206/244
 *  b5 | box (dashed amber, w500 h90) | Draw  | x290..790 y290..380
 *  b5 | title/Q1/Q2 inside           | T mid | x540  y315/340/365
 *  b6 | memory aid l1 (13 amber-drk) | T mid | x540  y412
 *  b6 | memory aid l2 (13 amber-drk) | T mid | x540  y452
 *  b7 | closing (script15 green)     | T mid | x540  y498
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [string, string, string, string][] = [
  [
    "homogeneous mixture ≈ compound?",
    "homogeneous mixture ≈ compound?",
    "compound = fixed + chemical split; mixture = variable + physical split",
    "compound = fixed + chemical split; mixture = variable + physical split",
  ],
  [
    "classify by LOOKS? (diamond/graphite, brass/copper)",
    "shakal se classify? (diamond/graphite, brass/copper)",
    "judge by composition, never appearance",
    "composition se socho, shakal se kabhi nahi",
  ],
  [
    "dissolving = chemical change?",
    "dissolving = chemical change?",
    "physical — unless colour/hydration or gas appears",
    "physical — jab tak rang/hydration ya gas na dikhe",
  ],
  [
    "dramatic = chemical? (boiling, sublimation, shattering)",
    "dramatic = chemical? (boiling, sublimation, todna)",
    "still physical — THE TEST: new substance formed?",
    "phir bhi physical — THE TEST: nayi substance bani?",
  ],
];

export default function C11Ch01Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={24} fill={RED} script>
          {t("pitfalls and the two-question filter", "pitfalls aur do-sawaal filter")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={16} fill={INK} script>
          {t(
            "closing this subtopic: the mistakes that cost marks",
            "is subtopic ko band karte hain un galtiyon se jo marks le jaati hain"
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

      {/* beat 5 — the pro-tip: two-question filter */}
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
          {t("THE TWO-QUESTION FILTER", "DO-SAWAAL FILTER")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={340} size={14} fill={AMBER_DARK} script>
          {t("1. fixed or variable composition?", "1. composition fixed ya variable?")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={540} y={365} size={14} fill={AMBER_DARK} script>
          {t("2. one substance, or many?", "2. ek substance, ya kayi?")}
        </T>
      </Fade>

      {/* beat 6 — two memory aids */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={412} size={13} fill={AMBER_DARK} script>
          {t(
            "fixed or free: FIXED = compound, FREE proportion = mixture",
            "fixed or free: FIXED = compound, FREE proportion = mixture"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={452} size={13} fill={AMBER_DARK} script>
          {t(
            "looks lie: classify by composition, not appearance",
            "shakal jhooth bolti hai: composition se socho"
          )}
        </T>
      </Fade>

      {/* beat 7 — closing: qualitative picture complete */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={498} size={15} fill={GREEN} script>
          {t(
            "qualitative picture complete — next: real numbers, starting with units",
            "qualitative tasveer poori — ab aage: real numbers, units se shuru"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
