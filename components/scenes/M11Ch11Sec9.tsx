/**
 * M11 Ch11 · Section 9 — "Speed trap: collinear only if all three agree"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples, JSON-flagged SPEED TRAP — the required beat is: stage the
 * tempting premature "collinear!" conclusion (checking only the x-coordinate), CROSS IT OUT in
 * red, then land the real answer only once y and z have also been verified. That reversal is
 * built in below (beats 3->4->6), not skipped.
 *
 * SCOPE NOTE (same flag as Sec7/Sec8, same subtopic "Applications: Centroid, Collinearity &
 * Locus"): the task brief described secs 1-12 as 2D-only, but this section's Supabase
 * board_content is unambiguously 3D (three points each with an explicit z-coordinate, a
 * y-check AND a z-check both required). Built as 3D per the JSON (authoritative), reusing
 * math-kit's project3D/ThreeDAxes — flagged for reconciliation once Sec2-6/10-14 exist.
 *
 * HAND-VERIFIED ARITHMETIC (independent of the JSON):
 *  A(2,1,-1), B(4,4,3), C(8,10,11). B divides AC in ratio k:1 => B=(k·C+A)/(k+1).
 *  x: (8k+2)/(k+1)=4 => 8k+2=4k+4 => 4k=2 => k=1/2. Matches JSON.
 *  y-check at k=1/2: (10(0.5)+1)/(0.5+1) = (5+1)/1.5 = 6/1.5 = 4 = yB. ✓ Matches JSON.
 *  z-check at k=1/2: (11(0.5)-1)/1.5 = (5.5-1)/1.5 = 4.5/1.5 = 3 = zB. ✓ Matches JSON.
 *  All three coordinates agree at k=1/2 => genuinely collinear. k:1 = (1/2):1 = 1:2, i.e. B
 *  divides AC in ratio 1:2. Matches JSON exactly; no data bugs found.
 *
 * THE TRAP, staged concretely: after solving k=1/2 from x alone (beat3), a tempting amber
 * "answer" chip appears reading "k = 1/2 -> 'Collinear'? (x only)" — styled exactly like a
 * genuine boxed answer elsewhere in these scenes, which is the point: it looks legitimate. At
 * beat4 ("now the mandatory check") that exact chip is crossed out in red (crossD over its own
 * box) while the narration insists on checking y and z. Only after both checks pass (beat5)
 * does a NEW, differently-styled green chip land the real answer at beat6. The numeric
 * conclusion happens to be the same "collinear" either way in this example — the trap is the
 * unjustified SHORTCUT (declaring victory from x alone), not a different final number; the
 * closing red-margin guardrail (beat7) makes that explicit ("one coordinate is never proof").
 *
 * reveals_english = [0, 7.68, 14.51, 25.94, 42.75, 54.95, 76.54, 87.64] (8 values, beats 0-7).
 *
 * PROJECTION (project3D, OX=700 OY=400 SCALE=26): A(2,1,-1)->(699,442) B(4,4,3)->(750,353)
 * C(8,10,11)->(852,176). Small MUTED orientation-axes triad at (950,520) scale16 axisLen1.8
 * (tips ~(935,529)/(979,520)/(950,491)), same "separate reference icon" device as Sec8/Sec15 —
 * not read to scale against the plotted points. Point labels placed clear of the A-C line and
 * of each other: A anchor=end (687,458), B anchor=start (764,349), C anchor=start (862,168).
 * Ratio markers "k"/"1" (tentative, AMBER_DARK) sit just off the AB/BC midpoints, offset
 * perpendicular to the line by ~14px so they clear the stroke: (737,408) and (813,276) — same
 * positions get overwritten by the confirmed "1"/"2" (GREEN) once collinearity lands (beat6),
 * mutually exclusive on-windows so the two never render simultaneously.
 *
 * Layout plan — left column (x50, narration/derivation) | right region (diagram):
 *  title (always-on)        | T mid script sz24 red | x540 y58
 *  b1 | 2-line question      | T start sz14          | x50 y100/123
 *  b1 | axes triad+labels, A/B/C dots+labels (no line yet) | Draw+Fade
 *  b2 | 2-line setup         | T start sz14           | x50 y156/179
 *  b2 | tentative A-C segment (MUTED) + "k"/"1" labels   | Draw+Fade
 *  b3 | 3-line x-equation    | T start sz13           | x50 y212/234/256
 *  b3 | tempting chip (AMBER, the bait) | Chip sz13 w236 h32 | x50 y283..315
 *  b4 | 2-line "check y,z too" | T start sz14         | x50 y354/377
 *  b4 | cross-out the tempting chip (RED)               | Draw crossD(50,283,236,32)
 *  b5 | y-check / z-check + checkD | T start sz13 + Draw | x50 y410/432, check x226
 *  b6 | boxed final answer (GREEN) | Chip sz14 w270 h36 | x50 y465..501
 *  b6 | confirmed green A-B-C segments, "1"/"2" labels, check near B | Draw+Fade
 *  b7 | red bar + 2-line guardrail | Draw+T start sz13  | x50 y529..579 / x66 y551/575
 * Vertical gaps: title->b1 26, b1L2->b2L1 24.66, b2L2->b3L1 24.66, b3L3->chip 22 (same idea,
 * >=14 floor), chip->b4L1 24.08, b4L2->b5L1 24.66, b5L2->b6chip 24.97, b6chip->b7bar 24. Final
 * content bottom (b7 L2 box ~579) leaves 17px above the y596 safe floor — tightest section of
 * the three; re-checked against the verifier's real measurements, not just the estimate.
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
import { project3D, ThreeDAxes, lineD, checkD } from "./math-kit";

const OX = 700;
const OY = 400;
const SCALE = 26;
const proj = (x: number, y: number, z: number) => project3D(x, y, z, OX, OY, SCALE);

const A = proj(2, 1, -1); // (699,442)
const B = proj(4, 4, 3); // (750,353)
const C = proj(8, 10, 11); // (852,176)

export default function M11Ch11Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const tentative = beat >= 2 && beat < 6;
  const confirmed = beat >= 6;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Speed trap: collinear only if all three agree", "Speed trap: collinear tabhi jab teeno agree karein")}
        </T>
      </Fade>

      {/* beat 1 — the question: plot the three points in 3D */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={50} y={100} size={14} fill={INK} anchor="start">
          {t("Are A(2,1,-1), B(4,4,3),", "Kya A(2,1,-1), B(4,4,3),")}
        </T>
        <T x={50} y={123} size={14} fill={INK} anchor="start">
          {t("C(8,10,11) collinear?", "C(8,10,11) collinear hain?")}
        </T>
      </Fade>
      <ThreeDAxes on={beat >= 1} delay={dl(1, 0)} originX={950} originY={520} scale={16} axisLen={1.8} stroke={MUTED} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={928} y={540} size={11} fill={MUTED} anchor="end">x</T>
        <T x={986} y={524} size={11} fill={MUTED} anchor="start">y</T>
        <T x={950} y={484} size={11} fill={MUTED} anchor="middle">z</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={687} y={458} size={13} fill={INK} anchor="end" weight={700}>A(2,1,-1)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={764} y={349} size={13} fill={INK} anchor="start" weight={700}>B(4,4,3)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Circle cx={C.x} cy={C.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={862} y={168} size={13} fill={INK} anchor="start" weight={700}>C(8,10,11)</T>
      </Fade>

      {/* beat 2 — setup: suppose B divides AC in ratio k:1 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={50} y={156} size={14} fill={INK} anchor="start">
          {t("Let B divide AC in k:1;", "Maano B, AC ko k:1 mein baante;")}
        </T>
        <T x={50} y={179} size={14} fill={INK} anchor="start">
          {t("solve using the x-coordinate.", "x-coordinate se solve karo.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={lineD(A.x, A.y, C.x, C.y)} stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={tentative} delay={dl(2, 1.0)}>
        <T x={737} y={408} size={13} fill={AMBER_DARK} anchor="start" weight={700}>k</T>
      </Fade>
      <Fade on={tentative} delay={dl(2, 1.2)}>
        <T x={813} y={276} size={13} fill={AMBER_DARK} anchor="start" weight={700}>1</T>
      </Fade>

      {/* beat 3 — solve for k from x alone, then the tempting (bait) conclusion */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={50} y={212} size={13} fill={INK} anchor="start">(8k+2)/(k+1) = 4</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={50} y={234} size={13} fill={INK} anchor="start">8k+2 = 4k+4  →  4k = 2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={50} y={256} size={13} fill={INK} anchor="start" weight={700}>k = 1/2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <Chip x={50} y={283} w={236} h={32} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13} script={false}>
          k = 1/2 → &apos;Collinear&apos;? (x only)
        </Chip>
      </Fade>

      {/* beat 4 — the mandatory check: cross out the premature conclusion */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={50} y={354} size={14} fill={INK} anchor="start">
          {t("Now the mandatory check —", "Ab woh mandatory check —")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 46 279 L 290 319 M 290 279 L 46 319" stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={50} y={377} size={14} fill={INK} anchor="start">
          {t("does k = 1/2 also work for y, z?", "kya k = 1/2 y aur z ke liye bhi chalta hai?")}
        </T>
      </Fade>

      {/* beat 5 — verify y and z */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={50} y={410} size={13} fill={INK} anchor="start">y: (10×0.5+1)/1.5 = 4 = yB</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={checkD(226, 406, 10)} stroke={GREEN} sw={2.2} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={50} y={432} size={13} fill={INK} anchor="start">z: (11×0.5-1)/1.5 = 3 = zB</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d={checkD(226, 428, 10)} stroke={GREEN} sw={2.2} dur={0.35} />

      {/* beat 6 — all three agree: the real, verified answer */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={50} y={465} w={270} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          B divides AC in 1 : 2 — collinear!
        </Chip>
      </Fade>
      <Draw on={confirmed} delay={dl(6, 0.5)} d={lineD(A.x, A.y, B.x, B.y)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Draw on={confirmed} delay={dl(6, 0.9)} d={lineD(B.x, B.y, C.x, C.y)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={confirmed} delay={dl(6, 1.3)}>
        <T x={737} y={408} size={13} fill={GREEN} anchor="start" weight={700}>1</T>
      </Fade>
      <Fade on={confirmed} delay={dl(6, 1.5)}>
        <T x={813} y={276} size={13} fill={GREEN} anchor="start" weight={700}>2</T>
      </Fade>
      <Draw on={confirmed} delay={dl(6, 1.8)} d={checkD(720, 370, 12)} stroke={GREEN} sw={2.4} dur={0.4} />

      {/* beat 7 — guardrail: one coordinate is never proof */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 50 529 L 50 579" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={66} y={551} size={13} fill={RED} anchor="start" weight={700}>
          {t("If the y- or z-check fails, the answer flips —", "Agar y- ya z-check fail ho, jawaab palat jaata hai —")}
        </T>
        <T x={66} y={575} size={13} fill={RED} anchor="start" weight={700}>
          {t("one coordinate is never proof.", "ek coordinate kabhi proof nahi hota.")}
        </T>
      </Fade>
    </Scene>
  );
}
