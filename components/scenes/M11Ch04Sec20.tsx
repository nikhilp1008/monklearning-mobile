/**
 * M11 Ch04 · Section 20 — "Pitfalls & pro-tips: modulus and conjugate"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid sequence of ringed/boxed pitfalls, one per beat.
 * Traps (b1-b4, RED) accumulate first, then pro-tips (b5-b7, GREEN) — matching
 * the narration's own turn ("Now the pro-tips...") at beat 5.
 *
 * Beats (board_reveal_at_english [0, 7.17, 19.54, 30.04, 40.36, 51.8, 64.51, 74.07]):
 *  0 heading: "the classic modulus / conjugate traps"
 *  1 trap (boxed, red): |z1+z2| ≠ |z1|+|z2| in general
 *  2 trap (boxed, red): never write |z| = ±z
 *  3 trap (boxed, red): z̄ flips only the imaginary sign; -z flips both
 *  4 trap (boxed, red): z z̄ = |z|² — not (z̄)² and not |z|
 *  5 pro-tip (boxed, green): E real ⇔ E=Ē; imaginary ⇔ E+Ē=0
 *  6 pro-tip (boxed, green): moduli of products/powers/quotients — factor by factor
 *  7 pro-tip (boxed, green, finale): on |z|=1, substitute z̄ = 1/z
 *
 * Layout plan (2×3 grid of trap/tip cards, plus a full-width finale row):
 *  b0 | heading (15,amber_dark,w700)      | T mid  | x540  y90
 *  b1 | card 1 (red)                      | Draw+T | box x60..520  y115..175
 *  b2 | card 2 (red)                      | Draw+T | box x560..1020 y115..175
 *  b3 | card 3 (red, 2 lines + bar)       | Draw+T | box x60..520  y245..321 (Overline #1)
 *  b4 | card 4 (red, 1 line, 2 bars)      | Draw+T | box x560..1020 y245..321 (Overline #2,3)
 *  b5 | card 5 (green, 2 lines, 2 bars)   | Draw+T | box x60..520  y345..421 (Overline #4,5)
 *  b6 | card 6 (green, 1 line)            | Draw+T | box x560..1020 y345..421
 *  b7 | finale card (green, 1 line + bar) | Draw+T | box x200..880 y470..534 (Overline #6)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

/** T + Overline pair — see M11Ch04Sec13.tsx for the full contract. */
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

export default function M11Ch04Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Pitfalls & Pro-Tips: Modulus and Conjugate", "Pitfalls & Pro-Tips: Modulus aur Conjugate")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The classic modulus / conjugate traps", "Modulus / conjugate ke classic traps")}
        </T>
      </Fade>

      {/* beat 1 — trap: triangle-inequality mix-up */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(60, 115, 460, 60)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={290} y={150} size={14} fill={RED} anchor="middle" weight={700}>
          {t(
            "|z₁+z₂| ≠ |z₁|+|z₂| in general — only ≤ holds!",
            "|z₁+z₂| ≠ |z₁|+|z₂| generally — sirf ≤ chalta hai!"
          )}
        </T>
      </Fade>

      {/* beat 2 — trap: modulus sign */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(560, 115, 460, 60)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={790} y={150} size={14} fill={RED} anchor="middle" weight={700}>
          {t(
            "Never write |z| = ±z — it's a single ≥0 real!",
            "Kabhi |z| = ±z mat likho — ye ek single ≥0 real hai!"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap: conjugate vs additive inverse */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(60, 245, 460, 76)} stroke={RED} sw={2} dur={0.6} />
      <Bar on={beat >= 3} delay={dl(3, 0.8)} x={76} y={278} size={14} fill={RED} barWidth={8.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={95} y={278} size={14} fill={RED} anchor="start" weight={700}>
          {t("flips ONLY the imaginary sign;", "SIRF imaginary sign flip karta hai;")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={76} y={308} size={14} fill={RED} anchor="start" weight={700}>
          {t("-z flips BOTH — don't confuse them!", "-z DONO flip karta hai — confuse mat karo!")}
        </T>
      </Fade>

      {/* beat 4 — trap: z z̄ is not (z̄)² and not |z| */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(560, 245, 460, 76)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={580} y={288} size={14} fill={RED} anchor="start" weight={700}>z</T>
      </Fade>
      <Bar on={beat >= 4} delay={dl(4, 0.9)} x={597} y={288} size={14} fill={RED} barWidth={8.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={614} y={288} size={14} fill={RED} anchor="start" weight={700}>= |z|² — not (</T>
      </Fade>
      <Bar on={beat >= 4} delay={dl(4, 1.5)} x={736} y={288} size={14} fill={RED} barWidth={8.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={753} y={288} size={14} fill={RED} anchor="start" weight={700}>)² and not |z|!</T>
      </Fade>

      {/* beat 5 — pro-tip: real / purely-imaginary test */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(60, 345, 460, 76)} stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={76} y={378} size={14} fill={INK} anchor="start" weight={700}>Pro-tip: E real ⇔ E = </T>
      </Fade>
      <Bar on={beat >= 5} delay={dl(5, 1.1)} x={240} y={378} size={14} text="E" barWidth={7} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={249} y={378} size={14} fill={INK} anchor="start" weight={700}>;</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={76} y={408} size={14} fill={INK} anchor="start" weight={700}>imaginary ⇔ E + </T>
      </Fade>
      <Bar on={beat >= 5} delay={dl(5, 1.9)} x={205} y={408} size={14} text="E" barWidth={7} />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={214} y={408} size={14} fill={INK} anchor="start" weight={700}>= 0</T>
      </Fade>

      {/* beat 6 — pro-tip: factor by factor */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(560, 345, 460, 76)} stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={580} y={390} size={14} fill={INK} anchor="start">
          {t(
            "Products, powers, quotients — take |·| factor by factor.",
            "Products, powers, quotients — |·| factor by factor lo."
          )}
        </T>
      </Fade>

      {/* beat 7 — finale pro-tip: the unit-circle secret */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={roundRectD(200, 470, 680, 64)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={260} y={507} size={16} fill={INK} anchor="start" weight={700}>|z| = 1  ⇒ </T>
      </Fade>
      <Bar on={beat >= 7} delay={dl(7, 1.2)} x={374} y={507} size={16} barWidth={9.6} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={392} y={507} size={16} fill={INK} anchor="start" weight={700}>= 1/z</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={450} y={507} size={16} fill={GREEN} anchor="start" weight={700}>
          {t("— it collapses unit-circle problems!", "— unit-circle problems collapse ho jaate hain!")}
        </T>
      </Fade>
    </Scene>
  );
}
