/**
 * C11 Ch07 · Section 24 — "Procedure B: building a galvanic cell, and why E° chooses your titrant"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 4.78, 27.65, 47.7, 68.69, 87.64, 96.6, 107.26, 126.63]):
 *  0 heading: predict / build a galvanic cell (erases at beat5)
 *  1 steps 1-2: list halves as reductions w/ E° · higher=CATHODE, lower=ANODE (sign reverses)
 *  2 steps 3-4: E°cell=E°cathode−E°anode (+ve=spontaneous) · n=total e⁻ in balanced cell rxn
 *  3 step 5: ΔG°=−nFE°cell · logK=nE°cell/0.0591
 *  4 red-margin: activity series — Zn(−0.76V) displaces Cu(+0.34V), never reverse
 *  5 heading: E° explains the titration too (stays)
 *  6 oxidant titrates reductant only if E°cell > 0
 *  7 MnO₄⁻(+1.51V) & Cr₂O₇²⁻(+1.33V) sit above Fe²⁺(+0.77V) → runs to completion
 *  8 red-margin: HCl problem — Cl₂/Cl⁻(+1.36V) below MnO₄⁻, above Cr₂O₇²⁻
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | 2 lines (sans16)         | T mid | x540 bl134/158
 *  b2 | 2 lines (sans16)         | T mid | x540 bl192/216
 *  b3 | formulas (sans16)        | T mid | x540 bl250
 *  b4 | margin bar x64 y270..310, text (sans15 red) x80 bl290
 *  b5 | heading (sans18 700)     | T mid | x540 bl100
 *  b6 | line (sans16)            | T mid | x540 bl140
 *  b7 | 2 lines (sans16)         | T mid | x540 bl180/210
 *  b8 | margin bar x64 y250..320, 2 lines (sans15 red) x80 bl275/305
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("the higher potential always wins the electrons", "zyada potential hamesha electrons jeetta hai")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading (erases at beat 5) ===== */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("predict / build a galvanic cell", "galvanic cell predict / build karo")}
        </T>
      </Fade>

      {/* ===== beat 1 — steps 1-2 (erase at beat 5) ===== */}
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={16} fill={INK}>
          {t("1-2 · list both as REDUCTIONS with E° — higher E° = CATHODE", "1-2 · dono ko REDUCTION maan ke E° likho — zyada E° = CATHODE")}
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 1)}>
        <T x={540} y={158} size={16} fill={INK}>
          {t("lower E° = ANODE (its sign reverses on oxidation)", "kam E° = ANODE (oxidation pe sign reverse hota hai)")}
        </T>
      </Fade>

      {/* ===== beat 2 — steps 3-4 (erase at beat 5) ===== */}
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.3)}>
        <T x={540} y={192} size={16} fill={INK}>
          {t("3-4 · E°cell = E°cathode − E°anode  (positive ⇒ spontaneous)", "3-4 · E°cell = E°cathode − E°anode  (positive ⇒ spontaneous)")}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 1)}>
        <T x={540} y={216} size={16} fill={INK}>
          {t("n = total e⁻ in the BALANCED cell reaction (not per atom!)", "n = BALANCED cell reaction ke total e⁻ (per atom nahi!)")}
        </T>
      </Fade>

      {/* ===== beat 3 — step 5 (erase at beat 5) ===== */}
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.3)}>
        <T x={540} y={250} size={16} fill={INK} weight={700}>
          5 · ΔG° = −nFE°cell   ·   log K = nE°cell / 0.0591
        </T>
      </Fade>

      {/* ===== beat 4 — activity series (erase at beat 5) ===== */}
      <Draw on={beat >= 4 && beat < 5} delay={dl(4, 0.2)} d="M 64 270 L 64 310" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.7)}>
        <T x={80} y={290} size={15} fill={RED} weight={700} anchor="start">
          {t("activity series: Zn (−0.76V) displaces Cu (+0.34V) — never the reverse", "activity series: Zn (−0.76V) Cu (+0.34V) ko displace karta — ulta nahi")}
        </T>
      </Fade>

      {/* ===== beat 5 — E° explains titration (stays) ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("E° explains the titration too", "E° titration ko bhi explain karta hai")}
        </T>
      </Fade>

      {/* ===== beat 6 — condition ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={140} size={16} fill={INK}>
          {t("an oxidant titrates a reductant only if E°cell > 0", "oxidant reductant ko titrate karta hai sirf jab E°cell > 0")}
        </T>
      </Fade>

      {/* ===== beat 7 — workhorse titrants ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={180} size={16} fill={INK} weight={700}>
          MnO₄⁻ (+1.51V)   &amp;   Cr₂O₇²⁻ (+1.33V)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={210} size={15} fill={INK}>
          {t("sit above Fe²⁺ (+0.77V) → titrations run to completion", "Fe²⁺ (+0.77V) se upar → titrations completion tak chalti")}
        </T>
      </Fade>

      {/* ===== beat 8 — HCl problem explained ===== */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 64 250 L 64 320" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.7)}>
        <T x={80} y={275} size={15} fill={RED} weight={700} anchor="start">
          {t("the HCl problem: Cl₂ / Cl⁻ (+1.36V)", "HCl problem: Cl₂ / Cl⁻ (+1.36V)")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={80} y={305} size={15} fill={RED} anchor="start">
          {t("below MnO₄⁻ (oxidises Cl⁻) but above Cr₂O₇²⁻ (tolerates HCl)", "MnO₄⁻ se neeche (Cl⁻ oxidise) par Cr₂O₇²⁻ se upar (HCl tolerate)")}
        </T>
      </Fade>
    </Scene>
  );
}
