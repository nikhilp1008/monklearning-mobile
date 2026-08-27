/**
 * M11 Ch11 · Section 28 — "Section division: three 1D splits at once"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic "Distance and Section Formulas in 3D", genuinely 3D throughout.
 *
 * Projection: origin(560,220), scale=22, project3D (verified in math-kit / Sec15):
 *   screenX = 560 + 22y - 11.431x   screenY = 220 - 22z + 6.6x
 * Illustrative points (not given in JSON — deliberately asymmetric per axis, so the three later
 * number lines show DIFFERENT numbers under the SAME ratio, proving it's a real per-axis
 * computation and not a copy-paste): P=(0,5,-5), Q=(10,0,5). R divides PQ internally in ratio
 * m:n = 2:3 (echoing the JSON's own "toll booth splits the route two to three" line), so
 * R = (2Q+3P)/5 = ((2·10+3·0)/5, (2·0+3·5)/5, (2·5+3·-5)/5) = (4, 3, -1). Verified per axis:
 * x=20/5=4 ✓ y=15/5=3 ✓ z=(10-15)/5=-1 ✓.
 * Hand-verified projected points (proj = project3D(x,y,z,560,220,22)):
 *   P = proj(0,5,-5)  = (560+110-0, 220+110-0)         = (670, 330)
 *   Q = proj(10,0,5)  = (560+0-114.32, 220-110+66)      = (445.68, 176)
 *   R = proj(4,3,-1)  = (560+66-45.73, 220+22+26.4)     = (580.27, 268.4)
 * All three land in x[445.68,670] y[176,330] — clear of the title (bottom~y71) and clear of the
 * left column (x60-330, gap ≥112px to Q's leftmost x=445.68).
 * External point (beat 5, "beyond an end"): R' = Q + 0.4(Q-P), extending PAST Q (away from the
 * title, into open upper-left space) = (10,0,5)+0.4(10,-5,10) = (14,-2,9).
 *   R' = proj(14,-2,9) = (560-44-160.04, 220-198+92.4) = (355.96, 114.4) — clear of title
 *   (y71) by 43px and of beat-1 text (right edge ~x298) by 58px.
 * Three parallel 1D number lines (beat 3, "three 1D acts" — echoes Sec1's per-axis framing):
 * each spans x600 (=P's projected value) to x960 (=Q's projected value) on its OWN axis, with R
 * always plotted at the SAME pixel fraction x744 (40% along, since m/(m+n)=2/5=0.4) — same
 * ratio, same relative position, different underlying numbers (labelled below each mark):
 *   line x: y390, values 0 / 4 / 10      line y: y450, values 5 / 3 / 0
 *   line z: y510, values -5 / -1 / 5
 * All marks/labels land in x[575,970] y[344,536] — clear of the 3D diagram above (P-label
 * bottom ~344) and well inside the safe area.
 *
 * reveals_english = [0, 13.91, 25.77, 40.79, 55.81, 71.94, 88.58, 99.24] (8 values, beats 0-7).
 * reveals_hinglish = [0, 13.14, 24.83, 38.23, 52.57, 67.33, 84.91, 89.6].
 *
 * Beats:
 *  0(title, always-on) | "Dividing a segment: three splits in one"
 *  1 | left text + draw segment PQ in 3D, mark P, Q, R (the dividing point)
 *  2 | left text (high emph) + drop-line from R to a generic "axis" tick — projection preserves ratio
 *  3 | left text + THE DIAGRAM: three parallel 1D number lines (x,y,z), same 40% split each
 *  4 | red-margin note (bar + text): the toll-booth/milestone real-world analogy
 *  5 | left text (high emph) + extend PQ past Q to external point R' (red)
 *  6 | left text + internal/external formula pair, ring the sign that differs
 *  7 | checkmark + closing: negative ratio = external division in disguise
 *
 * Layout plan (left column x60 narrates; diagram owns the right x355-970):
 *  b0 | title (26,red,script)              | T mid   | x540 y58
 *  b1 | left text 2L                       | T start | x60 y100/123
 *  b1 | segment P-Q, dots, labels           | Draw+T  | P(670,330) Q(445.68,176) R(580.27,268.4)
 *      P label (686,340) start; Q label (430,168) end; R label (596,248) start, amber_dark
 *  b2 | left text 2L                       | T start | x60 y158/181
 *  b2 | drop-line R->(580.27,310) + tick    | Draw    | tick 540-620 @ y310; label (624,313)
 *  b3 | left text 2L                       | T start | x60 y216/239
 *  b3 | 3 number lines + dots + labels      | Draw+T  | y390/450/510, x600/744/960
 *  b4 | red bar + 2L note                   | Draw+T  | x60 y270-322 / x76 y290/313
 *  b5 | left text 2L                        | T start | x60 y357/380
 *  b5 | extension Q->R' (red) + dot + label | Draw+T  | Q->(355.96,114.4), label (370,108)
 *  b6 | left text 2L + 2 formula lines      | T start | x60 y419/442, y468/494
 *      + ring the differing sign            | Draw    | ringD(116,464,9,9) / ringD(116,488,9,9)
 *  b7 | checkmark + 2L closing              | Draw+T  | (66,530) / x84 y534/557
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { project3D, lineD, checkD } from "./math-kit";

const OX = 560;
const OY = 220;
const SCALE = 22;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const P = proj(0, 5, -5); // (670,330)
const Q = proj(10, 0, 5); // (445.68,176)
const R = proj(4, 3, -1); // (580.27,268.4)
const REXT = proj(14, -2, 9); // (355.96,114.4)

// three parallel 1D number lines — P always at x600, R always at x744 (40%), Q always at x960
const LX = 600;
const LR = 744;
const LQ = 960;
const LINE_X_Y = 390;
const LINE_Y_Y = 450;
const LINE_Z_Y = 510;

export default function M11Ch11Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Dividing a segment: three splits in one", "Segment baantna: teen splits ek saath")}
        </T>
      </Fade>

      {/* beat 1 — set the scene: R divides PQ in a ratio */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={100} size={14} fill={INK} anchor="start">
          {t("A point R splits segment PQ", "Point R, segment PQ ko")}
        </T>
        <T x={60} y={123} size={14} fill={INK} anchor="start">
          {t("in a ratio; find R's coordinates.", "ek ratio mein baantta hai — R chahiye.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={686} y={340} size={13} fill={INK} anchor="start" weight={700}>P</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.95)}>
        <Circle cx={Q.x} cy={Q.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={430} y={168} size={13} fill={INK} anchor="end" weight={700}>Q</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={R.x} cy={R.y} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.45)}>
        <T x={596} y={248} size={13} fill={AMBER_DARK} anchor="start" weight={700}>R</T>
      </Fade>

      {/* beat 2 — a coordinate is a projection, and projection preserves ratios */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={158} size={14} fill={INK} anchor="start">
          {t("A coordinate is a projection —", "Coordinate ek projection hai —")}
        </T>
        <T x={60} y={181} size={14} fill={INK} anchor="start">
          {t("and projection preserves ratios.", "aur projection ratio preserve karta hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0)} d={lineD(R.x, R.y, R.x, 310)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(540, 310, 620, 310)} stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Circle cx={R.x} cy={310} r={3} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.05)}>
        <T x={624} y={313} size={11} fill={MUTED} anchor="start">
          {t("projection", "projection")}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: three parallel 1D number lines, one per axis */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={216} size={14} fill={INK} anchor="start">
          {t("One 3D division becomes three", "Ek 3D division ban jaata hai teen")}
        </T>
        <T x={60} y={239} size={14} fill={INK} anchor="start">
          {t("identical 1D divisions — one per axis.", "identical 1D divisions — har axis pe ek.")}
        </T>
      </Fade>
      {/* line x */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={lineD(LX, LINE_X_Y, LQ, LINE_X_Y)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={580} y={395} size={14} fill={INK} anchor="end" weight={700}>x</T>
        <Circle cx={LX} cy={LINE_X_Y} r={3} fill={INK} />
        <Circle cx={LR} cy={LINE_X_Y} r={3} fill={AMBER_DARK} />
        <Circle cx={LQ} cy={LINE_X_Y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={LX} y={412} size={11} fill={MUTED} anchor="middle">0</T>
        <T x={LR} y={412} size={11} fill={MUTED} anchor="middle">4</T>
        <T x={LQ} y={412} size={11} fill={MUTED} anchor="middle">10</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={672} y={374} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>2</T>
        <T x={852} y={374} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>3</T>
      </Fade>
      {/* line y */}
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={lineD(LX, LINE_Y_Y, LQ, LINE_Y_Y)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={580} y={455} size={14} fill={INK} anchor="end" weight={700}>y</T>
        <Circle cx={LX} cy={LINE_Y_Y} r={3} fill={INK} />
        <Circle cx={LR} cy={LINE_Y_Y} r={3} fill={AMBER_DARK} />
        <Circle cx={LQ} cy={LINE_Y_Y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={LX} y={472} size={11} fill={MUTED} anchor="middle">5</T>
        <T x={LR} y={472} size={11} fill={MUTED} anchor="middle">3</T>
        <T x={LQ} y={472} size={11} fill={MUTED} anchor="middle">0</T>
      </Fade>
      {/* line z */}
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d={lineD(LX, LINE_Z_Y, LQ, LINE_Z_Y)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={580} y={515} size={14} fill={INK} anchor="end" weight={700}>z</T>
        <Circle cx={LX} cy={LINE_Z_Y} r={3} fill={INK} />
        <Circle cx={LR} cy={LINE_Z_Y} r={3} fill={AMBER_DARK} />
        <Circle cx={LQ} cy={LINE_Z_Y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={LX} y={532} size={11} fill={MUTED} anchor="middle">-5</T>
        <T x={LR} y={532} size={11} fill={MUTED} anchor="middle">-1</T>
        <T x={LQ} y={532} size={11} fill={MUTED} anchor="middle">5</T>
      </Fade>

      {/* beat 4 — red-margin note: the real-world analogy */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 60 270 L 60 322" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={76} y={290} size={13} fill={RED} anchor="start" weight={700}>
          {t("Milestone on a road: easting,", "Road par ek milestone: easting,")}
        </T>
        <T x={76} y={313} size={13} fill={RED} anchor="start" weight={700}>
          {t("northing, altitude — same ratio.", "northing, altitude — same ratio.")}
        </T>
      </Fade>

      {/* beat 5 — internal vs external: extend the line past Q */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={357} size={14} fill={INK} anchor="start">
          {t("Internal: R between P and Q.", "Internal: R, P aur Q ke beech.")}
        </T>
        <T x={60} y={380} size={14} fill={INK} anchor="start">
          {t("External: R outside, beyond an end.", "External: R bahar, ek end ke paar.")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0)} d={lineD(Q.x, Q.y, REXT.x, REXT.y)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Circle cx={REXT.x} cy={REXT.y} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.75)}>
        <T x={370} y={108} size={13} fill={RED} anchor="start" weight={700}>R&apos;</T>
      </Fade>

      {/* beat 6 — internally add, externally subtract */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={419} size={14} fill={INK} anchor="start">
          {t("Internally the parts add;", "Internally parts judte hain;")}
        </T>
        <T x={60} y={442} size={14} fill={INK} anchor="start">
          {t("externally they subtract.", "externally ghatte hain.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={60} y={468} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          R = (mQ+nP)/(m+n)  (internal)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={60} y={494} size={15} fill={RED} anchor="start" weight={700}>
          R = (mQ-nP)/(m-n)  (external)
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={ringD(116, 464, 9, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d={ringD(116, 488, 9, 9)} stroke={RED} sw={1.8} dur={0.4} />

      {/* beat 7 — closing: negative ratio = external division in disguise */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={checkD(66, 530, 14)} stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={84} y={534} size={14} fill={INK} anchor="start">
          {t("A negative ratio m:(-n)", "Negative ratio m:(-n)")}
        </T>
        <T x={84} y={557} size={14} fill={INK} anchor="start">
          {t("is external division in disguise.", "external division ka hi bhes hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
