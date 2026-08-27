/**
 * M11 Ch02 · Section 24 — "Worked: natural domain of √(x−2)/(x−5), and algebra of f and g"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (TOP = Ex3 natural domain w/ number line, BOTTOM = Ex4 algebra domains).
 *
 * Beats (board_reveal_at_english [0, 9.39, 22.36, 45.91, 60.5, 77.4, 92.67, 116.05]):
 *  0 Ex3 given: domain of f(x)=√(x−2)/(x−5)
 *  1 formula: f(x) = √(x−2)/(x−5)
 *  2 conditions: x≥2 (root); x≠5 (denom) — intersect
 *  3 number line [2,5)∪(5,∞) + boxed domain formula
 *  4 subtlety: x=2 stays, x=5 punched out
 *  5 Ex4 heading: f(x)=x², g(x)=√(4−x²)
 *  6 Dom(f)=R; Dom(g)=[-2,2]; f+g,fg on [-2,2]
 *  7 boxed: Dom(f/g)=(-2,2) — both endpoints punched
 *
 * Layout plan — TOP zone (Ex3, y87..317) + divider + BOTTOM zone (Ex4, y350..463):
 *  b0 | given (16,amber,w700)            | T mid | x376..704  y88..105 (bl 100)
 *  b1 | formula (18,w700)                 | T mid | x446..635  y119..139 (bl 133)
 *  b2 | conditions (14)                   | T mid | x412..769  y154..169 (bl 165)
 *  b3 | number line                        | Draw | x160..910  y200
 *  b3 | dot@2 (closed), dot@5 (open)      | dot  | x340,620  y200
 *  b3 | labels "2","5" (14)                | T mid | x340/x620  y216..231 (bl 227)
 *  b3 | chip "Domain=[2,5)∪(5,∞)" (17)    | Chip  | x429..651  y250..286
 *  b4 | subtlety (14)                      | T mid | x393..687  y302..317 (bl 313)
 *  --divider-- y=335
 *  b5 | Ex4 heading (16,amber,w800)       | T mid | x348..732  y351..364 (bl 363)
 *  b6 | domains line (14)                  | T mid | x337..743  y384..399 (bl 395)
 *  b7 | chip "Dom(f/g)=(-2,2)..." (15,grn)| Chip  | x336..744  y425..463
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN,
  Scene,
} from '@/components/scenes/kit';
import { axisD, IntervalDot } from "./math-kit";

export default function M11Ch02Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={AMBER_DARK} anchor="middle" script>
          {t("Worked Examples — Domain & Algebra", "Solved Examples — Domain aur Algebra")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"Example 3: domain of f(x) = √(x−2)/(x−5)"}
        </T>
      </Fade>

      {/* beat 1 — the formula */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={133} size={18} fill={INK} anchor="middle" weight={700}>
          {"f(x) = √(x−2) / (x−5)"}
        </T>
      </Fade>

      {/* beat 2 — the two conditions, intersected */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={165} size={14} fill={INK} anchor="middle">
          {"x−2≥0 ⇒ x≥2;  x−5≠0 ⇒ x≠5.  Both hold — INTERSECT"}
        </T>
      </Fade>

      {/* beat 3 — the number line + boxed domain */}
      <Draw on={beat >= 3} d={axisD(160, 910, 200)} stroke={INK} sw={2} delay={dl(3, 0)} />
      <IntervalDot on={beat >= 3} delay={dl(3, 0.5)} x={340} y={200} open={false} r={5} stroke={INK} />
      <IntervalDot on={beat >= 3} delay={dl(3, 0.7)} x={620} y={200} open={true} r={5} stroke={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={340} y={227} size={14} fill={INK} anchor="middle">
          2
        </T>
        <T x={620} y={227} size={14} fill={INK} anchor="middle">
          5
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Chip x={429} y={250} w={222} h={36} fill={GREEN} textFill="#FFFEFB" size={17} script={false}>
          {"Domain = [2,5) ∪ (5,∞)"}
        </Chip>
      </Fade>

      {/* beat 4 — the subtlety */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={313} size={14} fill={INK} anchor="middle">
          {t(
            "x=2 STAYS (root=0, fine); x=5 punched out",
            "x=2 RAHEGA (root=0, theek hai); x=5 nikal jaata hai"
          )}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 5} d="M 100 335 L 980 335" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} />

      {/* beat 5 — Example 4 heading */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={363} size={16} fill={AMBER_DARK} anchor="middle" weight={800}>
          {"Example 4 (JEE Advanced): f(x)=x², g(x)=√(4−x²)"}
        </T>
      </Fade>

      {/* beat 6 — individual domains, then the intersection for sum/product */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={395} size={14} fill={INK} anchor="middle">
          {t(
            "Dom(f)=R; Dom(g)=[-2,2] (4−x²≥0). f+g, fg live on [-2,2]",
            "Dom(f)=R; Dom(g)=[-2,2] (4−x²≥0). f+g, fg [-2,2] pe rehte hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the quotient's domain, boxed */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={336} y={425} w={408} h={38} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          {t(
            "Dom(f/g) = (-2,2) — g(±2)=0 punches out both ends",
            "Dom(f/g) = (-2,2) — g(±2)=0 se dono ends nikal jaate hain"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
