/**
 * Ch01 · Section 10 — "Prefixes, practical units, and the master conversion relation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.7, 36.5, 61.4, 86.2, 105.0, 127.4, 149.6]):
 *  0 title + the absurd range: nucleus 10⁻¹⁵ ↔ quasar 10²⁶ (drawn scale)
 *  1 going up: tera → deca chips
 *  2 going down: centi → femto chips + "prefixes are costumes"
 *  3 practical length: Å · fermi · AU
 *  4 ly · parsec + the size order note
 *  5 practical mass & time column
 *  6 the most useful line: n₁u₁ = n₂u₂, ringed
 *  7 the master relation + "every conversion = this line + arithmetic"
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)   | T mid | x232..848 y30..76 (bl 62)
 *  b0 | scale labels (sans 13)   | T mid | (230,bl 100) (850,bl 100) · line y116 x180..900
 *  b1 | up chips ×6 (h36)        | Chip  | y146..182  x60+148i, w130
 *  b2 | down chips ×6 (h36)      | Chip  | y200..236  x60+148i, w130
 *  b2 | costume line (script 15) | T mid | x160..540  y247..274 (bl 266)
 *  b3 | "practical length" (14)  | T st  | x70..186   bl 306 · rows bl 332+30i (sans 14)
 *  b4 | rows 4-5 + order note (script 14, green) x70 st bl 486
 *  b5 | "practical mass · time"  | T st  | x560..724  bl 306 · rows bl 332+30i x560 st
 *  b6 | "n₁u₁ = n₂u₂" (sans 26)  | T mid | x462..618  y500..528 (bl 520) · ring c(540,513)
 *  b6 | star note (script 14,red)| T st  | x660..845  y508..533 (bl 526)
 *  b7 | master relation (sans 20)| T mid | x375..705  y562..584 (bl 578) · underline y595
 *  b7 | note (script 14, green)  | T st  | x730..1007 y560..585 (bl 578)
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

const UP: [string, string][] = [
  ["tera", "10¹²"],
  ["giga", "10⁹"],
  ["mega", "10⁶"],
  ["kilo", "10³"],
  ["hecto", "10²"],
  ["deca", "10¹"],
];

const DOWN: [string, string][] = [
  ["centi", "10⁻²"],
  ["milli", "10⁻³"],
  ["micro", "10⁻⁶"],
  ["nano", "10⁻⁹"],
  ["pico", "10⁻¹²"],
  ["femto", "10⁻¹⁵"],
];

const LEN_ROWS: [string, string, number][] = [
  ["Å = 10⁻¹⁰ m · atomic", "Å = 10⁻¹⁰ m · atomic", 3],
  ["fermi = 10⁻¹⁵ m · nuclear", "fermi = 10⁻¹⁵ m · nuclear", 3],
  ["AU ≈ 1.496×10¹¹ m · Earth–Sun", "AU ≈ 1.496×10¹¹ m · Earth–Sun", 3],
  ["ly ≈ 9.46×10¹⁵ m", "ly ≈ 9.46×10¹⁵ m", 4],
  ["parsec ≈ 3.086×10¹⁶ m", "parsec ≈ 3.086×10¹⁶ m", 4],
];

const MASS_ROWS: string[] = [
  "u ≈ 1.66×10⁻²⁷ kg",
  "tonne = 10³ kg",
  "quintal = 10² kg",
];

export default function Ch01Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the absurd range */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("prefixes: taming an absurd range", "prefixes: zeros ke sailaab se bachao")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={230} y={100} size={13} fill={INK} weight={600}>
          {t("nucleus · 10⁻¹⁵ m", "nucleus · 10⁻¹⁵ m")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6.6)}>
        <T x={850} y={100} size={13} fill={INK} weight={600}>
          {t("quasar · 10²⁶ m", "quasar · 10²⁶ m")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d={`${arrowD(540, 116, 182, 116)} ${arrowD(540, 116, 898, 116)}`}
        stroke={AMBER}
        sw={2.2}
        dur={1}
      />

      {/* beat 1 — going up */}
      {UP.map(([name, pow], i) => (
        <Fade key={name} on={beat >= 1} delay={dl(1, 1.5 + i * 2.2)}>
          <Chip x={60 + 148 * i} y={146} w={130} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
            {`${name} ${pow}`}
          </Chip>
        </Fade>
      ))}

      {/* beat 2 — going down + the costume line */}
      {DOWN.map(([name, pow], i) => (
        <Fade key={name} on={beat >= 2} delay={dl(2, 1 + i * 2.8)}>
          <Chip x={60 + 148 * i} y={200} w={130} h={36} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
            {`${name} ${pow}`}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 19)}>
        <T x={350} y={266} size={15} fill={AMBER_DARK} script>
          {t(
            "the metre stays the metre — prefixes are costumes",
            "metre wahi rehta hai — prefix sirf costume hai"
          )}
        </T>
      </Fade>

      {/* beats 3-4 — practical length column */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={70} y={306} size={14} fill={MUTED} script anchor="start">
          {t("practical length", "practical length")}
        </T>
      </Fade>
      {LEN_ROWS.map(([rEn, rHi, k], i) => (
        <Fade
          key={rEn}
          on={beat >= k}
          delay={dl(k, k === 3 ? 2.5 + i * 5.5 : 1 + (i - 3) * 5)}
        >
          <T x={70} y={332 + i * 30} size={14} fill={INK} weight={600} anchor="start">
            {t(rEn, rHi)}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={70} y={486} size={14} fill={GREEN} script anchor="start">
          {t("AU < ly < parsec — smallest → largest", "AU < ly < parsec — chhota → bada")}
        </T>
      </Fade>

      {/* beat 5 — practical mass & time column */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={560} y={306} size={14} fill={MUTED} script anchor="start">
          {t("practical mass · time", "practical mass · time")}
        </T>
      </Fade>
      {MASS_ROWS.map((row, i) => (
        <Fade key={row} on={beat >= 5} delay={dl(5, 1.5 + i * 3.5)}>
          <T x={560} y={332 + i * 30} size={14} fill={INK} weight={600} anchor="start">
            {row}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={560} y={422} size={14} fill={AMBER_DARK} script anchor="start">
          {t("min · hour · day — but s stays base", "min · ghanta · din — par s hi base")}
        </T>
      </Fade>

      {/* beat 6 — the most useful line in the subtopic */}
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={540} y={520} size={26} fill={INK} weight={800}>
          n₁u₁ = n₂u₂
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5.2)}
        d={ringD(540, 513, 92, 27)}
        stroke={AMBER}
        sw={3}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={660} y={526} size={14} fill={RED} script anchor="start">
          {t("the most useful line here", "sabse kaam ki line yahi")}
        </T>
      </Fade>

      {/* beat 7 — the master relation */}
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={578} size={20} fill={INK} weight={700}>
          n₂ = n₁ (M₁/M₂)ᵃ (L₁/L₂)ᵇ (T₁/T₂)ᶜ
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 6)}
        d="M 375 595 C 480 592, 600 597, 705 593"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={730} y={578} size={14} fill={GREEN} script anchor="start">
          {t("every conversion = this + arithmetic", "har conversion = yahi + arithmetic")}
        </T>
      </Fade>
    </Scene>
  );
}
