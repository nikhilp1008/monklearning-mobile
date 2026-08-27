/**
 * M11 Ch06 · Section 23 — "Dividing objects into equal unlabelled groups"
 * FIFTH section of Subtopic 3 "Combinations" (Sec22 proved Pascal's rule +
 * forced include/exclude; this section is the SAME "count as if labelled,
 * then divide by the redundant relabelling factor" over-counting argument as
 * Sec14's alike-objects n!/p! derivation — just applied to whole GROUPS
 * instead of individual repeated letters). Canvas 1080×620 · safe x36–1044,
 * y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md. "g" is a
 * symbolic/variable exponent on (m!) throughout beats 1-3 → real Unicode
 * superscript letter "(m!)ᵍ" (same device already used for variable
 * exponents elsewhere, e.g. Ch01Sec37/40/42/45's "aᵖ bᵍ / cʳ"); beat 4's
 * "(4!)³" is a literal numeric exponent → real superscript digit, native to
 * Anek, no fallback issue.
 *
 * Beats (board_reveal_at_english [0,7.59,27.05,43.35,55.98,71.34],
 * hinglish [0,8.7,26.97,40.45,51.88,66.39]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat===1, erased at beat>=2 — THE TELESCOPING SETUP]
 *  1 g LABELLED group boxes ("Group 1","Group 2","⋯","Group g") drawn in
 *    sequence; the running product "nCm × (n-m)Cm × ⋯" is written out, then
 *    expanded one factorial layer ("n!/(m!(n-m)!) × (n-m)!/(m!(n-2m)!) × ⋯")
 *    with the two cancelling (n-m)! instances colour-matched amber + slashed
 *    — the telescoping made visible, not asserted — landing "n!/(m!)ᵍ"
 *  [group A erased at beat>=2 — full board freed for group B]
 *  [group B: bOn = beat===2, erased at beat>=3 — THE OVER-COUNTING INSIGHT]
 *  2 two tile rows that are physically IDENTICAL — they differ only in
 *    which number sits under which tile (a pure relabelling) — both funnel
 *    via drawn arrows into ONE merged row of blank (unlabelled) tiles,
 *    mirroring Sec14's tagged-rows-collapse mechanic exactly, but applied
 *    to whole groups instead of single repeated letters
 *  [group B erased at beat>=3 — full board freed for group C]
 *  [group C: never erased, three accumulating stages — lands, verifies,
 *   then guards]
 *  3 (HIGH, formulaOn = beat>=3) recall "n!/(m!)ᵍ ÷ g!" then the boxed
 *    final "= n!/((m!)ᵍ · g!)" + checkmark
 *  4 (workedOn = beat>=4) worked check: 12 books, 3 unlabelled groups of 4
 *    → "12!/((4!)³·3!)" → "34,650 ÷ 3! =" boxed "5,775" + checkmark
 *  5 (guardOn = beat>=5, red-margin guardrail) two small tile rows contrast
 *    "3 unlabelled piles" (blank identical tiles, → ÷g!) vs "3 NAMED
 *    recipients" (tiles tagged Amit/Bina/Chetan, → no ÷g!) — a 2-line red
 *    chip: "Distinct RECIPIENTS are labelled — no divide by g!" / "Division
 *    vs distribution — the classic exam trap."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 21, red)                                     | T mid  | x~234..846 y43..81
 *  b0 | title underline flourish (amber)                                  | Draw  | x300..780 y94
 *  [group A: aOn = beat===1]
 *  a1 | header "n objects, g equal groups of size m..." (17,ink)          | T mid | x~268..812 y91..109
 *  a1 | 4 boxes "Group 1/2/⋯/g" (84×50) + connecting arrows                | Draw  | x330..750 y156..206
 *    (boxY=156, not the "natural" 140 — a Draw path's dash-offset hides its
 *    STROKE only; a fully-retracted closed rounded-rect can still leave a
 *    hairline seam pixel at its own path-start point while erased. y156
 *    keeps that seam point clear of group C's beat-3 recall line, which
 *    later reuses this x-band at y~142.)
 *  a1 | box labels (15/22,ink,w700)                                       | T mid | per-box y~186
 *  a1 | product line "nCm × (n-m)Cm × ⋯" (20,ink,w700)                     | T mid | x455..625 y225..247
 *  a1 | telescoping expansion, 5 segments (17,ink/amber-dk)                 | T st  | x370..710 y273..291
 *  a1 | 2 cancel slashes through the (n-m)! terms (amber-dk)                 | Draw  | x446..481 / 531..566 y274..291
 *  a1 | cancel caption "(n-m)! cancels...)" (13,amber-dk)                    | T mid | x364..716 y308..322
 *  a1 | result "n!/(m!)ᵍ" (24,green,w800)                                    | T mid | x492..588 y337..363
 *  a1 | result caption "(g groups, LABELLED...)" (13,muted)                   | T mid | x394..686 y378..392
 *  [group A erased at beat>=2]
 *  [group B: bOn = beat===2]
 *  b2 | header "g groups UNLABELLED - relabelling..." (16,ink)               | T mid | x~276..804 y91..109
 *  b2 | row L: 3 tiles (60×50) numbered "1,2,3"                                | Draw/T| x149..361 y136..186
 *  b2 | swap caption "(swap which physical pile...)" (13,amber-dk)             | T mid | x410..670 y153..167
 *  b2 | row R: 3 tiles (60×50) numbered "2,1,3"                                | Draw/T| x719..931 y136..186
 *  b2 | arrow L→merged, arrow R→merged (amber-dk)                              | Draw  | x255..500 / x580..825 y196..240
 *  b2 | merged row: 3 blank tiles (60×50, unlabelled)                          | Draw  | x434..646 y245..295
 *  b2 | caption "SAME physical division..." (17,green,w700)                    | T mid | x336..744 y307..325
 *  b2 | punchline "2 of the g!=6 relabellings..." (14,amber-dk,w600)            | T mid | x288..792 y347..362
 *  [group B erased at beat>=3]
 *  [group C: formulaOn=beat>=3 / workedOn=beat>=4 / guardOn=beat>=5, never erased]
 *  c3 | header "Divide the labelled count by g!..." (16.5,ink)                 | T mid | x~268..812 y91..109
 *  c3 | recall line "n!/(m!)ᵍ" (ink) "÷ g!" (red) (21,w800)                    | T st  | x466..614 y126..149
 *  c3 | hero box (green, rounded)                                             | Draw  | x399..681 y176..238
 *  c3 | hero text "= n!/((m!)ᵍ · g!)" (25,green,w800)                          | T mid | x434..646 y208..224
 *  c3 | checkmark (green)                                                     | Draw  | x695..715 y202..218
 *  c3 | caption "(g equal groups of size m)" (13,muted)                       | T mid | x449..631 y250..264
 *  c4 | header "Verify: 12 books..." (14.5,ink)                                | T mid | x~285..795 y283..298
 *  c4 | line1 "12!/((4!)³·3!)" (18,ink,w700)                                    | T mid | x477..603 y310..330
 *  c4 | line2 "34,650"(ink) " ÷ 3! ="(red) (19,w800)                             | T st  | x435..559 y365..386
 *  c4 | hero4 box (green,rounded) + "5,775" (24,green,w800)                       | T/Draw| x571..659 y348..396
 *  c4 | checkmark (green)                                                        | Draw  | x668..684 y365..381
 *  c5 | LEFT: 3 blank tiles (38×32, "unlabelled piles")                          | Draw  | x183..317 y422..454
 *  c5 | LEFT caption "3 unlabelled piles -> ÷ g!" (12.5,green,w600)               | T mid | x144..356 y467..478
 *  c5 | "vs" (14,muted)                                                          | T mid | x~532..548 y438..448
 *  c5 | RIGHT: 3 named tiles (54×32, Amit/Bina/Chetan)                           | Draw/T| x739..921 y422..454
 *  c5 | RIGHT caption "3 NAMED recipients -> no ÷ g!" (12.5,red,w600)             | T mid | x714..946 y467..478
 *  c5 | guardrail chip (cream/red, 2 lines, w~452 h78)                           | Chip  | x314..766 y494..572
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
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

export default function M11Ch06Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (the labelled telescoping setup) and Group B (the over-counting
  // insight) each own the FULL board for exactly one beat and are then fully
  // erased (opacity 0, never dimmed-and-overlaid) so Group C's three
  // accumulating stages — formula lands, worked check, guardrail — can use
  // the freed space from beat 3 onward. Each element's own `on` is bounded
  // to its beat window directly (never a wrapper div's opacity), so the
  // verifier's Fade-opacity visibility check — which walks up to the
  // nearest g.sc-fade, not an arbitrary ancestor — sees every erasure
  // correctly; seeking back into an earlier beat correctly restores it.
  const aOn = beat === 1;
  const bOn = beat === 2;
  const formulaOn = beat >= 3;
  const workedOn = beat >= 4;
  const guardOn = beat >= 5;

  // ---- beat1: 4 labelled-group boxes ("Group 1","Group 2","⋯","Group g") ----
  const gBoxW = 84,
    gBoxH = 50,
    gGap = 28,
    gN = 4;
  const gTotal = gN * gBoxW + (gN - 1) * gGap;
  const gLeft0 = 540 - gTotal / 2;
  const gLefts = [0, 1, 2, 3].map((i) => gLeft0 + i * (gBoxW + gGap));
  const gRights = gLefts.map((x) => x + gBoxW);
  const gCenters = gLefts.map((x) => x + gBoxW / 2);
  // y=156 (not the more "natural" 140) is deliberate: a Draw path's dash-
  // offset hides its STROKE, not its geometry, and a fully-retracted closed
  // rounded-rect can leave a hairline seam pixel at its own path-start point
  // even while erased (aOn=false). Group C's beat-3 recall line later reuses
  // this exact x-band at y~142 — placing these box tops at 156 keeps every
  // box's path-start point (x+10, 156) clear of that later text's ink box
  // (bottom ≈149) instead of landing inside it.
  const gBoxY = 156;
  const gLabels = [
    t("Group 1", "Group 1"),
    t("Group 2", "Group 2"),
    "⋯",
    t("Group g", "Group g"),
  ];

  // ---- beat1 telescoping expansion segments (anchor start, contiguous) ----
  const teleSegs = [
    { text: "= n!/(m!", fill: INK },
    { text: "(n-m)!", fill: AMBER_DARK },
    { text: ") × ", fill: INK },
    { text: "(n-m)!", fill: AMBER_DARK },
    { text: "/(m!(n-2m)!) × ⋯", fill: INK },
  ];
  const teleSize = 17;
  const teleWidths = teleSegs.map((s) => 0.5 * teleSize * s.text.length);
  const teleTotal = teleWidths.reduce((a, b) => a + b, 0);
  let teleCursor = 540 - teleTotal / 2;
  const teleXs = teleWidths.map((w) => {
    const x = teleCursor;
    teleCursor += w;
    return x;
  });
  const teleY = 281;
  // the two amber (n-m)! segments are indices 1 and 3 — short cancel slashes
  const slash1 = lineD(teleXs[1] + 8, teleY + 5, teleXs[1] + teleWidths[1] - 8, teleY - 12);
  const slash2 = lineD(teleXs[3] + 8, teleY + 5, teleXs[3] + teleWidths[3] - 8, teleY - 12);

  // ---- beat1 recall segments reused in beat3 header line ----
  const recallSegs = [
    { text: "n!/(m!)ᵍ", fill: INK },
    { text: "  ÷ g!", fill: RED },
  ];
  const recallSize = 21;
  const recallWidths = recallSegs.map((s) => 0.5 * recallSize * s.text.length);
  const recallTotal = recallWidths.reduce((a, b) => a + b, 0);
  let recallCursor = 540 - recallTotal / 2;
  const recallXs = recallWidths.map((w) => {
    const x = recallCursor;
    recallCursor += w;
    return x;
  });

  // ---- beat2: two "relabelled" tile rows collapsing into one blank row ----
  const rBoxW = 60,
    rBoxH = 50,
    rGap = 16,
    rN = 3;
  const rTotal = rN * rBoxW + (rN - 1) * rGap;
  const rowGeom = (cx: number) => {
    const left0 = cx - rTotal / 2;
    const lefts = [0, 1, 2].map((i) => left0 + i * (rBoxW + rGap));
    return { lefts, rights: lefts.map((x) => x + rBoxW), centers: lefts.map((x) => x + rBoxW / 2) };
  };
  const rowL = rowGeom(255);
  const rowR = rowGeom(825);
  const rowM = rowGeom(540);
  const rowY = 136;
  const mergedY = 245;
  const rowLLabels = ["1", "2", "3"];
  const rowRLabels = ["2", "1", "3"]; // 1 and 2 swapped — the relabelling

  // ---- beat3 hero formula box ----
  const heroText = "= n!/((m!)ᵍ · g!)";
  const heroSize = 25;
  const heroTextW = 0.5 * heroSize * heroText.length;
  const heroBoxH = 62;
  const heroBoxW = heroTextW + 70;
  const heroBoxX = 540 - heroBoxW / 2;
  const heroBoxY = 176;

  // ---- beat4 worked example: "34,650" (ink) " ÷ 3! =" (red) + boxed "5,775" ----
  const line2Segs = [
    { text: "34,650", fill: INK },
    { text: " ÷ 3! =", fill: RED },
  ];
  const line2Size = 19;
  // 0.58 (not the usual 0.5 sans estimate) — bold (w800) digits at this size
  // render measurably wider than the flat estimate; verified against the
  // real rendered box after the first pass (see verify loop notes).
  const line2Widths = line2Segs.map((s) => 0.58 * line2Size * s.text.length);
  const line2SegGap = 8;
  const line2Total = line2Widths.reduce((a, b) => a + b, 0) + line2SegGap;
  const gapToRes = 26;
  const resWidth = 0.5 * 24 * 5; // "5,775"
  let line2Cursor = 540 - (line2Total + gapToRes + resWidth) / 2;
  const line2Xs = line2Widths.map((w) => {
    const x = line2Cursor;
    line2Cursor += w + line2SegGap;
    return x;
  });
  const resX = line2Cursor + gapToRes;
  const hero4Pad = 14;
  const hero4BoxX = resX - hero4Pad;
  const hero4BoxW = resWidth + 2 * hero4Pad;
  const hero4BoxH = 48;
  const line2Y = 380;
  const hero4BoxY = line2Y - 24 - 8;

  // ---- beat5 guardrail: LEFT unlabelled piles vs RIGHT named recipients ----
  const iconRow = (cx: number, bw: number, n: number, gap: number) => {
    const total = n * bw + (n - 1) * gap;
    const left0 = cx - total / 2;
    const lefts = Array.from({ length: n }, (_, i) => left0 + i * (bw + gap));
    return { lefts, rights: lefts.map((x) => x + bw), centers: lefts.map((x) => x + bw / 2) };
  };
  const leftIcons = iconRow(250, 38, 3, 10);
  const rightIcons = iconRow(830, 54, 3, 10);
  const iconY = 422;
  const iconH = 32;
  const names = ["Amit", "Bina", "Chetan"];

  const chipLine1 = t(
    "Distinct RECIPIENTS are labelled — no divide by g!",
    "Distinct RECIPIENTS labelled hote hain — g! se divide mat karo."
  );
  const chipLine2 = t(
    "Division vs distribution — the classic exam trap.",
    "Division vs distribution — sabse common exam trap."
  );
  const chipSize = 15.5;
  const chipW = Math.max(0.5 * chipSize * chipLine1.length, 0.5 * chipSize * chipLine2.length) + 56;
  const chipX = 540 - chipW / 2;
  const chipY = 494;
  const chipH = 78;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={21} fill={RED} script>
          {t(
            "Grouping: why the extra ÷ (number of equal groups)!",
            "Grouping: extra ÷ (kitne equal groups) kyun aata hai!"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(300, 94, 780, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beat 1, THE TELESCOPING SETUP ===================== */}

      <Fade on={aOn} delay={dl(1, 0.0)}>
        <T x={540} y={104} size={17} fill={INK} weight={600}>
          {t(
            "n objects, g equal groups of size m (n = g·m) — label them first:",
            "n objects, g equal groups (size m, n = g·m) — pehle label karo:"
          )}
        </T>
      </Fade>

      {/* 4 labelled boxes with connecting arrows */}
      {gLefts.map((x, i) => (
        <Draw
          key={`gb${i}`}
          on={aOn}
          delay={dl(1, 0.9 + i * 1.1)}
          d={roundRectD(x, gBoxY, gBoxW, gBoxH, 10)}
          stroke={INK}
          sw={2}
          dur={0.7}
        />
      ))}
      {gLabels.map((lab, i) => (
        <Fade key={`gl${i}`} on={aOn} delay={dl(1, 1.6 + i * 1.1)}>
          <T x={gCenters[i]} y={i === 2 ? 188 : 186} size={i === 2 ? 22 : 15} fill={INK} weight={700}>
            {lab}
          </T>
        </Fade>
      ))}
      {[0, 1, 2].map((i) => (
        <Draw
          key={`ga${i}`}
          on={aOn}
          delay={dl(1, 2.0 + i * 1.1)}
          d={arrowD(gRights[i] + 2, 181, gLefts[i + 1] - 2, 181)}
          stroke={AMBER_DARK}
          sw={1.8}
          dur={0.4}
        />
      ))}

      {/* the running product — at least the first couple of factors */}
      <Fade on={aOn} delay={dl(1, 6.6)}>
        <T x={540} y={241} size={20} fill={INK} weight={700}>
          nCm × (n-m)Cm × ⋯
        </T>
      </Fade>

      {/* expand one factorial layer — the telescoping made visible */}
      {teleSegs.map((s, i) => (
        <Fade key={`ts${i}`} on={aOn} delay={dl(1, 7.6 + i * 0.3)}>
          <T x={teleXs[i]} y={teleY} size={teleSize} fill={s.fill} weight={700} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw on={aOn} delay={dl(1, 9.1)} d={slash1} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={aOn} delay={dl(1, 9.4)} d={slash2} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={aOn} delay={dl(1, 9.9)}>
        <T x={540} y={315} size={13} fill={AMBER_DARK} weight={600}>
          {t(
            "(the (n-m)! cancels — same pattern all the way down)",
            "((n-m)! cancel hota hai — yehi pattern aage bhi chalta hai)"
          )}
        </T>
      </Fade>

      {/* the telescoped result */}
      <Fade on={aOn} delay={dl(1, 10.7)}>
        <T x={540} y={350} size={24} fill={GREEN} weight={800}>
          n!/(m!)ᵍ
        </T>
      </Fade>
      <Fade on={aOn} delay={dl(1, 11.4)}>
        <T x={540} y={385} size={13} fill={MUTED}>
          {t(
            "(g groups, LABELLED — this over-counts, next up)",
            "(g groups, LABELLED — yeh over-count karta hai, aage dekhte hain)"
          )}
        </T>
      </Fade>

      {/* ===================== Group B — beat 2, THE OVER-COUNTING INSIGHT ===================== */}

      <Fade on={bOn} delay={dl(2, 0.0)}>
        <T x={540} y={104} size={16} fill={INK} weight={600}>
          {t(
            "The g groups are UNLABELLED — relabelling gives the same division:",
            "g groups UNLABELLED hain — relabel karo, division wahi rehta hai:"
          )}
        </T>
      </Fade>

      {/* row L: physical piles numbered 1,2,3 */}
      <Draw
        on={bOn}
        delay={dl(2, 0.8)}
        d={rowL.lefts.map((x) => roundRectD(x, rowY, rBoxW, rBoxH, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      {rowLLabels.map((lab, i) => (
        <Fade key={`rl${i}`} on={bOn} delay={dl(2, 1.5 + i * 0.2)}>
          <T x={rowL.centers[i]} y={167.8} size={20} fill={INK} weight={800}>
            {lab}
          </T>
        </Fade>
      ))}

      <Fade on={bOn} delay={dl(2, 2.3)}>
        <T x={540} y={163} size={13} fill={AMBER_DARK} weight={700}>
          {t("(swap which pile is called '1')", "('1' konsa pile hai, woh swap karo)")}
        </T>
      </Fade>

      {/* row R: the SAME physical piles, numbers 1 and 2 swapped */}
      <Draw
        on={bOn}
        delay={dl(2, 2.7)}
        d={rowR.lefts.map((x) => roundRectD(x, rowY, rBoxW, rBoxH, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      {rowRLabels.map((lab, i) => (
        <Fade key={`rr${i}`} on={bOn} delay={dl(2, 3.4 + i * 0.2)}>
          <T x={rowR.centers[i]} y={167.8} size={20} fill={INK} weight={800}>
            {lab}
          </T>
        </Fade>
      ))}

      <Draw
        on={bOn}
        delay={dl(2, 4.3)}
        d={arrowD(255, 200, 500, 240)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />
      <Draw
        on={bOn}
        delay={dl(2, 4.8)}
        d={arrowD(825, 200, 580, 240)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />

      {/* merged row: same piles, no numbers at all — the one real division */}
      <Draw
        on={bOn}
        delay={dl(2, 5.3)}
        d={rowM.lefts.map((x) => roundRectD(x, mergedY, rBoxW, rBoxH, 10)).join(" ")}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.8}
      />

      <Fade on={bOn} delay={dl(2, 6.0)}>
        <T x={540} y={316} size={17} fill={GREEN} weight={700}>
          {t(
            "SAME physical division — only the NUMBERS moved!",
            "SAME physical division — sirf NUMBERS badle!"
          )}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(2, 6.7)}>
        <T x={540} y={352} size={14} fill={AMBER_DARK} weight={600}>
          {t(
            "2 of the g! = 6 relabellings shown — ALL collapse like this.",
            "g! = 6 relabellings mein se 2 dikhaye — SAAB aise collapse hote."
          )}
        </T>
      </Fade>

      {/* ===================== Group C — beats 3-5, LANDS · VERIFIES · GUARDS ===================== */}

      {/* beat 3 (HIGH) — the formula lands */}
      <Fade on={formulaOn} delay={dl(3, 0.0)}>
        <T x={540} y={104} size={16.5} fill={INK} weight={600}>
          {t(
            "Divide the labelled count by g! to remove the over-count:",
            "Labelled count ko g! se divide karo, over-count hataane ke liye:"
          )}
        </T>
      </Fade>
      {recallSegs.map((s, i) => (
        <Fade key={`rc${i}`} on={formulaOn} delay={dl(3, 0.9 + i * 0.5)}>
          <T x={recallXs[i]} y={142} size={recallSize} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={formulaOn}
        delay={dl(3, 2.1)}
        d={roundRectD(heroBoxX, heroBoxY, heroBoxW, heroBoxH, 16)}
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={formulaOn} delay={dl(3, 3.0)}>
        <T x={540} y={216} size={heroSize} fill={GREEN} weight={800}>
          {heroText}
        </T>
      </Fade>
      <Draw on={formulaOn} delay={dl(3, 3.6)} d={checkD(704, 208, 16)} stroke={GREEN} sw={3} dur={0.4} />
      <Fade on={formulaOn} delay={dl(3, 4.2)}>
        <T x={540} y={260} size={13} fill={MUTED}>
          {t("(g equal groups of size m)", "(g equal groups, size m)")}
        </T>
      </Fade>

      {/* beat 4 — worked check: 12 books into 3 unlabelled groups of 4 */}
      <Fade on={workedOn} delay={dl(4, 0.0)}>
        <T x={540} y={294} size={14.5} fill={INK} weight={600}>
          {t(
            "Verify: 12 books into three unlabelled groups of 4 (n=12, m=4, g=3):",
            "Verify karo: 12 books, teen unlabelled groups of 4 (n=12, m=4, g=3):"
          )}
        </T>
      </Fade>
      <Fade on={workedOn} delay={dl(4, 0.8)}>
        <T x={540} y={324} size={18} fill={INK} weight={700}>
          12!/((4!)³·3!)
        </T>
      </Fade>
      {line2Segs.map((s, i) => (
        <Fade key={`l2${i}`} on={workedOn} delay={dl(4, 1.8 + i * 0.4)}>
          <T x={line2Xs[i]} y={line2Y} size={line2Size} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={workedOn}
        delay={dl(4, 2.6)}
        d={roundRectD(hero4BoxX, hero4BoxY, hero4BoxW, hero4BoxH, 12)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={workedOn} delay={dl(4, 3.3)}>
        <T x={resX + resWidth / 2} y={line2Y} size={24} fill={GREEN} weight={800}>
          5,775
        </T>
      </Fade>
      <Draw
        on={workedOn}
        delay={dl(4, 3.8)}
        d={checkD(hero4BoxX + hero4BoxW + 16, line2Y - 15, 14)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />

      {/* beat 5 (red-margin guardrail) — unlabelled piles vs named recipients */}
      <Draw
        on={guardOn}
        delay={dl(5, 0.0)}
        d={leftIcons.lefts.map((x) => roundRectD(x, iconY, 38, iconH, 8)).join(" ")}
        stroke={GREEN}
        sw={2}
        dur={0.6}
      />
      <Fade on={guardOn} delay={dl(5, 0.8)}>
        <T x={250} y={471.9} size={12.5} fill={GREEN} weight={600}>
          {t("3 unlabelled piles → ÷ g!", "3 unlabelled piles → ÷ g!")}
        </T>
      </Fade>

      <Fade on={guardOn} delay={dl(5, 1.3)}>
        <T x={540} y={443} size={14} fill={MUTED} weight={700}>
          {t("vs", "vs")}
        </T>
      </Fade>

      <Draw
        on={guardOn}
        delay={dl(5, 1.6)}
        d={rightIcons.lefts.map((x) => roundRectD(x, iconY, 54, iconH, 8)).join(" ")}
        stroke={RED}
        sw={2}
        dur={0.6}
      />
      {names.map((nm, i) => (
        <Fade key={`nm${i}`} on={guardOn} delay={dl(5, 2.2 + i * 0.2)}>
          <T x={rightIcons.centers[i]} y={441.9} size={11.5} fill={RED} weight={700}>
            {nm}
          </T>
        </Fade>
      ))}
      <Fade on={guardOn} delay={dl(5, 3.2)}>
        <T x={830} y={471.9} size={12.5} fill={RED} weight={600}>
          {t("3 NAMED recipients → no ÷ g!", "3 NAMED recipients → ÷ g! nahi")}
        </T>
      </Fade>

      <Fade on={guardOn} delay={dl(5, 4.0)}>
        <Rect x={chipX} y={chipY} width={chipW} height={chipH} rx={16} fill={CREAM} />
      </Fade>
      <Draw
        on={guardOn}
        delay={dl(5, 4.0)}
        d={roundRectD(chipX, chipY, chipW, chipH, 16)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={guardOn} delay={dl(5, 4.8)}>
        <T x={540} y={chipY + 30} size={chipSize} fill={RED} weight={700}>
          {chipLine1}
        </T>
      </Fade>
      <Fade on={guardOn} delay={dl(5, 5.3)}>
        <T x={540} y={chipY + 58} size={chipSize} fill={RED} weight={700}>
          {chipLine2}
        </T>
      </Fade>
    </Scene>
  );
}
