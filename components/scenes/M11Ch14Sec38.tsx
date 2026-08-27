/**
 * M11 Ch14 · Section 38 — "Worked example: odds and empirical probability (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples. Closes
 * Subtopic 3's worked examples. Reuses the split-bar motif (Sec30/32)
 * for the odds-against picture, now drawn as 7 individual equal
 * segments (3 win + 4 not) matching the narration's "seven equal parts".
 *
 * Beats (board_reveal_at_english [0,10.58,17.75,35.75,47.45,59.56,69.89,81.83]):
 *  0 heading
 *  1 (a) odds against a team winning are 4:3. Find P(win)
 *  2 odds against 4:3 ⇒ P(win) = 3/(4+3) = 3/7
 *  3 (b) 200 trials, event occurred 130 times. Empirical P? odds in favour?
 *  4 P_emp = 130/200 = 13/20
 *  5 odds in favour = P:(1−P) = 13:7
 *  6 diagram: bar, 7 equal parts, 3 favourable (win) + 4 unfavourable
 *  7 (HIGH) GUARDRAIL: for odds AGAINST 4:3, the 3 is favourable, denom is 4+3
 *
 * Layout plan (bar x190..890 y290..330, 7 segments of 100px; longer
 * language counts):
 *  b1 | sentence (15, ink)                          | T mid | y130
 *  b2 | formula (16, ink)                              | T mid | y158
 *  b3 | sentence (15, ink)                                | T mid | y195
 *  b4 | formula (16, ink)                                   | T mid | y225
 *  b5 | formula (16, ink)                                     | T mid | y255
 *  b6 | bar (7 segments) + label above                          | Fade  | y270..330
 *  b7 | guardrail chip (red, w800 h48)                            | Chip  | x140..940 y362..410
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch14Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const barX = 190;
  const segW = 100;
  const barY = 290;
  const barH = 40;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("odds against 4:3 — the 3 is still favourable", "odds against 4:3 — 3 hi favourable hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("Odds meets empirical (JEE Advanced flavour)", "Odds meets empirical (JEE Advanced flavour)")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={132} size={15} fill={INK} weight={600}>
          {t("(a) odds against a team winning are 4:3. Find P(win).", "(a) team ke jeetne ke odds against 4:3 hain. P(win) nikaalo.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={162} size={16} fill={INK} weight={700}>
          {"odds against 4:3  ⇒  P(win) = 3/(4+3) = 3/7"}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={198} size={15} fill={INK} weight={600}>
          {t("(b) 200 trials, event occurred 130 times. Empirical P? Odds in favour?", "(b) 200 trials, event 130 baar hua. Empirical P? Odds in favour?")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={228} size={16} fill={INK} weight={700}>
          {"P_emp = 130/200 = 13/20"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={258} size={16} fill={INK} weight={700}>
          {"odds in favour = P:(1−P) = 13:7"}
        </T>
      </Fade>

      {/* beat 6 — bar, 7 equal parts */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={278} size={13} fill={MUTED} weight={700}>
          {t("odds against 4:3 → 3 favourable, 4 unfavourable", "odds against 4:3 → 3 favourable, 4 unfavourable")}
        </T>
      </Fade>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Fade key={i} on={beat >= 6} delay={dl(6, 0.5 + i * 0.15)}>
          <Rect
            x={barX + i * segW}
            y={barY}
            width={segW - 3}
            height={barH}
            fill={i < 3 ? GREEN : RED}
            opacity={i < 3 ? 0.55 : 0.35}
          />
        </Fade>
      ))}
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={barX + 150} y={barY + barH / 2 + 6} size={14} fill={INK} weight={800}>
          {t("win", "jeet")}
        </T>
        <T x={barX + 550} y={barY + barH / 2 + 6} size={14} fill={INK} weight={800}>
          {t("not win", "nahi jeet")}
        </T>
      </Fade>

      {/* beat 7 — GUARDRAIL, HIGH */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={140} y={362} w={800} h={48} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("odds AGAINST 4:3 → 3 is favourable, denominator is 4+3 not 4", "odds AGAINST 4:3 → 3 favourable hai, denominator 4+3 hai, 4 nahi")}
        </Chip>
      </Fade>
    </Scene>
  );
}
