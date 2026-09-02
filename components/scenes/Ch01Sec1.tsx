/**
 * Ch01 · Section 1 — "A measurement is a number and a unit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at, en [0, 11.5, 26.6, 44.6, 61.2, 74, 84.8, 99.4]):
 *  0 title + drawn underline · 1 phone story: quote, naked "5 …?", unit chips
 *  2 the real question (green quote, underlined) · 3 THE DEMO: table measured
 *    by metre stick (1…3½ → 3.5 m), then 10-cm ticks race to 350 cm
 *  4 unit smaller ↓ / number bigger ↑ (arrows land on tick strip & 350-chip)
 *  5 same-wall note · 6 measurement = ratio (RATIO ringed) · 7 cross out the 5
 *
 * Layout plan — boxes are MEASURED render boxes (Kalam ink box ≈ baseline
 * −1.3·size … +0.5·size; Anek ≈ −0.78 … +0.31), longer language counts:
 *  b0 | title (script 32, red)     | T mid  | x276..804  y30..80  (bl 64)
 *  b0 | underline                  | Draw   | y91  x545..730
 *  b1 | quote1 (script 21, muted)  | T st   | x60..439   y102..136 (bl 126)
 *  b1 | "5" (64, w800)             | T mid  | x740..776  y91..161  (bl 150)
 *  b1 | "…?" (script 40, red)      | T mid  | x800..855  y104..168 (bl 148)
 *  b1 | chips ×3 (h40)             | Chip   | y178..218  x60..180 / 200..340 / 360..544
 *  b2 | quote2 (script 22, green)  | T mid  | x268..812  y220..255 (bl 246)
 *  b2 | underline                  | Draw   | y265 x494..691 (clear of "the table" x484)
 *  b3 | "the table" (script 16)    | T mid  | x418..484  y272..298 (bl 292)
 *  b3 | table                      | Draw   | x150..750  y310..336, short legs →356
 *  b3 | metre marks ×3 (red)       | line   | x310/470/630  y309..341
 *  b3 | cm ticks (green)           | line   | x150..750  y339..348 (skip legs)
 *  b3 | stick (amber)              | rect   | x150..310  y366..378 → parked x630..790
 *  b3 | "1 metre stick" (15)       | T mid  | x189..277  y389..413 (bl 409)
 *  b3 | "now in 10-cm steps…" (16) | T mid  | x365..540  y388..413 (bl 409)
 *  b3 | numeral→counter (36)       | T mid  | x767..833  y302..339 (bl 330, live slot)
 *  b3 | "= 3.5 m" chip (ink)       | Chip   | x850..990  y296..340
 *  b3 | "= 350 cm" chip (green)    | Chip   | x850..990  y354..398
 *  b4 | note (script 19, muted)    | T st   | x60..458   y428..458 (bl 452)
 *  b4 | "unit smaller" (18, red)   | T mid  | x549..651  y429..457 · arrow (600,421)→(600,353)
 *  b4 | "number bigger" (18,green) | T mid  | x735..845  y429..457 · arrow (790,421)→(845,402)
 *  b5 | margin bar (green)         | Draw   | x60  y478..504
 *  b5 | wall note (script 20)      | T st   | x76..609   y472..504 (bl 498)
 *  b6 | formula (24, w800)         | T mid  | x240..682  y542..567 (bl 560)
 *  b6 | RATIO (script 21)          | T mid  | x852..908  y539..574 · ring c(880,556) rx42 ry29
 *  b7 | cross-out over "5"         | Draw   | x737..780  y92..160
 *  b7 | "naked number ✗" (18)      | T mid  | x882..1011 y133..161 (bl 145)
 */

import React from "react";
import { G, Line, Rect } from 'react-native-svg';
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
  useCountUp,
  useTimelineLabel,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
  StepAcross,
} from '@/components/scenes/kit';

const TX = 150;
const TY = 310;
const TW = 600;
const TH = 26;
const LEG_L = TX + 30;
const LEG_R = TX + TW - 30;
const STICK_Y = 366;

