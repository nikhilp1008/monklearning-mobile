/**
 * M11 Ch13 · Section 2 — "The range: fast but fragile"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 12.12, 24.15, 35.84, 47.19, 64.51, 81.07]):
 *  0 anchor: heading + a plain number line with 7 scattered data points
 *  1 represent: formula "Range = x_max - x_min", ring the min/max dots, arrow
 *    between them, arithmetic "38 - 12 = 26"
 *  2 explain: grouped-data tweak — 4 class bars, range spans the outer edges
 *  3 explain: a real first-glance use — the weather-report example (22°C→41°C)
 *  4 guardrail (red-margin): one freak observation explodes the range —
 *    outlier dot at 82 rings in red, old max/arrow dim, new red arrow to 70
 *  5 represent: coefficient of range, a real stacked fraction (Frac)
 *  6 land: unit-free, so it compares spread across different scales
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 22, red, always-on)     | T mid | x540 y58
 *  b0 | heading (script 17, amber_dark)  | T mid | x540 y92
 *  b0 | axis (y190) + 7 dots             | Draw  | x100..940
 *  b1 | formula (sans 24 w800)           | T mid | x540 y130
 *  b1 | ring min(201,190) / max(419,190) | Draw  | rx19 ry17
 *  b1 | range arrow (double head)        | Draw  | (201,215)..(419,215)
 *  b1 | "38 - 12 = 26" (14, muted)       | T mid | x310 y235
 *  b2 | 4 class bars (base y358)          | Draw  | x150..650
 *  b2 | range arrow above bars           | Draw  | (150,296)..(650,296)
 *  b2 | recap line (13, ink)             | T mid | x400 y386
 *  b3 | 22°C / 41°C chips + arrow        | Chip  | x740..830 / x900..990 y303..337
 *  b3 | "range = 19°C" chip (green)      | Chip  | x760..980 y349..381
 *  b4 | outlier dot (82) ring (red)      | Draw  | (789,190) rx19 ry17
 *  b4 | new red range arrow              | Draw  | (201,255)..(789,255)
 *  b4 | red bar + guardrail text         | Draw+T| x60 y268..284 · text x76 y280
 *  b5 | "Coefficient of range =" (20)    | T end | x460 y515
 *  b5 | Frac (size24, width190)          | Frac  | x600 y515
 *  b6 | closing line (script 15)         | T mid | x540 y566
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
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, Frac } from "./math-kit";

const DATA = [12, 18, 22, 25, 30, 33, 38];
const xForValue = (v: number) => 100 + v * 8.4;

/** Straight shaft with drawn arrowheads at BOTH ends. */
function doubleArrowD(x1: number, y1: number, x2: number, y2: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 11;
  return `${arrowD(x1, y1, x2, y2)} M ${x1 + h * Math.cos(a - 0.46)} ${
    y1 + h * Math.sin(a - 0.46)
  } L ${x1} ${y1} L ${x1 + h * Math.cos(a + 0.46)} ${y1 + h * Math.sin(a + 0.46)}`;
}

