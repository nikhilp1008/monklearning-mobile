/**
 * Ch02 · Section 16 — "A motion graph is a story told without words"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.1, 32.7, 42.9, 67.8, 92, 113.4, 138.2]):
 *  0 title + underline
 *  1 feature ① SLOPE chip + tilt icon
 *  2 feature ② AREA chip + hatched-curve icon
 *  3 the Rajdhani tracker x–t graph: flat → steep → flattens, with labels
 *  4 chip: slope = Δx/Δt = VELOCITY
 *  5 three readings: steep/gentle/flat icons + labels
 *  6 red note: curved graph ≠ curved road
 *  7 green verdict: straight = uniform · curved = accelerating
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | chip x110..390 y80..112 · icon M420,108 h44 + l44,-26
 *  b2 | chip x560..870 y80..112 · icon curve M900.. + hatches
 *  b3 | axes o(140,470)→(660,470)/(140,160) · curve flat(170..270,440) →
 *       steep → flat(620,215) · labels cx220 bl 420 / cx290 bl 300 / cx560 bl 190
 *  b4 | chip x700..1030 y230..266
 *  b5 | icons x680 y296..362 · labels st x706 bl 310/338/366
 *  b6 | bar x66 y500..556 · lines st x84 bl 520 / 546
 *  b7 | bar x226 y566..592 · line cx540 bl 584
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the promise */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "a motion graph — a story told without words",
            "motion graph — bina shabdon ki kahaani"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 8)} d="M 320 66 h 440" stroke={AMBER} sw={2.2} dur={0.7} />

      {/* beat 1 — feature one: slope */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Chip x={110} y={80} w={280} h={32} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("① SLOPE — how tilted", "① SLOPE — kitni jhuki hai")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.5)}
        d="M 420 108 h 44 M 420 108 l 44 -26"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 2 — feature two: area */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Chip x={560} y={80} w={310} h={32} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("② AREA — space underneath", "② AREA — neeche ki jagah")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.5)}
        d="M 900 108 q 22 -28 48 -6 M 908 106 v -8 M 922 104 v -12 M 936 102 v -10"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.7}
      />

      {/* beat 3 — the Rajdhani tracker */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d={arrowD(140, 470, 660, 470)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.8)}
        d={arrowD(140, 470, 140, 160)}
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={675} y={476} size={15} fill={INK} anchor="start" weight={700}>
          t
        </T>
        <T x={134} y={146} size={15} fill={INK} weight={700}>
          x
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d="M 170 440 H 270 C 320 430, 380 320, 430 260 C 470 218, 540 220, 620 215"
        stroke={INK}
        sw={2.8}
        dur={2.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={220} y={420} size={12} fill={MUTED} script>
          {t("platform — flat", "platform — flat")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={290} y={300} size={12} fill={MUTED} script>
          {t("racing — steep", "raftaar — steep")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={560} y={190} size={12} fill={MUTED} script>
          {t("junction — flattens", "junction — flat hoti")}
        </T>
      </Fade>

      {/* beat 4 — slope IS velocity */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={700} y={230} w={330} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("slope = Δx ⁄ Δt = VELOCITY", "slope = Δx ⁄ Δt = VELOCITY")}
        </Chip>
      </Fade>

      {/* beat 5 — the three readings */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 680 306 l 18 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={706} y={310} size={13} fill={GREEN} script anchor="start">
          {t("steep → fast", "steep → tez")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 4)}
        d="M 680 334 l 18 -5"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <T x={706} y={338} size={13} fill={AMBER_DARK} script anchor="start">
          {t("gentle → slow", "gentle → dheema")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 8)}
        d="M 680 362 h 18"
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 8.6)}>
        <T x={706} y={366} size={13} fill={RED} script anchor="start">
          {t("flat → AT REST (not slow!)", "flat → AT REST (dheema nahi!)")}
        </T>
      </Fade>

      {/* beat 6 — the beginner error */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 500 v 56" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={520} size={14} fill={RED} script anchor="start">
          {t(
            "a curved x-t graph ≠ a curved road — the track is dead straight",
            "curved x-t graph ≠ ghumaavdar sadak — patri bilkul seedhi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={84} y={546} size={14} fill={RED} script anchor="start">
          {t(
            "the curve encodes changing SPEED — there is no path in this picture",
            "curve badalti SPEED dikhata hai — is tasveer mein raasta hai hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — straight or curved */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 226 566 v 26" stroke={GREEN} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={584} size={13} fill={GREEN} script>
          {t(
            "straight slant = constant slope = uniform · curved = changing slope = accelerating",
            "seedhi dhalaan = constant slope = uniform · curve = badalta slope = accelerating"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
