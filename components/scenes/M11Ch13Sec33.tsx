/**
 * M11 Ch13 · Section 33 — "When the coefficient of variation breaks down"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — three caveats, one per card, closing with a
 * balanced-habit box (not "mistakes" exactly, so amber/blue rather than
 * the red-heavy tips-section palette).
 *
 * Beats (board_reveal_at_english [0, 8.53, 22.36, 35.5, 52.05, 62.38, 73.98]):
 *  0 anchor: heading
 *  1 card 1: needs a non-zero mean
 *  2 card 2 line 1: ratio data only, true zero (heights, wages, marks)
 *  3 card 2 line 2 (red): NOT °C — arbitrary zero gives nonsense
 *  4 card 3 line 1: "more consistent" ≠ "better"
 *  5 card 3 line 2: a consistent low scorer is still a low scorer
 *  6 land (boxed, green): use C.V. for spread, answer the actual question
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | card 1 (amber, full width)       | Draw+T| x60..1000 y100..142
 *  b2 | card 2 (amber, full width)       | Draw+T| x60..1000 y154..206
 *  b3 | card 2 line 2 (red, in-card)     | T mid | x530 y196
 *  b4 | card 3 (amber, full width)       | Draw+T| x60..1000 y218..270
 *  b5 | card 3 line 2                    | T mid | x530 y260
 *  b6 | boxed closing (green)            | Draw+T| box x180..900 y290..332
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
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

export default function M11Ch13Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={19} fill={RED} anchor="middle" script>
          {t("When C.V. Breaks Down", "C.V. Kab Break Down Hota Hai")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("The fine print on C.V.", "C.V. ka fine print")}
        </T>
      </Fade>

      {/* beat 1 — card 1: needs a non-zero mean */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(60, 100, 940, 42)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={330} y={125} size={13} fill={INK} anchor="middle" weight={700}>
          {t("1. Needs a non-zero mean → undefined at", "1. Non-zero mean chahiye → undefined jab")}
        </T>
      </Fade>
      <XBar on={beat >= 1} delay={dl(1, 1.3)} x={685} y={125} size={13} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={697} y={125} size={13} fill={INK} anchor="start" weight={700}>
          {t("=0, unstable nearby.", "=0, aas-paas unstable.")}
        </T>
      </Fade>

      {/* beat 2 — card 2 line 1: ratio data, true zero */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(60, 154, 940, 52)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={530} y={178} size={13} fill={INK} anchor="middle" weight={700}>
          {t("2. Ratio data only, true zero: heights, wages, marks ✓", "2. Sirf ratio data, true zero: heights, wages, marks ✓")}
        </T>
      </Fade>

      {/* beat 3 — card 2 line 2: NOT °C */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={530} y={198} size={13} fill={RED} anchor="middle" weight={700}>
          {t("NOT °C — arbitrary zero gives nonsense ✗", "°C NAHI — arbitrary zero se nonsense ✗")}
        </T>
      </Fade>

      {/* beat 4 — card 3 line 1: consistent ≠ better */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(60, 218, 940, 52)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={530} y={242} size={13} fill={INK} anchor="middle" weight={700}>
          {t("3. \"More consistent\" (lower C.V.) is NOT \"better\".", "3. \"Zyada consistent\" (kam C.V.) \"better\" NAHI hai.")}
        </T>
      </Fade>

      {/* beat 5 — card 3 line 2 */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={530} y={262} size={13} fill={INK} anchor="middle">
          {t(
            "A consistent low scorer is still a low scorer.",
            "Ek consistent low scorer phir bhi low scorer hai."
          )}
        </T>
      </Fade>

      {/* beat 6 — land (boxed, green): the balanced habit */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(180, 290, 720, 42)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={316} size={14} fill={GREEN} anchor="middle" weight={800}>
          {t(
            "Use C.V. for relative spread — then answer the question actually asked.",
            "Relative spread ke liye C.V. use karo — phir actual question answer karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
