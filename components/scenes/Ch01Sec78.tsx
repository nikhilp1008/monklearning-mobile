/**
 * Ch01 · Section 78 — "Timing an echo, and spreading a drop thin"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.7, 26.4, 40.9, 55.1, 67.7, 86.4, 95.2]):
 *  0 title · canyon: shouter + wall
 *  1 you measure a TIME — speed converts it
 *  2 pulse out (green) / back (red) — distance covered twice
 *  3 RADAR / LIDAR / SONAR chips
 *  4 aircraft · Moon · seabed — identical reasoning
 *  5 red box: d = v·t/2 · forgetting ÷2 doubles it
 *  6 trick three heading: spread it thin
 *  7 oil film on water + magnifier · thickness = V/A
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | head (140,95) r10 · body · arcs · wall x420 y80..160
 *  b1 | script 14 cx740 bl 110 · muted bl 138
 *  b2 | source (140,230) · green (150,220)→(410,220) · red (410,240)→(150,240) · labels bl 210/266 · amber st x460 bl 235
 *  b3 | chips y290..326 x120/x360/x600
 *  b4 | muted 13 mid bl 360
 *  b5 | box x240..840 y384..434 (19 bl 415) · red 13 mid bl 462
 *  b6 | amber 14 st x80 bl 500
 *  b7 | water M120 540 · film x160..400 · lens c(500,540) r26 · eq 16 st x580 bl 540 · note bl 570 · label cx280 bl 566
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec78({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the canyon */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={24} fill={INK} script>
          {t(
            "timing an echo, and spreading a drop thin",
            "echo ka time, aur boond ko patla failana"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 130 95 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0 M 140 105 v 35 M 140 115 l -14 12 M 140 115 l 16 10 M 165 105 a 14 14 0 0 1 0 14 M 180 100 a 22 22 0 0 1 0 24"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={1}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 4.5)}
        d="M 420 80 v 80 M 420 95 l 14 -10 M 420 115 l 14 -10 M 420 135 l 14 -10 M 420 155 l 14 -10"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />

      {/* beat 1 — measuring a time */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={740} y={110} size={14} fill={INK} script>
          {t(
            "you never measure the distance — you measure a TIME; the known speed converts it",
            "doori naapte hi nahi — TIME naapte ho; gyaat chaal use badal deti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={740} y={138} size={12} fill={MUTED} script>
          {t("the rice-grain move again", "phir wahi chawal ke daane waali chaal")}
        </T>
      </Fade>

      {/* beat 2 — out and back */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 134 230 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Draw on={beat >= 2} delay={dl(2, 2)} d={arrowD(152, 220, 408, 220)} stroke={GREEN} sw={2.4} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={280} y={210} size={12} fill={GREEN} script>{t("out", "gayi")}</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5)} d={arrowD(408, 242, 152, 242)} stroke={RED} sw={2.4} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={280} y={266} size={12} fill={RED} script>{t("back", "wapas")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={460} y={235} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "look what it travelled — the distance, TWICE",
            "dekho kitna chala — doori, DO baar"
          )}
        </T>
      </Fade>

      {/* beat 3 — swap the pulse */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={120} y={290} w={220} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("RADAR — radio pulse", "RADAR — radio pulse")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <Chip x={360} y={290} w={220} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("LIDAR — laser pulse", "LIDAR — laser pulse")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <Chip x={600} y={290} w={260} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("SONAR — sound underwater", "SONAR — paani ke andar awaaz")}
        </Chip>
      </Fade>

      {/* beat 4 — identical reasoning */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={540} y={360} size={13} fill={MUTED} script>
          {t(
            "an aircraft · the Moon · the seabed — different speeds, wildly different scales, identical reasoning",
            "vimaan · chaand · samudra-tal — alag chaalein, bilkul alag paimane, tark wahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the red box */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d="M 252 384 h 576 q 12 0 12 12 v 26 q 0 12 -12 12 h -576 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={RED}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={540} y={415} size={19} fill={INK} weight={700}>
          {t("d = v × t ⁄ 2 — HALF the round trip", "d = v × t ⁄ 2 — poore chakkar ka AADHA")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <T x={540} y={462} size={13} fill={RED} script>
          {t(
            "forgetting the ÷2 doesn't nudge the answer — it DOUBLES it",
            "÷2 bhoolna answer ko zara sa nahi hilata — use DUGNA kar deta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — trick three */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={80} y={500} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "trick three, for the impossibly small: spread it thin, then divide",
            "teesri trick, behad chhoti cheezon ke liye: patla failao, phir bhaag do"
          )}
        </T>
      </Fade>

      {/* beat 7 — the oil film */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 120 544 q 30 -6 60 0 q 30 6 60 0 q 30 -6 60 0 q 30 6 60 0 q 30 -6 60 0"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={1}
      />
      <Draw on={beat >= 7} delay={dl(7, 2.5)} d="M 160 536 h 240" stroke={AMBER_DARK} sw={3} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={280} y={570} size={11} fill={MUTED} script>
          {t("one molecule thick", "ek anu moti")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 6)}
        d="M 474 540 a 26 26 0 1 0 52 0 a 26 26 0 1 0 -52 0 M 482 540 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 494 540 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 506 540 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.9}
      />
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={580} y={540} size={16} fill={INK} weight={700} anchor="start">
          {t(
            "thickness = V ⁄ A = one molecule's diameter",
            "motai = V ⁄ A = ek anu ka vyaas"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 18)}>
        <T x={580} y={570} size={12} fill={GREEN} script anchor="start">
          {t(
            "a syringe and a ruler — nothing more",
            "ek syringe aur ek ruler — bas itna"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
