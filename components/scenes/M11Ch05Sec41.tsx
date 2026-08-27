/**
 * M11 Ch05 · Section 41 — "The four wavy-curve traps"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. type=tips: closes subtopic 4 (Wavy-Curve
 * Method). Same tick-mark + row-text pattern as Sec 12/23/32; no worked
 * callback here since the JSON has none (7 beats total, not 8).
 *
 * Beats (en [0,11.86,27.48,38.91,55.21,71.85,86.7], hi
 * [0,11.26,26.11,35.5,52.48,66.73,81.07]):
 *  0 heading — "WHERE IT GOES WRONG" label + underline
 *  1 trap (red-margin, high): cross-multiplying by a variable denominator
 *  2 text (the fix): bring to one side, combine into a single quotient
 *  3 text: wrong modulus direction (|f|<a inside, |f|>a outside union)
 *  4 text: including a denominator zero — always an open circle
 *  5 trap (red-margin, high): forgetting the even-multiplicity bounce
 *  6 pro-tip: fix far-right sign positive, walk left, flip odd/bounce even
 *
 * Layout plan: 5 rows (tick + text), 38px apart, then a pro-tip chip.
 *  b0 | "WHERE IT GOES WRONG" + underline | T/Draw | bl 100 / y107
 *  b1..5 | tick + row text (14,scr)  | Draw+T | x140/160 y145..297 step 38
 *  b6 | pro-tip chip (amber/cream)   | Chip   | x140..940 y330..380
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

const ROWS = [
  {
    en: "cross-multiplying a rational inequality by a variable denominator — its sign is unknown",
    hi: "rational inequality ko variable denominator se cross-multiply karna — sign pata nahi hota",
    color: RED,
  },
  {
    en: "always bring to one side and combine into a single quotient first",
    hi: "hamesha ek side laao aur ek single quotient mein combine karo pehle",
    color: INK,
  },
  {
    en: "wrong modulus direction: |f|<a locks you INSIDE; |f|>a throws you OUTSIDE into a union",
    hi: "modulus direction galat: |f|<a tumhe INSIDE lock karta hai; |f|>a OUTSIDE union mein fenkta hai",
    color: INK,
  },
  {
    en: "including a denominator zero: never in the solution — an open circle always, even under ≤/≥",
    hi: "denominator zero include karna: kabhi solution mein nahi — hamesha open circle, ≤/≥ ke neeche bhi",
    color: INK,
  },
  {
    en: "forgetting the even-multiplicity bounce: at a squared root the sign does NOT flip",
    hi: "even-multiplicity bounce bhoolna: squared root par sign FLIP nahi hota",
    color: RED,
  },
];

export default function M11Ch05Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={20} fill={RED} script>
          {t(
            "each trap breaks a different rule — know all four before you walk",
            "har trap ek alag rule todta hai — chaaron ko jaano phir walk karo"
          )}
        </T>
      </Fade>

      {/* beat 0 — header */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} weight={800}>
          {t("WHERE IT GOES WRONG", "YAHAN GALTI HOTI HAI")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.7)} d={lineD(455, 107, 625, 107)} stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beats 1-5 — the five rows */}
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
        <Chip x={100} y={335} w={880} h={50} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15}>
          {t(
            "pro-tip: fix the far-right sign as positive, then walk left — flip at odd roots, bounce at even",
            "pro-tip: far-right sign positive fix karo, phir left walk karo — odd par flip, even par bounce"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
