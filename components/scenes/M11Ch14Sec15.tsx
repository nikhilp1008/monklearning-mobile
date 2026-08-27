/**
 * M11 Ch14 · Section 15 — "How likely? The classical definition"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept. Opens Subtopic 2
 * "Probability of Events and the Axiomatic Approach".
 *
 * Beats (board_reveal_at_english [0,13.14,28.16,38.14,45.14,54.53,64.0]):
 *  0 heading: "How LIKELY is an event?"
 *  1 assigning a number (probability) to each event is the whole job
 *  2 die roster: chance of even = 3 good faces out of 6 (highlight 2,4,6)
 *  3 formula: P(even) = 3/6 = 1/2
 *  4 favourable / total — the CLASSICAL definition
 *  5 formula (HIGH, ringed): P(E) = n(E) / n(S)
 *  6 GUARDRAIL: intuitive & correct — FOR fair dice, well-shuffled cards
 *
 * Layout plan (die roster reused from Sec1/Sec2: dieStartX=303, step=84,
 * cards y160..224; longer language counts):
 *  b1 | intro sentence (16, ink)                    | T mid | x210..870 y128..146
 *  b2 | die roster (6 cards) + green highlight 2,4,6 | Draw/T| x303..777 y160..224
 *  b2 | "3 good faces out of 6" (14, ink)            | T mid | x400..680 y245..259
 *  b3 | "P(even) = 3/6 = 1/2" (20, green)             | T mid | x400..680 y286..311
 *  b4 | "favourable / total — CLASSICAL def." (16)    | T mid | x260..820 y332..348
 *  b5 | ringed "P(E) = n(E) / n(S)" (22, ink, HIGH)    | T mid | x380..700 y378..410
 *  b6 | guardrail chip (red, w720 h48)                 | Chip  | x180..900 y430..478
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, GREEN, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const DIE_ROSTER = [1, 2, 3, 4, 5, 6];
const EVEN = new Set([2, 4, 6]);

export default function M11Ch14Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const dieCardW = 54;
  const dieCardH = 64;
  const dieGap = 30;
  const dieStep = dieCardW + dieGap;
  const dieStartX = 540 - (6 * dieCardW + 5 * dieGap) / 2; // 303

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("favourable over total — but only when the world is fair", "favourable over total — par sirf jab world fair ho")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={20} fill={INK} weight={700}>
          {t("How LIKELY is an event?", "Ek event kitna LIKELY hai?")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={137} size={16} fill={INK} weight={600}>
          {t("assigning a number — a probability — to each event", "har event ko ek number — probability — dena")}
        </T>
      </Fade>

      {/* beat 2 — die roster, highlight evens */}
      {DIE_ROSTER.map((face, i) => {
        const x = dieStartX + i * dieStep;
        return (
          <React.Fragment key={face}>
            <Draw on={beat >= 2} delay={dl(2, 0.2 + i * 0.15)} d={roundRectD(x, 160, dieCardW, dieCardH, 8)} stroke={AMBER} sw={2} dur={0.35} />
            <Fade on={beat >= 2} delay={dl(2, 0.35 + i * 0.15)}>
              <T x={x + dieCardW / 2} y={160 + dieCardH / 2 + 8} size={22} fill={INK} weight={700}>
                {face}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}
      {DIE_ROSTER.filter((f) => EVEN.has(f)).map((face, i) => {
        const idx = DIE_ROSTER.indexOf(face);
        const x = dieStartX + idx * dieStep;
        return (
          <Draw
            key={face}
            on={beat >= 2}
            delay={dl(2, 1.4 + i * 0.4)}
            d={roundRectD(x - 4, 156, dieCardW + 8, dieCardH + 8, 10)}
            stroke={GREEN}
            sw={3}
            dur={0.4}
          />
        );
      })}
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={540} y={250} size={14} fill={GREEN} weight={700}>
          {t("3 good faces out of 6", "3 achhe faces, 6 mein se")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={300} size={20} fill={GREEN} weight={800}>
          {"P(even) = 3/6 = 1/2"}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={342} size={16} fill={INK} weight={600}>
          {t("favourable over total — the ", "favourable / total — yehi ")}
          <TSpan fill={AMBER_DARK} fontWeight={800}>{t("CLASSICAL definition", "CLASSICAL definition")}</TSpan>
        </T>
      </Fade>

      {/* beat 5 — HIGH, ringed */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={396} size={22} fill={INK} weight={800}>
          {"P(E) = n(E) / n(S)"}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.0)} d={ringD(540, 386, 172, 27)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={180} y={430} w={720} h={48} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("intuitive & correct — FOR fair dice, well-shuffled cards", "intuitive & correct — sirf fair dice, well-shuffled cards ke liye")}
        </Chip>
      </Fade>
    </Scene>
  );
}
