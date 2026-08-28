/**
 * M12Ch01 · Section 4 — "Counting relations: the four exponents"
 * Subtopic: Types of Relations  (first of my three consecutive sections)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The whole subtopic is counting, and every count in it is a statement about
 * ONE picture: the n × n array of ordered pairs of A. So the board draws that
 * array three times — once as the raw sample space (every cell is in R or out
 * of R), once with the diagonal forced ON (reflexive), once with the cells
 * folded into mirror pairs (symmetric) — and each lattice carries its own
 * exponent underneath. The array is drawn 5 × 5 as an honest stand-in for
 * "n × n"; no concrete n is ever claimed, because the voice never names one.
 *
 * The closing band is the one count that is NOT a power of two: the set A cut
 * into blocks (a partition) beside the same lattice gone block-diagonal, which
 * is exactly why equivalence relations are counted by Bell numbers.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "counting formulas are the formulas here"  title + underline + subtitle
 *                                                + the full-width rule
 *  1  "A × A holds n × n = n² pairs"             lattice ①, both dimension
 *                                                bars marked n, the n² count
 *  2  "each pair in or out ⇒ 2^(n²)"             ✓ / ✗ in all 25 cells, one
 *                                                cell ringed "2 ways", the
 *                                                headline exponent
 *  3  "reflexive forces the n self-pairs"        lattice ②, the diagonal
 *                                                filled amber with ✓ locked in
 *  4  "n² − n stay free ⇒ 2^(n² − n)"            the 20 off-diagonal cells
 *                                                shaded free + the exponent
 *  5  "symmetric pairs the off-diagonal cells"   lattice ③, the mirror axis
 *                                                dashed, four mirror pairs
 *                                                linked, diagonal free,
 *                                                2^(n(n+1)/2)
 *  6  "equivalence relations ↔ partitions"       A cut into blocks, the
 *                                                two-way arrow, = Bₙ, and the
 *                                                same classes as a
 *                                                block-diagonal lattice
 *  7  "memorise 1, 2, 5, 15, 52"                 the five Bell-number chips
 *
 * Visual vocabulary — held identical in Sections 5 and 6:
 *   column index = FIRST coordinate, row index = SECOND coordinate ·
 *   lattice rules MUTED with an INK border · cells FORCED in are AMBER,
 *   cells left FREE are GREEN 0.16 (so lattice ③'s diagonal is green) ·
 *   pairs that are IN a relation GREEN · anything missing or rejected RED ·
 *   every result and formula GREEN_DARK · headings RED · asides MUTED.
 */

import React from "react";
import { Circle, Path, Rect, TSpan } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/* ---------------- the n × n array, drawn 5 × 5 ---------------- */
const N = 5;
const C = 40;
const GT = 130;                    // top edge of all three big lattices
const GB = GT + N * C;             // 330 — bottom edge
const P1 = 70;
const P2 = 440;
const P3 = 810;

const IDX = [0, 1, 2, 3, 4];
const RULES = [0, 1, 2, 3, 4, 5];

const vD = (L: number, T: number, c: number, n: number, i: number) =>
  `M ${L + c * i} ${T} V ${T + c * n}`;
const hD = (L: number, T: number, c: number, n: number, j: number) =>
  `M ${L} ${T + c * j} H ${L + c * n}`;
const ctr = (L: number, c: number, i: number) => L + c * i + c / 2;

const checkD = (x: number, y: number) =>
  `M ${x - 6} ${y} L ${x - 1.5} ${y + 5} L ${x + 7} ${y - 6}`;
const xMarkD = (x: number, y: number) =>
  `M ${x - 5} ${y - 5} L ${x + 5} ${y + 5} M ${x + 5} ${y - 5} L ${x - 5} ${y + 5}`;

/** horizontal dimension bar with end ticks */
const hBarD = (x1: number, x2: number, y: number) =>
  `M ${x1} ${y - 6} V ${y + 6} M ${x1} ${y} H ${x2} M ${x2} ${y - 6} V ${y + 6}`;
/** vertical dimension bar with end ticks */
const vBarD = (x: number, y1: number, y2: number) =>
  `M ${x - 6} ${y1} H ${x + 6} M ${x} ${y1} V ${y2} M ${x - 6} ${y2} H ${x + 6}`;

/** a fixed, non-degenerate in/out pattern for the sample-space lattice */
const inR = (i: number, j: number) => (3 * i + 2 * j + 2) % 5 < 3;

/* the four mirror pairs drawn on lattice ③ (i + j odd ⇒ the link never
   runs through another cell's centre) */
