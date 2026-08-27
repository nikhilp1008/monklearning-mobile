/**
 * Ch02 · Section 17 — "Shape dictionary for the x-t graph"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.2, 30.5, 45.4, 63.7, 87.1, 99.6, 124.4]):
 *  0 title
 *  1 four panels: flat · straight slant · concave up · concave down
 *  2 P1 retrace amber + verdict: v = 0, at rest
 *  3 P2 retrace green + verdict: constant v, a = 0
 *  4 P3 retrace amber + verdict: v rising, a > 0
 *  5 P4 retrace red + verdict: v falling, a < 0
 *  6 red note: tangent vs chord · chord+tangent drawn on P3
 *  7 red note: forbidden shapes + crossed fold-back mini graph
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  panels x60/300/540/780 (w 220) · boxes y95..260 · axes M+30,110 V235 H+190 ·
 *  names bl 116 inside · verdicts bl 285 / 310 under each panel
 *  b6 | bar x66 y350..410 · lines st x84 bl 370 / 396 · chord+tangent on P3
 *  b7 | bar x66 y430..510 · lines st x84 bl 452 / 478 / 504 ·
 *       mini fold-back x880..1010 y430..510 + cross
 */

import React from "react";
import { G, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const PANELS = [60, 300, 540, 780];
const CURVES = [
  `M ${60 + 50} 190 h 120`,
  `M ${300 + 45} 225 L ${300 + 185} 130`,
  `M ${540 + 45} 225 Q ${540 + 140} 220, ${540 + 180} 120`,
  `M ${780 + 45} 225 Q ${780 + 90} 120, ${780 + 185} 112`,
];

export default function Ch02Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const names = [
    t("flat", "flat"),
    t("straight slant", "seedhi dhalaan"),
    t("concave up", "concave up"),
    t("concave down", "concave down"),
  ];

  return (
    <Scene>
      {/* beat 0 — the dictionary */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the x-t shape dictionary — four entries",
            "x-t shape dictionary — chaar entries"
          )}
        </T>
      </Fade>

      {/* beat 1 — the four panels */}
      {PANELS.map((px, i) => (
        <G key={i}>
          <Draw
            on={beat >= 1}
            delay={dl(1, 0.5 + i * 2.4)}
            d={`M ${px + 30} 110 V 235 H ${px + 190}`}
            stroke={MUTED}
            sw={1.8}
            dur={0.6}
          />
          <Draw
            on={beat >= 1}
            delay={dl(1, 1.3 + i * 2.4)}
            d={CURVES[i]}
            stroke={INK}
            sw={2.4}
            dur={0.8}
          />
          <Fade on={beat >= 1} delay={dl(1, 2 + i * 2.4)}>
            <T x={px + 110} y={116} size={12} fill={MUTED} script>
              {names[i]}
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 2 — flat: at rest */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={CURVES[0]} stroke={AMBER} sw={3.4} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={170} y={285} size={12} fill={INK} script>
          {t("zero slope ⇒ v = 0", "zero slope ⇒ v = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={170} y={310} size={12} fill={MUTED} script>
          {t("at rest — the platform", "at rest — platform wala")}
        </T>
      </Fade>

      {/* beat 3 — slant: uniform */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={CURVES[1]} stroke={GREEN} sw={3.4} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={410} y={285} size={12} fill={INK} script>
          {t("constant slope ⇒ constant v", "constant slope ⇒ constant v")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={410} y={310} size={12} fill={GREEN} script>
          {t("a = 0 — told to you for free", "a = 0 — muft mein pata chala")}
        </T>
      </Fade>

      {/* beat 4 — concave up */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={CURVES[2]} stroke={AMBER} sw={3.4} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={650} y={285} size={12} fill={INK} script>
          {t("slope steepens ⇒ v rising", "slope chadhta ⇒ v badhta")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={650} y={310} size={12} fill={AMBER_DARK} script>
          {t("a > 0 — read it via the slope", "a > 0 — slope se padho")}
        </T>
      </Fade>

      {/* beat 5 — concave down */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={CURVES[3]} stroke={RED} sw={3.4} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={890} y={285} size={12} fill={INK} script>
          {t("slope shrinks ⇒ v falling", "slope ghat'ta ⇒ v girta")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={890} y={310} size={12} fill={RED} script>
          {t("a < 0 — same logic, flipped", "a < 0 — wahi logic, ulta")}
        </T>
      </Fade>

      {/* beat 6 — which slope? */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 350 v 60" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={370} size={13} fill={RED} script anchor="start">
          {t(
            "which slope? instantaneous → TANGENT at a point · average → CHORD between endpoints",
            "kaunsa slope? instantaneous → bindu par TANGENT · average → siron ke beech CHORD"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <Path
          d={`M ${540 + 45} 225 L ${540 + 180} 120`}
          fill="none"
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="6 5"
        />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 10)}
        d={`M ${540 + 35} 232 l 55 -12`}
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={84} y={396} size={13} fill={RED} script anchor="start">
          {t(
            "the chord-and-tangent picture from sub-topic 1 — now doing real work",
            "sub-topic 1 wali chord-tangent tasveer — ab asli kaam par"
          )}
        </T>
      </Fade>

      {/* beat 7 — the forbidden shapes */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 430 v 80" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={452} size={13} fill={RED} script anchor="start">
          {t(
            "forbidden: a vertical x-t line — two places at one instant, infinite v",
            "mana hai: seedhi khadi x-t line — ek pal mein do jagah, infinite v"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={478} size={13} fill={RED} script anchor="start">
          {t(
            "forbidden: folding back over a time value — one position per moment",
            "mana hai: time par waapas mudna — har pal bas ek position"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 8)}
        d="M 890 505 C 985 490, 990 440, 905 452"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 9.5)}
        d={crossD(885, 440, 115, 68)}
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 11.5)}>
        <T x={84} y={504} size={13} fill={GREEN} script anchor="start">
          {t(
            "see one in the options? distractor — eliminate on sight",
            "options mein dikhe? distractor hai — dekhte hi kaat do"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
