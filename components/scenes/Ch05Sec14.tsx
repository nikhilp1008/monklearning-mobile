/**
 * Ch05 · Section 14 — "The tilted pull, and the porter's staircase" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.5, 28.3, 45.7, 70.6, 91.3, 107.4, 128.7, 144.2] · dur 161.7;
 *        hi [0, 11.1, 29.2, 44.3, 69.1, 86.8, 102.9, 121.3, 136.1] · dur 156.5):
 *  0 title + subtitle
 *  1 Ex1 drawing: cart, rope at 60°, F, d
 *  2 identify: F S cos θ case, no ambiguity
 *  3 Ex1 work → 1000 J + horizontal-slice note
 *  4 Ex2 setup: porter, platform 40 m + staircase 5 m
 *  5 trap route (red)
 *  6 gravity ⊥ walk → zero on the 40 m
 *  7 W = mgh = 1000 J
 *  8 verdict: horizontal distance = bait
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  Ex1: lbl st x80 bl116 · ground (90,250)-(470,250) · cart x140..260 y210..236
 *   wheels (165/235,243) r7 · rope (255,212)-(320,140) · F (322,138)→(360,95)
 *   "F=200N" st x368 bl105 · "60°" (310,196) · d (150,280)→(300,280) · lbl st x360 bl285
 *   b2 note cx280 bl320 · b3 work st x90 bl352/382 · chip x90..330 y402..438 · note cx250 bl464
 *  Ex2: lbl st x550 bl116 · chip x550..1030 y126..162 · platform (560,290)-(800,290)
 *   steps to (890,220) · "40 m" (680,315) · dash (930,290)-(930,220) · "5 m" st x945 bl258
 *   b5 red st x550 bl350/374 · b6 arrows x680 · note st x550 bl410
 *   b7 chip x550..810 y430..468 · note cx700 bl494
 *  b8 | bar x66 y515..585 · lines st x84 bl535 / bl561
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

export default function Ch05Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("The Tilted Pull & the Porter's Staircase", "The Tilted Pull & the Porter's Staircase")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "clean presentation — and a number placed there to fool you",
            "clean presentation — aur ek number jo bewaqoof banane rakha gaya"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex1 drawing */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 1 — the tilted pull", "Ex 1 — tirchha kheenchna")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 90 250 H 470" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 140 236 v -20 q 0 -6 6 -6 h 108 q 6 0 6 6 v 20" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={165} cy={243} r={7} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={235} cy={243} r={7} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d="M 255 212 L 320 140" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 4)} d={arrowD(322, 138, 360, 95)} stroke={AMBER_DARK} sw={3} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={368} y={105} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          F = 200 N
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={310} y={196} size={13} fill={INK} weight={700}>
          60°
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 8)} d={arrowD(150, 280, 300, 280)} stroke={AMBER} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 8.8)}>
        <T x={360} y={285} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          d = 10 m
        </T>
      </Fade>

      {/* beat 2 — which formula */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={280} y={320} size={13} fill={AMBER_DARK} script>
          {t(
            "all three given, F constant, straight path → F S cos θ",
            "teeno diye hue, F constant, seedha path → F S cos θ"
          )}
        </T>
      </Fade>

      {/* beat 3 — Ex1 work */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={90} y={352} size={15} fill={INK} anchor="start" weight={700}>
          W = 200 × 10 × cos 60°
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={90} y={382} size={15} fill={INK} anchor="start" weight={700}>
          = 2000 × ½ = 1000 J
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <Chip x={90} y={402} w={240} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t("1000 J into the cart", "1000 J cart ke andar")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={250} y={464} size={13} fill={GREEN} script>
          {t(
            "only the horizontal slice does work",
            "sirf horizontal hissa work karta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — Ex2 setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={550} y={116} size={13} fill={RED} script anchor="start">
          {t("Ex 2 — NEET: the porter", "Ex 2 — NEET: porter waala")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={550} y={126} w={480} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13.5} script={false}>
          {t(
            "20 kg trunk · 40 m level walk · climb 5 m · g = 10",
            "20 kg trunk · 40 m seedha chalna · 5 m chadhai · g = 10"
          )}
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6)} d="M 560 290 H 800" stroke={INK} sw={2.4} dur={0.6} />
      <Draw
        on={beat >= 4}
        delay={dl(4, 7)}
        d="M 800 290 h 18 v -14 h 18 v -14 h 18 v -14 h 18 v -14 h 18 v -14 h 18"
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={680} y={315} size={13} fill={INK} weight={700}>
          40 m
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 10.5)} d="M 930 290 v -12 m 0 -10 v -12 m 0 -10 v -12 m 0 -10 v -4" stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 11.2)}>
        <T x={945} y={258} size={13} fill={INK} anchor="start" weight={700}>
          5 m
        </T>
      </Fade>

      {/* beat 5 — the trap route */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={550} y={350} size={13} fill={RED} script anchor="start">
          {t(
            "panic: walk-work + climb-work = confident wrong number",
            "ghabrahat: chalne ka work + chadhai ka work = confident galat number"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={550} y={374} size={13} fill={RED} script anchor="start">
          {t("…sitting right there in the options", "…jo options mein baitha intezar kar raha hai")}
        </T>
      </Fade>

      {/* beat 6 — gravity ⊥ the walk */}
      <Draw on={beat >= 6} delay={dl(6, 2)} d={arrowD(680, 235, 680, 278)} stroke={INK} sw={2.8} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 4)} d={arrowD(650, 220, 720, 220)} stroke={AMBER} sw={2.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={550} y={410} size={13} fill={GREEN} script anchor="start">
          {t(
            "θ = 90° → cos 90 = 0 — no work on the 40 m, nothing to add",
            "θ = 90° → cos 90 = 0 — 40 m par koi work nahi, jodne ko kuchh nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — only the climb */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={550} y={430} w={260} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          W = mgh = 20×10×5 = 1000 J
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={700} y={494} size={13} fill={GREEN} script>
          {t(
            "the 40 m never entered the calculation",
            "40 m calculation mein ghusa hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 8 — bait */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 515 v 58" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={84} y={535} size={13} fill={RED} script anchor="start">
          {t(
            "horizontal distance in a work-against-gravity question = BAIT",
            "work-against-gravity sawaal mein horizontal doori = BAIT"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={561} size={13} fill={RED} script anchor="start">
          {t(
            "mentally delete it — the number it leads to is one of the options",
            "dimaag mein delete karo — wo jis number tak le jaati hai, wo options mein hoga"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
