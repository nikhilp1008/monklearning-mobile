/**
 * M11 Ch01 · Section 12 — "The power set and the coin-flip intuition"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 6.74, 18.69, 29.95, 40.45, 63.49]):
 *  0 title (always-on)
 *  1 A = {a,b}; list its 4 sub-selections: ∅, {a}, {b}, {a,b}
 *  2 formula: P(A) = {X : X ⊆ A}
 *  3 caption: P(A) = complete menu of every sub-selection
 *  4 REPRESENT/DERIVE: coin-flip tree — 2 choices × 2 choices = 4 subsets
 *  5 LAND: ∈ vs ⊆ again — {1}⊆{1,2} but {1}∈P({1,2})
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "A = {a, b}"                  | T st (20)  | x100 y120
 *  b1 | "∅, "/"{a}, "/"{b}, "/"{a,b}" | T st (18)  | x100/132/184/236 y150
 *  b1 | "sub-selections — four of them" | T st script | x100 y180
 *  b2 | "P(A) = {X : X ⊆ A}" (20,red) | T st | x100 y215
 *  b3 | "= complete menu of every sub-selection" | T st script | x100 y245
 *  b4 | coin-flip tree: 2 top edges (a: out/in), 4 bottom edges (b: out/in), 4 leaves
 *     | Draw+T | root(540,290) → L1(350,340)/(730,340) → L2 4pts y400 → leaves y430
 *  b5 | verdict: "{1}⊆{1,2}" / "{1}∈P({1,2})" | rect+T | x220..860 y500..575
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const L1 = [
  { x: 350, out: "a: out" },
  { x: 730, out: "a: in" },
];
const L2 = [
  { x: 250, from: 350, label: "b: out", leaf: "∅" },
  { x: 450, from: 350, label: "b: in", leaf: "{b}" },
  { x: 610, from: 730, label: "b: out", leaf: "{a}" },
  { x: 830, from: 730, label: "b: in", leaf: "{a,b}" },
];

export default function M11Ch01Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t("the set of ALL subsets", "sabhi subsets ka set")}
        </T>
      </Fade>

      {/* beat 1 — list the 4 sub-selections */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={100} y={120} size={20} fill={INK} anchor="start" weight={700}>
          {"A = {a, b}"}
        </T>
      </Fade>
      {[
        { s: "∅, ", x: 100 },
        { s: "{a}, ", x: 132 },
        { s: "{b}, ", x: 184 },
        { s: "{a,b}", x: 236 },
      ].map((tok, i) => (
        <Fade key={tok.s} on={beat >= 1} delay={dl(1, 1.2 + i * 0.6)}>
          <T x={tok.x} y={150} size={18} fill={INK} anchor="start" weight={700}>
            {tok.s}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={100} y={180} size={14} fill={MUTED} script anchor="start">
          {t("sub-selections of A — four of them", "A ke sub-selections — chaar hain")}
        </T>
      </Fade>

      {/* beat 2 — the formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={100} y={215} size={20} fill={RED} anchor="start" weight={800}>
          {"P(A) = {X : X ⊆ A}"}
        </T>
      </Fade>

      {/* beat 3 — caption */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={100} y={245} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "= complete menu of every sub-selection you could make",
            "= har sub-selection ka poora menu"
          )}
        </T>
      </Fade>

      {/* beat 4 — REPRESENT: coin-flip tree */}
      {L1.map((l1, i) => (
        <Draw
          key={l1.x}
          on={beat >= 4}
          d={`M 540 290 L ${l1.x} 340`}
          stroke={INK}
          sw={2}
          delay={dl(4, 0.3 + i * 0.5)}
          dur={0.5}
        />
      ))}
      {L1.map((l1, i) => (
        <Fade key={l1.x} on={beat >= 4} delay={dl(4, 1 + i * 0.5)}>
          <T x={l1.x < 540 ? l1.x - 30 : l1.x + 30} y={322} size={13} fill={AMBER_DARK} weight={700}>
            {t(l1.out, l1.out)}
          </T>
        </Fade>
      ))}
      {L2.map((l2, i) => (
        <Draw
          key={l2.x}
          on={beat >= 4}
          d={`M ${l2.from} 340 L ${l2.x} 400`}
          stroke={INK}
          sw={2}
          delay={dl(4, 2 + i * 0.35)}
          dur={0.45}
        />
      ))}
      {L2.map((l2, i) => (
        <Fade key={`lab${l2.x}`} on={beat >= 4} delay={dl(4, 2.5 + i * 0.35)}>
          <T x={l2.x < l2.from ? l2.x - 8 : l2.x + 8} y={378} size={11} fill={MUTED} anchor={l2.x < l2.from ? "end" : "start"}>
            {t(l2.label, l2.label)}
          </T>
        </Fade>
      ))}
      {L2.map((l2, i) => (
        <Fade key={`leaf${l2.x}`} on={beat >= 4} delay={dl(4, 3.8 + i * 0.35)}>
          <T x={l2.x} y={430} size={18} fill={GREEN} weight={800}>
            {l2.leaf}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={540} y={460} size={16} fill={RED} weight={700}>
          {"2 × 2 = 2² = 4 subsets"}
        </T>
      </Fade>

      {/* beat 5 — LAND: ∈ vs ⊆ again */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Rect x={220} y={500} width={640} height={75} rx={12} fill={AMBER_DARK} opacity={0.1} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={540} y={533} size={19} fill={INK} weight={700}>
          {"{1} ⊆ {1, 2}"}
        </T>
        <T x={540} y={562} size={17} fill={GREEN} weight={800}>
          {"but   {1} ∈ P({1, 2})"}
        </T>
      </Fade>
    </Scene>
  );
}
