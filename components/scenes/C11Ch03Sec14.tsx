/**
 * C11 Chemistry Ch03 · Section 14 — "Common pitfalls and pro-tips" (subtopic 1 closer)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.68, 24.32, 39.51, 55.72, 72.19, 84.31, 99.5]):
 *  0 title + underline
 *  1 red-margin Pitfall 1: swapping the two laws' basis
 *  2 Pitfall 2: triads/octaves treated as universal
 *  3 Pitfall 3: nomenclature slips
 *  4 Pitfall 4: calling anomalous pairs "mistakes"
 *  5 red-margin pro-tip: the chronology chain (5 names)
 *  6 one keyword per link, under each name
 *  7 closing: nomenclature sanity-check
 *
 * Layout plan:
 *  b1-4 | 4 pitfall rows            | T st  | x120..?   y96..292 (circles cx90)
 *  b5 | 5 chain nodes + arrows      | Draw  | x60..1020 y316..370
 *  b6 | 5 keyword sub-labels        | T mid | under each node (bl 394)
 *  b7 | closing (16,w700,green)     | T mid | x?..?     y418..436 (bl 430)
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: { text: string; textHi: string; emph: boolean }[] = [
  {
    text: "swap the law basis ✗ — LOCK: Mendeleev = weight, Modern = number",
    textHi: "law basis swap mat karo ✗ — LOCK: Mendeleev = weight, Modern = number",
    emph: true,
  },
  {
    text: "triads/octaves ≠ universal — octaves die after calcium",
    textHi: "triads/octaves ≠ universal — octaves calcium ke baad marte",
    emph: false,
  },
  {
    text: "nomenclature slips — forgot -ium, confused roots, reversed digits",
    textHi: "nomenclature slips — -ium bhoolna, roots confuse, digits reverse",
    emph: false,
  },
  {
    text: "anomalous pairs ≠ 'mistakes' — they're evidence weight was wrong",
    textHi: "anomalous pairs 'mistakes' nahi — weight galat tha uska evidence",
    emph: false,
  },
];

const CHAIN: { name: string; kw: string; kwHi: string }[] = [
  { name: "Doebereiner", kw: "triads", kwHi: "triads" },
  { name: "Newlands", kw: "octaves", kwHi: "octaves" },
  { name: "Chancourtois·Meyer", kw: "helix/curve", kwHi: "helix/curve" },
  { name: "Mendeleev", kw: "gaps+weight", kwHi: "gaps+weight" },
  { name: "Moseley", kw: "number", kwHi: "number" },
];
const NODE_X = [60, 255, 450, 645, 840];
const NODE_W = 180;
const NODE_Y = 316;
const NODE_H = 54;

export default function C11Ch03Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("common pitfalls and pro-tips", "common pitfalls aur pro-tips")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {PITFALLS.map((p, i) => {
        const y = 96 + i * 52;
        const cy = y + 20;
        return (
          <Fade key={i} on={beat >= i + 1} delay={dl(i + 1, 0.2)}>
            <Circle cx={90} cy={cy} r={17} fill="none" stroke={RED} strokeWidth={2} />
            <T x={90} y={cy + 5.5} size={15} fill={RED} weight={800}>{i + 1}</T>
            <T x={120} y={y + 25} size={16} fill={p.emph ? RED : INK} weight={p.emph ? 700 : 600} anchor="start">
              {t(p.text, p.textHi)}
            </T>
          </Fade>
        );
      })}

      {/* beat 5 — red-margin pro-tip: the chronology chain */}
      {NODE_X.map((x, i) => (
        <Fade key={i} on={beat >= 5} delay={dl(5, 0.2 + i * 0.3)}>
          <Rect x={x} y={NODE_Y} width={NODE_W} height={NODE_H} rx={6} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
          <T x={x + NODE_W / 2} y={348} size={14} fill={INK} weight={800}>
            {CHAIN[i].name}
          </T>
        </Fade>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <Fade key={i} on={beat >= 5} delay={dl(5, 0.5 + i * 0.3)}>
          <T x={(NODE_X[i] + NODE_W + NODE_X[i + 1]) / 2} y={348} size={16} fill={AMBER_DARK}>
            →
          </T>
        </Fade>
      ))}

      {/* beat 6 — one keyword per link */}
      {NODE_X.map((x, i) => (
        <Fade key={i} on={beat >= 6} delay={dl(6, 0.15 * i)}>
          <T x={x + NODE_W / 2} y={394} size={12} fill={GREEN}>
            {t(CHAIN[i].kw, CHAIN[i].kwHi)}
          </T>
        </Fade>
      ))}

      {/* beat 7 — closing: nomenclature sanity check */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={430} size={16} weight={700} fill={GREEN}>
          {t("sanity-check: 3-digit atomic number ⇒ 3-letter symbol, always", "sanity-check: 3-digit atomic number ⇒ hamesha 3-letter symbol")}
        </T>
      </Fade>
    </Scene>
  );
}
