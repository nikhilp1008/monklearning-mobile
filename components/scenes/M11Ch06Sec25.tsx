/**
 * M11 Ch06 · Section 25 — "Two categories, and 'at least' by casework"
 * SEVENTH section of Subtopic 3 "Combinations". Canvas 1080×620 · safe
 * x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * TWO worked examples, erase transition between them (Sec8/Sec24 pattern).
 * Example 3 is a clean AND-multiply of two INDEPENDENT categories (boys
 * pool, girls pool) — callback to Sec1's Multiplication Principle. Example 4
 * is the section's centerpiece: "at least 3 women" splits into 3 MUTUALLY
 * EXCLUSIVE cases (3W+2M, 4W+1M, 5W+0M) — callback to Sec2's Addition
 * Principle — built one case at a time (each itself an AND-multiply of two
 * nCr values), landing three subtotals that get summed to 686. The closing
 * guardrail is the strategic nuance that the complement ("at most 2 women":
 * 0,1,2) ALSO has exactly 3 cases, so switching to the complement buys
 * nothing here — shown as a literal side-by-side "3 cases vs 3 cases"
 * diagram, not just asserted in prose. All ⁷C₂/⁵C₂/⁶C₃/⁸C₂/⁶C₄/⁸C₁/⁶C₅/⁸C₀
 * are LITERAL numeric cases → real super/subscript digits in non-script
 * (Anek) text, per the notation rule.
 *
 * Beats (board_reveal_at_english [0,18.86,27.56,41.73,53.25,66.9,88.15,98.05],
 * hinglish [0,18.43,25.51,41.13,51.88,63.06,85.67,93.35]):
 *  0 Example 3 heading + underline flourish
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  1 setup: "Boys AND girls — two independent selections → multiply." line,
 *    then two pools draw (7 boys dot-pool left, 5 girls dot-pool right),
 *    2 dots go green in each pool, a rounded selection box rings each pair,
 *    "AND" lands in the gap between them, then captions "2 of 7 → ⁷C₂" /
 *    "2 of 5 → ⁵C₂" underneath
 *  2 (HIGH) formula lands: "⁷C₂ × ⁵C₂ = 21 × 10 = 210" boxed green + check
 *  [group A erased at beat>=3]
 *  3 Example 4 heading + underline flourish (headOn, persists to end)
 *  [group SETUP: setupOn = beat===4, erased at beat>=5]
 *  4 lead line ("At least 3 women" → 3,4,or 5 women. Mutually exclusive →
 *    add.) then 3 case chips ("3W+2M","4W+1M","5W+0M") with "+" between —
 *    a preview of the addition to come
 *  [group COMPUTE: computeOn = beat 5..6, erased at beat>=7]
 *  5 three case-columns build one at a time (thirds x=210/540/870), each:
 *    case label → "⁶C₃×⁸C₂" style nCr pair → "= 20×28" arithmetic → boxed
 *    green subtotal (560/120/6), then "+" signs connect the three subtotal
 *    boxes left-to-right so the row itself reads "560 + 120 + 6"
 *  [group ANSWER: answerOn = beat>=6, persists — the final boxed sum]
 *  6 (HIGH) fresh landed line "560 + 120 + 6 = 686" boxed green + check,
 *    in the verdict band below the case-columns
 *  [group GUARD: guardOn = beat>=7, persists — the closing nuance]
 *  7 red guardrail chip (warning icon + "Complement here also has 3 cases…
 *    direct casework is cleaner") right under the heading, THEN below it a
 *    concrete side-by-side diagram: LEFT "AT LEAST 3 WOMEN" chips 3/4/5 →
 *    "3 cases" (green); a divider; RIGHT "AT MOST 2 WOMEN (complement)"
 *    chips 0/1/2 → "3 cases" (amber) — same count, no savings, made visual
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                                  | T mid | x~210..870 y39..82
 *  [group A: aOn = beat 0..2]
 *  b0 | heading "Example 3 (JEE Main): committee of 4..." (22,ink,w700)| T mid| x166..914 y113..137
 *  b0 | underline flourish (amber)                                    | Draw| x170..910 y152
 *  b1 | sentence "Boys AND girls — two independent..." (18,ink)        | T mid| x~243..837 y168..191
 *  b1 | "7 boys"/"5 girls" labels (14,muted)                            | T mid| x~272..328 / 752..808 y254..268
 *  b1 | 7 boy dots (r8,sp30,cx300,y310) + 5 girl dots (r8,sp34,cx780,y310)| circ| x202..398 / 704..856 y302..318
 *  b1 | 2 selection boxes (rounded, green) around chosen pairs             | Draw| x246..324 / 722..804 y286..342
 *  b1 | "AND" (24,amber-dk,w800)                                          | T mid| x~510..570 y296..323
 *  b1 | captions "2 of 7→⁷C₂" / "2 of 5→⁵C₂" (15,amber-dk)                  | T mid| x~245..355 / 725..835 y360..377
 *  b2 | formula "⁷C₂×⁵C₂=21×10=" (ink) "210" (green,boxed) (30,w800)         | T st | computed, centered x540 y~508..534
 *  b2 | hero box (green) + checkmark                                        | Draw | computed, y486..570
 *  [group A erased at beat>=3]
 *  [group HEAD: headOn = beat>=3, persists]
 *  b3 | heading "Example 4 (JEE Adv): committee of 5..." (22,ink,w700)      | T mid | x180..900 y113..137
 *  b3 | underline flourish (amber)                                          | Draw | x180..900 y152
 *  [group SETUP: setupOn = beat===4]
 *  b4 | lead '"At least 3 women"→3,4,or 5. Mutually exclusive→add.' (18,ink)| T mid | x~180..900 y168..191
 *  b4 | 3 case chips (130×50) "3W+2M"/"4W+1M"/"5W+0M" (18,ink)               | Chip | x145..935 y290..340
 *  b4 | 2 "+" signs between chips (22,ink,w700)                             | T mid | x375,705 y~313..335
 *  [group COMPUTE: computeOn = beat 5..6]
 *  b5 | 3 columns: label(13,muted)/nCr(20,ink,w700)/eq(15,ink)/box(green,22)| T/Chip| x165..915 y277..418
 *  b5 | 2 "+" signs connecting subtotal boxes (24,ink,w700)                 | T mid | x375,705 y~386..412
 *  [group ANSWER: answerOn = beat>=6, persists]
 *  b6 | "560 + 120 + 6 = 686" (30,w700/800, green nums) boxed + check       | T st  | computed, centered x540 y486..570
 *  [group GUARD: guardOn = beat>=7, persists]
 *  b7 | warning-triangle icon (red)                                        | Draw  | x134..166 y178..208
 *  b7 | guardrail chip (cream/red border)                                  | Chip  | x200..880 y176..224
 *  b7 | divider (muted)                                                    | Draw  | x540 y278..360
 *  b7 | LEFT "AT LEAST 3 WOMEN" (15,ink,w700) + 3 chips (44×44,green) 3/4/5 | T/Draw| x236..364 y277..354
 *  b7 | LEFT caption "3 cases" (14,green,w700)                             | T mid | x275..325 y376..390
 *  b7 | RIGHT "AT MOST 2 WOMEN (complement)" (15,ink,w700) + 3 chips        | T/Draw| x675..885 y277..354
 *  b7 | RIGHT caption "3 cases" (14,amber-dk,w700)                         | T mid | x755..805 y376..390
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
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD, lineD } from "./math-kit";

export default function M11Ch06Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Example 3 (Group A, beats 0-2) fully erases once Example 4's heading
  // fires (beat 3) — the two worked examples are independent problems, same
  // erase pattern as Sec8/Sec24. Within Example 4: the case-setup preview
  // (beat 4) erases once the real per-case computation starts (beat 5) —
  // it would otherwise sit stale in the same band the computation needs.
  // The computation itself (beat 5-6) erases once the guardrail's
  // comparison diagram needs that same band (beat 7), but the landed
  // answer (beat>=6) persists into the final frame — it's the "notes
  // photo" payoff. Each element's own `on` is bounded to its beat window
  // directly (never a wrapper div's opacity) so the verifier's Fade-opacity
  // visibility check — which walks up to the nearest g.sc-fade, not an
  // arbitrary ancestor — sees every erasure correctly; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 3;
  const headOn = beat >= 3;
  const setupOn = beat === 4;
  const computeOn = beat >= 5 && beat < 7;
  const answerOn = beat >= 6;
  const guardOn = beat >= 7;

  // ---- Example 3: boys pool (7) + girls pool (5), 2 chosen (green) each ----
  const boyN = 7,
    boySpacing = 30,
    boyCx = 300,
    poolY = 310,
    poolR = 8;
  const boyStartX = boyCx - ((boyN - 1) * boySpacing) / 2; // 210
  const boyDots = Array.from({ length: boyN }, (_, i) => ({
    x: boyStartX + i * boySpacing,
    selected: i === 2 || i === 3,
  }));
  const girlN = 5,
    girlSpacing = 34,
    girlCx = 780;
  const girlStartX = girlCx - ((girlN - 1) * girlSpacing) / 2; // 712
  const girlDots = Array.from({ length: girlN }, (_, i) => ({
    x: girlStartX + i * girlSpacing,
    selected: i === 1 || i === 2,
  }));
  const selPad = 16;
  const boySelD = roundRectD(
    boyStartX + 2 * boySpacing - poolR - selPad,
    poolY - poolR - selPad,
    (boyStartX + 3 * boySpacing + poolR + selPad) - (boyStartX + 2 * boySpacing - poolR - selPad),
    (poolR + selPad) * 2,
    14
  );
  const girlSelD = roundRectD(
    girlStartX + girlSpacing - poolR - selPad,
    poolY - poolR - selPad,
    (girlStartX + 2 * girlSpacing + poolR + selPad) - (girlStartX + girlSpacing - poolR - selPad),
    (poolR + selPad) * 2,
    14
  );

  // ---- Example 3 beat2: "⁷C₂ × ⁵C₂ = 21 × 10 = " (ink) "210" (green, boxed) ----
  const ex3Ink = "⁷C₂ × ⁵C₂ = 21 × 10 = ";
  const ex3Green = "210";
  const ex3Size = 30;
  const ex3Mult = 0.58;
  const ex3InkW = ex3Mult * ex3Size * ex3Ink.length;
  const ex3GreenW = ex3Mult * ex3Size * ex3Green.length;
  const ex3TotalW = ex3InkW + ex3GreenW;
  const ex3X0 = 540 - ex3TotalW / 2;
  const ex3InkX = ex3X0;
  const ex3GreenX = ex3X0 + ex3InkW;
  const ex3HeroPad = 30;
  const ex3HeroX1 = ex3X0 - ex3HeroPad;
  const ex3HeroX2 = ex3X0 + ex3TotalW + ex3HeroPad;
  const ex3HeroY = 486;
  const ex3HeroH = 84;

  // ---- Example 4 beat4: case-setup preview chips ----
  const setupCases = [
    { cx: 210, text: "3W + 2M" },
    { cx: 540, text: "4W + 1M" },
    { cx: 870, text: "5W + 0M" },
  ];

  // ---- Example 4 beat5: 3 case-columns (thirds x=210/540/870) ----
  const caseCols = [
    { cx: 210, label: "3W + 2M", nCr: "⁶C₃ × ⁸C₂", eq: "= 20 × 28", val: "560", base: 0.0 },
    { cx: 540, label: "4W + 1M", nCr: "⁶C₄ × ⁸C₁", eq: "= 15 × 8", val: "120", base: 5.0 },
    { cx: 870, label: "5W + 0M", nCr: "⁶C₅ × ⁸C₀", eq: "= 6 × 1", val: "6", base: 10.0 },
  ];
  const colRowA = 288,
    colRowB = 322,
    colRowC = 356,
    colBoxY = 376,
    colBoxH = 42,
    colBoxW = 80;

  // ---- Example 4 beat6: "560 + 120 + 6 = 686" landed sum ----
  const sumSegs = [
    { text: "560", fill: GREEN, weight: 800 },
    { text: " + ", fill: INK, weight: 700 },
    { text: "120", fill: GREEN, weight: 800 },
    { text: " + ", fill: INK, weight: 700 },
    { text: "6", fill: GREEN, weight: 800 },
    { text: " = ", fill: INK, weight: 700 },
    { text: "686", fill: GREEN, weight: 800 },
  ];
  const sumSize = 30;
  const sumMult = 0.58;
  const sumWidths = sumSegs.map((s) => sumMult * sumSize * s.text.length);
  const sumTotalW = sumWidths.reduce((a, b) => a + b, 0);
  let sumCursor = 540 - sumTotalW / 2;
  const sumXs = sumWidths.map((w) => {
    const x = sumCursor;
    sumCursor += w;
    return x;
  });
  const sumHeroPad = 30;
  const sumHeroX1 = 540 - sumTotalW / 2 - sumHeroPad;
  const sumHeroX2 = 540 + sumTotalW / 2 + sumHeroPad;
  const sumHeroY = 486;
  const sumHeroH = 84;

  // ---- Example 4 beat7: guardrail chip text + at-least-3 vs at-most-2 ----
  const guardChipText = t(
    "Complement here also has 3 cases (0,1,2 women), so direct casework is cleaner.",
    "Yahaan complement mein bhi 3 cases hain (0,1,2 women), toh direct casework hi saaf hai."
  );
  const guardChipSize = 15.5;
  const guardChipW = Math.max(500, 0.5 * guardChipSize * guardChipText.length + 56);
  const guardChipX = 540 - guardChipW / 2;

  const leftLabel = t("AT LEAST 3 WOMEN", "KAM SE KAM 3 WOMEN");
  const rightLabel = t(
    "AT MOST 2 WOMEN (complement)",
    "ZYADA SE ZYADA 2 WOMEN (complement)"
  );
  const leftCases = ["3", "4", "5"];
  const rightCases = ["0", "1", "2"];
  const leftXs = [250, 300, 350];
  const rightXs = [730, 780, 830];
  const chipR = 22; // half-width/height of each small square case chip

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "Two categories, and 'at least' by casework",
            "Do categories, aur 'at least' casework se"
          )}
        </T>
      </Fade>

      {/* ===================== Example 3 (beats 0-2) ===================== */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={22} fill={INK} weight={700}>
          {t(
            "Example 3 (JEE Main): committee of 4 = 2 boys + 2 girls, from 7B, 5G",
            "Example 3 (JEE Main): committee of 4 = 2 boys + 2 girls, from 7B, 5G"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.7)}
        d={lineD(170, 152, 910, 152)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 1 — two independent pools, 2 chosen (green) in each, AND joins them */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={185} size={18} fill={INK}>
          {t(
            "Boys AND girls — two independent selections → multiply the counts.",
            "Boys AND girls — do independent selections → counts multiply karo."
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.6)}>
        <T x={boyCx} y={264} size={14} fill={MUTED}>
          {t("7 boys", "7 boys")}
        </T>
        <T x={girlCx} y={264} size={14} fill={MUTED}>
          {t("5 girls", "5 girls")}
        </T>
      </Fade>
      {boyDots.map((d, i) => (
        <Fade key={`b${i}`} on={aOn && beat >= 1} delay={dl(1, 1.0 + i * 0.08)}>
          <Circle
            cx={d.x}
            cy={poolY}
            r={poolR}
            fill={d.selected ? GREEN : CREAM}
            stroke={d.selected ? GREEN : INK}
            strokeWidth={1.8}
          />
        </Fade>
      ))}
      {girlDots.map((d, i) => (
        <Fade key={`g${i}`} on={aOn && beat >= 1} delay={dl(1, 1.7 + i * 0.08)}>
          <Circle
            cx={d.x}
            cy={poolY}
            r={poolR}
            fill={d.selected ? GREEN : CREAM}
            stroke={d.selected ? GREEN : INK}
            strokeWidth={1.8}
          />
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.4)}
        d={boySelD}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.8)}
        d={girlSelD}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.4)}>
        <T x={540} y={316} size={24} fill={AMBER_DARK} weight={800}>
          {t("AND", "AND")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.0)}>
        <T x={boyCx} y={372} size={15} fill={AMBER_DARK}>
          {t("2 of 7 → ⁷C₂", "2 of 7 → ⁷C₂")}
        </T>
        <T x={girlCx} y={372} size={15} fill={AMBER_DARK}>
          {t("2 of 5 → ⁵C₂", "2 of 5 → ⁵C₂")}
        </T>
      </Fade>

      {/* beat 2 — land: ⁷C₂ × ⁵C₂ = 21 × 10 = 210 */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={ex3InkX} y={530} size={ex3Size} fill={INK} weight={800} anchor="start">
          {ex3Ink}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={ex3GreenX} y={530} size={ex3Size} fill={GREEN} weight={800} anchor="start">
          {ex3Green}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.3)}
        d={roundRectD(ex3HeroX1, ex3HeroY, ex3HeroX2 - ex3HeroX1, ex3HeroH, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 2.0)}
        d={checkD(ex3HeroX2 + 22, 522, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />

      {/* ===================== Example 4 (beats 3-7) ===================== */}
      <Fade on={headOn} delay={dl(3, 0.3)}>
        <T x={540} y={130} size={22} fill={INK} weight={700}>
          {t(
            "Example 4 (JEE Adv): committee of 5, at least 3 women, from 8M, 6W",
            "Example 4 (JEE Adv): committee of 5, at least 3 women, from 8M, 6W"
          )}
        </T>
      </Fade>
      <Draw
        on={headOn}
        delay={dl(3, 0.7)}
        d={lineD(180, 152, 900, 152)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 4 — setup: "at least 3" -> 3 mutually-exclusive cases, add */}
      <Fade on={setupOn} delay={dl(4, 0)}>
        <T x={540} y={185} size={18} fill={INK}>
          {t(
            "\"At least 3 women\" → 3, 4, or 5 women. Mutually exclusive → add.",
            "\"Kam se kam 3 women\" → 3, 4, ya 5 women. Mutually exclusive → add karo."
          )}
        </T>
      </Fade>
      {setupCases.map((c, i) => (
        <Draw
          key={i}
          on={setupOn}
          delay={dl(4, 0.8 + i * 0.6)}
          d={roundRectD(c.cx - 65, 290, 130, 50, 12)}
          stroke={INK}
          sw={1.8}
          dur={0.5}
        />
      ))}
      {setupCases.map((c, i) => (
        <Fade key={`t${i}`} on={setupOn} delay={dl(4, 1.1 + i * 0.6)}>
          <T x={c.cx} y={322} size={18} fill={INK} weight={700}>
            {c.text}
          </T>
        </Fade>
      ))}
      <Fade on={setupOn} delay={dl(4, 3.0)}>
        <T x={375} y={322} size={22} fill={INK} weight={700}>
          +
        </T>
        <T x={705} y={322} size={22} fill={INK} weight={700}>
          +
        </T>
      </Fade>

      {/* beat 5 — three case-columns, built one at a time */}
      {caseCols.map((c, i) => (
        <React.Fragment key={i}>
          <Fade on={computeOn} delay={dl(5, c.base + 0.0)}>
            <T x={c.cx} y={colRowA} size={13} fill={MUTED} weight={600}>
              {c.label}
            </T>
          </Fade>
          <Fade on={computeOn} delay={dl(5, c.base + 0.6)}>
            <T x={c.cx} y={colRowB} size={20} fill={INK} weight={700}>
              {c.nCr}
            </T>
          </Fade>
          <Fade on={computeOn} delay={dl(5, c.base + 1.2)}>
            <T x={c.cx} y={colRowC} size={15} fill={INK}>
              {c.eq}
            </T>
          </Fade>
          <Draw
            on={computeOn}
            delay={dl(5, c.base + 1.7)}
            d={roundRectD(c.cx - colBoxW / 2, colBoxY, colBoxW, colBoxH, 10)}
            stroke={GREEN}
            sw={2}
            dur={0.5}
          />
          <Fade on={computeOn} delay={dl(5, c.base + 2.0)}>
            <T x={c.cx} y={colBoxY + colBoxH / 2 + 22 * 0.34} size={22} fill={GREEN} weight={800}>
              {c.val}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={computeOn} delay={dl(5, 12.6)}>
        <T x={375} y={colBoxY + colBoxH / 2 + 24 * 0.34} size={24} fill={INK} weight={700}>
          +
        </T>
      </Fade>
      <Fade on={computeOn} delay={dl(5, 12.9)}>
        <T x={705} y={colBoxY + colBoxH / 2 + 24 * 0.34} size={24} fill={INK} weight={700}>
          +
        </T>
      </Fade>

      {/* beat 6 — land: 560 + 120 + 6 = 686 */}
      {sumSegs.map((s, i) => (
        <Fade key={i} on={answerOn} delay={dl(6, 0.15 * i)}>
          <T x={sumXs[i]} y={530} size={sumSize} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={answerOn}
        delay={dl(6, 1.3)}
        d={roundRectD(sumHeroX1, sumHeroY, sumHeroX2 - sumHeroX1, sumHeroH, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={answerOn}
        delay={dl(6, 2.1)}
        d={checkD(sumHeroX2 + 22, 522, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />

      {/* beat 7 — guardrail: complement also has 3 cases, no savings here */}
      <Draw
        on={guardOn}
        delay={dl(7, 0.2)}
        d={`M150 178 L134 208 L166 208 Z M150 186 L150 197`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={guardOn} delay={dl(7, 0.8)}>
        <Circle cx={150} cy={204} r={1.8} fill={RED} />
      </Fade>
      <Fade on={guardOn} delay={dl(7, 1.0)}>
        <Chip
          x={guardChipX}
          y={176}
          w={guardChipW}
          h={48}
          fill={CREAM}
          stroke={RED}
          textFill={RED}
          size={guardChipSize}
          script={false}
        >
          {guardChipText}
        </Chip>
      </Fade>

      <Draw
        on={guardOn}
        delay={dl(7, 1.8)}
        d={lineD(540, 278, 540, 360)}
        stroke={MUTED}
        sw={1.4}
        dur={0.5}
      />

      {/* LEFT — "at least 3 women": cases 3,4,5 */}
      <Fade on={guardOn} delay={dl(7, 2.2)}>
        <T x={300} y={288} size={15} fill={INK} weight={700}>
          {leftLabel}
        </T>
      </Fade>
      {leftCases.map((v, i) => (
        <Draw
          key={i}
          on={guardOn}
          delay={dl(7, 2.6 + i * 0.2)}
          d={roundRectD(leftXs[i] - chipR, 310, chipR * 2, chipR * 2, 8)}
          stroke={GREEN}
          sw={2}
          dur={0.4}
        />
      ))}
      {leftCases.map((v, i) => (
        <Fade key={`v${i}`} on={guardOn} delay={dl(7, 2.8 + i * 0.2)}>
          <T x={leftXs[i]} y={310 + chipR + 22 * 0.34} size={22} fill={GREEN} weight={800}>
            {v}
          </T>
        </Fade>
      ))}
      <Fade on={guardOn} delay={dl(7, 3.6)}>
        <T x={300} y={380} size={14} fill={GREEN} weight={700}>
          {t("3 cases", "3 cases")}
        </T>
      </Fade>

      {/* RIGHT — "at most 2 women" (complement): cases 0,1,2 */}
      <Fade on={guardOn} delay={dl(7, 4.0)}>
        <T x={780} y={288} size={15} fill={INK} weight={700}>
          {rightLabel}
        </T>
      </Fade>
      {rightCases.map((v, i) => (
        <Draw
          key={i}
          on={guardOn}
          delay={dl(7, 4.4 + i * 0.2)}
          d={roundRectD(rightXs[i] - chipR, 310, chipR * 2, chipR * 2, 8)}
          stroke={AMBER_DARK}
          sw={2}
          dur={0.4}
        />
      ))}
      {rightCases.map((v, i) => (
        <Fade key={`v${i}`} on={guardOn} delay={dl(7, 4.6 + i * 0.2)}>
          <T x={rightXs[i]} y={310 + chipR + 22 * 0.34} size={22} fill={AMBER_DARK} weight={800}>
            {v}
          </T>
        </Fade>
      ))}
      <Fade on={guardOn} delay={dl(7, 5.4)}>
        <T x={780} y={380} size={14} fill={AMBER_DARK} weight={700}>
          {t("3 cases", "3 cases")}
        </T>
      </Fade>
    </Scene>
  );
}
