/**
 * Ch03 · Section 54 — "The two classic setups: the boat and the rain"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.9, 19.4, 30.9, 50.4, 58.5, 71.9, 82.7]):
 *  0 heading
 *  1 the two situations
 *  2 boat panel: banks, v boat, v river
 *  3 true path = vector sum
 *  4 aimed straight, still swept
 *  5 rain panel: vertical rain + walker
 *  6 slanted rain in your frame + tilt
 *  7 one subtraction, different clothes
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  L | header st x84 bl 180 · banks M80 200 h400 / M80 420 h400 · boat (150,400) ·
 *      v boat →(150,250) lbl end (138,320) · v river →(230,400) lbl cx190 bl 444? →
 *      lbl st (240,406) · true (150,400)→(230,250) green lbl st (240,300) ·
 *      caption cx270 bl 448 s11 · red cx270 bl 472 s11
 *  R | header st x600 bl 180 · rain strokes M660/720/780 200 V240 ·
 *      walker head (640,390) r8 body M640 398 V440 · walk arrow (660,430)→(720,430)
 *      lbl cx690 bl 452 s11 · slant arrows (840,240)→(800,320) / (900,240)→(860,320)
 *      lbl st (870,350)?→ cx860 bl 350 s11 · tilt caption cx780 bl 470 s12 ·
 *      ratio line cx780 bl 500 s11
 *  b7 | bar M66 520 v52 · lines st x84 bl 538 / 562 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "Two everyday problems, ONE idea",
            "Roz ke do problems, EK idea"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the whole sub-topic in two pictures */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={88} size={13} fill={INK} script>
          {t(
            "master these two pictures — every exam question is a variation of one of them",
            "yeh do tasveerein pakki karo — har exam sawaal inhi ka roop hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the boat panel */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={84} y={180} size={13} fill={AMBER_DARK} script anchor="start">
          {t("THE BOAT", "NAAV (the boat)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 80 200 h 400" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d="M 80 420 h 400" stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Circle cx={150} cy={400} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d={arrowD(150, 400, 150, 250)} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={138} y={320} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          {t("v boat", "v naav")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5)} d={arrowD(150, 400, 250, 400)} stroke={INK_LIGHT} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={260} y={406} size={12} fill={INK_LIGHT} weight={700} anchor="start">
          {t("v river", "v dhara")}
        </T>
      </Fade>

      {/* beat 3 — the true path */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(150, 400, 250, 250)} stroke={GREEN} sw={3} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={260} y={300} size={12} fill={GREEN} weight={700} anchor="start">
          {t("true path", "asli raasta")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={270} y={448} size={11} fill={GREEN} script>
          {t(
            "motion over the ground = the vector SUM",
            "zameen par chaal = vector SUM"
          )}
        </T>
      </Fade>

      {/* beat 4 — still swept downstream */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={270} y={472} size={11} fill={RED} script>
          {t(
            "aim straight across — the current still sweeps you downstream",
            "seedha saamne nishana lo — dhara phir bhi neeche baha le jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the rain panel */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={600} y={180} size={13} fill={AMBER_DARK} script anchor="start">
          {t("THE RAIN", "BAARISH (the rain)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.4)}
        d="M 660 200 V 240 M 720 200 V 240 M 780 200 V 240 M 840 200 V 240"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <Circle cx={640} cy={390} r={8} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3)} d="M 640 398 V 440" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 3.8)} d={arrowD(660, 430, 720, 430)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 4.5)}>
        <T x={690} y={452} size={11} fill={AMBER_DARK} script>
          {t("you walk", "tum chalte ho")}
        </T>
      </Fade>

      {/* beat 6 — the slant in your frame */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d={arrowD(840, 250, 800, 330)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={arrowD(900, 250, 860, 330)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={860} y={356} size={11} fill={GREEN} script>
          {t("rain in YOUR frame", "TUMHARE frame mein baarish")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <T x={810} y={410} size={12} fill={GREEN} script>
          {t("so you tilt the umbrella FORWARD", "isliye chhata AAGE jhukate ho")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={780} y={488} size={11} fill={MUTED} script>
          {t(
            "faster walk → more slant → more tilt",
            "tez chaal → zyada dhalan → zyada jhukav"
          )}
        </T>
      </Fade>

      {/* beat 7 — one subtraction */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 520 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={538} size={12} fill={GREEN} script anchor="start">
          {t(
            "both are the SAME vector subtraction, wearing different clothes",
            "dono WAHI vector subtraction hain, bas kapde alag"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={562} size={12} fill={INK} script anchor="start">
          {t(
            "boat–current, rain–walker: underneath it is always vA − vB",
            "naav–dhara, baarish–chalne wala: andar hamesha vA − vB hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
