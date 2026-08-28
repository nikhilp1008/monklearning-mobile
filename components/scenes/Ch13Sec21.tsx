/**
 * Ch13 · Section 21 — "Common pitfalls and pro-tips" (closes SHM Energy)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.61, 23.69, 38.11, 48.41, 63.17, 77.25, 85.83]):
 *  0 shelf
 *  1 trap 1 (high): K & U oscillate at 2f, not f
 *  2 trap 2: K=U at A/√2, not A/2
 *  3 trap 3: E ∝ A², never E ∝ A
 *  4 trap 4: time-avg E/2 is an average, not instant equality
 *  5 pro-tip (high): use ready ratios K/E, U/E directly
 *  6 formula: Lock in — K=U at A/√2 ; E ∝ A²
 *  7 closing: these two facts answer most objective questions
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl115 size15 red weight800
 *  b2 | st x70 bl150 size13 red
 *  b3 | st x70 bl180 size13 red
 *  b4 | st x70 bl210 size13 red
 *  b5 | st x70 bl250 size14 green weight700
 *  b6 | box x180..900 y455..545 rx18 · L1 cx540 bl492 size24 · L2 cx540 bl531 size18
 *  b7 | script12 st x70 bl572
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("The four traps that cost energy marks", "Chaar traps jo energy ke marks kha jaate hain")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — trap 1, high emphasis */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={115} size={15} fill={RED} anchor="start" weight={800}>
          {t("✗ K & U oscillate at 2f (period T/2), NOT at f", "✗ K aur U 2f par oscillate (period T/2), f par NAHI")}
        </T>
      </Fade>

      {/* beat 2 — trap 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={150} size={13} fill={RED} anchor="start">
          {t("✗ K=U at x=A/√2 (≈0.707A), NOT at A/2", "✗ K=U hota hai x=A/√2 par (≈0.707A), A/2 par NAHI")}
        </T>
      </Fade>

      {/* beat 3 — trap 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={180} size={13} fill={RED} anchor="start">
          {t("✗ E ∝ A² — NEVER E ∝ A (always square the ratio)", "✗ E ∝ A² — KABHI E ∝ A nahi (ratio hamesha square karo)")}
        </T>
      </Fade>

      {/* beat 4 — trap 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={210} size={13} fill={RED} anchor="start">
          {t(
            "✗ time-avg K=U=E/2 is an AVERAGE, not true every instant",
            "✗ time-avg K=U=E/2 ek AVERAGE hai, har instant sach nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — pro-tip, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={250} size={14} fill={GREEN} anchor="start" weight={700}>
          {t(
            "✓ use ready ratios K/E=1−x²/A² , U/E=x²/A² directly",
            "✓ ready ratios use karo K/E=1−x²/A² , U/E=x²/A² seedha"
          )}
        </T>
      </Fade>

      {/* beat 6 — the memory hook */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 198 455 h 684 q 18 0 18 18 v 54 q 0 18 -18 18 h -684 q -18 0 -18 -18 v -54 q 0 -18 18 -18"
          stroke={GREEN}
          sw={2.6}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={492} size={24} fill={INK} weight={800}>
          Lock in: K = U at A/√2
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={531} size={18} fill={INK} weight={700}>
          E ∝ A²
        </T>
      </Fade>

      {/* beat 7 — the closing takeaway */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={572} size={12} fill={INK} script anchor="start">
          {t(
            "these two facts answer most objective questions here",
            "ye do facts is subtopic ke zyada tar objective questions answer karte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
