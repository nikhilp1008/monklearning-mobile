/**
 * M11 Ch01 · Section 17 — "Advanced: odd-only subsets and the complement principle"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples (ADVANCED).
 *
 * Beats (board_reveal_at_english [0, 10.5, 24.92, 38.31, 52.31, 73.05]):
 *  0 title (always-on)
 *  1 split: O = {1,3,5,7} (n=4), E = {2,4,6} (n=3)
 *  2 (a) "only odd numbers" = a subset of O
 *  3 (a) 2⁴ = 16 subsets (includes ∅)
 *  4 (b) "at least one even" = all subsets − subsets with no even
 *  5 (b) 2⁷ − 2⁴ = 128 − 16 = 112
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "A = {1,2,3,4,5,6,7}" (18)    | T st | x100 y120
 *  b1 | "O = {1,3,5,7} (n=4)" (green) | T st | x100 y150
 *  b1 | "E = {2,4,6} (n=3)" (amber)   | T st | x100 y178
 *  divider line x540 y290..410
 *  b2 | "(a) only odd numbers" (17)  | T st | x120 y300
 *  b2 | "= subset of O" (15)         | T st | x120 y330
 *  b3 | "2⁴ = 16" (22,green)         | T st | x120 y370
 *  b3 | "(includes ∅)" script         | T st | x120 y398
 *  b4 | "(b) at least one even" (17) | T st | x600 y300
 *  b4 | "= (all subsets) − (no even)"| T st | x600 y330
 *  b5 | "2⁷ − 2⁴ = 128 − 16" (18)    | T st | x600 y370
 *  b5 | "= 112" (22,red)             | T st | x600 y398
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch01Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("A = {1..7}: two subset counts", "A = {1..7}: do subset counts")}
        </T>
      </Fade>

      {/* beat 1 — split into odds and evens */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={100} y={120} size={18} fill={INK} anchor="start" weight={700}>
          {"A = {1, 2, 3, 4, 5, 6, 7}"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={100} y={150} size={16} fill={GREEN} anchor="start" weight={700}>
          {"O = {1, 3, 5, 7}   (n = 4)"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={100} y={178} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {"E = {2, 4, 6}   (n = 3)"}
        </T>
      </Fade>

      {/* divider between part (a) and part (b) */}
      <Draw on={beat >= 2} d="M 540 290 L 540 410" stroke={MUTED} sw={1.4} delay={dl(2, 0.2)} dur={0.6} />

      {/* beat 2 — (a) setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={120} y={300} size={17} fill={INK} anchor="start" weight={700}>
          {t("(a) only odd numbers", "(a) sirf odd numbers")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={120} y={330} size={15} fill={INK} anchor="start">
          {t("= a subset of O", "= O ka subset")}
        </T>
      </Fade>

      {/* beat 3 — (a) count */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={120} y={370} size={22} fill={GREEN} anchor="start" weight={800}>
          {"2⁴ = 16"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={120} y={398} size={12} fill={MUTED} script anchor="start">
          {t("(includes ∅)", "(∅ bhi shaamil)")}
        </T>
      </Fade>

      {/* beat 4 — (b) setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={600} y={300} size={17} fill={INK} anchor="start" weight={700}>
          {t("(b) at least one even", "(b) kam se kam ek even")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={600} y={330} size={14} fill={INK} anchor="start">
          {t("= (all subsets) − (no even)", "= (all subsets) − (no even)")}
        </T>
      </Fade>

      {/* beat 5 — (b) count via complement */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={600} y={370} size={18} fill={INK} anchor="start" weight={700}>
          {"2⁷ − 2⁴ = 128 − 16"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={600} y={398} size={22} fill={RED} anchor="start" weight={800}>
          {"= 112"}
        </T>
      </Fade>
    </Scene>
  );
}
