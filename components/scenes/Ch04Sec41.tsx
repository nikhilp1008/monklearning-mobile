/**
 * Ch04 · Section 41 — "Friction: the formula set"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.3, 27.8, 41.7, 51.5, 70.6, 94.4, 95.4, 111.8]):
 *  0 title · 1 band1 + inequality · 2 ceilings line · 3 band2 + μ ·
 *  4 two-angles line · 5 band3 + incline accel · 6 F_min line ·
 *  7 band4 chain · 8 red margin: compute μsN FIRST
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · bands x60..1020:
 *  band1 y84..172  hdr bl 104 · lines cx540 bl 130 / 156
 *  band2 y182..270 hdr bl 202 · lines cx540 bl 228 / 254
 *  band3 y280..368 hdr bl 300 · lines cx540 bl 326 / 352
 *  band4 y378..442 hdr bl 398 · line cx540 bl 426
 *  b8 | bar x66 y470..545 · lines st x84 bl 490 / 516 / 540
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
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function band(y: number, h: number) {
  return `M 72 ${y} h 936 q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h -936 q -12 0 -12 -12 v -${
    h - 24
  } q 0 -12 12 -12`;
}

export default function Ch04Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const hdr = (k: number, y: number, txt: string) => (
    <Fade on={beat >= k} delay={dl(k, 1)}>
      <T x={84} y={y} size={11} fill={MUTED} script anchor="start">
        {txt}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("everything friction, on one board", "poori friction, ek board par")}
        </T>
      </Fade>

      {/* beat 1 — the inequality */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={band(84, 88)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(1, 104, t("1 · static — the inequality", "1 · static — inequality"))}
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={130} size={15} fill={INK} weight={700}>
          {t(
            "0 ≤ f_s ≤ μs·N — below the limit, friction = whatever YOU applied",
            "0 ≤ f_s ≤ μs·N — limit ke neeche, friction = jo AAPNE lagayi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the ceilings */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={156} size={14} fill={INK} weight={600}>
          {t(
            "f_s(max) = μs·N · f_k = μk·N · μs ≥ μk — hence the lurch at break-free",
            "f_s(max) = μs·N · f_k = μk·N · μs ≥ μk — isiliye chhoot'te waqt jhatka"
          )}
        </T>
      </Fade>

      {/* beat 3 — the coefficient */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={band(182, 88)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(3, 202, t("2 · coefficient · the two angles", "2 · coefficient · dono angles"))}
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={228} size={15} fill={INK} weight={700}>
          μ = f⁄N — dimensionless, [M⁰ L⁰ T⁰]
        </T>
      </Fade>

      {/* beat 4 — one angle */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={254} size={14} fill={INK} weight={600}>
          {t(
            "tan λ = μ · tan θr = μs · θr = λ — 'just begins to slide' solves HERE",
            "tan λ = μ · tan θr = μs · θr = λ — 'bas sarakne lagta hai' yahin hal hota hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — rough incline */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={band(280, 88)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(5, 300, t("3 · motion results", "3 · motion ke natije"))}
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={326} size={15} fill={INK} weight={700}>
          {t(
            "sliding down: a = g(sinθ − μk·cosθ) — mass-free; meaningless if tanθ < μs",
            "sarakte hue: a = g(sinθ − μk·cosθ) — mass-free; tanθ < μs ho to bematlab"
          )}
        </T>
      </Fade>

      {/* beat 6 — minimum drag */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={352} size={14} fill={INK} weight={600}>
          F_min = μmg⁄√(1+μ²) = mg·sinλ&nbsp;&nbsp;{t("(pull at θ = λ)", "(θ = λ par kheencho)")}
        </T>
      </Fade>

      {/* beat 7 — the chain */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={band(378, 64)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(7, 398, t("4 · the JEE Advanced favourite", "4 · JEE Advanced ka pasandeeda"))}
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={426} size={15} fill={INK} weight={700}>
          {t(
            "chain off a rough table: y⁄L (max) = μ⁄(1+μ) — memorize it outright",
            "rough table se latki chain: y⁄L (max) = μ⁄(1+μ) — seedha ratt lo"
          )}
        </T>
      </Fade>

      {/* beat 8 — the one line to keep */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 470 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={490} size={14} fill={RED} script anchor="start">
          {t(
            "the line that decides EVERY problem: compute μs·N FIRST",
            "wo line jo HAR problem tay karti hai: pehle μs·N nikaalo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={516} size={14} fill={RED} script anchor="start">
          {t(
            "compare it with the driving force — then choose static (f = applied) or kinetic (f = μk·N)",
            "chalane waali force se tulna karo — phir chuno static (f = applied) ya kinetic (f = μk·N)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 14)}>
        <T x={84} y={540} size={14} fill={GREEN} script anchor="start">
          {t(
            "every wrong friction answer skipped this comparison",
            "har galat friction answer ne yahi tulna chhodi thi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
