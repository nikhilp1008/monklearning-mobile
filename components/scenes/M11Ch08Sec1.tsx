/**
 * M11 Ch08 · Section 1 — "A sequence is a function of its position"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0, 11.52, 22.36, 32.26, 41.73, 66.56, 80.3, 98.73]):
 *  0 title (always-on) — "A sequence: an ordered list with a rule"
 *  1 order matters: 4 numbered position slots holding a₁..a₄
 *  2 the machine diagram: input n → rule a_n → output a₁,a₂,a₃,…
 *  3 highlighted restatement: term = function of position
 *  4 explicit rule example: a_n = 2n-1 ⇒ 1,3,5,7,...
 *  5 recursive rule example: a_1=a_2=1, a_n=a_(n-1)+a_(n-2) (Fibonacci)
 *  6 red-margin guardrail: not a set — order + repeats matter
 *  7 finite vs infinite closer
 *
 * Layout plan (Kalam bl top/bot per spec Step 3 ratios):
 *  b0 | title script26 cx540 bl58
 *  b1 | 4 boxes roundRect x135..735 y96..144 · a_k labels bl126 · position tags bl172 · caption bl205
 *  b2 | 3 boxes (input/rule/output) y240..304 x210..870 · 2 arrows · caption bl345
 *  b3 | chip x290 y360 w500 h44 (text bl~387)
 *  b4 | "Explicit rule" label bl420 cx270 · formula bl448 cx270
 *  b5 | "Recursive rule" label bl420 cx800 · formula bl448 cx800 (2 lines)
 *  b6 | red bar x76 y480..518 · text bl505/bl in two lines
 *  b7 | finite/infinite two mini rows bl545/570
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch08Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const boxCx = [195, 385, 575, 765];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} anchor="middle" script>
          {t("A sequence: an ordered list with a rule", "A sequence: ek ordered list, ek rule ke saath")}
        </T>
      </Fade>

      {/* beat 1 — order matters: 4 fixed position slots */}
      {boxCx.map((cx, i) => (
        <Draw
          key={`box${i}`}
          on={beat >= 1}
          delay={dl(1, 0.25 + i * 0.25)}
          d={roundRectD(cx - 55, 96, 110, 48)}
          stroke={AMBER_DARK}
          sw={2}
          dur={0.6}
        />
      ))}
      {boxCx.map((cx, i) => (
        <Fade key={`lbl${i}`} on={beat >= 1} delay={dl(1, 0.55 + i * 0.25)}>
          <T x={cx} y={126} size={18} fill={INK} anchor="middle">
            {`a${["₁", "₂", "₃", "₄"][i]}`}
          </T>
        </Fade>
      ))}
      {boxCx.map((cx, i) => (
        <Fade key={`pos${i}`} on={beat >= 1} delay={dl(1, 1.6 + i * 0.2)}>
          <T x={cx} y={172} size={13} fill={MUTED} anchor="middle">
            {t(`position ${i + 1}`, `position ${i + 1}`)}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={465} y={205} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("fixed positions — can't be swapped around", "fixed positions — inhe swap nahi kar sakte")}
        </T>
      </Fade>

      {/* beat 2 — the machine diagram: input -> rule -> output */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={roundRectD(210, 240, 150, 64)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={285} y={266} size={14} fill={INK} anchor="middle" script>{t("input", "input")}</T>
        <T x={285} y={288} size={13} fill={INK_LIGHT} anchor="middle">{"n = 1, 2, 3, ..."}</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(360, 272, 445, 272)} stroke={MUTED} sw={2} dur={0.5} />

      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={roundRectD(445, 240, 150, 64)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={520} y={278} size={16} fill={AMBER_DARK} anchor="middle" script>{t("rule a_n", "rule a_n")}</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={arrowD(595, 272, 680, 272)} stroke={MUTED} sw={2} dur={0.5} />

      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={roundRectD(680, 240, 150, 64)} stroke={GREEN_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={755} y={266} size={14} fill={GREEN_DARK} anchor="middle" script>{t("output", "output")}</T>
        <T x={755} y={288} size={13} fill={GREEN_DARK} anchor="middle">{"a₁, a₂, a₃, ..."}</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={470} y={330} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("position n goes in, term a_n comes out", "position n andar jaata hai, term a_n bahar aata hai")}
        </T>
      </Fade>

      {/* beat 3 — highlighted restatement */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={290} y={355} w={500} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {t("term as a function of position: input n, output a_n", "term = position ka function: input n, output a_n")}
        </Chip>
      </Fade>

      {/* beat 4 — explicit rule example (left) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={270} y={425} size={16} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("explicit rule", "explicit rule")}
        </T>
        <T x={270} y={455} size={17} fill={INK} anchor="middle">
          {"a_n = 2n - 1"}
        </T>
        <T x={270} y={480} size={15} fill={INK_LIGHT} anchor="middle">
          {"⇒ 1, 3, 5, 7, ..."}
        </T>
      </Fade>

      {/* beat 5 — recursive rule example (right, Fibonacci) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={800} y={425} size={16} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("recursive rule", "recursive rule")}
        </T>
        <T x={800} y={455} size={16} fill={INK} anchor="middle">
          {"a_1 = a_2 = 1"}
        </T>
        <T x={800} y={480} size={16} fill={INK} anchor="middle">
          {"a_n = a_(n-1) + a_(n-2)"}
        </T>
      </Fade>

      {/* beat 6 — red-margin guardrail: not a set */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 512 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={532} size={16} fill={RED} anchor="start" script>
          {t("a sequence is NOT a set —", "sequence ek SET nahi hai —")}
        </T>
        <T x={96} y={558} size={16} fill={RED} anchor="start" script>
          {t("1, 1, 2 keeps its order and repeat", "1, 1, 2 apna order aur repeat rakhta hai")}
        </T>
      </Fade>

      {/* beat 7 — finite vs infinite closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={640} y={520} size={15} fill={INK} anchor="start" script>
          {t("finite: a_1, a_2, ..., a_n  |  (stops)", "finite: a_1, a_2, ..., a_n  |  (ruk jaata hai)")}
        </T>
        <T x={640} y={548} size={15} fill={INK} anchor="start" script>
          {t("infinite: a₁, a₂, a₃, ...  →  (runs on)", "infinite: a₁, a₂, a₃, ...  →  (chalta rehta hai)")}
        </T>
      </Fade>
    </Scene>
  );
}
