/**
 * M11 Ch05 · Section 43 — "Quick recall for the whole chapter" (FINAL section)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=cheat_sheet — one line per
 * subtopic (each JSON beat covers ALL of that subtopic's summary, split
 * here into a label + 1-2 sub-lines revealed together under the same
 * beat, mirroring how the chemistry chapter's cheat sheet — C11Ch01Sec59 —
 * grouped multi-sentence beats). The two mnemonic notes are boxed red,
 * matching this chapter's guardrail-chip house style throughout.
 *
 * Beats (en [0,10.67,24.49,37.46,55.98,71.17,86.19,98.9,107.26], hi
 * [0,9.81,22.95,34.73,51.2,66.9,80.81,92.16,101.63]):
 *  0 heading: Linear Inequalities — quick recall
 *  1 text: one variable — range, add/subtract & ×positive safe, ×negative flips
 *  2 note (red-margin, high): mnemonic — "negative flips" / "infinity never hugs"
 *  3 text: two variables — line splits plane, solid/dotted, test point, system=∩
 *  4 text: word problems — word→sign, whole&non-negative, interpret back
 *  5 text: wavy curve — one side=0, positive x-coeffs, anchor+far right, odd/even
 *  6 note (red-margin, high): mnemonic — "odd crosses, even bounces" / "denom=hole"
 *  7 text: modulus — < locks IN, > lets OUT
 *  8 text: quadratic (a>0) — negative between roots, positive outside
 *
 * Layout plan (label + sub-lines per beat, all single-line, safe-width
 * checked; two mnemonic beats boxed red):
 *  b0 | heading (17,ink,w700)        | T mid | bl 100
 *  b1 | label(12,red,w700)+2 lines(13,ink) | T mid | bl 132/154/176
 *  b2 | boxed mnemonic (13,red)      | Chip  | x190..890 y200..234
 *  b3 | label+2 lines                | T mid | bl 264/286/308
 *  b4 | label+2 lines                | T mid | bl 336/358/380
 *  b5 | label+2 lines                | T mid | bl 408/430/452
 *  b6 | boxed mnemonic (13,red)      | Chip  | x220..860 y476..510
 *  b7 | line (13,ink)                | T mid | bl 540
 *  b8 | line (13,ink)                | T mid | bl 566
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch05Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={19} fill={RED} script>
          {t("the night-before-the-exam page", "exam se ek raat pehle wala page")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("Linear Inequalities — quick recall", "Linear Inequalities — jaldi yaad karo")}
        </T>
      </Fade>

      {/* beat 1 — one variable */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={132} size={12} fill={RED} weight={700} script={false}>
          {t("ONE VARIABLE", "EK VARIABLE")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={154} size={13} fill={INK} script={false}>
          {t("One variable: the solution is a range.", "One variable: solution ek range hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={176} size={13} fill={INK} script={false}>
          {t(
            "Add/subtract and multiply-by-positive are safe; multiply-by-negative flips.",
            "Add/subtract aur positive se multiply safe hai; negative se multiply flip karta hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — mnemonic 1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={190} y={200} w={700} h={34} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "'Negative flips, positive sticks.' — 'Infinity never gets a hug (square bracket).'",
            "'Negative flips, positive sticks.' — 'Infinity ko kabhi hug (square bracket) nahi milta.'"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — two variables */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={264} size={12} fill={RED} weight={700} script={false}>
          {t("TWO VARIABLES", "DO VARIABLES")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={286} size={13} fill={INK} script={false}>
          {t(
            "Two variables: a line splits the plane; ≤≥ solid, <> dotted.",
            "Two variables: line plane ko split karti hai; ≤≥ solid, <> dotted."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={540} y={308} size={13} fill={INK} script={false}>
          {t(
            "Test (0,0) unless the line runs through it; system ⇒ intersection.",
            "Test (0,0), jab tak line usse na guzre; system ⇒ intersection."
          )}
        </T>
      </Fade>

      {/* beat 4 — word problems */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={336} size={12} fill={RED} weight={700} script={false}>
          {t("WORD PROBLEMS", "WORD PROBLEMS")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={358} size={13} fill={INK} script={false}>
          {t(
            "Word problems: read the word, then write the sign; counts are whole & non-negative.",
            "Word problems: word padho, phir sign likho; counts whole aur non-negative hote hain."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={380} size={13} fill={INK} script={false}>
          {t("Interpret back — don't stop at 'x≥10'.", "Wapas interpret karo — 'x≥10' pe mat ruko.")}
        </T>
      </Fade>

      {/* beat 5 — wavy curve */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={408} size={12} fill={RED} weight={700} script={false}>
          {t("WAVY CURVE", "WAVY CURVE")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={430} size={13} fill={INK} script={false}>
          {t(
            "Wavy curve: one side = 0, factor with positive x-coefficients.",
            "Wavy curve: ek side = 0, positive x-coefficients se factor karo."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={540} y={452} size={13} fill={INK} script={false}>
          {t("Anchor + on far right; odd cross / even bounce.", "Far right par + anchor karo; odd cross / even bounce.")}
        </T>
      </Fade>

      {/* beat 6 — mnemonic 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={220} y={476} w={640} h={34} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "'Odd crosses, even bounces.' — 'Denominators get a hole, never a dot.'",
            "'Odd crosses, even bounces.' — 'Denominators ko hole milta hai, dot kabhi nahi.'"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — modulus */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={540} size={13} fill={INK} script={false}>
          {t(
            "Modulus: less-than locks you IN (one interval); greater-than lets you OUT (two intervals).",
            "Modulus: less-than tumhe IN lock karta hai (one interval); greater-than OUT nikalta hai (two intervals)."
          )}
        </T>
      </Fade>

      {/* beat 8 — quadratic */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={566} size={13} fill={INK} script={false}>
          {t(
            "Quadratic (a>0): negative between the roots, positive outside; no real roots ⇒ always positive.",
            "Quadratic (a>0): roots ke beech negative, bahar positive; real roots na ho ⇒ hamesha positive."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
