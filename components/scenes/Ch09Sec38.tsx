/**
 * Ch09 · Section 38 — "Bernoulli everywhere: lift, atomizer, roofs"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.8, 17.83, 24.58, 30.72, 40.11, 46.25]):
 *  0 title (always-on)
 *  1 text: aeroplane wing — faster air on top, lower pressure, net lift
 *  2 wing + streamlines (compressed on top, spread below) + lift arrow
 *  3 text: spinning cricket ball swings via the Magnus effect
 *  4 red-margin note: storm winds over a roof lower pressure and lift it off
 *  5 text: one principle, a startling range of everyday phenomena
 *  6 text (green): learn the core relation once and all these follow
 *
 * Layout plan:
 *  b2 | wing (cream)             | Draw  | (280,300)..(720,295)
 *  b2 | top streamlines ×2        | Draw   | x250..750  y270/285
 *  b2 | bottom streamlines ×2     | Draw   | x250..750  y320/335
 *  b2 | lift arrow "LIFT"         | Draw+T | (500,290)→(500,220) · bl 205
 *  b2 | "faster (low P)" (12)     | T mid  | x500  bl 250
 *  b2 | "slower (high P)" (12)    | T mid  | x500  bl 355
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (14, script)         | T mid  | x540  bl 400
 *  b4 | margin bar (red)          | Draw   | x460  y422..446
 *  b4 | note (script 14, red)     | T st   | x476.. bl 442
 *  b5 | text (14, script)         | T mid  | x540  bl 472
 *  b6 | text (14, script, grn)    | T mid  | x540  bl 504
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("Bernoulli everywhere", "Bernoulli har jagah")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("wing: faster air on top, lower pressure, net lift", "wing: upar faster air, lower pressure, net lift")}
        </T>
      </Fade>

      {/* beat 2 — the wing and its flow */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Draw on={beat >= 2} d="M 280 300 Q 450 265 720 295 Q 450 325 280 300 Z" stroke={INK} sw={2} fill={CREAM} dur={1} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d="M 250 270 Q 450 235 750 270" stroke={INK} sw={1.6} dur={0.7} />
        <Draw on={beat >= 2} d="M 250 285 Q 450 255 750 285" stroke={INK} sw={1.6} dur={0.7} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Draw on={beat >= 2} d="M 250 320 Q 450 316 750 320" stroke={INK} sw={1.6} dur={0.7} />
        <Draw on={beat >= 2} d="M 250 335 Q 450 332 750 335" stroke={INK} sw={1.6} dur={0.7} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={500} y={250} size={12} fill={MUTED} anchor="middle">
          {t("faster (low P)", "faster (low P)")}
        </T>
        <T x={500} y={355} size={12} fill={MUTED} anchor="middle">
          {t("slower (high P)", "slower (high P)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <Draw on={beat >= 2} d={arrowD(500, 290, 500, 220)} stroke={GREEN} sw={3} dur={0.5} />
        <T x={500} y={205} size={14} fill={GREEN} weight={700} anchor="middle">
          {t("LIFT", "LIFT")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={14} fill={MUTED} script anchor="middle">
          {t("a spinning cricket ball swings via the Magnus effect", "spinning cricket ball Magnus effect se swing karti")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 460 422 L 460 446" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={476} y={442} size={14} fill={RED} script anchor="start">
          {t("storm winds over a roof can lift it clean off", "roof ke upar storm winds usse pura utha sakti")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={472} size={14} fill={MUTED} script anchor="middle">
          {t("one principle, a startling range of everyday phenomena", "ek principle, everyday phenomena ki startling range")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={504} size={14} fill={GREEN} script anchor="middle">
          {t("learn the core relation once and all these follow", "core relation ek baar seekho — baaki sab follow karta")}
        </T>
      </Fade>
    </Scene>
  );
}
