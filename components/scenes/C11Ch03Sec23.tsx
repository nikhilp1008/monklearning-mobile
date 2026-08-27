/**
 * C11 Chemistry Ch03 · Section 23 — "The d- and f-screening anomaly" (subtopic 2 closer)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.69, 24.92, 38.74, 59.14, 72.11, 85.08, 102.49]):
 *  0 title + underline
 *  1 B, Al, Ga circles (real relative sizes) — Ga visibly smaller than Al
 *  2 annotation: ten 3d e⁻ sit between Al and Ga, poor shielding
 *  3 red-margin + ring on Ga: extra nuclear charge incompletely cancelled
 *  4 same d-screening ⇒ IE falls irregularly, not smoothly
 *  5 observed order B>Tl>Ga>Al>In; In, Tl circles complete the column
 *  6 In ≈ Tl bracket — poor f-screening (lanthanoid contraction)
 *  7 closing amber stamp: not every trend is smooth
 *
 * Layout plan:
 *  b1 | B,Al,Ga circles (r20/35/32) | Draw  | x130..522 y150..220
 *  b2 | annotation (11,amber_dark)  | T mid | x405  y141..152 (bl 145)
 *  b3 | red margin bar + ring on Ga | Draw  | x70 y265..297 (bl 287)
 *  b4 | IE line (13, ink)           | T mid | x?..? y310..321 (bl 320)
 *  b5 | order line + In,Tl circles  | T mid | x?..? y334..345 (bl 344)
 *  b6 | ≈ bracket + caption         | Draw  | x660..830 y130
 *  b7 | closing stamp (amber)       | Chip  | x250..830 y400..438
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
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const ELEMENTS = [
  { sym: "B", pm: 85, x: 150, r: 20 },
  { sym: "Al", pm: 143, x: 320, r: 35 },
  { sym: "Ga", pm: 135, x: 490, r: 32 },
  { sym: "In", pm: 167, x: 660, r: 40 },
  { sym: "Tl", pm: 170, x: 830, r: 41 },
];

export default function C11Ch03Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("the d- and f-screening anomaly", "d- aur f-screening anomaly")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — B, Al, Ga: Ga is visibly smaller than Al */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={320} y={100} size={14} weight={700} fill={INK}>
          {t("going down group 13, expect each element BIGGER...", "group 13 mein neeche, har element BIGGER expect karo...")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={320} y={124} size={15} weight={800} fill={RED}>
          {t("...but Ga is SMALLER than Al!", "...par Ga, Al se SMALLER hai!")}
        </T>
      </Fade>
      {ELEMENTS.slice(0, 3).map((e, i) => (
        <Fade key={e.sym} on={beat >= 1} delay={dl(1, 1.5 + i * 0.3)}>
          <Circle cx={e.x} cy={220 - e.r} r={e.r} fill={AMBER} fillOpacity={0.3} stroke={AMBER_DARK} strokeWidth={2} />
          <T x={e.x} y={235} size={12} fill={INK} weight={700}>{e.sym}</T>
          <T x={e.x} y={250} size={10} fill={MUTED}>{e.pm}</T>
        </Fade>
      ))}

      {/* beat 2 — the culprit: ten poorly-shielding 3d electrons */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={405} y={145} size={11} fill={AMBER_DARK} weight={700}>
          {t("ten 3d e⁻ here (poor shield)", "yahan das 3d e⁻ (poor shield)")}
        </T>
      </Fade>

      {/* beat 3 — red-margin + ring on Ga */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 265 L 70 297" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={94} y={287} size={15} weight={700} fill={INK} anchor="start">
          {t("extra nuclear charge incompletely cancelled ⇒ Ga contracted below Al", "extra nuclear charge poora cancel nahi hota ⇒ Ga, Al se chhota")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={ringD(490, 188, 46, 44)} stroke={RED} sw={2.6} dur={0.7} />

      {/* beat 4 — same d-screening shows up in IE */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={320} size={13} fill={INK}>
          {t("same d-screening ⇒ IE falls IRREGULARLY, not smoothly", "same d-screening ⇒ IE IRREGULARLY girti, smoothly nahi")}
        </T>
      </Fade>

      {/* beat 5 — observed order + In, Tl complete the column */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={344} size={13} weight={700} fill={AMBER_DARK}>
          {t("observed order: B > Tl > Ga > Al > In", "observed order: B > Tl > Ga > Al > In")}
        </T>
      </Fade>
      {ELEMENTS.slice(3).map((e, i) => (
        <Fade key={e.sym} on={beat >= 5} delay={dl(5, 0.8 + i * 0.3)}>
          <Circle cx={e.x} cy={220 - e.r} r={e.r} fill={AMBER} fillOpacity={0.3} stroke={AMBER_DARK} strokeWidth={2} />
          <T x={e.x} y={235} size={12} fill={INK} weight={700}>{e.sym}</T>
          <T x={e.x} y={250} size={10} fill={MUTED}>{e.pm}</T>
        </Fade>
      ))}

      {/* beat 6 — In ≈ Tl: poor f-screening */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 660 130 L 660 122 M 660 126 L 830 126 M 830 122 L 830 130" stroke={GREEN} sw={1.6} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={745} y={116} size={15} weight={800} fill={GREEN}>≈</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={378} size={12} fill={GREEN} script>
          {t("In ≈ Tl — poor f-screening (lanthanoid contraction)", "In ≈ Tl — poor f-screening (lanthanoid contraction)")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={250} y={400} w={580} h={38} fill={AMBER} textFill={INK} size={15} script={false}>
          {t("not every trend is smooth — watch for d/f-screening kinks", "har trend smooth nahi — d/f-screening kinks dekho")}
        </Chip>
      </Fade>
    </Scene>
  );
}
