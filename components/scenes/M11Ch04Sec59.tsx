/**
 * M11 Ch04 · Section 59 — "Argand geometry & loci toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — closes subtopic 6 (Geometry of Complex Numbers).
 *
 * Per SCENE_AUTHORING_MATHS.md's "formula_recap / cheat_sheet" guidance: this is
 * a "notes page" moment, not new teaching — a grid of boxed formulas revealed in
 * the same order sections 54-58 taught them, one card per beat. Every fact and
 * every piece of geometry here was already built and verified in its own section
 * (54=position vectors, 55=rotation theorem, 56=lines, 57=circles/Apollonius,
 * 58=arg-loci/equilateral/modulus-extrema) — this section is deliberately just
 * the consolidated symbolic summary, matching the cheat_sheet contract.
 *
 * Beats (board_reveal_at_english [0, 5.03, 13.31, 26.88, 40.02, 52.99, 61.95, 70.49]):
 *  0 heading: consolidated — geometry in z
 *  1 card (row1,col1): distance / midpoint / centroid
 *  2 card (row1,col2, HIGH emphasis): rotation theorem + "×i = +90°"
 *  3 card (row2,col1): collinearity + perpendicular bisector
 *  4 card (row2,col2): circle + Apollonius (k≠1 ⇒ circle)
 *  5 card (row3,col1): arg-locus arc + equilateral identity
 *  6 card (row3,col2, HIGH emphasis): modulus extrema inequality
 *  7 red-margin banner: |w|²=w·w̄ linearises every locus (drawn Overline on the bar)
 *
 * Grid: 2 cols (x=60,560, w=460) × 3 rows (y=135,260,385, h=105). Each card is a
 * plain <Rect> in a Fade (never Draw+fill — Draw's fill isn't opacity-gated by
 * "on", only its stroke-dashoffset is, so a filled Draw would show pre-beat).
 * HIGH-emphasis cards (rotation theorem, modulus extrema, per the JSON's own
 * "emphasis":"high" flag) get a thicker GREEN border instead of AMBER_DARK.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { Overline } from "./math-kit";

const COL = [60, 560];
const ROW = [135, 260, 385];
const CARD_W = 460;
const CARD_H = 105;

function Card({
  on,
  delay,
  x,
  y,
  stroke,
  title,
  titleColor,
  line1,
  line2,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  stroke: string;
  title: string;
  titleColor: string;
  line1: string;
  line2: string;
}) {
  const sw = stroke === GREEN ? 2.6 : 2;
  return (
    <>
      <Fade on={on} delay={delay}>
        <Rect x={x} y={y} width={CARD_W} height={CARD_H} rx={14} fill={CREAM} stroke={stroke} strokeWidth={sw} />
      </Fade>
      <Fade on={on} delay={delay + 0.3}>
        <T x={x + 20} y={y + 18} size={12} fill={titleColor} anchor="start" weight={700}>
          {title}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 0.6}>
        <T x={x + 20} y={y + 48} size={13} fill={INK} anchor="start">
          {line1}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 0.95}>
        <T x={x + 20} y={y + 78} size={13} fill={INK} anchor="start">
          {line2}
        </T>
      </Fade>
    </>
  );
}

export default function M11Ch04Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} anchor="middle" script>
          {t("Argand Geometry & Loci Toolkit", "Argand Geometry aur Loci Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Consolidated: geometry in z", "Consolidated: z mein geometry")}
        </T>
      </Fade>

      {/* beat 1 — distance / midpoint / centroid */}
      <Card
        on={beat >= 1}
        delay={dl(1, 0)}
        x={COL[0]}
        y={ROW[0]}
        stroke={AMBER_DARK}
        titleColor={AMBER_DARK}
        title="Distance · Midpoint · Centroid"
        line1="dist = |z₁-z₂|"
        line2="mid = (z₁+z₂)/2,  centroid = (z₁+z₂+z₃)/3"
      />

      {/* beat 2 — rotation theorem (high emphasis) */}
      <Card
        on={beat >= 2}
        delay={dl(2, 0)}
        x={COL[1]}
        y={ROW[0]}
        stroke={GREEN}
        titleColor={GREEN}
        title="Rotation Theorem"
        line1="(z₂-z₁)/(z₃-z₁) = |ratio|·e^(iθ)"
        line2="multiply by i = +90° turn"
      />

      {/* beat 3 — collinearity + perpendicular bisector */}
      <Card
        on={beat >= 3}
        delay={dl(3, 0)}
        x={COL[0]}
        y={ROW[1]}
        stroke={AMBER_DARK}
        titleColor={AMBER_DARK}
        title="Lines"
        line1="collinear: (z₃-z₁)/(z₂-z₁) ∈ R"
        line2="perp. bisector: |z-z₁| = |z-z₂|"
      />

      {/* beat 4 — circle + Apollonius */}
      <Card
        on={beat >= 4}
        delay={dl(4, 0)}
        x={COL[1]}
        y={ROW[1]}
        stroke={AMBER_DARK}
        titleColor={AMBER_DARK}
        title="Circles"
        line1="|z-z₀| = r  (circle)"
        line2="|z-z₁|/|z-z₂| = k  (k≠1 ⇒ circle)"
      />

      {/* beat 5 — arg-locus arc + equilateral identity */}
      <Card
        on={beat >= 5}
        delay={dl(5, 0)}
        x={COL[0]}
        y={ROW[2]}
        stroke={AMBER_DARK}
        titleColor={AMBER_DARK}
        title="Arcs & Triangles"
        line1="arg[(z-z₁)/(z-z₂)] = α ⇒ arc"
        line2="z₁²+z₂²+z₃² = z₁z₂+z₂z₃+z₃z₁"
      />

      {/* beat 6 — modulus extrema (high emphasis) */}
      <Card
        on={beat >= 6}
        delay={dl(6, 0)}
        x={COL[1]}
        y={ROW[2]}
        stroke={GREEN}
        titleColor={GREEN}
        title="Modulus Extrema"
        line1="on |z-z₀| = r:"
        line2="||z₀|-r| ≤ |z| ≤ |z₀|+r"
      />

      {/* beat 7 — red-margin closing banner: |w|²=w·w-bar linearises every locus */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 400 516 L 680 516" stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        {/* single text run, anchor start at x=392 — the symbolic prefix
            "|w|² = w · w ⇒ " (16 chars incl. trailing space, char width est.
            0.5*16=8px) is identical in both languages, so the bar's position
            above the 2nd 'w' (index 11) is language-independent. */}
        <T x={392} y={549} size={16} fill={RED} anchor="start" weight={700}>
          {t("|w|² = w · w ⇒ linearises the algebra", "|w|² = w · w ⇒ har locus ko linear bana deta hai")}
        </T>
        <Overline on={beat >= 7} delay={dl(7, 0.6)} x={484} y={549} size={16} textWidth={8} anchor="middle" stroke={RED} />
      </Fade>
    </Scene>
  );
}
