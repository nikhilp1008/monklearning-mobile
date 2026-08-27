/**
 * M11 Ch04 · Section 16 — "Modulus & conjugate: the toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a consolidated reference board; every identity is
 * assembled term by term (same discipline as the concept sections before it),
 * revealed in the order the chapter taught them.
 *
 * Beats (board_reveal_at_english [0, 6.91, 16.38, 25, 37.03, 50.09, 60.42, 74.33]):
 *  0 heading: "consolidated properties"
 *  1 three basics: z̄=a-ib; z+z̄=2Re(z); z-z̄=2i·Im(z)
 *  2 boxed (high): z·z̄ = |z|² = a²+b²
 *  3 conjugate over operations: product / quotient / power
 *  4 modulus over operations: product / quotient / power (no conjugate, no bars)
 *  5 boxed (high): z⁻¹ = z̄/|z|² = (a-ib)/(a²+b²)
 *  6 special case: on |z|=1, z̄ = 1/z
 *  7 guardrail (red, boxed): the one identity to internalize — z·z̄ = |z|²
 *
 * Layout plan (all rows centered around x540, stacked top to bottom):
 *  b0 | heading (15,amber_dark,w700)      | T mid  | x540  y86
 *  b1 | 3 basics (16,ink,w700)             | T st   | x120/340/580 y122 (Overline #1,2,3)
 *  b2 | boxed star                        | Draw+T | box x370..710 y145..187 (Overline #4)
 *  b3 | conj-over-ops, one line (15,ink)   | T st   | x90  y225 (Overline #5,6,7,8,9)
 *  b4 | modulus-over-ops, one line (15)    | T mid  | x540 y265
 *  b5 | boxed inverse                     | Draw+T | box x300..780 y290..336 (Overline #10)
 *  b6 | unit-circle special case (15,ink)  | T st   | x400 y375 (Overline #11)
 *  b7 | guardrail caption + boxed formula  | T mid  | caption y410; box x400..680 y418..464 (Overline #12)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

/** T + Overline pair — see M11Ch04Sec13.tsx for the full contract this mirrors:
 * `barWidth` covers only what's actually conjugated (a bare "z"/"z₁" bars just
 * the letter; a joint token bars the whole visible text). x/y/size/anchor of
 * the Overline always match the T call it sits above. */
function Bar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
  text = "z",
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

export default function M11Ch04Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Modulus & Conjugate: The Toolkit", "Modulus & Conjugate: Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Consolidated properties", "Consolidated properties")}
        </T>
      </Fade>

      {/* beat 1 — three basics */}
      <Bar on={beat >= 1} delay={dl(1, 0)} x={120} y={122} size={16} barWidth={9.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={136} y={122} size={16} fill={INK} anchor="start" weight={700}>= a - ib</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={340} y={122} size={16} fill={INK} anchor="start" weight={700}>z</T>
        <T x={356} y={122} size={16} fill={INK} anchor="start" weight={700}>+</T>
      </Fade>
      <Bar on={beat >= 1} delay={dl(1, 0.9)} x={372} y={122} size={16} barWidth={9.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={390} y={122} size={16} fill={INK} anchor="start" weight={700}>= 2Re(z)</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={580} y={122} size={16} fill={INK} anchor="start" weight={700}>z</T>
        <T x={596} y={122} size={16} fill={INK} anchor="start" weight={700}>-</T>
      </Fade>
      <Bar on={beat >= 1} delay={dl(1, 1.8)} x={612} y={122} size={16} barWidth={9.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={630} y={122} size={16} fill={INK} anchor="start" weight={700}>= 2i·Im(z)</T>
      </Fade>

      {/* beat 2 — boxed star property */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(370, 145, 340, 42)} stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={420} y={172} size={18} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>
      <Bar on={beat >= 2} delay={dl(2, 0.9)} x={442} y={172} size={18} barWidth={10.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={465} y={172} size={18} fill={INK} anchor="start" weight={700}>= |z|² = a² + b²</T>
      </Fade>

      {/* beat 3 — conjugate over operations */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={90} y={225} size={15} fill={INK} anchor="start" weight={700}>conj(z₁z₂) = </T>
      </Fade>
      <Bar on={beat >= 3} delay={dl(3, 0.3)} x={199} y={225} size={15} text="z₁" />
      <Bar on={beat >= 3} delay={dl(3, 0.5)} x={214} y={225} size={15} text="z₂" />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={239} y={225} size={15} fill={INK} anchor="start" weight={700}>, conj(z₁/z₂) = </T>
      </Fade>
      <Bar on={beat >= 3} delay={dl(3, 1.1)} x={377} y={225} size={15} text="z₁" />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={392} y={225} size={15} fill={INK} anchor="start" weight={700}>/</T>
      </Fade>
      <Bar on={beat >= 3} delay={dl(3, 1.5)} x={400} y={225} size={15} text="z₂" />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={425} y={225} size={15} fill={INK} anchor="start" weight={700}>, conj(zⁿ) = </T>
      </Fade>
      <Bar on={beat >= 3} delay={dl(3, 2.1)} x={508} y={225} size={15} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={516} y={225} size={15} fill={INK} anchor="start" weight={700}>ⁿ</T>
      </Fade>

      {/* beat 4 — modulus over operations */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={265} size={15} fill={INK} anchor="middle">
          |z₁z₂| = |z₁||z₂|,  |z₁/z₂| = |z₁|/|z₂|,  |zⁿ| = |z|ⁿ
        </T>
      </Fade>

      {/* beat 5 — boxed inverse formula */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(300, 290, 480, 46)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={340} y={320} size={20} fill={INK} anchor="start" weight={700}>z⁻¹ = </T>
      </Fade>
      <Bar on={beat >= 5} delay={dl(5, 1.1)} x={410} y={320} size={20} barWidth={12} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={430} y={320} size={20} fill={INK} anchor="start" weight={700}>
          /|z|² = (a - ib)/(a² + b²)
        </T>
      </Fade>

      {/* beat 6 — unit-circle special case */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={400} y={375} size={15} fill={INK} anchor="start">
          {t("On |z| = 1:  ", "|z| = 1 par:  ")}
        </T>
      </Fade>
      <Bar on={beat >= 6} delay={dl(6, 0.4)} x={507} y={375} size={15} weight={700} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={524} y={375} size={15} fill={INK} anchor="start" weight={700}>= 1/z</T>
      </Fade>

      {/* beat 7 — guardrail: the one identity to internalize */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={402} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Internalize this one!", "Isko yaad rakho!")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d={roundRectD(400, 418, 280, 46)} stroke={RED} sw={2.5} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={480} y={448} size={20} fill={RED} anchor="start" weight={700}>z</T>
      </Fade>
      <Bar on={beat >= 7} delay={dl(7, 1.3)} x={502} y={448} size={20} fill={RED} barWidth={12} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={526} y={448} size={20} fill={RED} anchor="start" weight={700}>= |z|²</T>
      </Fade>
    </Scene>
  );
}
