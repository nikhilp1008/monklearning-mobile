/**
 * Ch05 · Section 10 — "Only the along-motion slice counts — and where that energy goes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.4, 27.7, 43.6, 68.4, 83.5, 107.1, 127.1, 142.0] · dur 166.8;
 *        hi [0, 11.4, 26.2, 41.3, 64.3, 77.7, 98.7, 119.9, 134.1] · dur 159.0):
 *  0 title + subtitle
 *  1 the one sentence (amber line)
 *  2 suitcase drag demo: box, wheels, tilted handle, F along handle, d
 *  3 green slice F cos θ — does all the work
 *  4 red slice F sin θ — no rise, no work
 *  5 W = (F cos θ) × S chip
 *  6 work IS a dot product chip
 *  7 payoff line: energy shows up as motion
 *  8 K = ½mv² + currency/bank + W_net = ΔK
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84 · b1 line cx540 bl120
 *  b2 | ground (90,330)-(520,330) · box x150..280 y250..318 · wheels (175/255,323) r7
 *     | handle (270,255)-(350,185) · F (352,183)→(410,132) · "F" st x420 bl125
 *     | d (300,305)→(430,305) · "d" (365,290) · station lbl cx280 bl392
 *  b3 | green (352,185)→(430,185) · "θ" (402,168) · lbl st x445 bl190
 *  b4 | red (350,180)→(350,122) · lbls end x330 bl140 / bl166
 *  b5 | chip x560..820 y240..278 · script cx690 bl305
 *  b6 | chip x560..940 y330..368 · script cx750 bl395
 *  b7 | line cx750 bl430
 *  b8 | K chip x80..260 y460..500 · muted cx200 bl526 · currency cx600 bl470
 *     | ΔK chip x800..980 y450..490 · scripts cx890 bl516 / bl542
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

export default function Ch05Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Only the Along-Motion Slice Counts", "Sirf Along-Motion Slice Ginti Hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "the magnitude follows from one sentence — and the energy has an address",
            "magnitude ek hi vaakya se aata hai — aur energy ka ek pata hota hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the sentence */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={120} size={14} fill={AMBER_DARK} script>
          {t(
            "only the part of the force along the motion counts",
            "force ka sirf wo hissa ginta hai jo motion ke along hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the suitcase drag */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 90 330 H 520" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d="M 150 318 v -62 q 0 -6 6 -6 h 118 q 6 0 6 6 v 62" stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Circle cx={175} cy={323} r={7} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={255} cy={323} r={7} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d="M 270 255 L 350 185" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 4.4)} d={arrowD(352, 183, 410, 132)} stroke={INK} sw={3} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={424} y={150} size={15} fill={INK} anchor="start" weight={700}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 8)} d={arrowD(300, 305, 430, 305)} stroke={AMBER} sw={2.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 8.8)}>
        <T x={365} y={290} size={13} fill={AMBER_DARK} weight={700}>
          d
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 11)}>
        <T x={280} y={392} size={13} fill={MUTED} script>
          {t("the railway-station drag", "railway-station waala kheenchna")}
        </T>
      </Fade>

      {/* beat 3 — the green slice */}
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={arrowD(352, 185, 430, 185)} stroke={GREEN} sw={3} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={402} y={168} size={13} fill={INK} weight={700}>
          θ
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={445} y={190} size={13} fill={GREEN} script anchor="start">
          {t("F cos θ — does ALL the work", "F cos θ — SAARA work yehi karta hai")}
        </T>
      </Fade>

      {/* beat 4 — the vertical slice */}
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={arrowD(350, 180, 350, 122)} stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={330} y={140} size={13} fill={RED} script anchor="end">
          {t("F sin θ — no rise, no work", "F sin θ — na uthta hai, na work")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={330} y={166} size={12.5} fill={MUTED} script anchor="end">
          {t("only lightens the wheels", "sirf pahiyon ka bojh halka karta hai")}
        </T>
      </Fade>

      {/* beat 5 — where F S cos θ comes from */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={560} y={240} w={260} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          W = (F cos θ) × S
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={690} y={305} size={13} fill={MUTED} script>
          {t(
            "not a rule to memorise — a decomposition you can see",
            "ratne waala rule nahi — dikhne waali decomposition hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — work IS a dot product */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <Chip x={560} y={330} w={380} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          {t("W = F · S — work IS a dot product", "W = F · S — work KHUD dot product hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={750} y={395} size={13} fill={GREEN} script>
          {t(
            "the entire reason we built the dot product first",
            "isi liye humne pehle dot product banaya tha"
          )}
        </T>
      </Fade>

      {/* beat 7 — energy shows up as motion */}
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={750} y={430} size={13} fill={GREEN} script>
          {t(
            "+W → speeds up · −W → slows down — energy shows up as motion",
            "+W → speed badhti · −W → ghatti — energy motion bankar dikhti hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — kinetic energy and the bank */}
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <Chip x={80} y={460} w={180} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={17} script={false}>
          K = ½ m v²
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 5)}>
        <T x={200} y={526} size={12.5} fill={MUTED} script>
          {t("speed squared — direction irrelevant", "speed ka square — direction bemaani")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={600} y={470} size={13} fill={AMBER_DARK} script>
          {t(
            "work = currency · kinetic energy = bank balance",
            "work = currency · kinetic energy = bank balance"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 14)}>
        <Chip x={800} y={450} w={180} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          W_net = ΔK
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 16.5)}>
        <T x={890} y={516} size={12.5} fill={GREEN} script>
          {t("exactly — not roughly", "bilkul exactly — lagbhag nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 20)}>
        <T x={890} y={542} size={12.5} fill={MUTED} script>
          {t("next: proved from Newton's II law", "agla: Newton ke II law se saabit")}
        </T>
      </Fade>
    </Scene>
  );
}