const MIRROR: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4]];

/* ---------------- the closing partition band ---------------- */
const BLOCK = [0, 0, 1, 2, 2];     // A cut into {•,•} {•} {•,•}
const ML = 860;
const MT = 462;
const MC = 26;

const BELL: [string, string][] = [
  ["B₁", "1"], ["B₂", "2"], ["B₃", "5"], ["B₄", "15"], ["B₅", "52"],
];

export default function M12Ch01Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Counting relations — the four exponents",
             "Relations ginna — chaar exponents")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 330 62 C 460 58, 640 66, 750 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("in this subtopic the counting formulas do what formulas do in physics — derive one, then list the rest",
             "is subtopic mein counting formulas wahi karte hain jo physics mein formulas — ek derive, baaki list")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════════════════════════════════════════════════════
          LATTICE ① — the sample space A × A          (beats 1 and 2)
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("① a relation on A is a subset of A × A",
             "① A par relation, A × A ka subset hai")}
        </T>
      </Fade>
      {RULES.map((i) => (
        <Draw key={`p1v${i}`} on={beat >= 1} delay={dl(1, 0.6 + i * 0.09)}
          d={vD(P1, GT, C, N, i)} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      {RULES.map((j) => (
        <Draw key={`p1h${j}`} on={beat >= 1} delay={dl(1, 1.1 + j * 0.09)}
          d={hD(P1, GT, C, N, j)} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      <Draw on={beat >= 1} delay={dl(1, 1.7)}
        d={`M ${P1} ${GT} H ${P1 + N * C} V ${GB} H ${P1} Z`} stroke={INK} sw={2} dur={0.9} />
      {/* both dimensions are n */}
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={hBarD(P1, P1 + N * C, 344)} stroke={INK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 3)} d={vBarD(54, GT, GB)} stroke={INK} sw={1.6} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={42} y={234} size={14} fill={INK} weight={900}>n</T>
        <T x={288} y={349} size={14} fill={INK} weight={900}>n</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={170} y={360} size={12.5} fill={INK} weight={700}>
          {t("n columns × n rows = n² ordered pairs",
             "n columns × n rows, yaani n² pairs")}
        </T>
      </Fade>

      {/* beat 2 — two choices in every single cell */}
      {IDX.map((i) =>
        IDX.map((j) => {
          const x = ctr(P1, C, i);
          const y = ctr(GT, C, j);
          const d = dl(2, 0.2 + (i + j) * 0.11);
          return inR(i, j) ? (
            <Draw key={`m${i}${j}`} on={beat >= 2} delay={d} d={checkD(x, y)}
              stroke={GREEN_DARK} sw={2.3} dur={0.25} />
          ) : (
            <Draw key={`m${i}${j}`} on={beat >= 2} delay={d} d={xMarkD(x, y)}
              stroke={MUTED} sw={2} dur={0.25} />
          );
        })
      )}
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={ringD(250, 150, 22, 18)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={282} y={150} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("2 ways", "2 tarike")}
        </T>
        <T x={282} y={174} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("in R or out", "R mein ya bahar")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={170} y={392} size={19} fill={GREEN_DARK} weight={900}>
          {t("# relations = 2", "# relations = 2")}
          <TSpan dy={-8} fontSize={14}>n²</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={170} y={416} size={12.5} fill={MUTED} weight={700}>
          {t("two choices per pair, n² times over", "har pair pe do choices, n² baar")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          LATTICE ② — reflexive                        (beats 3 and 4)
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={410} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("② reflexive — the n self-pairs are forced in",
             "② reflexive — n self-pairs zaroori ho jaate hain")}
        </T>
      </Fade>
      {RULES.map((i) => (
        <Draw key={`p2v${i}`} on={beat >= 3} delay={dl(3, 0.6 + i * 0.09)}
          d={vD(P2, GT, C, N, i)} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      {RULES.map((j) => (
        <Draw key={`p2h${j}`} on={beat >= 3} delay={dl(3, 1.1 + j * 0.09)}
          d={hD(P2, GT, C, N, j)} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      <Draw on={beat >= 3} delay={dl(3, 1.7)}
        d={`M ${P2} ${GT} H ${P2 + N * C} V ${GB} H ${P2} Z`} stroke={INK} sw={2} dur={0.9} />
      {IDX.map((i) => (
        <Fade key={`p2d${i}`} on={beat >= 3} delay={dl(3, 2.5 + i * 0.22)}>
          <Rect x={P2 + C * i} y={GT + C * i} width={C} height={C} fill={AMBER} fillOpacity={0.4} />
        </Fade>
      ))}
      {IDX.map((i) => (
        <Draw key={`p2c${i}`} on={beat >= 3} delay={dl(3, 3 + i * 0.22)}
          d={checkD(ctr(P2, C, i), ctr(GT, C, i))} stroke={GREEN_DARK} sw={2.6} dur={0.3} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={652} y={160} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("n self-pairs", "n self-pairs")}
        </T>
        <T x={652} y={184} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("forced IN", "zaroori IN")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <T x={540} y={360} size={12.5} fill={INK} weight={700}>
          {t("every (a, a) is locked ON", "har (a, a) lock ON hai")}
        </T>
      </Fade>

      {/* beat 4 — what is left free */}
      {IDX.map((i) =>
        IDX.map((j) =>
          i === j ? null : (
            <Fade key={`p2f${i}${j}`} on={beat >= 4} delay={dl(4, 0.2 + (i + j) * 0.1)}>
              <Rect x={P2 + C * i} y={GT + C * j} width={C} height={C} fill={GREEN} fillOpacity={0.16} />
            </Fade>
          )
        )
      )}
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={652} y={222} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("n² − n cells", "n² − n cells")}
        </T>
        <T x={652} y={246} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("stay free", "free rehte hain")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={540} y={392} size={19} fill={GREEN_DARK} weight={900}>
          {t("# reflexive = 2", "# reflexive = 2")}
          <TSpan dy={-8} fontSize={14}>n² − n</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={540} y={416} size={12.5} fill={MUTED} weight={700}>
          {t("only n² − n pairs stay free", "sirf n² − n pairs free rehte hain")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          LATTICE ③ — symmetric                             (beat 5)
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={780} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("③ symmetric — cells mirror in pairs",
             "③ symmetric — cells jodon mein mirror")}
        </T>
      </Fade>
      {RULES.map((i) => (
        <Draw key={`p3v${i}`} on={beat >= 5} delay={dl(5, 0.5 + i * 0.08)}
          d={vD(P3, GT, C, N, i)} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      {RULES.map((j) => (
        <Draw key={`p3h${j}`} on={beat >= 5} delay={dl(5, 0.9 + j * 0.08)}
          d={hD(P3, GT, C, N, j)} stroke={MUTED} sw={1.2} dur={0.5} />
      ))}
      <Draw on={beat >= 5} delay={dl(5, 1.4)}
        d={`M ${P3} ${GT} H ${P3 + N * C} V ${GB} H ${P3} Z`} stroke={INK} sw={2} dur={0.9} />
      {/* the mirror axis */}
      <Path
        d={`M ${P3} ${GT} L ${P3 + N * C} ${GB}`}
        fill="none" stroke={AMBER_DARK} strokeWidth={2} strokeDasharray="8 6"
        opacity={beat >= 5 ? 1 : 0}
      />
      {IDX.map((i) => (
        <Fade key={`p3d${i}`} on={beat >= 5} delay={dl(5, 2.6 + i * 0.14)}>
          {/* free-choice GREEN, NOT the reflexive AMBER of lattice ② — a
              symmetric relation does not force the diagonal on */}
          <Rect x={P3 + C * i} y={GT + C * i} width={C} height={C} fill={GREEN} fillOpacity={0.16} />
        </Fade>
      ))}
      {MIRROR.map(([i, j]) => {
        const ax = ctr(P3, C, i), ay = ctr(GT, C, j);
        const bx = ctr(P3, C, j), by = ctr(GT, C, i);
        return (
          <Draw key={`mir${i}${j}`} on={beat >= 5} delay={dl(5, 3.6 + i * 0.3)}
            d={`M ${ax} ${ay} L ${bx} ${by}`} stroke={GREEN} sw={2.4} dur={0.4} />
        );
      })}
      {MIRROR.map(([i, j]) => (
        <Fade key={`mird${i}${j}`} on={beat >= 5} delay={dl(5, 3.9 + i * 0.3)}>
          <Circle cx={ctr(P3, C, i)} cy={ctr(GT, C, j)} r={4.2} fill={GREEN_DARK} />
          <Circle cx={ctr(P3, C, j)} cy={ctr(GT, C, i)} r={4.2} fill={GREEN_DARK} />
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 5.2)}>
        <T x={910} y={360} size={12.5} fill={INK} weight={700}>
          {t("each mirror pair = one choice", "har mirror jodi = ek hi choice")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <T x={910} y={392} size={19} fill={GREEN_DARK} weight={900}>
          {t("# symmetric = 2", "# symmetric = 2")}
          <TSpan dy={-8} fontSize={14}>n(n+1)/2</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={910} y={416} size={12.5} fill={MUTED} weight={700}>
          {t("diagonal stays free — n more choices",
             "diagonal free rehta hai — n aur choices")}
        </T>
      </Fade>

      {/* ═══════════════════════════════════════════════════════════
          beat 6 — equivalence relations ↔ partitions
          ═══════════════════════════════════════════════════════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 40 428 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={40} y={450} size={13} fill={RED} weight={800} anchor="start">
          {t("④ the prize one — equivalence relations match partitions one-to-one",
             "④ prize wala — equivalence relations partitions se one-to-one match")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)}
        d="M 60 464 H 332 V 538 H 60 Z" stroke={INK} sw={1.6} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={52} y={506} size={14} fill={INK} weight={900} anchor="end">A</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.2)}
        d={ringD(120, 501, 44, 24)} stroke={GREEN_DARK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 2.7)}
        d={ringD(208, 501, 28, 24)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 3.2)}
        d={ringD(288, 501, 38, 24)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.7)}>
        <Circle cx={102} cy={501} r={5.5} fill={INK} />
        <Circle cx={138} cy={501} r={5.5} fill={INK} />
        <Circle cx={208} cy={501} r={5.5} fill={INK} />
        <Circle cx={275} cy={501} r={5.5} fill={INK} />
        <Circle cx={301} cy={501} r={5.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.2)} d={arrowD(346, 495, 392, 495)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 4.5)} d={arrowD(392, 507, 346, 507)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={406} y={492} size={20} fill={GREEN_DARK} weight={900} anchor="start">
          {t("# equivalence relations = B", "# equivalence relations = B")}
          <TSpan dy={5} fontSize={14}>n</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.4)}>
        <T x={406} y={518} size={12.5} fill={INK} weight={700} anchor="start">
          {t("one for each partition of A — the n-th Bell number",
             "har partition ke liye ek — n-th Bell number")}
        </T>
      </Fade>
      {/* the same classes, read off the lattice as blocks */}
      <Fade on={beat >= 6} delay={dl(6, 6.9)}>
        <T x={925} y={452} size={11.5} fill={MUTED} weight={700}>
          {t("the same classes as blocks", "wahi classes, blocks ki tarah")}
        </T>
      </Fade>
      {/* beat 6 is only ~9.4s long (en 69.38→78.76, hi 66.22→75.69), so this
          tail has to land — border included — inside ~9.0s */}
      {RULES.map((i) => (
        <Draw key={`mv${i}`} on={beat >= 6} delay={dl(6, 7.2 + i * 0.06)}
          d={vD(ML, MT, MC, N, i)} stroke={MUTED} sw={1.1} dur={0.4} />
      ))}
      {RULES.map((j) => (
        <Draw key={`mh${j}`} on={beat >= 6} delay={dl(6, 7.5 + j * 0.06)}
          d={hD(ML, MT, MC, N, j)} stroke={MUTED} sw={1.1} dur={0.4} />
      ))}
      {IDX.map((i) =>
        IDX.map((j) =>
          BLOCK[i] === BLOCK[j] ? (
            <Fade key={`mb${i}${j}`} on={beat >= 6} delay={dl(6, 7.95 + (i + j) * 0.045)}>
              <Rect x={ML + MC * i} y={MT + MC * j} width={MC} height={MC} fill={GREEN} fillOpacity={0.42} />
            </Fade>
          ) : null
        )
      )}
      <Draw on={beat >= 6} delay={dl(6, 8.4)}
        d={`M ${ML} ${MT} H ${ML + N * MC} V ${MT + N * MC} H ${ML} Z`} stroke={INK} sw={1.8} dur={0.55} />

      {/* ═══════════════════════════════════════════════════════════
          beat 7 — the opening Bell numbers
          ═══════════════════════════════════════════════════════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={40} y={558} size={12.5} fill={RED} weight={800} anchor="start">
          {t("Bell numbers — memorise", "Bell numbers yaad karo")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={40} y={582} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("instant answers in JEE counting", "JEE counting ke instant answers")}
        </T>
      </Fade>
      {BELL.map(([lbl, val], k) => (
        <Fade key={lbl} on={beat >= 7} delay={dl(7, 1.6 + k * 1.1)}>
          <Chip x={270 + k * 116} y={546} w={104} h={38} fill={CREAM} stroke={GREEN_DARK}
            textFill={GREEN_DARK} size={15} script={false}>
            {`${lbl} = ${val}`}
          </Chip>
        </Fade>
      ))}
    </Scene>
  );
}
