/**
 * C11 Ch01 · Section 40 — "Composition, EFM and the multiplier n"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: formulas — a reference sheet.)
 *
 * Beats (en [0,7.42,18.78,35.59,51.8,66.48,81.33,104.63]):
 *  0 anchor: relations of this subtopic, chained from the mole concept
 *  1 mass % of an element
 *  2 EFM: sum of atomic masses in the empirical formula
 *  3 the multiplier n, boxed
 *  4 M from vapour density when not given directly
 *  5 combustion analysis relations
 *  6 the direct method, boxed
 *  7 why it saves time + the whole-number check
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y86
 *  b1 | l (13 bold ink)              | T mid | x540  y112
 *  b2 | l (script12 ink)             | T mid | x540  y138
 *  b3 | box (dashed amber, w420h40)  | Draw  | x330..750 y165..205
 *  b3 | formula inside (15 bold ink) | T mid | x540  y189
 *  b4 | l (script12 red)             | T mid | x540  y228
 *  b5 | l (script12 muted)           | T mid | x540  y253
 *  b6 | box (dashed amber, w480h40)  | Draw  | x300..780 y280..320
 *  b6 | formula inside (14 bold ink) | T mid | x540  y304
 *  b7 | l1 (script12 muted)          | T mid | x540  y343
 *  b7 | l2 (script12 green)          | T mid | x540  y368
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("composition, EFM and the multiplier n", "composition, EFM aur multiplier n")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t(
            "the relations of this subtopic — several chain from the mole concept",
            "is subtopic ke relations — kai mole concept se chain hote hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — mass % of an element */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={13} fill={INK} weight={700} script={false}>
          mass % of X = (count × atomic mass) / molar mass × 100
        </T>
      </Fade>

      {/* beat 2 — EFM */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={138} size={12} fill={INK} script>
          EFM = Σ atomic masses in empirical formula — CH₂O: 12+2+16 = 30
        </T>
      </Fade>

      {/* beat 3 — the multiplier n, boxed */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.3)}
        d="M 346 165 h 388 q 16 0 16 16 v 8 q 0 16 -16 16 h -388 q -16 0 -16 -16 v -8 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={189} size={15} fill={INK} weight={700} script={false}>
          n = molecular mass / EFM ({t("round to nearest whole number", "nearest whole number tak round")})
        </T>
      </Fade>

      {/* beat 4 — M from vapour density */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={228} size={12} fill={RED} script>
          {t(
            "M not given? M = 2×VD — forgetting the ×2 is a standard way to get n WRONG",
            "M nahi diya? M = 2×VD — ×2 bhoolna n ko GALAT karne ka common tarika hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — combustion analysis relations */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={253} size={12} fill={MUTED} script>
          {t(
            "combustion: C=12/44 (from CO₂) · H=2/18 (from H₂O) · O = by difference",
            "combustion: C=12/44 (CO₂ se) · H=2/18 (H₂O se) · O = difference se"
          )}
        </T>
      </Fade>

      {/* beat 6 — the direct method, boxed */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.3)}
        d="M 316 280 h 448 q 16 0 16 16 v 8 q 0 16 -16 16 h -448 q -16 0 -16 -16 v -8 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={304} size={14} fill={INK} weight={700} script={false}>
          {t("direct method (M known):", "direct method (M pata ho):")} atoms of X = (%/100) × M / atomic mass
        </T>
      </Fade>

      {/* beat 7 — why it saves time + the check */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={343} size={12} fill={MUTED} script>
          {t(
            "collapses mass→moles→ratio→fractions into ONE division per element",
            "mass→moles→ratio→fractions ko element ke EK division mein samet deta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={368} size={12} fill={GREEN} script>
          {t("check: subscripts should come out close to WHOLE numbers", "check: subscripts WHOLE numbers ke paas aane chahiye")}
        </T>
      </Fade>
    </Scene>
  );
}
