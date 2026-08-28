/**
 * Ch07 · Section 65 — "When both masses move: binaries and reduced mass"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 9.42, 16.93, 28.54, 42.53, 53.2]):
 *  0 title
 *  1 old picture: Earth fixed, satellite circling (crossed later)
 *  2 amber: convenient fiction, both respond
 *  3 red: Newton's third law — pulls back equally
 *  4 two comparable masses, both orbiting
 *  5 diagram: binary stars around common centre of mass
 *  6 amber: reduces to one equivalent body — reduced mass
 *  7 green margin: old formulas snap back into use
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  small fixed-picture x100..260 y100..200 (dims later) ·
 *  binary diagram: com dot (300,320) · star1 c(200,320) r20 orbit r150 dashed ·
 *   star2 c(500,290) r10 orbit r250 dashed · caption cx350 bl430
 *  right col x480: b2 line bl150 · b3 bar x460 y170..222 lines bl190/216 ·
 *  b6 line st x480 bl380 · b7 bar x66 y460..512 lines bl480/506
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — Newton's third law strikes back */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Newton's third law strikes back",
            "Newton ka third law wapas hamla karta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the old picture */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)} dim={beat >= 4}>
        <Circle cx={150} cy={140} r={30} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={150} y={182} size={11} fill={INK} weight={700}>
          {t("fixed", "fixed")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)} dim={beat >= 4}>
        <Circle cx={230} cy={140} r={6} fill={AMBER_DARK} />
      </Fade>

      {/* beat 2 — convenient fiction */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={150} y={220} size={12} fill={AMBER_DARK} script>
          {t(
            "a convenient fiction — both really respond",
            "ek suvidhajanak kalpana — dono sach mein respond"
          )}
        </T>
      </Fade>

      {/* beat 3 — the satellite pulls back */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 460 170 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={478} y={190} size={13} fill={RED} script anchor="start">
          {t(
            "the satellite pulls the Earth just as hard",
            "satellite Earth ko utni hi zor se kheenchta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={478} y={216} size={13} fill={RED} script anchor="start">
          {t("(Newton's third law)", "(Newton ka third law)")}
        </T>
      </Fade>

      {/* beat 4 — both bodies genuinely move */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={150} y={250} size={12} fill={INK} script>
          {t(
            "comparable masses → both genuinely move",
            "comparable masses → dono sach mein chalte hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — the binary, orbiting the common centre */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Circle
          cx={300}
          cy={320}
          r={100}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 6"
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Circle
          cx={300}
          cy={320}
          r={170}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 6"
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Circle cx={300} cy={320} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <Circle cx={200} cy={320} r={20} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <Circle cx={470} cy={320} r={11} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={300} y={445} size={12} fill={INK} script>
          {t(
            "a binary — both waltz around the centre of mass",
            "ek binary — dono centre of mass ke charon or naachte"
          )}
        </T>
      </Fade>

      {/* beat 6 — reduced mass collapses it */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={380} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the REDUCED MASS collapses this to ONE body",
            "REDUCED MASS ise EK body mein badal deta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — old formulas snap back */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 460 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "then every earlier orbit formula snaps back",
            "phir har purana orbit formula wapas kaam mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={506} size={13} fill={GREEN} script anchor="start">
          {t(
            "the hard problem, easy in disguise",
            "mushkil problem, aasan ke bhes mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
