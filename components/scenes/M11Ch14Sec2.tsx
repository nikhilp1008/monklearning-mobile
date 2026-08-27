/**
 * M11 Ch14 · Section 2 — "Events as subsets of S"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,10.07,20.82,32.94,44.12,57.17,65.88,78.85]):
 *  0 heading: "An EVENT is a subset of S"
 *  1 die roster laid out as 6 cards (S)
 *  2 highlight cards 2,4,6 green — the "even" scoop = event A
 *  3 formula: A = {2,4,6} ⊆ S, B = {5,6} ⊆ S
 *  4 GUARDRAIL: "EVENT = SUBSET" — the most important sentence
 *  5 an event OCCURS if the actual outcome is one of the scooped cards
 *  6 roll 4 → occurred (4∈A) / roll 3 → did not (3∉A)
 *  [group A erased at beat>=7]
 *  7 final Venn: S box, circle A={2,4,6}, 1,3,5 sit outside A
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b0 | heading (21, ink)                    | T mid  | x380..700 y92..116
 *  b1 | "S = every outcome.." (14, muted)     | T mid  | x420..660 y143..154
 *  b1 | 6 die cards (w54 h64)                 | Draw/T | x303..777 y170..234
 *  b2 | green highlight borders on 2,4,6      | Draw   | x379..751 y166..238
 *  b3 | "A = {2,4,6} ⊆ S" (18, green)         | T mid  | x400..680 y280..304
 *  b3 | "B = {5,6} ⊆ S" (18, amber)           | T mid  | x420..660 y306..330
 *  b4 | guardrail chip "EVENT = SUBSET" (22)  | Chip   | x340..740 y350..406
 *  b5 | "occurs if outcome is scooped" (16)   | T mid  | x310..770 y427..451
 *  b6 | "roll 4 → occurred" (16, green)       | T mid  | x340..740 y467..491
 *  b6 | "roll 3 → did not occur" (16, red)    | T mid  | x330..750 y502..526
 *  [group A erased beat>=7]
 *  b7 | S box x150..750 y150..420            | Draw   |
 *  b7 | circle A cx300 cy280 r95              | Draw   |
 *  b7 | "S"/"A" labels                         | T      | x170/300 y175
 *  b7 | 2,4,6 inside circle / 1,3,5 outside    | T      | x270/300/335 y255..300 / x520/600/520 y220..340
 *  b7 | closing chip + caption                  | Chip/T | x340..740 y440..494 / y518..534
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD, VennShade } from "./math-kit";

const DIE_ROSTER = [1, 2, 3, 4, 5, 6];
const EVENT_A = new Set([2, 4, 6]);

export default function M11Ch14Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-6: heading, roster, formula, guardrail, occurs, scenarios)
  // is erased once the final Venn picture lands (beat 7) — the diagram is the
  // section's clean closing "notes photo" and needs the full board.
  const aOn = beat >= 0 && beat < 7;

  const dieCardW = 54;
  const dieCardH = 64;
  const dieGap = 30;
  const dieStep = dieCardW + dieGap;
  const dieStartX = 540 - (6 * dieCardW + 5 * dieGap) / 2; // 303

  const vennBox = { x: 150, y: 150, w: 600, h: 270 };
  const circleA = { cx: 300, cy: 280, r: 95 };

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("event = subset — nothing more, nothing less", "event = subset — bas itna hi")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-6 ===================== */}

      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={108} size={21} fill={INK} weight={700}>
          {t("An EVENT is a subset of S", "EVENT, S ka ek subset hai")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={148} size={14} fill={MUTED}>
          {t("S = every outcome of the die", "S = die ke sab outcomes")}
        </T>
      </Fade>
      {DIE_ROSTER.map((face, i) => {
        const x = dieStartX + i * dieStep;
        return (
          <React.Fragment key={face}>
            <Draw
              on={aOn && beat >= 1}
              delay={dl(1, 0.6 + i * 0.15)}
              d={roundRectD(x, 170, dieCardW, dieCardH, 8)}
              stroke={AMBER}
              sw={2}
              dur={0.35}
            />
            <Fade on={aOn && beat >= 1} delay={dl(1, 0.75 + i * 0.15)}>
              <T x={x + dieCardW / 2} y={170 + dieCardH / 2 + 8} size={22} fill={INK} weight={700}>
                {face}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 2 — highlight the even-numbered cards (event A's scoop) */}
      {DIE_ROSTER.filter((f) => EVENT_A.has(f)).map((face, i) => {
        const idx = DIE_ROSTER.indexOf(face);
        const x = dieStartX + idx * dieStep;
        return (
          <Draw
            key={face}
            on={aOn && beat >= 2}
            delay={dl(2, 0.3 + i * 0.4)}
            d={roundRectD(x - 4, 166, dieCardW + 8, dieCardH + 8, 10)}
            stroke={GREEN}
            sw={3}
            dur={0.4}
          />
        );
      })}

      {/* beat 3 — formula: A and B as subsets */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={288} size={18} fill={GREEN} weight={800}>
          {"A = {2, 4, 6} ⊆ S"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.0)}>
        <T x={540} y={316} size={18} fill={AMBER_DARK} weight={800}>
          {"B = {5, 6} ⊆ S"}
        </T>
      </Fade>

      {/* beat 4 — GUARDRAIL: the most important sentence */}
      <Fade on={aOn && beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={340} y={350} w={400} h={56} fill={CREAM} stroke={RED} textFill={RED} size={22} script={false}>
          {t("EVENT = SUBSET", "EVENT = SUBSET")}
        </Chip>
      </Fade>

      {/* beat 5 — when an event occurs */}
      <Fade on={aOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={439} size={16} fill={INK} weight={600}>
          {t(
            "occurs if the actual outcome is one of the scooped cards",
            "occurs, agar actual outcome scooped cards mein se ek ho"
          )}
        </T>
      </Fade>

      {/* beat 6 — two scenarios */}
      <Fade on={aOn && beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={479} size={16} fill={GREEN} weight={700}>
          {"roll 4 → 4 ∈ A → " + t("occurred ✓", "hua ✓")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 6} delay={dl(6, 1.0)}>
        <T x={540} y={514} size={16} fill={RED} weight={700}>
          {"roll 3 → 3 ∉ A → " + t("did not occur ✗", "nahi hua ✗")}
        </T>
      </Fade>

      {/* ===================== Group B — beat 7, never erased ===================== */}

      <Draw
        on={beat >= 7}
        delay={dl(7, 0.2)}
        d={roundRectD(vennBox.x, vennBox.y, vennBox.w, vennBox.h, 6)}
        stroke={MUTED}
        sw={2}
        dur={0.8}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={circleD(circleA.cx, circleA.cy, circleA.r)}
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <VennShade on={beat >= 7} delay={dl(7, 1.8)} include={[circleA]} fill="#1C9B57" opacity={0.16} {...vennBox} />
      <Fade on={beat >= 7} delay={dl(7, 2.3)}>
        <T x={170} y={175} size={16} fill={MUTED} anchor="start" weight={700}>
          S
        </T>
        <T x={300} y={172} size={16} fill={GREEN} weight={700}>
          A
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <T x={270} y={262} size={19} fill={INK} weight={700}>
          2
        </T>
        <T x={303} y={295} size={19} fill={INK} weight={700}>
          4
        </T>
        <T x={336} y={262} size={19} fill={INK} weight={700}>
          6
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.3)}>
        <T x={540} y={220} size={19} fill={MUTED} weight={700}>
          1
        </T>
        <T x={620} y={280} size={19} fill={MUTED} weight={700}>
          3
        </T>
        <T x={540} y={340} size={19} fill={MUTED} weight={700}>
          5
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.9)}>
        <Chip x={340} y={440} w={400} h={44} fill={GREEN} textFill="#fff" size={17} script={false}>
          {"A = {2, 4, 6} ⊆ S"}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={540} y={518} size={14} fill={MUTED}>
          {t("1, 3, 5 sit in S but outside A", "1, 3, 5 S mein hain, par A ke bahar")}
        </T>
      </Fade>
    </Scene>
  );
}
