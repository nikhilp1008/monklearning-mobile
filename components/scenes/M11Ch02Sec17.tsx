/**
 * M11 Ch02 · Section 17 — "A function is a relation with two promises"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * First Functions section — three side-by-side arrow diagrams (valid / fails
 * totality / fails single-valued) make both promises visible, not just stated.
 *
 * Beats (board_reveal_at_english [0, 17.41, 33.54, 44.29, 54.87, 75.52, 100.35]):
 *  0 title (always-on) · 1 vending machine analogy
 *  2 Promise 1 (totality): valid diagram + fails-totality diagram (dead button ringed)
 *  3 Promise 2 (single-valued): fails-single-valued diagram (2 arrows from 'a', ringed)
 *  4 boxed formula: f:A→B ⟺ f⊆A×B, every a is 1st coord of EXACTLY ONE pair
 *  5 dabbawala analogy: no address / two addresses / two→one office (fine!)
 *  6 guardrail: every function IS a relation; most relations are NOT functions
 *
 * Layout plan — three mini diagrams in one row, boxes estimated:
 *  b0 | title (script 26, red)          | T mid  | x300..780  y32..68  (bl 60)
 *  b1 | analogy (15)                     | T mid  | x?..?      y83..100 (bl 95)
 *  b2 | "Promise 1: TOTALITY" (15,amber) | T mid  | x285..435  y128..145 (bl 140)
 *  b2 | diagram1 (valid): 2 circles r38  | Draw   | cx110/250 cy250
 *  b2 | diagram2 (fails P1): 2 circles   | Draw   | cx470/610 cy250, 'c' ringed red
 *  b2 | verdict1 "✓ Function" (14,green) | T mid  | x?..?      y301..315 (bl 305)
 *  b2 | verdict2 "✗ not total" (14,red)  | T mid  | x?..?      y301..315 (bl 305)
 *  b3 | "Promise 2: SINGLE-VALUED" (15)  | T mid  | x806..994  y128..145 (bl 140)
 *  b3 | diagram3 (fails P2): 2 circles   | Draw   | cx830/970 cy250, 'a' ringed red
 *  b3 | verdict3 "✗ not single-valued"   | T mid  | x833..967  y301..315 (bl 305)
 *  b4 | chip formula (15)                | Chip   | x302..778  y340..380
 *  b5 | dabbawala line (14)              | T mid  | x246..834  y395..409 (bl 405)
 *  b6 | margin bar (red)                 | Draw   | x60  y430..460
 *  b6 | guardrail (15, red)              | T st   | x76..556   y435..452 (bl 447)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, INK, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD } from "./math-kit";

const ROW_Y = 250;
const ITEM_OFFSETS = [-28, 0, 28];
const A_LABELS = ["a", "b", "c"];
const B_LABELS = ["x", "y", "z"];

function MiniDiagram({
  on,
  delay,
  cxA,
  cxB,
}: {
  on: boolean;
  delay: number;
  cxA: number;
  cxB: number;
}) {
  return (
    <>
      <Draw on={on} d={circleD(cxA, ROW_Y, 38)} stroke={INK} sw={1.6} delay={delay} />
      <Draw on={on} d={circleD(cxB, ROW_Y, 38)} stroke={INK} sw={1.6} delay={delay + 0.1} />
      {ITEM_OFFSETS.map((o, i) => (
        <Fade key={`a${i}`} on={on} delay={delay + 0.3}>
          <T x={cxA} y={ROW_Y + o} size={14} fill={INK} anchor="middle">
            {A_LABELS[i]}
          </T>
        </Fade>
      ))}
      {ITEM_OFFSETS.map((o, i) => (
        <Fade key={`b${i}`} on={on} delay={delay + 0.3}>
          <T x={cxB} y={ROW_Y + o} size={14} fill={INK} anchor="middle">
            {B_LABELS[i]}
          </T>
        </Fade>
      ))}
    </>
  );
}

export default function M11Ch02Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={26} fill={RED} anchor="middle" script>
          {t("A Function = a Relation with Discipline", "Function = Discipline wala Relation")}
        </T>
      </Fade>

      {/* beat 1 — vending machine analogy */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={95} size={15} fill={INK} anchor="middle">
          {t(
            "Vending machine: press button → ALWAYS something, EXACTLY ONE item",
            "Vending machine: button dabao → HAMESHA kuch milega, EXACTLY ONE item"
          )}
        </T>
      </Fade>

      {/* beat 2 — Promise 1 (totality): valid vs dead-button */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={360} y={140} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Promise 1: TOTALITY", "Promise 1: TOTALITY")}
        </T>
      </Fade>
      <MiniDiagram on={beat >= 2} delay={dl(2, 0.3)} cxA={110} cxB={250} />
      <Draw on={beat >= 2} d={arrowD(155, 222, 205, 222)} stroke={GREEN_DARK} sw={2} delay={dl(2, 0.9)} />
      <Draw on={beat >= 2} d={arrowD(155, 250, 205, 250)} stroke={GREEN_DARK} sw={2} delay={dl(2, 1.1)} />
      <Draw on={beat >= 2} d={arrowD(155, 278, 205, 278)} stroke={GREEN_DARK} sw={2} delay={dl(2, 1.3)} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={180} y={305} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"✓ Function"}
        </T>
      </Fade>

      <MiniDiagram on={beat >= 2} delay={dl(2, 0.5)} cxA={470} cxB={610} />
      <Draw on={beat >= 2} d={arrowD(515, 222, 565, 222)} stroke={INK} sw={2} delay={dl(2, 1.0)} />
      <Draw on={beat >= 2} d={arrowD(515, 250, 565, 250)} stroke={INK} sw={2} delay={dl(2, 1.2)} />
      <Draw on={beat >= 2} d={ringD(470, 278, 16, 12)} stroke={RED} sw={2} delay={dl(2, 1.8)} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={540} y={305} size={14} fill={RED} anchor="middle" weight={700}>
          {t("✗ not total", "✗ not total")}
        </T>
      </Fade>

      {/* beat 3 — Promise 2 (single-valued): 'a' sent two places */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={900} y={140} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Promise 2: SINGLE-VALUED", "Promise 2: SINGLE-VALUED")}
        </T>
      </Fade>
      <MiniDiagram on={beat >= 3} delay={dl(3, 0.3)} cxA={830} cxB={970} />
      <Draw on={beat >= 3} d={arrowD(875, 222, 925, 222)} stroke={INK} sw={2} delay={dl(3, 0.9)} />
      <Draw on={beat >= 3} d={arrowD(875, 222, 925, 250)} stroke={INK} sw={2} delay={dl(3, 1.1)} />
      <Draw on={beat >= 3} d={arrowD(875, 278, 925, 278)} stroke={INK} sw={2} delay={dl(3, 1.3)} />
      <Draw on={beat >= 3} d={ringD(830, 222, 16, 12)} stroke={RED} sw={2} delay={dl(3, 1.7)} />
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={900} y={305} size={14} fill={RED} anchor="middle" weight={700}>
          {t("✗ not single-valued", "✗ not single-valued")}
        </T>
      </Fade>

      {/* beat 4 — the formal definition, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={302} y={340} w={476} h={40} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          {"f:A→B ⇔ f⊆A×B, every a∈A is 1st coord of EXACTLY ONE pair"}
        </Chip>
      </Fade>

      {/* beat 5 — dabbawala analogy */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={405} size={14} fill={INK} anchor="middle">
          {t(
            "Dabbawala: no address=fails P1; two addresses=fails P2; two tiffins→1 office=fine!",
            "Dabbawala: address nahi=P1 fail; do addresses=P2 fail; do tiffins→1 office=theek!"
          )}
        </T>
      </Fade>

      {/* beat 6 — guardrail: function ⊂ relation */}
      <Draw on={beat >= 6} d="M 60 430 L 60 460" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={447} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Every function IS a relation; most relations are NOT functions",
            "Har function ek relation HAI; zyada relations functions NAHI hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
