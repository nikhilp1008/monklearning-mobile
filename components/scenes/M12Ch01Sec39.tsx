/**
 * M12Ch01 · Section 39 — "A range and a nested domain"
 * Subtopic: Standard Real Functions and Their Graphs
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Two hard items, and both are set-valued answers, so both are drawn as sets
 * on a real axis. Item ① is a case-split: the fork is an actual drawn fork,
 * the integer case lands on a line of integer dots, the non-integer case
 * lands strictly inside an open gap between n and n+1, and the two together
 * fill ℝ. Item ② is a nested domain: each term contributes one constraint,
 * each constraint is drawn (integers punctured for the root, a ray for the
 * log), and the closing number line on (−3, 3) shows the four survivors with
 * hollow endpoints, red crosses at every integer, and the dead zone x ≥ 1.
 *
 * Grid
 *   title band            y  30– 94   (rule at y = 94)
 *   ① case-split          y 104–424   x 40–520   (case rule at x 258)
 *   ② the function        y 104–222   x 560–1044
 *   ② the two terms       y 236–392   x 560–800 · rule x 806 · x 820–1044
 *   ③ combine on (−3,3)   y 438–596   full width
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "two harder items"                 title + underline + subtitle + rule
 *  1  "f(x) = ⌊x⌋ + {−x}; split"          the function, then a drawn fork into
 *                                         case 1 (x integer) and case 2 (not)
 *  2  "integer x gives f(x) = x"          ⌊x⌋ = x, {−x} = 0, f(x) = x, and a
 *                                         line of integer dots f lands on
 *  3  "non-integer x fills the gaps"      an open gap between n and n+1 with
 *                                         f(x) strictly inside ⇒ range = ℝ
 *  4  "g(x) = 1/√{x} + log(1 − ⌊x⌋)"      the function drawn as a real
 *                                         fraction plus the log term, on (−3,3)
 *  5  "term 1 needs {x} > 0"              a line with every integer punctured
 *  6  "term 2 needs 1 − ⌊x⌋ > 0"          a leftward ray stopping short of 1
 *  7  "combine: four open intervals"      the (−3,3) number line, four green
 *                                         bars with hollow ends, red crosses
 *                                         on every integer, the dead zone x ≥ 1
 *
 * Visual vocabulary (shared with Sections 37 and 38)
 *   axes and number lines INK with drawn arrowheads · the standard function
 *   AMBER_DARK · solid endpoint = included, hollow endpoint (PAPER fill) =
 *   excluded · results and surviving sets GREEN_DARK · exclusions, traps and
 *   headings RED · notes MUTED.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, PAPER,
  Scene,
} from '@/components/scenes/kit';

/* ---------- case 1 : the integers f lands on ---------- */
const CASE1_DOTS = [56, 92, 128, 164, 200, 236];

/* ---------- term 1 : the punctured line ---------- */
const PUNCTURED = [590, 632, 674, 716, 758];

/* ---------- the closing (−3, 3) line ---------- */
const nx = (v: number) => 540 + 150 * v;
const N_INTS = [-3, -2, -1, 0, 1, 2, 3];
const SURVIVORS: [number, number][] = [[-3, -2], [-2, -1], [-1, 0], [0, 1]];

