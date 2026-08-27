/**
 * M11 Ch06 · Section 34 — "Pitfalls & pro-tips for selections & distribution"
 * — the CLOSING section of Subtopic 4 "Total Selections, Grouping &
 * Distribution (Stars and Bars)" (Sec27-33), a rapid pitfalls/tips recap of
 * everything taught there. Canvas 1080×620 · safe x36–1044, y30–596. Spec:
 * SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("tips" section_type).
 * Direct structural templates: M11Ch06Sec9.tsx, M11Ch06Sec18.tsx and
 * M11Ch06Sec26.tsx (the equivalent closers for Subtopics 1-3) — same
 * two-groups-of-3, notes-page card grid, erase-transition-between-groups
 * shape, red-for-mistake/green-for-protip. Copied closely (Sec26's exact
 * conventions preferred per brief). Unlike Sec26, this section's JSON
 * guardrail flags (item3=Pitfall3, item6=the closer) land EXACTLY on the
 * template's row2 slots under the natural reveal order, so no row-index
 * deviation is needed here — it follows Sec9/Sec18's shape verbatim.
 *
 * All nCr/nPr here are SYMBOLIC (plain text, no super/subscript attempt),
 * per the notation doc. "Π(pᵢ+1)"-style products are written out as
 * "(p+1)(q+1)⋯" (Sec29's own convention) — no Π glyph, no subscript letters
 * (only digits have confirmed subscript coverage). "2ⁿ" and "nʳ" reuse the
 * superscript-letter precedent already established throughout this
 * subtopic (Sec4/27/29/31).
 *
 * Callbacks: card1→Sec27/29/31/32 (distinct 2ⁿ vs alike (p+1)(q+1)⋯, D/A
 * role badges echoing Sec26 card1's C/P badge convention), card2→Sec28/29/30
 * (stars-and-bars closed form vs the two OTHER wrong reflexes nCr/nʳ,
 * crossed/checked), card3→Sec27/28's own "identical items, distinct boxes"
 * framing (a recognition-cue icon: item boxed → arrow → star|bar|star),
 * card4→Sec23/28/31 (labelled-vs-unlabelled guardrail, U/L role badges),
 * card5→Sec27/29's own "incl. empty" formula caveat (a muted circle + "∅"
 * badge, echoing Sec9 card4's "0!" badge), card6→Sec30/33's give-one
 * (give-c) trick, generalized (an arrow delivering "c" into a box).
 *
 * Beats (board_reveal_at_english [0,9.13,25,41.81,52.57,66.99,79.7],
 * hinglish [0,8.28,23.47,39.77,48.9,63.23,76.97]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 1..3, erased at beat>=4]
 *  1 card1 (row0): Pitfall 1 — distinct 2ⁿ vs alike (p+1)(q+1)⋯, mixed up;
 *    D/A role badges (green=distinct, amber-dark=alike)
 *  2 card2 (row1): Pitfall 2 — wrong repetition model; crossed "nCr"/"nʳ"
 *    icon, checked "(n+r-1)C(r)" caption
 *  3 card3 (row2, guardrail): Pitfall 3 — the recognition cue: "identical
 *    items into distinct boxes" → stars & bars; item-in-box→star|bar|star
 *    icon
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final group, never erased]
 *  4 card4 (row0): Pitfall 4 — division vs distribution mixed up; U/L role
 *    badges (green=unlabelled÷g!, red=labelled-no÷)
 *  5 card5 (row1): Pitfall 5 — forgetting the empty case; muted circle + "∅"
 *    badge
 *  6 card6 (row2, GREEN guardrail, the positive closer): Pro-tip — pre-give
 *    c to every box first, then non-negative stars & bars; "c"-into-box
 *    arrow icon; green chip stating the generalized heuristic
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 * Shared row geometry (both groups reuse identical rows; box x0=60..1020),
 * reused verbatim from Sec9/Sec18/Sec26:
 *  row0 top=108 H=140 bottom=248 cy=178 | title y150 detail y193 caption y226
 *  row1 top=272 H=140 bottom=412 cy=342 | title y314 detail y357 caption y390
 *  row2 top=436 H=140 bottom=576 cy=506 | title y478 detail y521 caption y554
 *  (icon column x~84..168, text column x210..~1000 — disjoint by design)
 *
 *  always | title (script 24, red)                        | T mid  | x~250..830 y39..82 (hinglish wider)
 *  b0 | title underline flourish (amber)                   | Draw   | x350..730 y94
 *  [group A, aOn = beat 1..3, erased at beat>=4]
 *  b1 | card1 box (960×140)                                 | Draw  | x60..1020 y108..248
 *  b1 | "2ⁿ" badge (green) / "(p+1)" badge (amber-dk)         | T     | x99..129 y154..164 / x99..140 y198..212
 *  b1 | title "Distinct vs alike, mixed up" (19,red,w800)      | T st | x210..~600 y150
 *  b1 | detail "2ⁿ needs distinct objects..." (16)               | T st | x210..~680 y193
 *  b1 | caption "Distinct → 2ⁿ"(green) "Alike → (p+1)(q+1)⋯"(amb)  | T st | x210..~324 / x344..~506 y226
 *  b2 | card2 box                                              | Draw | x60..1020 y272..412
 *  b2 | "nCr" crossed (red) / "nʳ" crossed (red)                  | T/Draw| x107..133 y318 / x111..129 y366
 *  b2 | title "Wrong repetition model" (19,red,w800)               | T st | x210..~570 y314
 *  b2 | detail "With repetition: it's stars & bars..." (16,ink)       | T st | x210..~620 y357
 *  b2 | caption "(n+r-1)C(r)" (17,green,w800) + check                  | T/Draw| x210..~319 y390
 *  b3 | card3 box (guardrail)                                       | Draw | x60..1020 y436..576
 *  b3 | box+dot → arrow → star|bar|star icon                          | Draw/Fade | x98..166 y499..513
 *  b3 | title "The recognition cue" (19,red,w800)                     | T st | x210..~540 y478
 *  b3 | detail "'Identical items into distinct boxes'..." (16,ink)      | T st | x210..~740 y521
 *  b3 | caption "That wording is the signal..." (14,muted)                | T st | x210..~660 y554
 *  [group A erased at beat>=4]
 *  [group B, bOn = beat>=4, final group]
 *  b4 | card4 box (960×140)                                            | Draw | x60..1020 y108..248
 *  b4 | "U" circle r16 (green) / "L" circle r16 (red)                     | circ/T| x104..136 y138..170 / y186..218
 *  b4 | title "Division vs distribution, mixed up" (19,red,w800)          | T st | x210..~640 y150
 *  b4 | detail "Forgot ÷g!, or divided labelled..." (16,ink)                | T st | x210..~650 y193
 *  b4 | caption "U → ÷ g!"(green) "L → no ÷"(red)                            | T st | x210..~295 / x315..~380 y226
 *  b5 | card5 box                                                            | Draw | x60..1020 y272..412
 *  b5 | circle r18 (muted) + "∅" (18,ink)                                     | circ/T| x102..138 y324..360
 *  b5 | title "Forgetting the empty case" (19,red,w800)                        | T st | x210..~590 y314
 *  b5 | detail "2ⁿ and basic stars & bars both count..." (16,ink)                | T st | x210..~740 y357
 *  b5 | caption "The all-zero outcome is still valid" (14,muted)                   | T st | x210..~540 y390
 *  b6 | card6 box (GREEN guardrail, final closer)                                  | Draw | x60..1020 y436..576
 *  b6 | "c" label + arrow → box icon (green)                                        | T/Draw| x76..124 y492..516
 *  b6 | title "Pro-tip: pre-give the minimum first" (19,green,w800)                   | T st | x210..~640 y478
 *  b6 | chip "Every box ≥ c → give c to each..." (green, w~530 h46)                     | Chip | x210..740 y498..544
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  arrowD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD, lineD } from "./math-kit";

/** 5-point star as a fillable path — local device, same as Sec28/29/30's own
 * (SCENE_AUTHORING_MATHS.md: no special star/bar primitive exists or is
 * needed, a drawn glyph is enough). Used here only as a tiny reference icon
 * (card3's "items → boxes → stars & bars" recognition cue). */
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

