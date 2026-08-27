/**
 * Ch01 · Section 46 — "The pencil and the ruler: where the digits come from"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.7, 23.7, 32.3, 44.3, 60.3, 80.7, 101.1]):
 *  0 title · draw mm ruler + pencil lying above it (tip lands between marks)
 *  1 highlight the gap past 14 · drop line at the tip · "= 14.2 cm" chip + arrow
 *  2 the number rebuilt huge: 1 4 . 2 cm (digit by digit)
 *  3 green underline beneath 1 4 — certain, read off the marks
 *  4 amber ring around the 2 — estimated · "another student? 1… or 3"
 *  5 definition box: reliable digits + the FIRST uncertain one
 *  6 "14.2000 cm" written, crossed out red — three invented digits, a lie
 *  7 green verdict: every digit is a claim about reality
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script 28      | mid 540 bl 62
 *  b0 | ruler rect           | x150..950 y190..238 · cm marks x220/520/820 y190..207
 *  b0 | cm numbers sans 15   | bl 230 inside rect (ink 218..235)
 *  b0 | pencil body+tip      | x170..580 y138..166 · break marks x~200 both
 *  b1 | gap highlight        | ruler top edge x520..610 y190
 *  b1 | drop line            | x580 y170..186
 *  b1 | chip "= 14.2 cm"     | x840..980 y140..178 · arrow (826,170)→(590,183)
 *  b2 | digits 64px          | 1@455 4@495 .@527 2@563 bl 360 (ink 310..380) · cm 30 st x600
 *  b3 | underline            | x435..515 y376 · label cx340 bl 415 script 16 (box 187..499)
 *  b4 | ring on 2            | c(563,343) rx30 ry35 (top ≈297) · label cx730 bl 415 (611..849)
 *  b4 | muted note 14        | st x680 bl 322 (680..865) · arrow (672,318)→(600,330)
 *  b5 | def box              | x110..970 y440..492 · sans 18 mid 540 bl 470 · script 15 amber cx898 bl 470
 *  b6 | red "14.2000 cm" 22  | cx300 bl 530 (box 245..355 y513..537) + crossD · label st x400 bl 530
 *  b7 | verdict script 15    | mid 540 bl 578
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

export default function Ch01Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const ticks: string[] = [];
  for (let x = 220; x <= 940; x += 30) {
    const mm = Math.round((x - 220) / 30);
    const h = mm % 10 === 0 ? 17 : mm % 5 === 0 ? 11 : 7;
    ticks.push(`M ${x} 190 v ${h}`);
  }

  return (
    <Scene>
      {/* beat 0 — title, ruler, pencil */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={62} size={28} fill={INK} script>
          {t(
            "the pencil & the ruler — where digits come from",
            "pencil aur ruler — digits aate kahan se hain"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.2)}
        d="M 162 190 h 776 q 12 0 12 12 v 24 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={1.1}
      />
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d={ticks.join(" ")} stroke={INK_LIGHT} sw={1.4} dur={1.2} />
      <Fade on={beat >= 0} delay={dl(0, 3.9)}>
        <T x={220} y={230} size={15} fill={INK}>13</T>
        <T x={520} y={230} size={15} fill={INK}>14</T>
        <T x={820} y={230} size={15} fill={INK}>15</T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d="M 170 138 h 378 l 32 14 l -32 14 h -378 q -8 0 -8 -8 v -12 q 0 -8 8 -8 M 556 143 l 18 8 M 556 161 l 18 -8"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={1.2}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 6.4)}
        d="M 196 172 l 14 -40 M 206 172 l 14 -40 M 196 246 l 14 -62 M 206 246 l 14 -62"
        stroke={MUTED}
        sw={1.8}
        dur={0.5}
      />

      {/* beat 1 — the tip lands between marks → 14.2 cm */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 520 189 h 90"
        stroke={AMBER}
        sw={4.5}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 580 170 v 16"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <Chip x={840} y={140} w={140} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={20}>
          = 14.2 cm
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d={arrowD(826, 170, 590, 183)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />

      {/* beat 2 — the number, rebuilt digit by digit */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={455} y={360} size={64} fill={INK} weight={700}>1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={495} y={360} size={64} fill={INK} weight={700}>4</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={527} y={360} size={64} fill={INK} weight={700}>.</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={563} y={360} size={64} fill={INK} weight={700}>2</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={600} y={360} size={30} fill={INK_LIGHT} anchor="start">cm</T>
      </Fade>

      {/* beat 3 — 1 and 4 are certain */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 435 376 C 460 372, 490 380, 515 375"
        stroke={GREEN}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={340} y={415} size={16} fill={GREEN} script>
          {t(
            "certain — read straight off the marks",
            "pakke — seedha nishaanon se padhe"
          )}
        </T>
      </Fade>

      {/* beat 4 — the 2 is a judgement call */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={ringD(563, 343, 30, 35)}
        stroke={AMBER}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={730} y={415} size={16} fill={AMBER_DARK} script>
          {t("estimated — a judgement call", "andaaza — ek faisla")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={680} y={322} size={14} fill={MUTED} script anchor="start">
          {t("another student? 1… or 3", "koi aur student? 1… ya 3")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 10)}
        d={arrowD(672, 318, 600, 330)}
        stroke={MUTED}
        sw={1.8}
        dur={0.5}
      />

      {/* beat 5 — the definition */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 122 440 h 836 q 12 0 12 12 v 28 q 0 12 -12 12 h -836 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={520} y={470} size={18} fill={INK} weight={700}>
          {t(
            "significant figures = reliable digits + the FIRST uncertain one",
            "significant figures = bharosemand digits + PEHLA anischit digit"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={898} y={470} size={15} fill={AMBER_DARK} script>
          {t("one — no more", "ek — bas ek")}
        </T>
      </Fade>

      {/* beat 6 — 14.2000 is a lie */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={300} y={530} size={22} fill={RED} weight={700}>14.2000 cm</T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4)}
        d={crossD(245, 513, 110, 24)}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={400} y={530} size={15} fill={RED} script anchor="start">
          {t(
            "three digits invented from nothing — a lie",
            "teen digits hawa se gadhe — jhooth"
          )}
        </T>
      </Fade>

      {/* beat 7 — the promise */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={578} size={15} fill={GREEN} script>
          {t(
            "every digit is a claim about reality — sig figs keep the promise honest",
            "har likha digit haqeeqat ka daava hai — sig figs us waade ko sachcha rakhte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
