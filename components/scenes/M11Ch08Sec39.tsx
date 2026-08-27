/**
 * M11 Ch08 · Section 39 — "The HM formula and the p-q reciprocal trick"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. FLAGGED — real
 * derivation, extra eye-check (task brief).
 *
 * Math check:
 *  H of a,b: a,H,b in HP ⇒ 1/a,1/H,1/b in AP ⇒ 1/H is their AM:
 *   1/H=(1/a+1/b)/2=(a+b)/(2ab) ⇒ H=2ab/(a+b) — the standard 2-term HM.
 *  p-q trick: let b_n=1/a_n (the reciprocal AP). Given a_p=q,a_q=p ⇒
 *   b_p=1/q, b_q=1/p. (p-q)d=b_p-b_q=1/q-1/p=(p-q)/(pq) ⇒ d=1/(pq).
 *   A=b_p-(p-1)d=1/q-(p-1)/(pq)=[p-(p-1)]/(pq)=1/(pq). So b_n=A+(n-1)d=
 *   n/(pq) ⇒ a_n=1/b_n=pq/n, and a_(p+q)=pq/(p+q) by substitution.
 *
 * Beats (en [0, 6.23, 19.46, 32.17, 45.57, 58.54, 75.26, 93.77]):
 *  0 title (always-on)
 *  1 LEFT: a,H,b in HP ⇒ reciprocals in AP
 *  2 LEFT: 1/H as the AM
 *  3 LEFT: boxed H = 2ab/(a+b)
 *  4 RIGHT: work in the reciprocal AP
 *  5 RIGHT: solve for d
 *  6 RIGHT: a_n and a_(p+q)
 *  7 red-margin: reciprocate-first habit
 *
 * Layout plan — two columns, cxL=285 cxR=795:
 *  b1 | label bl100 · text bl128
 *  b2 | text bl160
 *  b3 | chip x145 y188 w280 h40
 *  b4 | label bl100 · text bl128
 *  b5 | text bl160
 *  b6 | text bl195
 *  b7 | red bar x76 y260..330 · text bl280/320 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec39({ currentTime, reveals, language }: SceneProps) {
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
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Two results that flow from reciprocating", "Do results jo reciprocate karne se milte hain")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: HP <-> AP */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={cxL} y={100} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("H of two numbers", "do numbers ka H")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={cxL} y={128} size={13} fill={INK} anchor="middle">
          {"a, H, b in HP ⇒ 1/a, 1/H, 1/b in AP"}
        </T>
      </Fade>

      {/* beat 2 — LEFT: 1/H as the AM */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={cxL} y={160} size={13} fill={INK} anchor="middle">
          {"1/H = (1/2)(1/a+1/b) = (a+b)/2ab"}
        </T>
      </Fade>

      {/* beat 3 — LEFT: boxed H */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={145} y={188} w={280} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"H = 2ab/(a+b)"}
        </Chip>
      </Fade>

      {/* beat 4 — RIGHT: the p-q setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={cxR} y={100} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("'pth term=q, qth term=p'", "'pth term=q, qth term=p'")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={cxR} y={128} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("work in the reciprocal AP", "reciprocal AP mein kaam karo")}
        </T>
      </Fade>

      {/* beat 5 — RIGHT: solve for d */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={cxR} y={160} size={13} fill={INK} anchor="middle">
          {"(p-q)d = 1/q - 1/p = (p-q)/pq  ⇒  d = 1/pq"}
        </T>
      </Fade>

      {/* beat 6 — RIGHT: a_n and a_(p+q) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={cxR} y={195} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"a_n = pq/n,   a_(p+q) = pq/(p+q)"}
        </T>
      </Fade>

      {/* beat 7 — red-margin: the habit */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 76 260 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={96} y={280} size={15} fill={RED} anchor="start" script>
          {t("the reciprocate-first habit turns messy", "reciprocate-first habit messy HP algebra ko")}
        </T>
        <T x={96} y={320} size={15} fill={RED} anchor="start" script>
          {t("HP algebra into one line of AP work", "AP ki ek line mein badal deta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
