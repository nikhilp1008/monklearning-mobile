/**
 * M11 Ch05 · Section 31 — "Worked example: workshop profit, the LP bridge
 * (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Culminating example of subtopic 3 — a real
 * mini linear-programming problem previewing Class 12. Left: feasible
 * region graph. Right: objective-function evaluation table.
 *
 * Beats (en [0,14.68,23.55,38.49,52.57,70.4,85.76,104.19,112.38], hi
 * [0,15.96,25.51,39.08,54.36,71.17,84.48,103.77,111.45]):
 *  0 heading: x chairs, y tables — maximise profit; axes drawn
 *  1 text: chair 2h carp/1h fin, table 3h carp/2h fin (caption)
 *  2 text: ≤36 carp-hrs, ≤22 fin-hrs; ₹30/chair, ₹50/table (caption)
 *  3 formula: 2x+3y≤36, x+2y≤22, x,y≥0 — 2 lines drawn, region shaded
 *  4 text: corner points pairwise — 4 vertices plotted + labeled
 *  5 formula: 2x+3y=36 ∩ x+2y=22 ⇒ (6,8) — caption above the Z-table
 *  6 formula (high): Z=30x+50y table — 0, 540, 550, 580 (max, green)
 *  7 note (high, boxed green — landed answer): ₹580/day at (6,8)
 *  8 diagram: settled
 *
 * Layout plan:
 *  b0 | problem (16,ink,w700)      | T mid | bl 100
 *  b0 | axes                       | Draw  | origin(140,440) x100..680 y140..440
 *  b1 | caption (12,muted)         | T mid | bl 130
 *  b2 | caption (12,muted)         | T mid | bl 155
 *  b3 | formula (15,ink,w700)      | T mid | bl 180
 *  b3 | 2 line segments + shade    | Draw/path
 *  b4 | 4 vertex dots + labels     | circle/T | (140,440)(680,440)(140,154)(320,232)
 *  b5 | caption (12,muted)         | T st  | x720 bl175
 *  b6 | Z-table (14,ink / 15,green)| T st  | x720 y200..325
 *  b7 | boxed answer (16,green)    | Chip  | x210..870 y490..540
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, tickD, lineD } from "./math-kit";

const OX = 140;
const OY = 440;
const XSTEP = 30; // per chair
const YSTEP = 26; // per table

const V00 = { x: OX, y: OY };
const V18_0 = { x: OX + 18 * XSTEP, y: OY };
const V0_11 = { x: OX, y: OY - 11 * YSTEP };
const V6_8 = { x: OX + 6 * XSTEP, y: OY - 8 * YSTEP };

export default function M11Ch05Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={21} fill={RED} script>
          {t("evaluate Z at every corner — the winner might surprise you", "har corner pe Z evaluate karo — winner surprise kar sakta hai")}
        </T>
      </Fade>

      {/* beat 0 — the problem, and axes */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={400} y={100} size={16} fill={INK} weight={700}>
          {t("x chairs, y tables per day — maximise profit", "x chairs, y tables per din — profit maximise karo")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 0} delay={dl(0, 1.0)} originX={OX} originY={OY} xLeft={100} xRight={680} yTop={140} yBottom={OY} showTicks={false} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.6)}
        d={[6, 12, 18].map((v) => tickD(OX + v * XSTEP, OY, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.9)}
        d={[4, 8, 12].map((v) => tickD(OX, OY - v * YSTEP, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />

      {/* beat 1 — resource requirements */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={400} y={130} size={12} fill={MUTED}>
          {t("chair: 2h carpentry, 1h finishing · table: 3h carpentry, 2h finishing", "chair: 2h carpentry, 1h finishing · table: 3h carpentry, 2h finishing")}
        </T>
      </Fade>

      {/* beat 2 — the caps and profits */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={400} y={155} size={12} fill={MUTED}>
          {t("≤36 carpentry-hrs, ≤22 finishing-hrs; profit ₹30/chair, ₹50/table", "≤36 carpentry-hrs, ≤22 finishing-hrs; profit ₹30/chair, ₹50/table")}
        </T>
      </Fade>

      {/* beat 3 — the constraint system, drawn and shaded */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={400} y={180} size={15} fill={INK} weight={700}>
          2x+3y≤36, x+2y≤22, x,y≥0
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Path
          d={`M ${V00.x} ${V00.y} L ${V18_0.x} ${V18_0.y} L ${V6_8.x} ${V6_8.y} L ${V0_11.x} ${V0_11.y} Z`}
          fill={GREEN}
          opacity={0.16}
        />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={lineD(V0_11.x, V0_11.y, V6_8.x, V6_8.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d={lineD(V6_8.x, V6_8.y, V18_0.x, V18_0.y)} stroke={INK} sw={2.2} dur={0.6} />

      {/* beat 4 — the four corner points */}
      {[
        { p: V00, label: "(0,0)", dx: -10, dy: 18, anchor: "end" as const },
        { p: V18_0, label: "(18,0)", dx: 6, dy: 18, anchor: "start" as const },
        { p: V0_11, label: "(0,11)", dx: 10, dy: -6, anchor: "start" as const },
        { p: V6_8, label: "(6,8)", dx: 10, dy: -10, anchor: "start" as const },
      ].map((v, i) => (
        <React.Fragment key={i}>
          <Fade on={beat >= 4} delay={dl(4, 0.3 + i * 0.3)}>
            <Circle cx={v.p.x} cy={v.p.y} r={5} fill={i === 3 ? GREEN : INK} />
          </Fade>
          <Fade on={beat >= 4} delay={dl(4, 0.5 + i * 0.3)}>
            <T x={v.p.x + v.dx} y={v.p.y + v.dy} size={12} fill={MUTED} anchor={v.anchor}>
              {v.label}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — re-derive (6,8) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={720} y={175} size={12} fill={MUTED} anchor="start">
          2x+3y=36 ∩ x+2y=22 ⇒ (6,8)
        </T>
      </Fade>

      {/* beat 6 — the Z-evaluation table */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={720} y={210} size={14} fill={INK} weight={700} anchor="start">
          Z = 30x + 50y
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={720} y={245} size={13} fill={INK} anchor="start">
          (0,0): Z = 0
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={720} y={273} size={13} fill={INK} anchor="start">
          (18,0): Z = 540
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={720} y={301} size={13} fill={INK} anchor="start">
          (0,11): Z = 550
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={720} y={333} size={15} fill={GREEN} weight={800} anchor="start">
          (6,8): Z = 580 — MAX
        </T>
      </Fade>

      {/* beat 7 — the answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={210} y={490} w={660} h={52} fill={GREEN} textFill="#fff" size={17} script={false}>
          {t(
            "max profit ₹580/day at 6 chairs, 8 tables",
            "max profit ₹580/din, 6 chairs aur 8 tables pe"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
