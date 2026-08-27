/**
 * M11 Ch14 · Section 11 — "Worked example: which pair is mutually exclusive (CUET)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples, JSON-flagged
 * "Speed Trap" — MCQ options row, kill wrong options with cross-outs,
 * ring the survivor.
 *
 * Beats (board_reveal_at_english [0,16.55,25.51,34.82,46.17,55.21,68.86,79.53]):
 *  0 heading: Speed Trap
 *  1 problem: one card from 52-deck, which pair is mutually exclusive?
 *  2 four options (i)-(iv) listed
 *  3 GUARDRAIL: hunt for ONE common card — don't enumerate
 *  4 (i) King of Hearts is both → NOT exclusive → crossed
 *  5 (ii) spades always black, never red → mutually exclusive (survivor)
 *  6 (iii) every Queen is a face card → overlap; (iv) 2♠ even & black → overlap → both crossed
 *  7 formula (HIGH): Answer: (ii), ringed
 *
 * Layout plan (4 option rows y165/196/227/258, option label x140 start,
 * reasoning appended x460 start; longer language counts):
 *  b1 | problem (16, ink)                          | T mid | x220..860 y128..146
 *  b2 | 4 options (15, ink), x140 start             | T st  | y150..268
 *  b3 | guardrail chip (red, w760 h40)              | Chip  | x160..920 y282..322
 *  b4 | cross row(i) + red reasoning appended       | Draw/T| x130..360 y150..180
 *  b5 | green reasoning appended to row(ii)         | T st  | x460..750 y188..204
 *  b6 | cross row(iii)+(iv) + red reasoning appended| Draw/T| x130..430 y212..273
 *  b7 | ring around row(ii) + boxed "Answer: (ii)"  | Draw/T| x122..778 y164..227 / x390..690 y440..490
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
  crossD,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const OPTIONS = [
  { key: "i", en: "(i) King & Heart", hi: "(i) King & Heart" },
  { key: "ii", en: "(ii) Spade & red", hi: "(ii) Spade & red" },
  { key: "iii", en: "(iii) face card & Queen", hi: "(iii) face card & Queen" },
  { key: "iv", en: "(iv) even-numbered & black", hi: "(iv) even-numbered & black" },
];

export default function M11Ch14Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rowY = [165, 196, 227, 258];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("one counterexample kills an option — never enumerate", "ek counterexample option maar deta hai — kabhi enumerate mat karo")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Speed Trap — which pair is mutually exclusive? (CUET)", "Speed Trap — kaunsa pair mutually exclusive hai? (CUET)")}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={135} size={16} fill={INK} weight={600}>
          {t("One card from a 52-card deck. Which pair is mutually exclusive?", "Ek 52-card deck se ek card. Kaunsa pair mutually exclusive hai?")}
        </T>
      </Fade>

      {/* beat 2 — four options */}
      {OPTIONS.map((o, i) => (
        <Fade key={o.key} on={beat >= 2} delay={dl(2, 0.3 + i * 0.4)}>
          <T x={140} y={rowY[i]} size={15} fill={INK} anchor="start" weight={600}>
            {t(o.en, o.hi)}
          </T>
        </Fade>
      ))}

      {/* beat 3 — GUARDRAIL: the method */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={160} y={282} w={760} h={40} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("hunt for ONE common card — don't enumerate!", "ek common card dhoondo — enumerate mat karo!")}
        </Chip>
      </Fade>

      {/* beat 4 — (i) killed */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={crossD(136, 150, 220, 24)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={460} y={rowY[0]} size={14} fill={RED} anchor="start" weight={700}>
          {t("→ King♥ is both → overlap ✗", "→ King♥ dono hai → overlap ✗")}
        </T>
      </Fade>

      {/* beat 5 — (ii) survives */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={460} y={rowY[1]} size={14} fill={GREEN} anchor="start" weight={700}>
          {t("→ spades always black → NO overlap ✓", "→ spade hamesha black → overlap NAHI ✓")}
        </T>
      </Fade>

      {/* beat 6 — (iii) and (iv) killed */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={crossD(136, 212, 290, 24)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={460} y={rowY[2]} size={14} fill={RED} anchor="start" weight={700}>
          {t("→ every Queen is a face card → overlap ✗", "→ har Queen face card hai → overlap ✗")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d={crossD(136, 243, 260, 24)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <T x={460} y={rowY[3]} size={14} fill={RED} anchor="start" weight={700}>
          {t("→ 2♠ is even & black → overlap ✗", "→ 2♠ even & black hai → overlap ✗")}
        </T>
      </Fade>

      {/* beat 7 — final answer, ringed */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={ringD(442, 195, 320, 24)} stroke={GREEN} sw={2.4} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <Chip x={390} y={440} w={300} h={50} fill={GREEN} textFill="#fff" size={19} script={false}>
          {t("Answer: (ii)", "Answer: (ii)")}
        </Chip>
      </Fade>
    </Scene>
  );
}
