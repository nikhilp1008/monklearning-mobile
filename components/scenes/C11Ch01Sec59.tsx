/**
 * C11 Ch01 · Section 59 — "Chapter cheat sheet" (FINAL section of the chapter)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: cheat_sheet.)
 *
 * Beats (en [0,9.56,34.39,58.71,83.54,108.38,133.21,158.04,182.88,197.38]):
 *  0 anchor: the whole chapter on one page, night before the exam
 *  1 the spine: matter → measurement → laws → mole → formulas → stoich/conc
 *  2 Part 1 (a): pure substance/mixture; the physical-vs-chemical test
 *  3 Part 1 (b): quantity=num×unit, SI/volume cubing; Kelvin; mass vs weight
 *  4 Part 2 (a): zero-counting rules; add-decimals/multiply-sigfigs/round
 *  5 Part 2 (b): the 5 laws — conservation → combining volumes/diatomic
 *  6 Part 3: moles first, molecules≠atoms, avg atomic mass; formulas
 *  7 Part 4: balance→mole→ratio→back/LR; concentration denominator=identity
 *  8 the master trap list: 18 mistakes, read once on exam morning
 *  9 the three habits to carry through everything (boxed, green)
 *
 * Layout plan (dense but generously spaced; all well within safe area):
 *  title y58 · b0 y86 · b1 y106 · PART1 hdr y128 · b2 y148/168 · b3 y188/208
 *  PART2 hdr y230 · b4 y250/270 · b5 y290/310 · PART3 hdr y332 · b6 y352/372
 *  PART4 hdr y394 · b7 y414/434 · b8 y458 · habits hdr y480 ·
 *  box y492..568 · l1 y512 · l2 y534 · l3 y556
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={17} fill={RED} script>
          {t("chapter cheat sheet", "chapter cheat sheet")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={12} fill={INK} script>
          {t(
            "the whole chapter compressed onto one page — for the night before the exam",
            "poora chapter ek page par — exam se ek raat pehle ke liye"
          )}
        </T>
      </Fade>

      {/* beat 1 — the spine */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={106} size={12} fill={INK} weight={700} script={false}>
          {t(
            "the spine: matter → measurement → 5 laws → the mole → formulas → stoichiometry/concentration",
            "spine: matter → measurement → 5 laws → mole → formulas → stoichiometry/concentration"
          )}
        </T>
      </Fade>

      {/* PART 1 header */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={128} size={12} fill={RED} weight={700} script={false}>
          PART 1 — MATTER &amp; MEASUREMENT
        </T>
      </Fade>
      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={148} size={11} fill={INK} script={false}>
          pure substance = fixed composition (element/compound) · mixture = variable (homo/hetero)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={540} y={168} size={11} fill={INK} script={false}>
          {t(
            "the only test for change: did a NEW substance form? (dissolving=physical, rusting=chemical)",
            "change ka ek hi test: kya NAYI substance bani? (ghulna=physical, jang lagna=chemical)"
          )}
        </T>
      </Fade>
      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={188} size={11} fill={INK} script={false}>
          {t(
            "quantity = number × unit, 7 SI base units · cube the linear factor for volume: 1m³=10⁶cm³",
            "quantity = number × unit, 7 SI base units · volume ke liye linear factor cube karo: 1m³=10⁶cm³"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={208} size={11} fill={INK} script={false}>
          {t(
            "Kelvin = °C+273.15, NEVER negative · mass is invariant, weight varies with gravity",
            "Kelvin = °C+273.15, KABHI negative nahi · mass invariant, weight gravity se badalta"
          )}
        </T>
      </Fade>

      {/* PART 2 header */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={230} size={12} fill={RED} weight={700} script={false}>
          PART 2 — UNCERTAINTY &amp; LAWS
        </T>
      </Fade>
      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={250} size={11} fill={INK} script={false}>
          {t(
            "leading zeros NEVER count · trailing count only with a decimal · exact numbers = infinite",
            "leading zeros KABHI nahi ginte · trailing sirf decimal ke saath · exact numbers = infinite"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={270} size={11} fill={INK} script={false}>
          {t(
            "add by DECIMALS, multiply by SIG FIGS · round half to EVEN · round only ONCE, at the end",
            "add DECIMALS se, multiply SIG FIGS se · half ko EVEN tak round · sirf EK baar, ant mein round"
          )}
        </T>
      </Fade>
      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={290} size={11} fill={INK} script={false}>
          {t(
            "mass conserved (closed system) · definite proportions=fixed recipe · multiple=small whole #s",
            "mass conserved (closed system) · definite proportions=fixed recipe · multiple=chhote whole numbers"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={310} size={11} fill={INK} script={false}>
          {t(
            "reciprocal proportions → bridges a 3rd element · Avogadro (same T,P) → elements are DIATOMIC",
            "reciprocal proportions → 3rd element se pul banata · Avogadro (same T,P) → elements DIATOMIC hain"
          )}
        </T>
      </Fade>

      {/* PART 3 header */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={332} size={12} fill={RED} weight={700} script={false}>
          PART 3 — THE MOLE &amp; FORMULAS
        </T>
      </Fade>
      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={352} size={11} fill={INK} script={false}>
          {t(
            "MOLES first, always · molecules≠atoms (×atomicity) · avg atomic mass=abundance-weighted",
            "MOLES pehle, hamesha · molecules≠atoms (×atomicity) · avg atomic mass=abundance-weighted"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={372} size={11} fill={INK} script={false}>
          {t(
            "formulas: mass→moles BEFORE ratio · empirical=recipe, molecular=batch, molar mass breaks tie",
            "formulas: ratio se PEHLE mass→moles · empirical=recipe, molecular=batch, molar mass tie todta"
          )}
        </T>
      </Fade>

      {/* PART 4 header */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={394} size={12} fill={RED} weight={700} script={false}>
          {t("PART 4 — STOICHIOMETRY & CONCENTRATION", "PART 4 — STOICHIOMETRY & CONCENTRATION")}
        </T>
      </Fade>
      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={414} size={11} fill={INK} script={false}>
          {t(
            "balance→mole→ratio→back · limiting reagent = smallest(mol/coeff) — everything depends on it",
            "balance→mole→ratio→wapas · limiting reagent = smallest(mol/coeff) — sab kuch isi par nirbhar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={434} size={11} fill={INK} script={false}>
          {t(
            "concentration: denominator=identity · volume DRIFTS, mass doesn't · M↔m needs DENSITY",
            "concentration: denominator=identity · volume DRIFTS karta, mass nahi · M↔m ke liye DENSITY chahiye"
          )}
        </T>
      </Fade>

      {/* beat 8 — the master trap list */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={458} size={12} fill={MUTED} script>
          {t(
            "the master trap list: 18 mistakes cost most marks here — read it once, exam morning",
            "master trap list: 18 galtiyaan jo yahaan sabse zyada marks le jaati — exam ki subah ek baar padho"
          )}
        </T>
      </Fade>

      {/* beat 9 — the three habits, boxed */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={540} y={480} size={13} fill={GREEN} weight={700} script={false}>
          {t("IF YOU REMEMBER NOTHING ELSE — THREE HABITS", "kuch aur yaad na rahe to — TEEN AADATEIN")}
        </T>
      </Fade>
      <Draw
        on={beat >= 9}
        delay={dl(9, 0.6)}
        d="M 210 492 h 660 q 16 0 16 16 v 44 q 0 16 -16 16 h -660 q -16 0 -16 -16 v -44 q 0 -16 16 -16"
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 9} delay={dl(9, 1.3)}>
        <T x={540} y={512} size={12} fill={INK} weight={700} script={false}>
          {t("convert to MOLES first — whatever the question gives you", "sawaal kuch bhi de, pehle MOLES mein badlo")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.9)}>
        <T x={540} y={534} size={12} fill={INK} weight={700} script={false}>
          {t(
            "carry UNITS through the whole calculation — a FREE error detector",
            "poori calculation mein UNITS saath rakho — ek FREE error detector"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.5)}>
        <T x={540} y={556} size={12} fill={INK} weight={700} script={false}>
          {t(
            "before answering: name the WEAKEST LINK (least-precise input or limiting reagent)",
            "jawaab se pehle: WEAKEST LINK ka naam lo (least-precise input ya limiting reagent)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
