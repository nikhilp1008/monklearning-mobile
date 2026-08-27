/**
 * M11 Ch06 · Section 26 — "Pitfalls & pro-tips for combinations" — the
 * CLOSING section of Subtopic 3 "Combinations" (Sec19-25), a rapid
 * pitfalls/tips recap of everything taught there. Canvas 1080×620 · safe
 * x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md
 * ("tips" section_type). Direct structural templates: M11Ch06Sec9.tsx and
 * M11Ch06Sec18.tsx (the equivalent closers for Subtopics 1 and 2) — same
 * two-groups-of-3, notes-page card grid, erase-transition-between-groups
 * shape, copied closely (Sec18's exact conventions preferred, per brief).
 *
 * All nCr/nPr here are SYMBOLIC (plain text, no super/subscript attempt)
 * EXCEPT card5's "⁵⁰C₄₈ = ⁵⁰C₂ = 1225", the ONE literal numeric case → real
 * super/subscript digits in non-script (Anek) text, per the notation doc.
 * "(m!)ᵍ" on card4 reuses Sec23's own established convention (real Unicode
 * superscript letter for a symbolic group-count exponent, not a numeral).
 *
 * DEVIATION FROM THE Sec9/Sec18 TEMPLATE (documented, not accidental): in
 * Sec9/18 the row2 card of each group is always the "guardrail" (warning-
 * triangle icon) slot, regardless of the source JSON's per-item type. This
 * section's own JSON explicitly tags item 5 (grouping, beat 4) and item 7
 * (the final IN/OUT closer, beat 6) as `note, red-margin/guardrail` — and
 * neither sits in a row2 slot under the natural reveal order (item 5 is
 * group B's FIRST card, item 7 is its last). Rather than force the warning-
 * triangle onto an arbitrary row to match the template's row-index habit,
 * the triangle icon goes on card4 (row0 of group B, the JSON-flagged
 * red guardrail) and the green circle+check "positive guardrail" icon goes
 * on card6 (row2, the JSON-flagged final closer) — the template's COLOR/
 * ICON-BY-MEANING logic is kept faithfully; only its row-INDEX habit bends
 * to fit this section's actual data shape. Group A's three cards (all
 * JSON `text` type, no guardrail flag) use meaning-driven icons of their
 * own (nCr/nPr role badges, crossed/checked formula, a 3-vs-3 case-count
 * pair) instead of a triangle, since none of them is JSON-flagged as one.
 *
 * Callbacks: card1→Sec19/Sec24 (team=unordered=nCr vs posts=ordered=nPr,
 * same GREEN/AMBER_DARK coding Sec19's own closing mnemonic used), card2→
 * Sec21 (nCr=nPr/r! derivation) + Sec24 (120=20×3! example), card3→Sec25
 * (3-cases-vs-3-cases: a missed case, or a complement with no fewer cases),
 * card4→Sec23 (unlabelled-groups over-counting, ÷g!, "(m!)ᵍ" notation),
 * card5→Sec20/Sec21 (nCr=nC(n-r) symmetry; the exact numeric-landing style
 * of Sec20's ¹²C₁₀=¹²C₂=66 / Sec21's ⁷C₅=⁷C₂=21), card6→Sec22 (Pascal's-
 * rule ★-is-IN/★-is-OUT bijective framing, generalized as a heuristic).
 *
 * Beats (board_reveal_at_english [0,7.85,30.63,45.48,58.79,76.37,90.2],
 * hinglish [0,8.28,25.26,36.95,50.01,64.51,76.2]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 1..3, erased at beat>=4 — all JSON `text` type]
 *  1 card1 (row0): Pitfall 1 — order confusion (cross-cutting); C/P role
 *    badges (GREEN=nCr/no-roles, AMBER_DARK=nPr/roles, Sec19 palette)
 *  2 card2 (row1): Pitfall 2 — forgetting ÷r!; "nPr" crossed → "nCr"
 *    checked, muted formula reminder nCr=nPr/r!
 *  3 card3 (row2): Pitfall 3 — "at least/at most" slip-ups; 3-green-dots /
 *    3-amber-dots case-count icon (Sec25's own at-least-vs-at-most colors)
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final group, never erased]
 *  4 card4 (row0, RED guardrail — JSON note): Pitfall 4 — grouping, forgot
 *    ÷(equal groups)!; warning-triangle icon; "n!/(m!)ᵍ" crossed → "÷ g!"
 *    checked
 *  5 card5 (row1, GREEN): Pro-tip — symmetry shrinks arithmetic; green
 *    circle+check icon; numeric landing "⁵⁰C₄₈ = ⁵⁰C₂ = 1225"
 *  6 card6 (row2, GREEN guardrail — JSON note, the final closer): Pro-tip —
 *    ask "in or out?"; green circle+check icon; green chip stating the
 *    generalized heuristic
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 * Shared row geometry (both groups reuse identical rows; box x0=60..1020),
 * reused verbatim from Sec9/Sec18:
 *  row0 top=108 H=140 bottom=248 cy=178 | title y150 detail y193 caption y226
 *  row1 top=272 H=140 bottom=412 cy=342 | title y314 detail y357 caption y390
 *  row2 top=436 H=140 bottom=576 cy=506 | title y478 detail y521 caption y554
 *  (icon column x~90..152, text column x210..~1000 — disjoint by design)
 *
 *  always | title (script 24, red)                        | T mid  | x~269..811 y39..82 (hinglish wider)
 *  b0 | title underline flourish (amber)                   | Draw   | x350..730 y94
 *  [group A, aOn = beat 1..3, erased at beat>=4]
 *  b1 | card1 box (960×140)                                 | Draw  | x60..1020 y108..248
 *  b1 | "C" circle r16 (green) / "P" circle r16 (amber-dk)    | circ/T| x104..136 y138..170 / y186..218
 *  b1 | title "Order confusion (cross-cutting)" (19,red,w800)  | T st | x210..~600 y150
 *  b1 | detail "Roles assigned→still nCr, or no roles→nPr" (16)| T st | x210..~640 y193
 *  b1 | caption "No roles → nCr"(green) / "Roles → nPr"(amber)  | T st | x210..~330 / x338..478 y226
 *  b2 | card2 box                                              | Draw | x60..1020 y272..412
 *  b2 | "nPr" crossed (red) / "nCr" checked (green)               | T/Draw| x104..136 y306..372
 *  b2 | title "Forgetting to divide by r!" (19,red,w800)           | T st | x210..~590 y314
 *  b2 | detail "nPr ends up r! times too big for nCr" (16,ink)       | T st | x210..~630 y357
 *  b2 | caption "nCr = nPr / r!" (14,muted)                            | T st | x210..~330 y390
 *  b3 | card3 box                                                       | Draw | x60..1020 y436..576
 *  b3 | 3 green dots / divider / 3 amber dots                            | circ/Draw | x100..140 y487..525
 *  b3 | title "'At least/at most' slip-ups" (19,red,w800)                 | T st | x210..~600 y478
 *  b3 | detail "A missed case, or a complement..." (16,ink)                 | T st | x210..~700 y521
 *  b3 | caption "Count both ways..." (14,muted)                             | T st | x210..~660 y554
 *  [group A erased at beat>=4]
 *  [group B, bOn = beat>=4, final group]
 *  b4 | card4 box (RED guardrail)                                          | Draw | x60..1020 y108..248
 *  b4 | warning triangle icon (red)                                        | Draw | x104..136 y148..184
 *  b4 | title "Forgot ÷ (equal groups)!" (19,red,w800)                       | T st | x210..~560 y150
 *  b4 | detail "Unlabelled piles double-count every relabelling" (16,ink)      | T st | x210..~660 y193
 *  b4 | "n!/(m!)ᵍ"(red,crossed) → "÷ g!"(green,checked) (16,w800)               | T/Draw| x210..~390 y226
 *  b5 | card5 box (GREEN)                                                      | Draw | x60..1020 y272..412
 *  b5 | green circle r16 + checkmark                                            | circ/Draw| x102..138 y326..358
 *  b5 | title "Pro-tip: symmetry shrinks arithmetic" (19,green,w800)              | T st | x210..~610 y314
 *  b5 | detail "Choosing 48 to keep = choosing 2 to reject" (16,ink)                | T st | x210..~610 y357
 *  b5 | numeric "⁵⁰C₄₈ = ⁵⁰C₂ = 1225" (18,w800, ink/green/green)                     | T st | x210..~402 y390
 *  b6 | card6 box (GREEN guardrail, final closer)                                   | Draw | x60..1020 y436..576
 *  b6 | green circle r18 + checkmark                                                 | circ/Draw| x102..138 y488..524
 *  b6 | title "Pro-tip: ask 'in or out?'" (19,green,w800)                             | T st | x210..~590 y478
 *  b6 | chip "One object: in or out? → two clean addable cases" (green, w620 h46)       | Chip | x210..830 y498..544
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
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD, lineD } from "./math-kit";

export default function M11Ch06Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (pitfalls 1-3) is erased once group B (pitfall 4, the symmetry
  // pro-tip, the final IN/OUT pro-tip) starts at beat 4. Each element's own
  // `on` is bounded to its beat window (rather than a wrapper div's opacity)
  // so the verifier's Fade-opacity visibility check — which walks up to the
  // nearest g.sc-fade, not an arbitrary ancestor — sees the erasure too;
  // seeking back into an earlier beat correctly restores it.
  const aOn = beat >= 1 && beat < 4;
  const bOn = beat >= 4;

  // shared row geometry (see layout-plan header) — reused verbatim from Sec9/18
  const ROW0 = { top: 108, h: 140, cy: 178, title: 150, detail: 193, caption: 226 };
  const ROW1 = { top: 272, h: 140, cy: 342, title: 314, detail: 357, caption: 390 };
  const ROW2 = { top: 436, h: 140, cy: 506, title: 478, detail: 521, caption: 554 };
  const BOX_X = 60;
  const BOX_W = 960;

  // ---- card5 (beat5): the ONE numeric case, real super/subscript digits ----
  const numSegs = [
    { text: "⁵⁰C₄₈", fill: INK },
    { text: " = ", fill: INK },
    { text: "⁵⁰C₂", fill: GREEN },
    { text: " = ", fill: INK },
    { text: "1225", fill: GREEN },
  ];
  const numSize = 18;
  let numCursor = 210;
  const numXs = numSegs.map((s) => {
    const x = numCursor;
    numCursor += 0.56 * numSize * s.text.length;
    return x;
  });

  return (
    <Scene>
      {/* title always-on — this IS the JSON's own heading, so beat 0 has no
          separate gated text beyond the underline flourish below */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Where combination marks leak away", "Combination ke marks yahin leak hote hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(350, 94, 730, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-3 ===================== */}

      {/* --- Card 1 (row0): Pitfall 1 — order confusion (cross-cutting) --- */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.6)}>
        <Circle cx={120} cy={ROW0.cy - 24} r={16} stroke={GREEN} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.9)}>
        <T x={120} y={ROW0.cy - 24 + 5} size={18} fill={GREEN} weight={800}>
          C
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={120} cy={ROW0.cy + 24} r={16} stroke={AMBER_DARK} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.5)}>
        <T x={120} y={ROW0.cy + 24 + 5} size={18} fill={AMBER_DARK} weight={800}>
          P
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.9)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Order confusion (cross-cutting)", "Order ka confusion (cross-cutting)")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.3)}>
        <T x={210} y={ROW0.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "Roles assigned → still nCr, or no roles → still nPr",
            "Roles assigned ho tab bhi nCr, ya na ho tab bhi nPr"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.7)}>
        <T x={210} y={ROW0.caption} size={14} fill={GREEN} weight={700} anchor="start">
          {t("No roles → nCr", "Roles nahi → nCr")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.9)}>
        <T x={338} y={ROW0.caption} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          {t("Roles → nPr", "Roles hain → nPr")}
        </T>
      </Fade>

      {/* --- Card 2 (row1): Pitfall 2 — forgetting to divide by r! --- */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={120} y={ROW1.cy - 24} size={16} fill={RED} weight={800}>
          nPr
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.0)}
        d={crossD(104, ROW1.cy - 24 - 0.78 * 16, 32, 17.44)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.4)}>
        <T x={120} y={ROW1.cy + 24} size={16} fill={GREEN} weight={800}>
          nCr
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.8)}
        d={checkD(144, ROW1.cy + 24 - 4, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.2)}>
        <T x={210} y={ROW1.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Forgetting to divide by r!", "r! se divide karna bhool jana")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.6)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "nPr answer ends up r! times too big for nCr",
            "nPr ka answer nCr se r! guna zyada nikal aata hai"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 3.0)}>
        <T x={210} y={ROW1.caption} size={14} fill={MUTED} anchor="start">
          nCr = nPr / r!
        </T>
      </Fade>

      {/* --- Card 3 (row2): Pitfall 3 — "at least/at most" slip-ups --- */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={108} cy={ROW2.cy - 16} r={3} fill={GREEN} />
        <Circle cx={120} cy={ROW2.cy - 16} r={3} fill={GREEN} />
        <Circle cx={132} cy={ROW2.cy - 16} r={3} fill={GREEN} />
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0.9)}
        d={lineD(100, ROW2.cy, 140, ROW2.cy)}
        stroke={MUTED}
        sw={1.2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.2)}>
        <Circle cx={108} cy={ROW2.cy + 16} r={3} fill={AMBER_DARK} />
        <Circle cx={120} cy={ROW2.cy + 16} r={3} fill={AMBER_DARK} />
        <Circle cx={132} cy={ROW2.cy + 16} r={3} fill={AMBER_DARK} />
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.6)}>
        <T x={210} y={ROW2.title} size={19} fill={RED} weight={800} anchor="start">
          {t("'At least / at most' slip-ups", "'At least / at most' mein chook")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.0)}>
        <T x={210} y={ROW2.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "A missed case, or a complement with just as many cases",
            "Ek case chhoot gaya, ya complement mein utne hi cases"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.4)}>
        <T x={210} y={ROW2.caption} size={14} fill={MUTED} anchor="start">
          {t(
            "Count both ways — use whichever needs less arithmetic",
            "Dono taraf count karo — jisme kam calculation ho wahi lo"
          )}
        </T>
      </Fade>

      {/* ===================== Group B — beats 4-6 (final, never erased) ===================== */}

      {/* --- Card 4 (row0, RED guardrail): Pitfall 4 — grouping, forgot ÷g! --- */}
      <Draw
        on={bOn}
        delay={dl(4, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={bOn}
        delay={dl(4, 0.5)}
        d={`M120 ${ROW0.cy - 30} L104 ${ROW0.cy + 6} L136 ${ROW0.cy + 6} Z M120 ${ROW0.cy - 22} L120 ${ROW0.cy - 7}`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={bOn} delay={dl(4, 1.0)}>
        <Circle cx={120} cy={ROW0.cy + 2} r={1.8} fill={RED} />
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.3)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Forgot ÷ (equal groups)!", "(equal groups)! se divide bhool jana")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.7)}>
        <T x={210} y={ROW0.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "Unlabelled piles double-count every relabelling",
            "Unlabelled piles har relabelling mein do baar count hote hain"
          )}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.1)}>
        <T x={210} y={ROW0.caption} size={16} fill={RED} weight={800} anchor="start">
          n!/(m!)ᵍ
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(4, 2.4)}
        d={crossD(210, ROW0.caption - 0.78 * 16, 72, 17.44)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={bOn} delay={dl(4, 2.7)}>
        <T x={290} y={ROW0.caption} size={14} fill={MUTED} anchor="start">
          {"→"}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 3.0)}>
        <T x={306} y={ROW0.caption} size={16} fill={GREEN} weight={800} anchor="start">
          {"÷ g!"}
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(4, 3.3)}
        d={checkD(352, ROW0.caption - 4, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* --- Card 5 (row1, GREEN): Pro-tip — symmetry shrinks arithmetic --- */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.5)}>
        <Circle cx={120} cy={ROW1.cy} r={16} stroke={GREEN} strokeWidth={2} fill="none" />
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0.8)}
        d={checkD(120, ROW1.cy, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.2)}>
        <T x={210} y={ROW1.title} size={19} fill={GREEN} weight={800} anchor="start">
          {t("Pro-tip: symmetry shrinks arithmetic", "Pro-tip: symmetry se arithmetic chhota")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.6)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "Choosing 48 to keep = choosing 2 to reject",
            "48 rakhna choose karna = 2 reject karna"
          )}
        </T>
      </Fade>
      {numSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 5} delay={dl(5, 2.0 + i * 0.3)}>
          <T x={numXs[i]} y={ROW1.caption} size={numSize} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}

      {/* --- Card 6 (row2, GREEN guardrail): Pro-tip — ask "in or out?" --- */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.5)}>
        <Circle cx={120} cy={ROW2.cy} r={18} stroke={GREEN} strokeWidth={2} fill="none" />
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0.9)}
        d={checkD(120, ROW2.cy, 16)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.3)}>
        <T x={210} y={ROW2.title} size={19} fill={GREEN} weight={800} anchor="start">
          {t("Pro-tip: ask 'in or out?'", "Pro-tip: 'in ya out?' poochho")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.8)}>
        <Chip x={210} y={498} w={620} h={46} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t(
            "One object: in or out? → two clean addable cases",
            "Ek object: in ya out? → do clean addable cases"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
