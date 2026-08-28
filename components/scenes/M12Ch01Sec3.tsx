/**
 * M12Ch01 · Section 3 — "Equivalence relations sort a set into buckets"
 * Subtopic: Types of Relations  (closing section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The three traits from Section 2 arrive as three chips and fuse into one
 * name; then the railway example is drawn TWICE on the same three stations
 * so the change of rule is visible: with "directly connected by a train"
 * the a–c link is missing and crossed out in red, with "can reach by any
 * sequence of trains" that link appears, the arrows go both ways and every
 * station gains a self-loop. The class [a] is drawn as a bucket with its
 * x's pointing in, and the closing figure is the partition itself — set A
 * containing three sealed, internally complete buckets with red crosses
 * where an arrow would have to cross.
 *
 * Grid: header band y30–94 · the chip fusion at y104–150 with the symbolic
 * line at y178 and the warning at y202 · a three-panel middle row at
 * x40–380 (direct routes), x404–706 (any sequence) and x730–1044 (the class
 * of a), all sharing header y232 / sub y252 / figure y264–390 / caption
 * y400 · a full-width rule at y418 opens the partition figure, y462–590,
 * with its commentary in the right margin x764–1044.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "all three at once earns a name"     title + the three trait chips
 *                                          fusing into EQUIVALENCE RELATION
 *  1  "in symbols, R ∧ S ∧ T"              the symbolic line + the
 *                                          any-one-missing warning
 *  2  "directly connected by a train"      three stations, matched reverse
 *                                          arcs, the a–c link missing and
 *                                          crossed out
 *  3  "can reach by any sequence"          the same three stations, now with
 *                                          self-loops and the a–c link
 *  4  "the class of a is [a]"              [a] = { x ∈ A : x R a } and a
 *                                          bucket with four x's pointing at a
 *  5  "the classes partition A"            set A drawn around three sealed
 *                                          buckets [a], [b], [c]
 *  6  "each bucket is one class"           the dots inside each bucket, all
 *                                          mutually related
 *  7  "no arrows cross between buckets"    the two red crosses in the gaps
 *                                          and the closing lines
 *
 * Visual vocabulary (shared with Sections 1 and 2 of this subtopic):
 *   set outline INK · element nodes CREAM filled, INK stroke, INK letters ·
 *   the relation's arrows AMBER_DARK · everything the voice calls a RESULT —
 *   the gained links, the buckets, the classes — GREEN_DARK · absent links
 *   and forbidden crossings RED · scaffolding and side notes MUTED.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD,
  INK, MUTED, GREEN, GREEN_DARK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const RAD = Math.PI / 180;

/** straight arrow between two node centres, pulled back off both rims */
function edgeA(x1: number, y1: number, x2: number, y2: number, o1: number, o2: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return arrowD(
    x1 + o1 * Math.cos(a), y1 + o1 * Math.sin(a),
    x2 - o2 * Math.cos(a), y2 - o2 * Math.sin(a),
  );
}

/** bowed arrow; the head angle is taken from the real tangent at the tip */
function arcA(x1: number, y1: number, x2: number, y2: number, bow: number): string {
  const dx = x2 - x1, dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const px = -dy / L, py = dx / L;
  const cx = (x1 + x2) / 2 + px * bow * 2;
  const cy = (y1 + y2) / 2 + py * bow * 2;
  const a = Math.atan2(y2 - cy, x2 - cx);
  const h = 11;
  return (
    `M ${x1} ${y1} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2} ${y2}` +
    ` M ${(x2 - h * Math.cos(a - 0.46)).toFixed(1)} ${(y2 - h * Math.sin(a - 0.46)).toFixed(1)}` +
    ` L ${x2} ${y2}` +
    ` L ${(x2 - h * Math.cos(a + 0.46)).toFixed(1)} ${(y2 - h * Math.sin(a + 0.46)).toFixed(1)}`
  );
}

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

