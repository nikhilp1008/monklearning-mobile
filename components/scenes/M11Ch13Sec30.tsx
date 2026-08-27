/**
 * M11 Ch13 · Section 30 — "Comparing two groups: the coefficient of variation as referee"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens Subtopic 3 (Analysis of Frequency
 * Distributions & Advanced Problems).
 *
 * Beats (board_reveal_at_english [0, 7.85, 19.54, 37.38, 48.64, 58.79, 78.85]):
 *  0 anchor: heading
 *  1 explain: coach/buyer/investor — same practical question
 *  2 explain: σ alone can't referee (₹5 on ₹50 vs ₹5 on ₹5000)
 *  3 explain: measure spread RELATIVE to size
 *  4 land (boxed, high emphasis): C.V. = (σ/x̄) × 100
 *  5 THE DIAGRAM: same σ=5, bar(mean=40) vs bar(mean=200) — big vs small wobble
 *  6 note (red-margin, high emphasis): C.V. compares any two series, lower wins
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | text (13, ink)                   | T mid | x540 y104
 *  b2 | text (13, ink)                   | T mid | x540 y126
 *  b3 | text (13, ink)                   | T mid | x540 y148
 *  b4 | boxed formula (16, green)        | Draw+Row | box x420..660 y168..208
 *  b5 | bar1 (mean40) + error bar + cap  | Draw+T| x150..270 y240..262
 *  b5 | bar2 (mean200) + error bar + cap | Draw+T| x150..750 y320..342
 *  b6 | red bar + note (14)              | Draw+T| x60 y400..418 · text y414
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
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

export default function M11Ch13Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={19} fill={RED} anchor="middle" script>
          {t("The Coefficient of Variation as Referee", "Coefficient of Variation, Ek Referee")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Which group is steadier?", "Kaunsa group zyada steady hai?")}
        </T>
      </Fade>

      {/* beat 1 — explain: the same practical question */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={13} fill={INK} anchor="middle">
          {t(
            "A coach, a buyer, an investor — all ask the same thing: which one is more consistent?",
            "Ek coach, ek buyer, ek investor — sab ek hi cheez poochte hain: kaunsa zyada consistent hai?"
          )}
        </T>
      </Fade>

      {/* beat 2 — explain: σ alone can't referee */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={126} size={13} fill={INK} anchor="middle">
          {t(
            "σ alone: a ₹5 spread on a ₹50 mean is very different from ₹5 on a ₹5000 mean.",
            "σ akela: ₹50 ke mean pe ₹5 spread, ₹5000 ke mean pe ₹5 se bilkul alag hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — explain: measure relative to size */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={148} size={13} fill={INK} anchor="middle">
          {t(
            "Measure spread RELATIVE to size: divide σ by the mean, ×100.",
            "Spread ko size ke RELATIVE measure karo: σ ko mean se divide karo, ×100."
          )}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): C.V. formula */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(420, 168, 240, 40)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={440} y={193} size={15} fill={INK} anchor="start" weight={700}>{"C.V. = σ/"}</T>
      </Fade>
      <XBar on={beat >= 4} delay={dl(4, 0.9)} x={527} y={193} size={15} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={193} size={15} fill={INK} anchor="start" weight={700}>{" × 100"}</T>
      </Fade>

      {/* beat 5 — THE DIAGRAM: same σ=5, different mean */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={150} y={228} size={13} fill={MUTED} anchor="start">{t("mean = 40", "mean = 40")}</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Rect x={150} y={240} width={120} height={22} fill={GREEN} opacity={0.65} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d={`${lineD(290, 251, 314, 251)} ${lineD(290, 245, 290, 257)} ${lineD(314, 245, 314, 257)}`} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={330} y={255} size={13} fill={RED} anchor="start" weight={700}>
          {t("σ=5 → big relative wobble (high C.V.)", "σ=5 → bada relative wobble (high C.V.)")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={150} y={308} size={13} fill={MUTED} anchor="start">{t("mean = 200", "mean = 200")}</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <Rect x={150} y={320} width={600} height={22} fill={GREEN} opacity={0.65} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.2)} d={`${lineD(770, 331, 794, 331)} ${lineD(770, 325, 770, 337)} ${lineD(794, 325, 794, 337)}`} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <T x={450} y={362} size={13} fill={GREEN} anchor="middle" weight={700}>
          {t("σ=5 → small relative wobble (low C.V.)", "σ=5 → chhota relative wobble (low C.V.)")}
        </T>
      </Fade>

      {/* beat 6 — note: C.V. compares any two series */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 400 L 60 418" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={414} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "A pure ratio — C.V. compares any two series. Lower C.V. = more consistent.",
            "Ek pure ratio — C.V. kisi bhi do series ko compare karta. Kam C.V. = zyada consistent."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
