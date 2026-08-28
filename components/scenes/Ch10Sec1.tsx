/**
 * Ch10 · Section 1 — "Temperature versus heat: level and flow"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.68, 15.68, 16.68, 17.68, 18.68, 31.05]):
 *  0 hook: chai tumbler gets too hot to hold
 *  1 temperature = level of hotness, decides flow direction
 *  2 small cup & large pot at same temperature — molecules jiggle equally hard
 *  3 intensive: amount doesn't change temperature
 *  4 heat = energy in transit, hot → cold
 *  5 "body contains heat" is wrong — it holds internal energy
 *  6 Mumbai local analogy: crowd density = temperature, people flow = heat
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  row1 | b0 cup icon x122..206 y95..172 · label st x230 bl148
 *       | b1 thermometer x657..699 y88..179 · label st x719 bl140
 *  row2 | b2 pot box x400..560 y195..270 · cup box x190..280 y215..270
 *       |    temp labels inside · dots inside · caption mid x370 bl300
 *       | b3 bar x615 y205..260 · line1 st x635 bl222 · line2 st x635 bl252
 *  row3 | b4 hot box x300..400 y350..415 · cold box x460..560 y350..415
 *       |    arrow gap x405..455 y377 · caption mid x430 bl448
 *  row3 | b5 wrong st x300 bl490 (crossed) · right st x520 bl490
 *  row4 | b6 coach1 x150..330 y520..575 · coach2 x420..600 y520..575
 *       |    arrow x335..415 y547 · verdict st x650 bl535/565
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
  crossD,
  INK,
  INK_LIGHT,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const dotPath = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
const dotsPath = (pts: [number, number][], r: number) =>
  pts.map(([x, y]) => dotPath(x, y, r)).join(" ");

export default function Ch10Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const potDots = dotsPath(
    [
      [425, 240], [450, 250], [475, 238], [500, 252],
      [520, 242], [440, 258], [485, 258], [510, 232],
    ],
    3
  );
  const cupDots = dotsPath(
    [[205, 250], [225, 258], [245, 250], [230, 240]],
    2.5
  );
  const coach1Dots = dotsPath(
    [
      [170, 535], [190, 545], [210, 535], [230, 545], [250, 535], [270, 545],
      [180, 555], [200, 560], [220, 555], [240, 560], [260, 555], [290, 545],
    ],
    2.6
  );
  const coach2Dots = dotsPath(
    [[450, 540], [500, 548], [550, 540], [570, 552]],
    2.6
  );

  const wrongLabel = t("'body has heat' — wrong", "'body mein heat hai' — galat");
  const wrongW = (en ? 24 : 29) * 0.55 * 14;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("temperature vs heat — level and flow", "temperature vs heat — level aur bahaav")}
        </T>
      </Fade>

      {/* beat 0 — the hook: chai tumbler */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.3)}
        d={
          "M130 130 h60 v34 q0 8 -8 8 h-44 q-8 0 -8 -8 z " +
          "M190 138 q16 2 16 16 q-2 14 -16 16 " +
          "M145 118 q4 -8 0 -16 M160 118 q4 -8 0 -16 M175 118 q4 -8 0 -16"
        }
        stroke={AMBER_DARK}
        sw={1.8}
        dur={1}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.2)}>
        <T x={230} y={148} size={15} fill={RED} script anchor="start">
          {t(
            "chai poured — tumbler soon too hot to hold",
            "chai daala — tumbler jaldi pakadna mushkil"
          )}
        </T>
      </Fade>

      {/* beat 1 — temperature decides flow direction */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M669 100 h12 v65 M675 100 v65 M663 165 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.9)}
        d="M671 132 h8 v31 M663 165 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0"
        stroke={RED}
        sw={5}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={719} y={140} size={14} fill={INK} script anchor="start">
          {t("decides which way heat flows", "yehi tay karta hai heat ka flow")}
        </T>
      </Fade>

      {/* beat 2 — same temperature: small cup and large pot */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M400 195 h160 v75 h-160 z" stroke={INK_LIGHT} sw={1.8} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={480} y={220} size={14} fill={GREEN} weight={700}>100°C</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={potDots} stroke={RED} sw={1.6} dur={0.6} />

      <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M190 215 h90 v55 h-90 z" stroke={INK_LIGHT} sw={1.8} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={235} y={238} size={13} fill={GREEN} weight={700}>100°C</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.3)} d={cupDots} stroke={RED} sw={1.4} dur={0.5} />

      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={370} y={300} size={14} fill={INK} script>
          {t(
            "same temperature — molecules jiggle equally hard",
            "same temperature — molecules barabar jiggle karte hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — intensive: amount doesn't matter */}
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M615 205 v55" stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={635} y={222} size={14} fill={RED} script anchor="start">
          {t("Intensive — amount doesn't", "Intensive — amount se farak")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={635} y={252} size={14} fill={RED} script anchor="start">
          {t("change temperature (pot > cup)", "nahi — pot mein energy zyada")}
        </T>
      </Fade>

      {/* beat 4 — heat: energy in transit, hot to cold */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M300 350 h100 v65 h-100 z" stroke={RED} sw={2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={350} y={387} size={16} fill={RED} script>{t("hot", "garam")}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M460 350 h100 v65 h-100 z" stroke={INK_LIGHT} sw={2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <T x={510} y={387} size={16} fill={INK} script>{t("cold", "thanda")}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.9)} d={arrowD(405, 377, 455, 377)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={430} y={448} size={14} fill={RED} script>
          {t("Heat = energy in transit, hot → cold", "Heat = transit ki energy, garam → thanda")}
        </T>
      </Fade>

      {/* beat 5 — "contains heat" is wrong */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={300} y={490} size={14} fill={RED} script anchor="start">
          {wrongLabel}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d={crossD(300, 471.8, wrongW, 25.2)} stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={520} y={490} size={14} fill={GREEN} script anchor="start">
          {t("→ it's internal energy", "→ yeh internal energy hai")}
        </T>
      </Fade>

      {/* beat 6 — Mumbai local: crowd density vs people flow */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M150 520 h180 v55 h-180 z" stroke={INK_LIGHT} sw={1.8} dur={1} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={coach1Dots} stroke={RED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={arrowD(335, 547, 415, 547)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2.5)} d="M420 520 h180 v55 h-180 z" stroke={INK_LIGHT} sw={1.8} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 3.2)} d={coach2Dots} stroke={RED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <T x={650} y={535} size={14} fill={GREEN} script anchor="start">
          {t("crowd density = temperature", "bheed ki density = temperature")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <T x={650} y={565} size={14} fill={GREEN} script anchor="start">
          {t("people flow = heat (till equal)", "logo ka flow = heat (barabar tak)")}
        </T>
      </Fade>
    </Scene>
  );
}
