/**
 * M11 Ch12 · Section 26 — "Product-meets-chain, and three nested layers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Worked example: product rule meets
 * chain rule") -> always-on title, distinct from the DB title above. TWO examples stacked with a
 * divider (Sec25 pattern): Example 1 (top, y88-306) — a product where one factor (v = cos 3x)
 * needs the chain rule. Example 2 (bottom, y336-590, the hardest chain-rule content in the
 * chapter) — y = sin(cos(x²)) peeled THREE layers deep, strictly outside-in, using Sec9's
 * "sin(□)" box device so the un-expanded inner function visibly stays intact while only the
 * outer layer differentiates.
 *
 * VERIFICATION (worked by hand before laying out pixels):
 *  Ex1: y=x²cos(3x). u=x², u'=2x. v=cos(3x): chain rule, outer cos'=−sin kept at "3x", times
 *   inner derivative 3 -> v'=−sin(3x)·3=−3sin(3x). Product rule: dy/dx=u'v+uv'=2x·cos(3x)+
 *   x²·(−3sin(3x))=2x cos(3x)−3x²sin(3x). Matches board seq4. ✓
 *  Ex2: y=sin(cos(x²)). Let w=cos(x²) so y=sin(w). Peel outside-in:
 *   layer1 (outermost): d/dw sin(w)=cos(w)=cos(cos(x²)) — the argument cos(x²) is NOT expanded,
 *    kept as an intact "□" while only sin differentiates. Matches board seq6.
 *   layer2: d/dx cos(x²) treats x² as its own intact argument -> −sin(x²). Matches board seq7a.
 *   layer3 (innermost): d/dx x² = 2x. Matches board seq7b.
 *   Multiply the three: dy/dx = cos(cos(x²))·(−sin(x²))·2x = −2x sin(x²) cos(cos(x²)).
 *   Matches board seq8. ✓ One missed inner-derivative factor would silently drop a whole term —
 *   this is why the peel is staged as three separate, numbered rows rather than one leap.
 *
 * board_reveal_at_english  = [0.0, 8.53, 21.25, 39.94, 59.22, 70.83, 82.26, 95.06] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 8.53, 20.74, 34.13, 50.52, 60.93, 73.9, 86.78].
 * beat0 = seq1 heading, always-on title. beats1-7 = seq2-8, gated `beat >= k`:
 *  0(title, always-on) | "Worked example: product rule meets chain rule"
 *  1 | seq2 (normal) — given y=x²cos(3x), identify u=x², v=cos(3x); flag v as needing chain rule
 *      (dashed chip + a short amber tag beside it, no new vertical row spent)
 *  2 | seq3 (normal, formula) — peel v's chain in two stages on one line, land v'=−3sin(3x)
 *  3 | seq4 (HIGH, boxed) — apply the product rule, land dy/dx = 2x cos(3x) − 3x²sin(3x)
 *  4 | seq5 (normal) — Example 2 heading "Advanced: three nested layers" (red, elevated
 *      difficulty cue) + given y = sin(cos(x²))
 *  5 | seq6 (normal) — LAYER 1 row: numbered circle "1" + sin(□) → cos(□), caption clarifying
 *      □ = cos(x²) stays untouched (the box device from Sec9, reused for its exact purpose here)
 *  6 | seq7 (normal) — LAYER 2 + LAYER 3 rows, built one at a time: cos(x²) → −sin(x²), then
 *      x² → 2x, each its own numbered circle+row so the outside-in order is unmistakable
 *  7 | seq8 (HIGH, boxed) — multiply the full chain, land dy/dx = −2x sin(x²) cos(cos(x²))
 *
 * Layout plan (x-range × y-range per element; Anek sans unless noted script; HIGH results use a
 * hand-drawn roundRectD+T box (sw=3, Sec23/24 pattern) rather than <Chip> — Chip's stroke width
 * is fixed at 1.8 and can't carry the extra weight a HIGH landing needs; this also sidesteps the
 * ring-vs-neighbour clearance fights a full ringD would pick given how little vertical room
 * Example 2's 3-layer stack leaves — a sanity-check tick (checkD) supplies the "boxed answer,
 * then verify" beat instead, on BOTH examples per the maths spec's worked_examples flow):
 *  title (script,size26,mid,x540)                         | Fade | EN x218..862/HI x260..820, y58
 *  b1 given "y = x² cos(3x)" (20,ink,mid)                  | T    | x470..610  y88.4..110.2 (bl104)
 *  b1 underline                                             | Draw | x470..610 y122
 *  b1 Chip "u = x²" (18,amber_dark)                         | Chip | x415..505 y136..172
 *  b1 Chip "v = cos(3x)" (18,amber_dark, dashed)             | Chip | x535..665 y136..172
 *  b1 flag "needs chain rule" (14,amber_dark,st)             | T    | EN x681..800/HI x681..807, y147..162 (bl158)
 *  b2 "v = cos(3x)" (17,ink,end)                             | T    | x358.5..452 y184.7..203.3 (bl198)
 *  b2 "⇒ v' = −sin(3x)·3 = −3sin(3x)" (17,ink,start)         | T    | x466..704 y184.7..203.3 (bl198)
 *  b3 box (green sw3, roundRect)                             | Draw | x385..695 y238..282
 *  b3 "dy/dx = 2x cos(3x) − 3x²sin(3x)" (18,green_dark,mid)  | T    | x400.5..679.5 y252..271.6 (bl266)
 *  b3 checkD sanity tick                                      | Draw | x712..728 y252..268
 *  divider (beat>=4)                                          | Draw | x100..980 y322
 *  b4 heading "Advanced: three nested layers" (17,red,mid)    | T    | EN x416.75..663.25 y336.7..355.3 (bl350)
 *  b4 underline                                                | Draw | x417..663 y368
 *  b4 given "y = sin(cos(x²))" (20,ink,mid)                    | T    | x455..625 y380.4..402.2 (bl396)
 *  b5 circle "1" (r14, amber_dark)                              | Draw | x80..108 y413..441
 *  b5 num "1" (14,ink,mid)                                       | T   | x94 y~427..435 (bl431)
 *  b5 "sin(□) → cos(□)" (20,ink,start)                           | T   | x122..272 y416.4..438.2 (bl432)
 *  b5 caption "(□ = cos x² — untouched)" (13,muted,st)           | T   | x292..448(en)/454.5(hi) y421.9..436 (bl432)
 *  b6 connector 1→2                                              | Draw | x94 y441..453
 *  b6 circle "2" (r14, amber_dark)                                | Draw | x80..108 y453..481
 *  b6 num "2" (14,ink,mid)                                         | T  | x94 y~467..475 (bl471)
 *  b6 "cos(x²) → −sin(x²)" (20,ink,start)                          | T  | x122..312 y456.4..478.2 (bl472)
 *  b6 connector 2→3                                                | Draw | x94 y481..493
 *  b6 circle "3" (r14, amber_dark)                                  | Draw | x80..108 y493..521
 *  b6 num "3" (14,ink,mid)                                           | T | x94 y~507..515 (bl511)
 *  b6 "x² → 2x" (20,ink,start)                                       | T | x122..192 y496.4..518.2 (bl512)
 *  b7 leading "dy/dx = cos(cos x²)·(−sin x²)·2x =" (14,ink,end)       | T | x289..527 y549.7..566.3 (bl561)
 *  b7 box (green sw3, roundRect)                                      | Draw | x541..791 y534..576
 *  b7 "−2x sin(x²) cos(cos(x²))" (17,green_dark,mid)                  | T | x564..768 y547.7..566.3 (bl561)
 *  b7 checkD sanity tick                                               | Draw | x807..823 y549..560
 * Ends y576 (box) / y560 (check), safe bottom 596 -> ≥20px spare throughout.
 */

