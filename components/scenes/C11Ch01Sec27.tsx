/**
 * C11 Ch01 · Section 27 — "Worked examples: identifying the law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,19.29,37.38,50.86,71.26,89.78,101.55]):
 *  0 Example 1 (CBSE) given: sealed container, 5.6g Fe + 3.2g S → FeS
 *  1 "sealed container" = closed system → mass = sum = 8.8 g
 *  2 = conservation of mass; the marks were for recognising the law
 *  (example 1 fully fades at beat 3, freeing the board for example 2)
 *  3 Example 2 (NEET) given: S forms 2 oxides, A(16+16) B(16+24)
 *  4 same 2 elements, 2 compounds → multiple proportions; S already fixed
 *  5 16:24 = 2:3 → multiple proportions confirmed
 *  6 guardrail: two traps (adding masses; hunting an already-fixed element)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script13 ink)         | T mid | x540  y90  [fade@b3]
 *  b1 | working (13 bold ink)        | T mid | x540  y122 [fade@b3]
 *  b2 | answer (13 bold green)       | T mid | x540  y152 [fade@b3]
 *  b2 | note (script12 muted)        | T mid | x540  y175 [fade@b3]
 *  b3 | given 2 (script13 ink)       | T mid | x540  y90  (same slot)
 *  b4 | l1 (13 bold ink)             | T mid | x540  y125
 *  b4 | l2 (script12 muted)          | T mid | x540  y150
 *  b5 | answer (13 bold green)       | T mid | x540  y180
 *  b6 | trap 1/2 (script12 red)      | T mid | x540  y212/236
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("worked examples: identifying the law", "worked examples: law pehchanna")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given (CBSE); fully fades at beat 3 */}
      <Fade on={beat >= 0 && beat < 3} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={13} fill={INK} script>
          {t(
            "Example 1 (CBSE): sealed container, 5.6 g Fe + 3.2 g S → FeS. Mass? Which law?",
            "Example 1 (CBSE): sealed container, 5.6 g Fe + 3.2 g S → FeS. Mass? Kaunsa law?"
          )}
        </T>
      </Fade>

      {/* beat 1 — closed system, mass = sum */}
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 0.4)}>
        <T x={540} y={122} size={13} fill={INK} weight={700} script={false}>
          "sealed container" = closed system → mass = 5.6+3.2 = 8.8 g
        </T>
      </Fade>

      {/* beat 2 — conservation of mass, the insight */}
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 0.4)}>
        <T x={540} y={152} size={13} fill={GREEN} weight={700} script={false}>
          = CONSERVATION OF MASS
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 1.2)}>
        <T x={540} y={175} size={12} fill={MUTED} script>
          {t(
            "little arithmetic — the marks were for recognising the law",
            "thoda arithmetic — marks law pehchanne ke liye the"
          )}
        </T>
      </Fade>

      {/* beat 3 — Example 2 given (NEET), same slot as beat 0 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={90} size={13} fill={INK} script>
          {t(
            "Example 2 (NEET): S forms 2 oxides — A (16g S+16g O), B (16g S+24g O). Which law?",
            "Example 2 (NEET): S ke 2 oxides — A (16g S+16g O), B (16g S+24g O). Kaunsa law?"
          )}
        </T>
      </Fade>

      {/* beat 4 — same 2 elements, 2 compounds */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={125} size={13} fill={INK} weight={700} script={false}>
          {t("same 2 elements, 2 compounds → MULTIPLE PROPORTIONS", "same 2 elements, 2 compounds → MULTIPLE PROPORTIONS")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={150} size={12} fill={MUTED} script>
          {t(
            "S already fixed at 16g — skip normalizing, go straight to the O ratio",
            "S pehle se 16g par fixed — normalizing skip karo, seedhe O ratio par jao"
          )}
        </T>
      </Fade>

      {/* beat 5 — the ratio confirms it */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={180} size={13} fill={GREEN} weight={700} script={false}>
          16:24 = 2:3 → MULTIPLE PROPORTIONS ✓
        </T>
      </Fade>

      {/* beat 6 — guardrail: two traps */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={212} size={12} fill={RED} script>
          {t(
            "trap 1: adding masses & comparing totals tells you NOTHING",
            "trap 1: masses jodkar totals compare karna KUCH nahi batata"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={236} size={12} fill={RED} script>
          {t(
            "trap 2: hunting for a common element that's ALREADY equalized",
            "trap 2: common element dhoondna jo PEHLE SE equal hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
