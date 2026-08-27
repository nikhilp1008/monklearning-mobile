/**
 * M11 Ch05 · Section 32 — "Pitfalls and the translate-then-test habit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. type=tips: closes subtopic 3 (Applications).
 *
 * Beats (en [0,10.75,26.97,42.07,57.86,71.85,85.93,98.99], hi
 * [0,9.3,24.23,37.38,49.07,65.11,77.31,91.65]):
 *  0 heading — "PITFALLS" label + underline
 *  1 pitfall (red-margin, high): misreading the comparison word
 *  2 text: underline the phrase, write its symbol BEFORE building
 *  3 text: forgetting the hidden domain (count vs length)
 *  4 text: stopping at "x≥10" instead of interpreting back
 *  5 text: mishandling "between" — strict unless "inclusive"
 *  6 pro-tip (red-margin, high): plug a valid scenario back to confirm
 *  7 text: worked check — Sec 28's triangle, x=10, perimeter=42≥42 ✓
 *
 * Layout plan: 5 pitfall rows (tick + text), 38px apart, then a pro-tip
 * chip + worked callback check.
 *  b0 | "PITFALLS" + underline    | T/Draw | bl 100 / y107
 *  b1..5 | tick + row text (14,scr) | Draw+T | x140/160 y145..297 step 38
 *  b6 | pro-tip chip (amber/cream)| Chip   | x160..920 y330..380
 *  b7 | worked check (15,ink,scr) | T mid  | bl 440
 *  b7 | checkmark                 | Draw   | c(870,435)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD, checkD } from "./math-kit";

const ROWS = [
  {
    en: "misreading the comparison word: 'more than' = strict >, 'at least' = inclusive ≥",
    hi: "comparison word galat padhna: 'more than' = strict >, 'at least' = inclusive ≥",
    color: RED,
  },
  {
    en: "underline the phrase, write its symbol BEFORE building the inequality",
    hi: "phrase underline karo, inequality banane se PEHLE symbol likho",
    color: INK,
  },
  {
    en: "forgetting the hidden domain: a count is a non-negative integer; a length is positive",
    hi: "hidden domain bhoolna: count non-negative integer hai; length positive hai",
    color: INK,
  },
  {
    en: "stopping at 'x≥10' instead of 'the minimum length is 10 cm' — interpret back",
    hi: "'x≥10' pe rukna, 'minimum length 10 cm hai' na bolna — interpret wapas karo",
    color: INK,
  },
  {
    en: "mishandling 'between': treat it as strict unless the problem says 'inclusive'",
    hi: "'between' galat handle karna: strict maano jab tak 'inclusive' na likha ho",
    color: INK,
  },
];

export default function M11Ch05Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("form it, then test it — that's the habit", "banao, phir test karo — yehi habit hai")}
        </T>
      </Fade>

      {/* beat 0 — header */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} weight={800}>
          PITFALLS
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.7)} d={lineD(495, 107, 585, 107)} stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beats 1-5 — the five pitfall rows */}
      {ROWS.map((row, i) => {
        const y = 145 + i * 38;
        return (
          <React.Fragment key={i}>
            <Draw on={beat >= i + 1} delay={dl(i + 1, 0.2)} d={lineD(140, y - 12, 140, y + 6)} stroke={row.color} sw={3} dur={0.3} />
            <Fade on={beat >= i + 1} delay={dl(i + 1, 0.6)}>
              <T x={160} y={y} size={14} fill={row.color} script anchor="start">
                {t(row.en, row.hi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 6 — the pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={160} y={335} w={760} h={50} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15}>
          {t(
            "pro-tip: plug a valid scenario back in to confirm the symbols",
            "pro-tip: symbols confirm karne ke liye ek valid scenario wapas plug karo"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the worked check, callback to Sec 28 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={520} y={440} size={15} fill={INK} script>
          {t(
            "test x=10: perimeter = 10+20+12 = 42 ≥ 42 — 'at least' read as ≥",
            "test x=10: perimeter = 10+20+12 = 42 ≥ 42 — 'at least' ≥ maana"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.0)} d={checkD(945, 435, 16)} stroke={GREEN} sw={2.8} dur={0.4} />
    </Scene>
  );
}
