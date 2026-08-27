/**
 * Ch02 · Section 32 — "Fix the sign convention before anything else"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.7, 35.5, 53.4, 77.7, 97.5, 121.6, 144.2]):
 *  0 title
 *  1 two panels: up = + (left) · down = + (right), axis arrows
 *  2 rule chip: fix + first, sign u/a/s together
 *  3 left panel list: a = −g · u > 0 · s < 0 below start
 *  4 right panel list: a = +g · dropped u = 0 · all positive
 *  5 red note: mixing mid-solution
 *  6 fine-print lines: no air · g constant · point mass
 *  7 green pro-tip: up = +, a = −g, every time
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  headers cx305/cx775 bl 96 · left arrow (180,270)→(180,120) "+"(180,104) "−"(180,296) ·
 *  right arrow (650,140)→(650,290) "+"(650,318) "−"(650,120)
 *  b3 list st x240 bl 150/180/210 · b4 list st x710 bl 150/180/210
 *  b2 | chip x230..850 y320..356
 *  b5 | bar x66 y380..432 · lines st x84 bl 400 / 426
 *  b6 | bar x66 y448..500 · lines st x84 bl 466 / 490
 *  b7 | bar x56 y516..568 · lines st x72 bl 534 / 560
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

export default function Ch02Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the highest-return 30 seconds */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "fix the sign convention before anything else",
            "sab se pehle sign convention pakki karo"
          )}
        </T>
      </Fade>

      {/* beat 1 — two legitimate choices */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={305} y={96} size={13} fill={AMBER_DARK} script>
          {t("choice 1: up = +", "pehla raasta: upar = +")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d={arrowD(180, 270, 180, 120)}
        stroke={INK}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={180} y={104} size={18} fill={INK} weight={800}>
          +
        </T>
        <T x={180} y={296} size={18} fill={MUTED} weight={800}>
          −
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={775} y={96} size={13} fill={AMBER_DARK} script>
          {t("choice 2: down = +", "doosra raasta: neeche = +")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d={arrowD(650, 140, 650, 290)}
        stroke={INK}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={650} y={318} size={18} fill={INK} weight={800}>
          +
        </T>
        <T x={650} y={120} size={18} fill={MUTED} weight={800}>
          −
        </T>
      </Fade>

      {/* beat 2 — sign everything together */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={230} y={320} w={620} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13}>
          {t(
            "fix + FIRST, then sign u, a and s together — before any equation",
            "pehle + tay karo, phir u, a, s sabko ek saath sign do — equation se pehle"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — the up-positive world */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={240} y={150} size={12} fill={INK} script anchor="start">
          {t("a = −g (gravity points down)", "a = −g (gravity neeche hai)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={240} y={180} size={12} fill={INK} script anchor="start">
          {t("thrown up: u > 0", "upar phenka: u > 0")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={240} y={210} size={12} fill={INK} script anchor="start">
          {t(
            "ends below start: s < 0 — the convention talking",
            "shuru se neeche ruka: s < 0 — convention bol raha hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the down-positive world */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={710} y={150} size={12} fill={INK} script anchor="start">
          a = +g
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={710} y={180} size={12} fill={INK} script anchor="start">
          {t("simply dropped: u = 0", "seedha chhoda: u = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={710} y={210} size={12} fill={INK} script anchor="start">
          {t(
            "everything positive — convenient for drops",
            "sab positive — girne waalon ke liye aasaan"
          )}
        </T>
      </Fade>

      {/* beat 5 — the whole point */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 380 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={400} size={13} fill={RED} script anchor="start">
          {t(
            "both conventions are correct — MIXING them mid-solution is what wrecks marks",
            "dono conventions sahi hain — beech mein MILANA hi marks todta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={84} y={426} size={13} fill={RED} script anchor="start">
          {t(
            "the convention doesn't care about feelings: every quantity, or none",
            "convention ko feelings se matlab nahi: ya har quantity par, ya kisi par nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the fine print */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 448 v 52" stroke={AMBER} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={466} size={12} fill={INK} script anchor="start">
          {t(
            "free fall's fine print: no air · g constant (near the surface only) · point mass",
            "free fall ki sharten: hawa nahi · g constant (sirf satah ke paas) · point mass"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={84} y={490} size={12} fill={MUTED} script anchor="start">
          {t(
            "every free-fall answer you produce carries those three assumptions",
            "har free-fall jawaab ke saath yeh teen maanya-taayein chalti hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the lock-in */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 516 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={534} size={13} fill={GREEN} script anchor="start">
          {t(
            "lock it in: up = + and a = −g, for EVERY vertical problem",
            "pakka kar lo: upar = + aur a = −g, HAR vertical sawaal mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={72} y={560} size={13} fill={GREEN} script anchor="start">
          {t(
            "don't optimise per question — re-deciding under pressure breeds contradictions",
            "har sawaal par nayi chaal mat chuno — dabaav mein dobara sochna hi galti laata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
