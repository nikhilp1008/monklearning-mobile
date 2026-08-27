/**
 * Ch03 · Section 4 — "Board derivation, part one: building the diagonal"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.5, 31.2, 55.0, 72.2, 88.5, 89.5, 105.7, 126.0, 150.9]):
 *  0 heading: CBSE derivation, 2–3 marks
 *  1 statement line
 *  2 picture: O→P (A), P→Q (B), R = O→Q, ⊥ from Q to S
 *  3 small right Δ PQS: hypotenuse B, angle θ
 *  4 legs: PS = B cosθ · QS = B sinθ
 *  5 OS = A + B cosθ
 *  6 Pythagoras on OQS
 *  7 expand, cos²+sin² collapses
 *  8 hero: R = √(A²+B²+2AB cosθ) + "not the cosine rule" red
 *  9 red note: the ⊥ is the whole trick
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | title cx540 bl 50 s20 · underline M340 64 h400
 *  b1 | statement cx540 bl 88 s12
 *  b2 | O(120,470) P(400,470) Q(516,332) Q'(236,332) S(516,470) ·
 *       A arrow O→P lbl cx260 bl 454 · B arrow P→Q lbl st (475,395) ·
 *       R arrow O→Q lbl (293,390) · dashed sides O→Q'→Q · ext dashed P→(540,470) ·
 *       ⊥ dashed Q→S · right-angle M508 470 v-8 h8 · labels O(108,476) P(400,492)
 *       Q(524,326) S(516,492) · caption cx300 bl 526
 *  b3 | θ arc at P r30 · θ lbl (440,455) · line st x600 bl 220
 *  b4 | st x600 bl 260 / 292 (s15 formulas)
 *  b5 | st x600 bl 332
 *  b6 | st x600 bl 372
 *  b7 | st x600 bl 408 s13 · green script st x600 bl 434
 *  b8 | box x600..1020 y450..504 text cx810 bl 484 s19 · red script st x600 bl 530
 *  b9 | bar M66 546 v44 · lines st x84 bl 563 / 587
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
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the exam heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={20} fill={INK} script>
          {t(
            "CBSE DERIVATION — Parallelogram Law (2–3 marks)",
            "CBSE DERIVATION — Parallelogram Law (2–3 marks)"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)} d="M 340 64 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={88} size={12} fill={INK_LIGHT} script>
          {t(
            "two adjacent sides from a point → resultant = the diagonal from that SAME point",
            "ek point se do adjacent sides → resultant = usi SAME point se nikla diagonal"
          )}
        </T>
      </Fade>

      {/* beat 2 — the construction */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={arrowD(120, 470, 400, 470)} stroke={INK} sw={2.8} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={260} y={454} size={14} fill={INK} weight={700}>A</T>
        <T x={108} y={476} size={13} fill={INK_LIGHT} anchor="end">O</T>
        <T x={400} y={492} size={13} fill={INK_LIGHT}>P</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={arrowD(400, 470, 516, 332)} stroke={INK} sw={2.8} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={475} y={395} size={14} fill={INK} weight={700} anchor="start">B</T>
        <T x={524} y={326} size={13} fill={INK_LIGHT} anchor="start">Q</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.4)} d="M 120 470 L 236 332 L 516 332" stroke={MUTED} sw={1.4} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 5.6)} d={arrowD(120, 470, 516, 332)} stroke={GREEN} sw={3} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 6.7)}>
        <T x={293} y={390} size={15} fill={GREEN} weight={800}>R</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 8.4)} d="M 400 470 H 540" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 9.4)} d="M 516 332 V 470" stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 10.3)} d="M 508 470 v -8 h 8" stroke={AMBER_DARK} sw={1.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 10.9)}>
        <T x={516} y={492} size={13} fill={AMBER_DARK} weight={700}>S</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <T x={300} y={526} size={12} fill={AMBER_DARK} script>
          {t("drop a ⊥ from Q onto OP extended → S", "Q se OP-extended par ⊥ girao → S")}
        </T>
      </Fade>

      {/* beat 3 — the small triangle */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 430 470 A 30 30 0 0 0 419.3 446.9" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={440} y={455} size={12} fill={AMBER_DARK} weight={700}>θ</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={600} y={220} size={13} fill={INK} script anchor="start">
          {t(
            "small right Δ PQS — hypotenuse B, angle θ at P",
            "chhota right Δ PQS — hypotenuse B, P par angle θ"
          )}
        </T>
      </Fade>

      {/* beat 4 — read off the legs */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={600} y={260} size={15} fill={INK} weight={700} anchor="start">
          PS = B cos θ
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={600} y={292} size={15} fill={INK} weight={700} anchor="start">
          QS = B sin θ
        </T>
      </Fade>

      {/* beat 5 — the base grows */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={600} y={332} size={15} fill={INK} weight={700} anchor="start">
          OS = OP + PS = A + B cos θ
        </T>
      </Fade>

      {/* beat 6 — Pythagoras */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={600} y={372} size={15} fill={INK} weight={700} anchor="start">
          OQ² = (A + B cos θ)² + (B sin θ)²
        </T>
      </Fade>

      {/* beat 7 — expand and collapse */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={600} y={408} size={13} fill={INK} weight={700} anchor="start">
          = A² + 2AB cos θ + B²(cos²θ + sin²θ)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={600} y={434} size={12} fill={GREEN} script anchor="start">
          {t("cos²θ + sin²θ = 1 — the pair collapses", "cos²θ + sin²θ = 1 — jodi collapse ho gayi")}
        </T>
      </Fade>

      {/* beat 8 — the result */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.6)}
        d="M 612 450 h 396 q 12 0 12 12 v 30 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -30 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={810} y={484} size={19} fill={INK} weight={800}>
          R = √(A² + B² + 2AB cos θ)
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={600} y={530} size={12} fill={RED} script anchor="start">
          {t(
            "NOT the cosine rule — that one carries a MINUS",
            "cosine rule NAHI — us mein MINUS hota hai"
          )}
        </T>
      </Fade>

      {/* beat 9 — why the perpendicular */}
      <Draw on={beat >= 9} delay={dl(9, 0.8)} d="M 66 546 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={84} y={563} size={13} fill={RED} script anchor="start">
          {t(
            "the ⊥ splits B: along-A lengthens the base, across-A becomes the height",
            "⊥ ne B ko toda: A-wala hissa base badhata hai, aar-paar wala height banta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 8)}>
        <T x={84} y={587} size={13} fill={RED} script anchor="start">
          {t(
            "then Pythagoras assembles the diagonal — that is the entire idea",
            "phir Pythagoras diagonal jod deta hai — poora idea itna hi hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
