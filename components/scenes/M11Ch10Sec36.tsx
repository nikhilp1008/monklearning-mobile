/**
 * M11 Ch10 · Section 36 — "Conic Sections in 60 seconds" — CHAPTER FINALE
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: cheat_sheet — closes Subtopic 6 (Chapter Wrap-up) and the
 * entire chapter, sec 36 of 36. 2-column x 4-row grid of 8 boxed mnemonic
 * cards (RED border+text for the two JSON red-margin/HIGH cards — the
 * eccentricity ladder and the semi-vs-full-length warning — INK/AMBER_DARK
 * for the other six), revealed one per beat in the order the chapter taught
 * them, per the maths spec's cheat_sheet convention ("a notes page moment").
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate
 * at beat>=1..beat>=8. reveals_english = [0, 8.19, 20.22, 33.54, 48.64,
 * 59.65, 73.47, 86.53, 96.68]; reveals_hinglish = [0, 7.94, 19.03, 28.25,
 * 42.33, 51.11, 63.91, 76.46, 85.33].
 *
 * Every mnemonic cross-checked against its section: classifier (Sec3/4),
 * eccentricity ladder (Sec2), circle (Sec10), parabola (Sec17), ellipse
 * (Sec24), hyperbola (Sec31), semi-not-full (Sec20/27 guardrails), shortcuts
 * (Sec11 diameter form + Sec24/31 c=ae).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

function Card({
  x, y, w, h, stroke, on, delay,
}: { x: number; y: number; w: number; h: number; stroke: string; on: boolean; delay: number }) {
  return <Draw on={on} delay={delay} d={roundRectD(x, y, w, h, 12)} stroke={stroke} sw={1.8} dur={0.4} />;
}

const COL1 = 299, COL2 = 801;
const BOXW = 478;

export default function M11Ch10Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Conic Sections in 60 seconds", "Conic Sections 60 seconds mein")}
        </T>
      </Fade>

      {/* beat 1 — card1: classifier */}
      <Card x={60} y={105} w={BOXW} h={90} stroke={INK} on={beat >= 1} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={COL1} y={133} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("CLASSIFIER", "CLASSIFIER")}</T>
        <T x={COL1} y={161} size={14} fill={INK} anchor="middle">{t("Same sign CLOSES; opposite OPENS;", "Same sign CLOSES; opposite OPENS;")}</T>
        <T x={COL1} y={185} size={14} fill={INK} anchor="middle">{t("missing square = PARABOLA.", "missing square = PARABOLA.")}</T>
      </Fade>

      {/* beat 2 — card2: eccentricity ladder (RED, HIGH) */}
      <Card x={562} y={105} w={BOXW} h={90} stroke={RED} on={beat >= 2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={COL2} y={140} size={15} fill={RED} anchor="middle" weight={700}>{t("ECCENTRICITY LADDER", "ECCENTRICITY LADDER")}</T>
        <T x={COL2} y={170} size={14} fill={RED} anchor="middle" weight={700}>0 circle · 0-1 ellipse · 1 parabola · &gt;1 hyperbola</T>
      </Fade>

      {/* beat 3 — card3: circle */}
      <Card x={60} y={215} w={BOXW} h={90} stroke={INK} on={beat >= 3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={COL1} y={243} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("CIRCLE", "CIRCLE")}</T>
        <T x={COL1} y={271} size={14} fill={INK} anchor="middle">centre(−g,−f), r=√(g²+f²−c);</T>
        <T x={COL1} y={295} size={14} fill={INK} anchor="middle">S₁ sign locates point, √S₁ = tangent.</T>
      </Fade>

      {/* beat 4 — card4: parabola */}
      <Card x={562} y={215} w={BOXW} h={90} stroke={INK} on={beat >= 4} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={COL2} y={243} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("PARABOLA", "PARABOLA")}</T>
        <T x={COL2} y={271} size={14} fill={INK} anchor="middle">{t("Read 4a as ONE block;", "4a ko EK block padho;")}</T>
        <T x={COL2} y={295} size={14} fill={INK} anchor="middle">{t("squared variable = axis, sign = direction.", "squared variable = axis, sign = direction.")}</T>
      </Fade>

      {/* beat 5 — card5: ellipse */}
      <Card x={60} y={325} w={BOXW} h={90} stroke={INK} on={beat >= 5} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={COL1} y={353} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("ELLIPSE", "ELLIPSE")}</T>
        <T x={COL1} y={381} size={14} fill={INK} anchor="middle">{t("Bigger denom = a²; b²=a²−c²;", "Bada denom = a²; b²=a²−c²;")}</T>
        <T x={COL1} y={405} size={14} fill={INK} anchor="middle">{t("foci on major axis; LR = 2b²/a.", "foci major axis par; LR = 2b²/a.")}</T>
      </Fade>

      {/* beat 6 — card6: hyperbola */}
      <Card x={562} y={325} w={BOXW} h={90} stroke={INK} on={beat >= 6} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={COL2} y={353} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("HYPERBOLA", "HYPERBOLA")}</T>
        <T x={COL2} y={381} size={14} fill={INK} anchor="middle">{t("Positive term = transverse axis;", "Positive term = transverse axis;")}</T>
        <T x={COL2} y={405} size={14} fill={INK} anchor="middle">c²=a²+b²; asymptotes y=±(b/a)x.</T>
      </Fade>

      {/* beat 7 — card7: semi not full (RED, HIGH) */}
      <Card x={60} y={435} w={BOXW} h={90} stroke={RED} on={beat >= 7} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={COL1} y={463} size={15} fill={RED} anchor="middle" weight={700}>{t("SEMI, NOT FULL", "SEMI, NOT FULL")}</T>
        <T x={COL1} y={491} size={14} fill={RED} anchor="middle" weight={700}>{t("a,b are ALWAYS half-lengths —", "a,b HAMESHA half-lengths hain —")}</T>
        <T x={COL1} y={515} size={14} fill={RED} anchor="middle" weight={700}>{t("halve any full length first.", "poori length pehle aadha karo.")}</T>
      </Fade>

      {/* beat 8 — card8: shortcuts */}
      <Card x={562} y={435} w={BOXW} h={90} stroke={INK} on={beat >= 8} delay={dl(8, 0)} />
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={COL2} y={463} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("SHORTCUTS", "SHORTCUTS")}</T>
        <T x={COL2} y={491} size={14} fill={INK} anchor="middle">
          {t("One-line diameter form for circles;", "Circles ke liye one-line diameter form;")}
        </T>
        <T x={COL2} y={515} size={14} fill={INK} anchor="middle">c = ae links focus ↔ eccentricity.</T>
      </Fade>
    </Scene>
  );
}
