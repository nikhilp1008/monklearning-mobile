/**
 * Ch09 · Section 74 — "Surface tension equals surface energy"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 17.26]):
 *  0 title (always-on)
 *  1 text: soap film on a U-frame with a sliding wire of length l; two faces
 *  2 frame + film + wire pulled from y300 to y340 (dashed) + x bracket
 *  3 text: pull the wire out by x against the film's inward pull
 *  4 formula F = 2Sl
 *  5 formula W = Fx = 2Slx
 *  6 formula 2Slx = E(2lx)
 *  7 red-margin note: so S = E — surface tension equals surface energy per area
 *
 * Layout plan:
 *  b2 | rails ×2                  | Draw  | x300 & x600  y200..400
 *  b2 | film (cream)              | rect   | x300..600  y200..300
 *  b2 | wire (original)           | Draw   | x300..600  y300
 *  b2 | wire (displaced, dashed)  | line   | x300..600  y340
 *  b2 | film extension (cream)    | rect   | x300..600  y300..340
 *  b2 | x bracket + label         | Draw+T | x300..600  y355 · bl 370
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 420
 *  b4 | formula (18, w700)        | T mid  | x540  bl 448
 *  b5 | formula (17, w700)        | T mid  | x540  bl 476
 *  b6 | formula (16, w700)        | T mid  | x540  bl 504
 *  b7 | margin bar (red)          | Draw   | x460  y524..548
 *  b7 | note (script 14, green)   | T st   | x476.. bl 544
 */

import React from "react";
import { Line, Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec74({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("surface tension = surface energy", "surface tension = surface energy")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("soap film on a U-frame, sliding wire of length l, two faces", "U-frame pe soap film, length l ka sliding wire, do faces")}
        </T>
      </Fade>

      {/* beat 2 — pulling the wire out by x */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Rect x={300} y={200} width={300} height={140} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d="M 300 200 V 400" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 600 200 V 400" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d="M 300 300 H 600" stroke={INK} sw={3} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Line x1={300} y1={340} x2={600} y2={340} stroke={MUTED} strokeWidth={2.4} strokeDasharray="6 5" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Draw on={beat >= 2} d="M 300 355 V 360 M 600 355 V 360 M 300 358 H 600" stroke={INK} sw={1.4} dur={0.5} />
        <T x={450} y={375} size={12} fill={MUTED} anchor="middle">
          x
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={420} size={13} fill={MUTED} script anchor="middle">
          {t("pull the wire out by x against the film's inward pull", "wire ko x se bahar khincho, film ke inward pull ke against")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={448} size={18} fill={INK} weight={700} anchor="middle">
          F = 2Sl
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={476} size={17} fill={INK} weight={700} anchor="middle">
          W = Fx = 2Slx
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={504} size={16} fill={INK} weight={700} anchor="middle">
          2Slx = E(2lx)
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 524 L 460 548" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={544} size={14} fill={GREEN} script anchor="start">
          {t("so S = E — surface tension equals surface energy per area", "toh S = E — surface tension = surface energy per area")}
        </T>
      </Fade>
    </Scene>
  );
}
