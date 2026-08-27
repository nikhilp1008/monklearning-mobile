/**
 * Ch02 · Section 54 — "Example 2 [NEET speed trap]: two cars approaching head-on"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.3, 34.8, 52.3, 75, 76, 94, 118.9]):
 *  0 title + problem + facing arrows
 *  1 options row A–D
 *  2 red trap: 'relative means subtract' → 18 + arrow at A
 *  3 amber precision line: signed velocities, not speeds
 *  4 work card: +54, −36 → 90
 *  5 green ring on B + physical check
 *  6 red note: option D — right answer, wrong units (amber ring)
 *  7 green cue: decide from directions
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  arrows y120: (180→300) / (560→440) · labels bl 104 cx240 / cx500
 *  chips y165..201: A x120 · B x340 · C x560 · D x780 (w 180)
 *  b2 | bar x66 y230..280 · l1 st x84 bl 250 · arrow (260,225)→(235,206)
 *  b3 | line st x84 bl 306
 *  b4 | card x120..640 y330..400 (bl 358 / 386)
 *  b5 | ring c(430,183) rx100 ry22 · lines st x680 bl 358 / 384
 *  b6 | bar x66 y430..492 · lines st x84 bl 450 / 476 · ring c(870,183) amber
 *  b7 | bar x56 y516..580 · lines st x72 bl 536 / 562
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
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const opts = ["A · 18 km/h", "B · 90 km/h", "C · 45 km/h", "D · 25 m/s"];

  return (
    <Scene>
      {/* beat 0 — the pattern-matching trap */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 2 [NEET] — two cars approaching head-on",
            "Example 2 [NEET] — do gaadiyan aamne-saamne"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "head-on: A at 54 km/h, B at 36 km/h — the magnitude of v_AB is?",
            "aamne-saamne: A 54 km/h, B 36 km/h — |v_AB| kitna?"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 10)}
        d={arrowD(180, 120, 300, 120)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 11)}
        d={arrowD(560, 120, 440, 120)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 0} delay={dl(0, 12)}>
        <T x={240} y={104} size={12} fill={INK} weight={700}>
          54
        </T>
        <T x={500} y={104} size={12} fill={INK} weight={700}>
          36
        </T>
      </Fade>

      {/* beat 1 — the options */}
      {opts.map((o, i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 0.8 + i * 1.4)}>
          <Chip
            x={120 + i * 220}
            y={165}
            w={180}
            h={36}
            fill={CREAM}
            stroke={INK}
            textFill={INK}
            size={13}
            script={false}
          >
            {o}
          </Chip>
        </Fade>
      ))}

      {/* beat 2 — four seconds, and wrong */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 66 230 v 50" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={250} size={13} fill={RED} script anchor="start">
          {t(
            "the trap: 'relative means subtract' → 54 − 36 = 18 — done in 4 seconds, and wrong",
            "trap: 'relative yaani ghatao' → 54 − 36 = 18 — 4 second mein khatam, aur galat"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d={arrowD(260, 225, 235, 206)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />

      {/* beat 3 — the gap the trap lives in */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={84} y={306} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the definition subtracts SIGNED velocities — not speeds. signs come FIRST.",
            "definition SIGNED velocities ghataati hai — speeds nahi. sign PEHLE aate hain."
          )}
        </T>
      </Fade>

      {/* beat 4 — do it properly */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 132 330 h 496 q 12 0 12 12 v 46 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={380} y={358} size={14} fill={INK} weight={700}>
          {t("v_A = +54 · v_B = −36 (towards A)", "v_A = +54 · v_B = −36 (A ki taraf)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={380} y={386} size={14} fill={INK} weight={700}>
          v_AB = 54 − (−36) = 90 km/h
        </T>
      </Fade>

      {/* beat 5 — B, confirmed physically */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d={ringD(430, 183, 100, 22)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={680} y={358} size={12} fill={GREEN} script anchor="start">
          {t(
            "approaching at the SUM — both eat the same gap",
            "JOD se paas aate hain — dono wahi gap khaate hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={680} y={384} size={12} fill={GREEN} script anchor="start">
          {t(
            "18 would mean they barely close — obviously wrong",
            "18 ka matlab hota mushkil se paas aana — saaf galat"
          )}
        </T>
      </Fade>

      {/* beat 6 — the nastier trap */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={ringD(870, 183, 100, 22)}
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />
      <Draw on={beat >= 6} delay={dl(6, 2)} d="M 66 430 v 62" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={84} y={450} size={13} fill={RED} script anchor="start">
          {t(
            "option D is nastier: 25 m/s IS 90 km/h — the right answer in the wrong units",
            "option D zyada khatarnaak: 25 m/s HI 90 km/h hai — sahi jawaab, galat units mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={84} y={476} size={13} fill={RED} script anchor="start">
          {t(
            "check the units before you celebrate — that option is there on purpose",
            "jashn se pehle units dekho — woh option jaan-boojh kar rakha hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the cue */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 516 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={536} size={13} fill={GREEN} script anchor="start">
          {t(
            "cue: 'towards each other' → add · 'same direction' → subtract",
            "cue: 'ek doosre ki taraf' → jodo · 'ek disha' → ghatao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={72} y={562} size={13} fill={GREEN} script anchor="start">
          {t(
            "decide from the DIRECTIONS, which are physical — never from the word 'relative'",
            "faisla DISHAON se karo, jo asli hain — 'relative' shabd se kabhi nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
