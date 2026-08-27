/**
 * M11 Ch06 · Section 30 — "Why stars & bars works, and the give-one trick"
 * FOURTH section of Subtopic "Total Selections, Grouping & Distribution".
 * FLAGGED FOR EXTRA SCRUTINY — the full, formal bijection proof of the
 * stars-and-bars formula: combinations with repetition = (n+r-1)C(r).
 * Canvas 1080×620 · safe x36-1044, y30-596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. nCr here is SYMBOLIC (n, r variables) → plain
 * text "(n+r-1)C(r)" etc, no superscript digits. Reuses Sec28's star/bar
 * visual vocabulary (starD glyph, plain vertical-line bars) and Sec13/21's
 * "flagged, full rigor" bar (real algebra, boxed+checked landings, erase-
 * between-derivations pattern).
 *
 * Beats (board_reveal_at_english [0,9.47,23.89,39.68,57.51,70.83,91.31],
 * hinglish [0,10.84,23.13,36.52,51.37,62.72,79.27]):
 *  0 heading (= title, always-on): "Proof: combinations with repetition = (n+r-1)C(r)"
 *  [group A: aOn = beat 1 only, erased at beat>=2]
 *  1 THE CONCRETE EXAMPLE: 6 stars + 3 bars, 4 types, built left to right as
 *    slots S S | S | | S S S → type1=2, type2=1, type3=0 (TWO bars adjacent
 *    → zero stars, ringed in red as the subtlety), type4=3. Bracket labels
 *    below, then a restatement caption, a red "gotcha" note, and a verified
 *    "2+1+0+3=6" check.
 *  [group A erased at beat>=2 — full board freed for the generalisation]
 *  [group B: bOn = beat 2..3, erased at beat>=4]
 *  2 GENERALISE: "Select r from n types = r identical stars, partitioned
 *    into n blocks by n-1 bars." (restates beat1's concrete numbers as the
 *    general r/n case)
 *  3 THE BIJECTION: two-box diagram SELECTION ⇄ PATTERN with TWO drawn
 *    arrows (one each direction) + an explicit two-line explanation of both
 *    directions, landing "one-to-one (bijection) → counting patterns =
 *    counting selections", then "Total symbols = r+(n-1); choose which n-1
 *    are bars."
 *  [group B erased at beat>=4 — full board freed for the algebra]
 *  [group C: cOn = beat>=4, final, never erased]
 *  4 (HIGH) formula lands: "(n+r-1)C(n-1) = (n+r-1)C(r)" boxed+checked, with
 *    a symmetry caption underneath explicitly citing nCr=nC(n-r) (Sec21) as
 *    the reason the two forms are the same count — one continuous "="
 *    statement plus its justification, not two disconnected boxes.
 *  5 THE TWIN READING: a 3-node vertical equality chain — "(n+r-1)C(r)" =
 *    "r identical objects → n distinct boxes (the n types)" = "x1+⋯+xn=r
 *    (each xi≥0)" — same count, three names.
 *  6 (red-margin guardrail) THE GIVE-ONE TRICK: real algebra — the rule
 *    "for xi≥1: give one to each first (yi=xi-1)", then the equation itself
 *    transforming, built segment by segment: "x1+⋯+xn=r" → "y1+⋯+yn=r-n",
 *    closing with the note that it's the same non-negative case, r→r-n.
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 22, red)                                     | T mid | x~220..860 y41..92 (hinglish wider)
 *  [group A: aOn = beat 1 only, erased at beat>=2]
 *  a1 | caption1 "r stars split into n blocks..." (16,ink)               | T mid | x~300..780 y96..114
 *  a1 | 9-slot star/bar row (6★ amber + 3 bars ink, slotW64)              | Draw/Fade | x252..828 y199..251
 *  a1 | red ring around empty type3 gap (bars at slot4/5)                  | Draw | x530..614 y191..261
 *  a1 | 3 amber-dark brackets (type1,type2,type4 spans)                    | Draw | x252..380/444..508/636..828 y280
 *  a1 | 4 labels "type1=2".."type4=3" (14, type3 in RED)                    | T mid | x316/476/572/732 y291..306
 *  a1 | caption2 "6 stars, 3 bars → type1=2..type4=3" (15,ink)               | T mid | x~285..795 y324..341
 *  a1 | gotcha note "two bars touching = zero stars..." (14,RED,w700)        | T mid | x~340..740 y357..373
 *  a1 | verify "2+1+0+3=6" (15,green,w700) + drawn check                      | T mid/Draw | x440..610 y388..405
 *  [group A erased at beat>=2]
 *  [group B: bOn = beat 2..3, erased at beat>=4]
 *  b2 | line1 "Select r from n types = r identical stars," (18,ink)           | T mid | x~330..750 y145..166
 *  b2 | line2 "partitioned into n blocks by n-1 bars." (18,ink)                | T mid | x~370..710 y182..203
 *  b3 | header "Every selection matches..." (18,green,w700)                    | T mid | x~320..760 y225..246
 *  b3 | box1 SELECTION (280×80 rounded)                                        | Draw | x140..420 y280..360
 *  b3 | box2 PATTERN (280×80 rounded)                                          | Draw | x660..940 y280..360
 *  b3 | box1 title+subtext                                                     | T mid | x~200..360 y306..344
 *  b3 | box2 title+subtext                                                     | T mid | x~700..900 y306..344
 *  b3 | arrow1 → (encode) in gap                                               | Draw | x428..655 y303
 *  b3 | arrow2 ← (decode) in gap                                               | Draw | x652..425 y337
 *  b3 | explain1 "→ every selection encodes to exactly one pattern" (14,ink)   | T mid | x~300..780 y372..388
 *  b3 | explain2 "← every pattern decodes to exactly one selection" (14,amb-dk)| T mid | x~290..790 y402..418
 *  b3 | insight "one-to-one (bijection): patterns=selections" (16,green)        | T mid | x~230..850 y448..465
 *  b3 | landing "Total symbols=r+(n-1); choose which n-1 are bars" (18,amber-dk)| T mid | x~300..780 y486..504
 *  [group B erased at beat>=4]
 *  [group C: cOn = beat>=4, final]
 *  c4 | lead "Choose which n-1 of r+(n-1) positions are bars:" (16,ink)         | T mid | x~310..770 y96..114
 *  c4 | formula segs "(n+r-1)C(n-1) = (n+r-1)C(r)" (26,w800)                     | T st  | x~312..768 y148..176
 *  c4 | hero box (green, rounded) around formula                                | Draw | x~300..780 y134..191
 *  c4 | checkmark (green)                                                       | Draw | x~798..814 y160..176
 *  c4 | symmetry caption "(by symmetry: nCr=nC(n-r), Sec21)" (14,amber-dk)       | T mid | x~370..710 y199..217
 *  c5 | node1 "(n+r-1)C(r)" (20,green,w800)                                     | T mid | x~460..620 y280..302
 *  c5 | "=" (15,muted)                                                          | T mid | x~536..544 y326..340
 *  c5 | node2 "r identical objects → n distinct boxes (the n types)" (16,ink)   | T mid | x~330..750 y360..376
 *  c5 | "=" (15,muted)                                                          | T mid | x~536..544 y393..407
 *  c5 | node3 "x1+x2+⋯+xn=r (each xi≥0)" (19,ink,w800)                          | T mid | x~360..720 y427..443
 *  c6 | guardrail box (cream/red, rounded, dynamic w, h120)                     | Draw/rect | x~300..780 y462..582
 *  c6 | line1 "For xi≥1: give one to each first (yi=xi-1)" (15,red,w700)        | T mid | x~330..750 y480..497
 *  c6 | equation segs (x-form ink, arrow amber-dk, y-form green) (17,w800)      | T st  | x~340..740 y523..533
 *  c6 | closing note "(reduces to the non-negative case, r→r-n)" (12,amber-dk)  | T mid | x~380..700 y556..564
 */

