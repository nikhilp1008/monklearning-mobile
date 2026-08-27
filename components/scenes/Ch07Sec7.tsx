/**
 * Ch07 · Section 7 — "The universal constant G: value, dimensions, meaning"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 3.67, 16.38, 26.88, 37.12, 47.19, 55.98, 66.47]):
 *  0 title
 *  1 hero value G = 6.67×10⁻¹¹ + "tiny → gentle" note
 *  2 diagram: two 1-kg squares 1 m apart, mutual arrows, F = G newtons
 *  3 dimensions [G] = M⁻¹L³T⁻² (right column)
 *  4 "changes with: mass·medium·time·place·temperature" crossed out + NEVER chip
 *  5 red margin: scalar, smallest fundamental constant
 *  6 ring the F = G label + amber restatement line
 *  7 green trick box: G = F·r²/(m₁m₂)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · hero cx540 bl115 (364..716) · note cx540 bl148
 *  b2 | squares (185..215, 215..245) & (385..415, 215..245) · arrows (220,230)→(252,230) /
 *      (380,230)→(348,230) · dist M200 265 H400 + ticks · "1 m" cx300 bl288 ·
 *      "F = G newtons" cx300 bl198 · caption cx300 bl320
 *  b3 | dims cx800 bl220 · note cx800 bl252
 *  b4 | label st x100 bl375 · items st x250 bl375 (→537) · cross (248,362,290,16) ·
 *      chip x600 y352 w300 h32
 *  b5 | bar x66 y430..482 · lines st x84 bl450 / 476
 *  b6 | ring c(300,193) rx90 ry14 · line cx540 bl515 (368..712)
 *  b7 | green box x340..740 y540..585 · text bl570
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — what IS big G? */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("What IS big G, really?", "Big G asal mein HAI kya?")}
        </T>
      </Fade>

      {/* beat 1 — the tiny number */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={115} size={26} fill={INK} weight={800}>
          G = 6.67 × 10⁻¹¹ N·m² ⁄ kg²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={540} y={148} size={12} fill={MUTED} script>
          {t(
            "that tiny number is why gravity is so gentle",
            "yahi chhota number gravity ko itna gentle banata hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the physical meaning */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 185 215 h 30 v 30 h -30 Z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M 385 215 h 30 v 30 h -30 Z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.4)}
        d={arrowD(222, 230, 252, 230)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d={arrowD(378, 230, 348, 230)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <Path d="M 200 265 H 400 M 200 259 v 12 M 400 259 v 12" stroke={MUTED} strokeWidth={1.6} fill="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={300} y={288} size={12} fill={INK} weight={700}>
          1 m
        </T>
        <T x={200} y={210} size={11} fill={INK} weight={700}>
          1 kg
        </T>
        <T x={400} y={210} size={11} fill={INK} weight={700}>
          1 kg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={300} y={198} size={13} fill={GREEN} script>
          {t("force = exactly G newtons", "force = theek G newton")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.5)}>
        <T x={300} y={320} size={12} fill={AMBER_DARK} script>
          {t("that IS the meaning of G", "yahi G ka matlab hai")}
        </T>
      </Fade>

      {/* beat 3 — dimensions */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={800} y={220} size={20} fill={INK} weight={800}>
          [G] = M⁻¹ L³ T⁻²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={800} y={252} size={11} fill={MUTED} script>
          {t(
            "memorise — dimensional analysis loves it",
            "yaad rakho — dimensional questions mein aata hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — a TRUE universal constant */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={100} y={375} size={13} fill={INK} script anchor="start">
          {t("changes with:", "kiske saath badalta hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={310} y={375} size={14} fill={INK} anchor="start" weight={700}>
          {t(
            "mass · medium · time · place · temperature",
            "mass · medium · time · place · temperature"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d={crossD(308, 362, 292, 16)}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <Chip x={630} y={352} w={280} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13}>
          {t("NEVER — a true universal constant", "KABHI NAHI — true universal constant")}
        </Chip>
      </Fade>

      {/* beat 5 — scalar, and the smallest */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 430 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={84} y={450} size={13} fill={RED} script anchor="start">
          {t(
            "a SCALAR — the smallest of all fundamental constants",
            "ek SCALAR — sab fundamental constants mein sabse chhota"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.5)}>
        <T x={84} y={476} size={13} fill={RED} script anchor="start">
          {t(
            "the deep reason gravity feels so feeble",
            "yahi gehri wajah hai ki gravity feeble lagti hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — say it once more */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d={ringD(300, 193, 90, 14)}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={540} y={515} size={13} fill={AMBER_DARK} script>
          {t(
            "G = the pull between two 1-kg masses, 1 m apart",
            "G = do 1-kg masses, 1 m door — unke beech ka pull"
          )}
        </T>
      </Fade>

      {/* beat 7 — the exam trick */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 1)}
          d="M 352 540 h 376 q 12 0 12 12 v 21 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={540} y={568} size={15} fill={INK} weight={800}>
          {t("trick: G = F·r² ⁄ (m₁·m₂)", "trick: G = F·r² ⁄ (m₁·m₂)")}
        </T>
      </Fade>
    </Scene>
  );
}
