/**
 * M11 Ch09 · Section 32 — "Worked example: distance from origin to line AB"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples · subtopic "Distance Formulas". Chains two subtopics: build the
 * line through two points, then measure the origin's distance to it.
 *
 * Numbers verified (independently re-derived):
 *  slope = (6-2)/(4-1) = 4/3. ✓
 *  Point-slope through (1,2): y-2 = 4/3(x-1) => 3(y-2)=4(x-1) => 3y-6=4x-4 => 4x-3y+2=0.
 *   Check A(1,2): 4(1)-3(2)+2=4-6+2=0 ✓. Check B(4,6): 4(4)-3(6)+2=16-18+2=0 ✓.
 *  d(O, line) = |4(0)-3(0)+2| / sqrt(16+9) = 2/5 = 0.4. ✓
 *  Foot of perpendicular from O: foot = O - (d_signed/25)*(4,-3), d_signed=2;
 *   foot = (0,0) - (2/25)*(4,-3) = (-0.32, 0.24). Check: 4(-0.32)-3(0.24)+2 = -1.28-0.72+2 = 0 ✓.
 *   O-to-foot screen distance must equal 0.4*SCALE — checked numerically at authoring time.
 *
 * Beat-index: board_content has 8 items. item[0] heading -> always-on title. items[1..7] gate at
 * beat>=1..7. reveals_english=[0,8.02,16.9,25.69,34.82,42.07,52.48,63.23] (8 values).
 *
 * Beats (ONE progressive diagram, built in construction order):
 *  1 | statement + diagram object: axes, A(1,2) dot+label, B(4,6) dot+label
 *  2 | slope formula + rise/run legs (4-1=3, 6-2=4) justifying the slope value
 *  3 | chip: y-2=4/3(x-1) => 4x-3y+2=0 (HIGH) + full line drawn through A,B, extended
 *  4 | statement: apply point-line distance from O + O dot+label
 *  5 | chip: d=|4(0)-3(0)+2|/5=2/5=0.4 (HIGH, landed) + perpendicular O->foot drawn, foot dot, label
 *  6 | red-margin note (HIGH): two subtopics chained (bar + 2-line text, right margin)
 *  7 | closing caption: "Clean and direct: d = 2/5 = 0.4 units."
 *
 * Layout plan (single centered text column x540 y104..298, one diagram below, right margin free
 * for the beat-6 guardrail):
 *  title (always-on)      | T mid script22 red   | x540 y64
 *  b1 statement             | T mid15                | x540 y104 w577.5(en, longest)
 *  b2 formula                 | T mid16 w700              | x540 y140 w200
 *  b3 chip (HIGH, amber)         | Chip w330 h40                | x375 y162..202
 *  b4 statement                    | T mid15                        | x540 y230 w577.5
 *  b5 chip (HIGH, green, landed)     | Chip w370 h44                     | x355 y254..298
 *  diagram: origin(172,581.6) S=37, axis box x[150,350] y[326,590]
 *    A(1,2)=(209,507.6) B(4,6)=(320,359.6) O(0,0)=(172,581.6) FOOT(-0.32,0.24)=(160.16,572.72)
 *    line drawn (149.8,586.53)->(342.2,330) [toScreen(-0.6,-0.1333)..(4.6,6.8)]
 *    leg corner=(320,507.6): horiz leg A->corner "4-1=3", vert leg corner->B "6-2=4"
 *  All diagram label offsets verified programmatically (python) against the line's own equation
 *  (x-at-given-y) for >=8.8px clearance, and pairwise against every other diagram label for zero
 *  bbox overlap, before first render.
 *  b6 red-margin bar x760 y400..456 + 2-line text x776 y420/444 (right margin, clear of diagram)
 *  b7 closing caption | T mid script14 amber_dark | x540 y580
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

const SCALE = 37;
const OX = 172;
const OY = 581.6;
function toScreen(x: number, y: number) {
  return { x: OX + SCALE * x, y: OY - SCALE * y };
}

const A = toScreen(1, 2); // (209,507.6)
const B = toScreen(4, 6); // (320,359.6)
const O = { x: OX, y: OY }; // (172,581.6)
const FOOT = toScreen(-0.32, 0.24); // (160.16,572.72)
const LINE_START = toScreen(-0.6, -2 / 15); // (149.8,586.53)
const LINE_END = toScreen(4.6, 6.8); // (342.2,330)
const LEG_CORNER = { x: B.x, y: A.y }; // (320,507.6)

export default function M11Ch09Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Distance from Origin to Line AB", "Worked: Origin se Line AB tak Distance")}
        </T>
      </Fade>

      {/* ===== beat 1 — statement + diagram object: axes, A, B ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t(
            "Find the perpendicular distance from O to the line through A(1,2) and B(4,6).",
            "A(1,2) aur B(4,6) se guzarti line ki, O se perpendicular distance nikaalo."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.6)} originX={OX} originY={OY} xLeft={150} xRight={350} yTop={326} yBottom={590} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={204} y={496} size={11} fill={INK} anchor="end" weight={700}>(1,2)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={332} y={374} size={11} fill={INK} anchor="start" weight={700}>(4,6)</T>
      </Fade>

      {/* ===== beat 2 — slope formula + rise/run legs ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={140} size={16} fill={INK} anchor="middle" weight={700}>
          slope = (6-2)/(4-1) = 4/3
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={lineD(A.x, A.y, LEG_CORNER.x, LEG_CORNER.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={264.5} y={527} size={11} fill={MUTED} anchor="middle">4-1=3</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={lineD(LEG_CORNER.x, LEG_CORNER.y, B.x, B.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={332} y={433.6} size={11} fill={MUTED} anchor="start">6-2=4</T>
      </Fade>

      {/* ===== beat 3 — line equation (HIGH, amber chip) + full line drawn ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={375} y={162} w={330} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          y - 2 = 4/3(x - 1) ⇒ 4x - 3y + 2 = 0
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={lineD(LINE_START.x, LINE_START.y, LINE_END.x, LINE_END.y)} stroke={INK} sw={2.2} dur={0.7} />

      {/* ===== beat 4 — statement: apply distance from O + O dot ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={230} size={15} fill={INK} anchor="middle">
          {t(
            "Now apply the point-line distance from O(0,0).",
            "Ab O(0,0) se point-line distance apply karo."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle cx={O.x} cy={O.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={180} y={568} size={11} fill={MUTED} anchor="start">O</T>
      </Fade>

      {/* ===== beat 5 — d=2/5=0.4 (HIGH, landed) + perpendicular drop ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={355} y={254} w={370} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={18} script={false}>
          d = |4(0)-3(0)+2| / 5 = 2/5 = 0.4
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={lineD(O.x, O.y, FOOT.x, FOOT.y)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Circle cx={FOOT.x} cy={FOOT.y} r={3.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={145} y={574} size={11} fill={GREEN} anchor="end" weight={700}>d = 2/5 = 0.4</T>
      </Fade>

      {/* ===== beat 6 — red-margin guardrail: two subtopics chained ===== */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 760 400 L 760 456" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={776} y={420} size={13} fill={RED} anchor="start" weight={700}>
          {t("Two subtopics chained:", "Do subtopics chained:")}
        </T>
        <T x={776} y={444} size={13} fill={RED} anchor="start" weight={700}>
          {t("line first, then the distance formula.", "pehle line, phir distance formula.")}
        </T>
      </Fade>

      {/* ===== beat 7 — closing caption ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={580} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Clean and direct: d = 2/5 = 0.4 units.", "Clean aur direct: d = 2/5 = 0.4 units.")}
        </T>
      </Fade>
    </Scene>
  );
}