export default function M12Ch01Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Two harder items — a range and a nested domain",
             "Do harder items — ek range aur ek nested domain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 300 66 C 460 62, 650 70, 780 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("a range that needs case-splitting, and a domain that combines several standard-function constraints",
             "ek range jise case-splitting chahiye, aur ek domain jo kai standard-function constraints combine karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the function, and the fork ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 540 104 V 430" stroke={MUTED} sw={1} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={44} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① a range by case-split", "① case-split se range")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={44} y={154} size={18} fill={INK} weight={800} anchor="start">
          {"f (x) = ⌊x⌋ + {−x}"}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d={arrowD(124, 172, 92, 198)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={arrowD(124, 172, 330, 198)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 3.9)} d="M 258 208 V 424" stroke={MUTED} sw={1} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={46} y={220} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("case 1 — x is an integer", "case 1 — x integer hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={276} y={220} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("case 2 — x is not an integer", "case 2 — x integer nahi hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the integer case ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={46} y={248} size={14} fill={INK} weight={800} anchor="start">⌊x⌋ = x</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={46} y={274} size={14} fill={INK} weight={800} anchor="start">{"{−x} = 0"}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={46} y={306} size={17} fill={GREEN_DARK} weight={900} anchor="start">f (x) = x</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={46} y={330} size={12} fill={MUTED} weight={700} anchor="start">
          {t("— an integer", "— ek integer")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6)} d="M 44 364 H 252" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        {CASE1_DOTS.map((x) => (
          <Circle key={`c1${x}`} cx={x} cy={364} r={5} fill={GREEN_DARK} />
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.6)}>
        <T x={146} y={388} size={11.5} fill={MUTED} weight={700}>
          {t("f lands on the integers", "f integers pe girta hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the non-integer case, and the range ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={276} y={248} size={13} fill={INK} weight={700} anchor="start">
          {t("the two pieces combine to", "dono pieces milkar")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={276} y={272} size={13} fill={INK} weight={700} anchor="start">
          {t("a value strictly between", "consecutive integers ke beech")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={276} y={296} size={13} fill={INK} weight={700} anchor="start">
          {t("consecutive integers", "strictly ek value dete hain")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3)} d="M 290 344 H 500" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 3.6)} d="M 328 344 H 462" stroke={AMBER} sw={4.5} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <Circle cx={320} cy={344} r={5.5} fill={PAPER} stroke={INK} strokeWidth={2} />
        <Circle cx={470} cy={344} r={5.5} fill={PAPER} stroke={INK} strokeWidth={2} />
        <T x={320} y={368} size={12} fill={INK} weight={800}>n</T>
        <T x={470} y={368} size={12} fill={INK} weight={800}>n + 1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <Circle cx={400} cy={344} r={5} fill={AMBER_DARK} />
        <T x={400} y={326} size={12} fill={AMBER_DARK} weight={800}>f (x)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={276} y={396} size={17} fill={GREEN_DARK} weight={900} anchor="start">⇒  range ( f ) = ℝ</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={276} y={420} size={12} fill={MUTED} weight={700} anchor="start">
          {t("— all of the reals", "— poore reals")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the nested domain ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={564} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② a nested domain", "② ek nested domain")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={564} y={172} size={18} fill={INK} weight={800} anchor="start">g (x)  =</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={672} y={160} size={16} fill={AMBER_DARK} weight={800}>1</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d="M 646 170 H 698" stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 3.1)}>
        <T x={672} y={192} size={16} fill={AMBER_DARK} weight={800}>{"√ {x}"}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={716} y={176} size={18} fill={INK} weight={800}>+</T>
        <T x={740} y={176} size={18} fill={AMBER_DARK} weight={800} anchor="start">log (1 − ⌊x⌋)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={564} y={218} size={13} fill={MUTED} weight={700} anchor="start">
          {t("on the open interval ( −3, 3 )", "open interval ( −3, 3 ) par")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — term 1 punctures the integers ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 806 236 V 392" stroke={MUTED} sw={1} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={564} y={250} size={13} fill={RED} weight={800} anchor="start">
          {t("term 1 — √{x} in the denominator", "term 1 — denominator mein √{x}")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={564} y={278} size={15} fill={GREEN_DARK} weight={800} anchor="start">
          {t("needs  {x} > 0", "chahiye  {x} > 0")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={564} y={302} size={13} fill={RED} weight={800} anchor="start">
          {t("fails exactly at the integers", "integers pe hi fail hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.6)}>
        <T x={564} y={326} size={13} fill={RED} weight={800} anchor="start">
          {t("⇒ exclude every integer", "⇒ har integer exclude karo")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 7.4)} d="M 570 358 H 792" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 8.2)}>
        {PUNCTURED.map((x) => (
          <Circle key={`pu${x}`} cx={x} cy={358} r={5.5} fill={PAPER} stroke={RED} strokeWidth={2.2} />
        ))}
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={681} y={382} size={11.5} fill={MUTED} weight={700}>
          {t("integers punctured out", "saare integers hata diye")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — term 2 caps x below 1 ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={824} y={250} size={13} fill={RED} weight={800} anchor="start">
          {t("term 2 — log (1 − ⌊x⌋)", "doosra term — log (1 − ⌊x⌋)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={824} y={278} size={15} fill={GREEN_DARK} weight={800} anchor="start">
          {t("needs  1 − ⌊x⌋ > 0", "chahiye  1 − ⌊x⌋ > 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={824} y={302} size={13} fill={INK} weight={800} anchor="start">⇒  ⌊x⌋ ≤ 0</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={824} y={326} size={15} fill={GREEN_DARK} weight={900} anchor="start">⇒  x &lt; 1</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 6)} d="M 828 358 H 1032" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 6.7)} d={arrowD(964, 358, 834, 358)} stroke={GREEN} sw={4.5} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 7.4)}>
        <Circle cx={970} cy={358} r={5.5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={970} y={382} size={12} fill={GREEN_DARK} weight={800}>1</T>
        <T x={880} y={382} size={12} fill={MUTED} weight={700}>x &lt; 1</T>
      </Fade>

      {/* ═══════════ beat 7 — combine on (−3, 3) ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 438 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={44} y={464} size={14} fill={RED} weight={800} anchor="start">
          {t("③ combine on ( −3, 3 ):  x < 1,  and every integer removed",
             "③ ( −3, 3 ) pe combine karo:  x < 1,  aur saare integers hataao")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d="M 70 534 H 1010" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)}
        d={N_INTS.map((v) => `M ${nx(v)} 526 V 542`).join(" ")} stroke={INK} sw={1.7} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        {N_INTS.map((v) => (
          <T key={`nl${v}`} x={nx(v)} y={562} size={13} fill={MUTED} weight={700}>
            {v < 0 ? `−${-v}` : `${v}`}
          </T>
        ))}
      </Fade>
      {/* the four survivors */}
      {SURVIVORS.map(([a, b], i) => (
        <Draw key={`sv${i}`} on={beat >= 7} delay={dl(7, 2.4 + i * 0.3)}
          d={`M ${nx(a) + 8} 512 H ${nx(b) - 8}`} stroke={GREEN} sw={6} dur={0.4} />
      ))}
      <Fade on={beat >= 7} delay={dl(7, 3.9)}>
        {[-3, -2, -1, 0, 1].map((v) => (
          <Circle key={`ep${v}`} cx={nx(v)} cy={512} r={6} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
        ))}
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={165} y={496} size={12.5} fill={GREEN_DARK} weight={800}>( −3, −2 )</T>
        <T x={315} y={496} size={12.5} fill={GREEN_DARK} weight={800}>( −2, −1 )</T>
        <T x={465} y={496} size={12.5} fill={GREEN_DARK} weight={800}>( −1, 0 )</T>
        <T x={615} y={496} size={12.5} fill={GREEN_DARK} weight={800}>( 0, 1 )</T>
      </Fade>
      {/* every integer is punctured */}
      <Draw on={beat >= 7} delay={dl(7, 5)}
        d={N_INTS.map((v) => `M ${nx(v) - 5} 529 L ${nx(v) + 5} 539 M ${nx(v) + 5} 529 L ${nx(v) - 5} 539`).join(" ")}
        stroke={RED} sw={2} dur={0.6} />
      {/* the dead zone above 1 */}
      <Fade on={beat >= 7} delay={dl(7, 5.7)}>
        <Line x1={698} y1={512} x2={990} y2={512} stroke={RED} strokeWidth={5} strokeDasharray="9 7" />
        <T x={844} y={496} size={12.5} fill={RED} weight={800}>
          {t("x ≥ 1 — term 2 fails", "x ≥ 1 — term 2 fail ho jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.3)}>
        <T x={540} y={590} size={17} fill={GREEN_DARK} weight={900}>
          ( −3, −2 ) ∪ ( −2, −1 ) ∪ ( −1, 0 ) ∪ ( 0, 1 )
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.9)}>
        <T x={44} y={590} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("four open intervals", "chaar open intervals")}
        </T>
        <T x={1044} y={590} size={11.5} fill={MUTED} weight={700} anchor="end">
          {t("nothing at or above 1", "1 par ya usse upar kuch nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
