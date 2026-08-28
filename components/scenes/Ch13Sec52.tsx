/**
 * Ch13 · Section 52 — "Worked example (CBSE): resultant of two collinear SHMs"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.94, 13.87, 18.33, 25.76, 31.7, 37.65, 44.58]):
 *  0 shelf
 *  1 x₁=3sinωt, x₂=4sin(ωt+π/2) cm — find resultant amplitude and phase
 *  2 diagram: the 3-4-5 right triangle is the phasor diagram itself
 *  3 δ=π/2 ⇒ cosδ=0
 *  4 hero (high): A=√(3²+4²+0)=√25=5 cm
 *  5 tanφ=4(1)/(3+0)=4/3 ⇒ φ≈53°
 *  6 perpendicular phasors add by Pythagoras ⇒ resultant = hypotenuse
 *  7 hero (high): amplitude 5 cm at phase ≈53° — the classic 3-4-5 triangle
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size11
 *  b2 | O(770,290) · P1(842,290) green "3" cx806 bl306 ·
 *      R(842,194) amber leg P1→R "4" x858 bl242 anchor-start ·
 *      right-angle mark at P1 · hyp O→R red "5" x792 bl234 anchor-end ·
 *      φ-arc 800,290→788,266 · "φ" x795 bl275
 *  b3 | st x70 bl136 size12
 *  b4 | box x70..360 y155..200 rx14 · line cx215 bl183 size16
 *  b5 | st x70 bl235 size13
 *  b6 | st x70 bl265 size11
 *  b7 | box x70..490 y295..340 rx14 · line cx280 bl322 size13
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  GREEN,
  GREEN_DARK,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Perpendicular phasors add by Pythagoras", "Perpendicular phasors Pythagoras se judte hain")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the two motions */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={11} fill={INK} anchor="start">
          {t(
            "x₁=3sinωt , x₂=4sin(ωt+π/2) cm — find resultant amplitude and phase",
            "x₁=3sinωt , x₂=4sin(ωt+π/2) cm — resultant amplitude aur phase nikalo"
          )}
        </T>
      </Fade>

      {/* beat 2 — the 3-4-5 phasor triangle */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Circle cx={770} cy={290} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={arrowD(770, 290, 842, 290)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={806} y={306} size={11} fill={GREEN_DARK}>
          3
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={arrowD(842, 290, 842, 194)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={858} y={242} size={11} fill={AMBER_DARK} anchor="start">
          4
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Path d="M 834 290 L 834 282 L 842 282" stroke={INK} strokeWidth={1.2} fill="none" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.7)} d={arrowD(770, 290, 842, 194)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={792} y={234} size={11} fill={RED} anchor="end">
          5
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d="M 800 290 A 30 30 0 0 0 788 266" stroke={INK} sw={1.3} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={795} y={275} size={10} fill={INK} anchor="start">
          φ
        </T>
      </Fade>

      {/* beat 3 — the phase difference */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={136} size={12} fill={INK} anchor="start" weight={700}>
          δ=π/2 ⇒ cosδ=0
        </T>
      </Fade>

      {/* beat 4 — the resultant amplitude, hero */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 155 h 262 q 14 0 14 14 v 17 q 0 14 -14 14 h -262 q -14 0 -14 -14 v -17 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={215} y={183} size={16} fill={INK} weight={800}>
          A=√(3²+4²+0)=√25=5 cm
        </T>
      </Fade>

      {/* beat 5 — the resultant phase */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={235} size={13} fill={INK} anchor="start" weight={700}>
          tanφ=4(1)/(3+0)=4/3 ⇒ φ≈53°
        </T>
      </Fade>

      {/* beat 6 — why Pythagoras applies */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={265} size={11} fill={INK} anchor="start">
          {t(
            "perpendicular phasors add by Pythagoras ⇒ resultant = hypotenuse",
            "perpendicular phasors Pythagoras se add hote hain ⇒ resultant = hypotenuse"
          )}
        </T>
      </Fade>

      {/* beat 7 — the answer, hero */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 84 295 h 392 q 14 0 14 14 v 17 q 0 14 -14 14 h -392 q -14 0 -14 -14 v -17 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={280} y={322} size={13} fill={INK} weight={800}>
          amplitude 5 cm at phase ≈53° — the classic 3-4-5 triangle
        </T>
      </Fade>
    </Scene>
  );
}
