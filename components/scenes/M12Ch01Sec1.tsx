/**
 * M12Ch01 · Section 1 — "A relation is just a bundle of connections"
 * Subtopic: Types of Relations  (opening section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice builds the definition from a picture: a batch of students, an
 * arrow wherever the rule "sits in the same row as" holds, the arrows
 * written down as ordered pairs, and finally the realisation that the whole
 * thing is just a SUBSET of A × A. So the board is a directed graph on
 * A = {a, b, c} — a and b drawn in one row, c in another, so the rule gives
 * a <-> b both ways plus a self-loop on every student — the same relation
 * re-drawn as a 3×3 lattice of every ordered pair, and the five chosen
 * cells lit up inside it. The two extremes plus the identity get their own
 * real digraphs along the bottom band.
 *
 * Grid: header band y30–94 · left column x40–455 holds the batch digraph
 * (beats 1–2 read across into the right column) · right column x470–1044
 * holds the ordered-pair set, the A × A lattice and the subset claim ·
 * a full-width rule at y380 opens the bottom band y392–596, split into
 * three equal panels (40–360, 380–700, 720–1044) for void / universal /
 * identity.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "a relation is a rule about pairs"    title + underline + subtitle + rule
 *  1  "picture every student, draw arrows"  set A as a blob, three student
 *                                           nodes — a, b in one row, c in
 *                                           another — a <-> b both ways plus
 *                                           a self-loop on each student
 *  2  "list the connected pairs"            R = { (a,a), (a,b), (b,a), (b,b),
 *                                           (c,c) } — the beat-1 picture
 *                                           written out as ordered pairs
 *  3  "R is a subset of A × A"              the 3×3 lattice of EVERY ordered
 *                                           pair, row/column labels, 9 dots,
 *                                           and the note that (a,b) and (b,a)
 *                                           are two different pairs — the
 *                                           lattice shows them as two cells
 *  4  "keep some, drop the rest"            the five chosen cells filled
 *                                           green, R ⊆ A × A
 *  5  "the empty / void relation"           three nodes carrying all NINE
 *                                           ordered pairs (3 bi-arrows + 3
 *                                           self-loops), every one struck
 *                                           out in red, R = ∅
 *  6  "the universal relation"              every arrow both ways + every
 *                                           self-loop, R = A × A
 *  7  "the identity relation"               self-loops only, I_A written out
 *
 * Visual vocabulary (shared with Sections 2 and 3 of this subtopic):
 *   set outline INK · element nodes CREAM filled, INK stroke, INK letters ·
 *   the relation's arrows AMBER_DARK (the primary object) · anything the
 *   narration calls a RESULT in GREEN_DARK · anything absent, forbidden or
 *   a trap in RED · scaffolding, lattices and side notes in MUTED.
 */

import React from "react";
import { Circle, Rect, TSpan } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, crossD,
  INK, MUTED, GREEN, GREEN_DARK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const RAD = Math.PI / 180;

/** self-loop: a small circle riding on the rim of a node */
function loopA(cx: number, cy: number, dist: number, r: number, deg: number): string {
  const a = deg * RAD;
  const lx = cx + dist * Math.cos(a);
  const ly = cy + dist * Math.sin(a);
  return (
    `M ${(lx - r).toFixed(1)} ${ly.toFixed(1)} A ${r} ${r} 0 1 1 ${(lx + r).toFixed(1)} ${ly.toFixed(1)}` +
    ` A ${r} ${r} 0 1 1 ${(lx - r).toFixed(1)} ${ly.toFixed(1)}`
  );
}

/** one straight stroke carrying an arrowhead at BOTH ends */
function biA(x1: number, y1: number, x2: number, y2: number, o: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const ax = x1 + o * Math.cos(a), ay = y1 + o * Math.sin(a);
  const bx = x2 - o * Math.cos(a), by = y2 - o * Math.sin(a);
  return `${arrowD(ax, ay, bx, by)} ${arrowD(bx, by, ax, ay)}`;
}

