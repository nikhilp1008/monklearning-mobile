/**
 * C11 Ch07 · Section 35 — "The reactivity series, halogen order, and Stock notation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 8.02, 15.53, 32.85, 46.85, 58.62, 63.91, 77.23]):
 *  0 heading: the reactivity (activity) series
 *  1 chain (2 lines): K>Na>Ca>Mg>Al>Zn>Fe / Pb>(H)>Cu>Hg>Ag>Au
 *  2 tags: MORE REACTIVE (left) · LESS REACTIVE (right)
 *  3 red-margin: higher displaces any lower's ion; above (H) → liberates H₂ from acids
 *  4 halogen order: F₂ > Cl₂ > Br₂ > I₂ (displacing power)
 *  5 heading: Stock notation
 *  6 Roman numeral in (parens), no space/sign for + — iron(III), copper(II), manganese(VII)
 *  7 red-margin: Fe₃O₄ = mixed oxide FeO·Fe₂O₃, one Fe(II)+two Fe(III), honestly recorded
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | chain line1 (sans18)    | T mid | x540 bl140
 *  b1 | chain line2 (sans18)    | T mid | x540 bl170
 *  b2 | tag L (sans12 red) x70 bl155 st; tag R (sans12 amber) x1010 bl155 end
 *  b3 | margin bar x64 y210..246, text (sans15 red) x80 bl228
 *  b4 | line (sans16)           | T mid | x540 bl280
 *  b5 | heading (sans18 700)    | T mid | x540 bl320
 *  b6 | line (sans15)           | T mid | x540 bl354
 *  b7 | margin bar x64 y380..420, 2 lines (sans14 red) x80 bl398/418
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
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("higher in the series always wins the electrons", "series mein zyada upar hamesha electrons jeetta hai")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("the reactivity (activity) series", "reactivity (activity) series")}
        </T>
      </Fade>

      {/* ===== beat 1 — the chain ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={140} size={18} fill={INK} weight={700}>
          K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={170} size={18} fill={INK} weight={700}>
          Pb &gt; (H) &gt; Cu &gt; Hg &gt; Ag &gt; Au
        </T>
      </Fade>

      {/* ===== beat 2 — direction tags ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={70} y={155} size={12} fill={RED} weight={700} anchor="start">
          {t("MORE REACTIVE", "ZYADA REACTIVE")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={1010} y={155} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          {t("LESS REACTIVE", "KAM REACTIVE")}
        </T>
      </Fade>

      {/* ===== beat 3 — the rule ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 210 L 64 246" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={228} size={15} fill={RED} weight={700} anchor="start">
          {t(
            "higher displaces any lower's ion; above (H) → liberates H₂ from acids",
            "upar wala kisi bhi neeche wale ka ion displace karta; (H) se upar → acids se H₂"
          )}
        </T>
      </Fade>

      {/* ===== beat 4 — halogen order ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={280} size={16} fill={INK} weight={700}>
          {t("halogen order: F₂ > Cl₂ > Br₂ > I₂ (displacing power)", "halogen order: F₂ > Cl₂ > Br₂ > I₂ (displacing power)")}
        </T>
      </Fade>

      {/* ===== beat 5 — Stock notation heading ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={320} size={18} fill={INK} weight={700}>
          {t("Stock notation", "Stock notation")}
        </T>
      </Fade>

      {/* ===== beat 6 — the rule ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={354} size={15} fill={INK}>
          {t(
            "O.N. as Roman numeral in (parens), no space/sign for + — iron(III), copper(II), manganese(VII)",
            "O.N. Roman numeral mein (parens), no space, + ke liye sign nahi — iron(III), copper(II), manganese(VII)"
          )}
        </T>
      </Fade>

      {/* ===== beat 7 — Fe3O4 example ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 380 L 64 420" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={398} size={14} fill={RED} weight={700} anchor="start">
          Fe₃O₄ = {t("mixed oxide", "mixed oxide")}, FeO · Fe₂O₃
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={80} y={418} size={14} fill={RED} anchor="start">
          {t("one Fe(II) + two Fe(III) — Stock notation records both honestly", "ek Fe(II) + do Fe(III) — Stock notation dono honestly record karta")}
        </T>
      </Fade>
    </Scene>
  );
}
