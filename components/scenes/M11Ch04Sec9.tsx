/**
 * M11 Ch04 · Section 9 — "Worked: inverse & the purely-real condition"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two JEE-Main flavoured problems: (A) the
 * multiplicative inverse of z=3-4i with its own sanity check [beats 1-3],
 * (B) the purely-real condition, ending on θ=nπ, ringed red per its own
 * red-margin flag [beats 4-7].
 *
 * Beats (board_reveal_at_english [0, 6.74, 17.58, 29.53, 45.99, 58.2, 74.67, 87.47]):
 *  0 heading: inverse, and "when is it purely real?"
 *  1 Problem A: z=3-4i, a²+b²=9+16=25
 *  2 Problem A formula (high), boxed: z⁻¹=(3+4i)/25=3/25+4/25 i
 *  3 Problem A sanity check, green chip: (3-4i)(3+4i)/25=25/25=1 ✓
 *  4 Problem B given: is z=(3+2i sinθ)/(1-2i sinθ) purely real?
 *  5 Problem B cleared: z=[(3-4sin²θ)+8i sinθ]/(1+4sin²θ)
 *  6 Problem B vanish condition: imaginary part=0 ⇒ 8 sinθ=0
 *  7 verdict (red-margin), ringed: θ = nπ, n ∈ Z
 *
 * Layout plan:
 *  b0 | heading (17,amber_dark)          | T mid  | x540 y102
 *  b0 | underline                         | Draw   | x420..660 y118
 *  b1 | text (16,ink)                     | T mid  | x540 y150
 *  b2 | MathLine z⁻¹=... + box (amber)    | T+Draw | x401 y195, box x380..800 y172..214
 *  b3 | green chip check                  | Chip   | x310..770 y240..278
 *  b4 | given (15,ink)                    | T mid  | x540 y320
 *  b5 | cleared formula (15,ink)          | T mid  | x540 y362
 *  b6 | vanish condition (15,ink)         | T mid  | x540 y403
 *  b7 | θ=nπ text + red ring              | T+Draw | x540 y450, ring cx540 cy446 rx80 ry22
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

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

export default function M11Ch04Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Inverse & the Purely-Real Condition", "Worked: Inverse aur Purely-Real Condition")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Inverse, and ‘when is it purely real?’", "Inverse, aur ‘purely real kab hai?’")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 420 118 L 660 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — Problem A: compute a²+b² */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={150} size={16} fill={INK} anchor="middle" weight={700}>
          z = 3 - 4i:  a² + b² = 9 + 16 = 25
        </T>
      </Fade>

      {/* beat 2 — Problem A formula (high), boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <MathLine
          x={401.5}
          y={195}
          size={17}
          fill={INK}
          parts={["z", { sup: "-1" }, " = (3+4i)/25 = 3/25 + 4/25 i"]}
        />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={roundRectD(380, 172, 420, 42, 10)} stroke={AMBER_DARK} sw={2} dur={0.6} />

      {/* beat 3 — Problem A sanity check */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={310} y={240} w={460} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          Check: (3-4i)(3+4i)/25 = 25/25 = 1 ✓
        </Chip>
      </Fade>

      {/* beat 4 — Problem B given */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={320} size={15} fill={INK} anchor="middle">
          {t(
            "For real θ: is z = (3+2i·sinθ)/(1-2i·sinθ) purely real?",
            "Real θ ke liye: z = (3+2i·sinθ)/(1-2i·sinθ) purely real hai?"
          )}
        </T>
      </Fade>

      {/* beat 5 — Problem B cleared denominator */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={362} size={15} fill={INK} anchor="middle" weight={700}>
          z = [(3-4sin²θ) + 8i·sinθ] / (1+4sin²θ)
        </T>
      </Fade>

      {/* beat 6 — vanish condition */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={403} size={15} fill={INK} anchor="middle" weight={700}>
          {t("Purely real ⇒ imaginary part = 0:  8 sinθ = 0", "Purely real ⇒ imaginary part = 0:  8 sinθ = 0")}
        </T>
      </Fade>

      {/* beat 7 — verdict, ringed */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={450} size={18} fill={INK} anchor="middle" weight={700}>
          θ = nπ, n ∈ Z
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d={ringD(540, 445.7, 80, 22)} stroke={RED} sw={2.2} dur={0.8} />
    </Scene>
  );
}
