/**
 * M11 Ch10 · Section 20 — "Parabola traps"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes Subtopic 3 (The Parabola), sec 20 of 20.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 5.46, 23.81, 33.37, 45.65, 57.43,
 * 61.7, 73.22]; reveals_hinglish = [0, 5.72, 20.74, 29.53, 39.85, 49.15,
 * 53.5, 65.28].
 *
 * Same 2x2-grid + reflex-recap structure as Sec7/Sec13 (RED = avoid,
 * AMBER = remember). Card1 and the final reflex card are both JSON
 * red-margin/HIGH.
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

export default function M11Ch10Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Parabola traps", "Parabola ke traps")}
        </T>
      </Fade>

      {/* beat 1 — card1: 4a as one block (HIGH) */}
      <Card x={60} y={110} w={430} h={70} stroke={RED} on={beat >= 1} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={80} y={140} size={13} fill={RED} anchor="start" weight={700}>{t("Read 4a as ONE block.", "4a ko EK block padho.")}</T>
        <T x={80} y={160} size={13} fill={RED} anchor="start" weight={700}>y² = 12x → 4a = 12 → a = 3, NOT a = 12.</T>
      </Fade>

      {/* beat 2 — card2: squared variable = axis */}
      <Card x={560} y={110} w={430} h={70} stroke={RED} on={beat >= 2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={580} y={140} size={13} fill={RED} anchor="start" weight={700}>{t("Squared variable = axis;", "Squared variable = axis;")}</T>
        <T x={580} y={160} size={13} fill={RED} anchor="start" weight={700}>
          {t("sign of other side = direction.", "doosri side ka sign = direction.")}
        </T>
      </Fade>

      {/* beat 3 — card3: focus inside, directrix outside */}
      <Card x={60} y={195} w={430} h={70} stroke={RED} on={beat >= 3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={225} size={13} fill={RED} anchor="start" weight={700}>
          {t("Focus is INSIDE the curve;", "Focus curve ke ANDAR hota hai;")}
        </T>
        <T x={80} y={245} size={13} fill={RED} anchor="start" weight={700}>
          {t("directrix is OUTSIDE, same distance a.", "directrix BAHAR hai, utni hi door a.")}
        </T>
      </Fade>

      {/* beat 4 — card4: one focus, one directrix, e=1 */}
      <Card x={560} y={195} w={430} h={70} stroke={RED} on={beat >= 4} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={580} y={225} size={13} fill={RED} anchor="start" weight={700}>
          {t("ONE focus, ONE directrix,", "EK focus, EK directrix,")}
        </T>
        <T x={580} y={245} size={13} fill={RED} anchor="start" weight={700}>
          {t("eccentricity = 1 exactly.", "eccentricity = 1 exactly.")}
        </T>
      </Fade>

      {/* beat 5 — sub-header */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={325} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The read-in-one-pass reflex", "Read-in-one-pass reflex")}
        </T>
      </Fade>

      {/* beat 6 — card5: the reflex recipe (AMBER, wide) */}
      <Card x={150} y={355} w={780} h={70} stroke={AMBER_DARK} on={beat >= 6} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={385} size={14} fill={INK} anchor="middle">
          {t("Spot the squared variable + sign, match 4a,", "Squared variable + sign spot karo, 4a match karo,")}
        </T>
        <T x={540} y={407} size={14} fill={INK} anchor="middle">
          {t("then place focus at a, directrix at −a.", "phir focus ko a par, directrix ko −a par rakho.")}
        </T>
      </Fade>

      {/* beat 7 — card6: latus-rectum ends (RED, HIGH) */}
      <Card x={150} y={450} w={780} h={60} stroke={RED} on={beat >= 7} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={478} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Latus-rectum ends: (a, ±2a) for y² = 4ax —", "Latus-rectum ends: (a, ±2a), y² = 4ax ke liye —")}
        </T>
        <T x={540} y={498} size={13} fill={RED} anchor="middle" weight={700}>
          {t("handy for a quick sketch.", "quick sketch ke liye handy.")}
        </T>
      </Fade>
    </Scene>
  );
}
