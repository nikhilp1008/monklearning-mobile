/**
 * Ch03 · Section 36 — "NEET speed trap: components combine by Pythagoras"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.7, 24.8, 36.1, 46.3, 59.0, 62.5, 75.7]):
 *  0 heading + problem + options
 *  1 ring on (B) 14 — the adding reflex
 *  2 red: they are PERPENDICULAR
 *  3 6-8-10 triangle diagram
 *  4 √100 formula
 *  5 ANSWER (A)
 *  6 how the wrong options were built
 *  7 cue: triangle families
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | chips w120 h34 y100: x290/430/570/710
 *  b1 | ring c(490,117) rx70 ry28 · note st x84 bl 180 s12
 *  b2 | bar M66 200 v44 · lines st x84 bl 218 / 242 s12
 *  b3 | horiz (150,470)→(330,470) lbl cx240 bl 494 · vert (330,470)→(330,230)
 *       lbl st (345,355) · hyp (150,470)→(330,230) lbl end (225,335) ·
 *       right-angle M322 470 v-8 h8
 *  b4 | st x520 bl 300 s14 · st x520 bl 330 s15
 *  b5 | box x520..860 y352..398 text cx690 bl 384 s17
 *  b6 | st x520 bl 436 / 460 s12
 *  b7 | bar M66 510 v52 · lines st x84 bl 528 / 552 s12
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
  ringD,
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

export default function Ch03Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("NEET SPEED TRAP — v = 6î + 8ĵ", "NEET SPEED TRAP — v = 6î + 8ĵ")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t("the particle's SPEED is…?", "particle ki SPEED kitni hai…?")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <Chip x={290} y={100} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (A) 10
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <Chip x={430} y={100} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (B) 14
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <Chip x={570} y={100} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (C) 2
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 11)}>
        <Chip x={710} y={100} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (D) 48
        </Chip>
      </Fade>

      {/* beat 1 — the adding reflex */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={ringD(490, 117, 70, 28)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={84} y={180} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the reflex: 6 + 8 = 14 — and 14 is sitting right there as (B)",
            "reflex: 6 + 8 = 14 — aur 14 wahan (B) mein baitha hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — but they are perpendicular */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 200 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={84} y={218} size={12} fill={RED} script anchor="start">
          {t(
            "wrong — vx and vy sit at RIGHT ANGLES to each other",
            "galat — vx aur vy ek doosre se RIGHT ANGLE par hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={242} size={12} fill={RED} script anchor="start">
          {t(
            "perpendicular components never add like plain numbers",
            "perpendicular components kabhi aam numbers jaise nahi judte"
          )}
        </T>
      </Fade>

      {/* beat 3 — the 6-8-10 triangle */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 150 470 H 330" stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={240} y={494} size={14} fill={AMBER_DARK} weight={700}>6</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d="M 330 470 V 230" stroke={GREEN} sw={2.8} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={345} y={355} size={14} fill={GREEN} weight={700} anchor="start">8</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.8)} d="M 322 470 v -8 h 8" stroke={MUTED} sw={1.4} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 4.4)} d="M 150 470 L 330 230" stroke={INK} sw={3} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={225} y={335} size={15} fill={INK} weight={800} anchor="end">10</T>
      </Fade>

      {/* beat 4 — Pythagoras */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={520} y={300} size={14} fill={INK} weight={700} anchor="start">
          speed = √(36 + 64) = √100
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={520} y={330} size={15} fill={INK} weight={800} anchor="start">
          = 10 m/s, exactly
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 532 352 h 316 q 12 0 12 12 v 22 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={690} y={384} size={17} fill={INK} weight={800}>
          (A) 10 m/s
        </T>
      </Fade>

      {/* beat 6 — how the options were built */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={520} y={436} size={12} fill={RED} script anchor="start">
          {t(
            "(B) added · (C) subtracted · (D) multiplied the components",
            "(B) ne joda · (C) ne ghataya · (D) ne guna kiya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={520} y={460} size={12} fill={RED} script anchor="start">
          {t(
            "every wrong option forgets the same fact: they are ⊥",
            "har galat option wahi ek baat bhoolta hai: woh ⊥ hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the families */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 510 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={528} size={12} fill={GREEN} script anchor="start">
          {t(
            "spot the right-triangle families on sight: 3-4-5 · 6-8-10 · 5-12-13",
            "right-triangle families ko dekhte hi pehchano: 3-4-5 · 6-8-10 · 5-12-13"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={552} size={12} fill={INK} script anchor="start">
          {t(
            "see one → the speed is immediate, zero calculation",
            "dikhi nahi ki → speed turant, zero calculation"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
