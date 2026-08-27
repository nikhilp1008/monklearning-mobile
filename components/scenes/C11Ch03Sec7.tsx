/**
 * C11 Chemistry Ch03 · Section 7 — "Naming elements beyond Z = 100"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.87, 21.5, 37.89, 52.57, 62.46, 81.66, 97.79]):
 *  0 title + underline
 *  1 number line: 100 tick, shaded arrow past it, "Z > 100 ⇒ IUPAC name"
 *  2 roots table: 0=nil…9=enn, two rows of five chips
 *  3 procedure: 4 numbered steps (write digits → swap roots → join → -ium)
 *  4 symbol rule: first letter of each root, capitalise only the first
 *  5 worked Z=124: digit boxes 1·2·4 → root boxes un·bi·quad → green stamp
 *    "unbiquadium (Ubq)"
 *  6 red-margin sanity check: 3-digit Z ⇒ 3-letter symbol, left to right
 *  7 closing line: shows up in JEE Main, often with block prediction
 *
 * Layout plan:
 *  b1 | number line + tick "100"   | Draw   | x150..540  y112..140
 *  b1 | "Z > 100 ⇒ ..." (15,w700)  | T st   | x560..800  y110..128 (bl 123)
 *  b2 | 10 root chips (2×5)        | Chip   | x291..789  y162..248
 *  b3 | 4 procedure chips          | Chip   | x119..961  y266..300
 *  b4 | rule (script 15)           | T mid  | x?..?      y317..344 (bl 336)
 *  b5 | 3 digit boxes (1,2,4)      | Draw   | x445..635  y356..398
 *  b5 | 3 root boxes (un,bi,quad)  | Draw   | x389..691  y414..452
 *  b5 | arrow (green)              | Draw   | x540 y452..466
 *  b5 | result stamp (green)       | Chip   | x330..750  y468..514
 *  b6 | red margin bar + line      | Draw   | x70  y524..556 (bl 546)
 *  b7 | closing (script 14,green)  | T mid  | x?..?      y562..587 (bl 580)
 */

import React from "react";
import { Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const ROOTS: { d: string; r: string }[] = [
  { d: "0", r: "nil" },
  { d: "1", r: "un" },
  { d: "2", r: "bi" },
  { d: "3", r: "tri" },
  { d: "4", r: "quad" },
  { d: "5", r: "pent" },
  { d: "6", r: "hex" },
  { d: "7", r: "sept" },
  { d: "8", r: "oct" },
  { d: "9", r: "enn" },
];
const ROOT_W = 90;
const ROOT_GAP = 12;
const ROOT_X0 = 291;

const STEPS = ["① write digits", "② swap for roots", "③ join in order", "④ add -ium"];
const STEP_W = 200;
const STEP_GAP = 14;
const STEP_X0 = 119;

export default function C11Ch03Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("naming elements with Z > 100", "Z > 100 wale elements ka naam")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — past Z=100, IUPAC gives a temporary systematic name */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 118, 540, 118)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Line x1={350} y1={112} x2={350} y2={124} stroke={INK} strokeWidth={2} />
        <T x={350} y={140} size={12} fill={MUTED}>100</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={560} y={123} size={15} weight={700} fill={INK} anchor="start">
          {t("Z > 100 ⇒ IUPAC systematic name", "Z > 100 ⇒ IUPAC systematic naam")}
        </T>
      </Fade>

      {/* beat 2 — the ten numerical roots */}
      {ROOTS.map((r, i) => {
        const row = i < 5 ? 0 : 1;
        const col = i % 5;
        const x = ROOT_X0 + col * (ROOT_W + ROOT_GAP);
        const y = 162 + row * 48;
        return (
          <Fade key={r.d} on={beat >= 2} delay={dl(2, 0.1 * i)}>
            <Chip x={x} y={y} w={ROOT_W} h={38} fill="#FFFEFB" stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
              {`${r.d} = ${r.r}`}
            </Chip>
          </Fade>
        );
      })}

      {/* beat 3 — the mechanical procedure */}
      {STEPS.map((s, i) => {
        const x = STEP_X0 + i * (STEP_W + STEP_GAP);
        return (
          <Fade key={s} on={beat >= 3} delay={dl(3, 0.2 * i)}>
            <Chip x={x} y={266} w={STEP_W} h={34} fill="#FFFEFB" stroke={INK} textFill={INK} size={13} script={false}>
              {s}
            </Chip>
          </Fade>
        );
      })}

      {/* beat 4 — the symbol rule */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={336} size={15} fill={INK} script>
          {t("symbol = first letter of each root; capitalise only the first", "symbol = har root ka pehla letter; sirf pehla capital")}
        </T>
      </Fade>

      {/* beat 5 — worked example: Z = 124 */}
      {["1", "2", "4"].map((d, i) => (
        <Draw key={d} on={beat >= 5} delay={dl(5, 0.2 + i * 0.35)} d={`M ${445 + i * 70} 356 h 50 v 42 h -50 z`} stroke={INK} sw={2} dur={0.4} />
      ))}
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={470} y={384.48} size={22} fill={INK} weight={800}>1</T>
        <T x={540} y={384.48} size={22} fill={INK} weight={800}>2</T>
        <T x={610} y={384.48} size={22} fill={INK} weight={800}>4</T>
      </Fade>
      {[
        { r: "un", x: 389 },
        { r: "bi", x: 495 },
        { r: "quad", x: 601 },
      ].map((c, i) => (
        <Draw key={c.r} on={beat >= 5} delay={dl(5, 1.9 + i * 0.35)} d={`M ${c.x} 414 h 90 v 38 h -90 z`} stroke={AMBER_DARK} sw={2} dur={0.4} />
      ))}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={434} y={438.1} size={15} weight={700} fill={INK}>un</T>
        <T x={540} y={438.1} size={15} weight={700} fill={INK}>bi</T>
        <T x={646} y={438.1} size={15} weight={700} fill={INK}>quad</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.5)} d={arrowD(540, 452, 540, 466)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <Chip x={330} y={468} w={420} h={46} fill={GREEN} textFill="#fff" size={18} script>
          {t("unbiquadium (Ubq)", "unbiquadium (Ubq)")}
        </Chip>
      </Fade>

      {/* beat 6 — sanity check */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 70 524 L 70 556" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={94} y={546} size={15} weight={700} fill={INK} anchor="start">
          {t("3-digit Z ⇒ 3-letter symbol — always left to right", "3-digit Z ⇒ 3-letter symbol — hamesha left se right")}
        </T>
      </Fade>

      {/* beat 7 — closing: JEE Main */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={580} size={14} fill={GREEN} script>
          {t("shows up in JEE Main ⇒ often with block prediction", "JEE Main mein aata hai ⇒ block prediction ke saath")}
        </T>
      </Fade>
    </Scene>
  );
}
