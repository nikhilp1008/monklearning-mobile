/**
 * M11 Ch08 · Section 3 — "The three rules that move sums around"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas.
 *
 * Beats (en [0, 5.38, 18.09, 28.67, 40.62, 59.31, 71.25, 90.11]):
 *  0 title (always-on) — "Sigma is shorthand for addition — with three algebra rules"
 *  1 Rule 1: split a sum of sums
 *  2 Rule 2: pull out a constant multiple
 *  3 Rule 3: sum of a constant
 *  4 numeric demo: Σ(2k-1), k=1..4, built expand->substitute->add->16
 *  5 explicit vs recursive one-liner
 *  6 red-margin: a rule must hold for ALL n
 *  7 closer: constant differences -> linear, constant ratios -> GP
 *
 * Layout plan:
 *  b1 | label bl100 cx540 · formula bl134 cx540
 *  b2 | label bl170 cx540 · formula bl204 cx540
 *  b3 | label bl240 cx540 · formula bl274 cx540
 *  (shared bounds note bl300 cx540)
 *  b4 | caption bl330 cx540 · Σ(2k-1) bl372 cx220 · "(k=1..4)" bl392 cx220 ·
 *       "= 1+3+5+7" bl372 cx560 · "= 16" stamp chip x760..900 y350..394
 *  b5 | text bl425 cx540
 *  b6 | red bar x76 y445..501 · text bl465/bl491 x96
 *  b7 | text bl545 cx540
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  GREEN_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={INK} anchor="middle" script>
          {t(
            "Sigma is shorthand for addition — with three algebra rules",
            "Sigma addition ka shorthand hai — teen algebra rules ke saath"
          )}
        </T>
      </Fade>

      {/* beat 1 — Rule 1: split a sum of sums */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("Rule 1 — split a sum of sums", "Rule 1 — sum ka sum split karo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={540} y={134} size={17} fill={INK} anchor="middle">
          {"Σ(a_k + b_k) = Σa_k + Σb_k"}
        </T>
      </Fade>

      {/* beat 2 — Rule 2: pull out a constant */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={170} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("Rule 2 — pull out a constant", "Rule 2 — constant ko bahar nikalo")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={204} size={17} fill={INK} anchor="middle">
          {"Σ c·a_k = c·Σa_k"}
        </T>
      </Fade>

      {/* beat 3 — Rule 3: sum of a constant */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={240} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("Rule 3 — sum of a constant", "Rule 3 — ek constant ka sum")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={540} y={274} size={17} fill={INK} anchor="middle">
          {"Σ c = c·n"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={300} size={12} fill={MUTED} anchor="middle">
          {t("(all three sums: k = 1 to n)", "(teeno sums: k = 1 se n tak)")}
        </T>
      </Fade>

      {/* beat 4 — numeric demo, built live: expand, substitute, add */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={330} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("expand, substitute, add", "expand, substitute, add karo")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={220} y={372} size={18} fill={INK} anchor="middle">{"Σ(2k - 1)"}</T>
        <T x={220} y={392} size={12} fill={MUTED} anchor="middle">{t("(k = 1 to 4)", "(k = 1 se 4 tak)")}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={560} y={372} size={18} fill={INK} anchor="middle">{"= 1 + 3 + 5 + 7"}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Chip x={760} y={350} w={140} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={19}>
          {"= 16"}
        </Chip>
      </Fade>

      {/* beat 5 — explicit vs recursive */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={425} size={15} fill={INK} anchor="middle" script>
          {t(
            "Explicit rule gives a_n directly; recursive rule needs seeds.",
            "Explicit rule seedha a_n deta hai; recursive rule ko seeds chahiye."
          )}
        </T>
      </Fade>

      {/* beat 6 — red-margin: must hold for ALL n */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 445 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={465} size={15} fill={RED} anchor="start" script>
          {t("a rule must hold for ALL n —", "rule sabhi n ke liye hold karna chahiye —")}
        </T>
        <T x={96} y={491} size={15} fill={RED} anchor="start" script>
          {t("three matching terms is only a conjecture", "teen matching terms sirf ek conjecture hai")}
        </T>
      </Fade>

      {/* beat 7 — closer: how to classify a pattern */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={545} size={14} fill={INK} anchor="middle" script>
          {t(
            "to find a_n from a pattern: constant differences → linear; constant ratios → GP",
            "pattern se a_n nikalne ke liye: constant differences → linear; constant ratios → GP"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
