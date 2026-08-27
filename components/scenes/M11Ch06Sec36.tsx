/**
 * M11 Ch06 · Section 36 — "Divisors as selection; arrangements in disguise"
 * SECOND section of Subtopic 5 "Counting Applications & Advanced Tools"
 * (continues Sec35's "hard problems in costume" theme with two more
 * disguised-combinatorics examples). Canvas 1080×620 · safe x36–1044,
 * y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("concept"
 * flow: Anchor → Represent → Explain the move → Land the result →
 * Guardrail).
 *
 * NOTATION: N = p₁^a₁ p₂^a₂⋯ is a SYMBOLIC exponent (aᵢ is a labeled
 * variable, not a literal digit) — no Unicode modifier-letter glyph exists
 * for a compound "letter+subscript-digit" superscript, so it is written
 * with a literal caret, same device already used across the codebase for
 * non-single-letter exponents (e.g. Ch02Sec70's "u·e^(−kx)",
 * Ch07Sec59's "r^(3⁄2)"). The CONCRETE N=360=2³·3²·5¹ diagram (beat 2) uses
 * REAL superscript digits instead (native to Anek, no fallback — per
 * SCENE_AUTHORING_MATHS's sixth glyph audit). Beat 3's landed general
 * formula "(a₁+1)(a₂+1)⋯" uses plain subscript digits on a symbolic
 * variable name (same device as Ch01Sec35/C11Ch02Sec9's "aᵢ"), not a
 * binom-style nCr case, so plain subscripts are correct per the maths spec.
 *
 * Beats (board_reveal_at_english [0,10.67,22.19,31.57,46.08,56.75,70.83],
 * hinglish [0,10.24,19.8,30.21,41.98,53.67,66.05]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 1..3, erased at beat>=4 — THE DIVISOR COSTUME]
 *  1 setup: N = p₁^a₁ · p₂^a₂ · ⋯ builds term by term, then a caption
 *    ("a divisor picks an exponent for each prime") + a generic closed
 *    number-line [0, aᵢ] (closed dots both ends) visualizing the range of
 *    exponent choices for ONE generic prime
 *  2 THE CONCRETE EXAMPLE: N = 360 = 2³·3²·5¹ builds, then 3 side-by-side
 *    columns (thirds guide x=210/540/870) — each prime's power label above
 *    a row of small digit-tiles enumerating its exponent range (2³: 0,1,2,3
 *    / 3²: 0,1,2 / 5¹: 0,1) with a green "N choices" count under each row,
 *    landing "divisors = 4 × 3 × 2 = 24" + independence note
 *  3 (HIGH) general formula lands, boxed (amber outline): "number of
 *    divisors = (a₁+1)(a₂+1)⋯" — built term by term
 *  [group A erased at beat>=4 — full board freed for group B]
 *  [group B: bOn = beat>=4, final group, never erased — THE PLACE-VALUE
 *   PREVIEW: two upcoming "costumes", not solved here]
 *  4 two preview cards side by side (halves guide x=300/780): LEFT "sum of
 *    numbers formed" — 4 digit tiles {1,2,3,4} → arrow → 4 blank "?" slots
 *    labelled Th/H/T/U (place-value positions, not yet filled); RIGHT "rank
 *    of a word" — letters C,H,A,I,R as tiles → a dashed "?" badge labelled
 *    "position in dictionary order?" — both explicitly unresolved previews
 *  5 THE KEY SYMMETRY INSIGHT: all 6 permutations of {1,2,3}, in a 2×3
 *    grid, each with its LAST (units) digit coloured green — visually
 *    proving each of 1/2/3 lands in the units place exactly 2 times, then
 *    caption + a forward-reference subcaption to the later sum-of-numbers
 *    sections
 *  6 (red-margin guardrail, final) small magnifying-glass icon + red-ringed
 *    chip: "Name the underlying selection first; the formula follows."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                                | T mid  | x~243..837 y39..82
 *  b0 | title underline flourish (amber)                           | Draw  | x310..770 y94
 *  [group A: aOn = beat 1..3, erased at beat>=4]
 *  b1 | formula "N = p₁^a₁ · p₂^a₂ · ⋯" (28,ink,w800, 3 segs)        | T st | x~369..711 y128..149
 *  b1 | caption "a divisor picks an exponent..." (15,ink,w600)       | T mid| x~379..742 y166..183
 *  b1 | number line [0,aᵢ] (closed dots, 3 ticks)                    | Draw | x440..640 y199..211
 *  b1 | "0" / "aᵢ" endpoint labels (15,ink)                          | T mid| x453..467 / x610..630 y228..239
 *  b2 | header "N = 360 = 2³ · 3² · 5¹" (26,ink,w800, 4 segs)         | T st | x374..706 y264..292
 *  b2 | 3 column labels "2³"/"3²"/"5¹" (24,ink,w800)                  | T mid| cx210/540/870 y311..338
 *  b2 | 3 digit-tile rows (4/3/2 tiles, 32×30)                        | Draw | cx210 x134..286 / cx540 x484..596 / cx870 x834..906 y350..380
 *  b2 | digit labels inside tiles (16,ink)                            | T mid| per-tile, y370
 *  b2 | count labels "4/3/2 choices" (15,green,w700)                   | T mid| cx210/540/870 y393..410
 *  b2 | caption1 "divisors = 4 × 3 × 2 = 24" (24,green,w800)            | T mid| x~326..754 y426..452
 *  b2 | caption2 "each prime's choice is independent..." (14,amber-dk)   | T mid| x~338..742 y468..484
 *  b3 | box (500×70, amber)                                             | Draw | x290..790 y515..585
 *  b3 | formula "number of divisors = (a₁+1)(a₂+1)⋯" (22,green,w800)     | T st | x323..757 y541..565 (bl 558)
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final group]
 *  b4 | LEFT card title "sum of numbers formed" (15,ink,w700)             | T mid| cx300 y104..120
 *  b4 | LEFT 4 digit tiles (28×28) + arrow + 4 "?" slots (28×28, dashed)   | Draw | x140..462 y160..188
 *  b4 | LEFT slot labels "Th H T U" (13,muted)                            | T mid| x340/376/412/448 y200..214
 *  b4 | LEFT caption "(place-value across every arrangement)" (13,amber-dk)| T mid| x~170..430 y240..254
 *  b4 | RIGHT card title "rank of a word" (15,ink,w700)                    | T mid| cx780 y104..120
 *  b4 | RIGHT 5 letter tiles C,H,A,I,R (28×28)                             | Draw | x698..862 y160..188
 *  b4 | RIGHT dashed "?" badge (r14)                                       | Fade | x766..794 y200..228
 *  b4 | RIGHT caption "position in dictionary order?" (13,amber-dk)         | T mid| x~660..900 y240..254
 *  b5 | header "Every digit visits every place, equally often:" (16,ink,w600)| T mid| x~348..732 y280..297
 *  b5 | 6 permutations, 2×3 grid, units digit green (22,w800)                | T st | cx210/540/870 y340 & y380
 *  b5 | caption "→ each digit lands in units exactly 2 times" (15,green,w700)| T mid| x~334..746 y418..434
 *  b5 | subcaption "(powers 'sum of all arrangements' — later)" (13,muted)   | T mid| x~322..758 y449..464
 *  b6 | magnifying-glass icon (circle+handle, ink)                           | Draw | x157..199 y512..551
 *  b6 | red-ringed Chip "Name the underlying selection first..." (16, w580 h54)| Chip | x250..830 y503..557
 */

