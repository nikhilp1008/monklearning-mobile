/**
 * P12Ch04 · Section 32 — "Worked Examples One and Two: Shunt Value, and the Minus G Correction"
 * Subtopic: Galvanometers and Their Conversion
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   Two stacks of numbered prose ("1. Given Parameters…", "2. Current through
 *   Shunt…") plus a summary block and a footer chip. FOUR drawn strokes on the
 *   whole board — the title underline, two horizontal rules and the badge
 *   circles — and every element gated on beats 0, 1, 5 and 9, so each whole
 *   solution dumped at once and the board then sat unchanged through beats
 *   2, 3, 4 (60 s of substitution) and 6, 7, 8 (52 s of trap-spotting). The
 *   narration says "the diagram makes that concrete", and there was no
 *   diagram: no coil, no shunt, no series chain, no current split.
 *
 * WHAT THE NARRATION TEACHES
 *   Example 1 (CBSE): G = 50 Ω, I_g = 2.0 mA, range I = 5.0 A. The range is
 *   2500× the coil's limit, so nearly the whole current is diverted:
 *   S = I_g G/(I − I_g) = (2.0×10⁻³ × 50)/(5.0 − 0.002) = 0.10/4.998
 *     = 0.0200 Ω, in PARALLEL.  Sanity: a shunt lives in mΩ…Ω.
 *   Example 2 (NEET): G = 60 Ω, I_g = 1.0 mA, V = 3.0 V. Two independent
 *   traps — the topological one (parallel instead of series) and the
 *   arithmetic one (dropping − G):
 *   R = V/I_g − G = 3.0/(1.0×10⁻³) − 60 = 3000 − 60 = 2940 Ω, in SERIES.
 *   The correction is 60 of 3000 = 2%, cosmetic here but not in a 0.1 V meter.
 *
 * BEAT MAP (n_reveals = 10, gates 0..9)
 *   0  framing                    title + drawn underline + "one decision" line
 *   1  Example 1 read out         heading, the data, and the 2500× scale note
 *   2  "the diagram makes it…"    the current-split circuit is DRAWN: coil branch
 *                                 (2.0 mA) over shunt branch (4.998 A)
 *   3  substitute                 S = I_g G/(I − I_g) → 0.10/4.998 → 0.0200 Ω
 *   4  in parallel + sanity       PARALLEL chip + the mΩ…Ω size check
 *   5  "the NEET speed trap"      divider + Example 2 heading
 *   6  Example 2 read out         the data and the question
 *   7  the two traps              WRONG parallel circuit (crossed out) beside the
 *                                 RIGHT series chain, + both trap lines
 *   8  do it properly             R = V/I_g − G → 3000 − 60 → 2940 Ω
 *   9  in series + the 2% note    SERIES chip, the 2% observation, closing chip
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch04Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Worked examples 1 & 2 — the shunt, and the − G",
             "Worked examples 1 & 2 — the shunt, and the − G")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 250 60 C 430 56, 660 64, 830 59" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={80} size={13} fill={MUTED} weight={600}>
          {t("both are routine arithmetic wrapped around one decision: which recipe?",
             "both are routine arithmetic wrapped around one decision: which recipe?")}
        </T>
      </Fade>

      {/* ================= LEFT — EXAMPLE 1 ================= */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={112} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 1 · CBSE — MAKE A 5.0 A AMMETER", "EXAMPLE 1 · CBSE — MAKE A 5.0 A AMMETER")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={44} y={136} size={13} fill={INK} weight={700} anchor="start">
          G = 50 Ω · I_g = 2.0 mA at full scale · want I = 5.0 A
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={44} y={158} size={12.8} fill={AMBER_DARK} weight={700} anchor="start">
          {t("5.0 A ⁄ 2.0 mA = 2500× — nearly all of it must be diverted",
             "5.0 A ⁄ 2.0 mA = 2500× — nearly all of it must be diverted")}
        </T>
      </Fade>

      {/* beat 2 — the current-split circuit, DRAWN */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(48, 216, 88, 216)} stroke={GREEN_DARK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={46} y={204} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">I = 5.0 A</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 92 216 V 188 H 238" stroke={INK} sw={2.2} dur={0.55} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 274 188 H 424 V 216" stroke={INK} sw={2.2} dur={0.55} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Circle cx={256} cy={188} r={18} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={256} y={193} size={13} fill={INK} weight={800}>G</T>
        <T x={256} y={162} size={12.5} fill={INK_LIGHT} weight={700}>50 Ω</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d="M 92 216 V 246 H 204" stroke={INK} sw={2.2} dur={0.55} />
      <Draw on={beat >= 2} delay={dl(2, 2.0)} d="M 264 246 H 424 V 216" stroke={INK} sw={2.2} dur={0.55} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Rect x={204} y={233} width={60} height={26} rx={4} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={234} y={251} size={13} fill={GREEN_DARK} weight={800}>S</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Circle cx={92} cy={216} r={4.5} fill={INK} />
        <Circle cx={424} cy={216} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={arrowD(424, 216, 466, 216)} stroke={GREEN_DARK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={352} y={178} size={12.5} fill={INK_LIGHT} weight={800}>I_g = 2.0 mA</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={348} y={274} size={12.5} fill={GREEN_DARK} weight={800}>I − I_g = 4.998 A</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={44} y={300} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("the shunt is no accessory — it carries almost the whole current",
             "the shunt is no accessory — it carries almost the whole current")}
        </T>
      </Fade>

      {/* beat 3 — the substitution */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={332} size={14} fill={INK} weight={900} anchor="start">S = I_g G ⁄ (I − I_g)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={44} y={358} size={13.5} fill={INK} weight={700} anchor="start">
          = (2.0 × 10⁻³ × 50) ⁄ (5.0 − 0.002)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={44} y={382} size={13.5} fill={INK} weight={700} anchor="start">= 0.10 ⁄ 4.998</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.0)} d="M 44 394 H 360" stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={44} y={420} size={16} fill={RED} weight={900} anchor="start">S = 0.0200 Ω</T>
      </Fade>

      {/* beat 4 — parallel + the size check */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Chip x={44} y={436} w={440} h={32} fill={GREEN} textFill="#ffffff" size={14}>
          {t("connected in PARALLEL with the coil", "connected in PARALLEL with the coil")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={44} y={496} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("sanity check — a shunt always lands in mΩ … a few Ω",
             "sanity check — a shunt always lands in mΩ … a few Ω")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={44} y={518} size={12.5} fill={RED} weight={800} anchor="start">
          {t("thousands of ohms would mean you used the voltmeter formula",
             "thousands of ohms would mean you used the voltmeter formula")}
        </T>
      </Fade>

      {/* ================= RIGHT — EXAMPLE 2 ================= */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 524 96 V 534" stroke={MUTED} sw={1.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={556} y={112} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 2 · NEET SPEED TRAP — TWO HALVES", "EXAMPLE 2 · NEET SPEED TRAP — TWO HALVES")}
        </T>
      </Fade>

      {/* beat 6 — the data */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={556} y={136} size={13} fill={INK} weight={700} anchor="start">
          G = 60 Ω · I_g = 1.0 mA at full scale · want V = 3.0 V
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={556} y={158} size={12.8} fill={INK_LIGHT} weight={700} anchor="start">
          {t("find the resistance — and say how it is connected",
             "find the resistance — and say how it is connected")}
        </T>
      </Fade>

      {/* beat 7 — the wrong topology beside the right one */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={656} y={186} size={13.5} fill={RED} weight={800}>✗ parallel</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 566 236 H 596 M 716 236 H 746" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d="M 596 236 V 210 H 632" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d="M 668 210 H 716 V 236" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Circle cx={650} cy={210} r={16} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={650} y={215} size={12.5} fill={INK} weight={800}>G</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d="M 596 236 V 262 H 622" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d="M 678 262 H 716 V 236" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <Rect x={622} y={250} width={56} height={24} rx={4} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={650} y={267} size={12.5} fill={INK} weight={800}>R</T>
        <Circle cx={596} cy={236} r={4} fill={INK} />
        <Circle cx={716} cy={236} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.8)} d={crossD(580, 196, 152, 82)} stroke={RED} sw={2.6} dur={0.5} />

      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={900} y={186} size={13.5} fill={GREEN_DARK} weight={800}>✓ series</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d="M 800 236 H 836 M 868 236 H 896 M 960 236 H 1006" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 2.7)}>
        <Circle cx={852} cy={236} r={16} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={852} y={241} size={12.5} fill={INK} weight={800}>G</T>
        <Rect x={896} y={222} width={64} height={28} rx={4} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={928} y={242} size={13} fill={GREEN_DARK} weight={800}>R</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.0)} d="M 802 250 V 268 M 1004 250 V 268" stroke={MUTED} sw={1.4} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 3.2)}
        d={`${arrowD(903, 268, 802, 268)} ${arrowD(903, 268, 1004, 268)}`} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={903} y={288} size={12.5} fill={AMBER_DARK} weight={800}>V = 3.0 V full scale</T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 4.0)}>
        <T x={556} y={320} size={12.8} fill={RED} weight={800} anchor="start">
          {t("trap 1 · connecting R in parallel, out of shunt habit",
             "trap 1 · connecting R in parallel, out of shunt habit")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={556} y={342} size={12.8} fill={RED} weight={800} anchor="start">
          {t("trap 2 · writing R = V ⁄ I_g and dropping the − G",
             "trap 2 · writing R = V ⁄ I_g and dropping the − G")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.2)}>
        <T x={556} y={364} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("independent errors — you can get one right and the other wrong",
             "independent errors — you can get one right and the other wrong")}
        </T>
      </Fade>

      {/* beat 8 — do it properly */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={556} y={396} size={14} fill={INK} weight={900} anchor="start">
          R = V ⁄ I_g − G = 3.0 ⁄ (1.0 × 10⁻³) − 60
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.4)}>
        <T x={556} y={420} size={13.5} fill={INK} weight={700} anchor="start">= 3000 − 60</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 2.0)} d="M 556 432 H 872" stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 2.4)}>
        <T x={556} y={458} size={16} fill={GREEN_DARK} weight={900} anchor="start">R = 2940 Ω</T>
      </Fade>

      {/* beat 9 — in series, the 2% note, closing */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <Chip x={556} y={474} w={480} h={32} fill={GREEN} textFill="#ffffff" size={14}>
          {t("connected in SERIES — say it, it is a mark", "connected in SERIES — say it, it is a mark")}
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={556} y={518} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("the − G is 60 out of 3000 here — just 2%, and examiners test exactly that",
             "the − G is 60 out of 3000 here — just 2%, and examiners test exactly that")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.6)}>
        <Chip x={44} y={552} w={992} h={40} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ S = 0.0200 Ω in PARALLEL · R = 2940 Ω in SERIES · in a 0.1 V voltmeter the − G stops being cosmetic",
             "★ S = 0.0200 Ω in PARALLEL · R = 2940 Ω in SERIES · in a 0.1 V voltmeter the − G stops being cosmetic")}
        </Chip>
      </Fade>
    </Scene>
  );
}
