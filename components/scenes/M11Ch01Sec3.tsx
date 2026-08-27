/**
 * M11 Ch01 · Section 3 — "Empty, singleton, finite, infinite — and equal vs equivalent"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 10.41, 30.89, 37.63, 49.24, 60.16, 69.63]):
 *  0 title (always-on)
 *  1 GUARDRAIL first: { } truly empty (green) vs {0} / {∅} — one element, NOT empty (red)
 *  2 singleton: ring {0} — exactly one element
 *  3 finite vs infinite: A={1..5} n(A)=5 vs B={1,2,3,…} can't finish counting
 *  4 equal sets: A={1,2,3}, B={3,1,2}; mutual containment ⇒ A = B
 *  5 equivalent sets: {1,2,3} & {a,b,c}, same cardinality n=n=3
 *  6 LAND: equal ⇒ equivalent ✓   but   equivalent ⇒ equal ✗
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "{ }"/"{0}"/"{∅}" (32,w800) | T mid | x165/415/685 y150 (bl 150)
 *  b1 | labels ×3 (script 14)       | T mid | x165/415/685 y190 (bl 190)
 *  b2 | ring around "{0}"           | Draw  | c(415,142) rx40 ry23
 *  b2 | "= singleton"               | T st  | x460 y150 (bl 150)
 *  b3 | "A = {1,2,3,4,5}" (24 ink)  | T st  | x100 y320 (bl 320)
 *  b3 | "n(A) = 5 — finite" (green) | T st script | x100 y350 (bl 350)
 *  b3 | "B = {1,2,3,…}" (24 ink)    | T st  | x560 y320 (bl 320)
 *  b3 | "can't finish — infinite" (red) | T st script | x560 y350 (bl 350)
 *  b4 | "A={1,2,3}" / "B={3,1,2}"   | T st  | x100/400 y410 (bl 410)
 *  b4 | "A⊆B and B⊆A ⇒ A=B" (green) | T st  | x100 y445 (bl 445)
 *  b5 | "{1,2,3}" / "{a,b,c}" (22)  | T mid | x300/780 y495 (bl 495)
 *  b5 | "same cardinality n(A)=n(B)=3" | T mid script green | x540 y533 (bl 533)
 *  b6 | "equal⇒equivalent ✓" / "equivalent⇒equal ✗" | T end/st | x536/544 y572
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch01Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={28} fill={RED} script>
          {t("classifying sets & comparing them", "sets classify aur compare karna")}
        </T>
      </Fade>

      {/* beat 1 — the trap: { } truly empty vs {0} / {∅} — one element */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={165} y={150} size={32} fill={GREEN} weight={800}>
          {"{ }"}
        </T>
        <T x={165} y={190} size={14} fill={GREEN} script>
          {t("0 elements — TRULY empty", "0 elements — sach mein empty")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={415} y={150} size={32} fill={INK} weight={800}>
          {"{0}"}
        </T>
        <T x={415} y={190} size={14} fill={RED} script>
          {t("1 element (0) — NOT empty", "1 element (0) — empty NAHI")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={685} y={150} size={32} fill={INK} weight={800}>
          {"{∅}"}
        </T>
        <T x={685} y={190} size={14} fill={RED} script>
          {t("1 element (∅ itself) — NOT empty", "1 element (∅ khud) — empty NAHI")}
        </T>
      </Fade>

      {/* beat 2 — singleton: exactly one element */}
      <Draw
        on={beat >= 2}
        d={ringD(415, 142, 40, 23)}
        stroke={AMBER_DARK}
        sw={2.4}
        delay={dl(2, 0.3)}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={460} y={150} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("= singleton", "= singleton")}
        </T>
      </Fade>

      {/* beat 3 — finite vs infinite */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={100} y={320} size={24} fill={INK} anchor="start" weight={700}>
          {"A = {1, 2, 3, 4, 5}"}
        </T>
        <T x={100} y={350} size={15} fill={GREEN} script anchor="start">
          {t("n(A) = 5 — finite", "n(A) = 5 — finite")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={560} y={320} size={24} fill={INK} anchor="start" weight={700}>
          {"B = {1, 2, 3, …}"}
        </T>
        <T x={560} y={350} size={15} fill={RED} script anchor="start">
          {t("can't finish counting — infinite", "kabhi khatam nahi — infinite")}
        </T>
      </Fade>

      {/* beat 4 — equal sets: mutual containment */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={100} y={410} size={22} fill={INK} anchor="start" weight={700}>
          {"A = {1, 2, 3}"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={400} y={410} size={22} fill={INK} anchor="start" weight={700}>
          {"B = {3, 1, 2}"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={100} y={445} size={18} fill={GREEN} anchor="start" weight={700}>
          {"A ⊆ B  and  B ⊆ A  ⇒  A = B"}
        </T>
      </Fade>

      {/* beat 5 — equivalent sets: same cardinality */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={300} y={495} size={22} fill={INK} weight={700}>
          {"{1, 2, 3}"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={780} y={495} size={22} fill={INK} weight={700}>
          {"{a, b, c}"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={533} size={15} fill={GREEN} script>
          {t("same cardinality: n(A) = n(B) = 3", "same cardinality: n(A) = n(B) = 3")}
        </T>
      </Fade>

      {/* beat 6 — LAND: equal ⇒ equivalent, but not conversely */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={536} y={572} size={16} fill={GREEN} anchor="end" weight={700}>
          {t("equal ⇒ equivalent ✓", "equal ⇒ equivalent ✓")}
        </T>
        <T x={544} y={572} size={16} fill={RED} anchor="start" weight={700}>
          {t("equivalent ⇒ equal ✗", "equivalent ⇒ equal ✗")}
        </T>
      </Fade>
    </Scene>
  );
}
