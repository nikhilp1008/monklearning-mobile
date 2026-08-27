/**
 * C11 Ch01 · Section 43 — "Pitfalls and the 100 gram trick"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,5.8,20.99,41.39,55.47,66.56,89.61,114.44]):
 *  0 anchor: closing with the four mistakes that appear most often
 *  1 pitfall 1: ratios of mass instead of moles
 *  2 pitfall 2: rounding away genuine fractions
 *  3 pitfall 3: stopping at the empirical formula
 *  4 pitfall 4: measuring combustion oxygen directly
 *  5 the pro-tip: the 100g sample trick + sanity check (boxed)
 *  6 four memory aids
 *  7 closing: next — Part 4, stoichiometry and concentration terms
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script15 ink)        | T mid | x540  y95
 *  b1-4 | mistake (13 red, start)    | T st  | x90   y130/168/206/244
 *  b1-4 | rule (13 green, start)     | T st  | x560  y130/168/206/244
 *  b5 | box (dashed amber, w500h90)  | Draw  | x290..790 y290..380
 *  b5 | title/l1/l2 inside           | T mid | x540  y315/340/365
 *  b6 | aid l1-4 (13 amber-drk)      | T mid | x540  y398/419/440/461
 *  b7 | closing (script14 green)     | T mid | x540  y490
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [string, string, string, string][] = [
  [
    "ratios of MASS instead of moles?",
    "moles ke bajaye MASS ke ratios?",
    "÷ atomic mass FIRST to reach moles — mass ratios are meaningless",
    "pehle atomic mass se ÷ karke moles tak pahuncho — mass ratios bemani hain",
  ],
  [
    "rounding away genuine fractions?",
    "genuine fractions ko round karke mita dena?",
    ".5/.33/.25 are REAL → ×2/×3/×4 — only ignore noise like 1.98",
    ".5/.33/.25 REAL hain → ×2/×3/×4 — sirf 1.98 jaisa noise ignore karo",
  ],
  [
    "stopping at the empirical formula?",
    "empirical formula par ruk jaana?",
    "M or VD given? compute n and multiply — that data wasn't decoration!",
    "M ya VD diya hai? n nikalo aur multiply karo — woh data decoration nahi tha!",
  ],
  [
    "measuring combustion O directly?",
    "combustion O seedha naapna?",
    "O = by DIFFERENCE — products' O includes AIR's oxygen",
    "O = DIFFERENCE se — products ke O mein AIR ka oxygen bhi hai",
  ],
];

export default function C11Ch01Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("pitfalls and the 100 gram trick", "pitfalls aur 100 gram trick")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} script>
          {t(
            "closing with the four mistakes that appear most often",
            "un chaar mistakes ke saath band karte hain jo sabse zyada dikhti hain"
          )}
        </T>
      </Fade>

      {/* beats 1-4 — the four pitfalls, mistake vs correct rule */}
      {PITFALLS.map(([mEn, mHi, rEn, rHi], i) => {
        const k = i + 1;
        const rowY = [130, 168, 206, 244][i];
        return (
          <React.Fragment key={rowY}>
            <Fade on={beat >= k} delay={dl(k, 0.3)}>
              <T x={90} y={rowY} size={13} fill={RED} script anchor="start">
                ✗ {t(mEn, mHi)}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 1.2)}>
              <T x={560} y={rowY} size={13} fill={GREEN} script anchor="start">
                ✓ {t(rEn, rHi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 5 — the pro-tip: 100g sample trick */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M 306 290 h 468 q 16 0 16 16 v 58 q 0 16 -16 16 h -468 q -16 0 -16 -16 v -58 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={315} size={15} fill={INK} weight={700} script={false}>
          THE 100g SAMPLE TRICK
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={340} size={13} fill={AMBER_DARK} script>
          {t("removes %clutter — % becomes grams instantly", "%clutter hata deta — % turant grams ban jaate")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={540} y={365} size={13} fill={AMBER_DARK} script>
          {t(
            "sanity check: masses must sum to total — missing element is often O!",
            "sanity check: masses jud kar total banne chahiye — missing element aksar O hota!"
          )}
        </T>
      </Fade>

      {/* beat 6 — four memory aids */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={398} size={13} fill={AMBER_DARK} script>
          {t("mass→moles BEFORE ratio — never ratio raw masses", "mass→moles ratio se PEHLE — kabhi raw masses ka ratio nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={419} size={13} fill={AMBER_DARK} script>
          empirical=recipe, molecular=batch, n=batch size
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={440} size={13} fill={AMBER_DARK} script>
          {t(
            "molar mass breaks the tie — CH₂O could be formaldehyde OR glucose",
            "molar mass tie todta — CH₂O formaldehyde YA glucose ho sakta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={540} y={461} size={13} fill={AMBER_DARK} script>
          {t("combustion O: SUBTRACT, don't measure", "combustion O: SUBTRACT karo, measure mat karo")}
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={490} size={14} fill={GREEN} script>
          {t(
            "next: Part 4 — stoichiometry and concentration terms",
            "aage: Part 4 — stoichiometry aur concentration terms"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
