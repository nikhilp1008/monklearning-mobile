/**
 * M11 Ch11 · Section 17 — "Eight rooms around the origin: octants"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — HIGH SCRUTINY: first section to show all 8 octants' sign pattern; later
 * secs (18-26) build on the convention set here. Copies M11Ch11Sec15's project3D/ThreeDAxes patterns
 * (same OX/OY/SCALE for cross-section consistency) and its left-column-narration + right-diagram split.
 *
 * Projection recap (math-kit project3D, verified in Sec15): +Y -> right, +Z -> up, +X -> down-left
 * (foreshortened). origin(620,380), scale=40, xForeshorten=0.6, xDir=(-cos30,sin30).
 *   screenX = 620 + 40y - 20.7846x     screenY = 380 - 40z + 12x
 * Ground-truth check before trusting any point below (from SCENE_AUTHORING_MATHS.md's own project3D
 * note): octant I "+++" must render up-right of O, octant VII "−−−" must mirror it down-left, and (as
 * an extra sanity check, not itself plotted) octant II "−++" would sit FURTHER up-right than I because
 * negative x reinforces +y/+z (verified algebraically below before trusting the formula for this file).
 *
 * Hand-verified points (all via the formula above, magnitude noted per point):
 *   Axes (axisLen=6 positive / 3 negative, identical to Sec15 so both sections share one visual frame):
 *     O(0,0,0)->(620,380).  X(6,0,0)->(495,452) down-left.  Y(0,6,0)->(860,380) right.
 *     Z(0,0,6)->(620,140) up.  X'(-3,0,0)->(682,344).  Y'(0,-3,0)->(500,380).  Z'(0,0,-3)->(620,500).
 *   Coordinate-plane wedges, magnitude m=3.2 in both signs on each in-plane axis (a genuine "full"
 *   plane through O, unlike Sec15's positive-corner-only wedges — this section's narration explicitly
 *   says "each becomes a full infinite plane", so both signs must show):
 *     XY (z=0): (3.2,3.2,0)->(681.5,418.4), (3.2,-3.2,0)->(425.5,418.4), (-3.2,-3.2,0)->(558.5,341.6),
 *       (-3.2,3.2,0)->(814.5,341.6). All within safe area, centroid = O as expected for a plane
 *       symmetric through the origin.
 *     YZ (x=0, no foreshortening since x=0): (0,3.2,3.2)->(748,252), (0,3.2,-3.2)->(748,508),
 *       (0,-3.2,-3.2)->(492,508), (0,-3.2,3.2)->(492,252). A plain rectangle, as expected for x=0.
 *     ZX (y=0): (3.2,0,3.2)->(553.5,290.4), (3.2,0,-3.2)->(553.5,546.4), (-3.2,0,-3.2)->(686.5,469.6),
 *       (-3.2,0,3.2)->(686.5,213.6).
 *   P1 = octant I representative (2.4,2.4,2.4) -> screenX=620+96-49.9=666.1, screenY=380-96+28.8=312.8
 *     -> (666.1,312.8). Relative to O(620,380): dx=+46.1 (right), dy=-67.2 (up) => up-right. MATCHES
 *     "octant I +++ renders up-right" ✓.
 *   P2 = octant VII representative (-2.4,-2.4,-2.4) -> screenX=620-96+49.9=573.9,
 *     screenY=380+96-28.8=447.2 -> (573.9,447.2). Relative to O: dx=-46.1 (left), dy=+67.2 (down) =>
 *     down-left, exact point-mirror of P1 through O (P2 = 2·O − P1). MATCHES "octant VII −−− mirrors
 *     I, down-left" ✓. P1,O,P2 collinear (both offsets are the same (±46.1,∓67.2) direction) — the
 *     dashed diagonal drawn between them legitimately passes straight through O.
 *   R = boundary demo point, on the +z axis only, (0,0,3.3) -> screenX=620+0-0=620,
 *     screenY=380-132+0=248 -> (620,248). Sits exactly on the drawn Z-axis shaft (O->Z_TIP is the
 *     vertical segment x=620, y 140..380) — an unambiguous "on an axis, not inside any octant" point
 *     (two of its three coordinates are 0, a stronger case of the "any zero coordinate" rule in seq9).
 *   Sanity check for the "ground truth" note above (algebraic only, NOT plotted as a point in this
 *   file): octant I unit point (1,1,1) -> screenX=620+40-20.7846=639.2, screenY=380-40+12=352.
 *     Octant II unit point (-1,1,1) -> screenX=620+40+20.7846=680.8 (> 639.2, further right),
 *     screenY=380-40-12=328 (< 352, further up). So II sits further up-right than I — negative x
 *     REINFORCES the +y/+z pull here, confirming the formula direction before trusting P1/P2 above.
 *
 * Canonical octant sign table (NCERT, as given — do not re-derive):
 *   I:+++  II:-++  III:--+  IV:+-+  V:++-  VI:-+-  VII:---  VIII:+--
 *   (cols in the legend card: col1 = z>0 cycle I,II,III,IV; col2 = z<0 mirror V,VI,VII,VIII — this
 *   literally encodes "cycles like quadrants for z>0, then mirrors for z<0" from the brief.)
 *
 * reveals (9 values, beats 0-8) = board_reveal_at_english/hinglish from the section JSON, used as-is.
 *
 * Beats (board_content seq1-9):
 *  0(title,always-on) | "Eight rooms stacked around the origin"
 *  1 | recap axes (both signs) + build 3 FULL coordinate planes, one at a time (floor, wall, wall)
 *  2 | ring O (the meeting point of 3 planes) + stamp "8 regions" chip
 *  3 | THE octant diagram: plot P1 (oct. I) and P2 (oct. VII), dashed diagonal through O, caption
 *  4 | mini 2D quadrant cross (1-4) as the "cousin" analogy for "each region is an octant"
 *  5 | formula build: "2² = 4 quadrants" -> "2³ = 8 octants"
 *  6 | build the octant legend card: outline draws, title, then 8 sign-pattern cells one at a time
 *  7 | red-margin guardrail text + ring the "I" and "VII" cells in the legend (ties back to P1/P2)
 *  8 | boundary demo: plot R on the z-axis, cross it out, "no octant" label + closing text
 *
 * Layout plan (left column x60-310 stacks narration; diagram owns x330-1044):
 *  b0 | title (26,red,script)        | T mid    | x540 y58
 *  b1 | left text 3L                 | T start  | x60 y104/126/148
 *  b1 | axes ±, O dot/label, X/Y/Z + X'/Y'/Z' labels | Draw+T | O(620,380) per hand-verified above
 *  b1 | 3 plane wedges (fill only)   | Fade     | XY/YZ/ZX polygons above
 *  b2 | left text 3L                 | T start  | x60 y184/206/228
 *  b2 | ring O                       | Draw     | ringD(624,394,26,28)
 *  b2 | "8 regions" chip             | Chip     | box x460..580 y556..590
 *  b3 | (no left text — diagram beat)
 *  b3 | P1 dot+labels, dashed P1-O-P2, P2 dot+labels, caption | Fade | see hand-verified P1/P2 above
 *  b4 | left text 3L                 | T start  | x60 y264/286/308
 *  b4 | mini quadrant cross + 1-4 + caption | Draw+T | center(370,170), box x338..410 y138..222
 *  b5 | left text 2L (formula build) | T start  | x60 y346/374, size16
 *  b6 | left text 3L                 | T start  | x60 y410/432/454
 *  b6 | legend card (fill,outline,title,8 cells) | Fade+Draw+T | box x858..1040 y96..272
 *  b7 | red bar + text 2L            | Draw+T   | bar x60 y484-520; text x76 y490/512
 *  b7 | ring legend "I" + "VII" cells| Draw     | ringD(904,149,30,19) / ringD(996,213,37,19)
 *  b8 | left text 2L                 | T start  | x60 y548/570
 *  b8 | R dot, cross-out, label      | Fade+Draw+T | R(620,248) per hand-verified above
 */

