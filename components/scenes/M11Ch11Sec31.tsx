/**
 * M11 Ch11 · Section 31 — "Derivation: the section formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, subtopic "Distance and Section Formulas in 3D". FLAGGED HIGH-SCRUTINY —
 * capstone derivation, genuinely 3D. Parallel-projection method: R divides PQ in ratio m:n; drop
 * perpendiculars from P,R,Q onto the XY-plane at L,N,M; projection preserves the ratio (N divides
 * LM as m:n too); track the z-coordinate through that ratio to solve for z, then state x,y by the
 * identical construction on the YZ- and ZX-planes (the SAME per-axis-independence idea Sec1/Sec5
 * already used for the centroid — reused here via a boxed 3-formula landing, not a re-derivation).
 *
 * PROJECTION (math-kit project3D, +Y right, +Z up, +X down-left foreshortened, same convention as
 * Sec5/Sec6/Sec15/Sec30). OX=256 OY=371 SCALE=30, proj=(x,y,z)=>project3D(x,y,z,OX,OY,SCALE).
 *   screenX = 256 + 30y - 15.588x   screenY = 371 - 30z + 9x
 *   (30*0.6*cos30=15.588, 30*0.6*sin30=9 — same derivation pattern as Sec15/Sec30's constants.)
 *
 * HAND-VERIFIED ARITHMETIC (illustrative P,Q chosen fresh for clean projection; R computed at
 * ratio m:n=2:1 purely to place it — the BOARD algebra stays fully symbolic in m,n, never showing
 * these numbers):
 *   P=(1,2,6)  Q=(4,8,3)  [z1=6 > z2=3, so P sits higher than Q above the z=0 floor]
 *   R = (m·Q + n·P)/(m+n) with m=2,n=1: R = (2·(4,8,3) + (1,2,6)) / 3 = ((8+1),(16+2),(6+6))/3
 *     = (9,18,12)/3 = (3,6,4).
 *   Check via the derived formula z=(m·z2+n·z1)/(m+n): z=(2·3+1·6)/3=(6+6)/3=12/3=4 ✓ matches R.z.
 *   Check x: x=(2·4+1·1)/3=(8+1)/3=3 ✓ matches R.x=3.  Check y: y=(2·8+1·2)/3=(16+2)/3=6 ✓ R.y=6.
 *   L,N,M = perpendicular feet on the z=0 plane (same x,y, z=0): L=(1,2,0) N=(3,6,0) M=(4,8,0).
 *   Ratio check: N should = (2M+L)/3 = (2·(4,8,0)+(1,2,0))/3 = (9,18,0)/3 = (3,6,0) ✓ matches N
 *     directly — confirms parallel projection (dropping z to 0) preserves the m:n ratio exactly.
 *
 * HAND-VERIFIED PROJECTIONS (screenX=256+30y-15.588x, screenY=371-30z+9x):
 *   P(1,2,6): x=256+60-15.588=300.4  y=371-180+9=200.  P=(300,200).
 *   Q(4,8,3): x=256+240-62.35=433.6  y=371-90+36=317.  Q=(434,317).
 *   R(3,6,4): x=256+180-46.76=389.2  y=371-120+27=278. R=(389,278).
 *     Cross-check: R should sit at P+(2/3)(Q-P) on screen too: Q-P=(134,117), (2/3)(134,117)=
 *     (89.3,78), P+that=(389.3,278) ✓ matches R directly (parallel projection of an affine
 *     combination is the same affine combination of the projections — expected, sanity-confirms
 *     the projection math itself, independent of the ratio-preservation being taught).
 *   L(1,2,0): x=300.4 (same x,y as P)  y=371-0+9=380.   L=(300,380).
 *   N(3,6,0): x=389.2 (same as R's x) y=371+27=398.     N=(389,398).
 *   M(4,8,0): x=433.6 (same as Q's x) y=371+36=407.     M=(434,407).
 *     Cross-check: N=L+(2/3)(M-L): M-L=(134,27), (2/3)(134,27)=(89.3,18), L+that=(389.3,398) ✓
 *     matches N directly.
 *   Bounding region: x 300(P/L)-434(Q/M), y 200(P, top)-407(M, bottom) — a compact ~134x207 box,
 *     positioned left-of-center, leaving x~560-1044 free for the right-column algebra.
 *   XY-plane wedge (fill only, no stroke — labels may sit on it per the Sec15 precedent), sized to
 *     comfortably contain L,N,M: O(0,0,0)->(256,371), PX(4.5,0,0)->(186,412), PXY(4.5,8.5,0)->
 *     (441,412), PY(0,8.5,0)->(511,371). Verified M(434,407) falls inside this quadrilateral by
 *     hand (at M's screenY=407, the wedge's left/right boundaries interpolate to x~194/x~449,
 *     bracketing M.x=434).
 *
 * No separate ThreeDAxes widget here (unlike Sec1/Sec5/Sec6) — the wedge + the three vertical
 * perpendicular drops (PL, RN, QM, each a pure vertical line on screen since only z differs
 * between a point and its foot) already carry the 3D structure for this specific construction;
 * adding a full axis triad would clutter without adding information the diagram doesn't already
 * show. z is "up" (drops are vertical), the floor is explicitly the XY-plane (labeled).
 *
 * reveals_english  = [0, 13.82, 24.75, 37.38, 49.32, 64.34, 77.91, 92.93, 105.39] (9 beats, 0-8).
 * reveals_hinglish = [0, 11.26, 22.36, 33.71, 46.76, 59.22, 73.47, 87.47, 100.25].
 *
 * Beats (from board_content seq1-9):
 *  0 title (always-on)                             | "Deriving the section formula (projection)"
 *  1 R divides PQ, ratio m:n — plot P,Q,R + labels  | "Let R divide PQ internally, PR:RQ = m:n."
 *  2 XY-plane wedge revealed + caption              | "Parallel projection: N divides LM as m:n too"
 *  3 THE ACTION: drop PL,RN,QM; L,N,M land; draw LM | "Drop perpendiculars from P,R,Q at L,N,M."
 *  4 m/n ratio labels on LM too                     | "Parallel projection preserves the ratio..."
 *  5 formula PR/RQ = (z-z1)/(z2-z) = m/n
 *  6 formula n(z-z1)=m(z2-z), staged to z=(mz2+nz1)/(m+n)
 *  7 payoff: boxed x,y,z formulas (by symmetry)     | "Repeat on YZ, ZX planes: x,y by symmetry."
 *  8 RED guardrail: external division, n -> -n
 *
 * Layout plan (screen px):
 *  b1 top caption 2L (x350 mid)          | T INK13          | y100/122
 *  b1 P dot(INK r4)+label / Q dot+label  | circle+T13        | P(300,200) lbl(300,186)mid;
 *                                                               Q(434,317) lbl(446,321)start
 *  b1 PQ line (INK sw2)                  | Draw               | P->Q
 *  b1 R dot(AMBER_DARK r5)+label         | circle+T13         | (389,278) lbl(404,260)start
 *  b1 "m"/"n" on PR/RQ                   | T AMBER_DARK13 mid | (337,231) / (416,309)
 *  b2 XY-plane wedge (fill only)         | polygon             | AMBER 0.16 opacity
 *  b2 "XY-plane" small label             | T MUTED11 start     | (210,398)
 *  b2 diagram caption                    | T INK12 mid         | (350,445)
 *  b3 PL,RN,QM perpendiculars (MUTED)    | Draw sw1.6          | P->L, R->N, Q->M
 *  b3 L/N/M dots(MUTED/AMBER_DARK)+lbl   | circle+T12          | L(300,380) lbl(284,384)end;
 *                                                                 N(389,398) lbl(389,416)mid;
 *                                                                 M(434,407) lbl(444,411)start
 *  b3 LM line (AMBER_DARK sw1.6)         | Draw                 | L->M
 *  b3 right-col text 2L                  | T INK14 start x560   | y140/164
 *  b4 "m"/"n" on LN/NM                   | T AMBER_DARK13 mid   | (344,379) / (411,392)
 *  b4 right-col text 2L                  | T INK14 start x560   | y200/224
 *  b5 formula                            | T AMBER_DARK16       | x560 y262
 *  b6 formula, staged 2 lines            | T AMBER_DARK16       | x560 y300/334
 *  b7 lead text + boxed x,y,z formulas   | T14 + Draw+T×3       | x560 y372; frame x545 y392
 *                                                                 w480 h118; lines y422/454/486
 *  b8 RED bar + 2L guardrail             | Draw RED + T RED14   | bar x560 y530-582; txt x578 y548/572
 *
 * Clearance spot-checks done by hand: R's label at (404,260) checked against the nearby "n" label
 * at (416,309) — 15px baseline-box gap, meets the >=14px minimum. N's label (389,416) sits inside
 * the wedge's y-range but the wedge is fill-only (no outline to straddle), same accepted pattern
 * as Sec15's coordinate-plane wedges and Sec30's floor fill. Frame right edge (545+480=1025) kept
 * 19px inside the 1044 safe boundary. verify-scene.mjs (text-vs-text + overflow) and a FORCE_SHOTS
 * eye pass (text-vs-stroke: labels near the vertical drop-lines, ratio-label placement) are final.
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { project3D, lineD, roundRectD } from "./math-kit";

const OX = 256;
const OY = 371;
const SCALE = 30;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const P = proj(1, 2, 6); // (300,200)
const Q = proj(4, 8, 3); // (434,317)
const R = proj(3, 6, 4); // (389,278) divides PQ in ratio m:n = 2:1
const L = proj(1, 2, 0); // (300,380) foot of perpendicular from P
const N = proj(3, 6, 0); // (389,398) foot of perpendicular from R
const M = proj(4, 8, 0); // (434,407) foot of perpendicular from Q

// XY-plane wedge (fill only, sized to contain L,N,M)
const WO = proj(0, 0, 0); // (256,371)
const WX = proj(4.5, 0, 0); // (186,412)
const WXY = proj(4.5, 8.5, 0); // (441,412)
const WY = proj(0, 8.5, 0); // (511,371)
const WEDGE_PTS = `${WO.x},${WO.y} ${WX.x},${WX.y} ${WXY.x},${WXY.y} ${WY.x},${WY.y}`;

export default function M11Ch11Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Deriving the section formula (projection)", "Section formula derive karna (projection se)")}
        </T>
      </Fade>

      {/* beat 1 — R divides PQ internally, PR:RQ = m:n */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={350} y={100} size={13} fill={INK} anchor="middle">
          {t("Let R divide PQ internally, PR : RQ = m : n.", "R, PQ ko internal divide karta hai, PR:RQ = m:n.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={300} y={186} size={13} fill={INK} anchor="middle" weight={700}>P</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={446} y={321} size={13} fill={INK} anchor="start" weight={700}>Q</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Circle cx={R.x} cy={R.y} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={404} y={260} size={13} fill={AMBER_DARK} anchor="start" weight={700}>R</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={337} y={231} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>m</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={416} y={309} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>n</T>
      </Fade>

      {/* beat 2 — reveal the XY-plane we'll project onto */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Polygon points={WEDGE_PTS} fill={AMBER} fillOpacity={0.16} stroke="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={210} y={398} size={11} fill={MUTED} anchor="start">XY-plane</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={350} y={445} size={12} fill={INK} anchor="middle">
          {t("Parallel projection: N divides LM in the same m:n", "Parallel projection: N bhi LM ko usi m:n mein baantta hai")}
        </T>
      </Fade>

      {/* beat 3 — THE ACTION: drop perpendiculars from P, R, Q onto the XY-plane at L, N, M */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(P.x, P.y, L.x, L.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={L.x} cy={L.y} r={3.5} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={284} y={384} size={12} fill={MUTED} anchor="end" weight={700}>L</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={lineD(R.x, R.y, N.x, N.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Circle cx={N.x} cy={N.y} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={389} y={416} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>N</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d={lineD(Q.x, Q.y, M.x, M.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <Circle cx={M.x} cy={M.y} r={3.5} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={444} y={411} size={12} fill={MUTED} anchor="start" weight={700}>M</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.3)} d={lineD(L.x, L.y, M.x, M.y)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={560} y={140} size={14} fill={INK} anchor="start">
          {t("Drop perpendiculars from P, R, Q", "P, R, Q se perpendiculars girao")}
        </T>
        <T x={560} y={164} size={14} fill={INK} anchor="start">
          {t("onto the XY-plane, at L, N, M.", "XY-plane par, L, N, M par.")}
        </T>
      </Fade>

      {/* beat 4 — the key fact: N divides LM as m:n too */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={344} y={379} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>m</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={411} y={392} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>n</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={560} y={200} size={14} fill={INK} anchor="start">
          {t("Parallel projection preserves the ratio:", "Parallel projection ratio preserve karta hai:")}
        </T>
        <T x={560} y={224} size={14} fill={INK} anchor="start">
          {t("N divides LM as m:n too.", "N bhi LM ko m:n mein hi baantta hai.")}
        </T>
      </Fade>

      {/* beat 5 — track the z-coordinate through the ratio */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={262} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          PR/RQ = (z-z1)/(z2-z) = m/n
        </T>
      </Fade>

      {/* beat 6 — cross-multiply, then solve for z */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={560} y={300} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          n(z - z1) = m(z2 - z)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={560} y={334} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          ⇒  z = (m·z2 + n·z1)/(m+n)
        </T>
      </Fade>

      {/* beat 7 — the payoff: identical construction on YZ, ZX planes gives x, y by symmetry */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={560} y={372} size={14} fill={INK} anchor="start">
          {t("Repeat on YZ, ZX planes: x, y by symmetry.", "YZ, ZX planes par repeat karo: x, y symmetry se milte hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={roundRectD(545, 392, 480, 118)} stroke={AMBER_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={565} y={422} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          x = (m·x2 + n·x1)/(m+n)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={565} y={454} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          y = (m·y2 + n·y1)/(m+n)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={565} y={486} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          z = (m·z2 + n·z1)/(m+n)
        </T>
      </Fade>

      {/* beat 8 — guardrail: external division, n -> -n */}
      <Draw on={beat >= 8} delay={dl(8, 0.1)} d="M 560 530 L 560 582" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={578} y={548} size={14} fill={RED} anchor="start" weight={700}>
          {t("For external division, replace n by -n:", "External division ke liye, n ko -n se badlo:")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={578} y={572} size={14} fill={RED} anchor="start" weight={700}>
          {t("denominator becomes m-n.", "denominator m-n ban jaata hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
