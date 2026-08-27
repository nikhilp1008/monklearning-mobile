/**
 * P12Ch04 · Section 23 — "Worked Examples One and Two: The Angle Trap, and Same Voltage Not Same Speed"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: an unfinished remnant of an earlier pass — two prose
 * panels, a verdict block and a full-width footer chip, gated on beats
 * 0/1/7/11 of a 12-beat narration. Eight reveals were never used, so the board
 * froze while whole steps of the arithmetic were being spoken, and the only
 * four drawn strokes were the title underline and three rules. No coil, no
 * normal, no angles, no orbits — nothing that made either trap visible.
 *
 * WHAT THE NARRATION TEACHES: two worked examples that each turn on one
 * decision taken before any arithmetic. ① A 40-turn coil of radius 6.0 cm
 * carrying 2.5 A in a 0.30 T field, its PLANE at 30° to B: θ in τ = NIAB sin θ
 * is measured to the NORMAL, so θ = 90° − 30° = 60°, A = πR² = 1.131×10⁻² m²
 * and τ ≈ 0.29 N·m (30° would have given ≈ 0.17). ② A proton and an alpha
 * accelerated through the SAME potential difference do not have the same
 * speed: qV = ½mv² gives v = √(2qV/m), so r = √(2mV/q)/B and r ∝ √(m/q),
 * making r_α/r_p = √2 ≈ 1.41.
 *
 * ARITHMETIC (recomputed): A = π(0.060)² = 1.1310×10⁻² m²;
 * τ = 40 × 2.5 × 1.131×10⁻² × 0.30 × 0.866 = 0.2938 ≈ 0.29 N·m;
 * with sin 30° = 0.5 instead: 0.3393 × 0.5 = 0.1697 ≈ 0.17 N·m;
 * √(m/q): α = √(4/2) = √2, p = √(1/1) = 1, ratio = √2 ≈ 1.41.
 *
 * BEAT MAP (12 beats, gates 0..11 — every beat used):
 *   0  title + "both examples are one decision"
 *   1  example 1 data (N, R, I, B, plane at 30°)
 *   2  THE COIL FIGURE — B arrows, the tilted coil, the green normal, the
 *      30° arc to the plane and the 60° arc to the normal
 *   3  the explicit conversion  θ = 90° − 30° = 60°
 *   4  the area  A = πR² = 1.131 × 10⁻² m²
 *   5  the full substitution, sin 60° = √3/2 ≈ 0.866
 *   6  τ ≈ 0.29 N·m, the sanity check, and the 0.17 near-miss
 *   7  example 2 — a NEET speed trap
 *   8  the setup + the two drawn orbits of different radii
 *   9  the trap: same voltage is not the same speed
 *  10  qV = ½mv² → v = √(2qV/m) → r = √(2mV/q)/B → r ∝ √(m/q)
 *  11  apply it:  r_α / r_p = √2 ≈ 1.41
 *
 * Layout: col A x44..350 (example 1 data + the coil figure) · col B x368..700
 * (the four steps of example 1) · col C x718..1044 (example 2).
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

export default function P12Ch04Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══ beat 0 — title ═══ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("The Angle Trap · Same Voltage ≠ Same Speed", "The Angle Trap · Same Voltage ≠ Same Speed")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 272 58 C 440 54, 640 62, 808 57"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />

      {/* ═════════════ COLUMN A — x 44..350 ═════════════ */}

      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={44} y={116} size={13} fill={RED} anchor="start" weight={800}>
          {t("BOTH ARE ONE DECISION", "BOTH ARE ONE DECISION")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.3)} d="M 44 122 L 224 122" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={44} y={140} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("example 1 — WHICH ANGLE?", "example 1 — WHICH ANGLE?")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.9)}>
        <T x={44} y={158} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("example 2 — WHAT WAS HELD CONSTANT?", "example 2 — WHAT WAS HELD CONSTANT?")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.3)}>
        <T x={44} y={176} size={12.5} fill={MUTED} anchor="start">
          {t("get those right and the algebra is routine", "get those right and the algebra is routine")}
        </T>
      </Fade>

      {/* beat 1 — the data */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={206} size={13} fill={RED} anchor="start" weight={800}>
          {t("EXAMPLE 1 — BOARD LEVEL", "EXAMPLE 1 — BOARD LEVEL")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 44 212 L 240 212" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={44} y={230} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("N = 40 turns", "N = 40 turns")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={44} y={248} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("R = 6.0 cm = 0.060 m", "R = 6.0 cm = 0.060 m")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={44} y={266} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("I = 2.5 A", "I = 2.5 A")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={44} y={284} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("B = 0.30 T (uniform)", "B = 0.30 T (uniform)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={44} y={304} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("the PLANE of the coil is at 30° to B", "the PLANE of the coil is at 30° to B")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={44} y={322} size={12.5} fill={INK} anchor="start">
          {t("find the torque τ on the coil", "find the torque τ on the coil")}
        </T>
      </Fade>

      {/* beat 2 — THE COIL FIGURE */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={350} size={13} fill={RED} anchor="start" weight={800}>
          {t("LOCATE THE ANGLE", "LOCATE THE ANGLE")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 44 356 L 186 356" stroke={RED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(56, 390, 320, 390)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(56, 512, 320, 512)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={330} y={386} size={13} fill={AMBER_DARK} anchor="end" weight={800}>B</T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.9)}
        d="M 129 425 A 70 20 30 0 1 251 495 A 70 20 30 0 1 129 425"
        stroke={INK}
        sw={2.2}
        dur={1.1}
      />
      <Draw on={beat >= 2} delay={dl(2, 2.9)} d="M 129 425 L 251 495" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3.3)} d={circD(190, 460, 3)} stroke={INK} sw={2} dur={0.2} fill={INK} />
      <Draw on={beat >= 2} delay={dl(2, 3.5)} d={arrowD(190, 460, 225, 399)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <T x={234} y={396} size={13} fill={GREEN} anchor="start" weight={800}>n̂</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.2)} d="M 234 460 A 44 44 0 0 1 228 482" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={262} y={478} size={12.5} fill={RED} anchor="start" weight={800}>30°</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.9)} d="M 248 460 A 58 58 0 0 0 219 410" stroke={GREEN} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.3)}>
        <T x={256} y={432} size={12.5} fill={GREEN} anchor="start" weight={800}>60°</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.7)}>
        <T x={44} y={540} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("θ in τ = N I A B sin θ is to the NORMAL", "θ in τ = N I A B sin θ is to the NORMAL")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.0)}>
        <T x={44} y={560} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("the question gave the angle to the PLANE", "the question gave the angle to the PLANE")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.3)}>
        <T x={44} y={580} size={12.5} fill={INK} anchor="start">
          {t("two different angles — complementary", "two different angles — complementary")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN B — x 368..700 ═════════════ */}

      {/* beat 3 — the conversion */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={368} y={116} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 1 — CONVERT THE ANGLE", "STEP 1 — CONVERT THE ANGLE")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 368 122 L 592 122" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={368} y={142} size={12.5} fill={INK} anchor="start">
          {t("the plane makes 30° with the field", "the plane makes 30° with the field")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={368} y={160} size={12.5} fill={INK} anchor="start">
          {t("the normal is ⊥ to the plane, so", "the normal is ⊥ to the plane, so")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Chip x={368} y={172} w={332} h={40} fill={CREAM} stroke={RED} textFill={INK} size={17}>
          θ = 90° − 30° = 60°
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={368} y={232} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("60° goes into the formula, not 30°", "60° goes into the formula, not 30°")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={368} y={250} size={12.5} fill={MUTED} anchor="start">
          {t("using 30° gives a clean, wholly wrong answer", "using 30° gives a clean, wholly wrong answer")}
        </T>
      </Fade>

      {/* beat 4 — the area */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={368} y={278} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 2 — THE AREA", "STEP 2 — THE AREA")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 368 284 L 522 284" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={368} y={302} size={12.5} fill={INK} anchor="start">
          {t("convert the radius first:  R = 0.060 m", "convert the radius first:  R = 0.060 m")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={368} y={324} size={13.5} fill={INK} anchor="start" weight={800}>
          A = π R² = π × 0.0036 m²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={368} y={344} size={13.5} fill={GREEN} anchor="start" weight={800}>
          A = 1.131 × 10⁻² m²
        </T>
      </Fade>

      {/* beat 5 — the substitution */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={368} y={372} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 3 — SUBSTITUTE", "STEP 3 — SUBSTITUTE")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 368 378 L 534 378" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={368} y={396} size={13} fill={INK} anchor="start" weight={800}>
          τ = N I A B sin θ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={368} y={416} size={13} fill={INK} anchor="start">
          = 40 × 2.5 × 1.131×10⁻² × 0.30 × sin 60°
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={368} y={436} size={12.5} fill={INK} anchor="start">
          {t("sin 60° = √3 / 2 ≈ 0.866", "sin 60° = √3 / 2 ≈ 0.866")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={368} y={464} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 4 — THE ANSWER", "STEP 4 — THE ANSWER")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 368 470 L 534 470" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={368} y={480} w={332} h={42} fill={CREAM} stroke={GREEN} textFill={INK} size={18}>
          τ ≈ 0.29 N·m
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.5)} d="M 430 528 L 638 528" stroke={GREEN} sw={1.8} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.7)} d="M 430 533 L 638 533" stroke={GREEN} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={368} y={554} size={12.5} fill={INK} anchor="start">
          {t("sanity: a fraction of a newton metre from a", "sanity: a fraction of a newton metre from a")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={368} y={570} size={12.5} fill={INK} anchor="start">
          {t("small coil in a modest field — reasonable", "small coil in a modest field — reasonable")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={368} y={592} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("with 30° (sin = 0.5) you would get ≈ 0.17", "with 30° (sin = 0.5) you would get ≈ 0.17")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN C — x 718..1044 ═════════════ */}

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={718} y={116} size={13} fill={RED} anchor="start" weight={800}>
          {t("EXAMPLE 2 — A NEET SPEED TRAP", "EXAMPLE 2 — A NEET SPEED TRAP")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 718 122 L 968 122" stroke={RED} sw={1.8} dur={0.4} />

      {/* beat 8 — the setup and the two orbits */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={718} y={142} size={12.5} fill={INK} anchor="start">
          {t("a proton and an alpha particle are accelerated", "a proton and an alpha particle are accelerated")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={718} y={158} size={12.5} fill={INK} anchor="start">
          {t("through the SAME potential difference V, then", "through the SAME potential difference V, then")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={718} y={174} size={12.5} fill={INK} anchor="start">
          {t("enter a uniform field ⊥ to their velocities", "enter a uniform field ⊥ to their velocities")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.1)}>
        <T x={718} y={192} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("m_α = 4 m_p ,   q_α = 2 q_p .   Compare the radii.", "m_α = 4 m_p ,   q_α = 2 q_p .   Compare the radii.")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1.5)} d={arrowD(722, 232, 758, 232)} stroke={GREEN} sw={2} dur={0.3} />
      <Fade on={beat >= 8} delay={dl(8, 1.8)}>
        <T x={738} y={225} size={12.5} fill={GREEN} weight={800}>v</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 2.0)} d="M 760 232 A 42 42 0 0 1 802 274" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 8} delay={dl(8, 2.6)}>
        <T x={810} y={278} size={12.5} fill={INK} anchor="start" weight={800}>p</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 2.8)} d="M 760 232 A 59 59 0 0 1 819 291" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 8} delay={dl(8, 3.5)}>
        <T x={828} y={296} size={12.5} fill={RED} anchor="start" weight={800}>α</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 3.7)} d={crossInD(890, 248, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 8} delay={dl(8, 3.9)} d={crossInD(890, 300, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 8} delay={dl(8, 4.2)}>
        <T x={912} y={278} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>B ⊗</T>
      </Fade>

      {/* beat 9 — the trap */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={718} y={326} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE TRAP", "THE TRAP")}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 0.5)} d="M 718 332 L 800 332" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 9} delay={dl(9, 0.9)}>
        <T x={718} y={350} size={12.5} fill={INK} anchor="start">
          {t("r = m v / q B needs v — and v was never given", "r = m v / q B needs v — and v was never given")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.2)}>
        <T x={718} y={368} size={12.5} fill={INK} anchor="start">
          {t("students assume equal speeds. They are not.", "students assume equal speeds. They are not.")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={718} y={388} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("the same V ⇒ the same energy per unit CHARGE,", "the same V ⇒ the same energy per unit CHARGE,")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.9)}>
        <T x={718} y={404} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("not the same speed", "not the same speed")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.3)}>
        <T x={718} y={422} size={12.5} fill={INK} anchor="start">
          {t("heavier, at the same energy ⇒ moving slower", "heavier, at the same energy ⇒ moving slower")}
        </T>
      </Fade>

      {/* beat 10 — convert V into a speed */}
      <Fade on={beat >= 10} delay={dl(10, 0.2)}>
        <T x={718} y={450} size={13} fill={RED} anchor="start" weight={800}>
          {t("CONVERT V INTO A SPEED FIRST", "CONVERT V INTO A SPEED FIRST")}
        </T>
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 0.5)} d="M 718 456 L 950 456" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 10} delay={dl(10, 0.9)}>
        <T x={718} y={476} size={13} fill={INK} anchor="start" weight={800}>
          q V = ½ m v²   ⇒   v = √( 2 q V / m )
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.4)}>
        <T x={718} y={498} size={13} fill={INK} anchor="start" weight={800}>
          r = m v / q B = √( 2 m V / q ) / B
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.9)}>
        <T x={718} y={518} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("V and B are the same for both  ⇒  r ∝ √(m/q)", "V and B are the same for both  ⇒  r ∝ √(m/q)")}
        </T>
      </Fade>

      {/* beat 11 — apply it */}
      <Fade on={beat >= 11} delay={dl(11, 0.2)}>
        <T x={718} y={540} size={12.5} fill={INK} anchor="start">
          {t("α:  m/q = 4/2 = 2     ·     p:  m/q = 1/1 = 1", "α:  m/q = 4/2 = 2     ·     p:  m/q = 1/1 = 1")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 0.7)}>
        <Chip x={718} y={550} w={326} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={17}>
          r_α / r_p = √2 ≈ 1.41
        </Chip>
      </Fade>
    </Scene>
  );
}
