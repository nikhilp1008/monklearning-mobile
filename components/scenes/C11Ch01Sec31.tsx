/**
 * C11 Ch01 · Section 31 — "The carbon-12 standard and average atomic mass"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,5.55,19.12,40.11,59.14,73.05,96.43,114.95,134.32]):
 *  0 anchor: two ideas grow from the bridge
 *  1 why not grams: numbers would be absurd — measure relative instead
 *  2 the definition, boxed: 1 amu = (1/12) mass(¹²C) = 1/Nₐ gram
 *  3 not a coincidence — Nₐ was chosen to make this true
 *  4 why is chlorine 35.5, not a whole number?
 *  5 Cl-35:Cl-37 ≈ 3:1 → weighted average (batting-average analogy)
 *  6 periodic table mass = isotopic average; rare isotope barely shifts it
 *  7 limiting condition: assumes natural abundance; enrichment changes it
 *  8 guardrail: never treat it as a single-atom mass
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script14 ink)        | T mid | x540  y88
 *  b1 | l1 (script13 ink)            | T mid | x540  y113
 *  b2 | box (dashed amber, w440h35)  | Draw  | x320..760 y140..175
 *  b2 | formula inside (15 bold ink) | T mid | x540  y163
 *  b3 | insight (script13 green)     | T mid | x540  y200
 *  b4 | l2 (script13 ink)            | T mid | x540  y228
 *  b5 | l3 (script13 amber-drk)      | T mid | x540  y253
 *  b6 | l4 (script12 muted)          | T mid | x540  y278
 *  b7 | l5 (script12 muted)          | T mid | x540  y303
 *  b8 | guardrail (script13 red)     | T mid | x540  y330
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("the carbon-12 standard and average atomic mass", "carbon-12 standard aur average atomic mass")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={14} fill={INK} script>
          {t("two ideas grow from that bridge — both heavily examined", "us bridge se do ideas nikalte hain — dono khoob poochhe jaate")}
        </T>
      </Fade>

      {/* beat 1 — why not grams */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={13} fill={INK} script>
          {t(
            "not grams (~10⁻²³, absurd) — measure RELATIVE to a reference instead",
            "grams nahi (~10⁻²³, absurd) — ek reference ke RELATIVE napte hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — the definition, boxed */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.3)}
        d="M 336 140 h 408 q 16 0 16 16 v 3 q 0 16 -16 16 h -408 q -16 0 -16 -16 v -3 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={540} y={163} size={15} fill={INK} weight={700} script={false}>
          1 amu = (1/12) mass(¹²C atom) = 1/Nₐ gram
        </T>
      </Fade>

      {/* beat 3 — not a coincidence */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={200} size={13} fill={GREEN} script>
          {t("NOT a coincidence — Nₐ was CHOSEN to make this true", "coincidence NAHI — Nₐ isi ko sach karne ke liye CHOSEN tha")}
        </T>
      </Fade>

      {/* beat 4 — why is chlorine 35.5 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={228} size={13} fill={INK} script>
          {t(
            "why is Cl = 35.5, not a whole number? No Cl atom weighs 35.5 u!",
            "Cl = 35.5 kyun hai, whole number nahi? Koi Cl atom 35.5 u ka nahi hota!"
          )}
        </T>
      </Fade>

      {/* beat 5 — weighted average */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={253} size={13} fill={AMBER_DARK} script>
          Cl-35 : Cl-37 ≈ 3:1 → {t("35.5 = WEIGHTED AVERAGE (like a batting average)", "35.5 = WEIGHTED AVERAGE (batting average jaisa)")}
        </T>
      </Fade>

      {/* beat 6 — periodic table mass = isotopic average */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={278} size={12} fill={MUTED} script>
          {t(
            "periodic table mass = isotopic average — a rare heavy isotope barely shifts it",
            "periodic table ka mass = isotopic average — rare heavy isotope mushkil se hilata hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — limiting condition */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={303} size={12} fill={MUTED} script>
          {t(
            "assumes NATURAL abundance — enriched samples have a DIFFERENT effective mass",
            "NATURAL abundance maanta hai — enriched samples ka effective mass ALAG hota hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — guardrail */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={330} size={13} fill={RED} script>
          {t(
            "NEVER treat it as a single-atom mass — it describes a POPULATION, not an individual",
            "isse kabhi single-atom mass mat maano — yeh ek POPULATION batata hai, individual nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
