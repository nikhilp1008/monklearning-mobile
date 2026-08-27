/**
 * Ch05 · Section 9 — "Positive, negative, zero: the angle writes the sign"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.9, 30.0, 43.4, 59.4, 80.2, 99.5, 116.7] · dur 141.5;
 *        hi [0, 12.3, 30.6, 39.9, 40.9, 59.6, 80.3, 97.2] · dur 119.4 —
 *        b3 lasts ~1s in hi → hi-tiny delays):
 *  0 title + subtitle
 *  1 auto-rickshaw push: road, box, green push, rolls-forward arrow
 *  2 three panels: same block, same d — three blocks + d arrows
 *  3 left panel: acute force → +W chip
 *  4 middle panel: brake friction backward → −W chip
 *  5 right panel: gravity straight down → 0 chip
 *  6 formula chip W = F S cos θ + size/sign split
 *  7 red rule band: the sign is the angle's business alone
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84
 *  b1 | road (90,190)-(370,190) · box x150..250 y150..178 · wheels (170/230,184) r6
 *     | push (95,164)→(145,164) grn · lbl x87..143 bl145 · roll arrow (155,120)→(265,120)
 *     | lbl st x275 bl125 · script cx230 bl228
 *  b2 | script cx540 bl262 · panels ox = 70/390/710:
 *     | block ox+100..ox+200 y330..375 · d arrow (ox+100,305)→(ox+220,305) · "d" (ox+160,292)
 *  b3 | force (100,425)→(166,378) grn · "θ < 90°" (285,404) · chip x130..310 y425..461
 *  b4 | friction (640,352)→(595,352) red · "θ > 90°" (540,404) · chip x450..630 y425..461
 *  b5 | gravity (860,382)→(860,420) ink · "θ = 90°" (925,404) · chip x765..955 y425..461
 *  b6 | chip x80..320 y488..526 · script cx200 bl552
 *  b7 | bar x400 y480..560 · lines st x415 bl500 / bl526
 */

import React from "react";
import { Circle } from 'react-native-svg';
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

export default function Ch05Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const panels = [70, 390, 710];

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("The Angle Writes the Sign", "Angle Hi Sign Likhta Hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "the single most important picture in the chapter",
            "poore chapter ki sabse zaroori picture"
          )}
        </T>
      </Fade>

      {/* beat 1 — pushing the auto */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 90 190 H 370" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 150 178 v -22 q 0 -6 6 -6 h 88 q 6 0 6 6 v 22" stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Circle cx={170} cy={184} r={6} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={230} cy={184} r={6} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={arrowD(95, 164, 145, 164)} stroke={GREEN} sw={3} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={115} y={145} size={12.5} fill={GREEN} script>
          {t("you push", "aap push karte ho")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 7)} d={arrowD(155, 120, 265, 120)} stroke={AMBER} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 7.8)}>
        <T x={275} y={125} size={12.5} fill={AMBER_DARK} script anchor="start">
          {t("rolls forward", "aage badhti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={230} y={228} size={13} fill={GREEN} script>
          {t(
            "same way — energy pours in, the auto speeds up",
            "ek hi taraf — energy andar, auto ki speed badhti hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — three panels, same block, same d */}
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={540} y={262} size={13} fill={INK} script>
          {t(
            "same block, same displacement — only the angle changes",
            "wahi block, wahi displacement — sirf angle badalta hai"
          )}
        </T>
      </Fade>
      {panels.map((ox, i) => (
        <React.Fragment key={ox}>
          <Draw
            on={beat >= 2}
            delay={dl(2, 1 + i * 1.2)}
            d={`M ${ox + 100} 375 v -39 q 0 -6 6 -6 h 88 q 6 0 6 6 v 39 Z`}
            stroke={INK}
            sw={2.2}
            dur={0.6}
          />
          <Draw
            on={beat >= 2}
            delay={dl(2, 1.5 + i * 1.2)}
            d={arrowD(ox + 100, 305, ox + 220, 305)}
            stroke={AMBER}
            sw={2.6}
            dur={0.4}
          />
          <Fade on={beat >= 2} delay={dl(2, 1.9 + i * 1.2)}>
            <T x={ox + 160} y={292} size={13} fill={AMBER_DARK} weight={700}>
              d
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 3 — acute force, +W (hi: ~1s beat) */}
      <Draw on={beat >= 3} delay={dl(3, en ? 1.5 : 0.2)} d={arrowD(100, 425, 166, 378)} stroke={GREEN} sw={3} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, en ? 4 : 0.4)}>
        <T x={285} y={404} size={12.5} fill={AMBER_DARK} script>
          θ &lt; 90°
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, en ? 8 : 0.7)}>
        <Chip x={130} y={425} w={180} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t("+W — speeds up", "+W — speed badhti hai")}
        </Chip>
      </Fade>

      {/* beat 4 — brakes, −W */}
      <Draw on={beat >= 4} delay={dl(4, 2)} d={arrowD(640, 352, 595, 352)} stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={540} y={404} size={12.5} fill={AMBER_DARK} script>
          θ &gt; 90°
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <Chip x={450} y={425} w={180} h={36} fill={CREAM} stroke={RED} textFill={INK} size={14} script={false}>
          {t("−W — slows down", "−W — speed girti hai")}
        </Chip>
      </Fade>

      {/* beat 5 — gravity, zero */}
      <Draw on={beat >= 5} delay={dl(5, 2)} d={arrowD(860, 382, 860, 420)} stroke={INK} sw={3} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={925} y={404} size={12.5} fill={AMBER_DARK} script>
          θ = 90°
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <Chip x={765} y={425} w={190} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("0 — speed unchanged", "0 — speed jas ki tas")}
        </Chip>
      </Fade>

      {/* beat 6 — the formula */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={80} y={488} w={240} h={38} fill={CREAM} stroke={INK} textFill={INK} size={17} script={false}>
          W = F S cos θ
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={200} y={552} size={13} fill={AMBER_DARK} script>
          {t("F, S → size · cos θ → sign", "F, S → size · cos θ → sign")}
        </T>
      </Fade>

      {/* beat 7 — the one-line rule */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 400 480 v 80" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={415} y={500} size={13} fill={RED} script anchor="start">
          {t(
            "cos θ + → +W · cos θ − → −W · θ = 90° → exactly 0",
            "cos θ + → +W · cos θ − → −W · θ = 90° → bilkul 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={415} y={526} size={13} fill={RED} script anchor="start">
          {t(
            "nothing about size, nothing about distance — the sign is the angle's business ALONE",
            "na size ka zikr, na doori ka — sign sirf aur sirf angle ka maamla hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
