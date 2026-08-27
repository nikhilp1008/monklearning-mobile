/**
 * M11 Ch01 · Section 28 — "Why adding two sets double-counts"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * 7 beats (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 REPRESENT: Physics(70)/Chemistry(50) circles + tempting "70+50=120?"
 *  2 GUARDRAIL: cross out 120?, ring the lens — "counted TWICE"
 *  3 formula: n(A∪B) = n(A) + n(B) − n(A∩B)
 *  4 disjoint case collapses to n(A) + n(B)
 *  5 dictionary: 'or'→∪, 'and'→∩, 'only A'→drop overlaps
 *  6 at least one = n(A∪B); none = n(U) − n(A∪B)
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | circles A(280,260,80) B(400,260,80)  | Draw |
 *  b1 | "Physics: 70" / "Chemistry: 50"       | T mid | x260/420 y155
 *  b1 | "70 + 50 = " / "120?" (tokens)         | T st  | x600/740 y260
 *  b2 | cross over "120?" + ring on lens       | Draw  |
 *  b2 | "counted TWICE" (red script)           | T mid | x340 y380
 *  b3 | "n(A∪B) = n(A) + n(B) − n(A∩B)" (green) | T mid | x540 y430
 *  b4 | disjoint note (script)                  | T mid | x540 y460
 *  b5 | dictionary line (red)                   | T mid | x540 y505
 *  b6 | "at least one.. / none.." (green)        | T mid | x540 y540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, crossD, ringD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD } from "./math-kit";

export default function M11Ch01Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the overlap gets counted twice", "overlap do baar count hota hai")}
        </T>
      </Fade>

      {/* beat 1 — REPRESENT: two batches, tempting wrong sum */}
      <Draw on={beat >= 1} d={circleD(280, 260, 80)} stroke={INK} sw={2.2} delay={dl(1, 0.3)} dur={0.7} />
      <Draw on={beat >= 1} d={circleD(400, 260, 80)} stroke={INK} sw={2.2} delay={dl(1, 0.7)} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={245} y={155} size={15} fill={INK} weight={700}>
          {t("Physics: 70", "Physics: 70")}
        </T>
        <T x={435} y={155} size={15} fill={INK} weight={700}>
          {t("Chemistry: 50", "Chemistry: 50")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={600} y={260} size={19} fill={INK} anchor="start" weight={700}>
          {"70 + 50 = "}
        </T>
        <T x={740} y={260} size={19} fill={INK} anchor="start" weight={800}>
          {"120?"}
        </T>
      </Fade>

      {/* beat 2 — GUARDRAIL: cross the wrong sum, ring the double-counted lens */}
      <Draw on={beat >= 2} d={crossD(740, 244, 60, 24)} stroke={RED} sw={2.4} delay={dl(2, 0.3)} dur={0.5} />
      <Draw on={beat >= 2} d={ringD(340, 260, 55, 62)} stroke={RED} sw={2.4} delay={dl(2, 1)} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={340} y={385} size={14} fill={RED} script weight={700}>
          {t("counted TWICE", "do baar count hua")}
        </T>
      </Fade>

      {/* beat 3 — the formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={430} size={20} fill={GREEN} weight={800}>
          {"n(A ∪ B) = n(A) + n(B) − n(A ∩ B)"}
        </T>
      </Fade>

      {/* beat 4 — disjoint collapse */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={460} size={14} fill={MUTED} script>
          {t(
            "if disjoint (A∩B = ∅) → collapses to n(A) + n(B)",
            "agar disjoint (A∩B = ∅) → n(A) + n(B) ban jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — GUARDRAIL: translation dictionary */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={505} size={15} fill={RED} weight={700}>
          {t(
            "“or” → ∪     “and” → ∩     “only A” → drop the overlaps",
            "“or” → ∪     “and” → ∩     “only A” → overlaps hatao"
          )}
        </T>
      </Fade>

      {/* beat 6 — at least one vs none */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={540} size={16} fill={GREEN} weight={800}>
          {"at least one = n(A∪B)     none = n(U) − n(A∪B)"}
        </T>
      </Fade>
    </Scene>
  );
}
