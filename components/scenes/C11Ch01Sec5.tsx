/**
 * C11 Ch01 · Section 5 — "Worked examples: classifying matter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,13.31,26.2,38.74,48.73,67.76,78.94,92.93]):
 *  0 Example 1 (CBSE) given: classify brass/ozone/baking soda/sea water
 *  1 brass → homogeneous mixture (alloy = variable ratio)
 *  2 ozone → element (one atom type, count doesn't matter)
 *  3 baking soda → compound (fixed ratio, 4 elements combined)
 *  4 sea water → homogeneous mixture + the deciding question recap
 *  (example 1 dims at beat 5, freeing the board for example 2)
 *  5 Example 2 (NEET) given: which is NOT a mixture — air/gasoline/diamond/bronze
 *  6 work all four → diamond is the answer (pure element)
 *  7 guardrail: the trap is set by appearance — count substance-types, not looks
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script16 ink)         | T st  | x90  y90  [dims@b5]
 *  b1 | "brass" label (17 ink)       | T st  | x90  y130
 *  b1 | verdict chip (15)            | Chip  | x380..650 y105..139
 *  b1 | reasoning (12 muted)         | T st  | x90  y154
 *  b2 | "ozone (O₃)" / chip / reason | —     | y195/170..204/219
 *  b3 | "baking soda" / chip / reason| —     | y260/235..269/284
 *  b4 | "sea water" / chip / reason  | —     | y325/300..334/349
 *  b5 | given 2 (script16 ink)       | T st  | x90  y110
 *  b6 | 4 option chips (2×2, 14)     | Chip  | y170 x190../500..; y220 x170../550..
 *  b6 | answer chip (16, green)      | Chip  | x380..700 y255..295
 *  b7 | guardrail l1 (script16 red)  | T mid | x540  y325
 *  b7 | guardrail l2 (12 muted)      | T mid | x540  y349
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const ROWS_EX1: [string, string, string, string, string][] = [
  ["brass", "homogeneous mixture", "alloy → variable ratio ⇒ mixture, not compound", "alloy → badalta ratio ⇒ mixture, compound nahi", ""],
  ["ozone (O₃)", "element", "only ONE atom type (oxygen) — count doesn't matter", "sirf EK atom type (oxygen) — count matter nahi karta", ""],
  ["baking soda", "compound", "Na, H, C, O — chemically combined, fixed ratio", "Na, H, C, O — chemically combined, fixed ratio", ""],
  ["sea water", "homogeneous mixture", "dissolved salts, variable amount, uniform look", "ghule salts, badalti matra, uniform dikhta", ""],
];

export default function C11Ch01Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={25} fill={RED} script>
          {t("worked examples: classifying matter", "worked examples: matter classify karna")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given (CBSE); fully removed (not dimmed) once
          Example 2 takes over the board at beat 5, so beat 5+ has genuinely
          free space rather than new content sitting over faded-but-present text */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.4)}>
        <T x={90} y={90} size={16} fill={INK} script anchor="start">
          {t(
            "Example 1 (CBSE): classify — brass · ozone · baking soda · sea water",
            "Example 1 (CBSE): classify karo — brass · ozone · baking soda · samundar ka paani"
          )}
        </T>
      </Fade>

      {/* beats 1–4 — the four rows, built one at a time */}
      {ROWS_EX1.map(([label, verdict, reasonEn, reasonHi], i) => {
        const k = i + 1;
        const rowY = [130, 195, 260, 325][i];
        return (
          <React.Fragment key={label}>
            <Fade on={beat >= k && beat < 5} delay={dl(k, 0.3)}>
              <T x={90} y={rowY} size={17} fill={INK} weight={700} anchor="start">
                {label}
              </T>
            </Fade>
            <Fade on={beat >= k && beat < 5} delay={dl(k, 1)}>
              <Chip
                x={380}
                y={rowY - 25}
                w={270}
                h={34}
                fill={CREAM}
                stroke={AMBER_DARK}
                textFill={INK}
                size={15}
                script={false}
              >
                {verdict}
              </Chip>
            </Fade>
            <Fade on={beat >= k && beat < 5} delay={dl(k, 1.8)}>
              <T x={90} y={rowY + 24} size={12} fill={MUTED} script anchor="start">
                {t(reasonEn, reasonHi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 5 — Example 2 given (NEET speed trap) */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={90} y={110} size={16} fill={INK} script anchor="start">
          {t(
            "Example 2 (NEET): which is NOT a mixture — air, gasoline, diamond, bronze?",
            "Example 2 (NEET): kaunsa mixture NAHI hai — air, gasoline, diamond, bronze?"
          )}
        </T>
      </Fade>

      {/* beat 6 — work all four, diamond is the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={190} y={170} w={220} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("air = mixture (gases)", "air = mixture (gases)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={500} y={170} w={300} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("gasoline = mixture (hydrocarbons)", "gasoline = mixture (hydrocarbons)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={170} y={215} w={260} h={32} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          {t("diamond = ELEMENT (pure C)", "diamond = ELEMENT (pure C)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={550} y={215} w={200} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("bronze = mixture (alloy)", "bronze = mixture (alloy)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <Chip x={380} y={258} w={320} h={38} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t("answer: diamond — a single element", "answer: diamond — ek hi element")}
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: the trap is set by appearance */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={325} size={16} fill={RED} script>
          {t("the trap is set by appearance", "trap dikhaave se bichaya gaya hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={349} size={12} fill={MUTED} script>
          {t(
            "ignore looks — count how many kinds of substance are present",
            "shakal bhool jao — sirf substance types ginno"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