import React from "react";
import { Circle, Text as SvgText } from 'react-native-svg';
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
import { roundRectD, lineD, tickD, IntervalDot } from "./math-kit";

const mult = (weight: number) => (weight >= 800 ? 0.58 : 0.5);

type Seg = { text: string; fill: string; weight?: number; w?: number; gapBefore?: number };

/** Build a row of left-anchored text segments centered as a whole block at
 * centerX — returns each segment's start-x alongside its text/fill/weight,
 * so a formula/header can be assembled term-by-term (per the maths spec's
 * "build the identity live" rule) without hand-computing offsets.
 *
 * Two lessons learned empirically (measured via getBoundingClientRect on
 * the actual render, per SCENE_AUTHORING.md Step 3's "measure the real
 * boxes" instruction) and baked in here:
 *  (1) Width is the char-count heuristic by default, but a segment may pass
 *      an explicit `w` (a real measurement) instead — the heuristic
 *      overestimates strings mixing carets/sub/superscripts with plain
 *      letters (their average glyph is narrower than a full-weight letter).
 *  (2) SVG's default xml:space handling STRIPS leading *and* trailing
 *      whitespace from every individual <SvgText> element (each segment here
 *      is its own element) — a " · foo" or "foo " segment silently loses
 *      that space, so inter-segment spacing cannot be encoded as literal
 *      leading/trailing space characters at all. Use `gapBefore` (px) for
 *      that instead; keep only INTERNAL spaces (e.g. "· 3²") in the text,
 *      those survive (collapsed, not stripped). */
