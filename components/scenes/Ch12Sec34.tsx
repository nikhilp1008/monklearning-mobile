/**
 * Ch12 · Section 34 — Worked example [JEE Main]: matching rms speeds across gases
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.4, 24.32, 32.17, 37.89, 40.53, 55.47]):
 *  0 title + problem · 1 equal vrms ⇒ equal T/M · 2 T_He/M_He=T_N2/M_N2 · 3
 *    solve: 350×4/28 · 4 =50K · 5 THE PICTURE: temperature bars N2 vs He,
 *    verdict lighter needs far lower T · 6 key-step takeaway
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 22, red)          | T mid | x270..810 y37..74 (bl62)
 *  b0 | problem (13, ink, script)       | T mid | x540 y92
 *  b1 | reasoning (14, ink, script)     | T mid | x540 y122
 *  b2 | ratio (16, ink)                 | T mid | x540 y152
 *  b3 | substitute (16, ink)             | T mid | x540 y182
 *  b4 | answer (20, amber_dark, bold)   | T mid | x540 y216
 *  b5 | N2 bar (tall) + He bar (short)  | rect  | x450 / x600 y260..410
 *  b5 | verdict (13, green, script)     | T mid | x540 y435
 *  b6 | key-step (script 15, green)     | T mid | x540 y470
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  arrowD,
  Draw,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} script>
          {t("matching rms speeds across gases [JEE Main]", "gases mein matching rms speeds [JEE Main]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={13} fill={INK} script>
          {t(
            "He (M=4) matches vrms of N₂ (M=28) @350 K ⇒ T_He?",
            "He (M=4) ka vrms N₂ (M=28) @350 K ke barabar ⇒ T_He?"
          )}
        </T>
      </Fade>

      {/* beat 1 — reasoning */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={122} size={14} fill={INK} script>
          {t(
            "equal vrms ⇒ shared factors cancel ⇒ equal T/M",
            "equal vrms ⇒ shared factors cancel ⇒ equal T/M"
          )}
        </T>
      </Fade>

      {/* beat 2 — ratio */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={152} size={16} fill={INK}>
          T_He/M_He = T_N₂/M_N₂
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={182} size={16} fill={INK}>
          T_He = 350 × 4 / 28
        </T>
      </Fade>

      {/* beat 4 — answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={216} size={20} fill={AMBER_DARK} weight={700}>
          = 50 K
        </T>
      </Fade>

      {/* beat 5 — THE PICTURE: temperature bars */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Rect x={450} y={260} width={44} height={150} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={472} y={248} size={13} fill={INK} weight={700}>
          N₂ 350K
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Rect x={600} y={389} width={44} height={21} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={622} y={378} size={13} fill={GREEN} weight={700}>
          He 50K
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d={arrowD(500, 270, 594, 385)} stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={540} y={435} size={13} fill={GREEN} script>
          {t(
            "lighter He needs far less energy ⇒ far lower T to match",
            "lighter He ko kam energy chahiye ⇒ kaafi lower T"
          )}
        </T>
      </Fade>

      {/* beat 6 — key-step takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={470} size={15} fill={GREEN} script weight={700}>
          {t(
            "key step: equal vrms ⇒ equal T/M — recognise it, rest is arithmetic",
            "key step: equal vrms ⇒ equal T/M — pehchano, baaki arithmetic hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
