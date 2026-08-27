/**
 * M11 Ch14 · Section 9 — "From words to a subset, and testing relationships"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,7.77,19.2,32.17,57.0,68.44,78.59]):
 *  0 heading
 *  1 B1: write S FIRST — never skip this
 *  2 B2: scan every outcome, keep only those meeting the condition
 *  3 GUARDRAIL (HIGH): quantifier trap — 2-coin roster, 3 different subsets
 *  4 C: mutually exclusive? A∩B=∅ → YES
 *  5 C: exhaustive? A∪B∪⋯=S → YES
 *  6 GUARDRAIL: partition needs BOTH tests together
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "B1 — write S first.." (15, ink)          | T mid | x270..810 y120..135
 *  b2 | "B2 — scan every outcome.." (15, ink)      | T mid | x220..860 y146..161
 *  b3 | quantifier caption (13, red)                | T mid | x270..810 y174..187
 *  b3 | 2-coin roster (4 cards w54 h44)              | Draw/T| x396..684 y198..242
 *  b3 | 3 quantifier lines (13.5, ink)                | T mid | x300..780 y257..317
 *  divider y330
 *  b4 | check + "mutually exclusive? A∩B=∅"(15)       | Draw/T| x260..820 y346..361
 *  b5 | check + "exhaustive? A∪B∪⋯=S"(15)              | Draw/T| x270..810 y374..389
 *  b6 | guardrail chip (red, w720 h46)                  | Chip  | x180..900 y405..451
 */

import React from "react";
import { TSpan } from 'react-native-svg';
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
  GREEN,
  RED,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

const COIN_S = ["HH", "HT", "TH", "TT"];

export default function M11Ch14Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cardW = 54;
  const cardGap = 24;
  const cardStep = cardW + cardGap;
  const startX = 540 - (4 * cardW + 3 * cardGap) / 2; // 396

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("same S, three different subsets — read the quantifier slowly", "same S, teen alag subsets — quantifier dhyaan se")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Words → subset, and testing relationships", "Words → subset, aur relationships test karna")}
        </T>
      </Fade>

      {/* beat 1 — B1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={128} size={15} fill={INK} weight={600}>
          <TSpan fill={AMBER_DARK} fontWeight={800}>{"B1 — "}</TSpan>
          {t("write the full sample space FIRST. Never skip this.", "poora sample space PEHLE likho. Kabhi skip mat karo.")}
        </T>
      </Fade>

      {/* beat 2 — B2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={154} size={15} fill={INK} weight={600}>
          <TSpan fill={AMBER_DARK} fontWeight={800}>{"B2 — "}</TSpan>
          {t("scan every outcome, keep only what fits = the event", "har outcome scan karo, jo fit ho wahi rakho = event")}
        </T>
      </Fade>

      {/* beat 3 — GUARDRAIL: quantifier trap */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={183} size={13} fill={RED} script weight={700}>
          {t("mind the quantifier — same S, three different subsets:", "quantifier dhyaan se — same S, teen alag subsets:")}
        </T>
      </Fade>
      {COIN_S.map((v, i) => {
        const x = startX + i * cardStep;
        return (
          <React.Fragment key={v}>
            <Draw on={beat >= 3} delay={dl(3, 0.6 + i * 0.2)} d={roundRectD(x, 198, cardW, 44, 7)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
            <Fade on={beat >= 3} delay={dl(3, 0.75 + i * 0.2)}>
              <T x={x + cardW / 2} y={198 + 44 / 2 + 6} size={15} fill={INK} weight={700}>
                {v}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={540} y={264} size={13.5} fill={INK} weight={600}>
          {t("at least one H  →  {HH, HT, TH}", "at least one H  →  {HH, HT, TH}")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={540} y={286} size={13.5} fill={INK} weight={600}>
          {t("exactly one H  →  {HT, TH}", "exactly one H  →  {HT, TH}")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={540} y={308} size={13.5} fill={INK} weight={600}>
          {t("at most one H  →  {HT, TH, TT}", "at most one H  →  {HT, TH, TT}")}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 4} delay={0} d={lineD(140, 328, 940, 328)} stroke={MUTED} sw={1.4} dur={0.5} />

      {/* beat 4 — test mutually exclusive */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={checkD(272, 350, 16)} stroke={GREEN} sw={2.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={300} y={357} size={15} fill={INK} anchor="start" weight={600}>
          {t("mutually exclusive? compute A∩B — if = ∅, YES", "mutually exclusive? A∩B nikaalo — agar = ∅, YES")}
        </T>
      </Fade>

      {/* beat 5 — test exhaustive */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={checkD(272, 380, 16)} stroke={GREEN} sw={2.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={300} y={387} size={15} fill={INK} anchor="start" weight={600}>
          {t("exhaustive? compute A∪B∪⋯ — if = S, YES", "exhaustive? A∪B∪⋯ nikaalo — agar = S, YES")}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL: partition needs both */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={180} y={412} w={720} h={46} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("partition? BOTH tests must pass — never assume the other", "partition? DONO tests pass hone chahiye — assume mat karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
