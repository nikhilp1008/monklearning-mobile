/**
 * Ch12 · Section 33 — Worked example [NEET]: hydrogen versus oxygen
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.5, 20.48, 27.14, 31.49, 37.38, 51.97]):
 *  0 title + problem · 1 v∝1/√M ⇒ ratio=√(inverse mass ratio) · 2 ratio setup
 *    √(32/2) · 3 =√16=4 · 4 THE PICTURE: small fast H2 dot vs big slow O2 dot
 *    · 5 two traps: don't skip the root, don't invert · 6 rule: light=fast,
 *    universal relation
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 23, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | problem (14, ink, script)       | T mid | x540 y94
 *  b1 | reasoning (14, ink, script)     | T mid | x540 y126
 *  b2 | ratio (16, ink)                 | T mid | x540 y156
 *  b3 | result (16, ink)                | T mid | x540 y186
 *  b4 | H2 dot+arrow · O2 dot+arrow      | mix   | (300,240) (700,240)
 *  b4 | caption (14, green)             | T mid | x540 y288
 *  b5 | two traps (13, red)             | T mid | x540 y320 / y346
 *  b6 | rule lines (13/14)              | T mid | x540 y388 / y412
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  arrowD,
  Draw,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("hydrogen versus oxygen [NEET]", "hydrogen vs oxygen [NEET]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={14} fill={INK} script>
          {t(
            "same T: vrms(H₂, M=2) : vrms(O₂, M=32) = ?",
            "same T: vrms(H₂, M=2) : vrms(O₂, M=32) = ?"
          )}
        </T>
      </Fade>

      {/* beat 1 — reasoning */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={126} size={14} fill={INK} script>
          {t(
            "fixed T: v ∝ 1/√M ⇒ ratio = √(inverse mass ratio)",
            "fixed T: v ∝ 1/√M ⇒ ratio = √(inverse mass ratio)"
          )}
        </T>
      </Fade>

      {/* beat 2 — ratio setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={156} size={16} fill={INK}>
          vH₂ / vO₂ = √(32/2)
        </T>
      </Fade>

      {/* beat 3 — result */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={186} size={16} fill={INK} weight={700}>
          = √16 = 4
        </T>
      </Fade>

      {/* beat 4 — THE PICTURE: small fast H2 vs big slow O2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Circle cx={300} cy={240} r={5} fill={GREEN} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={arrowD(300, 240, 480, 240)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={300} y={220} size={13} fill={GREEN} weight={700}>
          H₂
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Circle cx={700} cy={240} r={11} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d={arrowD(700, 240, 740, 240)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={700} y={220} size={13} fill={INK} weight={700}>
          O₂
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={540} y={288} size={14} fill={GREEN}>
          {t("H₂ moves 4× faster than O₂", "H₂, O₂ se 4× tez chalta")}
        </T>
      </Fade>

      {/* beat 5 — two traps */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={320} size={13} fill={RED}>
          {t("✗ don't take 32/2 = 16 directly — take its root", "✗ 32/2 = 16 seedha mat lo — uska root lo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={346} size={13} fill={RED}>
          {t("✗ don't invert — the lighter gas is ALWAYS faster", "✗ invert mat karo — lighter gas HAMESHA tez")}
        </T>
      </Fade>

      {/* beat 6 — the rule */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={388} size={13} fill={INK} script>
          {t("sanity check: light = fast", "sanity check: light = fast")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={412} size={14} fill={GREEN} weight={700}>
          vA/vB = √(MB/MA)
        </T>
      </Fade>
    </Scene>
  );
}
