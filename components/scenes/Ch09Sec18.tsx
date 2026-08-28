/**
 * Ch09 · Section 18 — "Submerged iron block: weight, buoyancy, apparent weight" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 10.77, 20.58, 26.21, 33.55, 40.46]):
 *  0 title (always-on)
 *  1 RIGHT: given data
 *  2 LEFT: tank + block + weight arrow (down) + buoyancy arrow (up)
 *  3 (a) weight in air = mg, m = density × volume
 *  4 formula W = 7800×5×10⁻⁴×10 = 39 N
 *  5 (b) buoyancy uses fluid density and full volume
 *  6 formula F_B = 1000×5×10⁻⁴×10 = 5 N
 *  7 formula (green) W_app = 39 − 5 = 34 N
 *  8 red-margin note: still sinks, but feels lighter by the water it displaces
 *
 * Layout plan:
 *  b2 | tank                    | Draw  | x150..420  y200..420
 *  b2 | block (muted)           | rect   | x220..340  y280..380
 *  b2 | weight arrow + "W"      | Draw+T | x280 y385..415 · label bl 440
 *  b2 | buoyancy arrow + "F_B"  | Draw+T | x280 y230..275 · label bl 215
 *  b1 | text (13, muted)        | T st   | x520.. bl 150
 *  b3 | text (13, muted)        | T st   | x520.. bl 190
 *  b4 | formula (17, w700)      | T st   | x520.. bl 230
 *  b5 | text (13, muted)        | T st   | x520.. bl 270
 *  b6 | formula (17, w700)      | T st   | x520.. bl 310
 *  b7 | formula (18, w800, grn) | T st   | x520.. bl 350
 *  b8 | margin bar (red)        | Draw   | x460  y395..419
 *  b8 | note (script 14, red)   | T st   | x476.. bl 413
 */

import React from "react";
import { Rect, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("CBSE: submerged iron block", "CBSE: submerged iron block")}
        </T>
      </Fade>

      {/* beat 1 — given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={520} y={150} size={13} fill={MUTED} script anchor="start">
          {t("iron block: V = 500 cm³, ρ = 7800 kg/m³, in water", "iron block: V = 500 cm³, ρ = 7800 kg/m³, water mein")}
        </T>
      </Fade>

      {/* beat 2 — the submerged block, weight and buoyancy */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 150 200 V 420 H 420 V 200" stroke={INK} sw={2.2} dur={0.9} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 150 200 q 22 -8 45 0 q 22 8 45 0 q 22 -8 45 0 q 22 8 45 0 q 22 -8 45 0 q 22 8 45 0"
        stroke={INK}
        sw={1.6}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Rect x={220} y={280} width={120} height={100} fill={MUTED} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <Draw on={beat >= 2} d={arrowD(280, 385, 280, 415)} stroke={INK} sw={2.4} dur={0.4} />
        <T x={280} y={440} size={14} fill={INK} anchor="middle">
          W
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <Draw on={beat >= 2} d={arrowD(280, 275, 280, 230)} stroke={INK} sw={2.4} dur={0.4} />
        <T x={280} y={215} size={13} fill={INK} anchor="middle">
          F<TSpan fontSize={9} dy={3}>B</TSpan>
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={520} y={190} size={13} fill={MUTED} script anchor="start">
          {t("(a) weight in air = mg, m = density × volume", "(a) weight in air = mg, m = density × volume")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={520} y={230} size={17} fill={INK} weight={700} anchor="start">
          W = 7800 × 5×10⁻⁴ × 10 = 39 N
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={520} y={270} size={13} fill={MUTED} script anchor="start">
          {t("(b) buoyancy uses fluid density and full volume", "(b) buoyancy fluid density aur full volume use karti")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={520} y={310} size={17} fill={INK} weight={700} anchor="start">
          F<TSpan fontSize={12} dy={4}>B</TSpan>
          <TSpan dy={-4}> = 1000 × 5×10⁻⁴ × 10 = 5 N</TSpan>
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={520} y={350} size={18} fill={GREEN} weight={800} anchor="start">
          W<TSpan fontSize={12} dy={4}>app</TSpan>
          <TSpan dy={-4}> = 39 − 5 = 34 N</TSpan>
        </T>
      </Fade>

      {/* beat 8 */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 460 395 L 460 419" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={476} y={413} size={14} fill={RED} script anchor="start">
          {t(
            "it still sinks, but feels lighter by the water it displaces",
            "phir bhi sink hota, par displaced water jitna lighter feel hota"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
