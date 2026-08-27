/**
 * C11 Ch01 · Section 46 — "Four routes into a stoichiometry problem"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,6.91,25.86,50.69,66.99,84.66,98.39,118.36]):
 *  0 anchor: mole method always works, but faster on-ramps exist
 *  1 Route A box: general mole method, the 4-step spine
 *  2 Route B box: POAC — atom conservation, KClO₃ example
 *  3 Route B + line: faster for messy equations, skips balancing errors
 *  4 Route C box: gas volumes at same T,P — volume ratio = coefficient ratio
 *  5 Route C + line: N₂+3H₂→2NH₃ worked in litres directly
 *  6 Route D box: solutions — moles = molarity × volume(L)
 *  7 closing: all four = mole method with a quicker first conversion
 *
 * Layout plan — 2×2 grid of dashed amber boxes (x50..510 / x570..1030):
 *  b0 | anchor (script13 ink)          | T mid | x540  y84
 *  b1 | box A (row1 left, y102 h150)   | Draw+T | label y132, l1 y158
 *  b2 | box B (row1 right)             | Draw+T | label y132, l1 y158, l2 y181
 *  b3 | box B + l3 (amber-drk)         | T      | y204
 *  b4 | box C (row2 left, y272 h150)   | Draw+T | label y302, l1 y328
 *  b5 | box C + l2 (green)             | T      | y351
 *  b6 | box D (row2 right)             | Draw+T | label y302, l1 y328, l2 y351
 *  b7 | closing (script13 green)       | T mid | x540  y460
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function roundedRectD(x: number, y: number, w: number, h: number, r = 14): string {
  return `M ${x + r} ${y} h ${w - 2 * r} q ${r} 0 ${r} ${r} v ${h - 2 * r} q 0 ${r} -${r} ${r} h -${
    w - 2 * r
  } q -${r} 0 -${r} -${r} v -${h - 2 * r} q 0 -${r} ${r} -${r}`;
}

const BOX_A = { x: 50, y: 102, w: 460, h: 150 };
const BOX_B = { x: 570, y: 102, w: 460, h: 150 };
const BOX_C = { x: 50, y: 272, w: 460, h: 150 };
const BOX_D = { x: 570, y: 272, w: 460, h: 150 };

export default function C11Ch01Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("four routes into a stoichiometry problem", "stoichiometry problem ke chaar raste")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "the mole method ALWAYS works — but faster on-ramps exist depending on what's given",
            "mole method HAMESHA chalta — par jo diya hai uske hisaab se tez raste bhi hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — Route A: general mole method */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={roundedRectD(BOX_A.x, BOX_A.y, BOX_A.w, BOX_A.h)} stroke={AMBER} sw={2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={BOX_A.x + BOX_A.w / 2} y={132} size={13} fill={RED} weight={700} script={false}>
          {t("ROUTE A — general mole method (ALWAYS works)", "ROUTE A — general mole method (HAMESHA chalta)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={BOX_A.x + BOX_A.w / 2} y={158} size={12} fill={INK} script>
          {t(
            "balance → moles → ×coefficient ratio → convert back",
            "balance karo → moles → ×coefficient ratio → wapas unit"
          )}
        </T>
      </Fade>

      {/* beat 2 — Route B: POAC */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={roundedRectD(BOX_B.x, BOX_B.y, BOX_B.w, BOX_B.h)} stroke={AMBER} sw={2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={BOX_B.x + BOX_B.w / 2} y={132} size={13} fill={RED} weight={700} script={false}>
          ROUTE B — POAC ({t("atom conservation", "atom conservation")})
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={BOX_B.x + BOX_B.w / 2} y={158} size={12} fill={INK} script>
          {t(
            "atoms conserved on both sides — NO balancing needed!",
            "atoms dono taraf conserved — balancing ki zaroorat NAHI!"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={BOX_B.x + BOX_B.w / 2} y={181} size={12} fill={GREEN} weight={700} script={false}>
          KClO₃→KCl+O₂: 3×mol(KClO₃) = 2×mol(O₂)
        </T>
      </Fade>

      {/* beat 3 — Route B: usefulness */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={BOX_B.x + BOX_B.w / 2} y={204} size={12} fill={AMBER_DARK} script>
          {t(
            "faster for messy equations — skips balancing errors!",
            "uljhe equations ke liye tez — balancing errors bhi hat jaate!"
          )}
        </T>
      </Fade>

      {/* beat 4 — Route C: gas volumes */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={roundedRectD(BOX_C.x, BOX_C.y, BOX_C.w, BOX_C.h)} stroke={AMBER} sw={2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={BOX_C.x + BOX_C.w / 2} y={302} size={13} fill={RED} weight={700} script={false}>
          {t("ROUTE C — gas volumes (same T, P)", "ROUTE C — gas volumes (same T, P)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={BOX_C.x + BOX_C.w / 2} y={328} size={12} fill={INK} script>
          {t(
            "volume ratio = coefficient ratio (Gay-Lussac/Avogadro)",
            "volume ratio = coefficient ratio (Gay-Lussac/Avogadro)"
          )}
        </T>
      </Fade>

      {/* beat 5 — Route C: worked example */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={BOX_C.x + BOX_C.w / 2} y={351} size={12} fill={GREEN} weight={700} script={false}>
          {t("N₂+3H₂→2NH₃: 1L:3L:2L — mole step disappears!", "N₂+3H₂→2NH₃: 1L:3L:2L — mole step gayab ho jaata!")}
        </T>
      </Fade>

      {/* beat 6 — Route D: solutions */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={roundedRectD(BOX_D.x, BOX_D.y, BOX_D.w, BOX_D.h)} stroke={AMBER} sw={2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={BOX_D.x + BOX_D.w / 2} y={302} size={13} fill={RED} weight={700} script={false}>
          {t("ROUTE D — solutions", "ROUTE D — solutions")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={BOX_D.x + BOX_D.w / 2} y={328} size={12} fill={INK} weight={700} script={false}>
          moles = MOLARITY × VOLUME (L)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={BOX_D.x + BOX_D.w / 2} y={351} size={12} fill={INK} script>
          {t(
            "then apply coefficient ratio — find limiting reagent if both given",
            "phir coefficient ratio lagao — dono diye ho to limiting reagent dhoondo"
          )}
        </T>
      </Fade>

      {/* beat 7 — closing: what unites them */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={460} size={13} fill={GREEN} script>
          {t(
            "all four = the mole method with a quicker FIRST conversion — nothing new assumed!",
            "sab chaar routes = mole method hi, bas pehla conversion tez raste se — kuch naya nahi maana!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
