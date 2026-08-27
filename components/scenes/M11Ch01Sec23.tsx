/**
 * M11 Ch01 · Section 23 — "Compute every operation over U = {1,…,10}"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples.
 *
 * 7 beats total (board_reveal_at_english has 7 entries, indices 0..6):
 *  0 title (always-on)
 *  1 SET UP: U={1..10}, A={2,4,6,8}, B={1,2,3,4,5} + draw the Venn (U box, A, B)
 *  2 fill lens {2,4} (A∩B); log A∪B and A∩B
 *  3 fill only-A {6,8} (A−B) and "neither" {7,9,10}; log A−B and A′
 *  4 fill only-B {1,3,5} (B−A); log B−A
 *  5 A△B = (A−B)∪(B−A) = {1,3,5,6,8} — recolor both crescents green
 *  6 GUARDRAIL: A−B ≠ B−A
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "U={1..10}, A={2,4,6,8}, B={1,2,3,4,5}" | T mid (15) | x540 y105
 *  b1 | U box x150..750 y135..425 + A(320,280,95) + B(480,280,95)
 *  b1 | "U"/"A"/"B" labels             | T | x170,160 / 255,205 / 545,205
 *  b2 | lens numbers "2, 4"            | T mid | x400 y285
 *  b2 | row1 tok1/tok2 "A∪B=.."/"A∩B=.."| T st  | x100/274 y505
 *  b3 | onlyA "6, 8" + neither "7, 9, 10" | T mid | x290/220 y285/390
 *  b3 | row1 tok3 "A−B=.." / row2 tok1 "A′=.."| T st | x371 y505 / x100 y535
 *  b4 | onlyB "1, 3, 5"                | T mid | x500 y285
 *  b4 | row2 tok2 "B−A=.."             | T st  | x270 y535
 *  b5 | boxed "A△B=(A−B)∪(B−A)={1,3,5,6,8}" | T mid | x540 y568
 *  b5 | onlyA/onlyB numerals recolor GREEN
 *  b6 | guardrail "(A−B ≠ B−A!)"       | T st script red | x700 y535
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD } from "./math-kit";

export default function M11Ch01Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const crescentFill = beat >= 5 ? GREEN : INK;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("all five operations, one example", "paanch operations, ek example")}
        </T>
      </Fade>

      {/* beat 1 — set up + draw the Venn */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={105} size={15} fill={INK} weight={700}>
          {"U = {1..10},   A = {2,4,6,8},   B = {1,2,3,4,5}"}
        </T>
      </Fade>
      <Draw on={beat >= 1} d={roundRectD(150, 135, 600, 290, 8)} stroke={MUTED} sw={2} delay={dl(1, 1.1)} dur={1} />
      <Draw on={beat >= 1} d={circleD(320, 280, 95)} stroke={INK} sw={2.2} delay={dl(1, 2.1)} dur={0.7} />
      <Draw on={beat >= 1} d={circleD(480, 280, 95)} stroke={INK} sw={2.2} delay={dl(1, 2.8)} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={170} y={160} size={15} fill={MUTED} anchor="start" weight={700}>U</T>
        <T x={255} y={205} size={16} fill={INK} weight={700}>A</T>
        <T x={545} y={205} size={16} fill={INK} weight={700}>B</T>
      </Fade>

      {/* beat 2 — lens {2,4}; log union + intersection */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={400} y={285} size={17} fill={INK} weight={800}>{"2, 4"}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={100} y={505} size={14} fill={INK} anchor="start" weight={700}>
          {"A∪B = {1,2,3,4,5,6,8}"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={274} y={505} size={14} fill={INK} anchor="start" weight={700}>
          {"A∩B = {2,4}"}
        </T>
      </Fade>

      {/* beat 3 — only-A {6,8}, neither {7,9,10}; log A-B and A' */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={290} y={285} size={17} fill={crescentFill} weight={800}>{"6, 8"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={220} y={390} size={14} fill={MUTED} weight={700}>{"7, 9, 10"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={371} y={505} size={14} fill={INK} anchor="start" weight={700}>
          {"A−B = {6,8}"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={100} y={535} size={14} fill={INK} anchor="start" weight={700}>
          {"A′ = {1,3,5,7,9,10}"}
        </T>
      </Fade>

      {/* beat 4 — only-B {1,3,5}; log B-A */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={500} y={285} size={17} fill={crescentFill} weight={800}>{"1, 3, 5"}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={270} y={535} size={14} fill={INK} anchor="start" weight={700}>
          {"B−A = {1,3,5}"}
        </T>
      </Fade>

      {/* beat 5 — symmetric difference */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={568} size={16} fill={GREEN} weight={800}>
          {"A △ B = (A−B) ∪ (B−A) = {1,3,5,6,8}"}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL: order matters */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={700} y={535} size={13} fill={RED} script weight={700} anchor="start">
          {t("(A−B ≠ B−A !)", "(A−B ≠ B−A !)")}
        </T>
      </Fade>
    </Scene>
  );
}
