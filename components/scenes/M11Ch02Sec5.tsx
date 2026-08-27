/**
 * M11 Ch02 · Section 5 — "Proof that n(A × B) = mn — the slicing argument"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * FLAGGED — real proof, extra eye-check.
 *
 * Beats (board_reveal_at_english [0, 14.08, 26.28, 44.54, 58.11, 69.8, 86.7, 101.12]):
 *  0 title (always-on) · 1 setup: A,B with m,n elements; claim n(A×B)=mn
 *  2 formula: {aᵢ}×B = the slice for a fixed aᵢ (highlighted band)
 *  3 Step1: slice by 1st coordinate — every pair in exactly one slice
 *  4 Step2: each slice has exactly n pairs
 *  5 formula: two different slices are disjoint (∅ overlap)
 *  6 Step4: m disjoint slices of size n → total = mn ∎ (boxed)
 *  7 insight (red-margin): multiplication principle in set costume
 *
 * Layout plan — a vertical stack of "slice" bands is the whole proof, boxes estimated:
 *  b0 | title (script 26, red)          | T mid  | x300..780  y36..82  (bl 70)
 *  b1 | setup line (17)                  | T mid  | x276..804  y98..119 (bl 112)
 *  b1 | claim (19,amber,w800)            | T mid  | x440..640  y133..154 (bl 148)
 *  b2 | band a₁ (muted, h35)             | Draw   | x220..820  y170..205
 *  b2 | band a₂ (muted, h35)             | Draw   | x220..820  y219..254
 *  b2 | "⋮" between                      | T end  | x188..195  y254..272
 *  b2 | band aᵢ (amber, h50, HIGHLIGHT)  | Draw   | x220..820  y282..332
 *  b2 | pair-list inside band aᵢ (15)    | T mid  | x400..640  y302..322 (bl 312)
 *  b2 | "⋮" below                        | T end  | x188..195  y345..362
 *  b3+4| two step chips (14)             | Chip   | x240..530 / x550..840  y380..412
 *  b5 | disjointness formula (19)        | T mid  | x426..654  y430..451 (bl 445)
 *  b5 | sub-caption (13, muted)          | T mid  | x420..660  y467..481 (bl 477)
 *  b6 | conclusion chip (18,green)       | Chip   | x379..702  y505..545
 *  b7 | margin bar (red)                 | Draw   | x60  y560..585
 *  b7 | insight line (14, red)           | T st   | x76..517   y565..579 (bl 575)
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch02Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={70} size={26} fill={RED} anchor="middle" script>
          {t("Why pairs multiply — the slicing proof", "Pairs kyun multiply hote hain — slicing proof")}
        </T>
      </Fade>

      {/* beat 1 — setup and the claim */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={112} size={17} fill={INK} anchor="middle">
          {"A = {a₁, a₂, ...} (m elements);  B = {b₁, b₂, ...} (n elements)"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={148} size={19} fill={AMBER_DARK} anchor="middle" weight={800}>
          Claim: n(A × B) = mn
        </T>
      </Fade>

      {/* beat 2 — fix aᵢ, its slice {aᵢ}×B (highlighted band among m slices) */}
      <Draw on={beat >= 2} d={roundRectD(220, 170, 600, 35, 8)} stroke={MUTED} sw={1.6} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={195} y={192} size={14} fill={MUTED} anchor="end">
          a₁×B
        </T>
        <T x={520} y={192} size={13} fill={MUTED} anchor="middle">
          {t("n pairs", "n pairs")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d={roundRectD(220, 219, 600, 35, 8)} stroke={MUTED} sw={1.6} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={195} y={241} size={14} fill={MUTED} anchor="end">
          a₂×B
        </T>
        <T x={520} y={241} size={13} fill={MUTED} anchor="middle">
          {t("n pairs", "n pairs")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={195} y={267} size={16} fill={MUTED} anchor="end">
          ⋮
        </T>
      </Fade>
      <Draw on={beat >= 2} d={roundRectD(220, 282, 600, 50, 10)} stroke={AMBER_DARK} sw={3} delay={dl(2, 1.1)} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={195} y={312} size={15} fill={AMBER_DARK} anchor="end" weight={800}>
          aᵢ×B
        </T>
        <T x={520} y={312} size={15} fill={INK} anchor="middle" weight={700}>
          {"(aᵢ,b₁)   (aᵢ,b₂)   (aᵢ,b₃)   ..."}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.0)}>
        <T x={195} y={358} size={16} fill={MUTED} anchor="end">
          ⋮
        </T>
      </Fade>

      {/* beat 3 + 4 — the two steps of the argument */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={240} y={380} w={290} h={32} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          {t("Step 1: slice by 1st coordinate", "Step 1: pehle coordinate se slice")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={550} y={380} w={290} h={32} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          {t("Step 2: each slice has n pairs", "Step 2: har slice mein n pairs")}
        </Chip>
      </Fade>

      {/* beat 5 — the slices are disjoint */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={445} size={19} fill={INK} anchor="middle" weight={700}>
          {"({a₁}×B) ∩ ({a₂}×B) = ∅"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={540} y={477} size={13} fill={MUTED} anchor="middle">
          {t("(slices never overlap)", "(slices kabhi overlap nahi hote)")}
        </T>
      </Fade>

      {/* beat 6 — the total: m disjoint slices of size n */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={379} y={505} w={323} h={40} fill="#E8F5EC" stroke={GREEN_DARK} textFill={GREEN_DARK} size={18} script={false}>
          {"n + n + ... + n (m times) = mn ∎"}
        </Chip>
      </Fade>

      {/* beat 7 — the insight: multiplication principle in set costume */}
      <Draw on={beat >= 7} d="M 60 560 L 60 585" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={575} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Multiplication principle: m choices → n choices ⇒ mn outcomes",
            "Multiplication principle: m choices → n choices ⇒ mn outcomes"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
