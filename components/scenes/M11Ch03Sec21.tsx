/**
 * M11 Ch03 · Section 21 — "Stretching and shifting — what a, b, c, d do"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED, three overlaid wave curves, extra eye-check.
 *
 * Beats (board_reveal_at_english [0, 8.02, 15.36, 25.51, 37.63, 45.14, 52.22]):
 *  0 subtitle: reading y = a·sin(bx+c)+d
 *  1 |a| stretches vertically = amplitude (data bug: literal — → "-")
 *  2 b squeezes horizontally = shorter period (data bug fixed)
 *  3 THE DIAGRAM: sin x (muted) vs 2sinx (red, taller) vs sin2x (green, faster)
 *  4 c shifts sideways (phase), d lifts up/down (data bug fixed)
 *  5 formula: amplitude=|a|, period=2π/|b|, shift=d (boxed)
 *  6 red-margin (high): range becomes [d-|a|, d+|a|]
 *
 * Layout plan — text above, three-curve graph center, formula+guardrail below:
 *  b0 | subtitle (15,amber)                | T mid | x300..780  y78..93  (bl 86)
 *  b1 | line (14)                           | T mid | x316..764  y100..114 (bl 108)
 *  b2 | line (13)                           | T mid | x293..787  y122..136 (bl 130)
 *  b3 | legend 3 lines                      | T st  | x700..860  y174..222
 *  b3 | axes origin(200,290) x140..980      | Draw  | y170..410
 *  b3 | 3 curves (waveD)                    | Draw  | x200..891
 *  b4 | line (14)                           | T mid | x260..820  y424..438 (bl 430)
 *  b5 | chip formula                        | Chip  | x340..740  y455..493
 *  b6 | margin bar (red)                    | Draw  | x60  y515..560
 *  b6 | closer 2 lines (14,red)             | T st  | x76..600   y535..557
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, waveD } from "./math-kit";

const OX = 200;
const OY = 290;
const X1 = OX + 2 * Math.PI * 110;

export default function M11Ch03Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Stretching and Shifting: a, b, c, d", "Stretch aur Shift: a, b, c, d")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={86} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Reading y = a·sin(bx+c)+d", "y = a·sin(bx+c)+d ko padhna")}
        </T>
      </Fade>

      {/* beat 1 — amplitude */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={14} fill={INK} anchor="middle">
          {t(
            "|a| stretches vertically - the amplitude, how tall the wave is.",
            "|a| vertically stretch karta hai - amplitude, wave kitni oonchi hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — period from b */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={130} size={13} fill={INK} anchor="middle">
          {t(
            "b squeezes horizontally - bigger b means more oscillations, shorter period.",
            "b horizontally squeeze karta hai - bada b matlab zyada oscillations, chhota period."
          )}
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: three overlaid curves */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={700} y={180} size={12} fill={MUTED} anchor="start">y = sin x</T>
        <T x={700} y={198} size={12} fill={RED} anchor="start">{t("y = 2 sin x (amplitude 2)", "y = 2 sin x (amplitude 2)")}</T>
        <T x={700} y={216} size={12} fill={GREEN_DARK} anchor="start">{t("y = sin 2x (period π)", "y = sin 2x (period π)")}</T>
      </Fade>
      <CartesianAxes on={beat >= 3} delay={dl(3, 0.3)} originX={OX} originY={OY} xLeft={140} xRight={980} yTop={170} yBottom={410} showTicks={false} />
      <Draw on={beat >= 3} d={waveD(OX, X1, OY, 50, 110, 0, Math.sin)} stroke={MUTED} sw={1.8} delay={dl(3, 0.7)} dur={1.4} />
      <Draw on={beat >= 3} d={waveD(OX, X1, OY, 100, 110, 0, Math.sin)} stroke={RED} sw={2.4} delay={dl(3, 1.2)} dur={1.4} />
      <Draw on={beat >= 3} d={waveD(OX, X1, OY, 50, 110, 0, (x) => Math.sin(2 * x))} stroke={GREEN_DARK} sw={2.2} delay={dl(3, 1.7)} dur={1.4} />

      {/* beat 4 — phase and vertical shift */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={430} size={14} fill={INK} anchor="middle">
          {t(
            "c slides the wave left/right (phase shift); d lifts it up/down.",
            "c wave ko left/right slide karta hai (phase shift); d ise upar/neeche uthata hai."
          )}
        </T>
      </Fade>

      {/* beat 5 — the formula toolkit, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={340} y={455} w={400} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          amplitude=|a|, period=2π/|b|, shift=d
        </Chip>
      </Fade>

      {/* beat 6 — red-margin: the range shifts too */}
      <Draw on={beat >= 6} d="M 60 515 L 60 560" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={535} size={14} fill={RED} anchor="start" weight={700}>
          {t("Range becomes [d-|a|, d+|a|] -", "Range ban jaata hai [d-|a|, d+|a|] -")}
        </T>
        <T x={76} y={557} size={14} fill={RED} anchor="start">
          {t("the vertical shift moves the whole band.", "vertical shift poori band ko hila deta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