import React from "react";
import { Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

/** 5-point star as a fillable path — local to this file, one-section device
 * (SCENE_AUTHORING_MATHS.md: no special star/bar primitive exists or is
 * needed, a drawn glyph is enough — same local helper as Sec28). */
function starD(cx: number, cy: number, rOuter: number, rInner = rOuter * 0.42): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? rOuter : rInner;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return pts.join(" ") + " Z";
}

export default function M11Ch06Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Three groups, each fully erased before the next claims the board (the
  // density here — a concrete example, a bijection diagram, and real algebra
  // — is too much for any two to share space). Every element's own `on` is
  // bounded to its beat window (xOn && beat>=k), never a wrapper div's
  // opacity, so the verifier's Fade-opacity visibility check (which walks up
  // to the nearest g.sc-fade) sees each erasure; seeking back restores it.
  const aOn = beat === 1; // concrete star/bar example
  const bOn = beat >= 2 && beat < 4; // generalise + bijection
  const cOn = beat >= 4; // formula, twin reading, give-one trick

  /* ================= Group A: beat 1 — concrete 6-star/3-bar/4-type ================= */
  const slotW = 64,
    slotN = 9;
  const slotTotal = slotW * slotN;
  const slotLeft0 = 540 - slotTotal / 2;
  const slotCenters = Array.from({ length: slotN }, (_, i) => slotLeft0 + slotW * i + slotW / 2);
  // S S | S | | S S S — indices 2,4,5 are bars (4 and 5 adjacent → type3 = 0)
  const slotIsBar = [false, false, true, false, true, true, false, false, false];
  const rowY = 225;
  const starR = 17;
  const barHalf = 26;

  type GroupRange = { lo: number; hi: number; count: number; name: string };
  const groups: GroupRange[] = [
    { lo: 0, hi: 1, count: 2, name: "type1" },
    { lo: 3, hi: 3, count: 1, name: "type2" },
    { lo: 6, hi: 8, count: 3, name: "type4" },
  ];
  const bracketY = rowY + 55;
  const groupSpans = groups.map((g) => ({
    x1: slotLeft0 + slotW * g.lo,
    x2: slotLeft0 + slotW * (g.hi + 1),
  }));
  const zeroX = (slotCenters[4] + slotCenters[5]) / 2;
  const labelY = bracketY + 22;

  const verifyText = "2 + 1 + 0 + 3 = 6";

  /* ================= Group B: beats 2-3 — generalise, then the bijection ================= */
  const boxW = 280,
    boxH = 80;
  const box1X = 140,
    box2X = 660,
    boxY = 280;
  const box1Cx = box1X + boxW / 2;
  const box2Cx = box2X + boxW / 2;

  /* ================= Group C: beats 4-6 — formula, twin reading, give-one ================= */
  // beat4 — symmetry equation, built as colour segments (like Sec21's eqSegs)
  const eqSegs = [
    { text: "(n+r-1)C(n-1)", fill: INK },
    { text: "=", fill: INK },
    { text: "(n+r-1)C(r)", fill: GREEN },
  ];
  const eqSize = 26;
  const eqWidths = eqSegs.map((s) => 0.56 * eqSize * s.text.length);
  const eqGap = 16;
  const eqTotalW = eqWidths.reduce((a, b) => a + b, 0) + (eqSegs.length - 1) * eqGap;
  let eqCursor = 540 - eqTotalW / 2;
  const eqXs = eqSegs.map((_, i) => {
    const x = eqCursor;
    eqCursor += eqWidths[i] + eqGap;
    return x;
  });
  const eqY = 168;
  const eqBoxX = eqXs[0] - 22;
  const eqBoxW = eqXs[2] + eqWidths[2] - eqXs[0] + 44;
  const eqBoxY = eqY - 0.78 * eqSize - 14;
  const eqBoxH = 0.78 * eqSize + 0.31 * eqSize + 28;

  // beat5 — the twin-reading equality chain
  const node2Text = t(
    "r identical objects into n distinct boxes (the n types)",
    "r identical objects, n distinct boxes mein (wahi n types)"
  );

  // beat6 — the give-one substitution, guardrail styling
  const guardLine1 = t(
    "For xi ≥ 1: give one to each first (yi = xi - 1)",
    "xi ≥ 1 ho toh: pehle har ek ko ek do (yi = xi - 1)"
  );
  const guardEqSegs = [
    { text: "x1+x2+⋯+xn = r", fill: INK },
    { text: "→", fill: AMBER_DARK },
    { text: "y1+y2+⋯+yn = r-n", fill: GREEN },
  ];
  const guardEqSize = 17;
  const guardEqWidths = guardEqSegs.map((s) => 0.56 * guardEqSize * s.text.length);
  const guardEqGap = 16;
  const guardEqTotalW =
    guardEqWidths.reduce((a, b) => a + b, 0) + (guardEqSegs.length - 1) * guardEqGap;
  let guardEqCursor = 540 - guardEqTotalW / 2;
  const guardEqXs = guardEqSegs.map((_, i) => {
    const x = guardEqCursor;
    guardEqCursor += guardEqWidths[i] + guardEqGap;
    return x;
  });
  const guardNote = t(
    "(reduces to the non-negative case, just r → r-n)",
    "(non-negative case jaisa hi, bas r → r-n)"
  );
  const guardW =
    Math.max(
      0.5 * 15 * guardLine1.length,
      guardEqTotalW,
      0.5 * 12 * guardNote.length
    ) + 70;
  const guardX = 540 - guardW / 2;
  const guardY = 462;
  const guardH = 120;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={22} fill={RED} script>
          {t(
            "Proof: combinations with repetition = (n+r-1)C(r)",
            "Proof: repetition wale combinations = (n+r-1)C(r)"
          )}
        </T>
      </Fade>

      {/* ===================== Group A — beat 1, the concrete example ===================== */}

      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={16} fill={INK} weight={600}>
          {t(
            "r stars split into n blocks by n-1 bars",
            "r stars ko n-1 bars se n blocks mein split karo"
          )}
        </T>
      </Fade>

      {/* the 9-slot row, built left to right — one hand, one slot at a time */}
      {slotCenters.map((cx, i) =>
        slotIsBar[i] ? (
          <Draw
            key={`slot${i}`}
            on={aOn && beat >= 1}
            delay={dl(1, 0.8 + i * 0.32)}
            d={lineD(cx, rowY - barHalf, cx, rowY + barHalf)}
            stroke={INK}
            sw={3.4}
            dur={0.35}
          />
        ) : (
          // filled shape → Fade (real opacity), not Draw (Draw only animates
          // strokeDashoffset, never the static `fill` — the Sec28 bug)
          <Fade key={`slot${i}`} on={aOn && beat >= 1} delay={dl(1, 0.8 + i * 0.32)}>
            <Path d={starD(cx, rowY, starR)} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.6} />
          </Fade>
        )
      )}

      {/* THE SUBTLETY: red ring around the two adjacent bars (slots 4,5) —
          nothing sits between them, so type3 = 0 */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 4.0)}
        d={ringD(zeroX, rowY, 40, 26)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />

      {/* group brackets (type1, type2, type4 — real spans) */}
      {groupSpans.map((g, i) => (
        <Draw
          key={`gb${i}`}
          on={aOn && beat >= 1}
          delay={dl(1, 4.9 + i * 0.3)}
          d={lineD(g.x1, bracketY, g.x2, bracketY)}
          stroke={AMBER_DARK}
          sw={2}
          dur={0.4}
        />
      ))}

      {/* 4 labels — type1, type2, type4 in ink; type3 in RED (the zero) */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 5.9)}>
        <T x={(groupSpans[0].x1 + groupSpans[0].x2) / 2} y={labelY} size={14} fill={INK} weight={700}>
          type1=2
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 6.15)}>
        <T x={(groupSpans[1].x1 + groupSpans[1].x2) / 2} y={labelY} size={14} fill={INK} weight={700}>
          type2=1
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 6.4)}>
        <T x={zeroX} y={labelY} size={14} fill={RED} weight={800}>
          type3=0
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 6.65)}>
        <T x={(groupSpans[2].x1 + groupSpans[2].x2) / 2} y={labelY} size={14} fill={INK} weight={700}>
          type4=3
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 7.4)}>
        <T x={540} y={336} size={15} fill={INK} weight={600}>
          {"6 stars, 3 bars → type1=2, type2=1, type3=0, type4=3"}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 8.1)}>
        <T x={540} y={368} size={14} fill={RED} weight={700}>
          {t(
            "two bars touching = zero stars for that block!",
            "do bars saath saath = us block ke liye zero stars!"
          )}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 8.8)}>
        <T x={510} y={400} size={15} fill={GREEN} weight={700}>
          {verifyText}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 9.3)}
        d={checkD(600, 396, 16)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />

      {/* ===================== Group B — beats 2-3, generalise + bijection ===================== */}

      {/* beat 2 — generalise from the concrete example */}
      <Fade on={bOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={160} size={18} fill={INK} weight={600}>
          {t(
            "Select r from n types = r identical stars,",
            "n types se r select karna = r identical stars,"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={196} size={18} fill={INK} weight={600}>
          {t(
            "partitioned into n blocks by n-1 bars.",
            "n-1 bars se n blocks mein partition karo."
          )}
        </T>
      </Fade>

      {/* beat 3 — THE BIJECTION: two-way correspondence, explicit both ways */}
      <Fade on={bOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={240} size={18} fill={GREEN} weight={700}>
          {t(
            "Every selection matches one star/bar pattern:",
            "Har selection ek star/bar pattern se match karta hai:"
          )}
        </T>
      </Fade>

      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 0.7)}
        d={roundRectD(box1X, boxY, boxW, boxH, 12)}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 3} delay={dl(3, 1.6)}>
        <T x={box1Cx} y={318} size={20} fill={INK} weight={800}>
          SELECTION
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 1.9)}>
        <T x={box1Cx} y={342} size={13} fill={AMBER_DARK} weight={600}>
          {"(x1, x2, …, xn counts)"}
        </T>
      </Fade>

      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 2.5)}
        d={roundRectD(box2X, boxY, boxW, boxH, 12)}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 3} delay={dl(3, 3.4)}>
        <T x={box2Cx} y={318} size={20} fill={INK} weight={800}>
          PATTERN
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 3.7)}>
        <T x={box2Cx} y={342} size={13} fill={AMBER_DARK} weight={600}>
          {t("(star/bar string)", "(star/bar string)")}
        </T>
      </Fade>

      {/* two arrows, one each direction — the bijection is drawn both ways */}
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 4.3)}
        d={arrowD(box1X + boxW + 8, 303, box2X - 5, 303)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 5.0)}
        d={arrowD(box2X - 8, 337, box1X + boxW + 5, 337)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />

      <Fade on={bOn && beat >= 3} delay={dl(3, 5.7)}>
        <T x={540} y={384} size={14} fill={INK} weight={600}>
          {t(
            "→ every selection encodes to exactly one pattern",
            "→ har selection exactly ek pattern mein encode hota hai"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 6.1)}>
        <T x={540} y={414} size={14} fill={AMBER_DARK} weight={600}>
          {t(
            "← every pattern decodes to exactly one selection",
            "← har pattern exactly ek selection mein decode hota hai"
          )}
        </T>
      </Fade>

      <Fade on={bOn && beat >= 3} delay={dl(3, 6.8)}>
        <T x={540} y={460} size={16} fill={GREEN} weight={700}>
          {t(
            "One-to-one (a bijection): counting patterns = counting selections.",
            "One-to-one (bijection): patterns ginna = selections ginna."
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 7.5)}>
        <T x={540} y={498} size={18} fill={AMBER_DARK} weight={800}>
          {t(
            "Total symbols = r + (n-1); choose which n-1 are bars.",
            "Total symbols = r + (n-1); choose karo kaunse n-1 bars hain."
          )}
        </T>
      </Fade>

      {/* ===================== Group C — beats 4-6, formula + twin reading + give-one ===================== */}

      {/* beat 4 — land the formula, symmetry connects both forms explicitly */}
      <Fade on={cOn && beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={108} size={16} fill={INK} weight={600}>
          {t(
            "Choose which n-1 of the r+(n-1) positions are bars:",
            "r+(n-1) positions mein se n-1 kaunse bars hain, choose karo:"
          )}
        </T>
      </Fade>
      {eqSegs.map((s, i) => (
        <Fade key={i} on={cOn && beat >= 4} delay={dl(4, 0.9 + i * 0.5)}>
          <T x={eqXs[i]} y={eqY} size={eqSize} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={cOn && beat >= 4}
        delay={dl(4, 2.7)}
        d={roundRectD(eqBoxX, eqBoxY, eqBoxW, eqBoxH, 14)}
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={cOn && beat >= 4}
        delay={dl(4, 3.6)}
        d={checkD(eqBoxX + eqBoxW + 16, eqY - 8, 16)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={cOn && beat >= 4} delay={dl(4, 4.2)}>
        <T x={540} y={213} size={14} fill={AMBER_DARK}>
          {t(
            "(by symmetry: nCr = nC(n-r) — Sec21, so both forms count the same thing)",
            "(symmetry se: nCr = nC(n-r) — Sec21, dono forms same cheez ginte hain)"
          )}
        </T>
      </Fade>

      {/* beat 5 — THE TWIN READING: one count, three names, connected chain */}
      <Fade on={cOn && beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={296} size={20} fill={GREEN} weight={800}>
          {"(n+r-1)C(r)"}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={330} size={15} fill={MUTED} weight={700}>
          =
        </T>
      </Fade>
      <Fade on={cOn && beat >= 5} delay={dl(5, 1.1)}>
        <T x={540} y={364} size={16} fill={INK} weight={600}>
          {node2Text}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 5} delay={dl(5, 1.7)}>
        <T x={540} y={397} size={15} fill={MUTED} weight={700}>
          =
        </T>
      </Fade>
      <Fade on={cOn && beat >= 5} delay={dl(5, 2.2)}>
        <T x={540} y={432} size={19} fill={INK} weight={800}>
          {"x1 + x2 + ⋯ + xn = r   (each xi ≥ 0)"}
        </T>
      </Fade>

      {/* beat 6 — THE GIVE-ONE TRICK, real algebra transforming the equation */}
      <Fade on={cOn && beat >= 6} delay={dl(6, 0)}>
        <Rect x={guardX} y={guardY} width={guardW} height={guardH} rx={16} fill={CREAM} />
      </Fade>
      <Draw
        on={cOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(guardX, guardY, guardW, guardH, 16)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={cOn && beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={492} size={15} fill={RED} weight={700}>
          {guardLine1}
        </T>
      </Fade>
      {guardEqSegs.map((s, i) => (
        <Fade key={i} on={cOn && beat >= 6} delay={dl(6, 1.7 + i * 0.7)}>
          <T x={guardEqXs[i]} y={528} size={guardEqSize} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Fade on={cOn && beat >= 6} delay={dl(6, 4.2)}>
        <T x={540} y={560} size={12} fill={AMBER_DARK}>
          {guardNote}
        </T>
      </Fade>
    </Scene>
  );
}
