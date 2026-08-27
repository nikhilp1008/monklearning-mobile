/**
 * C11 Chemistry Ch03 · Section 5 — "Reading the table: period, group, atomic number"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 6.31, 21.93, 37.97, 52.48, 58.71, 73.22, 89.94]):
 *  0 title + underline
 *  1 PERIOD card: row-dots icon, "horizontal row, same n, 7 periods"
 *  2 GROUP card: column-dots icon, "vertical column, 18 groups, similar chem"
 *  3 Z card: nucleus+electron icon, "= proton count, defines identity"
 *  4 new heading: how many elements fit each period
 *  5 capacity ladder: 7 chips P1=2 … P7=32
 *  6 subshells beneath each chip (1s; 2s2p; 3s3p; 4s3d4p; …)
 *  7 red-margin closing: not coincidence — subshell capacities decide it
 *
 * Layout plan:
 *  b1 | PERIOD card                | Draw   | x70..360   y100..210
 *  b2 | GROUP card                 | Draw   | x390..680  y100..210
 *  b3 | Z card                     | Draw   | x710..1000 y100..210
 *  b4 | heading (19,w800,ink)      | T mid  | x?..?      y225..243 (bl 240)
 *  b4 | underline (amber)          | Draw   | y248 x360..720
 *  b5 | 7 capacity chips           | Chip   | x90..990   y262..304
 *  b6 | 7 subshell labels          | T mid  | under each chip (bl 322)
 *  b7 | red margin bar             | Draw   | x70  y350..382
 *  b7 | closing line (16,w700,ink) | T st   | x94..478   y357..375 (bl 370)
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const CAPACITY: { p: string; n: string; sub: string }[] = [
  { p: "P1", n: "2", sub: "1s" },
  { p: "P2", n: "8", sub: "2s 2p" },
  { p: "P3", n: "8", sub: "3s 3p" },
  { p: "P4", n: "18", sub: "4s 3d 4p" },
  { p: "P5", n: "18", sub: "5s 4d 5p" },
  { p: "P6", n: "32", sub: "6s 4f 5d 6p" },
  { p: "P7", n: "32", sub: "7s 5f 6d 7p" },
];
const CAP_X0 = 90;
const CAP_W = 120;
const CAP_GAP = 10;
const CAP_Y = 262;
const CAP_H = 42;

export default function C11Ch03Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("reading the table: period, group, atomic number", "table padhna: period, group, atomic number")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — PERIOD: horizontal row, same n, 7 periods */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Rect x={70} y={100} width={290} height={110} rx={6} fill="none" stroke={MUTED} strokeWidth={1.6} />
        {[95, 113, 131, 149].map((x) => (
          <Circle key={x} cx={x} cy={155} r={6} fill={AMBER} />
        ))}
        <T x={180} y={140} size={17} weight={800} fill={INK} anchor="start">
          {t("PERIOD", "PERIOD")}
        </T>
        <T x={180} y={164} size={12} fill={MUTED} script anchor="start">
          {t("horizontal row, same n", "horizontal row, same n")}
        </T>
        <T x={180} y={184} size={12} fill={MUTED} script anchor="start">
          {t("7 periods total", "7 periods total")}
        </T>
      </Fade>

      {/* beat 2 — GROUP: vertical column, 18 groups, similar chemistry */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={390} y={100} width={290} height={110} rx={6} fill="none" stroke={MUTED} strokeWidth={1.6} />
        {[120, 135, 150, 165].map((y) => (
          <Circle key={y} cx={430} cy={y} r={6} fill={GREEN} />
        ))}
        <T x={500} y={140} size={17} weight={800} fill={INK} anchor="start">
          {t("GROUP", "GROUP")}
        </T>
        <T x={500} y={164} size={12} fill={MUTED} script anchor="start">
          {t("vertical column", "vertical column")}
        </T>
        <T x={500} y={184} size={12} fill={MUTED} script anchor="start">
          {t("18 groups · similar chem", "18 groups · similar chem")}
        </T>
      </Fade>

      {/* beat 3 — Z: proton count = electrons, defines identity */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Rect x={710} y={100} width={290} height={110} rx={6} fill="none" stroke={MUTED} strokeWidth={1.6} />
        <Circle cx={750} cy={155} r={11} fill={INK} />
        <Circle cx={774} cy={138} r={4} fill={AMBER_DARK} />
        <T x={800} y={140} size={14} weight={800} fill={INK} anchor="start">
          {t("atomic number Z", "atomic number Z")}
        </T>
        <T x={800} y={162} size={12} fill={MUTED} script anchor="start">
          {t("= proton count", "= proton count")}
        </T>
        <T x={800} y={182} size={12} fill={MUTED} script anchor="start">
          {t("defines identity", "identity define karta")}
        </T>
      </Fade>

      {/* beat 4 — new heading */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={240} size={19} weight={800} fill={INK}>
          {t("how many elements fit each period", "har period mein kitne elements")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M 360 248 C 440 245, 640 245, 720 248" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 5 — the capacity ladder: 2, 8, 8, 18, 18, 32, 32 */}
      {CAPACITY.map((c, i) => {
        const x = CAP_X0 + i * (CAP_W + CAP_GAP);
        return (
          <Fade key={c.p} on={beat >= 5} delay={dl(5, 0.15 * i)}>
            <Chip x={x} y={CAP_Y} w={CAP_W} h={CAP_H} fill="#FFFEFB" stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
              {`${c.p} = ${c.n}`}
            </Chip>
          </Fade>
        );
      })}

      {/* beat 6 — the subshells behind each number */}
      {CAPACITY.map((c, i) => {
        const x = CAP_X0 + i * (CAP_W + CAP_GAP) + CAP_W / 2;
        return (
          <Fade key={c.p} on={beat >= 6} delay={dl(6, 0.15 * i)}>
            <T x={x} y={322} size={11} fill={MUTED}>
              {c.sub}
            </T>
          </Fade>
        );
      })}

      {/* beat 7 — closing: not coincidence */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 70 350 L 70 382" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={94} y={370} size={16} weight={700} fill={INK} anchor="start">
          {t("not coincidence — subshell capacities decide it", "coincidence nahi — subshell capacities decide karti")}
        </T>
      </Fade>
    </Scene>
  );
}
