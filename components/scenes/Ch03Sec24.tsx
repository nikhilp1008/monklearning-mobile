/**
 * Ch03 · Section 24 — "NEET speed trap: torque on a spanner"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 44.2, 62.6, 87.5, 103.3, 108.5, 126.4, 144.1]):
 *  0 heading + problem + options
 *  1 ring on (B): 0.87 = the cos answer, precomputed
 *  2 red: the habit reaches for cos
 *  3 spanner diagram: split F, only across turns
 *  4 compute τ = rF sin30
 *  5 ANSWER (A) 0.5 N·m
 *  6 B is your own mistake, waiting
 *  7 cue: turning family → sin
 *  8 along family → cos
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | chips w120 h34 y100: x290/430/570/710
 *  b1 | ring c(490,117) rx70 ry28 · note st x84 bl 180 s12
 *  b2 | bar M66 200 v44 · lines st x84 bl 218 / 242 s12
 *  b3 | bolt (160,360) r14 · handle M174 360 H430 · F (430,360)→(533.9,300)
 *       lbl st (544,296) · arc r26 lbl st (496,346) · across (430,360)→(430,312)
 *       lbl end (420,330) s11 · along dash M430 360 H520 lbl cx475 bl 384 s11 ·
 *       caption cx300 bl 420 s11
 *  b4 | st x640 bl 300 s14
 *  b5 | box x640..960 y320..366 text cx800 bl 352 s17
 *  b6 | st x640 bl 402 / 426 s11
 *  b7 | bar M66 460 v74 · line st x84 bl 478 s12
 *  b8 | lines st x84 bl 502 / 526 s12
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("NEET SPEED TRAP — torque on a spanner", "NEET SPEED TRAP — spanner par torque")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "5 N at the end of a 0.2 m spanner, at 30° to the handle — the torque is?",
            "0.2 m spanner ke sire par 5 N, handle se 30° par — torque kitna?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 12)}>
        <Chip x={290} y={100} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (A) 0.5
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 13)}>
        <Chip x={430} y={100} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (B) 0.87
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 14)}>
        <Chip x={570} y={100} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (C) 1.0
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 15)}>
        <Chip x={710} y={100} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (D) 0
        </Chip>
      </Fade>

      {/* beat 1 — option B is engineered */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={ringD(490, 117, 70, 28)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={84} y={180} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "0.87 is not random — it is 5 × 0.2 × cos30°, computed FOR you, in advance",
            "0.87 koi ittefaq nahi — yeh 5 × 0.2 × cos30° hai, pehle se TUMHARE liye nikala hua"
          )}
        </T>
      </Fade>

      {/* beat 2 — the habit */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 200 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={84} y={218} size={12} fill={RED} script anchor="start">
          {t(
            "the trap: a week of work problems → the hand writes cos out of habit",
            "trap: hafte bhar ke work problems → haath aadat se cos likh deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={84} y={242} size={12} fill={RED} script anchor="start">
          {t(
            "but torque is a CROSS product — it takes sin",
            "lekin torque CROSS product hai — woh sin leta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the picture kills the trap */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Circle cx={160} cy={360} r={14} fill="none" stroke={INK} strokeWidth={2.4} />
        <Circle cx={160} cy={360} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 174 360 H 430" stroke={INK} sw={5} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d={arrowD(430, 360, 533.9, 300)} stroke={INK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={544} y={296} size={12} fill={INK} weight={700} anchor="start">F = 5 N</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4)} d="M 456 360 A 26 26 0 0 0 452.5 347" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={496} y={346} size={12} fill={AMBER_DARK} weight={700} anchor="start">30°</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5.6)} d="M 430 360 H 520" stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <T x={475} y={384} size={11} fill={MUTED} script>
          {t("F cos30° — no turning", "F cos30° — koi ghumav nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 7.2)} d={arrowD(430, 360, 430, 312)} stroke={GREEN} sw={2.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 7.9)}>
        <T x={420} y={330} size={11} fill={GREEN} script anchor="end">
          {t("F sin30° — this turns it", "F sin30° — yahi ghumata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={300} y={420} size={11} fill={GREEN} script>
          {t(
            "the geometry says SINE before you write a symbol",
            "geometry khud SINE bol deti hai, likhne se pehle"
          )}
        </T>
      </Fade>

      {/* beat 4 — compute honestly */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={640} y={300} size={14} fill={INK} weight={700} anchor="start">
          τ = r F sinθ = 0.2 × 5 × ½
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 652 320 h 296 q 12 0 12 12 v 22 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={800} y={352} size={17} fill={INK} weight={800}>
          (A) 0.5 N·m
        </T>
      </Fade>

      {/* beat 6 — B was waiting */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={640} y={402} size={11} fill={RED} script anchor="start">
          {t(
            "(B) is your own mistake, precomputed and waiting",
            "(B) tumhari hi galti hai, pehle se nikali hui, intezar mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={640} y={426} size={11} fill={RED} script anchor="start">
          {t(
            "two options in a sin:cos ratio → the test is WHICH product, not arithmetic",
            "do options sin:cos ratio mein → test yeh hai ki KAUNSA product, arithmetic nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the turning family */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 460 v 74" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={478} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "TURNING family → CROSS → sin: torque, area, angular momentum, qv×B",
            "TURNING family → CROSS → sin: torque, area, angular momentum, qv×B"
          )}
        </T>
      </Fade>

      {/* beat 8 — the along family */}
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={84} y={502} size={12} fill={GREEN} script anchor="start">
          {t(
            "ALONG family → DOT → cos: work, power, flux",
            "ALONG family → DOT → cos: work, power, flux"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={526} size={12} fill={INK} script anchor="start">
          {t(
            "pick the family BEFORE the trig — and this whole trap category stops working",
            "trig se PEHLE family chuno — aur trap ki poori category bekar ho jaati hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
