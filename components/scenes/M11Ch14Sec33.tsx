/**
 * M11 Ch14 · Section 33 — "Computing toolkit — counting, complement, addition"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: formulas — a mid-chapter recap
 * card, same stacked-row pattern as Sec20.
 *
 * Beats (board_reveal_at_english [0,8.19,22.36,30.46,37.38,47.79,55.13,65.11]):
 *  0 heading: "Computing toolkit — part 1"
 *  1 P(E) = n(E)/n(S)  (equally likely; count with nPr, nCr)
 *  2 (HIGH, ringed) P(at least one) = 1 − P(none)
 *  3 P(A′) = 1 − P(A)
 *  4 P(A∪B) = P(A)+P(B)−P(A∩B)
 *  5 P(A∪B∪C) = ΣP(single) − ΣP(pair) + P(A∩B∩C)
 *  6 P(exactly one of A,B) = P(A)+P(B)−2P(A∩B)
 *  7 (HIGH) GUARDRAIL: every line needs equally likely OR given probabilities
 *
 * Layout plan (single column, centered, ~40px row pitch; longer language
 * counts):
 *  b1 | row1 (16) + inline caption (12, muted)          | T mid | y128
 *  b2 | ringed row2 (19, green)                            | T mid | y172
 *  b3 | row3 (16, ink)                                       | T mid | y214
 *  b4 | row4 (16, ink)                                         | T mid | y250
 *  b5 | row5 (15, ink)                                           | T mid | y286
 *  b6 | row6 (15, ink)                                             | T mid | y322
 *  b7 | guardrail chip (red, w840 h48)                              | Chip  | x120..960 y352..400
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, GREEN, RED, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch14Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("never mix a raw count with a probability", "count aur probability ko kabhi mix mat karo")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Computing toolkit — part 1", "Computing toolkit — part 1")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={130} size={16} fill={INK} weight={700}>
          {"P(E) = n(E)/n(S) "}
          <TSpan fill={MUTED} fontSize={12} fontWeight={600}>
            {t("  (equally likely; count with nPr, nCr)", "  (equally likely; nPr, nCr se ginno)")}
          </TSpan>
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={176} size={19} fill={GREEN} weight={800}>
          {"P(at least one) = 1 − P(none)"}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.0)} d={ringD(540, 166, 250, 24)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={220} size={16} fill={INK} weight={700}>
          {"P(A′) = 1 − P(A)"}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={256} size={16} fill={INK} weight={700}>
          {"P(A∪B) = P(A)+P(B)−P(A∩B)"}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={292} size={15} fill={INK} weight={700}>
          {"P(A∪B∪C) = ΣP(single) − ΣP(pair) + P(A∩B∩C)"}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={328} size={15} fill={INK} weight={700}>
          {"P(exactly one of A,B) = P(A)+P(B)−2P(A∩B)"}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={120} y={358} w={840} h={48} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("every line needs equally likely OR given probabilities — never mix", "har line ko equally likely YA given probabilities chahiye — mix mat karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
