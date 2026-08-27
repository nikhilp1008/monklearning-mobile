/**
 * M11 Ch14 · Section 34 — "Computing toolkit — odds and empirical"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: formulas — part 2 of the
 * Sec33 recap card, same stacked-row pattern.
 *
 * Beats (board_reveal_at_english [0,13.74,23.72,37.46,49.32,57.34,66.82]):
 *  0 heading: "Computing toolkit — part 2: odds & empirical"
 *  1 odds in favour m:n ⇒ P(E) = m/(m+n)
 *  2 odds against n:m ⇒ P(E) = m/(m+n), P(E′) = n/(m+n)
 *  3 (HIGH, ringed) reverse conversion: P(E)/(1−P(E)) = m:n
 *  4 P_empirical(E) = f/N (f=frequency, N=trials)
 *  5 GUARDRAIL: P_empirical → P_classical as N→∞ (law of large numbers)
 *  6 (HIGH) GUARDRAIL: odds→prob sums the parts; prob→odds is P:(1−P)
 *
 * Layout plan (single column, centered; longer language counts):
 *  b1 | row1 (16, ink)                            | T mid | y130
 *  b2 | row2 (15, ink)                              | T mid | y166
 *  b3 | ringed row3 (18, green)                        | T mid | y210
 *  b4 | row4 (16) + inline caption (12, muted)              | T mid | y255
 *  b5 | row5 (13, red script)                                 | T mid | y285
 *  b6 | guardrail chip (red, w840 h56)                          | Chip  | x120..960 y318..374
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, GREEN, RED, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch14Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("odds→probability sums the parts; probability→odds is P:(1−P)", "odds→probability parts jodta hai; probability→odds P:(1−P) hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("Computing toolkit — part 2: odds & empirical", "Computing toolkit — part 2: odds & empirical")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={132} size={16} fill={INK} weight={700}>
          {"odds in favour m:n  ⇒  P(E) = m/(m+n)"}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={15} fill={INK} weight={700}>
          {"odds against n:m  ⇒  P(E) = m/(m+n),  P(E′) = n/(m+n)"}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={214} size={18} fill={GREEN} weight={800}>
          {"P(E) / (1−P(E)) = m:n"}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={ringD(540, 204, 175, 24)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={260} size={16} fill={INK} weight={700}>
          {"P_empirical(E) = f / N "}
          <TSpan fill={MUTED} fontSize={12} fontWeight={600}>
            {t("  (f = frequency, N = trials)", "  (f = frequency, N = trials)")}
          </TSpan>
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={292} size={13} fill={RED} script weight={700}>
          {t("P_empirical → P_classical as N → ∞ (law of large numbers)", "P_empirical → P_classical jab N → ∞ (law of large numbers)")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={120} y={320} w={840} h={56} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("odds→probability: sum the parts. probability→odds: it's P : (1−P)", "odds→probability: parts jodo. probability→odds: P : (1−P) hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
