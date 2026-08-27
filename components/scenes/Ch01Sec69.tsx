/**
 * Ch01 · Section 69 — "Reasoning out the vernier least count"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12, 27.2, 37.8, 61.3, 72, 96.9, 121.7]):
 *  0 title
 *  1 the arrangement: n VSD span (n−1) MSD
 *  2 board skeleton: condition / algebra / formula rail
 *  3 condition + divide by n
 *  4 the definition of the gap
 *  5 the collapse → boxed LC = MSD/n
 *  6 why it's the smallest registrable step
 *  7 consequence: bigger n ⇒ finer instrument
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | script 14 mid bl 96 · muted 13 bl 124
 *  b2 | rail M46 150 v 260 · tags st x56 bl 175/275/375 (12 muted)
 *  b3 | 18 cx560 bl 180 · 18 bl 220 · amber 13 bl 250
 *  b4 | 17 cx560 bl 292
 *  b5 | 18 cx560 bl 340 · box x380..740 y360..404 (22 bl 388) · green script bl 430
 *  b6 | arrows + script 13 st x150 bl 470/496
 *  b7 | green 14 mid bl 545
 */

import React from "react";
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
  AMBER,
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "reasoning out the vernier least count",
            "vernier least count ko tark se nikaalna"
          )}
        </T>
      </Fade>

      {/* beat 1 — the arrangement */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={96} size={14} fill={INK} script>
          {t(
            "suppose n vernier divisions exactly span (n − 1) main divisions",
            "maan lo n vernier divisions theek (n − 1) main divisions mein failti hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={540} y={124} size={13} fill={MUTED} script>
          {t("10 across 9 mm · 20 across 19", "10 nau mm mein · 20 unnees mein")}
        </T>
      </Fade>

      {/* beat 2 — the rail */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 46 150 v 280 M 46 150 h 8 M 46 270 h 8 M 46 356 h 8" stroke={MUTED} sw={1.6} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={60} y={175} size={12} fill={MUTED} script anchor="start">{t("condition", "shart")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={60} y={290} size={12} fill={MUTED} script anchor="start">algebra</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={60} y={392} size={12} fill={MUTED} script anchor="start">formula</T>
      </Fade>

      {/* beat 3 — the condition, divided */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={560} y={180} size={18} fill={INK} weight={700}>n × VSD = (n − 1) × MSD</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={560} y={220} size={18} fill={INK} weight={700}>÷ n  ⇒  1 VSD = ((n − 1)/n) × MSD</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 18)}>
        <T x={560} y={250} size={13} fill={AMBER_DARK} script>
          {t(
            "each vernier division is SLIGHTLY less than a main one",
            "har vernier division kisi main se ZARA kam hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the definition */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={560} y={292} size={17} fill={INK} weight={600}>
          {t(
            "LC = 1 MSD − 1 VSD — the gap between them",
            "LC = 1 MSD − 1 VSD — dono ke beech ki khaai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the collapse */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={560} y={340} size={18} fill={INK} weight={700}>
          LC = MSD × (1 − (n−1)/n) = MSD × 1/n
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 12)}
        d="M 392 360 h 336 q 12 0 12 12 v 20 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 13.5)}>
        <T x={560} y={390} size={22} fill={GREEN} weight={700}>LC = MSD ⁄ n</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 18)}>
        <T x={560} y={430} size={13} fill={GREEN} script>
          {t("derived — not memorised", "nikaala hua — rata nahi")}
        </T>
      </Fade>

      {/* beat 6 — why it's the finest step */}
      <Draw on={beat >= 6} delay={dl(6, 1)} d={arrowD(96, 464, 134, 464)} stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={150} y={470} size={13} fill={INK} script anchor="start">
          {t(
            "slide LESS than the gap — the same line still coincides: the instrument hasn't noticed",
            "khaai se KAM sarkao — wahi line ab bhi milti hai: instrument ne notice hi nahi kiya"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 12)} d={arrowD(96, 490, 134, 490)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={150} y={496} size={13} fill={INK} script anchor="start">
          {t(
            "slide EXACTLY the gap — the next line takes over: the finest step it can register",
            "THEEK utni khaai sarkao — agli line sambhaal leti: sabse baareek darj hone waala kadam"
          )}
        </T>
      </Fade>

      {/* beat 7 — the free consequence */}
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={545} size={14} fill={GREEN} script>
          {t(
            "bigger n ⇒ smaller LC ⇒ finer instrument — read straight off the formula",
            "bada n ⇒ chhota LC ⇒ baareek instrument — seedha formula se padho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
