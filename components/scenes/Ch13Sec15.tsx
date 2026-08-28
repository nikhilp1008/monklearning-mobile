/**
 * Ch13 · Section 15 — "Derivation: total energy equals half k A squared"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.87, 14.92, 24.41, 33.64, 42.32, 50.18, 59.4]):
 *  0 shelf
 *  1 x = A sin(ωt+φ), conservative force, U = 0 at mean
 *  2 K = ½mv² = ½kA² cos²(ωt+φ)
 *  3 U = ∫kx'dx' = ½kx² = ½kA² sin²(ωt+φ)
 *  4 diagram: K, U each swing (double-humped), sum is a flat line at E
 *  5 E = ½kA² [cos²(ωt+φ) + sin²(ωt+φ)]
 *  6 hero: E = ½kA² = ½mω²A²
 *  7 note: time vanishes, conservative see-saw balanced
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size13
 *  b2 | st x70 bl148 size15
 *  b3 | st x70 bl188 size14
 *  b4 | K curve M650,170 Q690,250 730,170 Q770,250 810,170 Q850,250 890,170 (ink) ·
 *      U curve M650,250 Q690,170 730,250 Q770,170 810,250 Q850,170 890,250 (amber) ·
 *      E dashed 650,170→890,170 (green) · legend swatches x900..925 y108/130 + "K"/"U" x930
 *  b5 | st x70 bl230 size14
 *  b6 | box x70..420 y250..300 rx14 · line cx245 bl281 size18
 *  b7 | script13 st x70 bl340 red
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Adding K and U cancels the time", "K aur U jodne se time cancel ho jaata hai")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "x = A sin(ωt+φ), conservative force, U = 0 at mean",
            "x = A sin(ωt+φ), conservative force, mean par U = 0"
          )}
        </T>
      </Fade>

      {/* beat 2 — kinetic energy */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={148} size={15} fill={INK} anchor="start" weight={700}>
          K = ½mv² = ½kA² cos²(ωt+φ)
        </T>
      </Fade>

      {/* beat 3 — potential energy */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={188} size={14} fill={INK} anchor="start" weight={700}>
          U = ∫kx&apos;dx&apos; = ½kx² = ½kA² sin²(ωt+φ)
        </T>
      </Fade>

      {/* beat 4 — the picture: each swings, the sum is flat */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.3)}
        d="M 650 170 Q 690 250 730 170 Q 770 250 810 170 Q 850 250 890 170"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d="M 650 250 Q 690 170 730 250 Q 770 170 810 250 Q 850 170 890 250"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <Path d="M 650 170 L 890 170" stroke={GREEN} strokeWidth={2.4} strokeDasharray="7 5" fill="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <Path d="M 900 108 H 925" stroke={INK} strokeWidth={2.2} />
        <T x={930} y={112} size={12} fill={INK} anchor="start">
          K
        </T>
        <Path d="M 900 130 H 925" stroke={AMBER_DARK} strokeWidth={2.2} />
        <T x={930} y={134} size={12} fill={AMBER_DARK} anchor="start">
          U
        </T>
      </Fade>

      {/* beat 5 — add algebraically */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={230} size={14} fill={INK} anchor="start" weight={700}>
          E = ½kA² [cos²(ωt+φ) + sin²(ωt+φ)]
        </T>
      </Fade>

      {/* beat 6 — the hero result */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 84 250 h 322 q 14 0 14 14 v 22 q 0 14 -14 14 h -322 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={245} y={281} size={18} fill={INK} weight={800}>
          E = ½kA² = ½mω²A²
        </T>
      </Fade>

      {/* beat 7 — the promise of a conservative force */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={340} size={13} fill={RED} script anchor="start">
          {t(
            "time vanishes: conservative K↔U see-saw is perfectly balanced",
            "time gayab: conservative K↔U see-saw perfectly balanced hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
