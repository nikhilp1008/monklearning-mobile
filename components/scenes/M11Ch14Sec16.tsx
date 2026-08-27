/**
 * M11 Ch14 · Section 16 — "Three cracks in the classical recipe"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,9.47,17.41,30.72,35.75,47.87,69.03]):
 *  0 heading
 *  1 CRACK 1: works only if every outcome is EQUALLY LIKELY
 *  2 (HIGH) drawing-pin example: point-up vs point-down NOT equally
 *    likely — "1/2" is nonsense
 *  3 CRACK 2: collapses with infinitely many outcomes
 *  4 example: "pick a random natural number" — no finite total
 *  5 (HIGH) CRACK 3: equally likely = equally probable — CIRCULAR
 *  6 closer: mathematicians dislike circles — needs a firmer foundation
 *
 * Layout plan (3 crack rows, longer language counts):
 *  b1 | "CRACK 1 — .." (16, red)                    | T mid | x230..850 y128..144
 *  b2 | 2 circles (r10/r22) + "≠" + labels            | Draw/T| x385..645 y143..187
 *  b2 | caption (14, red script)                        | T mid | x300..780 y205..219
 *  b3 | "CRACK 2 — .." (16, red)                          | T mid | x300..780 y255..271
 *  b4 | "1, 2, 3, 4, 5, … → ∞" (18, ink) + caption            | T mid | x330..750 y295..332
 *  b5 | "CRACK 3 — .." (16, red, HIGH)                          | T mid | x220..860 y365..381
 *  b5 | caption (14, red script)                                | T mid | x270..810 y399..413
 *  b6 | ringed closer chip (amber, w620 h48)                      | Draw/T| x230..850 y445..493
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, RED, AMBER_DARK, INK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch14Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("mathematicians dislike circles — probability needs a firmer base", "mathematicians ko circles pasand nahi — firmer base chahiye")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={104} size={19} fill={INK} weight={700}>
          {t("Three cracks in the classical recipe", "Classical recipe mein teen cracks")}
        </T>
      </Fade>

      {/* CRACK 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={138} size={16} fill={RED} weight={700}>
          <TSpan fontWeight={800}>{"CRACK 1 — "}</TSpan>
          {t("works only if every outcome is EQUALLY LIKELY", "sirf tab kaam karta hai jab har outcome EQUALLY LIKELY ho")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Circle cx={400} cy={168} r={10} fill="none" stroke={INK} strokeWidth={2} />
        <T x={400} y={196} size={13} fill={INK}>
          {t("point UP", "point UP")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={512} y={175} size={20} fill={RED} weight={800}>
          {"≠"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Circle cx={630} cy={168} r={22} fill="none" stroke={INK} strokeWidth={2} />
        <T x={630} y={210} size={13} fill={INK}>
          {t("point DOWN", "point DOWN")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={228} size={14} fill={RED} script weight={700}>
          {t('NOT equally likely → "1/2" is nonsense', 'equally likely NAHI → "1/2" bakwaas hai')}
        </T>
      </Fade>

      {/* CRACK 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={266} size={16} fill={RED} weight={700}>
          <TSpan fontWeight={800}>{"CRACK 2 — "}</TSpan>
          {t("collapses with infinitely many outcomes", "infinitely many outcomes ke saath collapse hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={304} size={18} fill={INK} weight={700}>
          {"1, 2, 3, 4, 5, … → ∞"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={540} y={328} size={14} fill={RED} script weight={700}>
          {t('"pick a random natural number" — no finite total to divide by', '"koi bhi natural number chuno" — koi finite total nahi hai')}
        </T>
      </Fade>

      {/* CRACK 3 — HIGH */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={373} size={16} fill={RED} weight={800}>
          <TSpan fontWeight={800}>{"CRACK 3 — "}</TSpan>
          {t('"equally likely" already means "equally probable"', '"equally likely" ka matlab hi "equally probable" hai')}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={540} y={406} size={14} fill={RED} script weight={700}>
          {t("defining probability USING probability — CIRCULAR", "probability ko probability SE define karna — CIRCULAR")}
        </T>
      </Fade>

      {/* beat 6 — closer */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={roundRectD(230, 445, 620, 48, 10)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={475} size={15} fill={AMBER_DARK} weight={700}>
          {t("needs a FIRMER foundation, not a circular one", "circular nahi, ek FIRMER foundation chahiye")}
        </T>
      </Fade>
    </Scene>
  );
}
