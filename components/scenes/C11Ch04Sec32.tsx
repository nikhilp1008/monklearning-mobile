/**
 * C11 Chemistry Ch04 · Section 32 — "Definitions and rules to state precisely in exams"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: formulas (definition rows).
 *
 * Beats (en [0, 8.53, 28.16, 45.31, 63.83, 85.08, 108.2, 128.0]):
 *  0 anchor
 *  1 coordinate bond definition row
 *  2 back bonding definition row
 *  3 BX3 Lewis acidity order fact
 *  4 Bent's rule row
 *  5 Drago's rule row
 *  6 diborane electron count fact
 *  7 3c-2e bond definition row
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows = [
    {
      n: 1,
      y: 105,
      title: "COORDINATE (DATIVE) BOND",
      detail: t(
        "both e⁻ from ONE atom (donor, lone pair) → other (acceptor, vacant orbital); arrow-drawn; identical once formed",
        "dono e⁻ EK atom se (donor, lone pair) → doosre ko (acceptor, vacant orbital); arrow-drawn; banne ke baad identical"
      ),
    },
    {
      n: 2,
      y: 151,
      title: t("BACK BONDING", "BACK BONDING"),
      detail: t(
        "secondary π donation: filled orbital (LP) → adjacent vacant orbital (already σ-bonded); pπ-pπ or pπ-dπ",
        "secondary π donation: filled orbital (LP) → adjacent vacant orbital (pehle se σ-bonded); pπ-pπ ya pπ-dπ"
      ),
    },
    {
      n: 4,
      y: 227,
      title: "BENT'S RULE",
      detail: t(
        "s-character → electropositive subs/LPs · p-character → electronegative subs → smaller angle",
        "s-character → electropositive subs/LPs · p-character → electronegative subs → chhota angle"
      ),
    },
    {
      n: 5,
      y: 273,
      title: "DRAGO'S RULE",
      detail: t(
        "heavy, low-EN centre → no effective hybridisation → ~pure p bonds → angle ≈ 90°",
        "heavy, low-EN centre → effective hybridisation nahi → ~pure p bonds → angle ≈ 90°"
      ),
    },
    {
      n: 7,
      y: 349,
      title: "3c-2e BOND",
      detail: t(
        "ONE bonding pair shared among 3 atoms (B–H–B bridges in diborane) — hallmark of electron-deficient molecules",
        "EK bonding pair 3 atoms mein shared (diborane ke B–H–B bridges) — electron-deficient molecules ki pehchaan"
      ),
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Definitions to state precisely", "Precisely likhne wali definitions")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 400 80 C 460 76, 620 76, 680 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("write these exactly as the exam expects", "inhe bilkul waise likho jaise exam chahta")}
        </T>
      </Fade>

      {/* definition rows */}
      {rows.map((r) => (
        <React.Fragment key={r.n}>
          <Draw on={beat >= r.n} delay={dl(r.n, 0.1)} d={`M 45 ${r.y} h 990 v 38 h -990 z`} stroke={INK} sw={1.6} dur={0.4} />
          <Draw on={beat >= r.n} delay={dl(r.n, 0.1)} d={`M 45 ${r.y} L 45 ${r.y + 38}`} stroke={RED} sw={4} dur={0.3} />
          <Fade on={beat >= r.n} delay={dl(r.n, 0.4)}>
            <T x={540} y={r.y + 16} size={12.5} weight={800} fill={RED}>
              {r.title}
            </T>
          </Fade>
          <Fade on={beat >= r.n} delay={dl(r.n, 0.8)}>
            <T x={540} y={r.y + 32} size={9.5} fill={INK}>
              {r.detail}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 3 — BX3 Lewis acidity order */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={213} size={11.5} fill={INK}>
          {t(
            "BX₃ Lewis acidity: BF₃ < BCl₃ < BBr₃ < BI₃ (back bonding strongest in F, weakest in I)",
            "BX₃ Lewis acidity: BF₃ < BCl₃ < BBr₃ < BI₃ (back bonding F mein strongest, I mein weakest)"
          )}
        </T>
      </Fade>

      {/* beat 6 — diborane electron count */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={335} size={11.5} fill={INK}>
          {t(
            "diborane: 2B×3 + 6H×1 = 12 e⁻, but 7 normal bonds need 14 → deficient by 2",
            "diborane: 2B×3 + 6H×1 = 12 e⁻, par 7 normal bonds ko 14 chahiye → 2 se deficient"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