import React from "react";
import { Circle, Line, Polygon, Rect } from 'react-native-svg';
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
  crossD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';
import { project3D, roundRectD } from "./math-kit";

const OX = 620;
const OY = 380;
const SCALE = 40;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const O = { x: OX, y: OY };
const X_TIP = proj(6, 0, 0); // (495,452)
const Y_TIP = proj(0, 6, 0); // (860,380)
const Z_TIP = proj(0, 0, 6); // (620,140)
const XN_TIP = proj(-3, 0, 0); // (682,344)
const YN_TIP = proj(0, -3, 0); // (500,380)
const ZN_TIP = proj(0, 0, -3); // (620,500)

// full coordinate-plane wedges, magnitude 3.2 both signs (see header comment for hand-verified corners)
const M = 3.2;
const XY_PTS = [proj(M, M, 0), proj(M, -M, 0), proj(-M, -M, 0), proj(-M, M, 0)]
  .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
  .join(" ");
const YZ_PTS = [proj(0, M, M), proj(0, M, -M), proj(0, -M, -M), proj(0, -M, M)]
  .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
  .join(" ");
const ZX_PTS = [proj(M, 0, M), proj(M, 0, -M), proj(-M, 0, -M), proj(-M, 0, M)]
  .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
  .join(" ");

