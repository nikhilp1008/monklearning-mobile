/**
 * M11 Ch05 · Section 30 — "Worked example: acid mixture, a rational double
 * inequality (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Applies the mixture template from Sec 27.
 *
 * Beats (en [0,23.64,33.45,51.03,65.02,73.13,88.66,105.56], hi
 * [0,22.44,31.66,47.79,59.82,68.1,82.6,99.33]):
 *  0 heading: the problem — 600mL 20% acid, add y mL 50%, result 30%-40%
 *  1 text: let y = mL of 50% solution added, y≥0
 *  2 text: pure acid = 0.20(600)+0.50y = 120+0.5y, total = 600+y
 *  3 formula (high, boxed): 0.30 < (120+0.5y)/(600+y) < 0.40
 *  4 text: multiply by the positive total 600+y (no flip)
 *  5 formula: 0.30(600+y) < 120+0.5y < 0.40(600+y)
 *  6 formula: left: 60<0.2y⇒y>300; right: 0.1y<120⇒y<1200
 *  7 note (high, boxed green — landed answer): 300 < y < 1200
 *
 * Layout plan (all centered, x540, one accumulating derivation):
 *  b0 | problem (16,ink,w700)     | T mid | bl 108
 *  b1 | caption (14,ink,scr)      | T mid | bl 145
 *  b2 | caption (14,ink,scr)      | T mid | bl 180
 *  b3 | boxed formula (18,ink)    | Chip  | x270..810 y210..258
 *  b4 | caption (14,ink,scr)      | T mid | bl 300
 *  b5 | formula (16,ink,w700)     | T mid | bl 335
 *  b6 | formula (16,ink,w700)     | T mid | bl 375
 *  b7 | boxed answer (19,green)   | Chip  | x330..750 y405..457
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch05Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("clear the fraction by the positive total — no flip", "positive total se fraction clear karo — no flip")}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={108} size={16} fill={INK} weight={700}>
          {t(
            "600 mL of 20% acid; add y mL of 50% — result between 30% and 40%",
            "600 mL ka 20% acid; y mL 50% wala add karo — result 30% aur 40% ke beech"
          )}
        </T>
      </Fade>

      {/* beat 1 — name y */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={145} size={14} fill={INK} script>
          {t("let y = mL of the 50% solution added, with y ≥ 0", "let y = 50% solution ke mL jo add hue, y ≥ 0")}
        </T>
      </Fade>

      {/* beat 2 — pure acid and total */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={180} size={14} fill={INK} script>
          {t(
            "pure acid = 0.20(600)+0.50y = 120+0.5y, total = 600+y",
            "pure acid = 0.20(600)+0.50y = 120+0.5y, total = 600+y"
          )}
        </T>
      </Fade>

      {/* beat 3 — the double inequality */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={270} y={210} w={540} h={48} fill={"#FCF4E0"} stroke={AMBER} textFill={INK} size={18} script={false}>
          0.30 &lt; (120+0.5y)/(600+y) &lt; 0.40
        </Chip>
      </Fade>

      {/* beat 4 — clear the fraction */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={300} size={14} fill={INK} script>
          {t(
            "multiply throughout by the positive total 600+y (no flip)",
            "positive total 600+y se multiply karo (no flip)"
          )}
        </T>
      </Fade>

      {/* beat 5 — cleared */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={335} size={16} fill={INK} weight={700}>
          0.30(600+y) &lt; 120+0.5y &lt; 0.40(600+y)
        </T>
      </Fade>

      {/* beat 6 — split and solve */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={375} size={16} fill={INK} weight={700}>
          60 &lt; 0.2y ⇒ y &gt; 300; &nbsp; 0.1y &lt; 120 ⇒ y &lt; 1200
        </T>
      </Fade>

      {/* beat 7 — the answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={330} y={405} w={420} h={52} fill={GREEN} textFill="#fff" size={19} script={false}>
          300 &lt; y &lt; 1200 (mL)
        </Chip>
      </Fade>
    </Scene>
  );
}
