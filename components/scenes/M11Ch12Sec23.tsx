/**
 * M11 Ch12 · Section 23 — "How the rules interlock"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED (three real derivations packed into one board: quotient rule
 * from the product rule, the remaining trig derivatives via the quotient rule, and a rigorous
 * Δy/Δx justification of the chain rule). Authored directly, no coordinate geometry — pure
 * algebra layout, verified term-by-term below.
 *
 * VERIFICATION (worked by hand before laying out pixels):
 *  Quotient: y=u/v -> u=yv. Product rule: u'=y'v+yv'. Solve: y'=(u'-yv')/v = (u'-(u/v)v')/v
 *  = (u'v-uv')/v². Matches board seq3. ✓
 *  cot x = cos x/sin x. Quotient rule: (−sin·sin − cos·cos)/sin² = −(sin²+cos²)/sin² = −1/sin²
 *  = −csc²x. Matches board seq4. ✓
 *  sec x=1/cos x -> quotient rule on 1/cos x: (0·cos − 1·(−sin))/cos² = sin/cos² = (1/cos)(sin/cos)
 *  = sec x tan x. ✓. csc x=1/sin x similarly gives −csc x cot x. ✓ Matches board seq5.
 *
 * board_reveal_at_english = [0, 11.43, 26.97, 46.42, 61.7, 78.59, 96.34, 110.85] (8 beats 0-7).
 * board_reveal_at_hinglish = [0, 10.75, 25.94, 41.98, 58.45, 73.9, 88.23, 101.63].
 *
 * Beats:
 *  0(title, always-on) | "How the rules interlock"
 *  1 | BLOCK1 setup: y=u/v -> u=yv -> product rule u'=y'v+yv'
 *  2 | BLOCK1 landed, HIGH, boxed: (u/v)' = (u'v-uv')/v²
 *  3 | BLOCK2: d/dx cot x = -(sin²x+cos²x)/sin²x = -csc²x
 *  4 | BLOCK2 landed, HIGH, boxed: d/dx sec x = sec x tan x, d/dx csc x = -csc x cot x
 *  5 | BLOCK3 setup: Δy/Δx = Δy/Δu · Δu/Δx
 *  6 | BLOCK3: as Δx->0, Δu->0 too -> each factor -> derivative -> dy/dx=dy/du·du/dx
 *  7 | closing red banner, HIGH: simplify -> spot outermost op -> peel outside-in
 *
 * Layout plan (4 stacked blocks, 20px gaps):
 *  BLOCK1 y92..236  | label y104, 2 text lines y132/158, underline y168, boxed Frac y182..236
 *  BLOCK2 y256..406 | label y268, formula+Frac y306(ext 284..317), boxed 2-line y336..406
 *  BLOCK3 y426..542 | label y438, 3xFrac row y476(ext 451..488), 2 text lines y512/538
 *  BANNER y554..590 | red box, centered text y576
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { Frac, roundRectD, checkD } from "./math-kit";

export default function M11Ch12Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("How the rules interlock", "Rules ek-doosre mein kaise lock hote hain")}
        </T>
      </Fade>

      {/* BLOCK 1 — quotient rule from product rule */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={104} size={13} fill={MUTED} anchor="start">
          {t("Quotient rule from product rule:", "Quotient rule, product rule se:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={132} size={16} fill={INK} anchor="start">
          y = u/v ⇒ u = yv
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={60} y={158} size={16} fill={INK} anchor="start" weight={700}>
          {"Product rule: u' = y'v + yv'"}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M58 168 L360 168" stroke={GREEN} sw={1.2} delay={dl(1, 1.4)} />

      <Draw on={beat >= 2} d={roundRectD(60, 182, 300, 54, 10)} stroke={GREEN} sw={2.2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={75} y={216} size={18} fill={GREEN_DARK} anchor="start" weight={700}>
          {"(u/v)' ="}
        </T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 0.9)} x={245} y={216} size={18} numerator="u'v − uv'" denominator="v²" width={150} fill={GREEN_DARK} />

      {/* BLOCK 2 — complete the trig table */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={268} size={13} fill={MUTED} anchor="start">
          {t("Complete the trig table — cot x = cos x/sin x:", "Trig table complete karo — cot x = cos x/sin x:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={306} size={16} fill={INK} anchor="start" weight={700}>
          d/dx cot x =
        </T>
      </Fade>
      <Frac on={beat >= 3} delay={dl(3, 0.8)} x={280} y={306} size={16} numerator="−(sin²x + cos²x)" denominator="sin²x" width={190} fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={400} y={306} size={16} fill={INK} anchor="start" weight={700}>
          {"= −csc²x"}
        </T>
      </Fade>

      <Draw on={beat >= 4} d={roundRectD(60, 336, 300, 70, 10)} stroke={GREEN} sw={2.2} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={75} y={362} size={15} fill={GREEN_DARK} anchor="start" weight={700}>
          {"d/dx sec x = sec x·tan x"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={75} y={390} size={15} fill={GREEN_DARK} anchor="start" weight={700}>
          {"d/dx csc x = −csc x·cot x"}
        </T>
      </Fade>

      {/* BLOCK 3 — chain rule, rigorously */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={438} size={13} fill={MUTED} anchor="start">
          {t("Chain rule, rigorously — via Δu:", "Chain rule, rigor se — Δu ke through:")}
        </T>
      </Fade>
      <Frac on={beat >= 5} delay={dl(5, 0.4)} x={170} y={476} size={18} numerator="Δy" denominator="Δx" width={50} fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={215} y={476} size={18} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Frac on={beat >= 5} delay={dl(5, 0.9)} x={260} y={476} size={18} numerator="Δy" denominator="Δu" width={50} fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={300} y={476} size={18} fill={INK} anchor="middle">
          ·
        </T>
      </Fade>
      <Frac on={beat >= 5} delay={dl(5, 1.4)} x={345} y={476} size={18} numerator="Δu" denominator="Δx" width={50} fill={INK} />

      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={512} size={14} fill={INK} anchor="start">
          {t("As Δx → 0, Δu → 0 too (inner is continuous).", "Δx → 0 pe, Δu bhi → 0 (inner continuous hai).")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)} dim={false}>
        <T x={60} y={538} size={15} fill={GREEN_DARK} anchor="start" weight={700}>
          {"⇒ dy/dx = dy/du · du/dx"}
        </T>
      </Fade>
      <Draw on={beat >= 6} d={checkD(340, 533, 16)} stroke={GREEN} sw={2.4} delay={dl(6, 1)} />

      {/* closing banner — master procedure */}
      <Draw on={beat >= 7} d="M270 554 L810 554 L810 590 L270 590 Z" stroke={RED} sw={2.2} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={540} y={577} size={16} fill={RED} anchor="middle" weight={800}>
          {t("Simplify → spot outermost op → peel outside-in", "Simplify → outermost op pehchano → outside-in peel karo")}
        </T>
      </Fade>
    </Scene>
  );
}
