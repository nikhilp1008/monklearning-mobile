/**
 * Ch05 · Section 1 — "Two vectors in, one number out"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.1, 29.4, 54.3, 70.7, 87.7, 106.5, 126.1] · dur 141):
 *  0 title + contract subtitle
 *  1 the dot machine: two arrows in → box → one plain number out
 *  2 trolley demo: push at an angle — forward part moves it, rest presses down
 *  3 amber note: the operation physics needed (+ arrow onto the green part)
 *  4 formula box: A·B = A B cos θ, underlines for sizes / alignment
 *  5 cosine scale: alignment meter from +1 to −1
 *  6 green chips: W = F·d, P = F·v
 *  7 red verdict: output is a scalar — crossed-out vector-answer chip
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84
 *  b1 | "A" bl140 / "B" bl205 st x95 · arrows (125,135)→(210,158) / (125,202)→(210,180)
 *     | box x215..335 y130..205, "A · B" cx275 bl174 · out arrow (340,171)→(440,171)
 *     | numeral "12" cx460 bl180 (box 445..475) · sub cx460 bl218 (x350..570)
 *  b2 | floor x100..655 y440 · body x200..310 y385..424 · load x225..285 y360..385
 *     | wheels c(225,432)/(285,432) r8 · force (125,318)→(196,386) · label st x100 bl292
 *     | red arrow (255,318)→(255,355) · red label st x275 bl330 (x275..447)
 *     | green arrow (340,418)→(440,418) · green label cx400 bl398 (x321..479)
 *  b3 | amber 3 lines cx570 bl 316/340/364 (x466..678) · arrow (520,432)→(450,419)
 *  b4 | box x680..1020 y120..185 · formula cx850 bl160 · underlines y172/174
 *     | labels "sizes" cx862 bl212 · "alignment" cx945 bl212
 *  b5 | caption cx860 bl290 · line (700,324)-(1020,324) ticks x700/860/1020
 *     | values bl356 · θ-labels bl380
 *  b6 | chips x690..840 / x870..1020 y398..434 · caption cx855 bl462
 *  b7 | bar x66 y500..558 · l1 st x84 bl520 · chip x610..760 y506..544 + mini arrow + cross
 *     | green note st x790 bl530 · l2 st x84 bl548
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
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("The Scalar (Dot) Product", "The Scalar (Dot) Product")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "two arrows in, one number out — that is the whole contract",
            "do arrows andar, ek number bahar — bas yehi poora contract hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the dot machine */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={95} y={140} size={16} fill={INK} anchor="start" weight={700}>
          A
        </T>
        <T x={95} y={205} size={16} fill={INK} anchor="start" weight={700}>
          B
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(125, 135, 210, 158)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={arrowD(125, 202, 210, 180)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 2.8)}
          d="M 227 130 h 96 q 12 0 12 12 v 51 q 0 12 -12 12 h -96 q -12 0 -12 -12 v -51 q 0 -12 12 -12"
          stroke={INK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={275} y={174} size={18} fill={INK} weight={800}>
          A · B
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6.5)} d={arrowD(340, 171, 440, 171)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 7.5)}>
        <T x={460} y={180} size={30} fill={INK} weight={800}>
          12
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10.5)}>
        <T x={460} y={218} size={12.5} fill={MUTED} script>
          {t("a plain number — no direction attached", "plain number — koi direction nahi")}
        </T>
      </Fade>

      {/* beat 2 — trolley in the corridor */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 100 440 H 655" stroke={INK} sw={2.6} dur={0.7} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d="M 200 424 v -33 q 0 -6 6 -6 h 98 q 6 0 6 6 v 33"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.4)}
        d="M 225 385 v -19 q 0 -6 6 -6 h 48 q 6 0 6 6 v 19"
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <Circle cx={225} cy={432} r={8} fill="none" stroke={INK} strokeWidth={2.2} />
        <Circle cx={285} cy={432} r={8} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.5)} d={arrowD(125, 318, 196, 386)} stroke={AMBER_DARK} sw={3} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 7.8)}>
        <T x={100} y={292} size={13} fill={AMBER_DARK} script anchor="start">
          {t("you push at an angle", "aap angle se push karte ho")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 12)} d={arrowD(340, 418, 440, 418)} stroke={GREEN} sw={3} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 13.2)}>
        <T x={400} y={398} size={12.5} fill={GREEN} script>
          {t("only this part moves it", "sirf yehi hissa chalata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 17.5)} d={arrowD(255, 318, 255, 355)} stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 18.8)}>
        <T x={275} y={330} size={13} fill={RED} script anchor="start">
          {t("wasted — presses it down", "waste — neeche dabata hai")}
        </T>
      </Fade>

      {/* beat 3 — the operation physics needed */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={570} y={316} size={13} fill={AMBER_DARK} script>
          {t("needed: one operation that", "chahiye thi: ek aisi operation jo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={570} y={340} size={13} fill={AMBER_DARK} script>
          {t("extracts the along-part itself", "along-wala hissa khud nikale")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={570} y={364} size={13} fill={AMBER_DARK} script>
          {t("and scales it by the sizes", "aur sizes se scale kar de")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 9.5)} d={arrowD(520, 432, 450, 419)} stroke={AMBER_DARK} sw={2} dur={0.4} />

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.6)}
          d="M 692 120 h 316 q 12 0 12 12 v 41 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
          stroke={INK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={850} y={160} size={22} fill={INK} weight={800}>
          A · B = A B cos θ
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6)} d="M 838 172 h 34" stroke={AMBER} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 6.8)}>
        <T x={848} y={212} size={13} fill={AMBER_DARK} script>
          {t("sizes", "sizes")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 8)} d="M 875 172 h 49" stroke={AMBER} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 8.8)}>
        <T x={935} y={212} size={13} fill={AMBER_DARK} script>
          {t("alignment", "alignment")}
        </T>
      </Fade>

      {/* beat 5 — the alignment meter */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={860} y={290} size={13.5} fill={AMBER_DARK} script>
          {t("cos θ — a pure alignment meter", "cos θ — ek pure alignment meter")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d="M 700 324 H 1020" stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 5} delay={dl(5, 3.2)} d="M 700 316 v 16" stroke={INK} sw={2.2} dur={0.25} />
      <Draw on={beat >= 5} delay={dl(5, 3.5)} d="M 860 316 v 16" stroke={INK} sw={2.2} dur={0.25} />
      <Draw on={beat >= 5} delay={dl(5, 3.8)} d="M 1020 316 v 16" stroke={INK} sw={2.2} dur={0.25} />
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <T x={700} y={356} size={15} fill={INK} weight={700}>
          +1
        </T>
        <T x={860} y={356} size={15} fill={INK} weight={700}>
          0
        </T>
        <T x={1020} y={356} size={15} fill={INK} weight={700}>
          −1
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.5)}>
        <T x={702} y={380} size={12} fill={GREEN} script>
          {t("θ = 0°, full", "θ = 0°, poora")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={860} y={380} size={12} fill={AMBER_DARK} script>
          θ = 90°
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11.5)}>
        <T x={1014} y={380} size={12} fill={RED} script>
          θ = 180°
        </T>
      </Fade>

      {/* beat 6 — why work and power are dot products */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={690} y={398} w={150} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          W = F · d
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <Chip x={870} y={398} w={150} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          P = F · v
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={855} y={462} size={12.5} fill={GREEN} script>
          {t(
            "physics only cares about the along-the-motion slice",
            "physics ko sirf along-the-motion slice se matlab hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the scalar promise */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 500 v 58" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "the output is a SCALAR — it has a sign, but NO direction",
            "output SCALAR hai — sign hota hai, par direction NAHI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <Chip x={610} y={506} w={150} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          A · B = C
        </Chip>
        <Draw on={beat >= 7} delay={dl(7, 4.5)} d={arrowD(701, 512, 715, 512)} stroke={INK} sw={1.8} dur={0.2} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 6)} d={crossD(610, 506, 150, 38)} stroke={RED} sw={3} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 7.5)}>
        <T x={790} y={530} size={13} fill={GREEN} script anchor="start">
          {t("it is just a number", "ye sirf ek number hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9.5)}>
        <T x={84} y={548} size={13} fill={RED} script anchor="start">
          {t(
            "an arrow on top of a dot product is wrong — examiners notice",
            "dot product ke upar arrow likhna galat hai — examiner pakadta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
