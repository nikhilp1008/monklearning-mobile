/**
 * Ch05 · Section 2 — "The shadow picture: how the angle sets the sign"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.1, 36.5, 53.2, 66.7, 76.3, 92.2, 108.4, 123] · dur 147.8;
 *        hi beats 4→5 are 1s apart — beat 4 keeps delays ≤ 0.8):
 *  0 title + sun-image subtitle
 *  1 main demo: sun + rays, ground B, tilted A, dashed drop, amber shadow
 *  2 θ arc + chip "shadow = A cos θ" + projection/question lines
 *  3 chip "A·B = (A cos θ) × B" + shadow×ground line
 *  4 header: three cases — the angle decides
 *  5 case card θ=0 (full shadow, +AB)
 *  6 case card θ=90 (shadow = point, 0)
 *  7 case card θ=180 (flipped shadow, −AB)
 *  8 verdict: sign story + force ⊥ motion does no work
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84 (x325..755)
 *  b1 | sun c(290,112) r18 · rays x266/290/314 y140..188 · B (140,320)→(560,320)
 *     | A (140,320)→(400,185) · "A" cx250 bl240 · drop dash (400,185)-(400,318)
 *     | shadow (140,324)-(400,324) sw5 · "the shadow" cx265 bl352 · "B" cx480 bl350
 *  b2 | θ arc r60 at origin, "θ" cx218 bl304 · chip x660..880 y140..178
 *     | lines cx770 bl205 / bl232
 *  b3 | chip x660..920 y255..295 · line cx790 bl322
 *  b4 | header cx540 bl390 (x397..683)
 *  b5 | card1 cx200: "θ=0°" bl428 · A (120,452)→(260,452) · B (120,470)→(280,470)
 *     | shadow (120,476)-(260,476) · chip x140..270 y492..526
 *  b6 | card2 cx550: "θ=90°" cx560 bl428 · A (505,468)→(505,402) · B (475,470)→(625,470)
 *     | point (505,476) r3.5 · chip x475..605 y492..526
 *  b7 | card3 cx875: "θ=180°" bl428 · A (940,452)→(810,452) · B (800,470)→(950,470)
 *     | shadow arrow (940,476)→(806,476) · chip x810..940 y492..526
 *  b8 | lines cx540 bl558 / bl582
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

export default function Ch05Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("The Shadow Picture", "The Shadow Picture")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "the sun low on the horizon, your shadow on the ground — that image is the whole operation",
            "sun neeche horizon par, aapki shadow zameen par — yehi image poori operation hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — sun, ground B, vector A, the shadow */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 272 112 a 18 18 0 1 0 36 0 a 18 18 0 1 0 -36 0"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.6}
      />
      <Draw on={beat >= 1} delay={dl(1, 2)} d={arrowD(266, 140, 266, 180)} stroke={AMBER} sw={2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={arrowD(290, 145, 290, 188)} stroke={AMBER} sw={2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d={arrowD(314, 140, 314, 180)} stroke={AMBER} sw={2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 5)} d={arrowD(140, 320, 560, 320)} stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 6.2)}>
        <T x={480} y={350} size={13} fill={INK} script>
          {t("B = the ground", "B = zameen")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 8.5)} d={arrowD(140, 320, 400, 185)} stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 9.5)}>
        <T x={250} y={240} size={16} fill={INK} weight={700}>
          A
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 12)}
        d="M 400 190 v 16 m 0 12 v 16 m 0 12 v 16 m 0 12 v 16 m 0 12 v 14"
        stroke={MUTED}
        sw={1.8}
        dur={0.6}
      />
      <Draw on={beat >= 1} delay={dl(1, 13.5)} d="M 140 324 H 400" stroke={AMBER} sw={5} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 15)}>
        <T x={265} y={352} size={13} fill={AMBER_DARK} script>
          {t("the shadow", "shadow")}
        </T>
      </Fade>

      {/* beat 2 — the projection */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 200 320 A 60 60 0 0 0 193 292" stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={218} y={304} size={15} fill={INK} weight={700}>
          θ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Chip x={660} y={140} w={220} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          shadow = A cos θ
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={770} y={205} size={13} fill={AMBER_DARK} script>
          {t("the projection of A onto B", "projection of A onto B")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9.5)}>
        <T x={770} y={232} size={13} fill={MUTED} script>
          {t("how much of A points B's way?", "poore A mein se kitna B ki taraf?")}
        </T>
      </Fade>

      {/* beat 3 — scale the shadow by the ground */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={660} y={255} w={260} h={40} fill={CREAM} stroke={INK} textFill={INK} size={17} script={false}>
          A · B = (A cos θ) × B
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={790} y={322} size={13} fill={GREEN} script>
          {t("shadow length × ground length", "shadow ki lambai × zameen ki lambai")}
        </T>
      </Fade>

      {/* beat 4 — three cases (hi: only 1s before beat 5 — keep it instant) */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={390} size={14} fill={INK} script>
          {t(
            "three cases — the angle decides all three",
            "teen cases — teeno ka faisla angle karta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — θ = 0°, full shadow */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={200} y={428} size={13} fill={AMBER_DARK} script>
          θ = 0°
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={arrowD(120, 470, 280, 470)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d={arrowD(120, 452, 260, 452)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d="M 120 476 H 260" stroke={AMBER} sw={4.5} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <Chip x={140} y={492} w={130} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          + A B, max
        </Chip>
      </Fade>

      {/* beat 6 — θ = 90°, shadow is a point */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={560} y={428} size={13} fill={AMBER_DARK} script>
          θ = 90°
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d={arrowD(475, 470, 625, 470)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d={arrowD(505, 468, 505, 402)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <Circle cx={505} cy={476} r={3.5} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.5)}>
        <Chip x={475} y={492} w={130} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          0, exactly
        </Chip>
      </Fade>

      {/* beat 7 — θ = 180°, shadow flips */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={875} y={428} size={13} fill={AMBER_DARK} script>
          θ = 180°
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d={arrowD(800, 470, 950, 470)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={arrowD(940, 452, 810, 452)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 3.4)} d={arrowD(940, 476, 806, 476)} stroke={AMBER} sw={4.5} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 5.5)}>
        <Chip x={810} y={492} w={130} h={34} fill={CREAM} stroke={RED} textFill={INK} size={15} script={false}>
          − A B
        </Chip>
      </Fade>

      {/* beat 8 — the sign story */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={540} y={558} size={13} fill={GREEN} script>
          {t(
            "+ aligned · 0 perpendicular · − opposed — the whole sign story of work",
            "aligned + · perpendicular 0 · opposed − — work ki poori sign story"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={540} y={582} size={13} fill={GREEN} script>
          {t(
            "force ⊥ motion does no work — the shadow simply vanished",
            "motion ke ⊥ force koi work nahi karta — shadow bas gayab ho gayi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
