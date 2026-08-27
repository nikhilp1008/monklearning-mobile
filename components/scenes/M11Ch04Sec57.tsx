/**
 * M11 Ch04 · Section 57 — "Circles and the Apollonius locus"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 6 (Geometry of Complex Numbers).
 *
 * The JSON gives no concrete z1,z2,k for the Apollonius locus, only the general
 * fact "k≠1 gives a circle, generally not centred at z1/z2/midpoint". Per the
 * authoring brief, a computed concrete example is preferred over a hand-waved
 * schematic, so this scene picks z1=0, z2=8 (real axis, k=2) and computes the
 * REAL Apollonius circle via the standard construction: the circle's diameter
 * is the segment between the point dividing z1z2 internally in ratio k:1 and
 * the point dividing it externally in ratio k:1.
 *   |z|=2|z-8|  =>  boundary points on the real axis: x=16/3 (internal, A) and
 *   x=16 (external, B).  centre=(16/3+16)/2=32/3≈10.667, radius=(16-16/3)/2=16/3≈5.333.
 * Note centre≈10.667 is neither z1(0) nor z2(8) nor their midpoint(4) — exactly
 * the "generally not the midpoint" fact the brief warns about. This is flagged
 * on-board as "k=2 example" so it reads as an illustration, not a JSON-given fact.
 *
 * Beats (board_reveal_at_english [0, 6.49, 17.07, 26.28, 46.17, 57, 66.65, 74.33]):
 *  0 heading: circles, and the k=1 vs k≠1 split
 *  1 formula: |z-z0|=r (centre z0, radius r)
 *  2 DIAGRAM: the basic circle (z0,r) + a short contrast line (JSON's own svg
 *    pairs a circle with a perpendicular-bisector line "for contrast")
 *  3 general circle equation card (3 Overline bars): z z-bar + a-bar z + a z-bar + b = 0
 *  4 Apollonius ratio |z-z1|/|z-z2|=k; introduce z1,z2 on a line (no circle yet)
 *  5 red-margin: k=1 -> that contrast line from beat 2 (ringed callback)
 *  6 text: k≠1 -> draw the REAL computed Apollonius circle (centre≈10.667·scale)
 *  7 text: proof idea, |z|² term survives only when k≠1
 *
 * Geometry (fixed board coords):
 *  Basic circle: z0=(230,245) r=55. radius line to point at bearing -40°: (272.1,280.4).
 *  Contrast line (unlabelled at beat2, referenced at beat5): (80,330)-(160,400).
 *  Apollonius (scale 20px/unit, z1 at pixel origin (620,450)):
 *   z1=(620,450)  z2=(780,450)   [z2-z1 = 8 units = 160px]
 *   A (internal div pt, 16/3 units from z1) = (726.7,450)  — ON the circle
 *   B (external div pt, 16 units from z1)   = (940,450)    — ON the circle
 *   centre = (833.3,450)  radius = 106.7
 *   (z1 sits OUTSIDE this circle, z2 sits INSIDE it — correct for k=2>1: the
 *   circle hugs the closer point z2. Verified: |833.3-620|=213.3>106.7=r for z1;
 *   |833.3-780|=53.3<106.7=r for z2.)
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)   | T mid | x540 y100
 *  b1 | chip formula                   | Chip  | x390..690 y124..160
 *  b2 | basic circle + z0,r + contrast line | Draw/circle/T | left zone x60..320
 *  b3 | circle-eqn card (T run + 3 Overline) | x340..640 y190..250, caption y272
 *  b4 | z1,z2 dots+labels, line, chip "ratio=k" | right zone x620..780 y432..450; chip y300..336
 *  b5 | ring the beat-2 contrast line + label | Draw/T | ring(120,365,45,35)
 *  b6 | A,B dots+labels, line extended, circle, caption | right zone x620..960
 *  b7 | chip "expand: |z|² term needs k≠1" | Chip x340..640 y360..396
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  MUTED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, lineD, pointOnCircle, Overline } from "./math-kit";

// basic circle
const Z0 = { x: 230, y: 245 };
const R0 = 55;
const R0_POINT = pointOnCircle(Z0.x, Z0.y, R0, -0.698);

// contrast line (for k=1, referenced back at beat 5)
const CONTRAST = { x1: 80, y1: 330, x2: 160, y2: 400 };
const CONTRAST_MID = { x: (80 + 160) / 2, y: (330 + 400) / 2 };

// Apollonius construction (z1=0, z2=8, k=2 -> computed circle)
const AZ1 = { x: 620, y: 450 };
const AZ2 = { x: 780, y: 450 };
const A_PT = { x: 726.7, y: 450 };
const B_PT = { x: 940, y: 450 };
const APOL_C = { x: 833.3, y: 450 };
const APOL_R = 106.7;

const COL_X = 340;
const COL_W = 300;

export default function M11Ch04Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} anchor="middle" script>
          {t("Circles and the Apollonius Locus", "Circles aur Apollonius Locus")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Circles, and the k=1 vs k≠1 split", "Circles, aur k=1 vs k≠1 ka split")}
        </T>
      </Fade>

      {/* beat 1 — the basic circle formula */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={375} y={124} w={330} h={36} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          |z - z₀| = r  (centre z₀, radius r)
        </Chip>
      </Fade>

      {/* beat 2 — DIAGRAM: the basic circle + a contrast line */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={circleD(Z0.x, Z0.y, R0)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={Z0.x} cy={Z0.y} r={3.5} fill={INK} />
        <T x={240} y={237} size={13} fill={INK} anchor="start" weight={700}>z₀</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={lineD(Z0.x, Z0.y, R0_POINT.x, R0_POINT.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={257} y={256.7} size={12} fill={MUTED} anchor="start">r</T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.1)}
        d={lineD(CONTRAST.x1, CONTRAST.y1, CONTRAST.x2, CONTRAST.y2)}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />

      {/* beat 3 — general circle equation, drawn overlines over z-bar and a-bar */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Rect x={COL_X} y={190} width={COL_W} height={60} rx={14} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        {/* single text run "z z + a z + a z + b = 0" — bars drawn separately above
            char-index 2 ('z', 1st term), 6 ('a'), and 14 ('z', 3rd term). char
            width estimate 0.5*16=8px, run starts x=398 to center in the card. */}
        <T x={398} y={222} size={16} fill={INK} anchor="start" weight={700}>z z + a z + a z + b = 0</T>
        <Overline on={beat >= 3} delay={dl(3, 0.7)} x={418} y={222} size={16} textWidth={8} anchor="middle" />
        <Overline on={beat >= 3} delay={dl(3, 0.7)} x={450} y={222} size={16} textWidth={8} anchor="middle" />
        <Overline on={beat >= 3} delay={dl(3, 0.7)} x={514} y={222} size={16} textWidth={8} anchor="middle" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={490} y={272} size={12} fill={MUTED} anchor="middle">
          {t("centre = -a, radius = √(|a|²-b)", "centre = -a, radius = √(|a|²-b)")}
        </T>
      </Fade>

      {/* beat 4 — Apollonius ratio: introduce z1, z2 (no circle yet) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Circle cx={AZ1.x} cy={AZ1.y} r={4.5} fill={INK} />
        <T x={AZ1.x} y={432} size={14} fill={INK} anchor="middle" weight={700}>z₁</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Circle cx={AZ2.x} cy={AZ2.y} r={4.5} fill={INK} />
        <T x={AZ2.x} y={432} size={14} fill={INK} anchor="middle" weight={700}>z₂</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={lineD(AZ1.x, AZ1.y, AZ2.x, AZ2.y)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Chip x={COL_X} y={300} w={COL_W} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          |z-z₁| / |z-z₂| = k
        </Chip>
      </Fade>

      {/* beat 5 — red-margin: k=1 is that contrast line from beat 2 */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={ringD(CONTRAST_MID.x, CONTRAST_MID.y, 45, 35)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={120} y={415} size={12} fill={RED} anchor="middle" weight={700}>
          {t("k=1 → this line", "k=1 → ye line")}
        </T>
      </Fade>

      {/* beat 6 — k≠1: the REAL computed Apollonius circle */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Circle cx={A_PT.x} cy={A_PT.y} r={4} fill={AMBER_DARK} />
        <T x={A_PT.x} y={472} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>A</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d={lineD(AZ2.x, AZ2.y, 955, 450)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Circle cx={B_PT.x} cy={B_PT.y} r={4} fill={AMBER_DARK} />
        <T x={B_PT.x} y={472} size={12} fill={AMBER_DARK} anchor="middle" weight={700}>B</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={circleD(APOL_C.x, APOL_C.y, APOL_R)} stroke={GREEN} sw={2.4} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={APOL_C.x} y={579} size={13} fill={GREEN} anchor="middle" weight={700}>
          {t("k=2 example: a real Apollonius circle", "k=2 example: ek real Apollonius circle")}
        </T>
      </Fade>

      {/* beat 7 — proof idea */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={COL_X} y={360} w={COL_W} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("Expand: |z|² term needs k≠1", "Expand karo: |z|² term ko k≠1 chahiye")}
        </Chip>
      </Fade>
    </Scene>
  );
}
