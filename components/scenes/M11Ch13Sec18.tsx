/**
 * M11 Ch13 · Section 18 — "Coefficient of variation: comparing across scales"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 8.53, 22.61, 34.73, 44.46, 61.1, 77.74]):
 *  0 anchor: heading
 *  1 represent: heights (cm) vs weights (kg) — same σ=5, incomparable units
 *  2 explain: normalise — divide σ by mean, express as a percentage
 *  3 land (boxed, high emphasis): C.V. = (σ/x̄) × 100
 *  4 note (red-margin, high emphasis): lower C.V. = more consistent
 *  5 THE DIAGRAM: ₹10 swing — huge on ₹50, invisible on ₹50,000
 *  6 land (boxed, green): the verdict rule
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y84
 *  b1 | 2 chips + "≠" (RED)              | Chip+T| x250/x630 y120..154 · ≠ x540 y142
 *  b2 | text (14, ink)                   | T mid | x540 y176
 *  b3 | boxed formula (Row, green)       | Draw+Row | box x380..680 y193..237
 *  b4 | red bar + note (14)              | Draw+T| x60 y255..275 · text y270
 *  b5 | two price bars + labels          | Draw+T| x150..350 / x600..800 y308..332
 *  b6 | boxed verdict (script 15, green) | Draw+T| box x210..870 y415..463
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

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

export default function M11Ch13Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Coefficient of Variation", "Coefficient of Variation")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("When two series live on different scales", "Jab do series alag alag scales pe hain")}
        </T>
      </Fade>

      {/* beat 1 — heights vs weights: same σ, incomparable units */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={150} y={120} w={200} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("Height: σ = 5 cm", "Height: σ = 5 cm")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={143} size={20} fill={RED} anchor="middle" weight={800}>{"≠"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Chip x={730} y={120} w={200} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("Weight: σ = 5 kg", "Weight: σ = 5 kg")}
        </Chip>
      </Fade>

      {/* beat 2 — explain: normalise */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={178} size={14} fill={INK} anchor="middle">
          {t(
            "Normalise: divide σ by the mean, express it as a percentage.",
            "Normalise karo: σ ko mean se divide karo, percentage mein likho."
          )}
        </T>
      </Fade>

      {/* beat 3 — land (boxed, high emphasis): C.V. = (σ/x̄) × 100 */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(380, 195, 320, 44)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={410} y={223} size={17} fill={INK} anchor="start" weight={700}>{"C.V. = σ / "}</T>
      </Fade>
      <XBar on={beat >= 3} delay={dl(3, 1)} x={520} y={223} size={17} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={534} y={223} size={17} fill={INK} anchor="start" weight={700}>{" × 100"}</T>
      </Fade>

      {/* beat 4 — note: lower C.V. = more consistent */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 60 255 L 60 273" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={269} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Lower C.V. = more consistent — a pure number, compares apples to oranges.",
            "Kam C.V. = zyada consistent — pure number, apples ko oranges se compare."
          )}
        </T>
      </Fade>

      {/* beat 5 — THE DIAGRAM: ₹10 swing, huge vs invisible */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={250} y={305} size={13} fill={MUTED} anchor="middle">₹50 item</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d={roundRectD(150, 314, 200, 24, 4)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Rect x={230} y={314} width={40} height={24} fill={RED} opacity={0.45} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={250} y={358} size={12} fill={RED} anchor="middle" weight={700}>
          {t("±₹10 → HUGE swing", "±₹10 → HUGE swing")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={700} y={305} size={13} fill={MUTED} anchor="middle">₹50,000 item</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d={roundRectD(600, 314, 200, 24, 4)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Rect x={699} y={314} width={2} height={24} fill={RED} opacity={0.9} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={700} y={358} size={12} fill={GREEN} anchor="middle" weight={700}>
          {t("±₹10 → invisible", "±₹10 → invisible")}
        </T>
      </Fade>

      {/* beat 6 — land (boxed, green): the verdict */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(210, 400, 660, 48)} stroke={GREEN} sw={2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={429} size={15} fill={GREEN} anchor="middle" script>
          {t(
            "Lower C.V. → more consistent.  Higher C.V. → more variable.",
            "Kam C.V. → zyada consistent.  Zyada C.V. → zyada variable."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
