/**
 * Ch14 · Section 16 — "Worked example: interference of I and 4I"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.66, 17.07, 22.23, 25.83, 33.69, 37.73, 45.14]):
 *  0 hook badge + question: I_max/I_min ratio AND I at φ=π/2
 *  1 amplitude bars: A∝√I → amplitude ratio 1:2
 *  2 ingredients chip: I, 4I → amplitude ratio 1:2
 *  3 extremes setup: bright ADDS, dark SUBTRACTS amplitudes
 *  4 I_max=(√I+2√I)²=9I, I_min=(2√I−√I)²=I
 *  5 contrast ratio: I_max:I_min = 9:1
 *  6 part b: cos(π/2)=0 → I = 5I
 *  7 trap: forgot cos=0 here? common JEE trap
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..350  y100..132
 *  b0 | question chip (h34)           | Chip  | x400..900 y110..144
 *  b1 | bar 1 (√I, h50)                | Draw  | x250..290 y350..400
 *  b1 | "√I" (13)                      | T mid | x270 bl340            y327..341
 *  b1 | bar 2 (2√I, h100)              | Draw  | x350..390 y300..400
 *  b1 | "√4I = 2√I" (13)               | T mid | x370 bl290            y277..291
 *  b1 | caption (13,muted)            | T mid | x310 bl430            y417..431
 *  b2 | ingredients chip (h40)        | Chip  | x450..750 y340..380
 *  b3 | "bright: ADD..." (13)          | T st  | x450 bl410            y398..412
 *  b3 | "dark: SUBTRACT..." (13)       | T st  | x450 bl435            y423..437
 *  b4 | "I_max=..." (14)               | T st  | x60 bl460             y448..464
 *  b4 | "I_min=..." (14)               | T st  | x340 bl460            y448..464
 *  b5 | ratio chip (h50,s20)           | Chip  | x150..450 y505..555
 *  b6 | part-b chip (h50,s20)          | Chip  | x600..900 y505..555
 *  b7 | trap (13,red)                  | T mid | x540 bl578            y565..579
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("worked example: interference of I and 4I", "worked example: I aur 4I ka interference")}
        </T>
      </Fade>

      {/* beat 0 — hook + question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={260} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ JEE Main staple", "★ JEE Main staple")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={400} y={110} w={500} h={34} fill="#fff" stroke={INK} textFill={INK} size={13} script={false}>
          {t("find: I_max/I_min ratio AND I at φ=π/2", "find karo: I_max/I_min ratio AUR I at φ=π/2")}
        </Chip>
      </Fade>

      {/* beat 1 — amplitude bars */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 250 400 L 250 350 L 290 350 L 290 400" stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={270} y={340} size={13} fill={INK}>
          √I
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M 350 400 L 350 300 L 390 300 L 390 400" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={370} y={290} size={13} fill={INK}>
          √4I = 2√I
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={310} y={430} size={13} fill={MUTED} script>
          {t("amplitude ratio 1:2", "amplitude ratio 1:2")}
        </T>
      </Fade>

      {/* beat 2 — the ingredients */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={450} y={340} w={300} h={40} fill="#fff" stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("I, 4I → amplitude ratio 1:2", "I, 4I → amplitude ratio 1:2")}
        </Chip>
      </Fade>

      {/* beat 3 — extremes setup */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={450} y={410} size={13} fill={GREEN} anchor="start">
          {t("bright: ADD amplitudes", "bright: amplitudes ADD karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={450} y={435} size={13} fill={RED} anchor="start">
          {t("dark: SUBTRACT amplitudes", "dark: amplitudes SUBTRACT karo")}
        </T>
      </Fade>

      {/* beat 4 — compute the extremes */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={460} size={14} fill={INK} anchor="start">
          I_max = (√I+2√I)² = 9I
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={340} y={460} size={14} fill={INK} anchor="start">
          I_min = (2√I−√I)² = I
        </T>
      </Fade>

      {/* beat 5 — contrast ratio */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={150} y={505} w={300} h={50} fill={GREEN} textFill="#fff" size={20} script={false}>
          I_max : I_min = 9 : 1
        </Chip>
      </Fade>

      {/* beat 6 — part b */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={600} y={505} w={300} h={50} fill={GREEN} textFill="#fff" size={20} script={false}>
          φ=π/2 → I = 5I
        </Chip>
      </Fade>

      {/* beat 7 — the trap */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={578} size={13} fill={RED} script>
          {t("forgot cos=0 here? — common JEE trap!", "cos=0 bhool gaye? — common JEE trap!")}
        </T>
      </Fade>
    </Scene>
  );
}
