/**
 * M11 Ch13 · Section 11 — "Worked example: how a linear transformation moves spread"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * Given: range=40, M.D. about mean=12. Rule y_i=3x_i-7. Illustrative sample
 * points 10,12,16 (gaps 2,4) demonstrate: shift(-7)→3,5,9 (gaps STILL 2,4);
 * scale(×3)→30,36,48 (gaps 6,12 = 3×). Range_new=|3|×40=120. MD_new=|3|×12=36.
 *
 * Beats (board_reveal_at_english [0, 20.22, 30.89, 50.35, 67.84, 75.95, 88.66]):
 *  0 anchor: heading
 *  1 represent: given (range=40, M.D.=12, rule y=3x-7)
 *  2 explain (LEFT): shift demo — gaps unchanged
 *  3 explain (RIGHT): scale demo — gaps ×3
 *  4 land (boxed, high emphasis, LEFT): Range_new = |3|×40 = 120
 *  5 land (boxed, high emphasis, RIGHT): M.D._new = |3|×12 = 36
 *  6 note (red-margin): y=-3x-7 gives the same answers — only |a| matters
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 20, red, always-on)     | T mid | x540 y58
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y88
 *  b1 | given (14, ink)                  | T mid | x540 y118
 *  b2 | shift demo (LEFT)                | Draw+T| x100..480 y165..270
 *  b3 | scale demo (RIGHT)               | Draw+T| x580..980 y165..270
 *  b4 | boxed Range_new (LEFT, green)    | Draw+T| box x100..480 y298..344
 *  b5 | boxed M.D._new (RIGHT, green)    | Draw+T| box x580..980 y298..344
 *  b6 | red bar + note (14)              | Draw+T| x60 y378..396 · text y392
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED, arrowD,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const BEFORE = [10, 12, 16];
const SHIFT_AFTER = [3, 5, 9];
const SCALE_AFTER = [30, 36, 48];
const SHIFT_BEFORE_X = [150, 250, 350];
const SHIFT_AFTER_X = [110, 190, 290];
const SCALE_BEFORE_X = [630, 730, 830];
const SCALE_AFTER_X = [610, 720, 880];

export default function M11Ch13Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} anchor="middle" script>
          {t("Worked Example: A Linear Transformation Moves Spread", "Worked Example: Linear Transformation Aur Spread")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("JEE Main level: y_i = 3x_i - 7 on electricity bills", "JEE Main level: bills par y_i = 3x_i - 7")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={118} size={14} fill={INK} anchor="middle">
          {"Given: range = 40, M.D. about the mean = 12.  Rule: y_i = 3x_i - 7."}
        </T>
      </Fade>

      {/* beat 2 — LEFT: shift demo, gaps unchanged */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={290} y={150} size={13} fill={MUTED} anchor="middle" weight={700}>
          {t("Shift (b = -7)", "Shift (b = -7)")}
        </T>
      </Fade>
      {BEFORE.map((v, i) => (
        <Fade key={`sb${i}`} on={beat >= 2} delay={dl(2, 0.4 + i * 0.2)}>
          <Circle cx={SHIFT_BEFORE_X[i]} cy={180} r={5} fill={MUTED} />
          <T x={SHIFT_BEFORE_X[i]} y={165} size={12} fill={MUTED} anchor="middle">{v}</T>
        </Fade>
      ))}
      {SHIFT_AFTER.map((v, i) => (
        <React.Fragment key={`sa${i}`}>
          <Draw
            on={beat >= 2}
            delay={dl(2, 1.2 + i * 0.3)}
            d={arrowD(SHIFT_BEFORE_X[i], 188, SHIFT_AFTER_X[i], 227)}
            stroke={AMBER_DARK}
            sw={1.8}
            dur={0.4}
          />
          <Fade on={beat >= 2} delay={dl(2, 1.7 + i * 0.3)}>
            <Circle cx={SHIFT_AFTER_X[i]} cy={235} r={5} fill={INK} />
            <T x={SHIFT_AFTER_X[i]} y={252} size={12} fill={INK} anchor="middle" weight={700}>{v}</T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={290} y={270} size={13} fill={GREEN} anchor="middle" weight={700}>
          {t("gaps: 2, 4 → unchanged", "gaps: 2, 4 → same hi rahe")}
        </T>
      </Fade>

      {/* beat 3 — RIGHT: scale demo, gaps ×3 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={780} y={150} size={13} fill={MUTED} anchor="middle" weight={700}>
          {t("Scale (a = 3)", "Scale (a = 3)")}
        </T>
      </Fade>
      {BEFORE.map((v, i) => (
        <Fade key={`cb${i}`} on={beat >= 3} delay={dl(3, 0.4 + i * 0.2)}>
          <Circle cx={SCALE_BEFORE_X[i]} cy={180} r={5} fill={MUTED} />
          <T x={SCALE_BEFORE_X[i]} y={165} size={12} fill={MUTED} anchor="middle">{v}</T>
        </Fade>
      ))}
      {SCALE_AFTER.map((v, i) => (
        <React.Fragment key={`ca${i}`}>
          <Draw
            on={beat >= 3}
            delay={dl(3, 1.2 + i * 0.3)}
            d={arrowD(SCALE_BEFORE_X[i], 188, SCALE_AFTER_X[i], 227)}
            stroke={RED}
            sw={1.8}
            dur={0.4}
          />
          <Fade on={beat >= 3} delay={dl(3, 1.7 + i * 0.3)}>
            <Circle cx={SCALE_AFTER_X[i]} cy={235} r={5} fill={INK} />
            <T x={SCALE_AFTER_X[i]} y={252} size={12} fill={INK} anchor="middle" weight={700}>{v}</T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={780} y={270} size={13} fill={RED} anchor="middle" weight={700}>
          {t("gaps: 2, 4 → 6, 12  (×3)", "gaps: 2, 4 → 6, 12  (×3)")}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): new range */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(100, 298, 380, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={290} y={327} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"Range_new = |3| × 40 = 120"}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): new M.D. */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(580, 298, 400, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={780} y={327} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"M.D._new = |3| × 12 = 36"}
        </T>
      </Fade>

      {/* beat 6 — note: only |a| matters */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 378 L 60 396" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={392} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Even y_i = -3x_i - 7 gives the same answers — only |a| matters.",
            "y_i = -3x_i - 7 se bhi wahi answers — sirf |a| matter karta hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
