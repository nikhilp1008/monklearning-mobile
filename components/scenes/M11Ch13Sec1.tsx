/**
 * M11 Ch13 · Section 1 — "Why the average can lie: the mandi story"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens the chapter.
 *
 * Beats (board_reveal_at_english [0, 14.25, 27.99, 43.78, 57.77, 71.77, 88.06]):
 *  0 anchor: heading "Same average, opposite reliability" + two empty vendor
 *    stalls (Ramesh / Suresh) drawn as cards, ready to be filled
 *  1 represent: Ramesh's five prices fill his card, mean chip "= ₹29.6"
 *  2 represent: Suresh's five prices fill his card, mean chip "= ₹29.6" (same)
 *  3 guardrail (red-margin): identical mean, opposite reliability
 *  4 explain: central tendency (WHERE, target icon) vs dispersion (HOW SPREAD,
 *    burst icon) — the key split, erased before beat 5 to free the main band
 *  5 THE DIAGRAM: two stacked number lines, same shared mean (red dashed),
 *    Ramesh's dots in a tight knot, Suresh's flung to the corners
 *  6 land: the question that drives the chapter, boxed in the verdict band
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 22, red, always-on)      | T mid | x540 y58
 *  b0 | heading (script 18, amber_dark)   | T mid | x540 y92
 *  b0 | Ramesh card outline (h94)         | Draw  | x110..470  y110..204
 *  b0 | Suresh card outline (h94)         | Draw  | x610..970  y110..204
 *  b0 | card name labels (sans 16 w700)   | T mid | x290 bl132 / x790 bl132
 *  b1 | Ramesh prices (sans 15)           | T st  | x130..450  bl170
 *  b1 | Ramesh mean chip (h30)            | Chip  | x350..450  y178..204 wait — inside card, use below
 *  b2 | Suresh prices (sans 15)           | T st  | x630..950  bl170
 *  b3 | red bar + guardrail line          | Draw+T| x60 y216..246 · text x76 bl235
 *  b4 | central-tendency icon+label       | Draw+T| cx220 cy300 r24 target
 *  b4 | dispersion icon+label             | Draw+T| cx860 cy300 r24 burst
 *  b4 | divider + "vs" (removed at b5)    | T mid | x540 y300
 *  b5 | Ramesh axis (y320) + 5 dots       | Draw  | x100..980
 *  b5 | Suresh axis (y420) + 5 dots       | Draw  | x100..980
 *  b5 | shared mean dashed line (red)     | Draw  | x531 y296..444
 *  b5 | row captions (script 14)          | T st  | x100 bl308 (green) / x100 bl466 (red)
 *  b6 | verdict box (h56)                 | Draw  | x140..940  y500..556
 *  b6 | verdict text (script 17)          | T mid | x540 bl533
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, roundRectD, lineD } from "./math-kit";

const SCALE_X0 = 100; // value 10
const SCALE_STEP = 22; // px per rupee
const xForValue = (v: number) => SCALE_X0 + (v - 10) * SCALE_STEP;

const RAMESH = [28, 30, 29, 31, 30];
const SURESH = [14, 46, 12, 48, 30];
const MEAN = 29.6;

export default function M11Ch13Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} anchor="middle" script>
          {t("Why the Average Can Lie", "Average Kyun Jhooth Bol Sakta Hai")}
        </T>
      </Fade>

      {/* beat 0 — anchor: heading + two empty vendor stalls */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={17} fill={AMBER_DARK} anchor="middle" script>
          {t("Same average, opposite reliability", "Same average, opposite reliability")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d={roundRectD(110, 110, 360, 94)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d={roundRectD(610, 110, 360, 94)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={290} y={135} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Ramesh", "Ramesh")}
        </T>
        <T x={790} y={135} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Suresh", "Suresh")}
        </T>
      </Fade>

      {/* beat 1 — Ramesh's prices fill his card */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={290} y={168} size={15} fill={INK} anchor="middle">
          {RAMESH.join(", ")} ₹/kg
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={220} y={178} w={140} h={26} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {`mean = ₹${MEAN}`}
        </Chip>
      </Fade>

      {/* beat 2 — Suresh's prices fill his card, same mean */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={790} y={168} size={15} fill={INK} anchor="middle">
          {SURESH.join(", ")} ₹/kg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Chip x={720} y={178} w={140} h={26} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {`mean = ₹${MEAN}`}
        </Chip>
      </Fade>

      {/* beat 3 — guardrail: identical mean, opposite reliability */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 60 216 L 60 246" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={232} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "Identical mean — one vendor reliable, one a gamble.",
            "Same mean — ek vendor reliable, ek gamble."
          )}
        </T>
      </Fade>

      {/* beat 4 — central tendency vs dispersion (erased once beat 5 needs the space) */}
      <Fade on={beat === 4} delay={dl(4, 0.2)} dim={false}>
        <Circle cx={220} cy={310} r={26} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
        <Circle cx={220} cy={310} r={15} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
        <Circle cx={220} cy={310} r={4} fill={AMBER_DARK} />
        <T x={220} y={362} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Central tendency = WHERE", "Central tendency = KAHAAN")}
        </T>
      </Fade>
      <Fade on={beat === 4} delay={dl(4, 0.8)} dim={false}>
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const a = (deg * Math.PI) / 180;
          const x1 = 860 + 8 * Math.cos(a);
          const y1 = 300 + 8 * Math.sin(a);
          const x2 = 860 + 26 * Math.cos(a);
          const y2 = 300 + 26 * Math.sin(a);
          return <Line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={RED} strokeWidth={2.2} />;
        })}
        <Circle cx={860} cy={300} r={4} fill={RED} />
        <T x={860} y={362} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Dispersion = HOW SPREAD OUT", "Dispersion = KITNA PHELA HAI")}
        </T>
      </Fade>
      <Fade on={beat === 4} delay={dl(4, 1.4)} dim={false}>
        <T x={540} y={306} size={20} fill={MUTED} anchor="middle" weight={700}>
          vs
        </T>
      </Fade>

      {/* beat 5 — THE DIAGRAM: two stacked dot plots, shared mean */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={axisD(100, 980, 320)} stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={axisD(100, 980, 420)} stroke={INK} sw={2} dur={0.7} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d={[10, 20, 30, 40, 50].map((v) => tickD(xForValue(v), 420)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        {[10, 20, 30, 40, 50].map((v) => (
          <T key={v} x={xForValue(v)} y={438} size={12} fill={MUTED} anchor="middle">
            {v}
          </T>
        ))}
      </Fade>

      {/* Ramesh dots (top row) — the two 30s stack vertically */}
      {RAMESH.map((v, i) => {
        const isSecond30 = v === 30 && RAMESH.indexOf(30) !== i;
        const y = 320 - (isSecond30 ? 8 : 0);
        return (
          <Fade key={`r${i}`} on={beat >= 5} delay={dl(5, 1.3 + i * 0.25)}>
            <Circle cx={xForValue(v)} cy={y} r={5} fill={GREEN} />
          </Fade>
        );
      })}
      {/* Suresh dots (bottom row) */}
      {SURESH.map((v, i) => (
        <Fade key={`s${i}`} on={beat >= 5} delay={dl(5, 2.8 + i * 0.25)}>
          <Circle cx={xForValue(v)} cy={420} r={5} fill={RED} />
        </Fade>
      ))}

      {/* shared mean — dashed red vertical line */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 4.2)}
        d={lineD(xForValue(MEAN), 296, xForValue(MEAN), 444)}
        stroke={RED}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={xForValue(MEAN) + 10} y={292} size={13} fill={RED} anchor="start">
          {`mean = ₹${MEAN}`}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <T x={100} y={300} size={14} fill={GREEN} anchor="start" script>
          {t("Ramesh — tight knot", "Ramesh — tight knot")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.8)}>
        <T x={100} y={466} size={14} fill={RED} anchor="start" script>
          {t("Suresh — flung wide", "Suresh — bikhra hua")}
        </T>
      </Fade>

      {/* beat 6 — land: the question that drives the chapter */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(140, 500, 800, 56)} stroke={GREEN} sw={2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={533} size={17} fill={INK} anchor="middle" script>
          {t(
            "Dispersion: how far, on average, do the dots live from home?",
            "Dispersion: dots apne ghar se average mein kitni door rehte hain?"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
