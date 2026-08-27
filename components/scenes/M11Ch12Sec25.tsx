/**
 * M11 Ch12 · Section 25 — "The product rule, and simplify-before-you-differentiate"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Worked example: the product
 * rule") -> always-on title, distinct from the DB title above. TWO examples stacked with a
 * divider (Sec5/Sec12 pattern): Example 1 (top, y88-327) applies the product rule to
 * y = x³sin x; Example 2 (bottom, y346-590) is the speed trap — simplify (x²+1)/x = x+x⁻¹
 * BEFORE differentiating, instead of reaching for the quotient rule.
 *
 * VERIFICATION (worked by hand before laying out pixels):
 *  Ex1: y=x³sin x, u=x³,v=sin x. u'=3x², v'=cos x. Product rule dy/dx=u'v+uv'=3x²sin x+x³cos x.
 *   Factor x²: x²(3sin x + x cos x) — dividing x³cos x by x² gives x·cos x ✓. Matches seq4.
 *  Ex2: y=(x²+1)/x = x²/x + 1/x = x + x⁻¹ ✓. dy/dx = 1 + (−1)x⁻² = 1 − x⁻² = 1 − 1/x² ✓.
 *   Matches seq7. Negative exponents are literal digits (−1,−2), so per the numeric-vs-symbolic
 *   superscript split (unlike x^n's symbolic n) real superscript-minus-digit is correct: x⁻¹, x⁻²
 *   (U+207B + superscript digit), same glyphs already verified safe via chemistry's C11 scenes.
 *
 * board_reveal_at_english  = [0.0, 8.02, 17.92, 25.0, 44.71, 55.04, 67.84, 81.75] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 7.17, 18.52, 25.77, 43.35, 51.88, 65.96, 77.65].
 *
 * Beats:
 *  0(title, always-on) | "Worked example: the product rule"
 *  1 | seq2 (normal) — state y = x³sin x, identify u = x³, v = sin x (two amber chips)
 *  2 | seq3 (normal) — the derivatives: u' = 3x², v' = cos x
 *  3 | seq4 (HIGH) — apply the rule, land it boxed+ringed: x²(3sin x + x cos x)
 *  4 | seq5 (normal) — Ex2 heading + given y=(x²+1)/x + staged crossed-out "quotient rule?"
 *      instinct, an arrow pointing from the given at the tempting-but-slow move
 *  5 | seq6 (normal, green) — the smart rewrite: y = (x²+1)/x = x + x⁻¹
 *  6 | seq7 (normal, boxed — less emphasis than beat3's HIGH, per spec) — term-by-term:
 *      dy/dx = 1 − x⁻² = 1 − 1/x², boxed + checkmark (no ring)
 *  7 | seq8 (red-margin, HIGH) — closing guardrail: "Always ask: can I simplify first?"
 *
 * Layout plan (x-range × y-range per element; Anek sans unless noted script):
 *  title (script,size26,mid,x540)                    | Fade | EN x311..769 / HI x340..740, y58
 *  b1 given "y = x³ sin x" (20,ink,mid)               | T    | x480..600  y88.4..110.2 (bl104)
 *  b1 underline                                        | Draw | x480..600 y122
 *  b1 Chip "u = x³" (18,amber_dark)                    | Chip | x421..511 y136..172
 *  b1 Chip "v = sin x" (18,amber_dark)                 | Chip | x541..659 y136..172
 *  b2 "u' = 3x²" (19,ink,start)                        | T    | x430..506 y201.2..222 (bl216)
 *  b2 "v' = cos x" (19,ink,start)                      | T    | x556..651 y201.2..222 (bl216)
 *  b2 underline                                        | Draw | x430..651 y232
 *  b3 leading "dy/dx = 3x²sin x + x³cos x =" (19,ink,start) | T | x284..550 y269.2..289.9 (bl284)
 *  b3 Chip "x²(3sin x + x cos x)" (18,green)           | Chip | x572..802 y264..304
 *  b3 ring around chip                                  | Draw | ringD(687,284,129,32) → x558..822 y242.4..327.2
 *  divider (beat>=4)                                    | Draw | x100..980 y346
 *  b4 heading "Speed trap..." (16,red,w800,mid)         | T    | EN x360..720 y359.5..377 (bl372)
 *  b4 underline                                         | Draw | x360..720 y388
 *  b4 given "y = (x²+1)/x" (18,ink,start)               | T    | x400..508 y401.96..421.58 (bl416)
 *  b4 arrow → trap label                                 | Draw | arrowD(520,412,557,412)
 *  b4 "quotient rule?" (15,red,w700,start)               | T    | x562..667 y404.3..420.65 (bl416)
 *  b4 crossD over it                                      | Draw | crossD(562,404.3,105,16.35)
 *  b5 smart rewrite "y = (x²+1)/x = x + x⁻¹" (19,green_dark,mid) | T | x435.5..644.5 y447.2..467.9 (bl462)
 *  b5 underline                                           | Draw | x436..644 y480
 *  b6 leading "dy/dx = 1 − x⁻² =" (19,ink,start)          | T    | x360..521.5 y505.2..525.9 (bl520)
 *  b6 Chip "1 − 1/x²" (19,green)                          | Chip | x540..650 y500..538
 *  b6 checkD beside chip                                   | Draw | checkD(668,519,16)
 *  b7 red bar                                              | Draw | x60 y556..590
 *  b7 note (16,red,w800,start)                             | T    | EN x80..480 / HI x80..448, y565.5..583 (bl578)
 * Ends y590, safe bottom 596 → 6px spare.
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  ringD,
  crossD,
  arrowD,
  Scene,
} from '@/components/scenes/kit';
import { checkD } from "./math-kit";

export default function M11Ch12Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Worked example: the product rule", "Worked example: product rule")}
        </T>
      </Fade>

      {/* ===================== EXAMPLE 1 ===================== */}

      {/* beat 1 — state y = x³sin x, identify u and v (two factors) */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={20} fill={INK} anchor="middle" weight={700}>
          y = x³ sin x
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M480 122 L600 122" stroke={AMBER_DARK} sw={1.6} delay={dl(1, 0.5)} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Chip x={421} y={136} w={90} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          u = x³
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={541} y={136} w={118} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          v = sin x
        </Chip>
      </Fade>

      {/* beat 2 — the derivatives */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={430} y={216} size={19} fill={INK} anchor="start" weight={700}>
          {"u' = 3x²"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={556} y={216} size={19} fill={INK} anchor="start" weight={700}>
          {"v' = cos x"}
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M430 232 L651 232" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 0.9)} dur={0.6} />

      {/* beat 3 — apply the rule, land it boxed + ringed (HIGH) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={284} y={284} size={19} fill={INK} anchor="start" weight={700}>
          {"dy/dx = 3x²sin x + x³cos x ="}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <Chip x={572} y={264} w={230} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          x²(3sin x + x cos x)
        </Chip>
      </Fade>
      <Draw on={beat >= 3} d={ringD(687, 284, 129, 32)} stroke={GREEN} sw={2} delay={dl(3, 1.4)} dur={0.8} />

      {/* divider between the two examples */}
      <Draw on={beat >= 4} d="M100 346 L980 346" stroke={AMBER_DARK} sw={1} delay={dl(4, 0)} />

      {/* ===================== EXAMPLE 2 (speed trap) ===================== */}

      {/* beat 4 — heading, given, stage the crossed-out "reach for quotient rule" instinct */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={372} size={16} fill={RED} anchor="middle" weight={800}>
          {t("Speed trap: simplify before you differentiate", "Speed trap: pehle simplify kijiye")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M360 388 L720 388" stroke={RED} sw={1.6} delay={dl(4, 0.8)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={400} y={416} size={18} fill={INK} anchor="start" weight={700}>
          {"y = (x²+1)/x"}
        </T>
      </Fade>
      <Draw on={beat >= 4} d={arrowD(520, 412, 557, 412)} stroke={MUTED} sw={1.6} delay={dl(4, 1.6)} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={562} y={416} size={15} fill={RED} anchor="start" weight={700}>
          quotient rule?
        </T>
      </Fade>
      <Draw on={beat >= 4} d={crossD(562, 404.3, 105, 16.35)} stroke={RED} sw={2.2} delay={dl(4, 2.3)} dur={0.5} />

      {/* beat 5 — the smart rewrite */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={462} size={19} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"y = (x²+1)/x = x + x⁻¹"}
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M436 480 L644 480" stroke={GREEN} sw={1.6} delay={dl(5, 0.7)} dur={0.6} />

      {/* beat 6 — term-by-term differentiation, landed boxed (less emphasis than beat3) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={360} y={520} size={19} fill={INK} anchor="start" weight={700}>
          {"dy/dx = 1 − x⁻² ="}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Chip x={540} y={500} w={110} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={19} script={false}>
          {"1 − 1/x²"}
        </Chip>
      </Fade>
      <Draw on={beat >= 6} d={checkD(668, 519, 16)} stroke={GREEN} sw={2.2} delay={dl(6, 1.1)} dur={0.5} />

      {/* beat 7 — closing red-margin habit guardrail (HIGH) */}
      <Draw on={beat >= 7} d="M60 556 L60 590" stroke={RED} sw={3} delay={dl(7, 0)} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={80} y={578} size={16} fill={RED} anchor="start" weight={800}>
          {t("Always ask: can I simplify before I differentiate?", "Hamesha poochiye: pehle simplify ho sakta hai?")}
        </T>
      </Fade>
    </Scene>
  );
}
