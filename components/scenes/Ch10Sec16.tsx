/**
 * Ch10 · Section 16 — "The principle of calorimetry: a heat bank"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,4.35,19.37,27.39,38.14,39.14,40.14,41.14]):
 *  0 setup: hot + cold body in an insulated box
 *  1 heat flows hot → cold, always, until common temperature
 *  2 calorimeter: insulated cup + stirrer + thermometer
 *  3 energy conserved: every joule hot loses, cold gains
 *  4 the Principle: Heat LOST (hot) = Heat GAINED (cold)
 *  5 the catch: the calorimeter itself soaks up heat too
 *  6 water equivalent: w = mc — replace calorimeter with equivalent water
 *  7 heat bank: rich hot bodies pay poor cold ones, no money leaves the room
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | box x350..730 y100..170 · hot c(420,135)r20 · cold c(660,135)r20
 *  b1 | arrow x445..635 y135 · caption mid x540 bl195
 *  b2 | cup x480..560 y220..260 + stirrer + thermometer · label mid x540 bl290
 *  b3 | note mid x540 bl320
 *  b4 | box x300..780 y340..380 · principle mid x540 bl365
 *  b5 | note mid x540 bl412
 *  b6 | note mid x540 bl448
 *  b7 | line1 mid x540 bl485 · line2 mid x540 bl515
 */

import React from "react";
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("the principle of calorimetry — a heat bank", "calorimetry ka principle — ek heat bank")}
        </T>
      </Fade>

      {/* beat 0 — insulated box, hot + cold */}
      <Draw on={beat >= 0} delay={dl(0, 0.15)} d="M350 100 h380 v70 h-380 z" stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M400 135 A20 20 0 1 1 440 135 A20 20 0 1 1 400 135" stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M640 135 A20 20 0 1 1 680 135 A20 20 0 1 1 640 135" stroke={INK_LIGHT} sw={2} dur={0.4} />

      {/* beat 1 — heat flows hot to cold, always */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d={arrowD(445, 135, 635, 135)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={195} size={13} fill={INK} script anchor="middle">
          {t("heat flows hot → cold, always — until common T", "heat garam se thanda ki taraf — hamesha, jab tak same T")}
        </T>
      </Fade>

      {/* beat 2 — the calorimeter */}
      <Draw on={beat >= 2} delay={dl(2, 0.15)} d="M480 220 v30 q0 10 10 10 h60 q10 0 10 -10 v-30" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M510 208 v20 M530 205 v10 M525 205 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0" stroke={AMBER_DARK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.85)}>
        <T x={540} y={290} size={12} fill={INK} anchor="middle">
          {t("calorimeter: insulated cup + stirrer + thermometer", "calorimeter: insulated cup + stirrer + thermometer")}
        </T>
      </Fade>

      {/* beat 3 — energy conserved */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={320} size={13} fill={INK} script anchor="middle">
          {t("energy is conserved in the box — every joule hot loses, cold gains", "box mein energy conserve hoti — har joule hot khoye, cold paaye")}
        </T>
      </Fade>

      {/* beat 4 — the principle */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M300 340 h480 v40 h-480 z" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={365} size={15} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("Heat LOST (hot) = Heat GAINED (cold)", "Heat LOST (garam) = Heat GAINED (thanda)")}
        </T>
      </Fade>

      {/* beat 5 — the catch */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={412} size={13} fill={RED} script anchor="middle">
          {t(
            "the catch: the calorimeter itself soaks up heat too — include it!",
            "catch: calorimeter khud bhi heat soakh leta hai — usko bhi jodo!"
          )}
        </T>
      </Fade>

      {/* beat 6 — water equivalent */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={448} size={13} fill={INK} script anchor="middle">
          {t(
            "water equivalent: w = mc — replace it with equivalent water",
            "water equivalent: w = mc — usse equivalent paani se badlo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the heat bank */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={485} size={13} fill={INK} script anchor="middle">
          {t(
            "a heat bank: rich hot bodies pay poor cold ones till balances match",
            "heat bank: ameer garam bodies gareeb thandi ko dete — jab tak balance match"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={540} y={515} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t("no money ever leaves the room", "paisa kabhi kamre se bahar nahi jaata")}
        </T>
      </Fade>
    </Scene>
  );
}
