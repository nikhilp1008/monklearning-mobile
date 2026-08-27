/**
 * Ch02 · Section 53 — "Example 1 [CBSE]: two trains, same track, both cases"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.4, 38.7, 52.8, 66.1, 80.3, 105.1, 123.1, 142.7]):
 *  0 title + problem line
 *  1 SI-conversion chip: × 5/18
 *  2 conversions line: 20 and 15 m/s
 *  3 (a) same-direction panel: both arrows +
 *  4 result: v_AB = +5
 *  5 meaning note: walking pace
 *  6 (b) opposite panel: v_B = −15 (not 15!)
 *  7 result: +35, minus × minus by itself
 *  8 red note: 5 vs 35 — directions only
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 chip x300..780 y100..134 · b2 line cx540 bl 164
 *  (a): header cx295 bl 210 · arrows y250/y300 · labels st x300/x260 · result bl 340
 *  (b): header cx800 bl 210 · arrows y250 (620→780) / y300 (1000→860) ·
 *       labels st x790, end x848 · result bl 340
 *  b5 lines cx295 bl 385 / 409 · b7 lines cx800 bl 385 / 409
 *  b8 | bar x66 y442..514 · lines st x84 bl 460 / 484 / 508
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the definition does the work */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 1 [CBSE] — two trains, same track, both cases",
            "Example 1 [CBSE] — do trains, ek patri, dono cases"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "A at 72 km/h, B at 54 km/h — find v_AB same direction, then opposite",
            "A 72 km/h par, B 54 km/h par — v_AB nikaalo: ek disha, phir ulti"
          )}
        </T>
      </Fade>

      {/* beat 1 — SI first */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={300} y={100} w={480} h={34} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13}>
          {t(
            "STEP 1 — convert to SI: × 5⁄18 (a classic silent error)",
            "STEP 1 — SI mein badlo: × 5⁄18 (classic chhupi galti)"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — clean numbers */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={540} y={164} size={15} fill={INK} weight={700}>
          72 × 5⁄18 = 20 m/s · 54 × 5⁄18 = 15 m/s
        </T>
      </Fade>

      {/* beat 3 — (a) same direction, signs fixed */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={295} y={210} size={12} fill={AMBER_DARK} script>
          {t("(a) same direction — that way is +", "(a) ek disha — wahi + hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d={arrowD(130, 250, 290, 250)}
        stroke={INK}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={300} y={256} size={13} fill={INK} anchor="start" weight={700}>
          A: +20
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d={arrowD(130, 300, 250, 300)}
        stroke={INK}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={260} y={306} size={13} fill={INK} anchor="start" weight={700}>
          B: +15
        </T>
      </Fade>

      {/* beat 4 — the definition, applied */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={295} y={340} size={15} fill={GREEN} weight={700}>
          v_AB = 20 − 15 = +5 m/s
        </T>
      </Fade>

      {/* beat 5 — walking pace */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={295} y={385} size={12} fill={MUTED} script>
          {t(
            "B sees A creep ahead at a walking pace —",
            "B ko A paidal jaisi chaal se aage sarakta dikhta hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={295} y={409} size={12} fill={MUTED} script>
          {t(
            "the station picture, now with numbers on it",
            "station waali tasveer, ab numbers ke saath"
          )}
        </T>
      </Fade>

      {/* beat 6 — (b) the sign earns its money */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={800} y={210} size={12} fill={AMBER_DARK} script>
          {t("(b) opposite directions", "(b) ulti dishaayein")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d={arrowD(620, 250, 780, 250)}
        stroke={INK}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={790} y={256} size={13} fill={INK} anchor="start" weight={700}>
          A: +20
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4.5)}
        d={arrowD(1000, 300, 860, 300)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 5.3)}>
        <T x={848} y={306} size={13} fill={RED} anchor="end" weight={700}>
          {t("B: −15 (not 15!)", "B: −15 (15 nahi!)")}
        </T>
      </Fade>

      {/* beat 7 — plus, by itself */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={800} y={340} size={15} fill={RED} weight={700}>
          v_AB = 20 − (−15) = +35 m/s
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={800} y={385} size={12} fill={MUTED} script>
          {t(
            "nothing was 'added on purpose' —",
            "jaan-boojh kar kuchh 'joda' nahi —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={800} y={409} size={12} fill={MUTED} script>
          {t(
            "minus × minus became plus by itself",
            "minus × minus khud plus ban gaya"
          )}
        </T>
      </Fade>

      {/* beat 8 — the lesson */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 442 v 72" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "identical trains, identical speeds — 5 vs 35 m/s: seven times different",
            "wahi trains, wahi speeds — 5 banaam 35 m/s: saat guna fark"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={84} y={484} size={13} fill={RED} script anchor="start">
          {t("only the directions changed", "sirf dishaayein badli theen")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={84} y={508} size={13} fill={RED} script anchor="start">
          {t(
            "you never chose add-or-subtract — honest signs let the definition decide",
            "jodna-ya-ghatana tumne kabhi nahi chuna — imaandaar signs ne definition se karwa liya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
