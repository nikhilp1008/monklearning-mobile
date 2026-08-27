/**
 * M11 Ch04 · Section 38 — "Quadratic-roots toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a consolidated "notes page" of every formula this
 * subtopic derived (34–37), so each item lands as a boxed chip in taught order
 * and gets ticked off (a small drawn checkmark), rather than re-deriving live.
 *
 * Beats (board_reveal_at_english [0, 6.14, 16.64, 29.01, 39.17, 47.62, 65.79, 85.93]):
 *  0 heading: consolidated — quadratics over C
 *  1 formula (boxed): x = (-b±√D)/2a, D = b²-4ac
 *  2 formula (boxed): real coeff — D>0 distinct, D=0 equal, D<0 conjugate pair
 *  3 formula (boxed): D<0: x = (-b±i√(4ac-b²))/2a
 *  4 formula (boxed): α+β = -b/a, αβ = c/a
 *  5 formula (boxed): x²-(α+β)x+αβ=0; real from p+iq: x²-2px+(p²+q²)=0
 *  6 formula (boxed): √(a+ib) = ±(x+iy): x²=(|z|+a)/2, y²=(|z|-a)/2, sgn(xy)=sgn(b)
 *  7 guardrail: conjugate-root theorem applies to real coefficients only
 *
 * Layout plan (single stacked column of boxed chips, x=540, each with a small
 * drawn checkmark to its left as it's "ticked off" the toolkit — that tick is
 * the beat's hand action, distinct from the Chip's own fade):
 *  b0 | heading (15,amber_dark,w700)  | T mid | x540 y90  + underline y104
 *  b1 | boxed (17,ink,w700) + tick    | Chip  | x382.5..697.5 y118..160, tick x360 y139
 *  b2 | boxed (14,ink,w700) + tick    | Chip  | x296..784   y184..222, tick x274 y203
 *  b3 | boxed (15,ink,w700) + tick    | Chip  | x384.5..695.5 y246..284, tick x362 y265
 *  b4 | boxed (17,ink,w700) + tick    | Chip  | x408..672   y308..350, tick x386 y329
 *  b5 | boxed (13,ink,w700) + tick    | Chip  | x309.25..770.75 y374..410, tick x287 y392
 *  b6 | boxed (13,ink,w700) + tick    | Chip  | x319..761   y434..470, tick x297 y452
 *  b7 | red bar + guardrail (16,red)  | Draw/T| bar x60 y496..530, text x76 y513
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

function tickD(x: number, y: number): string {
  return `M ${x - 7} ${y} L ${x - 2} ${y + 5} L ${x + 7} ${y - 7}`;
}

export default function M11Ch04Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Quadratic-Roots Toolkit", "Quadratic-Roots Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Consolidated: quadratics over C", "Poora toolkit: quadratics over C")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(420, 104, 660, 104)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — the quadratic formula */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={382.5} y={118} w={315} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          x = (-b ± √D) / 2a,   D = b² - 4ac
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={tickD(360, 139)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 2 — discriminant forecast table */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={296} y={184} w={488} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          Real coeff:  D&gt;0 → distinct,  D=0 → equal,  D&lt;0 → conjugate pair
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={tickD(274, 203)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 3 — the D<0 root formula */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={384.5} y={246} w={311} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          D &lt; 0:   x = (-b ± i√(4ac - b²)) / 2a
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={tickD(362, 265)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 4 — Vieta's relations */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={408} y={308} w={264} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          α + β = -b/a,     α β = c/a
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={tickD(386, 329)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 5 — building a quadratic from roots */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={309.25} y={374} w={461.5} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          x² - (α+β)x + αβ = 0;    real from p+iq:  x² - 2px + (p²+q²) = 0
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={tickD(287, 392)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 6 — square root of a complex number */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={319} y={434} w={442} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          √(a+ib) = ±(x+iy):  x²=(|z|+a)/2, y²=(|z|-a)/2, sgn(xy)=sgn(b)
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={tickD(297, 452)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 7 — guardrail: the one boundary to never forget */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 496 L 60 530" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={513} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "The conjugate-root theorem applies to real coefficients only.",
            "Conjugate-root theorem sirf real coefficients ke liye hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
