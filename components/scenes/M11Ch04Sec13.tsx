/**
 * M11 Ch04 · Section 13 — "Conjugate properties"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — the conjugate's algebraic toolkit, built identity by identity.
 *
 * Beats (board_reveal_at_english [0, 6.74, 17.41, 29.53, 37.72, 55.81, 65.71, 75.35]):
 *  0 anchor: heading "what the conjugate does to sums and products"
 *  1 represent: three mini-identities — (z̄)‾=z, z+z̄=2Re(z), z-z̄=2i·Im(z)
 *  2 explain: adding kills Im, subtracting kills Re
 *  3 land (boxed, high emphasis): z·z̄ = a²+b² = |z|² — the star property
 *  4 explain: mirror-image product is a non-negative real (squared distance)
 *  5 represent: conjugate of product / conjugate of sum-diff
 *  6 guardrail (red-margin): conjugate of a product is a PRODUCT, not a sum
 *  7 explain: same for quotients, and (zⁿ)‾ = (z̄)ⁿ
 *
 * Uses a local `Bar` helper (T + Overline pair) for every conjugate glyph — the
 * bar's textWidth/anchor always match the T call it sits above (or, for a
 * product conjugate, the combined span of both T calls it sits above — see
 * comment on `Bar`). Subscripts (z₁, z₂) use native Unicode subscript digits
 * inside the SAME <T> call, so the bar's textWidth can stay narrow (covers
 * only "z", not the subscript) while both live in one text node for correct
 * kerning. `double` renders a second stacked bar (conjugate-of-conjugate).
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)      | T mid  | x540  y92
 *  b1 | identity A "z̿=z"                  | Bar×2  | x140..192 y136 size20 (Overline #1,#2 stacked)
 *  b1 | identity B "z+z̄=2Re(z)"           | Bar    | x380..512 y136 size18 (Overline #3)
 *  b1 | identity C "z-z̄=2i·Im(z)"         | Bar    | x650..800 y136 size18 (Overline #4)
 *  b2 | explain (15,ink)                  | T mid  | x540  y182
 *  b3 | boxed star "z z̄=a²+b²=|z|²"       | Draw+  | box x340..740 y212..264 (Overline #5)
 *  b4 | explain (15,ink)                  | T mid  | x540  y300
 *  b5 | product rule "(z1z2)‾=z̄1·z̄2"      | Bar×3  | x140..270 y350 (Overline #6,#7,#8)
 *  b5 | sum rule "(z1±z2)‾=z̄1±z̄2"         | Bar×3  | x620..759 y350 (Overline #9,#10,#11)
 *  b6 | red bar + guardrail formula/text  | Draw+  | x60 y394..422, formula x76 y410 (Overline #12,#13)
 *  b7 | line A explain (15,ink)           | T mid  | x540  y456
 *  b7 | line B "(zⁿ)‾=(z̄)ⁿ" (amber_dark)  | Bar×2  | x500..575 y490 (Overline #14,#15)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

/**
 * A drawn overline over `text` (default "z"). `barWidth` controls how much of
 * the rendered text the bar actually covers: a bare "z"/"z₁" bars only the
 * base letter (subscript sits outside, unbarred); a joint token like "z₁z₂"
 * or "zⁿ" passes barWidth = the full estimated text width so the bar spans
 * the whole conjugated expression. `double` adds a second bar shifted up
 * (conjugate-of-a-conjugate). x/y/size/anchor always match the T call below.
 */
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
  double = false,
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
  double?: boolean;
}) {
  const w = barWidth ?? size * 0.6;
  const top = y - 0.78 * size - 3;
  const x1 = anchor === "middle" ? x - w / 2 : anchor === "end" ? x - w : x;
  const x2 = anchor === "middle" ? x + w / 2 : anchor === "end" ? x : x + w;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          {text}
        </T>
      </Fade>
      <Overline on={on} delay={delay + 0.15} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
      {double && (
        <Draw on={on} delay={delay + 0.3} d={`M ${x1} ${top - 5} L ${x2} ${top - 5}`} stroke={fill} sw={2} dur={0.4} />
      )}
    </>
  );
}

