/**
 * Ch01 · Section 26 — "Example 1 [CBSE]: is s = ut + ½at³ correct?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.5, 30.2, 35.2, 51.0, 65.7, 89.4, 109.8]):
 *  0 tag + question card
 *  1 STEP 1: [s] = L
 *  2 ring the L — the target every term must hit
 *  3 STEP 2: term by term, never as a group
 *  4 term 1: u·t → L ✓
 *  5 term 2: ½at³ → L T ✗ — off by one power of time
 *  6 the unforgiving verdict box
 *  7 the fix (½at²) + the ten-second moral
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..280 y40..78 · card x140..940 y92..152 · question (sans 20) bl 130
 *  b1 | STEP chip x60..250 y176..214 · "[s] = L" (sans 20) x290 st bl 202
 *  b2 | ring c(349,196) rx18 ry23 · note (script 14) x560 st bl 202
 *  b3 | STEP chip x60..280 y240..278 · note (script 14, red) x310 st bl 266
 *  b4 | term1 (sans 18) x60..240 bl 320 · note (script 14, green) x300 st bl 320
 *  b5 | term2 (sans 18) x60..290 bl 372 · note (script 13) x340 st bl 372
 *  b5 | mismatch (script 15, red) x60..470 bl 412
 *  b6 | verdict box x60..640 y440..496 · text (script 15) mid-350 bl 474
 *  b7 | fix (sans 17) x60..420 bl 536 · moral (script 15, green) x62 st bl 578 · bar x51
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={220} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 1 · CBSE", "EXAMPLE 1 · CBSE")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 92 h 776 q 12 0 12 12 v 36 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={540} y={130} size={20} fill={INK} weight={700}>
          {t(
            "check:  s = u t + ½ a t³  — dimensionally correct?",
            "check karo:  s = u t + ½ a t³  — dimensionally sahi?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the left hand side */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={60} y={176} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 1 · LHS", "STEP 1 · LHS")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={290} y={202} size={20} fill={INK} weight={700} anchor="start">
          [s] = L
        </T>
      </Fade>

      {/* beat 2 — the target */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d={ringD(349, 196, 18, 23)}
        stroke={AMBER}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={560} y={202} size={14} fill={AMBER_DARK} script anchor="start">
          {t("the target every term must hit", "har term ko yahi target maarna hai")}
        </T>
      </Fade>

      {/* beat 3 — term by term */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={60} y={240} w={220} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 2 · term by term", "STEP 2 · term by term")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={310} y={266} size={14} fill={RED} script anchor="start">
          {t("never as a group — one at a time", "kabhi jodkar nahi — ek-ek karke")}
        </T>
      </Fade>

      {/* beat 4 — first term passes */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={60} y={320} size={18} fill={INK} weight={700} anchor="start">
          u·t :  [L T⁻¹][T] = L
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={320} y={320} size={14} fill={GREEN} script anchor="start">
          {t("matches the target ✓", "target se match ✓")}
        </T>
      </Fade>

      {/* beat 5 — second term misbehaves */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={60} y={372} size={18} fill={INK} weight={700} anchor="start">
          ½ a·t³ :  [L T⁻²][T³] = L T
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={360} y={372} size={13} fill={MUTED} script anchor="start">
          {t("(dimensions can't see the ½ anyway)", "(½ toh dimensions ko dikhta hi nahi)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={60} y={412} size={15} fill={RED} script anchor="start">
          {t("L T ≠ L — off by one whole power of time ✗", "L T ≠ L — poore ek power of time ka fark ✗")}
        </T>
      </Fade>

      {/* beat 6 — the unforgiving rule */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 72 440 h 556 q 12 0 12 12 v 32 q 0 12 -12 12 h -556 q -12 0 -12 -12 v -32 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={350} y={474} size={15} fill={RED} script>
          {t(
            "one term differs → DEFINITELY wrong. not maybe — wrong.",
            "ek term alag → PAKKA galat. shayad nahi — galat."
          )}
        </T>
      </Fade>

      {/* beat 7 — the fix, and the moral */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={60} y={536} size={17} fill={INK} weight={700} anchor="start">
          {t("fix:  ½ a t²  →  [L T⁻²][T²] = L ✓", "fix:  ½ a t²  →  [L T⁻²][T²] = L ✓")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 9)}
        d="M 51 558 L 51 588"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={62} y={578} size={15} fill={GREEN} script anchor="start">
          {t(
            "ten seconds — no motion solved, nothing known about the particle",
            "das second — na motion solve kiya, na particle ke baare mein kuch jaana"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
