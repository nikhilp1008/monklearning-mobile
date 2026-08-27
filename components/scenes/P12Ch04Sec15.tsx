/**
 * P12Ch04 · Section 15 — "Worked Examples Three and Four: Coaxial Cable and the
 * Drilled Cavity"
 * Subtopic: Ampere's Circuital Law and Its Applications
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22). What it used to show: four gates (0,1,5,11)
 * against fifteen narration segments, and four drawn strokes — the title
 * underline plus rules. Both examples are pictures (a coaxial cross-section,
 * an off-centre bored cavity) and the narration says "the figure shows the
 * cross-section" and "look at the figure" outright, yet nothing was drawn. The
 * board froze for over a minute at a time, twice.
 *
 * What the narration actually teaches: (3) coaxial cable — the whole problem is
 * enclosed-current accounting. Between the conductors only the inner 6.0 A is
 * enclosed; outside, +6.0 and −6.0 cancel, so B = 0 and the cable neither
 * radiates nor picks up. (4) the drilled cavity — superposition of a +J
 * cylinder and a −J cylinder, using the vector form B = (μ₀/2) J × r, whose
 * linearity makes r₁ − r₂ = d and hence B uniform throughout the cavity.
 *
 * Beat map (15 segments, gates 0..14 — every beat used):
 *  0  "example three, JEE Main"           title + Ex 3 header
 *  1  the coax statement                  three data lines
 *  2  "the figure shows the cross-section" COAX FIGURE: inner conductor with ⊙,
 *                                          shell with ⊗, amber loop at 2.0 mm,
 *                                          blue loop at 6.0 mm + legend
 *  3  the accounting                      which loop encloses what
 *  4  writing it down                     I_enc = +6.0 A  ·  6.0 − 6.0 = 0
 *  5  apply the law                       B₁ = 0.60 mT · B₂ = 0
 *  6  why coax is used                    confined field, no radiation/pickup
 *  7  "example four, JEE Advanced"        divider + Ex 4 header
 *  8  the cavity statement                cylinder R, cavity ρ, displacement d
 *  9  "look at the figure"                CAVITY FIGURE: conductor with ⊙ J,
 *                                          offset white cavity, amber d from
 *                                          O to O′, P with dashed r₁ and r₂
 * 10  the superposition strategy          + J cylinder  plus  − J cylinder
 * 11  the vector form                     B = (μ₀/2) J × r, linear in r
 * 12  add the two contributions           (μ₀/2) J × (r₁ − r₂)
 * 13  the geometric finish                r₁ − r₂ = d ⇒ |B| = μ₀ J d / 2
 * 14  why it works                        uniform, and only because it's linear
 *
 * Arithmetic (recomputed):
 *   B₁ = μ₀ I / 2πr = (4π×10⁻⁷ × 6.0) / (2π × 2.0×10⁻³)
 *      = (4π/2π)(6.0/2.0) × 10⁻⁷⁺³ = 2 × 3 × 10⁻⁴ = 6.0 × 10⁻⁴ T = 0.60 mT ✓
 *   B₂: I_enc = 6.0 − 6.0 = 0 ⇒ B₂ = 0, no calculation needed ✓
 *   Example 4 is symbolic throughout; no numerals appear on that half.
 *
 * Figure geometry is to scale. Coax: 16 px per mm, so inner 16, loop 1 at 32,
 * shell 64, loop 2 at 96 — the amber loop really does sit between the two
 * conductors and the blue one really is outside both. Cavity: |OO′| = 59 and
 * ρ = 25, so the cavity (84 from O at its far edge) lies wholly inside R = 88.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;

/** dashed circle as a single drawable path */
function dashCircD(cx: number, cy: number, r: number, n = 28): string {
  const p: string[] = [];
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = a0 + (0.6 / n) * Math.PI * 2;
    p.push(
      `M ${(cx + r * Math.cos(a0)).toFixed(1)} ${(cy + r * Math.sin(a0)).toFixed(1)} ` +
      `A ${r} ${r} 0 0 1 ${(cx + r * Math.cos(a1)).toFixed(1)} ${(cy + r * Math.sin(a1)).toFixed(1)}`
    );
  }
  return p.join(" ");
}

/** dashed straight line as a single drawable path */
function dashD(x1: number, y1: number, x2: number, y2: number, n = 5): string {
  const p: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = i / n;
    const b = a + 0.6 / n;
    p.push(
      `M ${(x1 + (x2 - x1) * a).toFixed(1)} ${(y1 + (y2 - y1) * a).toFixed(1)} ` +
      `L ${(x1 + (x2 - x1) * b).toFixed(1)} ${(y1 + (y2 - y1) * b).toFixed(1)}`
    );
  }
  return p.join(" ");
}

