/**
 * Ch08 · Section 2 — "Inside the solid: atoms as tiny springs"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.36, 21.59, 32.85, 41.05, 51.54, 52.54]):
 *  0 zoom lens (dashed ring) + one atom drawn — "zoom in to the atoms"
 *  1 THE DIAGRAM: rest lattice (atoms + zigzag bonds) + a pull demo
 *    (two atoms stretched apart, red outward arrows) — one picture, two states
 *  2 diagonal bonds added to the lattice — "every direction" + mesh label
 *  3 ring around one rest bond — F_net = 0
 *  4 green inward arrows on the pull demo — the push-back / restoring force
 *  5 red margin-bar note (short beat) — collective push-back = restoring force
 *  6 closing line — stretch more, push back more, until the elastic limit
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 24, red, ALWAYS ON) cx540 bl64 (box ≈269..811 y33..76)
 *  b0 | zoom ring r32           | circle | c(540,180) x508..572 y148..212
 *  b0 | atom                    | Draw   | c(540,180) r16 x524..556 y164..196
 *  b0 | "atom" (13)             | T mid  | x525..554 bl240 (y223..247)
 *  b1 | lattice atoms ×6        | Fade   | x237..463 y307..403
 *  b1 | lattice bonds (zigzag)  | Draw   | same box
 *  b1 | rest caption (13)       | T mid  | x268..432 bl430 (y413..437)
 *  b1 | pull atoms ×2           | Fade   | x607..833 y377..403
 *  b1 | pull bond (stretched)   | Draw   | x633..807 y~370..410
 *  b1 | pull arrows ×2 (red)    | Draw   | x580..860 y384..396
 *  b1 | pull caption (13)       | T mid  | x613..827 bl430 (y413..437)
 *  b2 | diagonal bonds ×2       | Draw   | x250..450 y320..390
 *  b2 | mesh label (14)         | T mid  | x324..756 bl472 (y454..479)
 *  b3 | ring on row1 bond       | Draw   | c(300,320) rx64 ry22 (overshoot top≈291)
 *  b3 | "F_net = 0" (13)        | T mid  | x271..329 bl240 (y223..247) — wait, moved below
 *  b4 | green arrows ×2         | Draw   | x600..640 / x800..840  y386..402
 *  b5 | margin bar              | Draw   | x60  y495..526
 *  b5 | TRAP text (16)          | T st   | x76..481  bl516 (y495..524)
 *  b6 | closing line (16)       | T mid  | x285..795 bl566 (y545..574)
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
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

/** Zigzag "spring" path between two points. */
function springD(x1: number, y1: number, x2: number, y2: number, teeth = 4, amp = 9): string {
  const len = Math.hypot(x2 - x1, y2 - y1);
  const ux = (x2 - x1) / len;
  const uy = (y2 - y1) / len;
  const px = -uy * amp;
  const py = ux * amp;
  let d = `M${x1} ${y1}`;
  const n = teeth * 2;
  for (let i = 1; i < n; i++) {
    const x = x1 + ux * len * (i / n);
    const y = y1 + uy * len * (i / n);
    const off = i % 2 === 1 ? 1 : -1;
    d += ` L${x + px * off} ${y + py * off}`;
  }
  d += ` L${x2} ${y2}`;
  return d;
}

const LATTICE_X = [250, 350, 450];
const LATTICE_Y = [320, 390];

