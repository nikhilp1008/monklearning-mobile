/**
 * M11 Ch14 · Section 18 — "What the axioms quietly assume"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,7.0,17.75,30.72,42.24,59.39,70.57]):
 *  0 heading
 *  1 stated for FINITE sample spaces
 *  2 Kolmogorov's full theory covers infinite S too — Class 11 stays finite
 *  3 additivity only guaranteed for MUTUALLY EXCLUSIVE events
 *  4 (HIGH) P(E) = n(E)/n(S) is NOT an axiom — special case, equally likely only
 *  5 naive n(E)/n(S) on a loaded die → confident, wrong answer, crossed
 *  6 GUARDRAIL: not equally likely? back to axioms, sum the actual sand
 *
 * Layout plan (single column, centered; longer language counts):
 *  b1 | "1. stated for FINITE.." (16, ink)          | T mid | x290..790 y122..138
 *  b2 | caption (14, muted)                          | T mid | x210..870 y150..164
 *  b3 | "2. additivity only.." (16, ink)              | T mid | x220..860 y182..198
 *  b4 | "3. P(E)=n(E)/n(S) NOT an axiom" (18, red)      | T mid | x270..810 y222..244
 *  b4 | caption (14, red script)                          | T mid | x220..860 y257..271
 *  divider y290
 *  b5 | "naive: P(face) = 1/6" crossed (17, red)            | T mid | x400..680 y324..345
 *  b5 | "actual: sum the sand = 1/4" (16, green)              | T mid | x300..780 y356..372
 *  b6 | guardrail chip (red, w700 h46)                          | Chip  | x190..890 y400..446
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch14Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("n(E)/n(S) is NOT an axiom — it's a special case", "n(E)/n(S) axiom NAHI hai — ek special case hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("What the axioms quietly assume", "Axioms chupke se kya assume karte hain")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={130} size={16} fill={INK} weight={700}>
          {t("1. stated for FINITE sample spaces", "1. FINITE sample spaces ke liye")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={157} size={14} fill={MUTED}>
          {t("Kolmogorov's full theory covers infinite S too — Class 11 stays finite", "Kolmogorov ki full theory infinite S bhi cover karti hai — Class 11 finite hi")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={193} size={16} fill={INK} weight={700}>
          {t("2. additivity only guaranteed for MUTUALLY EXCLUSIVE events", "2. additivity sirf MUTUALLY EXCLUSIVE events ke liye")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={234} size={18} fill={RED} weight={800}>
          {"3. P(E) = n(E) / n(S) is NOT an axiom"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={540} y={261} size={14} fill={RED} script weight={700}>
          {t("a special case — only when outcomes are equally likely", "ek special case — sirf jab outcomes equally likely hon")}
        </T>
      </Fade>

      <Draw on={beat >= 5} delay={0} d={lineD(150, 292, 930, 292)} stroke={MUTED} sw={1.4} dur={0.5} />

      {/* beat 5 — naive counterexample on a loaded die */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={322} size={14} fill={MUTED}>
          {t("loaded die, applied naively:", "loaded die, naively apply kiya:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={540} y={352} size={18} fill={RED} weight={700}>
          {"naive: P(face) = 1/6"}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d={crossD(460, 336, 160, 24)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={540} y={382} size={16} fill={GREEN} weight={700}>
          {t("actual: sum the sand → could be 1/4", "actual: sand sum karo → 1/4 ho sakta hai")}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={190} y={412} w={700} h={46} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("not equally likely? → back to the AXIOMS, sum the actual sand", "equally likely nahi? → AXIOMS pe wapas jao, sand sum karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
