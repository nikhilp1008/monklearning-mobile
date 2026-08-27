/**
 * P12Ch04 · Section 42 — "Formula Recap: The Complete Toolkit"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: a blind three-panel template gated on 0/1/11/16 of a
 * 17-beat narration — thirteen reveals unused, so the board sat frozen for
 * minutes at a stretch — with four drawn shapes in total (a title underline
 * and two rules). A formula recap with nothing drawn beside a single formula.
 *
 * WHAT THE NARRATION TEACHES: the chapter's whole formula bank, subtopic by
 * subtopic. ① Biot–Savart in vector and magnitude form plus its five standard
 * fields (infinite wire, finite wire, loop centre, loop axis, arc) and the
 * ×N rule for a coil. ② Ampère's circuital law and its four symmetric results
 * (inside a thick wire, outside it, solenoid, toroid). ③ the full Lorentz
 * force, r / T / ν for circular motion, the velocity selector and cyclotron,
 * then F = I(L×B), the parallel-wire force, τ = m×B and U = −m·B.
 * ④ the galvanometer, its shunt and its multiplier. ⑤ the dipole moment, the
 * axial and equatorial far fields, the orbital moment, the gyromagnetic ratio
 * and the Bohr magneton. It closes on μ₀ = 4π × 10⁻⁷, so μ₀ ⁄ 4π = 10⁻⁷.
 *
 * THE FIGURE: not one big diagram but a small inline glyph beside each result
 * — a current element with its r vector, a straight wire wrapped in a field
 * loop, a finite wire with its two sight lines, a loop face-on, a loop edge-on
 * with its axis, an arc with its two radii, an Ampèrian loop threading a
 * current, a thick-wire cross-section, a solenoid tube, a toroid, an orbit
 * with B into the page, the selector plates, a wire in a field, the parallel
 * pair pulling together, a tilted loop with n̂ and B, the shunt wired in
 * parallel, the multiplier wired in series, and the dipole loop with its
 * moment. Sixty-odd drawn strokes in all — one small figure per formula.
 *
 * ARITHMETIC ON THE BOARD (recomputed):
 *   μ₀ = 4π × 10⁻⁷  ⇒  μ₀ ⁄ 4π = 10⁻⁷ exactly.
 *   e ⁄ 2m = 1.602×10⁻¹⁹ ⁄ (2 × 9.11×10⁻³¹) = 8.79×10¹⁰ ≈ 8.8 × 10¹⁰ C kg⁻¹.
 *   μ_B = e h ⁄ 4π m = (1.602×10⁻¹⁹ × 6.626×10⁻³⁴) ⁄ (4π × 9.11×10⁻³¹)
 *       = 1.0615×10⁻⁵² ⁄ 1.1448×10⁻²⁹ = 9.27 × 10⁻²⁴ A m².
 *   axial : equatorial = 2m ⁄ x³ : m ⁄ x³ = 2 : 1.
 *
 * BEAT MAP (n_reveals = 17 — gates 0..16, every beat used):
 *    0 title + underline + the "nothing new" subtitle
 *    1 ① BIOT–SAVART rule + heading
 *    2 dB in vector and magnitude form  + current-element glyph
 *    3 the five standard fields, one row + one glyph each, and ×N for a coil
 *    4 ② AMPÈRE rule + heading
 *    5 ∮B·dl = μ₀ I_enc  + Ampèrian-loop glyph + the two caveats
 *    6 thick wire in / out, solenoid, toroid — four rows, four glyphs
 *    7 ③ FORCES & TORQUE rule + heading
 *    8 F = q(E + v×B), r, T, ν  + orbit glyph, and "no speed in T or ν"
 *    9 selector v = E ⁄ B and cyclotron K_max  + plate glyph
 *   10 F = I(L×B), F⁄L for parallel wires, τ = m×B, U = −m·B  + three glyphs
 *   11 ④ GALVANOMETER rule + heading
 *   12 φ, the shunt (drawn in parallel), the multiplier (drawn in series)
 *   13 ⑤ MAGNETIC DIPOLE rule + heading
 *   14 m = NIA + loop/moment glyph, axial and equatorial, the 2 : 1 ratio
 *   15 the orbital moment, the gyromagnetic ratio, the Bohr magneton
 *   16 the constant: μ₀ = 4π × 10⁻⁷  ⇒  μ₀ ⁄ 4π = 10⁻⁷
 *
 * Layout: three full-height columns —
 *   col ① x44..440 (subtopics 1 & 2, glyph gutter x48..100, text x112)
 *   col ② x456..742 (subtopic 3, glyph gutter x460..512, text x520)
 *   col ③ x758..1044 (subtopics 4 & 5, diagrams drawn full-width in-column)
 *   footer band x44..742, y558..592 (beat 16).
 */

