/**
 * Ch05 · Section 32 — "Conservation on a drop, and the round-trip trap" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.9, 29.7, 53.9, 69.4, 94.2, 111.4, 126.7, 151.6] · dur 176.4;
 *        hi [0, 14.0, 31.1, 53.6, 69.6, 94.4, 111.6, 127.2, 152.0] · dur 176.8):
 *  0 title + subtitle
 *  1 Ex1 drawing + setup chip
 *  2 conservation setup equations
 *  3 v = √(2gh) = 10 m/s
 *  4 comment: 25 J, no path details
 *  5 Ex2 setup: round trip
 *  6 the (0, 0) trap
 *  7 reason: gravity 0 ✓, friction negative both ways
 *  8 verdict chip + conservative-only privilege
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  Ex1: lbl st x80 bl114 · chip x180..500 y124..160 · ball (130,190) r11
 *   dash (130,205)-(130,295) · "5 m" end x108 bl250 · ground (90,300)-(330,300)
 *   b2 st x90 bl340/368/396 · b3 chip x90..340 y416..454 · script cx240 bl480
 *   b4 green cx240 bl508 · muted bl534
 *  Ex2: lbl st x550 bl114 · chip x550..1030 y124..160
 *   b6 red st x550 bl200/226 · b7 bl266/296/324
 *   b8 chip x550..900 y350..388 · lines st x550 bl420 / bl446
 */

import React from "react";
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Conservation on a Drop & the Round-Trip Trap", "Girawat par Conservation & Round-Trip Trap")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "the method's sheer efficiency — then a rule applied without checking",
            "method ki kushalta — phir ek rule bina jaanche lagaya hua"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex1 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 1 — the clean drop", "Ex 1 — saaf girawat")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={180} y={124} w={320} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          {t("0.5 kg · from rest · h = 5 m · g = 10", "0.5 kg · aaram se · h = 5 m · g = 10")}
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d="M 119 190 a 11 11 0 1 0 22 0 a 11 11 0 1 0 -22 0" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 5)} d="M 130 205 v 12 m 0 10 v 12 m 0 10 v 12 m 0 10 v 12 m 0 10 v 7" stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={108} y={250} size={13} fill={INK} anchor="end" weight={700}>
          5 m
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 7)} d="M 90 300 H 330" stroke={INK} sw={2.4} dur={0.4} />

      {/* beat 2 — the setup */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={90} y={340} size={14} fill={INK} anchor="start" weight={700}>
          {t("only gravity works → Ki + Ui = Kf + Uf", "sirf gravity kaam karti → Ki + Ui = Kf + Uf")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={90} y={368} size={14} fill={INK} anchor="start" weight={700}>
          {t("U_f = 0 (ground) · K_i = 0 (rest)", "U_f = 0 (zameen) · K_i = 0 (aaram)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 16)}>
        <T x={90} y={396} size={15} fill={INK} anchor="start" weight={800}>
          m g h = ½ m v²
        </T>
      </Fade>

      {/* beat 3 — solve */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={90} y={416} w={250} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          v = √(2gh) = 10 m/s
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={240} y={480} size={12.5} fill={GREEN} script>
          {t(
            "the mass cancels — hallmark of free fall",
            "mass cancel ho gaya — free fall ki pehchaan"
          )}
        </T>
      </Fade>

      {/* beat 4 — the comment */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={240} y={508} size={12.5} fill={GREEN} script>
          {t("all 25 J of U → K, cleanly", "poore 25 J U → K, saaf-suthre")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={240} y={534} size={12.5} fill={MUTED} script>
          {t(
            "no path, no time, no a — just two states",
            "na path, na time, na a — bas do haalat"
          )}
        </T>
      </Fade>

      {/* beat 5 — Ex2 setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={550} y={114} size={13} fill={RED} script anchor="start">
          {t("Ex 2 — NEET: the round trip", "Ex 2 — NEET: round trip")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={550} y={124} w={480} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          {t(
            "up to a shelf, back to the same spot · W_gravity? W_friction?",
            "shelf tak upar, wapas usi jagah · W_gravity? W_friction?"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the trap */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={550} y={200} size={13} fill={RED} script anchor="start">
          {t(
            "memorised: 'closed loop → zero work' → answers (0, 0)",
            "ratta: 'closed loop → zero work' → jawab (0, 0)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={550} y={226} size={13} fill={RED} script anchor="start">
          {t("feels consistent — it is HALF wrong", "consistent lagta hai — AADHA galat hai")}
        </T>
      </Fade>

      {/* beat 7 — reason it out */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={550} y={266} size={13} fill={GREEN} script anchor="start">
          {t(
            "gravity conservative → round trip = exactly 0 ✓",
            "gravity conservative → round trip = bilkul 0 ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={550} y={296} size={13} fill={RED} script anchor="start">
          {t(
            "friction: −W going up AND −W coming down",
            "friction: upar jaate −W AUR neeche aate −W"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={550} y={324} size={13} fill={RED} script anchor="start">
          {t(
            "two negatives → a larger negative — NEVER zero",
            "do negatives → bada negative — KABHI zero nahi"
          )}
        </T>
      </Fade>

      {/* beat 8 — the verdict */}
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <Chip x={550} y={350} w={350} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          W_grav = 0 · W_fric &lt; 0
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={550} y={420} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "'closed loop → 0' is a conservative-only privilege",
            "'closed loop → 0' sirf conservative ka visheshadhikar hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 16)}>
        <T x={550} y={446} size={13} fill={RED} script anchor="start">
          {t(
            "dissipative forces charge every leg of the journey",
            "dissipative forces safar ke har hisse par vasoolte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
