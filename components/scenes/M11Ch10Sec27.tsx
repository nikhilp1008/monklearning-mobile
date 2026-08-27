/**
 * M11 Ch10 · Section 27 — "Ellipse traps"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes Subtopic 4 (The Ellipse), sec 27 of 27.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 8.11, 22.36, 32.26, 48.04, 59.22,
 * 63.23, 77.4]; reveals_hinglish = [0, 5.03, 15.87, 26.03, 42.84, 53.42,
 * 57.09, 68.01].
 *
 * Same 2x2-grid + reflex-recap structure as Sec7/13/20 (RED = avoid,
 * AMBER = remember).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

function Card({
  x, y, w, h, stroke, on, delay,
}: { x: number; y: number; w: number; h: number; stroke: string; on: boolean; delay: number }) {
  return <Draw on={on} delay={delay} d={roundRectD(x, y, w, h, 14)} stroke={stroke} sw={2} dur={0.4} />;
}

export default function M11Ch10Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Ellipse traps", "Ellipse ke traps")}
        </T>
      </Fade>

      {/* beat 1 — card1: a² is bigger denom (HIGH) */}
      <Card x={60} y={110} w={430} h={70} stroke={RED} on={beat >= 1} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={80} y={140} size={13} fill={RED} anchor="start" weight={700}>{t("a² is the BIGGER denominator.", "a² BADA denominator hai.")}</T>
        <T x={80} y={160} size={13} fill={RED} anchor="start" weight={700}>
          {t("Its variable marks the major axis.", "Iska variable major axis marks karta hai.")}
        </T>
      </Fade>

      {/* beat 2 — card2: foci on major axis */}
      <Card x={560} y={110} w={430} h={70} stroke={RED} on={beat >= 2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={580} y={140} size={13} fill={RED} anchor="start" weight={700}>
          {t("Foci lie on the MAJOR axis, never minor;", "Foci MAJOR axis par baithte hain, minor par nahi;")}
        </T>
        <T x={580} y={160} size={13} fill={RED} anchor="start" weight={700}>
          {t("check orientation first.", "orientation pehle check karo.")}
        </T>
      </Fade>

      {/* beat 3 — card3: b²=a²-c² direction */}
      <Card x={60} y={195} w={430} h={70} stroke={RED} on={beat >= 3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={225} size={13} fill={RED} anchor="start" weight={700}>
          {t("Use b² = a² − c² (subtract);", "b² = a² − c² use karo (subtract);")}
        </T>
        <T x={80} y={245} size={13} fill={RED} anchor="start" weight={700}>
          {t("do not mis-remember a² = b² − c².", "a² = b² − c² mat yaad karo.")}
        </T>
      </Fade>

      {/* beat 4 — card4: semi-axes */}
      <Card x={560} y={195} w={430} h={70} stroke={RED} on={beat >= 4} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={580} y={225} size={13} fill={RED} anchor="start" weight={700}>
          {t("a, b are SEMI-axes in every formula;", "a,b formulas mein SEMI-axes hain;")}
        </T>
        <T x={580} y={245} size={13} fill={RED} anchor="start" weight={700}>
          {t("halve any full axis length first.", "poori axis length pehle aadha karo.")}
        </T>
      </Fade>

      {/* beat 5 — sub-header */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={325} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The identify-first reflex", "Identify-first reflex")}
        </T>
      </Fade>

      {/* beat 6 — card5: the two-step reflex (AMBER, wide) */}
      <Card x={150} y={355} w={780} h={70} stroke={AMBER_DARK} on={beat >= 6} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={385} size={14} fill={INK} anchor="middle">
          {t("Step 1: bigger denom = a², that variable's axis is major.", "Step 1: bada denom = a², uska variable major axis.")}
        </T>
        <T x={540} y={407} size={14} fill={INK} anchor="middle">Step 2: c = √(a² − b²).</T>
      </Fade>

      {/* beat 7 — card6: cascade (RED, HIGH) */}
      <Card x={150} y={450} w={780} h={60} stroke={RED} on={beat >= 7} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={478} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Then e = c/a, foci on the major axis,", "Phir e = c/a, foci major axis par,")}
        </T>
        <T x={540} y={498} size={13} fill={RED} anchor="middle" weight={700}>
          {t("and LR = 2b²/a — all follow.", "aur LR = 2b²/a — sab follow karta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
