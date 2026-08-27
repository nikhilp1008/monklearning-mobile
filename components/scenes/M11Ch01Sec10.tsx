/**
 * M11 Ch01 · Section 10 — "Subsets, proper subsets, and supersets"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 10.84, 35.67, 58.03, 71.77, 84.31]):
 *  0 title (always-on)
 *  1 REPRESENT: nested boxes B={1,2,3,4,5} containing A={1,2}; land "A ⊆ B"
 *  2 GUARDRAIL (dashed card, right of diagram): A⊆A always; ∅⊆B always
 *  3 proper subset: A ⊊ B = A⊆B AND A≠B (B has an extra) — same diagram
 *  4 superset: B ⊇ A — same diagram
 *  5 LAND: A = B ⇔ (A⊆B and B⊆A)
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | outer box B (roundRect)      | Draw   | x200..680 y280..450
 *  b1 | "B = {1,2,3,4,5}" corner     | T st   | x218 y308
 *  b1 | inner box A (roundRect)      | Draw   | x230..420 y330..410
 *  b1 | "A = {1, 2}" corner          | T st   | x246 y365
 *  b1 | "extras: 3, 4, 5" callout    | T st script | x460 y375
 *  b1 | "A ⊆ B" (24,red)             | T mid  | x540 y130
 *  b1 | caption                      | T mid script | x540 y163
 *  b2 | dashed boundary-case card    | rect   | x700 y295 w330 h115
 *  b2 | heading + 2 lines            | T st   | x720 y315/345/378
 *  b3 | "A ⊊ B = proper subset…" (green) | T mid | x540 y196
 *  b4 | "B ⊇ A = superset" (amber)   | T mid  | x540 y229
 *  b5 | verdict box: A=B ⇔ (A⊆B and B⊆A) | rect+T | x260..820 y500..575
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch01Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t("when is one set inside another?", "ek set doosre ke andar kab hota hai?")}
        </T>
      </Fade>

      {/* beat 1 — REPRESENT: nested boxes, then land the symbol */}
      <Draw on={beat >= 1} d={roundRectD(200, 280, 480, 170, 14)} stroke={AMBER_DARK} sw={2.2} delay={dl(1, 0.3)} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={218} y={308} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {"B = {1, 2, 3, 4, 5}"}
        </T>
      </Fade>
      <Draw on={beat >= 1} d={roundRectD(230, 330, 190, 80, 10)} stroke={INK} sw={2.2} delay={dl(1, 2.2)} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={246} y={365} size={14} fill={INK} anchor="start" weight={700}>
          {"A = {1, 2}"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={460} y={375} size={13} fill={MUTED} script anchor="start">
          {t("extras: 3, 4, 5", "extras: 3, 4, 5")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={540} y={130} size={24} fill={RED} weight={800}>
          {"A ⊆ B"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={540} y={163} size={14} fill={MUTED} script>
          {t(
            "every element of A is also in B (B may have extras)",
            "A ka har element B mein bhi hai (B mein extras ho sakte hain)"
          )}
        </T>
      </Fade>

      {/* beat 2 — GUARDRAIL: two boundary cases */}
      <Draw
        on={beat >= 2}
        d={roundRectD(700, 295, 330, 115, 10)}
        stroke={RED}
        sw={1.8}
        delay={dl(2, 0.2)}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={720} y={315} size={13} fill={RED} anchor="start" weight={700}>
          {t("boundary cases:", "boundary cases:")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={720} y={345} size={15} fill={INK} anchor="start">
          {t("A ⊆ A  (always true)", "A ⊆ A  (hamesha sach)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={720} y={378} size={15} fill={INK} anchor="start">
          {t("∅ ⊆ B  (empty ⊆ everything)", "∅ ⊆ B  (empty sabka subset)")}
        </T>
      </Fade>

      {/* beat 3 — proper subset */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={196} size={16} fill={GREEN} weight={700}>
          {"A ⊊ B  =  proper subset (A⊆B AND A≠B)"}
        </T>
      </Fade>

      {/* beat 4 — superset */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={229} size={16} fill={AMBER_DARK} weight={700}>
          {"B ⊇ A  =  B is a superset of A"}
        </T>
      </Fade>

      {/* beat 5 — LAND: the equality test */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={260} y={500} width={560} height={75} rx={12} fill={GREEN} opacity={0.12} stroke={GREEN} strokeWidth={2} />
        <T x={540} y={535} size={20} fill={INK} weight={800}>
          {"A = B   ⇔   (A ⊆ B  and  B ⊆ A)"}
        </T>
        <T x={540} y={562} size={14} fill={GREEN} script>
          {t("mutual containment both ways", "dono taraf se mutual containment")}
        </T>
      </Fade>
    </Scene>
  );
}
