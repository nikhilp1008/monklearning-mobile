/**
 * Ch01 · Section 28 — "Example 3 [JEE Main]: the speed of a wave on a stretched string"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.7, 30.7, 50.4, 75.2, 100.0, 114.0, 130.6]):
 *  0 tag + question card: v = f(T, μ)
 *  1 step 1: v = C · Tᵃ μᵇ
 *  2 the string drawn: clamps, wave, outward tension arrows, μ label
 *  3 step 2: dimensions (symbol-collision warning) + collect
 *  4 step 3: equate → a = ½, b = −½, M cross-check
 *  5 step 4: v = C √(T/μ)
 *  6 full physics adds only C = 1
 *  7 the meaning: guitar tuning & thick bass strings
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..300 y40..78 · card x140..940 y92..152 · question (sans 19) bl 130
 *  b1 | formula (sans 22) (250, bl 200) · note (script 14) x420 st bl 200
 *  b2 | clamps x80 & x440 y250..320 · wave path y~260..300 · T arrows
 *       (95,282)→(63,282) & (425,282)→(457,282) · labels (48,276) (472,276) ·
 *       μ note (script 13) (260, bl 245)
 *  b3 | rows x520 st bl 250/282/314 (sans 15) · warning (script 12, red) x760 st bl 282
 *  b3 | collect (sans 17) x520 st bl 352
 *  b4 | rows (sans 15) x60 st bl 390/420/450 · check (script 14, green) x340 st bl 450
 *  b5 | "v = C √(T/μ)" (sans 24) (700, bl 420)
 *  b6 | lines (script 15/14) x600 st bl 470 / 502
 *  b7 | bar x51 y527..586 · lines (script 15, green) x62 st bl 545 / 582
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={240} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 3 · JEE MAIN", "EXAMPLE 3 · JEE MAIN")}
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
        <T x={540} y={130} size={19} fill={INK} weight={700}>
          {t(
            "wave speed on a string:  v depends on T and μ  →  derive v",
            "string par wave ki speed:  v, T aur μ par depend  →  v nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the assumption */}
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={250} y={200} size={22} fill={INK} weight={800}>
          v = C · Tᵃ μᵇ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={420} y={200} size={14} fill={MUTED} script anchor="start">
          {t("2 exponents · 1 constant", "2 exponents · 1 constant")}
        </T>
      </Fade>

      {/* beat 2 — the string itself */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.5)}
        d="M 80 250 V 320 M 80 258 l -10 -8 M 80 274 l -10 -8 M 80 290 l -10 -8 M 80 306 l -10 -8"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.2)}
        d="M 440 250 V 320 M 440 258 l 10 -8 M 440 274 l 10 -8 M 440 290 l 10 -8 M 440 306 l 10 -8"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d="M 90 285 Q 132 235 175 285 T 260 285 T 345 285 T 430 285"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={1.2}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.5)}
        d={arrowD(95, 332, 63, 332)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 5.3)}
        d={arrowD(425, 332, 457, 332)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={48} y={338} size={15} fill={RED} weight={700}>
          T
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={472} y={338} size={15} fill={RED} weight={700}>
          T
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={260} y={238} size={13} fill={MUTED} script>
          {t("μ = mass per unit length", "μ = mass per unit length")}
        </T>
      </Fade>

      {/* beat 3 — insert dimensions */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={520} y={250} size={15} fill={INK} weight={600} anchor="start">
          v: [L T⁻¹]
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={520} y={282} size={15} fill={INK} weight={600} anchor="start">
          {t("T (tension): [M L T⁻²]", "T (tension): [M L T⁻²]")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={760} y={282} size={12} fill={RED} script anchor="start">
          {t("≠ T for time — symbol trap!", "≠ time wala T — symbol trap!")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={520} y={314} size={15} fill={INK} weight={600} anchor="start">
          μ: [M L⁻¹]
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 17)}>
        <T x={520} y={352} size={17} fill={INK} weight={700} anchor="start">
          →  Mᵃ⁺ᵇ · Lᵃ⁻ᵇ · T⁻²ᵃ
        </T>
      </Fade>

      {/* beat 4 — equate the powers */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={60} y={390} size={15} fill={INK} weight={700} anchor="start">
          M:  a + b = 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={60} y={420} size={15} fill={INK} weight={700} anchor="start">
          T:  −2a = −1  →  a = ½
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={60} y={450} size={15} fill={INK} weight={700} anchor="start">
          L:  a − b = 1  →  b = −½
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 18)}>
        <T x={340} y={450} size={14} fill={GREEN} script anchor="start">
          {t("cross-check M: ½ − ½ = 0 ✓", "cross-check M: ½ − ½ = 0 ✓")}
        </T>
      </Fade>

      {/* beat 5 — assemble */}
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={700} y={420} size={24} fill={INK} weight={800}>
          v = C √(T/μ)
        </T>
      </Fade>

      {/* beat 6 — how little was missing */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={620} y={470} size={15} fill={AMBER_DARK} script anchor="start">
          {t("the full wave physics adds only: C = 1", "poori wave physics ne bas itna joda: C = 1")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={620} y={502} size={14} fill={GREEN} script anchor="start">
          {t("the structure was already ours", "structure toh pehle hi hamara tha")}
        </T>
      </Fade>

      {/* beat 7 — what the exponents mean */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 2)}
        d="M 51 527 L 51 586"
        stroke={GREEN}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={62} y={545} size={15} fill={GREEN} script anchor="start">
          {t(
            "T upstairs: tighten the string → faster wave (tuning a guitar)",
            "T upar: string kaso → wave tez (guitar tune karna)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={62} y={582} size={15} fill={GREEN} script anchor="start">
          {t(
            "μ downstairs: heavier string → slower wave (bass strings are thick!)",
            "μ neeche: bhaari string → wave dheemi (bass strings moti hoti hain!)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
