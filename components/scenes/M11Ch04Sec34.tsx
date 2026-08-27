/**
 * M11 Ch04 · Section 34 — "Complex roots when D < 0"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 4 (Quadratic Equations with Complex Roots).
 *
 * Beats (board_reveal_at_english [0, 9.56, 17.92, 33.71, 45.82, 58.03, 68.61, 81.92]):
 *  0 heading: solving with a negative discriminant
 *  1 text: write √D = i√|D| when D<0
 *  2 formula: √D = √(-(4ac-b²)) = i√(4ac-b²)
 *  3 formula (landed, boxed): x = (-b ± i√(4ac-b²)) / 2a
 *  4 text: roots share real part -b/2a, opposite imaginary parts
 *  5 guardrail: conjugates of each other — mirror-image pair
 *  6 text: forgetting √D=i√|D| is the recurring i² sign-flip error
 *  7 worked example: x²+x+1=0 → x=(-1±i√3)/2 = ω, ω² (boxed)
 *
 * Layout plan (single derivation column, x=540; every prose row gets a drawn
 * underline beneath it, formula "high" beats land in a Chip/box instead —
 * same convention as Sec1's landed chips):
 *  b0 | heading (15,amber_dark,w700)   | T mid | x540 y94  + underline y108
 *  b1 | text (16,ink)                  | T mid | x540 y128 + underline y146
 *  b2 | formula (17,ink)               | T mid | x540 y164 + underline y180
 *  b3 | boxed formula (18,ink,w700)    | Chip  | x377.5..702.5 y198..242
 *  b4 | text (15,ink)                  | T mid | x540 y280 + underline y296
 *  b5 | red bar + guardrail (16,red)   | Draw/T| bar x60 y319..353, text x76 y336
 *  b6 | text (16,ink)                  | T mid | x540 y392 + underline y408
 *  b7 | example intro (15,ink)         | T mid | x540 y440
 *  b7 | boxed result (17,green,w700)   | Chip  | x408..672 y468..508
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch04Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Complex Roots When D < 0", "Complex Roots Jab D < 0 Ho")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={94} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Solving with a negative discriminant", "Negative discriminant ke saath solve karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(360, 108, 720, 108)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — the one new step */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={128} size={16} fill={INK} anchor="middle">
          {t("When D < 0 (real coeff), write √D = i√|D|.", "Jab D < 0 ho (real coeff), likho √D = i√|D|.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(340, 146, 740, 146)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 2 — expand the square root */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={164} size={17} fill={INK} anchor="middle" weight={700}>
          √D = √(-(4ac - b²)) = i√(4ac - b²)
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(360, 180, 720, 180)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 3 — the landed formula */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={377.5} y={198} w={325} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          x = (-b ± i√(4ac - b²)) / 2a
        </Chip>
      </Fade>

      {/* beat 4 — structure of the two roots */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={280} size={15} fill={INK} anchor="middle">
          {t(
            "The two roots share the real part -b/2a and opposite imaginary parts.",
            "Dono roots ka real part same hai -b/2a, aur imaginary parts opposite hain."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(292, 296, 788, 296)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 5 — guardrail: conjugate pair */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 319 L 60 353" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={336} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "So they are conjugates of each other — a mirror-image pair.",
            "To ye ek doosre ke conjugates hain — ek mirror-image pair."
          )}
        </T>
      </Fade>

      {/* beat 6 — the recurring mistake */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={392} size={16} fill={INK} anchor="middle">
          {t(
            "Forgetting √D = i√|D| is the recurring i² sign-flip error.",
            "√D = i√|D| bhoolna wahi recurring i² sign-flip error hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={lineD(310, 408, 770, 408)} stroke={RED} sw={1.6} dur={0.6} />

      {/* beat 7 — worked example, boxed */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={440} size={15} fill={INK} anchor="middle">
          {t("Example: x² + x + 1 = 0", "Misaal: x² + x + 1 = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Chip x={408} y={468} w={264} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={17} script={false}>
          x = (-1 ± i√3)/2  =  ω, ω²
        </Chip>
      </Fade>
    </Scene>
  );
}
