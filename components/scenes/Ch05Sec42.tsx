/**
 * Ch05 · Section 42 — "Power is how fast you work, not how much"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.9, 33.6, 47.5, 72.3, 97.1, 119.6, 138.7] · dur 158.9;
 *        hi [0, 13.3, 33.7, 46.2, 71.0, 94.3, 119.1, 137.6] · dur 155.5):
 *  0 title + subtitle
 *  1 construction scene: building + two workers' times
 *  2 same work, to the joule
 *  3 POWER = rate chip
 *  4 engines: how much vs how quickly
 *  5 two taps analogy
 *  6 100 W vs 2000 W numbers
 *  7 reframe band: amount → rate
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | building x110..250 y150..320, floor line y235 · st x290: bl210 / bl240 · muted bl275
 *  b2 | green cx300 bl320 · amber cx300 bl346
 *  b3 | chip x560..980 y150..190 · script cx770 bl218
 *  b4 | cx770 bl258 / bl286
 *  b5 | taps (140,400)/(300,400) + streams · lbls cx170/cx330 bl505 · line cx280 bl535
 *  b6 | st x560 bl330 / bl358 · green cx790 bl386
 *  b7 | bar x560 y430..520 · lines st x575 bl450 / bl476 / bl502
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Power: How FAST You Work, Not How Much", "Power: Kitni TEZI se, Kitna Nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "a construction-site scene holds the whole idea",
            "construction site ka ek drishya poora idea rakhta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the scene */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 110 300 V 150 H 250 V 300 Z M 110 225 H 250" stroke={INK} sw={2.2} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={180} y={325} size={11.5} fill={MUTED} script>
          {t("first floor, 100 bricks", "pehli manzil, 100 eeten")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={290} y={210} size={13} fill={GREEN} script anchor="start">
          {t("Ramesh — done in 10 min", "Ramesh — 10 min mein khatam")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={290} y={240} size={13} fill={RED} script anchor="start">
          {t("Suresh — takes 30 min", "Suresh — 30 min leta hai")}
        </T>
      </Fade>

      {/* beat 2 — same work */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={300} y={362} size={13} fill={GREEN} script>
          {t(
            "same bricks, same height → same work, to the joule",
            "wahi eeten, wahi height → wahi work, joule tak"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={300} y={388} size={13} fill={AMBER_DARK} script>
          {t("so what is different?", "to alag kya hai?")}
        </T>
      </Fade>

      {/* beat 3 — the rate */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={560} y={150} w={420} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          {t("POWER = the RATE of doing work", "POWER = work karne ki RATE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={770} y={218} size={13} fill={INK} script>
          {t(
            "Ramesh worked 3× faster — that rate is power",
            "Ramesh ne 3× tez kaam kiya — wahi rate power hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — how much vs how quickly */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={770} y={258} size={12.5} fill={INK} script>
          {t(
            "two engines, same 10th-floor job — the stronger just arrives SOONER",
            "do engines, wahi 10vi-manzil ka kaam — tagda bas JALDI pahunchta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={770} y={286} size={13} fill={GREEN} script>
          {t(
            "ENERGY answers 'how much' · POWER answers 'how quickly'",
            "ENERGY batati hai 'kitna' · POWER batati hai 'kitni jaldi'"
          )}
        </T>
      </Fade>

      {/* beat 5 — the two taps */}
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d="M 140 412 h 44 M 162 412 v 18 M 152 440 v 26 M 162 440 v 26 M 172 440 v 26" stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 5} delay={dl(5, 4)} d="M 300 412 h 44 M 322 412 v 18 M 322 442 v 5 m 0 10 v 5 m 0 10 v 5" stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={165} y={500} size={12} fill={GREEN} script>
          {t("wide open — seconds", "poora khula — seconds")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={330} y={500} size={12} fill={RED} script>
          {t("dripping — an hour", "tapakta — ek ghanta")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={280} y={536} size={12.5} fill={AMBER_DARK} script>
          {t(
            "same litres in the end — flow rate ⇄ power (L/s ⇄ J/s)",
            "aakhir mein wahi litre — flow rate ⇄ power (L/s ⇄ J/s)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the numbers */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={330} size={14} fill={INK} anchor="start" weight={700}>
          {t("100 W → 100 J every second", "100 W → 100 J har second")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={560} y={358} size={14} fill={INK} anchor="start" weight={700}>
          {t("2000 W → 2000 J every second", "2000 W → 2000 J har second")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={790} y={386} size={12.5} fill={GREEN} script>
          {t(
            "any job, 20× faster — same total, wildly different rate",
            "koi bhi kaam, 20× tez — wahi total, bilkul alag rate"
          )}
        </T>
      </Fade>

      {/* beat 7 — the reframe */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 560 430 v 88" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={575} y={450} size={13} fill={GREEN} script anchor="start">
          {t("see 'power' → think SPEED of the job", "'power' dikhe → kaam ki SPEED socho")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={575} y={476} size={13} fill={GREEN} script anchor="start">
          {t("how many joules per second?", "kitne joules har second?")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={575} y={502} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "from amount → to rate — it unlocks everything",
            "matra se → rate tak — yahi sab kuchh kholta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
