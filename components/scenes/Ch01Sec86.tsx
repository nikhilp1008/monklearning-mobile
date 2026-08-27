/**
 * Ch01 · Section 86 — "Example 1 [CBSE]: the diameter of the Moon"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.4, 27.5, 41.3, 62.6, 72.5, 85.9, 100.8]):
 *  0 title + observer-Moon diagram with α and D
 *  1 given chips + "enough to measure a world"
 *  2 step 1: radians first (57× warning)
 *  3 α = 8.73 × 10⁻³ rad
 *  4 d = αD
 *  5 the multiplication → 3.35 × 10⁶ m
 *  6 ≈ 3350 km vs accepted 3475 — within 4% (green box)
 *  7 the emotional point
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  diagram | observer (140,170) · Moon c(880,150) r36 · sight lines · α arc · D dashed
 *  b1 | chips y240..274 x140/x350 · muted mid bl 300
 *  b2 | amber st x100 bl 340 · red st x640 bl 340
 *  b3 | 17 st x100 bl 380 · muted 12 st x600 bl 380
 *  b4 | 17 st x100 bl 420
 *  b5 | 17 st x100 bl 460
 *  b6 | box x100..680 y480..522 (16 bl 508)
 *  b7 | green 14 mid bl 560
 */

import React from "react";
import { Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec86({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + diagram */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={24} fill={INK} script>
          {t("CBSE — the diameter of the Moon", "CBSE — chaand ka vyaas")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 132 170 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 5.5)}
        d="M 844 150 A 36 36 0 1 1 916 150 A 36 36 0 1 1 844 150 M 862 138 a 5 5 0 1 0 10 0 M 884 160 a 4 4 0 1 0 8 0"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={1}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 8)}
        d="M 150 168 L 848 116 M 150 172 L 848 184"
        stroke={AMBER_DARK}
        sw={1.4}
        dur={1.2}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 10)}
        d="M 218 162 a 30 30 0 0 1 0 16"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 0} delay={dl(0, 10.8)}>
        <T x={246} y={176} size={14} fill={AMBER_DARK} weight={700} anchor="start">α</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 13)}>
        <Line x1={158} y1={170} x2={836} y2={150} stroke={MUTED} strokeWidth={1.1} strokeDasharray="7 6" />
        <T x={500} y={144} size={13} fill={MUTED} weight={600}>D</T>
      </Fade>

      {/* beat 1 — the givens */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={140} y={240} w={180} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          α ≈ 0.5°
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Chip x={350} y={240} w={260} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          D = 3.84 × 10⁸ m
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={540} y={300} size={13} fill={MUTED} script>
          {t(
            "an angle and a distance — enough to measure a world",
            "ek kon aur ek doori — ek poori duniya naapne ko kaafi"
          )}
        </T>
      </Fade>

      {/* beat 2 — radians first */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={100} y={340} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "step 1 — convert to RADIANS first, before anything else can go wrong",
            "step 1 — pehle RADIANS mein badlo, kuchh aur galat hone se pehle"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={700} y={340} size={12} fill={RED} script anchor="start">
          {t("degrees in ⇒ off by 57×", "degree khilao ⇒ 57× bahar")}
        </T>
      </Fade>

      {/* beat 3 — the conversion */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={100} y={380} size={17} fill={INK} weight={700} anchor="start">
          α = 0.5 × π ⁄ 180 = 8.73 × 10⁻³ rad
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={600} y={380} size={12} fill={MUTED} script anchor="start">
          {t(
            "half a degree really is small — as the method requires",
            "aadha degree sach mein chhota hai — jaisa vidhi maangti hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the relation */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={100} y={420} size={17} fill={INK} weight={700} anchor="start">
          {t("step 2 — d = α D  (the arc at that distance)", "step 2 — d = α D  (us doori par ka chaap)")}
        </T>
      </Fade>

      {/* beat 5 — the multiplication */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={100} y={460} size={17} fill={INK} weight={700} anchor="start">
          d = 8.73 × 10⁻³ × 3.84 × 10⁸ = 3.35 × 10⁶ m
        </T>
      </Fade>

      {/* beat 6 — the verdict */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 112 480 h 556 q 12 0 12 12 v 20 q 0 12 -12 12 h -556 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={390} y={508} size={16} fill={GREEN} weight={700}>
          {t(
            "≈ 3350 km — accepted 3475 km → within ~4%",
            "≈ 3350 km — sweekrit 3475 km → ~4% ke andar"
          )}
        </T>
      </Fade>

      {/* beat 7 — the emotional point */}
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={560} size={14} fill={GREEN} script>
          {t(
            "nobody laid a tape across the Moon — an angle from your terrace sized an entire world",
            "kisi ne chaand par tape nahi rakhi — tumhari chhat ka ek kon poori duniya naap gaya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={540} y={588} size={13} fill={AMBER_DARK} script>
          {t(
            "that is what indirect measurement buys you",
            "yahi indirect measurement tumhe khareed kar deta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
