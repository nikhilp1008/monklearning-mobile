/**
 * Ch02 · Section 60 — "The master key: a = v·dv/dx"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.4, 29.4, 52.7, 58.3, 79.7, 95.1, 119.9]):
 *  0 title
 *  1 red note: a handed as a(x)
 *  2 the stuck circle
 *  3 the escape line
 *  4 chain-rule derivation lines
 *  5 result card: a = v·dv/dx — dt vanished
 *  6 red note: both sides integrable — the master key
 *  7 green: relates v and x, no time — eq 3's parent
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | bar x66 y90..142 · lines st x84 bl 110 / 136
 *  b2 | lines st x84 bl 176 / 202 · loop arc c(700,190) · "stuck" st x730 bl 196
 *  b3 | line cx540 bl 240
 *  b4 | st x180 bl 285 / 325
 *  b5 | card x330..750 y355..425 (bl 400 · underline y412) · sub cx540 bl 448
 *  b6 | bar x66 y470..524 · lines st x84 bl 490 / 516
 *  b7 | bar x56 y540..594 · lines st x72 bl 560 / 586
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — a small masterpiece */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the master key — a small masterpiece",
            "master key — ek chhota shahkaar"
          )}
        </T>
      </Fade>

      {/* beat 1 — feel the problem first */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 66 90 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={84} y={110} size={13} fill={RED} script anchor="start">
          {t(
            "sometimes a is handed to you as a function of POSITION — a(x), not a(t)",
            "kabhi a tumhe POSITION ke function ke roop mein milta hai — a(x), a(t) nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={136} size={13} fill={RED} script anchor="start">
          {t(
            "the closer the particle gets, the harder it is pushed",
            "particle jitna paas, dhakka utna zor ka"
          )}
        </T>
      </Fade>

      {/* beat 2 — stuck before you start */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={84} y={176} size={12} fill={INK} script anchor="start">
          {t(
            "want v? integrate a over t — but you only know a as a function of x",
            "v chahiye? a ko t par integrate karo — par a to sirf x ka function pata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={84} y={202} size={12} fill={INK} script anchor="start">
          {t(
            "find x(t) first? that is exactly what you are trying to work out",
            "pehle x(t) nikaalo? wahi to nikaalne ki koshish ho rahi hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 11)}
        d="M 700 168 a 22 22 0 1 1 -14 40 M 686 208 l -8 -10 M 686 208 l 12 -4"
        stroke={RED}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 12.5)}>
        <T x={740} y={196} size={12} fill={RED} script anchor="start">
          {t("stuck — a circle", "phanse — ek chakkar")}
        </T>
      </Fade>

      {/* beat 3 — the cheap escape */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={240} size={12} fill={AMBER_DARK} script>
          {t(
            "the escape is a chain-rule trick — beautifully cheap",
            "bachne ka raasta chain-rule ki chaal hai — khoobsurat aur sasti"
          )}
        </T>
      </Fade>

      {/* beat 4 — insert dx, top and bottom */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={180} y={285} size={16} fill={INK} anchor="start" weight={700}>
          a = dv⁄dt = (dv⁄dx)·(dx⁄dt)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={180} y={325} size={16} fill={INK} anchor="start" weight={700}>
          {t("but dx⁄dt = v — we already know it", "par dx⁄dt = v — yeh to pata hi hai")}
        </T>
      </Fade>

      {/* beat 5 — dt vanished */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 342 355 h 396 q 12 0 12 12 v 46 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={400} size={26} fill={INK} weight={800}>
          a = v·dv⁄dx
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.5)}
        d="M 440 412 h 200"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={540} y={448} size={11} fill={MUTED} script>
          {t(
            "dt went in on the left and never came out — time traded for position, for free",
            "dt baayein se ghusa aur kabhi nahi nikla — samay ke badle position, muft mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — both sides integrable */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 470 v 54" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={490} size={13} fill={RED} script anchor="start">
          {t(
            "now v dv sits on one side and a(x) on the other — BOTH sides integrable",
            "ab ek taraf v dv, doosri taraf a(x) — DONO integrate ho sakte hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={84} y={516} size={13} fill={RED} script anchor="start">
          {t(
            "the master key of this sub-topic: almost every hard problem turns on it",
            "is sub-topic ki master key: lagbhag har mushkil sawaal isi par ghoomta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — you have met it before */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 540 v 54" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={560} size={13} fill={GREEN} script anchor="start">
          {t(
            "the deeper reason: it relates v and x without ever solving for time",
            "gehri wajah: yeh v aur x ko jodta hai, samay ko kabhi hal kiye bina"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={72} y={586} size={13} fill={GREEN} script anchor="start">
          {t(
            "you have met it: it derived v² = u² + 2as — once, for constant a. now, in general.",
            "mil chuke ho isse: isi ne v² = u² + 2as nikaala tha — tab constant a par. ab, aam roop mein."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
