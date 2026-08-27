/**
 * M11 Ch13 · Section 40 — "Worked example: correcting a misrecorded observation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — applies Sec 36's procedure to real numbers.
 *
 * Verified: n=20, wrong mean=30, wrong SD=5, wrong value w=50, correct c=30.
 *  Σx_wrong = 20×30 = 600. Σx²_wrong = 20(25+900) = 20×925 = 18500.
 *  Σx_corr = 600-50+30 = 580 ⇒ mean_corr = 580/20 = 29.
 *  Σx²_corr = 18500-2500+900 = 16900.
 *  σ² = 16900/20 - 29² = 845-841 = 4 ⇒ σ = 2.
 *
 * Beats (board_reveal_at_english [0, 21.42, 31.32, 49.07, 64.85, 80.3, 98.3]):
 *  0 anchor: heading
 *  1 represent: given (20 obs, mean 30, SD 5; 50 should be 30)
 *  2 represent: Σx_wrong=20×30=600, Σx²_wrong=20(5²+30²)=18500
 *  3 represent: Σx_corr=600-50+30=580 ⇒ x̄_corr=580/20=29
 *  4 represent: Σx²_corr=18500-50²+30²=16900
 *  5 land (boxed, high emphasis): σ²=16900/20-29²=845-841=4 ⇒ σ=2
 *  6 note (red-margin): one 4-σ outlier, SD collapses from 5 to 2
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 16, red, always-on)     | T mid | x540 y50
 *  b0 | heading (script 13, amber_dark)  | T mid | x540 y74
 *  b1 | text (13, ink)                   | T mid | x540 y98
 *  b2 | formula (14, ink)                | T mid | x540 y122
 *  b3 | formula (14, ink)                | Row   | x358 y146
 *  b4 | formula (14, ink)                | T mid | x540 y170
 *  b5 | boxed (17, green)                | Draw+T| box x240..840 y190..234
 *  b6 | red bar + note (14)              | Draw+T| x60 y256..274 · text y270
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

export default function M11Ch13Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={50} size={16} fill={RED} anchor="middle" script>
          {t("Correcting a Misrecorded Observation", "Misrecorded Observation Correct Karna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={74} size={13} fill={AMBER_DARK} anchor="middle" script>
          {t("JEE Main: an observation of 50 should have been 30", "JEE Main: 50 record hua, hona chahiye tha 30")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={98} size={13} fill={INK} anchor="middle">
          {t(
            "20 observations, mean 30, SD 5. A value recorded as 50 is actually 30. Correct the mean and SD.",
            "20 observations, mean 30, SD 5. 50 record hui value asal mein 30 hai. Mean aur SD correct karo."
          )}
        </T>
      </Fade>

      {/* beat 2 — wrong totals */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={122} size={14} fill={INK} anchor="middle" weight={700}>
          {"Σx_wrong = 20×30 = 600,   Σx²_wrong = 20(5²+30²) = 18500"}
        </T>
      </Fade>

      {/* beat 3 — repair the sum */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={358} y={146} size={14} fill={INK} anchor="start" weight={700}>{"Σx_corr = 600-50+30 = 580  ⇒  "}</T>
      </Fade>
      <XBar on={beat >= 3} delay={dl(3, 0.5)} x={575} y={146} size={14} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={588} y={146} size={14} fill={INK} anchor="start" weight={700}>{"_corr = 580/20 = 29"}</T>
      </Fade>

      {/* beat 4 — repair the sum of squares */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={170} size={14} fill={INK} anchor="middle" weight={700}>
          {"Σx²_corr = 18500-50²+30² = 16900"}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): corrected variance & SD */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(240, 190, 600, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={218} size={17} fill={GREEN} anchor="middle" weight={800}>
          {"σ² = 16900/20 - 29² = 845-841 = 4  ⇒  σ = 2"}
        </T>
      </Fade>

      {/* beat 6 — note: one outlier was doing almost all the work */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 256 L 60 274" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={270} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "One 4-σ outlier was doing almost all the work — SD collapses from 5 to 2.",
            "Ek 4-σ outlier lagbhag saara kaam kar raha tha — SD 5 se 2 tak gir jaata hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