/** the point `d` px along the segment from (x1,y1) towards (x2,y2) */
function towards(x1: number, y1: number, x2: number, y2: number, d: number): [number, number] {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return [x1 + d * Math.cos(a), y1 + d * Math.sin(a)];
}

/** one straight stroke carrying an arrowhead at BOTH ends */
function biA(x1: number, y1: number, x2: number, y2: number, o: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const ax = x1 + o * Math.cos(a), ay = y1 + o * Math.sin(a);
  const bx = x2 - o * Math.cos(a), by = y2 - o * Math.sin(a);
  return `${arrowD(ax, ay, bx, by)} ${arrowD(bx, by, ax, ay)}`;
}

/* ---- beat 2 : "directly connected", three stations ---- */
const DA: [number, number] = [90, 350];
const DB: [number, number] = [205, 300];
const DC: [number, number] = [320, 350];

/* ---- beat 3 : "any sequence", the same three stations shifted right ---- */
const SA: [number, number] = [450, 350];
const SB: [number, number] = [560, 300];
const SC: [number, number] = [670, 350];

/* ---- beat 4 : the bucket that is the class of a ---- */
const CLS_X: [number, number][] = [[792, 332], [792, 364], [976, 332], [976, 364]];

/* ---- beats 5–7 : the partition of A into three buckets ---- */
const BUCKETS = [96, 320, 544];
const BW = 176;
const BLAB = ["[a]", "[b]", "[c]"];

/* rims of the "direct train" arcs, taken off the real station coordinates */
const [DAB1x, DAB1y] = towards(DA[0], DA[1], DB[0], DB[1], 20);
const [DAB2x, DAB2y] = towards(DB[0], DB[1], DA[0], DA[1], 20);
const [DBC1x, DBC1y] = towards(DB[0], DB[1], DC[0], DC[1], 20);
const [DBC2x, DBC2y] = towards(DC[0], DC[1], DB[0], DB[1], 20);

