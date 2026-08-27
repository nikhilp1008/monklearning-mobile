/**
 * M11 Ch14 · Section 20 — "The working toolkit of consequences"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: formulas — a PREVIEW toolkit
 * (JSON's own heading says "all derived next": Sec21-23 prove these).
 * Seven formula rows build one at a time; HIGH-emphasis rows (the "not"
 * law, general addition rule) get larger green text + a ring.
 *
 * Beats (board_reveal_at_english [0,15.36,27.39,37.55,50.43,64.26,73.73,86.27]):
 *  0 heading
 *  1 0 ≤ P(A) ≤ 1,  P(∅) = 0,  P(S) = 1
 *  2 (HIGH) P(A′) = 1 − P(A)  (the "not" law)
 *  3 P(A) = n(A)/n(S)  (equally-likely special case only)
 *  4 (HIGH, ringed) P(A∪B) = P(A) + P(B) − P(A∩B)
 *  5 P(A∪B) = P(A) + P(B)  (mutually exclusive)
 *  6 P(exactly one of A,B) = P(A) + P(B) − 2P(A∩B)
 *  7 P(A′∩B′) = 1 − P(A∪B)  (De Morgan: "neither")
 *
 * Layout plan (single column, centered, 48px row pitch; longer language
 * counts):
 *  b1 | row1 (16, ink)                              | T mid | y128
 *  b2 | row2 (19, green) + inline caption (12,muted) | T mid | y176
 *  b3 | row3 (16, ink) + inline caption (12, red)     | T mid | y224
 *  b4 | row4 (19, green, ringed)                       | T mid | y272
 *  b5 | row5 (16, ink) + inline caption (12, muted)      | T mid | y320
 *  b6 | row6 (15, ink)                                     | T mid | y364
 *  b7 | row7 (16, ink) + inline caption (12, muted)          | T mid | y410
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch14Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("six lines, one foundation — all proved next", "chhe lines, ek foundation — sab agla prove hoga")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("The working toolkit (all derived next)", "Working toolkit (sab aage derive hoga)")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={280} y={128} size={16} fill={INK} weight={700} anchor="start">
          {"0 ≤ P(A) ≤ 1"}
        </T>
        <T x={540} y={128} size={16} fill={INK} weight={700}>
          {"P(∅) = 0"}
        </T>
        <T x={800} y={128} size={16} fill={INK} weight={700} anchor="end">
          {"P(S) = 1"}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={176} size={19} fill={GREEN} weight={800}>
          {"P(A′) = 1 − P(A) "}
          <TSpan fill={MUTED} fontSize={12} fontWeight={600}>
            {t('  (the "not" law)', '  ("not" law)')}
          </TSpan>
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={224} size={16} fill={INK} weight={700}>
          {"P(A) = n(A) / n(S) "}
          <TSpan fill={RED} fontSize={12} fontWeight={700}>
            {t("  (equally-likely special case only)", "  (sirf equally-likely case)")}
          </TSpan>
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={280} size={19} fill={GREEN} weight={800}>
          {"P(A∪B) = P(A) + P(B) − P(A∩B)"}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d={ringD(540, 270, 260, 24)} stroke={GREEN} sw={2.2} dur={0.7} />

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={330} size={16} fill={INK} weight={700}>
          {"P(A∪B) = P(A) + P(B) "}
          <TSpan fill={MUTED} fontSize={12} fontWeight={600}>
            {t("  (mutually exclusive)", "  (mutually exclusive)")}
          </TSpan>
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={374} size={15} fill={INK} weight={700}>
          {"P(exactly one of A, B) = P(A) + P(B) − 2P(A∩B)"}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={420} size={16} fill={INK} weight={700}>
          {"P(A′∩B′) = 1 − P(A∪B) "}
          <TSpan fill={MUTED} fontSize={12} fontWeight={600}>
            {t('  (De Morgan: "neither")', '  (De Morgan: "neither")')}
          </TSpan>
        </T>
      </Fade>
    </Scene>
  );
}
