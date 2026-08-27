/**
 * P12Ch05 · Section 35 — "Derivation: the bridge between susceptibility and permeability"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: DRIFT.
 *
 * WHAT THE BOARD USED TO TEACH: the Curie temperature and the ferro→para phase
 * transition — T_c values for iron and nickel, the Curie–Weiss law, and how χ
 * depends on temperature for para vs dia. That is section 34's ground, not this
 * section's.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: a three-line board derivation of
 * μ_r = 1 + χ. Write B two independent ways — B = μ₀(H + M) with M = χH for a
 * linear material, and B = μH = μ₀μ_r H — then set them equal; μ₀ and H cancel.
 * It closes by showing that this one relation makes the χ classification and
 * the μ_r classification agree automatically.
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 14.0, 28.4, 45.5, 59.4, 72.4,
 * 92.5, 107.4):
 *   0  "a short board derivation, three lines"   title + subtitle
 *   1  "write B two ways, then set them equal"   method banner + both route frames
 *   2  "B = mu nought (H + M)"                   route A, line 1
 *   3  "linear material — substitute M = chi H"  route A, line 2
 *   4  "factoring out H leaves mu0 H (1 + chi)"  route A, result
 *   5  "B is also mu H = mu0 mu_r H"             route B, the second expression
 *   6  "mu0 cancels, H cancels"                  the equate panel + cancellations
 *   7  "negative chi drags mu_r below one …"     the μ_r classification axis
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, crossD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Deriving  μ_r = 1 + χ", "Derivation:  μ_r = 1 + χ")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.3)}
        d="M 388 58 C 470 54, 610 62, 692 56" stroke={RED} sw={2.2} dur={0.55} />
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={540} y={76} size={13} fill={MUTED} script>
          {t("why classifying by χ and classifying by μ_r always agree",
             "χ se aur μ_r se classify karna hamesha ek jaisa kyun nikalta hai")}
        </T>
      </Fade>

      {/* ── beat 1 — the method, and the two empty routes ───────────── */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={102} size={14} fill={INK} weight={800}>
          {t("WRITE THE SAME FIELD B TWO DIFFERENT WAYS — THEN SET THEM EQUAL",
             "EK HI FIELD B KO DO TAREEKON SE LIKHO — PHIR BARABAR KAR DO")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 0.6)} dur={0.8}
        d="M 56 118 H 512 V 292 H 56 Z" stroke={GREEN_DARK} sw={1.8} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} dur={0.8}
        d="M 568 118 H 1024 V 292 H 568 Z" stroke={AMBER_DARK} sw={1.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={78} y={144} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("ROUTE A — FROM THE MATERIAL", "ROUTE A — MATERIAL SE")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={590} y={144} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          {t("ROUTE B — FROM PERMEABILITY", "ROUTE B — PERMEABILITY SE")}
        </T>
      </Fade>

      {/* ── beat 2 — route A, line 1 ────────────────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={78} y={182} size={19} fill={INK} weight={900} anchor="start">B  =  μ₀ ( H + M )</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={78} y={206} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the applied part, plus the material's own contribution",
             "jo lagaya, plus material ka apna yogdan")}
        </T>
      </Fade>

      {/* ── beat 3 — route A, line 2 ────────────────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={78} y={240} size={17} fill={GREEN_DARK} weight={900} anchor="start">
          {t("linear material (dia / para):   M = χ H",
             "linear material (dia / para):   M = χ H")}
        </T>
      </Fade>

      {/* ── beat 4 — route A, result ────────────────────────────────── */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={78} y={274} size={17} fill={INK} weight={900} anchor="start">
          B = μ₀(H + χH) = μ₀ H (1 + χ)
        </T>
      </Fade>

      {/* ── beat 5 — route B ────────────────────────────────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={590} y={186} size={19} fill={INK} weight={900} anchor="start">B  =  μ H</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={590} y={228} size={17} fill={AMBER_DARK} weight={900} anchor="start">μ  =  μ₀ μ_r</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={590} y={272} size={17} fill={INK} weight={900} anchor="start">B  =  μ₀ μ_r H</T>
      </Fade>

      {/* ── beat 6 — converge, cancel, land ─────────────────────────── */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} dur={0.5} d={arrowD(284, 296, 448, 336)} stroke={GREEN_DARK} sw={2.2} />
      <Draw on={beat >= 6} delay={dl(6, 0.3)} dur={0.5} d={arrowD(796, 296, 632, 336)} stroke={AMBER_DARK} sw={2.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Rect x={300} y={342} width={480} height={142} rx={12} fill={CREAM} stroke={RED} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={540} y={368} size={13} fill={RED} weight={800}>
          {t("SAME FIELD, SAME MATERIAL ⇒ EQUATE", "EK HI FIELD, EK HI MATERIAL ⇒ BARABAR")}
        </T>
      </Fade>

      {/* the equation, laid out in pieces so the cancellations land on it */}
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={418} y={404} size={17} fill={INK} weight={900} anchor="start">μ₀</T>
        <T x={450} y={404} size={17} fill={INK} weight={900} anchor="start">μ_r</T>
        <T x={484} y={404} size={17} fill={INK} weight={900} anchor="start">H</T>
        <T x={510} y={404} size={17} fill={INK} weight={900} anchor="start">=</T>
        <T x={544} y={404} size={17} fill={INK} weight={900} anchor="start">μ₀</T>
        <T x={578} y={404} size={17} fill={INK} weight={900} anchor="start">(1 + χ)</T>
        <T x={650} y={404} size={17} fill={INK} weight={900} anchor="start">H</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.9)} dur={0.3} d={crossD(418, 390, 24, 16)} stroke={RED} sw={2} />
      <Draw on={beat >= 6} delay={dl(6, 2.0)} dur={0.3} d={crossD(544, 390, 24, 16)} stroke={RED} sw={2} />
      <Draw on={beat >= 6} delay={dl(6, 2.2)} dur={0.3} d={crossD(484, 390, 13, 16)} stroke={RED} sw={2} />
      <Draw on={beat >= 6} delay={dl(6, 2.3)} dur={0.3} d={crossD(650, 390, 13, 16)} stroke={RED} sw={2} />

      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <T x={540} y={462} size={23} fill={GREEN_DARK} weight={900}>μ_r  =  1 + χ</T>
      </Fade>

      {/* ── beat 7 — one relation, three families ───────────────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} dur={0.8} d={arrowD(120, 540, 1000, 540)} stroke={INK} sw={2} />
      <Draw on={beat >= 7} delay={dl(7, 0.6)} dur={0.3} d="M 460 522 L 460 558" stroke={INK} sw={2.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={460} y={494} size={12.5} fill={INK} weight={800}>μ_r = 1</T>
        <T x={1000} y={562} size={12.5} fill={INK_LIGHT} weight={700} anchor="end">μ_r</T>
      </Fade>

      <Draw on={beat >= 7} delay={dl(7, 1.0)} dur={0.3} d="M 260 528 L 260 552" stroke={AMBER_DARK} sw={2.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={260} y={512} size={12.5} fill={AMBER_DARK} weight={800}>χ &lt; 0</T>
        <T x={260} y={572} size={12.5} fill={AMBER_DARK} weight={800}>μ_r &lt; 1</T>
        <T x={260} y={592} size={12.5} fill={AMBER_DARK} weight={800}>DIAMAGNET</T>
      </Fade>

      <Draw on={beat >= 7} delay={dl(7, 1.5)} dur={0.3} d="M 512 528 L 512 552" stroke={GREEN_DARK} sw={2.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={540} y={512} size={12.5} fill={GREEN_DARK} weight={800}>{t("χ small +", "χ chhota +")}</T>
        <T x={540} y={572} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("μ_r just above 1", "μ_r 1 se thoda upar")}
        </T>
        <T x={540} y={592} size={12.5} fill={GREEN_DARK} weight={800}>PARAMAGNET</T>
      </Fade>

      <Draw on={beat >= 7} delay={dl(7, 2.0)} dur={0.3} d="M 850 528 L 850 552" stroke={RED} sw={2.4} />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={850} y={512} size={12.5} fill={RED} weight={800}>{t("χ huge", "χ bahut bada")}</T>
        <T x={850} y={572} size={12.5} fill={RED} weight={800}>μ_r ≫ 1</T>
        <T x={850} y={592} size={12.5} fill={RED} weight={800}>FERROMAGNET</T>
      </Fade>
    </Scene>
  );
}
