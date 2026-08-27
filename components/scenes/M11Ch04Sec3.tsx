/**
 * M11 Ch04 · Section 3 — "The root-of-negatives trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — this is the section's own "speed trap": stage the
 * naive √(-4)(-9)=√36=6 wrong answer in red, cross it out, then the correct
 * -6 (already landed one beat earlier) stands as the contrast.
 *
 * Beats (board_reveal_at_english [0, 10.84, 19.11, 30.29, 47.1, 56.49, 67.16, 77.91]):
 *  0 heading: a trap — root a times root b can fail
 *  1 rule: √a·√b=√ab holds only when a,b are NOT both negative
 *  2 guardrail claim (red-margin, high): √-2·√-3 = -√6, not +√6
 *  3 honest derivation: √-2·√-3=(i√2)(i√3)=i²√6=-√6 — ERASED once beat 5 lands
 *  4 rule of thumb mini-flow: √(-a) → i·√a — ERASED once beat 5 lands
 *  5 second correct worked example: √-4·√-9=(2i)(3i)=6i²=-6, landed green
 *  6 THE TRAP staged: naive √(-4)(-9)=√36=6, crossed out in red
 *  7 verdict (red-margin): strip the i out first, then simplify
 *
 * Layout plan (b3/b4 vacate their space — on={beat>=3&&beat<5} / beat>=4&&beat<5 — before b5/b6 reuse it):
 *  b0 | heading (17,amber_dark)           | T mid  | x540 y102
 *  b0 | underline                          | Draw   | x420..660 y118
 *  b1 | rule text (15,ink)                 | T mid  | x540 y148
 *  b1 | underline                          | Draw   | x300..780 y164
 *  b2 | red bar                            | Draw   | x300 y191..225
 *  b2 | guardrail text (18,red,w700)       | T st   | x316 y213
 *  b3 | box + derivation (15,ink)          | Draw+T | x270..810 y252..294
 *  b4 | caption (14,amber_dark)            | T mid  | x540 y332
 *  b4 | chip √(-a) → chip i·√a             | Chip/Draw | y350..388
 *  b5 | chip formula (16,ink,green ring)   | Chip   | x300..780 y255..297
 *  b6 | naive wrong text + cross-out       | T+Draw | x400 y370, cross over box(400,356.7,256,18.5)
 *  b6 | caption "sign flips…"              | T mid  | x540 y405
 *  b7 | red rule-of-thumb chip             | Chip   | x260..820 y500..544
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
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch04Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The Root-of-Negatives Trap", "Root-of-Negatives ka Trap")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("A trap: √a · √b can fail", "Ek trap: √a · √b fail ho sakta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 420 118 L 660 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — the rule and its condition */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={148} size={15} fill={INK} anchor="middle">
          {t(
            "√a · √b = √ab holds for real a, b only when NOT both negative",
            "√a · √b = √ab tabhi chalta hai jab a, b dono negative na hon"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M 300 164 L 780 164" stroke={MUTED} sw={1.6} dur={0.6} />

      {/* beat 2 — guardrail claim */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 300 191 L 300 225" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={316} y={213} size={18} fill={RED} anchor="start" weight={700}>
          {t("√-2 · √-3 = -√6, not +√6", "√-2 · √-3 = -√6, +√6 nahi")}
        </T>
      </Fade>

      {/* beat 3 — honest derivation (erased once beat 5 lands) */}
      <Draw
        on={beat >= 3 && beat < 5}
        delay={dl(3, 0)}
        d={roundRectD(270, 252, 540, 42, 10)}
        stroke={MUTED}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.8)}>
        <T x={540} y={277} size={15} fill={INK} anchor="middle">
          √-2 · √-3 = (i√2)(i√3) = i²√6 = -√6
        </T>
      </Fade>

      {/* beat 4 — rule of thumb mini-flow (erased once beat 5 lands) */}
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0)}>
        <T x={540} y={332} size={14} fill={AMBER_DARK} anchor="middle">
          {t("Convert every root of a negative first:", "Pehle har negative root ko convert karo:")}
        </T>
      </Fade>
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.6)}>
        <Chip x={420} y={350} w={140} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          √(-a)
        </Chip>
      </Fade>
      <Draw on={beat >= 4 && beat < 5} delay={dl(4, 1.1)} d={arrowD(568, 369, 601, 369)} stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 1.4)}>
        <Chip x={606} y={350} w={140} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          i · √a
        </Chip>
      </Fade>

      {/* beat 5 — second correct worked example, landed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={300} y={255} w={480} h={42} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          √-4 · √-9 = (2i)(3i) = 6i² = -6
        </Chip>
      </Fade>

      {/* beat 6 — THE TRAP: naive wrong answer, staged then crossed out */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={400} y={370} size={17} fill={RED} anchor="start" weight={700}>
          {t("Naively: √(-4)(-9) = √36 = 6", "Naively: √(-4)(-9) = √36 = 6")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={crossD(400, 356.7, 256, 18.5)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={405} size={13} fill={RED} anchor="middle" script>
          {t("the sign flips — correct answer is -6", "sign flip hota hai — sahi answer -6 hai")}
        </T>
      </Fade>

      {/* beat 7 — verdict: rule of thumb */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={260} y={500} w={560} h={44} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("Rule of thumb: strip the i out first, then simplify", "Rule: pehle i nikaalo, phir simplify karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
