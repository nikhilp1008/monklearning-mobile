/**
 * Ch05 · Section 11 — "CBSE derivation: the work-energy theorem"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.5, 40.4, 54.9, 77.8, 101.4, 126.2, 151.0, 175.9] · dur 200.7;
 *        hi [0, 16.0, 38.7, 51.9, 74.9, 97.4, 122.2, 147.0, 171.9] · dur 195.4):
 *  0 title + subtitle
 *  1 setup: particle on x-axis, F(x) varies, vi@xi → vf@xf
 *  2 five-move flowchart (amber = chain rule)
 *  3 move 1: W = ∫F dx, why integral
 *  4 move 2: F = m dv/dt, Newton's bridge
 *  5 move 3 (amber box): chain rule → F = m v dv/dx
 *  6 move 4: dx cancels, limits become speeds
 *  7 move 5: integrate → W_net = ΔK
 *  8 red warning: NET work only
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  b1 | axis (80,160)-(480,160) · ticks x150/x410 · ball (150,150) r8 · ghost (410,150)
 *     | F (170,140)→(230,140), "F(x)" st x245 bl145 · vi (150,128) vf (410,128)
 *     | xi/xf bl186 · note cx280 bl210
 *  b2 | chips y120..150: x520/x612/x704(amber)/x808/x900 · note cx780 bl185
 *  b3 | lbl st x80 bl245 · f st x100 bl275 · note st x100 bl302
 *  b4 | lbl st x80 bl340 · f bl370 · note bl397
 *  b5 | amber box x560..1040 y235..330 · lbl cx800 bl258 · f1 bl288 · f2 bl316
 *  b6 | lbl st x560 bl365 · f bl395 · note bl422
 *  b7 | lbl st x80 bl445 · f bl475 · chip x560..740 y450..490 · green cx650 bl516
 *  b8 | bar x66 y505..583 · lines st x84 bl525 / bl551 / bl577
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

export default function Ch05Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("The Work-Energy Theorem — CBSE Derivation", "The Work-Energy Theorem — CBSE Derivation")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t(
            "the general version, with calculus — every move justified",
            "general version, calculus ke saath — har move ki wajah"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 80 160 H 480" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 150 154 V 166 M 410 154 V 166" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={150} y={186} size={13} fill={INK} weight={600}>
          xi
        </T>
        <T x={410} y={186} size={13} fill={INK} weight={600}>
          xf
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Circle cx={150} cy={150} r={8} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={arrowD(170, 140, 230, 140)} stroke={AMBER_DARK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={245} y={145} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          F(x)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={150} y={128} size={13} fill={INK} weight={700}>
          vi
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <Circle cx={410} cy={150} r={8} fill="none" stroke={MUTED} strokeWidth={2} />
        <T x={410} y={128} size={13} fill={INK} weight={700}>
          vf
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={280} y={210} size={13} fill={MUTED} script>
          {t(
            "'allowed to vary' — no constant-force assumption",
            "'badalne ki ijaazat' — constant force maana hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the five-move flowchart */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Chip x={520} y={120} w={76} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          1 defn
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(598, 135, 610, 135)} stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Chip x={612} y={120} w={76} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          2 N-II
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={arrowD(690, 135, 702, 135)} stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Chip x={704} y={120} w={88} h={30} fill={AMBER} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
          3 chain
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={arrowD(794, 135, 806, 135)} stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <Chip x={808} y={120} w={76} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          4 dx ✂
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4)} d={arrowD(886, 135, 898, 135)} stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <Chip x={900} y={120} w={60} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          5 ∫
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={780} y={185} size={13} fill={AMBER_DARK} script>
          {t(
            "the amber box is the one that matters",
            "beech waala amber box hi asli hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — move 1 */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={245} size={13} fill={AMBER_DARK} script anchor="start">
          {t("move 1 — start general", "move 1 — general se shuru")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={100} y={275} size={16} fill={INK} anchor="start" weight={700}>
          W = ∫ F dx (xi → xf)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={100} y={302} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "F S cos θ assumes constant F — the integral doesn't",
            "F S cos θ constant F maanta hai — integral nahi maanta"
          )}
        </T>
      </Fade>

      {/* beat 4 — move 2 */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={80} y={340} size={13} fill={AMBER_DARK} script anchor="start">
          {t("move 2 — Newton's bridge", "move 2 — Newton ka pul")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={100} y={370} size={16} fill={INK} anchor="start" weight={700}>
          F = m a = m dv⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={100} y={397} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "net force changes the motion — speed enters the picture",
            "net force hi motion badalta hai — speed picture mein aayi"
          )}
        </T>
      </Fade>

      {/* beat 5 — move 3, the chain-rule trick */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 560 235 H 1040 V 330 H 560 Z" stroke={AMBER} sw={2.6} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={800} y={258} size={13} fill={AMBER_DARK} script>
          {t("move 3 — the chain-rule trick", "move 3 — chain-rule waali chaalaaki")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={800} y={288} size={15} fill={INK} weight={700}>
          dv⁄dt = (dv⁄dx)(dx⁄dt) = v·dv⁄dx
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={800} y={316} size={15} fill={INK} weight={800}>
          ⇒ F = m v dv⁄dx
        </T>
      </Fade>

      {/* beat 6 — move 4 */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={560} y={365} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "move 4 — dx cancels, limits ride along",
            "move 4 — dx cancel, limits saath badalti hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={560} y={395} size={16} fill={INK} anchor="start" weight={700}>
          W = ∫ m v dv (vi → vf)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 14)}>
        <T x={560} y={422} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "position integral → clean speed integral",
            "position integral → saaf speed integral"
          )}
        </T>
      </Fade>

      {/* beat 7 — move 5, the result */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={80} y={445} size={13} fill={AMBER_DARK} script anchor="start">
          {t("move 5 — integrate", "move 5 — integrate karo")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={100} y={475} size={16} fill={INK} anchor="start" weight={700}>
          W = ½ m vf² − ½ m vi² = Kf − Ki
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <Chip x={560} y={450} w={180} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          W_net = ΔK
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={650} y={516} size={12.5} fill={GREEN} script>
          {t("kinetic energy = stored-up net work", "kinetic energy = jama kiya hua net work")}
        </T>
      </Fade>

      {/* beat 8 — NET work only */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 505 v 78" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={84} y={525} size={13} fill={RED} script anchor="start">
          {t(
            "the theorem is about NET work — the sum over ALL forces",
            "theorem NET work ki baat karta hai — SAARE forces ka jod"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={551} size={13} fill={RED} script anchor="start">
          {t(
            "'W_gravity = ΔK' while friction acts ✗ — classic mark-loser",
            "friction ke rehte 'W_gravity = ΔK' ✗ — classic mark-loser"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 16)}>
        <T x={84} y={577} size={13} fill={RED} script anchor="start">
          {t(
            "tally every force, or find the net force first",
            "har force ka hisaab karo, ya pehle net force nikaalo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
