/**
 * C11 Ch02 · Section 20 — "Method and meaning: the photoelectric effect and its four laws"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Re-verified against real audio/reveals (en [0,8.79,21.67,29.35,37.97,
 * 48.04,64.09,76.97]) — content/beat mapping unchanged, VERDICT PASS.
 *
 * Beats:
 *  0 anchor: "solving — and understanding — photoemission"
 *  1 method: find hν → compare with W₀; if hν<W₀, no emission
 *  2 formula (high, GREEN): KEmax = hν − W₀
 *  3 guardrail: Law 1 — threshold
 *  4 guardrail: Law 2 — instantaneous
 *  5 explain: Law 3 (KEmax ∝ ν) · Law 4 (photocurrent ∝ intensity)
 *  6 represent: V₀ vs ν graph — line, slope h/e, threshold intercept
 *  7 guardrail (high): both graphs fall from eV₀ = hν − W₀
 *
 * Layout plan (single column, x540 center):
 *  title (always)             | T mid | x540 y52 size14 script red
 *  b0 | anchor caption         | T mid | x540 y76             [dims@b1]
 *  b1 | method caption         | T mid | x540 y108
 *  b2 | KEmax box (GREEN)      | Chip  | x360..720 y126..160
 *  b3 | Law 1 caption (RED)    | T mid | x540 y185
 *  b4 | Law 2 caption (RED)    | T mid | x540 y216
 *  b5 | Law 3+4 caption        | T mid | x540 y248
 *  b6 | axes + V₀ line + dot   | Draw  | x150..560 y280..420
 *  b6 | labels ×4              | T     | y440/300/440/350
 *  b7 | guardrail box (high)   | Chip  | x300..780 y470..506
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
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t(
            "method and meaning: the photoelectric effect and its four laws",
            "method aur meaning: photoelectric effect aur uske chaar laws"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("solving — and understanding — photoemission", "photoemission solve karna — aur samajhna")}
        </T>
      </Fade>

      {/* beat 1 — method */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={108} size={12} fill={INK} script>
          {t(
            "find hν → compare with W₀. If hν < W₀: no emission",
            "hν nikaalo → W₀ se compare karo. Agar hν < W₀: emission nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — formula (high emphasis) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={360} y={126} w={360} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          KEmax = hν − W₀
        </Chip>
      </Fade>

      {/* beat 3 — guardrail: Law 1, threshold */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={185} size={12} fill={RED} script>
          {t(
            "Law 1 (threshold): below ν₀, no electrons — however intense",
            "Law 1 (threshold): ν₀ se neeche, koi electron nahi — chahe kitna intense ho"
          )}
        </T>
      </Fade>

      {/* beat 4 — guardrail: Law 2, instantaneous */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={216} size={12} fill={RED} script>
          {t("Law 2 (instantaneous): above ν₀, no measurable lag", "Law 2 (instantaneous): ν₀ se ऊpar, koi measurable lag nahi")}
        </T>
      </Fade>

      {/* beat 5 — explain: Laws 3 and 4 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={248} size={12} fill={INK} script>
          {t(
            "Law 3: KEmax ∝ frequency (not brightness)  ·  Law 4: photocurrent ∝ intensity",
            "Law 3: KEmax ∝ frequency (brightness nahi)  ·  Law 4: photocurrent ∝ intensity"
          )}
        </T>
      </Fade>

      {/* beat 6 — represent: V₀ vs ν graph */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 280 V 420 H 560" stroke={INK} sw={1.8} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 250 420 L 520 310" stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <Circle cx={250} cy={420} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={210} y={440} size={11} fill={RED}>
          {t("threshold", "threshold")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={420} y={350} size={11} fill={AMBER_DARK}>
          {t("slope = h/e", "slope = h/e")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={460} y={440} size={11} fill={INK}>
          {t("frequency ν", "frequency ν")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={115} y={300} size={10} fill={INK}>
          V₀
        </T>
      </Fade>

      {/* beat 7 — guardrail (high): both graphs, one equation */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={300} y={470} w={480} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("both graphs fall from eV₀ = hν − W₀", "dono graphs eV₀ = hν − W₀ se nikalte hain")}
        </Chip>
      </Fade>
    </Scene>
  );
}