import React from "react";
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, lineD, roundRectD, checkD } from "./math-kit";

export default function M11Ch12Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Worked example: product rule meets chain rule", "Worked example: product rule + chain rule")}
        </T>
      </Fade>

      {/* ===================== EXAMPLE 1 — product rule meets chain rule ===================== */}

      {/* beat 1 — given, identify u and v, flag v as a composition */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={20} fill={INK} anchor="middle" weight={700}>
          {"y = x² cos(3x)"}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M470 122 L610 122" stroke={AMBER_DARK} sw={1.6} delay={dl(1, 0.4)} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Chip x={415} y={136} w={90} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          u = x²
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Chip x={535} y={136} w={130} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false} dashed>
          v = cos(3x)
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={681} y={158} size={14} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("needs chain rule", "chain rule chahiye")}
        </T>
      </Fade>

      {/* beat 2 — peel v's chain in two stages, land v' */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={452} y={198} size={17} fill={INK} anchor="end" weight={700}>
          {"v = cos(3x)"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={466} y={198} size={17} fill={INK} anchor="start" weight={700}>
          {"⇒ v' = −sin(3x)·3 = −3sin(3x)"}
        </T>
      </Fade>

      {/* beat 3 — apply the product rule, land it boxed (HIGH) + sanity check */}
      <Draw on={beat >= 3} d={roundRectD(385, 238, 310, 44, 12)} stroke={GREEN} sw={3} delay={dl(3, 0)} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={540} y={266} size={18} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"dy/dx = 2x cos(3x) − 3x²sin(3x)"}
        </T>
      </Fade>
      <Draw on={beat >= 3} d={checkD(720, 260, 15)} stroke={GREEN} sw={2.2} delay={dl(3, 1.6)} dur={0.5} />

      {/* divider between the two examples */}
      <Draw on={beat >= 4} d="M100 322 L980 322" stroke={AMBER_DARK} sw={1} delay={dl(4, 0)} />

      {/* ===================== EXAMPLE 2 — three nested layers ===================== */}

      {/* beat 4 — heading, given */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={350} size={17} fill={RED} anchor="middle" weight={800}>
          {t("Advanced: three nested layers", "Advanced: teen nested layers")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M417 368 L663 368" stroke={RED} sw={1.4} delay={dl(4, 0.8)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={396} size={20} fill={INK} anchor="middle" weight={700}>
          {"y = sin(cos(x²))"}
        </T>
      </Fade>

      {/* beat 5 — LAYER 1: outermost sin(□) -> cos(□), box kept intact */}
      <Draw on={beat >= 5} d={circleD(94, 427, 14)} stroke={AMBER_DARK} sw={2} delay={dl(5, 0)} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={94} y={431} size={14} fill={INK} anchor="middle" weight={800}>
          1
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={122} y={432} size={20} fill={INK} anchor="start" weight={700}>
          {"sin(□) → cos(□)"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={292} y={432} size={13} fill={MUTED} anchor="start">
          {t("(□ = cos x² — untouched)", "(□ = cos x² — badla nahi)")}
        </T>
      </Fade>

      {/* beat 6 — LAYER 2 then LAYER 3, built one at a time */}
      <Draw on={beat >= 6} d={lineD(94, 441, 94, 453)} stroke={AMBER_DARK} sw={2} delay={dl(6, 0)} dur={0.4} />
      <Draw on={beat >= 6} d={circleD(94, 467, 14)} stroke={AMBER_DARK} sw={2} delay={dl(6, 0.6)} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={94} y={471} size={14} fill={INK} anchor="middle" weight={800}>
          2
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={122} y={472} size={20} fill={INK} anchor="start" weight={700}>
          {"cos(x²) → −sin(x²)"}
        </T>
      </Fade>

      <Draw on={beat >= 6} d={lineD(94, 481, 94, 493)} stroke={AMBER_DARK} sw={2} delay={dl(6, 1.9)} dur={0.4} />
      <Draw on={beat >= 6} d={circleD(94, 507, 14)} stroke={AMBER_DARK} sw={2} delay={dl(6, 2.5)} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={94} y={511} size={14} fill={INK} anchor="middle" weight={800}>
          3
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={122} y={512} size={20} fill={INK} anchor="start" weight={700}>
          {"x² → 2x"}
        </T>
      </Fade>

      {/* beat 7 — multiply the full chain, land it boxed (HIGH) + sanity check */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={527} y={561} size={14} fill={INK} anchor="end" weight={700}>
          {"dy/dx = cos(cos x²)·(−sin x²)·2x ="}
        </T>
      </Fade>
      <Draw on={beat >= 7} d={roundRectD(541, 534, 250, 42, 12)} stroke={GREEN} sw={3} delay={dl(7, 0.8)} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={666} y={561} size={17} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"−2x sin(x²) cos(cos(x²))"}
        </T>
      </Fade>
      <Draw on={beat >= 7} d={checkD(815, 555, 15)} stroke={GREEN} sw={2.2} delay={dl(7, 2.2)} dur={0.5} />
    </Scene>
  );
}
