/**
 * Ch01 · Section 58 — "Example 3 [JEE Main]: density of a cylindrical wire"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.9, 32.1, 56.9, 81.8, 95.7, 119.5, 132.4]):
 *  0 title · draw the wire cylinder with r / l / m / π labels
 *  1 step 1: 1.5 mm → 0.15 cm
 *  2 the trap: looks like it gained digits — still 2 sf (rule 7)
 *  3 the sig-fig audit row + trailing-zero note
 *  4 volume: V = πr²l = 2.1195 cm³
 *  5 don't round yet: 2.1 ✗ crossed · carry digits, round once
 *  6 density: ρ = 8.0 / 2.1195 = 3.7744…
 *  7 least = 2 → ρ = 3.8 g/cm³ green
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | wire x120..560 y110..150 · l-arrow y168, label cx340 bl 190 · r label st x585 bl 112 + arrow
 *  b0 | chips m x680..800, π x830..950 y110..142
 *  b1 | bl 240: script st x120 · eq 18 st x300
 *  b2 | bl 280: red script st x120 (..459) · amber script st x500 (..831)
 *  b3 | bl 330 sans 16 st x120 · muted 13 bl 358 st x120
 *  b4 | bl 410 sans 18 st x120 (..507)
 *  b5 | red 18 st x560 bl 410 + cross · amber 14 st x560 bl 448
 *  b6 | bl 480 sans 18 st x120
 *  b7 | amber script bl 535 st x120 · green 26 st x500 bl 538 · green script st x720?? → note inside
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the wire */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "JEE Main — density of a cylindrical wire",
            "JEE Main — belnakaar taar ki density"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 130 110 h 430 a 12 20 0 1 1 0 40 h -430 a 12 20 0 0 1 0 -40 M 560 110 a 12 20 0 0 0 0 40"
        stroke={INK}
        sw={2.2}
        dur={1.4}
      />
      <Draw on={beat >= 0} delay={dl(0, 6)} d="M 572 126 v -14" stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 0} delay={dl(0, 6.5)}>
        <T x={590} y={112} size={15} fill={INK} anchor="start">r = 1.5 mm</T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 8)}
        d={arrowD(150, 168, 120, 168) + " " + arrowD(530, 168, 560, 168) + " M 150 168 h 380"}
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <T x={340} y={190} size={15} fill={INK}>l = 30.0 cm</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 11)}>
        <Chip x={680} y={110} w={120} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          m = 8.0 g
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 13)}>
        <Chip x={830} y={110} w={120} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          π = 3.14
        </Chip>
      </Fade>

      {/* beat 1 — consistent units */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={120} y={240} size={14} fill={AMBER_DARK} script anchor="start">
          {t("step 1 · one unit system:", "step 1 · ek hi unit system:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={330} y={240} size={18} fill={INK} weight={700} anchor="start">1.5 mm → 0.15 cm</T>
      </Fade>

      {/* beat 2 — the conversion trap */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={120} y={280} size={14} fill={RED} script anchor="start">
          {t(
            "trap: looks like it gained digits — it didn't",
            "jaal: lagta hai digits badh gaye — nahi badhe"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={500} y={280} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "still 2 sf — unit change never changes the count",
            "ab bhi 2 sf — unit badalne se ginti nahi badalti"
          )}
        </T>
      </Fade>

      {/* beat 3 — the audit */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={120} y={330} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "r: 2 sf   ·   l: 3 sf   ·   m: 2 sf   ·   π: given — limits nothing",
            "r: 2 sf   ·   l: 3 sf   ·   m: 2 sf   ·   π: diya hua — kuchh limit nahi karta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={120} y={358} size={13} fill={MUTED} script anchor="start">
          {t(
            "30.0 — the trailing zero sits after a decimal, so it counts",
            "30.0 — aakhri zero decimal ke baad hai, to ginta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the volume */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={120} y={410} size={18} fill={INK} weight={700} anchor="start">
          V = πr²l = 3.14 × 0.15² × 30.0 = 2.1195 cm³
        </T>
      </Fade>

      {/* beat 5 — do not round yet */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={600} y={410} size={18} fill={RED} weight={700} anchor="start">
          {t("→ 2.1 now? ✗", "→ abhi 2.1? ✗")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 6)}
        d={crossD(598, 396, 118, 18)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={600} y={448} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "carry every digit — round ONCE, at the end",
            "har digit saath rakho — round EK baar, aakhir mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — the density */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={120} y={480} size={18} fill={INK} weight={700} anchor="start">
          ρ = m / V = 8.0 / 2.1195 = 3.7744… g/cm³
        </T>
      </Fade>

      {/* beat 7 — round, once */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={120} y={538} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "all × and ÷ → count sig figs · least = 2",
            "sab × aur ÷ → sig figs gino · sabse kam = 2"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={520} y={542} size={26} fill={GREEN} weight={700} anchor="start">ρ = 3.8 g/cm³</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={740} y={538} size={14} fill={GREEN} script anchor="start">
          {t("— and not one digit more", "— aur ek bhi digit zyada nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
