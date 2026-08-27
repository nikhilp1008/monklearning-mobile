/**
 * Ch01 · Section 71 — "Example 1 [CBSE]: the length of a rod"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 35.9, 45.5, 63.9, 75.8, 90.5, 97.4]):
 *  0 title + given-data chips
 *  1 ring the "no zero error" chip — correction term is zero
 *  2 step 1 header (LC always first)
 *  3 LC = 1/10 mm = 0.01 cm + convert note
 *  4 formula without correction
 *  5 substitute: 1.2 + 6 × 0.01 — number becomes length
 *  6 L = 1.26 cm green box
 *  7 underline the earned digit + closing lines
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | chips y80..112: x120(w180)/x320(w200)/x540(w180)/x740(w180) · row2 y124..156: x120(w170)
 *  b1 | ring c(205,140) rx95 ry26 · note st x330 bl 148
 *  b2 | header st x80 bl 200
 *  b3 | 18 st x120 bl 240 · amber 13 st x120 bl 270
 *  b4 | 18 st x120 bl 320 · muted 13 st x480 bl 320
 *  b5 | 18 st x120 bl 368 · amber 13 st x400 bl 368
 *  b6 | box x104..400 y396..446 · green 26 st x120 bl 430
 *  b7 | underline y444 x~200 · script mid bl 490/518
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
  ringD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec71({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the givens */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("CBSE — the length of a rod", "CBSE — chhad ki lambai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <Chip x={120} y={80} w={180} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          1 MSD = 1 mm
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <Chip x={320} y={80} w={200} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          10 VSD = 9 MSD
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 12)}>
        <Chip x={540} y={80} w={180} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          MSR = 1.2 cm
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 15)}>
        <Chip x={740} y={80} w={180} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("6th coincides", "chhathi milti hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 19)}>
        <Chip x={120} y={124} w={170} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("no zero error", "zero error nahi")}
        </Chip>
      </Fade>

      {/* beat 1 — the free condition */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d={ringD(205, 140, 100, 25)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={330} y={148} size={13} fill={GREEN} script anchor="start">
          {t(
            "stated explicitly ⇒ correction term = 0 — do not invent one",
            "saaf likha hai ⇒ correction term = 0 — koi gadho mat"
          )}
        </T>
      </Fade>

      {/* beat 2 — step 1 */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={80} y={200} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "step 1 — the least count, always first (n = 10)",
            "step 1 — least count, hamesha pehle (n = 10)"
          )}
        </T>
      </Fade>

      {/* beat 3 — LC */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={120} y={240} size={18} fill={INK} weight={700} anchor="start">
          LC = 1 MSD ⁄ n = 1 mm ⁄ 10 = 0.1 mm = 0.01 cm
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={120} y={270} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "convert now — the main-scale reading arrives in centimetres",
            "abhi badlo — main-scale reading centimetre mein aayegi"
          )}
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={120} y={320} size={18} fill={INK} weight={700} anchor="start">
          L = MSR + (VSR × LC)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={480} y={320} size={13} fill={MUTED} script anchor="start">
          {t("no zero error → no correction term", "zero error nahi → correction term nahi")}
        </T>
      </Fade>

      {/* beat 5 — substitute */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={120} y={368} size={18} fill={INK} weight={700} anchor="start">
          = 1.2 + 6 × 0.01
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={400} y={368} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "6 × LC = 0.06 cm — the line number becomes a length",
            "6 × LC = 0.06 cm — line number lambai ban jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 116 396 h 264 q 12 0 12 12 v 26 q 0 12 -12 12 h -264 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={140} y={432} size={26} fill={GREEN} weight={700} anchor="start">L = 1.26 cm</T>
      </Fade>

      {/* beat 7 — the earned digit */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 213 442 C 218 439, 224 444, 229 440"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={490} size={14} fill={INK} script>
          {t(
            "the main scale could honestly offer only 1.2 — the vernier READ the second decimal off a line number",
            "main scale imaandaari se sirf 1.2 de sakta tha — vernier ne doosri decimal ek line number se PADHI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={540} y={518} size={14} fill={GREEN} script>
          {t(
            "that extra digit is real — and you earned it",
            "wo extra digit asli hai — aur tumne use kamaya hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