export default function M11Ch13Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const minX = xForValue(DATA[0]);
  const maxX = xForValue(DATA[DATA.length - 1]);
  const outlierV = 82;
  const outlierX = xForValue(outlierV);

  const BARS = [
    { x: 150, w: 110, h: 30 },
    { x: 275, w: 110, h: 55 },
    { x: 400, w: 110, h: 45 },
    { x: 525, w: 110, h: 20 },
  ];
  const barsLeft = BARS[0].x;
  const barsRight = BARS[BARS.length - 1].x + BARS[BARS.length - 1].w;
  const barsBase = 358;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} anchor="middle" script>
          {t("The Range: Fast But Fragile", "Range: Fast Lekin Fragile")}
        </T>
      </Fade>

      {/* beat 0 — anchor: heading + a plain number line of 7 points */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={17} fill={AMBER_DARK} anchor="middle" script>
          {t("The crudest measure of spread: the range", "Spread ka sabse crude measure: range")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d={axisD(100, 940, 190)} stroke={INK} sw={2} dur={0.8} />
      {DATA.map((v, i) => (
        <Fade key={v} on={beat >= 0} delay={dl(0, 1.6 + i * 0.2)} dim={beat >= 4 && i > 0 && i < DATA.length - 1}>
          <Circle cx={xForValue(v)} cy={190} r={5} fill={INK} />
        </Fade>
      ))}

      {/* beat 1 — represent: Range = x_max - x_min */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={130} size={24} fill={INK} anchor="middle" weight={800}>
          Range = x_max - x_min
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={ringD(minX, 190, 19, 17)} stroke={GREEN} sw={2.2} dur={0.6} />
      <G opacity={beat >= 4 ? 0.14 : 1}>
        <Draw on={beat >= 1} delay={dl(1, 1.8)} d={ringD(maxX, 190, 19, 17)} stroke={GREEN} sw={2.2} dur={0.6} />
        <Draw on={beat >= 1} delay={dl(1, 2.6)} d={doubleArrowD(minX, 215, maxX, 215)} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      </G>
      <Fade on={beat >= 1} delay={dl(1, 3.4)} dim={beat >= 4}>
        <T x={(minX + maxX) / 2} y={235} size={14} fill={MUTED} anchor="middle">
          38 - 12 = 26
        </T>
      </Fade>

      {/* beat 2 — grouped-data tweak: class boundaries */}
      {BARS.map((b, i) => (
        <Draw
          key={i}
          on={beat >= 2}
          delay={dl(2, 0.5 + i * 0.35)}
          d={`M ${b.x} ${barsBase} L ${b.x} ${barsBase - b.h} L ${b.x + b.w} ${barsBase - b.h} L ${b.x + b.w} ${barsBase}`}
          stroke={AMBER_DARK}
          sw={2.2}
          dur={0.5}
        />
      ))}
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d={doubleArrowD(barsLeft, barsBase - 62, barsRight, barsBase - 62)}
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={(barsLeft + barsRight) / 2} y={barsBase + 28} size={13} fill={INK} anchor="middle">
          {t(
            "= upper boundary (highest class) - lower boundary (lowest class)",
            "= upper boundary (highest class) - lower boundary (lowest class)"
          )}
        </T>
      </Fade>

      {/* beat 3 — a real first-glance use: the weather example */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={740} y={303} w={90} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          22°C
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={arrowD(838, 320, 892, 320)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <Chip x={900} y={303} w={90} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          41°C
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <Chip x={760} y={349} w={220} h={32} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("range = 19°C", "range = 19°C")}
        </Chip>
      </Fade>

      {/* beat 4 — guardrail: one freak observation, and the range lies */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={ringD(outlierX, 190, 19, 17)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Circle cx={outlierX} cy={190} r={5} fill={RED} />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.6)}
        d={doubleArrowD(minX, 255, outlierX, 255)}
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />
      <Draw on={beat >= 4} delay={dl(4, 2.5)} d="M 60 268 L 60 284" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={76} y={280} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "One freak value (82) → the range explodes to 70!",
            "Ek freak value (82) → range 70 tak phat jaata hai!"
          )}
        </T>
      </Fade>

      {/* beat 5 — coefficient of range, a real stacked fraction */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={460} y={515} size={20} fill={INK} anchor="end" weight={700}>
          {t("Coefficient of range =", "Coefficient of range =")}
        </T>
      </Fade>
      <Frac
        on={beat >= 5}
        delay={dl(5, 0.8)}
        x={600}
        y={515}
        size={22}
        numerator="x_max - x_min"
        denominator="x_max + x_min"
        width={190}
      />

      {/* beat 6 — land: unit-free, compares across scales */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={566} size={15} fill={GREEN} anchor="middle" script>
          {t(
            "Unit-free — compares spread across totally different scales.",
            "Unit-free — bilkul alag scales ke spread ko compare karta hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
