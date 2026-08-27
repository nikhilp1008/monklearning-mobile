/**
 * M11 Ch02 · Section 27 — "Formula recap: the complete chapter toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formula_recap — no segments_* for this position (recap type, expected);
 * narration reference is board_content itself. A dense formula ledger, revealed
 * in the same order the chapter taught them.
 *
 * Beats (board_reveal_at_english [0, 9.56, 23.04, 37.29, 51.29, 61.87, 71.51, 83.71]):
 *  0 title (always-on) · 1 ordered-pair equality + A×B definition
 *  2 boxed: n(A×B)=pq; n(A^m)=(n(A))^m; A×B=∅ iff A or B empty
 *  3 distributivity + the star identity
 *  4 boxed: relations=2^pq, non-empty, k-forced-pairs
 *  5 boxed: functions=q^p=(n(B))^n(A)
 *  6 algebra-of-functions domain rules
 *  7 standard-function ranges: |x|, sgn(x), [x], constant c
 *
 * Layout plan — single centered column, boxes estimated:
 *  b0 | title (script 24, red)          | T mid | x300..780  y34..65  (bl 58)
 *  b1 | ordered-pair/A×B line (14)      | T mid | x412..769  y83..98  (bl 93)
 *  b2 | chip n(A×B)=pq etc (14,amber)   | Chip  | x366..714  y115..147
 *  b3 | distributivity line (14)         | T mid | x376..705  y162..177 (bl 172)
 *  b4 | chip relations=2^pq (14,green)  | Chip  | x342..739  y198..230
 *  b5 | chip functions=q^p (14,green)   | Chip  | x408..672  y252..284
 *  b6 | Dom algebra line (14)            | T mid | x385..756  y297..312 (bl 311)
 *  b7 | standard-function ranges (14)   | T mid | x386..694  y329..344 (bl 343)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Chapter Toolkit — every formula in one place", "Chapter Toolkit — har formula ek jagah")}
        </T>
      </Fade>

      {/* beat 1 — ordered pairs + Cartesian product definition */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={93} size={14} fill={INK} anchor="middle">
          {"(a,b)=(c,d) ⇔ a=c and b=d;  A×B={(a,b): a∈A, b∈B}"}
        </T>
      </Fade>

      {/* beat 2 — counting + the empty-product rule, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={366} y={115} w={348} h={32} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
          {"n(A×B)=pq; n(A^m)=(n(A))^m; A×B=∅⇔A=∅ or B=∅"}
        </Chip>
      </Fade>

      {/* beat 3 — distributivity + the star identity */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={172} size={14} fill={INK} anchor="middle">
          {"A×(B∩C)=(A×B)∩(A×C);  (A×B)∩(C×D)=(A∩C)×(B∩D)"}
        </T>
      </Fade>

      {/* beat 4 — relation counting, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={342} y={198} w={397} h={32} fill={GREEN} textFill="#FFFEFB" size={14} script={false}>
          {"relations=2^pq; non-empty=2^pq−1; k forced⇒2^(pq−k)"}
        </Chip>
      </Fade>

      {/* beat 5 — function counting, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={408} y={252} w={264} h={32} fill={GREEN} textFill="#FFFEFB" size={14} script={false}>
          {"functions A→B = q^p = (n(B))^n(A)"}
        </Chip>
      </Fade>

      {/* beat 6 — algebra of functions, domain rules */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={311} size={14} fill={INK} anchor="middle">
          {"Dom(f±g)=Dom(fg)=Dom(f)∩Dom(g);  Dom(f/g)=that−{g=0}"}
        </T>
      </Fade>

      {/* beat 7 — standard function ranges */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={343} size={14} fill={INK} anchor="middle">
          {"|x|→[0,∞);  sgn(x)→{-1,0,1};  [x]→Z;  c→{c}"}
        </T>
      </Fade>
    </Scene>
  );
}