export default function P12Ch04Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /** ⊗ crosses sitting on the outer shell */
  const shellCrosses = Array.from({ length: 8 }, (_, k) => {
    const a = (k * 45 * Math.PI) / 180;
    const x = 166 + 64 * Math.cos(a);
    const y = 300 + 64 * Math.sin(a);
    return `M ${(x - 5).toFixed(1)} ${(y - 5).toFixed(1)} L ${(x + 5).toFixed(1)} ${(y + 5).toFixed(1)} ` +
           `M ${(x + 5).toFixed(1)} ${(y - 5).toFixed(1)} L ${(x - 5).toFixed(1)} ${(y + 5).toFixed(1)}`;
  });

  const innerDots: [number, number][] = [[166, 292], [159, 306], [173, 306]];
  const cavDots: [number, number][] = [
    [612, 258], [600, 306], [632, 346], [688, 344], [722, 326],
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — title + Example 3 header ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Enclosed current, counted properly", "Enclosed current, counted properly")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 350 62 C 470 58, 620 66, 730 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={44} y={104} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 3 · JEE MAIN — the coaxial cable", "EXAMPLE 3 · JEE MAIN — the coaxial cable")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.1)}>
        <T x={44} y={124} size={12.3} fill={MUTED} weight={600} anchor="start">
          {t("enclosed-current accounting with more than one conductor",
             "enclosed-current accounting with more than one conductor")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the statement ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={44} y={150} size={12.4} fill={INK} weight={600} anchor="start">
          {t("inner solid conductor, radius 1.0 mm — 6.0 A out of the page",
             "inner solid conductor, radius 1.0 mm — 6.0 A out of the page")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={44} y={168} size={12.4} fill={INK} weight={600} anchor="start">
          {t("outer thin shell, radius 4.0 mm — 6.0 A back into the page",
             "outer thin shell, radius 4.0 mm — 6.0 A back into the page")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={44} y={186} size={12.4} fill={INK} weight={600} anchor="start">
          {t("find B at r = 2.0 mm (between) and at r = 6.0 mm (outside)",
             "find B at r = 2.0 mm (between) and at r = 6.0 mm (outside)")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the coax cross-section ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={circD(166, 300, 64)} stroke={INK} sw={3.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={circD(166, 300, 16)} stroke={INK} sw={2.2} dur={0.5} fill={CREAM} />
      {innerDots.map(([cx, cy], i) => (
        <Fade key={`id${cx}-${cy}`} on={beat >= 2} delay={dl(2, 1.3 + i * 0.12)}>
          <Circle cx={cx} cy={cy} r={4.6} fill="none" stroke={GREEN} strokeWidth={1.4} />
          <Circle cx={cx} cy={cy} r={1.6} fill={GREEN} />
        </Fade>
      ))}
      {shellCrosses.map((d, i) => (
        <Draw key={`sc${i}`} on={beat >= 2} delay={dl(2, 1.8 + i * 0.08)}
          d={d} stroke={RED} sw={1.8} dur={0.25} />
      ))}
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={dashCircD(166, 300, 32)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 3.3)} d={dashCircD(166, 300, 96)} stroke={BLUE} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={166} y={216} size={11.5} fill={BLUE} weight={800}>6.0 mm</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.15)}>
        <T x={96} y={294} size={11.5} fill={INK} weight={800} anchor="end">4.0 mm</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.3)}>
        <T x={166} y={258} size={11.5} fill={AMBER_DARK} weight={800}>2.0 mm</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.45)}>
        <T x={166} y={344} size={11.5} fill={INK} weight={800}>1.0 mm</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={290} y={214} size={12.2} fill={GREEN} weight={700} anchor="start">
          {t("⊙ inner conductor — 6.0 A out", "⊙ inner conductor — 6.0 A out")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.1)}>
        <T x={290} y={236} size={12.2} fill={RED} weight={700} anchor="start">
          {t("⊗ outer shell — 6.0 A in", "⊗ outer shell — 6.0 A in")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={290} y={258} size={12.2} fill={AMBER_DARK} weight={700} anchor="start">
          {t("amber dashed: loop at r = 2.0 mm", "amber dashed: loop at r = 2.0 mm")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.7)}>
        <T x={290} y={280} size={12.2} fill={BLUE} weight={700} anchor="start">
          {t("blue dashed: loop at r = 6.0 mm", "blue dashed: loop at r = 6.0 mm")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={290} y={302} size={12} fill={MUTED} weight={600} anchor="start">
          {t("equal and opposite — the point of coax", "equal and opposite — the point of coax")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the accounting ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={44} y={420} size={12.8} fill={RED} weight={800} anchor="start">
          {t("THE ACCOUNTING — where it is won or lost", "THE ACCOUNTING — where it is won or lost")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={44} y={440} size={12.3} fill={INK} weight={600} anchor="start">
          {t("r = 2.0 mm: outside the inner conductor, inside the shell —",
             "r = 2.0 mm: outside the inner conductor, inside the shell —")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={44} y={458} size={12.3} fill={INK} weight={600} anchor="start">
          {t("it encloses the inner 6.0 A only, none of the shell’s",
             "it encloses the inner 6.0 A only, none of the shell’s")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={44} y={476} size={12.3} fill={INK} weight={600} anchor="start">
          {t("r = 6.0 mm: outside both — it encloses both, equal and opposite",
             "r = 6.0 mm: outside both — it encloses both, equal and opposite")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — write the enclosed currents ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={44} y={504} size={12.6} fill={AMBER_DARK} weight={800} anchor="start">
          case 1:  I_enc = + 6.0 A          case 2:  I_enc = 6.0 − 6.0 = 0
        </T>
      </Fade>

      {/* ═══════════ beat 5 — apply the law ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={44} y={530} size={12.4} fill={INK} weight={700} anchor="start">
          B (2πr) = μ₀ I_enc  ⇒  B₁ = μ₀ (6.0) / 2π (2.0 × 10⁻³)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={44} y={550} size={13} fill={GREEN} weight={900} anchor="start">
          B₁ = 6.0 × 10⁻⁴ T = 0.60 mT        B₂ = 0
        </T>
      </Fade>

      {/* ═══════════ beat 6 — why coax is used ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={44} y={578} size={12.4} fill={GREEN} weight={800} anchor="start">
          {t("coax confines B between the conductors: no radiation, no pickup",
             "coax confines B between the conductors: no radiation, no pickup")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — Example 4 ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 540 92 L 540 592" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={556} y={104} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 4 · JEE ADVANCED — the drilled cavity", "EXAMPLE 4 · JEE ADVANCED — the drilled cavity")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={556} y={124} size={12.3} fill={MUTED} script anchor="start">
          {t("the superposition classic — worth knowing beyond this geometry",
             "the superposition classic — worth knowing beyond this geometry")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — the statement ═══════════ */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={556} y={150} size={12.4} fill={INK} weight={600} anchor="start">
          {t("a solid cylinder of radius R, uniform current density J out of the page",
             "a solid cylinder of radius R, uniform current density J out of the page")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={556} y={168} size={12.4} fill={INK} weight={600} anchor="start">
          {t("a cavity of radius ρ is bored parallel to the axis, displaced by d",
             "a cavity of radius ρ is bored parallel to the axis, displaced by d")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.8)}>
        <T x={556} y={186} size={12.4} fill={INK} weight={600} anchor="start">
          {t("show B is uniform everywhere inside the cavity, and find it",
             "show B is uniform everywhere inside the cavity, and find it")}
        </T>
      </Fade>

      {/* ═══════════ beat 9 — the cavity figure ═══════════ */}
      <Draw on={beat >= 9} delay={dl(9, 0.2)} d={circD(656, 296, 88)} stroke={INK} sw={2.4} dur={1} fill={CREAM} />
      {cavDots.map(([cx, cy], i) => (
        <Fade key={`cd${cx}-${cy}`} on={beat >= 9} delay={dl(9, 0.9 + i * 0.13)}>
          <Circle cx={cx} cy={cy} r={7} fill="none" stroke={GREEN} strokeWidth={1.6} />
          <Circle cx={cx} cy={cy} r={2.2} fill={GREEN} />
        </Fade>
      ))}
      <Draw on={beat >= 9} delay={dl(9, 1.7)} d={circD(708, 268, 25)} stroke={INK} sw={2.2} dur={0.6} fill={PAPER} />
      <Draw on={beat >= 9} delay={dl(9, 2.3)} d="M 708 268 L 684.5 259.5" stroke={MUTED} sw={1.5} dur={0.3} />
      <Fade on={beat >= 9} delay={dl(9, 2.5)}>
        <T x={692} y={254} size={11.5} fill={MUTED} weight={800}>ρ</T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 2.8)} d="M 656 296 L 568 296" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 3)}>
        <T x={610} y={288} size={12} fill={INK} weight={800}>R</T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 3.3)} d={arrowD(656, 296, 708, 268)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 9} delay={dl(9, 3.7)}>
        <T x={668} y={272} size={13} fill={AMBER_DARK} weight={900}>d</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 3.9)}>
        <Circle cx={656} cy={296} r={3.5} fill={INK} />
        <T x={646} y={312} size={11.5} fill={INK} weight={800} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 4.1)}>
        <Circle cx={708} cy={268} r={3.5} fill={INK} />
        <T x={718} y={252} size={11.5} fill={INK} weight={800} anchor="start">O′</T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 4.4)} d={dashD(656, 296, 720, 286, 6)} stroke={MUTED} sw={1.5} dur={0.4} />
      <Draw on={beat >= 9} delay={dl(9, 4.6)} d={dashD(708, 268, 720, 286, 3)} stroke={MUTED} sw={1.5} dur={0.3} />
      <Fade on={beat >= 9} delay={dl(9, 4.8)}>
        <Circle cx={720} cy={286} r={4} fill={RED} />
        <T x={730} y={298} size={11.5} fill={RED} weight={800} anchor="start">P</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 5)}>
        <T x={676} y={320} size={11.5} fill={MUTED} weight={800}>r₁</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 5.1)}>
        <T x={736} y={264} size={11.5} fill={MUTED} weight={800} anchor="start">r₂</T>
      </Fade>

      <Fade on={beat >= 9} delay={dl(9, 5.4)}>
        <T x={776} y={216} size={12.2} fill={GREEN} weight={700} anchor="start">
          {t("⊙ J out of the page", "⊙ J out of the page")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 5.7)}>
        <T x={776} y={236} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the white circle is the cavity", "the white circle is the cavity")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6)}>
        <T x={776} y={256} size={12.2} fill={AMBER_DARK} weight={700} anchor="start">
          {t("d — from the axis O to the axis O′", "d — from the axis O to the axis O′")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6.3)}>
        <T x={776} y={276} size={12.2} fill={RED} weight={700} anchor="start">
          {t("P — a sample point in the cavity", "P — a sample point in the cavity")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6.6)}>
        <T x={776} y={296} size={12.2} fill={MUTED} weight={600} anchor="start">
          {t("dashed: its position from each axis", "dashed: its position from each axis")}
        </T>
      </Fade>

      {/* ═══════════ beat 10 — superposition ═══════════ */}
      <Fade on={beat >= 10} delay={dl(10, 0.3)}>
        <T x={556} y={410} size={12.8} fill={RED} weight={800} anchor="start">
          {t("SUPERPOSITION — the move worth learning", "SUPERPOSITION — the move worth learning")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.2)}>
        <T x={556} y={430} size={12.3} fill={INK} weight={600} anchor="start">
          {t("a full cylinder of + J (no hole)   plus   a small cylinder of − J",
             "a full cylinder of + J (no hole)   plus   a small cylinder of − J")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 2.2)}>
        <T x={556} y={448} size={12.3} fill={INK} weight={600} anchor="start">
          {t("in the overlap they cancel → zero current — exactly a cavity",
             "in the overlap they cancel → zero current — exactly a cavity")}
        </T>
      </Fade>

      {/* ═══════════ beat 11 — the vector form ═══════════ */}
      <Fade on={beat >= 11} delay={dl(11, 0.3)}>
        <T x={556} y={476} size={12.6} fill={AMBER_DARK} weight={800} anchor="start">
          {t("the solid-cylinder field, in vector form:", "the solid-cylinder field, in vector form:")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.1)}>
        <T x={556} y={498} size={14} fill={INK} weight={900} anchor="start">
          B = (μ₀ / 2) J × r        — LINEAR in r
        </T>
      </Fade>

      {/* ═══════════ beat 12 — add the two contributions ═══════════ */}
      <Fade on={beat >= 12} delay={dl(12, 0.3)}>
        <T x={556} y={524} size={12.4} fill={INK} weight={700} anchor="start">
          at P:   (μ₀/2) J × r₁  +  (μ₀/2)(− J) × r₂   =   (μ₀/2) J × (r₁ − r₂)
        </T>
      </Fade>

      {/* ═══════════ beat 13 — the geometric finish ═══════════ */}
      <Fade on={beat >= 13} delay={dl(13, 0.3)}>
        <T x={556} y={550} size={12.6} fill={GREEN} weight={800} anchor="start">
          r₁ − r₂ = d, wherever P sits ⇒ B = (μ₀/2) J × d,  |B| = μ₀ J d / 2
        </T>
      </Fade>

      {/* ═══════════ beat 14 — why it works ═══════════ */}
      <Fade on={beat >= 14} delay={dl(14, 0.3)}>
        <T x={556} y={576} size={12.3} fill={MUTED} weight={600} anchor="start">
          {t("the same at every point — uniform. It works only because B is linear in r.",
             "the same at every point — uniform. It works only because B is linear in r.")}
        </T>
      </Fade>
    </Scene>
  );
}