/* ---- the A × A lattice (beats 3–4) : 3×3 cells of 40px at (700, 240) ---- */
const GX = 700;
const GY = 240;
const CELL = 40;
const LET = ["a", "b", "c"];
/** R = { (a,a), (a,b), (b,a), (b,b), (c,c) } as [row, col] */
const CHOSEN: [number, number][] = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 2]];

/* ---- the bottom band: one shared triangle, three panels ---- */
const TRI = (cx: number): [number, number][] => [
  [cx, 448],
  [cx - 60, 520],
  [cx + 60, 520],
];
const NR = 16;

export default function M12Ch01Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const tri = { v: TRI(200), u: TRI(540), i: TRI(882) };

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={24} fill={RED} script>
          {t("A relation is just a bundle of connections",
             "Relation sirf connections ka bundle hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 316 64 C 470 60, 640 68, 764 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("Types of Relations — a rule that decides which pairs are connected",
             "Types of Relations — ek rule jo decide karta hai kaunse pairs connected hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the batch, drawn as a digraph ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① the batch — draw an arrow when the rule holds",
             "① batch — jab rule sach ho, ek arrow draw karo")}
        </T>
      </Fade>
      {/* the set A itself */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)}
        d="M 55 226 A 195 84 0 1 1 445 226 A 195 84 0 1 1 55 226"
        stroke={INK} sw={2} dur={1.2} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={120} y={280} size={16} fill={MUTED} weight={800}>A</T>
      </Fade>
      {/* the three students — a and b sit in one row, c in another */}
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={140} cy={200} r={24} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={140} y={205.5} size={16} fill={INK} weight={800}>a</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={272} cy={200} r={24} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={272} y={205.5} size={16} fill={INK} weight={800}>b</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Circle cx={360} cy={258} r={24} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={360} y={263.5} size={16} fill={INK} weight={800}>c</T>
      </Fade>
      {/* the arrows — this bundle IS the relation.  a and b share a row, so
          the rule holds both ways between them; and everyone sits in the
          same row as themselves, so every student carries a self-loop. */}
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={biA(140, 200, 272, 200, 26)}
        stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 4.1)} d={loopA(140, 200, 34, 12, 180)}
        stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d={loopA(272, 200, 34, 12, -90)}
        stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 4.9)} d={loopA(360, 258, 34, 12, 0)}
        stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={40} y={330} size={12.5} fill={INK} weight={700} anchor="start">
          {t("rule: sits in the same row as — a and b share a row",
             "rule: sits in the same row as — a aur b ek hi row mein")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.4)}>
        <T x={40} y={354} size={12.5} fill={INK} weight={700} anchor="start">
          {t("each dot is a student · each arrow: the rule holds",
             "har dot ek student · har arrow: rule sach hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the arrows written down as ordered pairs ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={470} y={116} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② list the connected pairs as ordered pairs",
             "② connected pairs ko ordered pairs mein likho")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={470} y={156} size={20} fill={AMBER_DARK} weight={900} anchor="start">
          {"R = { (a, a), (a, b), (b, a), (b, b), (c, c) }"}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — every ordered pair you could form ═══════════ */}
      {/* the ordering note lands here, where the lattice actually shows the
          (a, b) cell and the (b, a) cell as two separate squares */}
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={470} y={180} size={12} fill={MUTED} weight={700} anchor="start">
          {t("ordered pairs — (a, b) and (b, a) are two different pairs",
             "ordered pairs — (a, b) aur (b, a) do alag pairs hain")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={760} y={208} size={13.5} fill={INK} weight={800}>A × A</T>
      </Fade>
      {/* the chosen cells sit UNDER the lattice so the rules stay visible */}
      {CHOSEN.map(([r, c], i) => (
        <Rect
          key={`cell${r}${c}`}
          x={GX + c * CELL} y={GY + r * CELL} width={CELL} height={CELL}
          fill={GREEN} stroke="none"
          opacity={beat >= 4 ? 0.34 : 0}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <Draw key={`gh${i}`} on={beat >= 3} delay={dl(3, 0.6 + i * 0.18)}
          d={`M ${GX} ${GY + i * CELL} H ${GX + 3 * CELL}`} stroke={MUTED} sw={1.4} dur={0.4} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <Draw key={`gv${i}`} on={beat >= 3} delay={dl(3, 1.4 + i * 0.18)}
          d={`M ${GX + i * CELL} ${GY} V ${GY + 3 * CELL}`} stroke={MUTED} sw={1.4} dur={0.4} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        {LET.map((L, j) => (
          <T key={`cl${L}`} x={GX + j * CELL + CELL / 2} y={230} size={12.5} fill={INK} weight={800}>{L}</T>
        ))}
        {LET.map((L, i) => (
          <T key={`rl${L}`} x={GX - 10} y={GY + i * CELL + CELL / 2 + 4.5} size={12.5}
            fill={INK} weight={800} anchor="end">{L}</T>
        ))}
      </Fade>
      {/* one dot per ordered pair — all nine of them */}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        {LET.flatMap((_, i) =>
          LET.map((__, j) => (
            <Circle key={`dot${i}${j}`}
              cx={GX + j * CELL + CELL / 2} cy={GY + i * CELL + CELL / 2}
              r={3.4} fill={MUTED} />
          )),
        )}
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={470} y={224} size={12.5} fill={INK} weight={700} anchor="start">
          {t("R on a set A is a chosen", "Set A par relation R bas")}
        </T>
        <T x={470} y={248} size={12.5} fill={INK} weight={700} anchor="start">
          {t("subset of A × A — the set of", "A × A ka chosen subset hai —")}
        </T>
        <T x={470} y={272} size={12.5} fill={INK} weight={700} anchor="start">
          {t("every ordered pair you can form", "har possible ordered pair ka set")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — keep some pairs, drop the rest ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        {CHOSEN.map(([r, c]) => (
          <Circle key={`hit${r}${c}`}
            cx={GX + c * CELL + CELL / 2} cy={GY + r * CELL + CELL / 2}
            r={6} fill={GREEN_DARK} />
        ))}
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={470} y={312} size={19} fill={GREEN_DARK} weight={900} anchor="start">R ⊆ A × A</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={470} y={338} size={12} fill={INK} weight={700} anchor="start">
          {t("pick some pairs, leave the rest out",
             "kuch pairs chuno, baaki chhod do")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.2)}>
        <T x={470} y={360} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("what you kept IS the relation",
             "jo bachaa wahi tumhara relation hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the empty (void) relation ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 380 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={200} y={400} size={13.5} fill={RED} weight={800}>
          {t("EMPTY (VOID) RELATION", "EMPTY (VOID) RELATION")}
        </T>
      </Fade>
      {tri.v.map(([x, y], i) => (
        <Fade key={`vn${i}`} on={beat >= 5} delay={dl(5, 1.2 + i * 0.25)}>
          <Circle cx={x} cy={y} r={NR} fill={CREAM} stroke={INK} strokeWidth={1.9} />
          <T x={x} y={y + 5} size={14} fill={INK} weight={800}>{LET[i]}</T>
        </Fade>
      ))}
      {/* all NINE ordered pairs of A × A are laid out in grey — the six
          directed edges (three bi-arrows) and the three self-loops, exactly
          the vocabulary the universal panel uses — and then every one of
          them is struck out, so nothing at all survives. */}
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d={biA(200, 448, 140, 520, 20)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 2.5)} d={biA(200, 448, 260, 520, 20)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 2.8)} d={biA(140, 520, 260, 520, 20)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 3.1)} d={loopA(200, 448, 26, 12, -90)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 3.35)} d={loopA(140, 520, 26, 12, 150)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 3.6)} d={loopA(260, 520, 26, 12, 30)} stroke={MUTED} sw={1.6} dur={0.5} />
      {/* (a,b) and (b,a) */}
      <Draw on={beat >= 5} delay={dl(5, 4.1)} d={crossD(173, 467, 12, 12)} stroke={RED} sw={2.1} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 4.3)} d={crossD(155, 489, 12, 12)} stroke={RED} sw={2.1} dur={0.3} />
      {/* (a,c) and (c,a) */}
      <Draw on={beat >= 5} delay={dl(5, 4.5)} d={crossD(215, 467, 12, 12)} stroke={RED} sw={2.1} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 4.7)} d={crossD(233, 489, 12, 12)} stroke={RED} sw={2.1} dur={0.3} />
      {/* (b,c) and (c,b) */}
      <Draw on={beat >= 5} delay={dl(5, 4.9)} d={crossD(176, 514, 12, 12)} stroke={RED} sw={2.1} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 5.1)} d={crossD(212, 514, 12, 12)} stroke={RED} sw={2.1} dur={0.3} />
      {/* the three self-loops (a,a) (b,b) (c,c) go too */}
      <Draw on={beat >= 5} delay={dl(5, 5.3)} d={crossD(194, 416, 12, 12)} stroke={RED} sw={2.1} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 5.5)} d={crossD(111.5, 527, 12, 12)} stroke={RED} sw={2.1} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 5.7)} d={crossD(276.5, 527, 12, 12)} stroke={RED} sw={2.1} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <T x={200} y={564} size={12.5} fill={INK} weight={700}>
          {t("connect nothing to anything", "kuch bhi kisi se connect mat karo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.4)}>
        <T x={200} y={586} size={15} fill={GREEN_DARK} weight={900}>R = ∅</T>
      </Fade>

      {/* ═══════════ beat 6 — the universal relation ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={400} size={13.5} fill={RED} weight={800}>
          {t("UNIVERSAL RELATION", "UNIVERSAL RELATION")}
        </T>
      </Fade>
      {tri.u.map(([x, y], i) => (
        <Fade key={`un${i}`} on={beat >= 6} delay={dl(6, 0.8 + i * 0.2)}>
          <Circle cx={x} cy={y} r={NR} fill={CREAM} stroke={INK} strokeWidth={1.9} />
          <T x={x} y={y + 5} size={14} fill={INK} weight={800}>{LET[i]}</T>
        </Fade>
      ))}
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d={biA(540, 448, 480, 520, 20)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2)} d={biA(540, 448, 600, 520, 20)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d={biA(480, 520, 600, 520, 20)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 3)} d={loopA(540, 448, 26, 12, -90)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 3.3)} d={loopA(480, 520, 26, 12, 150)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 3.6)} d={loopA(600, 520, 26, 12, 30)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <T x={540} y={564} size={12.5} fill={INK} weight={700}>
          {t("connect everything to everything", "sab kuch sabse connect kar do")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.8)}>
        <T x={540} y={586} size={15} fill={GREEN_DARK} weight={900}>R = A × A</T>
      </Fade>

      {/* ═══════════ beat 7 — the identity relation ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={882} y={400} size={13.5} fill={RED} weight={800}>
          {t("IDENTITY RELATION  I", "IDENTITY RELATION  I")}
          <TSpan fontSize={10} dy={4}>A</TSpan>
        </T>
      </Fade>
      {tri.i.map(([x, y], i) => (
        <Fade key={`in${i}`} on={beat >= 7} delay={dl(7, 0.8 + i * 0.2)}>
          <Circle cx={x} cy={y} r={NR} fill={CREAM} stroke={INK} strokeWidth={1.9} />
          <T x={x} y={y + 5} size={14} fill={INK} weight={800}>{LET[i]}</T>
        </Fade>
      ))}
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d={loopA(882, 448, 26, 12, -90)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 2)} d={loopA(822, 520, 26, 12, 150)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={loopA(942, 520, 26, 12, 30)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={882} y={564} size={12.5} fill={INK} weight={700}>
          {t("every element connects only to itself",
             "har element sirf khud se connect hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={882} y={586} size={14} fill={GREEN_DARK} weight={900}>
          I<TSpan fontSize={10} dy={4}>A</TSpan>
          <TSpan dy={-4}>{" = { (a, a), (b, b), (c, c) }"}</TSpan>
        </T>
      </Fade>
    </Scene>
  );
}
