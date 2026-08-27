/**
 * M11 Ch01 · Section 36 — "Complete formula toolkit — Sets" (CHAPTER RECAP)
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: formula_recap.
 *
 * 9 beats (board_reveal_at_english has 9 entries, indices 0..8) — a grid of 8
 * boxed formula cards, one per beat, revealed in the order the chapter taught
 * them. "Notes page" moment — no new teaching, just recap.
 *
 * Layout plan (2 columns × 4 rows; col1 x50..510, col2 x570..1030; row h=100, gap20):
 *  row1 y95..195   | (1,1) power set / (1,2) intervals
 *  row2 y215..315  | (2,1) difference & sym-diff / (2,2) De Morgan
 *  row3 y335..435  | (3,1) 2-set union / (3,2) 3-set union
 *  row4 y455..555  | (4,1) exactly two / (4,2) partition identities
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

type Cell = {
  beat: number;
  x: number;
  tag: string;
  lines: string[];
  size: number;
};

const COLW = 460;
const ROWH = 100;
const CELLS: Cell[] = [
  { beat: 1, x: 50, tag: "POWER SET", lines: ["n[P(A)] = 2ⁿ", "proper = 2ⁿ−1,   exactly r = C(n,r)"], size: 14 },
  { beat: 2, x: 570, tag: "INTERVALS", lines: ["<  →  ( )      ≤  →  [ ]", "length = b − a"], size: 14 },
  { beat: 3, x: 50, tag: "DIFFERENCE & SYMMETRIC DIFFERENCE", lines: ["A − B = A ∩ B′", "A △ B = (A−B) ∪ (B−A)"], size: 14 },
  { beat: 4, x: 570, tag: "DE MORGAN", lines: ["(A∪B)′ = A′∩B′", "(A∩B)′ = A′∪B′"], size: 14 },
  { beat: 5, x: 50, tag: "TWO-SET UNION", lines: ["n(A∪B) = n(A) + n(B) − n(A∩B)"], size: 14 },
  { beat: 6, x: 570, tag: "THREE-SET UNION", lines: ["n(A∪B∪C) = Σn(A) − Σn(A∩B) + n(A∩B∩C)"], size: 12 },
  { beat: 7, x: 50, tag: "EXACTLY TWO", lines: ["exactly two = Σn(A∩B) − 3n(A∩B∩C)"], size: 13 },
  { beat: 8, x: 570, tag: "PARTITION IDENTITIES", lines: ["n(union) = E₁+E₂+E₃", "Σn(A) = E₁+2E₂+3E₃"], size: 14 },
];

function rowY(beat: number): number {
  const row = Math.floor((beat - 1) / 2);
  return 95 + row * (ROWH + 20);
}

export default function M11Ch01Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const t = (e: string, h: string) => (language === "english" ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={AMBER_DARK} script>
          {t("every formula in one place", "har formula ek jagah")}
        </T>
      </Fade>

      {CELLS.map((cell) => {
        const y = rowY(cell.beat);
        const cx = cell.x + COLW / 2;
        return (
          <React.Fragment key={cell.tag}>
            <Draw
              on={beat >= cell.beat}
              d={roundRectD(cell.x, y, COLW, ROWH, 10)}
              stroke={INK}
              sw={1.8}
              delay={dl(cell.beat, 0.2)}
              dur={0.6}
            />
            <Fade on={beat >= cell.beat} delay={dl(cell.beat, 0.7)}>
              <T x={cell.x + 16} y={y + 20} size={10} fill={MUTED} anchor="start" weight={700}>
                {cell.tag}
              </T>
              {cell.lines.length === 1 ? (
                <T x={cx} y={y + ROWH / 2 + 8} size={cell.size} fill={INK} weight={700}>
                  {cell.lines[0]}
                </T>
              ) : (
                <>
                  <T x={cx} y={y + 45} size={cell.size} fill={INK} weight={700}>
                    {cell.lines[0]}
                  </T>
                  <T x={cx} y={y + 75} size={cell.size} fill={INK} weight={700}>
                    {cell.lines[1]}
                  </T>
                </>
              )}
            </Fade>
          </React.Fragment>
        );
      })}
    </Scene>
  );
}
