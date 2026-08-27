/**
 * M11 Ch05 · Section 12 — "Pitfalls and the 10-second sanity check"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. type=tips: rapid sequence of ringed/boxed
 * pitfalls, one per beat, closing subtopic 1.
 *
 * Beats (en [0,9.98,21.16,31.4,46.93,62.29,72.28,84.31], hi
 * [0,10.07,20.82,29.78,46.34,60.84,68.95,80.9]):
 *  0 heading — "PITFALLS" label + underline
 *  1 pitfall (red-margin, high): forgetting to flip on a negative
 *  2 text: build the reflex — negative coefficient → flip before next line
 *  3 text: never cross-multiply by x+3 — sign unknown, bring to one side
 *  4 text: < > hollow/round · ≤ ≥ filled/square · ∞ always round
 *  5 text: double inequality — operate on all three parts, never leave one
 *  6 note (red-margin, high): pro-tip — test a number inside the interval
 *  7 text: worked check — (-17/2,31/2], x=0: 3/4=0.75, -7≤0.75<5 ✓
 *
 * Layout plan: 5 pitfall rows (tick + text), each own beat, 42px apart,
 * then a pro-tip chip + worked sanity-check demo with a drawn checkmark.
 *  b0 | "PITFALLS" + underline    | T/Draw | bl 100 / y107
 *  b1..5 | tick + row text (15,scr) | Draw+T | x140/160 y145..330 step 42
 *  b6 | pro-tip chip (amber/cream)| Chip   | x210..870 y360..410
 *  b7 | demo (18,ink) + checkmark | T+Draw | bl 455 · check c(870,450)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD, checkD } from "./math-kit";

const ROWS = [
  {
    en: "forgetting to flip on a negative — the costliest mistake",
    hi: "negative pe flip bhoolna — sabse mehenga mistake",
    color: RED,
  },
  {
    en: "reflex: see a negative coefficient → flip before the next line",
    hi: "reflex: negative coefficient dikhe → agli line se pehle flip",
    color: INK,
  },
  {
    en: "never cross-multiply by x+3 — sign unknown; bring to one side",
    hi: "x+3 se kabhi cross-multiply mat karo — sign unknown; ek side lao",
    color: INK,
  },
  {
    en: "< > hollow/round · ≤ ≥ filled/square · ∞ always round",
    hi: "< > hollow/round · ≤ ≥ filled/square · ∞ hamesha round",
    color: INK,
  },
  {
    en: "double inequality: operate on ALL three parts, never leave one behind",
    hi: "double inequality: TEENO parts pe karo, ek bhi mat chhodo",
    color: INK,
  },
];

export default function M11Ch05Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("when in doubt, test one number", "shaq ho toh, ek number test karo")}
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

      {/* beat 6 — the pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={210} y={360} w={660} h={50} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={17}>
          {t(
            "pro-tip: test any number inside your interval, substitute back",
            "pro-tip: apne interval ke andar koi number test karo, substitute karo"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the worked sanity check */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={450} size={18} fill={INK} weight={700}>
          {"(-17/2, 31/2]: x=0 ⇒ 3/4=0.75, -7 ≤ 0.75 < 5"}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={checkD(900, 445, 18)} stroke={GREEN} sw={3} dur={0.5} />
    </Scene>
  );
}
