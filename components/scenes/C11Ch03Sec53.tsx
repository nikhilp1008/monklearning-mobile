/**
 * C11 Chemistry Ch03 · Section 53 — "Chapter formula recap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Reference-sheet layout: two
 * columns of bordered formula boxes gathering every relation from all
 * four subtopics. Red border = red-margin "high" formula.
 *
 * Beats (en [0.0, 8.45, 17.75, 27.82, 39.0, 54.1, 70.57, 83.11]):
 *  0 title + underline
 *  1 Sub1: triad rule — middle mass ≈ (first+last)÷2
 *  2 Sub2 (red): Zeff = Z − σ
 *  3 Sub2: radius — rcov = ½d(A-A); rvdW > rmetallic > rcov
 *  4 Sub2: IE / EGE definitions
 *  5 Sub2: three EN scales (Mulliken, Pauling, Allred-Rochow)
 *  6 Sub3 (red): valence = N or 8−N; max p-block OS = valence e⁻
 *  7 Sub4 (red): group rules — s=ns; p=10+(ns+np); d=(n-1)d+ns
 *
 * Layout plan (left col x70..520, right col x560..1010):
 *  b1 | triad box                   | Draw | x70..520  y96..136
 *  b2 | Zeff box (red)              | Draw | x70..520  y150..190
 *  b3 | radius box                  | Draw | x70..520  y204..254
 *  b4 | IE/EGE box                  | Draw | x70..520  y268..328
 *  b5 | EN scales box               | Draw | x560..1010 y96..176
 *  b6 | valence/OS box (red)        | Draw | x560..1010 y190..260
 *  b7 | group rules box (red)       | Draw | x560..1010 y274..360
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("chapter formula recap", "chapter formula recap")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — Sub1: triad rule */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 70 96 h 450 v 40 h -450 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={295} y={122} size={14} weight={700} fill={INK}>
          {t("middle mass ≈ (first + last) ÷ 2", "middle mass ≈ (first + last) ÷ 2")}
        </T>
      </Fade>

      {/* beat 2 — Sub2: Zeff (red-margin high) */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 70 150 h 450 v 40 h -450 z" stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={295} y={176} size={18} weight={800} fill={INK}>{"Zeff = Z − σ"}</T>
      </Fade>

      {/* beat 3 — Sub2: radius relations */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 204 h 450 v 50 h -450 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={295} y={226} size={14} weight={700} fill={INK}>{"rcov = ½ d(A-A)"}</T>
        <T x={295} y={246} size={12} fill={MUTED}>{"rvdW > rmetallic > rcov"}</T>
      </Fade>

      {/* beat 4 — Sub2: IE / EGE definitions */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 70 268 h 450 v 60 h -450 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={295} y={290} size={13} weight={700} fill={INK}>{"X(g) → X⁺(g) + e⁻   ΔiH1"}</T>
        <T x={295} y={312} size={13} weight={700} fill={INK}>{"X(g) + e⁻ → X⁻(g)   ΔegH"}</T>
      </Fade>

      {/* beat 5 — Sub2: the three EN scales */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 560 96 h 450 v 80 h -450 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={785} y={118} size={13.5} weight={700} fill={INK}>{"χM = (IE + EA) / 2"}</T>
        <T x={785} y={140} size={13} fill={INK}>{"χP ≈ χM / 2.8"}</T>
        <T x={785} y={162} size={12} weight={700} fill={INK}>{"χAR = 0.359(Zeff/r²) + 0.744"}</T>
      </Fade>

      {/* beat 6 — Sub3: valence / oxidation state (red-margin high) */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 560 190 h 450 v 70 h -450 z" stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={785} y={214} size={13.5} weight={700} fill={INK}>
          {t("valence = N or 8−N (representative)", "valence = N ya 8−N (representative)")}
        </T>
        <T x={785} y={238} size={12.5} fill={INK}>
          {t("max p-block OS = total valence e⁻", "max p-block OS = total valence e⁻")}
        </T>
      </Fade>

      {/* beat 7 — Sub4: group rules (red-margin high) */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 560 274 h 450 v 86 h -450 z" stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={785} y={298} size={13.5} weight={700} fill={INK}>{"s = ns"}</T>
        <T x={785} y={320} size={13.5} weight={700} fill={INK}>{"p = 10 + (ns + np)"}</T>
        <T x={785} y={342} size={13.5} weight={700} fill={INK}>{"d = (n-1)d + ns"}</T>
      </Fade>
    </Scene>
  );
}
