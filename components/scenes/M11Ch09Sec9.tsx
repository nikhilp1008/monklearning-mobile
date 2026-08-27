/**
 * M11 Ch09 · Section 9 — "Pitfalls and pro-tips: coordinate foundations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid sequence of ringed/boxed pitfalls (RED) then pro-tips
 * (GREEN), one per beat, closing Subtopic 1 (Coordinate Foundations). Grid pattern
 * mirrors M11Ch04Sec20.tsx (2×3 boxed-card layout, same box geometry — proven safe).
 *
 * Beats (board_reveal_at_english [0, 5.89, 18.6, 29.78, 43.78, 61.35, 77.74, 86.36]):
 *  0(title, always-on) | "Pitfalls & Pro-Tips: Coordinate Foundations"
 *  1 trap (red): internal uses m+n; external uses m-n
 *  2 trap (red): never drop the modulus in area — can't go negative
 *  3 trap (red, Overline): missing vertex — scale centroid x1+x2+x3=3x̄ first
 *  4 trap (red): sign of the shift — new = old - shift (X=x-h, Y=y-k)
 *  5 pro-tip (green): area determinant beats comparing slopes for collinearity
 *  6 pro-tip (green): never divides by zero; modulus guards orientation
 *  7 closing (script, amber_dark) — also closes Subtopic 1
 *
 * Layout plan (2×3 grid of trap/tip cards, box geometry reused from Sec20):
 *  b0 | title (22,red,script)             | T mid  | x540  y62
 *  b1 | card 1 (red, 1 line, centered)     | Draw+T | box x60..520  y115..175
 *  b2 | card 2 (red, 1 line, centered)     | Draw+T | box x560..1020 y115..175
 *  b3 | card 3 (red, 2 lines, Overline)    | Draw+T | box x60..520  y245..321
 *  b4 | card 4 (red, 2 lines)              | Draw+T | box x560..1020 y245..321
 *  b5 | card 5 (green, 2 lines)            | Draw+T | box x60..520  y345..421
 *  b6 | card 6 (green, 2 lines)            | Draw+T | box x560..1020 y345..421
 *  b7 | closing (script, 2 lines, no box)  | T mid  | x540 y464 / y504
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

/** T + Overline pair — see M11Ch04Sec13.tsx for the full contract. x/y/size/anchor
 * on the Overline must match the T call it sits above; textWidth defaults to a
 * single-glyph estimate (size*0.6), enough to bar just the "x". */
function Bar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
  text = "x",
  barWidth,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
  text?: string;
  barWidth?: number;
}) {
  const w = barWidth ?? size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          {text}
        </T>
      </Fade>
      <Overline on={on} delay={delay + 0.15} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch09Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Pitfalls & Pro-Tips: Coordinate Foundations", "Coordinate Foundations ke Pitfalls & Pro-Tips")}
        </T>
      </Fade>

      {/* beat 1 — trap: internal vs external section ratio */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(60, 115, 460, 60)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={290} y={150} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Internal uses m+n; external uses m-n.", "Internal mein m+n; external mein m-n.")}
        </T>
      </Fade>

      {/* beat 2 — trap: never drop the modulus in area */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(560, 115, 460, 60)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={790} y={150} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Never drop the modulus — area ≥ 0 always!", "Modulus kabhi mat chodo — area negative nahi!")}
        </T>
      </Fade>

      {/* beat 3 — trap: missing vertex, scale the centroid first (Overline x̄) */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(60, 245, 460, 76)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={76} y={278} size={14} fill={RED} anchor="start" weight={700}>
          {t("Missing vertex? Scale centroid first:", "Vertex missing? Pehle centroid scale karo:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={76} y={312} size={16} fill={RED} anchor="start" weight={700}>x₁ + x₂ + x₃ = 3</T>
      </Fade>
      <Bar on={beat >= 3} delay={dl(3, 1.5)} x={178} y={312} size={16} fill={RED} />

      {/* beat 4 — trap: sign of the shift of origin */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(560, 245, 460, 76)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={576} y={278} size={14} fill={RED} anchor="start" weight={700}>
          {t("Shift of origin: new = old - shift,", "Origin shift: new = old - shift,")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={576} y={312} size={14} fill={RED} anchor="start" weight={700}>
          {t("i.e. X = x - h,  Y = y - k.", "yaani X = x - h,  Y = y - k.")}
        </T>
      </Fade>

      {/* beat 5 — pro-tip: area determinant beats comparing slopes */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(60, 345, 460, 76)} stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={76} y={378} size={14} fill={INK} anchor="start" weight={700}>
          {t("Pro-tip: for collinearity,", "Pro-tip: collinearity ke liye,")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={76} y={412} size={14} fill={INK} anchor="start" weight={700}>
          {t("the area determinant beats slopes.", "area determinant slopes se behtar hai.")}
        </T>
      </Fade>

      {/* beat 6 — pro-tip: never divides by zero, modulus guards orientation */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(560, 345, 460, 76)} stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={576} y={378} size={14} fill={INK} anchor="start" weight={700}>
          {t("It never divides by zero,", "Yeh kabhi zero se divide nahi karta,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={576} y={412} size={14} fill={INK} anchor="start" weight={700}>
          {t("and the modulus guards against sign errors.", "aur modulus sign errors se bachata hai.")}
        </T>
      </Fade>

      {/* beat 7 — closing (also closes Subtopic 1) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={464} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Get these cold and Straight Lines turns into bookkeeping.",
            "Inhe pakka karo aur Straight Lines bookkeeping ban jaati hai."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={540} y={504} size={13} fill={GREEN} anchor="middle" script>
          {t(
            "— Subtopic 1: Coordinate Foundations, complete.",
            "— Subtopic 1: Coordinate Foundations, complete."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
