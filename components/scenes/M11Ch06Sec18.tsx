/**
 * M11 Ch06 · Section 18 — "Pitfalls & pro-tips for permutations" — the
 * CLOSING section of Subtopic 2 "Permutations" (Sec10-17), a rapid
 * pitfalls/tips recap of everything taught there. Canvas 1080×620 · safe
 * x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md
 * ("tips" section_type: "a rapid sequence of ringed/boxed pitfalls, one per
 * beat, each with a wrong-vs-right pair if the JSON's note implies one").
 * Direct structural template: M11Ch06Sec9.tsx (the equivalent closer for
 * Subtopic 1) — same two-groups-of-3, notes-page card grid, red-for-mistake/
 * green-for-protip, erase-transition-between-groups shape, copied closely.
 *
 * 6 pitfall/tip cards do not fit on the board simultaneously at readable
 * size, so — exactly like Sec9 — they build as TWO groups of 3 stacked
 * "notes page" cards: group A (pitfalls 1-3) builds across beats 1-3, then
 * erases; group B (pitfalls 4-5 + the pro-tip) builds across beats 4-6 in
 * the same freed row geometry and is the final, persisting group. Cards 1-5
 * are red/warning (mistakes); card 6 (the pro-tip) is green/positive.
 * Callbacks: card1→Sec10 (podium "order matters" + a visualized swap test),
 * card2→Sec11/12/14/16 (SAMOSA repeated-letter divide-out), card3→Sec14
 * (circular n! vs (n-1)!, necklace ÷2), card4→Sec4/11 (repetition-allowed nʳ
 * vs no-repeat nPr fork), card5→Sec15 (TOGETHER block / NOT-TOGETHER gap),
 * card6→Sec14/17 (fix one seat to kill rotation, the universal circular
 * trick).
 *
 * Beats (board_reveal_at_english [0,7.85,27.73,39.08,54.27,65.54,82.01],
 * hinglish [0,7.85,26.2,36.86,48.81,60.07,77.23]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 1..3, erased at beat>=4]
 *  1 card1 (row0): Pitfall 1 — order confusion (nPr when order doesn't
 *    matter); mini podium icon (Sec10 callback) + a visualized swap test
 *    "AB ≠ BA → order matters"
 *  2 card2 (row1): Pitfall 2 — forgetting to divide for alike objects;
 *    two repeated-letter "S" tiles underlined (SAMOSA callback) + crossed
 *    "n!" → checked "n!/(p!·q!·s!⋯)"
 *  3 card3 (row2, guardrail): Pitfall 3 — circular slips (n! instead of
 *    (n-1)!, or forgetting ÷2 for necklaces); circle+mirror-axis icon
 *    (Sec14 necklace-flip callback) + crossed "n!" → checked "(n-1)!"
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final group, never erased]
 *  4 card4 (row0): Pitfall 4 — the repetition fork (defaulting to nPr when
 *    repetition is allowed); 3 repetition-boxes icon (Sec4/11 callback) +
 *    crossed "nPr" → checked "nʳ"
 *  5 card5 (row1): Pitfall 5 — restrictions (together→block, not
 *    together→gaps); block+gap icon (Sec15 callback)
 *  6 card6 (row2, GREEN guardrail, the positive closer): Pro-tip — fix one
 *    object on a circle to kill rotation, collapsing it to linear; circle
 *    with one highlighted/ringed dot icon (Sec14/17 callback) + green chip
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 * Shared row geometry, reused verbatim from Sec9 (both groups reuse
 * identical rows; box x0=60..1020):
 *  row0 top=108 H=140 bottom=248 cy=178 | title y150 detail y193 caption y226
 *  row1 top=272 H=140 bottom=412 cy=342 | title y314 detail y357 caption y390
 *  row2 top=436 H=140 bottom=576 cy=506 | title y478 detail y521 caption y554
 *  (icon column x~90..152, text column x210..~1000 — disjoint by design so
 *  icon glyphs never collide with title/detail/caption text regardless of y)
 *
 *  always | title (script 24, red)                    | T mid  | x~200..880 y39..82 (hinglish wider)
 *  b0 | title underline flourish (amber)               | Draw   | x350..730 y94
 *  [group A, aOn = beat 1..3, erased at beat>=4]
 *  b1 | card1 box (960×140)                             | Draw  | x60..1020 y108..248
 *  b1 | podium icon (3 staggered bars)                    | Draw | x100..140 y174..200
 *  b1 | title "Order confusion" (19,red,w800)              | T start| x210..~430 y150
 *  b1 | detail "Using nPr when order doesn't matter" (16,ink)| T start| x210..~590 y193
 *  b1 | caption "Swap test: AB ≠ BA → order matters" (mixed) | T start| x210..~460 y226
 *  b2 | card2 box                                            | Draw  | x60..1020 y272..412
 *  b2 | 2 "S" tiles + underline (SAMOSA repeat callback)        | Draw/T| x100..138 y317..335
 *  b2 | title "Forgot to divide for repeats" (19,red,w800)       | T start| x210..~610 y314
 *  b2 | detail "Writing n! for a word like SAMOSA" (16,ink)        | T start| x210..~490 y357
 *  b2 | caption crossed "n!"→checked "n!/(p!·q!·s!⋯)"                | T/Draw| x210..~410 y390
 *  b3 | card3 box (guardrail)                                       | Draw | x60..1020 y436..576
 *  b3 | circle+mirror-axis icon (Sec14 necklace callback)              | Draw | x106..134 y492..520
 *  b3 | title "Circular slips" (19,red,w800)                          | T start| x210..~430 y478
 *  b3 | detail "n! instead of (n-1)!, or forgetting ÷2..." (16,ink)      | T start| x210..~650 y521
 *  b3 | caption crossed "n!"→checked "(n-1)!"                            | T/Draw| x210..~340 y554
 *  [group A erased at beat>=4]
 *  [group B, bOn = beat>=4, final group]
 *  b4 | card4 box                                                        | Draw | x60..1020 y108..248
 *  b4 | 3 repetition boxes, each "n" (Sec4/11 callback)                    | Draw/T| x96..143 y158..171
 *  b4 | title "Repetition fork missed" (19,red,w800)                       | T start| x210..~590 y150
 *  b4 | detail "Defaulting to nPr when repeats are allowed" (16,ink)         | T start| x210..~650 y193
 *  b4 | caption crossed "nPr"→checked "nʳ"                                    | T/Draw| x210..~310 y226
 *  b5 | card5 box                                                                 | Draw | x60..1020 y272..412
 *  b5 | block "(AB)" + gap "_" icon (Sec15 callback)                                | Draw/T| x96..146 y318..336
 *  b5 | title "Restriction reflex missed" (19,red,w800)                            | T start| x210..~610 y314
 *  b5 | detail "Together → block (× internal); not together → gaps" (16,ink)          | T start| x210..~640 y357
 *  b5 | caption "Glue = one unit × k!; gaps = fill from outside" (14,muted)              | T start| x210..~560 y390
 *  b6 | card6 box (GREEN, positive closer)                                               | Draw | x60..1020 y436..576
 *  b6 | circle + 1 highlighted/ringed dot icon ("fix one object")                          | Draw | x106..134 y492..520
 *  b6 | title "Pro-tip: fix one object" (19,green,w800)                                     | T start| x210..~600 y478
 *  b6 | chip "Fix one seat on a circle → it turns linear" (green, w620 h46)                   | Chip | x210..830 y498..544
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
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, circleD, pointOnCircle, checkD, lineD } from "./math-kit";

export default function M11Ch06Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (pitfalls 1-3) is erased once group B (pitfalls 4-5 + pro-tip,
  // the final "notes page") starts at beat 4. Each element's own `on` is
  // bounded to its beat window (rather than a wrapper div's opacity) so the
  // verifier's Fade-opacity visibility check — which walks up to the nearest
  // g.sc-fade, not an arbitrary ancestor — sees the erasure too; seeking back
  // into an earlier beat correctly restores it.
  const aOn = beat >= 1 && beat < 4;
  const bOn = beat >= 4;

  // shared row geometry (see layout-plan header) — reused verbatim from Sec9
  const ROW0 = { top: 108, h: 140, cy: 178, title: 150, detail: 193, caption: 226 };
  const ROW1 = { top: 272, h: 140, cy: 342, title: 314, detail: 357, caption: 390 };
  const ROW2 = { top: 436, h: 140, cy: 506, title: 478, detail: 521, caption: 554 };
  const BOX_X = 60;
  const BOX_W = 960;

  // ---- card1 icon: mini podium (Sec10/11 callback, "order matters") ----
  const podiumSteps = [
    { dx: 0, h: 16 },
    { dx: 14, h: 26 },
    { dx: 28, h: 10 },
  ];
  const podiumBase = ROW0.cy + 22; // 200
  const podiumPath = podiumSteps
    .map((s) => roundRectD(100 + s.dx, podiumBase - s.h, 12, s.h, 3))
    .join(" ");

  // ---- card1 caption: the swap-test visual, computed segment cursor ----
  const swapSegs = [
    { text: "Swap test: ", size: 13, weight: 600, fill: MUTED },
    { text: "AB", size: 14, weight: 800, fill: INK },
    { text: " ≠ ", size: 16, weight: 800, fill: RED },
    { text: "BA", size: 14, weight: 800, fill: INK },
    { text: " → order matters", size: 13, weight: 700, fill: RED },
  ];
  // Bold (weight>=800) glyphs render noticeably wider than the base 0.5×size×chars
  // estimate — over-estimate with a heavier multiplier plus a flat gap between
  // segments so consecutive tokens never touch.
  let swapCursor = 210;
  const swapXs = swapSegs.map((s) => {
    const x = swapCursor;
    const mult = s.weight >= 800 ? 0.62 : 0.52;
    swapCursor += mult * s.size * s.text.length + 8;
    return x;
  });

  // ---- card2 icon: two repeated "S" tiles + shared underline (SAMOSA) ----
  const samosaSqY = ROW1.cy - 25; // 317
  const samosaTilesPath =
    roundRectD(100, samosaSqY, 16, 16, 3) + " " + roundRectD(120, samosaSqY, 16, 16, 3);
  const samosaUnderline = lineD(98, samosaSqY + 18, 138, samosaSqY + 18);

  // ---- card3 icon: circle + mirror-axis + 2 dots (Sec14 necklace ÷2) ----
  const c3Cx = 120;
  const c3Cy = ROW2.cy; // 506
  const c3R = 14;
  const c3Top = pointOnCircle(c3Cx, c3Cy, c3R, Math.PI / 2);
  const c3Bot = pointOnCircle(c3Cx, c3Cy, c3R, -Math.PI / 2);
  const c3Dot1 = pointOnCircle(c3Cx, c3Cy, c3R * 0.65, Math.PI / 2);
  const c3Dot2 = pointOnCircle(c3Cx, c3Cy, c3R * 0.65, -Math.PI / 2);

  // ---- card4 icon: 3 equal repetition boxes, each "n" (Sec4/11 callback) ----
  const repBoxXs = [96, 113, 130];
  const repBoxY = ROW0.cy - 20; // 158
  const repBoxPath = repBoxXs.map((x) => roundRectD(x, repBoxY, 13, 13, 3)).join(" ");

  // ---- card5 icon: glued block "(AB)" + gap token "_" (Sec15 callback) ----
  const blockX = 96;
  const blockY = ROW1.cy - 24; // 318
  const blockPath = roundRectD(blockX, blockY, 26, 16, 4);

  // ---- card6 icon: circle + one highlighted/ringed dot ("fix one object") ----
  const c6Cx = 120;
  const c6Cy = ROW2.cy;
  const c6R = 14;
  const c6Top = pointOnCircle(c6Cx, c6Cy, c6R, Math.PI / 2);
  const c6Right = pointOnCircle(c6Cx, c6Cy, c6R, 0);
  const c6Bot = pointOnCircle(c6Cx, c6Cy, c6R, -Math.PI / 2);
  const c6Left = pointOnCircle(c6Cx, c6Cy, c6R, Math.PI);

  return (
    <Scene>
      {/* title always-on — this IS the JSON's own heading, so beat 0 has no
          separate gated text beyond the underline flourish below */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Where permutation marks leak away", "Permutation ke marks yahin leak hote hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(350, 94, 730, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-3 ===================== */}

      {/* --- Card 1 (row0): Pitfall 1 — order confusion / swap test --- */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={aOn && beat >= 1} delay={dl(1, 0.6)} d={podiumPath} stroke={INK} sw={1.8} dur={0.6} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.3)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Order confusion", "Order ka confusion")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.7)}>
        <T x={210} y={ROW0.detail} size={16} fill={INK} weight={600} anchor="start">
          {t("Using nPr when order doesn't matter", "Order na matter kare, phir bhi nPr")}
        </T>
      </Fade>
      {swapSegs.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, 2.1 + i * 0.15)}>
          <T x={swapXs[i]} y={ROW0.caption} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}

      {/* --- Card 2 (row1): Pitfall 2 — forgetting to divide for repeats --- */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={aOn && beat >= 2} delay={dl(2, 0.6)} d={samosaTilesPath} stroke={RED} sw={1.6} dur={0.5} />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.0)}>
        <T x={108} y={samosaSqY + 12} size={12} fill={RED} weight={800}>
          S
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.15)}>
        <T x={128} y={samosaSqY + 12} size={12} fill={RED} weight={800}>
          S
        </T>
      </Fade>
      <Draw on={aOn && beat >= 2} delay={dl(2, 1.4)} d={samosaUnderline} stroke={RED} sw={2} dur={0.4} />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.9)}>
        <T x={210} y={ROW1.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Forgot to divide for repeats", "Repeats ke liye divide bhoolna")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.3)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t("Writing n! for a word like SAMOSA", "SAMOSA jaise word ke liye n! likhna")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.7)}>
        <T x={210} y={ROW1.caption} size={18} fill={RED} weight={800} anchor="start">
          n!
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 3.0)}
        d={crossD(210, ROW1.caption - 0.78 * 18, 18, 1.09 * 18)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 3.2)}>
        <T x={238} y={ROW1.caption} size={16} fill={MUTED} anchor="start">
          {"→"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 3.4)}>
        <T x={256} y={ROW1.caption} size={18} fill={GREEN} weight={800} anchor="start">
          n!/(p!·q!·s!⋯)
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 3.7)}
        d={checkD(398, ROW1.caption - 6, 16)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* --- Card 3 (row2, guardrail): Pitfall 3 — circular slips --- */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={aOn && beat >= 3} delay={dl(3, 0.6)} d={circleD(c3Cx, c3Cy, c3R)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0.9)}
        d={lineD(c3Top.x, c3Top.y, c3Bot.x, c3Bot.y)}
        stroke={RED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.1)}>
        <Circle cx={c3Dot1.x} cy={c3Dot1.y} r={2} fill={INK} />
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.2)}>
        <Circle cx={c3Dot2.x} cy={c3Dot2.y} r={2} fill={INK} />
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.6)}>
        <T x={210} y={ROW2.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Circular slips", "Circular mein slip")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.0)}>
        <T x={210} y={ROW2.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "n! instead of (n-1)!, or forgetting ÷2 for necklaces",
            "n! ki jagah (n-1)!, ya necklace ke liye ÷2 bhoolna"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.4)}>
        <T x={210} y={ROW2.caption} size={18} fill={RED} weight={800} anchor="start">
          n!
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 2.7)}
        d={crossD(210, ROW2.caption - 0.78 * 18, 18, 1.09 * 18)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.9)}>
        <T x={238} y={ROW2.caption} size={16} fill={MUTED} anchor="start">
          {"→"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 3.1)}>
        <T x={256} y={ROW2.caption} size={18} fill={GREEN} weight={800} anchor="start">
          (n-1)!
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 3.4)}
        d={checkD(326, ROW2.caption - 6, 16)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* ===================== Group B — beats 4-6 (final, never erased) ===================== */}

      {/* --- Card 4 (row0): Pitfall 4 — the repetition fork --- */}
      <Draw
        on={bOn}
        delay={dl(4, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={bOn} delay={dl(4, 0.6)} d={repBoxPath} stroke={INK} sw={1.6} dur={0.5} />
      {repBoxXs.map((x, i) => (
        <Fade key={i} on={bOn} delay={dl(4, 1.0 + i * 0.1)}>
          <T x={x + 6.5} y={repBoxY + 9.7} size={9} fill={INK} weight={800}>
            n
          </T>
        </Fade>
      ))}
      <Fade on={bOn} delay={dl(4, 1.6)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Repetition fork missed", "Repetition fork miss ho gaya")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.0)}>
        <T x={210} y={ROW0.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "Defaulting to nPr when repeats are allowed",
            "Repeats allowed hone par bhi nPr use karna"
          )}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.4)}>
        <T x={210} y={ROW0.caption} size={16} fill={RED} weight={800} anchor="start">
          nPr
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(4, 2.7)}
        d={crossD(210, ROW0.caption - 0.78 * 16, 24, 1.09 * 16)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={bOn} delay={dl(4, 2.9)}>
        <T x={244} y={ROW0.caption} size={14} fill={MUTED} anchor="start">
          {"→"}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 3.1)}>
        <T x={260} y={ROW0.caption} size={16} fill={GREEN} weight={800} anchor="start">
          nʳ
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(4, 3.4)}
        d={checkD(290, ROW0.caption - 6, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* --- Card 5 (row1): Pitfall 5 — restrictions: block / gap --- */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={bOn && beat >= 5} delay={dl(5, 0.6)} d={blockPath} stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.0)}>
        <T x={109} y={blockY + 11.7} size={9} fill={INK} weight={800}>
          AB
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.3)}>
        <T x={140} y={ROW1.cy - 8} size={16} fill={MUTED} weight={700}>
          _
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.7)}>
        <T x={210} y={ROW1.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Restriction reflex missed", "Restriction reflex miss ho gaya")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.1)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "Together → block (× internal); not together → gaps",
            "Together → block (× internal); not together → gaps"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.5)}>
        <T x={210} y={ROW1.caption} size={14} fill={MUTED} anchor="start">
          {t(
            "Glue = one unit × k!; gaps = fill from outside",
            "Glue = ek unit × k!; gaps = bahar se fill karo"
          )}
        </T>
      </Fade>

      {/* --- Card 6 (row2, GREEN): Pro-tip — fix one object on a circle --- */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Draw on={bOn && beat >= 6} delay={dl(6, 0.6)} d={circleD(c6Cx, c6Cy, c6R)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.0)}>
        <Circle cx={c6Right.x} cy={c6Right.y} r={2.2} fill={INK} />
        <Circle cx={c6Bot.x} cy={c6Bot.y} r={2.2} fill={INK} />
        <Circle cx={c6Left.x} cy={c6Left.y} r={2.2} fill={INK} />
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.2)}>
        <Circle cx={c6Top.x} cy={c6Top.y} r={4} fill={GREEN} />
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 1.4)}
        d={circleD(c6Top.x, c6Top.y, 8)}
        stroke={GREEN}
        sw={1.4}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.8)}>
        <T x={210} y={ROW2.title} size={19} fill={GREEN} weight={800} anchor="start">
          {t("Pro-tip: fix one object", "Pro-tip: ek object fix karo")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.3)}>
        <Chip x={210} y={498} w={620} h={46} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t(
            "Fix one seat on a circle → it turns linear",
            "Circle par ek seat fix karo → ab linear ban gaya"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
