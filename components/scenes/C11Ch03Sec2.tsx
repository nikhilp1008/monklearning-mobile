/**
 * C11 Chemistry Ch03 · Section 2 — "Groups, periods, and the three big leaps"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 10.24, 22.44, 43.09, 55.72, 66.82, 74.84, 91.31, 106.5]):
 *  0 title + underline
 *  1 mini 4×3 grid: column 2 ringed AMBER "GROUP", row 2 ringed GREEN "PERIOD"
 *  2 railway-platform metaphor: two platforms, arrows on each pointing one
 *    consistent direction (same family)
 *  3 red-margin promise: "same platform ⇒ same chemical family"
 *  4 period = row order: green arrow down the grid + "next row ⇒ next period"
 *  5 new heading: "how the table was built: three leaps" + underline
 *  6 LEAP 1 card: small clusters (triads · octaves · helix · curve)
 *  7 LEAP 2 card + arrow: Mendeleev — atomic weight order + bold gaps
 *  8 LEAP 3 card + arrow (green border, the fix that stuck): Moseley —
 *    atomic number is the true order
 *
 * Layout plan:
 *  b0 | title (script 26, red)     | T mid  | x247..833  y30..77 (bl 64)
 *  b1 | grid lines (4×3)           | Draw   | x351..711  y120..240
 *  b1 | col2 highlight (amber)     | Draw   | x441..531  y116..244
 *  b1 | row2 highlight (green)     | Draw   | x347..715  y156..204
 *  b1 | GROUP label                | T mid  | x486        y87..102 (bl 98)
 *  b1 | PERIOD label                | T st  | x725..767  y173..189 (bl 184.76)
 *  b2 | platform1 line + 3 arrows  | Draw   | x150..450  y266..294
 *  b2 | "Platform 1"               | T mid  | x300        y302..310 (bl 306)
 *  b2 | platform2 line + 3 arrows  | Draw   | x550..868  y264..294
 *  b2 | "Platform 2"               | T mid  | x700        y302..310 (bl 306)
 *  b3 | red margin bar             | Draw   | x70  y330..366
 *  b3 | promise line (18,w700,ink) | T st   | x94..433   y337..357 (bl 351)
 *  b4 | period arrow (green)       | Draw   | x820  y170..250
 *  b4 | "next row ⇒ next period"   | T st   | x835..984  y196..214 (bl 210)
 *  b5 | heading (22,w800,ink)      | T mid  | x?..?      y383..407 (bl 400)
 *  b5 | underline (amber)          | Draw   | y410 x350..730
 *  b6 | LEAP 1 card                | Draw   | x90..370   y430..530
 *  b7 | LEAP 2 card + arrow        | Draw   | x400..680  y430..530
 *  b8 | LEAP 3 card (green) + arrow| Draw   | x710..990  y430..530
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const COLX = [351, 441, 531, 621, 711];
const ROWY = [120, 160, 200, 240];

function gridD(): string {
  let d = "";
  for (const x of COLX) d += `M ${x} ${ROWY[0]} L ${x} ${ROWY[3]} `;
  for (const y of ROWY) d += `M ${COLX[0]} ${y} L ${COLX[4]} ${y} `;
  return d;
}

function LeapCard({
  on,
  delay,
  x,
  n,
  badgeFill,
  border,
  header,
  detail,
  detailFill,
}: {
  on: boolean;
  delay: number;
  x: number;
  n: string;
  badgeFill: string;
  border: string;
  header: string;
  detail: string;
  detailFill: string;
}) {
  return (
    <Fade on={on} delay={delay}>
      <Rect x={x} y={430} width={280} height={100} rx={6} fill="none" stroke={border} strokeWidth={border === GREEN ? 2.4 : 1.6} />
      <Circle cx={x + 26} cy={456} r={18} fill={badgeFill} />
      <T x={x + 26} y={461.5} size={15} fill="#fff" weight={800}>
        {n}
      </T>
      <T x={x + 55} y={460} size={15} fill={INK} weight={800} anchor="start">
        {header}
      </T>
      <T x={x + 55} y={486} size={11} fill={detailFill} anchor="start" script>
        {detail}
      </T>
    </Fade>
  );
}

export default function C11Ch03Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("groups, periods, and the three big leaps", "groups, periods, aur teen badi leaps")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 5)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the map: column = group, row = period */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={gridD()} stroke={INK} sw={2} dur={1.1} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.7)}
        d="M 441 116 h 90 v 128 h -90 z"
        stroke={AMBER}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={486} y={98} size={14} fill={AMBER_DARK} weight={800}>
          {t("GROUP", "GROUP")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.9)}
        d="M 347 156 h 368 v 48 h -368 z"
        stroke={GREEN}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={725} y={184.76} size={14} fill={GREEN} weight={800} anchor="start">
          {t("PERIOD", "PERIOD")}
        </T>
      </Fade>

      {/* beat 2 — railway-platform metaphor: same direction = same family */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 150 290 L 450 290" stroke={INK} sw={3} dur={0.5} />
      {[200, 300, 400].map((x, i) => (
        <Draw
          key={x}
          on={beat >= 2}
          delay={dl(2, 0.9 + i * 0.3)}
          d={arrowD(x, 288, x, 266)}
          stroke={AMBER_DARK}
          sw={2.2}
          dur={0.4}
        />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={300} y={306} size={13} fill={MUTED}>
          {t("Platform 1", "Platform 1")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d="M 550 290 L 850 290" stroke={INK} sw={3} dur={0.5} />
      {[600, 700, 800].map((x, i) => (
        <Draw
          key={x}
          on={beat >= 2}
          delay={dl(2, 3.3 + i * 0.3)}
          d={arrowD(x, 288, x + 18, 268)}
          stroke={AMBER_DARK}
          sw={2.2}
          dur={0.4}
        />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={700} y={306} size={13} fill={MUTED}>
          {t("Platform 2", "Platform 2")}
        </T>
      </Fade>

      {/* beat 3 — the promise (red-margin note) */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 330 L 70 366" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={94} y={351} size={18} weight={700} fill={INK} anchor="start">
          {t("same platform ⇒ same chemical family", "same platform ⇒ same chemical family")}
        </T>
      </Fade>

      {/* beat 4 — period = row order, as the station expands */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={arrowD(820, 170, 820, 250)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={835} y={210} size={13} fill={GREEN} anchor="start" script>
          {t("next row ⇒ next period", "next row ⇒ next period")}
        </T>
      </Fade>

      {/* beat 5 — new heading: three leaps */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={400} size={22} weight={800} fill={INK}>
          {t("how the table was built: three leaps", "table kaise bani: teen leaps")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 350 410 C 420 407, 660 407, 730 410" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 6 — Leap 1: small clusters */}
      <LeapCard
        on={beat >= 6}
        delay={dl(6, 0.3)}
        x={90}
        n="1"
        badgeFill={AMBER}
        border={MUTED}
        header={t("small clusters", "chhote clusters")}
        detail={t("triads · octaves · helix · curve", "triads · octaves · helix · curve")}
        detailFill={MUTED}
      />

      {/* beat 7 — Leap 2: Mendeleev's masterstroke */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={arrowD(372, 480, 398, 480)} stroke={INK} sw={2.2} dur={0.4} />
      <LeapCard
        on={beat >= 7}
        delay={dl(7, 0.5)}
        x={400}
        n="2"
        badgeFill={AMBER}
        border={MUTED}
        header={t("Mendeleev's masterstroke", "Mendeleev ka masterstroke")}
        detail={t("atomic weight order + bold GAPS", "atomic weight order + bold GAPS")}
        detailFill={MUTED}
      />

      {/* beat 8 — Leap 3: Moseley's correction (the fix that stuck) */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d={arrowD(682, 480, 708, 480)} stroke={INK} sw={2.2} dur={0.4} />
      <LeapCard
        on={beat >= 8}
        delay={dl(8, 0.5)}
        x={710}
        n="3"
        badgeFill={GREEN}
        border={GREEN}
        header={t("Moseley's correction", "Moseley ka correction")}
        detail={t("atomic NUMBER — the true order", "atomic NUMBER — asli order")}
        detailFill={GREEN}
      />
    </Scene>
  );
}
