/**
 * Ch14 · Section 35 — "Worked example: car, wall, and echo"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 23.21, 36.81, 42.41, 50.81, 62.82, 74.02, 90.02]):
 *  0 hook badge + question: echo f? beat f?
 *  1 the figure: car→wall (u=20), wall reflects echo back
 *  2 strategy: 2 Doppler steps, then read the beats
 *  3 STEP 1: wall=observer, car=source@20
 *  4 f1 = 320×340/320 = 340 Hz
 *  5 STEP 2: wall=source(340Hz), driver=observer@20
 *  6 f_echo = 340×360/340 = 360 Hz
 *  7 beats: 360−320 = 40 Hz; driver hears direct + echo
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..350  y100..132
 *  b0 | question chip (h34)           | Chip  | x370..1020 y100..134
 *  b1 | car body+wheels               | Draw  | x150..230 y155..180
 *  b1 | wall                          | Draw  | x420 y130..220
 *  b1 | arrow car→wall + "u=20"       | Draw+T| x235..400 y160
 *  b1 | arrow wall→car(echo)          | Draw+T| x400..235 y195
 *  b2 | strategy (12.5,muted)         | T mid | x540 bl240            y228..242
 *  b3 | STEP1 header (14,amber-d)     | T st  | x60 bl290             y278..293
 *  b4 | STEP1 chip (h38)              | Chip  | x60..360  y310..348
 *  b5 | STEP2 header (14,amber-d)     | T st  | x60 bl380             y368..383
 *  b6 | STEP2 chip (h38)              | Chip  | x60..380  y400..438
 *  b7 | beats chip (h50,s18)          | Chip  | x300..780 y470..520
 *  b7 | final note (12)               | T mid | x540 bl555            y543..556
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("worked example: car, wall, and echo", "worked example: car, wall, aur echo")}
        </T>
      </Fade>

      {/* beat 0 — hook + question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={260} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ JEE Advanced showpiece!", "★ JEE Advanced showpiece!")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={370} y={100} w={650} h={34} fill="#fff" stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "car→wall: f=320Hz, u=20m/s, v=340m/s → echo f? beat f?",
            "car→wall: f=320Hz, u=20m/s, v=340m/s → echo f? beat f?"
          )}
        </Chip>
      </Fade>

      {/* beat 1 — the picture */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 155 h 80 v 20 h -80 z" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 165 175 A 5 5 0 1 1 175 175 A 5 5 0 1 1 165 175 M 205 175 A 5 5 0 1 1 215 175 A 5 5 0 1 1 205 175" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M 420 130 L 420 220" stroke={INK} sw={4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={arrowD(235, 160, 400, 160)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={315} y={150} size={12} fill={AMBER_DARK}>
          u=20
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(400, 195, 235, 195)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={315} y={212} size={12} fill={GREEN}>
          {t("echo", "echo")}
        </T>
      </Fade>

      {/* beat 2 — the strategy */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={240} size={12.5} fill={MUTED} script>
          {t("2 Doppler steps, then read the beats", "2 Doppler steps, phir beats padho")}
        </T>
      </Fade>

      {/* beat 3 — Step 1 setup */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={290} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          {t("STEP 1: wall=observer, car=source@20", "STEP 1: wall=observer, car=source@20")}
        </T>
      </Fade>

      {/* beat 4 — Step 1 compute */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={60} y={310} w={300} h={38} fill={GREEN} textFill="#fff" size={16} script={false}>
          f1 = 320×340/320 = 340 Hz
        </Chip>
      </Fade>

      {/* beat 5 — Step 2 setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={380} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          {t("STEP 2: wall=source(340Hz), driver=observer@20", "STEP 2: wall=source(340Hz), driver=observer@20")}
        </T>
      </Fade>

      {/* beat 6 — Step 2 compute (the echo) */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={60} y={400} w={320} h={38} fill={GREEN} textFill="#fff" size={16} script={false}>
          f_echo = 340×360/340 = 360 Hz
        </Chip>
      </Fade>

      {/* beat 7 — the beats */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={300} y={470} w={480} h={50} fill={GREEN} textFill="#fff" size={18} script={false}>
          beat = 360−320 = 40 Hz
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={555} size={12} fill={INK} script>
          {t(
            "driver hears BOTH: direct (320Hz) + echo (360Hz)",
            "driver dono sunta: direct (320Hz) + echo (360Hz)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
