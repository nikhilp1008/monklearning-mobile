/**
 * M11 Ch06 · Section 28 — "Tool 2 (stars & bars) and Tool 3 (grouping vs
 * distribution)" SECOND section of Subtopic "Total Selections, Grouping &
 * Distribution". Full formula derivation is a LATER section (Sec29 states it,
 * Sec30 derives why) — this section is purely the MODEL/setup: build the
 * star/bar picture and the counting reframe, WITHOUT writing the final
 * nCr-style closed form. Canvas 1080×620 · safe x36–1044, y30–596. Spec:
 * SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md. No new math-kit primitive
 * needed — stars are a small locally-defined 5-point star path (starD, kept
 * local to this file since it's a one-section device), bars are plain
 * vertical Draw strokes, per SCENE_AUTHORING_MATHS.md's explicit note that no
 * special star/bar primitive exists or is needed.
 *
 * Beats (board_reveal_at_english [0,11.35,26.79,37.46,58.79,65.28,75.35],
 * hinglish [0,12.63,25.51,35.5,55.04,62.81,73.9]):
 *  0 heading "Tool 2: selection WITH repetition." (sub-header + flourish)
 *  1 setup: n=3 example types (Apple/Banana/Cherry chips) + caption "pick r
 *    items, repeats OK order ignored" + one line explicitly crossing out
 *    "nCr" (no repeats) and "nʳ" (order matters) as NOT the right tool
 *  2 THE MODEL: 5 drawn stars + 2 drawn bars in one row of 7 slots
 *    ("★★|★|★★"), grouped 2/1/2, bracketed and labelled Apple:2/Banana:1/
 *    Cherry:2 (reusing beat-1's fruit names for continuity)
 *  3 THE REFRAME: insight "every arrangement = one valid selection", an
 *    abstracted 7-box slot row (2 amber = bar positions, rest outline = star
 *    positions) landing "r+(n-1)=5+2=7 slots total", then the aha "choose 2
 *    of 7 slots for bars → count arrangements!" — deliberately NOT the
 *    closed-form combination formula (that is Sec29's job)
 *  [erase group A at beat>=4 — Tool 2 done, full board freed for Tool 3]
 *  4 heading "Tool 3: grouping vs distribution." (sub-header + flourish)
 *  5 side-by-side contrast: same "12 books" — LEFT "divide into 3 bundles"
 *    (3 blank/unlabelled tiles) vs RIGHT "give to 3 children" (3 tiles named
 *    Amit/Bina/Chetan, reusing Sec23's exact numbers/names for continuity) —
 *    landing "same numbers, different STRUCTURE"
 *  6 (red-margin guardrail) chip: "unlabelled equal groups → force ÷(groups)!
 *    ; labelled recipients → no division needed" + a small connecting line
 *    back to Tool 2 (distributing to labelled recipients = the star/bar
 *    model)
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 22, red)                          | T mid | x~268..812 y41..81
 *  [group A: aOn = beat 0..3, erased at beat>=4]
 *  a0 | sub-header "Tool 2: selection..." (19,ink,w700)      | T mid | x~374..706 y97..118
 *  a0 | underline flourish (amber)                            | Draw | x400..680 y126
 *  a1 | 3 fruit chips "Apple/Banana/Cherry" (80×40)            | Draw/T| x400..680 y150..190
 *  a1 | caption "pick r items from n types..." (16,ink)        | T mid | x~324..756 y204..221
 *  a1 | NOT line: "nCr"(red,strike) + "nʳ"(red,strike) + prose  | T st  | x~300..780 y239..257
 *  a1 | 2 crossD strikes over nCr/nʳ (red)                      | Draw | per-segment
 *  a2 | caption "5 identical stars, split by n-1=2 bars..." (16)| T mid | x~328..756 y271..289
 *  a2 | 5 stars + 2 bars, one row of 7 slots (60px/slot)         | Draw | x330..750 y299..329
 *  a2 | 3 group brackets under stars                             | Draw | x330..450/510..570/630..750 y344
 *  a2 | 3 group labels "Apple: 2/Banana: 1/Cherry: 2" (14,ink)   | T mid | per-group y355..370
 *  a3 | insight1 "Every arrangement = one valid selection" (19,green,w700)| T mid | x~340..740 y385..406
 *  a3 | 7-box abstract slot row (28×28, 2 amber=bar, 5 outline=star)| Draw| x406..674 y436..464
 *  a3 | caption "r+(n-1)=5+2=7 slots total" (16,amber-dk,w700)   | T mid | x~408..672 y477..495
 *  a3 | landing "Choose 2 of 7 slots for bars → count..." (19,green,w800)| T mid | x~245..835 y515..536
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, never erased]
 *  b4 | sub-header "Tool 3: grouping vs distribution." (19,ink,w700)| T mid| x~374..706 y97..118
 *  b4 | underline flourish (amber)                                  | Draw | x400..680 y126
 *  b5 | header "Same 12 books, two different structures:" (17,ink)  | T mid | x~325..755 y149..167
 *  b5 | LEFT label "divide into 3 bundles" (17,amber-dk,w700)        | T mid | x~140..400 y183..201
 *  b5 | RIGHT label "give to 3 children" (17,amber-dk,w700)          | T mid | x~680..940 y183..201
 *  b5 | LEFT: 3 blank tiles (64×50)                                  | Draw | x158..382 y214..264
 *  b5 | "vs" (14,muted)                                              | T mid | x~533..547 y240..254
 *  b5 | RIGHT: 3 named tiles Amit/Bina/Chetan (64×50)                | Draw/T| x698..922 y214..264
 *  b5 | LEFT caption "bundles = unlabelled piles" (13,muted)          | T mid | x~172..368 y276..290
 *  b5 | RIGHT caption "children = named recipients" (13,muted)        | T mid | x~708..912 y276..290
 *  b5 | bridging insight "Same numbers... STRUCTURE" (18,amber-dk,w700)| T mid| x~300..780 y308..328
 *  b6 | guardrail chip (cream/red, 3 lines, dynamic w, h120)          | Chip | x~290..790 y380..500
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
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

/** 5-point star as a fillable path — local to this file, one-section device
 * (SCENE_AUTHORING_MATHS.md: no special star/bar primitive exists or is
 * needed, a drawn glyph is enough). */
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

