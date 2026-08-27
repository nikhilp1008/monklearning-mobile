/**
 * Ch01 · Section 12 — "Example 2 [NEET trap]: which one is a base quantity?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.7, 40.2, 55.7, 74.9, 98.4, 116.8, 132.5]):
 *  0 tag + question + four option chips
 *  1 the pull: charge FEELS fundamental (squiggle under A)
 *  2 the trap: the 2-second reflex answer is wrong
 *  3 green base panel (current ringed in the seven) vs red derived panel
 *  4 kill B and D: visibly assembled — crosses over the chips
 *  5 the straight fight: recall — SI picked current
 *  6 the proof: I = Q/t ⇒ C = A·s ⇒ can't be base
 *  7 answer C (underlined) + the pitfall line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag chip x60..280 y40..78 · question (sans 19) x320 st bl 65
 *  b0 | options (h38) y96..134: A x60..250 · B x280..450 · C x480..670 · D x700..880
 *  b1 | squiggle y144 x70..240 · note (script 14) x60..222 bl 174
 *  b2 | reflex note (script 15, red) x300..580 bl 174
 *  b3 | green panel x60..500 y200..340: header bl 226 · list bl 270 (A at x210,
 *       ringed c(210,265) rx20) · note bl 314
 *  b3 | red panel x580..1020 y200..340: header bl 226 · "charge: C = A·s" bl 272 ·
 *       subnote bl 314
 *  b4 | crosses over chips B, D · formulas x60/x290 bl 400 · note x540..794 bl 400
 *  b5 | recall line (script 16) x60..447 bl 448 · ampere note x520..836 bl 448
 *  b6 | proof (sans 20) x60..340 bl 496 · note (script 15, red) x400..697 bl 496
 *  b7 | underline under C y144 x490..660 · answer chip x60..360 y530..574 ·
 *       pitfall (script 16, red) x400..902 bl 560
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
  ringD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

const OPTIONS: [string, string, number, number][] = [
  ["A · charge", "A · charge", 60, 190],
  ["B · force", "B · force", 280, 170],
  ["C · current", "C · current", 480, 190],
  ["D · energy", "D · energy", 700, 180],
];

export default function Ch01Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={220} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 2 · NEET TRAP", "EXAMPLE 2 · NEET TRAP")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.5)}>
        <T x={320} y={65} size={19} fill={INK} weight={700} anchor="start">
          {t("which is a BASE quantity in the SI?", "SI mein BASE quantity kaunsi hai?")}
        </T>
      </Fade>
      {OPTIONS.map(([label, _hi, x, w], i) => (
        <Fade key={label} on={beat >= 0} delay={dl(0, 4 + i * 2)}>
          <Chip x={x} y={96} w={w} h={38} fill={PAPER} stroke={INK} textFill={INK} size={16} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}

      {/* beat 1 — the pull of option A */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.5)}
        d="M 70 144 C 110 140, 160 148, 240 143"
        stroke={AMBER}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={60} y={174} size={14} fill={AMBER_DARK} script anchor="start">
          {t("feels SO fundamental…", "kitna fundamental lagta hai…")}
        </T>
      </Fade>

      {/* beat 2 — the reflex trap */}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={300} y={174} size={15} fill={RED} script anchor="start">
          {t("the 2-second reflex: tick A → wrong ✗", "2-second reflex: A tick → galat ✗")}
        </T>
      </Fade>

      {/* beat 3 — base side vs derived side */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 72 200 h 416 q 12 0 12 12 v 116 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -116 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={280} y={226} size={15} fill={GREEN} script>
          {t("BASE — the fixed seven", "BASE — pakki saat")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={80} y={270} size={16} fill={INK} weight={600} anchor="start">
          m · kg · s ·
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={210} y={270} size={18} fill={INK} weight={800}>
          A
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={244} y={270} size={16} fill={INK} weight={600} anchor="start">
          · K · mol · cd
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d={ringD(210, 265, 20, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={280} y={314} size={14} fill={GREEN} script>
          {t("current is the electrical base", "electrical base = current")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 8)}
        d="M 592 200 h 416 q 12 0 12 12 v 116 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -116 q 0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={800} y={226} size={15} fill={RED} script>
          DERIVED
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10.5)}>
        <T x={800} y={272} size={18} fill={INK} weight={700}>
          charge: C = A·s
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12.5)}>
        <T x={800} y={314} size={13} fill={MUTED} script>
          {t("right at the top of the derived pile", "derived dher mein sabse upar")}
        </T>
      </Fade>

      {/* beat 4 — kill B and D on sight */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d={crossD(280, 96, 170, 38)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={60} y={400} size={15} fill={INK} weight={600} anchor="start">
          force = kg·m/s² ✗
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 8)}
        d={crossD(700, 96, 180, 38)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={290} y={400} size={15} fill={INK} weight={600} anchor="start">
          energy = kg·m²/s² ✗
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={540} y={400} size={14} fill={RED} script anchor="start">
          {t("you can SEE the kg and m in them", "kg aur m saaf dikh rahe hain")}
        </T>
      </Fade>

      {/* beat 5 — the straight fight */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={60} y={448} size={16} fill={AMBER_DARK} script anchor="start">
          {t(
            "charge vs current → recall: the SI picked CURRENT",
            "charge vs current → yaad karo: SI ne CURRENT chuna"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={520} y={448} size={14} fill={MUTED} script anchor="start">
          {t("everything electrical grows from the ampere", "sab electrical cheezein ampere se ugti hain")}
        </T>
      </Fade>

      {/* beat 6 — the proof line */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={60} y={496} size={20} fill={INK} weight={700} anchor="start">
          I = Q/t  ⇒  Q = I·t  ⇒  C = A·s
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={400} y={496} size={15} fill={RED} script anchor="start">
          {t("base × base ⇒ cannot itself be base", "base × base ⇒ khud base nahi ho sakta")}
        </T>
      </Fade>

      {/* beat 7 — the answer, and the pitfall */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 490 144 C 540 140, 610 148, 660 143"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={60} y={530} w={300} h={44} fill={GREEN} textFill="#fff" size={18}>
          {t("answer: C · electric current", "answer: C · electric current")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={400} y={560} size={16} fill={RED} script anchor="start">
          {t(
            "fundamental in FEELING ≠ fundamental in the SI",
            "FEELING mein fundamental ≠ SI mein fundamental"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
