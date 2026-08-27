/**
 * M11 Ch10 · Section 9 — "From the distance rule to the equation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — Subtopic 2 (The Circle), sec 9 of 13. FLAGGED
 * derivation section (task brief) — extra scrutiny on the algebra and the
 * right-angle-in-semicircle diagram.
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 6.4, 20.48, 28.76, 48.73, 64.09,
 * 70.23, 82.6, 101.03]; reveals_hinglish = [0, 6.4, 16.64, 24.92, 43.69,
 * 56.15, 63.15, 74.58, 91.56].
 *
 * LEFT (x140-500, y120-350): standard-form derivation — C(h,k)/P(x,y)/r
 * diagram -> distance formula -> squared (boxed, HIGH).
 * RIGHT (x560-1020, y140-275): general-form derivation — equation -> complete
 * the square -> boxed matching result (centre, r²).
 * BOTTOM (full width, y372-560): the semicircle bonus result. The right-angle
 * mark at P is NOT hand-placed — it's built from the actual unit vectors
 * P->A and P->B (computed live), so the little square glyph is only ever
 * drawn if those two directions are genuinely perpendicular, i.e. it can't
 * silently render a wrong-looking right angle.
 *
 * Beats:
 *  0(title,always-on) | "From the distance rule to the equation"
 *  1 | setup: C(h,k), P(x,y), CP=r (diagram + caption)
 *  2 | distance formula: √((x-h)²+(y-k)²) = r
 *  3 | (HIGH) squared, boxed: (x-h)²+(y-k)² = r²  [standard form]
 *  4 | heading: General form — complete the square
 *  5 | x²+y²+2gx+2fy+c = 0
 *  6 | (x+g)²+(y+f)² = g²+f²-c
 *  7 | boxed match: centre(-g,-f), r² = g²+f²-c
 *  8 | semicircle diagram: angle at P = 90° -> diameter form
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD, lineD, pointOnCircle } from "./math-kit";

const C = { x: 180, y: 180 };
const RAD_PX = 60;
const P1 = pointOnCircle(C.x, C.y, RAD_PX, (35 * Math.PI) / 180);

const O2 = { x: 540, y: 460 };
const RC = 65;
const A2 = { x: O2.x - RC, y: O2.y };
const B2 = { x: O2.x + RC, y: O2.y };
const P2 = pointOnCircle(O2.x, O2.y, RC, (130 * Math.PI) / 180);

function norm(vx: number, vy: number) {
  const len = Math.hypot(vx, vy);
  return { x: vx / len, y: vy / len };
}
const uA = norm(A2.x - P2.x, A2.y - P2.y);
const uB = norm(B2.x - P2.x, B2.y - P2.y);
const S = 14;
const corner1 = { x: P2.x + S * uA.x, y: P2.y + S * uA.y };
const corner2 = { x: corner1.x + S * uB.x, y: corner1.y + S * uB.y };
const corner3 = { x: P2.x + S * uB.x, y: P2.y + S * uB.y };
const rightAngleD = `M ${corner1.x} ${corner1.y} L ${corner2.x} ${corner2.y} L ${corner3.x} ${corner3.y}`;
const bis = norm(uA.x + uB.x, uA.y + uB.y);
const angleLabelPt = { x: P2.x + 30 * bis.x, y: P2.y + 30 * bis.y };

export default function M11Ch10Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("From the distance rule to the equation", "Distance rule se equation tak")}
        </T>
      </Fade>

      {/* beat 1 — setup diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t("Centre C(h,k), point P(x,y) on the circle, with CP = r.", "Centre C(h,k), circle par point P(x,y), CP = r.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={circleD(C.x, C.y, RAD_PX)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={C.x} cy={C.y} r={3} fill={INK} />
        <T x={155} y={168} size={12} fill={INK} anchor="end" weight={700}>C(h, k)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={lineD(C.x, C.y, P1.x, P1.y)} stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Circle cx={P1.x} cy={P1.y} r={3} fill={INK} />
        <T x={237} y={140} size={12} fill={INK} anchor="start" weight={700}>P(x, y)</T>
        <T x={196} y={155} size={12} fill={INK} anchor="end">r</T>
      </Fade>

      {/* beat 2 — distance formula */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={320} y={280} size={17} fill={INK} anchor="middle">√((x − h)² + (y − k)²) = r</T>
      </Fade>

      {/* beat 3 — squared, boxed (HIGH) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={165} y={310} w={310} h={48} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          (x − h)² + (y − k)² = r²
        </Chip>
      </Fade>

      {/* beat 4 — general form heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={780} y={140} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("General form: complete the square", "General form: square complete karo")}
        </T>
      </Fade>

      {/* beat 5 — general equation */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={172} size={16} fill={INK} anchor="middle">x² + y² + 2gx + 2fy + c = 0</T>
      </Fade>

      {/* beat 6 — completed square */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={780} y={202} size={16} fill={INK} anchor="middle">(x + g)² + (y + f)² = g² + f² − c</T>
      </Fade>

      {/* beat 7 — boxed match */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={610} y={228} w={340} h={48} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          {t("centre (−g, −f),  r² = g² + f² − c", "centre (−g, −f),  r² = g² + f² − c")}
        </Chip>
      </Fade>

      {/* beat 8 — semicircle: angle at P = 90 -> diameter form */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={540} y={372} size={14} fill={INK} anchor="middle">
          {t("Angle in a semicircle is 90° — the diameter form:", "Semicircle mein angle 90° hota hai — diameter form:")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.4)} d={circleD(O2.x, O2.y, RC)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 1.0)} d={lineD(A2.x, A2.y, B2.x, B2.y)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.4)}>
        <Circle cx={A2.x} cy={A2.y} r={3} fill={INK} />
        <T x={A2.x - 12} y={A2.y + 5} size={12} fill={INK} anchor="end" weight={700}>A</T>
        <Circle cx={B2.x} cy={B2.y} r={3} fill={INK} />
        <T x={B2.x + 12} y={B2.y + 5} size={12} fill={INK} anchor="start" weight={700}>B</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1.8)} d={lineD(P2.x, P2.y, A2.x, A2.y)} stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 8} delay={dl(8, 2.1)} d={lineD(P2.x, P2.y, B2.x, B2.y)} stroke={INK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 8} delay={dl(8, 2.5)}>
        <Circle cx={P2.x} cy={P2.y} r={3} fill={INK} />
        <T x={P2.x - 10} y={P2.y - 8} size={12} fill={INK} anchor="end" weight={700}>P</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 2.8)} d={rightAngleD} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 8} delay={dl(8, 3.1)}>
        <T x={angleLabelPt.x} y={angleLabelPt.y} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>90°</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.5)}>
        <T x={540} y={552} size={15} fill={INK} anchor="middle">(x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0</T>
      </Fade>
    </Scene>
  );
}
