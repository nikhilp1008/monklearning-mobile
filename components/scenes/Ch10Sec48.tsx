/**
 * Ch10 · Section 48 — "Worked example: two stages of Newton's cooling"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,9.25,23.16,35.37,41.08] — beats 0-1 exactly 1s apart,
 * so those Fade delays stay ≤ ~0.3s):
 *  0 hook: shows the character of Newton's cooling right in the numbers
 *  1 setup: block 80°C→60°C in 5min, room 20°C — time for 60°C→40°C?
 *  2 method: average-temperature form, mean T during each interval
 *  3 stage 1: (80−60)/5 = k(70−20) ⇒ 4=50k ⇒ k=0.08/min
 *  4 stage 2: (60−40)/t = 0.08×30 = 2.4
 *  5 20/t = 2.4 ⇒ t ≈ 8.3 minutes
 *  6 deeper point: same 20° drop takes LONGER — smaller excess, slower
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | setup mid x540 bl118
 *  b2 | method mid x540 bl150
 *  b3 | stage1 mid x540 bl182
 *  b4 | stage2 mid x540 bl214
 *  b5 | box x400..680 y240..282 · answer mid x540 bl267
 *  b6 | deeper mid x540 bl315
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

export default function Ch10Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("worked example — two stages of newton's cooling", "worked example — newton's cooling ke do stages")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("shows the character of Newton's cooling in the numbers", "numbers mein Newton's cooling ka asli character")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={118} size={12} fill={INK} script anchor="middle">
          {t(
            "block: 80°C→60°C in 5min, room 20°C — time for 60°C→40°C?",
            "block: 80°C→60°C 5min mein, room 20°C — 60°C→40°C ka time?"
          )}
        </T>
      </Fade>

      {/* beat 2 — the method */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={150} size={12} fill={MUTED} script anchor="middle">
          {t("average-temperature form — mean T during each interval", "average-temperature form — har interval ka mean T")}
        </T>
      </Fade>

      {/* beat 3 — stage 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={182} size={13} fill={INK} anchor="middle">
          (80−60)/5 = k(70−20) ⇒ k=0.08/min
        </T>
      </Fade>

      {/* beat 4 — stage 2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={214} size={13} fill={INK} anchor="middle">
          (60−40)/t = 0.08×30 = 2.4
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M400 240 h280 v42 h-280 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={267} size={15} fill={GREEN} weight={800} anchor="middle">
          t ≈ 8.3 {t("minutes", "minute")}
        </T>
      </Fade>

      {/* beat 6 — the deeper point */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={315} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "same 20° drop takes LONGER — smaller excess, slower cooling",
            "wahi 20° ka drop LAMBA time leta — chhota excess, dheemi cooling"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
