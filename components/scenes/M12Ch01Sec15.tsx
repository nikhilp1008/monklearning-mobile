/**
 * M12Ch01 · Section 15 — "Same formula, flipped codomain, flipped answer"
 * Subtopic: Types of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The whole point is that ONE picture answers both cases and only the
 * codomain moves, so the board carries one real graph of y = x² + 1 —
 * plotted point by point on real axes — and everything the voice says is
 * marked on it: the symmetric chord that shows f(−a) = f(a), the concrete
 * pair (−2, 5) and (2, 5) sitting on one horizontal level, the vertex at
 * height 1, and a CODOMAIN BAR drawn beside the curve whose upper half
 * [1, ∞) is green (the range, actually achieved) and whose lower half is red
 * (below 1, never hit). Case (a) is that mismatch; case (b) simply deletes
 * the red half. Two miniature bar pairs in the right column make the
 * range-vs-codomain comparison explicit for each case.
 *
 * Graph frame: origin (271, 458), 66 px per x-unit, 49 px per y-unit;
 * the parabola is plotted from x = −2.45 to 2.45, i.e. up to y = 7.
 *
 * Grid:
 *   header   y 30..94
 *   graph    x 36..508,  y 100..560
 *   column   x 545..1044 — trap y 100..120 · formula y 130..175 ·
 *            one-one verdict y 185..290 · divider 320 · CASE (a) y 330..455 ·
 *            divider 462 · CASE (b) y 470..596
 *
 * Beat map (8 segments, gates 0..7 — every gate used):
 *  0  "the most common speed-trap error"        title + underline + subtitle
 *                                               + rule + the trap heading
 *  1  "f(x) = x² + 1, two cases"                the formula, and the axes,
 *                                               ticks and parabola drawn
 *  2  "an even power gives f(−a) = f(a)"        the symmetric chord with its
 *                                               two amber endpoints
 *  3  "f(2) and f(−2) both equal 5"             the level y = 5, the two
 *                                               points, the drops to −2 and 2,
 *                                               MANY-ONE in both cases
 *  4  "case a: R → R, range is [1, ∞)"          the vertex at height 1, the
 *                                               green [1, ∞) bar, and the
 *                                               codomain = R mini bar
 *  5  "everything below 1 is never hit"         the red bar below 1, the range
 *                                               mini bar, the ≠, and the
 *                                               MANY-ONE and INTO verdict
 *  6  "case b: codomain becomes [1, ∞)"         the case (b) mini bars, equal
 *                                               this time, and range = codomain
 *  7  "many-one but ONTO — always check B"      the flipped verdict, the exact
 *                                               match, and the closing warning
 *
 * Visual vocabulary (shared with Sections 13 and 14 of this subtopic):
 *   headings and traps RED · the function itself AMBER_DARK · results and
 *   verdicts GREEN_DARK · axes INK · quiet annotations INK_LIGHT / MUTED.
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

/* ---- graph frame ---- */
const OX = 271;
const OY = 458;
const SX = 66;
const SY = 49;
const px = (x: number) => OX + SX * x;
const py = (y: number) => OY - SY * y;

