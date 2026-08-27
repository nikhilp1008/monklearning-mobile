/**
 * Ch03 · Section 48 — "NEET speed trap: speed at the highest point"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.2, 31.1, 45.0, 55.7, 64.1, 73.1, 85.1]):
 *  0 heading + problem + options
 *  1 ring on (A) 0 — the half-remembered fact
 *  2 only vy vanishes at the apex
 *  3 diagram: arc with apex arrow
 *  4 speed at top = u cosθ
 *  5 = 10√3 ≈ 17.3
 *  6 ANSWER (C)
 *  7 cue: never zero
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | chips w130 h34 y100: x270/420/570/720
 *  b1 | ring c(335,117) rx76 ry28 · note st x84 bl 180 s12
 *  b2 | bar M66 200 v44 · lines st x84 bl 218 / 242 s12
 *  b3 | ground M80 470 h400 · arc M110 470 Q280 290 450 470 · apex (280,380) ·
 *       apex arrow (280,380)→(360,380) green lbl st (296,362) s11 ·
 *       launch arrow (110,470)→(190,410) muted
 *  b4 | st x560 bl 300 s14
 *  b5 | st x560 bl 328 s14
 *  b6 | box x560..900 y352..398 text cx730 bl 384 s16 · red st x560 bl 436 s11
 *  b7 | bar M66 520 v52 · lines st x84 bl 538 / 562 s12
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
  ringD,
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

export default function Ch03Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "NEET SPEED TRAP — speed at the highest point",
            "NEET SPEED TRAP — sabse oonchi jagah par speed"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "thrown at 20 m/s, 30° to the horizontal — speed at the top is…?",
            "20 m/s par phenki, horizontal se 30° — top par speed…?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <Chip x={270} y={100} w={130} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (A) 0
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 11)}>
        <Chip x={420} y={100} w={130} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (B) 10
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 12)}>
        <Chip x={570} y={100} w={130} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (C) 10√3
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 13)}>
        <Chip x={720} y={100} w={130} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (D) 20
        </Chip>
      </Fade>

      {/* beat 1 — the half-remembered fact */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={ringD(335, 117, 76, 28)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={84} y={180} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the bait: “velocity is zero at the top” — true only for a ball thrown straight UP",
            "chara: “top par velocity zero hoti hai” — sach sirf seedha UPAR phenki ball ke liye"
          )}
        </T>
      </Fade>

      {/* beat 2 — only vy dies */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 200 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={84} y={218} size={12} fill={RED} script anchor="start">
          {t(
            "at the apex only the VERTICAL part vanishes",
            "apex par sirf VERTICAL hissa khatam hota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={242} size={12} fill={RED} script anchor="start">
          {t(
            "gravity never touched the horizontal part — it sails on unchanged",
            "gravity ne horizontal hisse ko chhua tak nahi — woh waise hi behta rehta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the picture */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 80 470 h 400" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 110 470 Q 280 290 450 470" stroke={INK} sw={2.6} dur={1} />
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={arrowD(110, 470, 190, 410)} stroke={MUTED} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <Circle cx={280} cy={380} r={5} fill={AMBER} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4.2)} d={arrowD(280, 380, 360, 380)} stroke={GREEN} sw={2.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={296} y={362} size={11} fill={GREEN} script anchor="start">
          {t("u cosθ — still fully there", "u cosθ — poora ka poora maujood")}
        </T>
      </Fade>

      {/* beat 4 — the speed at the top */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={560} y={300} size={14} fill={INK} weight={700} anchor="start">
          speed at top = u cosθ = 20 cos 30°
        </T>
      </Fade>

      {/* beat 5 — the number */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={328} size={14} fill={INK} weight={800} anchor="start">
          = 20 × (√3⁄2) = 10√3 ≈ 17.3 m/s
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 352 h 316 q 12 0 12 12 v 22 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={730} y={384} size={16} fill={INK} weight={800}>
          (C) 10√3 m/s
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={560} y={436} size={11} fill={RED} script anchor="start">
          {t(
            "(A) forgets the horizontal continues · (D) forgets the vertical is lost",
            "(A) bhoola ki horizontal chalta rehta hai · (D) bhoola ki vertical chala gaya"
          )}
        </T>
      </Fade>

      {/* beat 7 — bank the cue */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 520 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={538} size={12} fill={GREEN} script anchor="start">
          {t(
            "cue: at the top of ANY angled projectile, speed = u cosθ — never zero",
            "cue: kisi bhi angled projectile ke top par speed = u cosθ — kabhi zero nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={562} size={12} fill={INK} script anchor="start">
          {t(
            "it is fastest-horizontally exactly when it is slowest-vertically",
            "jab woh vertically sabse dheema hai, tabhi horizontally sabse tez hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
