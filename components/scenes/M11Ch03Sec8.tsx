/**
 * M11 Ch03 · Section 8 — "From the right triangle to the unit circle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED, real unit-circle geometry, extra eye-check.
 * Opens subtopic 2 (Trigonometric Functions and Quadrant Signs).
 *
 * Note: the source board_content's decorative SVG mislabels its quadrant numerals (rotated
 * one position off standard convention) — this scene places I/II/III/IV correctly instead
 * (QI top-right, QII top-left where P sits, QIII bottom-left, QIV bottom-right).
 *
 * Beats (board_reveal_at_english [0, 6.14, 30.29, 42.41, 50.86, 62.98, 78.51]):
 *  0 subtitle: why we leave the triangle
 *  1 anchor: right triangle caps at 90° - can't reach sin 210° or cos(-40°)
 *  2 THE DIAGRAM: unit circle, radius to P(a,b) in QII, drops, quadrant labels
 *  3 HERO: cosθ = a (x-coord), sinθ = b (y-coord)
 *  4 explain: cosine = across, sine = up
 *  5 chip: |sinθ| ≤ 1 and |cosθ| ≤ 1
 *  6 red-margin closer: cosine across, sine up runs the whole subtopic
 *
 * Layout plan — left column (text) x60-420, right region (diagram+hero) x460-940:
 *  b0 | subtitle (15,amber)              | T mid | x330..750  y84..99  (bl 92)
 *  b1 | "right triangle caps..." (16)    | T st  | x60..430   y134..150 (bl 145)
 *  b1 | underline                        | Draw  | x60..405  y152
 *  b1 | "to reach sin210°..." (16)       | T st  | x60..435   y164..180 (bl 170)
 *  b2 | unit circle c(680,270) r110      | Draw  | x550..810 y140..400
 *  b2 | quadrant labels I,II,III,IV      | T     | radius170 around circle
 *  b2 | θ arc + labels P,M,a,b,1          | T/Draw| around circle
 *  b3 | hero chip                        | Chip  | x470..890  y430..482
 *  b4 | "cosine = across..." (15)        | T st  | x60..435   y210..226 (bl 218)
 *  b4 | "everything downstream..." (15)  | T st  | x60..420   y237..253 (bl 245)
 *  b5 | chip "|sinθ|≤1, |cosθ|≤1"        | Chip  | x60..340   y270..310
 *  b6 | margin bar (red)                 | Draw  | x60  y345..390
 *  b6 | closer (15,red)                  | T st  | x76..410   y357..388
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { UnitCircleDiagram, pointOnCircle, angleArcD } from "./math-kit";

const CX = 680;
const CY = 270;
const R = 110;
const THETA = 2.3;
const P = pointOnCircle(CX, CY, R, THETA);
const FOOT_X = { x: P.x, y: CY };
const FOOT_Y = { x: CX, y: P.y };
const TH_LABEL = pointOnCircle(CX, CY, 55, THETA / 2);
const ONE_LABEL = pointOnCircle(CX, CY, R / 2, THETA);
const QLABEL_R = 170;
const Q1 = pointOnCircle(CX, CY, QLABEL_R, 0.785);
const Q2 = pointOnCircle(CX, CY, QLABEL_R, 2.356);
const Q3 = pointOnCircle(CX, CY, QLABEL_R, 3.927);
const Q4 = pointOnCircle(CX, CY, QLABEL_R, 5.498);

export default function M11Ch03Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("From the Right Triangle to the Unit Circle", "Right Triangle Se Unit Circle Tak")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Why we leave the triangle", "Triangle kyun chhodte hain")}
        </T>
      </Fade>

      {/* beat 1 — anchor: the 90° cap */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={16} fill={INK} anchor="start">
          {t("A right triangle caps angles at 90°.", "Right triangle angles ko 90° tak cap karta hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M 60 152 L 405 152" stroke={RED} sw={1.6} delay={dl(1, 0.5)} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={60} y={175} size={16} fill={INK} anchor="start" weight={700}>
          {t("To reach sin 210° or cos(-40°) we need more.", "sin 210° ya cos(-40°) ke liye aur chahiye.")}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: unit circle with P(a,b) in QII */}
      <UnitCircleDiagram on={beat >= 2} delay={dl(2, 0)} cx={CX} cy={CY} r={R} theta={THETA} />
      <Draw on={beat >= 2} d={angleArcD(CX, CY, 40, 0, THETA)} stroke={AMBER_DARK} sw={1.8} delay={dl(2, 1.2)} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={TH_LABEL.x} y={TH_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle">
          θ
        </T>
        <T x={ONE_LABEL.x - 8} y={ONE_LABEL.y - 6} size={12} fill={MUTED} anchor="middle">
          1
        </T>
        <T x={P.x} y={P.y - 14} size={13} fill={INK} anchor="middle">
          P(a, b)
        </T>
        <T x={FOOT_X.x} y={FOOT_X.y + 18} size={12} fill={MUTED} anchor="middle">
          M
        </T>
        <T x={FOOT_X.x - 20} y={(P.y + CY) / 2 + 4} size={13} fill={INK} anchor="middle">
          a
        </T>
        <T x={CX} y={FOOT_Y.y - 12} size={13} fill={INK} anchor="middle">
          b
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.0)}>
        <T x={Q1.x} y={Q1.y} size={13} fill={MUTED} anchor="middle">
          I
        </T>
        <T x={Q2.x} y={Q2.y} size={13} fill={MUTED} anchor="middle">
          II
        </T>
        <T x={Q3.x} y={Q3.y} size={13} fill={MUTED} anchor="middle">
          III
        </T>
        <T x={Q4.x} y={Q4.y} size={13} fill={MUTED} anchor="middle">
          IV
        </T>
      </Fade>

      {/* beat 3 — HERO: cosθ = a, sinθ = b */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={470} y={430} w={420} h={52} fill={AMBER} textFill={INK} size={18} script={false}>
          cosθ = a (x-coord), sinθ = b (y-coord)
        </Chip>
      </Fade>

      {/* beat 4 — explain: across / up */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={218} size={15} fill={INK} anchor="start">
          {t("Cosine = across-coordinate; sine = up-coordinate.", "Cosine = across-coordinate; sine = up-coordinate.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={60} y={245} size={15} fill={INK} anchor="start" weight={700}>
          {t("Everything downstream falls out of this.", "Aage sab kuch isi se nikalta hai.")}
        </T>
      </Fade>

      {/* beat 5 — the range, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={60} y={270} w={280} h={40} fill={GREEN} textFill="#FFFEFB" size={16} script={false}>
          |sinθ| ≤ 1, |cosθ| ≤ 1
        </Chip>
      </Fade>

      {/* beat 6 — red-margin closer */}
      <Draw on={beat >= 6} d="M 60 345 L 60 390" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={362} size={15} fill={RED} anchor="start" weight={700}>
          {t("Cosine across, sine up -", "Cosine across, sine up -")}
        </T>
        <T x={76} y={384} size={15} fill={RED} anchor="start" weight={700}>
          {t("runs the entire subtopic.", "poore subtopic ko chalata hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
