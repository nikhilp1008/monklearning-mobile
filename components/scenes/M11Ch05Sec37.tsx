/**
 * M11 Ch05 · Section 37 — "Worked example: a quadratic inequality (foundational)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. First worked example of subtopic 4, applying
 * Sec 36's quadratic "outside" result directly, with a real parabola+
 * number-line combo diagram (matches the JSON's own diagram shape).
 *
 * Beats (en [0,10.41,13.31,18.86,32,42.84,55.38,60.33], hi
 * [0,11.35,15.02,20.57,34.05,42.5,54.95,59.82]):
 *  0 heading: the problem — x²-x-6 > 0
 *  1 text: factor the quadratic
 *  2 formula: x²-x-6 = (x-3)(x+2)
 *  3 text: roots -2, 3; coefficient of x² positive
 *  4 text: ">0" means OUTSIDE the roots
 *  5 formula (high, boxed green): x<-2 or x>3 ⇒ (-∞,-2)∪(3,∞)
 *  6 note (red-margin): both endpoints excluded — strict
 *  7 diagram: parabola + number line, positive outside -2 and 3
 *
 * Layout plan:
 *  b0 | problem (18,ink,w700)     | T mid | bl 110
 *  b1 | caption (14,ink,scr)      | T mid | bl 145
 *  b2 | formula (18,ink,w700)     | T mid | bl 180
 *  b3 | caption (14,ink,scr)      | T mid | bl 215
 *  b4 | caption (14,ink,scr)      | T mid | bl 255
 *  b5 | boxed formula (17,green)  | Chip  | x270..810 y290..336
 *  b6 | boxed guardrail (14,red)  | Chip  | x260..820 y355..397
 *  b7 | parabola + axis + rays    | Draw  | x150..950 y420..562
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, curveD, IntervalDot, lineD } from "./math-kit";

const AXIS_Y = 520;
const X0 = 170; // x=-4
const SX = 85; // px per unit
const sx = (x: number) => X0 + (x + 4) * SX;

export default function M11Ch05Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={21} fill={RED} script>
          {t("outside the roots, since it's > 0 and opens upward", "roots ke bahar, kyunki yeh > 0 hai aur upward khulta hai")}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={18} fill={INK} weight={700}>
          {t("solve x² - x - 6 > 0", "x² - x - 6 > 0 solve karo")}
        </T>
      </Fade>

      {/* beat 1 — factor it */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={145} size={14} fill={INK} script>
          {t("factor the quadratic", "quadratic ko factor karo")}
        </T>
      </Fade>

      {/* beat 2 — the factored form */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={180} size={18} fill={INK} weight={700}>
          x² - x - 6 = (x-3)(x+2)
        </T>
      </Fade>

      {/* beat 3 — the roots and leading sign */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={215} size={14} fill={INK} script>
          {t(
            "roots: x = -2 and x = 3; coefficient of x² is positive",
            "roots: x = -2 aur x = 3; x² ka coefficient positive hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — outside the roots */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={255} size={14} fill={INK} script>
          {t(
            "'>0' means OUTSIDE the roots — a positive-leading parabola is positive outside",
            "'>0' ka matlab roots ke BAHAR — positive-leading parabola bahar positive hoti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={270} y={290} w={540} h={46} fill={GREEN} textFill="#fff" size={17} script={false}>
          {t("x<-2 or x>3 ⇒ (-∞,-2)∪(3,∞)", "x<-2 ya x>3 ⇒ (-∞,-2)∪(3,∞)")}
        </Chip>
      </Fade>

      {/* beat 6 — strict, both excluded */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={260} y={355} w={560} h={42} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t("both endpoints excluded — the inequality is strict", "dono endpoints excluded — inequality strict hai")}
        </Chip>
      </Fade>

      {/* beat 7 — the parabola + number line */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={axisD(150, 950, AXIS_Y)} stroke={INK} sw={2} dur={0.7} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.0)}
        d={[-4, -2, 0, 3, 5].map((v) => tickD(sx(v), AXIS_Y, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      {[-4, -2, 0, 3, 5].map((v) => (
        <Fade key={v} on={beat >= 7} delay={dl(7, 1.4)}>
          <T x={sx(v)} y={AXIS_Y + 22} size={12} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.9)}
        d={curveD([
          { x: sx(-4), y: 420 },
          { x: sx(-3), y: 477 },
          { x: sx(-2), y: AXIS_Y },
          { x: sx(-1), y: 549 },
          { x: sx(0), y: 563 },
          { x: sx(1), y: 563 },
          { x: sx(2), y: 549 },
          { x: sx(3), y: AXIS_Y },
          { x: sx(4), y: 477 },
          { x: sx(5), y: 420 },
        ])}
        stroke={GREEN}
        sw={2.4}
        dur={1.1}
      />
      <IntervalDot on={beat >= 7} delay={dl(7, 2.9)} x={sx(-2)} y={AXIS_Y} open={true} r={5} stroke={RED} />
      <IntervalDot on={beat >= 7} delay={dl(7, 3.1)} x={sx(3)} y={AXIS_Y} open={true} r={5} stroke={RED} />
      <Draw on={beat >= 7} delay={dl(7, 3.4)} d={lineD(150, AXIS_Y, sx(-2), AXIS_Y)} stroke={GREEN} sw={5} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 3.8)} d={lineD(sx(3), AXIS_Y, 950, AXIS_Y)} stroke={GREEN} sw={5} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 4.3)}>
        <T x={sx(-3)} y={455} size={15} fill={GREEN} weight={700}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={sx(4)} y={455} size={15} fill={GREEN} weight={700}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={sx(0.5)} y={545} size={15} fill={RED} weight={700}>
          −
        </T>
      </Fade>
    </Scene>
  );
}
