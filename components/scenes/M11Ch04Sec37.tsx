/**
 * M11 Ch04 · Section 37 — "The square root of a complex number"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 4 (Quadratic Equations with Complex Roots).
 *
 * Beats (board_reveal_at_english [0, 8.79, 24.32, 38.91, 53.76, 65.96, 77.4, 89.86]):
 *  0 heading: finding √(a+ib) directly
 *  1 text: set √(a+ib)=x+iy, square, equate real/imaginary parts
 *  2 formula: x²-y²=a, 2xy=b
 *  3 formula (landed, boxed): x²=(|z|+a)/2, y²=(|z|-a)/2, |z|=√(a²+b²)
 *  4 text: fix the sign so sign(xy)=sign(b)
 *  5 guardrail: always TWO square roots, ±(x+iy)
 *  6 text: this is what makes the quadratic formula usable even for complex D
 *  7 worked example: √(3+4i) — boxed answer ±(2+i) + a mirror-pair corner plot
 *
 * Layout plan (derivation column x=540; worked example spills into a reserved
 * top-right corner, x850..1020, unused by the column throughout so beat 7's
 * diagram never collides with earlier accumulated rows):
 *  b0 | heading (15,amber_dark,w700) | T mid | x540 y90  + underline y104
 *  b1 | text (15,ink)                | T mid | x540 y128 + underline y144
 *  b2 | formula (18,ink,w700)        | T mid | x540 y172 + underline y189
 *  b3 | boxed formula (16,ink,w700)  | Chip  | x327..753 y210..250
 *  b4 | text (15,ink)                | T mid | x540 y295 + underline y311
 *  b5 | red bar + guardrail (16,red) | Draw/T| bar x60 y338..372, text x76 y355
 *  b6 | text (14,ink)                | T mid | x540 y410 + underline y426
 *  b7 | example text (14,ink)        | T mid | x540 y460 + underline y474
 *  b7 | boxed answer (17,ink,w700)   | Chip  | x455..625 y490..528
 *  b7 | corner mirror-pair plot      | Draw/T| axes x860..1010/x935 y105..235, roots (963,156)/(907,184)
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
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch04Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The Square Root of a Complex Number", "Complex Number Ka Square Root")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Finding √(a+ib) directly", "√(a+ib) seedha nikaalna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(430, 104, 650, 104)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — set up */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={128} size={15} fill={INK} anchor="middle">
          {t(
            "Set √(a+ib) = x+iy, square, and equate real and imaginary parts.",
            "√(a+ib) = x+iy set karo, square karo, aur real-imaginary parts equate karo."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(292, 144, 787, 144)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 2 — squaring gives two equations */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={172} size={18} fill={INK} anchor="middle" weight={700}>
          x² - y² = a,   2xy = b
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(432, 189, 648, 189)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 3 — solved for x², y², boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={327} y={210} w={426} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          x² = (|z|+a)/2,  y² = (|z|-a)/2,  |z| = √(a²+b²)
        </Chip>
      </Fade>

      {/* beat 4 — fix the sign */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={295} size={15} fill={INK} anchor="middle">
          {t(
            "Then fix the sign so that the sign of xy matches the sign of b.",
            "Phir sign fix karo taaki xy ka sign b ke sign se match kare."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(300, 311, 780, 311)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 5 — guardrail: two square roots */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 338 L 60 372" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={355} size={16} fill={RED} anchor="start" weight={700}>
          {t("There are always TWO square roots, ±(x+iy).", "Hamesha DO square roots hote hain, ±(x+iy).")}
        </T>
      </Fade>

      {/* beat 6 — why this matters */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={410} size={14} fill={INK} anchor="middle">
          {t(
            "This is what makes the quadratic formula usable even when D is complex.",
            "Yehi quadratic formula ko usable banata hai jab D bhi complex ho."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={lineD(284, 426, 796, 426)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 7 — worked example: √(3+4i) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={460} size={14} fill={INK} anchor="middle">
          {t("Example: √(3+4i) → |z|=5, x²=4, y²=1, xy>0", "Misaal: √(3+4i) → |z|=5, x²=4, y²=1, xy>0")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d={lineD(400, 474, 680, 474)} stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Chip x={455} y={490} w={170} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          √(3+4i) = ±(2+i)
        </Chip>
      </Fade>

      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={lineD(860, 170, 1010, 170)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d={lineD(935, 105, 935, 235)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Circle cx={935} cy={170} r={2.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.8)} d={lineD(907, 184, 963, 156)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2.1)}>
        <Circle cx={963} cy={156} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.3)}>
        <T x={980} y={150} size={12} fill={INK} anchor="start" weight={700}>2+i</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <Circle cx={907} cy={184} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.7)}>
        <T x={888} y={210} size={12} fill={INK} anchor="end">-2-i</T>
      </Fade>
    </Scene>
  );
}
