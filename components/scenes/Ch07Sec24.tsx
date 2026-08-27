/**
 * Ch07 · Section 24 — "Worked example: the cavity trick — a uniform field (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.48, 33.28, 41.64, 54.36, 55.36, 56.36, 69.41]):
 *  0 title + problem
 *  1 superposition picture: sphere-with-cavity = full sphere − small sphere (+ d arrow)
 *  2 line: field in cavity = full − small
 *  3 the one fact: interior field −(4/3)πGρ·r
 *  4 subtraction line → −(4/3)πGρ·d
 *  5 green: P cancelled — same everywhere
 *  6 green box magnitude (2/3)πGρR + direction note
 *  7 red margin: perfectly uniform — elegant
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · sub cx540 bl84
 *  P1 c(180,210) r80 + cavity c(220,210) r40 dashed · O (180,210) · O′ (220,210) ·
 *   d arrow (187,210)→(213,210) · "d = R⁄2" cx200 bl246 · caption cx180 bl320
 *  "=" (300,216) · P2 c(400,210) r80 + O dot · caption cx400 bl320 · "−" (520,216) ·
 *  P3 c(620,210) r40 + O′ dot · caption cx620 bl320
 *  b2 | line st x760 bl150 · b3 | line st x760 bl200 + note bl226
 *  b4 | line st x100 bl380 (→475) · b5 | line st x100 bl420 + underline M100 432 h360
 *  b6 | green box x560..980 y395..447 (bl427) · dir note st x560 bl470
 *  b7 | bar x66 y505..557 · lines st x84 bl525 / 551
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the signature problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Advanced] — the cavity trick",
            "Example [JEE Advanced] — cavity trick"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "sphere (density ρ), cavity R⁄2 with centre R⁄2 away — show E inside is uniform",
            "sphere (density ρ), cavity R⁄2, centre R⁄2 door — dikhao andar E uniform hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — cavity = full − small */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 180 130 A 80 80 0 1 1 179.9 130"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle
          cx={220}
          cy={210}
          r={40}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="6 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={180} cy={210} r={2.5} fill={INK} />
        <T x={166} y={200} size={11} fill={INK} weight={700}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={300} y={216} size={22} fill={INK} weight={800}>
          =
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 3.6)}
          d="M 400 130 A 80 80 0 1 1 399.9 130"
          stroke={INK}
          sw={2.4}
          dur={0.8}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <Circle cx={400} cy={210} r={2.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={520} y={216} size={24} fill={INK} weight={800}>
          −
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 5.4)}
          d="M 620 170 A 40 40 0 1 1 619.9 170"
          stroke={INK}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <Circle cx={620} cy={210} r={2.5} fill={INK} />
        <T x={640} y={200} size={11} fill={INK} weight={700}>
          O′
        </T>
        <T x={238} y={198} size={11} fill={INK} weight={700}>
          O′
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.8)}
        d={arrowD(187, 210, 213, 210)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={200} y={246} size={11} fill={AMBER_DARK} weight={700}>
          d = R⁄2
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.5)}>
        <T x={180} y={320} size={12} fill={INK} script>
          {t("sphere + cavity", "sphere + cavity")}
        </T>
        <T x={400} y={320} size={12} fill={INK} script>
          {t("full sphere (ρ)", "poora sphere (ρ)")}
        </T>
        <T x={620} y={320} size={12} fill={INK} script>
          {t("small sphere (ρ)", "chhota sphere (ρ)")}
        </T>
      </Fade>

      {/* beat 2 — superposition of fields */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={760} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "E(cavity) = E(full) − E(small)",
            "E(cavity) = E(full) − E(chhota)"
          )}
        </T>
      </Fade>

      {/* beat 3 — the one needed fact */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={760} y={200} size={14} fill={INK} anchor="start" weight={700}>
          E(inside) = −(4⁄3)·π·G·ρ·r
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={760} y={226} size={11} fill={MUTED} script anchor="start">
          {t(
            "r measured from that sphere's OWN centre",
            "r us sphere ke APNE centre se napa hua"
          )}
        </T>
      </Fade>

      {/* beat 4 — subtract; P's position collapses to d */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={100} y={380} size={15} fill={INK} anchor="start" weight={700}>
          E(cav) = −(4⁄3)πGρ·[r(O→P) − r(O′→P)] = −(4⁄3)πGρ·d
        </T>
      </Fade>

      {/* beat 5 — P vanished */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={100} y={420} size={13} fill={GREEN} script anchor="start">
          {t(
            "P cancelled completely — anywhere in the cavity, the SAME field",
            "P poora cancel ho gaya — cavity mein kahin bhi ho, field WAHI"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 100 432 h 360" stroke={GREEN} sw={2} dur={0.4} />

      {/* beat 6 — the magnitude */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 572 395 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={770} y={427} size={15} fill={INK} weight={800}>
          E = (4⁄3)πGρ·(R⁄2) = (2⁄3)·π·G·ρ·R
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={560} y={470} size={11} fill={MUTED} script anchor="start">
          {t(
            "along the line of centres, toward O",
            "line of centres ke saath, O ki taraf"
          )}
        </T>
      </Fade>

      {/* beat 7 — perfectly uniform */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 505 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={525} size={13} fill={RED} script anchor="start">
          {t(
            "EVERY point in the hollow feels the identical pull — perfectly uniform",
            "hollow ka HAR point ek jaisa pull — perfectly uniform field"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={84} y={551} size={13} fill={RED} script anchor="start">
          {t(
            "one of the most elegant consequences of the inverse square",
            "inverse-square ka sabse elegant nateejon mein se ek"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
