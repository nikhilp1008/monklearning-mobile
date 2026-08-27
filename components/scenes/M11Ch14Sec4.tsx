/**
 * M11 Ch14 · Section 4 — "The two silent assumptions behind every event"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,12.37,22.7,34.9,57.69,65.19,76.8]):
 *  0 heading
 *  1 Assumption 1: S must be well-defined and COMPLETE
 *  2 GUARDRAIL: mis-specify S → every event is wrong (#1 silent error)
 *  3 example: die roster missing "6" — silently breaks every event
 *  4 Assumption 2: ordered stages → ORDERED pairs
 *  5 example: coin→die builds the ordered pair (H, 4)
 *  6 GUARDRAIL: (H,4) ≠ (4,H) — collapsing order shrinks S
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b0 | heading (20, ink)                      | T mid  | x300..780 y88..111
 *  b1 | "Assumption 1 — S must be..." (17,ink)  | T mid  | x230..850 y124..147
 *  b2 | guardrail chip (red, w760, h38)         | Chip   | x160..920 y155..193
 *  b3 | 6 slots (w44 h50), 6th dashed red "?"   | Draw/T | x358..722 y215..265
 *  b3 | "6 missing → silently breaks.." (13,red)| T mid  | x300..780 y285..298
 *  divider line y305
 *  b4 | "Assumption 2 — ordered stages.." (17)  | T mid  | x230..850 y325..348
 *  b5 | coin "H" card + arrow + die "4" card    | Draw/T | x380..620 y360..424
 *  b5 | "= (H, 4)" (22, green)                  | T st   | x650..900 y400..424
 *  b5 | caption "order is part of identity"(13) | T mid  | x300..780 y443..456
 *  b6 | "(H,4) ≠ (4,H)" (18, ink)                | T mid  | x420..660 y483..507
 *  b6 | "collapsing order shrinks S" (14,red)    | T mid  | x360..720 y518..532
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
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

export default function M11Ch14Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const slotW = 44;
  const slotH = 50;
  const slotGap = 20;
  const slotStep = slotW + slotGap;
  const slotStartX = 540 - (6 * slotW + 5 * slotGap) / 2; // 358
  const rosterVals = [1, 2, 3, 4, 5];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("get the setup wrong, and every event is wrong too", "setup galat, toh har event galat")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={20} fill={INK} weight={700}>
          {t("Two silent assumptions behind every event", "Har event ke peeche do chup assumptions")}
        </T>
      </Fade>

      {/* beat 1 — Assumption 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={139} size={17} fill={INK} weight={700}>
          {t("Assumption 1 — S must be well-defined & COMPLETE", "Assumption 1 — S well-defined & COMPLETE hona chahiye")}
        </T>
      </Fade>

      {/* beat 2 — guardrail */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={160} y={155} w={760} h={38} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("Mis-specify S → every event is WRONG (#1 silent error)", "S galat → har event WRONG (#1 chup mistake)")}
        </Chip>
      </Fade>

      {/* beat 3 — die roster missing a face */}
      {rosterVals.map((face, i) => {
        const x = slotStartX + i * slotStep;
        return (
          <React.Fragment key={face}>
            <Draw
              on={beat >= 3}
              delay={dl(3, 0.2 + i * 0.15)}
              d={roundRectD(x, 215, slotW, slotH, 7)}
              stroke={AMBER}
              sw={2}
              dur={0.3}
            />
            <Fade on={beat >= 3} delay={dl(3, 0.35 + i * 0.15)}>
              <T x={x + slotW / 2} y={215 + slotH / 2 + 7} size={18} fill={INK} weight={700}>
                {face}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.2)}
        d={roundRectD(slotStartX + 5 * slotStep, 215, slotW, slotH, 7)}
        stroke={RED}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={slotStartX + 5 * slotStep + slotW / 2} y={215 + slotH / 2 + 8} size={22} fill={RED} weight={800}>
          ?
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={540} y={293} size={13} fill={RED} script weight={700}>
          {t("6 missing → silently breaks every event", "6 missing → chupke se har event tootta hai")}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 4} delay={0} d={lineD(100, 306, 980, 306)} stroke={MUTED} sw={1.4} dur={0.5} />

      {/* beat 4 — Assumption 2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={342} size={17} fill={INK} weight={700}>
          {t("Assumption 2 — ordered stages → ORDERED pairs", "Assumption 2 — ordered stages → ORDERED pairs")}
        </T>
      </Fade>

      {/* beat 5 — coin then die builds (H, 4) */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={roundRectD(380, 360, 60, 64, 8)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={410} y={399} size={20} fill={INK} weight={700}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={arrowD(448, 392, 552, 392)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={roundRectD(560, 360, 60, 64, 8)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={590} y={399} size={20} fill={INK} weight={700}>
          4
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={650} y={399} size={22} fill={INK} anchor="start" weight={700}>
          {"="}
        </T>
        <T x={680} y={399} size={22} fill={GREEN} anchor="start" weight={800}>
          {"(H, 4)"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={540} y={450} size={13} fill={INK}>
          {t("the order of the stages is part of the outcome", "stages ka order, outcome ka hissa hai")}
        </T>
      </Fade>

      {/* beat 6 — guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={496} size={18} fill={INK} weight={700}>
          {"(H, 4) ≠ (4, H)"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={540} y={526} size={14} fill={RED} script weight={700}>
          {t("collapsing order shrinks S — quietly", "order collapse karo → S chupke se chota ho jaata hai")}
        </T>
      </Fade>
    </Scene>
  );
}
