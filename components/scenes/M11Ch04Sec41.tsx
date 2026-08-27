/**
 * M11 Ch04 · Section 41 — "Worked (JEE Advanced): complex coefficients, no conjugate pair"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (JEE Advanced) — the counter-example to Sec 35's
 * conjugate-root guardrail: complex coefficients, roots are NOT a mirror pair.
 *
 * Beats (board_reveal_at_english [0, 7.25, 20.91, 32.68, 50.86, 56.49, 69.8, 84.82]):
 *  0 heading: when roots are NOT conjugates
 *  1 given: solve x²-(3+i)x+(2+i)=0 (complex coefficients)
 *  2 formula: D=(3+i)²-4(2+i)=2i
 *  3 text: find √(2i) — x²-y²=0, 2xy=2, |2i|=2 ⇒ x²=y²=1, xy>0
 *  4 boxed: √(2i) = ±(1+i)
 *  5 boxed: x = ((3+i)±(1+i))/2 ⇒ x=2+i or x=1
 *  6 guardrail + corner plot: 2+i and 1 are NOT conjugates — a crossed-out
 *    "ghost" 2-i shows what a wrongly-applied conjugate pairing would predict
 *  7 sanity check: sum=3+i, product=2+i — consistent with Vieta
 *
 * Layout plan (worked notebook, single column x=540, top to bottom; corner
 * plot reserved at x850..1020, never touched by the column since every
 * column row stays under x≤800):
 *  b0 | heading (15,amber_dark,w700) | T mid | x540 y90  + underline y104
 *  b1 | text (15,ink)                | T mid | x540 y126 + underline y142
 *  b2 | text (14,ink)                | T mid | x540 y168 + underline y182
 *  b3 | text (14,ink)                | T mid | x540 y224 + underline y238
 *  b4 | boxed (18,ink,w700)          | Chip  | x459.5..620.5 y264..306
 *  b5 | boxed (15,ink,w700)          | Chip  | x362..718   y330..374
 *  b6 | red bar + guardrail (15,red) | Draw/T| bar x60 y403..437, text x76 y420
 *  b6 | corner plot: axis, "1" on it, "2+i" off it, crossed-out ghost "2-i"
 *  b7 | text (15,ink)                | T mid | x540 y475 + underline y489
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch04Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Complex Coefficients: No Conjugate Pair", "Complex Coefficients: Conjugate Pair Nahi")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("When roots are NOT conjugates", "Jab roots conjugates NAHI hote")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(410, 104, 670, 104)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — the given, complex coefficients */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={126} size={15} fill={INK} anchor="middle">
          {t(
            "Solve x² - (3+i)x + (2+i) = 0  (complex coefficients).",
            "Solve karo x² - (3+i)x + (2+i) = 0  (complex coefficients)."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(334, 142, 746, 142)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 2 — the discriminant */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={168} size={14} fill={INK} anchor="middle">
          D = (3+i)² - 4(2+i) = (8+6i) - (8+4i) = 2i
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(386, 182, 694, 182)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 3 — square root of 2i */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={224} size={14} fill={INK} anchor="middle">
          {t(
            "Find √(2i):  x²-y²=0, 2xy=2, |2i|=2 ⇒ x²=y²=1, xy>0",
            "√(2i) nikaalo:  x²-y²=0, 2xy=2, |2i|=2 ⇒ x²=y²=1, xy>0"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={lineD(364.5, 238, 715.5, 238)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 4 — boxed square root */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={459.5} y={264} w={161} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          √(2i) = ±(1+i)
        </Chip>
      </Fade>

      {/* beat 5 — boxed roots */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={362} y={330} w={356} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          x = ((3+i)±(1+i))/2  ⇒  x = 2+i  or  x = 1
        </Chip>
      </Fade>

      {/* beat 6 — guardrail: NOT a conjugate pair, plus a contrast plot */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 403 L 60 437" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={420} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "2+i and 1 are NOT conjugates — the coefficients are complex.",
            "2+i aur 1 conjugates NAHI hain — coefficients complex hain."
          )}
        </T>
      </Fade>

      <Draw on={beat >= 6} delay={dl(6, 1.0)} d={lineD(850, 170, 1020, 170)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <Circle cx={890} cy={170} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={890} y={196} size={12} fill={INK} anchor="middle" weight={700}>1</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <Circle cx={960} cy={140} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={976} y={136} size={12} fill={INK} anchor="start" weight={700}>2+i</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.3)} d={lineD(960, 140, 960, 200)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <Circle cx={960} cy={200} r={4} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <T x={976} y={204} size={11} fill={MUTED} anchor="start">2-i</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.9)} d={crossD(956, 196, 8, 8)} stroke={RED} sw={2.2} dur={0.4} />

      {/* beat 7 — sanity check with Vieta */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={475} size={15} fill={INK} anchor="middle">
          {t("Check: sum = 3+i, product = 2+i. Consistent with Vieta.", "Check: sum = 3+i, product = 2+i. Vieta se consistent.")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={lineD(330, 489, 750, 489)} stroke={INK} sw={1.6} dur={0.6} />
    </Scene>
  );
}
