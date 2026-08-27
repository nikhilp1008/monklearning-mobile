/**
 * C11 Chemistry Ch03 · Section 43 — "The corridor: four blocks and the table's shape"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.19, 21.16, 27.82, 45.65, 62.63, 81.66, 96.94]):
 *  0 title + underline
 *  1 s-rooms: 2 doors on the left = s-block
 *  2 p-rooms: 6 doors on the far right = p-block
 *  3 d-rooms: 10 doors tucked in the middle (from floor 4) = d-block, (n-1)d
 *  4 f-rooms: 14 doors in a basement annexe (from floor 6) = f-block
 *  5 red-margin: shape 2,10,6(+14 below) = subshell seating capacity
 *  6 schematic reminder: s left, d middle, p right, f strip, staircase
 *  7 closing green stamp: table's outline = subshell capacity made visible
 *
 * Layout plan:
 *  b1 | 2 s-doors                   | Draw | x100..172 y140..174
 *  b2 | 6 p-doors                   | Draw | x750..974 y140..174
 *  b3 | 10 d-doors                  | Draw | x270..556 y140..174
 *  b4 | 14 f-doors (annexe row)     | Draw | x390..696 y225..253
 *  b5 | red margin bar + line       | Draw | x70 y290..322 (bl 312)
 *  b6 | schematic line (script 13)  | T mid| x?..?     y331..345 (bl 345)
 *  b7 | closing stamp (green)       | Chip | x200..880 y360..396
 */

import React from "react";
import { Rect } from 'react-native-svg';
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

function DoorRow({
  on,
  delay,
  x0,
  y,
  w,
  h,
  gap,
  n,
  color,
}: {
  on: boolean;
  delay: number;
  x0: number;
  y: number;
  w: number;
  h: number;
  gap: number;
  n: number;
  color: string;
}) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <Fade key={i} on={on} delay={delay + i * 0.06}>
          <Rect x={x0 + i * (w + gap)} y={y} width={w} height={h} fill={color} fillOpacity={0.3} stroke={color} strokeWidth={1.8} />
        </Fade>
      ))}
    </>
  );
}

export default function C11Ch03Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={18} fill={RED} script>
          {t("the corridor: four blocks and the table's shape", "corridor: chaar blocks aur table ka shape")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — s-rooms */}
      <DoorRow on={beat >= 1} delay={dl(1, 0.2)} x0={100} y={140} w={34} h={34} gap={4} n={2} color={AMBER_DARK} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={119} y={195} size={12} fill={AMBER_DARK} weight={700}>{t("2 s-rooms", "2 s-rooms")}</T>
      </Fade>

      {/* beat 2 — p-rooms */}
      <DoorRow on={beat >= 2} delay={dl(2, 0.2)} x0={750} y={140} w={34} h={34} gap={4} n={6} color={GREEN} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={845} y={195} size={12} fill={GREEN} weight={700}>{t("6 p-rooms", "6 p-rooms")}</T>
      </Fade>

      {/* beat 3 — d-rooms, tucked in the middle */}
      <DoorRow on={beat >= 3} delay={dl(3, 0.2)} x0={270} y={140} w={25} h={34} gap={4} n={10} color={AMBER_DARK} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={400} y={195} size={12} fill={AMBER_DARK} weight={700}>{t("10 d-rooms (n−1)d", "10 d-rooms (n−1)d")}</T>
      </Fade>

      {/* beat 4 — f-rooms, basement annexe */}
      <DoorRow on={beat >= 4} delay={dl(4, 0.2)} x0={390} y={225} w={20} h={28} gap={2} n={14} color={MUTED} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={270} size={12} fill={MUTED} weight={700}>{t("14 f-rooms (printed below)", "14 f-rooms (neeche print)")}</T>
      </Fade>

      {/* beat 5 — red-margin: the capacity insight */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 70 290 L 70 322" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={94} y={312} size={15} weight={700} fill={INK} anchor="start">
          {t("shape 2,10,6 (+14 below) = subshell seating capacity", "shape 2,10,6 (+14 neeche) = subshell seating capacity")}
        </T>
      </Fade>

      {/* beat 6 — schematic reminder */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={345} size={13} fill={MUTED} script>
          {t("s left · d middle · p right · f strip below, staircase in p", "s left · d middle · p right · f strip neeche, staircase p mein")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={360} w={680} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("table's outline = subshell capacity made visible", "table ka outline = subshell capacity jo dikhti hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
