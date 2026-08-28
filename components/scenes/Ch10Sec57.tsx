/**
 * Ch10 · Section 57 — "Worked example: reading a gas thermometer"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,14.82,20.46,27.54,38.03,42.47] — beats 0-1 exactly 1s
 * apart, so those Fade delays stay ≤ ~0.3s):
 *  0 hook: a clean board reading of a gas thermometer
 *  1 setup: reads 80mmHg at triple point, 100mmHg in a hot bath — find T
 *  2 given: P_tr=80, P_bath=100
 *  3 P ∝ absolute T, so T scales with the pressure ratio
 *  4 T = 273.16 × (100/80) = 341.45 K
 *  5 in Celsius: about 68.3°C
 *  6 takeaway: only ONE fixed point needed — the triple point
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | setup mid x540 bl120
 *  b2 | given mid x540 bl155
 *  b3 | note mid x540 bl188
 *  b4 | box x350..730 y212..254 · T mid x540 bl238
 *  b5 | celsius mid x540 bl285
 *  b6 | takeaway mid x540 bl320
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("worked example — reading a gas thermometer", "worked example — gas thermometer padhna")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("a clean board reading of a gas thermometer", "gas thermometer ki ek saaf board reading")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={120} size={12} fill={INK} script anchor="middle">
          {t(
            "reads 80mmHg at triple point, 100mmHg in a hot bath — find T",
            "triple point par 80mmHg, garam bath mein 100mmHg — T nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 2 — given */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={155} size={13} fill={INK} anchor="middle">
          P_tr=80, P_bath=100
        </T>
      </Fade>

      {/* beat 3 — the ratio idea */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={188} size={12} fill={MUTED} script anchor="middle">
          {t("P ∝ absolute T — scales directly with the pressure ratio", "P ∝ absolute T — pressure ke ratio se seedha scale")}
        </T>
      </Fade>

      {/* beat 4 — the answer in kelvin */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M350 212 h380 v42 h-380 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={238} size={15} fill={GREEN} weight={800} anchor="middle">
          T = 273.16×(100/80) = 341.45 K
        </T>
      </Fade>

      {/* beat 5 — in Celsius */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={285} size={13} fill={INK} anchor="middle">
          {t("in Celsius: about 68.3°C", "Celsius mein: lagbhag 68.3°C")}
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={320} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "the economy: only ONE fixed point needed — the triple point",
            "ye economy hai: sirf EK fixed point chahiye — triple point"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
