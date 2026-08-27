/**
 * Ch01 · Section 47 — "14.2 versus 14.20: why one zero changes everything"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.4, 30, 44.5, 66.1, 80.8, 99.7, 123]):
 *  0 title · two cards "14.2 cm" / "14.20 cm" · "=" between, crossed out red
 *  1 left card: green under 14, amber under 2 · "uncertainty in the TENTHS"
 *  2 right card: green under 14.2 · "uncertainty in the HUNDREDTHS"
 *  3 amber ring on the trailing 0 · chip "10× stronger claim" · promise line
 *  4 kirana rough scale, dal bag, display "≈ 2 kg"
 *  5 jeweller's balance, same dal, display "2.0000 kg" · ±100 g / ±0.1 g chips
 *  6 rough scale writing "2.0000 kg" → crossed out — FRAUD
 *  7 verdict: a number is a claim about its measurement — sig figs its grammar
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | cards x190..410 / x670..890, y96..172 · text 34 bl 146 · "=" 30 mid 540 bl 146
 *  b1 | underlines y162 (green 238..276, amber 281..302) · label cx300 bl 198 script 14
 *  b2 | underline green 710..772 y162 · label cx780 bl 198
 *  b3 | ring c(780,137) rx16 ry19 · chip cx540 y218..252 · script cx540 bl 280
 *  b4 | scale body x150..330 y360..450 · dal blob y320..358 · display x190..290 y385..420
 *  b4 | label cx240 bl 480
 *  b5 | balance x750..930 y360..450 · display x770..910 y385..420 · label cx840 bl 480
 *  b5 | chips ±: x185..295 / x785..895 y496..528
 *  b6 | red "2.0000 kg" cx540 bl 400 (box 486..594 y381..407) + cross + arrow from x335
 *  b6 | label cx540 bl 445 script 15 red
 *  b7 | verdict green 15 mid bl 558 · red 13 mid bl 588
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
  ringD,
  crossD,
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

export default function Ch01Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the two cards */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={62} size={28} fill={INK} script>
          {t(
            "14.2 vs 14.20 — one zero changes everything",
            "14.2 vs 14.20 — ek zero sab badal deta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1)}
        d="M 202 96 h 196 q 12 0 12 12 v 52 q 0 12 -12 12 h -196 q -12 0 -12 -12 v -52 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={300} y={146} size={34} fill={INK} weight={700}>14.2 cm</T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 682 96 h 196 q 12 0 12 12 v 52 q 0 12 -12 12 h -196 q -12 0 -12 -12 v -52 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={780} y={146} size={34} fill={INK} weight={700}>14.20 cm</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={146} size={30} fill={MUTED} weight={700}>=</T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 12)}
        d={crossD(528, 122, 24, 34)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />

      {/* beat 1 — left card decomposed */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 246 162 C 258 158, 272 165, 282 161"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 286 162 C 293 159, 301 164, 307 161"
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={300} y={198} size={14} fill={AMBER_DARK} script>
          {t(
            "uncertainty lives in the TENTHS — known to ~0.1 cm",
            "uncertainty DASVEIN sthaan par — ~0.1 cm tak pata"
          )}
        </T>
      </Fade>

      {/* beat 2 — right card decomposed */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 710 162 C 728 158, 754 165, 772 161"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={780} y={198} size={14} fill={AMBER_DARK} script>
          {t(
            "uncertainty in the HUNDREDTHS — ten times better",
            "uncertainty SAUVEIN sthaan par — das guna behtar"
          )}
        </T>
      </Fade>

      {/* beat 3 — the trailing zero is a bigger promise */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={ringD(780, 137, 16, 19)}
        stroke={AMBER}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <Chip x={430} y={218} w={220} h={34} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16}>
          {t("10× stronger claim", "10× zyada mazboot daava")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={540} y={280} size={15} fill={INK_LIGHT} script>
          {t(
            "a better instrument, more care — a bigger promise",
            "behtar instrument, zyada saavdhani — bada waada"
          )}
        </T>
      </Fade>

      {/* beat 4 — kirana rough scale */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 160 360 h 160 M 150 366 h 180 l -14 84 h -152 z"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.2)}
        d="M 214 358 q -12 -30 8 -34 q 6 -8 18 -8 q 12 0 18 8 q 20 4 8 34 z M 232 316 l 8 -8 l 8 8"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.8}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.4)}
        d="M 190 385 h 100 v 35 h -100 z"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={240} y={409} size={20} fill={INK} weight={700}>≈ 2 kg</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={240} y={480} size={14} fill={INK_LIGHT} script>
          {t(
            "kirana scale — for dal, perfectly fine",
            "kirane ka scale — daal ke liye bilkul theek"
          )}
        </T>
      </Fade>

      {/* beat 5 — jeweller's balance */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 760 360 h 160 M 750 366 h 180 l -14 84 h -152 z"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.2)}
        d="M 814 358 q -12 -30 8 -34 q 6 -8 18 -8 q 12 0 18 8 q 20 4 8 34 z M 832 316 l 8 -8 l 8 8"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.8}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.4)}
        d="M 770 385 h 140 v 35 h -140 z"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.2)}>
        <T x={840} y={408} size={18} fill={INK} weight={700}>2.0000 kg</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={840} y={480} size={14} fill={INK_LIGHT} script>
          {t("jeweller's balance — the same dal", "sunar ka taraazu — wahi daal")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <Chip x={185} y={496} w={110} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={16} script={false}>
          ± 100 g
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <Chip x={785} y={496} w={110} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={16} script={false}>
          ± 0.1 g
        </Chip>
      </Fade>

      {/* beat 6 — the fraud */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d={arrowD(340, 402, 478, 398)}
        stroke={RED}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={400} size={24} fill={RED} weight={700}>2.0000 kg</T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d={crossD(487, 375, 106, 26)}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={540} y={445} size={15} fill={RED} script>
          {t(
            "not rounding, not precision — FRAUD",
            "na rounding, na precision — DHOKHA"
          )}
        </T>
      </Fade>

      {/* beat 7 — the grammar of the claim */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={558} size={15} fill={GREEN} script>
          {t(
            "a number is a claim about its own measurement — sig figs are its grammar",
            "number apni measurement ka daava hai — sig figs uski vyakaran hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={540} y={588} size={13} fill={RED} script>
          {t(
            "copying 14 calculator digits = the same fraud",
            "calculator ke 14 digits utaarna = wahi dhokha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
