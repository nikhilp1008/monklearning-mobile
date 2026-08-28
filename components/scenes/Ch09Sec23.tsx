/**
 * Ch09 · Section 23 — "Effective gravity: one trick for all"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 7.68, 18.52, 26.37, 35.5, 45.23, 53.67]):
 *  0 title (always-on)
 *  1 text: in an accelerating fluid, the surface is no longer flat
 *  2 vector triangle: g (down), a (across), g_eff (resultant, green)
 *  3 text: combine real gravity with a pseudo-force into g_eff
 *  4 formula (green) g_eff = √(a² + g²)
 *  5 red-margin note: the free surface always sits ⊥ to g_eff
 *  6 text (green): measure depth along g_eff and statics still works
 *
 * Layout plan:
 *  b1 | text (14, script)      | T mid  | x540  bl 114
 *  b2 | g vector (down)         | Draw+T | (400,280)→(400,360) · "g" x415 bl 324
 *  b2 | a vector (across)       | Draw+T | (400,360)→(480,360) · "a" x440 bl 378
 *  b2 | g_eff vector (green)    | Draw+T | (400,280)→(480,360) · "g_eff" x455 bl 306
 *  b3 | text (14, script)       | T mid  | x540  bl 420
 *  b4 | formula (20, w800, grn) | T mid  | x540  bl 460
 *  b5 | margin bar (red)        | Draw   | x460  y495..519
 *  b5 | note (script 14, red)   | T st   | x476.. bl 513
 *  b6 | text (14, script, grn)  | T mid  | x540  bl 552
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("effective gravity: one trick for all", "effective gravity: sabke liye ek trick")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("in an accelerating fluid, the surface is no longer flat", "accelerating fluid mein, surface flat nahi rehta")}
        </T>
      </Fade>

      {/* beat 2 — the vector triangle */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Draw on={beat >= 2} d={arrowD(400, 280, 400, 360)} stroke={INK} sw={2.4} dur={0.5} />
        <T x={415} y={324} size={14} fill={INK} anchor="start">
          g
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d={arrowD(400, 360, 480, 360)} stroke={INK} sw={2.4} dur={0.5} />
        <T x={440} y={378} size={14} fill={INK} anchor="middle">
          a
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Draw on={beat >= 2} d={arrowD(400, 280, 480, 360)} stroke={GREEN} sw={3} dur={0.6} />
        <T x={455} y={306} size={14} fill={GREEN} weight={700} anchor="start">
          g<TSpan fontSize={10} dy={4}>eff</TSpan>
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={420} size={14} fill={MUTED} script anchor="middle">
          {t("combine real gravity with a pseudo-force into g_eff", "real gravity aur pseudo-force ko milao — g_eff")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={460} size={20} fill={GREEN} weight={800} anchor="middle">
          g<TSpan fontSize={13} dy={4}>eff</TSpan>
          <TSpan dy={-4}> = √(a² + g²)</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 495 L 460 519" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={513} size={14} fill={RED} script anchor="start">
          {t("the free surface always sits ⊥ to g_eff", "free surface hamesha g_eff ke ⊥ hota")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={552} size={14} fill={GREEN} script anchor="middle">
          {t("measure depth along g_eff and statics still works", "g_eff ke saath depth measure karo — statics chalti rehti")}
        </T>
      </Fade>
    </Scene>
  );
}
