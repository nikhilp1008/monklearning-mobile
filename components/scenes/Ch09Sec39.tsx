/**
 * Ch09 · Section 39 — "Deriving the equation of continuity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.8, 13.14, 20.05, 29.7, 41.73, 42.73]):
 *  0 title (always-on)
 *  1 text: steady flow through a tube, no leak across the walls
 *  2 tapered pipe + two highlighted slugs (short/wide in, long/narrow out)
 *  3 text: in time dt, volume A1v1dt enters at section one
 *  4 red-margin note: incompressible fluid cannot accumulate inside
 *  5 formula A1v1 dt = A2v2 dt
 *  6 formula (green) A1v1 = A2v2
 *
 * Layout plan:
 *  b2 | pipe walls                | Draw  | x150..750  y250→280 / 350→320
 *  b2 | slug 1 (amber, short/wide)| rect   | x160..200  y255..345
 *  b2 | "A₁v₁dt" (12)             | T mid  | x180  bl 370
 *  b2 | slug 2 (amber, long/thin) | rect   | x690..750  y283..317
 *  b2 | "A₂v₂dt" (12)             | T mid  | x720  bl 340
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 400
 *  b4 | margin bar (red)          | Draw   | x460  y420..444
 *  b4 | note (script 14, red)     | T st   | x476.. bl 440
 *  b5 | formula (17, w700)        | T mid  | x540  bl 470
 *  b6 | formula (20, w800, grn)   | T mid  | x540  bl 502
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("deriving continuity", "continuity derive karte hain")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("steady flow through a tube, no leak across the walls", "tube se steady flow, walls se koi leak nahi")}
        </T>
      </Fade>

      {/* beat 2 — equal-volume slugs, different shapes */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 150 250 H 400 L 500 280 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 150 350 H 400 L 500 320 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Rect x={160} y={255} width={40} height={90} fill={AMBER} stroke={INK} strokeWidth={1.6} />
        <T x={180} y={370} size={12} fill={INK} anchor="middle">
          A₁v₁dt
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Rect x={690} y={283} width={60} height={34} fill={AMBER} stroke={INK} strokeWidth={1.6} />
        <T x={720} y={340} size={12} fill={INK} anchor="middle">
          A₂v₂dt
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={13} fill={MUTED} script anchor="middle">
          {t("in time dt, volume A₁v₁dt enters at section one", "time dt mein, section ek pe A₁v₁dt volume enter karta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 460 420 L 460 444" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={476} y={440} size={14} fill={RED} script anchor="start">
          {t("incompressible fluid cannot accumulate inside", "incompressible fluid andar accumulate nahi ho sakta")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={470} size={17} fill={INK} weight={700} anchor="middle">
          A₁v₁ dt = A₂v₂ dt
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={502} size={20} fill={GREEN} weight={800} anchor="middle">
          A₁v₁ = A₂v₂
        </T>
      </Fade>
    </Scene>
  );
}
