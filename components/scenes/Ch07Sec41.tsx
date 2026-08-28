/**
 * Ch07 · Section 41 — "Potential energy of two masses, by integration"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.4, 19.29, 26.54, 35.5, 48.55, 49.55, 50.55, 51.55]):
 *  0 title + diagram: M fixed, m coming in from ∞, arrow
 *  1 (continues diagram) caption: gravity does positive work
 *  2 definition line: U(r) = −W
 *  3 integral setup
 *  4 the integral evaluated → +GMm/r
 *  5 green box: U(r) = −GMm/r
 *  6 red: negative because system released energy
 *  7 many-particle sum
 *  8 red margin: n(n−1)/2 pairs, surface value
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  M (220,270) r18 · m at ∞ (420,270) r6 · arrow (400,270)→(280,270) · "r" dim ·
 *   caption cx320 bl340
 *  right col x480: b2 line bl150 · b3 line bl195 · b4 line bl240 ·
 *  b5 green box x480..820 y270..322 (bl302) · b6 line bl365
 *  b7 line st x100 bl420 · b8 bar x66 y460..512 lines bl480/506
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
  RED,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — bring m in from infinity */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Deriving U(r) = −GMm ⁄ r", "U(r) = −GMm ⁄ r derive karna")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1)}>
        <Circle cx={220} cy={270} r={18} fill={INK} />
        <T x={220} y={310} size={12} fill={INK} weight={700}>
          M
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.6)}>
        <Circle cx={420} cy={270} r={6} fill={MUTED} />
        <T x={420} y={250} size={11} fill={MUTED} weight={700}>
          m {t("(at ∞)", "(∞ par)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.4)}
        d={arrowD(400, 270, 260, 270)}
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — positive work along the way */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={320} y={340} size={12} fill={RED} script>
          {t(
            "gravity pulls it in — POSITIVE work along the way",
            "gravity andar kheenchti hai — raste bhar POSITIVE work"
          )}
        </T>
      </Fade>

      {/* beat 2 — definition */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={16} fill={INK} anchor="start" weight={700}>
          {t("definition:", "definition:")}  U(r) = −W(gravity)
        </T>
      </Fade>

      {/* beat 3 — the integral */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={15} fill={INK} anchor="start" weight={700}>
          U(r) = −∫∞ᵣ F·dx
        </T>
      </Fade>

      {/* beat 4 — evaluate */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={240} size={14} fill={INK} anchor="start" weight={700}>
          W = ∫∞ʳ (−GMm⁄x²)dx = +GMm ⁄ r
        </T>
      </Fade>

      {/* beat 5 — the result */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 492 270 h 316 q 12 0 12 12 v 28 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={650} y={302} size={18} fill={INK} weight={800}>
          U(r) = −GMm ⁄ r
        </T>
      </Fade>

      {/* beat 6 — why negative */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={365} size={12} fill={RED} script anchor="start">
          {t(
            "negative: gravity did positive work → system released energy",
            "negative: gravity ne positive work kiya → system ne energy chhodi"
          )}
        </T>
      </Fade>

      {/* beat 7 — many particles */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={100} y={420} size={16} fill={INK} anchor="start" weight={700}>
          U = −G·Σ(pairs) mᵢ·mⱼ ⁄ rᵢⱼ
        </T>
      </Fade>

      {/* beat 8 — pairs count and surface value */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 460 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={84} y={480} size={13} fill={RED} script anchor="start">
          {t(
            "n particles → n(n−1)⁄2 pairs",
            "n particles → n(n−1)⁄2 pairs"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={84} y={506} size={13} fill={RED} script anchor="start">
          {t(
            "at the surface: U = −GMm ⁄ R",
            "surface par: U = −GMm ⁄ R"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
