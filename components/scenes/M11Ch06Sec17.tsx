/**
 * M11 Ch06 · Section 17 — "A parity constraint, and the circular gap method"
 * EIGHTH section of Subtopic 2 "Permutations". Canvas 1080×620 · safe
 * x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * TWO worked examples. Example 3 (JEE Main) reuses Sec6/Sec8's constrained-
 * slot-first vocabulary (digit roster + 4 slot boxes, constrained slot filled
 * FIRST). Example 4 (JEE Advanced) is the section's centerpiece: Sec14's
 * circular-permutation (n-1)! result combined with Sec15's "NOT TOGETHER:
 * fill the gaps" technique, now applied around a round table — 5 boys seated
 * first (unconstrained → circular), creating exactly 5 gaps (not 6, since a
 * circle has no "ends"), into which 3 distinct girls are placed via ⁵P₃.
 * Numeric "⁴P₃"/"⁵P₃" use real super/subscript digits in non-script (Anek)
 * text per the notation rule.
 *
 * Beats (board_reveal_at_english [0,10.07,25.34,43.35,57.94,68.86,85.42,101.55],
 * hinglish [0,9.98,23.98,38.74,50.52,60.93,76.12,92.93]):
 *  0 Example 3 heading + underline flourish
 *  [group EX3: aOn = beat 0..2, erased at beat>=3]
 *  1 setup: intro line ("even" pins the units place, handle it first) + digit
 *    roster "{1,2,3,4,5}" built glyph by glyph, green rings around 2 and 4
 *    (the valid even digits) + 4 slot boxes (thousands/hundreds/tens/units);
 *    the UNITS box draws first (green outline) and fills with "2" (2 choices)
 *    — handled first per Sec6's rule — THEN the other 3 boxes draw (ink) and
 *    fill with 4,3,2 (the shrinking pool of remaining digits) + × signs +
 *    labels + caption bridging to the ⁴P₃ formula
 *  2 formula lands: "2 × ⁴P₃ = 2 × 24 = 48" boxed green + checkmark
 *  [group EX3 erased at beat>=3]
 *  3 Example 4 heading + underline flourish (headOn, persists to end)
 *  [group DIAG: diagOn = beat 4..6, erased at beat>=7]
 *  4 diagram: circle draws, 5 boy dots (pointOnCircle) + "B" labels appear,
 *    THEN 5 "×" gap marks appear at the angular midpoints between consecutive
 *    boys (also pointOnCircle) — exactly 5 gaps (a circle has no "ends",
 *    unlike Sec15's linear n+1-gap case) + 2 captions
 *  [group B5: b5On = beat 5..6, erased at beat>=7]
 *  5 text lands: "Seat boys first (circular): (5-1)! = 24. Five boys create
 *    5 gaps." — callback to Sec14's derivation
 *  [group FORMULA: beat>=6, never erased]
 *  6 formula lands: "24 × ⁵P₃ = 24 × 60 = 1440" boxed green + checkmark —
 *    24 ways to seat the boys × ⁵P₃ ways to place 3 distinct girls into 3 of
 *    the 5 gaps (order matters, no two girls share a gap)
 *  [group GUARD: beat>=7, never erased — diagram/b5 text erased to make room]
 *  7 (red guardrail) diagram+its captions and the beat-5 text erase; warning-
 *    triangle icon + red chip lands in the vacated space: "Anchor the
 *    UNCONSTRAINED group first: the circular gap method." — the generalizable
 *    takeaway (same meta-principle as Sec6's constrained-slot rule and
 *    Sec15's gap technique, now named for circular arrangements)
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                                | T mid  | x223..857 y39..82
 *  [group EX3: aOn = beat 0..2]
 *  b0 | heading "Example 3 (JEE Main)..." (20,ink,w700)              | T mid | x180..900 y114..136
 *  b0 | underline flourish (amber)                                    | Draw | x200..880 y152
 *  b1 | intro line (18,ink)                                            | T mid| x153..927 y168..188 (hi longest)
 *  b1 | digit roster "{1,2,3,4,5}" (30,ink,w800) ×11 glyphs               | T mid| x362..718 y203..235
 *  b1 | green rings around "2","4" in roster                              | Draw | x450..630 y182..256
 *  b1 | units box (green, 64×64) at x664..728                              | Draw | x664..728 y280..344
 *  b1 | units "2" (30,green,w800)                                          | T mid| x681..711 y296..325
 *  b1 | boxes 1-3 (ink, 64×64×3) x352..624                                 | Draw | x352..624 y280..344
 *  b1 | "4","3","2" (30,ink,w800) in boxes 1-3                              | T mid| per-box y296..325
 *  b1 | × signs ×3 (24,muted)                                              | T mid| x424..656 y311..329
 *  b1 | 4 labels thousands/hundreds/tens/units (14,muted)                   | T mid| per-box y357..372
 *  b1 | caption "then the 4 leftover digits..." (16,amber-dk)               | T mid| x340..740 y391..408
 *  b2 | "2 × ⁴P₃ = 2 × 24 = 48" (32,green,w800)                             | T mid| x372..708 y505..540
 *  b2 | hero box (green, rounded)                                          | Draw | x332..748 y489..557
 *  b2 | checkmark (green)                                                  | Draw | x759..777 y515..528
 *  [group EX3 erased at beat>=3]
 *  [group EX4head: headOn = beat>=3, persists]
 *  b3 | heading "Example 4 (JEE Adv)..." (20,ink,w700)                     | T mid | x180..900 y114..136
 *  b3 | underline flourish (amber)                                        | Draw | x200..880 y152
 *  [group DIAG: diagOn = beat 4..6]
 *  b4 | circle (r82, cx540 cy285, muted)                                  | Draw | x458..622 y203..367
 *  b4 | 5 boy dots (r6, ink) via pointOnCircle                             | Draw | on circle
 *  b4 | 5 "B" labels (16,ink,w700) via pointOnCircle(labelR=102)           | T mid| x443..637 y176..377
 *  b4 | 5 "×" gap marks (20,amber-dk,w800) via pointOnCircle(r=82)         | T mid| x462..618 y208..378
 *  b4 | caption1 "Seat boys first; girls go into..." (14,ink,w600)         | T mid| x306..774 y397..412
 *  b4 | caption2 "5 boys create 5 gaps (×)..." (14,amber-dk,w600)          | T mid| x379..701 y429..444
 *  [group B5: b5On = beat 5..6]
 *  b5 | "Seat boys first (circular): (5-1)!=24..." (18,ink)                | T mid| x193..887 y464..484 (hi longest)
 *  [group FORMULA: beat>=6, never erased]
 *  b6 | "24 × ⁵P₃ = 24 × 60 = 1440" (32,green,w800)                        | T mid| x340..740 y515..550
 *  b6 | hero box (green, rounded)                                         | Draw | x300..780 y499..567
 *  b6 | checkmark (green)                                                 | Draw | x791..809 y526..539
 *  [group GUARD: beat>=7, never erased — DIAG + B5 erased]
 *  b7 | warning-triangle icon (red)                                       | Draw | x209..241 y305..335
 *  b7 | rule chip (cream/red, w560 h40): "Anchor the UNCONSTRAINED..."     | Chip | x260..820 y300..340
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
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD, pointOnCircle, circleD } from "./math-kit";

export default function M11Ch06Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Two worked examples, mirroring Sec8's erase-transition pattern. Example 3
  // (aOn) is fully erased once Example 4's heading fires — the two problems
  // are independent. Example 4 itself has a diagram phase (DIAG) and a
  // text-derivation phase (B5) that BOTH erase at the final beat to make room
  // for the closing guardrail chip; the formula (landed at beat 6) and the
  // heading/underline (headOn) never erase, so the final frame still shows
  // the answer in context. Each element's own `on` is bounded to its beat
  // window (never a wrapper div's opacity) so the verifier's Fade-opacity
  // visibility check — which walks up to the nearest g.sc-fade, not an
  // arbitrary ancestor — sees every erasure correctly; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 3;
  const headOn = beat >= 3;
  const diagOn = beat >= 4 && beat < 7;
  const b5On = beat >= 5 && beat < 7;
  const formulaOn = beat >= 6;
  const guardOn = beat >= 7;

  // ---- Example 3 geometry: digit roster + 4 slot boxes ----
  const rosterTokens = ["{", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}"];
  const rosterXs = [370, 404, 438, 472, 506, 540, 574, 608, 642, 676, 710];
  const rosterY = 226;
  const rosterOpticalY = rosterY - 0.24 * 30; // 218.8

  // slot order: thousands, hundreds, tens, units — units (index 3) is the
  // constrained slot, drawn/filled FIRST and colored green.
  const boxX = [352, 456, 560, 664];
  const boxCenters = [384, 488, 592, 696];
  const gapCenters = [436, 540, 644];
  const boxLabels = [
    t("thousands", "thousands"),
    t("hundreds", "hundreds"),
    t("tens", "tens"),
    t("units", "units"),
  ];
  const restBoxD = boxX.slice(0, 3).map((x) => roundRectD(x, 280, 64, 64, 10)).join(" ");
  const unitsBoxD = roundRectD(boxX[3], 280, 64, 64, 10);

  // ---- Example 4 geometry: 5 boys on a circle, 5 gaps between them ----
  const circCx = 540;
  const circCy = 285;
  const circR = 82;
  const labelR = circR + 20;
  const boyAngles = [0, 1, 2, 3, 4].map((i) => Math.PI / 2 - (i * 2 * Math.PI) / 5);
  const gapAngles = boyAngles.map((a) => a - Math.PI / 5);
  const boyPts = boyAngles.map((a) => pointOnCircle(circCx, circCy, circR, a));
  const boyLabelPts = boyAngles.map((a) => pointOnCircle(circCx, circCy, labelR, a));
  const gapPts = gapAngles.map((a) => pointOnCircle(circCx, circCy, circR, a));

  // ---- beat 7 guardrail chip: dynamic width from the longer language string ----
  const guardText = t(
    "Anchor the UNCONSTRAINED group first: the circular gap method.",
    "Pehle UNCONSTRAINED group ko anchor karo: circular gap method."
  );
  const guardW = Math.max(560, 0.5 * 16 * guardText.length + 40);
  const guardX = 540 - guardW / 2;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "A parity constraint, and the circular gap method",
            "Ek parity constraint, aur circular gap method"
          )}
        </T>
      </Fade>

      {/* ===================== Example 3 (beats 0-2) ===================== */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={20} fill={INK} weight={700}>
          {t(
            "Example 3 (JEE Main): 4-digit even numbers from 1,2,3,4,5, no repetition",
            "Example 3 (JEE Main): 4-digit even numbers from 1,2,3,4,5, no repetition"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.7)}
        d={`M200 152 L880 152`}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 1 — setup: digit roster, ring the valid evens, units box first */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.0)}>
        <T x={540} y={182} size={18} fill={INK}>
          {t(
            "'Even' pins the units place, so handle it first. Units ∈ {2, 4}: 2 ways.",
            "'Even' units place ko fix karta hai, ise pehle handle karo. Units ∈ {2, 4}: 2 tareeke."
          )}
        </T>
      </Fade>

      {rosterTokens.map((ch, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, 1.0 + i * 0.35)}>
          <T x={rosterXs[i]} y={rosterY} size={30} fill={INK} weight={800}>
            {ch}
          </T>
        </Fade>
      ))}

      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 5.0)}
        d={ringD(rosterXs[3], rosterOpticalY, 21.5, 28.35)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 5.4)}
        d={ringD(rosterXs[7], rosterOpticalY, 21.5, 28.35)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />

      {/* units box (constrained slot) draws + fills FIRST, colored green */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 6.0)}
        d={unitsBoxD}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 6.8)}>
        <T x={boxCenters[3]} y={320} size={30} fill={GREEN} weight={800}>
          2
        </T>
      </Fade>

      {/* the other 3 slots draw + fill from the shrinking leftover pool */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 7.3)}
        d={restBoxD}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 8.3)}>
        <T x={boxCenters[0]} y={320} size={30} fill={INK} weight={800}>
          4
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 8.6)}>
        <T x={boxCenters[1]} y={320} size={30} fill={INK} weight={800}>
          3
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 8.9)}>
        <T x={boxCenters[2]} y={320} size={30} fill={INK} weight={800}>
          2
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 9.3)}>
        {gapCenters.map((x) => (
          <T key={x} x={x} y={320} size={24} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 9.7)}>
        {boxLabels.map((lb, i) => (
          <T key={i} x={boxCenters[i]} y={368} size={14} fill={MUTED}>
            {lb}
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 10.2)}>
        <T x={540} y={403} size={16} fill={AMBER_DARK}>
          {t(
            "then the 4 leftover digits fill the other 3 slots",
            "phir bache hue 4 digits, baaki 3 slots mein bharte hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — land: 2 × ⁴P₃ = 2 × 24 = 48 */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={530} size={32} fill={GREEN} weight={800}>
          2 × ⁴P₃ = 2 × 24 = 48
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.0)}
        d={roundRectD(332, 489, 416, 68, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.8)}
        d={checkD(768, 522, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />

      {/* ===================== Example 4 (beats 3-7) ===================== */}
      <Fade on={headOn} delay={dl(3, 0.3)}>
        <T x={540} y={130} size={20} fill={INK} weight={700}>
          {t(
            "Example 4 (JEE Adv): 5 boys, 3 girls, round table, no two girls adjacent",
            "Example 4 (JEE Adv): 5 boys, 3 girls, round table, no two girls adjacent"
          )}
        </T>
      </Fade>
      <Draw
        on={headOn}
        delay={dl(3, 0.7)}
        d={`M200 152 L880 152`}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 4 — the diagram: circle, 5 boys, THEN 5 gaps between them */}
      <Draw on={diagOn} delay={dl(4, 0.0)} d={circleD(circCx, circCy, circR)} stroke={MUTED} sw={1.8} dur={0.7} />
      {boyPts.map((p, i) => (
        <Fade key={`bd${i}`} on={diagOn} delay={dl(4, 1.0 + i * 0.35)}>
          <Circle cx={p.x} cy={p.y} r={6} fill={INK} />
        </Fade>
      ))}
      {boyLabelPts.map((p, i) => (
        <Fade key={`bl${i}`} on={diagOn} delay={dl(4, 1.2 + i * 0.35)}>
          <T x={p.x} y={p.y + 5} size={16} fill={INK} weight={700}>
            B
          </T>
        </Fade>
      ))}
      {gapPts.map((p, i) => (
        <Fade key={`gp${i}`} on={diagOn} delay={dl(4, 3.3 + i * 0.3)}>
          <T x={p.x} y={p.y + 5.2} size={20} fill={AMBER_DARK} weight={800}>
            ×
          </T>
        </Fade>
      ))}
      <Fade on={diagOn} delay={dl(4, 5.0)}>
        <T x={540} y={408} size={14} fill={INK} weight={600}>
          {t(
            "Seat boys first; girls go into the gaps between them",
            "Pehle boys ko baitha do; girls gaps mein jaayengi"
          )}
        </T>
      </Fade>
      <Fade on={diagOn} delay={dl(4, 5.6)}>
        <T x={540} y={440} size={14} fill={AMBER_DARK} weight={600}>
          {t(
            "5 boys create 5 gaps (×) for the girls.",
            "5 boys se 5 gaps (×) bante hain girls ke liye."
          )}
        </T>
      </Fade>

      {/* beat 5 — text: circular seating count, callback to Sec14 */}
      <Fade on={b5On} delay={dl(5, 0.3)}>
        <T x={540} y={478} size={18} fill={INK}>
          {t(
            "Seat boys first (circular): (5-1)! = 24. Five boys create 5 gaps.",
            "Pehle boys ko baitha do (circular): (5-1)! = 24. 5 boys se 5 gaps bante hain."
          )}
        </T>
      </Fade>

      {/* beat 6 — land the final formula: 24 × ⁵P₃ = 24 × 60 = 1440 */}
      <Fade on={formulaOn} delay={dl(6, 0.3)}>
        <T x={540} y={540} size={32} fill={GREEN} weight={800}>
          24 × ⁵P₃ = 24 × 60 = 1440
        </T>
      </Fade>
      <Draw
        on={formulaOn}
        delay={dl(6, 1.0)}
        d={roundRectD(300, 499, 480, 68, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={formulaOn}
        delay={dl(6, 2.0)}
        d={checkD(800, 533, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />

      {/* beat 7 — guardrail: the generalizable "unconstrained group first" rule
          (diagram + beat-5 text have erased by now, vacating the space) */}
      <Draw
        on={guardOn}
        delay={dl(7, 0.3)}
        d={`M225 305 L209 335 L241 335 Z M225 313 L225 324`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={guardOn} delay={dl(7, 0.9)}>
        <Circle cx={225} cy={331} r={1.8} fill={RED} />
      </Fade>
      <Fade on={guardOn} delay={dl(7, 1.3)}>
        <Chip x={guardX} y={300} w={guardW} h={40} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {guardText}
        </Chip>
      </Fade>
    </Scene>
  );
}
