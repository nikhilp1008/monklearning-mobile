/**
 * Ch01 · Section 36 — "Relative error, percentage error, and the least-count error"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.9, 26.2, 42.4, 53.0, 65.2, 87.7, 99.8]):
 *  0 title + absolute error's problem
 *  1 relative error chip — dimensionless
 *  2 rel = Δā/ā — the better question
 *  3 percentage chip — dressed for reporting
 *  4 δa = (Δā/ā) × 100 % + notation note
 *  5 0.5 cm "vs" 0.1 s crossed out — % first, then judge
 *  6 least-count chip — one reading, nothing to average
 *  7 Δa = ½ × least count + the boundary
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 62 · problem (script 15) mid bl 106
 *  b1 | chip x60..320 y136..174 · note (script 14, green) x640 st bl 162
 *  b2 | formula (sans 22) x360 st bl 162 · question (script 14) x104 st bl 212
 *  b3 | chip x60..260 y240..278 · note (script 13) x640 st bl 266
 *  b4 | formula (sans 22) x300 st bl 266 · note (script 13) x104 st bl 316
 *  b5 | "0.5 cm vs 0.1 s ?" (sans 18) x104 st bl 366 + cross over "vs" ·
 *       notes x340 st / x660 st bl 366
 *  b6 | chip x60..260 y400..438 · note (script 14) x300 st bl 426
 *  b7 | formula (sans 20) x104 st bl 480 · caveat x460 st bl 480 ·
 *       boundary (script 14, red) x104 st bl 535 · underline y552
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the problem with absolute error */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("errors you can actually compare", "errors jinki tulna ho sake")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={106} size={15} fill={MUTED} script>
          {t(
            "absolute error is honest — but it can't compare two experiments",
            "absolute error imaandaar hai — par do experiments ki tulna nahi kar sakta"
          )}
        </T>
      </Fade>

      {/* beat 1 — relative error */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={60} y={136} w={260} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("relative (fractional) error", "relative (fractional) error")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={660} y={162} size={14} fill={GREEN} script anchor="start">
          {t("dimensionless — the units walk away", "dimensionless — units chali jaati hain")}
        </T>
      </Fade>

      {/* beat 2 — the better question */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={360} y={162} size={22} fill={INK} weight={800} anchor="start">
          rel. error = Δā / ā
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={104} y={212} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "not 'how big is the error?' — 'how big, compared to the thing itself?'",
            "'error kitna bada?' nahi — 'jitna napa uske muqable kitna bada?'"
          )}
        </T>
      </Fade>

      {/* beat 3 — percentage error */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={60} y={240} w={200} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("percentage error", "percentage error")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={660} y={266} size={13} fill={MUTED} script anchor="start">
          {t("the exam's favourite outfit", "exam ka favourite libaas")}
        </T>
      </Fade>

      {/* beat 4 — the formula and its notation */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={300} y={266} size={22} fill={INK} weight={800} anchor="start">
          δa = (Δā / ā) × 100 %
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={104} y={316} size={13} fill={MUTED} script anchor="start">
          {t("δ with no bar = percentage error — standard notation, get used to it", "bina bar wala δ = percentage error — standard likhawat")}
        </T>
      </Fade>

      {/* beat 5 — why all this exists */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={104} y={366} size={18} fill={INK} weight={700} anchor="start">
          0.5 cm vs 0.1 s ?
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 5)}
        d={crossD(159, 352, 22, 16)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 6.5)}>
        <T x={340} y={366} size={14} fill={RED} script anchor="start">
          {t("length vs time — meaningless!", "length vs time — bematlab!")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={660} y={366} size={14} fill={GREEN} script anchor="start">
          {t("→ % error first, THEN judge", "→ pehle % error, PHIR raay")}
        </T>
      </Fade>

      {/* beat 6 — the least-count case */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={60} y={400} w={200} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("least-count error", "least-count error")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={300} y={426} size={14} fill={INK} script anchor="start">
          {t("you measured once — there is nothing to average", "ek baar napa — average karne ko kuch hai hi nahi")}
        </T>
      </Fade>

      {/* beat 7 — the rule and its boundary */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={104} y={480} size={20} fill={INK} weight={800} anchor="start">
          Δa = ½ × least count
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={460} y={480} size={13} fill={MUTED} script anchor="start">
          {t("(some conventions use the full LC — read the question)", "(kuch conventions poora LC lete hain — sawaal padho)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={104} y={535} size={14} fill={RED} script anchor="start">
          {t(
            "for ONE reading only — with five readings, the mean absolute error takes over",
            "SIRF ek reading ke liye — paanch readings par mean absolute error kaam karega"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 16)}
        d="M 104 552 C 280 548, 500 554, 680 550"
        stroke={RED}
        sw={2}
        dur={0.6}
      />
    </Scene>
  );
}