export default function Ch01Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const stickLabel = useTimelineLabel(beat === 3, [
    [0.9, "1"],
    [1.9, "2"],
    [2.9, "3"],
    [3.8, "3½"],
  ]);
  const cmCount = useCountUp(beat === 3, 350, 3.2, 7.4);

  const cmTicks: number[] = [];
  for (let x = TX; x <= TX + TW; x += 10)
    if (Math.abs(x - LEG_L) > 6 && Math.abs(x - LEG_R) > 6) cmTicks.push(x);

  return (
    <Scene>
      {/* title is always-on — the heading stays on the blank board before play;
          everything else is beat-gated and draws only once playback begins */}
      <Fade on={true}>
        <T x={540} y={64} size={32} fill={RED} script>
          {t("a measurement = a number + a unit", "measurement = number + unit")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 7)}
        d="M 545 91 C 610 87, 670 94, 730 90"
        stroke={RED}
        sw={2.6}
        dur={0.7}
      />

      {/* beat 1 — the phone story */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={126} size={21} fill={MUTED} script anchor="start">
          {t(
            "“I bought a table that’s… five long.”",
            "“yaar, maine table kharida — 5 ka hai”"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={760} y={150} size={64} fill={INK} weight={800}>
          5
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={830} y={148} size={40} fill={RED} script>
          …?
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <Chip x={60} y={178} w={120} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={19}>
          {t("5 feet?", "5 feet?")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.3)}>
        <Chip x={200} y={178} w={140} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={19}>
          {t("5 metres?", "5 metre?")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.1)}>
        <Chip x={360} y={178} w={184} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={19}>
          {t("5 hand-spans?", "5 hand-span?")}
        </Chip>
      </Fade>

      {/* beat 2 — the real question, key phrase underlined */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={246} size={22} fill={GREEN} script>
          {t(
            "“how many times does my standard fit into this?”",
            "“mera standard is cheez mein kitni baar fit hota hai?”"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d="M 494 265 C 550 261, 630 268, 691 264"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 3 — THE DEMO: measure the table */}
      <Draw
        on={beat >= 3}
        d={`M ${TX} ${TY} h ${TW} v ${TH} h ${-TW} z M ${LEG_L} ${TY + TH} v 20 M ${LEG_R} ${
          TY + TH
        } v 20`}
        stroke={INK}
        sw={3}
        dur={beat > 3 ? 0.3 : 1.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={450} y={292} size={16} fill={MUTED} script>
          {t("the table", "the table")}
        </T>
      </Fade>

      {/* metre stick: steps across live; parked + dimmed once the beat is past */}
      {/* CSS opacity/transform on the web; react-native-svg takes opacity
          as a prop and `x` as its translate shorthand. */}
      <G opacity={beat < 3 ? 0 : beat > 3 ? 0.25 : 1}>
        {/* The web walks the stick with the `sc-stick` keyframes: four stops
            over 3.8s, laid down and picked up again. This is that walk. */}
        <StepAcross
          elapsed={beat === 3 ? currentTime - (reveals[3] ?? 0) : -1}
          stops={[0, 160, 320, 480]}>
          <Rect
            x={TX}
            y={STICK_Y}
            width={160}
            height={12}
            rx={3}
            fill={AMBER}
            stroke={INK}
            strokeWidth={2}
          />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <Line
              key={i}
              x1={TX + i * 16}
              y1={STICK_Y}
              x2={TX + i * 16}
              y2={STICK_Y + (i === 5 ? 9 : 6)}
              stroke={INK}
              strokeWidth={1.1}
            />
          ))}
        </StepAcross>
      </G>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={230} y={409} size={15} fill={AMBER_DARK} script>
          {t("1 metre stick", "1 metre stick")}
        </T>
      </Fade>
      {[1, 2, 3].map((i) => (
        <Fade key={i} on={beat >= 3} delay={dl(3, i)}>
          <Line
            x1={TX + i * 160}
            y1={TY - 1}
            x2={TX + i * 160}
            y2={TY + TH + 5}
            stroke={RED}
            strokeWidth={2}
            opacity={0.8}
          />
        </Fade>
      ))}
      {beat === 3 && cmCount === 0 && stickLabel && (
        <T x={800} y={330} size={36} fill={INK} weight={800}>
          {stickLabel}
        </T>
      )}
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <Chip x={850} y={296} w={140} h={44} fill={INK} textFill={CREAM} size={22}>
          = 3.5 m
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <G>
          {cmTicks.map((x) => (
            <Line
              key={x}
              x1={x}
              y1={TY + TH + 3}
              x2={x}
              y2={TY + TH + 12}
              stroke={GREEN}
              strokeWidth={1.2}
            />
          ))}
        </G>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.8)}>
        <T x={450} y={409} size={16} fill={GREEN} script>
          {t("now in 10-cm steps…", "ab 10-cm steps se…")}
        </T>
      </Fade>
      {beat === 3 && cmCount > 0 && (
        <T x={800} y={330} size={36} fill={GREEN} weight={800}>
          {cmCount}
        </T>
      )}
      <Fade on={beat >= 3} delay={dl(3, 10.9)}>
        <Chip x={850} y={354} w={140} h={44} fill={GREEN} textFill="#fff" size={22}>
          = 350 cm
        </Chip>
      </Fade>

      {/* beat 4 — smaller unit ⇒ bigger number; arrows land on their targets */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={452} size={19} fill={MUTED} script anchor="start">
          {t("same table — only the ruler changed", "table wahi — sirf ruler badla")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d={arrowD(600, 421, 600, 353)}
        stroke={RED}
        sw={2.8}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={600} y={452} size={18} fill={RED} script>
          {t("unit smaller", "unit choti")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 4.6)}
        d={arrowD(790, 421, 845, 402)}
        stroke={GREEN}
        sw={2.8}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={790} y={452} size={18} fill={GREEN} script>
          {t("number bigger", "number bada")}
        </T>
      </Fade>

      {/* beat 5 — same wall note, drawn margin bar */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M 60 478 L 60 504"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={76} y={498} size={20} fill={GREEN} script anchor="start">
          {t(
            "3 m = 300 cm — the same wall. only your report changed.",
            "3 m = 300 cm — same wall. size nature ki, report tumhari."
          )}
        </T>
      </Fade>

      {/* beat 6 — measurement is a ratio */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={460} y={560} size={24} fill={INK} weight={800}>
          {t(
            "measurement = size of thing ÷ size of unit",
            "measurement = size of thing ÷ size of unit"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={880} y={560} size={21} fill={AMBER_DARK} script>
          RATIO
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.4)}
        d={ringD(880, 556, 42, 29)}
        stroke={AMBER}
        sw={3}
        dur={0.8}
      />

      {/* beat 7 — a naked number is never an answer */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.7)}
        d={crossD(741, 95, 35, 62)}
        stroke={RED}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={950} y={145} size={18} fill={RED} script>
          {t("naked number ✗", "nanga number ✗")}
        </T>
      </Fade>
    </Scene>
  );
}
