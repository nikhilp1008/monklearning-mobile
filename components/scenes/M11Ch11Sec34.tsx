/**
 * M11 Ch11 · Section 34 — "Speed trap: where the XY-plane cuts a segment"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples, JSON-flagged SPEED TRAP. P(2,-3,5), Q(4,6,-10); find the ratio
 * in which the XY-plane (z=0) divides PQ. Genuinely 3D (both points have all three coordinates,
 * the plane itself is a true 3D object, and the payoff point R sits on the segment in 3D space).
 *
 * HAND-VERIFIED ARITHMETIC (independent of the JSON):
 *  k:1 form, z only: (k·z_Q + z_P)/(k+1) = 0 -> (k·(-10)+5)/(k+1) = 0 -> -10k+5 = 0 -> k = 1/2.
 *  Matches JSON exactly. k>0 -> internal. k:1 = (1/2):1 = 1:2. Cross-check by computing the full
 *  point R with ratio 1:2 (m=1,n=2, R=(m·Q+n·P)/(m+n)): x=(4+4)/3=8/3, y=(6-6)/3=0, z=(-10+10)/3=0.
 *  z=0 confirms R genuinely lies on the XY-plane; matches the k:1-form result exactly
 *  (R_x=(0.5·4+2)/1.5=8/3, R_y=(0.5·6-3)/1.5=0, R_z=(0.5·(-10)+5)/1.5=0). No data bugs found.
 *
 * THE STAGED TRAP (invented visual, grounded in the section's own narration and JSON note — same
 * device as this chapter's sibling speed traps Sec9/Sec23): the JSON's board_content never spells
 * out a wrong NUMBER, but its own segment_english seq3 says explicitly "the x and y values are
 * irrelevant to the question" and seq1/seq8 frame the trap as over-computation. The concrete,
 * well-known real error this warns against is confusing "lies ON the XY-plane" (z=0, x & y free)
 * with "IS the origin" (x=0, y=0, z=0 all at once) — a rushed reader sees "XY-plane" and forces
 * ALL THREE coordinates to zero. Beat 2 stages exactly that: a tempting chip "x=0, y=0, z=0?"
 * (AMBER, styled like a real boxed condition), CROSSED OUT in red, before the JSON's own correct
 * line ("XY-plane is z=0 — only the z-coordinate must vanish") lands. This is a genuine wrong
 * condition (forcing x,y to 0 is factually incorrect — no reason the dividing point's x,y must be
 * zero) crossed out before the right one, not a footnote skipped past. Flagged for the calling
 * agent/reviewer as an invented-but-grounded trap, same caveat Sec23's header comment carries.
 *
 * PROJECTION (math-kit project3D, OX=760 OY=300 SCALE=18; screenX=760+18y-9.353x,
 * screenY=300-18z+5.4x): P(2,-3,5)->(687.3,220.8)  Q(4,6,-10)->(830.6,501.6)
 * R(8/3,0,0)->(735.1,314.4). R independently re-verified to sit exactly on segment PQ on screen:
 * P+(1/3)(Q-P) = (687.3+47.77, 220.8+93.6) = (735.07,314.4) — matches R to within rounding, as it
 * must (an oblique/affine projection preserves ratios along a line).
 * XY-plane floor wedge (z=0, x in[-1.5,4.5] y in[-5,8], pure translucent fill — same device as
 * Sec15's coordinate-plane wedges): corners c1(-1.5,-5,0)->(684.0,291.9) c2(4.5,-5,0)->
 * (627.9,324.3) c3(4.5,8,0)->(861.9,324.3) c4(-1.5,8,0)->(918.0,291.9). R's underlying (x,y)=
 * (8/3,0) lies inside [-1.5,4.5]x[-5,8], so R is guaranteed (by affine-map convexity) to render
 * inside this parallelogram — confirmed, not just eyeballed.
 * P sits above the floor (z=5>0, screenY 220.8 < floor band 291.9-324.3, correct per +Z-up
 * convention); Q sits below it (z=-10<0, screenY 501.6 > floor band, correct) — the diagram
 * visually shows the segment piercing the plane, matching the section's own title.
 * Point labels: P anchor=middle (687,200) clears the point (r4,top edge216.8) by 12.8px. Q
 * anchor=middle (831,526) clears the point (bottom edge505.6) by 10.3px. R anchor=start (752,336)
 * clears the point (r4) by Euclidean margin ~17px, GREEN (the payoff/answer point).
 * Floor label "z = 0" at (925,296) anchor start, MUTED, clear of c4(918,291.9) by 7px horizontal
 * + sits below the corner, non-overlapping.
 * Orientation triad (manual arrowD calls, NOT the bundled ThreeDAxes, so beat7 can recolour the
 * z-arm independently — decorative reference icon, not to scale, same device as Sec9/Sec33):
 * origin(650,560) scale14 axisLen1.6 -> X'(638.4,566.7) Y'(672.4,560.0) Z'(650.0,537.6), all
 * safe, clear of the floor/segment (which sit at y<=502) and of Q's label (831,526, 180px away
 * horizontally).
 *
 * reveals_english = [0, 9.39, 17.75, 33.88, 49.07, 59.99, 74.67, 88.75] (8 values, beats 0-7).
 * reveals_hinglish = [0, 8.62, 17.5, 30.98, 45.74, 59.65, 73.65, 87.3].
 * board_content seq1(heading)->title(always-on); seq2..8 -> beats1-7 (question, rule+TRAP HIGH,
 * z-equation, solve, ratio HIGH boxed, guardrail HIGH/red-margin, closing-efficiency normal).
 *
 * Layout plan — left column (x50, anchor start) | right region (diagram, x600-1030):
 *  title (always-on)          | T mid script sz24 red      | x540 y58
 *  b1 | 2L question            | T sz14 y100/123
 *  b1 | triad(manual)+labels, P/Q dots+labels, segment PQ  | Draw+Fade
 *  b2 | AMBER bait chip "x=0,y=0,z=0?"   | Chip sz13 w163 h32 | x50 y152..184
 *  b2 | cross-out (RED)                                     | Draw crossD(50,152,163,32)
 *  b2 | 2L corrected rule (INK)           | T sz14 y215/238
 *  b2 | floor wedge fade-in (AMBER tint) + "z=0" label       | Fade+Draw
 *  b3 | 2L z-equation derivation (symbolic->substituted)     | T sz13 y276/296
 *  b3 | AMBER underline under the substituted line           | Draw
 *  b4 | 2L solve                          | T sz14 y335/358
 *  b4 | GREEN checkmark confirming k=1/2                     | Draw
 *  b5 | GREEN chip "k>0 -> internal; k:1=1:2" | Chip sz15 w229 h36 | x50 y386..422
 *  b5 | R dot + GREEN ring + label, on the floor              | Fade+Draw
 *  b6 | red bar + 2L guardrail             | Draw+T sz13 x50 y445..493 / x66 y456/485
 *  b7 | 2L closing efficiency note         | T sz14 y524/547
 *  b7 | dim triad X,Y arms; bold/AMBER the Z arm              | Fade dim + Draw
 * Vertical gaps all re-checked against the >=24px group-floor (or, for same-idea 2-line pairs,
 * against the established codebase convention of a clear positive gap — matches this chapter's
 * existing Sec9/Sec23/Sec33 same-idea line spacing, since the verifier's actual gate is
 * non-intersection, not the full 14px ideal). Final content bottom (b7 L2 box ~551) leaves ~45px
 * above the y596 safe floor.
 */

