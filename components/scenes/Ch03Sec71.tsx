/**
 * Ch03 · Section 71 — "JEE Main: the banking angle of a curved road"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.5, 25.7, 26.7, 37.5, 48.9, 61.4, 74.1]):
 *  0 heading + problem
 *  1 setup: no friction — gravity down, normal ⊥ road (diagram)
 *  2 horizontal: N sinθ = mv²/r
 *  3 vertical: N cosθ = mg
 *  4 divide the equations — N and m cancel
 *  5 tan θ = v²/(rg) green box
 *  6 substitute → θ ≈ 21.8°
 *  7 ANSWER + deep point: mass cancelled, same angle for any vehicle
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | incline M100 380 L280 330 · car(190,355) · N (190,355)→(171,288) ·
 *       vertRef (190,355)→(190,288) · θ lbl (181,320) · horiz (190,355)→(140,355)
 *       green lbl end(136,348) · mg (190,355)→(190,410) lbl st(200,412)
 *  b2 | st x460 bl 112 s14
 *  b3 | st x460 bl 140 s14
 *  b4 | st x460 bl 176 s12
 *  b5 | box x460..820 y198..244 text cx640 bl 230 s16
 *  b6 | st x460 bl 288 s14
 *  b7 | box x460..900 y312..358 text cx680 bl 344 s15 · green st x460 bl 396 / 420 s12
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

export default function Ch03Sec71({ currentTime, reveals, language }: SceneProps) {
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
            "JEE MAIN — the banking angle of a curved road",
            "JEE MAIN — mudi hui sadak ka banking angle"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "r = 100 m, v = 20 m/s, g = 10 — bank angle for zero friction?",
            "r = 100 m, v = 20 m/s, g = 10 — zero friction ke liye bank angle?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup diagram */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 100 380 L 280 330" stroke={INK_LIGHT} sw={2.4} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={190} cy={355} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 190 355 V 288" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(190, 355, 171, 288)} stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={171} y={278} size={12} fill={AMBER_DARK} weight={700} anchor="middle">N</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={181} y={320} size={11} fill={MUTED} weight={700}>θ</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.8)} d={arrowD(190, 355, 140, 355)} stroke={GREEN} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={136} y={348} size={11} fill={GREEN} script anchor="end">
          {t("→ a_c", "→ a_c")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6.4)} d={arrowD(190, 355, 190, 410)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <T x={200} y={412} size={11} fill={INK} weight={700} anchor="start">mg</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={190} y={444} size={11} fill={MUTED} script>
          {t(
            "no friction — only gravity and the normal force",
            "friction nahi — sirf gravity aur normal force"
          )}
        </T>
      </Fade>

      {/* beat 2 — the horizontal equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={460} y={112} size={14} fill={INK} weight={700} anchor="start">
          N sin θ = m v² ⁄ r
        </T>
      </Fade>

      {/* beat 3 — the vertical equation */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={460} y={140} size={14} fill={INK} weight={700} anchor="start">
          N cos θ = m g
        </T>
      </Fade>

      {/* beat 4 — divide, cancel */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={460} y={176} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "divide the first by the second — N and m cancel completely",
            "pehli ko doosri se bhaago — N aur m poori tarah kat jaate hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — the elegant result */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 472 198 h 336 q 12 0 12 12 v 22 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={640} y={230} size={16} fill={INK} weight={800}>
          tan θ = v² ⁄ (r g)
        </T>
      </Fade>

      {/* beat 6 — substitute numbers */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={460} y={288} size={14} fill={INK} weight={700} anchor="start">
          = 400 ⁄ 1000 = 0.4 → θ ≈ 21.8°
        </T>
      </Fade>

      {/* beat 7 — the answer and the deep point */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 472 312 h 416 q 12 0 12 12 v 22 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={680} y={344} size={15} fill={INK} weight={800}>
          {t("bank at about 21.8°", "lagbhag 21.8° par bankao")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={460} y={396} size={12} fill={GREEN} script anchor="start">
          {t(
            "the mass cancelled — the angle never depended on it",
            "mass kat gaya — angle uspar kabhi nirbhar hi nahi tha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={460} y={420} size={12} fill={INK} script anchor="start">
          {t(
            "same angle for a scooter and a loaded truck",
            "scooter aur bhari truck, dono ke liye wahi angle"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
