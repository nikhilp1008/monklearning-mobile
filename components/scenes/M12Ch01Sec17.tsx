/**
 * M12Ch01 · Section 17 — "JEE Advanced: taming a cubic into a bijection"
 * Subtopic: Types of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The whole section is one graph, so the board IS the graph: y = x³ − 3x is
 * plotted for real from its own scale helpers PX/PY, and every claim the
 * voice makes is drawn ON it — the ±∞ sweep, a generic level y = c meeting
 * the curve three times, the two turning points (−1, 2) and (1, −2) with
 * their horizontal tangents, the two roots 0 and √3 that share the output 0,
 * and finally the branch x ≥ 1 repainted green inside the box
 * [1, ∞) × [−2, ∞).
 *
 * Grid:  graph frame x 110..535, y 210..492 (origin at 300,350; 82 px per x
 * unit, 44 px per y unit) · analysis column x 556..1044, y 108..493 ending in
 * the derivative's own sign line · a divider at y 502 and the repair band
 * y 510..596 in three blocks: domain ray (x 40..330), codomain ray
 * (x 380..700), the finished bijection (x 760..1044).
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "diagnose, then restrict"        title + underline + subtitle + rule
 *  1  "f : R → R, f(x) = x³ − 3x"      axes + the plotted cubic + the name
 *  2  "onto by the IVT"                the two ±∞ extension arrows, a generic
 *                                      level y = c drawn across, ONTO ✓
 *  3  "one-one fails"                  the three points where y = c meets the
 *                                      curve, ringed red; ONE-ONE ✗
 *  4  "f′ = 3x² − 3 = 3(x−1)(x+1)"     the turning points at x = ±1 with their
 *                                      horizontal tangents + drop lines + the
 *                                      ±1 ticks, and a real sign line for f′
 *                                      with its two zeros (the turning VALUE −2
 *                                      is not spoken yet — it waits for beat 7;
 *                                      the value 2 is never spoken, so it is
 *                                      never written)
 *  5  "f(0) = 0 = f(√3)"               both roots dotted on the x-axis and
 *                                      joined by an arc — same output, two
 *                                      inputs
 *  6  "restrict to x ≥ 1"              the domain ray painted along the
 *                                      x-axis from 1, and the bottom-band
 *                                      domain ray [1, ∞)
 *  7  "image starts at f(1) = −2"      the connector from (1,−2) to the
 *                                      y-axis, the −2 tick and the coordinate
 *                                      (1, −2), the codomain ray up the y-axis,
 *                                      and the bottom-band ray [−2, ∞)
 *  8  "bijective"                      the box [1,∞) × [−2,∞) shaded and the
 *                                      increasing branch repainted green,
 *                                      plus the closing statement
 *
 * Visual vocabulary (shared with Sections 16 and 18 of this subtopic):
 *   domain object AMBER_DARK · codomain object BLUE · the primary curve
 *   AMBER_DARK · results and the repaired branch GREEN_DARK · headings,
 *   failures and the many-one evidence RED · construction lines MUTED.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/* ---- the graph's own scale ---- */
const OX = 300;
const OY = 350;
const SX = 82;
const SY = 44;
const PX = (x: number) => OX + SX * x;
const PY = (y: number) => OY - SY * y;
const f = (x: number) => x * x * x - 3 * x;

function pts(a: number, b: number, n: number): string {
  const out: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    out.push(`${PX(x).toFixed(1)} ${PY(f(x)).toFixed(1)}`);
  }
  return out.join(" L ");
}

const XA = -2.05;
const XB = 2.05;
/* the ±∞ arrows are true continuations of the cubic: they run from the plotted
   end to the curve's own point a little further out, so their slope is the
   curve's slope there (steepening, never flattening) */
const XA2 = -2.12;
const XB2 = 2.12;
const CURVE_D = `M ${pts(XA, XB, 90)}`;
const BRANCH_D = `M ${pts(1, XB, 34)}`;

/* the generic level y = c, drawn at PY = 300  (c ≈ 1.14) and its three hits */
const CY_LEVEL = 300;
const HITS = [177, 267, 456];

/* the sign line for f′, origin 795, one unit = 90 px */
const SL_Y = 384;
const SL = (x: number) => 795 + 90 * x;

