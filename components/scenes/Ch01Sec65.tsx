/**
 * Ch01 · Section 65 — "Procedures A and B: reading each instrument"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.5, 28.6, 43.4, 56, 69.4, 75.7, 100.5]):
 *  0 title
 *  1 A header + step 1 MSR (just before, not nearest)
 *  2 step 2 VSR (a number, not a length)
 *  3 step 3 formula box + the skipped × LC
 *  4 step 4 subtract zero error with sign
 *  5 B header — same shape, one extra step
 *  6 B step 1 pitch + NEVER-assume warning
 *  7 B steps 2–4 + three-beat rhythm chips
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  left col x60..520: header bl 100 · s1 bl 140 (sub 166) · s2 bl 205 (sub 231) · box y255..295 (bl 281) · red sub bl 320 · s4 bl 355
 *  right col x560..1020: header bl 100 · s1 bl 140 · warn chip y160..196 · sub bl 226 · s2 bl 266 · s3 bl 306 · box y330..370 (bl 356)
 *  rhythm | green mid bl 430 · chips y455..491 x300/480/660 (w150) + arrows
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "reading each instrument — airtight procedures",
            "har instrument padhna — pakki procedures"
          )}
        </T>
      </Fade>

      {/* beat 1 — A · step 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={60} y={100} size={16} fill={AMBER_DARK} script anchor="start">
          {t("A — vernier callipers", "A — vernier callipers")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M 60 112 h 210" stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={60} y={140} size={14} fill={INK} script anchor="start">
          {t(
            "1 · MSR = the last mark JUST BEFORE the vernier zero",
            "1 · MSR = vernier zero se THEEK PEHLE waala aakhri nishaan"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={84} y={166} size={12} fill={RED} script anchor="start">
          {t(
            "not the nearest — the last one it has PASSED",
            "sabse nazdeek nahi — jo PAAR ho chuka wo aakhri"
          )}
        </T>
      </Fade>

      {/* beat 2 — A · step 2 */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={60} y={205} size={14} fill={INK} script anchor="start">
          {t(
            "2 · VSR = the division that coincides exactly",
            "2 · VSR = jo division bilkul mil jaati hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={84} y={231} size={12} fill={MUTED} script anchor="start">
          {t(
            "a division NUMBER — not a length",
            "ek division NUMBER — koi lambai nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — A · the formula */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 72 255 h 380 q 12 0 12 12 v 16 q 0 12 -12 12 h -380 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={262} y={281} size={17} fill={INK} weight={700}>
          reading = MSR + (VSR × LC)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={84} y={320} size={12} fill={RED} script anchor="start">
          {t(
            "the × LC is the step students skip — pitfalls will return here",
            "wahi × LC hai jo students chhod dete — pitfalls mein wapas aayenge"
          )}
        </T>
      </Fade>

      {/* beat 4 — A · step 4 */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={60} y={355} size={14} fill={GREEN} script anchor="start">
          {t(
            "4 · SUBTRACT the zero error — with its sign, always",
            "4 · zero error GHATAO — sign ke saath, hamesha"
          )}
        </T>
      </Fade>

      {/* beat 5 — B header */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={560} y={100} size={16} fill={AMBER_DARK} script anchor="start">
          {t(
            "B — screw gauge · same shape, one extra step",
            "B — screw gauge · wahi shakl, ek extra step"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d="M 560 112 h 210" stroke={AMBER} sw={2} dur={0.4} />

      {/* beat 6 — B · step 1: the pitch */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={560} y={140} size={14} fill={INK} script anchor="start">
          {t(
            "1 · pitch = distance moved ÷ full rotations",
            "1 · pitch = tay doori ÷ poore chakkar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <Chip x={560} y={160} w={440} h={36} fill="none" stroke={RED} textFill={RED} size={15} dashed>
          {t("NEVER assume pitch = 1 mm", "pitch = 1 mm KABHI mat maano")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 16)}>
        <T x={584} y={226} size={12} fill={MUTED} script anchor="start">
          {t(
            "turn a known number of times, see the travel, divide",
            "tay chakkar ghumao, dekho kitna khiska, bhaag do"
          )}
        </T>
      </Fade>

      {/* beat 7 — B · steps 2–4 + the rhythm */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={560} y={266} size={14} fill={INK} script anchor="start">
          {t("2 · LC = pitch ÷ circular divisions", "2 · LC = pitch ÷ circular divisions")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={560} y={306} size={14} fill={INK} script anchor="start">
          {t(
            "3 · MSR + the division in line with the reference",
            "3 · MSR + reference line ke saamne waali division"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 9)}
        d="M 572 330 h 424 q 12 0 12 12 v 16 q 0 12 -12 12 h -424 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 7} delay={dl(7, 10.5)}>
        <T x={784} y={356} size={16} fill={INK} weight={700}>
          reading = MSR + (div × LC) − zero error
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={540} y={430} size={15} fill={GREEN} script>
          {t(
            "the same three-beat rhythm, both instruments:",
            "dono instruments mein wahi teen-taal lay:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 17)}>
        <Chip x={300} y={455} w={150} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("find the LC", "LC nikaalo")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 18.5)} d={arrowD(455, 473, 495, 473)} stroke={GREEN} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <Chip x={500} y={455} w={150} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("take the reading", "reading lo")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 20.5)} d={arrowD(655, 473, 695, 473)} stroke={GREEN} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 21)}>
        <Chip x={700} y={455} w={150} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("correct the zero", "zero sudhaaro")}
        </Chip>
      </Fade>
    </Scene>
  );
}
