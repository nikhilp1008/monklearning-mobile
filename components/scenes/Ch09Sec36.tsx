/**
 * Ch09 · Section 36 — "The equation of continuity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 7.17, 15.87, 16.87, 17.87, 18.87, 19.87]):
 *  0 title (always-on)
 *  1 text: the same volume per second crosses the wide and narrow parts
 *  2 tapered pipe + slow wide-arrow v1 + fast narrow-arrow v2
 *  3 formula (green) A1v1 = A2v2
 *  4 text: shrink the area and the speed must rise
 *  5 red-margin note: Av is the volume flow rate Q
 *  6 text: a thumb over a hose sends water spraying fast and far
 *
 * Layout plan:
 *  b2 | pipe top wall             | Draw  | x150..750  y250→280
 *  b2 | pipe bottom wall          | Draw   | x150..750  y350→320
 *  b2 | wide arrow "v1"           | Draw+T | (200,300)→(340,300) · label x270 bl 285
 *  b2 | narrow arrow "v2"         | Draw+T | (560,300)→(740,300) · label x650 bl 285
 *  b2 | "A1,v1" / "A2,v2" (12)    | T mid  | x270/x650  bl 370
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (22, w800, grn)   | T mid  | x540  bl 410
 *  b4 | text (14, script)         | T mid  | x540  bl 445
 *  b5 | margin bar (red)          | Draw   | x460  y468..492
 *  b5 | note (script 14, red)     | T st   | x476.. bl 488
 *  b6 | text (14, script)         | T mid  | x540  bl 522
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("the equation of continuity", "continuity ka equation")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("same volume per second crosses the wide and narrow parts", "wide aur narrow parts se same volume per second guzarta")}
        </T>
      </Fade>

      {/* beat 2 — the tapered pipe */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 150 250 H 400 L 500 280 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 150 350 H 400 L 500 320 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Draw on={beat >= 2} d={arrowD(200, 300, 340, 300)} stroke={INK} sw={2.2} dur={0.5} />
        <T x={270} y={285} size={13} fill={INK} anchor="middle">
          v₁
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw on={beat >= 2} d={arrowD(560, 300, 740, 300)} stroke={INK} sw={2.6} dur={0.4} />
        <T x={650} y={285} size={13} fill={INK} anchor="middle">
          v₂
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={270} y={370} size={12} fill={MUTED} anchor="middle">
          A₁, v₁
        </T>
        <T x={650} y={370} size={12} fill={MUTED} anchor="middle">
          A₂, v₂
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={410} size={22} fill={GREEN} weight={800} anchor="middle">
          A₁v₁ = A₂v₂
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={445} size={14} fill={MUTED} script anchor="middle">
          {t("shrink the area and the speed must rise", "area shrink karo — speed rise honi hi hai")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 468 L 460 492" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={488} size={14} fill={RED} script anchor="start">
          {t("Av is the volume flow rate Q", "Av hi volume flow rate Q hai")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={522} size={14} fill={MUTED} script anchor="middle">
          {t("a thumb over a hose sends water spraying fast and far", "hose pe thumb rakho — water fast aur door spray hota")}
        </T>
      </Fade>
    </Scene>
  );
}
