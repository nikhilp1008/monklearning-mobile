/**
 * M11 Ch04 · Section 58 — "Arg-loci, equilateral triangles, and modulus extrema"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 6 (Geometry of Complex Numbers).
 *
 * This section covers FOUR distinct loci facts. Rather than cram four small
 * diagrams onto one board, each sub-topic gets the FULL central stage in turn
 * and is ERASED (opacity -> 0, per SCENE_AUTHORING.md's "manage space by
 * erasing, not scrolling") when the next one begins — done by gating each
 * zone's elements on beat windows [k, k_next) instead of beat>=k. Only the
 * last zone (modulus extrema) persists to the final settled frame.
 *
 * CRITICAL geometry notes (per authoring brief):
 *  - Zone A draws an ARC (not a full circle) through z1,z2. It also draws the
 *    COMPLEMENTARY minor arc in thin red to show exactly what is excluded —
 *    the fixed-argument locus is only the arc the sample point P sits on.
 *  - Zone D (modulus extrema) draws the circle, the origin O, the actual line
 *    through O and z0, and marks the near/far points ON that line — computed,
 *    not eyeballed (verified below to lie exactly on the circle).
 *
 * Beats (board_reveal_at_english [0, 7, 19.11, 32.77, 44.03, 55.81, 72.28, 89.6]):
 *  0 heading: arcs, triangles, and extremes on a circle
 *  1 ZONE A begins: main arc through z1,z2, sample point P, angle α at P
 *  2 red-margin: complementary (excluded) arc in thin red + guardrail text
 *  3 special case: z1z2 drawn as a diameter when α=90°
 *  4 ZONE A erases; ZONE B: 4 concyclic points on a circle + cross-ratio chip
 *  5 ZONE B erases; ZONE C: equilateral triangle (3 points 120° apart) + identity chip
 *  6 ZONE C erases; ZONE D: circle |z-z0|=r, origin O, line O-z0, bound chip
 *  7 ZONE D continues: mark the near/far points ON that line (computed, on-circle)
 *
 * Geometry — Zone A (arc through z1,z2 at bearings 160°,20° on a circle
 * centred (540,360) r=160; P at bearing 270°, the bottom of the MAJOR arc):
 *  z1=(389.65,305.28)  z2=(690.35,305.28)  P=(540,520)
 *  inscribed angle at P = 70° (verified = half the excluded 140° minor arc,
 *  confirming the inscribed-angle theorem holds for this construction).
 *
 * Geometry — Zone D (modulus extrema, O=(430,480), z0=(620,320), r=100):
 *  |z0-O| = 248.4 (pixel-distance standard). unit O->z0 = (0.7649,-0.6441).
 *  near point = O + (248.4-100)*unit = (543.5,384.4)  [between O and z0]
 *  far  point = O + (248.4+100)*unit = (696.5,255.6)  [beyond z0]
 *  both verified to be exactly r=100 from z0's centre.
 *
 * Layout: title(60), heading(100), then one shared central zone reused by
 * A/B/C/D via beat-window gating (see zoneA/zoneB/zoneC/zoneD booleans below).
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { angleArcD, circleD, lineD, pointOnCircle } from "./math-kit";

// ---------- Zone A: arg-locus arc ----------
const CA = { x: 540, y: 360 };
const RA = 160;
const B_Z1 = (160 * Math.PI) / 180;
const B_Z2 = (20 * Math.PI) / 180;
const B_Z2_UNWRAPPED = ((20 + 360) * Math.PI) / 180;
const AZ1 = pointOnCircle(CA.x, CA.y, RA, B_Z1);
const AZ2 = pointOnCircle(CA.x, CA.y, RA, B_Z2);
const P = pointOnCircle(CA.x, CA.y, RA, (270 * Math.PI) / 180);
const BEARING_P_TO_Z2 = (55 * Math.PI) / 180;
const BEARING_P_TO_Z1 = (125 * Math.PI) / 180;
const ALPHA_LABEL = pointOnCircle(P.x, P.y, 55, (90 * Math.PI) / 180);

// ---------- Zone B: concyclic ----------
const CB = { x: 540, y: 340 };
const RB = 130;
const CONCYC_BEARINGS = [45, 135, 225, 315].map((d) => (d * Math.PI) / 180);
const CONCYC_PTS = CONCYC_BEARINGS.map((th) => pointOnCircle(CB.x, CB.y, RB, th));
const CONCYC_LABELS = CONCYC_BEARINGS.map((th) => pointOnCircle(CB.x, CB.y, RB + 24, th));

// ---------- Zone C: equilateral ----------
const CC = { x: 540, y: 340 };
const RC = 140;
const EQ_BEARINGS = [90, 210, 330].map((d) => (d * Math.PI) / 180);
const EQ_PTS = EQ_BEARINGS.map((th) => pointOnCircle(CC.x, CC.y, RC, th));
const EQ_LABELS = EQ_BEARINGS.map((th) => pointOnCircle(CC.x, CC.y, RC + 24, th));

// ---------- Zone D: modulus extrema ----------
const OZ = { x: 430, y: 480 };
const Z0 = { x: 620, y: 320 };
const RD = 100;
const DZ = { x: Z0.x - OZ.x, y: Z0.y - OZ.y };
const MOD_Z0 = Math.sqrt(DZ.x * DZ.x + DZ.y * DZ.y);
const UZ = { x: DZ.x / MOD_Z0, y: DZ.y / MOD_Z0 };
const NEAR_PT = { x: OZ.x + (MOD_Z0 - RD) * UZ.x, y: OZ.y + (MOD_Z0 - RD) * UZ.y };
const FAR_PT = { x: OZ.x + (MOD_Z0 + RD) * UZ.x, y: OZ.y + (MOD_Z0 + RD) * UZ.y };
const LINE_END = { x: OZ.x + (MOD_Z0 + RD + 20) * UZ.x, y: OZ.y + (MOD_Z0 + RD + 20) * UZ.y };

export default function M11Ch04Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const zoneA = beat >= 1 && beat < 4;
  const zoneB = beat >= 4 && beat < 5;
  const zoneC = beat >= 5 && beat < 6;
  const zoneD = beat >= 6;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} anchor="middle" script>
          {t("Arg-Loci, Triangles, and Modulus Extrema", "Arg-Loci, Triangles, aur Modulus Extrema")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Arcs, triangles, and extremes on a circle", "Circle par arcs, triangles, aur extremes")}
        </T>
      </Fade>

      {/* ================= ZONE A — arg-locus arc (beats 1,2,3) ================= */}
      <Fade on={zoneA} delay={dl(1, 0)}>
        <T x={540} y={175} size={15} fill={INK} anchor="middle">
          arg[(z-z₁)/(z-z₂)] = α ⇒ arc through z₁,z₂
        </T>
      </Fade>
      <Draw on={zoneA} delay={dl(1, 0.4)} d={angleArcD(CA.x, CA.y, RA, B_Z1, B_Z2_UNWRAPPED)} stroke={INK} sw={2.8} dur={0.9} />
      <Fade on={zoneA} delay={dl(1, 1.4)}>
        <Circle cx={AZ1.x} cy={AZ1.y} r={4.5} fill={INK} />
        <T x={370} y={283} size={15} fill={INK} anchor="end" weight={700}>z₁</T>
      </Fade>
      <Fade on={zoneA} delay={dl(1, 1.8)}>
        <Circle cx={AZ2.x} cy={AZ2.y} r={4.5} fill={INK} />
        <T x={710} y={283} size={15} fill={INK} anchor="start" weight={700}>z₂</T>
      </Fade>
      <Fade on={zoneA} delay={dl(1, 2.2)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={AMBER_DARK} />
      </Fade>
      <Draw on={zoneA} delay={dl(1, 2.5)} d={lineD(P.x, P.y, AZ1.x, AZ1.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={zoneA} delay={dl(1, 2.9)} d={lineD(P.x, P.y, AZ2.x, AZ2.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={zoneA}
        delay={dl(1, 3.3)}
        d={angleArcD(P.x, P.y, 38, BEARING_P_TO_Z2, BEARING_P_TO_Z1)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={zoneA} delay={dl(1, 3.8)}>
        <T x={ALPHA_LABEL.x} y={ALPHA_LABEL.y} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>α</T>
        <T x={P.x} y={548} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>P</T>
      </Fade>

      {/* beat 2 — red-margin: this is an ARC, not the whole circle */}
      <Draw
        on={zoneA && beat >= 2}
        delay={dl(2, 0)}
        d={angleArcD(CA.x, CA.y, RA, B_Z2, B_Z1)}
        stroke={RED}
        sw={1.6}
        dur={0.6}
      />
      <Draw on={zoneA && beat >= 2} delay={dl(2, 0.7)} d={`M 750 330 L 750 364`} stroke={RED} sw={4} dur={0.3} />
      <Fade on={zoneA && beat >= 2} delay={dl(2, 1.1)}>
        <T x={766} y={352} size={13} fill={RED} anchor="start" weight={700}>
          {t("Fixed α ⇒ an ARC, not the full circle", "Fixed α ⇒ sirf ARC, poora circle nahi")}
        </T>
      </Fade>

      {/* beat 3 — special case: α=90° makes z1z2 the diameter */}
      <Draw on={zoneA && beat >= 3} delay={dl(3, 0)} d={lineD(AZ1.x, AZ1.y, AZ2.x, AZ2.y)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={zoneA && beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={580} size={12} fill={AMBER_DARK} anchor="middle">
          {t("α=90°: z₁z₂ becomes the diameter", "α=90°: z₁z₂ diameter ban jaata hai")}
        </T>
      </Fade>

      {/* ================= ZONE B — concyclic points (beat 4) ================= */}
      <Draw on={zoneB} delay={dl(4, 0)} d={circleD(CB.x, CB.y, RB)} stroke={INK} sw={2.2} dur={0.7} />
      {CONCYC_PTS.map((p, i) => (
        <Fade key={i} on={zoneB} delay={dl(4, 0.9 + i * 0.35)}>
          <Circle cx={p.x} cy={p.y} r={4} fill={INK} />
          <T x={CONCYC_LABELS[i].x} y={CONCYC_LABELS[i].y} size={14} fill={INK} anchor="middle" weight={700}>
            {["z₁", "z₂", "z₃", "z₄"][i]}
          </T>
        </Fade>
      ))}
      <Fade on={zoneB} delay={dl(4, 2.4)}>
        <Chip x={340} y={490} w={400} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          z₁,z₂,z₃,z₄ concyclic ⇔ cross-ratio ∈ R
        </Chip>
      </Fade>

      {/* ================= ZONE C — equilateral triangle (beat 5) ================= */}
      <Draw on={zoneC} delay={dl(5, 0)} d={lineD(EQ_PTS[0].x, EQ_PTS[0].y, EQ_PTS[1].x, EQ_PTS[1].y)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={zoneC} delay={dl(5, 0.5)} d={lineD(EQ_PTS[1].x, EQ_PTS[1].y, EQ_PTS[2].x, EQ_PTS[2].y)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={zoneC} delay={dl(5, 1.0)} d={lineD(EQ_PTS[2].x, EQ_PTS[2].y, EQ_PTS[0].x, EQ_PTS[0].y)} stroke={INK} sw={2.2} dur={0.5} />
      {EQ_PTS.map((p, i) => (
        <Fade key={i} on={zoneC} delay={dl(5, 1.6 + i * 0.3)}>
          <Circle cx={p.x} cy={p.y} r={4.5} fill={INK} />
          <T x={EQ_LABELS[i].x} y={EQ_LABELS[i].y} size={15} fill={INK} anchor="middle" weight={700}>
            {["z₁", "z₂", "z₃"][i]}
          </T>
        </Fade>
      ))}
      <Fade on={zoneC} delay={dl(5, 2.6)}>
        <Chip x={390} y={460} w={300} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          z₁²+z₂²+z₃² = z₁z₂+z₂z₃+z₃z₁
        </Chip>
      </Fade>

      {/* ================= ZONE D — modulus extrema (beats 6,7) ================= */}
      <Draw on={zoneD} delay={dl(6, 0)} d={circleD(Z0.x, Z0.y, RD)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={zoneD} delay={dl(6, 0.8)}>
        <Circle cx={Z0.x} cy={Z0.y} r={3.5} fill={INK} />
        <T x={634} y={310} size={14} fill={INK} anchor="start" weight={700}>z₀</T>
      </Fade>
      <Fade on={zoneD} delay={dl(6, 1.1)}>
        <Circle cx={OZ.x} cy={OZ.y} r={3.5} fill={INK} />
        <T x={414} y={500} size={14} fill={INK} anchor="end" weight={700}>O</T>
      </Fade>
      <Draw on={zoneD} delay={dl(6, 1.4)} d={lineD(OZ.x, OZ.y, LINE_END.x, LINE_END.y)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={zoneD} delay={dl(6, 2.1)}>
        <Chip x={445} y={518} w={240} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          ||z₀|-r| ≤ |z| ≤ |z₀|+r
        </Chip>
      </Fade>

      {/* beat 7 — mark the near/far points on the line, exactly on the circle */}
      <Fade on={zoneD && beat >= 7} delay={dl(7, 0)}>
        <Circle cx={NEAR_PT.x} cy={NEAR_PT.y} r={4.5} fill={GREEN} />
        <T x={561} y={404} size={12} fill={GREEN} anchor="start" weight={700}>min</T>
      </Fade>
      <Fade on={zoneD && beat >= 7} delay={dl(7, 0.5)}>
        <Circle cx={FAR_PT.x} cy={FAR_PT.y} r={4.5} fill={GREEN} />
        <T x={714} y={275} size={12} fill={GREEN} anchor="start" weight={700}>max</T>
      </Fade>
    </Scene>
  );
}
