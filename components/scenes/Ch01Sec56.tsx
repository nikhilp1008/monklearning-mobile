/**
 * Ch01 · Section 56 — "Example 1 [CBSE]: the area of a glass sheet"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12, 27.6, 35.7, 49.6, 63.2, 73.9, 83.2]):
 *  0 title · draw the glass sheet rectangle
 *  1 dimension labels: 2.165 m green (care) · 1.2 m red (only 2 sf)
 *  2 step 1 header — count each separately
 *  3 counts: 2.165 → 4 sf · 1.2 → 2 sf
 *  4 which rule: area = l × b → multiplication → SIG FIGS
 *  5 calculator: 2.598 m² — four tempting digits
 *  6 → 2.6 m² green · least = 2 sf
 *  7 chain with red weak link · the chain = its weakest link
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | sheet rect x120..480 y130..330
 *  b1 | "2.165 m" 20 cx300 bl 356 · green note 13 cx300 bl 384 · "1.2 m" 20 st x496 bl 236 · red note 13 st x496 bl 268
 *  b2 | header script 15 st x580 bl 150
 *  b3 | rows 18 st x580 bl 190/225
 *  b4 | script 15 st x580 bl 272 · amber 14 st x580 bl 300
 *  b5 | 20 st x580 bl 345 · muted 13 st x580 bl 375
 *  b6 | "→ 2.6 m²" 26 st x580 bl 420 · amber 14 st x720 bl 420
 *  b7 | chain rings cx 240..520 cy 490 · red label cx380 bl 548 · muted 13 cx380 bl 576
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the sheet */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={26} fill={INK} script>
          {t(
            "CBSE — the area of a glass sheet",
            "CBSE — kaanch ki sheet ka area"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 120 130 h 360 v 200 h -360 z M 140 150 l 60 -14 M 130 175 l 105 -35"
        stroke={INK}
        sw={2.4}
        dur={1.4}
      />

      {/* beat 1 — the two measurements */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={300} y={356} size={20} fill={GREEN} weight={700}>2.165 m</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={300} y={384} size={13} fill={GREEN} script>
          {t("someone took real care — 4 sf", "kisi ne sach mein mehnat ki — 4 sf")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={496} y={236} size={20} fill={RED} weight={700} anchor="start">1.2 m</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={496} y={268} size={13} fill={RED} script anchor="start">
          {t("only 2 sf", "sirf 2 sf")}
        </T>
      </Fade>

      {/* beat 2 — step 1 */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={580} y={150} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "step 1 — count each separately, before the calculator",
            "step 1 — pehle har ek alag gino, calculator baad mein"
          )}
        </T>
      </Fade>

      {/* beat 3 — the counts */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={580} y={190} size={18} fill={GREEN} weight={600} anchor="start">2.165 m → 4 sf</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={580} y={225} size={18} fill={RED} weight={600} anchor="start">1.2 m → 2 sf</T>
      </Fade>

      {/* beat 4 — which rule */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={580} y={272} size={15} fill={INK} script anchor="start">
          {t("area = l × b → a multiplication", "area = l × b → yeh guna hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={580} y={300} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "so count SIG FIGS — not decimal places",
            "to SIG FIGS gino — decimal places nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the calculator's temptation */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={580} y={345} size={20} fill={INK} weight={700} anchor="start">
          {t("calculator: 2.598 m²", "calculator: 2.598 m²")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={580} y={375} size={13} fill={MUTED} script anchor="start">
          {t(
            "four digits, looking authoritative",
            "chaar digits, raubdaar dikhte hue"
          )}
        </T>
      </Fade>

      {/* beat 6 — the honest answer */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={580} y={420} size={26} fill={GREEN} weight={700} anchor="start">→ 2.6 m²</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={730} y={420} size={14} fill={AMBER_DARK} script anchor="start">
          {t("least = 2 sf — full stop", "sabse kam = 2 sf — bas")}
        </T>
      </Fade>

      {/* beat 7 — the chain */}
      <Draw on={beat >= 7} delay={dl(7, 2)} d={ringD(240, 490, 34, 14)} stroke={INK_LIGHT} sw={2.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 2.6)} d={ringD(310, 490, 34, 14)} stroke={INK_LIGHT} sw={2.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 3.2)} d={ringD(380, 490, 34, 14)} stroke={RED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 3.8)} d={ringD(450, 490, 34, 14)} stroke={INK_LIGHT} sw={2.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 4.4)} d={ringD(520, 490, 34, 14)} stroke={INK_LIGHT} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={380} y={548} size={15} fill={RED} script>
          {t(
            "the chain = its weakest link",
            "zanjeer = uski sabse kamzor kadi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={380} y={576} size={13} fill={MUTED} script>
          {t(
            "one sloppy measurement caps everything downstream",
            "ek dheela measurement aage sab par dhakkan laga deta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
