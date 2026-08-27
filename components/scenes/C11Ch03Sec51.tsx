/**
 * C11 Chemistry Ch03 · Section 51 — "Worked example: identify X with configuration [Ar]3d5 4s1"
 * Canvas 1080×620 · safe x36–1044, y30–596. Closes subtopic 4 and the worked examples.
 *
 * Beats (en [0.0, 16.47, 22.44, 47.27, 61.1, 77.48, 93.87, 108.89]):
 *  0 title + underline
 *  1 (a) why does this differ from naive Aufbau?
 *  2 red-margin: naive predicts 3d⁴4s²; actual 3d⁵4s¹ (half-filled wins)
 *  3 reasons (symmetry/exchange/repulsion) ⇒ X = chromium (Z=24)
 *  4 (b) placement: period 4 · d-block · group 6 (equation)
 *  5 red-margin (c): X is a transition element — strict rule, 3d⁵ qualifies
 *  6 contrast: Cr (partial d, transition) vs Zn (full d, NOT transition)
 *  7 closing green stamp: anomalous config, then place, then classify
 *
 * Layout plan:
 *  b2 | red bar + 2 lines            | Draw | x70  y128..178 (bl146/172)
 *  b5 | red bar + 2 lines            | Draw | x70  y304..354 (bl322/346)
 *  b6 | 2 contrast cards             | Draw | x220..520 & x560..860 y378..454
 *  b7 | closing stamp (green)        | Chip | x200..880 y476..510
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("worked example: identify X from [Ar]3d⁵4s¹", "worked example: [Ar]3d⁵4s¹ se X pehchano")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 350 88 C 420 84, 660 84, 730 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — part (a) */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={106} size={15} weight={700} fill={INK}>
          {t("(a) why does this differ from naive Aufbau?", "(a) ye naive Aufbau se alag kyun hai?")}
        </T>
      </Fade>

      {/* beat 2 — red-margin: naive vs actual */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 70 128 L 70 178" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={94} y={146} size={13} weight={700} fill={RED} anchor="start">
          {t("naive Aufbau predicts: [Ar]3d⁴4s²", "naive Aufbau predict karta: [Ar]3d⁴4s²")}
        </T>
        <T x={94} y={172} size={14} weight={800} fill={INK} anchor="start">
          {t("actual: [Ar]3d⁵4s¹ — half-filled 3d⁵ wins", "actual: [Ar]3d⁵4s¹ — half-filled 3d⁵ jeetta")}
        </T>
      </Fade>

      {/* beat 3 — reasons + identity */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={204} size={12.5} fill={MUTED} script>
          {t("symmetrical distribution + max exchange energy + min repulsion", "symmetrical distribution + max exchange energy + min repulsion")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={540} y={228} size={16} weight={800} fill={GREEN}>
          {"⇒ X = CHROMIUM (Z = 24)"}
        </T>
      </Fade>

      {/* beat 4 — part (b) placement */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={260} size={15} weight={700} fill={INK}>{"PERIOD 4 · d-BLOCK · GROUP 6"}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={284} size={12.5} fill={MUTED}>
          {t("group = (n-1)d + ns = 5 + 1 = 6", "group = (n-1)d + ns = 5 + 1 = 6")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: part (c) classification */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 70 304 L 70 354" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={94} y={322} size={15} weight={800} fill={RED} anchor="start">
          {t("(c) X IS A TRANSITION ELEMENT", "(c) X EK TRANSITION ELEMENT HAI")}
        </T>
        <T x={94} y={346} size={13} fill={INK} anchor="start">
          {t("strict rule: partial d-subshell (atom or ion) — 3d⁵ qualifies ✓", "strict rule: partial d-subshell (atom ya ion) — 3d⁵ qualify karta ✓")}
        </T>
      </Fade>

      {/* beat 6 — contrast: Cr vs Zn */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 220 378 h 300 v 76 h -300 z" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.35)} d="M 560 378 h 300 v 76 h -300 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={370} y={400} size={13} weight={800} fill={INK}>{t("chromium (Cr)", "chromium (Cr)")}</T>
        <T x={370} y={420} size={12} fill={MUTED}>{"3d⁵4s¹"}</T>
        <T x={370} y={442} size={12} weight={800} fill={GREEN}>
          {t("partially filled ⇒ transition ✓", "partially filled ⇒ transition ✓")}
        </T>

        <T x={710} y={400} size={13} weight={800} fill={INK}>{t("zinc (Zn)", "zinc (Zn)")}</T>
        <T x={710} y={420} size={12} fill={MUTED}>{"3d¹⁰4s²"}</T>
        <T x={710} y={442} size={12} weight={800} fill={RED}>
          {t("full (atom + Zn²⁺) ⇒ NOT transition ✗", "full (atom + Zn²⁺) ⇒ transition NAHI ✗")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={476} w={680} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("anomalous config, then place, then classify", "anomalous config, phir place, phir classify")}
        </Chip>
      </Fade>
    </Scene>
  );
}
