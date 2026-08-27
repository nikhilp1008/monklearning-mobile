/**
 * C11 Ch06 · Section 58 — "Salt hydrolysis: the solution takes the side of the stronger parent"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 5.3, 11.9, 20.6, 28.6, 40.4, 50.8]):
 *  0 title + underline
 *  1 note: a salt = child of an acid parent + a base parent
 *  2 rule: weak-parent conjugate ion reacts with water, tips pH
 *  3 the one-liner, ringed: solution takes the side of the STRONGER parent
 *  4 row1: weak HOAc + strong NaOH → NaOAc → BASIC
 *  5 row2: strong HCl + weak NH3 → NH4Cl → ACIDIC
 *  6 row3: strong HCl + strong NaOH → NaCl → NEUTRAL (draw)
 *
 * Layout plan (centered stack, two-column rows; longer language counts):
 *  b1 | note (15, ink)              | T mid  | y99..117 (bl 110)
 *  b2 | rule (14, muted)            | T mid  | y134..150 (bl 145)
 *  b3 | one-liner ringed (20,amber) | T mid  | x266..814 y169..191 (bl 185)
 *  b4 | row1 left(ink)/right(grn)   | T      | x300..622 y224..240 (bl 235)
 *  b5 | row2 left(ink)/right(red)   | T      | x315..637 y259..275 (bl 270)
 *  b6 | row3 left(ink)/right(ink)   | T      | x292..690 y294..310 (bl 305)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("salt hydrolysis: the stronger parent wins", "salt hydrolysis: strong parent jeetta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — the family idea */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={110} size={15} fill={INK} anchor="middle">
          {t(
            "a salt = child of an acid parent + a base parent",
            "salt = ek acid parent + ek base parent ka bachcha"
          )}
        </T>
      </Fade>

      {/* beat 2 — the rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={145} size={14} fill={MUTED} anchor="middle">
          {t(
            "if the ion = conjugate of a WEAK parent → reacts with water, tips pH",
            "agar ion = WEAK parent ka conjugate → paani se react, pH tip"
          )}
        </T>
      </Fade>

      {/* beat 3 — the one-liner */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={185} size={20} fill={AMBER_DARK} weight={800} anchor="middle">
          {t(
            "the solution takes the side of the STRONGER parent",
            "solution STRONGER parent ka side leta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.1)}
        d={ringD(540, 180, 274, 22)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 4 — sodium acetate: basic */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={480} y={235} size={15} fill={INK} anchor="end">
          {t("weak HOAc + strong NaOH", "weak HOAc + strong NaOH")}
        </T>
        <T x={510} y={235} size={15} fill={GREEN} anchor="start">
          {t("→ NaOAc → BASIC", "→ NaOAc → BASIC")}
        </T>
      </Fade>

      {/* beat 5 — ammonium chloride: acidic */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={480} y={270} size={15} fill={INK} anchor="end">
          {t("strong HCl + weak NH₃", "strong HCl + weak NH₃")}
        </T>
        <T x={510} y={270} size={15} fill={RED} anchor="start">
          {t("→ NH₄Cl → ACIDIC", "→ NH₄Cl → ACIDIC")}
        </T>
      </Fade>

      {/* beat 6 — sodium chloride: neutral */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={480} y={305} size={15} fill={INK} anchor="end">
          {t("strong HCl + strong NaOH", "strong HCl + strong NaOH")}
        </T>
        <T x={510} y={305} size={15} fill={INK} anchor="start">
          {t("→ NaCl → NEUTRAL (draw)", "→ NaCl → NEUTRAL (draw)")}
        </T>
      </Fade>
    </Scene>
  );
}
