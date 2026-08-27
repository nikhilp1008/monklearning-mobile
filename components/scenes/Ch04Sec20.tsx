/**
 * Ch04 · Section 20 — "Worked Example 2 [NEET Speed Trap]: the carrom striker"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.4, 25.9, 43.9, 56.3, 66.8, 76.6, 84.3, 105.9]):
 *  0 title
 *  1 problem + find
 *  2 red margin: four-fraction trap, grams as bait
 *  3 amber line: the sanity-checked special case
 *  4 figure: before (S→ 4, C rest) — exchange — after (S stops, C→ 4)
 *  5 result box + bait note
 *  6 heading: three elastic special cases
 *  7 three instant-answer lines
 *  8 red bar (right): striker-forward option dies on sight
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | bar x66 y140..192 · lines st x84 bl 160 / 184
 *  b3 st x84 bl 224
 *  fig | S c(170,290) r14 · arr (190,290)→(250,290) lbl cx220 bl 272 ·
 *    C c(300,290) r12 · "at rest" cx300 bl 335 · X-arr (390,290)→(560,290) ·
 *    "exchange" cx475 bl 272 · S' c(640,290) "stops" bl 335 · C' c(700,290) ·
 *    arr (718,290)→(778,290) lbl cx748 bl 272
 *  b5 box x300..640 y400..438 bl 424 · note st x660 bl 424
 *  b6 head cx540 bl 470 · b7 lines st x84 bl 500 / 524 / 548
 *  b8 | bar x640 y495..560 · lines st x658 bl 515 / 541
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 2 [NEET Speed Trap] — the carrom striker",
            "Example 2 [NEET Speed Trap] — carrom ka striker"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "striker 15 g at 4 m⁄s hits an IDENTICAL coin at rest, head-on, perfectly elastic",
            "striker 15 g, 4 m⁄s par, EK JAISE khade coin ko head-on maarta hai, perfectly elastic"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: both velocities immediately after",
            "nikaalo: turant baad dono velocities"
          )}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 140 v 54" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={160} size={14} fill={RED} script anchor="start">
          {t(
            "trap: the four-fraction formulas — a full minute of algebra burned",
            "trap: chaar-fraction waale formulas — poora minute algebra mein gaya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={84} y={184} size={14} fill={RED} script anchor="start">
          {t(
            "the mass in GRAMS is bait, tempting you to convert",
            "GRAMS mein mass sirf chara hai, convert karne ka lalach"
          )}
        </T>
      </Fade>

      {/* beat 3 — the recognition */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={84} y={224} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "equal masses · elastic · head-on → the special case we sanity-checked",
            "barabar masses · elastic · head-on → wahi sanity-check waala special case"
          )}
        </T>
      </Fade>

      {/* beat 4 — the exchange */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={circleD(170, 290, 14)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.4)}
        d={arrowD(190, 290, 250, 290)}
        stroke={GREEN}
        sw={2.6}
        dur={0.3}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={220} y={272} size={12} fill={GREEN} script>
          4 m⁄s
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.4)}
        d={circleD(300, 290, 12)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <T x={300} y={335} size={12} fill={MUTED} script>
          {t("at rest", "rest par")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 4)}
        d={arrowD(390, 290, 560, 290)}
        stroke={MUTED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={475} y={272} size={12} fill={AMBER_DARK} script>
          {t("they EXCHANGE", "EXCHANGE ho gaya")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5.4)}
        d={`${circleD(640, 290, 14)} ${circleD(700, 290, 12)}`}
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.2)}>
        <T x={640} y={335} size={12} fill={RED} script>
          {t("stops dead", "wahin ruk gaya")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 6.8)}
        d={arrowD(718, 290, 778, 290)}
        stroke={GREEN}
        sw={2.6}
        dur={0.3}
      />
      <Fade on={beat >= 4} delay={dl(4, 7.2)}>
        <T x={748} y={272} size={12} fill={GREEN} script>
          4 m⁄s
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 312 400 h 316 q 12 0 12 12 v 14 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={470} y={424} size={16} fill={INK} weight={800}>
          v_striker = 0&nbsp;&nbsp;·&nbsp;&nbsp;v_coin = 4 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={660} y={424} size={12} fill={AMBER_DARK} script anchor="start">
          {t("the 15 g was never used — pure bait", "15 g kabhi use hi nahi hua — sirf chara")}
        </T>
      </Fade>

      {/* beat 6 — bank the cases */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={300} y={470} size={15} fill={AMBER_DARK} script>
          {t(
            "the three elastic special cases — instant answers",
            "teen elastic special cases — instant answers"
          )}
        </T>
      </Fade>

      {/* beat 7 — the three cases */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={84} y={500} size={13} fill={INK} script anchor="start">
          {t("1 · equal masses → SWAP velocities", "1 · barabar masses → velocities SWAP")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={524} size={13} fill={INK} script anchor="start">
          {t(
            "2 · heavy hits light at rest → heavy ≈ unchanged, light shoots at ≈ 2u",
            "2 · bhaari halki ko maare → bhaari ≈ waisi hi, halki ≈ 2u par nikli"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={84} y={548} size={13} fill={INK} script anchor="start">
          {t(
            "3 · light hits heavy at rest → light bounces back, heavy barely moves",
            "3 · halki bhaari ko maare → halki wapas uchhli, bhaari mushkil se hili"
          )}
        </T>
      </Fade>

      {/* beat 8 — free elimination */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 640 498 v 56" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={658} y={518} size={13} fill={RED} script anchor="start">
          {t(
            "'striker keeps moving forward' → wrong ON SIGHT",
            "'striker aage badhta rahega' → dekhte hi galat"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={658} y={544} size={13} fill={RED} script anchor="start">
          {t(
            "it would need MORE momentum than you started with",
            "shuruaat se ZYADA momentum chahiye hota"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
