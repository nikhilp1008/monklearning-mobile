/**
 * Ch01 · Section 2 — "Base and derived quantities: seven notes, endless songs"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at, en [0, 14.7, 32.6, 51.3, 76.1, 86.7, 108.4, 123.1]):
 *  0 title + chaos: "own standard?" chips ×3, each crossed out → CHAOS
 *  1 the smarter move: hub circle "7 base units" draws, chaos dims
 *  2 the obvious three (m·kg·s nodes) + derived formulas (speed, force)
 *  3 the full seven + arrows fan out to 7 derived labels (computed tips)
 *  4 language: root words →(drawn arrow) a whole dictionary
 *  5 सा रे ग म प ध नि staggered, hand-drawn ring, raga line lands right
 *  6 supplementary box off to the side, arrow crossed out — NOT connected
 *  7 confession, in the empty left margin: convention — not nature
 *
 * Layout plan — boxes are MEASURED render boxes (Kalam ink ≈ bl−1.3·size …
 * bl+0.5·size, Devanagari ≈ −1.3…+0.3; Anek ≈ −0.78…+0.31), longer language:
 *  b0 | title (script 30, red)          | T mid | x296..785  y30..78 (bl 62)
 *  b0 | chaos chips ×3 (h34)            | Chip  | y91..125  x60..310 / 328..578 / 596..872
 *  b0 | cross-outs over each chip       | Draw  | chip box ±4 (y88..128)
 *  b0 | CHAOS (script 26, red)          | T mid | x907..986  y94..135 (bl 122)
 *  b1 | hub circle r72 c(430,336)       | Draw  | x358..502  y264..408
 *  b1 | "7" (30) / "base units" (15)    | T mid | bl 330 / bl 360, inside hub
 *  b2/3 | nodes r27 on ring R142        | Draw  | angles −90 −39 12 63 114 165 216
 *       | names script 14: above bl ny−41 (m kg cd) / below bl ny+48 (s A K mol)
 *       |   m(430,194) kg(540,247) s(569,366) A(494,463) K(372,466) mol(293,373) cd(315,253)
 *       |   name boxes: metre 137..160 · kilogram 189..212 · candela 195..218
 *       |   second 395..418 · ampere 491..514 · kelvin 494..517 · mole 402..425
 *  b2 | "speed = L / T" chip            | Chip  | x840..1020 y200..242
 *  b2 | "force = M·L/T²" chip           | Chip  | x840..1020 y256..298
 *  b2 | "derived — built from base" 14  | T mid | x854..1006 y308..331 (bl 326)
 *  b3 | derived labels (script 17) + computed fan arrows from hub r80:
 *       speed(505,156) charge(327,147) force(639,286) pressure(222,283)
 *       density(222,323) power(267,476) energy(595,474)
 *  b4 | "a few root words" (script 17)  | T st  | x60..190  y531..558 (bl 554)
 *  b4 | arrow                           | Draw  | (200,545)→(272,545)
 *  b4 | "a whole dictionary"            | T st  | x277..414 y531..558 (bl 554)
 *  b5 | notes ×7 (script 24)            | T mid | x543..793 y523..562 (bl 554, cx 558+37i)
 *  b5 | ring around the notes           | Draw  | c(668,542) rx140 ry31 (y502..584)
 *  b5 | raga line (script 15)           | T mid | x770..1041 y567..595 (bl 588)
 *  b6 | "radian · steradian" chip       | Chip  | x830..1040 y350..390 (dashed)
 *  b6 | arrow (604,366)→(825,368) + cross(680,358,40,28) + "not connected!"
 *       (script 13) x663..777 y320..340 (bl 336)
 *  b6 | "supplementary — NOT base" 14   | T mid | x845..1018 y401..423 (bl 419)
 *  b7 | margin bar (green)              | Draw  | x51  y210..280
 *  b7 | quote ×2 lines (script 19)      | T st  | x62..201 y210..244 (bl 236) / y258..292 (bl 284)
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

const HX = 430;
const HY = 336;
const HUB_R = 72;
const RING = 142;
const NODE_R = 27;

/** [symbol, name, angle°] — clockwise from top, ~51.4° apart. */
const NODES: [string, string, number][] = [
  ["m", "metre", -90],
  ["kg", "kilogram", -39],
  ["s", "second", 12],
  ["A", "ampere", 63],
  ["K", "kelvin", 114],
  ["mol", "mole", 165],
  ["cd", "candela", 216],
];

