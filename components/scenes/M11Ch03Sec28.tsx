/**
 * M11 Ch03 · Section 28 — "What a compound angle means — and why sin doesn't distribute"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED (subtopic 5, identity-derivation care).
 *
 * Beats (board_reveal_at_english [0, 7.77, 20.57, 34.82, 45.91, 50.09, 62.72, 74.24]):
 *  0 subtitle: a compound angle is built from two others
 *  1 text + staged wrong guess: A+B or A-B; sin(A+B)=sinA+sinB ?
 *  2 formula: A=B=30° disproof - sin60°≈0.87 but sin30°+sin30°=1, cross out the guess
 *  3 red-margin: trig functions aren't linear, never distribute
 *  4 subheading: two pushes combine into one
 *  5 THE DIAGRAM: vector composition, a-leg + b-leg → resultant R at angle α
 *  6 formula: acosx+bsinx = Rcos(x-α), R=√(a²+b²)
 *  7 text: max=+R, min=-R (data bug: literal — → "-")
 *
 * Layout plan — left column (disproof) x60-500, right column (vector intuition) x580-1020:
 *  b0 | subtitle (13,amber)              | T st | x60..470   y88..102 (bl 96)
 *  b1 | "A compound angle..." (14)       | T st | x60..380   y118..132 (bl 125)
 *  b1 | chip "sin(A+B)=sinA+sinB ?"      | Chip | x60..380   y142..178
 *  b2 | cross-out over chip              | Draw | x60..380  y142..178
 *  b2 | "A=B=30°: sin60°≈0.87" (14)      | T st | x60..340   y205..219 (bl 212)
 *  b2 | "sin30°+sin30°=1 ≠ 0.87" (14,red)| T st | x60..320   y228..242 (bl 235)
 *  b3 | margin bar (red)                  | Draw | x60  y255..300
 *  b3 | closer 2 lines (13,red)           | T st | x76..460   y269..291
 *  b4 | "Two pushes..." (15,amber,w700)   | T st | x580..900 y104..119 (bl 110)
 *  b4 | underline                         | Draw | x580..900 y119
 *  b5 | vector diagram O(750,190)         | Draw | x750..885  y135..210
 *  b6 | chip formula                      | Chip | x600..1000  y228..268
 *  b7 | text (14)                         | T mid | x750..950  y290..312
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, RED, arrowD, crossD,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, angleArcD, lineD } from "./math-kit";

const O = { x: 750, y: 190 };
const E1 = { x: 830, y: 190 };
const E2 = { x: 830, y: 135 };
const ARC = pointOnCircle(O.x, O.y, 42, 0.3);

export default function M11Ch03Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={18} fill={RED} anchor="middle" script>
          {t("What a Compound Angle Means", "Compound Angle Ka Matlab")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={96} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("A compound angle is built from two others", "Compound angle do angles se banta hai")}
        </T>
      </Fade>

      {/* beat 1 — the naive guess, staged */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={125} size={14} fill={INK} anchor="start">
          {t("A compound angle: A+B or A-B.", "Compound angle: A+B ya A-B.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={60} y={142} w={320} h={36} fill="#FCF4E0" stroke={INK} dashed textFill={INK} size={14} script={false}>
          sin(A+B) = sinA + sinB ?
        </Chip>
      </Fade>

      {/* beat 2 — disprove it with numbers, cross it out */}
      <Draw on={beat >= 2} d={crossD(60, 142, 320, 36)} stroke={RED} sw={2.4} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={60} y={212} size={14} fill={INK} anchor="start">
          A=B=30°: sin60°=√3/2≈0.87
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={60} y={235} size={14} fill={RED} anchor="start" weight={700}>
          sin30°+sin30°=1 ≠ 0.87
        </T>
      </Fade>

      {/* beat 3 — red-margin: not linear */}
      <Draw on={beat >= 3} d="M 60 255 L 60 300" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={76} y={272} size={13} fill={RED} anchor="start" weight={700}>
          {t("Trig functions aren't linear -", "Trig functions linear nahi hain -")}
        </T>
        <T x={76} y={294} size={13} fill={RED} anchor="start">
          {t("they never distribute over a sum.", "sum par kabhi distribute nahi karte.")}
        </T>
      </Fade>

      {/* beat 4 — two pushes combine, subheading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={110} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Two pushes combine into one", "Do pushes milkar ek ban jaate hain")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 580 119 L 900 119" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.5)} />

      {/* beat 5 — THE DIAGRAM: vector composition */}
      <Draw on={beat >= 5} d={lineD(O.x, O.y, E1.x, E1.y)} stroke={MUTED} sw={1.6} delay={dl(5, 0)} />
      <Draw on={beat >= 5} d={lineD(E1.x, E1.y, E2.x, E2.y)} stroke={MUTED} sw={1.6} delay={dl(5, 0.3)} />
      <Draw on={beat >= 5} d={arrowD(O.x, O.y, E2.x, E2.y)} stroke={RED} sw={2.6} delay={dl(5, 0.7)} />
      <Draw on={beat >= 5} d={angleArcD(O.x, O.y, 30, 0, 0.601)} stroke={AMBER_DARK} sw={1.6} delay={dl(5, 1.1)} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={790} y={204} size={12} fill={MUTED} anchor="middle">a</T>
        <T x={846} y={165} size={12} fill={MUTED} anchor="middle">b</T>
        <T x={765} y={155} size={13} fill={RED} anchor="middle" weight={700}>R</T>
        <T x={ARC.x} y={ARC.y - 4} size={12} fill={AMBER_DARK} anchor="middle">α</T>
      </Fade>

      {/* beat 6 — the amplitude-phase formula, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={600} y={228} w={400} h={40} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          acosx+bsinx = Rcos(x-α), R=√(a²+b²)
        </Chip>
      </Fade>

      {/* beat 7 — max and min, no calculus */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={800} y={296} size={14} fill={INK} anchor="middle" weight={700}>
          {t("max=+R, min=-R - no calculus needed.", "max=+R, min=-R - calculus nahi chahiye.")}
        </T>
      </Fade>
    </Scene>
  );
}
