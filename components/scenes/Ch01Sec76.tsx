/**
 * Ch01 · Section 76 — "The tape runs out: the case for indirect measurement"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.7, 21.6, 36, 54.1, 68, 80.7, 99.8]):
 *  0 title · draw the measuring tape
 *  1 three impossible targets: Moon · oil molecule · star
 *  2 red crosses on all three — never in the game
 *  3 the human-sized band on a scale line
 *  4 INDIRECT chip
 *  5 the rice grain on a kitchen scale — needle won't budge
 *  6 weigh 1000 ÷ 1000 — big & easy, then arithmetic
 *  7 verdict: everything ahead is the rice grain
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tape x120..420 y84..122 + hook + ticks
 *  b1 | Moon c(600,105) r20 · molecule (720,105) · star (840,105) · labels bl 150
 *  b2 | crosses on each icon · red script cx720 bl 190
 *  b3 | line x100..980 y260 · green seg x420..640 · labels bl 240 cx200/530/850 · ticks bl 292
 *  b4 | chip x330..750 y320..356
 *  b5 | scale x120..300 y420..500 · grain y405 · label cx210 bl 530
 *  b6 | heap x400..520 y440..500 · eq 17 st x560 bl 470 · note 13 st x560 bl 500
 *  b7 | green 14 mid bl 570
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
  crossD,
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

export default function Ch01Sec76({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const tapeTicks: string[] = [];
  for (let x = 150; x <= 410; x += 26) tapeTicks.push(`M ${x} 84 v 10`);

  return (
    <Scene>
      {/* beat 0 — the tape */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "the tape runs out — the case for indirect measurement",
            "tape chuk jaata hai — indirect measurement ka muqadma"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d={"M 120 84 h 300 v 38 h -300 z M 120 94 h -10 v 18 h 10 " + tapeTicks.join(" ")}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={1.2}
      />

      {/* beat 1 — three targets */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 580 105 A 20 20 0 1 1 620 105 A 20 20 0 1 1 580 105 M 592 100 a 4 4 0 1 0 8 0 M 604 112 a 3 3 0 1 0 6 0"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={600} y={150} size={12} fill={MUTED} script>{t("the Moon", "chaand")}</T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.5)}
        d="M 717 105 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0 M 704 105 a 16 16 0 1 0 32 0 a 16 16 0 1 0 -32 0"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={720} y={150} size={12} fill={MUTED} script>{t("an oil molecule", "tel ka anu")}</T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6)}
        d="M 840 88 l 4 12 l 12 5 l -12 5 l -4 12 l -4 -12 l -12 -5 l 12 -5 z"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={840} y={150} size={12} fill={MUTED} script>{t("a star", "ek taara")}</T>
      </Fade>

      {/* beat 2 — never in the game */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={crossD(586, 91, 28, 28)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={crossD(706, 91, 28, 28)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={crossD(826, 91, 28, 28)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={720} y={190} size={13} fill={RED} script>
          {t(
            "the tool hasn't failed — it was never in the game",
            "auzaar naakaam nahi hua — wo khel mein tha hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the human-sized band */}
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 100 260 h 880" stroke={INK_LIGHT} sw={1.8} dur={0.9} />
      <Draw on={beat >= 3} delay={dl(3, 2.5)} d="M 420 260 h 220" stroke={GREEN} sw={7} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={530} y={240} size={13} fill={GREEN} script>
          {t("the human-sized band", "insaani aakaar waali patti")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={420} y={292} size={12} fill={INK_LIGHT}>1 mm</T>
        <T x={640} y={292} size={12} fill={INK_LIGHT}>{t("~100s m", "~sau metre")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={200} y={240} size={12} fill={MUTED} script>{t("molecule ↓", "anu ↓")}</T>
        <T x={850} y={240} size={12} fill={MUTED} script>{t("Moon · star ↑", "chaand · taara ↑")}</T>
      </Fade>

      {/* beat 4 — the word */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <Chip x={330} y={320} w={420} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16}>
          {t(
            "INDIRECT — the whole subtopic in one word",
            "INDIRECT — poora subtopic ek shabd mein"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — the rice grain */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d="M 130 420 h 160 M 120 426 h 180 l -14 74 h -152 z M 160 450 a 45 45 0 0 1 100 0 M 210 488 l -6 -34"
        stroke={INK}
        sw={2}
        dur={1.2}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 3)}
        d="M 204 412 a 6 3 0 1 0 12 0 a 6 3 0 1 0 -12 0"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={210} y={530} size={13} fill={INK_LIGHT} script>
          {t("one grain — the needle won't budge", "ek daana — sui hilegi hi nahi")}
        </T>
      </Fade>

      {/* beat 6 — the move */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 400 500 q 30 -55 60 -58 q 30 3 60 58 z M 430 470 q 15 -12 30 -14 M 445 485 q 20 -10 40 -12"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={1}
      />
      <Draw on={beat >= 6} delay={dl(6, 3)} d={arrowD(530, 470, 570, 470)} stroke={INK_LIGHT} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={585} y={470} size={17} fill={INK} weight={700} anchor="start">
          {t("weigh 1000 grains → m = M ÷ 1000", "1000 daane taulo → m = M ÷ 1000")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={585} y={502} size={13} fill={MUTED} script anchor="start">
          {t(
            "you never measured one grain — big & easy, then arithmetic",
            "ek daana kabhi naapa hi nahi — bada aur aasaan, phir arithmetic"
          )}
        </T>
      </Fade>

      {/* beat 7 — everything is the rice grain */}
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={570} size={14} fill={GREEN} script>
          {t(
            "convert the un-measurable into the measurable, then do arithmetic — parallax & oil-drop are all the rice grain",
            "jo naapa nahi ja sakta use naapne laayak banao, phir arithmetic — parallax aur oil-drop sab chawal ka daana hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
