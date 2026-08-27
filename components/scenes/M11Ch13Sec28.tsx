/**
 * M11 Ch13 · Section 28 — "Worked example: step-deviation on grouped marks"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * Mid-points x_i=10,30,50,70,90; f_i=4,6,10,7,3 (N=30). A=50,h=20 → d_i=
 * (x_i-50)/20 = -2,-1,0,1,2. f_i·d_i=-8,-6,0,7,6 (Σ=-1). f_i·d_i²=16,6,0,
 * 7,12 (Σ=41). σ²=400[41/30-(-1/30)²]=400[1.36667-0.00111]=546.22≈546.2.
 * σ=√546.2≈23.37, which rounds to ≈23.4 (matches source).
 *
 * Beats (board_reveal_at_english [0, 14.17, 26.11, 50.35, 63.57, 82.6, 89.69]):
 *  0 anchor: heading
 *  1 represent: full 5-column table (x_i,f_i,d_i,f_i·d_i,f_i·d_i²) + totals
 *  2 explain: A=50, h=20 → codes -2,-1,0,1,2
 *  3 represent: Σf_id_i=-1, Σf_id_i²=41 (ring both totals)
 *  4 land (boxed, high emphasis): σ²=20²[41/30-(-1/30)²]≈546.2 (2 Fracs)
 *  5 land (boxed, high emphasis): σ=√546.2≈23.4 marks
 *  6 note (red-margin): h²=400 undoes coding; don't drop the tiny term
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | table header + 5 rows + totals   | T mid | x130..540 y150..284
 *  b2 | text (13, ink, right col)        | T st  | x580 y164
 *  b3 | ring both totals + text          | Draw+T| (400,284)(490,284) · x580 y210
 *  b4 | boxed σ² (Fracs, green)          | Draw+Row/Frac | box x120..960 y310..382
 *  b5 | boxed σ (green)                  | Draw+T| box x360..720 y392..430
 *  b6 | red bar + note (14)              | Draw+T| x60 y452..470 · text y466
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED, ringD,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Frac } from "./math-kit";

const COL_XI = 160;
const COL_FI = 230;
const COL_DI = 300;
const COL_FD = 380;
const COL_FD2 = 470;
const ROWS = [
  { y: 164, xi: 10, fi: 4, di: "-2", fd: "-8", fd2: 16 },
  { y: 188, xi: 30, fi: 6, di: "-1", fd: "-6", fd2: 6 },
  { y: 212, xi: 50, fi: 10, di: "0", fd: "0", fd2: 0 },
  { y: 236, xi: 70, fi: 7, di: "1", fd: "7", fd2: 7 },
  { y: 260, xi: 90, fi: 3, di: "2", fd: "6", fd2: 12 },
];

export default function M11Ch13Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={18} fill={RED} anchor="middle" script>
          {t("Worked Example: Step-Deviation on Grouped Marks", "Worked Example: Grouped Marks pe Step-Deviation")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("CBSE: variance of 30 students' marks", "CBSE: 30 students ke marks ka variance")}
        </T>
      </Fade>

      {/* beat 1 — the full worked table */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={COL_XI} y={150} size={12} fill={MUTED} anchor="middle" weight={700}>x_i</T>
        <T x={COL_FI} y={150} size={12} fill={MUTED} anchor="middle" weight={700}>f_i</T>
        <T x={COL_DI} y={150} size={12} fill={MUTED} anchor="middle" weight={700}>d_i</T>
        <T x={COL_FD} y={150} size={12} fill={MUTED} anchor="middle" weight={700}>f_i·d_i</T>
        <T x={COL_FD2} y={150} size={12} fill={MUTED} anchor="middle" weight={700}>{"f_i·d_i²"}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 130 160 L 540 160" stroke={INK} sw={1.6} dur={0.5} />
      {ROWS.map((r, i) => (
        <Fade key={r.y} on={beat >= 1} delay={dl(1, 0.7 + i * 0.25)}>
          <T x={COL_XI} y={r.y} size={13} fill={INK} anchor="middle">{r.xi}</T>
          <T x={COL_FI} y={r.y} size={13} fill={INK} anchor="middle">{r.fi}</T>
          <T x={COL_DI} y={r.y} size={13} fill={INK} anchor="middle">{r.di}</T>
          <T x={COL_FD} y={r.y} size={13} fill={INK} anchor="middle">{r.fd}</T>
          <T x={COL_FD2} y={r.y} size={13} fill={INK} anchor="middle">{r.fd2}</T>
        </Fade>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 130 272 L 540 272" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={COL_XI} y={284} size={13} fill={INK} anchor="middle" weight={700}>{t("Total", "Total")}</T>
        <T x={COL_FI} y={284} size={13} fill={INK} anchor="middle" weight={700}>30</T>
        <T x={COL_FD} y={284} size={13} fill={INK} anchor="middle" weight={700}>-1</T>
        <T x={COL_FD2} y={284} size={13} fill={INK} anchor="middle" weight={700}>41</T>
      </Fade>

      {/* beat 2 — explain: the coding */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={580} y={164} size={13} fill={INK} anchor="start">
          {t(
            "A=50, h=20 → codes -2, -1, 0, 1, 2",
            "A=50, h=20 → codes -2, -1, 0, 1, 2"
          )}
        </T>
      </Fade>

      {/* beat 3 — the coded totals */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={ringD(COL_FD, 284, 20, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={ringD(COL_FD2, 284, 20, 14)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={580} y={210} size={13} fill={INK} anchor="start" weight={700}>
          {"Σf_id_i = -1,   Σf_id_i² = 41"}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): variance */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(120, 310, 840, 72)} stroke={GREEN} sw={2.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={150} y={352} size={17} fill={INK} anchor="start" weight={700}>{"σ² = 20² ["}</T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 1.6)} x={320} y={352} size={17} numerator="41" denominator="30" width={55} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={365} y={352} size={17} fill={INK} anchor="start" weight={700}>{"- ("}</T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 2.8)} x={438} y={352} size={17} numerator="-1" denominator="30" width={55} />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={480} y={352} size={17} fill={GREEN} anchor="start" weight={800}>{")²] ≈ 546.2"}</T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): SD */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(360, 392, 360, 38)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={540} y={417} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"σ = √546.2 ≈ 23.4 marks"}
        </T>
      </Fade>

      {/* beat 6 — note: h² undoes coding, keep the tiny term */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 452 L 60 470" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={466} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "h² = 400 undoes the coding. Don't drop the tiny (-1/30)² term — graders look for it.",
            "h² = 400 coding undo karta hai. Chhota (-1/30)² term mat girao — graders dhoondhte hain."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
