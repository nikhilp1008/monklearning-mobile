/**
 * Ch09 · Section 44 — "Efflux speed from a side hole" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.63, 15.53, 25.34, 31.49, 36.35, 47.27]):
 *  0 title (always-on)
 *  1 text: tank 20 m high; hole 5 m above the base
 *  2 tank + H bracket + hole (near base) + jet
 *  3 red-margin note: use the depth below the surface, mind the factor of two
 *  4 formula H−h = 20−5 = 15 m
 *  5 formula (green) v = √(2g(H−h)) = √(2×10×15) ≈ 17.3 m/s
 *  6 red-margin note: Torricelli is free fall through the depth
 *
 * Layout plan:
 *  b2 | tank walls + gap          | Draw  | x300..550  y150..450 (gap y375..390)
 *  b2 | H bracket + label         | Draw+T | x270..280  y150..450 · "H=20m" x260 bl 304
 *  b2 | water jet arc              | Draw   | (550,382) Q (610,390) (645,418)
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | margin bar (red)           | Draw   | x460  y468..492
 *  b3 | note (script 13, red)      | T st   | x476.. bl 488
 *  b4 | formula (17, w700)         | T mid  | x540  bl 518
 *  b5 | formula (16, w800, grn)    | T mid  | x540  bl 550
 *  b6 | margin bar (red)           | Draw   | x460  y565..589
 *  b6 | note (script 13, red)      | T st   | x476.. bl 585
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("NEET speed trap: efflux speed", "NEET speed trap: efflux speed")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("tank 20 m high; hole 5 m above the base", "tank 20 m high; hole base se 5 m upar")}
        </T>
      </Fade>

      {/* beat 2 — the tank and low hole */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 300 150 V 450 H 550 V 390" stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d="M 550 375 V 150" stroke={INK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.4)}
        d="M 300 150 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw on={beat >= 2} d="M 270 150 H 280 M 270 450 H 280 M 275 150 V 450" stroke={INK} sw={1.4} dur={0.6} />
        <T x={260} y={304} size={13} fill={INK} anchor="end">
          H=20m
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Draw on={beat >= 2} d="M 550 382 Q 610 390 645 418" stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      </Fade>

      {/* beat 3 */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 468 L 460 492" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={488} size={13} fill={RED} script anchor="start">
          {t("use depth below the surface — mind the factor of two", "surface ke neeche wali depth use karo — factor of two yaad rakho")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={518} size={17} fill={INK} weight={700} anchor="middle">
          H−h = 20−5 = 15 m
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={550} size={16} fill={GREEN} weight={800} anchor="middle">
          v = √(2×10×15) ≈ 17.3 m/s
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 565 L 460 589" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={585} size={13} fill={RED} script anchor="start">
          {t("Torricelli is free fall through the depth", "Torricelli depth ke through free fall hai")}
        </T>
      </Fade>
    </Scene>
  );
}
