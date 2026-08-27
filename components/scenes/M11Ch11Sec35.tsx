/**
 * M11 Ch11 · Section 35 — "Worked example: an equidistant point on the y-axis"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. Opens the closing subtopic "Distance and Section Formulas in 3D".
 * Pattern follows M11Ch11Sec22/Sec24 (left column narration+algebra, right column project3D
 * diagram): proj = (x,y,z) => project3D(x,y,z,OX,OY,SCALE).
 *
 * Problem: A(3,1,2), B(-1,5,-4). Find R(0,y,0) on the y-axis equidistant from A and B.
 * Independently hand-solved (not just trusting the JSON's claimed answer):
 *   RA² = 3² + (y-1)² + 2² = 9 + (y-1)² + 4 = y² - 2y + 14
 *   RB² = (-1)² + (y-5)² + (-4)² = 1 + (y-5)² + 16 = y² - 10y + 42
 *   y²-2y+14 = y²-10y+42  =>  8y = 28  =>  y = 7/2. Point R = (0, 7/2, 0). MATCHES the JSON.
 *   Sanity check: RA² at y=3.5 = 9+(2.5)²+4 = 9+6.25+4 = 19.25. RB² = 1+(1.5)²+16 = 1+2.25+16 = 19.25. Equal. Confirmed.
 *
 * Projection (math-kit project3D, xForeshorten=0.6): OX=760, OY=340, SCALE=36.
 *   screenX = 760 + 36y - 18.706x   screenY = 340 - 36z + 10.8x
 * Hand-verified points (all safe-area-checked, x in [36,1044], y in [30,596]):
 *   O = (760, 340)
 *   A(3,1,2)  -> screenX=760+36-56.118=739.88  screenY=340-72+32.4=300.40      -> (739.88, 300.40)
 *   B(-1,5,-4)-> screenX=760+180+18.706=958.71 screenY=340+144-10.8=473.20     -> (958.71, 473.20)
 *   R(0,3.5,0)-> screenX=760+126=886           screenY=340                    -> (886.00, 340.00)  [lies
 *     exactly on the y-axis line, since x=z=0 gives screenY=OY always — confirms the projection.]
 *   X_TIP=proj(4,0,0)  -> (685.18, 383.20)      down-left, per the primitive's own convention
 *   Z_TIP=proj(0,0,2.5)-> (760.00, 250.00)      straight up
 *   ZN_TIP=proj(0,0,-4.5)->(760.00, 502.00)     straight down (covers B's z=-4)
 *   Y_TIP=proj(0,6,0)  -> (976.00, 340.00)      straight right (covers B's y=5 and R's y=3.5)
 * All within safe area; diagram's leftmost feature (X_TIP x=685.18) sits well clear of the left
 * narration column (max text-right-edge ~345), gutter ~340px, never crossed.
 *
 * reveals_english  = [0, 10.92, 20.31, 36.95, 49.75, 66.3, 77.23, 90.88, 101.29] (9 values, beats 0-8).
 * reveals_hinglish = [0, 9.39, 16.38, 30.63, 41.81, 59.82, 72.11, 83.11, 94.04].
 *
 * Beats (worked_examples arc: given -> setup the object -> equation -> step by step -> boxed
 * answer -> sanity/guardrail):
 *  0 (title, always-on) | "Worked example: an equidistant point on the y-axis"
 *  1 | given: draw axes (X+,Z+,Z-,Y+) + O; plot A, B with labels
 *  2 | setup: highlight the y-axis (amber) + generic dot at R's final screen slot, tagged
 *      "R(0, y, 0)" (unknown y — the position is used only as geometry, no number is shown)
 *  3 | equation: "Impose RA² = RB²." + construction lines (muted) R->A, R->B tagged RA/RB
 *  4 | formula 1: "9 + (y-1)² + 4 = 1 + (y-5)² + 16" + underline
 *  5 | formula 2 (expanded): "y² - 2y + 14 = y² - 10y + 42" + underline
 *  6 | formula 3 (solved): "8y = 28 ⇒ y = 7/2" + ring around "y = 7/2"
 *  7 | boxed answer: green Chip "Point R = (0, 7/2, 0)"; diagram erases the generic R/lines,
 *      draws the final green dot + label + solid segments RA, RB in their place
 *  8 | red-margin guardrail: the y² terms always cancel — equidistant is always linear
 *
 * Layout plan (left column x60, text right edge <=345; diagram x685-1044):
 *  b0 | title                              | T mid    | x540 y58
 *  b1 | given 3L                           | T start  | x60 y100/123/146
 *  b1 | X,Z+,Z-,Y arrows + O dot/label     | Draw+T   | O(760,340)
 *  b1 | axis labels X/Z/Z'/Y               | T        | (672,395)/(760,234)/(772,506)/(992,344)
 *  b1 | A dot + label                     | Fade+T   | (739.88,300.40); label end (726,314)
 *  b1 | B dot + label                     | Fade+T   | (958.71,473.20); label start (920,498)
 *  b2 | setup 2L                          | T start  | x60 y186/209
 *  b2 | y-axis highlight (amber)          | Draw     | (760,340)-(960,340)
 *  b2 | generic R dot + label             | Fade+T   | (886,340); label start (894,364)
 *  b3 | "Impose RA²=RB²."                 | T start  | x60 y250
 *  b3 | construction lines R->A, R->B     | Draw     | muted, + tiny "RA"/"RB" tags
 *  b4 | formula1 + underline              | T+Draw   | x60 y293, underline y309
 *  b5 | formula2 + underline              | T+Draw   | x60 y350, underline y366
 *  b6 | formula3 (2-seg) + ring on "y=7/2"| T+Draw   | x60 y407; ring cx174 cy403.24 rx42 ry20.72
 *  b7 | Chip "Point R = (0, 7/2, 0)"      | Chip     | x60 y458 w230 h42
 *  b7 | diagram: erase generic, draw final R dot/label/segments (green)
 *  b8 | red bar + 2L guardrail            | Draw+T   | x60 y524-584 / text x76 y544/567
 *
 * Vertical budget: title bottom~71 -> b1(100-150.34) -> b2(174.3-213.65) -> b3(238.3-254.65) ->
 * b4(280.52-309[underline]) -> b5(337.52-366) -> b6(394.52-430.1[ring bottom]) -> b7 chip(458-500)
 * -> b8 bar(524-584, text bottom~591) <= safe596. All group gaps checked >= the spec's minimums.
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
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D, lineD } from "./math-kit";

const OX = 760;
const OY = 340;
const SCALE = 36;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const O = { x: OX, y: OY };
const A = proj(3, 1, 2); // (739.88, 300.40)
const B = proj(-1, 5, -4); // (958.71, 473.20)
const R = proj(0, 3.5, 0); // (886.00, 340.00)

const X_TIP = proj(4, 0, 0); // (685.18, 383.20)
const Z_TIP = proj(0, 0, 2.5); // (760.00, 250.00)
const ZN_TIP = proj(0, 0, -4.5); // (760.00, 502.00)
const Y_TIP = proj(0, 6, 0); // (976.00, 340.00)
const HL_END = { x: 960, y: 340 }; // y-axis highlight stops 16px short of the arrowhead

export default function M11Ch11Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const genericR = beat >= 2 && beat < 7;
  const finalR = beat >= 7;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={RED} anchor="middle" script>
          {t("Worked example: an equidistant point on the y-axis", "Worked example: y-axis par equidistant point")}
        </T>
      </Fade>

      {/* beat 1 — given: axes + O, plot A and B */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("Find the point on the y-axis", "y-axis par wo point dhoondo")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("equidistant from A(3, 1, 2)", "jo A(3, 1, 2) aur B(-1, 5, -4)")}
        </T>
        <T x={60} y={146} size={14} fill={INK} anchor="start">
          {t("and B(-1, 5, -4).", "se equidistant ho.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(O.x, O.y, ZN_TIP.x, ZN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(O.x, O.y, Y_TIP.x, Y_TIP.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.35)}>
        <T x={770} y={362} size={12} fill={RED} anchor="start" weight={700}>O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={672} y={395} size={14} fill={INK} anchor="end" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={760} y={234} size={14} fill={INK} anchor="middle" weight={700}>Z</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={772} y={506} size={12} fill={MUTED} anchor="start">Z&apos;</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={992} y={344} size={14} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Circle cx={A.x} cy={A.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={726} y={314} size={14} fill={INK} anchor="end" weight={700}>
          A(3, 1, 2)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={B.x} cy={B.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={920} y={498} size={14} fill={INK} anchor="start" weight={700}>
          B(-1, 5, -4)
        </T>
      </Fade>

      {/* beat 2 — setup: a point on the y-axis has the form R(0,y,0) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={186} size={15} fill={INK} anchor="start" weight={700}>
          {t("A point on the y-axis has the", "y-axis ke point ka form hota")}
        </T>
        <T x={60} y={209} size={15} fill={INK} anchor="start" weight={700}>
          {t("form R(0, y, 0) — 3 unknowns → 1.", "hai R(0, y, 0) — 3 unknowns → 1.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={lineD(O.x, O.y, HL_END.x, HL_END.y)} stroke={AMBER} sw={4} dur={0.6} />
      <Fade on={genericR} delay={dl(2, 1.0)}>
        <Circle cx={R.x} cy={R.y} r={4} fill={MUTED} stroke={INK} strokeWidth={1} />
      </Fade>
      <Fade on={genericR} delay={dl(2, 1.2)}>
        <T x={894} y={364} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          R(0, y, 0)
        </T>
      </Fade>

      {/* beat 3 — impose RA² = RB² */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={250} size={15} fill={INK} anchor="start" weight={700}>
          Impose RA² = RB².
        </T>
      </Fade>
      <Draw on={genericR} delay={dl(3, 0.5)} d={lineD(R.x, R.y, A.x, A.y)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={genericR} delay={dl(3, 0.9)} d={lineD(R.x, R.y, B.x, B.y)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={genericR} delay={dl(3, 1.3)}>
        <T x={800} y={312} size={11} fill={MUTED} anchor="end">RA</T>
      </Fade>
      <Fade on={genericR} delay={dl(3, 1.5)}>
        <T x={930} y={404} size={11} fill={MUTED} anchor="start">RB</T>
      </Fade>

      {/* beat 4 — formula: substitute the coordinates */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={293} size={16} fill={INK} anchor="start" weight={700}>
          9 + (y-1)² + 4 = 1 + (y-5)² + 16
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={lineD(60, 309, 324, 309)} stroke={AMBER_DARK} sw={1.6} dur={0.4} />

      {/* beat 5 — formula: expand and tidy */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={350} size={16} fill={INK} anchor="start" weight={700}>
          y² - 2y + 14 = y² - 10y + 42
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={lineD(60, 366, 292, 366)} stroke={AMBER_DARK} sw={1.6} dur={0.4} />

      {/* beat 6 — formula: y² cancels, solve the linear remainder */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={407} size={16} fill={INK} anchor="start" weight={700}>
          8y = 28 ⇒{" "}
        </T>
        <T x={146} y={407} size={16} fill={INK} anchor="start" weight={700}>
          y = 7/2
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d={ringD(174, 403.24, 42, 20.72)} stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 7 — boxed answer + diagram lands on the real R */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={60} y={458} w={230} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          Point R = (0, 7/2, 0)
        </Chip>
      </Fade>
      <Draw on={finalR} delay={dl(7, 0.5)} d={lineD(R.x, R.y, A.x, A.y)} stroke={GREEN} sw={2} dur={0.5} />
      <Draw on={finalR} delay={dl(7, 0.9)} d={lineD(R.x, R.y, B.x, B.y)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={finalR} delay={dl(7, 1.3)}>
        <Circle cx={R.x} cy={R.y} r={5} fill={GREEN} stroke={INK} strokeWidth={1} />
      </Fade>
      <Fade on={finalR} delay={dl(7, 1.5)}>
        <T x={894} y={364} size={13} fill={GREEN_DARK} anchor="start" weight={700}>
          R(0, 7/2, 0)
        </T>
      </Fade>

      {/* beat 8 — guardrail: equidistant from two points is always linear */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 60 524 L 60 584" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={76} y={544} size={13} fill={RED} anchor="start" weight={700}>
          {t("The y² terms cancel —", "y² terms cancel ho jaate hain —")}
        </T>
        <T x={76} y={567} size={13} fill={RED} anchor="start" weight={700}>
          {t("'equidistant' is always linear.", "'equidistant' hamesha linear hota hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
