/**
 * M11 Ch04 · Section 64 — "Pitfalls & pro-tips: Argand geometry and loci"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes subtopic 6 (Geometry of Complex Numbers) and the chapter.
 * A rapid sequence of 7 ringed/boxed pitfall cards, one per beat, in a
 * 4-card top row + 3-card bottom row grid. Card 3 directly recalls Sec63's
 * guardrail (arc, not full circle) in miniature; card 4 recalls Sec61
 * (|z0|±r); card 6 recalls Sec62 (rotation theorem).
 *
 * Beats (board_reveal_at_english [0, 8.19, 20.65, 33.54, 42.24, 53.42, 67.41, 76.54]):
 *  0 subtitle: "Geometry traps, locus shortcuts"
 *  1 card1 (red-margin, HIGH): e^(iθ) anticlockwise, e^(-iθ) clockwise — ratio order
 *  2 card2: Apollonius k=1 is the bisector LINE, not a circle
 *  3 card3 (red-margin): arg-locus is an ARC, never the full circle (mini icon)
 *  4 card4: modulus extrema |z0|±r
 *  5 card5: pro-tip — translate words to a z-equation (3-row table)
 *  6 card6 (red-margin): vertex problems → rotation theorem
 *  7 card7: linearise with |w|²=w·w̄; |z0|±r recap (final, green)
 *
 * Layout plan (grid, row1 y112..282 h170, row2 y320..540 h220):
 *  b0 | subtitle (15,amber_dark,w700)  | T mid | x540 y92
 *  b1 | card1 RED   x64..284   | roundRectD border + 4 lines y136/166/196/226
 *  b2 | card2 AMBER x308..528  | border + 4 lines, crossD over "circle ✗" (392,156,52,14)
 *  b3 | card3 RED   x552..772 | border + header y136 + mini semicircle icon c(662,195) r26 + note y246
 *  b4 | card4 AMBER x796..1016| border + 4 lines y136/166/196/226
 *  b5 | card5 AMBER x60..360  | border + header y348 + 3 rows y378/408/438 + note y472
 *  b6 | card6 RED   x390..690 | border + header y348 + 3 lines y380/412/448
 *  b7 | card7 GREEN x720..1020| border + header y348 + line(WBar) y378 + line y408 + note y442
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, angleArcD, Overline } from "./math-kit";

/** "w" with a drawn overline (mean/linearise identity |w|²=w·w̄), same pattern
 * as M11Ch04Sec12/13's ZBar — x/y/size/anchor must match the plain T call. */
function WBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
}) {
  const w = size * 0.62;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={700}>
          w
        </T>
      </Fade>
      <Overline on={on} delay={delay + 0.15} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

/** A ringed/boxed pitfall card: rounded border + staggered stacked lines. */
function Card({
  on,
  delay,
  x,
  y,
  w,
  h,
  stroke,
  children,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w: number;
  h: number;
  stroke: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Draw on={on} delay={delay} d={roundRectD(x, y, w, h, 14)} stroke={stroke} sw={2.2} dur={0.6} />
      {children}
    </>
  );
}

export default function M11Ch04Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Pitfalls and Pro-Tips: Argand Geometry", "Pitfalls aur Pro-Tips: Argand Geometry")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Geometry traps, locus shortcuts", "Geometry traps, locus shortcuts")}
        </T>
      </Fade>

      {/* beat 1 — card 1: rotation direction, ratio order (RED, high) */}
      <Card on={beat >= 1} delay={dl(1, 0)} x={64} y={112} w={220} h={170} stroke={RED}>
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={174} y={136} size={14} fill={RED} anchor="middle" weight={700}>
            {t("Fix the ratio order", "Ratio order fix karo")}
          </T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          <T x={174} y={166} size={13} fill={INK} anchor="middle">e^(iθ) → anticlockwise</T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.2)}>
          <T x={174} y={196} size={13} fill={INK} anchor="middle">e^(-iθ) → clockwise</T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.6)}>
          <T x={174} y={226} size={12} fill={RED} anchor="middle">
            {t("flip ratio ⇒ flip sign", "ratio flip ⇒ sign flip")}
          </T>
        </Fade>
      </Card>

      {/* beat 2 — card 2: Apollonius k=1 is a LINE, not a circle (AMBER) */}
      <Card on={beat >= 2} delay={dl(2, 0)} x={308} y={112} w={220} h={170} stroke={AMBER}>
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={418} y={136} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
            Apollonius, k = 1
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.9)}>
          <T x={418} y={166} size={13} fill={RED} anchor="middle">circle ✗</T>
        </Fade>
        <Draw on={beat >= 2} delay={dl(2, 1.3)} d={crossD(392, 156, 52, 14)} stroke={RED} sw={2} dur={0.4} />
        <Fade on={beat >= 2} delay={dl(2, 1.8)}>
          <T x={418} y={196} size={13} fill={GREEN} anchor="middle" weight={700}>
            {t("→ bisector LINE ✓", "→ bisector LINE ✓")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 2.2)}>
          <T x={418} y={226} size={11} fill={MUTED} anchor="middle">
            {t("(equal distances)", "(equal distances)")}
          </T>
        </Fade>
      </Card>

      {/* beat 3 — card 3: arg-locus is an ARC, never the full circle (RED) — mini icon */}
      <Card on={beat >= 3} delay={dl(3, 0)} x={552} y={112} w={220} h={170} stroke={RED}>
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={662} y={136} size={14} fill={RED} anchor="middle" weight={700}>
            {t("Arg-locus = ARC", "Arg-locus = ARC")}
          </T>
        </Fade>
        <Draw on={beat >= 3} delay={dl(3, 0.9)} d={angleArcD(662, 195, 26, 0, Math.PI)} stroke={GREEN} sw={2.4} dur={0.4} />
        <Draw on={beat >= 3} delay={dl(3, 1.3)} d={angleArcD(662, 195, 26, Math.PI, 2 * Math.PI)} stroke={RED} sw={2.4} dur={0.4} />
        <Fade on={beat >= 3} delay={dl(3, 1.8)}>
          <T x={662} y={246} size={11} fill={RED} anchor="middle">
            {t("not the full circle", "poora circle nahi")}
          </T>
        </Fade>
      </Card>

      {/* beat 4 — card 4: modulus extrema |z0|±r (AMBER) */}
      <Card on={beat >= 4} delay={dl(4, 0)} x={796} y={112} w={220} h={170} stroke={AMBER}>
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={906} y={136} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
            {t("Modulus extrema", "Modulus extrema")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 0.9)}>
          <T x={906} y={166} size={13} fill={INK} anchor="middle">max|z| = |z₀| + r</T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.2)}>
          <T x={906} y={196} size={13} fill={INK} anchor="middle">min|z| = ||z₀| − r|</T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.6)}>
          <T x={906} y={226} size={12} fill={MUTED} anchor="middle" script>
            {t("no calculus needed", "calculus ki zaroorat nahi")}
          </T>
        </Fade>
      </Card>

      {/* beat 5 — card 5: translate words to a z-equation (AMBER, wide) */}
      <Card on={beat >= 5} delay={dl(5, 0)} x={60} y={320} w={300} h={220} stroke={AMBER}>
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={210} y={348} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
            {t("Translate words → equation", "Words → z-equation")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.9)}>
          <T x={210} y={378} size={13} fill={INK} anchor="middle">
            {t("distance from a point → |z − z₀|", "point se distance → |z − z₀|")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.3)}>
          <T x={210} y={408} size={13} fill={INK} anchor="middle">
            {t("equidistant → perpendicular bisector", "equidistant → perp. bisector")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.7)}>
          <T x={210} y={438} size={13} fill={INK} anchor="middle">
            {t("constant angle → arc", "constant angle → arc")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 2.2)}>
          <T x={210} y={472} size={11} fill={MUTED} anchor="middle" script>
            {t("(rarely need a + ib)", "(shaayad hi a + ib chahiye)")}
          </T>
        </Fade>
      </Card>

      {/* beat 6 — card 6: vertex problems → rotation theorem (RED, wide) */}
      <Card on={beat >= 6} delay={dl(6, 0)} x={390} y={320} w={300} h={220} stroke={RED}>
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={540} y={348} size={14} fill={RED} anchor="middle" weight={700}>
            {t("Vertex problems", "Vertex problems")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 0.9)}>
          <T x={540} y={380} size={14} fill={INK} anchor="middle">
            {t("→ rotation theorem", "→ rotation theorem")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.3)}>
          <T x={540} y={412} size={15} fill={INK} anchor="middle" weight={700}>displacement × e^(iθ)</T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.8)}>
          <T x={540} y={448} size={12} fill={MUTED} anchor="middle" script>
            {t("(θ = angle at the pivot vertex)", "(θ = pivot vertex ka angle)")}
          </T>
        </Fade>
      </Card>

      {/* beat 7 — card 7: keep in your pocket (GREEN, wide, final recap) */}
      <Card on={beat >= 7} delay={dl(7, 0)} x={720} y={320} w={300} h={220} stroke={GREEN}>
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={870} y={348} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>
            {t("Keep in your pocket", "Yaad rakhna")}
          </T>
        </Fade>
        <Fade on={beat >= 7} delay={dl(7, 0.9)}>
          <T x={850} y={378} size={13} fill={INK} anchor="end">|w|² = w ·</T>
        </Fade>
        <WBar on={beat >= 7} delay={dl(7, 1.0)} x={856} y={378} size={13} anchor="start" fill={INK} />
        <Fade on={beat >= 7} delay={dl(7, 1.1)}>
          <T x={875} y={378} size={13} fill={INK} anchor="start">(linearise)</T>
        </Fade>
        <Fade on={beat >= 7} delay={dl(7, 1.5)}>
          <T x={870} y={408} size={13} fill={INK} anchor="middle">
            {t("|z₀| ± r for extremes", "|z₀| ± r extremes ke liye")}
          </T>
        </Fade>
        <Fade on={beat >= 7} delay={dl(7, 1.9)}>
          <T x={870} y={442} size={11} fill={MUTED} anchor="middle" script>
            {t("(both, every single time)", "(dono, har baar)")}
          </T>
        </Fade>
      </Card>
    </Scene>
  );
}
