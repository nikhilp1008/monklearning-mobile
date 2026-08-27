/**
 * C11 Chemistry Ch03 · Section 54 — "Chapter cheat sheet" (FINAL section)
 * Canvas 1080×620 · safe x36–1044, y30–596. One-screen recap of the whole
 * chapter as a stacked list of labelled rows; red bar = red-margin "high".
 *
 * Beats (en [0.0, 8.36, 22.87, 47.7, 68.18, 87.38, 106.07, 117.67]):
 *  0 title + underline
 *  1 red: LAWS — Mendeleev (atomic weight) vs Modern/Moseley (atomic number Z)
 *  2 LONG FORM — 7 periods/18 groups/period=highest n, recurrence, naming
 *  3 red: MASTER ARROW — across up/down reversal
 *  4 EXCEPTIONS — Be>B, N>O, Cl>F(EGE), Ga<Al
 *  5 CHEMISTRY — reactivity peaks, oxide trend, diagonal pairs
 *  6 red: PERIOD-2 anomaly — no d ⇒ no expanded octet
 *  7 BLOCKS — s/p/d/f ranges, strict transition rule, Cr/Cu anomalies
 *
 * Layout plan (single column, anchor start x94, red bar x70):
 *  b1 | LAWS (red, 2 lines)         | Draw | x70 y88..132  (bl100/124)
 *  b2 | LONG FORM (3 lines)         | T st | x94..?  y158..206
 *  b3 | MASTER ARROW (red, 2 lines) | Draw | x70 y228..272 (bl240/264)
 *  b4 | EXCEPTIONS (1 line)         | T st | x94..?  y298
 *  b5 | CHEMISTRY (2 lines)         | T st | x94..?  y332..356
 *  b6 | PERIOD-2 (red, 1 line)      | Draw | x70 y378..398 (bl 390)
 *  b7 | BLOCKS (2 lines)            | T st | x94..?  y424..448
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
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("chapter cheat sheet", "chapter cheat sheet")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the two laws (red-margin) */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 70 88 L 70 132" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={94} y={100} size={13} weight={800} fill={RED} anchor="start">
          {t("LAWS — Mendeleev: periodic function of atomic weight", "LAWS — Mendeleev: atomic weight ka periodic function")}
        </T>
        <T x={94} y={124} size={13} weight={800} fill={RED} anchor="start">
          {t("Modern (Moseley): periodic function of atomic number Z", "Modern (Moseley): atomic number Z ka periodic function")}
        </T>
      </Fade>

      {/* beat 2 — the long form */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={94} y={158} size={13} weight={800} fill={INK} anchor="start">
          {t("LONG FORM — 7 periods, 18 groups; period = highest n", "LONG FORM — 7 periods, 18 groups; period = highest n")}
        </T>
        <T x={94} y={182} size={12} fill={INK} anchor="start">
          {t("recurrence numbers: 2, 8, 8, 18, 18, 32, 32", "recurrence numbers: 2, 8, 8, 18, 18, 32, 32")}
        </T>
        <T x={94} y={206} size={12} fill={INK} anchor="start">
          {t("naming (Z>100): nil-un-bi-tri-quad-pent-hex-sept-oct-enn + ium", "naming (Z>100): nil-un-bi-tri-quad-pent-hex-sept-oct-enn + ium")}
        </T>
      </Fade>

      {/* beat 3 — the master arrow (red-margin) */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 228 L 70 272" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={94} y={240} size={13} weight={800} fill={RED} anchor="start">
          {"MASTER ARROW — across: Zeff↑ size↓ IE↑ EGE more(−) EN↑"}
        </T>
        <T x={94} y={264} size={13} weight={800} fill={RED} anchor="start">
          {t("down a group: every one of these reverses", "group mein neeche: sab kuch reverse ho jata")}
        </T>
      </Fade>

      {/* beat 4 — exception flags */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={94} y={298} size={13} weight={800} fill={INK} anchor="start">
          {"EXCEPTIONS — Be>B, N>O (IE dips) · Cl>F (EGE) · Ga<Al (size, IE)"}
        </T>
      </Fade>

      {/* beat 5 — chemical trends */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={94} y={332} size={13} weight={800} fill={INK} anchor="start">
          {t("CHEMISTRY — reactivity peaks at both ends of a period", "CHEMISTRY — reactivity period ke dono siron par peak karti")}
        </T>
        <T x={94} y={356} size={12} fill={INK} anchor="start">
          {"oxides: Na₂O basic → Al₂O₃ amphoteric → Cl₂O₇ acidic · diagonal: Li-Mg, Be-Al, B-Si"}
        </T>
      </Fade>

      {/* beat 6 — period-2 anomaly (red-margin) */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 70 378 L 70 398" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={94} y={390} size={13} weight={800} fill={RED} anchor="start">
          {t("PERIOD-2 — no d-orbitals ⇒ no expanded octet: N max covalency 4, F only −1", "PERIOD-2 — d-orbitals nahi ⇒ expanded octet nahi: N max covalency 4, F sirf −1")}
        </T>
      </Fade>

      {/* beat 7 — the blocks */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={94} y={424} size={13} weight={800} fill={INK} anchor="start">
          {t("BLOCKS — s(1-2) · p(13-18) · d(3-12) · f(below)", "BLOCKS — s(1-2) · p(13-18) · d(3-12) · f(neeche)")}
        </T>
        <T x={94} y={448} size={12} fill={INK} anchor="start">
          {t("strict transition needs partial d ⇒ Zn,Cd,Hg excluded · anomalies: Cr, Cu", "strict transition ko partial d chahiye ⇒ Zn,Cd,Hg excluded · anomalies: Cr, Cu")}
        </T>
      </Fade>
    </Scene>
  );
}
