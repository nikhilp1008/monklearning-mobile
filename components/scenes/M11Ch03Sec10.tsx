/**
 * M11 Ch03 · Section 10 — "The three Pythagorean identities and the ranges"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — single centered column, identities land top to bottom.
 *
 * Beats (board_reveal_at_english [0, 4.27, 9.64, 14.25, 19.37, 40.87, 45.91, 62.21]):
 *  0 subtitle: the three Pythagorean identities
 *  1 HERO (high): sin²θ + cos²θ = 1
 *  2 1 + tan²θ = sec²θ (boxed) · 3 1 + cot²θ = csc²θ (boxed)
 *  4 mini right-triangle-on-circle sketch + explain: a²+b²=1, ÷cos² or ÷sin² for the others
 *  5 subheading: ranges - the built-in sanity check
 *  6 sin,cos∈[-1,1]; sec,csc never strictly inside (-1,1); tan,cot sweep all reals
 *  7 red-margin (high): value outside range = impossible, like negative mass
 *
 * Layout plan — centered column x390-690, mini diagram+explain at y285-395:
 *  b0 | subtitle (15,amber)               | T mid | x330..750  y84..99  (bl 92)
 *  b1 | hero "sin²θ+cos²θ=1"              | Chip  | x390..690  y110..166
 *  b2 | chip "1+tan²θ=sec²θ"              | Chip  | x410..670  y180..222
 *  b3 | chip "1+cot²θ=csc²θ"              | Chip  | x410..670  y232..274
 *  b4 | mini triangle-on-circle c(160,340)| Draw  | x105..215  y285..395
 *  b4 | "a²+b²=1 (circle eqn)" (15)       | T st  | x260..485  y314..328 (bl 320)
 *  b4 | "÷cos²θ or ÷sin²θ for others" (14)| T st  | x260..505  y340..354 (bl 346)
 *  b5 | "Ranges..." (17,amber,w700)        | T st  | x60..420   y407..423 (bl 415)
 *  b5 | underline                          | Draw  | x60..420  y423
 *  b6 | "sin, cos ∈ [-1,1]" (15)           | T st  | x60..250   y435..450 (bl 445)
 *  b6 | "sec, csc never in (-1,1)" (15)    | T st  | x60..320   y460..475 (bl 470)
 *  b6 | "tan, cot sweep all reals" (15)    | T st  | x60..300   y485..500 (bl 495)
 *  b7 | margin bar (red)                   | Draw  | x60  y515..565
 *  b7 | closer (15,red,w700)               | T st  | x76..600   y527..563 (2 lines)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, lineD, pointOnCircle } from "./math-kit";

const CX = 160;
const CY = 340;
const R = 55;
const THETA = 1.0;
const P = pointOnCircle(CX, CY, R, THETA);
const FOOT = { x: P.x, y: CY };

export default function M11Ch03Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} anchor="middle" script>
          {t("The Three Pythagorean Identities", "Teen Pythagorean Identities")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("...and the ranges they enforce", "...aur wo ranges jo ye enforce karte hain")}
        </T>
      </Fade>

      {/* beat 1 — HERO */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={390} y={110} w={300} h={56} fill={AMBER} textFill={INK} size={24} script={false}>
          sin²θ + cos²θ = 1
        </Chip>
      </Fade>

      {/* beat 2 — tan/sec identity */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={410} y={180} w={260} h={42} fill={AMBER} textFill={INK} size={18} script={false}>
          1 + tan²θ = sec²θ
        </Chip>
      </Fade>

      {/* beat 3 — cot/csc identity */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={410} y={232} w={260} h={42} fill={AMBER} textFill={INK} size={18} script={false}>
          1 + cot²θ = csc²θ
        </Chip>
      </Fade>

      {/* beat 4 — mini triangle-on-circle sketch + explain */}
      <Draw on={beat >= 4} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.4} delay={dl(4, 0)} />
      <Draw on={beat >= 4} d={lineD(CX, CY, FOOT.x, FOOT.y)} stroke={INK} sw={2} delay={dl(4, 0.4)} />
      <Draw on={beat >= 4} d={lineD(FOOT.x, FOOT.y, P.x, P.y)} stroke={INK} sw={2} delay={dl(4, 0.7)} />
      <Draw on={beat >= 4} d={lineD(CX, CY, P.x, P.y)} stroke={AMBER_DARK} sw={2.2} delay={dl(4, 1.0)} />
      <Draw on={beat >= 4} d={`M ${FOOT.x - 6} ${FOOT.y} L ${FOOT.x - 6} ${FOOT.y - 6} L ${FOOT.x} ${FOOT.y - 6}`} stroke={INK} sw={1.3} delay={dl(4, 1.3)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={174} y={354} size={12} fill={MUTED} anchor="middle">
          a
        </T>
        <T x={204} y={320} size={12} fill={MUTED} anchor="middle">
          b
        </T>
        <T x={168} y={308} size={12} fill={AMBER_DARK} anchor="middle">
          1
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={260} y={320} size={15} fill={INK} anchor="start">
          {t("a² + b² = 1 (circle equation)", "a² + b² = 1 (circle ki equation)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={260} y={346} size={14} fill={INK} anchor="start">
          {t("÷cos²θ or ÷sin²θ for the other two", "÷cos²θ ya ÷sin²θ karo baaki do ke liye")}
        </T>
      </Fade>

      {/* beat 5 — subheading: ranges */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={415} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Ranges - the built-in sanity check", "Ranges - built-in sanity check")}
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M 60 423 L 420 423" stroke={AMBER_DARK} sw={1.6} delay={dl(5, 0.5)} />

      {/* beat 6 — the three range facts */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={445} size={15} fill={INK} anchor="start">
          sin, cos ∈ [-1, 1]
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={60} y={470} size={15} fill={INK} anchor="start">
          {t("sec, csc never lie strictly inside (-1, 1)", "sec, csc kabhi (-1,1) ke andar strictly nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={60} y={495} size={15} fill={INK} anchor="start">
          {t("tan, cot sweep all reals", "tan, cot saare reals sweep karte hain")}
        </T>
      </Fade>

      {/* beat 7 — red-margin closer */}
      <Draw on={beat >= 7} d="M 60 515 L 60 565" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={539} size={15} fill={RED} anchor="start" weight={700}>
          {t("A value outside its range is impossible -", "Range se bahar value impossible hai -")}
        </T>
        <T x={76} y={561} size={15} fill={RED} anchor="start" weight={700}>
          {t("like negative mass. Range-check every answer.", "jaise negative mass. Har answer range-check karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
