/**
 * P12Ch04 · Section 7 — "Worked Examples Three and Four: Vector Addition and the Bent Wire"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW
 *   Four gates (0, 1, 7, 13) from a blanket template. Both worked examples
 *   dumped their entire solution — statement, both field magnitudes and the
 *   final answer — in a single Fade, so the board sat frozen for ~90 s while
 *   Drona walked through the wire field, the loop field and the vector sum.
 *   Four drawn shapes: the title underline and three rules. No wire, no loop,
 *   no square, and — in a question whose whole point is that two fields are
 *   perpendicular — no vector diagram at all.
 *
 * WHAT THE NARRATION TEACHES
 *   Example 3 (JEE Main): a long wire (10 A) lying in the plane of a circular
 *   loop (R = 4.0 cm, 5.0 A) a = 4.0 cm from its centre. B_wire = 50 µT points
 *   out of the page, B_loop = 78.5 µT lies along the loop axis; being
 *   perpendicular they combine as √(50² + 78.5²) ≈ 93 µT, not 128.5 µT.
 *   Example 4 (JEE Advanced): one wire of fixed length L bent first into a
 *   circle, then into a square. Circle → π µ₀I/L. Square → 8√2 µ₀I/(πL).
 *   Ratio 8√2/π² ≈ 1.15, so the square wins by ~15%.
 *
 * BEAT MAP (n_reveals = 14 · gates 0..13, every beat used)
 *   0  title + underline
 *   1  Ex 3 header and the given data
 *   2  FIGURE — wire, loop, a = 4.0 cm, ⊙ for B_wire out of the page
 *   3  ① wire field substitution → 50 µT
 *   4  ② loop field substitution → 78.5 µT + the 2πa vs 2R warning
 *   5  Pythagoras line + the drawn vector triangle → 93 µT
 *   6  scalar sum 128.5 µT flagged as the ~40% error
 *   7  Ex 4 header + the column rule
 *   8  the bent-wire question
 *   9  FIGURE — circle (all points at R) vs square (mid-points nearer)
 *  10  circle: 2πR = L → B = π µ₀I/L
 *  11  square geometry: s = L/4, a = s/2, θ = 45°, bracket = √2
 *  12  one side → ×4 → 8√2 µ₀I/(πL)
 *  13  the ratio 8√2/π² ≈ 1.15 and why proximity wins
 *
 * ARITHMETIC (recomputed here; matches every printed value)
 *   B_wire  = 4π×10⁻⁷ × 10 / (2π × 0.040)  = 5.0  ×10⁻⁵ T = 50 µT
 *   B_loop  = 4π×10⁻⁷ × 5.0 / (2 × 0.040)  = 7.854×10⁻⁵ T = 78.5 µT
 *   B_net   = √(50² + 78.5²) = √8662.25 = 93.07 → ≈ 93 µT
 *   scalar 128.5 µT overshoots 93.07 by 38% → "nearly 40%"
 *   8√2/π² = 11.3137 / 9.8696 = 1.1463 → ≈ 1.15, i.e. ~15% stronger
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;

export default function P12Ch04Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Vector Addition & the Bent Wire — Examples 3 and 4",
             "Vector Addition & the Bent Wire — Examples 3 and 4")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 230 60 C 480 55, 660 65, 852 58" stroke={RED} sw={2.2} dur={0.7} />

      {/* ═══════════ LEFT COLUMN — EXAMPLE 3 ═══════════ */}

      {/* beat 1 — the statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={90} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 3 · JEE MAIN — do you add fields as VECTORS?",
             "EXAMPLE 3 · JEE MAIN — do you add fields as VECTORS?")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={44} y={112} size={12.8} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Infinite straight wire, I₁ = 10 A, lying in the plane of the loop.",
             "Infinite straight wire, I₁ = 10 A, lying in the plane of the loop.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={44} y={132} size={12.8} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Loop: R = 4.0 cm, I₂ = 5.0 A · wire is a = 4.0 cm from the centre.",
             "Loop: R = 4.0 cm, I₂ = 5.0 A · wire is a = 4.0 cm from the centre.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={44} y={152} size={12.8} fill={INK} weight={700} anchor="start">
          {t("At the centre the two fields are perpendicular. Find B_net.",
             "At the centre the two fields are perpendicular. Find B_net.")}
        </T>
      </Fade>

      {/* beat 2 — the geometry figure */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(110, 300, 110, 176)} stroke={INK} sw={2.6} dur={0.55} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={104} y={172} size={12} fill={INK} weight={700} anchor="end">I₁ = 10 A</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={circleD(265, 238, 52)} stroke={RED} sw={2.4} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 1.9)} d={arrowD(240, 187, 288, 191)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={265} y={308} size={11.8} fill={INK_LIGHT} weight={600}>R = 4.0 cm · I₂ = 5.0 A</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Line x1={110} y1={238} x2={250} y2={238} stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={180} y={230} size={11.5} fill={MUTED} weight={600}>a = 4.0 cm</T>
      </Fade>
      {/* ⊙ — B_wire out of the page, at the loop centre */}
      <Draw on={beat >= 2} delay={dl(2, 3.3)} d={circleD(265, 238, 12)} stroke={GREEN} sw={2.2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <Circle cx={265} cy={238} r={3.2} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <T x={332} y={234} size={12} fill={GREEN} weight={700} anchor="start">B_wire ⊙ out of page</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.3)}>
        <T x={332} y={254} size={12} fill={RED} weight={700} anchor="start">B_loop ∥ loop axis</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={44} y={330} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("The geometry itself forces the 90° between them.",
             "The geometry itself forces the 90° between them.")}
        </T>
      </Fade>

      {/* beat 3 — the wire field */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={358} size={12.8} fill={INK} weight={700} anchor="start">
          ① wire:  B = μ₀I₁ ⁄ 2πa = (4π×10⁻⁷ × 10) ⁄ (2π × 0.040)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={62} y={380} size={13.5} fill={GREEN} weight={800} anchor="start">
          B_wire = 5.0 × 10⁻⁵ T = 50 µT
        </T>
      </Fade>

      {/* beat 4 — the loop field */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={44} y={406} size={12.8} fill={INK} weight={700} anchor="start">
          ② loop centre:  B = μ₀I₂ ⁄ 2R = (4π×10⁻⁷ × 5.0) ⁄ (2 × 0.040)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={62} y={428} size={13.5} fill={RED} weight={800} anchor="start">
          B_loop = 7.85 × 10⁻⁵ T = 78.5 µT
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={44} y={450} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          {t("watch the denominator — the wire carries 2πa, the loop carries 2R",
             "watch the denominator — the wire carries 2πa, the loop carries 2R")}
        </T>
      </Fade>

      {/* beat 5 — Pythagoras, written and drawn */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={44} y={480} size={13} fill={INK} weight={700} anchor="start">
          ⊥  ⟹  B_net = √(B_wire² + B_loop²)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={44} y={504} size={13} fill={INK_LIGHT} weight={600} anchor="start">
          = √(50² + 78.5²) = √8662
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={44} y={534} size={16} fill={GREEN} weight={800} anchor="start">
          B_net ≈ 93 µT
        </T>
      </Fade>
      {/* the vector triangle */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={arrowD(420, 530, 490, 530)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1)} d={arrowD(420, 530, 420, 420)} stroke={RED} sw={2.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d="M 420 514 L 436 514 L 436 530" stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Line x1={490} y1={530} x2={490} y2={420} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" />
        <Line x1={420} y1={420} x2={490} y2={420} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d={arrowD(420, 530, 490, 420)} stroke={INK} sw={2.8} dur={0.55} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={455} y={548} size={11} fill={GREEN} weight={700}>50 µT</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={414} y={414} size={11} fill={RED} weight={700} anchor="end">78.5 µT</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={498} y={462} size={11.5} fill={INK} weight={800} anchor="start">93 µT</T>
      </Fade>

      {/* beat 6 — the scalar trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={44} y={568} size={12.8} fill={RED} weight={700} anchor="start">
          {t("scalar sum 50 + 78.5 = 128.5 µT ✗ — out by nearly 40%",
             "scalar sum 50 + 78.5 = 128.5 µT ✗ — out by nearly 40%")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={44} y={592} size={13.5} fill={GREEN} weight={800} anchor="start">
          {t("Fields add as VECTORS. Every single time.",
             "Fields add as VECTORS. Every single time.")}
        </T>
      </Fade>

      {/* ═══════════ RIGHT COLUMN — EXAMPLE 4 ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 536 78 L 536 596" stroke={MUTED} sw={1.1} dur={0.7} />

      {/* beat 7 — header */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={556} y={90} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 4 · JEE ADVANCED — the answer is genuinely surprising",
             "EXAMPLE 4 · JEE ADVANCED — the answer is genuinely surprising")}
        </T>
      </Fade>

      {/* beat 8 — the question */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={556} y={114} size={12.8} fill={INK} weight={700} anchor="start">
          {t("One wire of fixed length L carries current I.",
             "One wire of fixed length L carries current I.")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.4)}>
        <T x={556} y={134} size={12.8} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Bend it into a circle, then into a square. Which centre field wins?",
             "Bend it into a circle, then into a square. Which centre field wins?")}
        </T>
      </Fade>

      {/* beat 9 — circle vs square figure */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={798} y={160} size={12} fill={MUTED} weight={600}>same length L · same current I</T>
      </Fade>
      {/* the circle */}
      <Draw on={beat >= 9} delay={dl(9, 0.5)} d={circleD(656, 226, 54)} stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 9} delay={dl(9, 1.2)}>
        <Circle cx={656} cy={226} r={3.2} fill={INK} />
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 1.4)} d="M 656 226 L 710 226" stroke={GREEN} sw={1.9} dur={0.35} />
      <Fade on={beat >= 9} delay={dl(9, 1.8)}>
        <T x={686} y={218} size={11.5} fill={GREEN} weight={800}>R</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.1)}>
        <T x={656} y={306} size={11.5} fill={MUTED} weight={600}>every point at R</T>
      </Fade>
      {/* the square */}
      <Draw on={beat >= 9} delay={dl(9, 2.4)} d="M 846 172 H 954 V 280 H 846 Z" stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 9} delay={dl(9, 3.2)}>
        <Circle cx={900} cy={226} r={3.2} fill={INK} />
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 3.4)} d="M 900 226 L 954 226" stroke={GREEN} sw={1.9} dur={0.35} />
      <Fade on={beat >= 9} delay={dl(9, 3.8)}>
        <T x={906} y={214} size={11} fill={GREEN} weight={800} anchor="start">a = s⁄2 (nearer)</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 4.1)}>
        <Line x1={900} y1={226} x2={954} y2={280} stroke={MUTED} strokeWidth={1.5} strokeDasharray="5 5" />
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 4.4)}>
        <T x={962} y={288} size={10.5} fill={MUTED} weight={600} anchor="start">corner: farther</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 4.7)}>
        <T x={888} y={306} size={11.5} fill={MUTED} weight={600}>mid-points nearer, corners farther</T>
      </Fade>

      {/* beat 10 — the circle result */}
      <Fade on={beat >= 10} delay={dl(10, 0.2)}>
        <T x={556} y={338} size={13} fill={INK} weight={700} anchor="start">
          CIRCLE:  2πR = L  ⟹  R = L ⁄ 2π
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.6)}>
        <T x={574} y={360} size={13.5} fill={GREEN} weight={800} anchor="start">
          B_circle = μ₀I ⁄ 2R = π μ₀ I ⁄ L
        </T>
      </Fade>

      {/* beat 11 — the square's geometry */}
      <Fade on={beat >= 11} delay={dl(11, 0.2)}>
        <T x={556} y={388} size={13} fill={INK} weight={700} anchor="start">
          SQUARE:  s = L ⁄ 4,  a = s ⁄ 2 from each side
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.6)}>
        <T x={574} y={410} size={12.8} fill={INK_LIGHT} weight={600} anchor="start">
          half-side = a  ⟹  tan θ = 1  ⟹  θ₁ = θ₂ = 45°
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 3)}>
        <T x={574} y={432} size={12.8} fill={AMBER_DARK} weight={800} anchor="start">
          (sin θ₁ + sin θ₂) = 2 × 1⁄√2 = √2
        </T>
      </Fade>

      {/* beat 12 — one side, then four */}
      <Fade on={beat >= 12} delay={dl(12, 0.2)}>
        <T x={556} y={460} size={12.8} fill={INK} weight={700} anchor="start">
          one side:  μ₀I ⁄ (4πa) × √2  =  μ₀I ⁄ (√2 π s)
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 1.8)}>
        <T x={574} y={482} size={13.5} fill={RED} weight={800} anchor="start">
          × 4 sides, s = L⁄4  ⟹  B_square = 8√2 μ₀I ⁄ (π L)
        </T>
      </Fade>

      {/* beat 13 — the ratio */}
      <Fade on={beat >= 13} delay={dl(13, 0.2)}>
        <Chip x={556} y={498} w={484} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={16}>
          B_square ⁄ B_circle = 8√2 ⁄ π² ≈ 1.15
        </Chip>
      </Fade>
      <Fade on={beat >= 13} delay={dl(13, 1.4)}>
        <T x={556} y={562} size={13} fill={GREEN} weight={800} anchor="start">
          {t("the square is ~15% stronger — same wire, same current",
             "the square is ~15% stronger — same wire, same current")}
        </T>
      </Fade>
      <Fade on={beat >= 13} delay={dl(13, 2.8)}>
        <T x={556} y={580} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("bending into a square brings much of the wire CLOSER than R —",
             "bending into a square brings much of the wire CLOSER than R —")}
        </T>
      </Fade>
      <Fade on={beat >= 13} delay={dl(13, 3.6)}>
        <T x={556} y={596} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the far corners cannot compensate; near parts count for more.",
             "the far corners cannot compensate; near parts count for more.")}
        </T>
      </Fade>
    </Scene>
  );
}
