/**
 * M11 Ch10 · Section 24 — "Ellipse essentials (major axis on x-axis, a > b)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — Subtopic 4 (The Ellipse), sec 24 of 27. Reference
 * card consolidating Sec21-23 — pure text/formula "notes page" (no new
 * diagram; the geometry was already rigorously drawn in Sec21/23).
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 6.83, 18.18, 33.54, 43.18, 50.01,
 * 57.51, 64.43, 75.35]; reveals_hinglish = [0, 6.4, 16.55, 31.83, 42.33,
 * 46.76, 54.27, 60.67, 70.83].
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Ellipse essentials (major axis on x-axis, a > b)", "Ellipse essentials (major axis x-axis par, a > b)")}
        </T>
      </Fade>

      {/* beat 1 — standard equation */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={17} fill={INK} anchor="middle">x²/a² + y²/b² = 1</T>
      </Fade>

      {/* beat 2 — boxed core relations (HIGH) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={330} y={128} w={420} h={48} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          b² = a² − c²,  e = c/a = √(1 − b²/a²)
        </Chip>
      </Fade>

      {/* beat 3 — vertices/foci */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={198} size={15} fill={INK} anchor="middle">vertices (±a, 0),  foci (±c, 0)</T>
      </Fade>

      {/* beat 4 — axis lengths */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={222} size={15} fill={INK} anchor="middle">major axis = 2a,  minor axis = 2b</T>
      </Fade>

      {/* beat 5 — latus rectum */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={248} size={15} fill={INK} anchor="middle">latus rectum = 2b²/a</T>
      </Fade>

      {/* beat 6 — directrices */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={274} size={15} fill={INK} anchor="middle">directrices: x = ±a/e</T>
      </Fade>

      {/* beat 7 — vertical major axis adaptation */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={306} size={14} fill={INK} anchor="middle">
          {t(
            "For a vertical major axis, swap a², b² and foci = (0, ±c).",
            "Vertical major axis ke liye, a², b² swap karo aur foci = (0, ±c) padho."
          )}
        </T>
      </Fade>

      {/* beat 8 — guardrail (red, HIGH) */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={540} y={340} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Identify a² (bigger) and b² (smaller) FIRST —", "Pehle a² (bada) aur b² (chota) identify karo —")}
        </T>
        <T x={540} y={364} size={14} fill={RED} anchor="middle" weight={700}>
          {t("every formula follows.", "har formula khud nikal aata hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
