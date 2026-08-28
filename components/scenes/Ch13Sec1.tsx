/**
 * Ch13 · Section 1 — "What makes a motion simple harmonic"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.13, 27.45, 41.02, 48.25, 60.38, 71.94, 80.89]):
 *  0 the jhula: pivot, string, bob, dashed extremes, ghost bobs, to-and-fro arrow
 *  1 clock (periodic) + "oscillation" label near the swing
 *  2 the line abstraction: track, -A/O/+A ticks+labels, particle
 *  3 formula chip F = −k x
 *  4 isolated minus + ring (the soul of SHM) + red arrow: particle pulled to O
 *  5 "fastest here" (green, at O) / "frozen here" (red, at +A) + leader ticks
 *  6 green speed-lines at O / red pause-icon at +A
 *  7 verdict box: speed MAX⟺force ZERO / speed ZERO⟺force MAX
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 script
 *  b0 | pivot dot c(540,95) r3 · string 540,95→540,152 · bob c(540,165) r14 (box 526..554,151..179) ·
 *      dashed strings 540,95→500,160 & →580,160 · ghost bobs c(500,160)/c(580,160) r10 ·
 *      to-fro arrow shaft y195 x500..580, heads y188..202
 *  b1 | clock c(260,150) r30 (box 230..290,120..180) · hands · center dot ·
 *      "periodic" cx260 bl207 script (box 231..291,190..214) ·
 *      "oscillation" cx540 bl228 script (box 504..576,212..234)
 *  b2 | track y310 x210..870 · ticks x280/540/800 y298..322 (O dashed green) ·
 *      "-A" cx280 / "O" cx540(green) / "+A" cx800 bl344 (boxes ~y333..348) ·
 *      particle c(650,310) r9 (box 641..659,301..319)
 *  b3 | chip x470..610 y372..416 "F = −k x" cx540 cy401
 *  b4 | red arrow 633,310→560,310 · isolated "−" cx650 cy401 size30 (box 642..658,378..410) ·
 *      ring cx650 cy394 rx22 ry28 (span x628..673 y357..431)
 *  b5 | "fastest here" cx540 bl282 green (box 500..580,266..288) + leader 540,290→540,296 ·
 *      "frozen here" cx800 bl282 red (box 760..840,266..288) + leader 800,290→800,296
 *  b6 | speed-lines x505..519 y302..322 green · pause-icon bars x794/806 y300..320 red
 *  b7 | box x300..780 y494..578 rx14 · line1 bl528 · line2 bl560 (boxes clear ≥14 apart)
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "From periodic motion to oscillation to SHM",
            "Periodic motion ⇒ oscillation ⇒ SHM"
          )}
        </T>
      </Fade>

      {/* beat 0 — the jhula: a gentle push, forward, stop, back */}
      <Fade on={beat >= 0} delay={dl(0, 0.1)}>
        <Circle cx={540} cy={95} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 540 95 L 540 152" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 0.9)}>
        <Draw
          on={beat >= 0}
          delay={dl(0, 0.9)}
          d="M 540 151 A 14 14 0 1 1 539.9 151"
          stroke={INK}
          sw={2.2}
          dur={0.5}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.6)}>
        <Path d="M 540 95 L 500 160" stroke={MUTED} strokeWidth={1.8} strokeDasharray="5 5" fill="none" />
        <Path d="M 540 95 L 580 160" stroke={MUTED} strokeWidth={1.8} strokeDasharray="5 5" fill="none" />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <Circle cx={500} cy={160} r={10} fill="none" stroke={MUTED} strokeWidth={1.6} />
        <Circle cx={580} cy={160} r={10} fill="none" stroke={MUTED} strokeWidth={1.6} />
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.6)}
        d="M 500 195 L 580 195 M 508 188 L 500 195 L 508 202 M 572 188 L 580 195 L 572 202"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.6}
      />

      {/* beat 1 — vocabulary: periodic (clock) vs oscillation (the swing) */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 260 120 A 30 30 0 1 1 259.9 120"
        stroke={INK}
        sw={2}
        dur={0.5}
        fill="none"
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.9)}
        d="M 260 150 L 260 132 M 260 150 L 274 138"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={260} cy={150} r={2} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={260} y={207} size={13} fill={INK} script>
          {t("periodic", "periodic")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={540} y={228} size={12} fill={INK} script>
          {t("oscillation", "oscillation")}
        </T>
      </Fade>

      {/* beat 2 — the line abstraction: track, extremes, mean, particle */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 210 310 L 870 310" stroke={INK} sw={2.2} dur={0.7} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.1)}
        d="M 280 298 V 322 M 800 298 V 322"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Path d="M 540 298 V 322" stroke={GREEN} strokeWidth={2} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={280} y={344} size={14} fill={INK}>
          -A
        </T>
        <T x={540} y={344} size={14} fill={GREEN}>
          O
        </T>
        <T x={800} y={344} size={14} fill={INK}>
          +A
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Circle cx={650} cy={310} r={9} fill={AMBER_DARK} stroke={INK} strokeWidth={1.4} />
      </Fade>

      {/* beat 3 — F = -kx, stamped */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={470} y={372} w={140} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={22} script={false}>
          F = −k x
        </Chip>
      </Fade>

      {/* beat 4 — the minus sign is the soul of SHM: force always toward O */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.4)}
        d="M 633 310 L 560 310 M 568 303 L 560 310 L 568 317"
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={650} y={401} size={30} fill={RED} weight={800}>
          −
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.5)}
        d={ringD(650, 394, 22, 28)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />

      {/* beat 5 — fastest at the mean, frozen at the extremes */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={282} size={12} fill={GREEN} script>
          {t("fastest here", "sabse fast yahan")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d="M 540 290 V 296" stroke={GREEN} sw={1.6} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={800} y={282} size={12} fill={RED} script>
          {t("frozen here", "yahan frozen")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d="M 800 290 V 296" stroke={RED} sw={1.6} dur={0.3} />

      {/* beat 6 — the physical proof: speed lines at O, a pause at +A */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.4)}
        d="M 505 302 L 519 306 M 505 310 L 519 314 M 505 318 L 519 322"
        stroke={GREEN}
        sw={1.8}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.1)}
        d="M 794 300 V 320 M 806 300 V 320"
        stroke={RED}
        sw={3}
        dur={0.4}
      />

      {/* beat 7 — the one sentence to remember */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.4)}
          d="M 300 494 h 480 q 14 0 14 14 v 56 q 0 14 -14 14 h -480 q -14 0 -14 -14 v -56 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.2}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={540} y={528} size={16} fill={INK} weight={800}>
          {t("speed MAX ⟺ force ZERO (at O)", "speed MAX ⟺ force ZERO (O par)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={540} y={560} size={16} fill={INK} weight={800}>
          {t("speed ZERO ⟺ force MAX (at ±A)", "speed ZERO ⟺ force MAX (±A par)")}
        </T>
      </Fade>
    </Scene>
  );
}
