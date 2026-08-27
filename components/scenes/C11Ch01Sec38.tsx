/**
 * C11 Ch01 · Section 38 — "Why the molar mass is indispensable"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,7,28.67,47.62,64.43,79.88,104.71,119.73]):
 *  0 anchor: why empirical formula alone can never identify a molecule
 *  1 formaldehyde vs glucose: same empirical, wildly different molar mass
 *  2 limitation: need molar mass too (given, or M=2×VD)
 *  3 many compounds have empirical=molecular (n=1) — don't assume reduction
 *  4 ionic compounds: only empirical formula, never molecular
 *  5 the lattice explanation: molecular formula is meaningless for ionic solids
 *  6 assumption: percentage composition assumes a pure compound
 *  7 the slogan, boxed: empirical=recipe, molecular=batch, n=batch size
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y88
 *  b1 | l1 (13 bold ink)             | T mid | x540  y115
 *  b1 | l2 (13 bold red)             | T mid | x540  y140
 *  b2 | l (script12 ink)             | T mid | x540  y168
 *  b3 | l (script12 muted)           | T mid | x540  y195
 *  b4 | l (script13 amber-drk)       | T mid | x540  y222
 *  b5 | l (script12 muted)           | T mid | x540  y250
 *  b6 | l (script12 red)             | T mid | x540  y278
 *  b7 | box (dashed amber, w560h40)  | Draw  | x260..820 y305..345
 *  b7 | slogan inside (14 bold ink)  | T mid | x540  y329
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("why the molar mass is indispensable", "molar mass indispensable kyun hai")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={13} fill={INK} script>
          {t(
            "why empirical formula ALONE can never identify a molecule",
            "empirical formula AKELA kabhi molecule identify nahi kar sakta, kyun?"
          )}
        </T>
      </Fade>

      {/* beat 1 — formaldehyde vs glucose */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={115} size={13} fill={INK} weight={700} script={false}>
          formaldehyde vs glucose: SAME empirical formula, CH₂O…
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={540} y={140} size={13} fill={RED} weight={700} script={false}>
          {t("…but M=30 vs M=180 — MOLAR MASS tells them apart!", "…par M=30 vs M=180 — MOLAR MASS hi alag batata hai!")}
        </T>
      </Fade>

      {/* beat 2 — the limitation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={168} size={12} fill={INK} script>
          {t(
            "can't get molecular formula from %composition ALONE — need molar mass too (given, or M=2×VD)",
            "%composition SE AKELE molecular formula nahi milta — molar mass bhi chahiye (diya hua, ya M=2×VD)"
          )}
        </T>
      </Fade>

      {/* beat 3 — n=1 cases */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={195} size={12} fill={MUTED} script>
          {t(
            "many compounds: empirical=molecular (n=1) — water, CO₂, NH₃. Don't assume it always reduces!",
            "kai compounds: empirical=molecular (n=1) — water, CO₂, NH₃. Hamesha reduce hone ka assume mat karo!"
          )}
        </T>
      </Fade>

      {/* beat 4 — ionic compounds */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={222} size={13} fill={AMBER_DARK} script>
          {t(
            "IONIC compounds: ONLY empirical formula (“formula unit”) — NEVER molecular!",
            "IONIC compounds: SIRF empirical formula (“formula unit”) — molecular KABHI NAHI!"
          )}
        </T>
      </Fade>

      {/* beat 5 — the lattice explanation */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={250} size={12} fill={MUTED} script>
          {t(
            "instead: an enormous LATTICE, fixed 1:1 ion ratio — meaningless to ask for a molecular formula",
            "iske bajaye: ek bada LATTICE, fixed 1:1 ion ratio — molecular formula poochna bemani hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — pure-compound assumption */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={278} size={12} fill={RED} script>
          {t(
            "assumes a PURE compound — impurities/mixtures invalidate the whole calculation",
            "ek PURE compound maanta hai — impurities/mixtures poori calculation kharab kar dete"
          )}
        </T>
      </Fade>

      {/* beat 7 — the slogan, boxed */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.3)}
        d="M 276 305 h 528 q 16 0 16 16 v 8 q 0 16 -16 16 h -528 q -16 0 -16 -16 v -8 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={329} size={14} fill={INK} weight={700} script={false}>
          EMPIRICAL = the recipe · MOLECULAR = the batch · n = the batch size
        </T>
      </Fade>
    </Scene>
  );
}
