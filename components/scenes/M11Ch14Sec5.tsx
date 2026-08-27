/**
 * M11 Ch14 · Section 5 — "Vocabulary: simple, compound, and counting events"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,8.62,20.22,30.55,40.96,57.43,65.71]):
 *  0 heading
 *  1 vocab: sample point ω, n(S)
 *  2 SIMPLE (1 point) vs COMPOUND (>1 point) — contrast chips
 *  3 n outcomes → exactly n simple events
 *  4 formula (HIGH): total events = 2ⁿ — power-set callback to Chapter 1
 *  5 formula: compound events = 2ⁿ − n − 1
 *  6 GUARDRAIL + concrete check: coin (n=2) — 4 events, cross the n+1
 *    non-compound ones, ring the 1 survivor
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "sample point ω = 1 element" (15,ink)   | T mid  | x330..750 y121..135
 *  b1 | "n(S) = how many points" (15,ink)       | T mid  | x370..710 y143..157
 *  b2 | SIMPLE chip (w320 h38) / COMPOUND chip  | Chip   | x140..460 / x620..940 y172..210
 *  b3 | "n outcomes → n simple events" (16,ink) | T mid  | x320..760 y245..259
 *  b4 | "total events = 2ⁿ" (24,green,ringed)   | T mid  | x400..680 y286..311
 *  b5 | "compound events = 2ⁿ − n − 1" (19,ink) | T mid  | x330..750 y331..355
 *  b6 | guardrail caption (13,red)              | T mid  | x300..780 y362..375
 *  b6 | "coin: n=2 → 2²=4 events" (14,muted)    | T mid  | x400..680 y397..411
 *  b6 | 4 event chips (w110 h40)                | Chip   | x290..800 y410..450
 *  b6 | "4 − 2 − 1 = 1 compound ✓" (14,green)   | T mid  | x350..730 y475..489
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const COIN_EVENTS = ["∅", "{H}", "{T}", "{H, T}"];

export default function M11Ch14Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const chipW = 110;
  const chipGap = 20;
  const chipStep = chipW + chipGap;
  const chipStartX = 540 - (4 * chipW + 3 * chipGap) / 2; // 290

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("n outcomes, but 2ⁿ possible events", "n outcomes, par 2ⁿ possible events")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={104} size={20} fill={INK} weight={700}>
          {t("The vocabulary, and counting events", "Vocabulary, aur events ginna")}
        </T>
      </Fade>

      {/* beat 1 — vocab */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={130} size={15} fill={INK} weight={600}>
          {t("sample point ω = one element of S", "sample point ω = S ka ek element")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={540} y={152} size={15} fill={INK} weight={600}>
          {t("n(S) = how many points S has", "n(S) = S mein kitne points hain")}
        </T>
      </Fade>

      {/* beat 2 — simple vs compound */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={140} y={172} w={320} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("SIMPLE — exactly ONE point", "SIMPLE — exactly ek point")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <Chip x={620} y={172} w={320} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t("COMPOUND — more than one", "COMPOUND — ek se zyada")}
        </Chip>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={252} size={16} fill={INK} weight={600}>
          {t("n outcomes → exactly n simple events", "n outcomes → exactly n simple events")}
        </T>
      </Fade>

      {/* beat 4 — HIGH emphasis formula, power-set callback */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={302} size={24} fill={GREEN} weight={800}>
          {"total events = 2ⁿ"}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d={ringD(540, 292.24, 152, 27)} stroke={AMBER} sw={2.2} dur={0.7} />

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={345} size={19} fill={INK} weight={800}>
          {"compound events = 2ⁿ − n − 1"}
        </T>
      </Fade>

      {/* beat 6 — guardrail + concrete coin check */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={369} size={13} fill={RED} script weight={700}>
          {t("remove the n singles and the one empty set", "n singles aur 1 empty set hatao")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={540} y={404} size={14} fill={MUTED}>
          {t("coin: n = 2 → 2² = 4 events", "coin: n = 2 → 2² = 4 events")}
        </T>
      </Fade>
      {COIN_EVENTS.map((ev, i) => {
        const x = chipStartX + i * chipStep;
        return (
          <Fade key={ev} on={beat >= 6} delay={dl(6, 1.5 + i * 0.4)}>
            <Chip x={x} y={410} w={chipW} h={40} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
              {ev}
            </Chip>
          </Fade>
        );
      })}
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.4)}
        d={
          crossD(chipStartX, 410, chipW, 40) +
          " " +
          crossD(chipStartX + chipStep, 410, chipW, 40) +
          " " +
          crossD(chipStartX + 2 * chipStep, 410, chipW, 40)
        }
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 4.2)}
        d={ringD(chipStartX + 3 * chipStep + chipW / 2, 430, chipW / 2 + 12, 26)}
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.9)}>
        <T x={540} y={480} size={14} fill={GREEN} weight={700}>
          {"4 − 2 − 1 = 1 " + t("compound event ✓", "compound event ✓")}
        </T>
      </Fade>
    </Scene>
  );
}
