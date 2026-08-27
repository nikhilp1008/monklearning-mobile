/**
 * P12Ch05 · Section 40 — "Speed trap: classify three materials by eye"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: DRIFT.
 *
 * WHAT THE BOARD USED TO TEACH: a different speed trap altogether — inserting
 * an iron core into a solenoid, H = nI unchanged, B = μ_r B₀. The voice never
 * mentions a solenoid, a current or a core here.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: three relative permeabilities —
 * 0.9996, 1.0004 and 850 — to be classified by eye, with no calculation. Then
 * the trap (a value below one misread as paramagnetic, since both look like
 * small numbers near 1) and the subtler trap (0.9996 dismissed as "non
 * magnetic").
 *
 * Susceptibilities shown follow directly from μ_r = 1 + χ, which is all the
 * voice uses: 0.9996 → χ = −4 × 10⁻⁴ · 1.0004 → χ = +4 × 10⁻⁴ · 850 → χ = 849.
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 15.3, 32.6, 45.0, 61.0, 78.3,
 * 95.1, 115.4):
 *   0  "a speed trap — no calculation in it"     title + subtitle
 *   1  "where the three sit relative to one"     the μ_r axis, the line at 1, 3 dots
 *   2  "the three values given are …"            the numbers + the zoomed inset
 *   3  "0.9996 is below one ⇒ diamagnetic"       verdict card 1
 *   4  "1.0004 sits just above one ⇒ para"       verdict card 2
 *   5  "850 is far above one ⇒ ferro"            verdict card 3
 *   6  "the trap the question is built around"   the misread + the anchor rule
 *   7  "a second, subtler trap"                  "nearly 1 ≠ non-magnetic"
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Card({
  x, on, delay, colour, value, position, chi, family,
}: {
  x: number; on: boolean; delay: number; colour: string;
  value: string; position: string; chi: string; family: string;
}) {
  return (
    <G>
      <Fade on={on} delay={delay}>
        <Rect x={x} y={350} width={320} height={120} rx={12} fill={CREAM} stroke={colour} strokeWidth={2} />
      </Fade>
      <Fade on={on} delay={delay + 0.3}>
        <T x={x + 160} y={384} size={19} fill={INK} weight={900}>{value}</T>
      </Fade>
      <Fade on={on} delay={delay + 0.6}>
        <T x={x + 160} y={410} size={13} fill={INK_LIGHT} weight={700}>{position}</T>
        <T x={x + 160} y={432} size={13} fill={colour} weight={800}>{chi}</T>
      </Fade>
      <Fade on={on} delay={delay + 0.9}>
        <T x={x + 160} y={459} size={15} fill={colour} weight={900}>{family}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch05Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Classify three materials by eye", "Teen materials, sirf dekh kar pehchano")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 316 58 C 440 54, 640 62, 764 56" stroke={RED} sw={2.2} dur={0.55} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t("there is no calculation in this at all — if you start computing χ, stop",
             "isme calculation hai hi nahi — agar χ nikalne lago, to ruk jao")}
        </T>
      </Fade>

      {/* ── beat 1 — the μ_r axis and the three positions ──────────── */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} dur={0.8} d={arrowD(90, 160, 1010, 160)} stroke={INK} sw={2} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} dur={0.4} d="M 300 122 L 300 198" stroke={INK} sw={2.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={300} y={114} size={13} fill={INK} weight={900}>μ_r = 1</T>
        <T x={1010} y={184} size={12.5} fill={INK_LIGHT} weight={700} anchor="end">μ_r</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={286} cy={160} r={7} fill={AMBER_DARK} />
        <Circle cx={314} cy={160} r={7} fill={GREEN_DARK} />
        <Circle cx={880} cy={160} r={7} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={880} y={138} size={12.5} fill={RED} weight={800}>
          {t("far off to the right", "bahut door dayein")}
        </T>
        <T x={430} y={186} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("one just to the left, one just to the right — too close to tell apart here",
             "ek zara bayein, ek zara dayein — yahan alag pehchanna mushkil")}
        </T>
      </Fade>

      {/* ── beat 2 — the numbers, and the zoom on the crowded pair ─── */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} dur={0.5} d="M 282 170 L 300 214" stroke={MUTED} sw={1.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.3)} dur={0.5} d="M 318 170 L 760 214" stroke={MUTED} sw={1.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Rect x={300} y={214} width={460} height={112} rx={10} fill={CREAM} stroke={MUTED} strokeWidth={1.6} />
        <T x={530} y={236} size={12.5} fill={MUTED} weight={800}>
          {t("zoom — a whisker either side of 1", "zoom — 1 ke dono taraf zara sa")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.0)} dur={0.6} d={arrowD(326, 300, 736, 300)} stroke={INK} sw={1.8} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} dur={0.3} d="M 530 288 L 530 312" stroke={INK} sw={2.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={530} y={320} size={12} fill={INK} weight={800}>1</T>
        <Circle cx={430} cy={300} r={6} fill={AMBER_DARK} />
        <Circle cx={630} cy={300} r={6} fill={GREEN_DARK} />
        <T x={430} y={280} size={13} fill={AMBER_DARK} weight={900}>0.9996</T>
        <T x={630} y={280} size={13} fill={GREEN_DARK} weight={900}>1.0004</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={880} y={186} size={15} fill={RED} weight={900}>850</T>
        <T x={800} y={232} size={13} fill={INK} weight={800} anchor="start">
          {t("three relative permeabilities:", "teen relative permeabilities:")}
        </T>
        <T x={800} y={254} size={13} fill={INK} weight={800} anchor="start">
          {t("name the family for each", "har ek ki family batao")}
        </T>
      </Fade>

      {/* ── beats 3, 4, 5 — the three verdicts ─────────────────────── */}
      <Card
        x={60} on={beat >= 3} delay={dl(3, 0.2)} colour={AMBER_DARK}
        value="μ_r = 0.9996"
        position={t("below 1", "1 se neeche")}
        chi="χ = μ_r − 1 = −4 × 10⁻⁴"
        family="DIAMAGNETIC"
      />
      <Card
        x={380} on={beat >= 4} delay={dl(4, 0.2)} colour={GREEN_DARK}
        value="μ_r = 1.0004"
        position={t("just above 1", "1 se zara upar")}
        chi="χ = +4 × 10⁻⁴"
        family="PARAMAGNETIC"
      />
      <Card
        x={700} on={beat >= 5} delay={dl(5, 0.2)} colour={RED}
        value="μ_r = 850"
        position={t("far above 1", "1 se bahut upar")}
        chi="χ ≈ 849"
        family="FERROMAGNETIC"
      />

      {/* ── beat 6 — the trap and the anchor rule ──────────────────── */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={60} y={496} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE TRAP: a value below one gets read as paramagnetic — both look like small numbers near 1,",
             "TRAP: 1 se neeche wale ko paramagnetic padh liya jaata hai — dono 1 ke paas chhote number lagte hain,")}
        </T>
        <T x={60} y={516} size={13.5} fill={RED} weight={800} anchor="start">
          {t("and the whole difference sits in the fourth decimal place.",
             "aur poora farq chauthe decimal place mein hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={60} y={540} size={14} fill={GREEN_DARK} weight={900} anchor="start">
          {t("ANCHOR THE RULE:   below 1 = dia   ·   a hair above 1 = para   ·   far above 1 = ferro",
             "RULE YAAD RAKHO:   1 se neeche = dia   ·   1 se zara upar = para   ·   bahut upar = ferro")}
        </T>
      </Fade>

      {/* ── beat 7 — the subtler trap ──────────────────────────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} dur={0.4} d="M 60 554 H 1020" stroke={MUTED} sw={1.2} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={60} y={576} size={13} fill={INK} weight={700} anchor="start">
          {t("Subtler trap: 0.9996 is so nearly 1 that students call the material non-magnetic. That is wrong.",
             "Doosra trap: 0.9996 itna 1 ke paas hai ki log ise non-magnetic keh dete hain. Yeh galat hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={60} y={594} size={13} fill={RED} weight={800} anchor="start">
          {t("Diamagnetism is entirely real — merely feeble, and that feebleness is exactly what the fourth decimal is telling you.",
             "Diamagnetism poori tarah asli hai — bas kamzor, aur wahi kamzori chautha decimal bata raha hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
