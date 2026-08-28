/**
 * Ch07 · Section 40 — "Two clarifications: system energy, and potential per kilogram"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.21, 14.85, 26.79, 37.21, 45.06, 55.04, 56.04]):
 *  0 title
 *  1 stone + Earth pair, bracket around BOTH labeled "U belongs here"
 *  2 red: doesn't make sense to say "the stone's PE" alone
 *  3 amber: shorthand — keep the system in mind
 *  4 line: treat U as the whole arrangement's property
 *  5 green: V = energy per kilogram (right side)
 *  6 amber: V is a property of the location, independent of test mass
 *  7 green box: U = m·V
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  stone (170,140) r8 · Earth c(170,270) r70 · bracket M110 120 Q90 120 90 200 Q90 280 110 300
 *   + "U" label (75,210) · caption cx170 bl400
 *  b2 | bar x480 y150..202 lines bl170/196
 *  b3 | line st x480 bl230
 *  b4 | line st x480 bl265
 *  b5 | "V" formula cx760 bl150 · b6 | line st x620 bl195/221
 *  b7 | green box x600..900 y440..492 (bl472)
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — whose energy is it? */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Whose energy is it, and what is potential?",
            "Energy kiski hai, aur potential kya hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — U belongs to the pair */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 135 240 A 70 70 0 1 1 205 240"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={170} cy={140} r={8} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Path
          d="M 108 122 Q 88 122 88 200 Q 88 278 108 298"
          stroke={GREEN}
          strokeWidth={2}
          fill="none"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={64} y={210} size={15} fill={GREEN} weight={800}>
          U
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={170} y={400} size={12} fill={GREEN} script>
          {t(
            "U belongs to the PAIR — stone + Earth together",
            "U dono ka hai — stone + Earth saath mein"
          )}
        </T>
      </Fade>

      {/* beat 2 — no sense to say "the stone's PE" */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 480 150 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={498} y={170} size={13} fill={RED} script anchor="start">
          {t(
            "no real sense in \"the stone's PE\" alone",
            "\"stone ki PE\" akele koi matlab nahi rakhta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={498} y={196} size={13} fill={RED} script anchor="start">
          {t(
            "energy lives in the CONFIGURATION",
            "energy CONFIGURATION mein rehti hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — shorthand */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={230} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "casual talk is just shorthand — keep the system in mind",
            "casual baat sirf shorthand hai — system yaad rakho"
          )}
        </T>
      </Fade>

      {/* beat 4 — treat U as the arrangement's property */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={265} size={13} fill={INK} script anchor="start">
          {t(
            "treat U as a property of the WHOLE arrangement",
            "U ko POORE arrangement ki property maano"
          )}
        </T>
      </Fade>

      {/* beat 5 — potential, per kilogram */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={760} y={150} size={18} fill={INK} weight={800}>
          V = U ⁄ (per kg)
        </T>
      </Fade>

      {/* beat 6 — a property of the location itself */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={620} y={195} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "V belongs to the LOCATION itself —",
            "V us LOCATION ki apni hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={620} y={221} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "independent of whatever test mass you place",
            "aap jo bhi test mass rakho, us se independent"
          )}
        </T>
      </Fade>

      {/* beat 7 — the link */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.5)}
          d="M 612 440 h 288 q 12 0 12 12 v 28 q 0 12 -12 12 h -288 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={756} y={472} size={20} fill={INK} weight={800}>
          U = m·V
        </T>
      </Fade>
    </Scene>
  );
}
