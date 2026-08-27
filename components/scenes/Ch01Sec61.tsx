/**
 * Ch01 · Section 61 — "Reading beyond the smallest mark"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.8, 28.9, 42.1, 66.9, 81, 93, 112.5]):
 *  0 title · wire + coin — too fine for a ruler
 *  1 ruler segment, tip between marks — a guess, instrument has run out
 *  2 green: vernier & screw gauge read BEYOND the smallest mark
 *  3 the stack: metre scale ≈2 mm · vernier 2.3 mm · screw gauge 2.34 mm
 *  4 every extra decimal is EARNED
 *  5 amber strip: LEAST COUNT definition
 *  6 the LC ladder 1 → 0.1 → 0.01 mm
 *  7 verdict: LC = uncertainty of a single reading
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | wire lines y88/94 x120..280 (label bl 116) · coin c(430,98) r16 (label st x458 bl 103)
 *  b1 | ruler x600..1000 y80..114, ticks 40px · red tip x705 · label cx800 bl 140
 *  b2 | green script 15 mid bl 180
 *  b3 | rows: sketch x120..380 · name script 14 st x420 · reading st x760 · bl 250/320/390
 *  b4 | amber script 15 mid bl 430
 *  b5 | band x100..980 y450..492 · sans 16 bl 476
 *  b6 | sans 18 mid bl 520 · script 13 mid bl 544
 *  b7 | green script 13 mid bl 584
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
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

export default function Ch01Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const ticks: string[] = [];
  for (let x = 600; x <= 1000; x += 40) ticks.push(`M ${x} 80 v 12`);

  return (
    <Scene>
      {/* beat 0 — too fine for a ruler */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={54} size={24} fill={INK} script>
          {t("reading beyond the smallest mark", "sabse chhote nishaan se aage padhna")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d="M 120 88 C 180 86, 230 90, 280 88 M 120 94 C 180 92, 230 96, 280 94"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.8}
      />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={120} y={118} size={12} fill={MUTED} script anchor="start">
          {t("wire — thinner than 1 mm", "taar — 1 mm se patla")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 8)}
        d="M 414 98 A 16 16 0 1 1 446 98 A 16 16 0 1 1 414 98"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <T x={462} y={103} size={12} fill={MUTED} script anchor="start">
          {t("coin — to 0.01 mm?", "sikka — 0.01 mm tak?")}
        </T>
      </Fade>

      {/* beat 1 — the ruler runs out */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={"M 600 80 h 400 v 34 h -400 z " + ticks.join(" ")}
        stroke={INK}
        sw={1.8}
        dur={1.1}
      />
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d="M 705 84 v 26" stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={800} y={140} size={13} fill={RED} script>
          {t(
            "the tip lands between marks — squint and guess",
            "nok nishaanon ke beech — aankhen sikodo, andaaza lagao"
          )}
        </T>
      </Fade>

      {/* beat 2 — the genius */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={540} y={180} size={15} fill={GREEN} script>
          {t(
            "vernier & screw gauge read BEYOND the smallest mark",
            "vernier aur screw gauge sabse chhote nishaan se AAGE padhte hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — the stack */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 120 218 h 260 v 26 h -260 z M 160 218 v 10 M 200 218 v 10 M 240 218 v 10 M 280 218 v 10 M 320 218 v 10 M 360 218 v 10"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={420} y={238} size={14} fill={INK} script anchor="start">
          {t("metre scale · LC 1 mm", "metre scale · LC 1 mm")}
        </T>
        <T x={760} y={240} size={20} fill={MUTED} weight={700} anchor="start">≈ 2 mm</T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 8)}
        d="M 120 288 h 260 v 18 h -260 z M 200 306 h 90 v 14 h -90 z M 210 306 v 7 M 222 306 v 7 M 234 306 v 7 M 246 306 v 7 M 258 306 v 7 M 270 306 v 7"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 9.5)}>
        <T x={420} y={308} size={14} fill={INK} script anchor="start">
          {t("vernier callipers · LC 0.1 mm", "vernier callipers · LC 0.1 mm")}
        </T>
        <T x={760} y={310} size={20} fill={INK} weight={700} anchor="start">2.3 mm</T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 16)}
        d="M 160 358 v 26 q 0 8 8 8 h 22 q 8 0 8 -8 v -26 M 198 372 h 100 M 298 360 h 38 v 24 h -38 z M 306 360 v 24 M 314 360 v 24 M 322 360 v 24"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 17.5)}>
        <T x={420} y={378} size={14} fill={INK} script anchor="start">
          {t("screw gauge · LC 0.01 mm", "screw gauge · LC 0.01 mm")}
        </T>
        <T x={760} y={380} size={22} fill={GREEN} weight={700} anchor="start">2.34 mm</T>
      </Fade>

      {/* beat 4 — earned, not invented */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={540} y={430} size={15} fill={AMBER_DARK} script>
          {t(
            "every extra decimal place is EARNED — not invented",
            "har extra decimal place KAMAYA hua hai — gadha nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — least count */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Rect x={100} y={450} width={880} height={42} rx={10} fill={CREAM} stroke={AMBER} strokeWidth={2.2} />
        <T x={540} y={476} size={16} fill={INK} weight={700}>
          {t(
            "LEAST COUNT — the smallest length an instrument can reliably measure",
            "LEAST COUNT — sabse chhoti lambai jo instrument bharose se naap sake"
          )}
        </T>
      </Fade>

      {/* beat 6 — the ladder */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={522} size={18} fill={INK} weight={700}>
          {t(
            "scale 1 mm  ·  vernier 0.1 mm  ·  screw 0.01 mm",
            "scale 1 mm  ·  vernier 0.1 mm  ·  screw 0.01 mm"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={540} y={546} size={13} fill={AMBER_DARK} script>
          {t(
            "smaller least count ⇒ more decimal places you may honestly write",
            "jitna chhota least count ⇒ utne zyada imaandar decimal places"
          )}
        </T>
      </Fade>

      {/* beat 7 — the hands-on face */}
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={540} y={584} size={13} fill={GREEN} script>
          {t(
            "least count = the uncertainty of a single reading — sig figs you can hold in your hand",
            "least count = ek reading ki uncertainty — sig figs jo haath mein pakde ja sakte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
