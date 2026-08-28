/**
 * Ch07 · Section 66 — "Tides: the difference in pull across a body"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.85, 17.66, 24.49, 32.34, 47.79, 56.58, 72.96]):
 *  0 title
 *  1 diagram: Earth ellipse (bulging both sides), Moon, near/far arrows
 *  2 amber: the difference matters, not the pull itself
 *  3 red: tidal force — stretches along the line
 *  4 amber: two bulges → two high tides a day
 *  5 red: puzzle — Sun pulls harder, yet Moon dominates
 *  6 green box: tides ∝ 1/r³, not 1/r²
 *  7 green margin: Roche limit → planetary rings
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth ellipse cx220 cy280 rx100 ry70 · Moon (450,280) r16 ·
 *   near arrow (300,280)→(340,280) long · far arrow (140,280)→(110,280) short ·
 *   caption cx220 bl400
 *  b2 | line st x480 bl150
 *  b3 | bar x460 y175..227 lines bl195/221
 *  b4 | line st x480 bl260
 *  b5 | bar x66 y440..492... actually keep right col
 *  b6 | green box x480..900 y290..342(bl322)
 *  b7 | bar x66 y440..492 lines bl460/486
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — why oceans bulge both sides */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Why the oceans bulge on BOTH sides",
            "Oceans DONO taraf kyun ubharte hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — near pulled more, far less */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 120 280 A 100 70 0 1 1 319.9 280"
        stroke={INK}
        sw={2.4}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle cx={450} cy={280} r={16} fill={AMBER_DARK} />
        <T x={450} y={318} size={11} fill={AMBER_DARK} weight={700}>
          Moon
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d={arrowD(300, 280, 345, 280)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d={arrowD(140, 280, 118, 280)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={220} y={400} size={12} fill={INK} script>
          {t(
            "near side: strong pull · far side: weak pull",
            "near side: strong pull · far side: weak pull"
          )}
        </T>
      </Fade>

      {/* beat 2 — the difference matters */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the DIFFERENCE matters — not the pull itself",
            "DIFFERENCE matter karta hai — pull khud nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — tidal force stretches */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 460 175 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={478} y={195} size={13} fill={RED} script anchor="start">
          {t(
            "this is a TIDAL FORCE —",
            "yahi ek TIDAL FORCE hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={478} y={221} size={13} fill={RED} script anchor="start">
          {t(
            "stretches the body along the line",
            "body ko line ke saath khinchta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — two bulges, two tides */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={260} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "bulges BOTH toward and away from the Moon",
            "Moon ki taraf aur usse door DONO taraf bulge"
          )}
        </T>
      </Fade>

      {/* beat 5 — the puzzle */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={230} size={13} fill={RED} script anchor="start">
          {t(
            "puzzle: Sun pulls far harder — yet Moon dominates tides?",
            "puzzle: Sun zyada zor se kheenchta — phir Moon tides par haavi?"
          )}
        </T>
      </Fade>

      {/* beat 6 — the 1/r³ resolution */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 492 290 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={690} y={322} size={14} fill={INK} weight={800}>
          {t(
            "tides ∝ 1⁄r³, pull ∝ 1⁄r² — Moon wins",
            "tides ∝ 1⁄r³, pull ∝ 1⁄r² — Moon jeetta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — Roche limit */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={460} size={13} fill={GREEN} script anchor="start">
          {t(
            "inside the Roche limit, tides tear a moon apart",
            "Roche limit ke andar, tides moon ko cheer deti hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={486} size={13} fill={GREEN} script anchor="start">
          {t(
            "the very origin of planetary RINGS",
            "planetary RINGS ka asli mool"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
