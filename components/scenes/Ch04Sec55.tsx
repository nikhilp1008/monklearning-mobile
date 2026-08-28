/**
 * Ch04 · Section 55 — "Worked Example 2 [NEET Speed Trap]: the flat curve"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.2, 25.0, 45.6, 70.4, 95.2, 96.2]):
 *  0 title
 *  1 problem + find
 *  2 figure: flat road, car, N vertical (crossed as unhelpful), friction inward
 *  3 red margin: trap 1 — dragging in mass
 *  4 formula box: v_max = √(μrg) = 10 m/s (both traps resolved)
 *  5 amber chip: mass-free eliminator + perfect-square tell
 *  6 green closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  fig | road M100 320 H400 · car x180..260 y285..320 · N arr (220,285)→(220,230)
 *    "N"(228,222 st) cross over N via crossD · f arr (180,300)→(120,300) "f"(148,282 st)
 *    caption cx250 bl 355
 *  b3 | bar x66 y385..455 · lines st x84 bl 405 / 431
 *  b4 box x560..1000 y185..235 bl 218 · line st x560 bl 165
 *  b5 chip x230..850 y470..510
 *  b6 line cx540 bl 550
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
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 2 [NEET Speed Trap] — the flat curve",
            "Example 2 [NEET Speed Trap] — flat curve"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "flat, unbanked curve r = 20 m · μ = 0.5 · g = 10",
            "flat, unbanked curve r = 20 m · μ = 0.5 · g = 10"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: max speed without skidding",
            "nikaalo: bina fisle max speed"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 100 320 H 400" stroke={INK} sw={2.4} dur={0.6} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d={`M 180 285 h 80 v 35 h -80 z ${circleD(200, 328, 8)} ${circleD(240, 328, 8)}`}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d={arrowD(220, 285, 220, 230)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.4)}
        d={crossD(210, 200, 20, 20)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.2)}
        d={arrowD(180, 300, 120, 300)}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={228} y={222} size={12} fill={GREEN} weight={700} anchor="start">
          N
        </T>
        <T x={148} y={292} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          f
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={250} y={355} size={13} fill={RED} script>
          {t(
            "N points straight up — cannot help the turn at all",
            "N seedha upar — mod mein zara bhi madad nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 1 */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 66 385 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={405} size={14} fill={RED} script anchor="start">
          {t(
            "trap 1: dragging in the car's mass — it was never needed",
            "trap 1: car ka mass ghaseet lena — kabhi zaroorat hi nahi thi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={84} y={431} size={14} fill={GREEN} script anchor="start">
          {t(
            "μmg = mv²⁄r — m sits on both sides and cancels cleanly",
            "μmg = mv²⁄r — m dono taraf hai, saaf cancel"
          )}
        </T>
      </Fade>

      {/* beat 4 — the two traps resolved */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={560} y={165} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "trap 2: 100 is v², NOT v — root it",
            "trap 2: 100 v² hai, v NAHI — root lo"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d="M 572 185 h 416 q 12 0 12 12 v 26 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={780} y={218} size={17} fill={INK} weight={800}>
          v_max = √(μrg) = √100 = 10 m⁄s
        </T>
      </Fade>

      {/* beat 5 — bank both defences */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Chip x={230} y={470} w={620} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14}>
          {t(
            "mass in an option? eliminate on sight · μrg a perfect square? you're on track",
            "option mein mass? dekhte hi hatao · μrg perfect square? sahi raaste par ho"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — closing */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={550} size={13} fill={GREEN} script>
          {t(
            "10 m⁄s — mass-free and root-checked, both traps behind you",
            "10 m⁄s — mass-free aur root-checked, dono traps peeche"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
