/**
 * Ch02 · Section 1 — "Distance and displacement: the odometer and the tape"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 47.8, 72.6, 88.9, 108.5, 125.3, 147.7]):
 *  0 title · Dadar/Bandra dots · looping track draws · dashed tape arrow
 *  1 ring a twist ("clearly longer") · arrow at the arrowhead ("points somewhere")
 *  2 amber retrace of the track → DISTANCE block
 *  3 solid red retrace of the straight arrow → DISPLACEMENT block
 *  4 formula card Δx = xf − xi · green rings on both endpoint dots
 *  5 red-margin note: plain number vs number + sign
 *  6 +x axis drawn · "fix + direction FIRST" chip · −3 m/s warning
 *  7 green verdict: the split seeds the chapter
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 58 · dots (150,270)/(890,130) r5 · track C-path between ·
 *       labels bl 312 cx150 / bl 100 cx890 · dashed arrow (162,264)→(878,136)
 *  b1 | ring c(315,315) rx50 ry20 · "clearly longer" cx140 bl 368 ·
 *       arrowD (942,174)→(894,152) · "points somewhere" cx960 bl 202
 *  b2 | DISTANCE sans18 cx365 bl 368 · sub script13 cx365 bl 398
 *  b3 | solid arrow retrace · DISPLACEMENT sans20 cx400 bl 150 · sub script13 cx400 bl 178
 *  b4 | card x600..1020 y300..390 · formula bl 345 · note bl 376 · rings on dots r12/10
 *  b5 | red bar x66 y435..505 · lines st x84 bl 458 / 488
 *  b6 | axis (640,470)→(840,470) · "+x" st (860,476) · chip x630..890 y500..534 ·
 *       warning cx810 bl 562
 *  b7 | lines st x70 bl 548 / 574 · green underline y592 x70..470
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const TRACK =
  "M 150 270 C 260 330, 380 320, 470 260 C 540 215, 560 170, 660 160 C 740 152, 790 180, 890 130";

export default function Ch02Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title, stations, the looping track, the taut tape */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("one journey — two different questions", "ek hi safar — do alag sawaal")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.2)}
        d="M 145 270 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 885 130 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={150} y={312} size={13} fill={MUTED} script>
          {t("Dadar (start)", "Dadar (shuruaat)")}
        </T>
        <T x={890} y={100} size={13} fill={MUTED} script>
          {t("Bandra (end)", "Bandra (ant)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3)} d={TRACK} stroke={INK} sw={3} dur={2.6} />
      <Fade on={beat >= 0} delay={dl(0, 15)}>
        <Path
          d="M 162 264 L 878 136"
          fill="none"
          stroke={RED}
          strokeWidth={2.2}
          strokeDasharray="8 6"
        />
        <Path
          d="M 868 145 L 878 136 L 874 149"
          fill="none"
          stroke={RED}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
      </Fade>

      {/* beat 1 — longer · points somewhere */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d={ringD(315, 315, 50, 20)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={140} y={368} size={14} fill={AMBER_DARK} script>
          {t("clearly longer", "saaf lambi hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d={arrowD(942, 174, 894, 152)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={960} y={202} size={13} fill={RED} script>
          {t("points somewhere", "kahin point karta hai")}
        </T>
      </Fade>

      {/* beat 2 — DISTANCE (amber retrace = every metre counted) */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={TRACK} stroke={AMBER} sw={3.6} dur={2.4} />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={365} y={368} size={18} fill={AMBER_DARK}>
          {t("DISTANCE — total path length", "DISTANCE — poore raaste ki lambaai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={365} y={398} size={13} fill={MUTED} script>
          {t(
            "a scalar — only ever grows, no direction",
            "scalar — sirf badhta hai, direction nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — DISPLACEMENT (tape pulled taut) */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={arrowD(162, 264, 878, 136)}
        stroke={RED}
        sw={3}
        dur={1.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={400} y={150} size={20} fill={RED}>
          DISPLACEMENT
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={400} y={178} size={13} fill={RED} script>
          {t(
            "shortest gap + direction — a vector",
            "chhota seedha gap + direction — vector"
          )}
        </T>
      </Fade>

      {/* beat 4 — the endpoint formula */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 612 300 h 396 q 12 0 12 12 v 66 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -66 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={810} y={345} size={30} fill={INK} weight={700}>
          Δx = x
          <TSpan dy={7} fontSize={19}>
            f
          </TSpan>
          <TSpan dy={-7}> − x</TSpan>
          <TSpan dy={7} fontSize={19}>
            i
          </TSpan>
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5)}
        d={ringD(150, 270, 12, 10)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 5.8)}
        d={ringD(890, 130, 12, 10)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 7.5)}>
        <T x={810} y={376} size={13} fill={MUTED} script>
          {t(
            "endpoints only — the middle never enters",
            "sirf endpoints — beech ka kuchh nahi ginta"
          )}
        </T>
      </Fade>

      {/* beat 5 — the red-margin note */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 435 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={458} size={14} fill={RED} script anchor="start">
          {t(
            "distance — a plain number (scalar)",
            "distance — seedha number (scalar)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={84} y={488} size={14} fill={RED} script anchor="start">
          {t(
            "displacement — number + sign: in 1-D, ± IS the direction",
            "displacement — number + sign: 1-D mein ± hi direction hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — fix the positive direction FIRST */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={arrowD(640, 470, 840, 470)}
        stroke={INK}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={860} y={476} size={18} fill={INK} anchor="start" weight={700}>
          +x
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <Chip
          x={630}
          y={500}
          w={260}
          h={34}
          fill={CREAM}
          stroke={AMBER}
          textFill={AMBER_DARK}
          size={16}
        >
          {t("fix a + direction FIRST", "pehle + direction fix karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={810} y={562} size={13} fill={RED} script>
          {t(
            "−3 m/s means nothing until + is chosen",
            "−3 m/s ka matlab hi nahi jab tak + fix na ho"
          )}
        </T>
      </Fade>

      {/* beat 7 — the seed of the chapter */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={70} y={548} size={13} fill={GREEN} script anchor="start">
          {t(
            "this one split seeds the whole chapter —",
            "yahi ek split poore chapter ka beej hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={70} y={574} size={13} fill={GREEN} script anchor="start">
          {t(
            "speed & velocity · average & instantaneous · the graphs",
            "speed & velocity · average & instantaneous · saare graphs"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 5)}
        d="M 70 592 h 400"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
    </Scene>
  );
}
