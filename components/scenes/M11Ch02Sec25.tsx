/**
 * M11 Ch02 · Section 25 — "Worked: graph reading with f(x) = |x − 2|"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * FLAGGED — real graph-reading geometry (shifted V, line-cuts-curve-twice), extra eye-check.
 * section_type: worked_examples — ONE example, full canvas for the graph.
 *
 * Beats (board_reveal_at_english [0, 17.83, 42.67, 59.56, 69.63, 78.08, 95.57]):
 *  0 given: f(x) = |x − 2|
 *  1 |x| shifts RIGHT by 2 → vertex(2,0), slopes ±1 · THE GRAPH: axes + shifted V
 *  2 Domain=R, Range=[0,∞)
 *  3 projection: spans all x; never below axis, touches 0 at x=2
 *  4 f(5)=|5-2|=3 — point (5,3) marked on the right arm
 *  5 boxed: |x-2|=3 ⇒ x=5 or x=-1 — point (-1,3) marked on the left arm
 *  6 guardrail: y=3 line cuts the V TWICE — 2 solutions; shift rule restated
 *
 * Layout plan — one large centered graph, boxes estimated:
 *  b0 | given (16,amber,w700)           | T mid | x?..?      y80..97  (bl 93)
 *  b1 | shift line (14)                  | T mid | x?..?      y115..130 (bl 126)
 *  b1 | axes (origin340,400)             | Draw  | x200..720  y150..420
 *  b1 | V curve (vertex 460,400)         | Draw  | (220,160)→(460,400)→(700,160)
 *  b1 | vertex dot (closed)              | dot   | (460,400)
 *  b2 | Domain/Range (15)                 | T mid | x?..?      y444..461 (bl 456)
 *  b3 | projection line (14)              | T mid | x?..?      y475..490 (bl 486)
 *  b4 | dot (5,3) + "f(5)=3" (14,green)   | dot+T | (640,220), label x650 y240
 *  b5 | chip formula (17,green)           | Chip  | x429..650  y514..550
 *  b5 | dot (-1,3) + "x=-1" (14,green)    | dot+T | (280,220), label x270(end) y240
 *  b6 | horizontal y=3 line (red)         | Draw  | x220..700  y220
 *  b6 | guardrail (14, red)               | T st  | x76..510   y568..583 (bl 579)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, GREEN_DARK, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, IntervalDot } from "./math-kit";

export default function M11Ch02Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Worked: Graph Reading with f(x) = |x−2|", "Solved: Graph Padhna f(x) = |x−2| ke saath")}
        </T>
      </Fade>

      {/* beat 0 — given */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={93} size={16} fill={INK} anchor="middle" weight={700}>
          {"Example 5: f(x) = |x − 2|"}
        </T>
      </Fade>

      {/* beat 1 — the shift rule + the graph itself */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={126} size={14} fill={INK} anchor="middle">
          {t(
            "|x| shifts RIGHT by 2 → vertex(2,0), slopes ±1",
            "|x| RIGHT shift hota hai 2 se → vertex(2,0), slopes ±1"
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.4)} originX={340} originY={400} xLeft={200} xRight={720} yTop={150} yBottom={420} step={60} />
      <Draw on={beat >= 1} d={lineD(220, 160, 460, 400)} stroke={INK} sw={2.4} delay={dl(1, 0.9)} />
      <Draw on={beat >= 1} d={lineD(460, 400, 700, 160)} stroke={INK} sw={2.4} delay={dl(1, 1.1)} />
      <IntervalDot on={beat >= 1} delay={dl(1, 1.5)} x={460} y={400} open={false} r={5} stroke={INK} />

      {/* beat 2 — domain and range */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={456} size={15} fill={INK} anchor="middle" weight={700}>
          {"Domain = R,  Range = [0, ∞)"}
        </T>
      </Fade>

      {/* beat 3 — the projection reasoning */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={486} size={14} fill={INK} anchor="middle">
          {t(
            "Projection: spans all x; never below axis, touches 0 at x=2",
            "Projection: sabhi x cover karta hai; axis se neeche nahi, x=2 pe 0 chhota hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — evaluate f(5), mark the point on the right arm */}
      <IntervalDot on={beat >= 4} delay={dl(4, 0)} x={640} y={220} open={false} r={5} stroke={GREEN_DARK} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={650} y={240} size={14} fill={GREEN_DARK} anchor="start" weight={700}>
          f(5)=3
        </T>
      </Fade>

      {/* beat 5 — solve the equation, mark the second point */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={429} y={514} w={221} h={36} fill={GREEN_DARK} textFill="#FFFEFB" size={17} script={false}>
          {"|x−2|=3 ⇒ x=5 or x=−1"}
        </Chip>
      </Fade>
      <IntervalDot on={beat >= 5} delay={dl(5, 0.5)} x={280} y={220} open={false} r={5} stroke={GREEN_DARK} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={270} y={240} size={14} fill={GREEN_DARK} anchor="end" weight={700}>
          x=-1
        </T>
      </Fade>

      {/* beat 6 — the graph check: y=3 cuts the V twice */}
      <Draw on={beat >= 6} d={lineD(220, 220, 700, 220)} stroke={RED} sw={2} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={76} y={579} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "y=3 cuts V TWICE — 2 solutions. Shift: x→x−a slides RIGHT by a",
            "y=3, V ko DO baar kaatti hai — 2 solutions. Shift: x→x−a se RIGHT slide"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
