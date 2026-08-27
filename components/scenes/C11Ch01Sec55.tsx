/**
 * C11 Ch01 · Section 55 — "Worked examples: molarity and temperature terms"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,16.3,24.58,40.71,53,75.78,94.3]):
 *  0 Example 1 (CBSE) given: 5.85g NaCl → 500mL solution — molarity?
 *  1 moles = 5.85/58.5 = 0.100 mol
 *  2 500mL=0.500L → M = 0.100/0.500 = 0.200 mol/L
 *  (example 1 fully fades at beat 3, freeing the board for example 2)
 *  3 Example 2 (NEET speed trap) given: which term is temp-independent?
 *  4 M,N,F volume-based → temp-dependent; only molality mass-based → answer
 *  5 note: mole fraction & mass% would also qualify — bigger family
 *  6 whisper: the trap is phonetic — scan the denominator, never the name
 *
 * Layout plan:
 *  b0 | given (script12 ink)         | T mid | x540  y88  [fade@b3]
 *  b1 | l (13 bold ink)              | T mid | x540  y113 [fade@b3]
 *  b2 | l (13 bold green)            | T mid | x540  y138 [fade@b3]
 *  b3 | given2 (script12 ink)        | T mid | x540  y88  (same slot)
 *  b4 | l1 (13 bold ink)/l2(green)   | T mid | x540  y113/138
 *  b5 | l (script12 amber-drk)       | T mid | x540  y163
 *  b6 | l1 (script12 red)/l2(green)  | T mid | x540  y188/210
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={18} fill={RED} script>
          {t("worked examples: molarity and temperature terms", "worked examples: molarity aur temperature terms")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given (CBSE); fully fades at beat 3 */}
      <Fade on={beat >= 0 && beat < 3} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 1 (CBSE): 5.85g NaCl in water → 500mL solution (NaCl=58.5g/mol). Molarity?",
            "Example 1 (CBSE): 5.85g NaCl paani mein → 500mL solution (NaCl=58.5g/mol). Molarity?"
          )}
        </T>
      </Fade>

      {/* beat 1 — moles */}
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={13} fill={INK} weight={700} script={false}>
          moles = 5.85/58.5 = 0.100 mol
        </T>
      </Fade>

      {/* beat 2 — molarity answer */}
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 0.4)}>
        <T x={540} y={138} size={13} fill={GREEN} weight={700} script={false}>
          500mL = 0.500L → M = 0.100/0.500 = 0.200 mol/L
        </T>
      </Fade>

      {/* beat 3 — Example 2 given (NEET speed trap), same slot as beat 0 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 2 (NEET speed trap): which term is temp-independent — molarity, molality, normality, or formality?",
            "Example 2 (NEET speed trap): kaunsi term temp-independent hai — molarity, molality, normality, ya formality?"
          )}
        </T>
      </Fade>

      {/* beat 4 — apply the rule */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={113} size={13} fill={INK} weight={700} script={false}>
          {t(
            "M, N, F all = per L(solution) → volume-based → temp-DEPENDENT",
            "M, N, F sab = per L(solution) → volume-based → temp-DEPENDENT"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={138} size={13} fill={GREEN} weight={700} script={false}>
          {t(
            "only MOLALITY = per kg(solvent) → mass-based → answer: MOLALITY",
            "sirf MOLALITY = per kg(solvent) → mass-based → jawaab: MOLALITY"
          )}
        </T>
      </Fade>

      {/* beat 5 — the bigger family */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={163} size={12} fill={AMBER_DARK} script>
          {t(
            "mole fraction & mass% would ALSO qualify — the temp-independent family is bigger than this option",
            "mole fraction aur mass% bhi qualify karte — temp-independent family is option se badi hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the whisper: phonetic trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={188} size={12} fill={RED} script>
          {t(
            "the trap is PHONETIC, not conceptual — molarity/molality look like twins",
            "trap PHONETIC hai, conceptual nahi — molarity/molality judwaan lagte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={210} size={12} fill={GREEN} script>
          {t("scan the DENOMINATOR, never the name", "DENOMINATOR dekho, naam kabhi nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