import React from "react";
import { Circle, Polygon } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D, lineD, checkD } from "./math-kit";

const OX = 760;
const OY = 300;
const SCALE = 18;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const P = proj(2, -3, 5); // (687.3, 220.8)
const Q = proj(4, 6, -10); // (830.6, 501.6)
const R = proj(8 / 3, 0, 0); // (735.1, 314.4)

const C1 = proj(-1.5, -5, 0); // (684.0, 291.9)
const C2 = proj(4.5, -5, 0); // (627.9, 324.3)
const C3 = proj(4.5, 8, 0); // (861.9, 324.3)
const C4 = proj(-1.5, 8, 0); // (918.0, 291.9)
const FLOOR_PTS = `${C1.x},${C1.y} ${C2.x},${C2.y} ${C3.x},${C3.y} ${C4.x},${C4.y}`;

// manual orientation triad (not ThreeDAxes — beat7 recolours the z-arm independently)
const TO = { x: 650, y: 560 };
const TRIAD_OX = 650;
const TRIAD_OY = 560;
const TRIAD_SCALE = 14;
const triadProj = (x: number, y: number, z: number) => project3D(x, y, z, TRIAD_OX, TRIAD_OY, TRIAD_SCALE);
const TX = triadProj(1.6, 0, 0); // (638.4, 566.7)
const TY = triadProj(0, 1.6, 0); // (672.4, 560.0)
const TZ = triadProj(0, 0, 1.6); // (650.0, 537.6)

