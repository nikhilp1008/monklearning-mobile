/**
 * M11 Ch03 · Section 29 — "Sum and difference formulas, with the sign mnemonic"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — FLAGGED, the equal-chords unit-circle proof of cos(A-B), the
 * chapter's central derivation. The source board_content's own decorative SVG has chords
 * that are NOT actually equal (its two central angles differ) — this scene constructs its
 * own points so the two chords are genuinely equal by the math, not just by eye.
 *
 * Beats (board_reveal_at_english [0, 4.95, 16.38, 27.39, 38.14, 48.38, 69.38, 71.85, 79.79]):
 *  0 subtitle: compound angle, sum and difference
 *  1 HERO (high): cos(A±B) = cosAcosB ∓ sinAsinB
 *  2 sin(A±B) = sinAcosB ± cosAsinB
 *  3 tan(A±B) = (tanA±tanB)/(1∓tanAtanB)
 *  4 red-margin (high): sign mnemonic - cos flips, sin follows, tan denom opposite
 *  5 THE DIAGRAM: unit circle, equal chords P₁P₂ = P₃P₄ ⇒ cos(A-B)
 *  6 heading: useful products of compound angles
 *  7 formula: cos(A+B)cos(A-B) = cos²A - sin²B
 *  8 formula: sin(A+B)sin(A-B) = sin²A - sin²B
 *
 * Layout plan — left column (formulas+mnemonic) x60-480, right (diagram) x670-872, bottom
 * (products) full width:
 *  b0 | subtitle (13,amber)              | T st | x60..460  y72..86  (bl 78)
 *  b1 | hero chip                        | Chip | x60..470   y88..124
 *  b2 | chip                             | Chip | x60..460   y132..166
 *  b3 | chip                             | Chip | x60..470   y174..212
 *  b4 | margin bar (red)                 | Draw | x60  y228..300
 *  b4 | 3 lines (13,red)                 | T st | x76..460   y246..290
 *  b5 | caption (12,w700)                | T mid | x670..872  y88..102 (bl 96)
 *  b5 | circle c(770,215) r95 + chords   | Draw | x675..865  y120..310
 *  b6 | "Useful products..." (15,amber)  | T st | x60..420  y345..361 (bl 353)
 *  b6 | underline                        | Draw | x60..420  y361
 *  b7 | chip                             | Chip | x60..460   y368..404
 *  b8 | chip                             | Chip | x60..460   y412..448
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, pointOnCircle, lineD } from "./math-kit";

const CX = 770;
const CY = 215;
const R = 95;
const TH_A = 1.745;
const TH_B = 0.524;
const TH_AB = TH_A - TH_B;

const P1 = pointOnCircle(CX, CY, R, TH_A);
const P2 = pointOnCircle(CX, CY, R, TH_B);
const P3 = pointOnCircle(CX, CY, R, TH_AB);
const P4 = pointOnCircle(CX, CY, R, 0);

export default function M11Ch03Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={17} fill={RED} anchor="middle" script>
          {t("Sum and Difference Formulas, With the Sign Mnemonic", "Sum aur Difference Formulas, Sign Mnemonic ke Saath")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={78} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Compound angle: sum and difference", "Compound angle: sum aur difference")}
        </T>
      </Fade>

      {/* beat 1 — HERO: cosine sum/difference */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={60} y={88} w={410} h={36} fill={AMBER} textFill={INK} size={16} script={false}>
          cos(A±B) = cosAcosB ∓ sinAsinB
        </Chip>
      </Fade>

      {/* beat 2 — sine sum/difference */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={132} w={400} h={34} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          sin(A±B) = sinAcosB ± cosAsinB
        </Chip>
      </Fade>

      {/* beat 3 — tangent sum/difference */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={60} y={174} w={410} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          tan(A±B) = (tanA±tanB)/(1∓tanAtanB)
        </Chip>
      </Fade>

      {/* beat 4 — red-margin: the sign mnemonic */}
      <Draw on={beat >= 4} d="M 60 228 L 60 300" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={76} y={246} size={13} fill={RED} anchor="start" weight={700}>
          {t("cosine flips the sign,", "cosine sign flip karta hai,")}
        </T>
        <T x={76} y={268} size={13} fill={RED} anchor="start" weight={700}>
          {t("sine follows the sign,", "sine sign follow karta hai,")}
        </T>
        <T x={76} y={290} size={13} fill={RED} anchor="start">
          {t("tan: denominator opposite numerator.", "tan: denominator numerator ke opposite.")}
        </T>
      </Fade>

      {/* beat 5 — THE DIAGRAM: equal chords on the unit circle */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={771} y={96} size={12} fill={INK} anchor="middle" weight={700}>
          {t("cos(A-B): equal chords give the master formula", "cos(A-B): equal chords se master formula")}
        </T>
      </Fade>
      <Draw on={beat >= 5} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} delay={dl(5, 0.2)} />
      <Draw on={beat >= 5} d={lineD(CX, CY, P1.x, P1.y)} stroke={AMBER_DARK} sw={1.3} delay={dl(5, 0.4)} />
      <Draw on={beat >= 5} d={lineD(CX, CY, P2.x, P2.y)} stroke={AMBER_DARK} sw={1.3} delay={dl(5, 0.5)} />
      <Draw on={beat >= 5} d={lineD(CX, CY, P3.x, P3.y)} stroke={AMBER_DARK} sw={1.3} delay={dl(5, 0.6)} />
      <Draw on={beat >= 5} d={lineD(CX, CY, P4.x, P4.y)} stroke={MUTED} sw={1.3} delay={dl(5, 0.7)} />
      <Draw on={beat >= 5} d={lineD(P1.x, P1.y, P2.x, P2.y)} stroke={RED} sw={2.6} delay={dl(5, 0.9)} />
      <Draw on={beat >= 5} d={lineD(P3.x, P3.y, P4.x, P4.y)} stroke={RED} sw={2.6} delay={dl(5, 1.2)} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Circle cx={P1.x} cy={P1.y} r={3.5} fill={AMBER_DARK} />
        <Circle cx={P2.x} cy={P2.y} r={3.5} fill={AMBER_DARK} />
        <Circle cx={P3.x} cy={P3.y} r={3.5} fill={AMBER_DARK} />
        <Circle cx={P4.x} cy={P4.y} r={3.5} fill={MUTED} />
        <T x={733} y={112} size={11} fill={AMBER_DARK} anchor="middle">P₁(A)</T>
        <T x={880} y={168} size={11} fill={AMBER_DARK} anchor="middle">P₂(B)</T>
        <T x={800} y={112} size={11} fill={AMBER_DARK} anchor="middle">P₃(A-B)</T>
        <T x={878} y={228} size={11} fill={MUTED} anchor="middle">P₄(1,0)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={671} y={306} size={11} fill={RED} anchor="start">
          {t("equal chords: P₁P₂ = P₃P₄", "equal chords: P₁P₂ = P₃P₄")}
        </T>
      </Fade>

      {/* beat 6 — useful products, subheading */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={353} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Useful products of compound angles", "Compound angles ke useful products")}
        </T>
      </Fade>
      <Draw on={beat >= 6} d="M 60 361 L 420 361" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 0.5)} />

      {/* beat 7 — product 1 */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={60} y={368} w={400} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          cos(A+B)cos(A-B) = cos²A - sin²B
        </Chip>
      </Fade>

      {/* beat 8 — product 2 */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <Chip x={60} y={412} w={400} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          sin(A+B)sin(A-B) = sin²A - sin²B
        </Chip>
      </Fade>
    </Scene>
  );
}
