/**
 * M11 Ch05 · Section 25 — "The translation dictionary and modeling rules"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Two acts: the phrase-to-symbol table (beats 0-1,
 * matches the JSON's own 6-row diagram), erased at beat 2 for the three
 * modeling rules + guardrail + units note.
 *
 * Beats (en [0,9.56,34.39,49.24,64.43,75.01,88.23], hi
 * [0,8.11,32.94,48.98,64,75.09,87.38]):
 *  0 heading — table header + divider drawn
 *  1 diagram (high): 6-row phrase→symbol dictionary
 *  2 text: Rule 1 — define the variable explicitly, with units [erase table]
 *  3 text: Rule 2 — one condition→one inequality; several→a system
 *  4 text: Rule 3 — attach the hidden domain (counts vs measurements)
 *  5 note (red-margin, high): "between a,b" is strict unless "inclusive"
 *  6 text: always state units, carry them into the final answer
 *
 * Layout plan:
 *  b0 | "English phrase"/"Symbol" (14,w800) | T st | x100/650 bl110
 *  b0 | divider                  | Draw  | x60..1000 y118
 *  b1 | 6 rows (14,ink / 15,red,w700) | T st | x100/650 y145..305 step32
 *  b2 | RULE 1 (16,ink,scr)      | T mid | bl 145
 *  b3 | RULE 2 (16,ink,scr)      | T mid | bl 200
 *  b4 | RULE 3 (16,ink,scr)      | T mid | bl 255
 *  b5 | boxed guardrail (15,red) | Chip  | x150..930 y295..345
 *  b6 | units note (15,ink,scr)  | T mid | bl 400
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

const ROWS = [
  { en: "at least / no less than", hi: "at least / no less than", sym: "≥" },
  { en: "at most / no more than", hi: "at most / no more than", sym: "≤" },
  { en: "more than / exceeds / over", hi: "more than / exceeds / over", sym: ">" },
  { en: "less than / under / below", hi: "less than / under / below", sym: "<" },
  { en: "between a, b (exclusive)", hi: "between a, b (exclusive)", sym: "a < x < b" },
  { en: "between a, b (inclusive)", hi: "between a, b (inclusive)", sym: "a ≤ x ≤ b" },
];

export default function M11Ch05Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const table = (k: number) => beat >= k && beat < 2;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("memorize the dictionary, then follow 3 rules", "dictionary yaad karo, phir 3 rules follow karo")}
        </T>
      </Fade>

      {/* beat 0 — table structure */}
      <Fade on={table(0)} delay={dl(0, 0.3)}>
        <T x={100} y={110} size={14} fill={INK} weight={800} anchor="start">
          {t("English phrase", "English phrase")}
        </T>
      </Fade>
      <Fade on={table(0)} delay={dl(0, 0.5)}>
        <T x={650} y={110} size={14} fill={INK} weight={800} anchor="start">
          {t("Symbol", "Symbol")}
        </T>
      </Fade>
      <Draw on={table(0)} delay={dl(0, 0.9)} d={lineD(60, 118, 1000, 118)} stroke={MUTED} sw={1.6} dur={0.6} />

      {/* beat 1 — the six-row dictionary */}
      {ROWS.map((row, i) => (
        <React.Fragment key={i}>
          <Fade on={table(1)} delay={dl(1, 0.2 + i * 0.35)}>
            <T x={100} y={145 + i * 32} size={14} fill={INK} anchor="start">
              {t(row.en, row.hi)}
            </T>
          </Fade>
          <Fade on={table(1)} delay={dl(1, 0.35 + i * 0.35)}>
            <T x={650} y={145 + i * 32} size={15} fill={RED} weight={700} anchor="start">
              {row.sym}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 2 — Rule 1 (table erased) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={145} size={16} fill={INK} script>
          {t(
            "RULE 1 — define the variable explicitly, with units: 'let x = shortest side, in cm'",
            "RULE 1 — variable ko explicitly define karo, units ke saath: 'let x = shortest side, cm mein'"
          )}
        </T>
      </Fade>

      {/* beat 3 — Rule 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={200} size={16} fill={INK} script>
          {t(
            "RULE 2 — one condition → one inequality; several → a system (intersection)",
            "RULE 2 — ek condition → ek inequality; kai → ek system (intersection)"
          )}
        </T>
      </Fade>

      {/* beat 4 — Rule 3 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={255} size={16} fill={INK} script>
          {t(
            "RULE 3 — attach the hidden domain: counts need x≥0 (integer); measurements need x>0",
            "RULE 3 — hidden domain attach karo: counts ko x≥0 (integer); measurements ko x>0"
          )}
        </T>
      </Fade>

      {/* beat 5 — the guardrail */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={150} y={295} w={780} h={50} fill={CREAM} stroke={RED} textFill={RED} size={15}>
          {t(
            "'between a and b' is strict (a<x<b) unless the problem says 'inclusive'",
            "'between a and b' strict hai (a<x<b) jab tak 'inclusive' na likha ho"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — units carry through */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={400} size={15} fill={INK} script>
          {t(
            "always state the units of the variable — carry them into the final answer",
            "hamesha variable ke units batao — final answer tak carry karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
