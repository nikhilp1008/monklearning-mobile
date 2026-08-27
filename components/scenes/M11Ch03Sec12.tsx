/**
 * M11 Ch03 · Section 12 — "Reduce first, then read the sign"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 3.84, 18.52, 25.09, 38.74, 45.31, 67.16, 85.33]):
 *  0 Ex3 heading: the sign of cos 1170°
 *  1 reduce: 1170° - 3(360°) = 90°
 *  2 formula: cos 1170° = cos 90° = 0 (boxed)
 *  3 red-margin: trap is guessing a sign "because it's big" - answer is the boundary 0
 *  4 Ex4 heading: cot θ = -4/3, θ in QII
 *  5 QII signs + 3-4-5 reference triangle: cosθ=-4/5, sinθ=+3/5
 *  6 formula: (2cosθ-3sinθ)/(4sinθ-9cosθ) = -17/48 (boxed)
 *  7 red-margin (high): magnitude from triangle, sign from quadrant
 *
 * Layout plan — left column (Ex3) x60-460, right column (Ex4) x580-980:
 *  b0 | "Example 3..." (16,amber,w700)   | T st  | x60..420  y104..119 (bl 110)
 *  b1 | reduce line (15)                 | T st  | x60..380  y139..151 (bl 145)
 *  b2 | chip "cos1170°=cos90°=0"         | Chip  | x60..400  y175..217
 *  b3 | margin bar (red)                 | Draw  | x60  y245..290
 *  b3 | trap note (14,red) 2 lines       | T st  | x76..420  y257..279
 *  b4 | "Example 4..." (16,amber,w700)   | T st  | x580..900 y104..119 (bl 110)
 *  b5 | "QII: sin>0, cos<0" (14)         | T st  | x580..760  y139..151 (bl 145)
 *  b5 | "cosθ=-4/5, sinθ=+3/5" (14)      | T st  | x580..790  y166..178 (bl 172)
 *  b5 | 3-4-5 triangle                    | Draw | x846..900  y160..200
 *  b6 | chip formula = -17/48             | Chip | x580..980  y235..279
 *  b7 | margin bar (red)                  | Draw | x580  y310..355
 *  b7 | discipline note (14,red,w700)     | T st | x596..980  y322..344 (2 lines)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const RA = { x: 860, y: 200 };
const E1 = { x: 900, y: 200 };
const E2 = { x: 860, y: 160 };

export default function M11Ch03Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} anchor="middle" script>
          {t("Reduce First, Then Read the Sign", "Pehle Reduce, Phir Sign Padho")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 3 — the sign of cos 1170°", "Example 3 — cos 1170° ka sign")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 420 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.5)} />

      {/* beat 1 — reduce to a base angle */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={15} fill={INK} anchor="start">
          1170° - 3(360°) = 1170° - 1080° = 90°
        </T>
      </Fade>

      {/* beat 2 — the answer, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={175} w={340} h={42} fill="#FCF4E0" stroke={INK} textFill={INK} size={17} script={false}>
          cos 1170° = cos 90° = 0
        </Chip>
      </Fade>

      {/* beat 3 — the trap */}
      <Draw on={beat >= 3} d="M 60 245 L 60 290" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={76} y={261} size={14} fill={RED} anchor="start">
          {t("Trap: guessing a sign 'because it's big'.", "Trap: 'bada hai' dekh kar sign guess karna.")}
        </T>
        <T x={76} y={283} size={14} fill={RED} anchor="start" weight={700}>
          {t("Answer is the boundary value 0.", "Answer boundary value 0 hai.")}
        </T>
      </Fade>

      {/* beat 4 — Example 4 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 4 — cot θ = -4/3, θ in QII", "Example 4 — cot θ = -4/3, θ QII mein")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 580 118 L 900 118" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.5)} />

      {/* beat 5 — QII signs + 3-4-5 reference triangle */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={580} y={145} size={14} fill={INK} anchor="start">
          {t("QII: sin > 0, cos < 0", "QII: sin > 0, cos < 0")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={580} y={172} size={14} fill={INK} anchor="start" weight={700}>
          cosθ = -4/5, sinθ = +3/5
        </T>
      </Fade>
      <Draw on={beat >= 5} d={`M ${RA.x} ${RA.y} L ${E1.x} ${E1.y}`} stroke={INK} sw={2} delay={dl(5, 1.0)} />
      <Draw on={beat >= 5} d={`M ${RA.x} ${RA.y} L ${E2.x} ${E2.y}`} stroke={INK} sw={2} delay={dl(5, 1.3)} />
      <Draw on={beat >= 5} d={`M ${E1.x} ${E1.y} L ${E2.x} ${E2.y}`} stroke={AMBER_DARK} sw={2} delay={dl(5, 1.6)} />
      <Draw on={beat >= 5} d={`M ${RA.x} ${RA.y - 6} L ${RA.x + 6} ${RA.y - 6} L ${RA.x + 6} ${RA.y}`} stroke={INK} sw={1.3} delay={dl(5, 1.9)} />
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={880} y={214} size={11} fill={INK} anchor="middle">
          4
        </T>
        <T x={846} y={183} size={11} fill={INK} anchor="middle">
          3
        </T>
        <T x={893} y={174} size={11} fill={AMBER_DARK} anchor="middle">
          5
        </T>
      </Fade>

      {/* beat 6 — the expression, evaluated, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={580} y={235} w={400} h={44} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          (2cosθ-3sinθ)/(4sinθ-9cosθ) = -17/48
        </Chip>
      </Fade>

      {/* beat 7 — the two-step discipline */}
      <Draw on={beat >= 7} d="M 580 310 L 580 355" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={596} y={327} size={14} fill={RED} anchor="start" weight={700}>
          {t("Two steps always: magnitude from triangle,", "Do steps hamesha: magnitude triangle se,")}
        </T>
        <T x={596} y={349} size={14} fill={RED} anchor="start" weight={700}>
          {t("sign from the quadrant.", "sign quadrant se.")}
        </T>
      </Fade>
    </Scene>
  );
}