export default function M11Ch06Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (pitfalls 1-3) is erased once group B (pitfalls 4-5 + the final
  // pro-tip) starts at beat 4. Each element's own `on` is bounded to its
  // beat window (rather than a wrapper div's opacity) so the verifier's
  // Fade-opacity visibility check — which walks up to the nearest g.sc-fade,
  // not an arbitrary ancestor — sees the erasure too; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 1 && beat < 4;
  const bOn = beat >= 4;

  // shared row geometry (see layout-plan header) — reused verbatim from Sec9/18/26
  const ROW0 = { top: 108, h: 140, cy: 178, title: 150, detail: 193, caption: 226 };
  const ROW1 = { top: 272, h: 140, cy: 342, title: 314, detail: 357, caption: 390 };
  const ROW2 = { top: 436, h: 140, cy: 506, title: 478, detail: 521, caption: 554 };
  const BOX_X = 60;
  const BOX_W = 960;

  // ---- card1 caption: two colour segments, cursor-laid to avoid overlap ----
  const c1Seg1 = "Distinct → 2ⁿ";
  const c1Seg2 = "Alike → (p+1)(q+1)⋯";
  const c1Size = 14;
  const c1Seg1W = 0.58 * c1Size * c1Seg1.length;
  const c1Seg2X = 210 + c1Seg1W + 20;

  // ---- card2 icon: crossed "nCr" / "nʳ" (both wrong reflexes) ----
  const c2Size = 15;
  const c2NCrW = 0.58 * c2Size * 3; // "nCr"
  const c2NrW = 0.58 * c2Size * 2; // "nʳ"

  // ---- card2 caption: checked "(n+r-1)C(r)" ----
  const c2CapText = "(n+r-1)C(r)";
  const c2CapSize = 17;
  const c2CapW = 0.58 * c2CapSize * c2CapText.length;

  // ---- card3 icon: item-in-box → arrow → star|bar|star ----
  const c3Cy = ROW2.cy;

  // ---- card4 caption: two colour segments ----
  const c4Seg1 = "U → ÷ g!";
  const c4Seg2 = "L → no ÷";
  const c4Size = 14;
  const c4Seg1W = 0.58 * c4Size * c4Seg1.length;
  const c4Seg2X = 210 + c4Seg1W + 20;

  return (
    <Scene>
      {/* title always-on — this IS the JSON's own heading, so beat 0 has no
          separate gated text beyond the underline flourish below */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Where these marks leak away", "Yeh marks yahin leak hote hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(350, 94, 730, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-3 ===================== */}

      {/* --- Card 1 (row0): Pitfall 1 — distinct 2ⁿ vs alike (p+1)(q+1)⋯ --- */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.6)}>
        <T x={120} y={ROW0.cy - 24} size={16} fill={GREEN} weight={800}>
          2ⁿ
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.1)}>
        <T x={120} y={ROW0.cy + 24} size={14} fill={AMBER_DARK} weight={800}>
          (p+1)
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.6)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Distinct vs alike, mixed up", "Distinct aur alike mein gadbad")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.0)}>
        <T x={210} y={ROW0.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "2ⁿ needs distinct objects; alike groups use (p+1)(q+1)⋯",
            "2ⁿ sirf distinct ke liye; alike groups (p+1)(q+1)⋯ use karte"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.4)}>
        <T x={210} y={ROW0.caption} size={c1Size} fill={GREEN} weight={700} anchor="start">
          {c1Seg1}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.6)}>
        <T x={c1Seg2X} y={ROW0.caption} size={c1Size} fill={AMBER_DARK} weight={700} anchor="start">
          {c1Seg2}
        </T>
      </Fade>

      {/* --- Card 2 (row1): Pitfall 2 — wrong repetition model --- */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={120} y={ROW1.cy - 24} size={c2Size} fill={RED} weight={800}>
          nCr
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.0)}
        d={crossD(120 - c2NCrW / 2, ROW1.cy - 24 - 0.78 * c2Size, c2NCrW, 1.09 * c2Size)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.4)}>
        <T x={120} y={ROW1.cy + 24} size={c2Size} fill={RED} weight={800}>
          nʳ
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.8)}
        d={crossD(120 - c2NrW / 2, ROW1.cy + 24 - 0.78 * c2Size, c2NrW, 1.09 * c2Size)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.2)}>
        <T x={210} y={ROW1.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Wrong repetition model", "Galat repetition model")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.6)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "With repetition: it's stars & bars, not nCr or nʳ",
            "Repetition ho toh: stars & bars chahiye, nCr ya nʳ nahi"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 3.0)}>
        <T x={210} y={ROW1.caption} size={c2CapSize} fill={GREEN} weight={800} anchor="start">
          {c2CapText}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 3.4)}
        d={checkD(210 + c2CapW + 16, ROW1.caption - 6, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* --- Card 3 (row2, guardrail): Pitfall 3 — the recognition cue --- */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0.5)}
        d={roundRectD(98, c3Cy - 8, 16, 16, 3)}
        stroke={INK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.9)}>
        <Circle cx={106} cy={c3Cy} r={2} fill={INK} />
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 1.2)}
        d={arrowD(118, c3Cy, 132, c3Cy)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.6)}>
        <Path d={starD(140, c3Cy, 6)} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.4} />
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 1.8)}
        d={lineD(150, c3Cy - 7, 150, c3Cy + 7)}
        stroke={INK}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.0)}>
        <Path d={starD(160, c3Cy, 6)} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.4} />
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.4)}>
        <T x={210} y={ROW2.title} size={19} fill={RED} weight={800} anchor="start">
          {t("The recognition cue", "Pehchaanne ka signal")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.8)}>
        <T x={210} y={ROW2.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "'Identical items into distinct boxes' → stars & bars",
            "'Identical items, distinct boxes' dikhe → stars & bars socho"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 3.2)}>
        <T x={210} y={ROW2.caption} size={14} fill={MUTED} anchor="start">
          {t(
            "That wording is the signal — reach for it directly",
            "Yehi wording signal hai — seedha wahi socho"
          )}
        </T>
      </Fade>

      {/* ===================== Group B — beats 4-6 (final, never erased) ===================== */}

      {/* --- Card 4 (row0): Pitfall 4 — division vs distribution mixed up --- */}
      <Draw
        on={bOn}
        delay={dl(4, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={bOn} delay={dl(4, 0.6)}>
        <Circle cx={120} cy={ROW0.cy - 24} r={16} stroke={GREEN} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={bOn} delay={dl(4, 0.9)}>
        <T x={120} y={ROW0.cy - 24 + 5} size={18} fill={GREEN} weight={800}>
          U
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.2)}>
        <Circle cx={120} cy={ROW0.cy + 24} r={16} stroke={RED} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.5)}>
        <T x={120} y={ROW0.cy + 24 + 5} size={18} fill={RED} weight={800}>
          L
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.9)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Division vs distribution, mixed up", "Division aur distribution mein gadbad")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.3)}>
        <T x={210} y={ROW0.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "Forgot ÷g!, or divided labelled recipients too",
            "÷g! bhoolna, ya labelled recipients ko bhi divide karna"
          )}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.7)}>
        <T x={210} y={ROW0.caption} size={c4Size} fill={GREEN} weight={700} anchor="start">
          {c4Seg1}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.9)}>
        <T x={c4Seg2X} y={ROW0.caption} size={c4Size} fill={RED} weight={700} anchor="start">
          {c4Seg2}
        </T>
      </Fade>

      {/* --- Card 5 (row1): Pitfall 5 — forgetting the empty case --- */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.6)}>
        <Circle cx={120} cy={ROW1.cy} r={18} stroke={MUTED} strokeWidth={1.8} fill="none" />
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.9)}>
        <T x={120} y={ROW1.cy + 6} size={18} fill={INK} weight={700}>
          ∅
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.3)}>
        <T x={210} y={ROW1.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Forgetting the empty case", "Empty case bhool jana")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.7)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "2ⁿ and basic stars & bars both count 'choose nothing'",
            "2ⁿ aur basic stars & bars dono mein 'kuch nahi liya' bhi shamil"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.1)}>
        <T x={210} y={ROW1.caption} size={14} fill={MUTED} anchor="start">
          {t(
            "The all-zero outcome is still one valid case",
            "All-zero outcome bhi ek valid case hai"
          )}
        </T>
      </Fade>

      {/* --- Card 6 (row2, GREEN guardrail): Pro-tip — pre-give the minimum --- */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.5)}>
        <T x={90} y={ROW2.cy - 14} size={13} fill={GREEN} weight={800}>
          c
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0.8)}
        d={arrowD(84, ROW2.cy, 100, ROW2.cy)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 1.2)}
        d={roundRectD(104, ROW2.cy - 10, 20, 20, 5)}
        stroke={GREEN}
        sw={2}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.7)}>
        <T x={210} y={ROW2.title} size={19} fill={GREEN} weight={800} anchor="start">
          {t("Pro-tip: pre-give the minimum first", "Pro-tip: pehle minimum de do")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.2)}>
        <Chip x={210} y={498} w={540} h={46} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t(
            "Every box ≥ c → give c to each, then non-neg stars & bars",
            "Har box ≥ c → sabko pehle c do, phir non-neg stars & bars"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