export default function M12Ch01Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — three traits fuse into one name ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={24} fill={RED} script>
          {t("Equivalence relations sort a set into buckets",
             "Equivalence relations set ko buckets mein sort karte hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 300 64 C 470 60, 640 68, 780 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("Types of Relations — reflexive + symmetric + transitive, all at once",
             "Types of Relations — reflexive + symmetric + transitive, teenon ek saath")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.6)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <Chip x={40} y={108} w={168} h={38} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={14} script={false}>
          ① reflexive
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.7)}>
        <Chip x={224} y={108} w={168} h={38} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={14} script={false}>
          ② symmetric
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.2)}>
        <Chip x={408} y={108} w={168} h={38} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={14} script={false}>
          ③ transitive
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4.8)} d={arrowD(590, 127, 640, 127)}
        stroke={GREEN_DARK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 0} delay={dl(0, 5.2)}>
        <Chip x={652} y={104} w={300} h={46} fill={CREAM} stroke={RED}
          textFill={RED} size={20} script>
          EQUIVALENCE RELATION
        </Chip>
      </Fade>

      {/* ═══════════ beat 1 — the same statement in symbols ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={40} y={178} size={17} fill={GREEN_DARK} weight={900} anchor="start">
          EQUIVALENCE = REFLEXIVE ∧ SYMMETRIC ∧ TRANSITIVE
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={40} y={202} size={12.5} fill={RED} weight={800} anchor="start">
          {t("any one missing → NOT an equivalence relation",
             "koi ek bhi missing → equivalence relation nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — direct trains: symmetric, not transitive ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={40} y={232} size={13.5} fill={RED} weight={800} anchor="start">
          “is directly connected by a train”
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={40} y={252} size={12} fill={MUTED} weight={700} anchor="start">
          {t("symmetric, but NOT transitive", "symmetric hai, par transitive nahi")}
        </T>
      </Fade>
      {[DA, DB, DC].map(([x, y], i) => (
        <Fade key={`dn${i}`} on={beat >= 2} delay={dl(2, 1.8 + i * 0.22)}>
          <Circle cx={x} cy={y} r={17} fill={CREAM} stroke={INK} strokeWidth={1.9} />
          <T x={x} y={y + 5} size={14} fill={INK} weight={800}>{["a", "b", "c"][i]}</T>
        </Fade>
      ))}
      <Draw on={beat >= 2} delay={dl(2, 2.8)} d={arcA(DAB1x, DAB1y, DAB2x, DAB2y, 14)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={arcA(DAB2x, DAB2y, DAB1x, DAB1y, 14)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3.7)} d={arcA(DBC1x, DBC1y, DBC2x, DBC2y, 14)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 4.1)} d={arcA(DBC2x, DBC2y, DBC1x, DBC1y, 14)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      {/* the link that would be needed for transitivity — and is not there */}
      <Draw on={beat >= 2} delay={dl(2, 5)} d={arcA(110, 350, 300, 350, 18)}
        stroke={MUTED} sw={1.8} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 6)} d={crossD(197, 358, 20, 20)}
        stroke={RED} sw={2.6} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={40} y={400} size={12.5} fill={RED} weight={800} anchor="start">
          {t("two direct routes need not join into one",
             "do direct routes ka jud jaana zaroori nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — any sequence of trains: all three traits ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={404} y={232} size={13.5} fill={RED} weight={800} anchor="start">
          “can reach by any sequence of trains”
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={404} y={252} size={12} fill={MUTED} weight={700} anchor="start">
          {t("now reflexive, symmetric AND transitive",
             "ab reflexive, symmetric AUR transitive")}
        </T>
      </Fade>
      {[SA, SB, SC].map(([x, y], i) => (
        <Fade key={`sn${i}`} on={beat >= 3} delay={dl(3, 1.8 + i * 0.22)}>
          <Circle cx={x} cy={y} r={17} fill={CREAM} stroke={INK} strokeWidth={1.9} />
          <T x={x} y={y + 5} size={14} fill={INK} weight={800}>{["a", "b", "c"][i]}</T>
        </Fade>
      ))}
      <Draw on={beat >= 3} delay={dl(3, 2.8)} d={biA(SA[0], SA[1], SB[0], SB[1], 20)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d={biA(SB[0], SB[1], SC[0], SC[1], 20)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      {/* the link the new rule hands you for free */}
      <Draw on={beat >= 3} delay={dl(3, 3.8)} d={arcA(467, 350, 653, 350, 20)}
        stroke={GREEN_DARK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 4.4)} d={arcA(653, 350, 467, 350, -20)}
        stroke={GREEN_DARK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 5.2)} d={loopA(SA[0], SA[1], 25, 11, 180)}
        stroke={GREEN_DARK} sw={2.3} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 5.5)} d={loopA(SB[0], SB[1], 25, 11, -90)}
        stroke={GREEN_DARK} sw={2.3} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 5.8)} d={loopA(SC[0], SC[1], 25, 11, 0)}
        stroke={GREEN_DARK} sw={2.3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={404} y={400} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("one rule change ⇒ an equivalence relation",
             "ek rule change ⇒ equivalence relation")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the class of a ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={730} y={232} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE CLASS OF a", "a KI CLASS")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={730} y={268} size={18} fill={GREEN_DARK} weight={900} anchor="start">
          {"[a] = { x ∈ A : x R a }"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={730} y={294} size={12.5} fill={INK} weight={700} anchor="start">
          {t("all the x that relate to a", "wo saare x jo a se relate karte hain")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <Rect x={748} y={310} width={272} height={76} rx={20}
          fill={GREEN} fillOpacity={0.1} stroke={GREEN_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.9)}>
        <Circle cx={884} cy={348} r={18} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={884} y={353.5} size={15} fill={INK} weight={800}>a</T>
      </Fade>
      {CLS_X.map(([x, y], i) => (
        <Fade key={`cx${i}`} on={beat >= 4} delay={dl(4, 4.3 + i * 0.2)}>
          <Circle cx={x} cy={y} r={12} fill={CREAM} stroke={INK} strokeWidth={1.7} />
          <T x={x} y={y + 4.2} size={11.5} fill={INK} weight={800}>x</T>
        </Fade>
      ))}
      {CLS_X.map(([x, y], i) => (
        <Draw key={`ca${i}`} on={beat >= 4} delay={dl(4, 5.3 + i * 0.2)}
          d={edgeA(x, y, 884, 348, 14, 22)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={730} y={404} size={12} fill={MUTED} weight={700} anchor="start">
          {t("these x's form one class", "ye saare x milkar ek class banate hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the classes partition A ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 418 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={40} y={442} size={14} fill={RED} weight={800} anchor="start">
          {t("THE PARTITION — distinct classes never overlap, and together they cover A",
             "PARTITION — distinct classes overlap nahi karti, aur milkar poora A cover karti hain")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Rect x={76} y={462} width={664} height={128} rx={26}
          fill="none" stroke={INK} strokeWidth={2.2} />
        <T x={66} y={532} size={16} fill={MUTED} weight={800} anchor="end">A</T>
      </Fade>
      {BUCKETS.map((bx, i) => (
        <Fade key={`bk${i}`} on={beat >= 5} delay={dl(5, 2.4 + i * 0.5)}>
          <Rect x={bx} y={478} width={BW} height={96} rx={18}
            fill={GREEN} fillOpacity={0.12} stroke={GREEN_DARK} strokeWidth={2} />
          <T x={bx + 12} y={496} size={13} fill={GREEN_DARK} weight={900} anchor="start">
            {BLAB[i]}
          </T>
        </Fade>
      ))}

      {/* ═══════════ beat 6 — inside a bucket, everything is related ═══════════ */}
      {BUCKETS.map((bx, i) => {
        const cx = bx + BW / 2;
        const pts: [number, number][] = [[cx, 500], [cx - 42, 552], [cx + 42, 552]];
        return (
          <Fade key={`bn${i}`} on={beat >= 6} delay={dl(6, 0.3 + i * 0.4)}>
            {pts.map(([px, py], j) => (
              <Circle key={`bn${i}${j}`} cx={px} cy={py} r={9}
                fill={CREAM} stroke={INK} strokeWidth={1.7} />
            ))}
          </Fade>
        );
      })}
      {BUCKETS.flatMap((bx, i) => {
        const cx = bx + BW / 2;
        const edges: [number, number, number, number][] = [
          [cx, 500, cx - 42, 552],
          [cx, 500, cx + 42, 552],
          [cx - 42, 552, cx + 42, 552],
        ];
        return edges.map(([x1, y1, x2, y2], j) => (
          <Draw key={`be${i}${j}`} on={beat >= 6} delay={dl(6, 1.4 + i * 0.4 + j * 0.13)}
            d={biA(x1, y1, x2, y2, 12)} stroke={AMBER_DARK} sw={2} dur={0.4} />
        ));
      })}
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={764} y={486} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("each bucket = one class", "har bucket = ek class")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <T x={764} y={510} size={12.5} fill={INK} weight={700} anchor="start">
          {t("inside: mutually related,", "andar: sab ek doosre se related,")}
        </T>
        <T x={764} y={532} size={12.5} fill={INK} weight={700} anchor="start">
          {t("fully connected", "poori tarah connected")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — nothing crosses between the buckets ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={crossD(298, 512, 12, 12)}
        stroke={RED} sw={2.6} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d={crossD(522, 512, 12, 12)}
        stroke={RED} sw={2.6} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={764} y={560} size={12.5} fill={RED} weight={800} anchor="start">
          {t("no arrow crosses between", "koi arrow beech mein cross nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={764} y={582} size={12.5} fill={RED} weight={800} anchor="start">
          {t("two different buckets", "do alag buckets ke beech")}
        </T>
      </Fade>
    </Scene>
  );
}
