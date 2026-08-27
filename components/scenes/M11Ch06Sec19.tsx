/**
 * M11 Ch06 · Section 19 — "Order doesn't matter: the combination"
 * FIRST section of Subtopic 3 "Combinations" (follows the fully-verified
 * Subtopic 2, Sec10-18). Canvas 1080×620 · safe x36–1044, y30–596.
 * Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("concept" flow:
 * Anchor → Represent → Guardrail → Enumeration/Contrast → Preview → Mnemonic).
 *
 * This is Sec10's mirror image and direct payoff: Sec10 built "order matters"
 * (podiums, ORDER MATTERS chip, permutation=positions/combination=committee
 * preview); this section flips every one of those beats — same chip shape
 * stamped with the opposite verdict, same mnemonic closer with the roles
 * now fully explained instead of previewed.
 *
 * Beats (board_reveal_at_english [0,10.58,26.88,40.62,56.83,72.45,87.21],
 * hinglish [0,11.09,26.11,39.51,52.65,68.27,81.75]):
 *  0 heading: the definition — SELECT a group, order irrelevant
 *  1 anchor: cricket pool of 16 → 11 selected (filled dots), tag + caption
 *    "same team however the names were listed" (flat, no ranking — contrast
 *    with Sec10's ranked podiums)
 *  2 guardrail (red chip, Sec10 callback): "ORDER DOESN'T MATTER" stamped in
 *    the exact chip style Sec10 used for "ORDER MATTERS"
 *  [group A erased at beat>=3 — anchor/guardrail have made their point]
 *  3 proof-by-enumeration: 4 points A,B,C,D (complete graph K4), all 6 edges
 *    drawn one at a time, caption "AB = BA" + landed "6 pairs → ⁴C₂ = 6"
 *  4 contrast: ⁹P₂ = 72  ÷ 2!  ⁹C₂ = 36 landed on one line, ringed
 *  5 preview: "A combination = nPr with order stripped → divide by r!"
 *  [group B erased at beat>=6 — final mnemonic gets a clean board]
 *  6 mnemonic (final, high emphasis, never erased): Selection alone →
 *    COMBINATION (green, current topic) vs Selection + roles → PERMUTATION
 *    (amber, prior topic) — same dot/staircase icons as Sec10, colors
 *    swapped because combination is now the section's own topic
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                       | T mid  | x~223..857 y39..82
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  b0 | definition sentence (19, ink)                     | T mid  | x~265..816 y100..121
 *  b1 | lead "pick 11 from a pool of 16:" (15, muted)      | T mid  | x~420..660 y143..160
 *  b1 | 16-dot pool grid (r9, 8×2)                          | circle | x342..738 y176..234
 *  b1 | tag "11 of 16 selected" (14, green)                   | T mid  | x~440..640 y254..269
 *  b1 | caption "same team however names listed" (14, ink)      | T mid  | x~390..690 y287..302
 *  b2 | guardrail Chip "ORDER DOESN'T MATTER" (cream/red, h64)     | Chip  | x160..920 y352..416
 *  [group A erased at beat>=3]
 *  [group B: bOn = beat 3..5, erased at beat>=6]
 *  b3 | lead "connect every pair of points:" (16, ink)              | T mid  | x~424..656 y97..115
 *  b3 | 4 point dots (r5) + labels A,B,C,D (15, ink)                  | circle/T | x458..622 y130..312
 *  b3 | 6 K4 edges, one at a time                                      | Draw  | x480..600 y160..280
 *  b3 | caption "Each pair counted once: AB = BA" (15, ink)              | T mid  | x~324..756 y324..341
 *  b3 | landing "6 pairs → ⁴C₂ = 6" (24, green, ringed)                   | T mid  | x~421..659 y376..402
 *  [group B continues — beat4 shares the same non-erased canvas]
 *  b4 | lead "9 people shake hands..." (16, ink)                          | T mid  | x~370..710 y447..465
 *  b4 | "⁹P₂ = 72  ÷ 2!  ⁹C₂ = 36" (26/15/26, ringed on ⁹C₂=36)             | T start| x379..701 y495..530
 *  b5 | preview "A combination = nPr ... divide by r!" (16/18)              | T start| x309..797 y566..586
 *  [group B erased at beat>=6]
 *  b6 | lead "Same letters, two different jobs:" (18, ink)                    | T mid  | x~387..693 y136..156
 *  b6 | amber underline flourish                                               | Draw  | x400..680 y167
 *  b6 | 3 equal dots icon (combination callback)                                 | circle| x195..223 y256..264
 *  b6 | Chip "Selection alone → COMBINATION" (green, w520 h80)                     | Chip  | x280..800 y220..300
 *  b6 | mini staircase icon (permutation callback)                                   | Draw  | x195..227 y372..392
 *  b6 | Chip "Selection + roles → PERMUTATION" (amber, w520 h80)                       | Chip  | x280..800 y340..420
 *  b6 | closing caption (14, muted)                                                      | T mid  | x~358..722 y444..460
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
import { lineD } from "./math-kit";

export default function M11Ch06Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-2: definition, cricket-pool anchor, guardrail) is erased
  // once the enumeration diagram lands (beat 3); group B (beats 3-5: the K4
  // diagram, the 36-vs-72 contrast, the nCr=nPr/r! preview) is erased once
  // the final mnemonic lands (beat 6). Each element's own `on` is bounded to
  // its beat window (rather than a wrapper div's opacity) so the verifier's
  // Fade-opacity visibility check — which walks up to the nearest g.sc-fade,
  // not an arbitrary ancestor — sees the erasure too; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 3;
  const bOn = beat >= 3 && beat < 6;

  // ---- beat 1: pool of 16, 11 selected (filled) ----
  const poolCols = 8;
  const poolColSpacing = 54;
  const poolStartX = 540 - ((poolCols - 1) * poolColSpacing) / 2; // 351
  const poolRowYs = [185, 225];
  const poolDots = Array.from({ length: 16 }, (_, i) => {
    const col = i % poolCols;
    const row = Math.floor(i / poolCols);
    return {
      x: poolStartX + col * poolColSpacing,
      y: poolRowYs[row],
      selected: i < 11,
    };
  });

  // ---- beat 3: 4 points A,B,C,D — complete graph K4 (all 6 pairs) ----
  const kA = { x: 480, y: 160 };
  const kB = { x: 600, y: 160 };
  const kC = { x: 600, y: 280 };
  const kD = { x: 480, y: 280 };
  const kEdges: [{ x: number; y: number }, { x: number; y: number }][] = [
    [kA, kB],
    [kB, kC],
    [kC, kD],
    [kD, kA],
    [kA, kC],
    [kB, kD],
  ];

  // ---- beat 4: 9C2 = 36 vs 9P2 = 72, landed side by side on one line ----
  const eqSegs = [
    { text: "⁹P₂ = 72", size: 26, weight: 800, fill: INK },
    { text: "  ÷ 2!  ", size: 15, weight: 600, fill: AMBER_DARK },
    { text: "⁹C₂ = 36", size: 26, weight: 800, fill: GREEN },
  ];
  const eqWidths = eqSegs.map((s) => {
    const mult = s.weight >= 800 ? 0.58 : 0.5;
    return mult * s.size * s.text.length;
  });
  const eqTotalW = eqWidths.reduce((a, b) => a + b, 0) + (eqSegs.length - 1) * 10;
  let eqX0 = 540 - eqTotalW / 2;
  const eqXs = eqSegs.map((_, i) => {
    const x = eqX0;
    eqX0 += eqWidths[i] + 10;
    return x;
  });

  // ---- beat 5: nCr = nPr / r! preview, "r!" highlighted ----
  const previewSegs = en
    ? [
        { text: "A combination = nPr with order stripped → divide by ", size: 16, weight: 600, fill: INK },
        { text: "r!", size: 18, weight: 800, fill: AMBER },
      ]
    : [
        { text: "Combination = nPr, order hatakar → ", size: 16, weight: 600, fill: INK },
        { text: "r!", size: 18, weight: 800, fill: AMBER },
        { text: " se divide karo", size: 16, weight: 600, fill: INK },
      ];
  const pvWidths = previewSegs.map((s) => {
    const mult = s.weight >= 800 ? 0.58 : 0.5;
    return mult * s.size * s.text.length;
  });
  const pvTotalW = pvWidths.reduce((a, b) => a + b, 0);
  let pvX0 = 540 - pvTotalW / 2;
  const pvXs = previewSegs.map((_, i) => {
    const x = pvX0;
    pvX0 += pvWidths[i];
    return x;
  });

  // ---- beat 6: dot icon (combination) + staircase icon (permutation) ----

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "Order doesn't matter: the combination",
            "Order nahi matter karta: combination ki jaan hai"
          )}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-2 ===================== */}

      {/* beat 0 — the definition */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={115} size={19} fill={INK} weight={600}>
          {t(
            "A combination = SELECT a group; order is irrelevant.",
            "Combination = ek group SELECT karna; order irrelevant hai."
          )}
        </T>
      </Fade>

      {/* beat 1 — cricket anchor: pool of 16, 11 selected, order-free */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={155} size={15} fill={MUTED}>
          {t("pick 11 from a pool of 16:", "16 mein se 11 chuno:")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.0)}>
        {poolDots.map((d, i) => (
          <Circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={9}
            fill={d.selected ? GREEN : CREAM}
            stroke={d.selected ? GREEN : INK}
            strokeWidth={1.8}
          />
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.8)}>
        <T x={540} y={265} size={14} fill={GREEN} weight={700}>
          {t("11 of 16 selected", "16 mein se 11 select")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.5)}>
        <T x={540} y={298} size={14} fill={INK} weight={600}>
          {t(
            "Same team however the names were listed.",
            "Wahi team, chahe naam kisi bhi order mein likho."
          )}
        </T>
      </Fade>

      {/* beat 2 — guardrail, Sec10 callback: same chip style, flipped verdict */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={160} y={352} w={760} h={64} fill={CREAM} stroke={RED} textFill={RED} size={28} script={false}>
          ORDER DOESN'T MATTER
        </Chip>
      </Fade>

      {/* ===================== Group B — beats 3-5 ===================== */}

      {/* beat 3 — enumerate: 4 points, all 6 pairs, land 4C2 = 6 */}
      <Fade on={bOn} delay={dl(3, 0.2)}>
        <T x={540} y={110} size={16} fill={INK}>
          {t("connect every pair of points:", "har pair ke points jodo:")}
        </T>
      </Fade>

      <Fade on={bOn} delay={dl(3, 0.6)}>
        <Circle cx={kA.x} cy={kA.y} r={5} fill={INK} />
        <Circle cx={kB.x} cy={kB.y} r={5} fill={INK} />
        <Circle cx={kC.x} cy={kC.y} r={5} fill={INK} />
        <Circle cx={kD.x} cy={kD.y} r={5} fill={INK} />
      </Fade>
      <Fade on={bOn} delay={dl(3, 1.0)}>
        <T x={458} y={142} size={15} fill={INK} weight={700}>
          A
        </T>
        <T x={622} y={142} size={15} fill={INK} weight={700}>
          B
        </T>
        <T x={622} y={302} size={15} fill={INK} weight={700}>
          C
        </T>
        <T x={458} y={302} size={15} fill={INK} weight={700}>
          D
        </T>
      </Fade>

      {kEdges.map(([p, q], i) => (
        <Draw
          key={i}
          on={bOn}
          delay={dl(3, 1.4 + i * 0.4)}
          d={lineD(p.x, p.y, q.x, q.y)}
          stroke={i < 4 ? INK : AMBER_DARK}
          sw={2}
          dur={0.4}
        />
      ))}

      <Fade on={bOn} delay={dl(3, 4.0)}>
        <T x={540} y={336} size={15} fill={INK} weight={600}>
          {t("Each pair counted once: AB = BA", "Har pair ek hi baar: AB = BA")}
        </T>
      </Fade>

      <Fade on={bOn} delay={dl(3, 4.6)}>
        <T x={540} y={395} size={24} fill={GREEN} weight={800}>
          6 pairs {"→"} ⁴C₂ = 6
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(3, 5.2)}
        d={ringD(540, 389.24, 132.3, 25.08)}
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />

      {/* beat 4 — contrast: 9C2 = 36 vs 9P2 = 72, factor of 2 visible */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={460} size={16} fill={INK}>
          {t(
            "9 people shake hands — order-free pairs:",
            "9 log handshake karte hain — order-free pairs:"
          )}
        </T>
      </Fade>
      {eqSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 4} delay={dl(4, 1.0 + i * 0.8)}>
          <T x={eqXs[i]} y={522} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 3.3)}
        d={ringD(
          eqXs[2] + eqWidths[2] / 2,
          522 - 0.24 * 26,
          eqWidths[2] / 2 + 14,
          26.17
        )}
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />

      {/* beat 5 — the intuitive preview: divide out the r! orderings */}
      {previewSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 5} delay={dl(5, 0.3 + i * 0.7)}>
          <T x={pvXs[i]} y={580} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}

      {/* ===================== Final — beat 6, never erased ===================== */}

      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={150} size={18} fill={INK}>
          {t("Same letters, two different jobs:", "Wahi letters, do alag kaam:")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={lineD(400, 167, 680, 167)} stroke={AMBER} sw={2} dur={0.6} />

      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <Circle cx={195} cy={260} r={4} fill={INK} />
        <Circle cx={209} cy={260} r={4} fill={INK} />
        <Circle cx={223} cy={260} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={280} y={220} w={520} h={80} fill={GREEN} textFill="#fff" size={24} script={false}>
          {t("Selection alone → COMBINATION", "Sirf selection → COMBINATION")}
        </Chip>
      </Fade>

      <Draw
        on={beat >= 6}
        delay={dl(6, 2.1)}
        d={`M195 384 L195 392 L203 392 L203 384 Z M207 378 L207 392 L215 392 L215 378 Z M219 372 L219 392 L227 392 L227 372 Z`}
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <Chip x={280} y={340} w={520} h={80} fill={AMBER} textFill={INK} size={24} script={false}>
          {t("Selection + roles → PERMUTATION", "Selection + roles → PERMUTATION")}
        </Chip>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={540} y={452} size={14} fill={MUTED}>
          {t(
            "permutations done — combinations take over from here",
            "permutations ho gaye — ab combinations ki baari"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
