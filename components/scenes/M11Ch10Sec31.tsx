/**
 * M11 Ch10 · Section 31 — "Hyperbola essentials (transverse axis on x-axis)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — Subtopic 5 (The Hyperbola), sec 31 of 34.
 * Reference card consolidating Sec28-30 — pure text/formula "notes page"
 * (no new diagram; the geometry was already rigorously drawn in Sec28/30).
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 7.34, 15.87, 32.94, 41.3, 50.52,
 * 60.5, 72.02, 85.76]; reveals_hinglish = [0, 6.49, 14.51, 30.04, 41.39,
 * 49.49, 58.28, 68.86, 81.24].
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Hyperbola essentials (transverse axis on x-axis)", "Hyperbola essentials (transverse axis x-axis par)")}
        </T>
      </Fade>

      {/* beat 1 — standard equation */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={17} fill={INK} anchor="middle">x²/a² − y²/b² = 1</T>
      </Fade>

      {/* beat 2 — boxed core relations (HIGH) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={310} y={128} w={460} h={48} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          c² = a² + b²,  e = c/a = √(1 + b²/a²)
        </Chip>
      </Fade>

      {/* beat 3 — vertices/foci */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={198} size={15} fill={INK} anchor="middle">vertices (±a, 0),  foci (±c, 0)</T>
      </Fade>

      {/* beat 4 — axis lengths */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={222} size={15} fill={INK} anchor="middle">transverse axis = 2a,  conjugate axis = 2b</T>
      </Fade>

      {/* beat 5 — asymptotes */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={248} size={15} fill={INK} anchor="middle">asymptotes: y = ±(b/a)x</T>
      </Fade>

      {/* beat 6 — latus rectum, directrices */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={274} size={15} fill={INK} anchor="middle">latus rectum = 2b²/a,  directrices x = ±a/e</T>
      </Fade>

      {/* beat 7 — vertical transverse axis */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={306} size={14} fill={INK} anchor="middle">
          {t(
            "Transverse axis on the y-axis: y²/a² − x²/b² = 1, foci (0,±c).",
            "Transverse axis y-axis par: y²/a² − x²/b² = 1, foci (0,±c)."
          )}
        </T>
      </Fade>

      {/* beat 8 — guardrail (red, HIGH) */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={540} y={340} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Ellipse: c² = a² − b². Hyperbola: c² = a² + b².", "Ellipse: c² = a² − b². Hyperbola: c² = a² + b².")}
        </T>
        <T x={540} y={364} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Only the sign differs.", "Bas sign ka farak hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
