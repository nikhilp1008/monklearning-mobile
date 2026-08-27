/**
 * C11 Ch01 · Section 18 — "Scientific notation and the calculation rules"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: formulas — a reference sheet.)
 *
 * Beats (en [0,9.13,22.27,40.11,64.94,78.94,94.47,111.2]):
 *  0 anchor: compact rules applied mechanically from here on
 *  1 scientific notation formula, boxed
 *  2 counting rules, one line
 *  3 the two calculation rules (± keeps decimals, ×÷ keeps sig figs)
 *  4 reason for the addition rule (left column)
 *  5 reason for the multiplication rule (right column)
 *  6 guiding principle, boxed: weakest link
 *  7 crisp recap: accuracy vs precision, not synonyms
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script14 ink)        | T mid | x540  y86
 *  b1 | box (dashed amber, w360h35)  | Draw  | x360..720 y105..140
 *  b1 | formula (16 bold ink)        | T mid | x540  y127
 *  b2 | counting line (12 muted)     | T mid | x540  y165
 *  b3 | headers (15 bold ink)        | T mid | cx270/810 y195
 *  b3 | rules (13 ink)               | T mid | cx270/810 y218
 *  b4 | reason left (12 muted)       | T mid | x270  y245
 *  b5 | reason right (12 muted)      | T mid | x810  y245
 *  b6 | box (dashed amber, w520h40)  | Draw  | x280..800 y280..320
 *  b6 | principle (16 bold ink)      | T mid | x540  y303
 *  b6 | sub-line (script13 muted)    | T mid | x540  y340
 *  b7 | accuracy (14 ink)            | T mid | x540  y370
 *  b7 | precision (14 ink)           | T mid | x540  y393
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("scientific notation and the calculation rules", "scientific notation aur calculation rules")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={14} fill={INK} script>
          {t(
            "compact rules — applied mechanically in every numerical from here",
            "compact rules — yahaan se har numerical mein mechanically lagoge"
          )}
        </T>
      </Fade>

      {/* beat 1 — scientific notation, boxed */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 376 105 h 328 q 14 0 14 14 v 7 q 0 14 -14 14 h -328 q -14 0 -14 -14 v -7 q 0 -14 14 -14"
        stroke={AMBER}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={127} size={16} fill={INK} weight={700} script={false}>
          N × 10ⁿ (1 ≤ N &lt; 10, n ∈ ℤ)
        </T>
      </Fade>

      {/* beat 2 — counting rules, one line */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={165} size={12} fill={MUTED} script>
          non-zero ✓ · captive zeros ✓ · leading zeros ✗ · trailing (w/ decimal) ✓ · exact = ∞
        </T>
      </Fade>

      {/* beat 3 — the two calculation rules */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={270} y={195} size={15} fill={INK} weight={700} script={false}>
          + / −
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={810} y={195} size={15} fill={INK} weight={700} script={false}>
          × / ÷
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={270} y={218} size={13} fill={INK} script>
          {t("keep FEWEST decimal places", "FEWEST decimal places rakho")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={810} y={218} size={13} fill={INK} script>
          {t("keep FEWEST sig figs", "FEWEST sig figs rakho")}
        </T>
      </Fade>

      {/* beat 4 — reason for the addition rule */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={270} y={245} size={12} fill={MUTED} script>
          {t(
            "uncertainty positions ADD directly — coarsest decimal dominates",
            "uncertainty positions seedhe ADD hote — sabse mota decimal haavi"
          )}
        </T>
      </Fade>

      {/* beat 5 — reason for the multiplication rule */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={810} y={245} size={12} fill={MUTED} script>
          {t(
            "scales RELATIVE uncertainty — exactly what sig figs capture",
            "RELATIVE uncertainty ko scale karta — sig figs yehi pakadte hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — guiding principle, boxed */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.3)}
        d="M 296 280 h 488 q 16 0 16 16 v 8 q 0 16 -16 16 h -488 q -16 0 -16 -16 v -8 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={303} size={16} fill={INK} weight={700} script={false}>
          {t("a chain is only as strong as its WEAKEST LINK", "chain utni hi strong jitni WEAKEST LINK")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={540} y={340} size={13} fill={MUTED} script>
          {t(
            "least precise measurement limits the WHOLE calculation",
            "sabse kam precise measurement POORI calculation ko limit karta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — crisp recap: accuracy vs precision */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={370} size={14} fill={INK} script>
          {t("ACCURACY = closeness to the TRUE value", "ACCURACY = TRUE value se closeness")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={393} size={14} fill={INK} script>
          {t(
            "PRECISION = closeness of repeats to EACH OTHER — not synonyms!",
            "PRECISION = repeats ki EK DOOSRE se closeness — synonyms nahi!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