export default function M11Ch04Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Conjugate Properties", "Conjugate ki Properties")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("What the conjugate does to sums and products", "Sum aur product par conjugate kya karta hai")}
        </T>
      </Fade>

      {/* beat 1 — three mini identities */}
      {/* A: (z̄)‾ = z  — double bar = conjugate of a conjugate */}
      <Bar on={beat >= 1} delay={dl(1, 0)} x={140} y={136} size={20} double text="z" barWidth={12} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={162} y={136} size={20} fill={INK} anchor="start" weight={700}>=</T>
        <T x={182} y={136} size={20} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>

      {/* B: z + z̄ = 2Re(z) */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={380} y={136} size={18} fill={INK} anchor="start" weight={700}>z</T>
        <T x={399} y={136} size={18} fill={INK} anchor="start" weight={700}>+</T>
      </Fade>
      <Bar on={beat >= 1} delay={dl(1, 1.1)} x={418} y={136} size={18} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={439} y={136} size={18} fill={INK} anchor="start" weight={700}>=</T>
        <T x={458} y={136} size={18} fill={INK} anchor="start" weight={700}>2Re(z)</T>
      </Fade>

      {/* C: z - z̄ = 2i·Im(z) */}
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={650} y={136} size={18} fill={INK} anchor="start" weight={700}>z</T>
        <T x={669} y={136} size={18} fill={INK} anchor="start" weight={700}>-</T>
      </Fade>
      <Bar on={beat >= 1} delay={dl(1, 2.0)} x={688} y={136} size={18} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={709} y={136} size={18} fill={INK} anchor="start" weight={700}>=</T>
        <T x={728} y={136} size={18} fill={INK} anchor="start" weight={700}>2i·Im(z)</T>
      </Fade>

      {/* beat 2 — explain */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={182} size={15} fill={INK} anchor="middle">
          {t(
            "Adding kills the imaginary part; subtracting kills the real part.",
            "Add karne se imaginary part khatam; subtract karne se real part khatam."
          )}
        </T>
      </Fade>

      {/* beat 3 — land (boxed): the star property */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(340, 212, 400, 52)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={420} y={245} size={22} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>
      <Bar on={beat >= 3} delay={dl(3, 1.0)} x={443} y={245} size={22} barWidth={13.2} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={470} y={245} size={22} fill={INK} anchor="start" weight={700}>
          = a² + b² = |z|²
        </T>
      </Fade>

      {/* beat 4 — explain */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={300} size={15} fill={INK} anchor="middle">
          {t(
            "Multiplying by its mirror image gives a non-negative real — the squared distance.",
            "Mirror image se multiply karne se milta hai ek non-negative real — squared distance."
          )}
        </T>
      </Fade>

      {/* beat 5 — conjugate of product / sum-diff */}
      <Bar on={beat >= 5} delay={dl(5, 0)} x={140} y={350} size={18} text="z₁z₂" barWidth={36} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={186} y={350} size={18} fill={INK} anchor="start" weight={700}>=</T>
      </Fade>
      <Bar on={beat >= 5} delay={dl(5, 0.6)} x={205} y={350} size={18} text="z₁" />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={233} y={350} size={18} fill={INK} anchor="start" weight={700}>·</T>
      </Fade>
      <Bar on={beat >= 5} delay={dl(5, 1.2)} x={252} y={350} size={18} text="z₂" />

      <Bar on={beat >= 5} delay={dl(5, 1.6)} x={620} y={350} size={18} text="z₁±z₂" barWidth={45} />
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={675} y={350} size={18} fill={INK} anchor="start" weight={700}>=</T>
      </Fade>
      <Bar on={beat >= 5} delay={dl(5, 2.2)} x={694} y={350} size={18} text="z₁" />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={722} y={350} size={18} fill={INK} anchor="start" weight={700}>±</T>
      </Fade>
      <Bar on={beat >= 5} delay={dl(5, 2.8)} x={741} y={350} size={18} text="z₂" />

      {/* beat 6 — guardrail: product, not a sum */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 394 L 60 422" stroke={RED} sw={4} dur={0.4} />
      <Bar on={beat >= 6} delay={dl(6, 0.4)} x={76} y={410} size={18} fill={RED} text="z₁z₂" barWidth={36} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={122} y={410} size={18} fill={RED} anchor="start" weight={700}>=</T>
      </Fade>
      <Bar on={beat >= 6} delay={dl(6, 1.0)} x={141} y={410} size={18} fill={RED} text="z₁" />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={169} y={410} size={18} fill={RED} anchor="start" weight={700}>·</T>
      </Fade>
      <Bar on={beat >= 6} delay={dl(6, 1.6)} x={188} y={410} size={18} fill={RED} text="z₂" />
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={216} y={410} size={18} fill={RED} anchor="start" weight={700}>
          {t("— a PRODUCT, not a sum!", "— ek PRODUCT, sum nahi!")}
        </T>
      </Fade>

      {/* beat 7 — explain: quotients and powers extend the same way */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={456} size={15} fill={INK} anchor="middle">
          {t(
            "Conjugate of a quotient is the quotient of conjugates;",
            "Quotient ka conjugate hai conjugates ka quotient;"
          )}
        </T>
      </Fade>
      <Bar on={beat >= 7} delay={dl(7, 0.5)} x={500} y={490} size={18} fill={AMBER_DARK} text="zⁿ" barWidth={18} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={528} y={490} size={18} fill={AMBER_DARK} anchor="start" weight={700}>=</T>
      </Fade>
      <Bar on={beat >= 7} delay={dl(7, 1.1)} x={547} y={490} size={18} fill={AMBER_DARK} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={566} y={490} size={18} fill={AMBER_DARK} anchor="start" weight={700}>ⁿ</T>
      </Fade>
    </Scene>
  );
}
