/**
 * M11 Ch14 · Section 35 — "Worked example: forming a committee (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples. Numeric nCr
 * (⁹C₃, ⁴C₂, ⁵C₁) written as real super/subscript digits per the
 * Chapter 6-7 convention — non-script Anek text, since Kalam is missing
 * most subscript digits.
 *
 * Beats (board_reveal_at_english [0,9.05,18.69,29.87,42.84,54.27,63.15]):
 *  0 heading
 *  1 problem: 5 men, 4 women, committee of 3. Find P(exactly 2 women)
 *  2 GUARDRAIL: selection, order irrelevant → combinations throughout
 *  3 n(S) = ⁹C₃ = 9!/(3!6!) = 84
 *  4 (HIGH) n(E) = ⁴C₂ × ⁵C₁ = 6×5 = 30 — 2 women + 1 man ringed in diagram
 *  5 P(exactly 2 women) = 30/84 = 5/14
 *  6 GUARDRAIL: both counts are combinations — consistent, ratio valid
 *
 * Layout plan (men row y190 x150..390 step60; women row y190 x665..875
 * step70; longer language counts):
 *  b1 | problem, 2 lines (15, ink)                  | T mid | x160..920 y128..150
 *  b2 | guardrail chip (red, w620 h38)                | Chip  | x230..850 y225..263
 *  b1 | 5 men circles + "5 men" label                   | Fade  | x150..390 y160..208
 *  b1 | 4 women circles + "4 women" label                 | Fade  | x665..875 y160..208
 *  b3 | "n(S) = ⁹C₃ = 9!/(3!6!) = 84" (16)                  | T mid | y298
 *  b4 | "n(E) = ⁴C₂ × ⁵C₁ = 6×5 = 30" (18, green, HIGH)        | T mid | y332
 *  b4 | ring 2 women + ring 1 man                                | Draw
 *  b5 | "P(exactly 2 women) = 30/84 = 5/14" (17)                   | T mid | y368
 *  b6 | guardrail chip (red, w680 h38)                                | Chip  | x200..880 y398..436
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, GREEN, RED, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

const MEN_X = [150, 210, 270, 330, 390];
const WOMEN_X = [665, 735, 805, 875];

export default function M11Ch14Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("both counts are combinations — the ratio stays honest", "dono counts combinations hain — ratio honest rehta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("Worked Example — committee selection (CBSE)", "Worked Example — committee selection (CBSE)")}
        </T>
      </Fade>

      {/* beat 1 — problem + diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={128} size={15} fill={INK} weight={600}>
          {t("From 5 men and 4 women, choose a committee of 3 at random.", "5 men aur 4 women mein se, 3 ka committee random chuno.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={150} size={15} fill={INK} weight={600}>
          {t("Find P(exactly 2 women).", "P(exactly 2 women) nikaalo.")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={270} y={163} size={13} fill={MUTED} weight={700}>{t("5 men", "5 men")}</T>
      </Fade>
      {MEN_X.map((x, i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 1.7 + i * 0.1)}>
          <Circle cx={x} cy={190} r={17} fill={CREAM} stroke={INK} strokeWidth={2} />
          <T x={x} y={196} size={13} fill={INK} weight={800}>M</T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={770} y={163} size={13} fill={MUTED} weight={700}>{t("4 women", "4 women")}</T>
      </Fade>
      {WOMEN_X.map((x, i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 2.5 + i * 0.1)}>
          <Circle cx={x} cy={190} r={17} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
          <T x={x} y={196} size={13} fill={AMBER_DARK} weight={800}>W</T>
        </Fade>
      ))}

      {/* beat 2 — GUARDRAIL */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={230} y={225} w={620} h={38} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("selection, order irrelevant → combinations throughout", "selection, order irrelevant → sirf combinations")}
        </Chip>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={303} size={16} fill={INK} weight={700}>
          {"n(S) = ⁹C₃ = 9!/(3!6!) = 84"}
        </T>
      </Fade>

      {/* beat 4 — HIGH, ring 2 women + 1 man */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={340} size={18} fill={GREEN} weight={800}>
          {"n(E) = ⁴C₂ × ⁵C₁ = 6×5 = 30"}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d={ringD(MEN_X[0], 190, 26, 26)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={ringD((WOMEN_X[0] + WOMEN_X[1]) / 2, 190, 60, 26)} stroke={GREEN} sw={2.4} dur={0.6} />

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={380} size={17} fill={INK} weight={700}>
          {"P(exactly 2 women) = 30/84 = 5/14"}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={200} y={410} w={680} h={38} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("both counts are combinations — consistent, the ratio is valid", "dono counts combinations hain — consistent, ratio valid hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
