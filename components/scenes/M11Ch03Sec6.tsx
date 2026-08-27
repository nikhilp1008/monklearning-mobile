/**
 * M11 Ch03 · Section 6 — "A chord-to-arc chain and the sector inversion"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two independent examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 6.14, 22.44, 35.5, 48.73, 55.13, 74.75, 94.46]):
 *  0 Ex5 heading: from chord to arc
 *  1 given + right-triangle diagram: r=20, chord=20, ⊥ bisects it (half-chord=10)
 *  2 formula: sin(θ/2)=10/20=1/2 ⇒ θ=π/3
 *  3 formula: s=rθ=20×π/3=20π/3≈20.94 cm (boxed)
 *  4 Ex6 heading: the sector inversion
 *  5 given: 2r+s=16 (perimeter); ½r²θ=16 ⇒ r²θ=32 ⇒ s=32/r
 *  6 formula: 2r+32/r=16 ⇒ (r-4)²=0 ⇒ r=4, θ=2 (boxed)
 *  7 red-margin: two unknowns from two conditions — JEE Advanced pattern
 *
 * Layout plan — left column (Ex5) x60-460, right column (Ex6) x580-980:
 *  b0 | "Example 5..." (17,amber,w700)  | T st  | x60..330  y104..119 (bl 110)
 *  b1 | triangle O,A,B,M (chord+⊥+radii)| Draw  | x80..220  y175..245
 *  b1 | given lines (15)                | T st  | x260..460 y188..228 (bl 195/222)
 *  b2 | "sin(θ/2)=10/20=1/2" (15)       | T st  | x60..300   y273..287 (bl 280)
 *  b2 | "⇒ θ/2=π/6 ⇒ θ=π/3" (15,w700)  | T st  | x60..290   y298..312 (bl 305)
 *  b3 | chip "s=rθ=...≈20.94cm"        | Chip  | x60..460   y325..369
 *  b4 | "Example 6..." (17,amber,w700)  | T st  | x580..860  y104..119 (bl 110)
 *  b5 | "2r + s = 16" (15)              | T st  | x580..710  y188..202 (bl 195)
 *  b5 | "½r²θ=16 ⇒ r²θ=32" (15)         | T st  | x580..760  y215..229 (bl 222)
 *  b5 | "⇒ s = 32/r" (15,w700)          | T st  | x580..700  y242..256 (bl 249)
 *  b6 | chip "2r+32/r=16⇒(r-4)²=0⇒r=4,θ=2"|Chip | x580..960  y275..323
 *  b7 | margin bar (red)                | Draw  | x580  y350..386
 *  b7 | note (14,red)                   | T st  | x596..1000 y362..384 (bl two lines)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const O = { x: 150, y: 175 };
const A = { x: 80, y: 245 };
const B = { x: 220, y: 245 };
const M = { x: 150, y: 245 };

export default function M11Ch03Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("A Chord-to-Arc Chain and the Sector Inversion", "Chord-se-Arc Chain aur Sector Inversion")}
        </T>
      </Fade>

      {/* beat 0 — Example 5 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 5 — from chord to arc", "Example 5 — chord se arc")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 330 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.5)} />

      {/* beat 1 — diagram: radius, chord, perpendicular bisector */}
      <Draw on={beat >= 1} d={`M ${A.x} ${A.y} L ${B.x} ${B.y}`} stroke={INK} sw={2.2} delay={dl(1, 0)} />
      <Draw on={beat >= 1} d={`M ${O.x} ${O.y} L ${A.x} ${A.y}`} stroke={INK} sw={2} delay={dl(1, 0.4)} />
      <Draw on={beat >= 1} d={`M ${O.x} ${O.y} L ${B.x} ${B.y}`} stroke={INK} sw={2} delay={dl(1, 0.7)} />
      <Draw on={beat >= 1} d={`M ${O.x} ${O.y} L ${M.x} ${M.y}`} stroke={MUTED} sw={1.6} delay={dl(1, 1.0)} />
      <Draw on={beat >= 1} d={`M ${M.x - 6} ${M.y} L ${M.x - 6} ${M.y - 6} L ${M.x} ${M.y - 6}`} stroke={INK} sw={1.4} delay={dl(1, 1.3)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={150} y={163} size={12} fill={INK} anchor="middle">
          O
        </T>
        <T x={97} y={182} size={12} fill={MUTED} anchor="middle">
          20
        </T>
        <T x={112} y={260} size={12} fill={MUTED} anchor="middle">
          10
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={260} y={195} size={15} fill={INK} anchor="start">
          {t("diameter 40 → r = 20 cm", "diameter 40 → r = 20 cm")}
        </T>
        <T x={260} y={222} size={15} fill={INK} anchor="start">
          {t("chord = 20 cm, ⊥ bisects it", "chord = 20 cm, ⊥ ise bisect karta hai")}
        </T>
      </Fade>

      {/* beat 2 — solve the half-angle */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={280} size={15} fill={INK} anchor="start">
          sin(θ/2) = 10/20 = 1/2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={60} y={305} size={15} fill={INK} anchor="start" weight={700}>
          ⇒ θ/2 = π/6 ⇒ θ = π/3
        </T>
      </Fade>

      {/* beat 3 — the arc length, boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={60} y={325} w={400} h={44} fill={AMBER} textFill={INK} size={16} script={false}>
          s = rθ = 20×π/3 ≈ 20.94 cm
        </Chip>
      </Fade>

      {/* beat 4 — Example 6 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={110} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 6 — the sector inversion", "Example 6 — sector inversion")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 580 118 L 860 118" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.5)} />

      {/* beat 5 — the two given conditions */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={580} y={195} size={15} fill={INK} anchor="start">
          {t("perimeter: 2r + s = 16", "perimeter: 2r + s = 16")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={580} y={222} size={15} fill={INK} anchor="start">
          {t("area: ½r²θ = 16 ⇒ r²θ = 32", "area: ½r²θ = 16 ⇒ r²θ = 32")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={580} y={249} size={15} fill={INK} anchor="start" weight={700}>
          {t("⇒ s = 32/r (since s = rθ)", "⇒ s = 32/r (kyunki s = rθ)")}
        </T>
      </Fade>

      {/* beat 6 — solve, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={580} y={275} w={380} h={48} fill={AMBER} textFill={INK} size={15} script={false}>
          2r+32/r=16 ⇒ (r-4)²=0 ⇒ r=4, θ=2
        </Chip>
      </Fade>

      {/* beat 7 — red-margin: the JEE Advanced pattern */}
      <Draw on={beat >= 7} d="M 580 350 L 580 386" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={596} y={365} size={14} fill={RED} anchor="start">
          {t("Two unknowns from two conditions —", "Do unknowns, do conditions se —")}
        </T>
        <T x={596} y={383} size={14} fill={RED} anchor="start">
          {t("easy trig, hard algebra.", "trig aasan, algebra mushkil.")}
        </T>
      </Fade>
    </Scene>
  );
}
