/**
 * M11 Ch08 · Section 10 — "Deriving the nth term and the Gauss sum"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. FLAGGED — real derivation,
 * extra eye-check (task brief).
 *
 * Math check (both derivations verified by hand before authoring):
 *  nth term: stacking a_2-a_1=d, a_3-a_2=d, ..., a_n-a_(n-1)=d and adding —
 *   every interior term cancels telescoping-style, leaving a_n-a_1=(n-1)d.
 *  Gauss sum: S_n forwards + S_n backwards, column k = [a+(k-1)d]+[l-(k-1)d]=a+l
 *   for every one of the n columns ⇒ 2S_n=n(a+l)=n[2a+(n-1)d] (since l=a+(n-1)d).
 *
 * Beats (en [0, 10.33, 23.38, 36.18, 46.76, 61.27, 74.92, 88.66]):
 *  0 title (always-on) — "Two board-derivable results you must reproduce"
 *  1 LEFT: stack the defining equations
 *  2 LEFT: boxed result a_n = a + (n-1)d
 *  3 RIGHT: S_n forwards and backwards
 *  4 RIGHT: 2S_n = n[2a+(n-1)d], with the "each column" note
 *  5 RIGHT: S_n boxed, both forms
 *  6 red-margin: Gauss's trick
 *  7 closer: n is a positive integer
 *
 * Layout plan — two columns, cxL=285 cxR=795:
 *  b1 | label bl100 · 4 stack lines bl122/152/182/212 · caption bl244
 *  b2 | chip x145 y270 w280 h40
 *  b3 | label bl100 · 2 lines bl122/152 · caption bl186
 *  b4 | line bl220 · note bl248
 *  b5 | line bl280 (bold)
 *  b6 | red bar x76 y355..425 · text bl375/415 x96
 *  b7 | text bl460 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, MUTED, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec10({ currentTime, reveals, language }: SceneProps) {
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
          {t("Two board-derivable results you must reproduce", "Do results jo board pe derive karke aane chahiye")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: stack the defining equations */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={cxL} y={100} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("nth term, by stacking", "nth term, stacking se")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={cxL} y={122} size={14} fill={INK} anchor="middle">{"a_2 - a_1 = d"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={cxL} y={152} size={14} fill={INK} anchor="middle">{"a_3 - a_2 = d"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={cxL} y={182} size={14} fill={MUTED} anchor="middle">{"⋮"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={cxL} y={212} size={14} fill={INK} anchor="middle">{"a_n - a_(n-1) = d"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={cxL} y={244} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("add all (n-1) equations →", "saari (n-1) equations jodo →")}
        </T>
      </Fade>

      {/* beat 2 — LEFT: boxed result (interior terms cancel telescoping-style) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={145} y={270} w={280} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {"a_n = a + (n-1)d"}
        </Chip>
      </Fade>

      {/* beat 3 — RIGHT: forwards and backwards */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <T x={cxR} y={100} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("the sum, by Gauss's trick", "sum, Gauss ki trick se")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={cxR} y={122} size={14} fill={INK} anchor="middle">{"S_n = a + (a+d) + ... + l"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={cxR} y={152} size={14} fill={INK} anchor="middle">{"S_n = l + (l-d) + ... + a"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={cxR} y={186} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("add column by column ↓", "column by column jodo ↓")}
        </T>
      </Fade>

      {/* beat 4 — RIGHT: 2S_n, with the column-pairing note */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={cxR} y={220} size={16} fill={INK} anchor="middle">{"2S_n = n[2a + (n-1)d]"}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={cxR} y={248} size={12} fill={MUTED} anchor="middle">{t("(each column: a + l)", "(har column: a + l)")}</T>
      </Fade>

      {/* beat 5 — RIGHT: S_n, both forms */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={cxR} y={280} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_n = (n/2)[2a + (n-1)d] = (n/2)(a + l)"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: Gauss's trick */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 355 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={375} size={15} fill={RED} anchor="start" script>
          {t("this is Gauss's trick — pair", "yahi Gauss ki trick hai — pair")}
        </T>
        <T x={96} y={415} size={15} fill={RED} anchor="start" script>
          {t("first-with-last, each column = a + l", "first-with-last, har column = a + l")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={460} size={14} fill={INK} anchor="middle" script>
          {t("both formulas assume n is a positive integer", "dono formulas maante hain n positive integer hai")}
        </T>
      </Fade>
    </Scene>
  );
}
