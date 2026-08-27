/**
 * C11 Ch07 · Section 5 — "The master procedure & the peroxo trap (Caro's acid)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 5.89, 15.19, 23.38, 37.03, 48.98, 56.66, 75.69]):
 *  0 heading "solve for an unknown O.N. — five steps" (erases at beat5)
 *  1 Step 1 — write species + net charge
 *  2 Step 2 — plug in every known O.N. × count
 *  3 Step 3-4 — let unknown = x → charge-balance eqn → solve (watch signs)
 *  4 Step 5 — red-margin safety net: fractional/busts ceiling → check structure
 *  5 THE PEROXO TRAP tag: H₂SO₅ (Caro's acid) — erases beats 0-4
 *  6 naive calc: all 5 O at −2 → S = +8, crossed out (S max +6, impossible)
 *  7 correct: 3 O(−2) + 2 O(−1 peroxide) → S = +6 ✓, boxed
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | "1 · write species..."    | T st | x64 bl110
 *  b2 | "2 · plug in..."          | T st | x64 bl160
 *  b3 | "3-4 · let x..." 2-line   | T st | x64 bl210/242
 *  b4 | margin bar + "5 · ..."    | Draw+T| x64 y270..310, text bl294
 *  b5 | trap tag chip             | Chip | x64..584 y100..146
 *  b6 | header + eqn + result×    | T st | x64 bl185/222/262, note x280 bl262
 *  b7 | header + 2 chips + eqn + result box + closer | x64 bl325, chips y345 x64/300,
 *     | eqn bl418, result bl460 (ringed), closer bl496
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("when the answer breaks a ceiling, trust the structure", "jab answer ceiling todta hai, structure par trust karo")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading (erases at beat 5) ===== */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.3)}>
        <T x={540} y={108} size={17} fill={MUTED} script>
          {t("solve for an unknown O.N. — five steps", "unknown O.N. solve karo — paanch steps")}
        </T>
      </Fade>

      {/* ===== steps 1-5 (erase at beat 5) ===== */}
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.3)}>
        <T x={64} y={110} size={18} fill={INK} weight={700} anchor="start">
          {t("1 · write species + net charge", "1 · species + net charge likho")}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.3)}>
        <T x={64} y={160} size={18} fill={INK} weight={700} anchor="start">
          {t("2 · plug in every known O.N. × count", "2 · har known O.N. × count plug karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.3)}>
        <T x={64} y={210} size={18} fill={INK} weight={700} anchor="start">
          {t("3-4 · let unknown = x → charge-balance eqn", "3-4 · unknown = x → charge-balance eqn")}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 1.2)}>
        <T x={64} y={242} size={15} fill={MUTED} anchor="start">
          {t("solve — watch the signs, marks leak here", "solve karo — signs dekho, yahin marks leak hote hain")}
        </T>
      </Fade>
      <Draw on={beat >= 4 && beat < 5} delay={dl(4, 0.2)} d="M 64 270 L 64 310" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.7)}>
        <T x={80} y={294} size={17} fill={RED} script anchor="start">
          {t("5 · fractional or busts ceiling? → check structure", "5 · fractional ya ceiling se upar? → structure check karo")}
        </T>
      </Fade>

      {/* ===== beat 5 — peroxo trap tag (stays) ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={64} y={100} w={520} h={46} fill={CREAM} stroke={AMBER} textFill={INK} size={19}>
          {t("THE PEROXO TRAP — H₂SO₅ (Caro's acid)", "THE PEROXO TRAP — H₂SO₅ (Caro's acid)")}
        </Chip>
      </Fade>

      {/* ===== beat 6 — naive calc, wrong (stays) ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={64} y={185} size={18} fill={INK} weight={700} anchor="start">
          {t("blindly: all 5 O at −2", "blindly: saare 5 O ko −2 maano")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={64} y={222} size={20} fill={INK} anchor="start">
          2(+1) + S + 5(−2) = 0
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={64} y={262} size={24} fill={RED} weight={800} anchor="start">
          {t("→ S = +8", "→ S = +8")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.5)}
        d="M 60 233 L 176 267 M 176 233 L 60 267"
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.1)}>
        <T x={280} y={262} size={16} fill={RED} anchor="start">
          {t("S max = +6 — impossible ✗", "S max = +6 — impossible ✗")}
        </T>
      </Fade>

      {/* ===== beat 7 — correct structure fix (stays) ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={64} y={325} size={18} fill={GREEN} weight={700} anchor="start">
          {t("structure: ONE peroxide link", "structure: EK hi peroxide link")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={64} y={345} w={220} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15}>
          {t("3 × O (−2) normal", "3 × O (−2) normal")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Chip x={300} y={345} w={240} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          {t("2 × O (−1) peroxide", "2 × O (−1) peroxide")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={64} y={418} size={20} fill={INK} anchor="start">
          2(+1) + S + 3(−2) + 2(−1) = 0
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={64} y={460} size={26} fill={GREEN} weight={800} anchor="start">
          {t("S = +6 ✓", "S = +6 ✓")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 3.6)}
        d={ringD(105, 452, 60, 26)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={64} y={506} size={15} fill={MUTED} script anchor="start">
          {t("the rule never failed — the assumption did", "rule kabhi fail nahi hua — assumption hua")}
        </T>
      </Fade>
    </Scene>
  );
}
