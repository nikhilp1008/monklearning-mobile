/**
 * M11 Ch03 · Section 43 — "Whole-chapter formula recap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formula_recap — a grid of boxed formulas, revealed in the order the chapter
 * taught them (a "notes page" moment, not new teaching). No segments (recap type) — board
 * text authored straight from board_content. Each \begin{gathered}...\end{gathered} source
 * formula is just its two stacked lines, flattened per the Notation doc.
 *
 * Beats (board_reveal_at_english [0, 5.46, 18.09, 25.17, 38.91, 51.71, 60.16, 65.88, 71.34]):
 *  0 subtitle (high): every formula, at a glance
 *  1 card: subtopic 1 - angle measurement (θ=s/r, s=rθ, A=½r²θ)
 *  2 card: subtopic 2 - functions & signs (Pythagorean triple, ASTC)
 *  3 card: subtopic 3 - standard values & allied angles
 *  4 card: subtopic 4 - graphs & periodicity
 *  5 card: subtopic 5a - compound angle sum/difference
 *  6 card: subtopic 5b - double/triple angle
 *  7 card: subtopic 5c - product-sum & amplitude
 *  8 card: subtopic 6 - equations, the three master solutions
 *
 * Layout plan — 4×2 grid, cards 220×160, 15px gaps, row1 y90-250, row2 y265-425:
 *  b0 | subtitle (15,amber,w700)          | T mid | x300..780  y66..81  (bl 74)
 *  b1 | card x60..280   y90..250
 *  b2 | card x295..515  y90..250
 *  b3 | card x530..750  y90..250
 *  b4 | card x765..985  y90..250
 *  b5 | card x60..280   y265..425
 *  b6 | card x295..515  y265..425
 *  b7 | card x530..750  y265..425
 *  b8 | card x765..985  y265..425
 */

import React from "react";
import { Path } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

function Card({
  on,
  delay,
  x,
  y,
  label,
  line1,
  line2,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  label: string;
  line1: string;
  line2: string;
}) {
  const w = 220;
  const h = 160;
  return (
    <Fade on={on} delay={delay}>
      <Path d={roundRectD(x, y, w, h, 10)} fill="#FCF4E0" stroke={INK} strokeWidth={1.6} />
      <T x={x + 12} y={y + 24} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
        {label}
      </T>
      <T x={x + 12} y={y + 62} size={10} fill={INK} anchor="start">
        {line1}
      </T>
      <T x={x + 12} y={y + 88} size={10} fill={INK} anchor="start">
        {line2}
      </T>
    </Fade>
  );
}

export default function M11Ch03Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={50} size={16} fill={RED} anchor="middle" script>
          Whole-Chapter Formula Recap
        </T>
      </Fade>

      {/* beat 0 — subtitle, high emphasis */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={74} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          Every formula, at a glance
        </T>
      </Fade>

      {/* beat 1 — subtopic 1: angle measurement */}
      <Card on={beat >= 1} delay={dl(1, 0)} x={60} y={90} label="1 · Angle Measurement" line1="θ=s/r (rad), π rad=180°" line2="s=rθ, A=½r²θ=½rs" />

      {/* beat 2 — subtopic 2: functions & signs */}
      <Card on={beat >= 2} delay={dl(2, 0)} x={295} y={90} label="2 · Functions & Signs" line1="sin²+cos²=1,1+tan²=sec²" line2="ASTC: QI+,QII sin,QIII tan,QIV cos" />

      {/* beat 3 — subtopic 3: standard values & allied */}
      <Card on={beat >= 3} delay={dl(3, 0)} x={530} y={90} label="3 · Standard Values" line1="sine row: √0/2..√4/2 (0°-90°)" line2="n odd⇒co-fn; sign=quadrant" />

      {/* beat 4 — subtopic 4: graphs & periodicity */}
      <Card on={beat >= 4} delay={dl(4, 0)} x={765} y={90} label="4 · Graphs & Periods" line1="sin,cos,sec,csc:T=2π;tan,cot:T=π" line2="y=asin(bx+c)+d: amp=|a|" />

      {/* beat 5 — subtopic 5a: compound angle sum/difference */}
      <Card on={beat >= 5} delay={dl(5, 0)} x={60} y={265} label="5a · Compound Angles" line1="cos(A±B)=cosAcosB∓sinAsinB" line2="sin(A±B)=sinAcosB±cosAsinB" />

      {/* beat 6 — subtopic 5b: double/triple angle */}
      <Card on={beat >= 6} delay={dl(6, 0)} x={295} y={265} label="5b · Double/Triple" line1="sin2A=2sinAcosA,cos2A=1-2sin²A" line2="sin3A=3sinA-4sin³A,cos3A=4cos³A-3cosA" />

      {/* beat 7 — subtopic 5c: product-sum & amplitude */}
      <Card on={beat >= 7} delay={dl(7, 0)} x={530} y={265} label="5c · Product-Sum/Amp" line1="2sinAcosB=sin(A+B)+sin(A-B)" line2="acosx+bsinx=Rcos(x-α)" />

      {/* beat 8 — subtopic 6: equations */}
      <Card on={beat >= 8} delay={dl(8, 0)} x={765} y={265} label="6 · Equations" line1="sinθ=sinα⇒θ=nπ+(-1)ⁿα" line2="cosθ=cosα⇒θ=2nπ±α; tanθ=tanα⇒θ=nπ+α" />
    </Scene>
  );
}
