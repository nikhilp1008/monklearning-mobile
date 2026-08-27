/**
 * M11 Ch11 · Section 11 — "Advanced: the sum-of-distances ellipsoid"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples.
 *
 * DATA NOTE: despite the brief's "2D only" framing for secs 1-12, this section's board_content
 * is a genuine 3D locus — A(5,0,0), B(-5,0,0), P=(x,y,z) with PA+PB=12, deriving a full ellipsoid
 * x²/36+y²/11+z²/11=1 (a surface of revolution). Supabase JSON is authoritative; treated as 3D.
 * The JSON's own reference illustration (seq8 embedded svg) is itself a plain frontal 2D ellipse
 * (not an oblique 3D projection) with a caption noting it's a "prolate spheroid" — this scene
 * follows that same choice: draw the z=0 equatorial cross-section face-on (a face-on view is a
 * legitimate, undistorted way to show a conic slice), and label the revolution explicitly rather
 * than force everything through project3D.
 *
 * Hand-verified algebra (independent of the narration's claims):
 *   sqrt((x-5)^2+y^2+z^2) + sqrt((x+5)^2+y^2+z^2) = 12.
 *   Isolate 2nd radical, square: (x-5)^2+y^2+z^2 = 144 - 24*PB + (x+5)^2+y^2+z^2
 *     => -20x = 144 - 24*PB => 24*PB = 144+20x.  [matches JSON exactly]
 *   Divide by 4, square: 36*PB^2 = (36+5x)^2, i.e. 36[(x+5)^2+y^2+z^2] = (36+5x)^2. [matches]
 *   Expand: 36x^2+360x+900+36y^2+36z^2 = 1296+360x+25x^2
 *     => 11x^2+36y^2+36z^2 = 396 => x^2/36+y^2/11+z^2/11 = 1 (396/11=36, 396/36=11). [matches]
 *   Semi-axes: a=6 (=12/2, since PA+PB=2a), c=5 (focus offset), b^2=a^2-c^2=36-25=11 => b=√11. ✓
 *   Sanity point used for the diagram: (x,y,z)=(0,√11,0) is ON the locus — PA=PB=√(25+11)=√36=6,
 *   sum=12 ✓ (independently verified, not just asserted).
 *
 * 2D diagram geometry (px/unit = 30, center (300,260)):
 *   A(5,0,0)->(450,260)  B(-5,0,0)->(150,260)  P(0,√11,0)->(300,160.5)~(300,161).
 *   Ellipse: rx=6*30=180, ry=√11*30≈99.5~100, center(300,260); focus offset c=5*30=150 (450-300,
 *   300-150) — matches A,B exactly, confirming a²-b²=c²: 32400-9900=22500=150² ✓.
 *
 * reveals_english = [0, 15.27, 29.87, 47.7, 62.98, 81.83, 96.26, 112.38, 136.28] (9 values, beats 0-8).
 *
 * Beats:
 *  0(title, always-on) | "Advanced: locus of constant distance-sum"
 *  1 | GIVEN + SET UP: state PA+PB=12; draw axis, A, B, sample point P + dashed PA/PB
 *  2 | write the two-radical equation
 *  3 | guidance (amber): isolate one radical, square — then isolate & square again
 *  4 | step 1 result: 24√(...) = 144+20x
 *  5 | step 2 result: 36[...] = (36+5x)²
 *  6 | BOXED ANSWER: x²/36 + y²/11 + z²/11 = 1
 *  7 | sanity/visual: draw the ellipse around A,B — "ellipsoid of revolution"
 *  8 | red-margin guardrail: kill the double radical in TWO squaring rounds
 *
 * Layout plan (left diagram x100-500 y135-412, right algebra column x556-1044):
 *  b1 | given 2 lines (14,ink,mid)         | T mid   | x540 y92/114
 *  b1 | axis line (muted)                  | Draw    | (110,260)-(490,260)
 *  b1 | A,B dots+labels (red)              | circle+T| A(450,260)l(450,282) B(150,260)l(150,282)
 *  b1 | P dot+label (amber_dark)           | circle+T| P(300,161) l(300,146)
 *  b1 | dashed PA, PB + labels             | Draw+T  | PA label(392,205) PB label(200,205,end)
 *  b2 | two-radical equation (15,ink)      | T start | x560 y150
 *  b3 | guidance 2L (14,amber_dark,bold)   | T start | x560 y190/212
 *  b4 | step1 formula (16,ink)             | T start | x560 y248
 *  b5 | step2 formula (16,ink)             | T start | x560 y286
 *  b6 | boxed formula chip (green border)  | Chip    | x556 y320 w280 h40
 *  b7 | ellipse around A,B (green)         | Draw    | ellipseD(300,260,180,100)
 *  b7 | 2 captions                         | T mid   | x300 y388/408
 *  b8 | red bar + 2L guardrail             | Draw+T  | bar x100 y435-508; text x120 y460/484
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { ellipseD } from "./math-kit";

const CX = 300;
const CY = 260;
const PXU = 30; // px per unit along the x-axis of this face-on diagram

const A = { x: CX + 5 * PXU, y: CY }; // (450,260)
const B = { x: CX - 5 * PXU, y: CY }; // (150,260)
const P = { x: CX, y: CY - Math.sqrt(11) * PXU }; // (300,160.5)

export default function M11Ch11Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Advanced: the Sum-of-Distances Locus", "Advanced: Sum-of-Distances Locus")}
        </T>
      </Fade>

      {/* beat 1 — GIVEN + SET UP */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={92} size={14} fill={INK} anchor="middle">
          {t("Find the locus of P with PA + PB = 12,", "P ka locus dhoondo jahan PA + PB = 12,")}
        </T>
        <T x={540} y={114} size={14} fill={INK} anchor="middle">
          {t("where A(5,0,0), B(−5,0,0).", "jahan A(5,0,0), B(−5,0,0) hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={`M 110 ${CY} L 490 ${CY}`} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={RED} />
        <T x={A.x} y={282} size={12} fill={RED} anchor="middle" weight={700}>A(5,0,0)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={RED} />
        <T x={B.x} y={282} size={12} fill={RED} anchor="middle" weight={700}>B(−5,0,0)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={AMBER_DARK} />
        <T x={P.x} y={146} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>P</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={`M ${P.x} ${P.y} L ${A.x} ${A.y}`} stroke={AMBER} sw={1.5} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={392} y={205} size={11} fill={AMBER_DARK} anchor="start">PA</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.0)} d={`M ${P.x} ${P.y} L ${B.x} ${B.y}`} stroke={AMBER} sw={1.5} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={200} y={205} size={11} fill={AMBER_DARK} anchor="end">PB</T>
      </Fade>

      {/* beat 2 — the two-radical equation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={560} y={150} size={15} fill={INK} anchor="start">
          √((x−5)²+y²+z²) + √((x+5)²+y²+z²) = 12
        </T>
      </Fade>

      {/* beat 3 — guidance: isolate, square, isolate, square */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={560} y={190} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Isolate one radical and square —", "Ek radical isolate karo aur square karo —")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={560} y={212} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("then isolate and square again.", "phir isolate karke dubara square karo.")}
        </T>
      </Fade>

      {/* beat 4 — step 1 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={560} y={248} size={16} fill={INK} anchor="start">24√((x+5)²+y²+z²) = 144 + 20x</T>
      </Fade>

      {/* beat 5 — step 2 */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={560} y={286} size={16} fill={INK} anchor="start">36[(x+5)²+y²+z²] = (36+5x)²</T>
      </Fade>

      {/* beat 6 — BOXED ANSWER */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={556} y={320} w={280} h={40} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={18} script={false}>
          x²/36 + y²/11 + z²/11 = 1
        </Chip>
      </Fade>

      {/* beat 7 — sanity/visual: the ellipse around A,B */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={ellipseD(CX, CY, 180, 100)} stroke={GREEN} sw={2.2} dur={1.0} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={CX} y={388} size={14} fill={INK} anchor="middle">
          {t("Ellipsoid of revolution about the x-axis.", "x-axis ke around revolution se ellipsoid banta hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={CX} y={408} size={13} fill={MUTED} anchor="middle">a = 6, b = c = √11</T>
      </Fade>

      {/* beat 8 — red-margin rigour guardrail */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 100 435 L 100 508" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={120} y={460} size={15} fill={RED} anchor="start" weight={700}>
          {t("The rigour lesson: kill the double radical", "Rigour lesson: double radical ko khatam karo")}
        </T>
        <T x={120} y={484} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "in TWO squaring rounds — one root isolated each time.",
            "do squaring rounds mein — har baar ek hi root isolate karke."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
