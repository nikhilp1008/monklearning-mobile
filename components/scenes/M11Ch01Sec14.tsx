/**
 * M11 Ch01 · Section 14 — "Power set of {p, q, r}, listed by size"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples.
 *
 * Beats (board_reveal_at_english [0, 8.87, 26.2, 36.18, 49.32, 59.9]):
 *  0 title (always-on)
 *  1 REPRESENT (build lattice bottom-up): size0 ∅, size1 {p}/{q}/{r} + edges
 *  2 continue building: size2 pairs + edges, size3 {p,q,r} + edges
 *  3 flatten to roster: P(A) = {∅,{p},{q},{r},{p,q},{p,r},{q,r},{p,q,r}}
 *  4 count check: n[P(A)] = 2³ = 8
 *  5 LAND: caption — lattice, edges add one element going up
 *
 * Layout plan (estimated render boxes; lattice built bottom-up, main+verdict band):
 *  b1 | ∅ chip (50x30)         | Chip | center(540,560)
 *  b1 | edges ∅→p/q/r          | Draw | (540,560)→(340,480)/(540,480)/(740,480)
 *  b1 | {p}/{q}/{r} chips      | Chip | center(340,480)/(540,480)/(740,480)
 *  b2 | edges row1→row2 (6)    | Draw |
 *  b2 | {p,q}/{p,r}/{q,r} chips| Chip | center(340,400)/(540,400)/(740,400)
 *  b2 | edges row2→top (3)     | Draw |
 *  b2 | {p,q,r} chip           | Chip | center(540,320)
 *  b3 | roster formula (14)    | T mid | x540 y120
 *  b4 | "n[P(A)] = 2³ = 8" (20,red) | T mid | x540 y155
 *  b5 | caption                | T mid script | x540 y190
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, AMBER_DARK, GREEN, INK, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

type Node = { key: string; label: string; cx: number; cy: number; w: number; stroke: string };

const NODES: Node[] = [
  { key: "E", label: "∅", cx: 540, cy: 560, w: 50, stroke: AMBER_DARK },
  { key: "P", label: "{p}", cx: 340, cy: 480, w: 55, stroke: GREEN },
  { key: "Q", label: "{q}", cx: 540, cy: 480, w: 55, stroke: GREEN },
  { key: "R", label: "{r}", cx: 740, cy: 480, w: 55, stroke: GREEN },
  { key: "PQ", label: "{p,q}", cx: 340, cy: 400, w: 70, stroke: INK },
  { key: "PR", label: "{p,r}", cx: 540, cy: 400, w: 70, stroke: INK },
  { key: "QR", label: "{q,r}", cx: 740, cy: 400, w: 70, stroke: INK },
  { key: "PQR", label: "{p,q,r}", cx: 540, cy: 320, w: 85, stroke: RED },
];
const NODE_H = 30;
const byKey = (k: string) => NODES.find((n) => n.key === k)!;

const EDGES_B1: [string, string][] = [
  ["E", "P"],
  ["E", "Q"],
  ["E", "R"],
];
const EDGES_B2: [string, string][] = [
  ["P", "PQ"],
  ["P", "PR"],
  ["Q", "PQ"],
  ["Q", "QR"],
  ["R", "PR"],
  ["R", "QR"],
  ["PQ", "PQR"],
  ["PR", "PQR"],
  ["QR", "PQR"],
];

export default function M11Ch01Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("write P(A) for A = {p, q, r}", "P(A) likho A = {p, q, r} ke liye")}
        </T>
      </Fade>

      {/* beat 1 — size 0, size 1 */}
      {EDGES_B1.map(([from, to], i) => {
        const a = byKey(from);
        const b = byKey(to);
        return (
          <Draw
            key={`${from}${to}`}
            on={beat >= 1}
            d={`M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`}
            stroke={MUTED}
            sw={1.6}
            delay={dl(1, 0.2 + i * 0.3)}
            dur={0.4}
          />
        );
      })}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={NODES[0].cx - NODES[0].w / 2} y={NODES[0].cy - NODE_H / 2} w={NODES[0].w} h={NODE_H} fill={CREAM} stroke={NODES[0].stroke} textFill={NODES[0].stroke} size={15} script={false}>
          {NODES[0].label}
        </Chip>
      </Fade>
      {[NODES[1], NODES[2], NODES[3]].map((n, i) => (
        <Fade key={n.key} on={beat >= 1} delay={dl(1, 1 + i * 0.3)}>
          <Chip x={n.cx - n.w / 2} y={n.cy - NODE_H / 2} w={n.w} h={NODE_H} fill={CREAM} stroke={n.stroke} textFill={n.stroke} size={14} script={false}>
            {n.label}
          </Chip>
        </Fade>
      ))}

      {/* beat 2 — size 2, size 3 */}
      {EDGES_B2.map(([from, to], i) => {
        const a = byKey(from);
        const b = byKey(to);
        return (
          <Draw
            key={`${from}${to}`}
            on={beat >= 2}
            d={`M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`}
            stroke={MUTED}
            sw={1.6}
            delay={dl(2, 0.2 + i * 0.22)}
            dur={0.4}
          />
        );
      })}
      {[NODES[4], NODES[5], NODES[6]].map((n, i) => (
        <Fade key={n.key} on={beat >= 2} delay={dl(2, 1.4 + i * 0.3)}>
          <Chip x={n.cx - n.w / 2} y={n.cy - NODE_H / 2} w={n.w} h={NODE_H} fill={CREAM} stroke={n.stroke} textFill={n.stroke} size={14} script={false}>
            {n.label}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Chip x={NODES[7].cx - NODES[7].w / 2} y={NODES[7].cy - NODE_H / 2} w={NODES[7].w} h={NODE_H} fill={CREAM} stroke={NODES[7].stroke} textFill={NODES[7].stroke} size={14} script={false}>
          {NODES[7].label}
        </Chip>
      </Fade>

      {/* beat 3 — flatten to roster */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={120} size={14} fill={INK} weight={600}>
          {"P(A) = { ∅, {p}, {q}, {r}, {p,q}, {p,r}, {q,r}, {p,q,r} }"}
        </T>
      </Fade>

      {/* beat 4 — count check */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={155} size={20} fill={RED} weight={800}>
          {"n[P(A)] = 2³ = 8"}
        </T>
      </Fade>

      {/* beat 5 — LAND: caption on the already-built lattice */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={190} size={14} fill={MUTED} script>
          {t(
            "power-set lattice — edges add one element going up",
            "power-set lattice — upar jaate hue ek element badhta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
