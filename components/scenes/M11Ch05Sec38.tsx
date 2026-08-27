/**
 * M11 Ch05 · Section 38 — "Worked example: modulus inequality, the direction trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. The trap is called out FIRST (beat 1, matching
 * the JSON's own ordering) rather than saved for the end.
 *
 * Beats (en [0,11.35,35.93,49.49,58.62,70.14,79.7,85.25], hi
 * [0,12.37,34.73,46.17,54.1,67.84,77.06,82.09]):
 *  0 heading: the problem — |2x-3| ≥ 5
 *  1 note (red-margin, high, THE TRAP): ≥ throws you OUTSIDE into a union
 *  2 text: apply |f|≥a ⟺ f≤-a or f≥a
 *  3 formula: 2x-3≤-5 or 2x-3≥5
 *  4 formula: 2x≤-2⇒x≤-1; 2x≥8⇒x≥4
 *  5 formula (high, boxed green): x ∈ (-∞,-1] ∪ [4,∞)
 *  6 text: endpoints included — non-strict
 *  7 diagram: number line, filled at -1 and 4, shaded outward
 *
 * Layout plan:
 *  b0 | problem (18,ink,w700)     | T mid | bl 105
 *  b1 | boxed guardrail (15,red)  | Chip  | x180..900 y135..183
 *  b2 | caption (14,ink,scr)      | T mid | bl 220
 *  b3 | formula (17,ink,w700)     | T mid | bl 255
 *  b4 | formula (17,ink,w700)     | T mid | bl 290
 *  b5 | boxed formula (18,green)  | Chip  | x330..750 y320..368
 *  b6 | caption (14,ink,scr)      | T mid | bl 400
 *  b7 | number line + filled dots | Draw/circle | y470, x150..900
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot, lineD } from "./math-kit";

const X0 = 170; // x=-4
const SX = 70;
const sx = (v: number) => X0 + (v + 4) * SX;

export default function M11Ch05Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("≥ throws you OUTSIDE — opposite of ≤", "≥ tumhe OUTSIDE fenkta hai — ≤ ke ulta")}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={105} size={18} fill={INK} weight={700}>
          {t("solve |2x - 3| ≥ 5", "|2x - 3| ≥ 5 solve karo")}
        </T>
      </Fade>

      {/* beat 1 — THE TRAP */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={180} y={135} w={720} h={48} fill={"#FCF4E0"} stroke={RED} textFill={RED} size={15}>
          {t(
            "'≥' throws you OUTSIDE into a union — the opposite of the '≤' form",
            "'≥' tumhe OUTSIDE union mein fenkta hai — '≤' form ke ulta"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — apply the standard result */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={220} size={14} fill={INK} script>
          {t("apply |f| ≥ a ⟺ f ≤ -a or f ≥ a:", "|f| ≥ a ⟺ f ≤ -a ya f ≥ a lagao:")}
        </T>
      </Fade>

      {/* beat 3 — the split */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={255} size={17} fill={INK} weight={700}>
          {t("2x-3 ≤ -5 or 2x-3 ≥ 5", "2x-3 ≤ -5 ya 2x-3 ≥ 5")}
        </T>
      </Fade>

      {/* beat 4 — solve each */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={290} size={17} fill={INK} weight={700}>
          2x≤-2 ⇒ x≤-1; &nbsp; 2x≥8 ⇒ x≥4
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={330} y={320} w={420} h={48} fill={GREEN} textFill="#fff" size={18} script={false}>
          x ∈ (-∞,-1] ∪ [4,∞)
        </Chip>
      </Fade>

      {/* beat 6 — non-strict */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={400} size={14} fill={INK} script>
          {t("endpoints included — the inequality is non-strict", "endpoints included hain — inequality non-strict hai")}
        </T>
      </Fade>

      {/* beat 7 — the number line */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={axisD(150, 900, 470)} stroke={INK} sw={2} dur={0.7} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.0)}
        d={[-4, -2, -1, 0, 2, 4, 6].map((v) => tickD(sx(v), 470, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      {[-4, -2, -1, 0, 2, 4, 6].map((v) => (
        <Fade key={v} on={beat >= 7} delay={dl(7, 1.4)}>
          <T x={sx(v)} y={492} size={12} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}
      <IntervalDot on={beat >= 7} delay={dl(7, 2.0)} x={sx(-1)} y={470} open={false} r={5} stroke={GREEN} />
      <IntervalDot on={beat >= 7} delay={dl(7, 2.2)} x={sx(4)} y={470} open={false} r={5} stroke={GREEN} />
      <Draw on={beat >= 7} delay={dl(7, 2.5)} d={lineD(150, 470, sx(-1), 470)} stroke={GREEN} sw={5} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 2.9)} d={lineD(sx(4), 470, 900, 470)} stroke={GREEN} sw={5} dur={0.5} />
    </Scene>
  );
}