function parabolaPts(x0: number, x1: number, n: number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${px(x).toFixed(1)} ${py(x * x + 1).toFixed(1)}`);
  }
  return pts;
}
const PAR_D = `M ${parabolaPts(-2.45, 2.45, 60).join(" L ")}`;

const XTICKS = [-3, -1, 1, 3].map((x) => `M ${px(x).toFixed(1)} 453 V 463`).join(" ");
const YTICKS = [2, 4, -1].map((y) => `M 266 ${py(y).toFixed(1)} H 276`).join(" ");

/** the codomain bar: drawn beside the curve, split at height 1 */
const BAR_X = 90;
/** the symmetric chord: y = 6, so x = ±√5 */
const CHORD_Y = py(6);
const CHORD_L = px(-Math.sqrt(5));
const CHORD_R = px(Math.sqrt(5));

/** base with a raised exponent and an optional tail, laid out from x */
function Pow({
  x, y, size, fill, base, exp, tail, weight = 900,
}: {
  x: number; y: number; size: number; fill: string;
  base: string; exp: string; tail?: string; weight?: number;
}) {
  const bw = base.length * 0.56 * size;
  const es = size * 0.62;
  const ew = exp.length * 0.56 * es;
  return (
    <G>
      <T x={x} y={y} size={size} fill={fill} anchor="start" weight={weight}>{base}</T>
      <T x={x + bw} y={y - size * 0.52} size={es} fill={fill} anchor="start" weight={weight}>{exp}</T>
      {tail ? (
        <T x={x + bw + ew + size * 0.16} y={y} size={size} fill={fill} anchor="start" weight={weight}>
          {tail}
        </T>
      ) : null}
    </G>
  );
}

export default function M12Ch01Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing and the trap ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Same formula, flipped codomain, flipped answer",
             "Same formula, codomain flip, answer flip")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 276 62 C 450 58, 650 66, 806 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("one curve answers both cases — only the codomain moves",
             "ek hi curve dono cases ka jawab hai — sirf codomain hilta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />
      <Fade on={beat >= 0} delay={dl(0, 3.4)}>
        <T x={545} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE SPEED-TRAP — declaring ONTO without checking B",
             "THE SPEED-TRAP — B check kiye bina ONTO bol dena")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the formula, and the curve it names ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Pow x={545} y={148} size={18} fill={INK} base="f(x) = x" exp="2" tail="+ 1" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={545} y={172} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("same formula, two different codomains",
             "same formula, do alag codomains")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(56, OY, 494, OY)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={arrowD(OX, 552, OX, 112)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={XTICKS} stroke={INK_LIGHT} sw={1.5} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={YTICKS} stroke={INK_LIGHT} sw={1.5} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={500} y={448} size={12.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={283} y={124} size={12.5} fill={INK} weight={800} anchor="start">y</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={PAR_D} stroke={AMBER_DARK} sw={3} dur={1.5} />
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <Pow x={445} y={140} size={13} fill={AMBER_DARK} base="y = x" exp="2" tail="+ 1" />
      </Fade>

      {/* ═══════════ beat 2 — an even power: f(−a) = f(a) ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)}
        d={`M ${CHORD_L.toFixed(1)} ${CHORD_Y.toFixed(1)} H ${CHORD_R.toFixed(1)}`}
        stroke={AMBER_DARK} sw={2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Circle cx={CHORD_L} cy={CHORD_Y} r={5} fill={AMBER_DARK} />
        <Circle cx={CHORD_R} cy={CHORD_Y} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={200} y={154} size={11.5} fill={AMBER_DARK} weight={800}>f(−a) = f(a)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={545} y={200} size={13.5} fill={RED} weight={800} anchor="start">
          {t("ONE-ONE VERDICT — the same in both cases",
             "ONE-ONE VERDICT — dono cases mein same")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={545} y={232} size={17} fill={AMBER_DARK} weight={900} anchor="start">f(−a) = f(a)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={670} y={230} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("an even power kills the sign", "even power sign ko khatam kar deta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={545} y={256} size={12.5} fill={INK} weight={700} anchor="start">
          {t("two inputs share one output — no algebra needed",
             "do inputs ek output share karte hain — algebra nahin chahiye")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — f(2) = f(−2) = 5, concretely ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)}
        d={`M 130 ${py(5).toFixed(1)} H 412`} stroke={RED} sw={2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={420} y={204} size={12.5} fill={RED} weight={800} anchor="start">y = 5</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Circle cx={px(-2)} cy={py(5)} r={5} fill={RED} />
        <Circle cx={px(2)} cy={py(5)} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={156} y={232} size={12.5} fill={RED} weight={800} anchor="start">(−2, 5)</T>
        <T x={414} y={232} size={12.5} fill={RED} weight={800} anchor="start">(2, 5)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.6)}
        d={`M ${px(-2)} 218 V 453`} stroke={INK_LIGHT} sw={1.5} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 2.9)}
        d={`M ${px(2)} 218 V 453`} stroke={INK_LIGHT} sw={1.5} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={128} y={444} size={12.5} fill={INK} weight={800} anchor="end">−2</T>
        <T x={414} y={444} size={12.5} fill={INK} weight={800} anchor="start">2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={545} y={286} size={17} fill={RED} weight={900} anchor="start">f(2) = f(−2) = 5</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={700} y={284} size={12.5} fill={RED} weight={800} anchor="start">
          {t("⇒ MANY-ONE in both cases", "⇒ dono cases mein MANY-ONE")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — case (a): the range is [1, ∞) ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Circle cx={OX} cy={py(1)} r={5} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)}
        d={`M 98 ${py(1).toFixed(1)} H 264`} stroke={INK_LIGHT} sw={1.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 1)}
        d={`M 82 ${py(1).toFixed(1)} H 98`} stroke={GREEN_DARK} sw={2.6} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={74} y={py(1) + 5} size={12.5} fill={GREEN_DARK} weight={800} anchor="end">1</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.7)}
        d={arrowD(BAR_X, py(1), BAR_X, 122)} stroke={GREEN_DARK} sw={3.5} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={80} y={240} size={12} fill={GREEN_DARK} weight={800} anchor="end">
          {t("range", "range")}
        </T>
        <T x={80} y={262} size={12} fill={GREEN_DARK} weight={800} anchor="end">[1, ∞)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3)} d="M 545 320 H 1044" stroke={MUTED} sw={1} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={545} y={344} size={13.5} fill={RED} weight={800} anchor="start">
          {t("CASE (a)   f : R → R", "CASE (a)   f : R → R")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <Pow x={545} y={374} size={15} fill={INK} base="x" exp="2" weight={800}
          tail={t("+ 1 ≥ 1   for every real x", "+ 1 ≥ 1   har real x ke liye")} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={545} y={400} size={15} fill={GREEN_DARK} weight={900} anchor="start">range = [1, ∞)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.8)}>
        <T x={680} y={398} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("the outputs actually achieved", "jo outputs sach mein milte hain")}
        </T>
      </Fade>
      {/* the case (a) codomain, as a bar to compare against */}
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={896} y={340} size={11} fill={MUTED} weight={700}>B = R</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6.7)} d="M 896 350 V 446" stroke={INK_LIGHT} sw={5} dur={0.6} />

      {/* ═══════════ beat 5 — below 1 is never hit ⇒ into ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)}
        d={arrowD(BAR_X, py(1), BAR_X, 548)} stroke={RED} sw={3.5} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={106} y={480} size={12} fill={RED} weight={800} anchor="start">
          {t("never hit", "kabhi hit nahin")}
        </T>
        <T x={106} y={502} size={12} fill={RED} weight={700} anchor="start">y &lt; 1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={950} y={340} size={11} fill={GREEN_DARK} weight={700}>range</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.3)} d="M 950 350 V 398" stroke={GREEN_DARK} sw={5} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <T x={923} y={400} size={15} fill={RED} weight={900}>≠</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={545} y={426} size={15} fill={RED} weight={900} anchor="start">
          {t("range is only part of R ⇒ MANY-ONE and INTO",
             "range sirf R ka hissa ⇒ MANY-ONE aur INTO")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <T x={545} y={448} size={12} fill={RED} weight={700} anchor="start">
          {t("everything below 1 is never hit", "1 se neeche sab kuch kabhi hit nahin hota")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — case (b): only the codomain changes ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 545 462 H 1044" stroke={MUTED} sw={1} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={545} y={486} size={13.5} fill={RED} weight={800} anchor="start">
          {t("CASE (b)   f : R → [1, ∞)", "CASE (b)   f : R → [1, ∞)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={545} y={514} size={15} fill={INK} weight={800} anchor="start">
          {t("only the codomain changed", "sirf codomain badla hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={896} y={490} size={11} fill={GREEN_DARK} weight={700}>B = [1, ∞)</T>
        <T x={950} y={490} size={11} fill={GREEN_DARK} weight={700}>range</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.6)} d="M 896 500 V 560" stroke={GREEN_DARK} sw={5} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2.9)} d="M 950 500 V 560" stroke={GREEN_DARK} sw={5} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={923} y={534} size={16} fill={GREEN_DARK} weight={900}>=</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={545} y={542} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          range = [1, ∞) = codomain
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the verdict flips ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={545} y={570} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          {t("⇒ MANY-ONE but ONTO", "⇒ MANY-ONE par ONTO")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={923} y={582} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("exact match", "bilkul match")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={545} y={592} size={12.5} fill={RED} weight={800} anchor="start">
          {t("never declare ONTO without checking B",
             "B check kiye bina kabhi ONTO mat bolo")}
        </T>
      </Fade>
    </Scene>
  );
}
