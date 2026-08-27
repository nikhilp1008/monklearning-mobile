/**
 * M11 Ch14 · Section 32 — "Two more languages for chance: odds and empirical"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept. Reuses the split-bar
 * motif from Sec30 for odds (m:n splits the SAME whole into two parts,
 * visually distinct from favourable/total).
 *
 * Beats (board_reveal_at_english [0,10.58,23.98,35.41,47.7,62.38,73.9,82.26]):
 *  0 heading
 *  1 ODDS compare favourable to unfavourable, not favourable to total
 *  2 formula + bar: odds in favour = m:n (illustrated 3:2) ⇒ P = m/(m+n)
 *  3 odds against = n:m — same P, favourable still m
 *  4 (HIGH) GUARDRAIL: m:n are TWO PARTS, denominator is m+n not n
 *  5 EMPIRICAL probability: no theory, just observed frequency
 *  6 formula: P(E) ≈ (times E occurred)/(total trials), e.g. 37/50
 *  7 GUARDRAIL: large trials → empirical settles toward classical value
 *
 * Layout plan (odds bar x190..890 y175..219; longer language counts):
 *  b1 | sentence (16, ink)                          | T mid | x180..900 y128..144
 *  b2 | "odds in favour = 3:2" (15) + bar + "P=3/5" (18)| T/Fade| y158 / y175..219 / y248
 *  b3 | sentence (15, ink)                              | T mid | y278
 *  b4 | guardrail chip (red, w780 h44)                     | Chip  | x150..930 y300..344
 *  b5 | sentence (16, ink)                                   | T mid | y378
 *  b6 | formula (16) + example (14, muted)                     | T mid | y408 / y428
 *  b7 | guardrail chip (red, w800 h44)                           | Chip  | x140..940 y450..494
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch14Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const barX = 190;
  const barW = 700;
  const barY = 175;
  const barH = 44;
  const mW = (barW * 3) / 5;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("odds split the same whole — denominator is m+n, never n", "odds ek hi whole ko split karte hain — denominator m+n hai, n nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("Two more languages for chance: odds & empirical", "Chance ki do aur languages: odds & empirical")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={136} size={16} fill={INK} weight={600}>
          {t("ODDS compare favourable to unfavourable, not favourable to total", "ODDS favourable ko unfavourable se compare karte hain, total se nahi")}
        </T>
      </Fade>

      {/* beat 2 — odds bar, m:n = 3:2 illustrative */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={160} size={14} fill={MUTED}>
          {t("odds in favour = 3 : 2", "odds in favour = 3 : 2")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Rect x={barX} y={barY} width={mW} height={barH} fill={GREEN} opacity={0.55} />
        <T x={barX + mW / 2} y={barY + barH / 2 + 6} size={15} fill={INK} weight={800}>
          {t("m = 3 (favourable)", "m = 3 (favourable)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Rect x={barX + mW} y={barY} width={barW - mW} height={barH} fill={RED} opacity={0.4} />
        <T x={barX + mW + (barW - mW) / 2} y={barY + barH / 2 + 6} size={15} fill={INK} weight={800}>
          {t("n = 2", "n = 2")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={540} y={248} size={18} fill={GREEN} weight={800}>
          {"P = m/(m+n) = 3/5"}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={278} size={15} fill={INK} weight={600}>
          {t("odds against = 2 : 3 — same P, favourable still m", "odds against = 2 : 3 — P wahi, favourable ab bhi m")}
        </T>
      </Fade>

      {/* beat 4 — GUARDRAIL, HIGH */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={150} y={302} w={780} h={44} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("m:n are the TWO PARTS — denominator is m+n, not n", "m:n DONO parts hain — denominator m+n hai, n nahi")}
        </Chip>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={382} size={16} fill={INK} weight={700}>
          {t("EMPIRICAL (experimental) probability: no theory, just observed frequency", "EMPIRICAL (experimental) probability: theory nahi, sirf observed frequency")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={412} size={16} fill={INK} weight={700}>
          {t("P(E) ≈ (times E occurred) / (total trials)", "P(E) ≈ (E kitni baar hua) / (total trials)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={540} y={434} size={13} fill={MUTED}>
          {t("e.g. 37 heads in 50 tosses → P(H) ≈ 37/50", "jaise 50 tosses mein 37 heads → P(H) ≈ 37/50")}
        </T>
      </Fade>

      {/* beat 7 — GUARDRAIL */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={140} y={456} w={800} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("large trials → empirical settles toward the classical value", "bade trials → empirical classical value ki taraf settle hota hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
