/**
 * Ch09 · Section 83 — "Parallel plates and the double bubble" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 5.0, 17.12, 31.37]):
 *  0 title (always-on)
 *  1 text: (a) water between plates a distance d apart, angle 0
 *  2 two parallel plates + risen water + meniscus
 *  3 formula 2S/d = ρgh ⇒ h = 2S/ρgd
 *  4 text: (b) two soap bubbles, radii a and b (a bigger), share a film
 *  5 text: the smaller bubble has the larger excess pressure
 *  6 formula (green) 4S/R = 4S/b − 4S/a ⇒ R = ab/(a−b)
 *  7 red-margin note: the common film bulges into the larger bubble
 *
 * Layout plan:
 *  b2 | plate walls                | Draw  | x400 & x460  y200..400
 *  b2 | meniscus (concave)         | Draw   | (400,250) Q (430,262) (460,250)
 *  b2 | "d" bracket + label        | Draw+T | x400..460  y210 · bl 200
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | formula (17, w700)         | T mid  | x540  bl 430
 *  b4 | text (13, script)          | T mid  | x540  bl 458
 *  b5 | text (13, script)          | T mid  | x540  bl 484
 *  b6 | formula (17, w800, grn)    | T mid  | x540  bl 512
 *  b7 | margin bar (red)           | Draw   | x460  y532..556
 *  b7 | note (script 13, red)      | T st   | x476.. bl 552
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec83({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={20} fill={RED} script>
          {t("JEE Advanced: plates and double bubble", "JEE Advanced: plates and double bubble")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("(a) water between plates, distance d apart, angle 0", "(a) plates ke beech water, distance d, angle 0")}
        </T>
      </Fade>

      {/* beat 2 — the plates */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 400 200 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 460 200 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d="M 400 250 Q 430 262 460 250" stroke={INK} sw={2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Draw on={beat >= 2} d="M 400 210 V 215 M 460 210 V 215 M 400 212 H 460" stroke={INK} sw={1.3} dur={0.5} />
        <T x={430} y={200} size={12} fill={MUTED} anchor="middle">
          d
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={430} size={17} fill={INK} weight={700} anchor="middle">
          2S/d = ρgh ⇒ h = 2S/ρgd
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={458} size={13} fill={MUTED} script anchor="middle">
          {t("(b) two soap bubbles, radii a and b (a bigger), share a film", "(b) do soap bubbles, radii a aur b (a bada), ek film share karte")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={484} size={13} fill={MUTED} script anchor="middle">
          {t("the smaller bubble has the larger excess pressure", "chota bubble ka excess pressure zyada hota")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={512} size={17} fill={GREEN} weight={800} anchor="middle">
          4S/R = 4S/b − 4S/a ⇒ R = ab/(a−b)
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 532 L 460 556" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={552} size={13} fill={RED} script anchor="start">
          {t("the common film bulges into the larger bubble", "common film bade bubble mein bulge karta")}
        </T>
      </Fade>
    </Scene>
  );
}
