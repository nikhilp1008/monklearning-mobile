/**
 * Ch13 · Section 36 — "Formula board: damped motion and its regimes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.29, 16.05, 25.8, 36.82, 45.94, 56.01, 61.99]):
 *  0 shelf
 *  1 x(t) = A₀e^(−bt/2m) cos(ω't+φ)
 *  2 ω' = √(ω₀²−(b/2m)²) , ω₀=√(k/m)
 *  3 hero (high): A(t) = A₀e^(−bt/2m) , E(t) = E₀e^(−bt/m)
 *  4 diagram: underdamped oscillates, critical fastest, overdamped slow
 *  5 E decays 2× faster than A, since E ∝ A²
 *  6 hero (high): b_c = 2√(mk)
 *  7 classification: underdamped/critical/overdamped
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size13
 *  b2 | st x70 bl140 size13
 *  b3 | box x70..470 y162..215 rx14 · line cx270 bl194 size16
 *  b4 | eq-line y180 x650..1010 dashed + "eq" x1015 bl184 ·
 *      underdamped M650,100 Q685,145 715,160 Q740,172 758,165 Q778,176 795,180 Q815,182 835,180 (ink) ·
 *      critical M650,100 Q690,178 730,180 Q800,180 900,180 (green) ·
 *      overdamped M650,100 Q760,130 860,155 Q950,172 1010,179 (amber) ·
 *      "underdamped" x660 bl115 · "critical" x740 bl195 · "overdamped" x790 bl142
 *  b5 | st x70 bl250 size12
 *  b6 | box x70..280 y275..325 rx14 · line cx175 bl306 size18
 *  b7 | script11 st x70 bl360
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Decay, shifted frequency, and the three regimes", "Decay, shifted frequency, aur teen regimes")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — displacement */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={13} fill={INK} anchor="start" weight={700}>
          x(t) = A₀e^(−bt/2m) cos(ω&apos;t+φ)
        </T>
      </Fade>

      {/* beat 2 — the shifted frequency */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={140} size={13} fill={INK} anchor="start" weight={700}>
          ω&apos; = √(ω₀²−(b/2m)²) , ω₀=√(k/m)
        </T>
      </Fade>

      {/* beat 3 — the two decay laws, hero */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Draw
          on={beat >= 3}
          delay={dl(3, 0.3)}
          d="M 84 162 h 372 q 14 0 14 14 v 25 q 0 14 -14 14 h -372 q -14 0 -14 -14 v -25 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={270} y={194} size={16} fill={INK} weight={800}>
          A(t) = A₀e^(−bt/2m) , E(t) = E₀e^(−bt/m)
        </T>
      </Fade>

      {/* beat 4 — the three regimes */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Path d="M 650 180 H 1010" stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 4" fill="none" />
        <T x={1015} y={184} size={10} fill={MUTED} anchor="start">
          eq
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M650 100 Q685 145 715 160 Q740 172 758 165 Q778 176 795 180 Q815 182 835 180"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={660} y={115} size={10} fill={INK} anchor="start">
          {t("underdamped", "underdamped")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.9)}
        d="M650 100 Q690 178 730 180 Q800 180 900 180"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <T x={740} y={195} size={10} fill={GREEN} anchor="start">
          {t("critical", "critical")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.0)}
        d="M650 100 Q760 130 860 155 Q950 172 1010 179"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={790} y={142} size={10} fill={AMBER_DARK} anchor="start">
          {t("overdamped", "overdamped")}
        </T>
      </Fade>

      {/* beat 5 — why energy decays twice as fast */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={250} size={12} fill={INK} anchor="start">
          {t("E decays 2× faster than A, since E ∝ A²", "E, A se 2× fast decay karti hai, kyunki E ∝ A²")}
        </T>
      </Fade>

      {/* beat 6 — critical damping, hero */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 84 275 h 182 q 14 0 14 14 v 22 q 0 14 -14 14 h -182 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.5}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={175} y={306} size={18} fill={INK} weight={800}>
          b_c = 2√(mk)
        </T>
      </Fade>

      {/* beat 7 — the classification */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={360} size={11} fill={INK} script anchor="start">
          {t(
            "underdamped: b<bc oscillates · critical: b=bc fastest · overdamped: b>bc slow",
            "underdamped: b<bc oscillate · critical: b=bc fastest · overdamped: b>bc slow"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
