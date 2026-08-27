/**
 * M11 Ch04 · Section 7 — "Worked: arithmetic and powers of i"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — three small problems, each: given → step →
 * answer ringed green. No speed-trap flag on this section, so no cross-outs.
 *
 * Beats (board_reveal_at_english [0, 8.11, 20.48, 33.02, 50.52, 56.92, 68.1, 82.69]):
 *  0 heading: warm-up — add, multiply, powers of i
 *  1 Problem A: (3+2i)+(-6+5i) = -3+7i, answer ringed
 *  2 Problem B setup: (2+3i)(1-4i) = 2-8i+3i-12i²
 *  3 Problem B simplify: = 2-5i+12 = 14-5i, answer ringed
 *  4 Problem C given: i¹³⁵ + i⁻⁵⁰
 *  5 Problem C term 1: 135=4×33+3 ⇒ i¹³⁵=i³=-i
 *  6 Problem C term 2: i⁻⁵⁰=i⁻⁵⁰⁺⁵²=i²=-1
 *  7 verdict: Sum = -1 - i, boxed green, + red-margin method note
 *
 * Layout plan:
 *  b0 | heading (17,amber_dark)         | T mid    | x540 y102
 *  b0 | underline                        | Draw     | x420..660 y118
 *  b1 | given/answer row + green ring    | T        | y162, ring cy158 rx47 ry21
 *  b2 | expand row (16,ink)              | T mid    | x540 y230
 *  b3 | simplify/answer row + green ring | T        | y266, ring cy262 rx47 ry21
 *  b4 | given (MathLine,18,ink)          | T        | x504 y330
 *  b5 | term-1 solved (MathLine,16,ink)  | T        | x413 y374
 *  b6 | term-2 solved (MathLine,16,ink)  | T        | x456 y416
 *  b7 | green chip "Sum = -1 - i"        | Chip     | x440..640 y445..483
 *  b7 | red method note                  | T mid    | x540 y505
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

type Part = string | { sup: string };
function MathLine({
  x,
  y,
  size,
  fill,
  parts,
  weight = 700,
}: {
  x: number;
  y: number;
  size: number;
  fill: string;
  parts: Part[];
  weight?: number;
}) {
  let cx = x;
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === "string") {
          const w = p.length * size * 0.52;
          const el = (
            <T key={i} x={cx} y={y} size={size} fill={fill} anchor="start" weight={weight}>
              {p}
            </T>
          );
          cx += w;
          return el;
        }
        const es = size * 0.62;
        const w = p.sup.length * es * 0.52;
        const el = (
          <T key={i} x={cx} y={y - size * 0.42} size={es} fill={fill} anchor="start" weight={weight}>
            {p.sup}
          </T>
        );
        cx += w;
        return el;
      })}
    </>
  );
}

export default function M11Ch04Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Arithmetic and Powers of i", "Worked: Arithmetic aur Powers of i")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Warm-up: add, multiply, powers of i", "Warm-up: add, multiply, powers of i")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 420 118 L 660 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — Problem A */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={480} y={162} size={16} fill={INK} anchor="end" weight={700}>(3+2i) + (-6+5i) =</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={500} y={162} size={16} fill={GREEN_DARK} anchor="start" weight={700}>-3 + 7i</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={ringD(533.3, 158.16, 47.3, 20.72)} stroke={GREEN} sw={2.2} dur={0.7} />

      {/* beat 2 — Problem B setup */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={230} size={16} fill={INK} anchor="middle" weight={700}>
          (2 + 3i)(1 - 4i) = 2 - 8i + 3i - 12i²
        </T>
      </Fade>

      {/* beat 3 — Problem B simplify */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={480} y={266} size={16} fill={INK} anchor="end" weight={700}>2 - 5i + 12 =</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={500} y={266} size={16} fill={GREEN_DARK} anchor="start" weight={700}>14 - 5i</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={ringD(533.3, 262.16, 47.3, 20.72)} stroke={GREEN} sw={2.2} dur={0.7} />

      {/* beat 4 — Problem C given */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <MathLine x={504} y={330} size={18} fill={INK} parts={["i", { sup: "135" }, "+i", { sup: "-50" }]} />
      </Fade>

      {/* beat 5 — Problem C term 1 */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <MathLine
          x={413}
          y={374}
          size={16}
          fill={INK}
          parts={["135 = 4×33+3  ⇒  i", { sup: "135" }, " = i", { sup: "3" }, " = -i"]}
        />
      </Fade>

      {/* beat 6 — Problem C term 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <MathLine
          x={456}
          y={416}
          size={16}
          fill={INK}
          parts={["i", { sup: "-50" }, " = i", { sup: "-50+52" }, " = i", { sup: "2" }, " = -1"]}
        />
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={440} y={445} w={200} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          Sum = -1 - i
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={540} y={505} size={12} fill={RED} anchor="middle" script>
          {t("(divide the exponent by 4, keep the remainder)", "(exponent ko 4 se divide karo, remainder rakho)")}
        </T>
      </Fade>
    </Scene>
  );
}
