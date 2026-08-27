/**
 * Ch03 · Section 2 — "How two arrows combine: the triangle and parallelogram laws"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.8, 31.2, 46.9, 54.0, 74.5, 97.5, 119.9]):
 *  0 title
 *  1 triangle law: a head-to-tail b, closing side
 *  2 parallelogram law: common tail, diagonal
 *  3 make it physical — stalled rickshaw appears
 *  4 aligned pushes: 300 + 200 = full 500 N
 *  5 side push: lurches at angle, < 500 N
 *  6 green note: the cart computes the law for you
 *  7 red note: θ is tail-to-tail, 0°–180° (+ glyph)
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | title cx540 bl 52 s21 · underline M340 66 h400
 *  b1 | header st x84 bl 118 · a (110,230)→(250,230) lbl cx180 bl 251 ·
 *       b (250,230)→(320,150) lbl st x300 bl 198 · R (110,230)→(320,150)
 *       lbl end x215 bl 172 · caption st x84 bl 288
 *  b2 | header st x564 bl 118 · O (600,230) · a→(760,230) lbl cx680 bl 251 ·
 *       b→(670,150) lbl end x625 bl 190 · dashed →(830,150) ·
 *       diag O→(830,150) lbl st x840 bl 145 · caption st x564 bl 292
 *  b3 | header st x84 bl 330 · rickshaw1 box x120..280 y360..420, wheels
 *       (160,430)/(240,430) r10 · lbl cx200 bl 468
 *  b4 | 300N (60,374)→(112,374) lbl cx86 bl 358 · 200N (60,404)→(112,404)
 *       lbl cx86 bl 426 · result (288,390)→(392,390) · chip x372 y330 w160 h34
 *  b5 | rickshaw2 box x600..760 y360..420 wheels (640,430)/(720,430) ·
 *       300N (540,388)→(592,388) lbl cx566 bl 372 · 200N (686,304)→(686,352)
 *       lbl st x698 bl 332 · lurch (764,384)→(856,336) · "< 500 N" st x868 bl 340 ·
 *       caption cx680 bl 468
 *  b6 | bar M66 480 v46 · lines st x84 bl 498 / 522
 *  b7 | bar M66 536 v50 · lines st x84 bl 556 / 582 · glyph tail (930,582):
 *       →(1002,582), →(972,534), arc r30, θ at (970,564)
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

export default function Ch03Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("How do two arrows become ONE?", "Do arrows EK kaise bante hain?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)} d="M 340 66 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — triangle law */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={15} fill={INK} script anchor="start">
          {t("TRIANGLE LAW — head to tail", "TRIANGLE LAW — head to tail")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d={arrowD(110, 230, 250, 230)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={180} y={251} size={14} fill={INK} weight={700}>a</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d={arrowD(250, 230, 320, 150)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 4.7)}>
        <T x={300} y={198} size={14} fill={INK} weight={700} anchor="start">b</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 7)} d={arrowD(110, 230, 320, 150)} stroke={GREEN} sw={2.8} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 8.2)}>
        <T x={215} y={172} size={14} fill={GREEN} weight={800} anchor="end">a+b</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={84} y={288} size={12} fill={INK_LIGHT} script anchor="start">
          {t("the closing side = resultant", "band karne wali side = resultant")}
        </T>
      </Fade>

      {/* beat 2 — parallelogram law */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={564} y={118} size={15} fill={INK} script anchor="start">
          {t("PARALLELOGRAM — common tail", "PARALLELOGRAM — common tail se")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Circle cx={600} cy={230} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d={arrowD(600, 230, 760, 230)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={680} y={251} size={14} fill={INK} weight={700}>a</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d={arrowD(600, 230, 670, 150)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={625} y={190} size={14} fill={INK} weight={700} anchor="end">b</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.2)} d="M 760 230 L 830 150 M 670 150 L 830 150" stroke={MUTED} sw={1.6} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 6.6)} d={arrowD(600, 230, 830, 150)} stroke={GREEN} sw={2.8} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 7.8)}>
        <T x={840} y={145} size={14} fill={GREEN} weight={800} anchor="start">a+b</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 11)}>
        <T x={564} y={292} size={12} fill={INK_LIGHT} script anchor="start">
          {t("same-point diagonal = resultant", "usi point ka diagonal = resultant")}
        </T>
      </Fade>

      {/* beat 3 — make it physical */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={84} y={330} size={13} fill={AMBER_DARK} script anchor="start">
          {t("two pushes on a stalled auto-rickshaw", "band pade auto-rickshaw par do dhakke")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d="M 132 360 h 136 q 12 0 12 12 v 36 q 0 12 -12 12 h -136 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <Circle cx={160} cy={430} r={10} fill="none" stroke={INK} strokeWidth={2.2} />
        <Circle cx={240} cy={430} r={10} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={200} y={468} size={12} fill={MUTED} script>
          {t("case 1: both from behind", "case 1: dono peechhe se")}
        </T>
      </Fade>

      {/* beat 4 — aligned: full 500 N */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(60, 374, 112, 374)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={86} y={358} size={12} fill={AMBER_DARK} weight={700}>300 N</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.4)} d={arrowD(60, 404, 112, 404)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3.1)}>
        <T x={86} y={426} size={12} fill={AMBER_DARK} weight={700}>200 N</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 5)} d={arrowD(288, 390, 392, 390)} stroke={GREEN} sw={3} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 6.5)}>
        <Chip x={372} y={330} w={160} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t("full 500 N", "poore 500 N")}
        </Chip>
      </Fade>

      {/* beat 5 — side push: less than 500 */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 612 360 h 136 q 12 0 12 12 v 36 q 0 12 -12 12 h -136 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Circle cx={640} cy={430} r={10} fill="none" stroke={INK} strokeWidth={2.2} />
        <Circle cx={720} cy={430} r={10} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d={arrowD(540, 388, 592, 388)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={566} y={372} size={12} fill={AMBER_DARK} weight={700}>300 N</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.8)} d={arrowD(686, 304, 686, 352)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={698} y={332} size={12} fill={AMBER_DARK} weight={700} anchor="start">200 N</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 6.5)} d={arrowD(764, 384, 856, 336)} stroke={GREEN} sw={3} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 7.6)}>
        <T x={868} y={340} size={15} fill={RED} weight={800} anchor="start">&lt; 500 N</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <T x={680} y={468} size={12} fill={MUTED} script>
          {t("some push is spent TURNING, not driving", "kuchh dhakka MODNE mein gaya, aage nahi")}
        </T>
      </Fade>

      {/* beat 6 — the cart computed it */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 480 v 46" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={498} size={13} fill={GREEN} script anchor="start">
          {t(
            "nobody calculated — the cart computed the parallelogram law for you",
            "kisi ne calculation nahi ki — cart ne parallelogram law khud compute kiya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={84} y={522} size={13} fill={GREEN} script anchor="start">
          {t(
            "every vector sum is this same question: two arrows → one",
            "har vector sum yahi sawaal hai: do arrows → ek"
          )}
        </T>
      </Fade>

      {/* beat 7 — the tail-to-tail bookkeeping */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 536 v 50" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={556} size={13} fill={RED} script anchor="start">
          {t(
            "θ in every formula: between vectors drawn TAIL-TO-TAIL (0° to 180°)",
            "har formula ka θ: vectors ko TAIL-TO-TAIL khinch kar (0° se 180°)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={582} size={13} fill={RED} script anchor="start">
          {t(
            "measure it head-to-tail and every number downstream is wrong",
            "head-to-tail se naapa → aage ka har number galat"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4)} d={arrowD(930, 582, 1002, 582)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 4.7)} d={arrowD(930, 582, 972, 534)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 5.6)} d="M 960 582 A 30 30 0 0 0 949.7 559.4" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 6.2)}>
        <T x={970} y={564} size={13} fill={AMBER_DARK} weight={700}>θ</T>
      </Fade>
    </Scene>
  );
}
