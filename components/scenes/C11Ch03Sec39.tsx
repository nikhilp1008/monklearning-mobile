/**
 * C11 Chemistry Ch03 · Section 39 — "Worked example: from configuration to oxide character"
 * Canvas 1080×620 · safe x36–1044, y30–596. JEE Main worked example.
 *
 * Beats (en [0, 10.58, 25.09, 34.73, 45.23, 57.34, 67.84, 82.94]):
 *  0 title + underline
 *  1 given: Z has ns²np⁴ — card 1 of the chain appears
 *  2 (a) 6 valence e⁻ ⇒ Group 16 — card 2 + arrow
 *  3 (b) min state: gain 2e⁻ ⇒ −2 (staging line)
 *  4 red-margin: max = valence e⁻ = +6 — card 3 (red border) + arrow
 *  5 (c) +6 state ⇒ 3 oxygens ⇒ ZO₃ (staging line)
 *  6 card 4: ZO₃ — ACIDIC (like SO₃→H₂SO₄) + arrow
 *  7 closing green stamp: configuration → group → OS range → oxide
 *
 * Layout plan:
 *  b1-2/4/6 | 4 chain cards + arrows | Draw | x65..1020 y120..220
 *  b3 | staging line (13, ink)       | T mid| x?..?     y240..250 (bl 250)
 *  b5 | staging line (13, ink)       | T mid| x?..?     y263..273 (bl 273)
 *  b7 | closing stamp (green)        | Chip | x200..880 y290..326
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const CARD_X = [65, 310, 555, 800];
const CARD_W = 220;
const CARD_Y = 120;
const CARD_H = 100;

export default function C11Ch03Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={18} fill={RED} script>
          {t("from configuration to oxide character (JEE Main)", "configuration se oxide character tak (JEE Main)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — card 1: the given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("Z: valence config ns²np⁴ → group? OS range? highest oxide?", "Z: valence config ns²np⁴ → group? OS range? highest oxide?")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Rect x={CARD_X[0]} y={CARD_Y} width={CARD_W} height={CARD_H} fill="none" stroke={INK} strokeWidth={2} />
        <T x={CARD_X[0] + CARD_W / 2} y={175} size={18} weight={800} fill={INK}>ns²np⁴</T>
      </Fade>

      {/* beat 2 — card 2: the group */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(CARD_X[0] + CARD_W + 3, 170, CARD_X[1] - 3, 170)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Rect x={CARD_X[1]} y={CARD_Y} width={CARD_W} height={CARD_H} fill="none" stroke={INK} strokeWidth={2} />
        <T x={CARD_X[1] + CARD_W / 2} y={160} size={18} weight={800} fill={INK}>Group 16</T>
        <T x={CARD_X[1] + CARD_W / 2} y={185} size={11} fill={MUTED}>{t("6 valence e⁻", "6 valence e⁻")}</T>
      </Fade>

      {/* beat 3 — the minimum state (staging) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={250} size={13} fill={INK}>
          {t("min state: gain 2e⁻ → −2", "min state: 2e⁻ gain → −2")}
        </T>
      </Fade>

      {/* beat 4 — red-margin: card 3, the OS range */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={arrowD(CARD_X[1] + CARD_W + 3, 170, CARD_X[2] - 3, 170)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Rect x={CARD_X[2]} y={CARD_Y} width={CARD_W} height={CARD_H} fill="none" stroke={RED} strokeWidth={2.4} />
        <T x={CARD_X[2] + CARD_W / 2} y={160} size={18} weight={800} fill={INK}>−2 to +6</T>
        <T x={CARD_X[2] + CARD_W / 2} y={185} size={11} fill={MUTED}>{t("OS range", "OS range")}</T>
      </Fade>

      {/* beat 5 — the highest oxide (staging) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={273} size={13} fill={INK}>
          {t("+6 state → 3 oxygens → ZO₃", "+6 state → 3 oxygens → ZO₃")}
        </T>
      </Fade>

      {/* beat 6 — card 4: oxide character */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={arrowD(CARD_X[2] + CARD_W + 3, 170, CARD_X[3] - 3, 170)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Rect x={CARD_X[3]} y={CARD_Y} width={CARD_W} height={CARD_H} fill={GREEN} fillOpacity={0.15} stroke={GREEN} strokeWidth={2.4} />
        <T x={CARD_X[3] + CARD_W / 2} y={155} size={16} weight={800} fill={INK}>ZO₃ — ACIDIC</T>
        <T x={CARD_X[3] + CARD_W / 2} y={180} size={10} fill={MUTED}>(like SO₃ → H₂SO₄)</T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={290} w={680} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("configuration → group → OS range → oxide", "configuration → group → OS range → oxide")}
        </Chip>
      </Fade>
    </Scene>
  );
}
