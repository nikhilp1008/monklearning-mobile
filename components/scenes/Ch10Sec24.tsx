/**
 * Ch10 · Section 24 — "Worked example: ice and steam in one box"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: hi reveals [0,1,2,3,4,5,6] — ALL beats exactly 1s apart, so
 * every Fade delay below stays ≤ ~0.25s regardless of beat.
 *
 * Beats:
 *  0 hook: the hardest kind — determine the final state, don't assume it
 *  1 setup: 30g ice(-10°C) + 5g steam(100°C), find final T + composition
 *  2 cold budget (to 0°C water): 150+2400 = 2550 cal needed
 *  3 hot budget (to 0°C water): 2700+500 = 3200 cal available
 *  4 test: condensing alone gives 2700 > 2550 ⇒ all melts/condenses
 *  5 balance: 2550+30T = 3200-5T ⇒ T ≈ 18.6°C
 *  6 confirm: 35g water at 18.6°C — between 0 and 100 ✓
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl88
 *  b1 | setup mid x540 bl115
 *  b2 | cold budget mid x540 bl148
 *  b3 | hot budget mid x540 bl180
 *  b4 | test mid x540 bl215
 *  b5 | box x330..750 y240..285 · balance mid x540 bl267
 *  b6 | confirm mid x540 bl315
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
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("worked example — ice and steam in one box", "worked example — ek box mein baraf aur bhaap")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.12)}>
        <T x={540} y={88} size={12} fill={INK} script anchor="middle">
          {t("the hardest kind — find the final state, never assume it", "sabse mushkil — final state pata karo, guess nahi")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.12)}>
        <T x={540} y={115} size={12} fill={INK} script anchor="middle">
          {t(
            "30g ice(-10°C) + 5g steam(100°C), insulated — final T + composition?",
            "30g ice(-10°C) + 5g steam(100°C), insulated — final T + composition?"
          )}
        </T>
      </Fade>

      {/* beat 2 — cold side budget */}
      <Fade on={beat >= 2} delay={dl(2, 0.12)}>
        <T x={540} y={148} size={13} fill={INK} anchor="middle">
          {t("cold side needs: 150 + 2400 = 2550 cal", "cold side ko chahiye: 150 + 2400 = 2550 cal")}
        </T>
      </Fade>

      {/* beat 3 — hot side budget */}
      <Fade on={beat >= 3} delay={dl(3, 0.12)}>
        <T x={540} y={180} size={13} fill={INK} anchor="middle">
          {t("hot side gives: 2700 + 500 = 3200 cal", "hot side deta: 2700 + 500 = 3200 cal")}
        </T>
      </Fade>

      {/* beat 4 — the test */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={215} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t(
            "2700 > 2550 ⇒ all ice melts, all steam condenses",
            "2700 > 2550 ⇒ saara ice pighlega, saara steam condense hoga"
          )}
        </T>
      </Fade>

      {/* beat 5 — the balance */}
      <Draw on={beat >= 5} delay={dl(5, 0.12)} d="M330 240 h420 v45 h-420 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.45)}>
        <T x={540} y={267} size={14} fill={GREEN} weight={800} anchor="middle">
          2550+30T = 3200−5T ⇒ T ≈ 18.6°C
        </T>
      </Fade>

      {/* beat 6 — confirm */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <T x={540} y={315} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "35g water at 18.6°C — between 0 and 100, both phase changes confirmed",
            "35g paani 18.6°C par — 0 aur 100 ke beech, dono phase change confirm"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
