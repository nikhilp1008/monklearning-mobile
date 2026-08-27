/**
 * P12Ch04 · Section 24 — "Worked Examples Three and Four: Mass Spectrometer, and a Loop Beside a Wire"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: an unfinished remnant of an earlier pass — two prose
 * panels, a verdict block and a full-width footer chip, gated on beats
 * 0/1/5/12 of a 13-beat narration. Nine reveals were never used, so the board
 * sat still through both worked solutions, and the only four drawn strokes
 * were the title underline and three rules. No selector, no wire, no loop.
 *
 * WHAT THE NARRATION TEACHES: two chained-concept problems. ③ Ions pass
 * undeflected through a velocity selector (E = 3.0×10⁴ V/m, B = 0.20 T), which
 * fixes v = E/B = 1.5×10⁵ m/s regardless of m and q; the same ion
 * (m = 3.3×10⁻²⁶ kg, singly charged) then circles in B′ = 0.50 T with
 * r = mv/qB′ ≈ 6.2×10⁻² m — a mass spectrometer, where r depends only on m/q.
 * ④ A square loop of side a beside a long wire: the two sides parallel to the
 * wire sit at d and d + a, so their opposite forces do NOT cancel, while the
 * two perpendicular sides cancel exactly; subtracting gives
 * F = μ₀I₁I₂a²/2πd(d+a), attractive, and falling as 1/d² far away — the loop
 * already behaving like a dipole. Segment 7 narrates the figure part by part.
 *
 * ARITHMETIC (recomputed): v = 3.0×10⁴ / 0.20 = 1.5×10⁵ m/s;
 * r = (3.3×10⁻²⁶ × 1.5×10⁵) / (1.6×10⁻¹⁹ × 0.50)
 *   = 4.95×10⁻²¹ / 8.0×10⁻²⁰ = 6.19×10⁻² ≈ 6.2×10⁻² m = 6.2 cm;
 * 1/d − 1/(d+a) = a / d(d+a), so F = μ₀I₁I₂a/2π × a/d(d+a) = μ₀I₁I₂a²/2πd(d+a).
 *
 * BEAT MAP (13 beats, gates 0..12 — every beat used):
 *   0  title + "a two-concept problem"
 *   1  example 3 data (two different magnetic fields)
 *   2  concept 1 — THE SELECTOR FIGURE (plates, E arrows, ⊗ field, the two
 *      opposing pushes, the straight-through path) and v = E/B = 1.5×10⁵ m/s
 *   3  concept 2 — r = mv/qB′ with the numbers substituted
 *   4  the answer r ≈ 6.2 cm and what a mass spectrometer is
 *   5  example 4 — JEE Advanced
 *   6  the statement (square loop of side a, wire, currents parallel)
 *   7  THE LOOP-BESIDE-A-WIRE FIGURE (wire with I₁, shaded loop, spans d and
 *      d + a, the red near-side force in, the far-side force out)
 *   8  four sides, two behaviours — which pair cancels and which does not
 *   9  the near side at d: like currents attract
 *  10  the far side at d + a: antiparallel, repelled, smaller
 *  11  subtract and combine  ⇒  F = μ₀I₁I₂a² / 2πd(d+a)
 *  12  attractive · d ≫ a ⇒ F ∝ 1/d² — a loop is already a dipole
 *
 * Layout: col A x44..350 (example 3, the selector) · col B x368..700 (the
 * spectrometer answer, then example 4's statement and figure) · col C
 * x718..1044 (the four-side argument and the algebra).
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
/** ⊗ — into the page */
const crossInD = (cx: number, cy: number, r: number) => {
  const k = r * 0.68;
  return `${circD(cx, cy, r)} M ${cx - k} ${cy - k} L ${cx + k} ${cy + k} M ${
    cx + k
  } ${cy - k} L ${cx - k} ${cy + k}`;
};
/** ↔ measurement span */
const spanD = (x1: number, x2: number, y: number) =>
  `${arrowD(x1, y, x2, y)} ${arrowD(x2, y, x1, y)}`;

