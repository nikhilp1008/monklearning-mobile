/**
 * M11 Ch08 · Section 25 — "Sum to infinity, and why AM ≥ GM"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. FLAGGED — real
 * derivation, extra eye-check (task brief).
 *
 * Math check:
 *  Convergence: S_n=a(1-r^n)/(1-r)=a/(1-r) - ar^n/(1-r). |r|<1 ⇒ r^n→0 as
 *   n→∞, so S_∞=a/(1-r). If |r|≥1, r^n never shrinks to 0 (stays ≥1 in
 *   magnitude, or grows) — the limit doesn't exist, so the sum diverges.
 *  AM≥GM (2 numbers): (√a-√b)²≥0 ⇒ a-2√(ab)+b≥0 ⇒ (a+b)/2≥√(ab), equality
 *   iff √a=√b iff a=b. AM×HM=GM² check: AM=(a+b)/2, HM=2ab/(a+b), product
 *   =ab=GM² ✓.
 *
 * Beats (en [0, 9.73, 24.32, 37.21, 51.2, 68.1, 85.25, 100.69]):
 *  0 title (always-on)
 *  1 LEFT: S_n rewritten as two pieces
 *  2 LEFT: |r|<1 shrinks r^n
 *  3 LEFT: boxed S_infinity
 *  4 red-margin (under LEFT): |r|≥1 diverges — this IS the proof
 *  5 RIGHT: the AM-GM pillar (√a-√b)²≥0
 *  6 RIGHT: boxed AM≥GM
 *  7 closer (full width): the AM-GM-HM chain
 *
 * Layout plan — two columns, cxL=285 cxR=795:
 *  b1 | text bl128
 *  b2 | text bl158
 *  b3 | chip x115 y185 w340 h40 · note bl240
 *  b4 | red bar x76 y265..335 · text bl285/325 x96
 *  b5 | text bl128
 *  b6 | chip x625 y155 w340 h40 · note bl210
 *  b7 | text bl380 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cxL = 285;
  const cxR = 795;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} anchor="middle" script>
          {t("The convergence condition, proved", "Convergence condition, proved")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: S_n rewritten */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={cxL} y={100} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("sum to infinity", "sum to infinity")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={cxL} y={128} size={14} fill={INK} anchor="middle">
          {"S_n = a/(1-r) - ar^n/(1-r)"}
        </T>
      </Fade>

      {/* beat 2 — LEFT: shrinking */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={cxL} y={158} size={12} fill={INK_LIGHT} anchor="middle" script>
          {t("|r|<1 ⇒ each × shrinks r^n → 0", "|r|<1 ⇒ har × se r^n → 0 hota")}
        </T>
      </Fade>

      {/* beat 3 — LEFT: boxed S_infinity */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={115} y={185} w={340} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          {"S_∞ = lim (n→∞) S_n = a/(1-r)"}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={cxL} y={240} size={12} fill={MUTED} anchor="middle">{"(|r| < 1)"}</T>
      </Fade>

      {/* beat 4 — red-margin: divergence IS the proof */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 76 265 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={96} y={285} size={14} fill={RED} anchor="start" script>
          {t("if |r|≥1, r^n never vanishes —", "agar |r|≥1, r^n kabhi 0 nahi hota —")}
        </T>
        <T x={96} y={325} size={14} fill={RED} anchor="start" script>
          {t("the sum diverges. This IS the proof.", "sum diverge karta hai. Yahi proof hai.")}
        </T>
      </Fade>

      {/* beat 5 — RIGHT: the AM-GM pillar */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={cxR} y={100} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("why AM ≥ GM", "AM ≥ GM kyun")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={cxR} y={128} size={14} fill={INK} anchor="middle">
          {"for positive reals: (√a - √b)² ≥ 0"}
        </T>
      </Fade>

      {/* beat 6 — RIGHT: boxed AM ≥ GM */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={625} y={155} w={340} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"(a+b)/2 ≥ √(ab)"}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={cxR} y={210} size={12} fill={MUTED} anchor="middle">{t("equality iff a = b", "equality iff a = b")}</T>
      </Fade>

      {/* beat 7 — closer: the chain */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={380} size={15} fill={INK} anchor="middle" script>
          {t("this chains further: AM ≥ GM ≥ HM, with AM × HM = GM²", "ye chain aage badhti hai: AM ≥ GM ≥ HM, AM × HM = GM²")}
        </T>
      </Fade>
    </Scene>
  );
}
