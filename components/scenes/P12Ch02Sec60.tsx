/**
 * P12Ch02 · Section 60 — "CBSE level: three capacitors in series and in parallel"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 *
 * THREE DEFECTS FIXED (2026-08-21):
 *
 * 1. THE BOARD WORKED A DIFFERENT PROBLEM FROM THE VOICE. The scene was built
 *    for an older "NEET speed trap: equivalent capacitance with a wire bridge"
 *    section: three identical capacitors C, two crossover bridges, the C/3
 *    distractor and the answer C_eq = 3C. The narration now at position 60 is a
 *    plain CBSE numerical on 2 µF, 3 µF and 6 µF — no bridges, no nodes, no
 *    multiple-choice options. Narration is authoritative, so every number on
 *    the board now comes from it, with the arithmetic redone:
 *        1/C_s = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1  ⇒  C_s = 1 µF
 *        C_p  = 2 + 3 + 6 = 11 µF
 *        checks: 1 µF is below the smallest (2 µF); 11 µF is above the
 *        largest (6 µF)
 *
 * 2. A WHOLE BLOCK NEVER RENDERED. The warning badge, its heading, its two
 *    lines and the footer chip were gated on `beat >= 7`, but this section has
 *    7 narration segments so useBeat only ever returns 0..6.
 *
 * 3. DEAD AIR. The old gate set was {0,1,3,4,6,7}: beats 2 and 5 drew nothing.
 *
 * Beats now map 1:1 onto the seven segments
 * (board_reveal_at_english [0, 3.64, 11.66, 20.4, 24.41, 34.25, 38.98]):
 *
 *   0  "a clean numerical to anchor both formulas"  title
 *   1  "two, three and six microfarads"             the three capacitors
 *   2  "add the reciprocals over a common           3/6 + 2/6 + 1/6 = 1
 *       denominator of six"
 *   3  "the series capacitance is one microfarad"   C_s = 1 µF
 *   4  "forgetting to flip back is a common slip"   the flip-back warning
 *   5  "for parallel, they simply add: eleven"      C_p = 11 µF
 *   6  "run the sanity checks"                      both checks + chip
 */

import React from "react";
import { G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch02Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("2 µF, 3 µF and 6 µF — the equivalent capacitance in series and in parallel",
             "2 µF, 3 µF and 6 µF — the equivalent capacitance in series and in parallel")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.0)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THE THREE CAPACITORS AND THE SERIES SUM */}
      <G transform="translate(40, 84)">
        {/* beat 1 — the given values */}
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THREE CAPACITORS ARE AVAILABLE", "THREE CAPACITORS ARE AVAILABLE")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          {/* 2 µF */}
          <Line x1="100" y1="120" x2="100" y2="180" stroke={RED} strokeWidth={3.2} />
          <Line x1="120" y1="120" x2="120" y2="180" stroke={RED} strokeWidth={3.2} />
          <T x={110} y={208} size={16} fill={RED} weight={900} anchor="middle">2 µF</T>

          {/* 3 µF */}
          <Line x1="210" y1="120" x2="210" y2="180" stroke={GREEN} strokeWidth={3.2} />
          <Line x1="230" y1="120" x2="230" y2="180" stroke={GREEN} strokeWidth={3.2} />
          <T x={220} y={208} size={16} fill={GREEN} weight={900} anchor="middle">3 µF</T>

          {/* 6 µF */}
          <Line x1="320" y1="120" x2="320" y2="180" stroke={AMBER_DARK} strokeWidth={3.2} />
          <Line x1="340" y1="120" x2="340" y2="180" stroke={AMBER_DARK} strokeWidth={3.2} />
          <T x={330} y={208} size={16} fill={AMBER_DARK} weight={900} anchor="middle">6 µF</T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.3)}>
          <T x={45} y={244} anchor="start" size={13.5} fill={INK} weight={800}>
            {t("Find the equivalent capacitance both in series and in parallel.",
               "Find the equivalent capacitance both in series and in parallel.")}
          </T>
        </Fade>

        {/* beat 2 — reciprocals over a common denominator of six */}
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          <T x={45} y={288} anchor="start" size={15} fill={INK} weight={800}>
            1/C_s = 1/2 + 1/3 + 1/6
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.6)}>
          <T x={45} y={318} anchor="start" size={15} fill={AMBER_DARK} weight={900}>
            = 3/6 + 2/6 + 1/6 = 6/6 = 1
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: FLIP BACK, THEN THE PARALLEL SUM */}
      <G transform="translate(560, 84)">
        {/* beat 3 — the series answer */}
        <Badge n={2} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FLIP IT BACK — THEN DO THE EASY ONE", "FLIP IT BACK — THEN DO THE EASY ONE")}
          </T>
        </Fade>

        <Fade on={beat >= 3} delay={dl(3, 0.8)}>
          <T x={45} y={76} size={18} fill={GREEN} weight={900} anchor="start">
            1/C_s = 1  ⇒  C_s = 1 µF
          </T>
        </Fade>

        {/* beat 4 — the classic slip */}
        <Fade on={beat >= 4} delay={dl(4, 0.2)}>
          <T x={45} y={116} size={13.5} fill={RED} weight={800} anchor="start">
            {t("Watch that last step: 1/C_s = 1 is not the answer — C_s = 1 µF is.",
               "Watch that last step: 1/C_s = 1 is not the answer — C_s = 1 µF is.")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 0.55)}>
          <T x={45} y={140} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
            {t("forgetting to flip the reciprocal back is a very common slip",
               "forgetting to flip the reciprocal back is a very common slip")}
          </T>
        </Fade>

        {/* beat 5 — the parallel answer */}
        <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M 45 162 L 450 162" stroke={INK} sw={1.8} dur={0.5} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={204} size={18} fill={GREEN} weight={900} anchor="start">
            C_p = 2 + 3 + 6 = 11 µF
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.9)}>
          <T x={45} y={234} anchor="start" size={13} fill={MUTED} weight={600}>
            (in parallel the capacitances simply add — no reciprocals at all)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: THE SANITY CHECKS */}
      <G transform="translate(40, 430)">
        {/* beat 6 */}
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("NOW RUN THE SANITY CHECKS", "NOW RUN THE SANITY CHECKS")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 0.8)}>
          <T x={45} y={52} size={14.5} anchor="start" fill={GREEN} weight={900}>
            {t("C_s = 1 µF sits below the smallest member, which was 2 µF.  ✓",
               "C_s = 1 µF sits below the smallest member, which was 2 µF.  ✓")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.1)}>
          <T x={45} y={78} size={14.5} anchor="start" fill={GREEN} weight={900}>
            {t("C_p = 11 µF sits above the largest member, which was 6 µF.  ✓",
               "C_p = 11 µF sits above the largest member, which was 6 µF.  ✓")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.4)}>
          <T x={45} y={102} size={12.5} anchor="start" fill={INK} weight={700}>
            {t("Both checks hold, so the answers are trustworthy.",
               "Both checks hold, so the answers are trustworthy.")}
          </T>
        </Fade>
      </G>

      {/* beat 6 — footer */}
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ 2 µF, 3 µF, 6 µF → C_series = 1 µF (below the smallest) · C_parallel = 11 µF (above the largest)",
            "★ 2 µF, 3 µF, 6 µF → C_series = 1 µF (below the smallest) · C_parallel = 11 µF (above the largest)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
