/**
 * M11 Ch01 · Section 37 — "Sets — one-screen revision" (CHAPTER CHEAT SHEET)
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: cheat_sheet.
 *
 * 8 beats (board_reveal_at_english has 8 entries, indices 0..7) — 6 boxed topic
 * cards (2 cols × 3 rows) covering all four subtopics, then a full-width
 * memory-hooks banner. "Notes page" — no new teaching, pure recap.
 *
 * Layout plan (col1 x50..510, col2 x570..1030; rows y95/210/325 h=95; banner y440..580):
 *  (1,1) sets & the {0}/∅ trap        (1,2) roster/builder, equal/equivalent
 *  (2,1) number-set nesting            (2,2) ∈ vs ⊆, power set
 *  (3,1) operations & De Morgan        (3,2) cardinality formulas
 *  banner: 5 memory hooks
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, GREEN,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

type Cell = { beat: number; x: number; y: number; tag: string; lines: string[] };

const COLW = 460;
const ROWH = 95;
const CELLS: Cell[] = [
  { beat: 1, x: 50, y: 95, tag: "SETS", lines: ["well-defined collection, distinct objects", "{0} ≠ ∅,   {∅} ≠ ∅"] },
  { beat: 2, x: 570, y: 95, tag: "REPRESENTATION", lines: ["roster {2,4,6}   vs   set-builder {x : P(x)}", "equal = same elements, equivalent = same n(A)"] },
  { beat: 3, x: 50, y: 210, tag: "NUMBER SETS", lines: ["N ⊂ W ⊂ Z ⊂ Q ⊂ R", "irrationals T = R − Q"] },
  { beat: 4, x: 570, y: 210, tag: "SUBSETS & POWER SET", lines: ["∈ (element→set)   vs   ⊆ (set→set)", "∅⊆A, A⊆A always;   n[P(A)] = 2ⁿ"] },
  { beat: 5, x: 50, y: 325, tag: "OPERATIONS", lines: ["∪=or, ∩=and,  A−B=A∩B′,  A′=U−A", "De Morgan flips the operation"] },
  { beat: 6, x: 570, y: 325, tag: "CARDINALITY", lines: ["n(A∪B) = n(A)+n(B) − n(A∩B)", "three sets: include − exclude − include"] },
];

export default function M11Ch01Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const t = (e: string, h: string) => (language === "english" ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("sets: everything on one screen", "sets: sab kuch ek screen par")}
        </T>
      </Fade>

      {CELLS.map((cell) => {
        const cx = cell.x + COLW / 2;
        return (
          <React.Fragment key={cell.tag}>
            <Draw
              on={beat >= cell.beat}
              d={roundRectD(cell.x, cell.y, COLW, ROWH, 10)}
              stroke={INK}
              sw={1.8}
              delay={dl(cell.beat, 0.2)}
              dur={0.6}
            />
            <Fade on={beat >= cell.beat} delay={dl(cell.beat, 0.7)}>
              <T x={cell.x + 16} y={cell.y + 20} size={10} fill={MUTED} anchor="start" weight={700}>
                {cell.tag}
              </T>
              <T x={cx} y={cell.y + 48} size={12} fill={INK} weight={600}>
                {cell.lines[0]}
              </T>
              <T x={cx} y={cell.y + 74} size={12} fill={INK} weight={600}>
                {cell.lines[1]}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 7 — the memory-hooks banner */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={50} y={440} width={980} height={130} rx={12} fill={GREEN} opacity={0.1} stroke={GREEN} strokeWidth={2} />
        <T x={540} y={468} size={13} fill={GREEN} weight={800}>
          {t("MEMORY HOOKS", "MEMORY HOOKS")}
        </T>
        <T x={540} y={500} size={14} fill={INK} weight={700}>
          {"“Domain first” · “In with ∈, part with ⊆” · “Coin per element → 2ⁿ”"}
        </T>
        <T x={540} y={530} size={14} fill={INK} weight={700}>
          {"“When stuck, shade the Venn” · “Fill the centre first”"}
        </T>
        <T x={540} y={558} size={12} fill={MUTED} script>
          {t("that's Sets — end to end", "yehi hai Sets — shuru se aakhir tak")}
        </T>
      </Fade>
    </Scene>
  );
}