/** [name, label-center x, label-center y] — each sits on a mid-angle between
 *  two nodes, so its computed arrow threads the gap without crossing anything. */
const DERIV: [string, number, number][] = [
  ["speed", 505, 156],
  ["charge", 327, 147],
  ["force", 639, 286],
  ["pressure", 222, 283],
  ["density", 222, 323],
  ["power", 267, 476],
  ["energy", 595, 474],
];

const DERIV_SIZE = 17;

/** [chip x, chip width] for the three chaos chips (y91, h34). */
const CHAOS_CHIPS: [number, number][] = [
  [60, 250],
  [328, 250],
  [596, 276],
];

/** Arrow from the hub edge (r80) toward the label center, tip stopping 5px
 *  outside the label's estimated text box (slab intersection along the ray). */
function fanArrowD(cx: number, cy: number, name: string): string {
  const w = 0.52 * DERIV_SIZE * name.length;
  const hw = w / 2 + 5;
  const hh = DERIV_SIZE / 2 + 5;
  const dx = cx - HX;
  const dy = cy - HY;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const tBack = Math.min(hw / Math.max(Math.abs(ux), 1e-6), hh / Math.max(Math.abs(uy), 1e-6));
  const tip = len - tBack;
  return arrowD(HX + 80 * ux, HY + 80 * uy, HX + tip * ux, HY + tip * uy);
}

