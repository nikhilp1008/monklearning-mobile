/**
 * Ch03 · Section 9 — "NEET speed trap: which resultant is impossible?"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.5, 37.8, 38.8, 56.2, 65.8, 78.2, 102.0, 119.2]):
 *  0 heading + question + option chips
 *  1 the bait: ring around (B) 5 N
 *  2 red trap note
 *  3 number line 0..8 with band [1,7]
 *  4 caption: angle never given → R is a RANGE
 *  5 formula: |4−3| ≤ R ≤ 4+3 → 1..7
 *  6 test options on the line: ✓ at 1/5/7, ✗ at 8
 *  7 ANSWER box: (D) 8 N
 *  8 speed cue verdict
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | title cx540 bl 50 · underline M340 64 h400 · problem cx540 bl 84 s12 ·
 *       chips w120 h34 y120: x290 (A) / x430 (B) / x570 (C) / x710 (D)
 *  b1 | ring c(490,137) rx70 ry29 · note st x84 bl 200 s12
 *  b2 | bar M66 216 v40 · lines st x84 bl 234 / 256 s12
 *  b3 | axis (120,360)→(980,360) · ticks x150+100k v8 · labels bl 384 s12 ·
 *       band rect x250 y326 w600 h20 · edge lbls cx250/cx850 bl 312 s12
 *  b4 | caption cx540 bl 300 s12
 *  b5 | formula cx540 bl 448 s16
 *  b6 | tags bl 404 s11: cx250 "180° ✓" · cx650 "90° ✓" · cx850 "0° ✓" ·
 *       cross over "8" box (943,372,14,18) · red tag cx950 bl 404
 *  b7 | box x84..420 y470..514 text cx252 bl 498 s15
 *  b8 | bar M470 470 v60 · lines st x488 bl 488 / 512 / 536 s12
 */

import React from "react";
import { Rect } from 'react-native-svg';
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={20} fill={INK} script>
          {t("NEET SPEED TRAP — 3 N and 4 N", "NEET SPEED TRAP — 3 N aur 4 N")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 64 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "which of these CANNOT be the magnitude of their resultant?",
            "inmein se kaunsa unka resultant NAHI ho sakta?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <Chip x={290} y={120} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (A) 1 N
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <Chip x={430} y={120} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (B) 5 N
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <Chip x={570} y={120} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (C) 7 N
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 11)}>
        <Chip x={710} y={120} w={120} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          (D) 8 N
        </Chip>
      </Fade>

      {/* beat 1 — the bait */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={ringD(490, 137, 70, 29)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={84} y={200} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "3 and 4… your brain already whispered “5” — that reflex is the bait",
            "3 aur 4… dimaag ne khud “5” bol diya — wahi reflex chara hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 216 v 40" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={84} y={234} size={12} fill={RED} script anchor="start">
          {t(
            "the trap: compute ONE case (the perpendicular 5), see it listed, stop",
            "trap: EK case nikala (perpendicular wala 5), options mein dikha, ruk gaye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={256} size={12} fill={RED} script anchor="start">
          {t(
            "the real question: what is the FULL SET of resultants this pair can make?",
            "asli sawaal: yeh jodi resultants ka POORA SET kya bana sakti hai?"
          )}
        </T>
      </Fade>

      {/* beat 3 — the band on a number line */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(120, 360, 980, 360)} stroke={INK_LIGHT} sw={1.8} dur={0.8} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.6)}
        d="M 150 356 v 8 M 250 356 v 8 M 350 356 v 8 M 450 356 v 8 M 550 356 v 8 M 650 356 v 8 M 750 356 v 8 M 850 356 v 8 M 950 356 v 8"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={150} y={384} size={12} fill={INK_LIGHT}>0</T>
        <T x={250} y={384} size={12} fill={INK} weight={700}>1</T>
        <T x={350} y={384} size={12} fill={INK_LIGHT}>2</T>
        <T x={450} y={384} size={12} fill={INK_LIGHT}>3</T>
        <T x={550} y={384} size={12} fill={INK_LIGHT}>4</T>
        <T x={650} y={384} size={12} fill={INK} weight={700}>5</T>
        <T x={750} y={384} size={12} fill={INK_LIGHT}>6</T>
        <T x={850} y={384} size={12} fill={INK} weight={700}>7</T>
        <T x={950} y={384} size={12} fill={RED} weight={700}>8</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <Rect x={250} y={326} width={600} height={20} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={250} y={312} size={12} fill={GREEN} script>|A−B| = 1</T>
        <T x={850} y={312} size={12} fill={GREEN} script>A+B = 7</T>
      </Fade>

      {/* beat 4 — the angle was never given */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={300} size={12} fill={AMBER_DARK} script>
          {t(
            "the angle was never given → R is a RANGE, not a number",
            "angle diya hi nahi gaya → R ek RANGE hai, ek number nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — substitute */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={448} size={16} fill={INK} weight={800}>
          |4 − 3| ≤ R ≤ 4 + 3   →   1 ≤ R ≤ 7
        </T>
      </Fade>

      {/* beat 6 — test the options */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={250} y={404} size={11} fill={GREEN} script>180° ✓</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={650} y={404} size={11} fill={GREEN} script>90° ✓</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={850} y={404} size={11} fill={GREEN} script>0° ✓</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4)} d={crossD(943, 372, 14, 18)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 4.8)}>
        <T x={950} y={404} size={11} fill={RED} script>
          {t("no angle makes it", "koi angle nahi banata")}
        </T>
      </Fade>

      {/* beat 7 — the answer */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 96 470 h 312 q 12 0 12 12 v 20 q 0 12 -12 12 h -312 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={252} y={498} size={15} fill={INK} weight={800}>
          {t("(D) 8 N — zero calculation", "(D) 8 N — zero calculation")}
        </T>
      </Fade>

      {/* beat 8 — bank the reflex */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 470 470 v 60" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={488} y={488} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "possible/impossible resultant → write the band FIRST",
            "possible/impossible resultant → pehle band likho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={488} y={512} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "test every option against it — the arithmetic never happens",
            "har option ko band par test karo — arithmetic kabhi nahi karni padti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={488} y={536} size={12} fill={INK} script anchor="start">
          {t(
            "the exam is testing: did you notice the angle was missing?",
            "exam yeh pooch raha hai: kya tumne dekha ki angle gayab tha?"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
