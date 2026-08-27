/**
 * M11 Ch02 · Section 11 — "Domain, range, codomain — and the three ways to write a relation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0, 10.75, 35.58, 58.71, 77.91, 102.74, 124.59]):
 *  0 title (always-on) · 1 domain/range/codomain defined in one line
 *  2 THE DEMO: arrow diagram A={1,2,3,4}→B={3,4,5,6,7}, y=x+2, 7 ringed (unreached)
 *  3 guardrail: Range is REACHED, Codomain is ALLOWED — Range⊆Codomain, ≠ always
 *  4 three forms: roster, set-builder, arrow (finite-set caveat)
 *  5 both extremes legal: R=∅, R=A×B
 *  6 relation ON a set A = subset of A×A; domain⊆A, not necessarily all
 *
 * Layout plan — boxes estimated (Anek ≈ baseline −0.78·size … +0.31·size), text ≥14 floor:
 *  b0 | title (script 26, red)          | T mid  | x300..780  y32..80  (bl 60)
 *  b1 | intro line (14)                  | T mid  | x358..722  y84..99  (bl 95)
 *  b2 | "A"/"B" labels (18,amber,w800)   | T mid  | x195..245/x795..845  y116..136 (bl 130)
 *  b2 | circle A (r95, cx220 cy245)      | Draw   | x125..315 y150..340
 *  b2 | circle B (r95, cx820 cy245)      | Draw   | x725..915 y150..340
 *  b2 | A items 1,2,3,4 (14)             | T mid  | x220  y197/229/261/293
 *  b2 | B items 3,4,5,6,7 (14)           | T mid  | x820  y189/217/245/273/301
 *  b2 | 4 arrows                         | Draw   | (245,y)→(795,y') matched pairs
 *  b2 | ring around "7" (red, dashed look)| Draw  | c(820,301) rx18 ry14
 *  b2 | caption (14)                     | T mid  | x435..645  y354..369 (bl 365)
 *  b3 | margin bar (red)                 | Draw   | x60  y384..414
 *  b3 | guardrail (14, red)              | T st   | x76..447   y390..405 (bl 401)
 *  b4 | three-forms line (14)            | T mid  | x298..781  y429..444 (bl 440)
 *  b5 | extremes line (14)               | T mid  | x372..708  y463..478 (bl 474)
 *  b6 | relation-on-A line (14)          | T mid  | x361..718  y497..512 (bl 508)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
  INK,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD } from "./math-kit";

const A_ITEMS = [
  { label: "1", y: 197 },
  { label: "2", y: 229 },
  { label: "3", y: 261 },
  { label: "4", y: 293 },
];
const B_ITEMS = [
  { label: "3", y: 189 },
  { label: "4", y: 217 },
  { label: "5", y: 245 },
  { label: "6", y: 273 },
  { label: "7", y: 301 },
];

export default function M11Ch02Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={26} fill={RED} anchor="middle" script>
          {t("Domain, Range, Codomain", "Domain, Range, Codomain")}
        </T>
      </Fade>

      {/* beat 1 — the three definitions in one line */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={95} size={14} fill={INK} anchor="middle" weight={700}>
          {"Domain=1st coords used;  Range=2nd coords used;  Codomain=ALL of B"}
        </T>
      </Fade>

      {/* beat 2 — THE DEMO: arrow diagram for y = x+2, 7 unreached */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={220} y={130} size={18} fill={AMBER_DARK} anchor="middle" weight={800}>
          A
        </T>
        <T x={820} y={130} size={18} fill={AMBER_DARK} anchor="middle" weight={800}>
          B
        </T>
      </Fade>
      <Draw on={beat >= 2} d={circleD(220, 245, 95)} stroke={INK} sw={2} delay={dl(2, 0.3)} />
      <Draw on={beat >= 2} d={circleD(820, 245, 95)} stroke={INK} sw={2} delay={dl(2, 0.5)} />
      {A_ITEMS.map((it, i) => (
        <Fade key={`a${it.label}`} on={beat >= 2} delay={dl(2, 0.8 + i * 0.12)}>
          <T x={220} y={it.y} size={14} fill={INK} anchor="middle">
            {it.label}
          </T>
        </Fade>
      ))}
      {B_ITEMS.map((it, i) => (
        <Fade key={`b${it.label}`} on={beat >= 2} delay={dl(2, 0.8 + i * 0.12)}>
          <T x={820} y={it.y} size={14} fill={INK} anchor="middle">
            {it.label}
          </T>
        </Fade>
      ))}
      {A_ITEMS.map((it, i) => (
        <Draw
          key={`arrow-${it.label}`}
          on={beat >= 2}
          d={arrowD(245, it.y - 3, 795, B_ITEMS[i].y - 3)}
          stroke={GREEN_DARK}
          sw={2}
          delay={dl(2, 1.5 + i * 0.25)}
        />
      ))}
      <Draw on={beat >= 2} d={ringD(820, 301, 18, 14)} stroke={RED} sw={2} delay={dl(2, 2.6)} />
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <T x={540} y={365} size={14} fill={RED} anchor="middle">
          {t("7 ∈ codomain but NOT in range", "7 codomain mein hai par range mein NAHI")}
        </T>
      </Fade>

      {/* beat 3 — guardrail: reached vs allowed */}
      <Draw on={beat >= 3} d="M 60 384 L 60 414" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={76} y={401} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Range REACHED; Codomain ALLOWED — ⊆ but not always =",
            "Range REACHED; Codomain ALLOWED — ⊆ hai, hamesha = nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — the three forms */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={440} size={14} fill={INK} anchor="middle">
          {t(
            "3 forms: roster, set-builder, arrow — roster/arrow need finite sets",
            "3 forms: roster, set-builder, arrow — roster/arrow ko finite sets chahiye"
          )}
        </T>
      </Fade>

      {/* beat 5 — the two legal extremes */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={474} size={14} fill={INK} anchor="middle">
          {"Both extremes legal: R=∅, or R=A×B (universal)"}
        </T>
      </Fade>

      {/* beat 6 — relation on a set A */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={508} size={14} fill={INK} anchor="middle">
          {t(
            "Relation on A = subset of A×A; domain ⊆ A, not nec. all",
            "Relation on A = A×A ka subset; domain ⊆ A, poora zaroori nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
