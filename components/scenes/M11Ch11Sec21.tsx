/**
 * M11 Ch11 · Section 21 — "The 3D coordinate toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — closes the "procedures" arc (secs 16-20: axes, octants, signed
 * distances, octant ID, foot of perpendicular, reflections). Per task's CONTENT GUIDANCE this
 * gets the formula_recap/cheat_sheet treatment: each board_content item lands as its own chip/
 * line on its own beat, in the JSON's own order — a notes-page moment, not new derivation.
 * Precedent: M11Ch09Sec5 (single centered column, HIGH=Chip / normal=bold INK text, red-margin
 * bar+text for the guardrail note) — same discipline applied here. M11Ch11Sec15 is this
 * chapter's project3D/ThreeDAxes exemplar; reused here for ONE small illustrative diagram (see
 * below — the JSON's board_content itself is pure text/formula/note with no diagram-typed
 * entry, so this is an authored addition, not a JSON requirement; kept intentionally small and
 * clear of the text column, consistent with "diagram beats formula" when it genuinely helps —
 * it visually anchors beat 1's "XY: z=0 / YZ: x=0 / ZX: y=0" plane definitions). No octant
 * sign-table diagram was added — board_content's only octant reference is the headcount
 * "octants = 2^3 = 8" line, not a sign table, so a full 8-row table would be unrequested new
 * teaching content on a recap card; flagged in the report for the caller's awareness.
 *
 * NOTATION: \qquad/\quad-joined clauses (seq2 planes, seq3 axes, seq5 abs-distances) are split
 * into separate T/Chip calls with real x-distance per the base rule (no space-character
 * encoding). seq4's comma list has no \quad macro, kept as one line. \operatorname{dist} ->
 * plain "dist". \text{...} labels ("x-axis:", "octants") kept in English for both languages
 * per the established \text-label rule. Superscript "³" in "octants = 2³ = 8" is a numeral ->
 * non-script Anek (native, per font-audit). Per SCENE_AUTHORING_MATHS.md + the M11Ch09Sec5
 * precedent, every formula row is byte-identical between languages; only the always-on title
 * and the seq7 red-margin guardrail note (real prose) differ by language.
 *
 * board_content -> beats (8 reveal timestamps, indices 0-7 via useBeat):
 *  seq1 heading            -> title, always-on
 *  seq2 (beat1) planes HIGH -> Row1: 3 chips "XY: z=0" / "YZ: x=0" / "ZX: y=0" + mini diagram
 *  seq3 (beat2) axes normal -> Row2: 3 texts "x-axis: y=z=0" / "y-axis: x=z=0" / "z-axis: x=y=0"
 *  seq4 (beat3) signed-dist normal -> Row3: 1 line "x=dist(P,YZ), y=dist(P,ZX), z=dist(P,XY)"
 *  seq5 (beat4) abs-dist normal -> Row4: 3 texts "dist(P,YZ)=|x|" / "dist(P,ZX)=|y|" / "dist(P,XY)=|z|"
 *  seq6 (beat5) octant count normal -> Row5: 1 line "octants = 2³ = 8"
 *  seq7 (beat6) guardrail HIGH/red-margin -> Row6: red bar + "Reflection flip-count: plane 1, axis 2, origin 3."
 *  seq8 (beat7) reflection-in-origin normal -> Row7: 1 line "Reflection in the origin: (x,y,z) -> (-x,-y,-z)."
 * reveals_english = [0, 8.7, 23.38, 42.93, 54.45, 69.81, 79.37, 88.67]
 * reveals_hinglish = [0, 7.6, 23.04, 36.44, 49.16, 59.65, 67.67, 75.27]
 *
 * Mini diagram (project3D, math-kit, verified per its own doc note +Y right/+Z up/+X down-left):
 * origin(900,150), scale=22, axisLen=3.5 (positive axes only; skipped negative rays + room-icon
 * to keep this a compact anchor, not a re-teach). Hand-verified via the primitive's formula
 * (screenX = ox + 22y - 11.43x, screenY = oy - 22z + 6.6x):
 *   X(3.5,0,0) -> (860.0,173.1) down-left   Y(0,3.5,0) -> (977,150) right   Z(0,0,3.5) -> (900,73) up
 * matches the three documented directions. Wedge corners at 1.5 units from O: PX(882.9,159.9),
 * PY(933,150), PZ(900,117), PXY(915.9,159.9), PYZ(933,117), PZX(882.9,126.9) — all inside the
 * bounding box x[860,990]×y[64,173], clear of every text row (nearest text is Row1's chip3,
 * right edge x745, gap 900-745=155px to the origin, 137px to the nearest wedge point).
 *
 * Layout plan (all anchor=middle at x540 unless noted; text boxes: Anek top=y-0.78×size,
 * bottom=y+0.31×size; Kalam top=y-1.3×size, bottom=y+0.5×size; widths 0.50×size×chars,
 * over-estimated, longer-language string used where they differ):
 *  title(always-on) science | T mid script sz24 | x540 y64 | box y32.8..76 x342..738(hi,longer)
 *  b1 chip "XY: z = 0"   | Chip sz17    | x335..445 y108..148
 *  b1 chip "YZ: x = 0"   | Chip sz17    | x485..595 y108..148
 *  b1 chip "ZX: y = 0"   | Chip sz17    | x635..745 y108..148
 *  b1 mini diagram (3 axes + 3 wedges + X/Y/Z tip labels sz12) | box x846..990 y55..186 (labels incl.)
 *  b2 T "x-axis: y = z = 0" | mid sz15 | x297.5..432.5 y183.3..199.65 (cx365)
 *  b2 T "y-axis: x = z = 0" | mid sz15 | x472.5..607.5 y183.3..199.65 (cx540)
 *  b2 T "z-axis: x = y = 0" | mid sz15 | x647.5..782.5 y183.3..199.65 (cx715)
 *  b3 T signed-dist line | mid sz16 | x344..736 y237.5..254.96
 *  b4 T "dist(P,YZ)=|x|"  | mid sz15 | x308.75..436.25 y298.3..314.65 (cx372.5)
 *  b4 T "dist(P,ZX)=|y|"  | mid sz15 | x476.25..603.75 y298.3..314.65 (cx540)
 *  b4 T "dist(P,XY)=|z|"  | mid sz15 | x643.75..771.25 y298.3..314.65 (cx707.5)
 *  b5 T "octants = 2³ = 8" | mid sz20 | x460..620 y354.4..376.2
 *  b6 red bar             | Draw bar x300 y414..442
 *  b6 T guardrail (HI, longer) | start sz18 | x316..784 y415.96..435.58
 *  b7 T reflection-in-origin | mid sz16 | x312..768 y477.5..494.96
 * Vertical clearances: title->b1 32px, b1->b2 35.3px, b2->b3 37.85px, b3->b4 43.34px,
 * b4->b5 39.75px, b5->b6(bar) 37.8px, b6->b7 35.5px — all comfortably clear of the 24px
 * group-clearance floor. Last box bottom 494.96, ~100px of unused margin above safe y<=596.
 * Diagram (x846-990) stays >130px clear of every text row's right edge (max 782.5) in every
 * beat it could visually coexist with (only b1 shares its beat).
 */

