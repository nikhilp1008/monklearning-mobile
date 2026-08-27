/**
 * Ch02 · Section 18 — "The v-t graph: slope gives acceleration, area gives displacement"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.4, 31.1, 47.9, 67.3, 79.7, 104.5, 129.4]):
 *  0 title
 *  1 ladder icon + "same rule, one rung down" line
 *  2 chip: a = dv/dt = slope of v-t
 *  3 graph: axes + rising v(t) curve
 *  4 green chip: AREA under v-t = DISPLACEMENT
 *  5 the sliver: strip v × Δt + more slivers + two label lines
 *  6 card: Δx = ∫ v dt = net SIGNED area (+ underline on SIGNED)
 *  7 red note: x-t has no area reading
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | ladder x210..234 y70..96 · line cx540 bl 90
 *  b2 | chip x680..1020 y115..150
 *  b3 | axes o(140,470)→(620,470)/(140,170) · curve M170,430 → 590,250
 *  b4 | chip x680..1030 y180..216
 *  b5 | strip x378..402 y470→~332 · hatches · slivers x230..540 ·
 *       lines cx390 bl 500 / 526
 *  b6 | card x680..1030 y250..330 · formula bl 285 · underline y294 · sub bl 312
 *  b7 | bar x66 y545..593 · lines st x84 bl 562 / 588
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the richer graph */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the v-t graph — two readings, twice the marks",
            "v-t graph — do readings, dugne marks"
          )}
        </T>
      </Fade>

      {/* beat 1 — same rule, one rung down */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 210 70 v 26 M 234 70 v 26 M 210 78 h 24 M 210 92 h 24"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={560} y={90} size={13} fill={AMBER_DARK} script>
          {t(
            "x-t slope → velocity · v-t slope → acceleration — same rule, one rung down",
            "x-t slope → velocity · v-t slope → acceleration — wahi rule, ek paidan neeche"
          )}
        </T>
      </Fade>

      {/* beat 2 — nothing new */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={680} y={115} w={340} h={35} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("a = dv⁄dt = slope of v-t", "a = dv⁄dt = v-t ka slope")}
        </Chip>
      </Fade>

      {/* beat 3 — the picture */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d={arrowD(140, 470, 620, 470)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.8)}
        d={arrowD(140, 470, 140, 170)}
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={635} y={476} size={15} fill={INK} anchor="start" weight={700}>
          t
        </T>
        <T x={134} y={156} size={15} fill={INK} weight={700}>
          v
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d="M 170 430 C 300 380, 420 300, 590 250"
        stroke={INK}
        sw={2.8}
        dur={1.8}
      />

      {/* beat 4 — the money reading */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={680} y={180} w={350} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("AREA under v-t = DISPLACEMENT", "v-t ke neeche AREA = DISPLACEMENT")}
        </Chip>
      </Fade>

      {/* beat 5 — the sliver argument */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d="M 378 470 V 340 M 402 470 V 332 M 378 340 L 402 332 M 382 460 l 18 -6 M 382 440 l 18 -6 M 382 420 l 18 -6 M 382 400 l 18 -6 M 382 380 l 18 -6 M 382 360 l 18 -6"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={1.2}
      />
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={390} y={500} size={12} fill={AMBER_DARK} script>
          {t(
            "height v · width Δt → area = v·Δt",
            "oonchaai v · chaudaai Δt → area = v·Δt"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={390} y={526} size={12} fill={AMBER_DARK} script>
          {t(
            "= one tiny piece of displacement — now add them all",
            "= displacement ka ek nanha tukda — ab sab jodo"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 14)}
        d="M 230 470 V 409 M 280 470 V 391 M 330 470 V 369 M 440 470 V 305 M 490 470 V 288 M 540 470 V 270"
        stroke={MUTED}
        sw={1.4}
        dur={1.4}
      />

      {/* beat 6 — the integral */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 692 250 h 326 q 12 0 12 12 v 56 q 0 12 -12 12 h -326 q -12 0 -12 -12 v -56 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={855} y={285} size={16} fill={INK} weight={700}>
          Δx = ∫ v dt = net SIGNED area
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d="M 890 294 h 60"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={855} y={312} size={12} fill={MUTED} script>
          {t(
            "'signed' — that word matters, next section",
            "'signed' — yeh shabd zaroori hai, agla section"
          )}
        </T>
      </Fade>

      {/* beat 7 — no area on x-t */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 545 v 48" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={562} size={13} fill={RED} script anchor="start">
          {t(
            "the x-t graph has NO area reading — position × time means nothing",
            "x-t graph ki koi area reading NAHI — position × time ka koi matlab nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={588} size={13} fill={RED} script anchor="start">
          {t(
            "only v-t and a-t areas mean something",
            "sirf v-t aur a-t ke areas ka matlab hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
