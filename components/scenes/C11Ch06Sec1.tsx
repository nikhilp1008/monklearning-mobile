/**
 * C11 Ch06 · Section 1 — "Dynamic equilibrium: still outside, busy inside"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 24.1, 62.8, 135.2, 183.4, 224.5, 267.9, 325.8]):
 *  0 title + underline
 *  1 represent: coach standing at the platform (the scene)
 *  2 THE DEMO: equal boarding/alighting arrows, "count constant" chip
 *  3 zoom callout: outside still, inside nonstop (dashed box + label)
 *  4 land: "DYNAMIC EQUILIBRIUM" stamped + ringed
 *  5 the real condition: rate(forward) = rate(reverse), boxed
 *  6 guardrail: not a stopped reaction — two matched rates (note strip)
 *  7 erase the coach metaphor, draw the rate-vs-time graph in its place
 *
 * Layout plan (boxes are estimated render boxes; longer language counts):
 *  b0 | title (script 27, red)        | T mid  | x228..852  y30..93  (bl 64)
 *  b0 | underline                     | Draw   | y83..87  x460..620
 *  b1 | coach body                    | Draw   | x260..820 y150..250
 *  b1 | "Rajdhani" (16, ink)          | T mid  | x497..583 y196..205 (bl 205, inside coach)
 *  b1 | platform line                 | Draw   | y380  x140..940
 *  b1 | "platform" (14, muted)        | T end  | x48..110  y365..391 (bl 384)
 *  b2 | board arrow (green, up)       | Draw   | x380  y256..376
 *  b2 | alight arrow (red, down)      | Draw   | x700  y256..376
 *  b2 | "board ↑" (14, green)         | T end  | x420..505 y391..406 (bl 402)
 *  b2 | "↓ alight" (14, red)          | T st   | x575..665 y391..406 (bl 402)
 *  b2 | "count constant" chip (green) | Chip   | x850..1025 y178..224
 *  b3 | zoom dashed box               | rect   | x310..770 y246..416
 *  b3 | zoom label (15, amber-dark)   | T mid  | x350..730 y417..440 (bl 436)
 *  b4 | "DYNAMIC EQUILIBRIUM" (26)    | T mid  | x396..684 y464..492 (bl 484) · ring c(540,478) rx144 ry28
 *  b5 | formula chip (rate f = rate r)| Chip   | x340..740 y525..573
 *  b6 | guardrail note (18, muted)    | T st   | x60..476  y103..135 (bl 126)
 *  b7 | axes (x + y, drawn)           | Draw   | x200..940 y150..430
 *  b7 | "time"/"rate" axis labels     | T      | small, at axis ends
 *  b7 | forward curve (red)           | Draw   | (200,175)→(550,310)→(900,310)
 *  b7 | reverse curve (green)         | Draw   | (200,430)→(550,310)→(900,310)
 *  b7 | t_eq dashed marker + label    | Draw+T | x550  y150..430
 *  b7 | "forward rate"/"reverse rate" | T st   | flanking the curve starts
 *  b7 | "rates equal — flat" (13)     | T mid  | x641..759 y276..294 (bl 290)
 */

