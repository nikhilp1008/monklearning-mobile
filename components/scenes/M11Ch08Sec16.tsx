/**
 * M11 Ch08 · Section 16 — "Ratio of sums to ratio of terms"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Notation: the JSON's a^{(1)}_m / a^{(2)}_m (two APs' mth terms) is a true
 * 2-D superscript+subscript stack on one letter — not supported (see
 * SCENE_AUTHORING_MATHS.md). Renamed to distinct letters instead: AP1's
 * terms/sum are a_m/S_n, AP2's are b_m/T_n. Same math, no stacked notation.
 *
 * Math check: S_(2m-1) = (2m-1)/2 · [2a+(2m-2)d] = (2m-1)(a+(m-1)d) =
 * (2m-1)·a_m — so S_(2m-1)/(2m-1) IS the mth term, hence the device. For
 * m=24: n=2(24)-1=47. (7·47+1)/(4·47+17) = 330/205 = 66/41 ✓ (gcd(330,205)=5).
 *
 * Beats (en [0, 15.02, 28.76, 37.63, 47.53, 63.74, 82.35]):
 *  0 title (always-on)
 *  1 the standard device (text)
 *  2 boxed formula: a_m/b_m = S_(2m-1)/T_(2m-1)
 *  3 text: m=24 ⇒ n=47
 *  4 formula: compute the ratio
 *  5 red-margin: why 2m-1
 *  6 boxed answer
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | chip x370 y120 w340 h44 (text bl~147)
 *  b3 | text bl195 cx540
 *  b4 | text bl230 cx540
 *  b5 | red bar x76 y255..325 · text bl275/315 x96
 *  b6 | chip x350 y345 w380 h44 (text bl~372)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, AMBER_DARK, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t(
            "Two APs' sums are in ratio (7n+1):(4n+17). Find the ratio of 24th terms.",
            "Do APs ke sums (7n+1):(4n+17) ratio mein hain. 24th terms ka ratio nikalo."
          )}
        </T>
      </Fade>

      {/* beat 1 — the standard device */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "standard device: ratio of mth terms = ratio of sums at n = 2m-1",
            "standard device: mth terms ka ratio = n=2m-1 par sums ka ratio"
          )}
        </T>
      </Fade>

      {/* beat 2 — boxed formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={370} y={120} w={340} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          {"a_m/b_m = S_(2m-1)/T_(2m-1)"}
        </Chip>
      </Fade>

      {/* beat 3 — plug in m=24 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={195} size={15} fill={INK} anchor="middle" script>
          {t("for the 24th terms: m = 24 ⇒ n = 2(24)-1 = 47", "24th terms ke liye: m = 24 ⇒ n = 2(24)-1 = 47")}
        </T>
      </Fade>

      {/* beat 4 — compute */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={230} size={16} fill={INK} anchor="middle">
          {"(7(47)+1)/(4(47)+17) = 330/205 = 66/41"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: why 2m-1 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 255 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={275} size={15} fill={RED} anchor="start" script>
          {t("why 2m-1? S_(2m-1)/(2m-1) collapses", "kyun 2m-1? S_(2m-1)/(2m-1) collapse")}
        </T>
        <T x={96} y={315} size={15} fill={RED} anchor="start" script>
          {t("to exactly the mth term", "hokar exactly mth term ban jaata hai")}
        </T>
      </Fade>

      {/* beat 6 — boxed answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={350} y={345} w={380} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={17}>
          {t("24th terms are in ratio 66 : 41", "24th terms ka ratio 66 : 41 hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