export default function M11Ch06Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (Tool 2: beats 0-3, the stars & bars model + counting reframe) is
  // fully erased once Tool 3 begins at beat 4 so its space is free for group
  // B (beats 4-6). Each element's own `on` is bounded to its beat window
  // directly (never a wrapper div's opacity) so the verifier's Fade-opacity
  // visibility check — which walks up to the nearest g.sc-fade, not an
  // arbitrary ancestor — sees the erasure too; seeking back into an earlier
  // beat correctly restores it.
  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4;

  // ---- beat1: 3 fruit-type chips (Apple/Banana/Cherry) representing n=3 ----
  const chipW = 80,
    chipH = 40,
    chipGap = 20,
    chipN = 3;
  const chipTotal = chipN * chipW + (chipN - 1) * chipGap;
  const chipLeft0 = 540 - chipTotal / 2;
  const chipLefts = [0, 1, 2].map((i) => chipLeft0 + i * (chipW + chipGap));
  const chipCenters = chipLefts.map((x) => x + chipW / 2);
  const chipY = 150;
  const fruitNames = ["Apple", "Banana", "Cherry"];

  // ---- beat1 "NOT nCr, not nʳ" line — colour-segmented, red strike on the ----
  // ---- two wrong-tool symbols (the guardrail-style cross-out) -------------
  const notSegs = [
    { text: "nCr", fill: RED, strike: true },
    { text: t("  -  no repeats     ", "  -  repeat nahi     "), fill: MUTED, strike: false },
    { text: "nʳ", fill: RED, strike: true },
    { text: t("  -  order matters", "  -  order matters hai"), fill: MUTED, strike: false },
  ];
  const notSize = 17;
  const notWidths = notSegs.map((s) => 0.5 * notSize * s.text.length);
  const notTotal = notWidths.reduce((a, b) => a + b, 0);
  let notCursor = 540 - notTotal / 2;
  const notXs = notWidths.map((w) => {
    const x = notCursor;
    notCursor += w;
    return x;
  });
  const notY = 252;

  // ---- beat2: THE MODEL — 5 stars + 2 bars in one row of 7 slots ----------
  const slotW = 60,
    slotN = 7;
  const slotTotal = slotW * slotN;
  const slotLeft0 = 540 - slotTotal / 2;
  const slotCenters = Array.from({ length: slotN }, (_, i) => slotLeft0 + slotW * i + slotW / 2);
  // S S | S | S S — indices 2 and 4 are bars, the rest are stars
  const slotIsBar = [false, false, true, false, true, false, false];
  const rowY = 314;
  const starR = 15;

  type GroupRange = { lo: number; hi: number; count: number; name: string };
  const groups: GroupRange[] = [
    { lo: 0, hi: 1, count: 2, name: "Apple" },
    { lo: 3, hi: 3, count: 1, name: "Banana" },
    { lo: 5, hi: 6, count: 2, name: "Cherry" },
  ];
  const bracketY = rowY + 30;
  const groupSpans = groups.map((g) => ({
    x1: slotLeft0 + slotW * g.lo,
    x2: slotLeft0 + slotW * (g.hi + 1),
  }));

  // ---- beat3: abstracted 7-box slot row (generalising beyond the fruit) ---
  const boxSize = 28,
    boxGap = 12,
    boxN = 7;
  const boxTotal = boxN * boxSize + (boxN - 1) * boxGap;
  const boxLeft0 = 540 - boxTotal / 2;
  const boxLefts = Array.from({ length: boxN }, (_, i) => boxLeft0 + i * (boxSize + boxGap));
  const boxY = 436;
  const barBoxD = boxLefts
    .filter((_, i) => slotIsBar[i])
    .map((x) => roundRectD(x, boxY, boxSize, boxSize, 6))
    .join(" ");
  const starBoxD = boxLefts
    .filter((_, i) => !slotIsBar[i])
    .map((x) => roundRectD(x, boxY, boxSize, boxSize, 6))
    .join(" ");

  // ---- beat5: LEFT "3 bundles" (blank tiles) vs RIGHT "3 children" (named) ---
  const tileW = 64,
    tileH = 50,
    tileGap = 16,
    tileN = 3;
  const tileTotal = tileN * tileW + (tileN - 1) * tileGap;
  const tileRow = (cx: number) => {
    const left0 = cx - tileTotal / 2;
    const lefts = [0, 1, 2].map((i) => left0 + i * (tileW + tileGap));
    return { lefts, centers: lefts.map((x) => x + tileW / 2) };
  };
  const leftTiles = tileRow(270);
  const rightTiles = tileRow(810);
  const tileY = 214;
  const names = ["Amit", "Bina", "Chetan"];

  // ---- beat6: guardrail chip (dynamic width from the longer language) -----
  const guardLine1 = t(
    "Unlabelled equal groups → force ÷ (number of groups)!",
    "Unlabelled equal groups → ÷ (groups ki ginti) zaroori!"
  );
  const guardLine2 = t(
    "Labelled recipients → no division needed",
    "Labelled recipients → division ki zaroorat nahi"
  );
  const guardLine3 = t(
    "(distributing to labelled recipients = the star/bar model from Tool 2!)",
    "(labelled recipients ko distribute karna = Tool 2 ka star/bar model!)"
  );
  const guardSize = 16;
  const guardW =
    Math.max(
      0.5 * guardSize * guardLine1.length,
      0.5 * guardSize * guardLine2.length,
      0.5 * 13 * guardLine3.length
    ) + 60;
  const guardX = 540 - guardW / 2;
  const guardY = 380;
  const guardH = 120;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={22} fill={RED} script>
          {t("Stars & bars, then grouping vs distribution", "Stars & bars, phir grouping vs distribution")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-3, TOOL 2 ===================== */}

      {/* beat 0 — heading */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={112} size={19} fill={INK} weight={700}>
          {t("Tool 2: selection WITH repetition.", "Tool 2: repetition ke saath selection.")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.6)}
        d={lineD(400, 126, 680, 126)}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />

      {/* beat 1 — setup: n=3 fruit types, then explicitly NOT nCr / NOT nʳ */}
      {chipLefts.map((x, i) => (
        <Draw
          key={`ch${i}`}
          on={aOn && beat >= 1}
          delay={dl(1, 0 + i * 0.8)}
          d={roundRectD(x, chipY, chipW, chipH, 10)}
          stroke={INK}
          sw={1.8}
          dur={0.5}
        />
      ))}
      {chipCenters.map((x, i) => (
        <Fade key={`chl${i}`} on={aOn && beat >= 1} delay={dl(1, 0.5 + i * 0.8)}>
          <T x={x} y={175} size={14} fill={INK} weight={700}>
            {fruitNames[i]}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.6)}>
        <T x={540} y={216} size={16} fill={INK} weight={600}>
          {t(
            "pick r items from n types - repeats OK, order ignored",
            "n types se r items pick karo - repeat OK, order ignored"
          )}
        </T>
      </Fade>
      {notSegs.map((s, i) => (
        <Fade key={`ns${i}`} on={aOn && beat >= 1} delay={dl(1, 3.4 + i * 0.5)}>
          <T x={notXs[i]} y={notY} size={notSize} fill={s.fill} weight={700} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 3.9)}
        d={crossD(notXs[0], notY - 0.78 * notSize, notWidths[0], 1.09 * notSize)}
        stroke={RED}
        sw={1.8}
        dur={0.3}
      />
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 5.5)}
        d={crossD(notXs[2], notY - 0.78 * notSize, notWidths[2], 1.09 * notSize)}
        stroke={RED}
        sw={1.8}
        dur={0.3}
      />

      {/* beat 2 — THE MODEL: 5 stars, 2 bars, one row of 7 slots */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={284} size={16} fill={INK} weight={600}>
          {t(
            "5 identical stars, split by n-1 = 2 bars into 3 groups",
            "5 identical stars, n-1 = 2 bars se 3 groups mein split"
          )}
        </T>
      </Fade>
      {slotCenters.map((cx, i) =>
        slotIsBar[i] ? (
          <Draw
            key={`slot${i}`}
            on={aOn && beat >= 2}
            delay={dl(2, 0.6 + i * 0.3)}
            d={lineD(cx, rowY - 22, cx, rowY + 22)}
            stroke={INK}
            sw={3.4}
            dur={0.35}
          />
        ) : (
          // A filled shape can't use Draw's on/off — Draw only animates
          // strokeDashoffset, never the static `fill` attribute, so a
          // filled Draw paints permanently regardless of beat/erase state
          // (the same failure mode as the CRITICAL GOTCHA's custom-wrapper
          // opacity, just via `fill` instead). Fade (real opacity) is the
          // correct primitive for a filled shape.
          <Fade key={`slot${i}`} on={aOn && beat >= 2} delay={dl(2, 0.6 + i * 0.3)}>
            <Path d={starD(cx, rowY, starR)} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.6} />
          </Fade>
        )
      )}
      {groupSpans.map((g, i) => (
        <Draw
          key={`gb${i}`}
          on={aOn && beat >= 2}
          delay={dl(2, 3.0 + i * 0.3)}
          d={lineD(g.x1, bracketY, g.x2, bracketY)}
          stroke={AMBER_DARK}
          sw={2}
          dur={0.4}
        />
      ))}
      {groups.map((g, i) => (
        <Fade key={`gl${i}`} on={aOn && beat >= 2} delay={dl(2, 3.9 + i * 0.25)}>
          <T x={(groupSpans[i].x1 + groupSpans[i].x2) / 2} y={366} size={14} fill={INK} weight={700}>
            {`${g.name}: ${g.count}`}
          </T>
        </Fade>
      ))}

      {/* beat 3 — THE REFRAME: arrangement = selection, count slot placements */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={400} size={19} fill={GREEN} weight={700}>
          {t("Every arrangement = one valid selection", "Har arrangement = ek valid selection")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0.9)}
        d={starBoxD}
        stroke={INK}
        sw={1.8}
        dur={0.7}
      />
      {/* filled boxes need Fade (real opacity), not Draw — see the star
          fix above for why a filled Draw would leak past its beat */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.5)}>
        <Path d={barBoxD} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.4)}>
        <T x={540} y={490} size={16} fill={AMBER_DARK} weight={700}>
          {"r + (n-1) = 5 + 2 = 7 " + t("slots total", "total slots")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 3.3)}>
        <T x={540} y={530} size={19} fill={GREEN} weight={800}>
          {t(
            "Choose 2 of 7 slots for bars → count arrangements!",
            "7 slots mein 2 bars choose karo → arrangements ginte hain!"
          )}
        </T>
      </Fade>

      {/* ===================== Group B — beats 4-6, TOOL 3 ===================== */}

      {/* beat 4 — heading */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={112} size={19} fill={INK} weight={700}>
          {t("Tool 3: grouping vs distribution.", "Tool 3: grouping vs distribution.")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 0.6)}
        d={lineD(400, 126, 680, 126)}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />

      {/* beat 5 — same 12 books, two different structures */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={162} size={17} fill={INK} weight={600}>
          {t("Same 12 books, two different structures:", "Same 12 books, do alag structures:")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.8)}>
        <T x={270} y={196} size={17} fill={AMBER_DARK} weight={700}>
          {t("divide into 3 bundles", "3 bundles mein divide karo")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 1.3)}
        d={leftTiles.lefts.map((x) => roundRectD(x, tileY, tileW, tileH, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.1)}>
        <T x={540} y={245} size={14} fill={MUTED} weight={700}>
          {t("vs", "vs")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.4)}>
        <T x={810} y={196} size={17} fill={AMBER_DARK} weight={700}>
          {t("give to 3 children", "3 bachon ko do")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.9)}
        d={rightTiles.lefts.map((x) => roundRectD(x, tileY, tileW, tileH, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      {names.map((nm, i) => (
        <Fade key={`nm${i}`} on={bOn && beat >= 5} delay={dl(5, 3.6 + i * 0.2)}>
          <T x={rightTiles.centers[i]} y={244} size={16} fill={INK} weight={700}>
            {nm}
          </T>
        </Fade>
      ))}
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.3)}>
        <T x={270} y={286} size={13} fill={MUTED}>
          {t("bundles = unlabelled piles", "bundles = unlabelled piles")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.6)}>
        <T x={810} y={286} size={13} fill={MUTED}>
          {t("children = named recipients", "children = named recipients")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 5.2)}>
        <T x={540} y={322} size={18} fill={AMBER_DARK} weight={700}>
          {t("Same numbers (12, 3) - different STRUCTURE", "Same numbers (12, 3) - structure alag hai")}
        </T>
      </Fade>

      {/* beat 6 (red-margin guardrail) */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 0)}>
        <Rect x={guardX} y={guardY} width={guardW} height={guardH} rx={16} fill={CREAM} />
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(guardX, guardY, guardW, guardH, 16)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.0)}>
        <T x={540} y={guardY + 32} size={guardSize} fill={RED} weight={700}>
          {guardLine1}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={guardY + 60} size={guardSize} fill={RED} weight={700}>
          {guardLine2}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.3)}>
        <T x={540} y={guardY + 90} size={13} fill={AMBER_DARK}>
          {guardLine3}
        </T>
      </Fade>
    </Scene>
  );
}
