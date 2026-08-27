/**
 * Ch01 · Section 55 — "Counting walkthrough: the numbers designed to catch you"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.7, 31.6, 56.4, 81.2, 106.1, 113.6, 125.6]):
 *  0 title + "try each before I speak"
 *  1 0.05000 spans → 4 sf · two rules meet
 *  2 5060 → 3 sf · sandwiched counts, trailing dropped
 *  3 5060. → 4 sf · the lone decimal is a deliberate signal
 *  4 0.003080 → 4 sf · everything at once
 *  5 divider · switch to addition
 *  6 124.5 + 0.36 + 7.02 = 131.88 (calculator)
 *  7 dp labels · least = 1 → 131.9 ✓, 131.88 ✗ crossed · coarsest-instrument note
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s; sans-24 digit ≈14.5, dot ≈5):
 *  rows bl 120/170/220/270: spans st x120 · chip x460..560 h30 · note 13 st x600
 *  b5 | line y310 · heading script 16 mid bl 340
 *  b6 | sum 22 st x140 bl 390 · calc 18 st x420
 *  b7 | dp 13 cx172/256/330 bl 420 · results bl 470: green st x140 · red st x360 + cross · note mid bl 520
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
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

export default function Ch01Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const sfChip = (bl: number, label: string, on: boolean, delay: number) => (
    <Fade on={on} delay={delay}>
      <Chip x={460} y={bl - 21} w={100} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
        {label}
      </Chip>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={26} fill={INK} script>
          {t(
            "the numbers designed to catch you",
            "wo numbers jo tumhe phansaane ko bane hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.5)}>
        <T x={540} y={88} size={14} fill={MUTED} script>
          {t("try each one before I speak", "har ek mere bolne se pehle khud try karo")}
        </T>
      </Fade>

      {/* beat 1 — 0.05000 */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={120} y={126} size={24} fill={RED} weight={700} anchor="start">0.0</T>
        <T x={156} y={126} size={24} fill={INK} weight={700} anchor="start">5</T>
        <T x={173} y={126} size={24} fill={GREEN} weight={700} anchor="start">000</T>
      </Fade>
      {sfChip(126, "4 sf", beat >= 1, dl(1, 5))}
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={600} y={126} size={13} fill={AMBER_DARK} script anchor="start">
          {t("two rules meeting in one number", "ek hi number mein do niyam milte")}
        </T>
      </Fade>

      {/* beat 2 — 5060 */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={120} y={176} size={24} fill={INK} weight={700} anchor="start">5</T>
        <T x={137} y={176} size={24} fill={GREEN} weight={700} anchor="start">0</T>
        <T x={154} y={176} size={24} fill={INK} weight={700} anchor="start">6</T>
        <T x={171} y={176} size={24} fill={AMBER_DARK} weight={700} anchor="start">0</T>
      </Fade>
      {sfChip(176, "3 sf", beat >= 2, dl(2, 6))}
      <Fade on={beat >= 2} delay={dl(2, 11)}>
        <T x={600} y={176} size={13} fill={MUTED} script anchor="start">
          {t(
            "sandwiched counts — bare trailing dropped",
            "sandwich gina — nanga trailing gira"
          )}
        </T>
      </Fade>

      {/* beat 3 — 5060. */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={120} y={226} size={24} fill={INK} weight={700} anchor="start">5</T>
        <T x={137} y={226} size={24} fill={GREEN} weight={700} anchor="start">0</T>
        <T x={154} y={226} size={24} fill={INK} weight={700} anchor="start">6</T>
        <T x={171} y={226} size={24} fill={GREEN} weight={700} anchor="start">0</T>
        <T x={188} y={226} size={24} fill={GREEN} weight={800} anchor="start">.</T>
      </Fade>
      {sfChip(226, "4 sf", beat >= 3, dl(3, 6))}
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={600} y={226} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the lone decimal = deliberate signal: measured",
            "akela decimal = jaanbujha sanket: napa gaya"
          )}
        </T>
      </Fade>

      {/* beat 4 — 0.003080 */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={120} y={276} size={24} fill={RED} weight={700} anchor="start">0.00</T>
        <T x={171} y={276} size={24} fill={INK} weight={700} anchor="start">3</T>
        <T x={188} y={276} size={24} fill={GREEN} weight={700} anchor="start">0</T>
        <T x={205} y={276} size={24} fill={INK} weight={700} anchor="start">8</T>
        <T x={222} y={276} size={24} fill={GREEN} weight={700} anchor="start">0</T>
      </Fade>
      {sfChip(276, "4 sf", beat >= 4, dl(4, 12))}
      <Fade on={beat >= 4} delay={dl(4, 17)}>
        <T x={600} y={276} size={13} fill={MUTED} script anchor="start">
          {t(
            "scaffold · sandwich · trailing — all at once",
            "scaffold · sandwich · trailing — sab ek saath"
          )}
        </T>
      </Fade>

      {/* beat 5 — switch rules */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 100 310 h 880" stroke={MUTED} sw={1.4} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={540} y={340} size={16} fill={AMBER_DARK} script>
          {t(
            "now an addition — the rules switch",
            "ab ek jod — niyam badalte hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — the sum */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={140} y={390} size={22} fill={INK} weight={700} anchor="start">
          124.5 + 0.36 + 7.02
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={420} y={390} size={18} fill={MUTED} weight={600} anchor="start">
          {t("= 131.88 (calculator)", "= 131.88 (calculator)")}
        </T>
      </Fade>

      {/* beat 7 — decimal places decide */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={172} y={420} size={13} fill={AMBER_DARK} script>1 dp</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={256} y={420} size={13} fill={AMBER_DARK} script>2 dp</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={330} y={420} size={13} fill={AMBER_DARK} script>2 dp</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={430} y={420} size={14} fill={AMBER_DARK} script anchor="start">
          {t("least = 1 dp", "sabse kam = 1 dp")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={140} y={470} size={24} fill={GREEN} weight={700} anchor="start">→ 131.9 g ✓</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={380} y={470} size={20} fill={RED} weight={700} anchor="start">131.88 ✗</T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 14)}
        d={crossD(378, 454, 95, 20)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={540} y={520} size={14} fill={RED} script>
          {t(
            "the most impressive number ruined the precision — coarsest instrument",
            "sabse prabhavshali number ne hi precision barbaad ki — sabse mota instrument"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
