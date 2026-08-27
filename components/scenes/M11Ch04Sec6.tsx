/**
 * M11 Ch04 · Section 6 — "The four operations and the inverse"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — each identity is assembled live: the LHS (with its
 * "=") writes first, then the RHS result arrives ~0.6-0.9s later, in the same
 * beat, never fading in whole. All five "=" signs land in the same vertical
 * column (LHS is right-anchored at x410) so the board reads like one teacher's
 * consistent handwriting, not five independent stamps.
 *
 * Beats (board_reveal_at_english [0, 9.39, 19.29, 26.88, 36.95, 50.26, 61.18, 75.35, 85.25]):
 *  0 heading: arithmetic of a + ib
 *  1 addition: z1+z2=(a+c)+i(b+d)
 *  2 subtraction: z1-z2=(a-c)+i(b-d)
 *  3 multiplication (high), boxed: z1·z2=(ac-bd)+i(ad+bc)
 *  4 explain: multiply like binomials, replace i²=-1, collect
 *  5 division: z1/z2=[(ac+bd)+i(bc-ad)]/(c²+d²), z2≠0
 *  6 explain: multiply top & bottom by c-id so denominator becomes real
 *  7 inverse (high), boxed green: z⁻¹=(a-ib)/(a²+b²), z≠0
 *  8 guardrail (red-margin): leaving a complex denominator is not standard form
 *
 * Layout plan (LHS anchor=end @x410, RHS anchor=start @x430, all rows x290..730 wide):
 *  b0 | heading (17,amber_dark)          | T mid  | x540 y102
 *  b0 | underline                         | Draw   | x420..660 y118
 *  b1 | LHS/RHS row (18,ink)              | T      | y150
 *  b2 | LHS/RHS row (18,ink)              | T      | y196
 *  b3 | LHS/RHS row + box (amber_dark)    | T+Draw | y249, box x290..730 y226..264
 *  b4 | explain (13,muted)                | T mid  | x540 y286
 *  b5 | LHS/RHS row + (z2≠0) (17,ink)     | T      | y330
 *  b6 | explain (13,muted)                | T mid  | x540 y356
 *  b7 | LHS(MathLine)/RHS row + (z≠0) + box (green) | T+Draw | y408, box x290..730 y385..423
 *  b8 | red bar + guardrail text          | Draw+T | x300 y447..481, text y464
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

type Part = string | { sup: string };
function MathLine({
  x,
  y,
  size,
  fill,
  parts,
  weight = 700,
}: {
  x: number;
  y: number;
  size: number;
  fill: string;
  parts: Part[];
  weight?: number;
}) {
  let cx = x;
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === "string") {
          const w = p.length * size * 0.52;
          const el = (
            <T key={i} x={cx} y={y} size={size} fill={fill} anchor="start" weight={weight}>
              {p}
            </T>
          );
          cx += w;
          return el;
        }
        const es = size * 0.62;
        const w = p.sup.length * es * 0.52;
        const el = (
          <T key={i} x={cx} y={y - size * 0.42} size={es} fill={fill} anchor="start" weight={weight}>
            {p.sup}
          </T>
        );
        cx += w;
        return el;
      })}
    </>
  );
}

export default function M11Ch04Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The Four Operations, and the Inverse", "Chaar Operations, aur Inverse")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Arithmetic of a + ib", "a + ib ki Arithmetic")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 420 118 L 660 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — addition */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={410} y={150} size={18} fill={INK} anchor="end" weight={700}>z₁ + z₂ =</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={430} y={150} size={18} fill={INK} anchor="start" weight={700}>(a + c) + i(b + d)</T>
      </Fade>

      {/* beat 2 — subtraction */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={410} y={196} size={18} fill={INK} anchor="end" weight={700}>z₁ - z₂ =</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={430} y={196} size={18} fill={INK} anchor="start" weight={700}>(a - c) + i(b - d)</T>
      </Fade>

      {/* beat 3 — multiplication (high), boxed after it lands */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={410} y={249} size={18} fill={INK} anchor="end" weight={700}>z₁ · z₂ =</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={430} y={249} size={18} fill={INK} anchor="start" weight={700}>(ac - bd) + i(ad + bc)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={roundRectD(290, 226, 440, 38, 10)} stroke={AMBER_DARK} sw={2} dur={0.6} />

      {/* beat 4 — explain multiplication */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={286} size={13} fill={MUTED} anchor="middle">
          {t("Multiply like binomials, replace i²=-1, then collect.", "Binomials ki tarah multiply karo, i²=-1 rakho, phir collect karo.")}
        </T>
      </Fade>

      {/* beat 5 — division */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={410} y={330} size={17} fill={INK} anchor="end" weight={700}>z₁ / z₂ =</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={430} y={330} size={17} fill={INK} anchor="start" weight={700}>[(ac+bd) + i(bc-ad)] / (c² + d²)</T>
        <T x={715} y={330} size={13} fill={MUTED} anchor="start">(z₂≠0)</T>
      </Fade>

      {/* beat 6 — explain division */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={356} size={13} fill={MUTED} anchor="middle">
          {t(
            "Multiply top & bottom by c - id, so the denominator becomes real.",
            "Top & bottom ko c - id se multiply karo, denominator real ban jaata hai."
          )}
        </T>
      </Fade>

      {/* beat 7 — inverse (high), boxed green after it lands */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <MathLine x={370} y={408} size={18} fill={INK} parts={["z", { sup: "-1" }, " ="]} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={430} y={408} size={17} fill={INK} anchor="start" weight={700}>(a - ib) / (a² + b²)</T>
        <T x={620} y={408} size={13} fill={MUTED} anchor="start">(z≠0)</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d={roundRectD(290, 385, 440, 38, 10)} stroke={GREEN} sw={2.2} dur={0.6} />

      {/* beat 8 — guardrail: standard form */}
      <Draw on={beat >= 8} delay={dl(8, 0.1)} d="M 300 447 L 300 481" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={316} y={464} size={16} fill={RED} anchor="start" weight={700}>
          {t("Leaving a complex denominator is not standard form.", "Complex denominator chhodna standard form nahi hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
