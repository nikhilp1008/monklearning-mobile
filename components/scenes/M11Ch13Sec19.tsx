/**
 * M11 Ch13 · Section 19 — "Why variance is always measured about the mean"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 8.19, 21.25, 35.58, 46.59, 61.7, 72.53]):
 *  0 anchor: heading
 *  1 represent: M.D. can anchor anywhere (3 green ticks) vs variance only
 *    the mean (1 green tick, 2 red crosses) — side-by-side chip contrast
 *  2 explain: parallel to Subtopic 1's median-minimises fact
 *  3 note (red-margin, high emphasis): not a convention, a minimisation result
 *  4 explain: hypersensitive to outliers because of the squaring
 *  5 land (boxed, high emphasis): σ² = 0 ⟺ x_i = x̄ for every i
 *  6 explain: only a perfectly flat data set gives zero variance (mini icons)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y84
 *  b1 | LEFT label + 3 chips (green)     | T+Chip| x140 y115 · chips y125..155
 *  b1 | RIGHT label + 3 chips (1g/2r)    | T+Chip| x620 y115 · chips y125..155
 *  b2 | text (13, ink)                   | T mid | x540 y185
 *  b3 | red bar + note (14)              | Draw+T| x60 y205..223 · text y219
 *  b4 | text (13, ink)                   | T mid | x540 y248
 *  b5 | boxed formula (Row, green)       | Draw+Row | box x290..790 y270..314
 *  b6 | flat vs wobbly mini icons        | Draw+T| x400../x600.. y370..410
 *  b6 | closing text (13, ink)           | T mid | x540 y440
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD, roundRectD, Overline } from "./math-kit";

function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          x
        </T>
      </Fade>
      <Overline on={on} delay={delay} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch13Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={18} fill={RED} anchor="middle" script>
          {t("Variance Sits on the Mean — Only the Mean", "Variance Sirf Mean Pe Baitha Hai")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("Variance sits on the mean — and only the mean", "Variance sirf mean pe baitha hai")}
        </T>
      </Fade>

      {/* beat 1 — M.D. flexible anchor vs variance's fixed anchor */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={140} y={115} size={13} fill={MUTED} anchor="start" weight={700}>
          {t("M.D. can anchor to:", "M.D. kahin bhi anchor ho sakta:")}
        </T>
      </Fade>
      {["mean ✓", "median ✓", "mode ✓"].map((label, i) => (
        <Fade key={label} on={beat >= 1} delay={dl(1, 0.4 + i * 0.3)}>
          <Chip x={140 + i * 100} y={126} w={90} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={620} y={115} size={13} fill={MUTED} anchor="start" weight={700}>
          {t("Variance can anchor to:", "Variance kahin anchor ho sakta:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Chip x={620} y={126} w={90} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          {"mean ✓"}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Chip x={720} y={126} w={90} h={30} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {"median ✗"}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Chip x={820} y={126} w={90} h={30} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {"mode ✗"}
        </Chip>
      </Fade>

      {/* beat 2 — explain: the parallel to Subtopic 1 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={185} size={13} fill={INK} anchor="middle">
          {t(
            "Just as the median minimises Σ|x_i-a|, the MEAN minimises the mean of squared deviations.",
            "Jaise median Σ|x_i-a| ko minimise karta hai, MEAN squared deviations ke mean ko minimise karta hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — note: not a convention, a minimisation result */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 60 205 L 60 223" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={219} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Not a convention — a minimisation result (we prove it next).",
            "Convention nahi — ek minimisation result (agla proof)."
          )}
        </T>
      </Fade>

      {/* beat 4 — explain: hypersensitive to outliers */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={248} size={13} fill={INK} anchor="middle">
          {t(
            "Because of the squaring, variance is hypersensitive to outliers — can overstate spread.",
            "Squaring ki wajah se, variance outliers ke liye hypersensitive hai — spread overstate kar sakta."
          )}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): the zero-variance identity */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(290, 270, 500, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={320} y={298} size={17} fill={INK} anchor="start" weight={700}>{"σ² = 0  ⟺  x_i = "}</T>
      </Fade>
      <XBar on={beat >= 5} delay={dl(5, 1)} x={558} y={298} size={17} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={572} y={298} size={17} fill={INK} anchor="start" weight={700}>{t("  for every i", "  har i ke liye")}</T>
      </Fade>

      {/* beat 6 — explain: only a perfectly flat data set */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        {[420, 460, 500, 540].map((x) => (
          <Circle key={x} cx={x} cy={390} r={4} fill={GREEN} />
        ))}
        <Draw on={beat >= 6} delay={dl(6, 0)} d={lineD(400, 390, 560, 390)} stroke={GREEN} sw={1.6} dur={0.4} />
        <T x={480} y={410} size={12} fill={GREEN} anchor="middle" weight={700}>{"flat → σ² = 0"}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={620} cy={382} r={4} fill={RED} />
        <Circle cx={660} cy={398} r={4} fill={RED} />
        <Circle cx={700} cy={375} r={4} fill={RED} />
        <Circle cx={740} cy={392} r={4} fill={RED} />
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.6)}
          d={`M 620 382 L 660 398 L 700 375 L 740 392`}
          stroke={RED}
          sw={1.6}
          dur={0.4}
        />
        <T x={680} y={415} size={12} fill={RED} anchor="middle" weight={700}>{"wobble → σ² > 0"}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={540} y={445} size={13} fill={INK} anchor="middle">
          {t(
            "The only way to get zero variance is a perfectly flat data set.",
            "Zero variance paane ka ekmaatra tareeka: ek perfectly flat data set."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
