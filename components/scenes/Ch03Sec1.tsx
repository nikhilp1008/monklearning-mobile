/**
 * Ch03 · Section 1 — "Scalars, vectors, and why direction changes the arithmetic"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.2, 35.0, 54.8, 71.5, 84.2, 100.7, 118.7]):
 *  0 title + hook question
 *  1 scalars: one number, finished (35 °C · 160 g · 2 h)
 *  2 vectors: 500 m... which way? (dot + direction arrows)
 *  3 red note: direction changes the arithmetic itself
 *  4 walk demo: 3 km east + 4 km north → road = 7 km
 *  5 the refusal: hypotenuse = 5 km, 3+4 ≠ 7
 *  6 the vector cast chips
 *  7 verdict: scalars always add, vectors only when parallel
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | title cx540 bl 52 s21 · underline M340 66 h400 · sub cx540 bl 88 s12 sans
 *  b1 | header st x84 bl 118 · underline y130 x84..274 · chips y140 h34:
 *       x84 w80 / x180 w80 / x276 w64 (ends 340) · caption st x84 bl 204
 *  b2 | header st x684 bl 118 (..x915) · dot (740,195) r4 ·
 *       arrows NE (749,187)→(792,154) "?" bl 152 cx804 · E (752,195)→(816,195)
 *       "?" (830,200) · SE (749,202)→(785,224) · caption st x684 bl 260
 *  b3 | bar M66 272 v28 · text st x84 bl 290 (≤x577, arrow at x595 clear)
 *  b4 | home dot (430,462) · "home" end x416 bl 467 · east arrow →(595,462)
 *       "3 km" cx512 bl 486 · north arrow (595,462)→(595,242) "4 km" st x610 bl 357
 *       road chip x680 y330 w220 h34 · question st x680 bl 398
 *  b5 | hyp arrow (430,462)→(595,242) · "5 km" end x496 bl 338 ·
 *       red st x680 bl 428 · green chip x680 y444 w240 h36
 *  b6 | label st x66 bl 539 (..x195) · underline y548 x66..188 ·
 *       chips y518 h32: x210 w110 / x334 w86 / x434 w112 / x560 w64 / x638 w90
 *  b7 | divider M740 508 V586 · lines st x756 bl 524 / 552 / 580 (≤x1008)
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Scalar or vector? The real test is how they ADD",
            "Scalar ya vector? Asli test — woh ADD kaise hote hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)} d="M 340 66 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={88} size={12} fill={MUTED}>
          {t(
            "what actually makes a quantity a vector?",
            "quantity ko vector banata kya hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — scalars: one number, finished */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={15} fill={INK} script anchor="start">
          {t("SCALAR — magnitude only", "SCALAR — sirf magnitude")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 84 130 h 190" stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Chip x={84} y={140} w={80} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          35 °C
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <Chip x={180} y={140} w={80} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          160 g
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <Chip x={276} y={140} w={64} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          2 h
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={84} y={204} size={13} fill={INK_LIGHT} script anchor="start">
          {t("one number, one unit — finished", "ek number, ek unit — khatam")}
        </T>
      </Fade>

      {/* beat 2 — vectors: which way? */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={684} y={118} size={15} fill={INK} script anchor="start">
          {t("VECTOR — 500 m... which way?", "VECTOR — 500 m... kis taraf?")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Circle cx={740} cy={195} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={arrowD(749, 187, 792, 154)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={arrowD(752, 195, 816, 195)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d={arrowD(749, 202, 785, 224)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={804} y={152} size={14} fill={AMBER_DARK} weight={700}>?</T>
        <T x={830} y={200} size={14} fill={AMBER_DARK} weight={700}>?</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={684} y={260} size={13} fill={INK_LIGHT} script anchor="start">
          {t(
            "magnitude + direction + a combining rule",
            "magnitude + direction + jodne ka rule"
          )}
        </T>
      </Fade>

      {/* beat 3 — the rule IS the point */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 66 272 v 28" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={84} y={290} size={13} fill={RED} script anchor="start">
          {t(
            "direction doesn't decorate the number — it changes the ARITHMETIC",
            "direction number ko sajata nahi — woh khud ARITHMETIC badal deta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the walk: 3 east, 4 north */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Circle cx={430} cy={462} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={416} y={467} size={13} fill={INK_LIGHT} script anchor="end">
          {t("home", "ghar")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={arrowD(430, 462, 595, 462)} stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={512} y={486} size={14} fill={INK} weight={700}>3 km</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.6)} d={arrowD(595, 462, 595, 242)} stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={610} y={357} size={14} fill={INK} weight={700} anchor="start">4 km</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.5)}>
        <Chip x={680} y={330} w={220} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("road walked = 7 km", "sadak naapi = 7 km")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={680} y={398} size={13} fill={AMBER_DARK} script anchor="start">
          {t("how far from home?", "ghar se doori kitni?")}
        </T>
      </Fade>

      {/* beat 5 — the refusal: 5 km */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={arrowD(430, 462, 595, 242)} stroke={GREEN} sw={2.8} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={496} y={338} size={15} fill={GREEN} weight={800} anchor="end">5 km</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={680} y={428} size={13} fill={RED} script anchor="start">
          {t(
            "3 + 4 refused to make 7",
            "3 aur 4 ne 7 banne se mana kar diya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <Chip x={680} y={444} w={240} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t("from home = 5 km", "ghar se = 5 km")}
        </Chip>
      </Fade>

      {/* beat 6 — the vector cast */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={66} y={539} size={13} fill={INK} script anchor="start">
          {t("the vector cast:", "poori vector cast:")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d="M 66 548 h 122" stroke={AMBER} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={210} y={518} w={110} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          displacement
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <Chip x={334} y={518} w={86} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          velocity
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <Chip x={434} y={518} w={112} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          acceleration
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.7)}>
        <Chip x={560} y={518} w={64} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          force
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <Chip x={638} y={518} w={90} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          momentum
        </Chip>
      </Fade>

      {/* beat 7 — keep the contrast sharp */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 740 508 V 586" stroke={MUTED} sw={1.5} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={756} y={524} size={13} fill={GREEN} script anchor="start">
          {t("2 kg + 3 kg = 5 kg — always", "2 kg + 3 kg = 5 kg — hamesha")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={756} y={552} size={13} fill={INK} script anchor="start">
          {t("|A|+|B| only if same direction", "|A|+|B| sirf same direction par")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={756} y={580} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "rest of the chapter: when they don't",
            "baaki chapter: jab same nahi hote"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