export default function Ch08Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const bondsD = [
    springD(LATTICE_X[0], LATTICE_Y[0], LATTICE_X[1], LATTICE_Y[0], 3, 7),
    springD(LATTICE_X[1], LATTICE_Y[0], LATTICE_X[2], LATTICE_Y[0], 3, 7),
    springD(LATTICE_X[0], LATTICE_Y[1], LATTICE_X[1], LATTICE_Y[1], 3, 7),
    springD(LATTICE_X[1], LATTICE_Y[1], LATTICE_X[2], LATTICE_Y[1], 3, 7),
    springD(LATTICE_X[0], LATTICE_Y[0], LATTICE_X[0], LATTICE_Y[1], 2, 7),
    springD(LATTICE_X[1], LATTICE_Y[0], LATTICE_X[1], LATTICE_Y[1], 2, 7),
    springD(LATTICE_X[2], LATTICE_Y[0], LATTICE_X[2], LATTICE_Y[1], 2, 7),
  ].join(" ");

  const diagBondsD = [
    springD(250, 320, 350, 390, 2, 6),
    springD(450, 320, 350, 390, 2, 6),
  ].join(" ");

  const pullBondD = springD(633, 390, 807, 390, 5, 13);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("inside the solid: atoms as tiny springs", "andar se: atoms tiny springs ki tarah")}
        </T>
      </Fade>

      {/* beat 0 — zoom in on one atom */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <Circle cx={540} cy={180} r={32} fill="none" stroke={MUTED} strokeWidth={1.6} strokeDasharray="4 5" />
      </Fade>
      <Fade on={beat >= 0} delay={0}>
        <Draw
          on={beat >= 0}
          delay={dl(0, 0.6)}
          d="M524 180 A16 16 0 1 1 523.9 180"
          stroke={INK}
          sw={2.2}
          dur={0.8}
          fill={AMBER}
        />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={240} size={13} fill={MUTED} script>
          {t("one atom", "ek atom")}
        </T>
      </Fade>

      {/* beat 1 — the lattice at rest, and a bond being pulled */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        {LATTICE_X.flatMap((x) =>
          LATTICE_Y.map((y) => <Circle key={`${x}-${y}`} cx={x} cy={y} r={13} fill={AMBER} stroke={INK} strokeWidth={1.8} />)
        )}
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={bondsD} stroke={INK} sw={1.6} dur={1.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={350} y={430} size={13} fill={MUTED} script>
          {t("at rest: zero net force", "aaram mein: zero net force")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <Circle cx={620} cy={390} r={13} fill={AMBER} stroke={INK} strokeWidth={1.8} />
        <Circle cx={820} cy={390} r={13} fill={AMBER} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6.2)} d={pullBondD} stroke={RED} sw={1.8} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 7.4)} d={arrowD(607, 390, 580, 390)} stroke={RED} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 7.4)} d={arrowD(833, 390, 860, 390)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 8.4)}>
        <T x={720} y={430} size={13} fill={RED} script>
          {t("pull → stretches → pushes back", "kheencho → khinchta → push karta")}
        </T>
      </Fade>

      {/* beat 2 — bonds run in every direction: the mesh */}
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={diagBondsD} stroke={AMBER_DARK} sw={1.6} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={472} size={14} fill={AMBER_DARK} script>
          {t("countless bonds, every direction → the mesh's stiffness", "anginat bonds, har direction → mesh ki stiffness")}
        </T>
      </Fade>

      {/* beat 3 — at rest, F_net = 0 */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={ringD(300, 320, 64, 22)} stroke={GREEN} sw={2.6} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={300} y={270} size={13} fill={GREEN} weight={800}>
          F_net = 0
        </T>
      </Fade>

      {/* beat 4 — the push-back: restoring force on the stretched bond */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={arrowD(600, 398, 618, 388)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(840, 398, 822, 388)} stroke={GREEN} sw={2.4} dur={0.4} />

      {/* beat 5 — the trap (short beat): collective push-back = restoring force */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M60 495 L60 526" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={76} y={516} size={16} fill={RED} script anchor="start">
          {t("the push-back IS the internal restoring force", "yehi push-back hi internal restoring force hai")}
        </T>
      </Fade>

      {/* beat 6 — closing line */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={566} size={16} fill={GREEN} script>
          {t("stretch more → push back more — until the elastic limit", "zyada khinchiye → zyada push-back — elastic limit tak")}
        </T>
      </Fade>
    </Scene>
  );
}
