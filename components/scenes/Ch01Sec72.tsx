/**
 * Ch01 · Section 72 — "Example 2 [NEET trap]: the sign that decides everything"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.1, 25.9, 46.8, 71.3, 80.9, 86.4, 108.2]):
 *  0 given chips: closed jaws +0.05 · wire 2.34 · the question
 *  1 the 90 s clock
 *  2 two wrong paths, both tempting
 *  3 what +ve zero error means: inflated readings → subtract
 *  4 apply the rule: 2.34 − (+0.05)
 *  5 = 2.29 mm ✓ green box
 *  6 one-rule bar: feed it the sign
 *  7 the cost: wrong by 2×0.05 = 0.10 on a 0.01 instrument
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | chips y80..112: x150 w280 / x460 w240 · question mid bl 148
 *  b1 | clock c(950,96) r24 · "90 s" cx950 bl 152
 *  b2 | red rows st x120 bl 195/230
 *  b3 | script st x120 bl 280 · amber bl 308
 *  b4 | 19 st x120 bl 360
 *  b5 | box x104..340 y388..432 · green 24 st x124 bl 418
 *  b6 | bar x400..960 y390..428 · cream 15 bl 414
 *  b7 | red 14 mid bl 490 · muted 13 mid bl 520
 */

import React from "react";
import { Rect } from 'react-native-svg';
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

export default function Ch01Sec72({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the givens */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "NEET — the sign that decides everything",
            "NEET — wo sign jo sab tay karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <Chip x={150} y={80} w={280} h={34} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("closed jaws → +0.05 mm", "band jabde → +0.05 mm")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <Chip x={460} y={80} w={240} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          {t("wire → 2.34 mm", "taar → 2.34 mm")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 13)}>
        <T x={540} y={148} size={14} fill={INK} script>
          {t("what is the CORRECT diameter?", "SAHI diameter kya hai?")}
        </T>
      </Fade>

      {/* beat 1 — the clock */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 926 96 A 24 24 0 1 1 974 96 A 24 24 0 1 1 926 96 M 950 96 L 950 80 M 950 96 L 962 102"
        stroke={RED}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={950} y={152} size={13} fill={RED} script>90 s</T>
      </Fade>

      {/* beat 2 — the two wrong paths */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={120} y={195} size={14} fill={RED} script anchor="start">
          {t(
            "path 1: report 2.34 as-is — zero error ignored ✗",
            "raasta 1: 2.34 waise hi likh do — zero error andekha ✗"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={120} y={230} size={14} fill={RED} script anchor="start">
          {t(
            "path 2: 2.34 + 0.05 = 2.39 ✗ — the wrong DIRECTION, off by twice the error",
            "raasta 2: 2.34 + 0.05 = 2.39 ✗ — galat DISHA, error ke dugne se door"
          )}
        </T>
      </Fade>

      {/* beat 3 — what +ve means */}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={120} y={280} size={14} fill={INK} script anchor="start">
          {t(
            "jaws closed, nothing inside — yet it says +0.05: reading high BEFORE touching the wire",
            "jabde band, andar kuchh nahi — phir bhi +0.05: taar chhoone se PEHLE hi zyada"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={120} y={308} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "every reading arrives inflated — inflation is removed by SUBTRACTING",
            "har reading phooli hui aati hai — phulaav GHATAKAR hataya jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — apply the rule */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={120} y={360} size={19} fill={INK} weight={700} anchor="start">
          corrected = observed − zero error = 2.34 − (+0.05)
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d="M 116 388 h 212 q 12 0 12 12 v 20 q 0 12 -12 12 h -212 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={124} y={418} size={24} fill={GREEN} weight={700} anchor="start">= 2.29 mm ✓</T>
      </Fade>

      {/* beat 6 — one rule, not two facts */}
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <Rect x={400} y={390} width={560} height={38} rx={10} fill={INK} />
        <T x={680} y={414} size={15} fill={CREAM} weight={700}>
          {t(
            "ONE rule + the sign — never two memorised cases",
            "EK niyam + sign — do rate hue maamle kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — why it costs double */}
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={490} size={14} fill={RED} script>
          {t(
            "adding instead of subtracting = wrong by 2 × 0.05 = 0.10 mm — NEET's favourite instrument mistake",
            "ghataane ki jagah jodna = 2 × 0.05 = 0.10 mm ki galti — NEET ki pasandeeda instrument galti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={540} y={520} size={13} fill={MUTED} script>
          {t(
            "on an instrument whose entire selling point is reading to 0.01 mm",
            "us instrument par jiski poori khoobi hi 0.01 mm tak padhna hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
