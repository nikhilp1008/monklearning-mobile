/**
 * Ch02 · Section 70 — "Example 4 [JEE Advanced]: a = −kv², one law and two pairings"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.5, 36.3, 61.1, 85.9, 95.8, 120.7, 132.3]):
 *  0 title + problem line
 *  1 mini tree: one law, two branches
 *  2 red note: the forced choice
 *  3 part (a) work: ÷v, then ln
 *  4 result: v = u·e^(−kx)
 *  5 part (b) work: nothing cancels
 *  6 result: v = u/(1+ukt)
 *  7 red note: two functions, one motion
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  law chip x420..660 y104..138 · arrows (480,140)→(320,164) / (600,140)→(780,164) ·
 *  branch labels cx300 / cx800 bl 182
 *  b2 | bar x66 y200..252 · lines st x84 bl 219 / 245
 *  a col st x90: bl 285 / 315 · box x90..500 y340..395 (bl 375) · tag cx295 bl 418
 *  b col st x590: bl 285 / 315 · box x590..1000 y340..395 (bl 375) · tag cx795 bl 418
 *  b7 | bar x66 y450..540 · lines st x84 bl 470 / 494 / 518
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the final boss */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — a = −kv²: one law, two pairings",
            "Example 4 [JEE Advanced] — a = −kv²: ek niyam, do jodiyan"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "projected at u with resistive a = −kv² — find v(distance) and v(time)",
            "u se phenka gaya, virodhi a = −kv² — v(doori) aur v(samay) nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — one law, two answers */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Chip x={420} y={104} w={240} h={34} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          a = −k·v²
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={arrowD(480, 140, 322, 164)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.6)}
        d={arrowD(600, 140, 778, 164)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={300} y={182} size={12} fill={AMBER_DARK} script>
          {t("part (a): asks about DISTANCE", "part (a): DOORI poochhta hai")}
        </T>
        <T x={800} y={182} size={12} fill={AMBER_DARK} script>
          {t("part (b): asks about TIME", "part (b): SAMAY poochhta hai")}
        </T>
      </Fade>

      {/* beat 2 — the forced choice */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 66 200 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={219} size={13} fill={RED} script anchor="start">
          {t(
            "case 2 has a CHOICE: distance asked → v·dv⁄dx · time asked → dv⁄dt",
            "case 2 mein FAISLA hai: doori poochhi → v·dv⁄dx · samay poochha → dv⁄dt"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={84} y={245} size={13} fill={RED} script anchor="start">
          {t(
            "same law, two pairings — forced on you by what each part asks",
            "wahi niyam, do jodiyan — har part ka sawaal khud jodi tay karta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — part (a): one v cancels */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={90} y={285} size={13} fill={INK} anchor="start" weight={700}>
          v·dv⁄dx = −kv² → (÷v) dv⁄v = −k dx
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={90} y={315} size={13} fill={INK} anchor="start" weight={700}>
          ln(v⁄u) = −k x
        </T>
      </Fade>

      {/* beat 4 — exponential in distance */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 102 340 h 386 q 12 0 12 12 v 31 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={295} y={375} size={18} fill={INK} weight={800}>
          v = u·e^(−kx)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={295} y={418} size={11} fill={GREEN} script>
          {t("exponential decay with distance", "doori ke saath exponential girawat")}
        </T>
      </Fade>

      {/* beat 5 — part (b): nothing cancels */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={590} y={285} size={13} fill={INK} anchor="start" weight={700}>
          dv⁄dt = −kv² → −dv⁄v² = k dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={590} y={315} size={13} fill={INK} anchor="start" weight={700}>
          {t("1⁄v − 1⁄u = k t  (nothing cancels here)", "1⁄v − 1⁄u = k t  (yahan kuchh nahi kat'ta)")}
        </T>
      </Fade>

      {/* beat 6 — a reciprocal */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 602 340 h 386 q 12 0 12 12 v 31 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={795} y={375} size={18} fill={INK} weight={800}>
          v = u ⁄ (1 + u·k·t)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={795} y={418} size={11} fill={GREEN} script>
          {t("a reciprocal — a hyperbola, not an exponential", "ek reciprocal — hyperbola, exponential nahi")}
        </T>
      </Fade>

      {/* beat 7 — two honest descriptions */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 450 v 90" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={470} size={13} fill={RED} script anchor="start">
          {t(
            "exponential in distance, reciprocal in time — from ONE law, ONE motion",
            "doori mein exponential, samay mein reciprocal — EK niyam, EK hi motion se"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={494} size={13} fill={RED} script anchor="start">
          {t(
            "nothing contradicts: two honest descriptions, indexed by different variables",
            "koi virodh nahi: do imaandaar bayaan, alag-alag variables ke naam"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={518} size={13} fill={RED} script anchor="start">
          {t(
            "the diagnosis is not a formality — it IS the question",
            "diagnosis koi raswaayi nahi — wahi asli sawaal HAI"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
