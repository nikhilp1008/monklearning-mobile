/**
 * Ch07 · Section 21 — "Worked example: the null point between two masses (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.63, 28.42, 34.47, 48.38, 56.32, 65.19, 74.33]):
 *  0 title + problem
 *  1 diagram: 4 kg / 9 kg, opposing field arrows at P, x and 1−x dimensions
 *  2 amber condition |E₄| = |E₉|
 *  3 equation, G cancels
 *  4 square-root line
 *  5 2/x = 3/(1−x) → 2(1−x) = 3x
 *  6 green box x = 0.4 m + ring P on the diagram
 *  7 red margin: closer to the smaller mass
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  diagram: 4kg (200,190) r10 · 9kg (700,190) r15 · line M215 190 H683 ·
 *   P (400,190) r6 open · arrows (388,182)→(358,182) / (412,182)→(442,182) ·
 *   E₄ (373,168) · E₉ (427,168) · "null point?" cx400 bl150 ·
 *   x-dim M200 250 H398 + "x" cx300 bl270 · (1−x)-dim M402 250 H700 + label cx550 bl270 ·
 *   mass labels bl230/236
 *  b2 | line st x100 bl320 · b3 | line st x100 bl360 · b4 | line st x100 bl395 ·
 *  b5 | line st x100 bl432 · b6 | green box x620..1000 y405..457 (bl437) · ring c(400,188)
 *  b7 | bar x66 y490..542 · lines st x84 bl510 / 536
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [CBSE] — the null point",
            "Example [CBSE] — null point"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "4 kg and 9 kg, 1.0 m apart — where between them is the net field zero?",
            "4 kg aur 9 kg, 1.0 m door — beech mein net field kahan zero hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Circle cx={200} cy={190} r={10} fill={INK} />
        <T x={200} y={230} size={13} fill={INK} weight={700}>
          4 kg
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={700} cy={190} r={15} fill={INK} />
        <T x={700} y={236} size={13} fill={INK} weight={700}>
          9 kg
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Path d="M 215 190 H 683" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <Circle cx={400} cy={190} r={6} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
        <T x={400} y={150} size={12} fill={AMBER_DARK} script>
          {t("null point?", "null point?")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.8)}
        d={arrowD(388, 178, 358, 178)}
        stroke={RED}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.4)}
        d={arrowD(412, 178, 442, 178)}
        stroke={RED}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={366} y={166} size={11} fill={RED} weight={700}>
          E₄
        </T>
        <T x={434} y={166} size={11} fill={RED} weight={700}>
          E₉
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.5)}>
        <Path d="M 200 250 H 398 M 200 244 v 12 M 398 244 v 12" stroke={MUTED} strokeWidth={1.4} fill="none" />
        <T x={300} y={270} size={12} fill={INK} weight={700}>
          x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <Path d="M 402 250 H 700 M 402 244 v 12 M 700 244 v 12" stroke={MUTED} strokeWidth={1.4} fill="none" />
        <T x={550} y={270} size={12} fill={INK} weight={700}>
          1 − x
        </T>
      </Fade>

      {/* beat 2 — the whole condition */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={100} y={320} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "condition: |E₄| = |E₉| — that is the entire null-point idea",
            "condition: |E₄| = |E₉| — null point ka poora idea yahi hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — G cancels */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={100} y={360} size={15} fill={INK} anchor="start" weight={700}>
          G·4 ⁄ x² = G·9 ⁄ (1−x)²  →  4 ⁄ x² = 9 ⁄ (1−x)²
        </T>
      </Fade>

      {/* beat 4 — safe square roots */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={100} y={395} size={12} fill={MUTED} script anchor="start">
          {t(
            "take square roots — between the masses, both distances are positive",
            "square root lo — beech mein dono distances positive hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — cross-multiply */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={100} y={432} size={15} fill={INK} anchor="start" weight={700}>
          2 ⁄ x = 3 ⁄ (1−x)  →  2(1−x) = 3x
        </T>
      </Fade>

      {/* beat 6 — the answer, stamped on the picture */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 632 405 h 356 q 12 0 12 12 v 28 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={810} y={437} size={15} fill={INK} weight={800}>
          2 = 5x → x = 0.4 m · (1−x) = 0.6 m
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.5)}
        d={ringD(400, 188, 16, 14)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />

      {/* beat 7 — always nearer the smaller mass */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 490 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={510} size={13} fill={RED} script anchor="start">
          {t(
            "the null point ALWAYS sits closer to the smaller mass",
            "null point HAMESHA chhote mass ke kareeb hota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={536} size={13} fill={RED} script anchor="start">
          {t(
            "a quick sanity-check for your answer",
            "jawab ka tez sanity-check"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