export default function M12Ch01Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Taming a cubic into a bijection", "Ek cubic ko bijection banana")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 352 62 C 480 58, 640 66, 728 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("JEE Advanced — diagnose the function first, then restrict the domain and the codomain",
             "JEE Advanced — pehle function ko diagnose karo, phir domain aur codomain restrict karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 92 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — axes, the cubic, the name ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(112, OY, 508, OY)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(OX, 492, OX, 216)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={516} y={355} size={13} fill={INK} weight={800} anchor="start">x</T>
        <T x={288} y={224} size={13} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={CURVE_D} stroke={AMBER_DARK} sw={2.8} dur={1.6} />

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={556} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE FUNCTION", "YEH FUNCTION")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={556} y={146} size={13} fill={INK_LIGHT} weight={700} anchor="start">f : R → R</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={556} y={178} size={22} fill={AMBER_DARK} weight={900} anchor="start">f(x) = x³ − 3x</T>
      </Fade>

      {/* ═══════════ beat 2 — the ±∞ sweep and the level y = c ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)}
        d={arrowD(PX(XA), PY(f(XA)), PX(XA2), PY(f(XA2)))} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)}
        d={arrowD(PX(XB), PY(f(XB)), PX(XB2), PY(f(XB2)))} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={152} y={484} size={11} fill={MUTED} weight={700} anchor="start">f → −∞</T>
        <T x={484} y={200} size={11} fill={MUTED} weight={700} anchor="start">f → +∞</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={`M 120 ${CY_LEVEL} H 498`} stroke={GREEN} sw={1.7} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={502} y={296} size={12} fill={GREEN_DARK} weight={800} anchor="start">y = c</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={556} y={214} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("ONTO ✓ — odd degree, continuous", "ONTO ✓ — odd degree, continuous hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={556} y={238} size={12.5} fill={INK} weight={700} anchor="start">
          {t("sweeps −∞ → +∞, so by the IVT every real c is attained",
             "−∞ se +∞ tak sweep, to IVT se har real c attain hoti hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — three preimages of the same c ═══════════ */}
      {HITS.map((hx, i) => (
        <Fade key={`hit${hx}`} on={beat >= 3} delay={dl(3, 0.3 + i * 0.35)}>
          <Circle cx={hx} cy={CY_LEVEL} r={5} fill={RED} />
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={502} y={316} size={11} fill={RED} weight={800} anchor="start">
          {t("revisits", "dobara")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={556} y={276} size={13.5} fill={RED} weight={800} anchor="start">
          {t("ONE-ONE ✗ — the derivative changes sign", "ONE-ONE ✗ — derivative sign badalta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={556} y={300} size={12.5} fill={INK} weight={700} anchor="start">
          {t("rises, turns, falls ⇒ it must revisit some outputs",
             "chadhti hai, mudti hai, girti hai ⇒ kuch outputs dobara chhoone padte hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the derivative, its zeros, its sign ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={556} y={336} size={16} fill={AMBER_DARK} weight={900} anchor="start">
          f′(x) = 3x² − 3 = 3(x − 1)(x + 1)
        </T>
      </Fade>
      {/* the two turning points on the curve, with horizontal tangents */}
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={`M ${PX(-1) - 28} ${PY(2)} H ${PX(-1) + 28}`}
        stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={`M ${PX(1) - 28} ${PY(-2)} H ${PX(1) + 28}`}
        stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <Circle cx={PX(-1)} cy={PY(2)} r={5.5} fill={AMBER_DARK} />
        <Circle cx={PX(1)} cy={PY(-2)} r={5.5} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={`M ${PX(-1)} ${PY(2)} V ${OY}`} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 2.9)} d={`M ${PX(1)} ${OY} V ${PY(-2)}`} stroke={MUTED} sw={1.4} dur={0.4} />
      {/* only the zeros x = ±1 are spoken here; the turning VALUES ±2 wait for beat 7 */}
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={218} y={368} size={12} fill={INK} weight={800}>−1</T>
        <T x={378} y={368} size={12} fill={INK} weight={800} anchor="end">1</T>
      </Fade>
      {/* the sign line for f′ */}
      <Draw on={beat >= 4} delay={dl(4, 5.4)} d={arrowD(590, SL_Y, 1000, SL_Y)} stroke={INK} sw={1.9} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <Circle cx={SL(-1)} cy={SL_Y} r={5} fill={GREEN_DARK} />
        <Circle cx={SL(1)} cy={SL_Y} r={5} fill={GREEN_DARK} />
        <T x={SL(-1)} y={406} size={12.5} fill={GREEN_DARK} weight={800}>−1</T>
        <T x={SL(1)} y={406} size={12.5} fill={GREEN_DARK} weight={800}>1</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.8)}>
        <T x={648} y={368} size={17} fill={GREEN_DARK} weight={900}>+</T>
        <T x={795} y={368} size={17} fill={RED} weight={900}>−</T>
        <T x={940} y={368} size={17} fill={GREEN_DARK} weight={900}>+</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.8)}>
        <T x={795} y={430} size={12} fill={MUTED} weight={700}>
          {t("f′ = 0 at x = ±1, and the sign changes there",
             "f′ = 0 at x = ±1, aur wahan sign badalta hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — f(0) = 0 = f(√3) ═══════════ */}
      {/* drawn as rings, not discs: the green domain/codomain rays of beats 6–7
          are painted straight over these two points and would swallow a disc */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Circle cx={PX(0)} cy={OY} r={6} fill={CREAM} stroke={RED} strokeWidth={2.6} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Circle cx={PX(Math.sqrt(3))} cy={OY} r={6} fill={CREAM} stroke={RED} strokeWidth={2.6} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)}
        d={`M ${PX(0)} 342 Q ${(PX(0) + PX(Math.sqrt(3))) / 2} 314 ${PX(Math.sqrt(3))} 342`}
        stroke={RED} sw={1.8} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={PX(0)} y={372} size={12} fill={RED} weight={800}>0</T>
        <T x={PX(Math.sqrt(3))} y={372} size={12} fill={RED} weight={800}>√3</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={556} y={466} size={13.5} fill={RED} weight={800} anchor="start">
          {t("f(0) = 0   and   f(√3) = 0", "f(0) = 0   aur   f(√3) = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={556} y={490} size={12.5} fill={INK} weight={700} anchor="start">
          {t("two different inputs, the same output ⇒ many-one on R",
             "do alag inputs, same output ⇒ R par many-one")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — restrict the domain to x ≥ 1 ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={arrowD(PX(1), OY, 498, OY)} stroke={GREEN_DARK} sw={4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Circle cx={PX(1)} cy={OY} r={5.5} fill={GREEN_DARK} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.1)} d="M 40 502 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={40} y={522} size={13} fill={RED} weight={800} anchor="start">
          {t("RESTRICT the domain to x ≥ 1", "domain ko x ≥ 1 par RESTRICT karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={40} y={546} size={12.5} fill={INK} weight={700} anchor="start">
          {t("there f′ ≥ 0 ⇒ strictly increasing ⇒ one-one",
             "wahan f′ ≥ 0 ⇒ strictly increasing ⇒ one-one")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.8)} d="M 40 570 H 330" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 5.2)} d={arrowD(120, 570, 326, 570)} stroke={GREEN_DARK} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 5.8)}>
        <Circle cx={120} cy={570} r={5.5} fill={GREEN_DARK} />
        <T x={120} y={592} size={12.5} fill={GREEN_DARK} weight={800}>1</T>
        <T x={200} y={592} size={12.5} fill={GREEN_DARK} weight={800}>[1, ∞)</T>
      </Fade>

      {/* ═══════════ beat 7 — the image starts at f(1) = −2 ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={`M ${OX} ${PY(-2)} H ${PX(1)}`} stroke={GREEN_DARK} sw={1.7} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d={arrowD(OX, PY(-2), OX, 222)} stroke={GREEN_DARK} sw={4} dur={0.7} />
      {/* the −2 tick and the coordinate (1, −2): this beat speaks exactly one
          value, "f(1) = 1 − 3 = −2". The upper turning VALUE 2 and the point
          (−1, 2) are never spoken in any segment, so they are not drawn. */}
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={`M 294 ${PY(-2)} H 306`}
        stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={288} y={443} size={12} fill={INK} weight={800} anchor="end">−2</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={400} y={466} size={12} fill={AMBER_DARK} weight={800} anchor="start">(1, −2)</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Circle cx={OX} cy={PY(-2)} r={5.5} fill={GREEN_DARK} />
        <T x={312} y={236} size={12} fill={GREEN_DARK} weight={800} anchor="start">[−2, ∞)</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={380} y={522} size={13} fill={RED} weight={800} anchor="start">
          {t("f(1) = 1 − 3 = −2 — the image starts here",
             "f(1) = 1 − 3 = −2 — image yahin se shuru hoti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={380} y={546} size={12.5} fill={INK} weight={700} anchor="start">
          {t("take the codomain [−2, ∞) and it is onto too",
             "codomain [−2, ∞) lo — tab yeh onto bhi ban jaata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 5.8)} d="M 380 570 H 700" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 6.2)} d={arrowD(460, 570, 696, 570)} stroke={GREEN_DARK} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 6.8)}>
        <Circle cx={460} cy={570} r={5.5} fill={GREEN_DARK} />
        <T x={460} y={592} size={12.5} fill={GREEN_DARK} weight={800}>−2</T>
        <T x={570} y={592} size={12.5} fill={GREEN_DARK} weight={800}>[−2, ∞)</T>
      </Fade>

      {/* ═══════════ beat 8 — the shaded increasing branch: a bijection ═══════════ */}
      <Rect
        x={PX(1)} y={222} width={498 - PX(1)} height={PY(-2) - 222}
        fill={GREEN} stroke="none"
        opacity={beat >= 8 ? 0.14 : 0}
      />
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d={BRANCH_D} stroke={GREEN_DARK} sw={4.4} dur={1} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={760} y={522} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the final restricted map", "aakhiri restricted map")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.2)}>
        <T x={760} y={550} size={16} fill={INK} weight={900} anchor="start">f : [1, ∞) → [−2, ∞)</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.6)}>
        <T x={760} y={580} size={17} fill={GREEN_DARK} weight={900} anchor="start">
          {t("is a BIJECTION", "BIJECTION hai")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 5.4)} d="M 900 574 L 910 585 L 932 560" stroke={GREEN_DARK} sw={3.2} dur={0.4} />
    </Scene>
  );
}