import React from "react";
import { Polygon } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  RED,
  AMBER,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { project3D } from "./math-kit";

const DOX = 900;
const DOY = 150;
const DSCALE = 22;
const proj2 = (x: number, y: number, z: number) => project3D(x, y, z, DOX, DOY, DSCALE);

const O2 = { x: DOX, y: DOY };
const X2 = proj2(3.5, 0, 0); // (860.0, 173.1)
const Y2 = proj2(0, 3.5, 0); // (977, 150)
const Z2 = proj2(0, 0, 3.5); // (900, 73)

const PX2 = proj2(1.5, 0, 0); // (882.9, 159.9)
const PY2 = proj2(0, 1.5, 0); // (933, 150)
const PZ2 = proj2(0, 0, 1.5); // (900, 117)
const PXY2 = proj2(1.5, 1.5, 0); // (915.9, 159.9)
const PYZ2 = proj2(0, 1.5, 1.5); // (933, 117)
const PZX2 = proj2(1.5, 0, 1.5); // (882.9, 126.9)

const XY2_PTS = `${O2.x},${O2.y} ${PX2.x},${PX2.y} ${PXY2.x},${PXY2.y} ${PY2.x},${PY2.y}`;
const YZ2_PTS = `${O2.x},${O2.y} ${PY2.x},${PY2.y} ${PYZ2.x},${PYZ2.y} ${PZ2.x},${PZ2.y}`;
const ZX2_PTS = `${O2.x},${O2.y} ${PZ2.x},${PZ2.y} ${PZX2.x},${PZX2.y} ${PX2.x},${PX2.y}`;