import React from "react";
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
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
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const coachOn = beat >= 1 && beat < 7;

  return (
    <Scene>
      {/* title always-on; everything else beat-gated so the board starts blank */}
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t(
            "dynamic equilibrium: two rates in balance",
            "dynamic equilibrium: do rates barabar rehte"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* the coach + platform metaphor group — vacates its space at beat 7 */}
      {/* The web fades this group with a CSS transition; react-native-svg has
          no transition property, so the opacity is applied directly. */}
      <G opacity={coachOn ? 1 : 0}>
        {/* beat 1 — represent the scene */}
        <Draw
          on={beat >= 1}
          d="M 260 150 H 820 V 250 H 260 Z"
          stroke={INK}
          sw={3}
          dur={beat > 1 ? 0.3 : 1.3}
        />
        <Fade on={beat >= 1} delay={dl(1, 0.8)}>
          <T x={540} y={205} size={16} fill={INK}>
            {t("Rajdhani coach", "Rajdhani coach")}
          </T>
        </Fade>
        <Draw
          on={beat >= 1}
          delay={dl(1, 1.6)}
          d="M 140 380 L 940 380"
          stroke={INK}
          sw={2.4}
          dur={0.7}
        />
        <Fade on={beat >= 1} delay={dl(1, 2.3)}>
          <T x={110} y={384} size={14} fill={MUTED} anchor="end" script>
            {t("platform", "platform")}
          </T>
        </Fade>

        {/* beat 2 — THE DEMO: equal traffic both ways */}
        <Draw
          on={beat >= 2}
          delay={dl(2, 0.5)}
          d={arrowD(380, 376, 380, 256)}
          stroke={GREEN}
          sw={2.6}
          dur={0.5}
        />
        <Draw
          on={beat >= 2}
          delay={dl(2, 1.3)}
          d={arrowD(700, 256, 700, 376)}
          stroke={RED}
          sw={2.6}
          dur={0.5}
        />
        <Fade on={beat >= 2} delay={dl(2, 2)}>
          <T x={505} y={402} size={14} fill={GREEN} anchor="end">
            {t("board ↑", "board ↑")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 2.4)}>
          <T x={575} y={402} size={14} fill={RED} anchor="start">
            {t("↓ alight", "↓ utarna")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 3.4)}>
          <Chip x={850} y={178} w={175} h={46} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
            {t("count constant", "count constant")}
          </Chip>
        </Fade>

        {/* beat 3 — zoom callout: outside still, inside nonstop */}
        <Fade on={beat >= 3} delay={dl(3, 0.4)}>
          <Rect
            x={310}
            y={246}
            width={460}
            height={170}
            rx={16}
            fill="none"
            stroke={AMBER}
            strokeWidth={2}
            strokeDasharray="7 6"
          />
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.2)}>
          <T x={540} y={436} size={15} fill={AMBER_DARK} script>
            {t("outside: still · inside: nonstop", "bahar: sthir · andar: nonstop")}
          </T>
        </Fade>

        {/* beat 4 — land the metaphor's name */}
        <Fade on={beat >= 4} delay={dl(4, 0.6)}>
          <T x={540} y={484} size={26} fill={GREEN} weight={800}>
            DYNAMIC EQUILIBRIUM
          </T>
        </Fade>
        <Draw
          on={beat >= 4}
          delay={dl(4, 1.6)}
          d={ringD(540, 478, 144, 28)}
          stroke={GREEN}
          sw={2.6}
          dur={0.8}
        />
      </G>

      {/* beat 5 — the real condition, boxed (persists past the erase) */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Chip x={340} y={525} w={400} h={48} fill={CREAM} stroke={AMBER} textFill={INK} size={20} script={false}>
          {t("rate (forward) = rate (reverse)", "rate (forward) = rate (reverse)")}
        </Chip>
      </Fade>

      {/* beat 6 — guardrail note */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={126} size={18} fill={MUTED} script anchor="start">
          {t(
            "not a stopped reaction — two matched rates",
            "ruki hui reaction nahi — do barabar rates"
          )}
        </T>
      </Fade>

      {/* beat 7 — erase the coach, draw the rate-vs-time graph in its place */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Path d={arrowD(200, 430, 940, 430)} stroke={INK} strokeWidth={2} fill="none" />
        <Path d={arrowD(200, 430, 200, 150)} stroke={INK} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={940} y={452} size={14} fill={MUTED} anchor="middle">
          {t("time", "time")}
        </T>
        <T x={195} y={148} size={14} fill={MUTED} anchor="end">
          {t("rate", "rate")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.2)}
        d="M 200 175 C 320 185, 430 275, 550 310 L 900 310"
        stroke={RED}
        sw={2.6}
        dur={1}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.2)}
        d="M 200 430 C 320 410, 430 340, 550 310 L 900 310"
        stroke={GREEN}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={210} y={152} size={13} fill={RED} anchor="start">
          {t("forward rate", "forward rate")}
        </T>
        <T x={210} y={455} size={13} fill={GREEN} anchor="start">
          {t("reverse rate", "reverse rate")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <Line x1={550} y1={150} x2={550} y2={430} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
        <T x={550} y={140} size={13} fill={MUTED} anchor="middle">
          t_eq
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.2)}>
        <Circle cx={550} cy={310} r={4} fill={INK} />
        <T x={700} y={290} size={13} fill={AMBER_DARK} anchor="middle">
          {t("rates equal — flat", "rates barabar — flat")}
        </T>
      </Fade>
    </Scene>
  );
}
