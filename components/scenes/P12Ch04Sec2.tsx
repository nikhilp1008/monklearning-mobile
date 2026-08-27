/**
 * P12Ch04 · Section 2 — "Field Geometry: Grip Rule, Sine Dependence and Closed Loops"
 * Subtopic: Magnetic Field and the Biot-Savart Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22).
 *
 * What it used to show: four gates (0, 1, 5, 7) against NINE narration
 * segments, four drawn strokes in total (title underline, two horizontal
 * rules, one badge ring), and two columns of numbered bullet text that all
 * snapped in at once on beat 1 and beat 5. The board sat unchanged from
 * 17s to 151s while the voice taught the grip rule, the sine law and the
 * dead zone — a section whose entire content is geometry, drawn with no
 * geometry at all.
 *
 * What the narration actually teaches: three pictures plus the fine print.
 * (1) B circles the wire, it never points along it — unlike the radial E
 * field of a charge; the right-hand grip rule fixes the sense, and to the
 * right of an upward current B goes into the page. (2) dB ∝ sin θ: an
 * element contributes nothing along its own line (the "dead zone") and
 * most at 90°. (3) B lines are always closed loops, so the flux through
 * any closed surface is zero — Gauss's law for magnetism, i.e. no
 * monopoles. Then four conditions on the Biot-Savart law.
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "two pictures worth locking in"        title + underline + subtitle
 *  1  "B circles the wire, E goes radial"    ① header + the radial-E figure
 *  2  "grab the wire, thumb along I"         wire + 3 field rings + chevrons
 *                                            + ⊙ left / ⊗ right + grip caption
 *  3  "a current element is not isotropic"   ② header + sine statement
 *  4  "study the diagram: 90° max, 0 dead"   element block, P at 90°, the
 *                                            θ arc, the slanted ray, the red
 *                                            dead-zone stretch along the wire
 *  5  "field lines are always closed loops"  ③ header + loop-seen-edge-on with
 *                                            closed field curves + axial B
 *  6  "∮ B · dA = 0, Gauss for magnetism"    ④ header + formula + closed
 *                                            surface with lines passing through
 *  7  "now the fine print — four conditions" divider + FINE PRINT header
 *  8  "steady / fiction / medium / v ≪ c"    the four conditions, staggered
 *
 * Colour note: the narration calls the field lines blue, so magnetic field
 * uses the corpus blue (#0284c7, as in Section 1); everything else is kit
 * palette.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** closed ellipse as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/** circulation chevron, pointing right */
const chevD = (x: number, y: number) =>
  `M ${x - 8} ${y - 6} L ${x + 2} ${y} L ${x - 8} ${y + 6}`;

