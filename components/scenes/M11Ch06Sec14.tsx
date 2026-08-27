/**
 * M11 Ch06 · Section 14 — "Deriving the alike-objects and circular formulas"
 * FIFTH section of Subtopic 2 "Permutations". Canvas 1080×620 · safe
 * x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * TWO real derivations back to back, each a genuine over-counting argument —
 * every logical step is its own staged element, nothing skipped.
 *
 * Beats (board_reveal_at_english [0,8.36,27.99,39.51,58.71,74.84,84.99],
 * hinglish [0,6.91,26.37,38.14,55.81,68.18,76.89]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 0..2, erased at beat>=3 — DERIVATION 1, alike objects]
 *  1 THE p! ARGUMENT: two "tagged" rows (A1,A2,B and A2,A1,B — the p!=2 ways
 *    to tag-swap) both funnel via drawn arrows into ONE untagged row (A,A,B)
 *    — concretely shows 2 tagged orders collapsing into 1 real arrangement
 *  2 (MILESTONE formula) lands: "arrangements = n!/p!" boxed+checked, then
 *    the general multi-group form "n!/(p!·q!·s!⋯)" below
 *  [group A erased at beat>=3 — DERIVATION 2 starts, circular]
 *  [group B: bOn = beat 3 only, erased at beat>=4 — the concrete n=3 check]
 *  3 CONCRETE DIAGRAM: two circles (pointOnCircle), X fixed at top on both,
 *    Y/Z swapped between them — "X→Y→Z" vs "X→Z→Y", both clockwise — landing
 *    line "Fix X: only 2 distinct circles = (3-1)! = 2."
 *  [group B erased at beat>=4]
 *  [group C: cOn = beat 4 only, erased at beat>=5 — the general n argument]
 *  4 GENERAL ARGUMENT: one circle with 4 generic dots (pointOnCircle), read
 *    starting from each of the 4 seats → 4 different linear strings, all
 *    the same circle — generalizes beat 3's concrete n=3 check
 *  [group C erased at beat>=5]
 *  [group D: dOn = beat >= 5, final, never erased]
 *  5 (CENTERPIECE) real algebra: "circular = n!/n" → "= n(n-1)(n-2)⋯1 / n"
 *    (expand n!) → "= (n-1)(n-2)⋯1" (the n's cancel, amber-dark) → "= (n-1)!"
 *    (green) + a callback checkmark "matches n=3: (3-1)! = 2! = 2" tying back
 *    to beat 3's concrete count, then a clean boxed+checked restatement
 *    "circular arrangements = (n-1)!"
 *  6 guardrail (red chip + drawn mirror-flip icon): "Flip it over (necklace)?
 *    Divide by one more 2: (n-1)!/2."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                              | T mid | x~197..883 y38..82
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  b0 | title underline flourish (amber)                          | Draw | x350..730 y94
 *  b1 | intro "pretend the p copies are tagged" (17,ink)            | T mid | x330..750 y91..109
 *  b1 | row L tiles (54×54×3, tagged v1: A1,A2,B)                    | Draw | x162..348 y136..190
 *  b1 | row L labels (20,ink,w800)                                     | T mid| per-tile y170
 *  b1 | row R tiles (54×54×3, tagged v2: A2,A1,B)                       | Draw | x732..918 y136..190
 *  b1 | row R labels (20,ink,w800)                                        | T mid| per-tile y170
 *  b1 | swap label "(swap A1 and A2)" (13,amber-dk)                        | T mid| x485..595 y153..167
 *  b1 | arrow rowL → merged row (amber-dk)                                  | Draw | x290..465 y200..230
 *  b1 | arrow rowR → merged row (amber-dk)                                    | Draw | x615..790 y200..230
 *  b1 | merged row tiles (54×54×3, untagged A,A,B, amber-dk stroke)           | Draw | x447..633 y234..288
 *  b1 | merged row labels (20,ink,w800)                                        | T mid| per-tile y268
 *  b1 | caption "SAME arrangement..." (17,green,w700)                          | T mid| x?..? y301..319
 *  b1 | punchline "2 tagged orders..." (14,amber-dk,w600)                       | T mid| x?..? y338..357
 *  b2 | header "divide n! by the p! shuffles" (17,ink)                          | T mid| x330..750 y378..396
 *  b2 | hero formula "arrangements = n!/p!" (28,green,w800)                     | T mid| x400..680 y428..459
 *  b2 | hero box (green, rounded)                                              | Draw | x360..720 y414..482
 *  b2 | checkmark (green)                                                      | Draw | x732..748 y440..464
 *  b2 | general formula "n!" "/" "(p!·q!·s!⋯)" (24,ink/amber-dk,w800)            | T st | x448..632 y501..528
 *  b2 | caption "(one factorial per repeated group...)" (14,muted)               | T mid| x?..? y545..564
 *  [group A erased at beat>=3]
 *  [group B: bOn = beat==3, erased at beat>=4]
 *  b3 | header "fix X's seat..." (18,ink)                                        | T mid| x?..? y91..114
 *  b3 | left circle (r85, cx290 cy280) + X/Y/Z dots + labels                       | Draw | x205..375 y195..365
 *  b3 | right circle (r85, cx790 cy280) + X/Z/Y dots + labels                       | Draw | x705..875 y195..365
 *  b3 | "vs" (18,muted)                                                             | T mid| x531..549 y271..291
 *  b3 | left caption "X→Y→Z (clockwise)" (15,ink,w600)                              | T mid| x211..369 y381..397
 *  b3 | right caption "X→Z→Y (clockwise)" (15,ink,w600)                             | T mid| x711..869 y381..397
 *  b3 | landing "Fix X: only 2 distinct circles = (3-1)!=2." (20,green,w800)         | T mid| x295..785 y424..446
 *  b3 | underline (amber)                                                            | Draw | x290..790 y460
 *  b3 | checkmark (green)                                                            | Draw | x797..813 y431..455
 *  [group B erased at beat>=4]
 *  [group C: cOn = beat==4, erased at beat>=5]
 *  c4 | header "read the SAME circle from each seat" (17,ink)                        | T mid| x?..? y87..105
 *  c4 | circle (r65,cx540,cy215) + 4 dots + labels 1-4                                 | Draw | x475..605 y150..280
 *  c4 | 4 reading lines "1 → 1-2-3-4" etc (16,ink,w700)                                | T mid| x?..? y318..431
 *  c4 | caption "n different strings, SAME circle" (17,green,w700)                      | T mid| x?..? y447..465
 *  [group C erased at beat>=5]
 *  [group D: dOn = beat>=5, final]
 *  d5 | header "n! total, each circle counted n times" (17,ink)                        | T mid| x?..? y91..109
 *  d5 | L1 "circular = n!/n" (22,ink,w800) + annotation                                 | T st | x330..628 y133..157
 *  d5 | L2 "= n(n-1)(n-2)⋯1 / n" (22,ink,w800) + annotation                              | T st | x330..682 y178..202
 *  d5 | L3 "= (n-1)(n-2)⋯1" (22,amber-dk,w800) + annotation                              | T st | x330..627 y223..247
 *  d5 | L4 "= (n-1)!" (28,green,w800)                                                    | T st | x330..442 y268..299
 *  d5 | checkD + callback "matches n=3: (3-1)!=2!=2" (15,green,w700)                     | mix | x345..583 y320..336
 *  d5 | hero box (green,rounded)                                                         | Draw | x330..750 y370..440
 *  d5 | hero text "circular arrangements = (n-1)!" (24,green,w800)                        | T mid| x354..726 y391..412
 *  d5 | hero checkmark (green)                                                            | Draw | x762..778 y400..424
 *  d6 | mirror-flip icon (circle+axis line)                                                | Draw | x152..188 y479..515
 *  d6 | guardrail chip (cream/red, dynamic width)                                           | Chip | x~240..840 y470..524
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
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
import { roundRectD, circleD, pointOnCircle, checkD, lineD } from "./math-kit";

export default function M11Ch06Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Four erase-groups, one per phase of the two derivations. Group A is the
  // whole alike-objects derivation (beats 0-2, a diagram then its landed
  // formula, which fit the board together). Derivation 2 (circular) needs
  // three FULL-board phases in turn — the concrete n=3 diagram (group B,
  // beat 3 alone), the general n argument (group C, beat 4 alone), then the
  // final algebra + guardrail (group D, beats 5-6, never erased) — because
  // each phase's own diagram/derivation needs the full canvas; the beat-3
  // diagram is referenced back to only via a small text callback in beat 5,
  // per the CRITICAL gotcha each element's own `on` is bounded to its beat
  // window (never a wrapper div's opacity) so the verifier's Fade-opacity
  // check, which walks up to the nearest g.sc-fade, sees every erasure
  // correctly; seeking back into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 3;
  const bOn = beat >= 3 && beat < 4;
  const cOn = beat >= 4 && beat < 5;
  const dOn = beat >= 5;

  // ---- beat1 tile geometry (tagged rows + merged untagged row) ----
  const tileW = 54;
  const tileGap = 12;
  const tilePitch = tileW + tileGap;
  const rowLLeft = 255 - 1.5 * tilePitch; // 162
  const rowRLeft = 825 - 1.5 * tilePitch; // 732
  const mergedLeft = 540 - 1.5 * tilePitch; // 447
  const tileXs = (left: number) => [left, left + tilePitch, left + 2 * tilePitch];
  const tileCenters = (left: number) => tileXs(left).map((x) => x + tileW / 2);
  const rowLXs = tileXs(rowLLeft);
  const rowRXs = tileXs(rowRLeft);
  const mergedXs = tileXs(mergedLeft);
  const rowLCenters = tileCenters(rowLLeft);
  const rowRCenters = tileCenters(rowRLeft);
  const mergedCenters = tileCenters(mergedLeft);
  const rowLLabels = ["A1", "A2", "B"];
  const rowRLabels = ["A2", "A1", "B"];
  const mergedLabels = ["A", "A", "B"];
  const tileBoxD = (xs: number[], y: number) =>
    xs.map((x) => roundRectD(x, y, tileW, tileW, 10)).join(" ");

  // ---- beat2 general-formula segment geometry ----
  const genSegs = [
    { text: "n!", fill: INK },
    { text: "/", fill: INK },
    { text: "(p!·q!·s!⋯)", fill: AMBER_DARK },
  ];
  const genGap = 8;
  const genWidths = genSegs.map((s) => 0.5 * 24 * s.text.length);
  const genTotal = genWidths.reduce((a, b) => a + b, 0) + genGap * (genSegs.length - 1);
  let genCursor = 540 - genTotal / 2;
  const genXs = genWidths.map((w) => {
    const x = genCursor;
    genCursor += w + genGap;
    return x;
  });

  // ---- beat3 circular n=3 concrete geometry (pointOnCircle) ----
  const circCy = 280;
  const circR = 85;
  const leftCx = 290;
  const rightCx = 790;
  const labelR = circR + 22;
  const angX = Math.PI / 2;
  const angSecond = Math.PI / 2 - (2 * Math.PI) / 3;
  const angThird = Math.PI / 2 - (4 * Math.PI) / 3;
  // left circle: X, Y, Z clockwise
  const leftX = pointOnCircle(leftCx, circCy, circR, angX);
  const leftY = pointOnCircle(leftCx, circCy, circR, angSecond);
  const leftZ = pointOnCircle(leftCx, circCy, circR, angThird);
  const leftXLbl = pointOnCircle(leftCx, circCy, labelR, angX);
  const leftYLbl = pointOnCircle(leftCx, circCy, labelR, angSecond);
  const leftZLbl = pointOnCircle(leftCx, circCy, labelR, angThird);
  // right circle: X, Z, Y clockwise (Y/Z swapped vs left — the OTHER arrangement)
  const rightX = pointOnCircle(rightCx, circCy, circR, angX);
  const rightZ = pointOnCircle(rightCx, circCy, circR, angSecond);
  const rightY = pointOnCircle(rightCx, circCy, circR, angThird);
  const rightXLbl = pointOnCircle(rightCx, circCy, labelR, angX);
  const rightZLbl = pointOnCircle(rightCx, circCy, labelR, angSecond);
  const rightYLbl = pointOnCircle(rightCx, circCy, labelR, angThird);

  // ---- beat4 generic n-seat circle (pointOnCircle, 4 seats) ----
  const genCx = 540;
  const genCy = 215;
  const genR = 65;
  const genLabelR = genR + 18;
  const seatAngles = [0, 1, 2, 3].map((i) => Math.PI / 2 - (i * Math.PI) / 2);
  const seatPts = seatAngles.map((a) => pointOnCircle(genCx, genCy, genR, a));
  const seatLblPts = seatAngles.map((a) => pointOnCircle(genCx, genCy, genLabelR, a));
  const readings = ["1 → 1-2-3-4", "2 → 2-3-4-1", "3 → 3-4-1-2", "4 → 4-1-2-3"];

  // ---- beat6 guardrail chip: dynamic width from the longer language string ----
  const guardText = t(
    "Flip it over (necklace)? Divide by one more 2: (n-1)!/2.",
    "Palat sakte ho (necklace)? Ek aur 2 se divide: (n-1)!/2."
  );
  const guardW = Math.max(560, 0.5 * 16 * guardText.length + 40);
  const guardX = 540 - guardW / 2;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "Two corrections: identical objects, and the circle",
            "Do corrections: identical objects, aur circle"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.4)}
        d={lineD(350, 94, 730, 94)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* ============= Group A — beats 1-2, DERIVATION 1: alike objects ============= */}

      {/* beat 1 — the p! argument: two tagged rows collapse into one real row */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.0)}>
        <T x={540} y={104} size={17} fill={INK} weight={600}>
          {t(
            "Pretend the p alike copies are secretly tagged:",
            "Socho ki p alike copies secretly tagged hain:"
          )}
        </T>
      </Fade>

      <Draw on={aOn && beat >= 1} delay={dl(1, 0.8)} d={tileBoxD(rowLXs, 136)} stroke={INK} sw={2} dur={0.8} />
      {rowLLabels.map((lab, i) => (
        <Fade key={`rl${i}`} on={aOn && beat >= 1} delay={dl(1, 1.8 + i * 0.2)}>
          <T x={rowLCenters[i]} y={170} size={20} fill={INK} weight={800}>
            {lab}
          </T>
        </Fade>
      ))}

      <Draw on={aOn && beat >= 1} delay={dl(1, 2.6)} d={tileBoxD(rowRXs, 136)} stroke={INK} sw={2} dur={0.8} />
      {rowRLabels.map((lab, i) => (
        <Fade key={`rr${i}`} on={aOn && beat >= 1} delay={dl(1, 3.6 + i * 0.2)}>
          <T x={rowRCenters[i]} y={170} size={20} fill={INK} weight={800}>
            {lab}
          </T>
        </Fade>
      ))}

      <Fade on={aOn && beat >= 1} delay={dl(1, 4.6)}>
        <T x={540} y={163} size={13} fill={AMBER_DARK} weight={700}>
          {t("(swap A1 and A2)", "(A1 aur A2 swap karo)")}
        </T>
      </Fade>

      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 5.4)}
        d={arrowD(290, 200, 465, 230)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 6.2)}
        d={arrowD(790, 200, 615, 230)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />

      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 7.0)}
        d={tileBoxD(mergedXs, 234)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.8}
      />
      {mergedLabels.map((lab, i) => (
        <Fade key={`mg${i}`} on={aOn && beat >= 1} delay={dl(1, 8.0 + i * 0.2)}>
          <T x={mergedCenters[i]} y={268} size={20} fill={INK} weight={800}>
            {lab}
          </T>
        </Fade>
      ))}

      <Fade on={aOn && beat >= 1} delay={dl(1, 9.2)}>
        <T x={540} y={318} size={17} fill={GREEN} weight={700}>
          {t(
            "SAME arrangement — the tag was invisible!",
            "SAME arrangement — tag invisible tha!"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 10.0)}>
        <T x={540} y={352} size={14} fill={AMBER_DARK} weight={600}>
          {t(
            "2 tagged orders → 1 real one — that's p! = 2.",
            "2 tagged orders → 1 real wala — matlab p! = 2."
          )}
        </T>
      </Fade>

      {/* beat 2 — the MILESTONE formula lands, then the general multi-group form */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.0)}>
        <T x={540} y={396} size={17} fill={INK} weight={600}>
          {t(
            "Divide n! by the p! invisible shuffles:",
            "n! ko un p! invisible shuffles se divide karo:"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.0)}>
        <T x={540} y={450} size={28} fill={GREEN} weight={800}>
          arrangements = n!/p!
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 2.0)}
        d={roundRectD(360, 414, 360, 68, 16)}
        stroke={GREEN}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 3.0)}
        d={checkD(740, 448, 16)}
        stroke={GREEN}
        sw={3}
        dur={0.4}
      />
      {genSegs.map((s, i) => (
        <Fade key={`gen${i}`} on={aOn && beat >= 2} delay={dl(2, 4.0 + i * 0.3)}>
          <T x={genXs[i]} y={525} size={24} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 2} delay={dl(2, 5.4)}>
        <T x={540} y={560} size={14} fill={MUTED}>
          {t(
            "(one factorial per repeated group: p, q, s, ⋯)",
            "(har repeated group ka apna factorial: p, q, s, ⋯)"
          )}
        </T>
      </Fade>

      {/* ============= Group B — beat 3, the concrete n=3 circular check ============= */}

      <Fade on={bOn} delay={dl(3, 0.0)}>
        <T x={540} y={104} size={18} fill={INK} weight={600}>
          {t(
            "Fix X's seat — how many ways for Y and Z?",
            "X ki seat fix karo — Y, Z ke kitne tareeke?"
          )}
        </T>
      </Fade>

      {/* left circle: X → Y → Z clockwise */}
      <Draw on={bOn} delay={dl(3, 1.0)} d={circleD(leftCx, circCy, circR)} stroke={MUTED} sw={1.8} dur={0.7} />
      <Fade on={bOn} delay={dl(3, 1.9)}>
        <Circle cx={leftX.x} cy={leftX.y} r={6} fill={RED} />
      </Fade>
      <Fade on={bOn} delay={dl(3, 2.1)}>
        <Circle cx={leftY.x} cy={leftY.y} r={6} fill={INK} />
      </Fade>
      <Fade on={bOn} delay={dl(3, 2.3)}>
        <Circle cx={leftZ.x} cy={leftZ.y} r={6} fill={INK} />
      </Fade>
      <Fade on={bOn} delay={dl(3, 2.7)}>
        <T x={leftXLbl.x} y={leftXLbl.y + 5} size={16} fill={RED} weight={700}>
          X
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(3, 2.9)}>
        <T x={leftYLbl.x} y={leftYLbl.y + 5} size={16} fill={INK} weight={700}>
          Y
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(3, 3.1)}>
        <T x={leftZLbl.x} y={leftZLbl.y + 5} size={16} fill={INK} weight={700}>
          Z
        </T>
      </Fade>

      <Fade on={bOn} delay={dl(3, 3.5)}>
        <T x={540} y={286} size={18} fill={MUTED}>
          {t("vs", "vs")}
        </T>
      </Fade>

      {/* right circle: X → Z → Y clockwise (Y/Z swapped — the OTHER arrangement) */}
      <Draw on={bOn} delay={dl(3, 3.9)} d={circleD(rightCx, circCy, circR)} stroke={MUTED} sw={1.8} dur={0.7} />
      <Fade on={bOn} delay={dl(3, 4.8)}>
        <Circle cx={rightX.x} cy={rightX.y} r={6} fill={RED} />
      </Fade>
      <Fade on={bOn} delay={dl(3, 5.0)}>
        <Circle cx={rightZ.x} cy={rightZ.y} r={6} fill={INK} />
      </Fade>
      <Fade on={bOn} delay={dl(3, 5.2)}>
        <Circle cx={rightY.x} cy={rightY.y} r={6} fill={INK} />
      </Fade>
      <Fade on={bOn} delay={dl(3, 5.6)}>
        <T x={rightXLbl.x} y={rightXLbl.y + 5} size={16} fill={RED} weight={700}>
          X
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(3, 5.8)}>
        <T x={rightZLbl.x} y={rightZLbl.y + 5} size={16} fill={INK} weight={700}>
          Z
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(3, 6.0)}>
        <T x={rightYLbl.x} y={rightYLbl.y + 5} size={16} fill={INK} weight={700}>
          Y
        </T>
      </Fade>

      <Fade on={bOn} delay={dl(3, 6.6)}>
        <T x={leftCx} y={392} size={15} fill={INK} weight={600}>
          X → Y → Z ({t("clockwise", "clockwise")})
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(3, 7.0)}>
        <T x={rightCx} y={392} size={15} fill={INK} weight={600}>
          X → Z → Y ({t("clockwise", "clockwise")})
        </T>
      </Fade>

      <Fade on={bOn} delay={dl(3, 7.8)}>
        <T x={540} y={440} size={20} fill={GREEN} weight={800}>
          {t(
            "Fix X: only 2 distinct circles = (3-1)! = 2.",
            "X fix karo: sirf 2 distinct circles = (3-1)! = 2."
          )}
        </T>
      </Fade>
      <Draw on={bOn} delay={dl(3, 8.6)} d={lineD(290, 460, 790, 460)} stroke={AMBER} sw={2.2} dur={0.6} />
      <Draw on={bOn} delay={dl(3, 9.2)} d={checkD(805, 440, 16)} stroke={GREEN} sw={3} dur={0.4} />

      {/* ============= Group C — beat 4, the GENERAL n argument ============= */}

      <Fade on={cOn} delay={dl(4, 0.0)}>
        <T x={540} y={100} size={17} fill={INK} weight={600}>
          {t(
            "Read the SAME circle starting from each of its seats:",
            "Wahi circle padho, har seat se shuru karke:"
          )}
        </T>
      </Fade>

      <Draw on={cOn} delay={dl(4, 1.0)} d={circleD(genCx, genCy, genR)} stroke={MUTED} sw={1.8} dur={0.6} />
      {seatPts.map((p, i) => (
        <Fade key={`sp${i}`} on={cOn} delay={dl(4, 1.8 + i * 0.2)}>
          <Circle cx={p.x} cy={p.y} r={5.5} fill={INK} />
        </Fade>
      ))}
      {seatLblPts.map((p, i) => (
        <Fade key={`sl${i}`} on={cOn} delay={dl(4, 2.8 + i * 0.2)}>
          <T x={p.x} y={p.y + 5} size={15} fill={AMBER_DARK} weight={700}>
            {i + 1}
          </T>
        </Fade>
      ))}

      {readings.map((r, i) => (
        <Fade key={`rd${i}`} on={cOn} delay={dl(4, 4.0 + i * 0.6)}>
          <T x={540} y={330 + i * 32} size={16} fill={INK} weight={700}>
            {r}
          </T>
        </Fade>
      ))}

      <Fade on={cOn} delay={dl(4, 6.6)}>
        <T x={540} y={460} size={17} fill={GREEN} weight={700}>
          {t(
            "n different-looking strings — but the SAME circle.",
            "n alag dikhne wale strings — par circle wahi hai."
          )}
        </T>
      </Fade>

      {/* ============= Group D — beats 5-6, final: the algebra + guardrail ============= */}

      <Fade on={dOn} delay={dl(5, 0.0)}>
        <T x={540} y={104} size={17} fill={INK} weight={600}>
          {t(
            "n! linear arrangements total; each circle counted n times:",
            "Total n! linear arrangements; har circle n baar gina jaata hai:"
          )}
        </T>
      </Fade>

      <Fade on={dOn} delay={dl(5, 0.6)}>
        <T x={330} y={150} size={22} fill={INK} weight={800} anchor="start">
          circular = n!/n
        </T>
      </Fade>
      <Fade on={dOn} delay={dl(5, 0.9)}>
        <T x={522} y={150} size={13} fill={MUTED} anchor="start">
          {t("(n! linear total)", "(n! linear total)")}
        </T>
      </Fade>

      <Fade on={dOn} delay={dl(5, 1.6)}>
        <T x={330} y={195} size={22} fill={INK} weight={800} anchor="start">
          = n(n-1)(n-2)⋯1 / n
        </T>
      </Fade>
      <Fade on={dOn} delay={dl(5, 1.9)}>
        <T x={555} y={195} size={13} fill={MUTED} anchor="start">
          {t("(expand n!)", "(n! expand kiya)")}
        </T>
      </Fade>

      <Fade on={dOn} delay={dl(5, 2.6)}>
        <T x={330} y={240} size={22} fill={AMBER_DARK} weight={800} anchor="start">
          = (n-1)(n-2)⋯1
        </T>
      </Fade>
      <Fade on={dOn} delay={dl(5, 2.9)}>
        <T x={500} y={240} size={13} fill={MUTED} anchor="start">
          {t("(the n's cancel)", "(n-n cancel)")}
        </T>
      </Fade>

      <Fade on={dOn} delay={dl(5, 3.6)}>
        <T x={330} y={290} size={28} fill={GREEN} weight={800} anchor="start">
          = (n-1)!
        </T>
      </Fade>

      <Draw on={dOn} delay={dl(5, 4.2)} d={checkD(345, 326, 14)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={dOn} delay={dl(5, 4.4)}>
        <T x={365} y={331} size={15} fill={GREEN} weight={700} anchor="start">
          {t(
            "matches n=3: (3-1)! = 2! = 2",
            "n=3 se match: (3-1)! = 2! = 2"
          )}
        </T>
      </Fade>

      <Draw
        on={dOn}
        delay={dl(5, 5.2)}
        d={roundRectD(330, 370, 420, 70, 16)}
        stroke={GREEN}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={dOn} delay={dl(5, 6.2)}>
        <T x={540} y={412} size={24} fill={GREEN} weight={800}>
          {t("circular arrangements = (n-1)!", "circular arrangements = (n-1)!")}
        </T>
      </Fade>
      <Draw on={dOn} delay={dl(5, 6.8)} d={checkD(770, 412, 16)} stroke={GREEN} sw={3} dur={0.4} />

      {/* beat 6 — guardrail: flippable necklace divides out one more 2 */}
      <Draw
        on={dOn && beat >= 6}
        delay={dl(6, 0.3)}
        d={circleD(170, 497, 18)}
        stroke={MUTED}
        sw={1.8}
        dur={0.5}
      />
      <Draw
        on={dOn && beat >= 6}
        delay={dl(6, 0.7)}
        d={lineD(170, 479, 170, 515)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={dOn && beat >= 6} delay={dl(6, 1.1)}>
        <Circle cx={170} cy={488} r={2.6} fill={INK} />
      </Fade>
      <Fade on={dOn && beat >= 6} delay={dl(6, 1.3)}>
        <Circle cx={170} cy={506} r={2.6} fill={INK} />
      </Fade>
      <Fade on={dOn && beat >= 6} delay={dl(6, 1.6)}>
        <Chip x={guardX} y={470} w={guardW} h={54} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {guardText}
        </Chip>
      </Fade>
    </Scene>
  );
}
