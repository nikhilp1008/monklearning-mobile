/**
 * M11 Ch14 · Section 30 — "The 'at least one' strategy"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,8.62,24.49,38.74,49.83,57.6,68.44,77.48]):
 *  0 heading
 *  1 "at least one" spans many messy cases
 *  2 its complement is a SINGLE clean case: "none"
 *  3 (HIGH, ringed) P(at least one) = 1 − P(none)
 *  4 example: at least one head in 5 tosses → none = all tails
 *  5 formula: P(≥1 head) = 1−(1/2)⁵ = 1−1/32 = 31/32
 *  6 (HIGH) GUARDRAIL: trigger phrase — "at least one" → compute "none", subtract from 1
 *  7 diagram: probability bar (total=1), none = thin slice, rest = at least one
 *
 * Layout plan (bar x90..990 y420..470; longer language counts):
 *  b1 | sentence (15, ink)                            | T mid | x200..880 y128..144
 *  b2 | sentence (15, ink)                              | T mid | x260..820 y158..174
 *  b3 | ringed "P(at least one)=1−P(none)" (20,green)      | T mid | y210..238
 *  b4 | example sentence (15, ink)                            | T mid | x220..860 y268..284
 *  b5 | "P(≥1 head)=1−(1/2)⁵=1−1/32=31/32" (17)                | T mid | y308..332
 *  b6 | guardrail chip (red, w820 h48)                           | Chip  | x130..950 y352..400
 *  b7 | bar (2 slices) + labels                                     | Fade  | x90..990 y390..470
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, GREEN, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch14Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const barX = 90;
  const barW = 900;
  const barY = 420;
  const barH = 50;
  const noneW = barW / 32; // 28.125

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t('trade a long sum for one short subtraction', 'ek lambi sum ko ek chhoti subtraction se badlo')}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t('The "at least one" strategy', '"at least one" strategy')}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={135} size={15} fill={INK} weight={600}>
          {t('"at least one" spans many messy cases — exactly one, two, ... up', '"at least one" mein bahut messy cases — exactly one, do, ... upar tak')}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={165} size={15} fill={INK} weight={600}>
          {t('its complement is a SINGLE clean case: "none"', 'iska complement ek hi SAAF case hai: "none"')}
        </T>
      </Fade>

      {/* beat 3 — HIGH */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={218} size={20} fill={GREEN} weight={800}>
          {"P(at least one) = 1 − P(none)"}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={ringD(540, 208, 250, 26)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={272} size={15} fill={INK} weight={600}>
          {t("example: at least one head in 5 tosses → none = all tails", "example: 5 tosses mein at least one head → none = sab tails")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={314} size={17} fill={INK} weight={700}>
          {"P(≥1 head) = 1 − (1/2)⁵ = 1 − 1/32 = 31/32"}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL, HIGH */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={130} y={355} w={820} h={48} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t('"at least one" → compute "none" and subtract from 1', '"at least one" → "none" nikaalo, 1 se subtract karo')}
        </Chip>
      </Fade>

      {/* beat 7 — the probability bar */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={402} size={14} fill={INK} weight={700}>
          {t("total probability = 1", "total probability = 1")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Rect x={barX} y={barY} width={noneW} height={barH} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Rect x={barX + noneW} y={barY} width={barW - noneW} height={barH} fill={AMBER} opacity={0.6} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={barX + noneW / 2} y={393} size={13} fill={GREEN} weight={700}>
          {t("none = 1/32", "none = 1/32")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.1)} d={lineD(barX + noneW / 2, 397, barX + noneW / 2, barY - 3)} stroke={GREEN} sw={1.6} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={barX + noneW + (barW - noneW) / 2} y={barY + barH / 2 + 6} size={16} fill={INK} weight={800}>
          {t("at least one = 31/32", "at least one = 31/32")}
        </T>
      </Fade>
    </Scene>
  );
}
