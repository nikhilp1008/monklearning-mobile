/**
 * Ch01 · Section 3 — "From FPS to SI: why the world had to standardise"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.9, 30.3, 47.6, 72.0, 92.4, 114.7, 123.6]):
 *  0 title + three system cards (FPS · CGS · MKS) drawn as narration names them
 *  1 red zigzag walls between the cards — three rooms that can't talk
 *  2 the same thing, three numbers: chips under each card, ≠ ≠, verdict line
 *  3 1971 → arrow → SI badge (7 base · 2 supp, upgraded MKS)
 *  4 four qualities checklist, a green tick drawn onto each
 *  5 the old kilogram: platinum lump in a dashed vault + red flaws
 *  6 2019: cross the lump out
 *  7 the green replacement: constants of nature → units rebuilt anywhere
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)      | T mid | x294..786  y30..80  (bl 66)
 *  b0 | cards ×3 (h80)              | Draw  | y100..180  x60..300 / 330..570 / 600..840
 *       name sans 24 bl 145 · units script 13 bl 168 (inside, ≥6px padding)
 *  b1 | walls (red zigzag)          | Draw  | x312..318 & x582..588  y104..182
 *  b2 | chips ×3 (h36)              | Chip  | y204..240  x120..240 / 390..510 / 660..780
 *  b2 | "≠" ×2 (22, sans)           | T mid | (315,228) (585,228)  y211..235
 *  b2 | verdict (script 19, red)    | T st  | x60..436   y251..286 (bl 276)
 *  b3 | "1971" (script 16)          | T mid | x853..888  y101..130 (bl 122)
 *  b3 | arrow                       | Draw  | (846,140)→(902,140)
 *  b3 | SI badge r48 c(958,140)     | Draw  | x910..1006 y92..188 · "SI" 28 bl 150
 *  b3 | "7 base · 2 supp" (14)      | T mid | x914..1002 y200..225 (bl 218)
 *  b3 | "upgraded MKS" (13)         | T mid | x912..1005 y228..248 (bl 241)
 *  b4 | quality chips ×4 (h38)      | Chip  | y306..344  x60..260/280..480/500..700/720..920
 *       + green tick drawn at x+16..x+34 inside each
 *  b5 | "the old kilogram" (15)     | T mid | x98..222   y363..390 (bl 382)
 *  b5 | vault (rounded) + lump      | Draw  | vault x80..240 y400..500 · lump x135..185 y437..485
 *  b5 | flaws ×3 (script 15, red)   | T st  | x270..~420 bl 430 / 462 / 494
 *  b6 | cross over the lump         | Draw  | x131..189  y432..488
 *  b6 | "2019: thrown away!" (16)   | T mid | x81..239   y511..540 (bl 532)
 *  b7 | constants chip (h40)        | Chip  | x420..700  y430..470
 *  b7 | arrow                       | Draw  | (710,450)→(760,450)
 *  b7 | rebuilt chip (h40)          | Chip  | x765..975  y430..470
 *  b7 | closing line (script 16)    | T st  | x430..694  y487..516 (bl 508)
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
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

/** [x, name, units] for the three historical system cards. */
const CARDS: [number, string, string][] = [
  [60, "FPS", "foot · pound · second"],
  [330, "CGS", "centimetre · gram · second"],
  [600, "MKS", "metre · kilogram · second"],
];

/** [chip x, reading] — the same object reported by each system. */
const READINGS: [number, string][] = [
  [120, "11.8 in"],
  [390, "30 cm"],
  [660, "0.30 m"],
];

const QUALITIES: [number, string][] = [
  [60, "well-defined"],
  [280, "invariant"],
  [500, "reproducible"],
  [720, "imperishable"],
];

const FLAWS: [string, string, number][] = [
  ["scratches ✗", "scratch ho jaata ✗", 430],
  ["gathers dust ✗", "dust jam jaati ✗", 462],
  ["slowly drifts ✗", "dheere drift karta ✗", 494],
];

