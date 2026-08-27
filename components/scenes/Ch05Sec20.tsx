/**
 * Ch05 · Section 20 — "PE belongs to a system, two gravity formulas, and mechanical energy"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.7, 33.5, 46.3, 65.5, 90.4, 111.1, 123.3, 148.1] · dur 164.6;
 *        hi [0, 8.6, 33.5, 45.0, 63.9, 88.8, 110.0, 121.9, 146.7] · dur 165.0):
 *  0 title + subtitle
 *  1 refinement 1: PE of a SYSTEM (stone + Earth pair)
 *  2 refinement 2 header: two formulas, two regimes
 *  3 near-surface card U = mgh
 *  4 general card U = −Gm₁m₂/r
 *  5 red trap: mgh in orbital problems
 *  6 E = K + U chip
 *  7 pendulum with equal-total energy bars
 *  8 regime rule band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | hdr st x80 bl122 · stone (130,175) r12 · Earth (300,205) r42 · link (145,180)-(256,196)
 *     | lbl (300,211) · lines cx240 bl275 / bl301
 *  b2 | hdr st x560 bl122
 *  b3 | chip x560..760 y140..178 · script cx740 bl205
 *  b4 | chip x560..820 y225..263 · script cx770 bl290 · muted bl316
 *  b5 | red st x560 bl348 / bl374
 *  b6 | chip x80..320 y330..370 · lbl cx200 bl396
 *  b7 | pivot (340,415)-(380,415) · strings to (245,470)/(475,495)/(360,532) · bobs r9
 *     | bars h36: B1 x195..208 y444..480 amber · Bmix x520..533 y468..504 · B3 x298..311 y505..541 grn
 *     | line cx360 bl570
 *  b8 | bar x560 y480..545 · lines st x575 bl500 / bl526
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("PE Belongs to a System — and E = K + U", "PE System ki Hoti Hai — aur E = K + U")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "two quiet refinements, then the chapter's headline quantity",
            "do chupchaap refinements, phir chapter ki sabse badi quantity"
          )}
        </T>
      </Fade>

      {/* beat 1 — PE of a system */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={122} size={13} fill={AMBER_DARK} script anchor="start">
          {t("refinement 1 — PE belongs to a SYSTEM", "refinement 1 — PE SYSTEM ki hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 118 175 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3)} d="M 258 205 a 42 42 0 1 0 84 0 a 42 42 0 1 0 -84 0" stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={300} y={211} size={13} fill={INK} weight={700}>
          Earth
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.5)} d="M 145 180 L 256 196" stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={240} y={275} size={13} fill={INK} script>
          {t("the PAIR stores it — stone AND Earth", "JODI jama karti hai — patthar AUR Earth")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 16)}>
        <T x={240} y={301} size={12.5} fill={MUTED} script>
          {t("it takes TWO to store this energy", "ise jama karne mein DO lagte hain")}
        </T>
      </Fade>

      {/* beat 2 — two formulas header */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={560} y={122} size={13} fill={RED} script anchor="start">
          {t(
            "refinement 2 — TWO gravity formulas, two regimes",
            "refinement 2 — gravity ke DO formulas, do regimes"
          )}
        </T>
      </Fade>

      {/* beat 3 — near surface */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={560} y={140} w={200} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          U = m g h
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={740} y={205} size={13} fill={AMBER_DARK} script>
          {t(
            "near the surface ONLY — g constant (building, cliff)",
            "SIRF satah ke paas — g constant (building, cliff)"
          )}
        </T>
      </Fade>

      {/* beat 4 — the general form */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={560} y={225} w={260} h={38} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          U = − G m₁ m₂ ⁄ r
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={770} y={290} size={13} fill={AMBER_DARK} script>
          {t("zero at INFINITY — note the minus sign", "INFINITY par zero — minus sign par dhyaan")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 15)}>
        <T x={770} y={316} size={12.5} fill={MUTED} script>
          {t("satellites, escape, huge heights", "satellites, escape, badi heights")}
        </T>
      </Fade>

      {/* beat 5 — the trap */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={560} y={348} size={13} fill={RED} script anchor="start">
          {t("m g h in an orbital problem ✗", "orbital sawaal mein m g h ✗")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={560} y={374} size={13} fill={RED} script anchor="start">
          {t(
            "spot the regime BEFORE writing a number",
            "number likhne se PEHLE regime pehchano"
          )}
        </T>
      </Fade>

      {/* beat 6 — mechanical energy */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={80} y={330} w={240} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={18} script={false}>
          E = K + U
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={200} y={396} size={13} fill={GREEN} script>
          {t("mechanical energy — the headline", "mechanical energy — sabse badi cheez")}
        </T>
      </Fade>

      {/* beat 7 — the pendulum picture */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.5)}
        d="M 340 415 H 380 M 360 415 L 245 470 M 360 415 L 475 495 M 360 415 L 360 532"
        stroke={MUTED}
        sw={1.8}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <Circle cx={245} cy={470} r={9} fill={INK} />
        <Circle cx={475} cy={495} r={9} fill={INK} />
        <Circle cx={360} cy={532} r={9} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <Rect x={195} y={444} width={13} height={36} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <Rect x={298} y={505} width={13} height={36} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <Rect x={520} y={468} width={13} height={18} fill={AMBER} />
        <Rect x={520} y={486} width={13} height={18} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={360} y={570} size={13} fill={GREEN} script>
          {t(
            "no friction: every bar's total is identical — energy sloshes, the sum stays fixed",
            "bina friction: har bar ka total ek jaisa — energy chhalakti hai, jod tay rehta hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — the working rule */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 560 480 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={575} y={500} size={13} fill={RED} script anchor="start">
          {t(
            "spot the regime before a single number",
            "ek bhi number se pehle regime pehchano"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={575} y={526} size={13} fill={RED} script anchor="start">
          {t(
            "never mix m g h with the general form",
            "m g h ko general form se kabhi mat milao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