export default function Ch01Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title, then the chaos of a-standard-for-everything */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={62} size={30} fill={RED} script>
          {t("base quantities vs derived quantities", "base quantities vs derived quantities")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.2)} dim={beat >= 1}>
        <Chip x={60} y={91} w={250} h={34} fill={PAPER} stroke={INK} textFill={INK} size={15} script={false}>
          {t("speed: own standard?", "speed ka apna standard?")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.4)} dim={beat >= 1}>
        <Chip x={328} y={91} w={250} h={34} fill={PAPER} stroke={INK} textFill={INK} size={15} script={false}>
          {t("force: own standard?", "force ka apna standard?")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.6)} dim={beat >= 1}>
        <Chip x={596} y={91} w={276} h={34} fill={PAPER} stroke={INK} textFill={INK} size={15} script={false}>
          {t("pressure: own standard?", "pressure ka apna standard?")}
        </Chip>
      </Fade>
      {CHAOS_CHIPS.map(([x, w], i) => (
        <Fade key={x} on={beat >= 0} delay={dl(0, 8.3 + i * 0.7)} dim={beat >= 1}>
          <Draw
            on={beat >= 0}
            delay={dl(0, 8.3 + i * 0.7)}
            d={crossD(x, 91, w, 34)}
            stroke={RED}
            sw={2.6}
            dur={0.4}
          />
        </Fade>
      ))}
      <Fade on={beat >= 0} delay={dl(0, 10.4)} dim={beat >= 1}>
        <T x={950} y={122} size={26} fill={RED} script>
          CHAOS
        </T>
      </Fade>

      {/* beat 1 — the founding members: the hub draws */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Circle cx={HX} cy={HY} r={HUB_R} fill={CREAM} stroke="none" />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d={`M ${HX - HUB_R} ${HY} A ${HUB_R} ${HUB_R} 0 1 1 ${HX + HUB_R} ${HY} A ${HUB_R} ${HUB_R} 0 1 1 ${
          HX - HUB_R
        } ${HY}`}
        stroke={AMBER}
        sw={3}
        dur={1.1}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={HX} y={330} size={30} fill={INK} weight={800}>
          7
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={HX} y={360} size={15} fill={AMBER_DARK} script>
          base units
        </T>
      </Fade>

      {/* beat 2 — the obvious three + what "derived" means */}
      {NODES.slice(0, 3).map(([sym, name, ang], i) => (
        <HubNode
          key={sym}
          sym={sym}
          name={name}
          ang={ang}
          on={beat >= 2}
          delay={dl(2, 0.5 + i * 0.9)}
        />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <Chip x={840} y={200} w={180} h={42} fill="#fff" stroke={GREEN} textFill={GREEN} size={18} script={false}>
          speed = L / T
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8.8)}>
        <Chip x={840} y={256} w={180} h={42} fill="#fff" stroke={GREEN} textFill={GREEN} size={18} script={false}>
          force = M·L/T²
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 11.5)}>
        <T x={930} y={326} size={14} fill={MUTED} script>
          {t("derived — built from base", "derived — base se bani")}
        </T>
      </Fade>

      {/* beat 3 — the full seven, then arrows fan out to the derived family */}
      {NODES.slice(3).map(([sym, name, ang], i) => (
        <HubNode
          key={sym}
          sym={sym}
          name={name}
          ang={ang}
          on={beat >= 3}
          delay={dl(3, 1 + i * 0.9)}
        />
      ))}
      {DERIV.map(([name, cx, cy], i) => (
        <G key={name}>
          <Fade on={beat >= 3} delay={dl(3, 8.8 + i * 1.05)}>
            <T x={cx} y={cy + 0.26 * DERIV_SIZE} size={DERIV_SIZE} fill={AMBER_DARK} script>
              {name}
            </T>
          </Fade>
          <Draw
            on={beat >= 3}
            delay={dl(3, 9.25 + i * 1.05)}
            d={fanArrowD(cx, cy, name)}
            stroke={AMBER}
            sw={2.4}
            dur={0.4}
          />
        </G>
      ))}

      {/* beat 4 — like a language: root words build the dictionary */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={554} size={17} fill={INK} script anchor="start">
          {t("a few root words", "kuch root words")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.2)}
        d={arrowD(200, 545, 272, 545)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={277} y={554} size={17} fill={INK} script anchor="start">
          {t("a whole dictionary", "poori dictionary")}
        </T>
      </Fade>

      {/* beat 5 — the seven सुर, sung one by one, then ringed */}
      {["सा", "रे", "ग", "म", "प", "ध", "नि"].map((note, i) => (
        <Fade key={note} on={beat >= 5} delay={dl(5, 0.6 + i * 0.55)}>
          <T x={558 + i * 37} y={554} size={24} fill={INK} script>
            {note}
          </T>
        </Fade>
      ))}
      <Draw
        on={beat >= 5}
        delay={dl(5, 5.2)}
        d={ringD(668, 542, 140, 31)}
        stroke={AMBER}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 6.8)}>
        <T x={905} y={588} size={15} fill={AMBER_DARK} script>
          {t("7 notes → every raga, every song", "saat sur → har raag, har song")}
        </T>
      </Fade>

      {/* beat 6 — supplementary units: alongside, but NOT connected */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Chip x={830} y={350} w={210} h={40} fill="#fff" stroke={INK} textFill={INK} size={17} script={false} dashed>
          radian · steradian
        </Chip>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.8)}
        d={arrowD(604, 366, 825, 368)}
        stroke={MUTED}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.8)}
        d={crossD(680, 358, 40, 28)}
        stroke={RED}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.3)}>
        <T x={720} y={336} size={13} fill={RED} script>
          {t("not connected!", "connect nahi!")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={935} y={419} size={14} fill={RED} script>
          {t("supplementary — NOT base", "supplementary — NOT base")}
        </T>
      </Fade>

      {/* beat 7 — the honest confession, in the quiet left margin */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.4)}
        d="M 51 214 L 51 286"
        stroke={GREEN}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={62} y={236} size={19} fill={GREEN} script anchor="start">
          {t("“convention,", "“convention,")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={62} y={284} size={19} fill={GREEN} script anchor="start">
          {t("not nature”", "nature nahi”")}
        </T>
      </Fade>
    </Scene>
  );
}

function HubNode({
  sym,
  name,
  ang,
  on,
  delay,
}: {
  sym: string;
  name: string;
  ang: number;
  on: boolean;
  delay: number;
}) {
  const a = (ang * Math.PI) / 180;
  const nx = HX + RING * Math.cos(a);
  const ny = HY + RING * Math.sin(a);
  const above = ny < HY - 80;
  return (
    <G>
      <Fade on={on} delay={delay}>
        <Line
          x1={HX + (HUB_R + 4) * Math.cos(a)}
          y1={HY + (HUB_R + 4) * Math.sin(a)}
          x2={HX + (RING - NODE_R - 2) * Math.cos(a)}
          y2={HY + (RING - NODE_R - 2) * Math.sin(a)}
          stroke={MUTED}
          strokeWidth={1.6}
        />
        <Circle cx={nx} cy={ny} r={NODE_R} fill="#fff" stroke={INK} strokeWidth={2.4} />
        <T x={nx} y={ny + 7} size={19} fill={INK} weight={800}>
          {sym}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 0.5}>
        <T x={nx} y={above ? ny - 41 : ny + 48} size={14} fill={MUTED} script>
          {name}
        </T>
      </Fade>
    </G>
  );
}
