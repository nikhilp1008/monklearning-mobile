/**
 * C11 Chemistry Ch04 · Section 11 — "VSEPR: electron pairs that hate each other"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 2.
 *
 * Beats (en [0, 24.83, 43.09, 67.75, 88.06, 108.97, 125.35, 143.36]):
 *  0 anchor: Lewis is flat — why bent water, tetrahedral methane?
 *  1 VSEPR full name + core idea
 *  2 3 mini arrangements: 2→linear, 3→trigonal, 4→tetrahedral (wedge/hash)
 *  3 caption: like 4 people in a lift, everyone claims a corner
 *  4 H2O structure, big "suitcase" lone pairs, squeeze arrows
 *  5 repulsion order chips: LP-LP > LP-BP > BP-BP
 *  6 104.5° stamp lands, "VSEPR's engine"
 *  7 closing: shape only, not why/strength → VBT next
 *
 * Layout plan:
 *  b2   | 3 arrangement icons | Draw/T | x160..920 y170..270
 *  b3   | lift caption        | T mid  | y294
 *  b4-6 | H2O + suitcase LPs  | Draw/T | x400..520 y325..455
 *  b5   | repulsion chips     | T start| x750..1000 y328..410
 *  b7   | closing + chip      | T/Chip | y470 / y490..518
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, wedgeD, hashD, LonePair } from "./chem-kit";

export default function C11Ch04Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("VSEPR: electron pairs that hate each other", "VSEPR: electron pairs jo ek dusre se nafrat karte")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 330 80 C 430 76, 650 76, 750 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("Lewis is flat — why bent water, tetrahedral methane?", "Lewis flat hai — water bent kyun, methane tetrahedral kyun?")}
        </T>
      </Fade>

      {/* beat 1 — VSEPR name + core idea */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={270} y={112} w={540} h={26} fill={AMBER_DARK} textFill="#fff" size={13} script={false}>
          VSEPR = Valence Shell Electron Pair Repulsion
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={155} size={12} fill={INK}>
          {t("electron pairs repel → spread out max", "electron pairs repel karte → jitna dur ho sake utna phailte")}
        </T>
      </Fade>

      {/* beat 2 — three arrangement icons */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 200 210 L 160 210 M 200 210 L 240 210" stroke={MUTED} sw={1.5} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={200} cy={210} r={3} fill={INK} />
        <Circle cx={160} cy={210} r={4} fill={INK} />
        <Circle cx={240} cy={210} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={200} y={270} size={11} fill={INK}>
          {t("2 pairs → linear (180°)", "2 pairs → linear (180°)")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 540 210 L 540 170 M 540 210 L 574.6 230 M 540 210 L 505.4 230" stroke={MUTED} sw={1.5} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Circle cx={540} cy={210} r={3} fill={INK} />
        <Circle cx={540} cy={170} r={4} fill={INK} />
        <Circle cx={574.6} cy={230} r={4} fill={INK} />
        <Circle cx={505.4} cy={230} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={540} y={270} size={11} fill={INK}>
          {t("3 pairs → trigonal (120°)", "3 pairs → trigonal (120°)")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.6)} d="M 880 210 L 852 182 M 880 210 L 908 182" stroke={MUTED} sw={1.5} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.9)} d={wedgeD(880, 210, 880, 248, 6)} stroke={INK} sw={1.5} dur={0.3} fill={INK} />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={hashD(880, 210, 915, 240, 5)} stroke={INK} sw={1.5} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <Circle cx={880} cy={210} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={880} y={270} size={11} fill={INK}>
          {t("4 pairs → tetrahedral (109.5°)", "4 pairs → tetrahedral (109.5°)")}
        </T>
      </Fade>

      {/* beat 3 — lift caption */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={294} size={11} fill={MUTED} script>
          {t("like 4 people in a lift — everyone claims a corner", "4 log lift mein jaise — sab apna corner claim karte")}
        </T>
      </Fade>

      {/* beat 4 — H2O with wide "suitcase" lone pairs */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={460} y={325} size={11} fill={INK}>
          {t("lone pair = wide suitcase → squeezes angle", "lone pair = chauda suitcase → angle squeeze karta")}
        </T>
      </Fade>
      <LonePair on={beat >= 4} delay={dl(4, 0.6)} cx={460} cy={350} angle={0} spread={11} r={4.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={460} y={380} size={18} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={400} y={430} size={15} weight={700} fill={INK}>
          H
        </T>
        <T x={520} y={430} size={15} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={bondD(450, 388, 410, 418)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.9)} d={bondD(470, 388, 510, 418)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 2.3)} d={arrowD(420, 405, 438, 415)} stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 2.5)} d={arrowD(500, 405, 482, 415)} stroke={RED} sw={1.8} dur={0.4} />

      {/* beat 5 — repulsion order */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={750} y={328} size={11} fill={MUTED} anchor="start">
          {t("repulsion order:", "repulsion order:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={750} y={352} size={12} weight={700} fill={RED} anchor="start">
          LP–LP: {t("strongest", "strongest")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={750} y={376} size={12} weight={700} fill={AMBER_DARK} anchor="start">
          LP–BP: {t("medium", "medium")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={750} y={400} size={12} weight={700} fill={GREEN} anchor="start">
          BP–BP: {t("weakest", "weakest")}
        </T>
      </Fade>

      {/* beat 6 — angle stamp lands */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={460} y={412} size={15} weight={700} fill={GREEN}>
          104.5°
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={460} y={455} size={11} fill={GREEN}>
          {t("= VSEPR's engine at work", "= VSEPR ka engine kaam kar raha")}
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={478} size={12} fill={RED}>
          {t(
            "VSEPR gives SHAPE only — not why bonds form or bond STRENGTH",
            "VSEPR sirf SHAPE deta — bond kyun banta ya STRENGTH nahi bataata"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={220} y={496} w={640} h={28} fill={GREEN} textFill="#fff" size={12.5} script={false}>
          {t(
            "next: valence bond theory (VBT) explains the bond itself",
            "next: valence bond theory (VBT) bond ko khud explain karta"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
