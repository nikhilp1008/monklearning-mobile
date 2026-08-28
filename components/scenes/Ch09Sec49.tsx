/**
 * Ch09 · Section 49 — "Temperature: liquids down, gases up"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.14, 7.14, 8.14, 9.14, 10.14, 18.85]):
 *  0 title (always-on)
 *  1 text: heat a liquid and it flows more easily
 *  2 two mini graphs: liquid η vs T (falls), gas η vs T (rises)
 *  3 red-margin note: liquid viscosity falls as temperature rises
 *  4 text: heat a gas and it becomes more viscous
 *  5 red-margin note: gas viscosity rises as temperature rises
 *  6 text: getting this backwards is the topic's classic error
 *
 * Layout plan:
 *  b2 | left axes                 | Draw  | x200 y180..380 · x200..400 y380
 *  b2 | left line (falls)          | Draw   | (210,200)→(390,360)
 *  b2 | "η"/"T"/"liquid" (12/13)   | T      | x190 bl184 · x410 bl389 · x300 bl400
 *  b2 | right axes                 | Draw   | x650 y180..380 · x650..850 y380
 *  b2 | right line (rises)          | Draw   | (660,360)→(840,200)
 *  b2 | "η"/"T"/"gas" (12/13)       | T      | x640 bl184 · x860 bl389 · x750 bl400
 *  b1 | text (14, script)           | T mid  | x540  bl 114
 *  b3 | margin bar (red)            | Draw   | x460  y425..449
 *  b3 | note (script 14, red)       | T st   | x476.. bl 445
 *  b4 | text (14, script)           | T mid  | x540  bl 472
 *  b5 | margin bar (red)            | Draw   | x460  y490..514
 *  b5 | note (script 14, red)       | T st   | x476.. bl 510
 *  b6 | text (14, script)           | T mid  | x540  bl 540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("temperature: the opposite split", "temperature: opposite split")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("heat a liquid and it flows more easily", "liquid ko heat karo aur woh easily flow karta")}
        </T>
      </Fade>

      {/* beat 2 — two graphs */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 200 180 V 380 H 400" stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Draw on={beat >= 2} d="M 210 200 L 390 360" stroke={RED} sw={2.4} dur={0.7} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={190} y={184} size={12} fill={MUTED} anchor="end">
          η
        </T>
        <T x={410} y={389} size={12} fill={MUTED} anchor="start">
          T
        </T>
        <T x={300} y={400} size={13} fill={MUTED} anchor="middle">
          {t("liquid", "liquid")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M 650 180 V 380 H 850" stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Draw on={beat >= 2} d="M 660 360 L 840 200" stroke={INK} sw={2.4} dur={0.7} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={640} y={184} size={12} fill={MUTED} anchor="end">
          η
        </T>
        <T x={860} y={389} size={12} fill={MUTED} anchor="start">
          T
        </T>
        <T x={750} y={400} size={13} fill={MUTED} anchor="middle">
          {t("gas", "gas")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 425 L 460 449" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={445} size={14} fill={RED} script anchor="start">
          {t("liquid viscosity falls as temperature rises", "liquid viscosity temperature badhne se girti")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={472} size={14} fill={MUTED} script anchor="middle">
          {t("heat a gas and it becomes more viscous", "gas ko heat karo aur woh zyada viscous ho jaata")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 490 L 460 514" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={510} size={14} fill={RED} script anchor="start">
          {t("gas viscosity rises as temperature rises", "gas viscosity temperature badhne se badhti")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={540} size={14} fill={MUTED} script anchor="middle">
          {t("getting this backwards is the topic's classic error", "isse ulta samajhna topic ki classic error hai")}
        </T>
      </Fade>
    </Scene>
  );
}