export default function M11Ch11Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} anchor="middle" script>
          {t("The 3D coordinate toolkit", "3D coordinate ka poora toolkit")}
        </T>
      </Fade>

      {/* beat 1 — the three coordinate planes (HIGH -> chips) + mini illustrative diagram */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={335} y={108} w={110} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={17} script={false}>
          XY: z = 0
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={485} y={108} w={110} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={17} script={false}>
          YZ: x = 0
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={635} y={108} w={110} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={17} script={false}>
          ZX: y = 0
        </Chip>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(O2.x, O2.y, X2.x, X2.y)} stroke={INK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(O2.x, O2.y, Y2.x, Y2.y)} stroke={INK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={arrowD(O2.x, O2.y, Z2.x, Z2.y)} stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Polygon points={XY2_PTS} fill={CREAM} fillOpacity={0.85} stroke="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <Polygon points={YZ2_PTS} fill={AMBER} fillOpacity={0.18} stroke="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Polygon points={ZX2_PTS} fill={GREEN} fillOpacity={0.14} stroke="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={852} y={186} size={12} fill={INK} anchor="end" weight={700}>X</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={985} y={154} size={12} fill={INK} anchor="start" weight={700}>Y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={900} y={64} size={12} fill={INK} anchor="middle" weight={700}>Z</T>
      </Fade>

      {/* beat 2 — the three axes (normal -> bold ink text, \quad split into 3) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={365} y={195} size={15} fill={INK} anchor="middle" weight={700}>
          x-axis: y = z = 0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={195} size={15} fill={INK} anchor="middle" weight={700}>
          y-axis: x = z = 0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={715} y={195} size={15} fill={INK} anchor="middle" weight={700}>
          z-axis: x = y = 0
        </T>
      </Fade>

      {/* beat 3 — each coordinate is a signed distance (normal, single line, comma list) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={250} size={16} fill={INK} anchor="middle" weight={700}>
          x = dist(P, YZ), y = dist(P, ZX), z = dist(P, XY)
        </T>
      </Fade>

      {/* beat 4 — strip the sign: true distances (normal, \quad split into 3) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={372.5} y={310} size={15} fill={INK} anchor="middle" weight={700}>
          dist(P, YZ) = |x|
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={310} size={15} fill={INK} anchor="middle" weight={700}>
          dist(P, ZX) = |y|
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={707.5} y={310} size={15} fill={INK} anchor="middle" weight={700}>
          dist(P, XY) = |z|
        </T>
      </Fade>

      {/* beat 5 — the headcount of regions (normal, single short line) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={370} size={20} fill={INK} anchor="middle" weight={700}>
          octants = 2³ = 8
        </T>
      </Fade>

      {/* beat 6 — guardrail: reflection flip-count (HIGH, red-margin: bar + text) */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 300 414 L 300 442" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={316} y={430} size={18} fill={RED} anchor="start" weight={700}>
          {t(
            "Reflection flip-count: plane 1, axis 2, origin 3.",
            "Reflection ka flip-count: plane 1, axis 2, origin 3."
          )}
        </T>
      </Fade>

      {/* beat 7 — cleanest instance: reflection in the origin (normal, single line) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={490} size={16} fill={INK} anchor="middle" weight={700}>
          Reflection in the origin: (x, y, z) → (-x, -y, -z).
        </T>
      </Fade>
    </Scene>
  );
}
