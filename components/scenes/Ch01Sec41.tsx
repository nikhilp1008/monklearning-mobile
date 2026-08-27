/**
 * Ch01 · Section 41 — "Example 1 [CBSE]: five readings of a pendulum's period"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.3, 31.7, 49.0, 61.6, 86.4, 109.2, 127.5]):
 *  0 tag + question card + the five readings row
 *  1 STEP 1 chip: the mean
 *  2 ΣT = 12.75 → T̄ = 2.55 s
 *  3 STEP 2 chip: each |T̄ − Tᵢ|
 *  4 the error row fills in, one cell at a time (0.00 lands on the mean)
 *  5 STEP 3: ΔT̄ = 0.10/5 = 0.02 s
 *  6 STEP 4: relative 0.0078 → 0.78 %
 *  7 the ± report chip
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..280 y40..78 · card x140..940 y92..152 · question bl 130
 *  b0 | readings row bl 192: header x70 st · cells (sans 17) x180+150i
 *  b1 | chip x60..220 y224..262
 *  b2 | line (sans 18) x300 st bl 250
 *  b3 | chip x60..280 y292..330 · note (script 13) x640 st bl 318
 *  b4 | error row bl 370: header x70 st · cells (sans 17, amber) x180+150i ·
 *       green mini note bl 396 under x630
 *  b5 | chip x60..260 y420..458 · line (sans 18) x300 st bl 446
 *  b6 | chip x60..260 y480..518 · line (sans 18) x300 st bl 506
 *  b7 | result chip x300..720 y540..584 · note (script 13, green) x750 st bl 568
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const READINGS = ["2.56", "2.54", "2.59", "2.55", "2.51"];
const ERRORS = ["0.01", "0.01", "0.04", "0.00", "0.04"];
const cellX = (i: number) => 180 + i * 150;

export default function Ch01Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the standard five-marker */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={220} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 1 · CBSE", "EXAMPLE 1 · CBSE")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 92 h 776 q 12 0 12 12 v 36 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={540} y={130} size={18} fill={INK} weight={700}>
          {t(
            "5 readings of a pendulum's period → mean, errors, and the report",
            "pendulum ke period ki 5 readings → mean, errors, aur report"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 13)}>
        <T x={70} y={192} size={14} fill={MUTED} anchor="start">
          Tᵢ (s)
        </T>
      </Fade>
      {READINGS.map((r, i) => (
        <Fade key={r + i} on={beat >= 0} delay={dl(0, 14 + i * 1.5)}>
          <T x={cellX(i)} y={192} size={17} fill={INK} weight={700}>
            {r}
          </T>
        </Fade>
      ))}

      {/* beat 1 — step one */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={60} y={224} w={160} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("1 · the mean", "1 · mean")}
        </Chip>
      </Fade>

      {/* beat 2 — the mean lands */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={300} y={250} size={18} fill={INK} weight={700} anchor="start">
          ΣT = 12.75  →  T̄ = 12.75 / 5 = 2.55 s
        </T>
      </Fade>

      {/* beat 3 — step two */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={60} y={292} w={220} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("2 · each |T̄ − Tᵢ|", "2 · har |T̄ − Tᵢ|")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={640} y={318} size={13} fill={MUTED} script anchor="start">
          {t("magnitudes — the sign is thrown away", "sirf magnitude — sign phenk do")}
        </T>
      </Fade>

      {/* beat 4 — the error row fills in */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={70} y={370} size={14} fill={MUTED} anchor="start">
          ΔTᵢ
        </T>
      </Fade>
      {ERRORS.map((e2, i) => (
        <Fade key={e2 + i} on={beat >= 4} delay={dl(4, 2 + i * 3.5)}>
          <T x={cellX(i)} y={370} size={17} fill={AMBER_DARK} weight={700}>
            {e2}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={cellX(3)} y={396} size={11} fill={GREEN} script>
          {t("landed on the mean!", "seedha mean par!")}
        </T>
      </Fade>

      {/* beat 5 — step three */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Chip x={60} y={420} w={200} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("3 · mean error", "3 · mean error")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={300} y={446} size={18} fill={INK} weight={700} anchor="start">
          ΣΔT = 0.10  →  ΔT̄ = 0.10 / 5 = 0.02 s
        </T>
      </Fade>

      {/* beat 6 — step four */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={60} y={480} w={200} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("4 · relative & %", "4 · relative & %")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={300} y={506} size={18} fill={INK} weight={700} anchor="start">
          0.02 / 2.55 = 0.0078  →  0.78 %
        </T>
      </Fade>

      {/* beat 7 — the honest report */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={300} y={540} w={420} h={44} fill={INK} textFill={CREAM} size={18} script={false}>
          T = 2.55 ± 0.02 s   (0.78 %)
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={750} y={568} size={13} fill={GREEN} script anchor="start">
          {t("together = one honest measurement", "saath mein = ek imaandaar measurement")}
        </T>
      </Fade>
    </Scene>
  );
}