export default function P12Ch04Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /** radial E-field spokes for the electrostatics contrast */
  const spokes = [0, 60, 120, 180, 240, 300];
  /** the three field rings wrapping the wire: [cy, rx, ry] */
  const rings: [number, number, number][] = [
    [176, 52, 14],
    [216, 52, 14],
    [256, 52, 14],
  ];

  return (
    <Scene>
      {/* ─────────── beat 0 — title ─────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Field geometry — three pictures", "Field geometry — three pictures")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 344 62 C 470 58, 620 66, 740 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t("carry only these out of the subtopic — almost every numerical here is geometry, not algebra",
             "carry only these out of the subtopic — almost every numerical here is geometry, not algebra")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — ① B circles, E goes radial ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={44} y={106} size={14} fill={RED} weight={800} anchor="start">
          {t("① B CIRCLES the wire — it never points along it",
             "① B CIRCLES the wire — it never points along it")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={44} y={128} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("electric lines shoot radially OUT · magnetic lines wrap AROUND",
             "electric lines shoot radially OUT · magnetic lines wrap AROUND")}
        </T>
      </Fade>

      {/* the electrostatics contrast: a point charge with radial spokes */}
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <Circle cx={110} cy={200} r={14} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={110} y={206} size={15} fill={RED} weight={900}>+</T>
      </Fade>
      {spokes.map((a, i) => {
        const r = (a * Math.PI) / 180;
        return (
          <Draw key={`sp${a}`} on={beat >= 1} delay={dl(1, 5.6 + i * 0.15)}
            d={arrowD(110 + 20 * Math.cos(r), 200 + 20 * Math.sin(r),
                      110 + 48 * Math.cos(r), 200 + 48 * Math.sin(r))}
            stroke={RED} sw={1.7} dur={0.3} />
        );
      })}
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={110} y={272} size={11.5} fill={MUTED} weight={700}>
          {t("E — radial, begins on the charge", "E — radial, begins on the charge")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the grip-rule figure ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(300, 292, 300, 140)} stroke={INK} sw={3} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={286} y={154} size={15} fill={INK} weight={900} anchor="end">I</T>
      </Fade>
      {rings.map(([cy, rx, ry], i) => (
        <Draw key={`ring${cy}`} on={beat >= 2} delay={dl(2, 1.2 + i * 0.4)}
          d={ellD(300, cy, rx, ry)} stroke={BLUE} sw={2} dur={0.8} />
      ))}
      {rings.map(([cy, , ry], i) => (
        <Draw key={`chev${cy}`} on={beat >= 2} delay={dl(2, 1.8 + i * 0.4)}
          d={chevD(318, cy + ry - 1)} stroke={BLUE} sw={2} dur={0.3} />
      ))}
      {/* out of the page on the left, into the page on the right */}
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <Circle cx={206} cy={216} r={11} fill="none" stroke={BLUE} strokeWidth={1.8} />
        <Circle cx={206} cy={216} r={2.6} fill={BLUE} />
        <T x={206} y={244} size={11} fill={MUTED} weight={700}>out</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <Circle cx={394} cy={216} r={11} fill="none" stroke={BLUE} strokeWidth={1.8} />
        <T x={394} y={244} size={11} fill={MUTED} weight={700}>in</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.8)}
        d="M 386.2 208.2 L 401.8 223.8 M 401.8 208.2 L 386.2 223.8" stroke={BLUE} sw={1.7} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={44} y={308} size={12.5} fill={INK} weight={700} anchor="start">
          {t("grab the wire — thumb along I, curled fingers give the way B circles",
             "grab the wire — thumb along I, curled fingers give the way B circles")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={44} y={328} size={12.5} fill={BLUE} weight={700} anchor="start">
          {t("right of an upward current B goes INTO the page · left of it, OUT",
             "right of an upward current B goes INTO the page · left of it, OUT")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — ② the sine dependence ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={556} y={106} size={14} fill={RED} weight={800} anchor="start">
          {t("② dB ∝ sin θ — nothing straight ahead, most to the side",
             "② dB ∝ sin θ — nothing straight ahead, most to the side")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={556} y={128} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("an element does NOT spray its field equally in all directions",
             "an element does NOT spray its field equally in all directions")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the sine figure ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={arrowD(590, 228, 1000, 228)} stroke={INK} sw={3} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={1012} y={233} size={15} fill={INK} weight={900} anchor="start">I</T>
      </Fade>
      {/* the current element */}
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M 700 219 H 730 V 237 H 700 Z"
        stroke={AMBER_DARK} sw={2.4} dur={0.4} fill={CREAM} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={686} y={233} size={12.5} fill={AMBER_DARK} weight={900} anchor="end">I dl</T>
      </Fade>
      {/* the perpendicular direction: θ = 90°, maximum */}
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={arrowD(715, 214, 715, 156)} stroke={BLUE} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <Circle cx={715} cy={150} r={5} fill={RED} />
        <T x={703} y={146} size={12} fill={RED} weight={800} anchor="end">P</T>
        <T x={730} y={148} size={12} fill={GREEN} weight={800} anchor="start">
          {t("θ = 90° → dB is MAXIMUM", "θ = 90° → dB is MAXIMUM")}
        </T>
      </Fade>
      {/* a slanted ray, and the angle arc at the element */}
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d="M 715 220 L 795 161" stroke={BLUE} sw={1.7} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.1)}>
        <Circle cx={795} cy={161} r={4} fill={BLUE} />
        <T x={806} y={176} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("0 < θ < 90°", "0 < θ < 90°")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.4)} d="M 745 228 A 30 30 0 0 0 738 208.7"
        stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.7)}>
        <T x={756} y={216} size={13} fill={AMBER_DARK} weight={900} anchor="start">θ</T>
      </Fade>
      {/* the dead zone straight ahead */}
      <Draw on={beat >= 4} delay={dl(4, 4.2)} d="M 856 228 H 990" stroke={RED} sw={6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <Circle cx={950} cy={228} r={5} fill={RED} />
        <T x={920} y={256} size={12.5} fill={RED} weight={800}>
          {t("dead zone — θ = 0", "dead zone — θ = 0")}
        </T>
        <T x={920} y={276} size={12} fill={MUTED} weight={700}>
          {t("sin 0 = 0  ⇒  dB = 0", "sin 0 = 0  ⇒  dB = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={556} y={308} size={12.5} fill={INK} weight={700} anchor="start">
          {t("any straight piece pointing directly AT your field point contributes nothing",
             "any straight piece pointing directly AT your field point contributes nothing")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.5)}>
        <T x={556} y={328} size={12.5} fill={RED} weight={700} anchor="start">
          {t("— cross it out on sight; it saves real time in the exam",
             "— cross it out on sight; it saves real time in the exam")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — ③ closed loops ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={44} y={366} size={14} fill={RED} weight={800} anchor="start">
          {t("③ B lines are ALWAYS closed loops", "③ B lines are ALWAYS closed loops")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={44} y={386} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("E lines start on + and end on − · B lines never begin or end anywhere",
             "E lines start on + and end on − · B lines never begin or end anywhere")}
        </T>
      </Fade>
      {/* a current loop seen edge-on: two conductor cross-sections */}
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <Circle cx={150} cy={444} r={10} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={150} cy={444} r={2.6} fill={INK} />
        <Circle cx={290} cy={444} r={10} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.3)}
        d="M 283 437 L 297 451 M 297 437 L 283 451" stroke={INK} sw={1.7} dur={0.3} />
      {/* the closed field curves threading the loop */}
      <Draw on={beat >= 5} delay={dl(5, 4.8)} d={ellD(150, 444, 32, 32)} stroke={BLUE} sw={1.9} dur={0.8} />
      <Draw on={beat >= 5} delay={dl(5, 5.2)} d={ellD(290, 444, 32, 32)} stroke={BLUE} sw={1.9} dur={0.8} />
      <Draw on={beat >= 5} delay={dl(5, 5.8)} d={ellD(220, 444, 112, 44)} stroke={BLUE} sw={1.9} dur={1} />
      <Draw on={beat >= 5} delay={dl(5, 6.6)} d={arrowD(220, 468, 220, 414)} stroke={GREEN} sw={2.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={234} y={430} size={13} fill={GREEN} weight={900} anchor="start">B</T>
        <T x={356} y={438} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("loop seen edge-on:", "loop seen edge-on:")}
        </T>
        <T x={356} y={456} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("⊙ current out · ⊗ current in", "⊙ current out · ⊗ current in")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8.4)}>
        <T x={44} y={500} size={12.5} fill={RED} weight={800} anchor="start">
          {t("no monopoles — you cannot have a lone north pole",
             "no monopoles — you cannot have a lone north pole")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — ④ Gauss's law for magnetism ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={556} y={366} size={14} fill={RED} weight={800} anchor="start">
          {t("④ Gauss's law for magnetism", "④ Gauss's law for magnetism")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={556} y={402} size={20} fill={GREEN} weight={900} anchor="start">∮ B · dA = 0</T>
      </Fade>
      {/* field lines running clean through a closed surface */}
      {[412, 438, 464].map((y, i) => (
        <Draw key={`fl${y}`} on={beat >= 6} delay={dl(6, 2.6 + i * 0.2)}
          d={arrowD(742, y, 936, y)} stroke={BLUE} sw={1.9} dur={0.5} />
      ))}
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <Circle cx={840} cy={438} r={44} fill="none" stroke={INK} strokeWidth={1.8} strokeDasharray="7 6" />
        <T x={840} y={502} size={11.5} fill={MUTED} weight={700}>
          {t("closed surface: lines in = lines out", "closed surface: lines in = lines out")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <T x={556} y={434} size={12.5} fill={INK} weight={700} anchor="start">
          {t("nothing terminates", "nothing terminates")}
        </T>
        <T x={556} y={454} size={12.5} fill={INK} weight={700} anchor="start">
          {t("inside, so the net", "inside, so the net")}
        </T>
        <T x={556} y={474} size={12.5} fill={INK} weight={700} anchor="start">
          {t("flux is exactly zero", "flux is exactly zero")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the fine print ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 512 H 1036" stroke={MUTED} sw={1.3} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={44} y={534} size={14} fill={RED} weight={800} anchor="start">
          {t("THE FINE PRINT — four conditions on the Biot-Savart law as we are about to use it",
             "THE FINE PRINT — four conditions on the Biot-Savart law as we are about to use it")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — the four conditions ═══════════ */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={44} y={560} size={12.5} fill={INK} weight={700} anchor="start">
          {t("① steady currents only — magnetostatics, I constant in time",
             "① steady currents only — magnetostatics, I constant in time")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 14)}>
        <T x={44} y={586} size={12.5} fill={INK} weight={700} anchor="start">
          {t("② an isolated element is a fiction — only a closed circuit is measurable",
             "② an isolated element is a fiction — only a closed circuit is measurable")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 34)}>
        <T x={556} y={560} size={12.5} fill={INK} weight={700} anchor="start">
          {t("③ non-magnetic medium (vacuum or air) — inside iron, μ₀ → μ",
             "③ non-magnetic medium (vacuum or air) — inside iron, μ₀ → μ")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 44)}>
        <T x={556} y={586} size={12.5} fill={INK} weight={700} anchor="start">
          {t("④ the moving-point-charge form assumes v ≪ c",
             "④ the moving-point-charge form assumes v ≪ c")}
        </T>
      </Fade>
    </Scene>
  );
}
