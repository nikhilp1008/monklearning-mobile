/**
 * M11 Ch12 · Section 10 — "The engine: the Sandwich (Squeeze) Theorem"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED (geometry-heavy derivation, authored directly, extra scrutiny).
 * This is the proof behind Sec8's flagship lim(x→0) sin x/x = 1: the classic unit-circle
 * nested-areas argument (△OAP ⊂ sector OAP ⊂ △OAT), then the Squeeze Theorem itself.
 *
 * GEOMETRY (verified by direct computation, not eyeballed):
 * O=(770,400) r=125. A = O+(r,0) = (895,400) [angle 0]. x_demo = 34° = 0.5934 rad (a clear
 * illustrative small angle — the proof holds for any x in (0, π/2), this is one instance).
 * P = pointOnCircle(O,r,x_demo) = (873.63, 330.10). T = tangent-line-at-A ∩ ray OP extended,
 * so T.x = A.x = 895; T.y = O.y − r·tan(x_demo)/cos(x_demo)⁻¹... solved as t=r/cos(x)=150.78,
 * T.y = O.y − t·sin(x) = 315.69. Check: A.y−T.y = 84.31 = r·tan(34°) = 125×0.6745 = 84.31 ✓.
 * Areas: △OAP = ½r²sin(x) → with r=1 this is ½sin x. Sector OAP = ½r²x → ½x. △OAT = ½·OA·AT
 * = ½·r·(r tan x) → with r=1, ½tan x. So ½sin x ≤ ½x ≤ ½tan x, i.e. sin x ≤ x ≤ tan x — the
 * board seq4 formula, confirmed algebraically before drawing a single pixel.
 * Regions are drawn as OUTLINES ONLY (no fill) so nothing occludes anything, and shared edges
 * (O–A) are drawn once and reused rather than redrawn per shape — each new region only adds
 * the edges unique to it: △OAP adds edge A–P; sector adds the arc A→P; △OAT adds edges A–T, T–O.
 *
 * board_reveal_at_english = [0, 8.7, 25.77, 40.19, 54.87, 66.3, 79.7, 94.29] (8 beats 0-7).
 * board_reveal_at_hinglish = [0, 7.77, 25.6, 38.91, 54.7, 66.22, 82.6, 97.19].
 *
 * Beats:
 *  0(title, always-on) | "The engine: the Sandwich (Squeeze) Theorem"
 *  1 | LEFT: the theorem stated informally + a converging "pinch" icon
 *  2 | RIGHT: THE DIAGRAM — unit circle, staged construction of the 3 nested regions
 *  3 | LEFT: the area inequality ½sin x ≤ ½x ≤ ½tan x
 *  4 | LEFT: divide through — cos x ≤ sin x/x ≤ 1
 *  5 | LEFT: squeeze as x→0 — land sin x/x → 1, boxed green (the payoff)
 *  6 | LEFT: follow-on — (1−cos x)/x² → 1/2
 *  7 | LEFT: brief mention — the e-junction comes from the e^x series
 *
 * Layout plan:
 *  b1 | theorem statement 2 lines (15,ink)   | T st  | x60 y104/128
 *  b1 | pinch icon (2 curves + dot + "L")    | Draw+T| x180..258 y100..132
 *  b2 | circle r125 o(770,400)               | Draw  | x645..895 y275..525
 *  b2 | OA/OP radii, O/A/P dots+labels       | Draw+Fade
 *  b2 | angle arc r35 + "x" label            | Draw+T| ~(816,386)
 *  b2 | △OAP edge A-P (amber)                | Draw
 *  b2 | sector arc A->P r125 (ink)           | Draw
 *  b2 | △OAT edges A-T,T-O (green) + T label | Draw+T
 *  b2 | caption                              | T mid | x832 y556
 *  b3 | area inequality (18,ink)             | T st  | x60 y204
 *  b4 | divided inequality (20,ink,w700)     | T st  | x60 y268
 *  b5 | "cos x->1" line + boxed green result | T+Chip| x60 y304 / chip y336..372
 *  b6 | follow-on Frac + text + "-> 1/2"     | Frac+T| x60 y400..440
 *  b7 | e-series mention                     | T st  | x60 y474/498
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
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, lineD, pointOnCircle, angleArcD, Frac, checkD } from "./math-kit";

const O = { x: 770, y: 400 };
const R = 125;
const X_DEMO = (34 * Math.PI) / 180;
const A = pointOnCircle(O.x, O.y, R, 0);
const P = pointOnCircle(O.x, O.y, R, X_DEMO);
const T_PT = { x: A.x, y: O.y - (R / Math.cos(X_DEMO)) * Math.sin(X_DEMO) };
const X_LABEL = pointOnCircle(O.x, O.y, 48, X_DEMO / 2);

export default function M11Ch12Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("The engine: the Sandwich (Squeeze) Theorem", "Engine: Sandwich (Squeeze) Theorem")}
        </T>
      </Fade>

      {/* beat 1 — the theorem, informally */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={104} size={15} fill={INK} anchor="start">
          {t("If g ≤ f ≤ h near a, and g, h → L,", "Agar a ke paas g ≤ f ≤ h, aur g, h → L,")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={128} size={15} fill={INK} anchor="start" weight={700}>
          {t("then f → L too.", "to f bhi → L.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M180 100 Q222 116 250 116" stroke={AMBER_DARK} sw={1.8} delay={dl(1, 1)} />
      <Draw on={beat >= 1} d="M180 132 Q222 116 250 116" stroke={AMBER_DARK} sw={1.8} delay={dl(1, 1.3)} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Circle cx={250} cy={116} r={3.5} fill={AMBER_DARK} />
        <T x={260} y={120} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          L
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: staged unit-circle construction */}
      <Draw on={beat >= 2} d={circleD(O.x, O.y, R)} stroke={INK} sw={2} delay={dl(2, 0)} />
      <Draw on={beat >= 2} d={lineD(O.x, O.y, A.x, A.y)} stroke={INK} sw={2} delay={dl(2, 0.5)} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
        <Circle cx={A.x} cy={A.y} r={3} fill={INK} />
        <T x={748} y={412} size={13} fill={MUTED} anchor="end">
          O
        </T>
        <T x={895} y={418} size={13} fill={MUTED} anchor="middle">
          A
        </T>
      </Fade>
      <Draw on={beat >= 2} d={lineD(O.x, O.y, P.x, P.y)} stroke={INK} sw={2} delay={dl(2, 1.3)} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Circle cx={P.x} cy={P.y} r={3} fill={INK} />
        <T x={884} y={320} size={13} fill={MUTED} anchor="start">
          P
        </T>
      </Fade>
      <Draw on={beat >= 2} d={angleArcD(O.x, O.y, 35, 0, X_DEMO)} stroke={AMBER_DARK} sw={1.6} delay={dl(2, 2)} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={X_LABEL.x} y={X_LABEL.y} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          x
        </T>
      </Fade>
      <Draw on={beat >= 2} d={lineD(A.x, A.y, P.x, P.y)} stroke={AMBER_DARK} sw={2.2} delay={dl(2, 2.6)} />
      <Draw on={beat >= 2} d={angleArcD(O.x, O.y, R, 0, X_DEMO)} stroke={INK} sw={2.4} delay={dl(2, 3.2)} />
      <Draw
        on={beat >= 2}
        d={`M ${A.x} ${A.y} L ${T_PT.x} ${T_PT.y} L ${O.x} ${O.y}`}
        stroke={GREEN}
        sw={2.2}
        delay={dl(2, 3.8)}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={895} y={302} size={13} fill={GREEN_DARK} anchor="middle">
          T
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={832} y={556} size={13} fill={MUTED} anchor="middle">
          {t("△OAP ⊂ sector OAP ⊂ △OAT", "△OAP ⊂ sector OAP ⊂ △OAT")}
        </T>
      </Fade>

      {/* beat 3 — the area inequality */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={182} size={13} fill={MUTED} anchor="start">
          {t("Compare areas:", "Areas compare kijiye:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={208} size={18} fill={INK} anchor="start">
          ½ sin x ≤ ½ x ≤ ½ tan x
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M58 216 L340 216" stroke={AMBER_DARK} sw={1.4} delay={dl(3, 0.9)} />

      {/* beat 4 — divide through */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={246} size={13} fill={MUTED} anchor="start">
          {t("Multiply by 2, divide by sin x:", "2 se multiply, sin x se divide:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={60} y={274} size={20} fill={INK} anchor="start" weight={700}>
          cos x ≤ sin x/x ≤ 1
        </T>
      </Fade>

      {/* beat 5 — squeeze the ratio, land the payoff */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={304} size={15} fill={INK} anchor="start">
          {t("As x → 0, cos x → 1 too.", "x → 0 par, cos x bhi → 1.")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)} dim={false}>
        <Chip x={60} y={318} w={210} h={38} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          {"sin x / x → 1"}
        </Chip>
      </Fade>
      <Draw on={beat >= 5} d={checkD(292, 337, 16)} stroke={GREEN} sw={2.4} delay={dl(5, 1.1)} />

      {/* beat 6 — follow-on: (1-cos x)/x^2 -> 1/2 */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={402} size={13} fill={MUTED} anchor="start">
          {t("Follow-on junction:", "Agla junction:")}
        </T>
      </Fade>
      <Frac on={beat >= 6} delay={dl(6, 0.4)} x={100} y={438} size={19} numerator="1 − cos x" denominator="x²" width={90} fill={INK} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={155} y={438} size={16} fill={INK} anchor="start">
          {"=  ½ · [sin(x/2) / (x/2)]²  →"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)} dim={false}>
        <T x={422} y={438} size={18} fill={GREEN_DARK} anchor="start" weight={800}>
          1/2
        </T>
      </Fade>

      {/* beat 7 — the e-junction, briefly */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={60} y={476} size={14} fill={INK} anchor="start">
          {t("The e-junction comes from the series:", "e-junction is series se aata hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={60} y={500} size={16} fill={INK} anchor="start">
          {"e^x = 1 + x + x²/2! + ..."}
        </T>
      </Fade>
      <Draw on={beat >= 7} d="M58 508 L300 508" stroke={AMBER_DARK} sw={1.4} delay={dl(7, 1)} />
    </Scene>
  );
}
