/**
 * M11 Ch02 · Section 9 — "Pitfalls and speed moves — Cartesian product"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid sequence of ringed/boxed pitfalls, closing subtopic 1.
 *
 * Beats (board_reveal_at_english [0, 9.13, 20.05, 35.84, 55.98, 67.33, 84.39]):
 *  0 title (always-on) · 1 pitfall1 (red-margin): n(A×B)=n(A)·n(B), NEVER the sum (crossed)
 *  2 why: pairing is every-with-every ⇒ PRODUCT (green confirm chip)
 *  3 pitfall2 (amber box): (a,b) vs (b,a) — read the FIRST slot
 *  4 pitfall3 (green box, high emphasis): subsets=2^(n(A)·n(B)), not the two common wrong forms
 *  5 explain: two-stage move + A=∅ shortcut
 *  6 speed moves (red-margin): n(A)=√n(A×A); common pairs = (n(A∩B))²
 *
 * Layout plan — single centered column, boxes estimated:
 *  b0 | title (script 27, red)           | T mid  | x310..770  y32..85  (bl 64)
 *  b1 | margin bar (red)                  | Draw   | x60  y95..125
 *  b1 | pitfall1 line (16, red)           | T st   | x76..372   y97..117 (bl 112) · "n(A)+n(B)" crossed
 *  b2 | chip "PRODUCT" (15,green)         | Chip   | x388..691  y138..170
 *  b3 | chip "(a,b) vs (b,a)" (16,amber)  | Chip   | x371..709  y200..236
 *  b4 | chip subset-formula (18,green)    | Chip   | x388..693  y255..293
 *  b4 | annotation (13, muted)            | T mid  | x?..?      y303..319 (bl 315)
 *  b5 | line1 (14)                        | T mid  | x?..?      y340..359 (bl 355)
 *  b5 | line2 (14,amber)                  | T mid  | x?..?      y371..390 (bl 386)
 *  b6 | margin bar (red)                  | Draw   | x60  y420..478
 *  b6 | line1 (15, red)                   | T st   | x76..?     y423..443 (bl 438)
 *  b6 | line2 (15, red)                   | T st   | x76..?     y455..475 (bl 470)
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} anchor="middle" script>
          {t("Pitfalls — Cartesian Product", "Pitfalls — Cartesian Product")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1: it's ALWAYS the product, never the sum */}
      <Draw on={beat >= 1} d="M 60 95 L 60 125" stroke={RED} sw={3} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={76} y={112} size={16} fill={RED} anchor="start" weight={700}>
          {"n(A×B) = n(A)·n(B) — NEVER "}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={298} y={112} size={16} fill={RED} anchor="start" weight={800}>
          n(A)+n(B)
        </T>
      </Fade>
      <Draw on={beat >= 1} d={crossD(296, 98, 76, 18)} stroke={RED} sw={2} delay={dl(1, 1.1)} />

      {/* beat 2 — why: pairing is every-with-every */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={388} y={138} w={303} h={32} fill={GREEN} textFill="#FFFEFB" size={15} script={false}>
          {t("Pairing = every-with-every ⇒ PRODUCT", "Pairing = every-se-every ⇒ PRODUCT hai")}
        </Chip>
      </Fade>

      {/* beat 3 — pitfall 2: (a,b) vs (b,a), read the first slot */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={371} y={200} w={338} h={36} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          {t("(a,b) vs (b,a) — read the FIRST slot!", "(a,b) vs (b,a) — PEHLA slot padho!")}
        </Chip>
      </Fade>

      {/* beat 4 — pitfall 3: the subset-count formula, and the two common wrong forms */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={388} y={255} w={305} h={38} fill={GREEN} textFill="#FFFEFB" size={18} script={false}>
          {"subsets of A×B = 2^(n(A)·n(B))"}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={315} size={13} fill={MUTED} anchor="middle">
          {"(not 2^(n(A)+n(B)), not n(A)·n(B))"}
        </T>
      </Fade>

      {/* beat 5 — the two-stage habit + the empty-set shortcut */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={355} size={14} fill={INK} anchor="middle">
          {t("Two-stage: count pairs first, then 2^(...)", "Two-stage: pehle pairs count karo, phir 2^(...)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={386} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("A = ∅ ⇒ A×B = ∅ instantly!", "A = ∅ ⇒ A×B = ∅ turant!")}
        </T>
      </Fade>

      {/* beat 6 — the two speed moves */}
      <Draw on={beat >= 6} d="M 60 420 L 60 478" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={438} size={15} fill={RED} anchor="start" weight={700}>
          {"Speed: n(A) = √n(A×A)"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={76} y={470} size={15} fill={RED} anchor="start" weight={700}>
          {"common pairs(A×B, B×A) = (n(A∩B))²"}
        </T>
      </Fade>
    </Scene>
  );
}
