/**
 * M11 Ch06 · Section 43 — "Pitfalls & pro-tips for applications" — the
 * CLOSING section of Subtopic 5 "Counting Applications & Advanced Tools"
 * (Sec35-42), a rapid pitfalls/tips recap of everything taught there — and
 * the last "content" subtopic before the chapter's Formula Recap + Cheat
 * Sheet. Canvas 1080×620 · safe x36–1044, y30–596. Spec:
 * SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("tips" section_type).
 * Direct structural templates: M11Ch06Sec9.tsx, M11Ch06Sec18.tsx,
 * M11Ch06Sec26.tsx and M11Ch06Sec34.tsx (the equivalent closers for
 * Subtopics 1-4) — same two-groups-of-3, notes-page card grid, erase-
 * transition-between-groups shape, red-for-mistake/green-for-protip.
 * Copied closely (Sec34 is the most recent — its exact conventions
 * preferred, per brief). This section's own JSON guardrail flags (item 4 =
 * Pitfall 3, item 7 = the closing pro-tip) land EXACTLY on the template's
 * row2 slots under the natural reveal order, so — like Sec9/Sec18 — no
 * row-index deviation from the template is needed.
 *
 * nCr/mCr here are SYMBOLIC (plain text, no super/subscript attempt), per
 * the notation doc. "∏(aᵢ+1)" is AVOIDED (unaudited, no scene in this
 * codebase uses it) — divisor products are written the established way,
 * "(a₁+1)(a₂+1)⋯" (Sec36/38/39's own convention). Dₙ/i!/(−1)ⁱ reuse the
 * plain-subscript/superscript devices already proven safe in Sec37/38/40/42.
 * "⌊ ⌋" floor brackets, "≠", "…", "−" (proper minus, not hyphen) and the
 * em dash "–"/"—" are all already used as literal board text elsewhere in
 * this subtopic (Sec37/38/40's own captions) — reused here on the same
 * basis. checkD/crossD are always DRAWN strokes, never a ✓/✗ text glyph.
 *
 * Callbacks: card1→Sec35/39/41 (nC3 vs the collinear-corrected nC3−mC3,
 * a triangle+vertices icon), card2→Sec36/41 (a prime factor dropped from
 * (a₁+1)(a₂+1)⋯ halves the count, a crossed-prime→"÷2" icon), card3→
 * Sec39/42 ((n−1)! vs n! for one digit in one place, reusing Sec18's own
 * crossed-n!→checked-(n-1)! badge pair, repurposed here for a different
 * reason), card4→Sec37/38/40/42 (derangement needs the full alternating
 * sum, not one subtraction; a mini letter/envelope icon reused from
 * Sec37/42), card5→Sec37/40 (Legendre's later prime-power terms still
 * count; a descending "staircase" icon with the later steps crossed),
 * card6→Sec35/36's "hard problems in costume" framing, generalized as the
 * closing heuristic (a magnifying-glass icon reused from Sec36's own).
 *
 * Beats (board_reveal_at_english [0,10.15,24.66,37.03,54.44,65.71,80.04],
 * hinglish [0,8.53,23.89,37.12,52.39,63.57,77.23]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 1..3, erased at beat>=4]
 *  1 card1 (row0): Pitfall 1 — ignoring collinear corrections; triangle +
 *    3-vertex icon (Sec35 callback), crossed "nC3" → checked "nC3 − mC3"
 *  2 card2 (row1): Pitfall 2 — incomplete prime factorisation; crossed-"p"
 *    circle → "÷2" icon (a dropped prime halves the count)
 *  3 card3 (row2, guardrail): Pitfall 3 — sum-of-numbers uses (n−1)! per
 *    digit per place, NOT n!; crossed "n!" → checked "(n−1)!" badge pair
 *    (Sec18's own device, reused for a different formula pair here)
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final group, never erased]
 *  4 card4 (row0): Pitfall 4 — derangement is not one subtraction; mini
 *    letter/envelope icon (Sec37/42 callback), crossed "n! − 1" → checked
 *    "Dₙ = n!Σ(−1)ⁱ/i!"
 *  5 card5 (row1): Pitfall 5 — Legendre: don't stop at the first term;
 *    descending staircase icon (later steps crossed), crossed "⌊n/p⌋ only"
 *    → checked "+ ⌊n/p²⌋ + ⌊n/p³⌋ + ⋯"
 *  6 card6 (row2, GREEN guardrail, the positive closer): Pro-tip — name
 *    the selection; magnifying-glass icon (Sec36 callback); green Chip
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 * Shared row geometry (both groups reuse identical rows; box x0=60..1020),
 * reused verbatim from Sec9/Sec18/Sec26/Sec34:
 *  row0 top=108 H=140 bottom=248 cy=178 | title y150 detail y193 caption y226
 *  row1 top=272 H=140 bottom=412 cy=342 | title y314 detail y357 caption y390
 *  row2 top=436 H=140 bottom=576 cy=506 | title y478 detail y521 caption y554
 *  (icon column x~98..152, text column x210..~1000 — disjoint by design)
 *
 *  always | title (script 24, red)                        | T mid  | x~131..949 y39..82 (hinglish wider)
 *  b0 | title underline flourish (amber)                   | Draw   | x340..740 y94
 *  [group A, aOn = beat 1..3, erased at beat>=4]
 *  b1 | card1 box (960×140)                                 | Draw  | x60..1020 y108..248
 *  b1 | triangle + 3 vertex dots (ink)                        | Draw/Fade| x104..136 y166..194
 *  b1 | title "Ignoring collinear corrections" (19,red,w800)    | T st | x210..~540 y150
 *  b1 | detail "Writing nC3 without subtracting..." (16,ink)      | T st | x210..~634 y193
 *  b1 | crossed "nC3"(red)→checked "nC3 − mC3"(green) + check        | T/Draw| x208..381 y213..231
 *  b2 | card2 box                                              | Draw  | x60..1020 y272..412
 *  b2 | circle+"p" crossed / "÷2" badge                          | Draw/Fade| x107..133 y309..372
 *  b2 | title "Incomplete prime factorisation" (19,red,w800)       | T st | x210..~551 y314
 *  b2 | detail "A missed prime silently changes..." (16,ink)         | T st | x210..~586 y357
 *  b2 | caption "One dropped (aᵢ+1)=2 factor..." (14,muted)             | T st | x210..~588 y390
 *  b3 | card3 box (guardrail)                                       | Draw | x60..1020 y436..576
 *  b3 | crossed "n!"(red) / checked "(n−1)!"(green) badge pair          | T/Draw| x110..165 y469..534
 *  b3 | title "Sum of numbers: n! instead of (n−1)!" (19,red,w800)      | T st | x210..~618 y478
 *  b3 | detail "Each digit sits in one place..." (16,ink)                 | T st | x210..~690 y521
 *  b3 | caption "n! counts ALL arrangements..." (14,muted)                  | T st | x210..~665 y554
 *  [group A erased at beat>=4]
 *  [group B, bOn = beat>=4, final group]
 *  b4 | card4 box (960×140)                                            | Draw | x60..1020 y108..248
 *  b4 | letter tile "1" + envelope "1" + red ✗ between (Sec37/42)          | Draw/Fade| x102..132 y156..202
 *  b4 | title "Derangement ≠ one subtraction" (19,red,w800)                | T st | x210..~540 y150
 *  b4 | detail "Needs the full inclusion–exclusion..." (16,ink)               | T st | x210..~626 y193
 *  b4 | crossed "n! − 1"(red)→checked "Dₙ = n!Σ(−1)ⁱ/i!"(green) + check         | T/Draw| x208..441 y213..231
 *  b5 | card5 box                                                                | Draw | x60..1020 y272..412
 *  b5 | descending staircase (1 solid, 2 ghosted+crossed)                          | Draw/Fade| x98..144 y340..364
 *  b5 | title "Legendre: stopping at the first term" (19,red,w800)                  | T st | x210..~618 y314
 *  b5 | detail "p², p³, … each add more factors too" (16,ink)                         | T st | x210..~500 y357
 *  b5 | crossed "⌊n/p⌋ only"(red)→checked "+⌊n/p²⌋+⌊n/p³⌋+⋯"(green) + check              | T/Draw| x208..514 y377..395
 *  b6 | card6 box (GREEN guardrail, final closer)                                       | Draw | x60..1020 y436..576
 *  b6 | magnifying-glass icon (green, Sec36 callback)                                     | Draw | x107..144 y485..522
 *  b6 | title "Pro-tip: name the selection" (19,green,w800)                                | T st | x210..~540 y478
 *  b6 | chip "Points → shapes, exponents → divisors..." (green, w620 h46)                    | Chip | x210..830 y498..544
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
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
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, circleD, lineD, checkD } from "./math-kit";

/** Triangle outline path through three points — local device (no dedicated
 * triangle primitive exists in math-kit, same reasoning as Sec35/39's own
 * local triD/bowD: a one-off drawn glyph doesn't need a new primitive). */
