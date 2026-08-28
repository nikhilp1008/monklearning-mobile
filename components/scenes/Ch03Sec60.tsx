/**
 * Ch03 · Section 60 — "JEE Main: landing directly opposite"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.6, 29.6, 40.3, 57.2, 65.9, 83.7, 91.0]):
 *  0 heading + problem
 *  1 the condition: kill the current
 *  2 zero-drift equation setup
 *  3 solve for θ = 30°
 *  4 the across-component costs effort
 *  5 across-speed = 2√3, time formula
 *  6 t ≈ 57.7 s
 *  7 compare with straight-across 50 s — the trade-off
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line st x84 bl 118 s13 · underline M84 128 h440
 *  b2 | st x84 bl 160 s13
 *  b3 | diagram O(150,470) upstream angle: swim →(230,320) lbl st (240,316) ·
 *       river →(340,470) lbl st (350,476) · dashed vertical (150,470)→(150,320) ·
 *       θ arc r34 lbl st (192,452) · st x560 bl 160 s14
 *  b4 | st x560 bl 200 s12
 *  b5 | st x560 bl 240 s14
 *  b6 | box x560..1010 y264..312 text cx785 bl 296 s15
 *  b7 | bar M66 500 v56 · lines st x84 bl 518 / 542 / 566 s12
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

export default function Ch03Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "JEE MAIN — landing directly opposite",
            "JEE MAIN — theek saamne utarna"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "river 200 m wide, flows at 2 m/s · swimmer does 4 m/s still water — aim angle and time?",
            "nadi 200 m chaudi, bahaav 2 m/s · tairak sthir paani mein 4 m/s — angle aur time?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the condition */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the condition IS the problem: zero net drift → kill the current, aim upstream",
            "condition hi poora sawaal hai: zero drift → bahaav ko katao, upstream nishana"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 84 128 h 440" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 2 — the equation setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={160} size={13} fill={INK} script anchor="start">
          {t(
            "her upstream component must exactly cancel the river's speed",
            "uska upstream hissa nadi ki speed ko theek theek katna chahiye"
          )}
        </T>
      </Fade>

      {/* beat 3 — the diagram and the angle */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={150} cy={470} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 150 470 V 320" stroke={MUTED} sw={1.3} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d={arrowD(150, 470, 230, 320)} stroke={INK} sw={2.8} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={240} y={316} size={13} fill={INK} weight={700} anchor="start">v swim</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={arrowD(150, 470, 340, 470)} stroke={INK_LIGHT} sw={2.8} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={350} y={476} size={13} fill={INK_LIGHT} weight={700} anchor="start">v river</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5)} d="M 150 436 A 34 34 0 0 0 168.7 407.3" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <T x={192} y={452} size={12} fill={AMBER_DARK} weight={700} anchor="start">θ</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={560} y={160} size={14} fill={INK} weight={700} anchor="start">
          v swim sinθ = v river → 4 sinθ = 2
        </T>
      </Fade>

      {/* beat 4 — the effort spent */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={560} y={200} size={13} fill={INK} weight={700} anchor="start">
          sinθ = ½ → θ = 30° (upstream)
        </T>
      </Fade>

      {/* beat 5 — the across component */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={240} size={14} fill={INK} weight={700} anchor="start">
          v across = 4 cos30° = 2√3 m/s
        </T>
      </Fade>

      {/* beat 6 — the time */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 264 h 426 q 12 0 12 12 v 24 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={785} y={296} size={15} fill={INK} weight={800}>
          t = 200 ⁄ 2√3 ≈ 57.7 s
        </T>
      </Fade>

      {/* beat 7 — the trade-off */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 500 v 56" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={518} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "compare: straight-across would take only 50 s",
            "tulna: seedha paar sirf 50 s lagta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={542} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the shortest PATH costs TIME — the trade-off between the two strategies",
            "shortest PATH TIME khata hai — dono chaalon ke beech ka trade-off"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={84} y={566} size={12} fill={INK} script anchor="start">
          {t(
            "a question always says which it wants — read carefully",
            "sawaal hamesha bata deta hai kaunsa chahiye — dhyan se padho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