// octant representative points (see header comment for full hand-verification)
const P1 = proj(2.4, 2.4, 2.4); // (666.1,312.8) octant I, up-right of O
const P2 = proj(-2.4, -2.4, -2.4); // (573.9,447.2) octant VII, down-left of O
const R = proj(0, 0, 3.3); // (620,248) boundary demo point, on the +z axis

// mini 2D-quadrant analogy icon (independent small illustration, not part of the 3D axes)
const QC = { x: 370, y: 170 };

// legend card
const CARD_X = 858;
const CARD_Y = 96;
const CARD_W = 182;
const CARD_H = 176;
const COL1_X = 904;
const COL2_X = 996;
const ROW_Y = [152, 184, 216, 248];
const OCTANTS: { label: string; x: number; y: number; color: string }[] = [
  { label: "I +++", x: COL1_X, y: ROW_Y[0], color: INK },
  { label: "II −++", x: COL1_X, y: ROW_Y[1], color: INK },
  { label: "III −−+", x: COL1_X, y: ROW_Y[2], color: INK },
  { label: "IV +−+", x: COL1_X, y: ROW_Y[3], color: INK },
  { label: "V ++−", x: COL2_X, y: ROW_Y[0], color: INK_LIGHT },
  { label: "VI −+−", x: COL2_X, y: ROW_Y[1], color: INK_LIGHT },
  { label: "VII −−−", x: COL2_X, y: ROW_Y[2], color: INK_LIGHT },
  { label: "VIII +−−", x: COL2_X, y: ROW_Y[3], color: INK_LIGHT },
];