export default function P12Ch04Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══ beat 0 — title ═══ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Mass Spectrometer · A Loop Beside a Wire", "Mass Spectrometer · A Loop Beside a Wire")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 284 58 C 440 54, 640 62, 796 57"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />

      {/* ═════════════ COLUMN A — x 44..350 ═════════════ */}

      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={44} y={116} size={13} fill={RED} anchor="start" weight={800}>
          {t("EXAMPLE 3 — JEE MAIN", "EXAMPLE 3 — JEE MAIN")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.3)} d="M 44 122 L 220 122" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={44} y={140} size={12.5} fill={MUTED} anchor="start">
          {t("a two-concept problem — spot the seam", "a two-concept problem — spot the seam")}
        </T>
      </Fade>

      {/* beat 1 — the data */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={168} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("selector:  E = 3.0 × 10⁴ V/m,  B = 0.20 T", "selector:  E = 3.0 × 10⁴ V/m,  B = 0.20 T")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={44} y={186} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("then a pure field  B′ = 0.50 T,  ⊥ to v", "then a pure field  B′ = 0.50 T,  ⊥ to v")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={44} y={204} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("ion:  m = 3.3 × 10⁻²⁶ kg, singly charged", "ion:  m = 3.3 × 10⁻²⁶ kg, singly charged")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={44} y={222} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("⇒ q = 1.6 × 10⁻¹⁹ C.   Find the radius.", "⇒ q = 1.6 × 10⁻¹⁹ C.   Find the radius.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={44} y={242} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("two different B's — keep them apart", "two different B's — keep them apart")}
        </T>
      </Fade>

      {/* beat 2 — concept 1, with the selector drawn */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={270} size={13} fill={RED} anchor="start" weight={800}>
          {t("CONCEPT 1 — “UNDEFLECTED”", "CONCEPT 1 — “UNDEFLECTED”")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 44 276 L 246 276" stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d="M 76 294 L 268 294" stroke={INK} sw={2.6} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 76 356 L 268 356" stroke={INK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={68} y={300} size={14} fill={INK} anchor="end" weight={800}>+</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={68} y={362} size={14} fill={INK} anchor="end" weight={800}>−</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={arrowD(104, 300, 104, 316)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={arrowD(240, 300, 240, 316)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={276} y={312} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>E</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={crossInD(104, 340, 7)} stroke={INK} sw={1.7} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.7)} d={crossInD(240, 340, 7)} stroke={INK} sw={1.7} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <T x={276} y={346} size={12.5} fill={INK} anchor="start" weight={800}>B ⊗</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={arrowD(78, 325, 157, 325)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={112} y={318} size={12.5} fill={GREEN} weight={800}>v</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d={circD(165, 325, 5)} stroke={GREEN} sw={2} dur={0.3} fill={CREAM} />
      <Draw on={beat >= 2} delay={dl(2, 4.1)} d={arrowD(165, 330, 165, 352)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={157} y={352} size={12.5} fill={INK} anchor="end" weight={800}>q E</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.6)} d={arrowD(165, 320, 165, 298)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 4.9)}>
        <T x={157} y={306} size={12.5} fill={RED} anchor="end" weight={800}>q v B</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.1)} d={arrowD(173, 325, 262, 325)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.5)}>
        <T x={44} y={388} size={12.5} fill={INK} anchor="start">
          {t("the two pushes balance:   q E = q v B", "the two pushes balance:   q E = q v B")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.9)}>
        <T x={44} y={408} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("v = E / B = 3.0×10⁴ / 0.20 = 1.5×10⁵ m/s", "v = E / B = 3.0×10⁴ / 0.20 = 1.5×10⁵ m/s")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.3)}>
        <T x={44} y={428} size={12.5} fill={MUTED} anchor="start">
          {t("m and q never entered — it selects on speed", "m and q never entered — it selects on speed")}
        </T>
      </Fade>

      {/* beat 3 — concept 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={456} size={13} fill={RED} anchor="start" weight={800}>
          {t("CONCEPT 2 — THE CIRCULAR PATH", "CONCEPT 2 — THE CIRCULAR PATH")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 44 462 L 288 462" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={44} y={482} size={13.5} fill={INK} anchor="start" weight={800}>
          r = m v / q B′
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={44} y={504} size={12.5} fill={INK} anchor="start">
          {t("= ( 3.3 × 10⁻²⁶ × 1.5 × 10⁵ )", "= ( 3.3 × 10⁻²⁶ × 1.5 × 10⁵ )")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={70} y={524} size={12.5} fill={INK} anchor="start">
          {t("÷ ( 1.6 × 10⁻¹⁹ × 0.50 )", "÷ ( 1.6 × 10⁻¹⁹ × 0.50 )")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={44} y={548} size={12.5} fill={MUTED} anchor="start">
          {t("the speed came from concept 1, not the data", "the speed came from concept 1, not the data")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN B — x 368..700 ═════════════ */}

      {/* beat 4 — the answer and the spectrometer */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Chip x={368} y={116} w={332} h={42} fill={CREAM} stroke={GREEN} textFill={INK} size={18}>
          r ≈ 6.2 × 10⁻² m = 6.2 cm
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d="M 430 164 L 638 164" stroke={GREEN} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.1)} d="M 430 169 L 638 169" stroke={GREEN} sw={1.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={368} y={192} size={12.5} fill={INK} anchor="start">
          {t("this is exactly how a MASS SPECTROMETER", "this is exactly how a MASS SPECTROMETER")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={368} y={208} size={12.5} fill={INK} anchor="start">
          {t("works: the selector guarantees every ion", "works: the selector guarantees every ion")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <T x={368} y={224} size={12.5} fill={INK} anchor="start">
          {t("enters at the same speed, so r depends only", "enters at the same speed, so r depends only")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={368} y={240} size={12.5} fill={INK} anchor="start">
          {t("on the mass-to-charge ratio", "on the mass-to-charge ratio")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={368} y={260} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("different masses land at different places", "different masses land at different places")}
        </T>
      </Fade>

      {/* beat 5 — example 4 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={368} y={290} size={13} fill={RED} anchor="start" weight={800}>
          {t("EXAMPLE 4 — JEE ADVANCED", "EXAMPLE 4 — JEE ADVANCED")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 368 296 L 584 296" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={368} y={314} size={12.5} fill={MUTED} anchor="start">
          {t("the classic loop-beside-a-wire problem", "the classic loop-beside-a-wire problem")}
        </T>
      </Fade>

      {/* beat 6 — the statement */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={368} y={338} size={12.5} fill={INK} anchor="start">
          {t("a square loop of side a carries I₂ and lies in", "a square loop of side a carries I₂ and lies in")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={368} y={354} size={12.5} fill={INK} anchor="start">
          {t("the same plane as a long wire carrying I₁,", "the same plane as a long wire carrying I₁,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={368} y={370} size={12.5} fill={INK} anchor="start">
          {t("the two currents parallel; the nearest side", "the two currents parallel; the nearest side")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={368} y={386} size={12.5} fill={INK} anchor="start">
          {t("runs parallel to the wire at a distance d", "runs parallel to the wire at a distance d")}
        </T>
      </Fade>

      {/* beat 7 — THE FIGURE */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 420 406 L 420 578" stroke={INK} sw={3} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d={arrowD(420, 572, 420, 414)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={410} y={402} size={13} fill={GREEN} anchor="end" weight={800}>I₁</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d={spanD(420, 520, 424)} stroke={MUTED} sw={1.4} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={470} y={418} size={12.5} fill={MUTED} weight={800}>d</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <Path d="M 520 440 L 640 440 L 640 560 L 520 560 Z" fill={CREAM} stroke="none" />
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.0)}
        d="M 520 440 L 640 440 L 640 560 L 520 560 Z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw on={beat >= 7} delay={dl(7, 2.8)} d={arrowD(520, 554, 520, 446)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 3.0)} d={arrowD(640, 446, 640, 554)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 3.4)}>
        <T x={580} y={476} size={13} fill={GREEN} weight={800}>I₂</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <T x={580} y={534} size={12.5} fill={MUTED} weight={800}>
          {t("side a", "side a")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.9)} d={arrowD(514, 500, 470, 500)} stroke={RED} sw={2.4} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 4.3)}>
        <T x={466} y={494} size={12.5} fill={RED} anchor="end" weight={800}>F_near</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4.5)} d={arrowD(646, 500, 692, 500)} stroke={INK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 4.9)}>
        <T x={654} y={490} size={12.5} fill={INK} anchor="start" weight={800}>F_far</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 5.2)} d={spanD(420, 640, 588)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 5.6)}>
        <T x={530} y={582} size={12.5} fill={MUTED} weight={800}>d + a</T>
      </Fade>

      {/* ═════════════ COLUMN C — x 718..1044 ═════════════ */}

      {/* beat 8 — four sides, two behaviours */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={718} y={116} size={13} fill={RED} anchor="start" weight={800}>
          {t("FOUR SIDES, TWO BEHAVIOURS", "FOUR SIDES, TWO BEHAVIOURS")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 718 122 L 948 122" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={718} y={142} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("the two sides ∥ to the wire:", "the two sides ∥ to the wire:")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={718} y={160} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("different distances, and the field falls as 1/r,", "different distances, and the field falls as 1/r,")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={718} y={176} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("so the forces are unequal — they do NOT cancel", "so the forces are unequal — they do NOT cancel")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.9)}>
        <T x={718} y={198} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("the two sides ⊥ to the wire:", "the two sides ⊥ to the wire:")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <T x={718} y={216} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("opposite senses through symmetric field regions,", "opposite senses through symmetric field regions,")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.5)}>
        <T x={718} y={232} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("so they are equal and opposite — cancel exactly", "so they are equal and opposite — cancel exactly")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.9)}>
        <T x={718} y={254} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("say this explicitly — the marks are in the reasoning", "say this explicitly — the marks are in the reasoning")}
        </T>
      </Fade>

      {/* beat 9 — the near side */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={718} y={282} size={13} fill={RED} anchor="start" weight={800}>
          {t("NEAR SIDE — AT d", "NEAR SIDE — AT d")}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 0.5)} d="M 718 288 L 866 288" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 9} delay={dl(9, 0.9)}>
        <T x={718} y={306} size={12.5} fill={INK} anchor="start">
          {t("its current runs ∥ to I₁ — like currents attract", "its current runs ∥ to I₁ — like currents attract")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.3)}>
        <T x={718} y={328} size={13.5} fill={INK} anchor="start" weight={800}>
          F_near = ( μ₀ I₁ I₂ / 2π d ) × a
        </T>
      </Fade>

      {/* beat 10 — the far side */}
      <Fade on={beat >= 10} delay={dl(10, 0.2)}>
        <T x={718} y={356} size={13} fill={RED} anchor="start" weight={800}>
          {t("FAR SIDE — AT d + a", "FAR SIDE — AT d + a")}
        </T>
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 0.5)} d="M 718 362 L 890 362" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 10} delay={dl(10, 0.9)}>
        <T x={718} y={380} size={12.5} fill={INK} anchor="start">
          {t("going round the loop its current is anti-∥ ⇒", "going round the loop its current is anti-∥ ⇒")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.2)}>
        <T x={718} y={396} size={12.5} fill={INK} anchor="start">
          {t("pushed away, and farther out, so smaller", "pushed away, and farther out, so smaller")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.6)}>
        <T x={718} y={418} size={13.5} fill={INK} anchor="start" weight={800}>
          F_far = ( μ₀ I₁ I₂ / 2π (d + a) ) × a
        </T>
      </Fade>

      {/* beat 11 — subtract */}
      <Fade on={beat >= 11} delay={dl(11, 0.2)}>
        <T x={718} y={446} size={13} fill={RED} anchor="start" weight={800}>
          {t("SUBTRACT — THE TWO OPPOSE", "SUBTRACT — THE TWO OPPOSE")}
        </T>
      </Fade>
      <Draw on={beat >= 11} delay={dl(11, 0.5)} d="M 718 452 L 936 452" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 11} delay={dl(11, 0.9)}>
        <T x={718} y={470} size={13} fill={INK} anchor="start" weight={800}>
          F = ( μ₀ I₁ I₂ a / 2π ) [ 1/d − 1/(d + a) ]
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.4)}>
        <T x={718} y={488} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("a common denominator leaves a numerator of a", "a common denominator leaves a numerator of a")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.8)}>
        <Chip x={718} y={498} w={326} h={42} fill={CREAM} stroke={GREEN} textFill={INK} size={16}>
          F = μ₀ I₁ I₂ a² / 2π d ( d + a )
        </Chip>
      </Fade>

      {/* beat 12 — reading the answer */}
      <Fade on={beat >= 12} delay={dl(12, 0.2)}>
        <T x={718} y={560} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("the near side wins ⇒ the net force is TOWARD the wire", "the near side wins ⇒ the net force is TOWARD the wire")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 0.6)}>
        <T x={718} y={578} size={12.5} fill={INK} anchor="start">
          {t("d ≫ a ⇒ the denominator ≈ d² ⇒ F falls as 1/d²", "d ≫ a ⇒ the denominator ≈ d² ⇒ F falls as 1/d²")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 1.0)}>
        <T x={718} y={594} size={12.5} fill={MUTED} anchor="start">
          {t("a wire falls as 1/d — from far off a loop is a dipole", "a wire falls as 1/d — from far off a loop is a dipole")}
        </T>
      </Fade>
    </Scene>
  );
}
