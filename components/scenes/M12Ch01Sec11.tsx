/**
 * M12Ch01 · Section 11 — "Onto, into, and the perfect pairing"
 * Subtopic: Types of Functions  (middle section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * QUESTION TWO of the pair opened in Section 10: does every slot in the
 * codomain actually get used? The voice answers with onto / surjective (the
 * full bus), states it formally (∀ y ∈ B ∃ x ∈ A with f(x) = y, i.e. range = B),
 * contrasts it with into (empty seats), proves into with the squaring machine
 * ℝ → ℝ, then combines both answers into bijective = invertible, and closes
 * with the horizontal-line test.
 *
 * Everything is drawn: two oval-and-arrow mapping diagrams that differ only in
 * whether B is fully covered, a bus-seat row under each (all taken vs. one
 * left over), a real plotted parabola y = x² with the whole negative half of
 * its codomain shaded red, a bijection with the reverse arrow f⁻¹ drawn under
 * it, and two small graphs sharing one horizontal test line at y = 3 — which
 * meets the parabola twice and the straight line once.
 *
 * Grid
 *   title band            y 30–94   (full width)
 *   row 1 (y 102–342)     ONTO diagram     x 40–330
 *                         formal statement x 360–700
 *                         INTO diagram     x 730–1044
 *   row 2 (y 356–596)     x² : ℝ → ℝ graph x 40–350
 *                         BIJECTIVE pairing + f⁻¹ x 380–700
 *                         horizontal line test x 730–1044
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "question two about the wiring"          title + Q2 badge + underline +
 *                                              subtitle + rule
 *  1  "onto / surjective — a full bus"         left mapping diagram, all three
 *                                              B-dots green, five full seats
 *  2  "∀ y ∈ B ∃ x ∈ A, f(x) = y"              the formal statement, the rule,
 *                                              range = codomain B, the full bar
 *  3  "into — empty seats left behind"         right mapping diagram with one
 *                                              B-dot ringed red, two empty seats
 *  4  "the squaring machine ℝ → ℝ is into"     axes + plotted y = x² + the whole
 *                                              y < 0 half of B shaded red
 *  5  "one-one AND onto = bijective"           3 ↔ 3 pairing diagram, f label
 *  6  "bijective = invertible"                 the reverse arc f⁻¹ under it
 *  7  "the horizontal line test"               two mini graphs, one test line:
 *                                              parabola cut twice, line cut once
 *
 * Visual vocabulary — shared with Sections 10 and 12:
 *   INK ovals, axes and dots · GREEN_DARK for a covered/healthy mapping and for
 *   results · RED for the failing case and for headings · AMBER_DARK for the
 *   plotted function · BLUE only for the sweeping test line · CREAM/PAPER fills
 *   on empty board · MUTED for supporting captions.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** closed oval as a drawable path (set diagrams) */
