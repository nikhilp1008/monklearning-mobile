/**
 * M11 Ch04 · Section 52 — "Worked (JEE Advanced): the cubic-sum identity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — numeric a=1,b=2,c=3 example; the cube-roots-of-unity
 * triangle callback appears at the beat that mentions the ω-factorization (b6), and its
 * conjugate pair (ω, ω²) is ringed at the guardrail (b7) to show "factors pair up to stay real".
 *
 * Beats (board_reveal_at_english [0, 7, 16.04, 29.53, 36.61, 53.25, 58.79, 72.53]):
 *  0 heading: a³+b³+c³-3abc (subtitle)
 *  1 text: evaluate for a=1,b=2,c=3 using the standard factorization
 *  2 formula: a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)
 *  3 formula: a+b+c = 1+2+3 = 6
 *  4 formula: a²+b²+c²-ab-bc-ca = 14-11 = 3
 *  5 formula (high, boxed): (6)(3) = 18
 *  6 text: the ω-factorization gives the same product via 3 complex linear factors —
 *    triangle callback appears (1, ω, ω²)
 *  7 guardrail (red-margin): real answer, complex tools — factors pair up to stay real —
 *    ring the conjugate pair ω, ω²
 *
 * Layout plan (left column x90 formulas, triangle callback top-right c(900,180) r55):
 *  b0 | subtitle                     | T mid | x540 y90
 *  b1 | text row                     | T st  | x90 y128
 *  b2 | formula row                  | T st  | x90 y166
 *  b3 | formula row                  | T st  | x90 y206
 *  b4 | formula row                  | T st  | x90 y246
 *  b5 | chip (high, green)           | Chip  | x90 y274..312
 *  b6 | text row                     | T st  | x90 y352
 *  b6 | triangle circle + 1,ω,ω²     | Draw/T| c(900,180) r55
 *  b6 | chip "= 18 too"              | Chip  | x790 y245..277
 *  b7 | red bar + guardrail text     | Draw/T| x70 y392..426 / x86 y414
 *  b7 | ring ω, ω² (conjugate pair)  | Draw  |
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
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, circleD } from "./math-kit";

const TCX = 900, TCY = 180, TR = 55;
const triPts = [0, 1, 2].map((k) => pointOnCircle(TCX, TCY, TR, k * ((2 * Math.PI) / 3)));
const triLabelPts = [0, 1, 2].map((k) => pointOnCircle(TCX, TCY, TR + 22, k * ((2 * Math.PI) / 3)));
const triLabels = ["1", "ω", "ω²"];

export default function M11Ch04Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked (JEE Advanced): The Cubic-Sum Identity", "Worked (JEE Advanced): Cubic-Sum Identity")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          a³ + b³ + c³ - 3abc
        </T>
      </Fade>

      {/* beat 1 — the given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={90} y={128} size={16} fill={INK} anchor="start">
          {t("Evaluate for a=1, b=2, c=3.", "a=1, b=2, c=3 ke liye evaluate karo.")}
        </T>
      </Fade>

      {/* beat 2 — the standard real factorization */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={90} y={168} size={15} fill={INK} anchor="start">
          a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={90} y={208} size={16} fill={INK} anchor="start">
          a+b+c = 1+2+3 = 6
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={90} y={248} size={16} fill={INK} anchor="start">
          a²+b²+c²-ab-bc-ca = 14-11 = 3
        </T>
      </Fade>

      {/* beat 5 — land the result */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={90} y={276} w={180} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={18} script={false}>
          (6)(3) = 18
        </Chip>
      </Fade>

      {/* beat 6 — the ω-version, and the callback triangle */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={90} y={358} size={14} fill={INK} anchor="start">
          {t(
            "The ω-factorization gives the same product via 3 complex linear factors.",
            "ω-factorization same product deta hai, teen complex linear factors se."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d={circleD(TCX, TCY, TR)} stroke={MUTED} sw={1.4} dur={0.6} />
      {[0, 1, 2].map((k, i) => (
        <React.Fragment key={k}>
          <Draw on={beat >= 6} delay={dl(6, 0.8 + i * 0.25)} d={arrowD(TCX, TCY, triPts[k].x, triPts[k].y)} stroke={k === 0 ? INK : AMBER_DARK} sw={1.8} dur={0.4} />
          <Fade on={beat >= 6} delay={dl(6, 1 + i * 0.25)}>
            <T x={triLabelPts[k].x} y={triLabelPts[k].y} size={13} fill={k === 0 ? INK : AMBER_DARK} anchor="middle" weight={700}>
              {triLabels[k]}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={TCX} y={TCY + TR + 50} size={12} fill={GREEN} anchor="middle" script>
          {t("= 18 too", "= 18 too")}
        </T>
      </Fade>

      {/* beat 7 — guardrail: real answer, complex tools */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 70 400 L 70 434" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={86} y={422} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Real answer, complex tools — the factors pair up to stay real.",
            "Real answer, complex tools — factors pair up hoke real reh jaate hain."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={ringD(triPts[1].x, triPts[1].y, 15, 13)} stroke={GREEN} sw={2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d={ringD(triPts[2].x, triPts[2].y, 15, 13)} stroke={GREEN} sw={2} dur={0.5} />
    </Scene>
  );
}
