/**
 * M11 Ch05 · Section 9 — "Worked example: the divide-by-negative speed trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Speed-trap section: stage the tempting wrong
 * answer (forgetting to flip both symbols), cross it out, THEN land correct.
 *
 * Beats (en [0,15.87,26.2,33.28,40.87,45.4,54.78,65.71,84.22], hi
 * [0,15.27,23.98,31.32,39.25,43.61,51.46,60.59,77.82]):
 *  0 heading: the problem — -7 ≤ (3-2x)/4 < 5
 *  1 note (red-margin): two traps at once — compound AND divide-by-negative
 *  2 text: ×4 on all three parts, positive, directions hold
 *  3 formula: -28 ≤ 3-2x < 20
 *  4 text: subtract 3 from all three parts
 *  5 formula: -31 ≤ -2x < 17
 *  6 text (the trap): ÷(-2), flip BOTH symbols — wrong answer staged + crossed
 *  7 formula (high, boxed green): -17/2 < x ≤ 31/2 ⇒ (-17/2, 31/2]
 *  8 text: strict end low, filled end high — matches the endpoint swap
 *
 * Layout plan:
 *  b0 | problem (24,ink,w800)      | T mid | y100..128 (bl 120)
 *  b1 | trap warning (16,red,scr)  | T mid | y143..161 (bl 155)
 *  b2 | caption (15,muted,scr)     | T mid | y182..197 (bl 193)
 *  b3 | formula (22,ink,w700)      | T mid | y215..234 (bl 228)
 *  b4 | caption (15,muted,scr)     | T mid | y254..269 (bl 265)
 *  b5 | formula (22,ink,w700)      | T mid | y287..306 (bl 300)
 *  b6a| trap caption (15,red,scr)  | T mid | y326..341 (bl 337)
 *  b6b| wrong chip, crossed (red)  | Chip  | x440..640 y360..396
 *  b6c| "impossible…" (13,red)     | T mid | y412..425 (bl 421)
 *  b7 | boxed answer (19,green)    | Chip  | x330..750 y440..494
 *  b8 | caption (15,ink,scr)       | T mid | y525..551 (bl 540)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch05Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("two traps, one problem", "do traps, ek problem")}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={120} size={24} fill={INK} weight={800}>
          -7 ≤ (3 - 2x)/4 &lt; 5
        </T>
      </Fade>

      {/* beat 1 — two traps at once */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={155} size={16} fill={RED} script>
          {t(
            "two traps here: it's compound, AND you'll divide by a negative",
            "do traps: compound bhi hai, AND negative se divide bhi hoga"
          )}
        </T>
      </Fade>

      {/* beat 2 — ×4, positive, directions hold */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={193} size={15} fill={MUTED} script>
          {t("×4 on all three parts — positive, directions hold", "teeno parts ko ×4 — positive hai, direction same")}
        </T>
      </Fade>

      {/* beat 3 — -28 ≤ 3-2x < 20 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={228} size={22} fill={INK} weight={700}>
          -28 ≤ 3 - 2x &lt; 20
        </T>
      </Fade>

      {/* beat 4 — subtract 3 from all three */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={265} size={15} fill={MUTED} script>
          {t("subtract 3 from all three parts", "teeno parts se 3 subtract karo")}
        </T>
      </Fade>

      {/* beat 5 — -31 ≤ -2x < 17 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={300} size={22} fill={INK} weight={700}>
          -31 ≤ -2x &lt; 17
        </T>
      </Fade>

      {/* beat 6 — the trap: divide by -2, must flip BOTH symbols */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={337} size={15} fill={RED} script>
          {t("÷(-2) on all three — flip BOTH symbols!", "÷(-2) teeno mein — DONO symbol flip karo!")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <Chip x={440} y={360} w={200} h={36} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          15.5 ≤ x &lt; -8.5
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d={crossD(440, 360, 200, 36)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={540} y={421} size={13} fill={RED} script>
          {t("impossible — 15.5 is not less than -8.5", "impossible — 15.5, -8.5 se chota nahi hai")}
        </T>
      </Fade>

      {/* beat 7 — the correct, flipped answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={330} y={440} w={420} h={54} fill={GREEN} textFill="#fff" size={19} script={false}>
          -17/2 &lt; x ≤ 31/2 ⇒ (-17/2, 31/2]
        </Chip>
      </Fade>

      {/* beat 8 — the swap, explained */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={540} size={15} fill={INK} script>
          {t(
            "strict end landed low, filled end high — exactly as predicted",
            "strict end low pe, filled end high pe — bilkul jaisa predict kiya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
