/**
 * M11 Ch02 · Section 7 — "Worked: writing A × B, and the common-pairs speed trick"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (two examples, TOP = Ex1, BOTTOM = Ex2 speed trap).
 *
 * Beats (board_reveal_at_english [0, 16.3, 33.96, 51.97, 73.81, 95.49, 112.38, 129.54]):
 *  0 Example 1 given: A={2,3,5}, B={x,y} · 1 A×B listed (first pair highlighted amber)
 *  2 B×A listed (first pair highlighted green — shape flips) · 3 count + witness pair ⇒ differ
 *  4 Example 2 heading (JEE speed trap) + staged wrong reflex "0?" (crossed)
 *  5 star identity (A×B)∩(B×A)=(A∩B)×(A∩B), boxed · 6 concrete: A∩B={1,2} ⇒ 4 (boxed green)
 *  7 guardrail: unequal products can still overlap = (n(A∩B))²
 *
 * Layout plan — TOP zone (Ex1, y100..213) + divider + BOTTOM zone (Ex2, y280..504):
 *  b0 | given (19,amber,w700)            | T mid  | x330..750  y93..114 (bl 108)
 *  b1 | A×B row, 3 pieces (16)           | T st   | x336..744  y131..148 (bl 143)
 *  b2 | B×A row, 3 pieces (16)           | T st   | x336..744  y163..180 (bl 175)
 *  b3 | verification (15)                | T mid  | x?..?      y196..213 (bl 208)
 *  --divider-- y=280
 *  b4 | Ex2 heading (19,amber,w800)      | T mid  | x274..806  y291..312 (bl 306)
 *  b4 | "Reflex answer: 0?" (15)         | T st   | x476..604  y328..345 (bl 340) · crossed
 *  b5 | chip star identity (18)          | Chip   | x401..679  y367..403
 *  b6 | chip concrete answer (17,green)  | Chip   | x340..740  y420..460
 *  b7 | margin bar (red)                 | Draw   | x60  y482..512
 *  b7 | guardrail (14, red)              | T st   | x76..503   y489..503 (bl 500)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={66} size={26} fill={RED} anchor="middle" script>
          {t("Worked Examples — Cartesian Product", "Solved Examples — Cartesian Product")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={108} size={19} fill={AMBER_DARK} anchor="middle" weight={700}>
          Example 1: A = {"{2, 3, 5}"},  B = {"{x, y}"}
        </T>
      </Fade>

      {/* beat 1 — A×B listed, first pair highlighted */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={336} y={143} size={16} fill={INK} anchor="start" weight={700}>
          A × B = {"{"}
        </T>
        <T x={408} y={143} size={16} fill={AMBER_DARK} anchor="start" weight={800}>
          (2,x)
        </T>
        <T x={448} y={143} size={16} fill={INK} anchor="start" weight={700}>
          {", (2,y), (3,x), (3,y), (5,x), (5,y)}"}
        </T>
      </Fade>

      {/* beat 2 — B×A listed, first pair highlighted (shape flips) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={336} y={175} size={16} fill={INK} anchor="start" weight={700}>
          B × A = {"{"}
        </T>
        <T x={408} y={175} size={16} fill={GREEN_DARK} anchor="start" weight={800}>
          (x,2)
        </T>
        <T x={448} y={175} size={16} fill={INK} anchor="start" weight={700}>
          {", (x,3), (x,5), (y,2), (y,3), (y,5)}"}
        </T>
      </Fade>

      {/* beat 3 — count + witness pair proves they differ */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={208} size={15} fill={INK} anchor="middle">
          {t(
            "n(A×B) = 3×2 = 6.  (2,x) ∈ A×B but ∉ B×A ⇒ differ!",
            "n(A×B) = 3×2 = 6.  (2,x) A×B mein hai par B×A mein nahi ⇒ alag!"
          )}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 4} d="M 100 280 L 980 280" stroke={AMBER_DARK} sw={1} delay={dl(4, 0)} />

      {/* beat 4 — Example 2 heading + the tempting wrong reflex, crossed out */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={306} size={19} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t(
            "Example 2 (JEE speed trap): common pairs of A×B and B×A",
            "Example 2 (JEE speed trap): A×B aur B×A ke common pairs"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={476} y={340} size={15} fill={INK} anchor="start">
          {t("Reflex answer: ", "Reflex answer: ")}
        </T>
        <T x={588} y={340} size={15} fill={RED} anchor="start" weight={800}>
          0?
        </T>
      </Fade>
      <Draw on={beat >= 4} d={crossD(586, 326, 22, 18)} stroke={RED} sw={2} delay={dl(4, 1.5)} />

      {/* beat 5 — the one-line weapon: the star identity */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={401} y={367} w={278} h={36} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          {"(A×B)∩(B×A) = (A∩B)×(A∩B)"}
        </Chip>
      </Fade>

      {/* beat 6 — the concrete count */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={340} y={420} w={400} h={40} fill={GREEN} textFill="#FFFEFB" size={17} script={false}>
          {"A={1,2}, B={1,2,3}: A∩B={1,2} ⇒ common = 2×2 = 4"}
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: unequal products can still overlap */}
      <Draw on={beat >= 7} d="M 60 482 L 60 512" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={500} size={14} fill={RED} anchor="start">
          {t(
            '"A×B ≠ B×A" does NOT mean zero overlap — overlap = (n(A∩B))²',
            '"A×B ≠ B×A" ka matlab zero overlap NAHI — overlap = (n(A∩B))²'
          )}
        </T>
      </Fade>
    </Scene>
  );
}
