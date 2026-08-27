/**
 * C11 Ch01 · Section 24 — "Multiple and reciprocal proportions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,8.11,25.43,47.02,69.81,94.64,119.47,144.31]):
 *  0 anchor: two data-reading laws, most often misapplied
 *  1 multiple proportions (Dalton, 1803): definition
 *  2 procedure step 1: normalize the shared element's mass first
 *  3 procedure step 2: reduce to lowest terms; messy = check normalizing
 *  4 reciprocal proportions (Richter, 1792): definition
 *  5 procedure: build a bridge through the common element C
 *  6 the 5-second skill: count compounds & elements, four-row lookup
 *  7 closing: the #1 mistake — triggers live in the data structure
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script14 ink)        | T mid | x540  y88
 *  b1 | title (14 bold ink)          | T mid | x540  y115
 *  b1 | statement (script13 ink)     | T mid | x540  y140
 *  b2 | step 1 (script13 amber-drk)  | T mid | x540  y165
 *  b3 | step 2 (script12 muted)      | T mid | x540  y188
 *  b4 | title (14 bold ink)          | T mid | x540  y220
 *  b4 | statement (script13 ink)     | T mid | x540  y245
 *  b5 | bridge (script13 amber-drk)  | T mid | x540  y270
 *  b6 | title (14 bold ink)          | T mid | x540  y300
 *  b6 | 4 rows (13 ink)              | T mid | x540  y322/344/366/388
 *  b7 | closing (script13 red)       | T mid | x540  y420
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS = [
  "1 compound, many sources → DEFINITE PROPORTIONS",
  "2 compounds, same 2 elements → MULTIPLE PROPORTIONS",
  "3 elements via 1 common → RECIPROCAL PROPORTIONS",
  "gases + volumes → COMBINING VOLUMES",
];

export default function C11Ch01Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("multiple and reciprocal proportions", "multiple aur reciprocal proportions")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={14} fill={INK} script>
          {t("two data-reading laws — most often misapplied", "do data-reading laws — sabse zyada galat lagaye jaate")}
        </T>
      </Fade>

      {/* beat 1 — multiple proportions definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={115} size={14} fill={INK} weight={700} script={false}>
          MULTIPLE PROPORTIONS (Dalton, 1803)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={540} y={140} size={13} fill={INK} script>
          {t(
            "same 2 elements, 2+ compounds → fix one, other's masses = simple whole-number ratio",
            "same 2 elements, 2+ compounds → ek fix karo, doosre ke masses = simple whole-number ratio"
          )}
        </T>
      </Fade>

      {/* beat 2 — procedure step 1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={165} size={13} fill={AMBER_DARK} script>
          {t(
            "① normalize: make the SHARED element's mass IDENTICAL first",
            "① normalize karo: SHARED element ka mass pehle IDENTICAL karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — procedure step 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={188} size={12} fill={MUTED} script>
          {t(
            "② reduce to lowest terms (1:2, 2:3…) — messy? check the normalizing step",
            "② lowest terms tak reduce karo (1:2, 2:3…) — messy? normalizing step check karo"
          )}
        </T>
      </Fade>

      {/* beat 4 — reciprocal proportions definition */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={220} size={14} fill={INK} weight={700} script={false}>
          RECIPROCAL PROPORTIONS (Richter, 1792)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={245} size={13} fill={INK} script>
          {t(
            "A & B each combine with fixed C → A:B ratio = (or a simple multiple of) their ratios with C",
            "A & B fixed C se combine karte → A:B ratio = (ya simple multiple) unke C ke saath ratios ka"
          )}
        </T>
      </Fade>

      {/* beat 5 — procedure: build a bridge */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={270} size={13} fill={AMBER_DARK} script>
          {t(
            "build a bridge: mass of A + mass of B per fixed C → predicted ratio, check vs A:B direct",
            "ek bridge banao: fixed C ke saath A aur B ka mass → predicted ratio, A:B direct se check karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — the 5-second skill */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={300} size={14} fill={INK} weight={700} script={false}>
          {t("THE 5-SECOND SKILL: count compounds & elements FIRST", "5-SECOND SKILL: pehle compounds aur elements ginno")}
        </T>
      </Fade>
      {ROWS.map((row, i) => (
        <Fade key={row} on={beat >= 6} delay={dl(6, 1 + i * 0.5)}>
          <T x={540} y={[322, 344, 366, 388][i]} size={13} fill={INK} script={false}>
            {row}
          </T>
        </Fade>
      ))}

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={420} size={13} fill={RED} script>
          {t(
            "the #1 mistake: wrong law because nobody paused to count — triggers live in the DATA STRUCTURE",
            "#1 mistake: galat law kyunki kisi ne ginne ke liye ruka nahi — triggers DATA STRUCTURE mein hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
