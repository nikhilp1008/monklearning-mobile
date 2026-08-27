/**
 * M11 Ch04 · Section 33 — "Every quadratic now has two roots"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 4 (Quadratic Equations with Complex Roots).
 *
 * Beats (board_reveal_at_english [0, 10.58, 30.29, 42.75, 53.67, 65.96, 77.06, 84.48]):
 *  0 heading: "the discriminant is a weather forecast"
 *  1 anchor: over R, x²+1=0 has no roots; over C it has two, ±i
 *  2 formula: x = (-b±√D)/2a, D = b²-4ac
 *  3 THE DIAGRAM: three columns — D>0 two real dots, D=0 one repeated dot,
 *    D<0 a conjugate pair mirrored off the real line (built one column at a time)
 *  4 caption under col A/B: "two distinct real roots" / "one repeated real root"
 *  5 guardrail caption + ring under col C: complex-conjugate pair, off the real line
 *  6 caveat: this table assumes REAL coefficients
 *  7 guardrail (red bar): complex a,b,c makes "D<0" meaningless
 *
 * Layout plan (universal pattern: every prose row gets a drawn underline right
 * beneath it as its "hand action"; note rows get a left red bar, matching Sec1):
 *  b0 | heading text (15,amber_dark,w700)   | T mid  | x540 y94  + underline y~108
 *  b1 | anchor sentence (16,ink)            | T mid  | x540 y128 + underline y~146
 *  b2 | formula (17,ink)                    | T mid  | x540 y164 + underline y~180
 *  b3 | col A line/dots/label (green)       | Draw/T | x115..305 y300, label y222
 *  b3 | col B line/dot/label (amber_dark)   | Draw/T | x445..635 y300, label y222
 *  b3 | col C line/connector/dots/label(red)| Draw/T | x775..965 y300, dots y278/322, label y222
 *  b4 | caption A "two distinct real roots" | T mid  | x210 y380 + underline y392
 *  b4 | caption B "one repeated real root"  | T mid  | x540 y380 + underline y392
 *  b5 | caption C + ring around col C dots  | T mid  | x870 y380; ring cx870 cy300 rx24 ry38
 *  b6 | caveat "REAL coefficients"          | T mid  | x540 y440 + underline y456
 *  b7 | red bar + guardrail text            | Draw/T | bar x60 y473..507, text x76 y490
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch04Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Every Quadratic Now Has Two Roots", "Har Quadratic Ke Ab Do Roots Hain")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={94} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The discriminant is a weather forecast", "Discriminant ek weather forecast hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(394, 108, 686, 108)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — anchor sentence */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={128} size={16} fill={INK} anchor="middle">
          {t(
            "Over R, x² + 1 = 0 has no roots; over C it has exactly two, ±i.",
            "R par x² + 1 = 0 ka koi root nahi; C par iske poore do hain, ±i."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(210, 146, 870, 146)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 2 — the quadratic formula */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={164} size={17} fill={INK} anchor="middle" weight={700}>
          x = (-b ± √D) / 2a,   D = b² - 4ac
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(340, 180, 740, 180)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 3 — the fork diagram: D>0 / D=0 / D<0 */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(115, 300, 305, 300)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Circle cx={175} cy={300} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={245} cy={300} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={210} y={222} size={14} fill={GREEN} anchor="middle" weight={700}>D &gt; 0</T>
      </Fade>

      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={lineD(445, 300, 635, 300)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Circle cx={540} cy={300} r={6} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={222} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>D = 0</T>
      </Fade>

      <Draw on={beat >= 3} delay={dl(3, 1.8)} d={lineD(775, 300, 965, 300)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d={lineD(870, 278, 870, 322)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <Circle cx={870} cy={278} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <Circle cx={870} cy={322} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={870} y={222} size={14} fill={RED} anchor="middle" weight={700}>D &lt; 0</T>
      </Fade>

      {/* beat 4 — captions under col A / col B */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={210} y={380} size={14} fill={GREEN} anchor="middle">
          {t("two distinct real roots", "do alag real roots")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={lineD(140, 392, 280, 392)} stroke={GREEN} sw={1.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={380} size={14} fill={AMBER_DARK} anchor="middle">
          {t("one repeated real root", "ek repeated real root")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={lineD(465, 392, 615, 392)} stroke={AMBER_DARK} sw={1.4} dur={0.4} />

      {/* beat 5 — guardrail caption + ring under col C */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={870} y={380} size={14} fill={RED} anchor="middle" weight={700}>
          {t("complex-conjugate pair — off the real line", "complex-conjugate pair — real line se bahar")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d={ringD(870, 300, 24, 38)} stroke={RED} sw={2.2} dur={0.7} />

      {/* beat 6 — caveat: real coefficients only */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={440} size={16} fill={INK} anchor="middle" weight={700}>
          {t("This table assumes REAL coefficients.", "Ye table REAL coefficients maanti hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d={lineD(384, 456, 696, 456)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 7 — guardrail: complex coefficients break the classification */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 473 L 60 507" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={490} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "If a, b, c are complex, the 'D<0' classification is meaningless.",
            "Agar a, b, c complex hain, 'D<0' classification bekar hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
