/**
 * Ch07 · Section 9 — "Worked example: force between two iron spheres (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.23, 23.89, 29.87, 40.45, 50.69, 58.97, 71.59]):
 *  0 title + problem line
 *  1 diagram: 80 kg & 120 kg spheres, centre dots, r = 0.50 m + shell-theorem caption
 *  2 amber: r = centre-to-centre, no integration
 *  3 substitution line
 *  4 green result box: F = 2.56×10⁻⁶ N
 *  5 double r → ÷4 line
 *  6 green result box 2: F′ = 6.40×10⁻⁷ N
 *  7 red margin: feeble at human scale
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  b1 | s1 c(160,180) r30 · s2 c(340,180) r36 · dots · dash 190..304 ·
 *      "r = 0.50 m" cx250 bl158 · labels bl232/238 · caption cx250 bl272
 *  b2 | line st x480 bl150 · underline M480 162 h300
 *  b3 | work st x480 bl210 (→816)
 *  b4 | green box x480..900 y240..292 · text cx690 bl272
 *  b5 | line st x80 bl330 (→316) · underline M80 342 h236
 *  b6 | green box x480..900 y310..362 · text cx690 bl342
 *  b7 | bar x66 y400..452 · lines st x84 bl420 / 446
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

export default function Ch07Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the warm-up */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [CBSE] — two iron spheres",
            "Example [CBSE] — do iron spheres"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "80 kg & 120 kg, centres 0.50 m apart — find F; then double the distance",
            "80 kg & 120 kg, centres 0.50 m door — F nikaalo; phir distance double karo"
          )}
        </T>
      </Fade>

      {/* beat 1 — spheres become centre points */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 160 150 A 30 30 0 1 1 159.9 150"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 340 144 A 36 36 0 1 1 339.9 144"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={160} cy={180} r={2.5} fill={INK} />
        <Circle cx={340} cy={180} r={2.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <Path d="M 190 180 H 304" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={250} y={158} size={12} fill={INK} weight={700}>
          r = 0.50 m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={160} y={232} size={12} fill={INK} weight={700}>
          80 kg
        </T>
        <T x={340} y={238} size={12} fill={INK} weight={700}>
          120 kg
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={250} y={272} size={12} fill={GREEN} script>
          {t(
            "shell theorem: point masses at the centres",
            "shell theorem: centres par point masses"
          )}
        </T>
      </Fade>

      {/* beat 2 — one clean r */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={480} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "r = centre to centre = 0.50 m — no integration",
            "r = centre se centre = 0.50 m — koi integration nahi"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3)} d="M 480 162 h 300" stroke={AMBER_DARK} sw={2} dur={0.4} />

      {/* beat 3 — plug in */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={480} y={210} size={14} fill={INK} anchor="start" weight={700}>
          F = G·m₁m₂ ⁄ r² = (6.67×10⁻¹¹)(80)(120) ⁄ (0.50)²
        </T>
      </Fade>

      {/* beat 4 — first result */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.8)}
          d="M 492 240 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={690} y={272} size={15} fill={INK} weight={800}>
          F = 6.403×10⁻⁷ ⁄ 0.25 = 2.56×10⁻⁶ N
        </T>
      </Fade>

      {/* beat 5 — double the distance */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={80} y={330} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "double r → F ∝ 1⁄r² → force ÷ 4",
            "r double → F ∝ 1⁄r² → force ÷ 4"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3)} d="M 80 342 h 236" stroke={AMBER_DARK} sw={2} dur={0.4} />

      {/* beat 6 — second result */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.8)}
          d="M 492 310 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={690} y={342} size={15} fill={INK} weight={800}>
          F′ = 2.56×10⁻⁶ ⁄ 4 = 6.40×10⁻⁷ N
        </T>
      </Fade>

      {/* beat 7 — feeble at human scale */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 400 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={420} size={13} fill={RED} script anchor="start">
          {t(
            "200 kg of iron — a pull smaller than a whisper",
            "200 kg loha — whisper se bhi chhota pull"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={84} y={446} size={13} fill={RED} script anchor="start">
          {t(
            "gravity really is feeble at human scale",
            "human scale par gravity sach mein feeble hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
