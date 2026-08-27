/**
 * M11 Ch08 · Section 24 — "nth term and the sum: multiply-by-r and subtract"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. FLAGGED — real derivation,
 * extra eye-check (task brief).
 *
 * Math check (both derivations verified by hand):
 *  nth term: (a_2/a_1)(a_3/a_2)...(a_n/a_(n-1)) telescopes to a_n/a_1 —
 *   every interior factor cancels — and each factor is r, (n-1) of them,
 *   so a_n/a_1=r^(n-1) ⇒ a_n=a·r^(n-1).
 *  Sum: S_n=a+ar+...+ar^(n-1); rS_n=ar+ar²+...+ar^n. Subtracting, every
 *   middle term (ar,ar²,...,ar^(n-1)) cancels, leaving S_n-rS_n=a-ar^n
 *   ⇒ S_n=a(1-r^n)/(1-r), r≠1.
 *
 * Beats (en [0, 13.4, 28.59, 38.23, 50.26, 68.44, 82.43, 95.74]):
 *  0 title (always-on)
 *  1 LEFT: telescoping product stack
 *  2 LEFT: boxed result a_n = a·r^(n-1)
 *  3 RIGHT: S_n and rS_n, aligned for subtraction
 *  4 RIGHT: S_n - rS_n = a - ar^n
 *  5 RIGHT: S_n boxed, both forms (r≠1)
 *  6 red-margin: r=1 special case
 *  7 closer: why interior terms cancel
 *
 * Layout plan — two columns, cxL=285 cxR=795:
 *  b1 | label bl100 · 4 stack lines bl122/152/182/212 · caption bl244
 *  b2 | chip x145 y270 w280 h40
 *  b3 | label bl100 · 2 lines bl122/152 · caption bl186
 *  b4 | line bl220
 *  b5 | line bl252 · note bl272
 *  b6 | red bar x76 y300..370 · text bl320/360 x96
 *  b7 | text bl410 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec24({ currentTime, reveals, language }: SceneProps) {
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
          {t("Two named results: the nth term and the sum of n terms", "Do named results: nth term aur n terms ka sum")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: telescoping product stack */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={cxL} y={100} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("nth term, by telescoping products", "nth term, telescoping products se")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={cxL} y={122} size={14} fill={INK} anchor="middle">{"a_2/a_1 = r"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={cxL} y={152} size={14} fill={INK} anchor="middle">{"a_3/a_2 = r"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={cxL} y={182} size={14} fill={MUTED} anchor="middle">{"⋮"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={cxL} y={212} size={14} fill={INK} anchor="middle">{"a_n/a_(n-1) = r"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={cxL} y={244} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("multiply all (n-1) equations →", "saari (n-1) equations multiply karo →")}
        </T>
      </Fade>

      {/* beat 2 — LEFT: boxed result */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={145} y={270} w={280} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"a_n = a·r^(n-1)"}
        </Chip>
      </Fade>

      {/* beat 3 — RIGHT: S_n and rS_n */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <T x={cxR} y={100} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("the sum, multiply by r", "sum, r se multiply karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={cxR} y={122} size={14} fill={INK} anchor="middle">{"S_n = a + ar + ... + ar^(n-1)"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={cxR} y={152} size={14} fill={INK} anchor="middle">{"rS_n = ar + ar² + ... + ar^n"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={cxR} y={186} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("subtract ↓", "subtract karo ↓")}
        </T>
      </Fade>

      {/* beat 4 — RIGHT: the subtraction */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={cxR} y={220} size={16} fill={INK} anchor="middle">{"S_n - rS_n = a - ar^n"}</T>
      </Fade>

      {/* beat 5 — RIGHT: S_n boxed, both forms */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={cxR} y={252} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_n = a(1-r^n)/(1-r) = a(r^n-1)/(r-1)"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={cxR} y={272} size={12} fill={MUTED} anchor="middle">{"(r ≠ 1)"}</T>
      </Fade>

      {/* beat 6 — red-margin: r=1 special case */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 300 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={320} size={15} fill={RED} anchor="start" script>
          {t("if r=1, every term is a,", "agar r=1, har term a hai,")}
        </T>
        <T x={96} y={360} size={15} fill={RED} anchor="start" script>
          {t("S_n = na — never divide by zero", "S_n = na — kabhi zero se divide mat karo")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={410} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "interior terms cancel: only the first of one line, last of the other, survive",
            "interior terms cancel: sirf ek line ka first, doosri ka last, bachta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
