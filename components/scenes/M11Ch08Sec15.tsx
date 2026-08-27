/**
 * M11 Ch08 · Section 15 — "Scattered terms via the equidistant property"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: a_1+a_24=a_5+a_20=a_10+a_15 (each pair is equidistant from
 * the AP's center, so each sums to a+l). Given sum of all 6 = 225 = 3
 * equal pairs ⇒ each pair = 75. S_24=(24/2)(a_1+a_24)=12×75=900 ✓.
 *
 * Beats (en [0, 10.92, 29.35, 44.54, 56.23, 72.7, 81.32]):
 *  0 title (always-on)
 *  1 THE DEMO: 6 scattered terms, nested arcs pairing equidistant ones
 *  2 caption: three equal sums
 *  3 formula: 3(a_1+a_24)=225 ⇒ a_1+a_24=75
 *  4 formula: S_24 = 12×75 = 900
 *  5 red-margin: no need for a or d individually
 *  6 boxed answer
 *
 * Layout plan:
 *  b1 | 6 labels bl82 cx140/290/440/590/740/890 · dots y100 · 3 nested arcs
 *       dip125/150/175 · formula bl205 cx540
 *  b2 | text bl235 cx540
 *  b3 | text bl268 cx540
 *  b4 | text bl301 cx540
 *  b5 | red bar x76 y326..396 · text bl346/386 x96
 *  b6 | chip x400 y416 w280 h44 (text bl~443)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, AMBER_DARK, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { IntervalDot } from "./math-kit";

function arcD(x1: number, x2: number, y: number, dip: number): string {
  return `M ${x1} ${y} Q ${(x1 + x2) / 2} ${dip} ${x2} ${y}`;
}

export default function M11Ch08Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cx = [140, 290, 440, 590, 740, 890];
  const labels = ["a₁", "a₅", "a₁₀", "a₁₅", "a₂₀", "a₂₄"];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("Given a₁+a₅+a₁₀+a₁₅+a₂₀+a₂₄ = 225, find S₂₄", "a₁+a₅+a₁₀+a₁₅+a₂₀+a₂₄ = 225 diya, S₂₄ nikalo")}
        </T>
      </Fade>

      {/* beat 1 — six scattered terms, nested equidistant pairing */}
      {cx.map((x, i) => (
        <React.Fragment key={i}>
          <IntervalDot on={beat >= 1} delay={dl(1, 0.15 + i * 0.15)} x={x} y={100} open={false} r={4.5} stroke={AMBER_DARK} />
          <Fade on={beat >= 1} delay={dl(1, 0.25 + i * 0.15)}>
            <T x={x} y={82} size={13} fill={INK} anchor="middle">{labels[i]}</T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arcD(450, 580, 100, 125)} stroke={GREEN_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={arcD(300, 730, 100, 150)} stroke={GREEN_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d={arcD(150, 880, 100, 175)} stroke={GREEN_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={540} y={205} size={15} fill={INK} anchor="middle">
          {"a₁+a₂₄ = a₅+a₂₀ = a₁₀+a₁₅"}
        </T>
      </Fade>

      {/* beat 2 — three equal sums */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={235} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("the six given terms pair into three EQUAL sums", "chhah terms teen EQUAL sums mein pair hote hain")}
        </T>
      </Fade>

      {/* beat 3 — solve for the pair sum */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={268} size={16} fill={INK} anchor="middle">
          {"3(a₁+a₂₄) = 225  ⇒  a₁+a₂₄ = 75"}
        </T>
      </Fade>

      {/* beat 4 — the sum formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={301} size={16} fill={INK} anchor="middle">
          {"S₂₄ = (24/2)(a₁+a₂₄) = 12 × 75 = 900"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: linearity does the work */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 326 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={346} size={15} fill={RED} anchor="start" script>
          {t("no need for a or d individually —", "a ya d alag se nahi chahiye —")}
        </T>
        <T x={96} y={386} size={15} fill={RED} anchor="start" script>
          {t("linearity does the work", "linearity kaam kar deti hai")}
        </T>
      </Fade>

      {/* beat 6 — boxed answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={400} y={416} w={280} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={17}>
          {"S₂₄ = 900"}
        </Chip>
      </Fade>
    </Scene>
  );
}
