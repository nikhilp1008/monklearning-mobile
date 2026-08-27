/**
 * P12Ch04 · Section 11 — "Key Formulas and Definitions"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW
 *   Four gates (0, 7, 8, 10) over eleven narration segments. Nothing at all
 *   was written between 0 s and 221 s — the law itself, the definitions, the
 *   straight-wire result and the whole thick-wire discussion were spoken to a
 *   board holding only a title. Four drawn shapes, all rules. The narration
 *   says "the graph makes the shape of that result unmistakable" and "it is
 *   worth carrying this picture in your head" — and there was no graph, no
 *   solenoid, no toroid, no wire cross-section.
 *
 * WHAT THE NARRATION TEACHES
 *   The formula bank for Ampere's law: the law itself, the units and the
 *   symbols, then the four standard results it produces — infinite straight
 *   wire, thick wire (two regions, with the B-vs-r profile), ideal solenoid
 *   (B = μ₀nI, no r), toroid (B = μ₀NI/2πr, zero elsewhere) — the n-versus-N
 *   trap, and the consistency check against Biot–Savart's infinite limit.
 *
 * BEAT MAP (n_reveals = 11 · gates 0..10, every beat used)
 *   0  title + underline
 *   1  the law itself, ∮ B · dl = μ₀ I_enc
 *   2  units, sign convention, μ₀ and its dimensional formula
 *   3  "the four standard results" header
 *   4  ① infinite straight wire — FIGURE (wire ⊙, dashed circle, tangential
 *      B, radius r) + B(2πr) = μ₀I
 *   5  ② thick wire — FIGURE (cross-section, R and r) + both regions
 *   6  the B-vs-r GRAPH: linear rise inside, peak at R, 1/r decay outside
 *   7  ③ ideal solenoid — FIGURE (cross-section windings ⊙/⊗, interior field)
 *   8  ④ toroid — FIGURE (concentric circles, windings, radius r)
 *   9  the symbol table: I, R, r, n, N and n = N/length
 *  10  consistency with the Biot–Savart infinite limit
 *
 * No numeric arithmetic is printed beyond μ₀ = 4π × 10⁻⁷ T m A⁻¹, which the
 * narration states verbatim; every symbol on the board is spoken.
 */

