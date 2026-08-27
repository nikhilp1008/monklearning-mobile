/**
 * Ch01 · Section 87 — "Example 2 [NEET trap]: multiply or divide?"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.1, 32.9, 49.8, 73.1, 91.2, 105.9, 123.7]):
 *  0 question + option chips
 *  1 not random — each a real mistake
 *  2 the trap: 4.0 × 3.26 ≈ 13 → A (arrow)
 *  3 logic first: bigger unit ⇒ fewer — cross A
 *  4 the compass: bigger unit, smaller number
 *  5 arithmetic: ÷ 3.26 = 1.2 pc — ring B
 *  6 distractor anatomy (C, D)
 *  7 the order: AU < ly < parsec · DIVIDE
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | question mid bl 86 · chips y110..150 x150/350/550/750 w150
 *  b1 | muted mid bl 186
 *  b2 | red st x120 bl 226 · arrow (300,210)→(235,155)
 *  b3 | box x120..960 y250..296 (15 bl 278) · cross over A chip
 *  b4 | script 13 mid bl 330
 *  b5 | 18 st x160 bl 380 · ring c(425,130) rx85 ry30
 *  b6 | muted 13 st x160 bl 424 / 450
 *  b7 | chips y480..516 x160 w300 / x500 w400 · green mid bl 560
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
  arrowD,
  ringD,
  crossD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec87({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={24} fill={INK} script>
          {t("NEET — multiply or divide?", "NEET — guna ya bhaag?")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={86} size={14} fill={INK} script>
          {t(
            "a star lies 4.0 light years away — its distance in parsec is closest to:",
            "ek taara 4.0 light year door hai — parsec mein doori sabse kareeb:"
          )}
        </T>
      </Fade>
      {(["A · 13.0", "B · 1.2", "C · 4.0", "D · 0.31"] as const).map((o, i) => (
        <Fade key={o} on={beat >= 0} delay={dl(0, 10 + i * 2)}>
          <Chip
            x={150 + i * 200}
            y={110}
            w={150}
            h={40}
            fill={CREAM}
            stroke={INK_LIGHT}
            textFill={INK}
            size={16}
            script={false}
          >
            {o}
          </Chip>
        </Fade>
      ))}

      {/* beat 1 — each a real mistake */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={540} y={186} size={13} fill={MUTED} script>
          {t(
            "not random — each option is a specific mistake someone actually makes",
            "manmaane nahi — har option koi khaas galti hai jo log sach mein karte"
          )}
        </T>
      </Fade>

      {/* beat 2 — the multiply trap */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={120} y={226} size={14} fill={RED} script anchor="start">
          {t(
            "the half-memory: 4.0 × 3.26 ≈ 13 → tick A, waiting right there",
            "aadhi yaad: 4.0 × 3.26 ≈ 13 → A tick karo, wahi intezaar mein"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6)} d={arrowD(300, 208, 240, 158)} stroke={RED} sw={1.8} dur={0.5} />

      {/* beat 3 — logic before arithmetic */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d="M 132 250 h 816 q 12 0 12 12 v 22 q 0 12 -12 12 h -816 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={540} y={278} size={15} fill={INK} weight={700}>
          {t(
            "parsec is the BIGGER unit ⇒ the parsec number must be SMALLER — always",
            "parsec BADI unit hai ⇒ parsec waali sankhya CHHOTI honi hi chahiye — hamesha"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 12)} d={crossD(150, 110, 150, 40)} stroke={RED} sw={2.4} dur={0.5} />

      {/* beat 4 — the compass */}
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={540} y={330} size={13} fill={INK} script>
          {t(
            "bigger unit, smaller number — the km-vs-m compass: it throws away half the options before any arithmetic",
            "badi unit, chhoti sankhya — km-vs-m waala kutubnuma: arithmetic se pehle hi aadhe options phenk deta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the arithmetic */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={160} y={380} size={18} fill={GREEN} weight={700} anchor="start">
          D = 4.0 ly ÷ 3.26 ly/pc = 1.2 pc ✓
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 8)}
        d={ringD(425, 130, 88, 30)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />

      {/* beat 6 — distractor anatomy */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={160} y={424} size={13} fill={MUTED} script anchor="start">
          {t(
            "C pretends 1 pc = 1 ly — it leaves the number alone · D inverts the ratio and mis-scales",
            "C maanta hai 1 pc = 1 ly — number ko chhoota hi nahi · D anupaat ulat deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 11)}>
        <T x={160} y={450} size={13} fill={MUTED} script anchor="start">
          {t(
            "every wrong option is a real student's real mistake, captured and offered back",
            "har galat option kisi asli student ki asli galti hai, pakad kar wapas parosi gayi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the order */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={160} y={480} w={300} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15} script={false}>
          AU {"<"} light year {"<"} parsec
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <Chip x={500} y={480} w={400} h={36} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          1 pc = 3.26 ly = 3.08 × 10¹⁶ m
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={540} y={560} size={14} fill={GREEN} script>
          {t(
            "light years → parsec: DIVIDE, do not multiply",
            "light year → parsec: BHAAG do, guna nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
