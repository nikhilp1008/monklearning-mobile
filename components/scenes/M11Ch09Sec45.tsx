/**
 * M11 Ch09 · Section 45 — "Proof: the bisector is the equidistant locus"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, titled "Proof:" — opens Subtopic 6 (Angle Bisectors). FLAGGED for extra
 * eye-scrutiny per task brief (Sec46 right after it is also flagged). Single-column top-to-bottom
 * proof: statement -> schematic diagram -> modulus-bar formula -> ± formula (same slot pivot,
 * with the bars-formula DIMMED in place + a connecting arrow, so a single settled frame shows
 * both "before" and "after") -> closing line -> red-margin guardrail.
 *
 * board_content has 8 items (seq1..seq8). seq1 (heading) is the always-on title. seq2..seq8 gate
 * at beat>=1..beat>=7. reveals_english=[0,8.62,14.17,22.19,33.71,44.46,53.76,64.26] (8 values).
 * reveals_hinglish=[0,7.42,12.63,19.8,29.78,40.62,48.13,56.83] (8 values). This is a proof about a
 * general relationship (no specific numbers to hand-verify) — the one geometric fact that DOES
 * need verification is the diagram's two "equal" perpendicular drops, done below.
 *
 * DIAGRAM geometry — built fresh (not the JSON's embedded svg), schematic (non-Cartesian), all
 * computed from real trig so it can never drift (same discipline as Sec10/11/37's atan2/pointOnCircle
 * use). Vertex V, two rays L1 (steep, THETA1=48°) and L2 (shallow, THETA2=6°) fanning up-right from
 * V. P sits on the INTERNAL BISECTOR of the wedge (THETA_MID = 27°) at distance P_DIST along it —
 * by bisector symmetry the perpendicular distance from P to each ray is exactly
 * P_DIST * sin((THETA1-THETA2)/2) for BOTH rays, so choosing P_DIST = 45 / sin(21°) makes both
 * drops exactly 45px BY CONSTRUCTION (not by hand-picked coordinates). Verified numerically
 * (Node, same formulas as the component): V=(340,308), L1_END=(463.79,170.52),
 * L2_END=(688.08,271.42), P=(451.88,250.99), FOOT1=(418.44,220.88), FOOT2=(456.59,295.75),
 * dist(P,FOOT1) = 45.00px, dist(P,FOOT2) = 45.00px — EQUAL, confirmed to 2 decimal places.
 * Both feet also verified to fall strictly between V and each ray's drawn endpoint
 * (tproj=117.23 <= RAY1_LEN=185 and <= RAY2_LEN=350), so the drop segments land on the drawn rays.
 *
 * Beats:
 *  0(title, always-on) | "Proof: The Bisector is the Equidistant Locus"
 *  1 | text: P is equidistant from L1 and L2
 *  2 | THE DIAGRAM: V -> L1 ray+tag -> L2 ray+tag -> P dot+tag -> two MUTED 45px drops -> "equal"x2
 *  3 | formula (modulus/bars), lands INK, centered — stays visible, DIMS at beat 5
 *  4 | text: removing the moduli gives two cases (equal, or negatives)
 *  5 | short down-arrow (transition cue) + formula (±, bars replaced by parens, same var order/
 *      spacing as beat 3 so the pivot reads as "this transformed", not "a new formula appeared")
 *  6 | text: each sign is a first-degree equation, hence a line — together, the two bisectors
 *  7 | RED-MARGIN guardrail (high emphasis): each line keeps its OWN denominator, never shared
 *
 * Layout plan (all formula/text rows centered x540 unless noted; Anek/non-script throughout so
 * numeric sub/superscripts stay native — see SCENE_AUTHORING_MATHS.md's Kalam-digit-gap rule):
 *  b0  | title (26,red,script)                        | T mid | x540 y62
 *  b1  | statement text (16,ink)                       | T mid | x540 y100
 *  b2  | V dot (ink, r3)                                | circle | (340,308)
 *  b2  | L1 ray (ink) V->L1_END                         | Draw | (340,308)->(463.79,170.52)
 *  b2  | "L1" tag (ink,14,w700)                         | T st | (477.79,166.52)
 *  b2  | L2 ray (ink) V->L2_END                         | Draw | (340,308)->(688.08,271.42)
 *  b2  | "L2" tag (ink,14,w700)                         | T st | (702.08,275.42)
 *  b2  | P dot (amber_dark, r4.5)                       | circle | (451.88,250.99)
 *  b2  | "P" tag (amber_dark,14,w700)                   | T st | (481.88,236.99)
 *  b2  | drop1 (muted) P->FOOT1                         | Draw | (451.88,250.99)->(418.44,220.88)
 *  b2  | drop2 (muted) P->FOOT2                         | Draw | (451.88,250.99)->(456.59,295.75)
 *  b2  | "equal" x2 (muted,12,mid)                      | T mid | (451.22,218.1) / (478.1,270.86)
 *  b3  | formula (bars) (20,ink,w700) — dims at beat>=5 | T mid | x540 y356
 *  b4  | text (14,ink)                                  | T mid | x540 y390
 *  b5  | transition arrow (amber_dark)                  | Draw arrowD | x540 y406->427
 *  b5  | formula (±) (20,ink,w700)                       | T mid | x540 y456
 *  b6  | text (14,ink)                                  | T mid | x540 y492
 *  b7  | red bar (verdict band)                          | Draw | x320 y518..582
 *  b7  | guardrail 2-line text (16,red,w700,start)       | T st | x352 y540 / y568
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD, pointOnCircle } from "./math-kit";

const DEG = Math.PI / 180;

// wedge vertex + ray angles (schematic — not Cartesian coordinates)
const V = { x: 340, y: 308 };
const THETA1 = 48 * DEG; // L1 — steep, up-right
const THETA2 = 6 * DEG; // L2 — shallow, near-horizontal
const THETA_MID = (THETA1 + THETA2) / 2;
const HALF_ANGLE = (THETA1 - THETA2) / 2;

const RAY1_LEN = 185;
const RAY2_LEN = 350;
const DROP_LEN = 45; // the two perpendicular distances — see header verification
const P_DIST = DROP_LEN / Math.sin(HALF_ANGLE); // places P so BOTH drops = DROP_LEN, by symmetry

const L1_END = pointOnCircle(V.x, V.y, RAY1_LEN, THETA1);
const L2_END = pointOnCircle(V.x, V.y, RAY2_LEN, THETA2);
const P = pointOnCircle(V.x, V.y, P_DIST, THETA_MID);

function footOnRay(theta: number) {
  const u = { x: Math.cos(theta), y: -Math.sin(theta) };
  const vx = P.x - V.x;
  const vy = P.y - V.y;
  const tproj = vx * u.x + vy * u.y;
  return { x: V.x + tproj * u.x, y: V.y + tproj * u.y };
}
const FOOT1 = footOnRay(THETA1);
const FOOT2 = footOnRay(THETA2);

// label anchors
const L1_LABEL = { x: L1_END.x + 14, y: L1_END.y - 4 };
const L2_LABEL = { x: L2_END.x + 14, y: L2_END.y + 4 };
const P_LABEL = { x: P.x + 30, y: P.y - 14 };

// "equal" labels: offset perpendicular from each drop's midpoint, on the side AWAY from V
// (i.e. outward from the wedge interior), so they never sit on the ray strokes.
function outwardLabel(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  const segLen = Math.hypot(b.x - a.x, b.y - a.y);
  const dir = { x: (b.x - a.x) / segLen, y: (b.y - a.y) / segLen };
  const perp = { x: dir.y, y: -dir.x };
  // pick the perpendicular that points away from V
  const towardV = { x: V.x - mid.x, y: V.y - mid.y };
  const sign = perp.x * towardV.x + perp.y * towardV.y > 0 ? -1 : 1;
  const OFFSET = 24;
  return { x: mid.x + perp.x * sign * OFFSET, y: mid.y + perp.y * sign * OFFSET };
}
const EQUAL1 = outwardLabel(P, FOOT1);
const EQUAL2 = outwardLabel(P, FOOT2);

export default function M11Ch09Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Proof: The Bisector is the Equidistant Locus", "Proof: Bisector Hi Equidistant Locus Hai")}
        </T>
      </Fade>

      {/* beat 1 — statement */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {t("A point P is equidistant from lines L₁ and L₂.", "Point P dono lines L₁ aur L₂ se equidistant hai.")}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: two rays from a shared vertex, P inside the wedge, equal drops */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={V.x} cy={V.y} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={lineD(V.x, V.y, L1_END.x, L1_END.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={L1_LABEL.x} y={L1_LABEL.y} size={14} fill={INK} anchor="start" weight={700}>
          L₁
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.15)} d={lineD(V.x, V.y, L2_END.x, L2_END.y)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.85)}>
        <T x={L2_LABEL.x} y={L2_LABEL.y} size={14} fill={INK} anchor="start" weight={700}>
          L₂
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.15)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={P_LABEL.x} y={P_LABEL.y} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          P
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.7)} d={lineD(P.x, P.y, FOOT1.x, FOOT1.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.15)} d={lineD(P.x, P.y, FOOT2.x, FOOT2.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={EQUAL1.x} y={EQUAL1.y} size={12} fill={MUTED} anchor="middle">
          {t("equal", "equal")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.85)}>
        <T x={EQUAL2.x} y={EQUAL2.y} size={12} fill={MUTED} anchor="middle">
          {t("equal", "equal")}
        </T>
      </Fade>

      {/* beat 3 — formula (modulus/bars). Stays visible; dims once beat 5's ± version lands. */}
      <Fade on={beat >= 3} delay={dl(3, 0)} dim={beat >= 5}>
        <T x={540} y={356} size={20} fill={INK} anchor="middle" weight={700}>
          |a₁x + b₁y + c₁| / √(a₁² + b₁²)  =  |a₂x + b₂y + c₂| / √(a₂² + b₂²)
        </T>
      </Fade>

      {/* beat 4 — removing the moduli gives two cases */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={390} size={14} fill={INK} anchor="middle">
          {t(
            "Removing the moduli gives two cases — the expressions equal, or negatives of each other.",
            "Moduli hatao — do cases bante hain: ya expressions equal hain, ya ek-dusre ke negative."
          )}
        </T>
      </Fade>

      {/* beat 5 — transition arrow + the ± formula (bars dropped, ± introduced — same slot/shape as beat 3) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={arrowD(540, 406, 540, 427)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={456} size={20} fill={INK} anchor="middle" weight={700}>
          (a₁x + b₁y + c₁) / √(a₁² + b₁²)  =  ±(a₂x + b₂y + c₂) / √(a₂² + b₂²)
        </T>
      </Fade>

      {/* beat 6 — each sign is a first-degree equation, hence a line */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={492} size={14} fill={INK} anchor="middle">
          {t(
            "Each sign is a first-degree equation, hence a line — together, the two bisectors.",
            "Har sign ek first-degree equation hai, matlab line — dono milke do angle bisectors."
          )}
        </T>
      </Fade>

      {/* beat 7 — RED-MARGIN guardrail: each line keeps its OWN denominator */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 320 518 L 320 582" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={352} y={540} size={16} fill={RED} anchor="start" weight={700}>
          {t("Each line gets its OWN denominator √(a² + b²) —", "Har line ka apna OWN denominator hai √(a² + b²) —")}
        </T>
        <T x={352} y={568} size={16} fill={RED} anchor="start" weight={700}>
          {t("never share one.", "kabhi share mat karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
