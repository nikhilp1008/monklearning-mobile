/**
 * M11 Ch13 · Section 42 — "Pitfalls and pro-tips: the reverse-problem traps"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes Subtopic 3 (and the chapter's teaching) with four slips.
 *
 * Beats (board_reveal_at_english [0, 9.05, 26.28, 45.4, 61.1, 77.65, 93.95]):
 *  0 anchor: heading — four slips that quietly cost marks
 *  1 note (red-margin, high emphasis): slip 1 — σ vs C.V. for different-mean series
 *  2 represent: slip 2 — forgetting to repair Σx_i² in correction problems
 *  3 represent: slip 3 — feeding variance instead of SD into C.V.
 *  4 represent: slip 4 — "more consistent" ≠ "better"
 *  5 land (boxed, high emphasis): the two master totals, Σx_i=nx̄, Σx_i²=n(σ²+x̄²)
 *  6 note (red-margin): reverse problems = bookkeeping; two sanity checks
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y52
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y78
 *  b1 | red bar + 2-line note (13)       | Draw+T| x60 y92..128 · text y104/124
 *  b2 | text (13, ink)                   | T mid | x540 y152
 *  b3 | text (13, ink)                   | T mid | x540 y176
 *  b4 | text (13, ink)                   | T mid | x540 y200
 *  b5 | boxed formula (16, green)        | Draw+T| box x220..860 y222..266
 *  b6 | red bar + 2-line note (13)       | Draw+T| x60 y288..326 · text y302/322
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch13Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={18} fill={RED} anchor="middle" script>
          {t("The Reverse-Problem Traps", "Reverse-Problem Traps")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={78} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Four slips that quietly cost marks", "Chaar slips jo chupke se marks kha jaate hain")}
        </T>
      </Fade>

      {/* beat 1 — note (red-margin, high emphasis): slip 1 */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 60 92 L 60 128" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={76} y={104} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "1. Comparing different-mean series by σ instead of C.V. —",
            "1. Alag-mean series ko C.V. ke bajaye σ se compare karna —"
          )}
        </T>
        <T x={76} y={124} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "a larger σ isn't “more variable” if the means differ.",
            "badi σ zyada “variable” nahi banati agar means alag hon."
          )}
        </T>
      </Fade>

      {/* beat 2 — slip 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={152} size={13} fill={INK} anchor="middle" weight={700}>
          {t(
            "2. Forgetting to repair Σx_i² in correction problems — fixing only the mean is the #1 half-mark loss.",
            "2. Correction problems mein Σx_i² repair karna bhoolna — sirf mean fix karna #1 half-mark loss hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — slip 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={176} size={13} fill={INK} anchor="middle" weight={700}>
          {t(
            "3. Feeding VARIANCE into the C.V. formula — C.V. uses the SD; using σ² inflates the answer enormously.",
            "3. Variance ko C.V. formula mein daalna — C.V. SD use karta hai; σ² daalne se answer enormously inflate hota hai."
          )}
        </T>
      </Fade>

      {/* beat 4 — slip 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={200} size={13} fill={INK} anchor="middle" weight={700}>
          {t(
            "4. Reading “more consistent” as “better” — lower C.V. means steadier, not superior.",
            "4. Zyada consistent ko better padhna — kam C.V. matlab steadier, superior nahi."
          )}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): the two master totals */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(220, 222, 640, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={250} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"Σx_i = n·x_bar,   Σx_i² = n(σ²+x_bar²)"}
        </T>
      </Fade>

      {/* beat 6 — note (red-margin): bookkeeping + two sanity checks */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 288 L 60 326" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={302} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "Reverse problems = bookkeeping on these two totals.",
            "Reverse problems in do totals pe bookkeeping hain."
          )}
        </T>
        <T x={76} y={322} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "Sanity: corrected σ² ≥ 0; a unit-carrying “C.V.” means you divided by the wrong thing.",
            "Sanity: corrected σ² ≥ 0; agar “C.V.” mein units hon, toh galat cheez se divide kiya."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
