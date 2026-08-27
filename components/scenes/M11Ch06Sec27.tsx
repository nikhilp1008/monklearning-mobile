/**
 * M11 Ch06 · Section 27 — "Three new tools, and Tool 1: total selections"
 * FIRST section of Subtopic 4 "Total Selections, Grouping & Distribution
 * (Stars and Bars)". Canvas 1080×620 · safe x36–1044, y30–596. Spec:
 * SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("concept" flow: Anchor
 * (preview 3 tools) → Represent (n-bit-string diagram) → Explain (take-or-
 * leave, two choices) → Land (2ⁿ / 2ⁿ-1) → reframe (selection = binary
 * string) → Guardrail (distinct-vs-identical, sets up next section's
 * stars-and-bars tool)).
 *
 * Relationship to prior sections: Tool 1's "each of n objects gets 2
 * independent choices" is the SAME repetition-allowed / nʳ reasoning as
 * M11Ch06Sec4.tsx's repetition-fork beat (r=n positions, 2 options each,
 * here framed as take-or-leave instead of a generic nʳ box row). This
 * section opens a subtopic the way M11Ch06Sec19.tsx opened Subtopic 3:
 * definition/preview beats first, core idea built and landed, guardrail
 * closer that hands off to the next section.
 *
 * Beats (board_reveal_at_english [0,11.43,24.32,33.19,45.31,58.45,70.74],
 * hinglish [0,9.64,21.59,31.23,41.73,54.02,65.19]):
 *  0 heading (= title, always-on) + amber underline flourish
 *  [group A: aOn = beat===1, erased at beat>=2 — the 3-tool preview only
 *   needs to be on screen while it is being spoken about; Tool 1's own
 *   diagram needs the space it vacates]
 *  1 preview: 3 short cards "Tool 1 / Tool 2 / Tool 3" each with a one-line
 *    question (subsets total? / share identical sweets? / integer
 *    solutions?) — named, not answered
 *  [group A erased at beat>=2]
 *  [group B: bOn = beat>=2, final group, never erased — this IS Tool 1]
 *  2 diagram (the visual heart): 5 boxes drawn as one stroke, each filled
 *    with an independent 1/0 digit, "…" implying the pattern continues for
 *    n; two captions ("1=in/0=out" and "n-bit string → 2ⁿ subsets")
 *  3 text: Tool 1's core idea — each of n distinct objects gets exactly 2
 *    independent choices (take it, or leave it)
 *  4 formula (HIGH): both formulas land, boxed — 2ⁿ (incl. empty) and
 *    2ⁿ - 1 (at least one)
 *  5 text: reframe — a selection IS a binary string of length n; inline
 *    "1"/"0" digits get their own small drawn box (callback to beat 2's
 *    box style) with "= in" / "= out" legends
 *  6 note (RED guardrail, final closer): the 2ⁿ formula needs DISTINCT
 *    objects — p IDENTICAL objects only let you choose HOW MANY (0..p),
 *    p+1 choices, crossed-out 2ᵖ as the common wrong instinct
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                          | T mid  | x~190..890 y39..82
 *  b0 | title underline flourish (amber)                      | Draw  | x400..680 y94
 *  [group A: aOn = beat===1, erased at beat>=2]
 *  b1 | 3 cards (286×72, gap64)                                | Draw  | x42..1028 y100..172
 *  b1 | headers "Tool 1/2/3" (13, green/amber-dk)                | T mid | per-card y113..128
 *  b1 | questions (14, ink)                                      | T mid | per-card y139..154
 *  [group A erased at beat>=2]
 *  [group B: bOn = beat>=2, final — this occupies the freed top band]
 *  b2 | 5 boxes (52×52, gap16), one Draw                          | Draw  | x378..702 y104..156
 *  b2 | 5 digits "1,0,1,1,0" (24, ink, w800)                       | T mid | per-box y119..146
 *  b2 | "…" continuation (26, muted)                                | T mid | x715..742 y118..146
 *  b2 | caption1 "1(in)/0(out)" (15, ink)                            | T mid | x401..679 y172..189
 *  b2 | caption2 "n-bit string → 2ⁿ subsets" (13, muted)               | T mid | x390..690 y206..220
 *  b3 | core sentence (19, ink, w600)                                  | T mid | x236..844 y247..268
 *  b4 | line1 "Total subsets = 2ⁿ (incl. empty)" (26, green, w800)       | T mid | x253..827 y300..328
 *  b4 | line2 "At least one selected → 2ⁿ - 1" (26, green, w800)          | T mid | x291..789 y348..376
 *  b4 | landing box (630×106, rounded, green)                              | Draw | x225..855 y284..390
 *  b5 | inline sentence + "1"/"0" digits (18/20) + 2 small boxes             | T/Draw| x~312..768 y406..450
 *  b6 | guardrail card (960×108, rounded, red)                                | Draw | x60..1020 y474..582
 *  b6 | warning triangle icon (red)                                            | Draw | x104..136 y498..532
 *  b6 | title "Careful: this needs DISTINCT objects" (19,red,w800)               | T st | x210..~618 y503
 *  b6 | detail "p IDENTICAL objects..." (16,ink,w600)                             | T st | x210..~682 y534
 *  b6 | "2ᵖ"(crossed,red) → "p+1 choices"(checked,green) (17,w800/600)              | T/Draw| x210..~400 y567
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
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

export default function M11Ch06Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beat 1: the 3-tool preview) is erased once Tool 1's own
  // diagram lands at beat 2 — group B (beats 2-6: everything that is Tool 1
  // itself) then owns the whole board and is never erased. Each element's
  // own `on` is bounded to its beat window (rather than a wrapper div's
  // opacity) so the verifier's Fade-opacity visibility check — which walks
  // up to the nearest g.sc-fade, not an arbitrary ancestor — sees the
  // erasure too; seeking back into beat 1 correctly restores the preview.
  const aOn = beat === 1;
  const bOn = beat >= 2;

  const wEst = (s: string, size: number, weight: number) =>
    (weight >= 800 ? 0.58 : 0.5) * size * s.length;

  // ---- beat 1: 3 preview cards ----
  const cardXs = [42, 392, 742];
  const CARD_Y = 100;
  const CARD_W = 286;
  const CARD_H = 72;
  const cardData = [
    {
      tool: "Tool 1",
      color: GREEN,
      q: t("Subsets: how many total?", "Subsets: kitne total?"),
    },
    {
      tool: "Tool 2",
      color: AMBER_DARK,
      q: t("Share identical sweets?", "Identical sweets baatein kaise?"),
    },
    {
      tool: "Tool 3",
      color: AMBER_DARK,
      q: t("Integer solutions: how many?", "Integer solutions: kitne?"),
    },
  ];

  // ---- beat 2: 5-box binary-string diagram ----
  const boxXs = [378, 446, 514, 582, 650];
  const boxCenters = boxXs.map((x) => x + 26);
  const BOX_Y = 104;
  const BOX_S = 52;
  const digits = [1, 0, 1, 1, 0];

  // ---- beat 4: formula segments (width only needed for the landing box) ----
  const line1 = t("Total subsets = 2ⁿ (incl. empty)", "Total subsets = 2ⁿ (empty bhi shamil)");
  const line2 = t("At least one selected → 2ⁿ - 1", "Kam se kam ek selected → 2ⁿ - 1");
  const line1W = wEst(line1, 26, 800);
  const line2W = wEst(line2, 26, 800);
  const boxHalfW = Math.max(line1W, line2W) / 2 + 24;
  const formulaBoxX = 540 - boxHalfW;
  const formulaBoxW = boxHalfW * 2;

  // ---- beat 5: inline "selection = binary string" with boxed 1 / 0 ----
  const s5Segs = [
    { text: t("A selection = a binary string:  ", "Selection = ek binary string:  "), size: 18, weight: 600, fill: INK },
    { text: "1", size: 20, weight: 800, fill: INK },
    { text: " = in,   ", size: 18, weight: 600, fill: INK },
    { text: "0", size: 20, weight: 800, fill: INK },
    { text: " = out", size: 18, weight: 600, fill: INK },
  ];
  const s5Widths = s5Segs.map((s) => wEst(s.text, s.size, s.weight));
  const s5Total = s5Widths.reduce((a, b) => a + b, 0);
  let s5Cursor = 540 - s5Total / 2;
  const s5Xs = s5Widths.map((w) => {
    const x = s5Cursor;
    s5Cursor += w;
    return x;
  });
  const S5_Y = 440;
  const box1X = s5Xs[1] - 4;
  const box1W = s5Widths[1] + 8;
  const box0X = s5Xs[3] - 4;
  const box0W = s5Widths[3] + 8;
  const digitBoxY = S5_Y - 0.78 * 20 - 4;
  const digitBoxH = 0.78 * 20 + 0.31 * 20 + 8;

  // ---- beat 6: guardrail card ----
  const CARD6 = { top: 474, h: 108, cy: 474 + 54 };
  const s6Segs = [
    { text: "2ᵖ", size: 17, weight: 800, fill: RED },
    { text: " → ", size: 17, weight: 600, fill: MUTED },
    { text: t("p+1 choices", "p+1 choices hain"), size: 17, weight: 800, fill: GREEN },
  ];
  const s6Widths = s6Segs.map((s) => wEst(s.text, s.size, s.weight));
  let s6Cursor = 210;
  const s6Xs = s6Widths.map((w) => {
    const x = s6Cursor;
    s6Cursor += w;
    return x;
  });
  const CAPTION6_Y = 567;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "Beyond 'choose exactly r': three broader tools.",
            "'Exactly r choose karna' se aage: teen bade tools."
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.4)}
        d={lineD(400, 94, 680, 94)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* ===================== Group A — beat 1 (preview) ===================== */}

      {cardData.map((c, i) => (
        <React.Fragment key={i}>
          <Draw
            on={aOn}
            delay={dl(1, i * 1.4)}
            d={roundRectD(cardXs[i], CARD_Y, CARD_W, CARD_H, 12)}
            stroke={MUTED}
            sw={1.8}
            dur={0.6}
          />
          <Fade on={aOn} delay={dl(1, i * 1.4 + 0.7)}>
            <T x={cardXs[i] + CARD_W / 2} y={124} size={13} fill={c.color} weight={700}>
              {c.tool}
            </T>
          </Fade>
          <Fade on={aOn} delay={dl(1, i * 1.4 + 1.0)}>
            <T x={cardXs[i] + CARD_W / 2} y={150} size={14} fill={INK} weight={600}>
              {c.q}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* ===================== Group B — beats 2-6 (Tool 1, final) ===================== */}

      {/* beat 2 — the n-bit-string diagram (visual heart) */}
      <Draw
        on={bOn}
        delay={dl(2, 0)}
        d={boxXs.map((x) => roundRectD(x, BOX_Y, BOX_S, BOX_S, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      {digits.map((v, i) => (
        <Fade key={i} on={bOn} delay={dl(2, 1.2 + i * 0.4)}>
          <T x={boxCenters[i]} y={138} size={24} fill={INK} weight={800}>
            {v}
          </T>
        </Fade>
      ))}
      <Fade on={bOn} delay={dl(2, 3.4)}>
        <T x={728} y={138} size={26} fill={MUTED} weight={700}>
          …
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(2, 4.0)}>
        <T x={540} y={184} size={15} fill={INK} weight={600}>
          {t("each object is a 1 (in) or a 0 (out)", "har object ek 1 (in) ya 0 (out) hai")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(2, 4.6)}>
        <T x={540} y={216} size={13} fill={MUTED}>
          {t("n-bit string → 2ⁿ subsets (incl. empty)", "n-bit string → 2ⁿ subsets (empty bhi)")}
        </T>
      </Fade>

      {/* beat 3 — core idea: two independent choices per object */}
      <Fade on={bOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={262} size={19} fill={INK} weight={600}>
          {t(
            "Tool 1: for each of n distinct objects — take it, or leave it.",
            "Tool 1: n distinct objects mein har ek — lo, ya chodo."
          )}
        </T>
      </Fade>

      {/* beat 4 — land both formulas, boxed (HIGH emphasis) */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={320} size={26} fill={GREEN} weight={800}>
          {line1}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.4)}>
        <T x={540} y={368} size={26} fill={GREEN} weight={800}>
          {line2}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 2.5)}
        d={roundRectD(formulaBoxX, 284, formulaBoxW, 106, 16)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 5 — reframe: a selection IS a binary string */}
      {s5Segs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 5} delay={dl(5, 0.3 + i * 0.35)}>
          <T x={s5Xs[i]} y={S5_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 1.7)}
        d={roundRectD(box1X, digitBoxY, box1W, digitBoxH, 5)}
        stroke={GREEN}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.7)}
        d={roundRectD(box0X, digitBoxY, box0W, digitBoxH, 5)}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />

      {/* beat 6 — guardrail: distinct vs identical (final, never erased) */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(60, CARD6.top, 960, CARD6.h, 14)}
        stroke={RED}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 1.0)}
        d={`M120 ${CARD6.cy - 30} L104 ${CARD6.cy + 6} L136 ${CARD6.cy + 6} Z M120 ${CARD6.cy - 22} L120 ${CARD6.cy - 7}`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.6)}>
        <Circle cx={120} cy={CARD6.cy + 2} r={1.8} fill={RED} />
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.0)}>
        <T x={210} y={503} size={19} fill={RED} weight={800} anchor="start">
          {t("Careful: this needs DISTINCT objects", "Dhyaan: yeh sirf DISTINCT objects ke liye")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.4)}>
        <T x={210} y={534} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "p IDENTICAL objects: you only choose HOW MANY (0 to p).",
            "p IDENTICAL objects: sirf KITNE choose karo (0 se p tak)."
          )}
        </T>
      </Fade>
      {s6Segs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 6} delay={dl(6, 2.8 + i * 0.3)}>
          <T x={s6Xs[i]} y={CAPTION6_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 3.8)}
        d={crossD(s6Xs[0], CAPTION6_Y - 0.78 * 17, s6Widths[0], 0.78 * 17 + 0.31 * 17)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 4.2)}
        d={checkD(s6Xs[2] + s6Widths[2] + 16, CAPTION6_Y - 5, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
    </Scene>
  );
}