function triD(
  a: { x: number; y: number },
  b: { x: number; y: number },
  c: { x: number; y: number }
): string {
  return `M ${a.x} ${a.y} L ${b.x} ${b.y} L ${c.x} ${c.y} Z`;
}

/** Envelope icon: rectangle + a V-flap line — local one-off device, same
 * reasoning as Sec37/42's own envelopeD (a single-occurrence drawn glyph
 * doesn't need a new math-kit primitive). */
function envelopeD(x: number, y: number, w: number, h: number): string {
  const flapY = y + h * 0.52;
  return `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z M ${x} ${y} L ${x + w / 2} ${flapY} L ${x + w} ${y}`;
}

export default function M11Ch06Sec43({ currentTime, reveals, language }: SceneProps) {
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

  // shared row geometry (see layout-plan header) — reused verbatim from Sec9/18/26/34
  const ROW0 = { top: 108, h: 140, cy: 178, title: 150, detail: 193, caption: 226 };
  const ROW1 = { top: 272, h: 140, cy: 342, title: 314, detail: 357, caption: 390 };
  const ROW2 = { top: 436, h: 140, cy: 506, title: 478, detail: 521, caption: 554 };
  const BOX_X = 60;
  const BOX_W = 960;

  // ---- card1 icon: triangle + 3 vertex dots (Sec35 "counting shapes =
  // counting vertices" callback) ----
  const c1DotA = { x: 104, y: 166 };
  const c1DotB = { x: 136, y: 166 };
  const c1DotC = { x: 120, y: 194 };

  return (
    <Scene>
      {/* title always-on — this IS the JSON's own heading, so beat 0 has no
          separate gated text beyond the underline flourish below */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Where application marks leak away", "Application ke marks yahin leak hote hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(340, 94, 740, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-3 ===================== */}

      {/* --- Card 1 (row0): Pitfall 1 — ignoring collinear corrections --- */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={aOn && beat >= 1} delay={dl(1, 0.5)} d={triD(c1DotA, c1DotB, c1DotC)} stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={c1DotA.x} cy={c1DotA.y} r={2.4} fill={INK} />
        <Circle cx={c1DotB.x} cy={c1DotB.y} r={2.4} fill={INK} />
        <Circle cx={c1DotC.x} cy={c1DotC.y} r={2.4} fill={INK} />
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.3)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Ignoring collinear corrections", "Collinear correction ignore karna")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.7)}>
        <T x={210} y={ROW0.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "Writing nC3 without subtracting the collinear cases",
            "Collinear cases subtract kiye bina seedha nC3 likhna"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.1)}>
        <T x={210} y={ROW0.caption} size={16} fill={RED} weight={800} anchor="start">
          nC3
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.4)}
        d={crossD(208, ROW0.caption - 0.78 * 16, 32, 1.09 * 16)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.6)}>
        <T x={250} y={ROW0.caption} size={14} fill={MUTED} anchor="start">
          {"→"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.8)}>
        <T x={268} y={ROW0.caption} size={16} fill={GREEN} weight={800} anchor="start">
          nC3 − mC3
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 3.2)}
        d={checkD(268 + 84 + 14, ROW0.caption - 6, 15)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* --- Card 2 (row1): Pitfall 2 — incomplete prime factorisation --- */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={aOn && beat >= 2} delay={dl(2, 0.5)} d={circleD(120, 322, 13)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.9)}>
        <T x={120} y={327} size={14} fill={INK} weight={800}>
          p
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.3)}
        d={crossD(107, 309, 26, 26)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.7)}>
        <T x={120} y={368} size={13} fill={GREEN} weight={800}>
          {"÷2"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.1)}>
        <T x={210} y={ROW1.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Incomplete prime factorisation", "Adhoori prime factorisation")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.5)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "A missed prime silently changes (a₁+1)(a₂+1)⋯",
            "Chhoota hua prime chupke se (a₁+1)(a₂+1)⋯ badal deta hai"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.9)}>
        <T x={210} y={ROW1.caption} size={14} fill={MUTED} anchor="start">
          {t(
            "One dropped (aᵢ+1)=2 factor exactly halves the count",
            "Ek chhoota (aᵢ+1)=2 factor count ko seedha aadha kar deta hai"
          )}
        </T>
      </Fade>

      {/* --- Card 3 (row2, guardrail): Pitfall 3 — n! instead of (n−1)! --- */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.5)}>
        <T x={120} y={482} size={16} fill={RED} weight={800}>
          n!
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0.9)}
        d={crossD(110, 482 - 0.78 * 16, 20, 1.09 * 16)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.3)}>
        <T x={120} y={530} size={14} fill={GREEN} weight={800}>
          {"(n−1)!"}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 1.7)}
        d={checkD(120 + 24.36 + 10, 530 - 4, 13)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.1)}>
        <T x={210} y={ROW2.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Sum of numbers: n! instead of (n−1)!", "Numbers ka sum: n! ki jagah (n−1)! chahiye")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.5)}>
        <T x={210} y={ROW2.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "Each digit sits in one place exactly (n−1)! times, not n!",
            "Har digit ek jagah exactly (n−1)! baar aata hai, n! nahi"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.9)}>
        <T x={210} y={ROW2.caption} size={14} fill={MUTED} anchor="start">
          {t(
            "n! counts ALL arrangements — only (n−1)! share a digit+place",
            "n! SAARI arrangements count karta — (n−1)! sirf ek digit+place ka"
          )}
        </T>
      </Fade>

      {/* ===================== Group B — beats 4-6 (final, never erased) ===================== */}

      {/* --- Card 4 (row0): Pitfall 4 — derangement is not one subtraction --- */}
      <Draw
        on={bOn}
        delay={dl(4, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={bOn} delay={dl(4, 0.5)} d={roundRectD(102, 156, 30, 18, 4)} stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={bOn} delay={dl(4, 0.9)}>
        <T x={117} y={169} size={11} fill={INK} weight={800}>
          1
        </T>
      </Fade>
      <Draw on={bOn} delay={dl(4, 1.1)} d={envelopeD(102, 182, 30, 20)} stroke={AMBER_DARK} sw={1.6} dur={0.4} />
      <Fade on={bOn} delay={dl(4, 1.5)}>
        <T x={117} y={196} size={11} fill={INK} weight={700}>
          1
        </T>
      </Fade>
      <Draw on={bOn} delay={dl(4, 1.9)} d={crossD(109, 173, 16, 10)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={bOn} delay={dl(4, 2.3)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Derangement ≠ one subtraction", "Derangement ek subtraction se nahi banta")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.7)}>
        <T x={210} y={ROW0.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "Needs the full inclusion–exclusion alternating sum",
            "Poora inclusion–exclusion alternating sum chahiye"
          )}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 3.1)}>
        <T x={210} y={ROW0.caption} size={14} fill={RED} weight={800} anchor="start">
          n! − 1
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(4, 3.4)}
        d={crossD(208, ROW0.caption - 0.78 * 14, 53, 1.09 * 14)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={bOn} delay={dl(4, 3.6)}>
        <T x={269} y={ROW0.caption} size={13} fill={MUTED} anchor="start">
          {"→"}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 3.8)}>
        <T x={283} y={ROW0.caption} size={14} fill={GREEN} weight={800} anchor="start">
          {"Dₙ = n!Σ(−1)ⁱ/i!"}
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(4, 4.2)}
        d={checkD(283 + 130 + 14, ROW0.caption - 5, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* --- Card 5 (row1): Pitfall 5 — Legendre, stopping at the first term --- */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={bOn && beat >= 5} delay={dl(5, 0.5)} d={roundRectD(94, 334, 14, 28, 2)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.9)}>
        <Rect x={112} y={346} width={14} height={16} rx={2} fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="3 2" />
        <Rect x={130} y={354} width={14} height={8} rx={2} fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="3 2" />
      </Fade>
      <Draw on={bOn && beat >= 5} delay={dl(5, 1.3)} d={crossD(109, 344, 40, 20)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.7)}>
        <T x={210} y={ROW1.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Legendre: stopping at the first term", "Legendre: pehle term par ruk jana")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.1)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t("p², p³, … each add more factors too", "p², p³, … bhi factors jodte hain")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.5)}>
        <T x={210} y={ROW1.caption} size={14} fill={RED} weight={800} anchor="start">
          {"⌊n/p⌋ only"}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.8)}
        d={crossD(208, ROW1.caption - 0.78 * 14, 85, 1.09 * 14)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.0)}>
        <T x={301} y={ROW1.caption} size={13} fill={MUTED} anchor="start">
          {"→"}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.2)}>
        <T x={315} y={ROW1.caption} size={14} fill={GREEN} weight={800} anchor="start">
          {"+ ⌊n/p²⌋ + ⌊n/p³⌋ + ⋯"}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 3.6)}
        d={checkD(315 + 171 + 14, ROW1.caption - 5, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* --- Card 6 (row2, GREEN guardrail): Pro-tip — name the selection --- */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Draw on={bOn && beat >= 6} delay={dl(6, 0.5)} d={circleD(120, 498, 13)} stroke={GREEN} sw={2} dur={0.5} />
      <Draw on={bOn && beat >= 6} delay={dl(6, 0.9)} d={lineD(129, 507, 144, 522)} stroke={GREEN} sw={3} dur={0.3} />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.3)}>
        <T x={210} y={ROW2.title} size={19} fill={GREEN} weight={800} anchor="start">
          {t("Pro-tip: name the selection", "Pro-tip: selection ko naam do")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.8)}>
        <Chip x={210} y={498} w={620} h={46} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t(
            "Points → shapes, exponents → divisors, positions → arrangements",
            "Points se shapes, exponents se divisors, positions se arrangements"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
