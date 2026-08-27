/**
 * C11 Ch01 · Section 23 — "Conservation of mass and definite proportions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,4.78,21.85,41.39,58.54,76.98,93.96,112.48]):
 *  0 anchor: the two oldest laws — Lavoisier and Proust
 *  1 conservation of mass (Lavoisier, 1789): mass(reactants) = mass(products)
 *  2 guardrail: closed system only — the candle-in-open-air trap
 *  3 deeper: E=mc², negligible in ordinary chemistry
 *  4 definite proportions (Proust, 1799): same compound, any source
 *  5 callback: this is the compound definition from Subtopic 1
 *  6 exceptions: non-stoichiometric compounds, isotope differences
 *  7 the exam reading skill: which law the data structure signals
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script14 ink)        | T mid | x540  y90
 *  b1 | title (15 bold ink)          | T mid | x540  y120
 *  b1 | formula (17 bold ink)        | T mid | x540  y145
 *  b2 | guardrail (script13 red)     | T mid | x540  y180
 *  b2 | note (script13 red)          | T mid | x540  y203
 *  b3 | deeper (script12 muted)      | T mid | x540  y230
 *  b4 | title (15 bold ink)          | T mid | x540  y260
 *  b4 | example (script13 ink)       | T mid | x540  y285
 *  b5 | callback (script13 green)    | T mid | x540  y312
 *  b6 | exceptions (script12 muted)  | T mid | x540  y340
 *  b7 | l1 (13 bold amber-dark)      | T mid | x540  y372
 *  b7 | l2 (13 bold amber-dark)      | T mid | x540  y396
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("conservation of mass and definite proportions", "conservation of mass aur definite proportions")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={14} fill={INK} script>
          {t("the two oldest laws — Lavoisier and Proust", "sabse purane do laws — Lavoisier aur Proust")}
        </T>
      </Fade>

      {/* beat 1 — conservation of mass */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={15} fill={INK} weight={700} script={false}>
          {t("CONSERVATION OF MASS (Lavoisier, 1789)", "CONSERVATION OF MASS (Lavoisier, 1789)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={540} y={145} size={17} fill={INK} weight={700} script={false}>
          mass(reactants) = mass(products)
        </T>
      </Fade>

      {/* beat 2 — guardrail: closed system only */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={180} size={13} fill={RED} script>
          {t(
            "CLOSED SYSTEM only! candle in open air LOOKS lighter — CO₂/H₂O escaped",
            "sirf CLOSED SYSTEM mein! khuli hawa mein candle halka LAGTA — CO₂/H₂O nikal gaya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={540} y={203} size={13} fill={RED} script>
          {t(
            "mass IS conserved — you just stopped weighing some of it",
            "mass conserved HAI — tumne bas kuch tolna band kar diya"
          )}
        </T>
      </Fade>

      {/* beat 3 — deeper: E=mc2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={230} size={12} fill={MUTED} script>
          {t(
            "deeper: E=mc² — mass↔energy interconvert (negligible in ordinary chemistry)",
            "deeper: E=mc² — mass↔energy interconvert (ordinary chemistry mein negligible)"
          )}
        </T>
      </Fade>

      {/* beat 4 — definite proportions */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={260} size={15} fill={INK} weight={700} script={false}>
          {t("DEFINITE PROPORTIONS (Proust, 1799)", "DEFINITE PROPORTIONS (Proust, 1799)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={285} size={13} fill={INK} script>
          {t(
            "same compound, ANY source → SAME mass fraction (Ganga water = lab water)",
            "same compound, KOI BHI source → SAME mass fraction (Ganga paani = lab paani)"
          )}
        </T>
      </Fade>

      {/* beat 5 — callback to subtopic 1 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={312} size={13} fill={GREEN} script>
          {t(
            "this IS the compound definition from Subtopic 1!",
            "yeh HAI Subtopic 1 ki compound definition!"
          )}
        </T>
      </Fade>

      {/* beat 6 — exceptions */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={340} size={12} fill={MUTED} script>
          {t(
            "exceptions: non-stoichiometric compounds · isotope differences (heavy water ≠ ordinary)",
            "exceptions: non-stoichiometric compounds · isotope differences (heavy water ≠ ordinary)"
          )}
        </T>
      </Fade>

      {/* beat 7 — the exam reading skill */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={372} size={13} fill={AMBER_DARK} weight={700} script={false}>
          {t(
            "ONE reaction, masses in/out → CONSERVATION OF MASS",
            "ONE reaction, masses in/out → CONSERVATION OF MASS"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={396} size={13} fill={AMBER_DARK} weight={700} script={false}>
          {t(
            "ONE compound, MULTIPLE sources → DEFINITE PROPORTIONS",
            "ONE compound, MULTIPLE sources → DEFINITE PROPORTIONS"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
