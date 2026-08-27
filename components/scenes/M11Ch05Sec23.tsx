/**
 * M11 Ch05 · Section 23 — "Pitfalls and the one-point region audit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. type=tips: closes subtopic 2 (Two Variables).
 *
 * Beats (en [0,9.05,27.31,44.29,57.09,72.45,84.05], hi
 * [0,8.87,26.11,42.58,55.21,69.72,82.35]):
 *  0 heading — "PITFALLS" label + underline
 *  1 pitfall (red-margin, high): testing (0,0) on a line through the origin
 *  2 text: wrong line style — strict dotted, non-strict solid
 *  3 text: shading the wrong half-plane — false ⇒ opposite side
 *  4 text: union instead of intersection — need the common overlap only
 *  5 pro-tip (red-margin, high): test a point inside the region in EVERY inequality
 *  6 text: worked check — Sec 22's (1,1) test, region confirmed
 *
 * Layout plan: 4 pitfall rows (tick + text), each own beat, 42px apart,
 * then a pro-tip chip + worked callback check.
 *  b0 | "PITFALLS" + underline    | T/Draw | bl 100 / y107
 *  b1..4 | tick + row text (15,scr) | Draw+T | x140/160 y145..271 step 42
 *  b5 | pro-tip chip (amber/cream)| Chip   | x180..900 y310..360
 *  b6 | worked check (15,ink,scr) | T mid  | bl 420
 *  b6 | checkmark                 | Draw   | c(870,415)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD, checkD } from "./math-kit";

const ROWS = [
  {
    en: "testing (0,0) on a line through the origin — use (1,0) or (0,1) instead",
    hi: "origin se guzarti line pe (0,0) test karna — (1,0) ya (0,1) use karo",
    color: RED,
  },
  {
    en: "wrong line style: strict <, > dotted; ≤, ≥ solid",
    hi: "galat line style: strict <, > dotted; ≤, ≥ solid",
    color: INK,
  },
  {
    en: "shading the wrong half-plane: false ⇒ shade the OPPOSITE side",
    hi: "galat half-plane shade karna: false ⇒ OPPOSITE side shade karo",
    color: INK,
  },
  {
    en: "union instead of intersection — a system needs the common overlap only",
    hi: "union, intersection ki jagah — system ko sirf common overlap chahiye",
    color: INK,
  },
];

export default function M11Ch05Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("test EVERY inequality with one point inside", "EK point se HAR inequality test karo")}
        </T>
      </Fade>

      {/* beat 0 — header */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} weight={800}>
          PITFALLS
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.7)} d={lineD(495, 107, 585, 107)} stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beats 1-4 — the four pitfall rows */}
      {ROWS.map((row, i) => {
        const y = 145 + i * 42;
        return (
          <React.Fragment key={i}>
            <Draw on={beat >= i + 1} delay={dl(i + 1, 0.2)} d={lineD(140, y - 12, 140, y + 6)} stroke={row.color} sw={3} dur={0.3} />
            <Fade on={beat >= i + 1} delay={dl(i + 1, 0.6)}>
              <T x={160} y={y} size={15} fill={row.color} script anchor="start">
                {t(row.en, row.hi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 5 — the pro-tip */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={180} y={320} w={720} h={50} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16}>
          {t(
            "pro-tip: test a point inside your region in EVERY inequality",
            "pro-tip: apne region ke andar ek point se HAR inequality test karo"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the worked check, callback to Sec 22 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={420} size={15} fill={INK} script>
          {t(
            "test (1,1): 1+1=2≤6, 1+2=3≤8, x,y≥0 — region confirmed",
            "test (1,1): 1+1=2≤6, 1+2=3≤8, x,y≥0 — region confirmed"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d={checkD(870, 415, 16)} stroke={GREEN} sw={2.8} dur={0.4} />
    </Scene>
  );
}