export default function Ch01Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + the three historical systems */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={66} size={28} fill={RED} script>
          {t("why the world had to standardise", "duniya ko standard kyun chahiye tha")}
        </T>
      </Fade>
      {CARDS.map(([x, name, units], i) => (
        <G key={name}>
          <Draw
            on={beat >= 0}
            delay={dl(0, 4 + i * 5)}
            d={`M ${x + 12} 100 h 216 q 12 0 12 12 v 56 q 0 12 -12 12 h -216 q -12 0 -12 -12 v -56 q 0 -12 12 -12`}
            stroke={INK}
            sw={2.6}
            dur={0.8}
          />
          <Fade on={beat >= 0} delay={dl(0, 4.6 + i * 5)}>
            <T x={x + 120} y={145} size={24} fill={INK} weight={800}>
              {name}
            </T>
          </Fade>
          <Fade on={beat >= 0} delay={dl(0, 5.1 + i * 5)}>
            <T x={x + 120} y={168} size={13} fill={MUTED} script>
              {units}
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 1 — walls: each system in its own room */}
      {[315, 585].map((x, i) => (
        <Draw
          key={x}
          on={beat >= 1}
          delay={dl(1, 0.5 + i * 0.9)}
          d={`M ${x} 104 L ${x - 3} 130 L ${x + 3} 156 L ${x} 182`}
          stroke={RED}
          sw={2.6}
          dur={0.7}
        />
      ))}

      {/* beat 2 — same thing, three different numbers */}
      {READINGS.map(([x, label], i) => (
        <Fade key={label} on={beat >= 2} delay={dl(2, 1.2 + i * 0.8)}>
          <Chip x={x} y={204} w={120} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={17}>
            {label}
          </Chip>
        </Fade>
      ))}
      {[315, 585].map((x, i) => (
        <Fade key={x} on={beat >= 2} delay={dl(2, 3.8 + i * 0.5)}>
          <T x={x} y={228} size={22} fill={RED} weight={800}>
            ≠
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={60} y={276} size={19} fill={RED} script anchor="start">
          {t(
            "not the physics — the rulers disagreed",
            "physics same thi — rulers alag the"
          )}
        </T>
      </Fade>

      {/* beat 3 — 1971: the world agrees on SI */}
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={870} y={122} size={16} fill={AMBER_DARK} script>
          1971
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 6)}
        d={arrowD(846, 140, 902, 140)}
        stroke={AMBER}
        sw={3}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <Circle cx={958} cy={140} r={48} fill={CREAM} stroke="none" />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 6.7)}
        d="M 910 140 A 48 48 0 1 1 1006 140 A 48 48 0 1 1 910 140"
        stroke={AMBER}
        sw={3}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 7.8)}>
        <T x={958} y={150} size={28} fill={INK} weight={800}>
          SI
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9.5)}>
        <T x={958} y={218} size={14} fill={AMBER_DARK} script>
          7 base · 2 supp
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10.5)}>
        <T x={958} y={241} size={13} fill={MUTED} script>
          upgraded MKS
        </T>
      </Fade>

      {/* beat 4 — what makes a world standard: four qualities, ticked */}
      {QUALITIES.map(([x, q], i) => (
        <G key={q}>
          <Fade on={beat >= 4} delay={dl(4, 0.6 + i * 2.2)}>
            <Chip x={x} y={306} w={200} h={38} fill={PAPER} stroke={GREEN} textFill={INK} size={15} script={false}>
              {q}
            </Chip>
          </Fade>
          <Draw
            on={beat >= 4}
            delay={dl(4, 1.4 + i * 2.2)}
            d={`M ${x + 16} 325 l 6 6 l 12 -13`}
            stroke={GREEN}
            sw={2.8}
            dur={0.4}
          />
        </G>
      ))}

      {/* beat 5 — the old kilogram: a lump of metal in a vault */}
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={160} y={382} size={15} fill={MUTED} script>
          {t("the old kilogram", "purana kilogram")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d="M 92 400 h 136 q 12 0 12 12 v 76 q 0 12 -12 12 h -136 q -12 0 -12 -12 v -76 q 0 -12 12 -12"
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.6)}
        d="M 135 447 a 25 10 0 1 1 50 0 v 28 a 25 10 0 1 1 -50 0 z M 135 447 a 25 10 0 1 0 50 0"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.9}
      />
      {FLAWS.map(([fEn, fHi, y], i) => (
        <Fade key={y} on={beat >= 5} delay={dl(5, 4.5 + i * 1.5)}>
          <T x={270} y={y} size={15} fill={RED} script anchor="start">
            {t(fEn, fHi)}
          </T>
        </Fade>
      ))}

      {/* beat 6 — 2019: throw the cylinder away */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d={crossD(135, 435, 50, 50)}
        stroke={RED}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={160} y={532} size={16} fill={RED} script>
          {t("2019: thrown away!", "2019: phek diya!")}
        </T>
      </Fade>

      {/* beat 7 — constants of nature take over */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Chip x={420} y={430} w={280} h={40} fill="#fff" stroke={GREEN} textFill={GREEN} size={16} script={false}>
          constants: c · h · e · k · Nᴀ
        </Chip>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.5)}
        d={arrowD(710, 450, 760, 450)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <Chip x={765} y={430} w={210} h={40} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t("units, rebuilt anywhere", "units, kahin bhi")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={430} y={508} size={16} fill={GREEN} script anchor="start">
          {t("no scratches, no dust, no vault", "na scratch, na dust, na vault")}
        </T>
      </Fade>
    </Scene>
  );
}
