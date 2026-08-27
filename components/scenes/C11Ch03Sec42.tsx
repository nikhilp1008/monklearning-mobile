/**
 * C11 Chemistry Ch03 · Section 42 — "Position is a picture of electronic configuration"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 4 (final subtopic).
 *
 * Beats (en [0, 18.43, 27.14, 41.98, 57.09, 69.29, 82.86, 99.16]):
 *  0 title + underline
 *  1 everything so far rests on ONE quiet fact
 *  2 red-margin: position = a PICTURE of electronic configuration
 *  3 the housing colony: 4 floors (periods), growing wider (s / s,p / s,p / s,p,d)
 *  4 Aufbau: electrons fill lowest-energy rooms first
 *  5 room type of newest e⁻ (s/p/d/f) = the BLOCK
 *  6 red-margin: two ideas — period=highest n; block=subshell of last e⁻
 *  7 closing green stamp: derive the address, never memorise it
 *
 * Layout plan:
 *  b2 | red margin bar + line       | Draw | x70 y112..144 (bl 134)
 *  b3 | 4 floors, growing width     | Draw | x380..700 y155..304
 *  b4 | Aufbau line                 | T mid| x?..?     y311..325 (bl 325)
 *  b5 | room→block line             | T mid| x?..?     y334..348 (bl 348)
 *  b6 | red margin box, 2 lines     | Draw | x140..940 y365..417 (bl385/407)
 *  b7 | closing stamp (green)       | Chip | x250..830 y430..464
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

const FLOORS = [
  { period: "P4 (n=4)", rooms: "s | p | d", x: 380, w: 320, y: 155 },
  { period: "P3 (n=3)", rooms: "s | p", x: 440, w: 200, y: 194 },
  { period: "P2 (n=2)", rooms: "s | p", x: 440, w: 200, y: 233 },
  { period: "P1 (n=1)", rooms: "s", x: 500, w: 80, y: 272 },
];

export default function C11Ch03Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("position is a picture of electronic configuration", "position electronic configuration ki tasveer hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — one quiet fact */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("everything so far rests on ONE quiet fact", "ab tak sab kuch ek quiet fact pe tika hai")}
        </T>
      </Fade>

      {/* beat 2 — red-margin: position = picture of configuration */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 70 112 L 70 144" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={94} y={134} size={15} weight={700} fill={INK} anchor="start">
          {t("position = a PICTURE of electronic configuration", "position = electronic configuration ki PICTURE")}
        </T>
      </Fade>

      {/* beat 3 — the housing colony, growing wider */}
      {FLOORS.map((f, i) => (
        <Fade key={f.period} on={beat >= 3} delay={dl(3, 0.2 * i)}>
          <Rect x={f.x} y={f.y} width={f.w} height={32} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
          <T x={f.x + f.w / 2} y={f.y + 21} size={14} fill={INK} weight={700}>{f.rooms}</T>
          <T x={f.x - 15} y={f.y + 21} size={12} fill={MUTED} anchor="end">{f.period}</T>
        </Fade>
      ))}

      {/* beat 4 — Aufbau */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={325} size={13} fill={INK}>
          {t("Aufbau: electrons fill lowest-energy rooms first", "Aufbau: electrons pehle lowest-energy rooms bharte")}
        </T>
      </Fade>

      {/* beat 5 — room type decides block */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={348} size={13} weight={700} fill={AMBER_DARK}>
          {t("room type (s/p/d/f) of newest e⁻ = the BLOCK", "newest e⁻ ka room type (s/p/d/f) = BLOCK")}
        </T>
      </Fade>

      {/* beat 6 — red-margin: the two organising ideas */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 140 365 h 800 v 52 h -800 z" stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={385} size={14} weight={700} fill={INK}>
          {t("period number = highest n in the configuration", "period number = configuration mein highest n")}
        </T>
        <T x={540} y={407} size={14} weight={700} fill={INK}>
          {t("block = subshell of the LAST (differentiating) electron", "block = LAST (differentiating) electron ka subshell")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={250} y={430} w={580} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("derive the address, never memorise it", "address derive karo, memorise mat karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
