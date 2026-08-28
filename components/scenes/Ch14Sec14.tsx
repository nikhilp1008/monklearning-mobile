/**
 * Ch14 · Section 14 — "Worked example: two tuning forks"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.67, 12.69, 18.3, 24.79, 30.7, 33.94, 40.73]):
 *  0 hook badge: clean warm-up before the traps
 *  1 the picture: two forks (512 Hz, 516 Hz), find f_beat and T_beat
 *  2 f_beat = |516 − 512|
 *  3 f_beat = 4 Hz → 4 swells/sec
 *  4 T_beat = 1/f_beat
 *  5 T_beat = 1/4 = 0.25 s
 *  6 relationship: bigger gap → faster throbs
 *  7 verdict: 4 beats/sec, 0.25 s apart
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..370  y100..132
 *  b0 | underline                     | Draw  | x100..350 y138
 *  b1 | fork 1 (prongs+base+handle)   | Draw  | x210..230 y130..202
 *  b1 | "512 Hz" (13)                 | T mid | x220 bl222            y210..223
 *  b1 | fork 2                        | Draw  | x370..390 y130..202
 *  b1 | "516 Hz" (13)                 | T mid | x380 bl222            y210..223
 *  b1 | question chip (h34)           | Chip  | x460..800 y145..179
 *  b2 | "f_beat=|516-512|" (16)       | T st  | x60 bl300             y288..305
 *  b3 | answer chip (h38)             | Chip  | x60..240  y320..358
 *  b3 | "= 4 swells/sec!" (12)        | T st  | x60 bl378             y368..382
 *  b4 | "T_beat=1/f_beat" (16)        | T st  | x560 bl300            y288..305
 *  b5 | answer chip (h38)             | Chip  | x560..780 y320..358
 *  b6 | relationship (13,muted)       | T mid | x540 bl420            y407..421
 *  b7 | "4 beats/sec" chip (h44)      | Chip  | x330..510 y500..544
 *  b7 | "0.25 s apart" chip (h44)     | Chip  | x570..750 y500..544
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("worked example: two tuning forks", "worked example: do tuning forks")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={280} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ clean warm-up before the traps", "★ traps se pehle ek saaf warm-up")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 100 138 L 350 138" stroke={AMBER_DARK} sw={1.8} dur={0.3} />

      {/* beat 1 — the picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 210 130 L 210 172 M 230 130 L 230 172 M 210 172 Q 220 182 230 172 M 220 182 L 220 202"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={220} y={222} size={13} fill={INK}>
          512 Hz
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 370 130 L 370 172 M 390 130 L 390 172 M 370 172 Q 380 182 390 172 M 380 182 L 380 202"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={380} y={222} size={13} fill={INK}>
          516 Hz
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Chip x={460} y={145} w={340} h={34} fill="#fff" stroke={INK} textFill={INK} size={14} script={false}>
          {t("find: f_beat = ? , T_beat = ?", "find karo: f_beat = ? , T_beat = ?")}
        </Chip>
      </Fade>

      {/* beat 2 — f_beat computation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={300} size={16} fill={INK} anchor="start">
          f_beat = |516 − 512|
        </T>
      </Fade>

      {/* beat 3 — f_beat result */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={60} y={320} w={180} h={38} fill={GREEN} textFill="#fff" size={17} script={false}>
          f_beat = 4 Hz
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={60} y={378} size={12} fill={INK} anchor="start">
          {t("= 4 swells every second!", "= har second 4 swells!")}
        </T>
      </Fade>

      {/* beat 4 — T_beat setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={560} y={300} size={16} fill={INK} anchor="start">
          T_beat = 1/f_beat
        </T>
      </Fade>

      {/* beat 5 — T_beat result */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={560} y={320} w={220} h={38} fill={GREEN} textFill="#fff" size={17} script={false}>
          T_beat = 1/4 = 0.25 s
        </Chip>
      </Fade>

      {/* beat 6 — the relationship */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={420} size={13} fill={MUTED} script>
          {t("bigger gap → faster throbs (T_beat = 1/f_beat)", "bada gap → tez throbs (T_beat = 1/f_beat)")}
        </T>
      </Fade>

      {/* beat 7 — final verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={330} y={500} w={180} h={44} fill={GREEN} textFill="#fff" size={16} script={false}>
          4 beats/sec
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <Chip x={570} y={500} w={180} h={44} fill={GREEN} textFill="#fff" size={16} script={false}>
          0.25 s apart
        </Chip>
      </Fade>
    </Scene>
  );
}
