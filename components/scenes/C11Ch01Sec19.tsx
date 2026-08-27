/**
 * C11 Ch01 · Section 19 — "Worked examples: counting and rounding"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,18.69,31.15,42.16,51.97,60.51,75.95,91.14]):
 *  0 Example 1 (CBSE) given: count sig figs in 5 numbers (fully fades at b6)
 *  1 0.00250 → 3 sf (leading ✗, trailing w/ decimal ✓)
 *  2 1.004 → 4 sf (captive zeros ✓)
 *  3 50000 → 1 sf (no decimal point)
 *  4 6.022×10²³ → 4 sf (only coefficient counts)
 *  5 100.0 → 4 sf (decimal point ⇒ trailing zeros count) + comparison
 *  6 Example 2 (NEET) given: round three numbers to 3 sig figs (same slot as b0)
 *  7 all three results + guardrail on the reflexive round-up trap
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script14 ink)         | T mid | x540  y90  [full-fade@b6]
 *  b1-5 | result lines (13 bold ink) | T mid | x540  y120/145/170/195/220
 *  b5 | comparison (script12 muted)  | T mid | x540  y245
 *  b6 | given 2 (script14 ink)       | T mid | x540  y90  (same slot as b0)
 *  b7 | result l1/l2/l3 (13 bold)    | T mid | x540  y130/155/180
 *  b7 | guardrail (script13 red)     | T mid | x540  y210
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} script>
          {t("worked examples: counting and rounding", "worked examples: counting aur rounding")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given (CBSE); fully removed once Example 2 takes over at beat 6 */}
      <Fade on={beat >= 0 && beat < 6} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={14} fill={INK} script>
          {t(
            "Example 1 (CBSE): count sig figs — 0.00250, 1.004, 50000, 6.022×10²³, 100.0",
            "Example 1 (CBSE): sig figs ginno — 0.00250, 1.004, 50000, 6.022×10²³, 100.0"
          )}
        </T>
      </Fade>

      {/* beats 1-5 — the five results */}
      <Fade on={beat >= 1 && beat < 6} delay={dl(1, 0.4)}>
        <T x={540} y={120} size={13} fill={INK} weight={700} script={false}>
          0.00250 → 3 sf (leading zeros ✗, trailing w/ decimal ✓)
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 0.4)}>
        <T x={540} y={145} size={13} fill={INK} weight={700} script={false}>
          1.004 → 4 sf (captive zeros ✓)
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 6} delay={dl(3, 0.4)}>
        <T x={540} y={170} size={13} fill={INK} weight={700} script={false}>
          50000 → 1 sf (no decimal point)
        </T>
      </Fade>
      <Fade on={beat >= 4 && beat < 6} delay={dl(4, 0.4)}>
        <T x={540} y={195} size={13} fill={INK} weight={700} script={false}>
          6.022 × 10²³ → 4 sf (only coefficient counts)
        </T>
      </Fade>
      <Fade on={beat >= 5 && beat < 6} delay={dl(5, 0.4)}>
        <T x={540} y={220} size={13} fill={INK} weight={700} script={false}>
          100.0 → 4 sf (decimal point ⇒ trailing zeros count)
        </T>
      </Fade>
      <Fade on={beat >= 5 && beat < 6} delay={dl(5, 1.4)}>
        <T x={540} y={245} size={12} fill={MUTED} script>
          {t(
            "compare: 50000 (1sf) vs 100.0 (4sf) — the decimal point does all the work!",
            "compare: 50000 (1sf) vs 100.0 (4sf) — decimal point sara kaam karta hai!"
          )}
        </T>
      </Fade>

      {/* beat 6 — Example 2 given (NEET), same slot as beat 0 */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={90} size={14} fill={INK} script>
          {t(
            "Example 2 (NEET): round to 3 sig figs — 2.745, 2.735, 0.023456",
            "Example 2 (NEET): 3 sig figs tak round karo — 2.745, 2.735, 0.023456"
          )}
        </T>
      </Fade>

      {/* beat 7 — all three results + guardrail */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={130} size={13} fill={INK} weight={700} script={false}>
          2.745 → 2.74 (4 even, stays)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={155} size={13} fill={INK} weight={700} script={false}>
          2.735 → 2.74 (3 odd, climbs)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={540} y={180} size={13} fill={INK} weight={700} script={false}>
          0.023456 → 0.0235 (4th digit=4 &lt;5, round down)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={540} y={210} size={13} fill={RED} script>
          {t(
            "reflexive round-up on the first one loses the mark!",
            "pehle wale mein reflexive round-up se mark chala jaata!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
