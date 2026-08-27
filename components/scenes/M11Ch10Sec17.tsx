/**
 * M11 Ch10 · Section 17 — "All four standard parabolas at a glance"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — Subtopic 3 (The Parabola), sec 17 of 20. Reference
 * card consolidating Sec14-16 — pure text/formula "notes page" (no new
 * diagram; the four orientations were already rigorously drawn in Sec16).
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 4.44, 16.98, 29.1, 38.06, 48.3,
 * 56.06, 65.19, 73.39]; reveals_hinglish = [0, 3.67, 15.87, 26.2, 34.13,
 * 42.07, 50.01, 57.94, 67.58].
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("All four standard parabolas at a glance", "Chaaron standard parabolas ek nazar mein")}
        </T>
      </Fade>

      {/* beat 1 — horizontal-axis pair */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={16} fill={INK} anchor="middle">
          y² = 4ax ({t("right", "right")}),    y² = −4ax ({t("left", "left")})
        </T>
      </Fade>

      {/* beat 2 — vertical-axis pair */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={136} size={16} fill={INK} anchor="middle">
          x² = 4ay ({t("up", "up")}),    x² = −4ay ({t("down", "down")})
        </T>
      </Fade>

      {/* beat 3 — reference-case heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={172} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("For y² = 4ax (the reference case):", "y² = 4ax ke liye (reference case):")}
        </T>
      </Fade>

      {/* beat 4 — focus/directrix */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={204} size={15} fill={INK} anchor="middle">focus (a, 0),   directrix x = −a</T>
      </Fade>

      {/* beat 5 — vertex/axis */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={230} size={15} fill={INK} anchor="middle">vertex (0, 0),   axis: y = 0</T>
      </Fade>

      {/* beat 6 — boxed latus rectum (HIGH) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={370} y={252} w={340} h={46} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          latus rectum = 4a,  ends (a, ±2a)
        </Chip>
      </Fade>

      {/* beat 7 — how to adapt the other three */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={328} size={14} fill={INK} anchor="middle">
          {t(
            "For the other three, swap x,y roles and flip signs to match the opening.",
            "Baaki teen ke liye, x,y ke roles swap karo aur opening ke hisab se sign flip karo."
          )}
        </T>
      </Fade>

      {/* beat 8 — guardrail (red, HIGH) */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={540} y={362} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Compare your equation to 4a, not a —", "Apni equation ko 4a se compare karo, a se nahi —")}
        </T>
        <T x={540} y={386} size={14} fill={RED} anchor="middle" weight={700}>
          {t("read 4a first, then halve twice.", "pehle 4a padho, phir do baar aadha karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
