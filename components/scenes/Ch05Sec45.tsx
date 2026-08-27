/**
 * Ch05 · Section 45 — "Motion under constant power"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.9, 33.3, 58.1, 82.9, 97.3, 118.8, 143.6] · dur 155.6;
 *        hi [0, 20.9, 34.2, 59.1, 83.9, 94.7, 115.3, 140.1] · dur 151.0):
 *  0 title + subtitle
 *  1 red reflex warning
 *  2 setup chip + axes
 *  3 step 1: K = P t
 *  4 step 2: √t curve + dashed const-force line
 *  5 boxed v result chip
 *  6 step 3: x ∝ t^(3/2)
 *  7 note band: the two scalings
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80 · b1 red cx540 bl112
 *  b2 | chip x80..480 y130..166 · axes: y (140,430)→(140,230), x (130,420)→(480,420)
 *     | "v" end x128 bl225 · "t" st x492 bl425
 *  b3 | lbl st x560 bl140 · lines bl170 / bl198 · muted cx760 bl226
 *  b4 | curve M140,420 C.. 470,255 · lbl cx300 bl240 (green)
 *     | dash (140,420)→(420,300) · lbl st x432 bl295 (muted 11)
 *     | line st x560 bl262
 *  b5 | chip x560..900 y285..325
 *  b6 | lbl bl362 · line bl392 · muted cx760 bl420
 *  b7 | bar x66 y470..560 · lines st x84 bl490 / bl516
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Motion Under Constant Power", "Constant Power ke Under Motion")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t("the JEE Advanced favourite of this subtopic", "is subtopic ka JEE Advanced favourite")}
        </T>
      </Fade>

      {/* beat 1 — the reflex warning */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={112} size={13} fill={RED} script>
          {t(
            "the reflex v = a t ✗ — acceleration is NOT constant under constant power",
            "reflex v = a t ✗ — constant power ke under acceleration constant NAHI hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — setup + axes */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={80} y={130} w={400} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13.5} script={false}>
          {t("m, from rest, driven at constant P", "m, aaram se, constant P se chalaya hua")}
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5)} d={arrowD(140, 430, 140, 230)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 5.4)} d={arrowD(130, 420, 480, 420)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <T x={128} y={225} size={14} fill={INK} anchor="end" weight={700}>
          v
        </T>
        <T x={492} y={425} size={14} fill={INK} anchor="start" weight={700}>
          t
        </T>
      </Fade>

      {/* beat 3 — step 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={560} y={140} size={13} fill={AMBER_DARK} script anchor="start">
          step 1
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={560} y={170} size={14} fill={INK} anchor="start" weight={700}>
          {t("P = dK⁄dt · with P constant:", "P = dK⁄dt · P constant hai to:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={560} y={198} size={15} fill={INK} anchor="start" weight={800}>
          K = P t
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={760} y={226} size={12.5} fill={MUTED} script>
          {t(
            "energy piles up linearly with waiting time",
            "energy intezar ke saath linearly jama hoti hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — step 2, the curve */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 140 420 C 170 330, 200 305, 260 290 C 340 272, 410 262, 470 255"
        stroke={GREEN}
        sw={2.8}
        dur={1.2}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={300} y={240} size={12.5} fill={GREEN} script>
          {t("constant P: v ∝ √t", "constant P: v ∝ √t")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5)}
        d="M 140 420 l 20 -8 m 10 -5 l 20 -8 m 10 -5 l 20 -8 m 10 -5 l 20 -8 m 10 -5 l 20 -8 m 10 -5 l 20 -8 m 10 -5 l 20 -8 m 10 -5 l 20 -8"
        stroke={MUTED}
        sw={1.8}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.5)}>
        <T x={432} y={295} size={11} fill={MUTED} script anchor="start">
          {t("v ∝ t (const force)", "v ∝ t (const force)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={560} y={262} size={14} fill={INK} anchor="start" weight={700}>
          ½ m v² = P t → v = √(2Pt⁄m)
        </T>
      </Fade>

      {/* beat 5 — the boxed result */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={560} y={285} w={340} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          v = √(2Pt⁄m) ∝ √t
        </Chip>
      </Fade>

      {/* beat 6 — step 3 */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={560} y={362} size={13} fill={AMBER_DARK} script anchor="start">
          {t("step 3 — integrate the speed", "step 3 — speed ko integrate karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={560} y={392} size={15} fill={INK} anchor="start" weight={800}>
          x = ⅔ √(2P⁄m) · t^(3/2)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={760} y={420} size={12.5} fill={MUTED} script>
          {t(
            "distance climbs even faster — t to the 3/2",
            "doori aur bhi tez chadhti hai — t to the 3/2"
          )}
        </T>
      </Fade>

      {/* beat 7 — the two scalings */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 470 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={490} size={13} fill={GREEN} script anchor="start">
          {t(
            "memorise the pair: v ∝ √t · x ∝ t^(3/2)",
            "jodi yaad karo: v ∝ √t · x ∝ t^(3/2)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={516} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a whole family answered on sight — while others re-derive from scratch",
            "poora parivar dekhte hi hal — jab baaqi shuru se re-derive kar rahe hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
