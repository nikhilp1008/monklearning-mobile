/**
 * M11 Ch14 · Section 12 — "Worked example: two dice, counting meets set algebra (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples. Two-column
 * layout (no erasing — the algebra stays visible as the grid confirms it):
 * LEFT = the algebra ladder, RIGHT = the 6×6 ordered-pair grid (the
 * "hand-placed T/Chip grid" pattern from Ch6's Cartesian-product work,
 * reused here for two-dice sample spaces per the task brief).
 *
 * Beats (board_reveal_at_english [0,13.91,27.14,39.68,55.98,68.35,85.5,103.94]):
 *  0 heading
 *  1 problem: roll red & blue, record (red, blue). A = sum 7, C = sum ≥ 11
 *  2 n(S) = 6 × 6 = 36
 *  3 formula (HIGH): A = {(1,6)...(6,1)}, n(A) = 6
 *  4 C = {(5,6),(6,5),(6,6)}
 *  5 A ∩ C = ∅ ⇒ mutually exclusive
 *  6 GUARDRAIL (HIGH): A∩A′=∅ and A∪A′=S ⇒ {A,A′} ALWAYS a partition
 *  7 grid: 36 ordered pairs, sum=7 diagonal shaded amber, sum≥11 corner
 *    shaded green — visual confirmation A and C never touch
 *
 * Layout plan (LEFT column x=110 start; RIGHT grid x660..936 y140..416):
 *  b1 | problem, 2 lines (15, ink)                | T st  | x110..760 y120..152
 *  b2 | "n(S) = 6 × 6 = 36" (16, ink)              | T st  | x110..400 y187..203
 *  b3 | "A = {...}" (14) / "n(A) = 6" (17,amber)   | T st  | x110..560 y213..238
 *  b4 | "C = {(5,6),(6,5),(6,6)}" (15, ink)        | T st  | x110..430 y270..286
 *  b5 | "A ∩ C = ∅ ⇒ mutually exclusive" (15,green)| T st  | x110..480 y300..316
 *  b6 | guardrail 2 lines (14-15, red)              | T st  | x110..600 y333..360
 *  b7 | 6×6 grid + col/row headers                  | Draw  | x650..940 y120..420
 *  b7 | diagonal shaded amber "A", corner green "C" | Fade  |
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

const GRID_X = 660;
const GRID_Y = 140;
const CELL = 46;

export default function M11Ch14Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const vLines = Array.from({ length: 7 }, (_, k) =>
    lineD(GRID_X + k * CELL, GRID_Y, GRID_X + k * CELL, GRID_Y + 6 * CELL)
  ).join(" ");
  const hLines = Array.from({ length: 7 }, (_, k) =>
    lineD(GRID_X, GRID_Y + k * CELL, GRID_X + 6 * CELL, GRID_Y + k * CELL)
  ).join(" ");

  const sum7Cells = [0, 1, 2, 3, 4, 5].map((r) => ({ r, c: 5 - r }));
  const sum11Cells = [
    { r: 4, c: 5 },
    { r: 5, c: 4 },
    { r: 5, c: 5 },
  ];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("an event and its complement are ALWAYS a partition", "event aur uska complement HAMESHA partition hote hain")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Two dice — counting meets set algebra (JEE Main)", "Do dice — counting aur set algebra (JEE Main)")}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={110} y={128} size={15} fill={INK} anchor="start" weight={600}>
          {t("Roll red & blue, record (red, blue).", "Red & blue roll karo, (red, blue) likho.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={110} y={150} size={15} fill={INK} anchor="start" weight={600}>
          {"A = \"sum 7\",  C = \"sum ≥ 11\""}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={110} y={190} size={17} fill={INK} anchor="start" weight={800}>
          {"n(S) = 6 × 6 = 36"}
        </T>
      </Fade>

      {/* beat 3 — HIGH */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={110} y={222} size={13.5} fill={INK} anchor="start" weight={700}>
          {"A = {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)}"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={110} y={246} size={18} fill={AMBER_DARK} anchor="start" weight={800}>
          {"n(A) = 6"}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={110} y={280} size={15} fill={INK} anchor="start" weight={700}>
          {"C = {(5,6), (6,5), (6,6)}"}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={110} y={312} size={15} fill={GREEN} anchor="start" weight={700}>
          {t("A ∩ C = ∅  ⇒  mutually exclusive", "A ∩ C = ∅  ⇒  mutually exclusive")}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL, HIGH */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={110} y={348} size={15} fill={RED} anchor="start" weight={700}>
          {"A ∩ A′ = ∅   and   A ∪ A′ = S"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={110} y={372} size={14} fill={RED} anchor="start" script weight={700}>
          {t("⇒ {A, A′} is ALWAYS a partition", "⇒ {A, A′} HAMESHA partition hai")}
        </T>
      </Fade>

      {/* beat 7 — the 36-cell grid */}
      <Fade on={beat >= 7} delay={dl(7, 0.1)}>
        <T x={GRID_X + 3 * CELL} y={112} size={13} fill={MUTED} weight={600}>
          {t("blue die →", "blue die →")}
        </T>
      </Fade>
      {[1, 2, 3, 4, 5, 6].map((v, c) => (
        <Fade key={`col${v}`} on={beat >= 7} delay={dl(7, 0.2)}>
          <T x={GRID_X + c * CELL + CELL / 2} y={130} size={13} fill={MUTED} weight={600}>
            {v}
          </T>
        </Fade>
      ))}
      {[1, 2, 3, 4, 5, 6].map((v, r) => (
        <Fade key={`row${v}`} on={beat >= 7} delay={dl(7, 0.2)}>
          <T x={GRID_X - 12} y={GRID_Y + r * CELL + CELL / 2 + 5} size={13} fill={MUTED} anchor="end" weight={600}>
            {v}
          </T>
        </Fade>
      ))}
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d={vLines + " " + hLines} stroke={MUTED} sw={1.4} dur={0.9} />

      {sum7Cells.map(({ r, c }, i) => (
        <Fade key={`s7-${i}`} on={beat >= 7} delay={dl(7, 1.4 + i * 0.15)}>
          <Rect x={GRID_X + c * CELL + 1} y={GRID_Y + r * CELL + 1} width={CELL - 2} height={CELL - 2} fill={AMBER_DARK} opacity={0.4} />
        </Fade>
      ))}
      {sum11Cells.map(({ r, c }, i) => (
        <Fade key={`s11-${i}`} on={beat >= 7} delay={dl(7, 2.4 + i * 0.15)}>
          <Rect x={GRID_X + c * CELL + 1} y={GRID_Y + r * CELL + 1} width={CELL - 2} height={CELL - 2} fill={GREEN} opacity={0.4} />
        </Fade>
      ))}
      <Fade on={beat >= 7} delay={dl(7, 3.0)}>
        <T x={GRID_X + 1 * CELL + CELL / 2} y={GRID_Y + 4 * CELL + CELL / 2 + 5} size={14} fill={INK} weight={800}>
          A
        </T>
        <T x={GRID_X + 5 * CELL + CELL / 2} y={GRID_Y + 3 * CELL + CELL / 2 + 5} size={14} fill={INK} weight={800}>
          C
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <T x={GRID_X + 3 * CELL} y={438} size={12.5} fill={MUTED}>
          {t("36 pairs — A and C never touch", "36 pairs — A aur C kabhi nahi milte")}
        </T>
      </Fade>
    </Scene>
  );
}
