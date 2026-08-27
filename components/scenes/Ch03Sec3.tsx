/**
 * Ch03 · Section 3 — "Resolution: splitting one slanted vector into two clean ones"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.9, 23.3, 36.2, 53.3, 78.1, 102.8, 120.4]):
 *  0 title
 *  1 addition backwards: pieces along YOUR directions
 *  2 chip: almost always x ⊥ y
 *  3 resolution diagram: F → Fx + Fy, θ arc
 *  4 sledge: rope at angle — drag forward + lift
 *  5 green note: perpendicular pieces don't interfere
 *  6 components change with axes, the vector doesn't
 *  7 verdict: choose axes well → RESOLVE
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | title cx540 bl 52 · underline M340 66 h400
 *  b1 | line st x84 bl 94 · underline M84 104 h420
 *  b2 | chip x700 y78 w200 h32 · caption cx800 bl 136 s11
 *  b3 | x-axis (140,420)→(490,420) "x" st (500,426) · y-axis (200,455)→(200,180)
 *       "y" st (206,174) · F (200,420)→(430,240) lbl (290,318) ·
 *       dashed (430,240)→(430,420) / →(200,240) · Fx (200,420)→(430,420)
 *       lbl cx315 bl 444 · Fy (200,420)→(200,240) lbl end x188 bl 335 ·
 *       θ arc r40 lbl (252,404) · caption cx300 bl 480 s12
 *  b4 | ground M560 468 h460 · box x600..770 y400..445 · rope (765,400)→(955,295)
 *       hand dot (955,295) · fwd (780,425)→(900,425) lbl cx860 bl 408 s12 ·
 *       lift (650,392)→(650,300) lbl end x638 bl 340 s12 · caption cx700 bl 496
 *  b5 | bar M66 512 v44 · lines st x84 bl 530 / 554
 *  b6 | line st x84 bl 578
 *  b7 | line st x740 bl 540 s12 · line st x740 bl 566 s15 · underline M740 576 h200
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Resolution: run the parallelogram law BACKWARDS",
            "Resolution: parallelogram law ko ULTA chalao"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)} d="M 340 66 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — pieces along YOUR directions */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={94} size={13} fill={INK} script anchor="start">
          {t(
            "one vector → pieces along directions YOU choose",
            "ek vector → tukde un directions mein jo AAP chunte ho"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 84 104 h 380" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 2 — x ⊥ y */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Chip x={700} y={78} w={200} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14}>
          {t("almost always: x ⊥ y", "hamesha jaisa: x ⊥ y")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={800} y={136} size={11} fill={MUTED} script>
          {t("perpendicular is the magic word", "perpendicular hi magic word hai")}
        </T>
      </Fade>

      {/* beat 3 — the resolution diagram */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(140, 420, 490, 420)} stroke={INK_LIGHT} sw={1.8} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(200, 455, 200, 180)} stroke={INK_LIGHT} sw={1.8} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={500} y={426} size={13} fill={INK_LIGHT} anchor="start">x</T>
        <T x={206} y={174} size={13} fill={INK_LIGHT} anchor="start">y</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={arrowD(200, 420, 430, 240)} stroke={INK} sw={3} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={290} y={318} size={15} fill={INK} weight={800}>F</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4.4)} d="M 430 240 V 420 M 430 240 H 200" stroke={MUTED} sw={1.4} dur={0.8} />
      <Draw on={beat >= 3} delay={dl(3, 5.6)} d={arrowD(200, 420, 430, 420)} stroke={AMBER_DARK} sw={3} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 6.5)}>
        <T x={315} y={444} size={14} fill={AMBER_DARK} weight={700}>Fx</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 7.4)} d={arrowD(200, 420, 200, 240)} stroke={GREEN} sw={3} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 8.3)}>
        <T x={188} y={335} size={14} fill={GREEN} weight={700} anchor="end">Fy</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 9.4)} d="M 240 420 A 40 40 0 0 0 231.6 395.4" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={252} y={404} size={12} fill={AMBER_DARK} weight={700}>θ</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={300} y={480} size={12} fill={INK_LIGHT} script>
          {t("nothing lost, nothing added", "na kuchh khoya, na kuchh juda")}
        </T>
      </Fade>

      {/* beat 4 — the sledge */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 560 468 h 460" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.4)}
        d="M 612 400 h 146 q 12 0 12 12 v 21 q 0 12 -12 12 h -146 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d="M 765 400 L 955 295" stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <Circle cx={955} cy={295} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.5)} d={arrowD(780, 425, 900, 425)} stroke={GREEN} sw={3} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={860} y={408} size={12} fill={GREEN} script>
          {t("drags it forward", "aage ghaseta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 7)} d={arrowD(650, 392, 650, 300)} stroke={AMBER_DARK} sw={3} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 7.9)}>
        <T x={638} y={340} size={12} fill={AMBER_DARK} script anchor="end">
          {t("tries to LIFT it", "UPAR uthata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={700} y={496} size={12} fill={AMBER_DARK} script>
          {t("one pull, two different jobs", "ek khinchav, do alag kaam")}
        </T>
      </Fade>

      {/* beat 5 — why bother */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 512 v 44" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={530} size={13} fill={GREEN} script anchor="start">
          {t(
            "perpendicular pieces don't interfere — each axis is its own arithmetic",
            "perpendicular tukde dakhal nahi dete — har axis apna alag hisaab"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={84} y={554} size={13} fill={GREEN} script anchor="start">
          {t(
            "no parallelogram, no cosine rule — just numbers on a line",
            "na parallelogram, na cosine rule — bas line par numbers"
          )}
        </T>
      </Fade>

      {/* beat 6 — components vs the vector */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={84} y={578} size={13} fill={INK} script anchor="start">
          {t(
            "rotate the axes: components change, the VECTOR doesn't budge",
            "axes ghumao: components badalte hain, VECTOR wahi rehta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the gift */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={740} y={540} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "choose axes that make half the terms vanish",
            "aise axes chuno ki aadhe terms gayab ho jayen"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={740} y={566} size={15} fill={GREEN} script anchor="start" weight={700}>
          {t("when in doubt → RESOLVE", "doubt ho → RESOLVE karo")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 6)} d="M 740 576 h 200" stroke={GREEN} sw={2.2} dur={0.5} />
    </Scene>
  );
}
