/**
 * M11 Ch09 · Section 2 — "The idea of a locus"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic "Coordinate Foundations". board_content has 8 items (seq1..seq8);
 * seq1 is the heading, treated as always-on title. Remaining 7 items gate at beat>=1..beat>=7.
 * reveals_english = [0, 8.62, 15.19, 26.62, 34.99, 44.71, 57.34, 69.97] (8 values).
 * reveals_hinglish = [0, 6.4, 13.14, 24.92, 32.43, 39.59, 51.97, 64.43] (8 values).
 *
 * Illustrative numbers (none given in the JSON — chosen here, hand-verified below):
 *  Goat/peg (beat2): peg at local (170,170), rope r=34px labelled "5 m" — purely illustrative,
 *    no arithmetic needed (the circle IS the rule, r is just a label).
 *  Two villages (beat3, THE diagram): math coords A(2,1), B(8,1) on toScreen(x,y) = {x:370+34x,
 *    y:450-34y} (OX=370, OY=450, SCALE=34). Midpoint M=(5,1). Perpendicular bisector of AB (AB is
 *    horizontal) is the vertical line x=5. Point P chosen ON that bisector: P=(5,5).
 *    VERIFY PA=PB: PA = sqrt((5-2)^2+(5-1)^2) = sqrt(9+16) = sqrt(25) = 5.
 *                  PB = sqrt((8-5)^2+(5-1)^2) = sqrt(9+16) = sqrt(25) = 5.  PA = PB = 5 ✓
 *    (Right triangle A-M-P: AM=3, MP=4, AP=5 — a 3-4-5 triple, same for B-M-P by symmetry.)
 *  Screen coords: O=(370,450) A=(438,416) B=(642,416) M=(540,416) P=(540,280).
 *
 * Beats:
 *  0(title, always-on) | "Locus: the path a rule traces"
 *  1 | anchor: a locus is the set of points obeying one rule
 *  2 | represent, briefly: goat on a rope ⇒ circle (peg + radius + traced circle)
 *  3 | THE DIAGRAM: axes → villages A,B → segment AB → perpendicular bisector → P → PA,PB → "equal","equal"
 *  4 | land: equal distance from A,B traces the perpendicular bisector (a straight line)
 *  5 | guardrail (red-margin): external section formula ÷(m-n) blows up at m=n
 *  6 | closing fact: translation of axes preserves slopes/distances
 *  7 | closing caption: locus = verbal rule → equation
 *
 * Layout plan:
 *  b0 | title (26,red,script)                 | T mid | x540 y62
 *  b1 | anchor text (16,ink)                   | T mid | x540 y100
 *  b2 | peg dot + rope + goat dot              | circle/Draw | peg(170,170) goat≈(196,148)
 *  b2 | peg/5m labels (11,muted)               | T | (152,182) end / (204,145) start
 *  b2 | traced circle (green)                  | Draw | circleD(170,170,34)
 *  b2 | caption (13,ink)                       | T mid | x170 y228
 *  b3 | axes c(370,450) 336..710/246..484      | CartesianAxes (no ticks)
 *  b3 | O dot + label                          | circle+T | (370,450) label x352 y468 end
 *  b3 | A dot + "Village A"                    | circle+T | (438,416) label x438 y394 mid
 *  b3 | B dot + "Village B"                    | circle+T | (642,416) label x642 y394 mid
 *  b3 | segment AB (muted)                     | Draw | (438,416)->(642,416)
 *  b3 | perpendicular bisector (green)         | Draw | (540,256)->(540,470)
 *  b3 | bisector label (green)                 | T st | x548 y270
 *  b3 | P dot (amber) + label                  | circle+T | (540,280) label x522 y276 end
 *  b3 | PA segment (muted) + PB segment (muted)| Draw | (540,280)->(438,416) / ->(642,416)
 *  b3 | "equal" x2 (muted)                     | T mid | (460,352) / (620,352)
 *  b4 | landing text (15,green)                | T mid | x540 y508
 *  b5 | red bar x760 y300..354                 | Draw
 *  b5 | 2-line guardrail text (14,red)          | T st | x776 y322 / y346
 *  b6 | closing fact (14,ink)                  | T mid | x540 y538
 *  b7 | closing caption (14,amber_dark,script)  | T mid | x540 y576
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, circleD, pointOnCircle } from "./math-kit";

/* goat / peg (beat 2) — purely illustrative, local pixel coords, no math-plane mapping needed */
const PEG = { x: 170, y: 170 };
const PEG_R = 34;
const GOAT = pointOnCircle(PEG.x, PEG.y, PEG_R, 0.7); // ≈ (196.0, 148.1)