import React from "react";
import { Circle, G, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;

const crossGlyphD = (cx: number, cy: number, s: number) =>
  `M ${cx - s} ${cy - s} L ${cx + s} ${cy + s} M ${cx + s} ${cy - s} L ${cx - s} ${cy + s}`;

const WINDING_X = [598, 634, 670, 706, 742];

export default function P12Ch04Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("One Law, Four Results — the Ampere Formula Bank",
             "One Law, Four Results — the Ampere Formula Bank")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 254 60 C 470 55, 650 65, 826 58" stroke={RED} sw={2.2} dur={0.7} />

      {/* ═══════════ LEFT COLUMN ═══════════ */}

      {/* beat 1 — the law */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={44} y={92} w={476} h={52} fill={CREAM} stroke={INK} textFill={INK} size={21}>
          ∮ B · dl = μ₀ I_enclosed
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={44} y={166} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Every derivation here is this one equation applied to a cleverly chosen loop.",
             "Every derivation here is this one equation applied to a cleverly chosen loop.")}
        </T>
      </Fade>

      {/* beat 2 — definitions */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={192} size={12.2} fill={INK} weight={700} anchor="start">
          ∮ B · dl — closed line integral round your loop · unit: tesla metre
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={44} y={212} size={12.2} fill={INK} weight={700} anchor="start">
          I_enc — net threading current, in amperes (fingers along traversal, thumb +)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={44} y={232} size={12.2} fill={AMBER_DARK} weight={700} anchor="start">
          μ₀ = 4π × 10⁻⁷ T m A⁻¹ · [μ₀] = M¹ L¹ T⁻² A⁻²
        </T>
      </Fade>

      {/* beat 3 — header for the four results */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={260} size={14} fill={RED} weight={800} anchor="start">
          {t("THE FOUR STANDARD RESULTS", "THE FOUR STANDARD RESULTS")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={44} y={278} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("two derived in full next · two you should be able to reconstruct",
             "two derived in full next · two you should be able to reconstruct")}
        </T>
      </Fade>

      {/* beat 4 — infinite straight wire */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Circle cx={120} cy={330} r={42} fill="none" stroke={MUTED} strokeWidth={1.7} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={circleD(120, 330, 10)} stroke={INK} sw={2.1} dur={0.35} />
      <Fade on={beat >= 4} delay={dl(4, 0.95)}>
        <Circle cx={120} cy={330} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={arrowD(162, 344, 162, 316)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 1.55)} d={arrowD(134, 288, 106, 288)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={arrowD(106, 372, 134, 372)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 2.1)} d="M 120 330 L 90 360" stroke={INK_LIGHT} sw={1.7} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={98} y={342} size={11.5} fill={INK_LIGHT} weight={800}>r</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={214} y={302} size={13} fill={GREEN} weight={800} anchor="start">
          {t("① INFINITE STRAIGHT WIRE", "① INFINITE STRAIGHT WIRE")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={214} y={326} size={12.8} fill={INK} weight={700} anchor="start">
          B × 2πr = μ₀ I
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={214} y={350} size={13.5} fill={INK} weight={800} anchor="start">
          B = μ₀ I ⁄ 2πr
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={214} y={372} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("two lines — Biot–Savart needed a full integration",
             "two lines — Biot–Savart needed a full integration")}
        </T>
      </Fade>

      {/* beat 5 — thick wire */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Circle cx={120} cy={446} r={46} fill={CREAM} stroke="none" />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d={circleD(120, 446, 46)} stroke={INK} sw={2.3} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Circle cx={120} cy={446} r={25} fill="none" stroke={MUTED} strokeWidth={1.7} strokeDasharray="6 5" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Circle cx={120} cy={446} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d="M 120 446 L 166 446" stroke={INK} sw={1.7} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={148} y={440} size={11.5} fill={INK} weight={800}>R</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.3)} d="M 120 446 L 120 421" stroke={GREEN} sw={1.7} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={112} y={432} size={11.5} fill={GREEN} weight={800} anchor="end">r</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={214} y={404} size={13} fill={GREEN} weight={800} anchor="start">
          {t("② THICK WIRE, RADIUS R", "② THICK WIRE, RADIUS R")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={214} y={428} size={12.2} fill={INK} weight={700} anchor="start">
          r &lt; R:  I_enc = I r² ⁄ R²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={214} y={450} size={12.8} fill={INK} weight={800} anchor="start">
          ⟹ B = μ₀ I r ⁄ 2πR²   (∝ r)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.4)}>
        <T x={214} y={474} size={12.8} fill={INK} weight={800} anchor="start">
          r &gt; R:  B = μ₀ I ⁄ 2πr   (∝ 1⁄r)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={214} y={494} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("current spread uniformly over the cross-section",
             "current spread uniformly over the cross-section")}
        </T>
      </Fade>

      {/* ═══════════ RIGHT COLUMN ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 536 84 L 536 540" stroke={MUTED} sw={1.1} dur={0.7} />

      {/* beat 6 — the B-vs-r graph */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={556} y={98} size={14} fill={RED} weight={800} anchor="start">
          {t("THE B-vs-r PROFILE OF A THICK WIRE", "THE B-vs-r PROFILE OF A THICK WIRE")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Rect x={604} y={114} width={160} height={140} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={arrowD(604, 254, 604, 112)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={arrowD(604, 254, 1024, 254)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={590} y={118} size={12.5} fill={INK} weight={800}>B</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={1032} y={260} size={12.5} fill={INK} weight={800}>r</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={594} y={268} size={11} fill={MUTED} weight={600}>O</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2)} d="M 604 254 L 764 152" stroke={GREEN} sw={2.7} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <T x={662} y={192} size={11.5} fill={GREEN} weight={800}>∝ r</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <Line x1={764} y1={254} x2={764} y2={152} stroke={MUTED} strokeWidth={1.5} strokeDasharray="5 5" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.3)}>
        <Circle cx={764} cy={152} r={5.2} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={782} y={140} size={11} fill={AMBER_DARK} weight={800} anchor="start">max at the surface</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4)}
        d="M 764 152 C 804 174, 844 189, 924 207 C 964 213, 992 216, 1014 219"
        stroke={RED} sw={2.5} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 4.9)}>
        <T x={892} y={184} size={11.5} fill={RED} weight={800}>∝ 1⁄r</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.2)}>
        <T x={764} y={270} size={11.5} fill={INK} weight={800}>R</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.2)}>
        <T x={668} y={270} size={10.5} fill={MUTED} weight={600}>inside r &lt; R</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.2)}>
        <T x={892} y={270} size={10.5} fill={MUTED} weight={600}>outside r &gt; R</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.8)}>
        <T x={556} y={292} size={11.8} fill={MUTED} weight={600} anchor="start">
          {t("zero on the axis · greatest at the surface · decays outside",
             "zero on the axis · greatest at the surface · decays outside")}
        </T>
      </Fade>

      {/* beat 7 — the ideal solenoid */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={556} y={320} size={13} fill={GREEN} weight={800} anchor="start">
          {t("③ IDEAL SOLENOID", "③ IDEAL SOLENOID")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 580 344 H 760" stroke={MUTED} sw={1.3} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 580 400 H 760" stroke={MUTED} sw={1.3} dur={0.4} />
      {WINDING_X.map((wx, i) => (
        <G key={`sol-top-${wx}`}>
          <Draw on={beat >= 7} delay={dl(7, 1 + i * 0.12)} d={circleD(wx, 344, 7)} stroke={INK} sw={1.8} dur={0.25} />
          <Fade on={beat >= 7} delay={dl(7, 1.15 + i * 0.12)}>
            <Circle cx={wx} cy={344} r={2.2} fill={INK} />
          </Fade>
        </G>
      ))}
      {WINDING_X.map((wx, i) => (
        <G key={`sol-bot-${wx}`}>
          <Draw on={beat >= 7} delay={dl(7, 1.7 + i * 0.12)} d={circleD(wx, 400, 7)} stroke={INK} sw={1.8} dur={0.25} />
          <Draw on={beat >= 7} delay={dl(7, 1.85 + i * 0.12)} d={crossGlyphD(wx, 400, 4.4)} stroke={INK} sw={1.5} dur={0.2} />
        </G>
      ))}
      <Draw on={beat >= 7} delay={dl(7, 2.6)} d={arrowD(590, 372, 652, 372)} stroke={GREEN} sw={2.3} dur={0.35} />
      <Draw on={beat >= 7} delay={dl(7, 2.85)} d={arrowD(682, 372, 748, 372)} stroke={GREEN} sw={2.3} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 3.3)}>
        <T x={556} y={426} size={10.5} fill={MUTED} weight={600} anchor="start">
          ⊙ out of page (top winding) · ⊗ into page (bottom)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={556} y={452} size={13.5} fill={INK} weight={800} anchor="start">
          B = μ₀ n I — uniform, no r at all
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.6)}>
        <T x={556} y={472} size={11.8} fill={INK_LIGHT} weight={600} anchor="start">
          outside ≈ 0 · n = turns per unit length
        </T>
      </Fade>

      {/* beat 8 — the toroid */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={806} y={320} size={13} fill={GREEN} weight={800} anchor="start">
          {t("④ TOROID", "④ TOROID")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d={circleD(924, 382, 46)} stroke={INK} sw={2.3} dur={0.7} />
      <Draw on={beat >= 8} delay={dl(8, 1.2)} d={circleD(924, 382, 24)} stroke={INK} sw={2.3} dur={0.5} />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        const x1 = 924 + 19 * Math.cos(a);
        const y1 = 382 + 19 * Math.sin(a);
        const x2 = 924 + 51 * Math.cos(a);
        const y2 = 382 + 51 * Math.sin(a);
        return (
          <Draw key={`tor-w-${deg}`} on={beat >= 8} delay={dl(8, 1.8 + i * 0.14)}
            d={`M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`}
            stroke={MUTED} sw={1.7} dur={0.22} />
        );
      })}
      <Draw on={beat >= 8} delay={dl(8, 2.9)} d={arrowD(924, 382, 954, 364)} stroke={GREEN} sw={1.9} dur={0.3} />
      <Fade on={beat >= 8} delay={dl(8, 3.2)}>
        <T x={960} y={360} size={11.5} fill={GREEN} weight={800} anchor="start">r</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.6)}>
        <T x={806} y={452} size={13.5} fill={INK} weight={800} anchor="start">
          B = μ₀ N I ⁄ 2πr
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 5.2)}>
        <T x={806} y={472} size={11.8} fill={INK_LIGHT} weight={600} anchor="start">
          0 in the hole and outside · falls as 1⁄r
        </T>
      </Fade>

      {/* beat 9 — the symbol table */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={556} y={504} size={13} fill={RED} weight={800} anchor="start">
          {t("SYMBOLS — WHERE MARKS ARE ACTUALLY LOST", "SYMBOLS — WHERE MARKS ARE ACTUALLY LOST")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2)}>
        <T x={556} y={522} size={12} fill={INK_LIGHT} weight={600} anchor="start">
          I current · R conductor radius · r field-point distance
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 4.4)}>
        <T x={556} y={540} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          n = turns per unit length (SOLENOID) · N = total turns (TOROID) · n = N ⁄ length
        </T>
      </Fade>

      {/* beat 10 — the consistency check, full width */}
      <Draw on={beat >= 10} delay={dl(10, 0.2)} d="M 44 556 L 1036 556" stroke={INK} sw={1.5} dur={0.7} />
      <Fade on={beat >= 10} delay={dl(10, 0.9)}>
        <T x={44} y={576} size={12.8} fill={INK} weight={700} anchor="start">
          Ampere → B = μ₀ I ⁄ 2πr in two lines.   Biot–Savart's finite wire, taken to the infinite limit → μ₀ I ⁄ 2πa.
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 3.4)}>
        <T x={44} y={594} size={12.8} fill={GREEN} weight={800} anchor="start">
          {t("Identical expressions from two completely different methods — the consistency check examiners ask you to demonstrate.",
             "Identical expressions from two completely different methods — the consistency check examiners ask you to demonstrate.")}
        </T>
      </Fade>
    </Scene>
  );
}
