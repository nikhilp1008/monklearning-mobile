/**
 * C11 Chemistry Ch03 · Section 17 — "Measuring atomic radius three ways"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.96, 24.32, 36.01, 44.54, 59.56, 76.2, 101.03]):
 *  0 title + underline
 *  1 no hard edge — radius is defined operationally
 *  2 covalent radius diagram: two bonded atoms, distance d(A-A) dimensioned
 *  3 formula: rcov = ½ d(A-A)
 *  4 van der Waals radius: half distance between non-bonded atoms
 *  5 red-margin: size order rvdW > rmetallic > rcov
 *  6 period-2 covalent radii data row (7 chips, shrinking)
 *  7 group-1 radii data row (5 chips, growing)
 *
 * Layout plan:
 *  b1 | intro (script 15, muted)   | T mid  | x?..?     y82..106 (bl 100)
 *  b2 | 2 circles + bond + dims    | Draw   | x270..390 y110..249
 *  b3 | formula (16,w700,ink)      | T mid  | x?..?     y258..275 (bl 270)
 *  b4 | vdW line (14,ink)          | T mid  | x?..?     y288..303 (bl 298)
 *  b5 | red margin bar + line      | Draw   | x70  y318..350 (bl 338)
 *  b6 | label + 7 chips            | Chip   | x160..920 y384..432
 *  b7 | label + 5 chips            | Chip   | x241..839 y452..500
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const PERIOD2 = [
  { s: "Li", v: 152 },
  { s: "Be", v: 111 },
  { s: "B", v: 88 },
  { s: "C", v: 77 },
  { s: "N", v: 74 },
  { s: "O", v: 66 },
  { s: "F", v: 64 },
];
const GROUP1 = [
  { s: "Li", v: 152 },
  { s: "Na", v: 186 },
  { s: "K", v: 231 },
  { s: "Rb", v: 244 },
  { s: "Cs", v: 262 },
];

export default function C11Ch03Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const p2w = 100, p2gap = 10, p2x0 = 540 - (PERIOD2.length * p2w + (PERIOD2.length - 1) * p2gap) / 2;
  const g1w = 110, g1gap = 12, g1x0 = 540 - (GROUP1.length * g1w + (GROUP1.length - 1) * g1gap) / 2;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("measuring atomic radius three ways", "atomic radius naapne ke teen tareeke")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — no hard edge */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} script>
          {t("no hard edge — radius is defined operationally", "koi hard edge nahi — radius operationally define hota")}
        </T>
      </Fade>

      {/* beat 2 — covalent radius: two bonded atoms */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 270 175 m -32 0 a 32 32 0 1 0 64 0 a 32 32 0 1 0 -64 0" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 390 175 m -32 0 a 32 32 0 1 0 64 0 a 32 32 0 1 0 -64 0" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Circle cx={270} cy={175} r={3} fill={INK} />
        <Circle cx={390} cy={175} r={3} fill={INK} />
        <Line x1={302} y1={175} x2={358} y2={175} stroke={INK} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <Line x1={270} y1={122} x2={270} y2={129} stroke={INK} strokeWidth={1.4} />
        <Line x1={390} y1={122} x2={390} y2={129} stroke={INK} strokeWidth={1.4} />
        <Line x1={270} y1={125.5} x2={390} y2={125.5} stroke={INK} strokeWidth={1.4} />
        <T x={330} y={115} size={13} fill={INK}>d(A-A)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Line x1={270} y1={222} x2={270} y2={229} stroke={AMBER_DARK} strokeWidth={1.4} />
        <Line x1={330} y1={222} x2={330} y2={229} stroke={AMBER_DARK} strokeWidth={1.4} />
        <Line x1={270} y1={225.5} x2={330} y2={225.5} stroke={AMBER_DARK} strokeWidth={1.4} />
        <T x={300} y={245} size={13} fill={AMBER_DARK}>rcov</T>
      </Fade>

      {/* beat 3 — the formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={270} size={16} weight={700} fill={INK}>
          rcov = ½ d(A-A)
        </T>
      </Fade>

      {/* beat 4 — van der Waals radius */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={298} size={14} fill={INK}>
          {t("van der Waals radius = ½ distance between NON-bonded atoms (noble gases)", "van der Waals radius = NON-bonded atoms ke beech distance ka ½ (noble gases)")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: the size order */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 70 318 L 70 350" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={94} y={338} size={16} weight={700} fill={INK} anchor="start">
          {t("size order: rvdW > rmetallic > rcov", "size order: rvdW > rmetallic > rcov")}
        </T>
      </Fade>

      {/* beat 6 — period-2 covalent radii, shrinking */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={384} size={13} weight={800} fill={AMBER_DARK}>
          {t("period 2 covalent radii (pm)", "period 2 covalent radii (pm)")}
        </T>
      </Fade>
      {PERIOD2.map((e, i) => (
        <Fade key={e.s} on={beat >= 6} delay={dl(6, 0.4 + i * 0.15)}>
          <Chip x={p2x0 + i * (p2w + p2gap)} y={400} w={p2w} h={32} fill="#FFFEFB" stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
            {`${e.s} ${e.v}`}
          </Chip>
        </Fade>
      ))}

      {/* beat 7 — group-1 radii, growing */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={452} size={13} weight={800} fill={GREEN}>
          {t("group 1 radii, down (pm)", "group 1 radii, neeche (pm)")}
        </T>
      </Fade>
      {GROUP1.map((e, i) => (
        <Fade key={e.s} on={beat >= 7} delay={dl(7, 0.4 + i * 0.15)}>
          <Chip x={g1x0 + i * (g1w + g1gap)} y={468} w={g1w} h={32} fill="#FFFEFB" stroke={GREEN} textFill={INK} size={13} script={false}>
            {`${e.s} ${e.v}`}
          </Chip>
        </Fade>
      ))}
    </Scene>
  );
}
