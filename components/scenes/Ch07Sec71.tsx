/**
 * Ch07 · Section 71 — "Worked example: density from the density form of g (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.62, 21.5, 33.54, 41.73, 51.97, 60.42, 67.84]):
 *  0 title + problem: two spheres, Earth vs planet (2R)
 *  1 amber: use the density form, not the mass form
 *  2 g = (4/3)πGRρ → g ∝ Rρ
 *  3 (continues, proportionality)
 *  4 Rp·ρp = RE·ρE
 *  5 green box: ρp/ρE = RE/Rp = 1/2
 *  6 (continues, half density note)
 *  7 red margin: the mass-form trap
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth c(160,300) r34 · planet c(360,290) r68 (2×) · caption cx260 bl400
 *  right col x480: b1 line bl150 · b2 line bl195 · b4 line bl235 ·
 *  b5 green box x480..800 y260..312(bl292)
 *  b7 bar x66 y440..492 lines bl460/486
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

export default function Ch07Sec71({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — same g, twice the radius */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [NEET] — density from g's other form",
            "Example [NEET] — g ke doosre form se density"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "same surface g as Earth, radius 2R — find ρ(p)/ρ(E)",
            "Earth jaisa surface g, radius 2R — ρ(p)/ρ(E) nikaalo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1)}>
        <Circle cx={160} cy={300} r={34} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={160} y={350} size={11} fill={INK} weight={700}>
          Earth
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <Circle cx={380} cy={290} r={68} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={380} y={375} size={11} fill={AMBER_DARK} weight={700}>
          {t("planet (2R)", "planet (2R)")}
        </T>
      </Fade>

      {/* beat 1 — the density form */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={480} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "use the DENSITY form of g, not the mass form",
            "g ka DENSITY form use karo, mass form nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — g ∝ Rρ */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={195} size={15} fill={INK} anchor="start" weight={700}>
          g = (4⁄3)πGRρ → g ∝ R·ρ
        </T>
      </Fade>

      {/* beat 4 — equal products */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={235} size={15} fill={INK} anchor="start" weight={700}>
          R(p)·ρ(p) = R(E)·ρ(E)
        </T>
      </Fade>

      {/* beat 5 — the ratio */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 492 260 h 296 q 12 0 12 12 v 28 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={640} y={292} size={17} fill={INK} weight={800}>
          ρ(p)⁄ρ(E) = R(E)⁄R(p) = ½
        </T>
      </Fade>

      {/* beat 7 — the trap */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "trap: reaching for g = GM⁄R² tangles you in masses",
            "trap: g = GM⁄R² pakadna masses mein uljha deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "the density form makes it a ONE-LINE ratio",
            "density form isse EK-LINE ratio bana deta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
