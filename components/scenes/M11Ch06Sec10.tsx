/**
 * M11 Ch06 · Section 10 — "Order matters: the soul of a permutation"
 * FIRST section of Subtopic 2 "Permutations" (follows the fully-verified
 * Subtopic 1, Sec1-9). Canvas 1080×620 · safe x36–1044, y30–596.
 * Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("concept" flow:
 * Anchor → Guardrail → Contrast → Proof-by-enumeration → Land → Mnemonic).
 *
 * Beats (board_reveal_at_english [0,11.69,22.53,31.4,44.54,55.89,69.89],
 * hinglish [0,10.41,20.57,30.21,42.24,55.89,68.1]):
 *  0 anchor: the definition, "...a DEFINITE order" underlined
 *  1 anchor picture: TWO mini podiums (ranked, staggered steps) — same 3
 *    names, 1st/2nd swapped — visibly a DIFFERENT result
 *  2 guardrail (red note): "ORDER MATTERS" stamped, prominent
 *  3 contrast picture: ONE flat "group card" — same 3 names at EQUAL
 *    height (no ranking) — visibly a DIFFERENT shape from the podiums
 *  [group A erased at beat>=4 — the podium/guardrail/group contrast has
 *   made its point; fresh space for the enumeration]
 *  4 proof-by-enumeration: 6 chips (ABC,ACB,BAC,BCA,CAB,CBA), one at a time
 *  5 land: "3! = 6" hero, ringed, tied back to the 6 just counted
 *  [group B erased at beat>=6 — final mnemonic gets a clean board]
 *  6 mnemonic (final, never erased): Permutation=POSITIONS (green) vs
 *    Combination=COMMITTEE (amber, preview of Subtopic 3) with matching
 *    mini-icons (staircase vs equal dots) recalling beats 1 and 3
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                    | T mid  | x~230..850 y39..82
 *  [group A: aOn = beat 0..3, erased at beat>=4]
 *  b0 | definition sentence (19, ink)                   | T mid  | x~245..835 y97..121
 *  b0 | amber underline under sentence                  | Draw   | x245..835 y132
 *  b1 | lead "same 3 people, different order:" (15,mut) | T mid  | x~375..705 y163..180
 *  b1 | clusterA 3 steps (staircase, w60 each)           | Draw   | x100..290 y230..300
 *  b1 | clusterA 3 names (13, ink)                        | T mid  | x100..290 y198..251
 *  b1 | "≠" (28, red)                                     | T mid  | x526..554 y243..274
 *  b1 | clusterB 3 steps (mirrored, names swapped)         | Draw   | x800..990 y230..300
 *  b1 | clusterB 3 names (13, ink)                          | T mid  | x800..990 y198..251
 *  b1 | caption A "Ravi - Meera - Sory" (12, ink)             | T mid  | x~135..255 y312..326
 *  b1 | caption B "Meera - Ravi - Sory" (12, ink)             | T mid  | x~835..955 y312..326
 *  b2 | guardrail Chip "ORDER MATTERS" (cream/red, h64)        | Chip  | x200..880 y352..416
 *  b3 | lead "same 3 people, ANY order — one group:" (15,mut)  | T mid  | x~375..705 y440..457
 *  b3 | group card (flat, uniform, w500 h110)                  | Draw  | x290..790 y470..580
 *  b3 | 3 dots (equal height, r14, amber-dark)                   | circle| x376..704 y496..524
 *  b3 | 3 names below dots, SAME baseline (13, ink)                | T mid  | x376..704 y540..564
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat 4..5, erased at beat>=6]
 *  b4 | lead "list every order of A, B, C:" (18, ink)              | T mid  | x~370..710 y136..160
 *  b4 | 6 chips ABC/ACB/BAC/BCA/CAB/CBA (170×64)                    | Chip  | x135..945 y190..342
 *  b4 | checkmark                                                    | Draw  | x422..446 y365..386
 *  b4 | tally "6 orders total — none repeat" (18, green)               | T start| x456..~730 y365..391
 *  b5 | "3!" hero (48, green, w800)                                     | T start| x430..478 y442..504
 *  b5 | ring around "3!"                                                  | Draw  | x392..516 y432..528
 *  b5 | "= 6" hero (48, green, w800)                                       | T start| x560..632 y442..504
 *  b5 | caption "3×2×1 = 6 — exactly what you listed" (15, muted)             | T mid  | x~330..750 y543..559
 *  [group B erased at beat>=6]
 *  b6 | lead "Two different ideas, same 3 letters:" (18, ink)                  | T mid  | x~330..750 y136..160
 *  b6 | mini staircase icon (3 ascending bars)                                    | Draw  | x195..227 y252..272
 *  b6 | Chip "Permutation = POSITIONS" (green, w520 h80)                            | Chip  | x280..800 y220..300
 *  b6 | 3 equal dots icon                                                             | circle| x195..223 y376..384
 *  b6 | Chip "Combination = COMMITTEE" (amber, w520 h80)                                | Chip  | x280..800 y340..420
 *  b6 | closing caption (14, muted)                                                       | T mid  | x~155..925 y444..460
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
import { roundRectD, checkD } from "./math-kit";

export default function M11Ch06Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-3: definition, podium anchor, guardrail, group contrast)
  // is erased once the enumeration lands (beat 4); group B (beats 4-5: the
  // 6-item list + 3!=6 landing) is erased once the final mnemonic lands
  // (beat 6). Each element's own `on` is bounded to its beat window (rather
  // than a wrapper div's opacity) so the verifier's Fade-opacity visibility
  // check — which walks up to the nearest g.sc-fade, not an arbitrary
  // ancestor — sees the erasure too; seeking back into an earlier beat
  // correctly restores it.
  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4 && beat < 6;

  // ---- beat 1: two mini podiums, same 3 names, 1st/2nd swapped ----
  const stepW = 60;
  const podiumBase = 300; // bottom of all steps
  const clusterAx = 100;
  const clusterBx = 800;
  // order left-to-right within a cluster: 2nd, 1st, 3rd (classic podium)
  const stepDefs = [
    { rank: 2, dx: 0, h: 50 },
    { rank: 1, dx: stepW + 5, h: 70 },
    { rank: 3, dx: 2 * (stepW + 5), h: 35 },
  ];
  const clusterAPath = stepDefs
    .map((s) => roundRectD(clusterAx + s.dx, podiumBase - s.h, stepW, s.h, 6))
    .join(" ");
  const clusterBPath = stepDefs
    .map((s) => roundRectD(clusterBx + s.dx, podiumBase - s.h, stepW, s.h, 6))
    .join(" ");
  const nameY: Record<number, number> = { 1: 210, 2: 230, 3: 246 };

  // ---- beat 3: flat "group card" — 3 dots at equal height ----
  const cardX = 290;
  const cardY = 470;
  const cardW = 500;
  const cardH = 110;
  const dotY = cardY + 40; // 510
  const dotXs = [390, 540, 690];
  const groupNames = [t("Sory", "Sory"), t("Ravi", "Ravi"), t("Meera", "Meera")];

  // ---- beat 4: the 6 permutations of A, B, C ----
  const perms = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"];
  const gridCols = [220, 540, 860];
  const gridRows = [190, 278];
  const chipW = 170;
  const chipH = 64;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "Order matters: the soul of a permutation",
            "Order matters: permutation ki jaan hai"
          )}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-3 ===================== */}

      {/* beat 0 — the definition, DEFINITE underlined */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={115} size={19} fill={INK} weight={600}>
          {t(
            "A permutation = arranging objects in a DEFINITE order.",
            "Permutation = objects ko ek DEFINITE order mein arrange karna."
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 1.0)}
        d={`M245 132 L835 132`}
        stroke={AMBER}
        sw={2}
        dur={0.7}
      />

      {/* beat 1 — two podiums, same 3 names, a swapped rank = a different result */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={175} size={15} fill={MUTED}>
          {t("same 3 people, different order:", "wahi 3 log, alag order:")}
        </T>
      </Fade>

      <Draw on={aOn && beat >= 1} delay={dl(1, 0.5)} d={clusterAPath} stroke={INK} sw={2} dur={0.9} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.2)}>
        <T x={clusterAx + stepDefs[1].dx + stepW / 2} y={nameY[1]} size={13} fill={INK} weight={600}>
          Ravi
        </T>
        <T x={clusterAx + stepDefs[0].dx + stepW / 2} y={nameY[2]} size={13} fill={INK} weight={600}>
          Meera
        </T>
        <T x={clusterAx + stepDefs[2].dx + stepW / 2} y={nameY[3]} size={13} fill={INK} weight={600}>
          Sory
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 1.9)}>
        <T x={540} y={265} size={28} fill={RED} weight={800}>
          ≠
        </T>
      </Fade>

      <Draw on={aOn && beat >= 1} delay={dl(1, 2.3)} d={clusterBPath} stroke={INK} sw={2} dur={0.9} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.0)}>
        <T x={clusterBx + stepDefs[1].dx + stepW / 2} y={nameY[1]} size={13} fill={INK} weight={600}>
          Meera
        </T>
        <T x={clusterBx + stepDefs[0].dx + stepW / 2} y={nameY[2]} size={13} fill={INK} weight={600}>
          Ravi
        </T>
        <T x={clusterBx + stepDefs[2].dx + stepW / 2} y={nameY[3]} size={13} fill={INK} weight={600}>
          Sory
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 3.7)}>
        <T x={clusterAx + 95} y={322} size={12} fill={INK} weight={600}>
          Ravi - Meera - Sory
        </T>
        <T x={clusterBx + 95} y={322} size={12} fill={INK} weight={600}>
          Meera - Ravi - Sory
        </T>
      </Fade>

      {/* beat 2 — guardrail, stamped prominently */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={200} y={352} w={680} h={64} fill={CREAM} stroke={RED} textFill={RED} size={30} script={false}>
          ORDER MATTERS
        </Chip>
      </Fade>

      {/* beat 3 — contrast: a FLAT group card, everyone at equal height */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={452} size={15} fill={MUTED}>
          {t(
            "same 3 people, ANY order — still one group:",
            "wahi 3 log, KOI bhi order — ek hi group:"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 1.0)}
        d={roundRectD(cardX, cardY, cardW, cardH, 14)}
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.9)}>
        {dotXs.map((x, i) => (
          <Circle key={i} cx={x} cy={dotY} r={14} fill={AMBER_DARK} />
        ))}
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.5)}>
        {dotXs.map((x, i) => (
          <T key={i} x={x} y={550} size={13} fill={INK} weight={600}>
            {groupNames[i]}
          </T>
        ))}
      </Fade>

      {/* ===================== Group B — beats 4-5 ===================== */}

      {/* beat 4 — enumerate all 6 orders of A, B, C */}
      <Fade on={bOn} delay={dl(4, 0.2)}>
        <T x={540} y={150} size={18} fill={INK}>
          {t("list every order of A, B, C:", "A, B, C ke saare orders likho:")}
        </T>
      </Fade>
      {perms.map((p, i) => {
        const row = i < 3 ? 0 : 1;
        const col = i % 3;
        return (
          <Fade key={p} on={bOn} delay={dl(4, 0.8 + i * 1.5)}>
            <Chip
              x={gridCols[col] - chipW / 2}
              y={gridRows[row]}
              w={chipW}
              h={chipH}
              fill={CREAM}
              stroke={INK}
              textFill={INK}
              size={26}
              script={false}
            >
              {p}
            </Chip>
          </Fade>
        );
      })}
      <Draw on={bOn} delay={dl(4, 10.2)} d={checkD(430, 376, 16)} stroke={GREEN} sw={3} dur={0.4} />
      <Fade on={bOn} delay={dl(4, 10.6)}>
        <T x={456} y={380} size={18} fill={GREEN} weight={700} anchor="start">
          {t("6 orders total — none repeat", "6 orders total — koi repeat nahi")}
        </T>
      </Fade>

      {/* beat 5 — land: 3! = 6, tied back to the count */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={430} y={490} size={48} fill={GREEN} weight={800} anchor="start">
          3!
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0.9)}
        d={ringD(454, 479, 40, 39)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.5)}>
        <T x={560} y={490} size={48} fill={GREEN} weight={800} anchor="start">
          = 6
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.3)}>
        <T x={540} y={555} size={15} fill={MUTED}>
          {t(
            "3 × 2 × 1 = 6 — exactly what you listed",
            "3 × 2 × 1 = 6 — jo abhi tumne likha"
          )}
        </T>
      </Fade>

      {/* beat 6 — mnemonic, final and never erased */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={150} size={18} fill={INK}>
          {t("Two different ideas, same 3 letters:", "Do alag ideas, wahi 3 letters se:")}
        </T>
      </Fade>

      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={`M195 264 L195 272 L203 272 L203 264 Z M207 258 L207 272 L215 272 L215 258 Z M219 252 L219 272 L227 272 L227 252 Z`}
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={280} y={220} w={520} h={80} fill={GREEN} textFill="#fff" size={24} script={false}>
          {t("Permutation = POSITIONS", "Permutation = POSITIONS")}
        </Chip>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Circle cx={195} cy={380} r={4} fill={INK} />
        <Circle cx={209} cy={380} r={4} fill={INK} />
        <Circle cx={223} cy={380} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <Chip x={280} y={340} w={520} h={80} fill={AMBER} textFill={INK} size={24} script={false}>
          {t("Combination = COMMITTEE", "Combination = COMMITTEE")}
        </Chip>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={540} y={452} size={14} fill={MUTED}>
          {t(
            "permutations first — combinations later in this chapter",
            "pehle permutations — combinations baad mein is chapter mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