function layoutSegs(segs: Seg[], size: number, centerX: number) {
  const widths = segs.map((s) => s.w ?? mult(s.weight ?? 800) * size * s.text.length);
  const gaps = segs.map((s) => s.gapBefore ?? 0);
  const total = widths.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
  let x = centerX - total / 2;
  return segs.map((s, i) => {
    x += gaps[i];
    const sx = x;
    x += widths[i];
    return { ...s, x: sx };
  });
}

export default function M11Ch06Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 1-3: the divisor costume — general setup, concrete
  // N=360 diagram, general formula) is fully erased once the place-value
  // preview (beat 4) needs the whole board. Group B (beats 4-6) is the
  // final group, never erased. Each element's own `on` is bounded to its
  // beat window (rather than a wrapper div's opacity) so the verifier's
  // Fade-opacity visibility check — which walks up to the nearest g.sc-fade,
  // not an arbitrary ancestor — sees the erasure too; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 1 && beat < 4;
  const bOn = beat >= 4;

  // ---- beat 1: symbolic formula + generic [0, aᵢ] number line ----
  // (widths measured via getBoundingClientRect — see layoutSegs' comment)
  const f1Segs = layoutSegs(
    [
      { text: "N = p₁^a₁", fill: INK, w: 104.3 },
      { text: "· p₂^a₂", fill: INK, w: 72.2, gapBefore: 9 },
      { text: "· ⋯", fill: INK, w: 40.7, gapBefore: 9 },
    ],
    28,
    540
  );

  // ---- beat 2: concrete N = 360 = 2³·3²·5¹ (widths measured; inter-segment
  // spacing is an explicit gapBefore, not a literal space character — see
  // layoutSegs' comment on why edge whitespace doesn't survive) ----
  const hdrSegs = layoutSegs(
    [
      { text: "N = 360 =", fill: INK, w: 105.1 },
      { text: "2³", fill: INK, w: 21.3, gapBefore: 8 },
      { text: "· 3²", fill: INK, w: 32.9, gapBefore: 8 },
      { text: "· 5¹", fill: INK, w: 31.9, gapBefore: 8 },
    ],
    26,
    540
  );

  const primeCols = [
    { label: "2³", digits: ["0", "1", "2", "3"], count: 4, cx: 210 },
    { label: "3²", digits: ["0", "1", "2"], count: 3, cx: 540 },
    { label: "5¹", digits: ["0", "1"], count: 2, cx: 870 },
  ];
  const TILE_W = 32;
  const TILE_GAP = 8;
  const TILE_Y = 350;
  const TILE_H = 30;
  const colRows = primeCols.map((c) => {
    const rowW = c.digits.length * TILE_W + (c.digits.length - 1) * TILE_GAP;
    const startX = c.cx - rowW / 2;
    return {
      ...c,
      startX,
      xs: c.digits.map((_, i) => startX + i * (TILE_W + TILE_GAP)),
    };
  });

  // ---- beat 3: general formula, boxed (HIGH) — widths measured, same
  // explicit-gapBefore rule as hdrSegs above. No gap between (a₁+1) and
  // (a₂+1)/⋯ — those are adjacent multiplied factors, not separated by a
  // space in the landed formula "(a₁+1)(a₂+1)⋯". ----
  const f3Segs = layoutSegs(
    [
      { text: "number of divisors =", fill: GREEN, w: 202.0 },
      { text: "(a₁+1)", fill: GREEN, w: 52.5, gapBefore: 7 },
      { text: "(a₂+1)", fill: GREEN, w: 52.5 },
      { text: "⋯", fill: GREEN, w: 22.3 },
    ],
    22,
    540
  );

  // ---- beat 4: two preview cards ----
  const leftTileX = [140, 176, 212, 248];
  const leftSlotX = [326, 362, 398, 434];
  const rightTileX = [698, 732, 766, 800, 834];
  const rightLetters = ["C", "H", "A", "I", "R"];
  const slotLabels = ["Th", "H", "T", "U"];

  // ---- beat 5: symmetry grid — all 6 perms of {1,2,3}, units digit green
  const perms: [string, string][] = [
    ["12", "3"],
    ["13", "2"],
    ["21", "3"],
    ["23", "1"],
    ["31", "2"],
    ["32", "1"],
  ];
  const gridCx = [210, 540, 870];
  const gridY = [340, 380];
  const gridEntries = perms.map((p, i) => {
    const row = Math.floor(i / 3);
    const cx = gridCx[i % 3];
    const size = 22;
    const w0 = mult(800) * size * p[0].length;
    const w1 = mult(800) * size * p[1].length;
    const startX = cx - (w0 + w1) / 2;
    return { prefix: p[0], suffix: p[1], x0: startX, x1: startX + w0, y: gridY[row] };
  });

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Two more costumes: divisors and place-value", "Do aur costumes: divisors aur place-value")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(310, 94, 770, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-3 (divisor costume) ===================== */}

      {/* beat 1 — symbolic setup + generic exponent-range number line */}
      {f1Segs.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, i * 0.5)}>
          <T x={s.x} y={149} size={28} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={178} size={15} fill={INK} weight={600}>
          {t("A divisor picks an exponent for each prime:", "Ek divisor har prime ke liye ek exponent chunta hai:")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.2)}
        d={lineD(440, 205, 640, 205)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <IntervalDot on={aOn && beat >= 1} delay={dl(1, 2.9)} x={460} y={205} open={false} r={6} />
      <IntervalDot on={aOn && beat >= 1} delay={dl(1, 3.2)} x={620} y={205} open={false} r={6} />
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 3.6)}
        d={[500, 540, 580].map((x) => tickD(x, 205, 5)).join(" ")}
        stroke={MUTED}
        sw={1.4}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.1)}>
        <T x={460} y={234} size={15} fill={INK}>
          0
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.4)}>
        <T x={620} y={234} size={15} fill={INK}>
          aᵢ
        </T>
      </Fade>

      {/* beat 2 — THE CONCRETE EXAMPLE: N = 360 = 2³·3²·5¹ */}
      {hdrSegs.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 2} delay={dl(2, i * 0.4)}>
          <T x={s.x} y={292} size={26} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {colRows.map((c, i) => (
        <Fade key={c.label} on={aOn && beat >= 2} delay={dl(2, 1.8 + i * 0.2)}>
          <T x={c.cx} y={330} size={24} fill={INK} weight={800}>
            {c.label}
          </T>
        </Fade>
      ))}
      {colRows.map((c, i) => (
        <Draw
          key={c.label}
          on={aOn && beat >= 2}
          delay={dl(2, 2.6 + i * 0.45)}
          d={c.xs.map((x) => roundRectD(x, TILE_Y, TILE_W, TILE_H, 6)).join(" ")}
          stroke={INK}
          sw={1.8}
          dur={0.4}
        />
      ))}
      {colRows.map((c, i) => (
        <Fade key={c.label} on={aOn && beat >= 2} delay={dl(2, 4.2 + i * 0.2)}>
          {c.xs.map((x, j) => (
            <T key={j} x={x + TILE_W / 2} y={370.4} size={16} fill={INK}>
              {c.digits[j]}
            </T>
          ))}
        </Fade>
      ))}
      {colRows.map((c, i) => (
        <Fade key={c.label} on={aOn && beat >= 2} delay={dl(2, 5.0 + i * 0.2)}>
          <T x={c.cx} y={405} size={15} fill={GREEN} weight={700}>
            {t(`${c.count} choices`, `${c.count} choices`)}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 2} delay={dl(2, 5.7)}>
        <T x={540} y={445} size={24} fill={GREEN} weight={800}>
          {t("divisors = 4 × 3 × 2 = 24", "divisors = 4 × 3 × 2 = 24")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 6.3)}>
        <T x={540} y={479} size={14} fill={AMBER_DARK}>
          {t(
            "each prime's choice is independent — multiply them",
            "har prime ka choice independent hai — multiply karo"
          )}
        </T>
      </Fade>

      {/* beat 3 (HIGH) — general formula lands, boxed */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={roundRectD(290, 515, 500, 70, 14)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      {f3Segs.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 3} delay={dl(3, 1.0 + i * 0.6)}>
          <T x={s.x} y={558} size={22} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}

      {/* ===================== Group B — beats 4-6 (place-value preview) ===================== */}

      {/* beat 4 — LEFT card: sum of numbers formed */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0)}>
        <T x={300} y={115} size={15} fill={INK} weight={700}>
          {t("sum of numbers formed", "bane hue numbers ka sum")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 0.6)}
        d={leftTileX.map((x) => roundRectD(x, 160, 28, 28, 6)).join(" ")}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.1)}>
        {leftTileX.map((x, i) => (
          <T key={x} x={x + 14} y={179} size={16} fill={INK} weight={700}>
            {["1", "2", "3", "4"][i]}
          </T>
        ))}
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 1.6)}
        d={arrowD(286, 174, 316, 174)}
        stroke={MUTED}
        sw={1.8}
        dur={0.3}
      />
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 2.0)}
        d={leftSlotX.map((x) => roundRectD(x, 160, 28, 28, 6)).join(" ")}
        stroke={MUTED}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.6)}>
        {leftSlotX.map((x) => (
          <T key={x} x={x + 14} y={179} size={16} fill={MUTED}>
            ?
          </T>
        ))}
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.1)}>
        {leftSlotX.map((x, i) => (
          <T key={x} x={x + 14} y={210} size={13} fill={MUTED}>
            {slotLabels[i]}
          </T>
        ))}
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.5)}>
        <T x={300} y={250} size={13} fill={AMBER_DARK}>
          {t("(place-value across every arrangement)", "(har arrangement mein place-value)")}
        </T>
      </Fade>

      {/* beat 4 — RIGHT card: rank of a word */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 4.0)}>
        <T x={780} y={115} size={15} fill={INK} weight={700}>
          {t("rank of a word", "ek word ka rank")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 4.6)}
        d={rightTileX.map((x) => roundRectD(x, 160, 28, 28, 6)).join(" ")}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 5.1)}>
        {rightTileX.map((x, i) => (
          <T key={x} x={x + 14} y={179} size={16} fill={INK} weight={700}>
            {rightLetters[i]}
          </T>
        ))}
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 5.7)}>
        <Circle
          cx={780}
          cy={214}
          r={14}
          fill={CREAM}
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="5 4"
        />
        <T x={780} y={219.5} size={16} fill={MUTED} weight={700}>
          ?
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 6.2)}>
        <T x={780} y={250} size={13} fill={AMBER_DARK}>
          {t("position in dictionary order?", "dictionary order mein position?")}
        </T>
      </Fade>

      {/* beat 5 — the key symmetry insight */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={292} size={16} fill={INK} weight={600}>
          {t("Every digit visits every place, equally often:", "Har digit har jagah, equal baar aata hai:")}
        </T>
      </Fade>
      {gridEntries.map((g, i) => (
        <Fade key={i} on={bOn && beat >= 5} delay={dl(5, 0.6 + i * 0.3)}>
          <T x={g.x0} y={g.y} size={22} fill={INK} weight={800} anchor="start">
            {g.prefix}
          </T>
          <T x={g.x1} y={g.y} size={22} fill={GREEN} weight={800} anchor="start">
            {g.suffix}
          </T>
        </Fade>
      ))}
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.8)}>
        <T x={540} y={426} size={15} fill={GREEN} weight={700}>
          {t(
            "→ each digit lands in the units place exactly 2 times",
            "→ har digit units place mein exactly 2 baar aata hai"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.4)}>
        <T x={540} y={456} size={13} fill={MUTED}>
          {t(
            "(the symmetry that powers 'sum of all arrangements' — later)",
            "(yehi symmetry 'sum of all arrangements' mein kaam aayegi — aage)"
          )}
        </T>
      </Fade>

      {/* beat 6 (red-margin guardrail, final) — closing mnemonic */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={`${lineD(179, 534, 196, 551)}`}
        stroke={INK}
        sw={3}
        dur={0.3}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 0)}>
        <Circle cx={170} cy={525} r={13} fill="none" stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.6)}>
        <Chip x={250} y={503} w={580} h={54} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t(
            "Name the underlying selection first; the formula follows.",
            "Pehle underlying selection ko naam do; formula khud aa jayega."
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