export default function M11Ch11Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Eight rooms stacked around the origin", "Origin ke charon taraf: aath rooms")}
        </T>
      </Fade>

      {/* beat 1 — extend wall/floor through the corner: axes recap + 3 full coordinate planes */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={104} size={14} fill={INK} anchor="start">
          {t("Extend each wall and the floor", "Har wall aur floor ko corner")}
        </T>
        <T x={60} y={126} size={14} fill={INK} anchor="start">
          {t("through the corner: each becomes", "ke paar badhao — har ek poora")}
        </T>
        <T x={60} y={148} size={14} fill={INK} anchor="start">
          {t("a full infinite plane.", "infinite plane ban jaata hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0)} d={arrowD(O.x, O.y, X_TIP.x, X_TIP.y)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={arrowD(O.x, O.y, Y_TIP.x, Y_TIP.y)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={arrowD(O.x, O.y, Z_TIP.x, Z_TIP.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(O.x, O.y, XN_TIP.x, XN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={arrowD(O.x, O.y, YN_TIP.x, YN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={arrowD(O.x, O.y, ZN_TIP.x, ZN_TIP.y)} stroke={MUTED} sw={1.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={630} y={408} size={13} fill={RED} anchor="start" weight={700}>O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={479} y={461} size={15} fill={INK} anchor="end" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={878} y={385} size={15} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={638} y={145} size={15} fill={INK} anchor="start" weight={700}>Z</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={696} y={340} size={12} fill={MUTED} anchor="start">X&apos;</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={484} y={380} size={12} fill={MUTED} anchor="end">Y&apos;</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={620} y={518} size={12} fill={MUTED} anchor="middle">Z&apos;</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Polygon points={XY_PTS} fill={CREAM} fillOpacity={0.85} stroke="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <Polygon points={YZ_PTS} fill={AMBER} fillOpacity={0.18} stroke="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.0)}>
        <Polygon points={ZX_PTS} fill={GREEN} fillOpacity={0.14} stroke="none" />
      </Fade>

      {/* beat 2 — three planes cut space into eight regions */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={184} size={14} fill={INK} anchor="start">
          {t("Three infinite planes", "Teen infinite planes")}
        </T>
        <T x={60} y={206} size={14} fill={INK} anchor="start">
          {t("cut all of space into", "poori space ko aath")}
        </T>
        <T x={60} y={228} size={14} fill={INK} anchor="start">
          {t("eight regions.", "hisso mein kaatte hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={ringD(624, 394, 26, 28)} stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <Chip x={460} y={556} w={120} h={34} fill={AMBER} textFill={INK} size={16}>
          {t("8 regions", "8 regions")}
        </Chip>
      </Fade>

      {/* beat 3 — THE octant diagram: octant I and its opposite, octant VII */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Circle cx={P1.x} cy={P1.y} r={4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={678} y={305} size={14} fill={GREEN} anchor="start" weight={700}>I</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={678} y={321} size={11} fill={INK} anchor="start">(+, +, +)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <Line x1={P1.x} y1={P1.y} x2={P2.x} y2={P2.y} stroke={MUTED} strokeWidth={1.5} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Circle cx={P2.x} cy={P2.y} r={4} fill={INK_LIGHT} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={560} y={442} size={14} fill={INK_LIGHT} anchor="end" weight={700}>VII</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={560} y={458} size={11} fill={INK} anchor="end">(&#8722;, &#8722;, &#8722;)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={610} y={580} size={12} fill={MUTED} anchor="start">
          {t("Octant I ↔ octant VII (mirrors)", "Octant I ↔ octant VII (mirror)")}
        </T>
      </Fade>

      {/* beat 4 — each region is an octant: the 3D cousin of the four quadrants */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={60} y={264} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Each region is an", "Har region ek octant")}
        </T>
        <T x={60} y={286} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("octant — the 3D cousin", "hai — plane wale 4")}
        </T>
        <T x={60} y={308} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("of the four quadrants.", "quadrants ka 3D cousin.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0)} d={`M ${QC.x - 32} ${QC.y} L ${QC.x + 32} ${QC.y}`} stroke={INK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 0.35)} d={`M ${QC.x} ${QC.y - 32} L ${QC.x} ${QC.y + 32}`} stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.75)}>
        <T x={388} y={152} size={12} fill={INK} anchor="middle" weight={700}>1</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={352} y={152} size={12} fill={INK} anchor="middle" weight={700}>2</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.05)}>
        <T x={352} y={188} size={12} fill={INK} anchor="middle" weight={700}>3</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={388} y={188} size={12} fill={INK} anchor="middle" weight={700}>4</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={370} y={214} size={10} fill={MUTED} anchor="middle">
          {t("4 quadrants (2D)", "4 quadrants (2D)")}
        </T>
      </Fade>

      {/* beat 5 — 2^2 = 4 quadrants -> 2^3 = 8 octants (language-agnostic formula) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={346} size={16} fill={INK} anchor="start" weight={700}>2² = 4 quadrants</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={60} y={374} size={16} fill={GREEN} anchor="start" weight={700}>→ 2³ = 8 octants</T>
      </Fade>

      {/* beat 6 — sign pattern of (x,y,z) decides the octant: build the legend card */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={410} size={14} fill={INK} anchor="start">
          {t("Which octant a point sits", "Koi point kaunse octant")}
        </T>
        <T x={60} y={432} size={14} fill={INK} anchor="start">
          {t("in is decided entirely by", "mein hai — ye (x, y, z) ke")}
        </T>
        <T x={60} y={454} size={14} fill={INK} anchor="start">
          {t("the sign pattern of (x, y, z).", "sign pattern se tay hota hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={CARD_X} y={CARD_Y} width={CARD_W} height={CARD_H} rx={12} fill={PAPER} stroke="none" />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.5)}
        d={roundRectD(CARD_X, CARD_Y, CARD_W, CARD_H, 12)}
        stroke={MUTED}
        sw={1.4}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={949} y={118} size={12} fill={INK} anchor="middle" weight={700}>
          Octant → (x, y, z)
        </T>
      </Fade>
      {OCTANTS.map((o, i) => (
        <Fade key={o.label} on={beat >= 6} delay={dl(6, 1.5 + 0.3 * i)}>
          <T x={o.x} y={o.y} size={13} fill={o.color} anchor="middle" weight={700}>
            {o.label}
          </T>
        </Fade>
      ))}

      {/* beat 7 — guardrail: all + is octant I, all - is octant VII */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 60 484 L 60 520" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={76} y={490} size={14} fill={RED} anchor="start" weight={700}>
          {t("All positive → octant I.", "Sab positive → octant I.")}
        </T>
        <T x={76} y={512} size={14} fill={RED} anchor="start" weight={700}>
          {t("All negative → octant VII.", "Sab negative → octant VII.")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={ringD(904, 149, 30, 19)} stroke={AMBER} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.9)} d={ringD(996, 213, 37, 19)} stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 8 — a zero coordinate means no octant at all */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={60} y={548} size={14} fill={INK} anchor="start">
          {t("A point with any zero coordinate", "Agar ek bhi coordinate zero hai—")}
        </T>
        <T x={60} y={570} size={14} fill={INK} anchor="start">
          {t("lies on a boundary — no octant.", "point boundary par, octant nahi.")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <Circle cx={R.x} cy={R.y} r={3.5} fill={RED} />
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d={crossD(608, 236, 24, 24)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.0)}>
        <T x={636} y={244} size={12} fill={RED} anchor="start">
          {t("on z-axis — no octant", "z-axis par — octant nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