/* two villages (beat 3) — math-plane coords via toScreen */
const OX = 370;
const OY = 450;
const SCALE = 34;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const O = toScreen(0, 0); // (370,450)
const A = toScreen(2, 1); // (438,416)
const B = toScreen(8, 1); // (642,416)
const M = toScreen(5, 1); // (540,416) — midpoint of AB
const P = toScreen(5, 5); // (540,280) — on the perpendicular bisector, PA = PB = 5

export default function M11Ch09Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Locus: the path a rule traces", "Locus: rule jo raasta banata hai")}
        </T>
      </Fade>

      {/* beat 1 — anchor: what is a locus */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {t(
            "A locus is the set of all points that obey one geometric rule.",
            "Locus un sab points ka set hai jo ek hi rule follow karte hain."
          )}
        </T>
      </Fade>

      {/* beat 2 — represent, briefly: goat on a rope ⇒ circle */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={PEG.x} cy={PEG.y} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={lineD(PEG.x, PEG.y, GOAT.x, GOAT.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.75)}>
        <Circle cx={GOAT.x} cy={GOAT.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.95)}>
        <T x={122} y={174} size={11} fill={MUTED} anchor="end">peg</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.15)}>
        <T x={210} y={138} size={11} fill={MUTED} anchor="start">5 m</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.45)} d={circleD(PEG.x, PEG.y, PEG_R)} stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.15)}>
        <T x={170} y={228} size={13} fill={INK} anchor="middle">
          {t("Goat: stay 5 m from peg ⇒ circle", "Bakri: peg se 5 m ⇒ circle")}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: two villages, perpendicular bisector, equal-distance point P */}
      <CartesianAxes on={beat >= 3} delay={dl(3, 0)} originX={OX} originY={OY} xLeft={336} xRight={710} yTop={246} yBottom={484} showTicks={false} />
      <Fade on={beat >= 3} delay={dl(3, 0.35)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
        <T x={352} y={468} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.65)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={438} y={394} size={12} fill={INK} anchor="middle" weight={700}>Village A</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.15)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={642} y={394} size={12} fill={INK} anchor="middle" weight={700}>Village B</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d={lineD(A.x, A.y, B.x, B.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2.3)} d={lineD(M.x, 256, M.x, 470)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.95)}>
        <T x={548} y={270} size={12} fill={GREEN} anchor="start" weight={700}>perpendicular bisector</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.25)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={522} y={276} size={12} fill={AMBER_DARK} anchor="end" weight={700}>P</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.8)} d={lineD(P.x, P.y, A.x, A.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 4.25)} d={lineD(P.x, P.y, B.x, B.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 4.7)}>
        <T x={460} y={352} size={12} fill={MUTED} anchor="middle">equal</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.0)}>
        <T x={620} y={352} size={12} fill={MUTED} anchor="middle">equal</T>
      </Fade>

      {/* beat 4 — land: equal distance from A, B traces the perpendicular bisector */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={508} size={15} fill={GREEN} anchor="middle">
          {t(
            "Equal distance from A and B traces the perpendicular bisector.",
            "A aur B se equal distance ⇒ perpendicular bisector banta hai."
          )}
        </T>
      </Fade>

      {/* beat 5 — guardrail: external section formula blows up at m = n */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d="M 760 300 L 760 354" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={776} y={322} size={14} fill={RED} anchor="start" weight={700}>
          {t("External section ÷ (m - n).", "External section ÷ (m - n) se hota.")}
        </T>
        <T x={776} y={346} size={14} fill={RED} anchor="start" weight={700}>
          {t("m = n ⇒ point runs off to ∞.", "m = n hua toh point ∞ chala jaata.")}
        </T>
      </Fade>

      {/* beat 6 — closing fact: translation preserves slopes/distances */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={538} size={14} fill={INK} anchor="middle">
          {t(
            "Translation shifts only the origin — slopes and distances stay the same.",
            "Translation sirf origin ko shift karta hai — slopes aur distances same rehte hain."
          )}
        </T>
      </Fade>

      {/* beat 7 — closing caption */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={576} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("A locus turns a verbal rule into an equation.", "Locus ek verbal rule ko equation bana deta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
