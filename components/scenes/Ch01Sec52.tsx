/**
 * Ch01 · Section 52 — "Procedure 3: carrying sig figs through a calculation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.1, 30.9, 39, 62.5, 73.9, 98.7, 119.2]):
 *  0 title
 *  1 the card: outline, black bar "round once at the end", divider, × ÷ / + − headers
 *  2 left rule: least sig figs
 *  3 left example: 2.5 × 3.42 = 8.55 → annotate 2sf/3sf → least=2 → 8.6 green
 *  4 right rule: least DECIMAL PLACES
 *  5 right example: 12.5 + 0.0021 = 12.5021 → 1 dp → 12.5 green · drowned note
 *  6 swap-mistake: red double arrow across divider + warning line
 *  7 amber underline in the bar · carry-through closing lines
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | card x60..1020 y88..430 · bar rect y88..126 (text 16 bl 112) · divider x540 · headers 30 bl 165 cx300/780
 *  b2 | rule script 15 cx300 bl 200
 *  b3 | ex 22 cx300 bl 250 · "2 sf" cx221 bl 284 · "3 sf" cx289 bl 284 · least cx300 bl 316 · →8.6 26 cx300 bl 356 · note 13 cx300 bl 392
 *  b4 | rule script 15 cx780 bl 200
 *  b5 | ex 20 cx780 bl 250 · "1 dp" cx688 bl 282 · →12.5 26 cx780 bl 356 · note cx780 bl 392
 *  b6 | arrows y412 x450..630 both ways · script 15 red mid bl 460
 *  b7 | underline in bar y118 x330..750 · script 15 mid bl 504 · muted 13 mid bl 534
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
  arrowD,
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

export default function Ch01Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={26} fill={INK} script>
          {t(
            "carrying sig figs through a calculation",
            "sig figs ko calculation ke aar-paar le jaana"
          )}
        </T>
      </Fade>

      {/* beat 1 — the card */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 72 88 h 936 q 12 0 12 12 v 318 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -318 q 0 -12 12 -12"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Rect x={62} y={90} width={956} height={36} rx={10} fill={INK} />
        <T x={540} y={114} size={16} fill={CREAM} weight={700}>
          {t("ROUND ONCE — AT THE VERY END", "ROUND EK BAAR — BILKUL AAKHIR MEIN")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d="M 540 126 v 304" stroke={INK_LIGHT} sw={1.8} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={300} y={165} size={30} fill={AMBER_DARK} weight={700}>× ÷</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={780} y={165} size={30} fill={AMBER_DARK} weight={700}>+ −</T>
      </Fade>

      {/* beat 2 — left rule */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={300} y={200} size={15} fill={INK} script>
          {t(
            "answer keeps the LEAST sig figs",
            "answer mein sabse KAM sig figs bachte"
          )}
        </T>
      </Fade>

      {/* beat 3 — left worked example */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={300} y={250} size={22} fill={INK} weight={700}>2.5 × 3.42 = 8.55</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={221} y={284} size={13} fill={AMBER_DARK} script>2 sf</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.5)}>
        <T x={289} y={284} size={13} fill={AMBER_DARK} script>3 sf</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={300} y={316} size={14} fill={AMBER_DARK} script>
          {t("least = 2 sf", "sabse kam = 2 sf")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={300} y={356} size={26} fill={GREEN} weight={700}>→ 8.6</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={300} y={392} size={13} fill={MUTED} script>
          {t(
            "2.5 was the weak link — no manufactured precision",
            "2.5 kamzor kadi thi — precision gadh nahi sakte"
          )}
        </T>
      </Fade>

      {/* beat 4 — right rule */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={780} y={200} size={15} fill={INK} script>
          {t(
            "keep the LEAST decimal places — not sig figs",
            "sabse KAM decimal places — sig figs nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — right worked example */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={780} y={250} size={20} fill={INK} weight={700}>12.5 + 0.0021 = 12.5021</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={688} y={282} size={13} fill={AMBER_DARK} script>
          {t("only 1 decimal place", "sirf 1 decimal place")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={780} y={356} size={26} fill={GREEN} weight={700}>→ 12.5</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 15)}>
        <T x={780} y={392} size={13} fill={MUTED} script>
          {t(
            "the digits are real — just drowned",
            "digits asli hain — bas doob gaye"
          )}
        </T>
      </Fade>

      {/* beat 6 — the swap mistake */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d={arrowD(450, 408, 630, 408) + " " + arrowD(630, 418, 450, 418)}
        stroke={RED}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={540} y={460} size={15} fill={RED} script>
          {t(
            "swapping the two rules — the most-tested mistake in this chapter",
            "dono rules aapas mein badalna — is chapter ki sabse jaanchi galti"
          )}
        </T>
      </Fade>

      {/* beat 7 — round once, at the end */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 330 119 C 430 116, 620 121, 750 118"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={504} size={15} fill={AMBER_DARK} script>
          {t(
            "carry extra digits through — round only when you write the final answer",
            "extra digits saath le chalo — round sirf aakhri answer likhte waqt"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={540} y={534} size={13} fill={MUTED} script>
          {t(
            "rounding every step compounds the very error you're controlling",
            "har step par rounding wahi error badhati jise tum rok rahe the"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
