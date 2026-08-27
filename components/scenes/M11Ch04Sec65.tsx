/**
 * M11 Ch04 · Section 65 — "Formula recap: your complete toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formula_recap — no segments_english/hinglish (expected, per
 * SCENE_AUTHORING_MATHS.md's data-source note); board_content read directly.
 * A "notes page" moment per the formula_recap/cheat_sheet contract — every
 * fact here was already taught and verified in its own earlier section;
 * this is the consolidated grid, same order as the chapter taught them.
 *
 * Beats (board_reveal_at_english [0, 7.34, 19.97, 31.15, 44.97, 61.01, 71.17, 86.27]):
 *  0 heading: the whole chapter's formulas, at a glance
 *  1 card (r0c0): powers of i, inverse
 *  2 card (r0c1, HIGH): conjugate, modulus (z-bar via Overline)
 *  3 card (r1c0): triangle inequality, polar form
 *  4 card (r1c1, HIGH): De Moivre powers, nth roots formula
 *  5 card (r2c0): omega identities, quadratic formula
 *  6 card (r2c1): Vieta's relations, complex square root
 *  7 card (r3, full width): rotation theorem, circle, modulus extrema
 *
 * Grid: 2 cols (x=60,560, w=460) x 3 rows (y=118,233,348, h=100) for cards 1-6;
 * card 7 spans the full width (x=60, w=960, y=463, h=100). Card component
 * (title + up to 3 stacked lines) mirrors the verified M11Ch04Sec59 toolkit
 * pattern. HIGH-emphasis cards (per JSON's own "emphasis":"high") get a
 * thicker GREEN border instead of AMBER_DARK.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { Overline } from "./math-kit";

const COL = [60, 560];
const ROW = [112, 234, 356];
const CARD_W = 460;
const CARD_H = 112;

function Card({
  on,
  delay,
  x,
  y,
  w = CARD_W,
  stroke,
  title,
  children,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w?: number;
  stroke: string;
  title: string;
  children: React.ReactNode;
}) {
  const sw = stroke === GREEN ? 2.6 : 2;
  return (
    <>
      <Fade on={on} delay={delay}>
        <Rect x={x} y={y} width={w} height={CARD_H} rx={14} fill={CREAM} stroke={stroke} strokeWidth={sw} />
      </Fade>
      <Fade on={on} delay={delay + 0.3}>
        <T x={x + 20} y={y + 20} size={12} fill={stroke} anchor="start" weight={700}>
          {title}
        </T>
      </Fade>
      {children}
    </>
  );
}

export default function M11Ch04Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Formula Recap: Your Complete Toolkit", "Formula Recap: Aapka Poora Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The whole chapter's formulas, at a glance", "Poore chapter ke formulas, ek nazar mein")}
        </T>
      </Fade>

      {/* beat 1 — powers of i, inverse */}
      <Card on={beat >= 1} delay={dl(1, 0)} x={COL[0]} y={ROW[0]} stroke={AMBER_DARK} title={t("Powers of i & Inverse", "i ke powers & Inverse")}>
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={COL[0] + 20} y={ROW[0] + 44} size={13} fill={INK} anchor="start">i² = -1;  iⁿ: use n mod 4</T>
          <T x={COL[0] + 20} y={ROW[0] + 68} size={13} fill={INK} anchor="start">z⁻¹ = (a - ib)/(a² + b²)</T>
        </Fade>
      </Card>

      {/* beat 2 — conjugate, modulus (HIGH) */}
      <Card on={beat >= 2} delay={dl(2, 0)} x={COL[1]} y={ROW[0]} stroke={GREEN} title={t("Conjugate & Modulus", "Conjugate & Modulus")}>
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={COL[1] + 20} y={ROW[0] + 44} size={13} fill={INK} anchor="start">z</T>
          <Overline on={beat >= 2} delay={dl(2, 0.5)} x={COL[1] + 20} y={ROW[0] + 44} size={13} textWidth={9} anchor="start" />
          <T x={COL[1] + 33} y={ROW[0] + 44} size={13} fill={INK} anchor="start">= a - ib</T>
          <T x={COL[1] + 20} y={ROW[0] + 66} size={13} fill={INK} anchor="start">z · z</T>
          <Overline on={beat >= 2} delay={dl(2, 0.7)} x={COL[1] + 62} y={ROW[0] + 66} size={13} textWidth={9} anchor="start" />
          <T x={COL[1] + 75} y={ROW[0] + 66} size={13} fill={INK} anchor="start">= |z|² = a²+b²</T>
          <T x={COL[1] + 20} y={ROW[0] + 88} size={12.5} fill={INK} anchor="start">|z₁z₂| = |z₁|·|z₂|</T>
        </Fade>
      </Card>

      {/* beat 3 — triangle inequality, polar form */}
      <Card on={beat >= 3} delay={dl(3, 0)} x={COL[0]} y={ROW[1]} stroke={AMBER_DARK} title={t("Inequality & Polar Form", "Inequality & Polar Form")}>
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={COL[0] + 20} y={ROW[1] + 44} size={13} fill={INK} anchor="start">|z₁+z₂| ≤ |z₁|+|z₂|</T>
          <T x={COL[0] + 20} y={ROW[1] + 68} size={13} fill={INK} anchor="start">z = r(cosθ+isinθ) = r·e^(iθ)</T>
        </Fade>
      </Card>

      {/* beat 4 — De Moivre, nth roots (HIGH) */}
      <Card on={beat >= 4} delay={dl(4, 0)} x={COL[1]} y={ROW[1]} stroke={GREEN} title={t("De Moivre & nth Roots", "De Moivre & nth Roots")}>
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={COL[1] + 20} y={ROW[1] + 44} size={13} fill={INK} anchor="start">zⁿ = rⁿ·e^(inθ)</T>
          <T x={COL[1] + 20} y={ROW[1] + 68} size={13} fill={INK} anchor="start">wₖ = r^(1/n)e^(i(θ+2kπ)/n), k=0,…,n-1</T>
        </Fade>
      </Card>

      {/* beat 5 — omega identities, quadratic formula */}
      <Card on={beat >= 5} delay={dl(5, 0)} x={COL[0]} y={ROW[2]} stroke={AMBER_DARK} title={t("Omega & Quadratic Formula", "Omega & Quadratic Formula")}>
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={COL[0] + 20} y={ROW[2] + 44} size={13} fill={INK} anchor="start">1+ω+ω² = 0,  ω³ = 1</T>
          <T x={COL[0] + 20} y={ROW[2] + 68} size={13} fill={INK} anchor="start">x = (-b±√D)/2a,  D = b²-4ac</T>
        </Fade>
      </Card>

      {/* beat 6 — Vieta, complex square root */}
      <Card on={beat >= 6} delay={dl(6, 0)} x={COL[1]} y={ROW[2]} stroke={AMBER_DARK} title={t("Vieta & Complex Square Root", "Vieta & Complex Square Root")}>
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={COL[1] + 20} y={ROW[2] + 44} size={13} fill={INK} anchor="start">α+β = -b/a,  αβ = c/a</T>
          <T x={COL[1] + 20} y={ROW[2] + 68} size={13} fill={INK} anchor="start">√(a+ib) = ±(x+iy), sgn(xy)=sgn(b)</T>
        </Fade>
      </Card>

      {/* beat 7 — rotation theorem, circle, modulus extrema (full width) */}
      <Card on={beat >= 7} delay={dl(7, 0)} x={60} y={478} w={960} stroke={RED} title={t("Rotation, Circle & Modulus Extrema", "Rotation, Circle & Modulus Extrema")}>
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={80} y={522} size={13} fill={INK} anchor="start">
            (z₂-z₁)/(z₃-z₁) = |ratio|·e^(iθ)  (θ at the pivot z₁)
          </T>
          <T x={80} y={546} size={13} fill={INK} anchor="start">
            |z-z₀| = r (circle);   ||z₀|-r| ≤ |z| ≤ |z₀|+r (extrema on the O-to-centre line)
          </T>
        </Fade>
      </Card>
    </Scene>
  );
}