import React from "react";
import { Circle, G, Path, Rect } from 'react-native-svg';
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
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
/** flat ellipse as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;
/** ⊗ — into the page */
const crossInD = (cx: number, cy: number, r: number) => {
  const k = r * 0.68;
  return `${circD(cx, cy, r)} M ${cx - k} ${cy - k} L ${cx + k} ${cy + k} M ${
    cx + k
  } ${cy - k} L ${cx - k} ${cy + k}`;
};

export default function P12Ch04Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /** a body line */
  const line = (
    k: number,
    x: number,
    y: number,
    d: number,
    tone: string,
    s: string,
    size = 12.6,
    w = 600
  ) => (
    <Fade on={beat >= k} delay={dl(k, d)}>
      <T x={x} y={y} size={size} fill={tone} weight={w} anchor="start">
        {s}
      </T>
    </Fade>
  );

  /** a formula line */
  const fx = (k: number, x: number, y: number, d: number, tone: string, s: string, size = 13) =>
    line(k, x, y, d, tone, s, size, 800);

  /** a subtopic rule + heading */
  const block = (
    k: number,
    x1: number,
    x2: number,
    yRule: number,
    yHead: number,
    s: string
  ) => (
    <G>
      <Draw
        on={beat >= k}
        delay={dl(k, 0.1)}
        d={`M ${x1} ${yRule} L ${x2} ${yRule}`}
        stroke={RED}
        sw={2.4}
        dur={0.55}
      />
      <Fade on={beat >= k} delay={dl(k, 0.5)}>
        <T x={x1} y={yHead} size={14} fill={RED} weight={800} anchor="start">
          {s}
        </T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* ═══════════════ beat 0 — title ═══════════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The Complete Formula Toolkit", "The Complete Formula Toolkit")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 330 60 C 470 56, 620 65, 752 58"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={78} size={12.8} fill={MUTED} script>
          {t(
            "nothing new here — this is the page you revise from the night before",
            "nothing new here — this is the page you revise from the night before"
          )}
        </T>
      </Fade>

      {/* ══════════ COLUMN ① — x44..440 · subtopics 1 & 2 ══════════ */}

      {/* beat 1 — heading */}
      {block(1, 44, 440, 92, 112, t("① BIOT–SAVART LAW", "① BIOT–SAVART LAW"))}

      {/* beat 2 — the law itself + the current-element glyph */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(52, 152, 76, 134)} stroke={GREEN} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.45)} d={arrowD(76, 134, 98, 124)} stroke={MUTED} sw={1.5} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Circle cx={98} cy={124} r={3} fill={INK} />
      </Fade>
      {fx(2, 112, 136, 0.3, INK, "dB = (μ₀ ⁄ 4π) · I dl × r̂ ⁄ r²")}
      {line(2, 112, 156, 0.8, INK_LIGHT, "| dB | = (μ₀ ⁄ 4π) I dl sin θ ⁄ r²")}

      {/* beat 3 — the five standard fields, a glyph beside each */}
      {/* ① infinite wire */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(74, 190, 74, 162)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 0.45)} d={ellD(74, 176, 20, 6)} stroke={GREEN} sw={1.5} dur={0.5} />
      {line(3, 112, 176, 0.7, INK, t("infinite wire:   B = μ₀ I ⁄ 2π a", "infinite wire:   B = μ₀ I ⁄ 2π a"), 12.8)}

      {/* ② finite wire */}
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 66 192 L 66 218" stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d="M 66 192 L 98 205 M 66 218 L 98 205" stroke={MUTED} sw={1.4} dur={0.4} />
      {line(3, 112, 206, 1.85, INK, t("finite wire:   B = (μ₀I ⁄ 4πa)(sin θ₁ + sin θ₂)", "finite wire:   B = (μ₀I ⁄ 4πa)(sin θ₁ + sin θ₂)"), 12.8)}

      {/* ③ loop centre */}
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={circD(74, 236, 13)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.0)}>
        <Circle cx={74} cy={236} r={2.6} fill={RED} />
      </Fade>
      {line(3, 112, 236, 3.0, INK, t("loop centre:   B = μ₀ I ⁄ 2 R", "loop centre:   B = μ₀ I ⁄ 2 R"), 12.8)}

      {/* ④ on the axis */}
      <Draw on={beat >= 3} delay={dl(3, 3.8)} d={ellD(62, 266, 7, 13)} stroke={GREEN} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 4.1)} d={arrowD(62, 266, 100, 266)} stroke={MUTED} sw={1.5} dur={0.35} />
      {line(3, 112, 266, 4.2, INK, t("on the axis:   B = μ₀ I R² ⁄ 2(x² + R²)^(3/2)", "on the axis:   B = μ₀ I R² ⁄ 2(x² + R²)^(3/2)"), 12.8)}

      {/* ⑤ arc */}
      <Draw on={beat >= 3} delay={dl(3, 5.0)} d="M 59 294.5 A 16 16 0 0 1 89 294.5" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 5.3)} d="M 74 300 L 59 294.5 M 74 300 L 89 294.5" stroke={MUTED} sw={1.4} dur={0.35} />
      {line(3, 112, 296, 5.4, INK, t("arc of angle φ:   B = μ₀ I φ ⁄ 4π R", "arc of angle φ:   B = μ₀ I φ ⁄ 4π R"), 12.8)}

      {line(3, 112, 318, 6.2, RED, t("any loop result × N for a coil of N turns", "any loop result × N for a coil of N turns"))}

      {/* beat 4 — heading */}
      {block(4, 44, 440, 336, 356, t("② AMPÈRE'S CIRCUITAL LAW", "② AMPÈRE'S CIRCUITAL LAW"))}

      {/* beat 5 — the law + the Ampèrian-loop glyph */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={ringD(74, 382, 20, 12)} stroke={INK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={circD(74, 382, 5)} stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.85)}>
        <Circle cx={74} cy={382} r={1.8} fill={RED} />
      </Fade>
      {fx(5, 112, 380, 0.4, INK, "∮ B · dl = μ₀ I_enclosed")}
      {line(5, 112, 402, 0.9, MUTED, t("only the threading current counts", "only the threading current counts"))}
      {line(5, 112, 418, 1.3, MUTED, t("the shape of the loop is irrelevant", "the shape of the loop is irrelevant"))}

      {/* beat 6 — the four symmetric results */}
      {/* inside a thick wire */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={circD(74, 438, 17)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={circD(74, 438, 8)} stroke={RED} sw={1.5} dur={0.35} />
      {line(6, 112, 442, 0.6, INK, t("inside a thick wire:   B = μ₀ I r ⁄ 2π R²", "inside a thick wire:   B = μ₀ I r ⁄ 2π R²"), 12.8)}

      {/* outside it */}
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={circD(74, 468, 8)} stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 1.65)} d={ringD(74, 468, 19, 12)} stroke={GREEN} sw={1.4} dur={0.5} />
      {line(6, 112, 472, 1.8, INK, t("outside it:   B = μ₀ I ⁄ 2π r", "outside it:   B = μ₀ I ⁄ 2π r"), 12.8)}

      {/* solenoid */}
      <Draw on={beat >= 6} delay={dl(6, 2.6)} d="M 50 494 L 98 494" stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 2.8)} d="M 50 514 L 98 514" stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 3.05)} d={arrowD(54, 504, 96, 504)} stroke={AMBER_DARK} sw={1.7} dur={0.35} />
      {line(6, 112, 504, 3.0, INK, t("solenoid:   B = μ₀ n I   (n = turns per metre)", "solenoid:   B = μ₀ n I   (n = turns per metre)"), 12.8)}

      {/* toroid */}
      <Draw on={beat >= 6} delay={dl(6, 3.9)} d={circD(74, 534, 16)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 4.15)} d={circD(74, 534, 7)} stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 4.4)} d={ringD(74, 534, 11.5, 11.5)} stroke={RED} sw={1.3} dur={0.45} />
      {line(6, 112, 538, 4.2, INK, t("toroid:   B = μ₀ N I ⁄ 2π r   (N = total turns)", "toroid:   B = μ₀ N I ⁄ 2π r   (N = total turns)"), 12.8)}

      {/* ══════════ COLUMN ② — x456..742 · subtopic 3 ══════════ */}

      {/* beat 7 — heading */}
      {block(7, 456, 742, 92, 112, t("③ FORCES & TORQUE", "③ FORCES & TORQUE"))}
      {line(7, 456, 130, 0.9, MUTED, t("the heaviest block of the chapter", "the heaviest block of the chapter"), 12.5)}

      {/* beat 8 — Lorentz force + circular motion */}
      {fx(8, 456, 154, 0.3, INK, "F = q ( E + v × B )")}
      <Draw on={beat >= 8} delay={dl(8, 0.9)} d={circD(486, 206, 20)} stroke={GREEN} sw={1.8} dur={0.8} />
      <Draw on={beat >= 8} delay={dl(8, 1.5)} d={crossInD(486, 206, 6)} stroke={INK} sw={1.4} dur={0.4} />
      <Draw on={beat >= 8} delay={dl(8, 1.8)} d={arrowD(470, 186, 502, 186)} stroke={RED} sw={1.7} dur={0.3} />
      {fx(8, 520, 190, 1.1, INK, "r = m v ⁄ q B")}
      {fx(8, 520, 212, 1.6, INK, "T = 2π m ⁄ q B   (period)")}
      {fx(8, 520, 234, 2.1, INK, "ν = q B ⁄ 2π m   (frequency)")}
      {line(8, 456, 258, 2.7, RED, t("T and ν contain no speed", "T and ν contain no speed"))}

      {/* beat 9 — the two named machines */}
      <Draw on={beat >= 9} delay={dl(9, 0.2)} d="M 460 268 L 512 268" stroke={INK} sw={2.4} dur={0.3} />
      <Draw on={beat >= 9} delay={dl(9, 0.4)} d="M 460 292 L 512 292" stroke={INK} sw={2.4} dur={0.3} />
      <Draw on={beat >= 9} delay={dl(9, 0.65)} d={arrowD(456, 280, 516, 280)} stroke={GREEN} sw={1.8} dur={0.4} />
      {line(9, 520, 288, 0.5, INK, t("velocity selector:  v = E ⁄ B", "velocity selector:  v = E ⁄ B"), 12.8, 800)}
      {line(9, 520, 312, 1.1, INK, t("cyclotron:  K_max = q²B²R² ⁄ 2m", "cyclotron:  K_max = q²B²R² ⁄ 2m"), 12.8, 800)}

      {/* beat 10 — conductors and loops */}
      <Draw on={beat >= 10} delay={dl(10, 0.2)} d="M 460 340 L 512 340" stroke={INK} sw={2.4} dur={0.35} />
      <Draw on={beat >= 10} delay={dl(10, 0.45)} d={arrowD(486, 338, 486, 318)} stroke={RED} sw={1.7} dur={0.3} />
      <Draw on={beat >= 10} delay={dl(10, 0.65)} d={crossInD(468, 352, 5)} stroke={AMBER_DARK} sw={1.3} dur={0.3} />
      <Draw on={beat >= 10} delay={dl(10, 0.8)} d={crossInD(504, 352, 5)} stroke={AMBER_DARK} sw={1.3} dur={0.3} />
      {fx(10, 520, 340, 0.4, INK, "F = I ( L × B )")}

      <Draw on={beat >= 10} delay={dl(10, 1.5)} d={arrowD(470, 398, 470, 366)} stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 10} delay={dl(10, 1.7)} d={arrowD(502, 398, 502, 366)} stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 10} delay={dl(10, 1.95)} d={arrowD(474, 384, 483, 384)} stroke={RED} sw={1.6} dur={0.25} />
      <Draw on={beat >= 10} delay={dl(10, 1.95)} d={arrowD(499, 384, 490, 384)} stroke={RED} sw={1.6} dur={0.25} />
      {fx(10, 520, 382, 1.6, INK, "F ⁄ L = μ₀ I₁ I₂ ⁄ 2π d")}
      {line(10, 520, 404, 2.1, GREEN_DARK, t("attractive for like currents", "attractive for like currents"))}

      <Fade on={beat >= 10} delay={dl(10, 2.7)}>
        <Path d="M 462 442 L 486 430 L 510 442 L 486 454 Z" fill={CREAM} stroke="none" />
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 2.75)} d="M 462 442 L 486 430 L 510 442 L 486 454 Z" stroke={INK} sw={1.8} dur={0.6} />
      <Draw on={beat >= 10} delay={dl(10, 3.2)} d={arrowD(486, 442, 506, 418)} stroke={GREEN} sw={1.7} dur={0.3} />
      <Draw on={beat >= 10} delay={dl(10, 3.45)} d={arrowD(456, 470, 516, 470)} stroke={AMBER_DARK} sw={1.6} dur={0.35} />
      {fx(10, 520, 444, 2.9, INK, "τ = m × B,  | τ | = N I A B sin θ")}
      {line(10, 520, 466, 3.4, RED, t("θ is measured to the NORMAL", "θ is measured to the NORMAL"))}
      {fx(10, 456, 500, 4.0, INK, "U = − m · B   (the dipole energy)")}

      {/* ══════════ COLUMN ③ — x758..1044 · subtopics 4 & 5 ══════════ */}

      {/* beat 11 — heading */}
      {block(11, 758, 1044, 90, 110, t("④ THE GALVANOMETER", "④ THE GALVANOMETER"))}
      {line(11, 758, 128, 0.9, MUTED, t("and its two conversions", "and its two conversions"), 12.5)}

      {/* beat 12 — deflection, shunt, multiplier, both drawn */}
      {fx(12, 758, 152, 0.3, INK, "φ = ( N A B ⁄ k ) I")}
      {fx(12, 758, 180, 0.8, INK, "shunt   S = I_g G ⁄ ( I − I_g )")}
      {line(12, 758, 200, 1.2, AMBER_DARK, t("=  G ⁄ ( n − 1 ),   n = the range factor", "=  G ⁄ ( n − 1 ),   n = the range factor"), 12.5)}

      {/* the shunt, drawn in parallel */}
      <Draw on={beat >= 12} delay={dl(12, 1.7)} d="M 762 232 L 786 232" stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 12} delay={dl(12, 1.9)} d="M 786 232 L 786 216 L 800 216" stroke={RED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 12} delay={dl(12, 2.2)}>
        <Circle cx={812} cy={216} r={11} fill={CREAM} stroke={RED} strokeWidth={1.8} />
        <T x={812} y={221} size={12.5} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 12} delay={dl(12, 2.45)} d="M 824 216 L 842 216 L 842 232" stroke={RED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 12} delay={dl(12, 2.65)} d="M 786 232 L 786 250 L 796 250" stroke={GREEN_DARK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 12} delay={dl(12, 2.9)}>
        <Rect x={796} y={242} width={32} height={16} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={812} y={254} size={12.5} fill={GREEN_DARK} weight={800}>
          S
        </T>
      </Fade>
      <Draw on={beat >= 12} delay={dl(12, 3.1)} d="M 828 250 L 842 250 L 842 232" stroke={GREEN_DARK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 12} delay={dl(12, 3.3)} d="M 842 232 L 866 232" stroke={INK} sw={1.8} dur={0.3} />
      {line(12, 876, 236, 3.5, GREEN_DARK, t("in parallel", "in parallel"), 12.5, 800)}

      {fx(12, 758, 282, 4.0, INK, "multiplier   R = V ⁄ I_g − G")}

      {/* the multiplier, drawn in series */}
      <Draw on={beat >= 12} delay={dl(12, 4.5)} d="M 762 308 L 782 308" stroke={INK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 12} delay={dl(12, 4.7)}>
        <Rect x={782} y={298} width={32} height={20} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
        <T x={798} y={313} size={12.5} fill={AMBER_DARK} weight={800}>
          R
        </T>
      </Fade>
      <Draw on={beat >= 12} delay={dl(12, 4.95)} d="M 814 308 L 832 308" stroke={INK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 12} delay={dl(12, 5.15)}>
        <Circle cx={844} cy={308} r={11} fill={CREAM} stroke={RED} strokeWidth={1.8} />
        <T x={844} y={313} size={12.5} fill={RED} weight={800}>
          G
        </T>
      </Fade>
      <Draw on={beat >= 12} delay={dl(12, 5.4)} d="M 855 308 L 874 308" stroke={INK} sw={1.8} dur={0.3} />
      {line(12, 884, 312, 5.6, AMBER_DARK, t("in series", "in series"), 12.5, 800)}
      {line(12, 758, 336, 6.0, RED, t("remember the − G", "remember the − G"))}

      {/* beat 13 — heading */}
      {block(13, 758, 1044, 352, 372, t("⑤ THE MAGNETIC DIPOLE", "⑤ THE MAGNETIC DIPOLE"))}

      {/* beat 14 — moment and the far fields */}
      {fx(14, 758, 396, 0.3, INK, "m = N I A,  along the area vector")}
      <Draw on={beat >= 14} delay={dl(14, 0.9)} d={ellD(789, 434, 25, 8)} stroke={GREEN} sw={1.8} dur={0.7} />
      <Draw on={beat >= 14} delay={dl(14, 1.4)} d={arrowD(789, 434, 789, 408)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 14} delay={dl(14, 1.7)}>
        <T x={797} y={412} size={12.5} fill={RED} weight={800} anchor="start">
          m
        </T>
      </Fade>
      {line(14, 830, 424, 1.9, INK, t("axial   B = (μ₀ ⁄ 4π) 2m ⁄ x³", "axial   B = (μ₀ ⁄ 4π) 2m ⁄ x³"), 12.8, 800)}
      {line(14, 830, 446, 2.4, INK, t("equatorial   half of that", "equatorial   half of that"), 12.8, 800)}
      {line(14, 758, 470, 2.9, GREEN_DARK, t("axial : equatorial = 2 : 1", "axial : equatorial = 2 : 1"))}

      {/* beat 15 — the atomic results */}
      {fx(15, 758, 494, 0.3, INK, "μ_l = e v r ⁄ 2 = ( e ⁄ 2m ) L")}
      {line(15, 758, 514, 0.9, INK, t("e ⁄ 2m = the gyromagnetic ratio", "e ⁄ 2m = the gyromagnetic ratio"), 12.5)}
      {line(15, 758, 532, 1.3, MUTED, "≈ 8.8 × 10¹⁰ C kg⁻¹", 12.5)}
      {fx(15, 758, 554, 1.8, INK, "Bohr magneton  μ_B = e h ⁄ 4π m", 12.8)}
      {line(15, 758, 572, 2.3, MUTED, "≈ 9.27 × 10⁻²⁴ A m²", 12.5)}

      {/* ══════════ beat 16 — the one constant ══════════ */}
      <Draw on={beat >= 16} delay={dl(16, 0.15)} d="M 44 558 L 742 558" stroke={INK} sw={1.5} dur={0.7} />
      <Fade on={beat >= 16} delay={dl(16, 0.6)}>
        <Chip x={44} y={564} w={336} h={28} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={12.6} script={false}>
          μ₀ = 4π × 10⁻⁷ T m A⁻¹
        </Chip>
      </Fade>
      <Fade on={beat >= 16} delay={dl(16, 1.1)}>
        <Chip x={396} y={564} w={346} h={28} fill={GREEN} textFill="#ffffff" size={12.6} script={false}>
          {t(
            "⇒ μ₀ ⁄ 4π = 10⁻⁷ exactly — keep this form",
            "⇒ μ₀ ⁄ 4π = 10⁻⁷ exactly — keep this form"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
