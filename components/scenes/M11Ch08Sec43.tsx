/**
 * M11 Ch08 · Section 43 — "The p-th term is q, the q-th term is p"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples. Same result as
 * Sec39's RIGHT column, now worked as its own standalone example.
 *
 * Math check: A_0+(p-1)d=1/q, A_0+(q-1)d=1/p. Subtract: (p-q)d=1/q-1/p=
 * (p-q)/(pq) ⇒ d=1/(pq). A_0=1/q-(p-1)/(pq)=[p-(p-1)]/(pq)=1/(pq).
 * 1/a_n=A_0+(n-1)d=1/(pq)+(n-1)/(pq)=n/(pq) ⇒ a_n=pq/n, a_(p+q)=pq/(p+q).
 *
 * Beats (en [0, 11.52, 18.35, 30.46, 41.13, 53.25, 69.38]):
 *  0 title (always-on)
 *  1 text: reciprocate, set up A_0 and d
 *  2 formula: the two AP equations
 *  3 formula: d and A_0
 *  4 formula: 1/a_n
 *  5 formula: a_n and a_(p+q)
 *  6 red-margin: memorise this one
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl170 cx540
 *  b4 | text bl205 cx540
 *  b5 | text bl240 cx540 (bold)
 *  b6 | red bar x76 y265..335 · text bl285/325 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t(
            "pth term of an HP is q, qth term is p. Find the (p+q)th and nth terms.",
            "HP ka pth term q hai, qth term p. (p+q)th aur nth terms nikalo."
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "reciprocate to an AP with first term A_0, common difference d",
            "AP mein reciprocate karo: first term A_0, common difference d"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two equations */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={15} fill={INK} anchor="middle">
          {"A_0+(p-1)d = 1/q,   A_0+(q-1)d = 1/p"}
        </T>
      </Fade>

      {/* beat 3 — d and A_0 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={16} fill={INK} anchor="middle">
          {"d = 1/pq,   A_0 = 1/pq"}
        </T>
      </Fade>

      {/* beat 4 — 1/a_n */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={205} size={16} fill={INK} anchor="middle">
          {"1/a_n = 1/pq + (n-1)/pq = n/pq"}
        </T>
      </Fade>

      {/* beat 5 — a_n and a_(p+q) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={240} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"a_n = pq/n,   a_(p+q) = pq/(p+q)"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: memorise this */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 265 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={285} size={15} fill={RED} anchor="start" script>
          {t("a result worth memorising outright —", "ek result jo yaad rakhne layak hai —")}
        </T>
        <T x={96} y={325} size={15} fill={RED} anchor="start" script>
          {t("it recurs across JEE Main", "JEE Main mein baar baar aata hai")}
        </T>
      </Fade>
    </Scene>
  );
}