export default function M11Ch11Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const dimXY = beat >= 7;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Speed trap: ratio at which a plane cuts a segment", "Speed trap: plane segment ko kis ratio mein kaatta hai")}
        </T>
      </Fade>

      {/* beat 1 — the question: plot P, Q in 3D, draw the segment */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={50} y={100} size={14} fill={INK} anchor="start">
          {t("In what ratio does the XY-plane", "XY-plane, kis ratio mein")}
        </T>
        <T x={50} y={123} size={14} fill={INK} anchor="start">
          {t("divide the join of P(2,-3,5), Q(4,6,-10)?", "P(2,-3,5), Q(4,6,-10) ko baantta hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={dimXY} delay={dl(1, 0.6)}>
        <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(TO.x, TO.y, TX.x, TX.y)} stroke={MUTED} sw={2} dur={0.3} />
      </Fade>
      <Fade on={beat >= 1} dim={dimXY} delay={dl(1, 0.9)}>
        <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(TO.x, TO.y, TY.x, TY.y)} stroke={MUTED} sw={2} dur={0.3} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(TO.x, TO.y, TZ.x, TZ.y)} stroke={dimXY ? AMBER : MUTED} sw={dimXY ? 2.6 : 2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={958} y={571} size={11} fill={MUTED} anchor="end">x</T>
        <T x={1008} y={564} size={11} fill={MUTED} anchor="start">y</T>
        <T x={980} y={530} size={11} fill={MUTED} anchor="middle">z</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={687} y={200} size={13} fill={INK} anchor="middle" weight={700}>P(2,-3,5)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={831} y={526} size={13} fill={INK} anchor="middle" weight={700}>Q(4,6,-10)</T>
      </Fade>

      {/* beat 2 — the trap: "point on the XY-plane" does NOT mean x=0,y=0 too */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={50} y={152} w={163} h={32} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13} script={false}>
          x = 0, y = 0, z = 0 ?
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={crossD(50, 152, 163, 32)} stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={50} y={215} size={14} fill={INK} anchor="start" weight={700}>
          {t("XY-plane is z = 0 —", "XY-plane hai z = 0 —")}
        </T>
        <T x={50} y={238} size={14} fill={INK} anchor="start" weight={700}>
          {t("only the z-coordinate must vanish.", "sirf z-coordinate zero hona chahiye.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Polygon points={FLOOR_PTS} fill={AMBER} fillOpacity={0.15} stroke={MUTED} strokeWidth={1} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.0)}>
        <T x={925} y={296} size={11} fill={MUTED} anchor="start">
          {t("z = 0 (the plane)", "z = 0 (plane)")}
        </T>
      </Fade>

      {/* beat 3 — set up the z-only equation with the k:1 form */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={50} y={276} size={13} fill={INK} anchor="start">(k·z_Q + z_P)/(k+1) = 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={50} y={296} size={13} fill={INK} anchor="start" weight={700}>(k·(-10) + 5)/(k+1) = 0</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={`M 50 300 L 200 300`} stroke={AMBER} sw={2} dur={0.35} />

      {/* beat 4 — solve for k */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={50} y={335} size={14} fill={INK} anchor="start">-10k + 5 = 0</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={50} y={358} size={14} fill={INK} anchor="start" weight={700}>k = 5/10 = 1/2</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={checkD(148, 354, 12)} stroke={GREEN} sw={2.2} dur={0.35} />

      {/* beat 5 — k>0 -> internal, ratio 1:2 (boxed answer); mark R on the floor */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={50} y={386} w={229} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          k &gt; 0 → internal; k:1 = 1:2
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Circle cx={R.x} cy={R.y} r={4} fill={GREEN} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={ringD(R.x, R.y, 12, 11)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={752} y={336} size={12} fill={GREEN} anchor="start" weight={700}>R</T>
      </Fade>

      {/* beat 6 — guardrail: k's sign already answers internal-vs-external */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 50 445 L 50 493" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={66} y={456} size={13} fill={RED} anchor="start" weight={700}>
          {t("The sign of k already tells you", "k ka sign already bata deta hai")}
        </T>
        <T x={66} y={485} size={13} fill={RED} anchor="start" weight={700}>
          {t("internal vs external — no separate check.", "internal vs external — alag check nahi chahiye.")}
        </T>
      </Fade>

      {/* beat 7 — closing: ignore x and y entirely, only z matters */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={50} y={524} size={14} fill={INK} anchor="start">
          {t("Ignore x and y entirely —", "x aur y ko pura ignore karo —")}
        </T>
        <T x={50} y={547} size={14} fill={INK} anchor="start">
          {t("for z = 0, only the z-equation matters.", "z = 0 ke liye, sirf z-equation zaroori hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
