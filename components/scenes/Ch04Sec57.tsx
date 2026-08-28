/**
 * Ch04 · Section 57 — "Worked Example 4 [JEE Advanced]: the well of death"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.3, 34.3, 59.1, 70.9, 90.9, 112.0, 128.8]):
 *  0 title
 *  1 problem + find
 *  2 figure: vertical cylinder wall, rider, N horizontal inward, mg down,
 *    friction UP the wall + "roles swapped" note
 *  3 horizontal equation: N = mv²/r
 *  4 vertical equation + condition: f = mg, f ≤ μN
 *  5 combine → v_min = √(gr/μ) hero box
 *  6 numbers → ≈7.07 m/s box
 *  7 red margin: counterintuitive chain — faster = safer, mass cancels
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  L fig | wall M100 180 V420 · rider c(150,300) r10 body ·
 *    N arr (160,300)→(230,300) "N"(238,294 st) · mg arr (150,315)→(150,380) "mg"(160,368 st) ·
 *    f arr (135,315)→(135,260) "f"(115,264 st) · caption cx220 bl 445
 *  R col x600..1044 | b3 bl 175 · b4 bl 210 / 240 ·
 *    b5 box x600..1030 y270..316 bl 300 · b6 box x600..1030 y336..380 bl 366
 *  b7 | bar x66 y460..570 · lines st x84 bl 480 / 506 / 532 / 558
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — the well of death",
            "Example 4 [JEE Advanced] — maut ka kuaan"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "rider on the inside of a vertical wall, r = 3 m · μ = 0.6 · g = 10",
            "vertical wall ke andar rider, r = 3 m · μ = 0.6 · g = 10"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: minimum speed to avoid sliding down",
            "nikaalo: neeche na fisalne ki minimum speed"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure, roles swapped */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 100 180 V 420" stroke={INK} sw={2.6} dur={1} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d={`${circleD(150, 300, 10)} M 150 310 V 340 M 150 318 L 136 330 M 150 318 L 164 330 M 150 340 L 138 360 M 150 340 L 162 360`}
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d={arrowD(160, 300, 230, 300)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d={arrowD(150, 315, 150, 380)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.8)}
        d={arrowD(135, 315, 135, 260)}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={238} y={294} size={13} fill={GREEN} weight={700} anchor="start">
          N
        </T>
        <T x={160} y={368} size={13} fill={RED} weight={700} anchor="start">
          mg
        </T>
        <T x={112} y={264} size={13} fill={AMBER_DARK} weight={700} anchor="end">
          f
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.5)}>
        <T x={220} y={445} size={12} fill={AMBER_DARK} script>
          {t(
            "roles swapped: N turns him in a circle, friction holds him UP",
            "kaam badle: N ghumata hai, friction UPAR thaame rakhti hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — horizontal */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={600} y={175} size={15} fill={INK} weight={700} anchor="start">
          {t(
            "horizontal: N = mv²⁄r — the ENTIRE centripetal force",
            "horizontal: N = mv²⁄r — POORI centripetal force"
          )}
        </T>
      </Fade>

      {/* beat 4 — vertical + condition */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={600} y={210} size={15} fill={INK} weight={700} anchor="start">
          vertical: f = mg
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={600} y={240} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "friction has a ceiling: f ≤ μN — the not-sliding condition",
            "friction ki chhat: f ≤ μN — na-fisalne ki shart"
          )}
        </T>
      </Fade>

      {/* beat 5 — combine */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 612 270 h 418 q 12 0 12 12 v 24 q 0 12 -12 12 h -418 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={820} y={300} size={17} fill={INK} weight={800}>
          v_min = √(gr⁄μ) — m cancels
        </T>
      </Fade>

      {/* beat 6 — the number */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 612 336 h 418 q 12 0 12 12 v 22 q 0 12 -12 12 h -418 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={820} y={366} size={17} fill={INK} weight={800}>
          v_min = √(30 ÷ 0.6) = √50 ≈ 7.07 m⁄s
        </T>
      </Fade>

      {/* beat 7 — the counterintuitive chain */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 460 v 112" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={480} size={14} fill={RED} script anchor="start">
          {t(
            "counterintuitive: going FASTER is what keeps the rider up",
            "ulta lagta hai: TEZ jaana hi rider ko upar thaamta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={506} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "chain: v↑ → N↑ → more friction available → wall holds more weight",
            "chain: v↑ → N↑ → zyada friction available → deewar zyada weight thaame"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={84} y={532} size={14} fill={RED} script anchor="start">
          {t(
            "slow down too much → N shrinks → friction can't hold the weight → he slides",
            "bahut dheere → N sikudta → friction weight nahi thaam pati → wo fisalta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={84} y={558} size={14} fill={GREEN} script anchor="start">
          {t(
            "mass cancelled again — a heavy bike and a light one need the SAME v_min",
            "mass phir kat gaya — bhaari bike ho ya halki, v_min SAME hi chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
