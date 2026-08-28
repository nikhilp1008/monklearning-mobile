/**
 * Ch09 · Section 33 — "Rotating cylinder: exposing the bottom" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 9.56, 21.33, 30.04, 38.57, 39.57, 40.57, 41.57]):
 *  0 title (always-on)
 *  1 text: R=10cm, H=20cm at rest; spin until the centre bares the base
 *  2 cylinder + dashed H reference + paraboloid touching the base + "2H" label
 *  3 text: volume conservation with the vertex at the bottom
 *  4 formula ω²R²/4g = H ⇒ ω = (2/R)√(gH)
 *  5 formula ω = (2/0.10)√(10×0.20) = 20√2 ≈ 28.3 rad/s
 *  6 formula (green) z_rim = ω²R²/2g = 0.40 m
 *  7 red-margin note: rim reaches 2H — double the original depth
 *
 * Layout plan:
 *  b2 | cylinder walls            | Draw  | x350..650  y200..420
 *  b2 | H reference (dashed)      | line   | x350..650  y310 · "H" x660 bl 314
 *  b2 | paraboloid (touches base) | Draw   | (350,200) Q (500,640) (650,200)
 *  b2 | "2H" (12, green)          | T st   | x660  bl 205
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 445
 *  b4 | formula (15, w700)        | T mid  | x540  bl 475
 *  b5 | formula (14, w700)        | T mid  | x540  bl 503
 *  b6 | formula (15, w800, grn)   | T mid  | x540  bl 531
 *  b7 | margin bar (red)          | Draw   | x460  y551..575
 *  b7 | note (script 14, red)     | T st   | x476.. bl 571
 */

import React from "react";
import { Line, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("JEE Advanced: expose the bottom", "JEE Advanced: expose the bottom")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("R=10cm, H=20cm at rest; spin till centre bares the base", "R=10cm, H=20cm rest pe; spin karo jab tak centre khula na ho")}
        </T>
      </Fade>

      {/* beat 2 — the exposed vertex */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 350 200 V 420 H 650 V 200" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Line x1={350} y1={310} x2={650} y2={310} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 4" />
        <T x={660} y={314} size={12} fill={MUTED} anchor="start">
          H
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Draw on={beat >= 2} d="M 350 200 Q 500 640 650 200" stroke={AMBER_DARK} sw={2.4} dur={1} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={660} y={205} size={12} fill={GREEN} anchor="start">
          2H
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={445} size={13} fill={MUTED} script anchor="middle">
          {t("volume conservation, vertex at the bottom", "volume conservation, vertex bottom pe")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={475} size={15} fill={INK} weight={700} anchor="middle">
          ω²R²/4g = H  ⇒  ω = (2/R)√(gH)
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={503} size={14} fill={INK} weight={700} anchor="middle">
          ω = (2/0.10)√(10×0.20) = 20√2 ≈ 28.3 rad/s
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={531} size={15} fill={GREEN} weight={800} anchor="middle">
          z<TSpan fontSize={10} dy={4}>rim</TSpan>
          <TSpan dy={-4}> = ω²R²/2g = 0.40 m</TSpan>
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 551 L 460 575" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={571} size={14} fill={RED} script anchor="start">
          {t("rim reaches 2H — double the original depth", "rim 2H tak pahuchta — original depth se double")}
        </T>
      </Fade>
    </Scene>
  );
}
