/**
 * Ch10 · Section 2 — "Thermal equilibrium and the Zeroth Law"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.46, 13.57, 14.57, 15.57, 16.57, 26.72]):
 *  0 hook: when does heat flow stop? A/B blocks with flow arrow
 *  1 equilibrium: arrow settles to "=", common temperature
 *  2 the Zeroth Law: A≡C and B≡C ⇒ A≡B (triangle diagram)
 *  3 C is doing all the connecting work
 *  4 C is the thermometer — touches everything
 *  5 two patients both read 37°C — same temperature, never touched
 *  6 verdict: equilibrium = equal temperature, no net heat flow
 *
 * Layout plan (strict non-overlapping y-bands, Kalam bl−1.3s..+0.5s):
 *  b0/1 | A box x150..230 y100..155 · B box x280..360 y100..155 ·
 *       |   question st x400 bl133 · caption mid x255 bl190
 *  b2   | A' c(350,275)r24 · C c(540,275)r28 · B' c(730,275)r24 ·
 *       |   ≡ mid x443/637 bl280 · law caption mid x540 bl335
 *  b3   | note mid x540 bl372 · underline x405..675 y382
 *  b4   | thermometer x500..542 y398..462 · label st x560 bl435
 *  b5   | patient1 c(320,495)r10 · patient2 c(620,495)r10 · = mid x470 bl517 ·
 *       |   caption mid x470 bl548
 *  b6   | check x300..330 y564..588 · verdict mid x540 bl585
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("thermal equilibrium and the zeroth law", "thermal equilibrium aur zeroth law")}
        </T>
      </Fade>

      {/* beat 0 — the question */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M150 100 h80 v55 h-80 z" stroke={RED} sw={2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 0.9)}>
        <T x={190} y={133} size={16} fill={RED} script>A</T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.3)} d="M280 100 h80 v55 h-80 z" stroke={INK_LIGHT} sw={2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={320} y={133} size={16} fill={INK} script>B</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.4)} dim={beat >= 1}>
        <Draw on={beat >= 0} d="M238 127 h34 M264 121 l8 6 l-8 6" stroke={RED} sw={2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={400} y={133} size={15} fill={RED} script anchor="start">
          {t("when does the flow stop?", "yeh flow kab rukta hai?")}
        </T>
      </Fade>

      {/* beat 1 — settle at equilibrium */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={255} y={137} size={20} fill={GREEN} weight={800}>=</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={255} y={190} size={13} fill={GREEN} script>
          {t("equilibrium — same T, no more flow", "equilibrium — same T, flow ruk gaya")}
        </T>
      </Fade>

      {/* beat 2 — the Zeroth Law triangle */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M326 275 A24 24 0 1 1 374 275 A24 24 0 1 1 326 275" stroke={RED} sw={1.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={350} y={282} size={16} fill={RED} script>A</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M512 275 A28 28 0 1 1 568 275 A28 28 0 1 1 512 275" stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={540} y={282} size={18} fill={AMBER_DARK} script weight={800}>C</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d="M706 275 A24 24 0 1 1 754 275 A24 24 0 1 1 706 275" stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={730} y={282} size={16} fill={INK} script>B</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d="M378 275 h130 M572 275 h130" stroke={GREEN} sw={1.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={443} y={280} size={16} fill={GREEN}>≡</T>
        <T x={637} y={280} size={16} fill={GREEN}>≡</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={540} y={335} size={14} fill={INK} script>
          {t(
            "if A≡C and B≡C, then A≡B — the Zeroth Law",
            "agar A≡C aur B≡C, to A≡B — Zeroth Law"
          )}
        </T>
      </Fade>

      {/* beat 3 — C does all the connecting work */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={372} size={14} fill={AMBER_DARK} script>
          {t("C is doing all the connecting work", "C hi sab connection bana raha hai")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M405 382 h270" stroke={AMBER} sw={2} dur={0.6} />

      {/* beat 4 — C is the thermometer */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.3)}
        d="M509 398 h12 v54 M515 398 v54 M503 452 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.9)}
        d="M511 425 h8 v27 M503 452 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0"
        stroke={RED}
        sw={5}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={560} y={435} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "C = the thermometer — touches everything",
            "C = thermometer — sabko chhoo leta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — two patients, same reading, never touched */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M310 495 a10 10 0 1 1 20 0 a10 10 0 1 1 -20 0 M320 505 v25" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={320} y={478} size={13} fill={GREEN} weight={700}>37°C</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d="M610 495 a10 10 0 1 1 20 0 a10 10 0 1 1 -20 0 M620 505 v25" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={620} y={478} size={13} fill={GREEN} weight={700}>37°C</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={470} y={517} size={20} fill={GREEN} weight={800}>=</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.3)}>
        <T x={470} y={548} size={13} fill={INK} script>
          {t(
            "both read 37°C — same temperature, never touched",
            "dono 37°C dikhaate hain — same temp, kabhi touch nahi hua"
          )}
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M300 580 l8 8 l14 -16" stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={585} size={15} fill={GREEN} script weight={700}>
          {t(
            "equilibrium = equal temperature, no net heat flow",
            "equilibrium = barabar temperature, heat ka net flow zero"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
