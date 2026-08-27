/**
 * C11 Ch01 · Section 37 — "Percentage composition and the two formula layers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,15.62,36.01,60.08,75.78,94.3,102.41,127.24]):
 *  0 anchor: kaju katli — % by weight of each ingredient
 *  1 = percentage composition, the chemical nutrition label
 *  2 a recipe has two layers — layer 1: simplest ratio (chai analogy)
 *  3 empirical formula = simplest whole-number ratio; glucose = CH₂O
 *  4 molecular formula = actual count; glucose = C₆H₁₂O₆ = 6×CH₂O
 *  5 the link: a whole-number multiplier n
 *  6 cricket-squad analogy: ratio fixed, squad size unknown
 *  7 n = molar mass / empirical formula mass; callback to definite proportions
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y88
 *  b1 | l (script13 green)           | T mid | x540  y113
 *  b2 | l (script13 ink)             | T mid | x540  y140
 *  b3 | l1 (13 bold ink)             | T mid | x540  y168
 *  b3 | l2 (script12 muted)          | T mid | x540  y193
 *  b4 | l1 (13 bold ink)             | T mid | x540  y220
 *  b4 | l2 (script12 muted)          | T mid | x540  y245
 *  b5 | l (script13 amber-drk)       | T mid | x540  y272
 *  b6 | l1/l2 (script12 ink/muted)   | T mid | x540  y300/325
 *  b7 | l1 (13 bold ink)             | T mid | x540  y355
 *  b7 | l2 (script12 green)          | T mid | x540  y380
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("percentage composition and the two formula layers", "percentage composition aur do formula layers")}
        </T>
      </Fade>

      {/* beat 0 — anchor: kaju katli */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={13} fill={INK} script>
          {t(
            "kaju katli: ~60% cashew, 30% sugar, rest ghee+cardamom (by weight)",
            "kaju katli: ~60% kaju, 30% cheeni, baaki ghee+elaichi (weight se)"
          )}
        </T>
      </Fade>

      {/* beat 1 — percentage composition */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={13} fill={GREEN} script>
          {t("= PERCENTAGE COMPOSITION — the chemical nutrition label", "= PERCENTAGE COMPOSITION — chemical nutrition label")}
        </T>
      </Fade>

      {/* beat 2 — two layers, layer 1: simplest ratio */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={140} size={13} fill={INK} script>
          {t(
            "a recipe has 2 layers — layer 1: simplest ratio (chai: 2 sugar : 1 tea leaves)",
            "recipe ki 2 layers hoti — layer 1: simplest ratio (chai: 2 sugar : 1 tea leaves)"
          )}
        </T>
      </Fade>

      {/* beat 3 — empirical formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={168} size={13} fill={INK} weight={700} script={false}>
          EMPIRICAL FORMULA = simplest whole-number atom ratio
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={540} y={193} size={12} fill={MUTED} script>
          glucose: CH₂O (1 C : 2 H : 1 O)
        </T>
      </Fade>

      {/* beat 4 — molecular formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={220} size={13} fill={INK} weight={700} script={false}>
          {t("MOLECULAR FORMULA = the actual count in one real molecule", "MOLECULAR FORMULA = ek real molecule mein actual count")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={245} size={12} fill={MUTED} script>
          glucose: C₆H₁₂O₆ = 6 × (CH₂O)
        </T>
      </Fade>

      {/* beat 5 — the link */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={272} size={13} fill={AMBER_DARK} script>
          {t("the link: a simple whole-number multiplier n", "link: ek simple whole-number multiplier n")}
        </T>
      </Fade>

      {/* beat 6 — cricket-squad analogy */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={300} size={12} fill={INK} script>
          {t(
            "cricket academy: batsmen:bowlers = 2:1 (fixed ratio, empirical) — squad size? unknown!",
            "cricket academy: batsmen:bowlers = 2:1 (fixed ratio, empirical) — squad size? unknown!"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={325} size={12} fill={MUTED} script>
          {t(
            "2:1 could be 2&1, or 8&4, or 16&8 — ratio alone doesn't say",
            "2:1 ho sakta 2&1, ya 8&4, ya 16&8 — sirf ratio nahi batata"
          )}
        </T>
      </Fade>

      {/* beat 7 — n formula + callback */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={355} size={13} fill={INK} weight={700} script={false}>
          n = molar mass / empirical formula mass
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={380} size={12} fill={GREEN} script>
          {t(
            "atoms combining in fixed whole-number ratios = definite proportions, at the ATOMIC scale!",
            "atoms ka fixed whole-number ratios mein combine hona = definite proportions, ATOMIC scale par!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
