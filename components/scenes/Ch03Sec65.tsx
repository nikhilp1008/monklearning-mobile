/**
 * Ch03 · Section 65 — "The language of going round: angular quantities"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.0, 24.4, 35.2, 48.5, 60.2, 74.5, 87.3]):
 *  0 heading
 *  1 cleaner to track the angle than the arc distance
 *  2 diagram: radius, angle θ, arc s
 *  3 s = rθ (θ in radians)
 *  4 caption: radians make it tidy, no conversion factor
 *  5 ω = dθ/dt, α = dω/dt — mirror the linear cousins
 *  6 v = ωr, a_t = αr (green box)
 *  7 fan-blade demo: same ω, bigger r → bigger v
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line st x84 bl 104 s13
 *  b2 | C(250,320) r140 circle · radius C→P0(390,320) · radius C→P1(320,199) ·
 *       small angle arc r36 (286,320)→(268,289) · θ lbl (296,294) ·
 *       r lbl cx350 bl 302 · s lbl (384,242)
 *  b3 | st x560 bl 112 s14
 *  b4 | caption st x560 bl 136 s11
 *  b5 | st x560 bl 180 s14 · st x560 bl 208 s14 · caption st x560 bl 232 s11
 *  b6 | box x560..980 y256..302 text cx770 bl 288 s15
 *  b7 | spoke M360 520 H620 · hub(360,520) · inner dot(480,520) · outer dot(620,520) ·
 *       inner arrow (480,520)→(480,485) lbl cx480 bl 468 ·
 *       outer arrow (620,520)→(620,450) lbl cx620 bl 432 ·
 *       "same ω" cx360 bl 548 · caption cx490 bl 584
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
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

export default function Ch03Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "Angular displacement, velocity — and v = ωr",
            "Angular displacement, velocity — aur v = ωr"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — cleaner to track the angle */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={104} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "for a circle, tracking the ANGLE swept is cleaner than the distance walked",
            "circle mein, ANGLE track karna doori se zyada saaf hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the diagram */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 390 320 A 140 140 0 1 1 389.9 320" stroke={INK_LIGHT} sw={2} dur={1.2} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Circle cx={250} cy={320} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d="M 250 320 H 390" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 3) } d="M 250 320 L 320 199" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={350} y={302} size={13} fill={INK} weight={700}>r</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.4)} d="M 286 320 A 36 36 0 0 0 268 288.82" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={296} y={294} size={12} fill={AMBER_DARK} weight={700}>θ</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={384} y={242} size={12} fill={GREEN} weight={700}>s</T>
      </Fade>

      {/* beat 3 — the arc-length formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={560} y={112} size={14} fill={INK} weight={700} anchor="start">
          s = r θ   (θ in radians)
        </T>
      </Fade>

      {/* beat 4 — why radians */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={560} y={136} size={11} fill={MUTED} script anchor="start">
          {t(
            "radians make it tidy — no conversion factor needed",
            "radians isko saaf banate hain — koi conversion factor nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the rates */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={180} size={14} fill={INK} weight={700} anchor="start">
          ω = dθ ⁄ dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={560} y={208} size={14} fill={INK} weight={700} anchor="start">
          α = dω ⁄ dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={560} y={232} size={11} fill={MUTED} script anchor="start">
          {t(
            "mirror velocity and acceleration exactly — for rotation",
            "velocity aur acceleration ka hoobahoo roop — rotation ke liye"
          )}
        </T>
      </Fade>

      {/* beat 6 — the link */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 256 h 396 q 12 0 12 12 v 22 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={770} y={288} size={15} fill={INK} weight={800}>
          v = ω r    ·    a(t) = α r
        </T>
      </Fade>

      {/* beat 7 — the fan-blade demo */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 360 520 H 620" stroke={INK_LIGHT} sw={2.2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Circle cx={360} cy={520} r={4.5} fill={INK} />
        <Circle cx={480} cy={520} r={4.5} fill={AMBER_DARK} />
        <Circle cx={620} cy={520} r={4.5} fill={GREEN} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.2)} d={arrowD(480, 520, 480, 485)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={480} y={468} size={12} fill={AMBER_DARK} weight={700}>v</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.6)} d={arrowD(620, 520, 620, 450)} stroke={GREEN} sw={2.6} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={620} y={432} size={12} fill={GREEN} weight={700}>v</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <T x={360} y={548} size={11} fill={MUTED} script>
          {t("same ω", "same ω")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={490} y={584} size={11} fill={GREEN} script>
          {t(
            "same ω, bigger r → bigger v — the outer rim moves fastest",
            "same ω, bada r → bada v — bahar wala rim sabse tez"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
