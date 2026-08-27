/**
 * M11 Ch03 · Section 42 — "Pitfalls in solving trig equations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid numbered sequence of ringed pitfalls, one row lands per beat.
 * Closes subtopic 6 (Trigonometric Equations and Solutions).
 *
 * Beats (board_reveal_at_english [0, 3.24, 18.77, 31.4, 47.79, 58.37, 77.65]):
 *  0 subtitle: equation traps
 *  1 #1 (emphasised): dividing by a trig factor loses roots - factor, set each to zero
 *  2 #2 squaring and keeping extraneous roots
 *  3 #3 mixing the families - never borrow another function's form
 *  4 #4 giving only principal solutions when general is asked - n is mandatory
 *  5 #5 ignoring solvability, #6 undefined roots (two mini-rows, one beat)
 *  6 red-margin closer: the golden rules
 *
 * Layout plan — single numbered column, red circle + text per row (same pattern as Sec7/14/19/26/35):
 *  b0 | subtitle (15,amber)              | T mid | x300..780  y84..99  (bl 92)
 *  b1 | circle #1 + text (15,w700)       | row   | cy128  text x90..820 y120..136 (bl 133)
 *  b2 | circle #2 + text (14)            | row   | cy172  text x90..800 y164..180 (bl 177)
 *  b3 | circle #3 + text (14)            | row   | cy216  text x90..900 y208..224 (bl 221)
 *  b4 | circle #4 + text (14)            | row   | cy260  text x90..820 y252..268 (bl 265)
 *  b5 | circle #5 + text (14)            | row   | cy304  text x90..650 y296..312 (bl 309)
 *  b5 | circle #6 + text (14)            | row   | cy340  text x90..750 y332..348 (bl 345)
 *  b6 | margin bar (red)                 | Draw  | x60  y415..470
 *  b6 | closer line1 (16,red,w700)       | T st  | x76..700   y427..443 (bl 439)
 *  b6 | closer line2 (13,red)            | T st  | x76..650   y451..465 (bl 461)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS: { cy: number; size: number; weight: number; en: string; hi: string }[] = [
  { cy: 128, size: 15, weight: 700, en: "Dividing by a trig factor loses roots - factor, set each factor to zero.", hi: "Trig factor se divide karke roots khona - factor karo, har factor zero." },
  { cy: 172, size: 14, weight: 600, en: "Squaring and keeping extraneous roots - always back-check.", hi: "Squaring se extraneous roots rakhna - hamesha back-check karo." },
  { cy: 216, size: 14, weight: 600, en: "Mixing the families - never borrow another function's form.", hi: "Families mix karna - dusre function ka form udhaar mat lo." },
  { cy: 260, size: 14, weight: 600, en: "Only principal solutions when 'general' is asked - n is mandatory.", hi: "'General' poochne par sirf principal - n mandatory hai." },
  { cy: 304, size: 14, weight: 600, en: "Ignoring solvability: |c|>√(a²+b²) means no solution.", hi: "Solvability ignore karna: |c|>√(a²+b²) matlab no solution." },
  { cy: 340, size: 14, weight: 600, en: "Drop roots where tan, sec, cot or csc is undefined.", hi: "Jahan tan, sec, cot ya csc undefined ho, wo roots hatao." },
];

export default function M11Ch03Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const rowBeat = [1, 2, 3, 4, 5, 5];
  const rowDelay = [0, 0, 0, 0, 0, 0.6];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Pitfalls in Solving Trig Equations", "Trig Equations Solve Karne ke Pitfalls")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Equation traps", "Equation ke traps")}
        </T>
      </Fade>

      {/* beats 1-5 — numbered pitfall rows */}
      {ROWS.map((row, i) => (
        <Fade key={i} on={beat >= rowBeat[i]} delay={dl(rowBeat[i], rowDelay[i])}>
          <Circle cx={58} cy={row.cy} r={13} fill={RED} />
          <T x={58} y={row.cy + 5} size={13} fill="#FFFEFB" anchor="middle" weight={700}>
            {i + 1}
          </T>
          <T x={90} y={row.cy + 5} size={row.size} fill={INK} anchor="start" weight={row.weight}>
            {t(row.en, row.hi)}
          </T>
        </Fade>
      ))}

      {/* beat 6 — red-margin closer: the golden rules */}
      <Draw on={beat >= 6} d="M 60 415 L 60 470" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={439} size={16} fill={RED} anchor="start" weight={700}>
          {t("Factor (never divide); back-check;", "Factor karo (divide nahi); back-check;")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={461} size={14} fill={RED} anchor="start">
          {t("keep the n; match the right family.", "n rakho; sahi family match karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
