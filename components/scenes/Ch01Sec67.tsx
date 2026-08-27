/**
 * Ch01 · Section 67 — "Least count: the two definitions"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.9, 29.9, 35.7, 47.6, 64.2, 89, 97.5]):
 *  0 title
 *  1 definition box: LC = smallest length = uncertainty of one reading
 *  2 vernier header
 *  3 LC = 1 MSD − 1 VSD box
 *  4 order warning: reversed ⇒ negative (distractor)
 *  5 working formula: n VSD = (n−1) MSD → LC = MSD/n (special case!)
 *  6 screw header: two steps, never one
 *  7 pitch box → LC box · find the pitch first · everything is [L]
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | box x120..960 y80..150 · sans 16 bl 108 · green 13 bl 136
 *  b2 | header st x80 bl 190
 *  b3 | box x120..520 y210..258 · sans 20 bl 240
 *  b4 | st x560 bl 228 (amber) · st x560 bl 254 (red 12)
 *  b5 | box x120..700 y290..338 · 18 bl 320 · notes st x730 bl 306/332
 *  b6 | header st x80 bl 390
 *  b7 | boxes y410..456: x120..500 / x560..960 (16 bl 438) · green mid bl 500 · muted mid bl 532
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const box = (x: number, y: number, w: number, h: number) =>
    `M ${x + 12} ${y} h ${w - 24} q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h ${-(w - 24)} q -12 0 -12 -12 v ${-(h - 24)} q 0 -12 12 -12`;

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "least count — fewer formulas than you fear",
            "least count — dar se kam formulas"
          )}
        </T>
      </Fade>

      {/* beat 1 — the definition */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={box(120, 80, 840, 70)} stroke={AMBER} sw={2.4} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={540} y={108} size={16} fill={INK} weight={700}>
          {t(
            "least count = smallest measurable length = uncertainty of ONE reading",
            "least count = sabse chhoti naapne laayak lambai = EK reading ki uncertainty"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={540} y={136} size={13} fill={GREEN} script>
          {t(
            "smaller LC → finer instrument — that equivalence is the sentence to quote",
            "chhota LC → baareek instrument — yahi samkakshta exam mein likhne waala vaakya hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — vernier header */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={80} y={190} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "vernier callipers — start from the definition, not the shortcut",
            "vernier callipers — shortcut se nahi, paribhasha se shuru karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — the definition formula */}
      <Draw on={beat >= 3} delay={dl(3, 1)} d={box(120, 210, 400, 48)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={320} y={240} size={20} fill={INK} weight={700}>LC = 1 MSD − 1 VSD</T>
      </Fade>

      {/* beat 4 — the order matters */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={560} y={228} size={14} fill={AMBER_DARK} script anchor="start">
          {t("main − vernier, IN THAT ORDER", "main − vernier, ISI kram mein")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={560} y={254} size={12} fill={RED} script anchor="start">
          {t(
            "reversed ⇒ a negative length — a standard MCQ distractor",
            "ulta karo ⇒ negative lambai — maanak MCQ distractor"
          )}
        </T>
      </Fade>

      {/* beat 5 — the working formula */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d={box(120, 290, 580, 48)} stroke={AMBER} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={410} y={320} size={18} fill={INK} weight={700}>
          {t("if n VSD = (n−1) MSD  →  LC = 1 MSD ⁄ n", "agar n VSD = (n−1) MSD  →  LC = 1 MSD ⁄ n")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={730} y={306} size={13} fill={AMBER_DARK} script anchor="start">
          {t("the version you'll use 90% of the time", "jo roop 90% baar chalega")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 18)}>
        <T x={730} y={332} size={12} fill={RED} script anchor="start">
          {t(
            "a special case, NOT the definition — Advanced breaks it",
            "khaas maamla hai, paribhasha NAHI — Advanced ise todta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — screw header */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={80} y={390} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "screw gauge — TWO steps, never one",
            "screw gauge — DO steps, ek kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — pitch first, then LC */}
      <Draw on={beat >= 7} delay={dl(7, 1)} d={box(120, 410, 380, 46)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={310} y={438} size={16} fill={INK} weight={700}>
          {t("pitch = distance ÷ rotations", "pitch = doori ÷ chakkar")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 7)} d={arrowD(508, 433, 552, 433)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 8)} d={box(560, 410, 400, 46)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 9.2)}>
        <T x={760} y={438} size={16} fill={INK} weight={700}>
          {t("LC = pitch ÷ circular divisions", "LC = pitch ÷ circular divisions")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={540} y={500} size={14} fill={GREEN} script>
          {t("find the pitch FIRST — always", "pehle pitch nikaalo — HAMESHA")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={540} y={532} size={13} fill={MUTED} script>
          {t(
            "every quantity here is a length — dimensional formula [L], SI unit: metre",
            "yahan har quantity ek lambai hai — dimensional formula [L], SI unit: metre"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
