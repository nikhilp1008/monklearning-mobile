/**
 * C11 Ch07 · Section 12 — "The two-account ledger and the electron see-saw"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * Opens Subtopic 2 (Balancing Redox Equations).
 *
 * Beats (en [0, 9.81, 23.81, 39.77, 59.82, 66.56, 82.01, 98.47]):
 *  0 heading: a balanced redox equation tallies TWO accounts
 *  1 mass row + charge row
 *  2 red-margin: e⁻ lost by reductant = e⁻ gained by oxidant, same instant
 *  3 electron see-saw diagram (level beam, 2 e⁻ each side)
 *  4 heading: two bookkeeping systems (both correct)
 *  5 method 1: oxidation-number method — fast for molecular equations
 *  6 method 2: half-reaction method — cleaner for aqueous ionic
 *  7 closer: both give the same answer — examiners specify which
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans18 700)      | T mid | x540 bl100
 *  b1 | mass row (sans18)         | T mid | x540 bl134
 *  b1 | charge row (sans18)       | T mid | x540 bl164
 *  b2 | margin bar x64 y185..225, note (script17 red) bl210
 *  b3 | see-saw: labels y248/266, circles y294 x450/490/590/630, beam y306 x420..660,
 *     | fulcrum apex(540,306)→(520,346)(560,346), below-label bl372
 *  b4 | heading (sans18 700)      | T mid | x540 bl406
 *  b5 | method1 2-line (sans17/14)| T mid | x540 bl440/474
 *  b6 | method2 2-line (sans17/14)| T mid | x540 bl508/540
 *  b7 | closer (sans16 green)     | T mid | x540 bl572
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("electrons lost = electrons gained, no exceptions", "electrons jo khoye = jo mile, no exceptions")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("a balanced redox equation tallies TWO accounts", "balanced redox equation DO accounts tally karta hai")}
        </T>
      </Fade>

      {/* ===== beat 1 — mass + charge ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={18} fill={INK}>
          {t("MASS: every atom on the left reappears on the right", "MASS: har atom left se right pe reappear hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={164} size={18} fill={INK}>
          {t("CHARGE: total charge is identical on both sides", "CHARGE: total charge dono side identical hota hai")}
        </T>
      </Fade>

      {/* ===== beat 2 — the heart of it ===== */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 64 185 L 64 225" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={80} y={210} size={17} fill={RED} script anchor="start">
          {t("e⁻ lost by reductant = e⁻ gained by oxidant — same instant", "e⁻ jo reductant khota — utna hi oxidant paata, same instant")}
        </T>
      </Fade>

      {/* ===== beat 3 — electron see-saw ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={470} y={248} size={14} fill={RED} weight={700}>
          {t("reductant loses e⁻", "reductant e⁻ khota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={470} y={266} size={12} fill={RED}>
          ({t("oxidation", "oxidation")})
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={610} y={248} size={14} fill={GREEN} weight={700}>
          {t("oxidant gains e⁻", "oxidant e⁻ paata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={610} y={266} size={12} fill={GREEN}>
          ({t("reduction", "reduction")})
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d="M 420 306 L 660 306" stroke={INK} sw={3} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d="M 540 306 L 520 346 L 560 346 Z" stroke={INK} sw={2.2} dur={0.4} />
      {[450, 490].map((x, i) => (
        <Draw
          key={x}
          on={beat >= 3}
          delay={dl(3, 2 + i * 0.2)}
          d={`M ${x - 10} 294 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0`}
          stroke={RED}
          sw={2}
          dur={0.3}
        />
      ))}
      {[590, 630].map((x, i) => (
        <Draw
          key={x}
          on={beat >= 3}
          delay={dl(3, 2.4 + i * 0.2)}
          d={`M ${x - 10} 294 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0`}
          stroke={GREEN}
          sw={2}
          dur={0.3}
        />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={540} y={372} size={14} fill={MUTED}>
          {t("level only when e⁻ out = e⁻ in", "level tabhi jab e⁻ out = e⁻ in")}
        </T>
      </Fade>

      {/* ===== beat 4 — two bookkeeping systems ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={406} size={18} fill={INK} weight={700}>
          {t("two bookkeeping systems (both correct)", "do bookkeeping systems (dono sahi)")}
        </T>
      </Fade>

      {/* ===== beat 5 — method 1 ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={440} size={17} fill={AMBER_DARK} weight={700}>
          {t("1 · oxidation-number method", "1 · oxidation-number method")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={474} size={14} fill={MUTED}>
          {t("track total ↑ / ↓ in O.N., scale to match — fast for molecular", "track total ↑ / ↓ O.N., scale to match — molecular ke liye fast")}
        </T>
      </Fade>

      {/* ===== beat 6 — method 2 ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={508} size={17} fill={AMBER_DARK} weight={700}>
          {t("2 · half-reaction (ion-electron) method", "2 · half-reaction (ion-electron) method")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={540} size={14} fill={MUTED}>
          {t("split, balance each half, equalise e⁻, add — cleaner for aqueous ionic", "split karo, har half balance karo, e⁻ equal karo, add karo — aqueous ionic ke liye cleaner")}
        </T>
      </Fade>

      {/* ===== beat 7 — closer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={572} size={16} fill={GREEN} weight={700}>
          {t("both give the same answer — examiners specify which", "dono same answer dete hain — examiner batata hai kaunsa")}
        </T>
      </Fade>
    </Scene>
  );
}