const ovalD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/** y = x² sampled on a frame with origin (ox, oy) and scales sx, sy */
function sqPath(ox: number, oy: number, sx: number, sy: number, x0: number, x1: number): string {
  const pts: string[] = [];
  const n = 40;
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${(ox + sx * x).toFixed(1)} ${(oy - sy * x * x).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/* ---- beat 4 : the squaring machine, big frame ---- */
const BIG = sqPath(195, 498, 54, 22, -2.2, 2.2);
/* ---- beat 7 : the two mini frames ---- */
const MINI_PAR = sqPath(810, 540, 26, 22, -2.2, 2.2);
/* straight line y = x + 2 on the right mini frame (origin 960,540) */
const MINI_LINE = "M 902.8 544.4 L 1017.2 447.6";

/* ---- beat 6 : the reverse map arc, with its head computed ---- */
const INV_ARC =
  "M 622 512 C 575 548, 505 548, 458 512 M 467.8 513.9 L 458 512 L 462.4 521.0";

export default function M12Ch01Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /* the bus rows: [x, filled] */
  const fullSeats = [60, 112, 164, 216, 268];
  const intoSeats: [number, boolean][] = [
    [760, true], [810, true], [860, true], [910, false], [960, false],
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <Circle cx={64} cy={52} r={16} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={64} y={58} size={14} fill={AMBER_DARK} weight={900}>Q2</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.6)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Onto, into, and the perfect pairing",
             "Onto, into, aur perfect pairing")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 320 62 C 470 58, 650 66, 762 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("question two — does every slot in the codomain actually get used?",
             "question two — kya codomain ka har slot sach mein use hota hai?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — ONTO (surjective) ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("ONTO (surjective)", "ONTO (surjective)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={40} y={140} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("every codomain slot has an input", "codomain ke har slot par input")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={ovalD(105, 222, 44, 52)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={ovalD(285, 222, 44, 52)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={105} y={160} size={13} fill={INK} weight={900}>A</T>
        <T x={285} y={160} size={13} fill={INK} weight={900}>B</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <Circle cx={105} cy={186} r={5} fill={INK} />
        <Circle cx={105} cy={208} r={5} fill={INK} />
        <Circle cx={105} cy={236} r={5} fill={INK} />
        <Circle cx={105} cy={258} r={5} fill={INK} />
        <Circle cx={285} cy={194} r={5} fill={GREEN_DARK} />
        <Circle cx={285} cy={222} r={5} fill={GREEN_DARK} />
        <Circle cx={285} cy={250} r={5} fill={GREEN_DARK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d={arrowD(114, 187, 276, 193)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={arrowD(114, 209, 276, 218)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d={arrowD(114, 236, 276, 228)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 4.1)} d={arrowD(114, 257, 276, 251)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      {fullSeats.map((x, i) => (
        <Fade key={`fs${x}`} on={beat >= 1} delay={dl(1, 5 + i * 0.25)}>
          <Rect x={x} y={306} width={44} height={20} rx={5}
            fill={GREEN} fillOpacity={0.55} stroke={GREEN_DARK} strokeWidth={1.6} />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <T x={175} y={340} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("a full bus — every seat taken", "bhari hui bus — har seat par koi")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — surjective, formally ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={360} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SURJECTIVE, FORMALLY", "SURJECTIVE, formally")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={530} y={168} size={19} fill={INK} weight={900}>∀ y ∈ B,  ∃ x ∈ A</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={530} y={204} size={19} fill={INK} weight={900}>with  f(x) = y</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.4)} d="M 400 232 H 660" stroke={MUTED} sw={1.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={530} y={262} size={17} fill={GREEN_DARK} weight={900}>range  =  codomain B</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={530} y={294} size={12.5} fill={MUTED} weight={700}>
          {t("nothing in B is left over", "B mein kuch bhi bacha nahin rehta")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8.2)}>
        <Rect x={404} y={308} width={256} height={26} rx={7}
          fill={GREEN} fillOpacity={0.4} stroke={INK} strokeWidth={1.8} />
        <T x={396} y={325} size={12} fill={MUTED} weight={800} anchor="end">B</T>
        <T x={532} y={325} size={11} fill={GREEN_DARK} weight={800}>
          {t("range fills all of B", "range poore B ko bharti hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — INTO ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={730} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("INTO (not onto)", "INTO (onto nahin)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={730} y={140} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("some slots are never reached", "kuch slots kabhi reach nahin hote")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={ovalD(800, 222, 44, 52)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d={ovalD(980, 222, 44, 52)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={800} y={160} size={13} fill={INK} weight={900}>A</T>
        <T x={980} y={160} size={13} fill={INK} weight={900}>B</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <Circle cx={800} cy={190} r={5} fill={INK} />
        <Circle cx={800} cy={220} r={5} fill={INK} />
        <Circle cx={800} cy={250} r={5} fill={INK} />
        <Circle cx={980} cy={190} r={5} fill={GREEN_DARK} />
        <Circle cx={980} cy={220} r={5} fill={GREEN_DARK} />
        <Circle cx={980} cy={250} r={5} fill={RED} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d={arrowD(809, 190, 966, 190)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.5)} d={arrowD(809, 220, 966, 216)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.8)} d={arrowD(809, 250, 966, 232)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 4.4)} d={ringD(980, 250, 20, 13)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={980} y={292} size={11.5} fill={RED} weight={800}>
          {t("never reached", "kabhi reach nahin")}
        </T>
      </Fade>
      {intoSeats.map(([x, taken], i) => (
        <Fade key={`is${x}`} on={beat >= 3} delay={dl(3, 6 + i * 0.25)}>
          <Rect x={x} y={306} width={40} height={20} rx={5}
            fill={taken ? GREEN : PAPER} fillOpacity={taken ? 0.55 : 1}
            stroke={taken ? GREEN_DARK : RED} strokeWidth={1.6}
            strokeDasharray={taken ? undefined : "5 4"} />
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={880} y={340} size={11.5} fill={RED} weight={800}>
          {t("empty seats left behind", "empty seats peeche reh jaati hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the squaring machine ℝ → ℝ ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={40} y={370} size={13.5} fill={RED} weight={800} anchor="start">
          {t("x² from ℝ to ℝ is INTO", "x² reals se reals tak INTO hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={arrowD(70, 498, 330, 498)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={arrowD(195, 508, 195, 386)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={336} y={503} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={185} y={392} size={12} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={BIG} stroke={AMBER_DARK} sw={2.8} dur={1.2} />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={290} y={404} size={12.5} fill={AMBER_DARK} weight={800} anchor="end">f(x) = x²</T>
      </Fade>
      <Rect
        x={76} y={498} width={238} height={50}
        fill={RED} stroke="none"
        opacity={beat >= 4 ? 0.14 : 0}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <T x={195} y={528} size={12} fill={RED} weight={800}>
          {t("no negative number is ever an output",
             "koi negative number kabhi output nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.6)}>
        <T x={195} y={568} size={12} fill={RED} weight={800}>
          {t("so the entire negative half of B sits empty",
             "to B ka poora negative half khaali rehta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8.6)}>
        <T x={195} y={592} size={12} fill={GREEN_DARK} weight={800}>
          {t("a clean example of INTO", "INTO ka clean example")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — BIJECTIVE ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={380} y={372} size={13.5} fill={RED} weight={800} anchor="start">
          {t("BIJECTIVE = one-one + onto", "BIJECTIVE = one-one + onto")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={380} y={394} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("a flawless pairing — every output claimed",
             "flawless pairing — har output claimed")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={ovalD(450, 474, 40, 44)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d={ovalD(630, 474, 40, 44)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={450} y={418} size={13} fill={INK} weight={900}>A</T>
        <T x={630} y={418} size={13} fill={INK} weight={900}>B</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <Circle cx={450} cy={448} r={5} fill={INK} />
        <Circle cx={450} cy={474} r={5} fill={INK} />
        <Circle cx={450} cy={500} r={5} fill={INK} />
        <Circle cx={630} cy={448} r={5} fill={GREEN_DARK} />
        <Circle cx={630} cy={474} r={5} fill={GREEN_DARK} />
        <Circle cx={630} cy={500} r={5} fill={GREEN_DARK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.3)} d={arrowD(458, 448, 622, 448)} stroke={GREEN_DARK} sw={2.1} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 3.7)} d={arrowD(458, 474, 622, 474)} stroke={GREEN_DARK} sw={2.1} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4.1)} d={arrowD(458, 500, 622, 500)} stroke={GREEN_DARK} sw={2.1} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 4.7)}>
        <T x={540} y={438} size={15} fill={GREEN_DARK} weight={900}>f</T>
      </Fade>

      {/* ═══════════ beat 6 — bijective = invertible ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={INV_ARC} stroke={AMBER_DARK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={526} size={13} fill={AMBER_DARK} weight={900}>f⁻¹</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={540} y={560} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("bijective = invertible", "bijective = invertible")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <T x={540} y={584} size={12} fill={INK} weight={700}>
          {t("exactly the functions you can run backwards",
             "bilkul wahi functions jinhe ulta chala sakte ho")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the horizontal line test ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={730} y={372} size={13.5} fill={RED} weight={800} anchor="start">
          {t("HORIZONTAL LINE TEST", "HORIZONTAL LINE TEST")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={730} y={394} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("cuts twice ⇒ one-one fails", "do baar kaate ⇒ one-one fail")}
        </T>
      </Fade>
      {/* left mini — the parabola */}
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d="M 746 540 H 874" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d="M 810 546 V 428" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 2)} d={MINI_PAR} stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 2.9)}>
        <T x={810} y={462} size={11} fill={AMBER_DARK} weight={800}>y = x²</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.3)} d="M 746 474 H 874" stroke={BLUE} sw={2.2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <Circle cx={765} cy={474} r={5} fill={RED} />
        <Circle cx={855} cy={474} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={810} y={568} size={12} fill={RED} weight={800}>
          {t("parabola — cuts twice ✗", "parabola — do baar kaata ✗")}
        </T>
        <T x={810} y={590} size={11.5} fill={MUTED} weight={700}>
          {t("two inputs, one output", "do inputs, ek output")}
        </T>
      </Fade>
      {/* right mini — the straight line */}
      <Draw on={beat >= 7} delay={dl(7, 5.4)} d="M 896 540 H 1024" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 5.7)} d="M 960 546 V 428" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 6.1)} d={MINI_LINE} stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 7} delay={dl(7, 6.8)} d="M 896 474 H 1024" stroke={BLUE} sw={2.2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 7.5)}>
        <Circle cx={986} cy={474} r={5} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={960} y={568} size={12} fill={GREEN_DARK} weight={800}>
          {t("line — cuts once ✓", "line — ek hi baar ✓")}
        </T>
        <T x={960} y={590} size={11.5} fill={GREEN_DARK} weight={700}>
          {t("one input per output", "har output ka ek input")}
        </T>
      </Fade>
    </Scene>
  );
}
