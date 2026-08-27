/**
 * Ch04 · Section 4 — "Derivation: recovering F = ma from the momentum definition"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.6, 21.4, 37.7, 54.4, 62.1, 75.4, 88.6]; hi beats 2–4 fire
 * within 2s of each other — settle rule handles it):
 *  0 title
 *  1 parent box: F = dp⁄dt = d(m·v)⁄dt
 *  2 right notes: momentum is what force controls
 *  3 arrow ↓ + red ASSUME chip (m constant) + side examples
 *  4 arrow ↓ + F = m·dv⁄dt
 *  5 arrow ↓ + green hero box F = m·a + "special case" notes
 *  6 left ladder labels + up-arrow + "break assumption → climb back"
 *  7 red margin: F=0 → a=0 — First Law inside Second
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · ladder cx430
 *  parent box x290..570 y92..146 · formula bl 126 sz20
 *  b2 notes st x640 bl 110 / 134
 *  arr (430,150)→(430,186) · chip x270..590 y190..226 · note st x640 bl 214
 *  arr (430,230)→(430,262) · "F = m·dv⁄dt" cx430 bl 292 sz20
 *  arr (430,306)→(430,336) · hero x310..550 y340..392 bl 375 sz30
 *  b5 notes st x640 bl 356 / 380 · b6 note st x640 bl 420 · uparrow x612 392→155
 *  b6 left labels anchor-end x255 bl 122 / 212 / 370
 *  b7 bar x66 y470..540 · lines st x84 bl 490 / 516
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — recover, don't assume */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "CBSE Derivation 1 — recovering F = ma, not assuming it",
            "CBSE Derivation 1 — F = ma ko recover karenge, maanenge nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — the parent statement */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 302 92 h 256 q 12 0 12 12 v 30 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -30 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={430} y={126} size={20} fill={INK} weight={800}>
          F = dp⁄dt = d(m·v)⁄dt
        </T>
      </Fade>

      {/* beat 2 — why this form first */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={640} y={110} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "momentum is what force truly controls",
            "momentum hi hai jo force sach mein control karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={640} y={134} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "acceleration needs an extra assumption",
            "acceleration ko ek extra assumption chahiye"
          )}
        </T>
      </Fade>

      {/* beat 3 — the assumption, in the open */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d={arrowD(430, 150, 430, 186)}
        stroke={INK}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Chip
          x={270}
          y={190}
          w={320}
          h={36}
          fill={CREAM}
          stroke={RED}
          textFill={RED}
          size={15}
          dashed
        >
          {t("ASSUME: m = constant", "ASSUME: m = constant")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={640} y={214} size={13} fill={MUTED} script anchor="start">
          {t("block · ball · fixed-load car ✓", "block · ball · fixed-load car ✓")}
        </T>
      </Fade>

      {/* beat 4 — m slides out */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.5)}
        d={arrowD(430, 230, 430, 262)}
        stroke={INK}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={430} y={292} size={20} fill={INK} weight={700}>
          F = m · dv⁄dt
        </T>
      </Fade>

      {/* beat 5 — the child */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d={arrowD(430, 306, 430, 336)}
        stroke={INK}
        sw={2.4}
        dur={0.3}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.2)}
        d="M 322 340 h 216 q 12 0 12 12 v 28 q 0 12 -12 12 h -216 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={430} y={375} size={30} fill={INK} weight={800}>
          F = m·a
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={640} y={356} size={13} fill={GREEN} script anchor="start">
          {t("not a new law —", "koi naya law nahi —")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={640} y={380} size={13} fill={GREEN} script anchor="start">
          {t(
            "a special case, unlocked by ONE assumption",
            "ek special case, jise EK assumption ne khola"
          )}
        </T>
      </Fade>

      {/* beat 6 — the ladder structure */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={255} y={122} size={13} fill={AMBER_DARK} script anchor="end">
          {t("parent", "parent")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={255} y={212} size={13} fill={AMBER_DARK} script anchor="end">
          {t("assumption", "assumption")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={255} y={370} size={13} fill={AMBER_DARK} script anchor="end">
          {t("child", "child")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d={arrowD(612, 392, 612, 155)}
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={640} y={420} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "break the assumption → fall back UP to the parent",
            "assumption toote → wapas parent par chadh jao"
          )}
        </T>
      </Fade>

      {/* beat 7 — the First Law hides inside */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 470 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={490} size={14} fill={RED} script anchor="start">
          {t(
            "bonus: F = 0 → a = 0 → v constant — the First Law's exact claim",
            "bonus: F = 0 → a = 0 → v constant — yahi to First Law kehta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={516} size={14} fill={GREEN} script anchor="start">
          {t(
            "the First Law lives INSIDE the Second — a special case of a special case",
            "First Law, Second ke ANDAR rehta hai — special case ke andar special case"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
