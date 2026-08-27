/**
 * Ch01 · Section 63 — "The screw's superpower: a very gentle ramp"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9, 22.9, 34.8, 50.9, 74.1, 89.3, 108.5]):
 *  0 title
 *  1 screw cylinder with thread · rotation arrow · 1 turn → 1 PITCH
 *  2 gentle ramp (thread unwrapped) · circular drum with 100 divisions
 *  3 one turn = one pitch, shared across the divisions
 *  4 arithmetic: 1 mm ÷ 100 = 0.01 mm — mm-wide on the rim
 *  5 the ramp walk: long walk → rise 1 cm
 *  6 measure the walk instead · rotation → tiny linear motion
 *  7 two chips: vernier / screw · both are PRECISION AMPLIFIERS
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | cylinder x120..360 y100..150 + threads · rot arrow x~96 · adv arrow (370,125)→(430,125) · label st x450 bl 130
 *  b2 | ramp M600 190 L1000 190 L1000 160 · note cx800 bl 215 · drum c(220,300) r55 · label cx220 bl 386
 *  b3 | script 14 st x300 bl 290
 *  b4 | sans 17 st x340 bl 330 · green 13 st x340 bl 360
 *  b5 | ramp M120 470 L640 470 L640 445 · walk label cx380 bl 492 · rise arrow x652 + "1 cm" st x662 bl 462
 *  b6 | green 14 st x700 bl 460 · amber 13 st x700 bl 490
 *  b7 | chips y515..551 x120..510 / x560..960 · green mid bl 585
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
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const threads: string[] = [];
  for (let x = 130; x <= 340; x += 24) threads.push(`M ${x} 100 L ${x + 14} 150`);

  const drumTicks: string[] = [];
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const c = Math.cos(a), s = Math.sin(a);
    drumTicks.push(`M ${220 + 48 * c} ${300 + 48 * s} L ${220 + 55 * c} ${300 + 55 * s}`);
  }

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={54} size={24} fill={INK} script>
          {t(
            "the screw's superpower — a very gentle ramp",
            "screw ki mahashakti — ek bahut halka dhalaan"
          )}
        </T>
      </Fade>

      {/* beat 1 — one turn, one pitch */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d={"M 120 100 h 240 v 50 h -240 z " + threads.join(" ")}
        stroke={INK}
        sw={1.8}
        dur={1.2}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d="M 98 110 a 18 18 0 1 0 10 28 M 108 138 l -8 2 M 108 138 l 0 -8"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d={arrowD(372, 125, 432, 125)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={450} y={130} size={15} fill={AMBER_DARK} script anchor="start">
          {t("one turn → one PITCH forward", "ek chakkar → ek PITCH aage")}
        </T>
      </Fade>

      {/* beat 2 — ramp + drum */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 620 190 L 1000 190 L 1000 162 z"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={810} y={215} size={13} fill={MUTED} script>
          {t(
            "the thread = this ramp, wrapped round a cylinder",
            "choodi = yahi dhalaan, belan par lipta hua"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 6)}
        d={`M 165 300 A 55 55 0 1 1 275 300 A 55 55 0 1 1 165 300 ` + drumTicks.join(" ")}
        stroke={INK}
        sw={1.6}
        dur={1.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={220} y={386} size={13} fill={INK} script>
          {t("circular scale — 100 divisions", "circular scale — 100 divisions")}
        </T>
      </Fade>

      {/* beat 3 — the move */}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={300} y={290} size={14} fill={INK} script anchor="start">
          {t(
            "one full turn = one pitch — shared across all 100 divisions",
            "ek poora chakkar = ek pitch — sau divisions mein bant gaya"
          )}
        </T>
      </Fade>

      {/* beat 4 — the arithmetic */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={340} y={330} size={17} fill={INK} weight={700} anchor="start">
          {t("pitch 1 mm ÷ 100 = 0.01 mm per division", "pitch 1 mm ÷ 100 = 0.01 mm har division")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={340} y={360} size={13} fill={GREEN} script anchor="start">
          {t(
            "on the drum's rim that division is mm-wide — perfectly easy to see",
            "drum ke kinare wahi division kai mm chaudi — dekhna bilkul aasaan"
          )}
        </T>
      </Fade>

      {/* beat 5 — the gentle ramp walk */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 120 470 L 640 470 L 640 445 z"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={1}
      />
      <Draw on={beat >= 5} delay={dl(5, 4)} d={arrowD(652, 470, 652, 447)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={666} y={462} size={13} fill={GREEN} script anchor="start">1 cm</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={380} y={492} size={13} fill={MUTED} script>
          {t("a long, easy-to-measure walk", "lambi, aasaani se napne waali chaal")}
        </T>
      </Fade>

      {/* beat 6 — measure the walk instead */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={720} y={460} size={14} fill={GREEN} script anchor="start">
          {t("measure the walk instead — easy", "chaal naapo — aasaan")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={720} y={490} size={13} fill={AMBER_DARK} script anchor="start">
          {t("rotation → tiny, readable linear motion", "ghumaav → nanhi, padhne laayak seedhi chaal")}
        </T>
      </Fade>

      {/* beat 7 — precision amplifiers */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={120} y={515} w={390} h={36} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("vernier: hard judgement → easy one", "vernier: mushkil faisla → aasaan")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <Chip x={560} y={515} w={400} h={36} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("screw: tiny distance → large rotation", "screw: nanhi doori → bada ghumaav")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={540} y={585} size={14} fill={GREEN} script>
          {t(
            "both are PRECISION AMPLIFIERS — blowing up what the eye can't see",
            "dono PRECISION AMPLIFIERS hain — jo aankh nahi dekh sakti use bada kar dete"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
