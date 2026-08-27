/**
 * C11 Ch01 · Section 1 — "Matter and the three states"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 17.15, 32.34, 57.18, 78.34, 96.43, 116.31]):
 *  0 anchor: "matter = mass + space" + 3 everyday-object chips (dims at beat 1)
 *  1 sort into 3 bins: dashed boxes with "?" appear (solid/liquid/gas slots)
 *  2 represent: "?" replaced by particle diagrams (grid/cluster/scatter) +
 *    labels + examples (chalk / water / LPG)
 *  3 explain the move: tug-of-war caption + verdict chip under each box
 *    (attraction wins / comparable / thermal wins)
 *  4 land: one property chip per box (shape/volume fixed or not)
 *  5 extend: heat arrows drawn IN the gaps between boxes (solid→liquid→gas),
 *    "ice→water"/"water→steam" micro-captions — reuses existing row, no new one
 *  6 guardrail: same substance, 3 costumes — steam is still water (green, boxed)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | statement (script20 ink)     | T mid | x300..780  y85..110 (bl 110)  [dims@b1]
 *  b0 | chip "your phone" (16)       | Chip  | x170..320  y145..181
 *  b0 | chip "the air…" (16)         | Chip  | x360..620  y145..181
 *  b0 | chip "glass of water" (16)   | Chip  | x660..830  y145..181
 *  b1 | box ×3 (dashed, w220 h120)   | Draw  | y215..335  x100..320/430..650/760..980
 *  b1 | "?" (script30 muted)         | T mid | cx210/540/870  y285 (beat===1 only)
 *  b2 | particles (solid/liq/gas)    | dots  | inside each box, y230..320
 *  b2 | label (16 ink)               | T mid | cx210/540/870  y355
 *  b2 | example (13 muted script)    | T mid | cx210/540/870  y374
 *  b3 | caption (script17 red)       | T mid | x540  y415
 *  b3 | verdict chip ×3 (15)         | Chip  | y435..461  cx210/540/870
 *  b4 | property chip ×3 (14)        | Chip  | y485..519  cx210/540/870
 *  b5 | heat arrow ×2 (amber-dark)   | Draw  | (320,275)→(430,275) · (650,275)→(760,275)
 *  b5 | "Δ heat" ×2 (12)             | T mid | x375/705  y262
 *  b5 | "ice→water"/"water→steam"    | T mid | x375/705  y296 (11, muted)
 *  b6 | guardrail (script18 green)   | T mid | x540  y558
 *  b6 | underline (green)            | Draw  | y572  x300..780
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const BOXES: [number, string][] = [
  [210, "solid"],
  [540, "liquid"],
  [870, "gas"],
];
const BOX_Y = 215;
const BOX_H = 120;
const BOX_W = 220;

const EXAMPLES: [string, string] = ["chalk · water · LPG", "chalk · paani · LPG"];

const SOLID_DOTS: [number, number][] = [
  [125, 235], [168, 235], [211, 235], [254, 235], [297, 235],
  [125, 275], [168, 275], [211, 275], [254, 275], [297, 275],
  [125, 315], [168, 315], [211, 315], [254, 315], [297, 315],
];

const LIQUID_DOTS: [number, number][] = [
  [478, 240], [512, 233], [548, 242], [582, 236], [612, 248],
  [462, 272], [498, 268], [532, 278], [566, 270], [600, 276],
  [480, 308], [516, 314], [552, 306], [588, 312],
];

const GAS_DOTS: [number, number][] = [
  [800, 238], [872, 252], [944, 232],
  [788, 296], [858, 312], [932, 288],
  [826, 272],
];

export default function C11Ch01Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={29} fill={RED} script>
          {t("the three states of matter", "matter ke teen states")}
        </T>
      </Fade>

      {/* beat 0 — anchor: matter is all around, dims once we move to sorting */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.4)}>
        <T x={540} y={110} size={20} fill={INK} script>
          {t("matter = has mass + takes up space", "matter = jisme mass ho + jo space ghere")}
        </T>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 2.2)}>
        <Chip x={170} y={145} w={150} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={16}>
          {t("your phone", "tumhara phone")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 3)}>
        <Chip x={360} y={145} w={260} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={16}>
          {t("the air you breathe", "jo hawa tum saans lete ho")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 3.8)}>
        <Chip x={660} y={145} w={170} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={16}>
          {t("glass of water", "paani ka glass")}
        </Chip>
      </Fade>

      {/* beat 1 — sort into three bins (drawn empty, dashed) */}
      {BOXES.map(([cx], i) => (
        <Draw
          key={`box${cx}`}
          on={beat >= 1}
          delay={dl(1, 0.4 + i * 1.1)}
          d={`M ${cx - BOX_W / 2} ${BOX_Y} h ${BOX_W} v ${BOX_H} h ${-BOX_W} z`}
          stroke={MUTED}
          sw={2}
          dur={0.9}
        />
      ))}
      {beat === 1 &&
        BOXES.map(([cx]) => (
          <T key={`q${cx}`} x={cx} y={285} size={30} fill={MUTED}>
            ?
          </T>
        ))}

      {/* beat 2 — represent: particle diagrams replace the "?" */}
      {beat >= 2 &&
        SOLID_DOTS.map(([x, y], i) => (
          <Fade key={`s${i}`} on={true} delay={dl(2, 0.3 + i * 0.06)}>
            <Circle cx={x} cy={y} r={4.6} fill={INK} />
          </Fade>
        ))}
      {beat >= 2 &&
        LIQUID_DOTS.map(([x, y], i) => (
          <Fade key={`l${i}`} on={true} delay={dl(2, 1.2 + i * 0.06)}>
            <Circle cx={x} cy={y} r={5.2} fill={INK} />
          </Fade>
        ))}
      {beat >= 2 &&
        GAS_DOTS.map(([x, y], i) => (
          <Fade key={`g${i}`} on={true} delay={dl(2, 2.1 + i * 0.08)}>
            <Circle cx={x} cy={y} r={4.8} fill={INK} />
          </Fade>
        ))}
      {BOXES.map(([cx, label], i) => (
        <Fade key={`lbl${cx}`} on={beat >= 2} delay={dl(2, 2.8 + i * 0.2)}>
          <T x={cx} y={355} size={16} fill={INK} weight={700}>
            {label}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={540} y={374} size={13} fill={MUTED} script>
          {t(...EXAMPLES)}
        </T>
      </Fade>

      {/* beat 3 — explain the move: attraction vs thermal energy */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={415} size={17} fill={RED} script>
          {t(
            "a tug-of-war: attraction vs thermal energy",
            "tug-of-war: attraction vs thermal energy"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Chip x={110} y={435} w={200} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          {t("attraction wins", "attraction jeetta hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <Chip x={475} y={435} w={130} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          {t("comparable", "comparable")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <Chip x={775} y={435} w={190} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          {t("thermal wins", "thermal jeetta hai")}
        </Chip>
      </Fade>

      {/* beat 4 — land: fixed shape / fixed volume, per state */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={115} y={485} w={190} h={34} fill={INK} textFill="#fff" size={14} script={false}>
          shape ✓ · volume ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <Chip x={445} y={485} w={190} h={34} fill={AMBER_DARK} textFill="#fff" size={14} script={false}>
          shape ✗ · volume ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <Chip x={775} y={485} w={190} h={34} fill={RED} textFill="#fff" size={14} script={false}>
          shape ✗ · volume ✗
        </Chip>
      </Fade>

      {/* beat 5 — heating: arrows drawn in the gaps between the boxes */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={375} y={262} size={12} fill={AMBER_DARK} script>
          Δ heat
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d={arrowD(322, 275, 428, 275)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={375} y={296} size={11} fill={MUTED} script>
          {t("ice → water", "ice → paani")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={705} y={262} size={12} fill={AMBER_DARK} script>
          Δ heat
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.2)}
        d={arrowD(652, 275, 758, 275)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={705} y={296} size={11} fill={MUTED} script>
          {t("water → steam", "paani → steam")}
        </T>
      </Fade>

      {/* beat 6 — guardrail: identity doesn't change across states */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={558} size={18} fill={GREEN} script>
          {t(
            "steam is still water — same substance, 3 costumes",
            "steam bhi paani hai — same substance, teen costumes"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 300 572 C 400 568, 680 568, 780 572"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
    </Scene>
  );
}
