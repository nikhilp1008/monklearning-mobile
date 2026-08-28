/**
 * Ch12 · Section 12 — "Deriving PV = nRT by stitching the laws"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.12, 13.12, 14.12, 15.12, 16.12, 17.12, 18.12, 31.51]):
 *  0 title + underline + intro · 1 THE PLAN: state1 → intermediate → state2,
 *    Boyle then Charles (arrows + leg labels) · 2 fill in the triples (P,V,T)
 *    at each node · 3 Boyle leg formula · 4 Charles leg formula · 5 combine:
 *    PV/T = const · 6 Avogadro: constant = nR · 7 final PV = nRT boxed · 8 R
 *    is universal (8.314, any gas, P→0)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 24, red)          | T mid | x260..820 y37..78 (bl66)
 *  b0 | underline                        | Draw  | y90 x330..750
 *  b0 | intro (14, ink, script)         | T mid | x540 y104
 *  b1 | node circles ×3 + arrows+labels | Draw  | x150/540/930 y165 · legs
 *       "Boyle" x345 y148 · "Charles" x735 y148
 *  b2 | triples ×3 (16, ink, bold)      | T mid | x150/540/930 y165 (bl165)
 *  b2 | sublabels ×3 (12, muted)        | T mid | y188
 *  b3 | Boyle formula (15, ink)         | T mid | x540 y230
 *  b4 | Charles formula (15, ink)       | T mid | x540 y260
 *  b5 | combine (16, amber_dark)        | T mid | x540 y292
 *  b6 | Avogadro (15, ink, script)      | T mid | x540 y324
 *  b7 | equation chip "PV = nRT"        | Chip  | x440..640 y360..404
 *  b8 | verdict (script 16, green)      | T mid | x540 y445
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={66} size={24} fill={RED} script>
          {t("deriving PV = nRT by stitching the laws", "PV = nRT ko laws jodkar derive karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 90 C 420 86, 660 94, 750 88" stroke={RED} sw={2.4} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={540} y={104} size={14} fill={INK} script>
          {t(
            "stitch it from one-variable-fixed laws, two stages, one law at a time",
            "one-variable-fixed laws se stitch, do stages, ek law ek waqt"
          )}
        </T>
      </Fade>

      {/* beat 1 — THE PLAN: state1 -> intermediate -> state2 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Circle cx={150} cy={165} r={30} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={540} cy={165} r={30} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
        <Circle cx={930} cy={165} r={30} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(230, 165, 460, 165)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={345} y={148} size={15} fill={INK} weight={700}>
          Boyle
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(620, 165, 850, 165)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={735} y={148} size={15} fill={INK} weight={700}>
          Charles
        </T>
      </Fade>

      {/* beat 2 — fill in the triples */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={170} size={13} fill={INK} weight={700}>
          P₁,V₁,T₁
        </T>
        <T x={150} y={210} size={12} fill={MUTED} script>
          {t("State 1", "State 1")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={170} size={13} fill={AMBER_DARK} weight={700}>
          P₂,V′,T₁
        </T>
        <T x={540} y={210} size={12} fill={MUTED} script>
          {t("intermediate", "intermediate")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={930} y={170} size={13} fill={INK} weight={700}>
          P₂,V₂,T₂
        </T>
        <T x={930} y={210} size={12} fill={MUTED} script>
          {t("State 2", "State 2")}
        </T>
      </Fade>

      {/* beat 3 — Boyle leg */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={248} size={15} fill={INK}>
          Boyle (T fixed): P₁V₁ = P₂V′ ⇒ V′ = P₁V₁/P₂
        </T>
      </Fade>

      {/* beat 4 — Charles leg */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={280} size={15} fill={INK}>
          Charles (P fixed): V′/T₁ = V₂/T₂ ⇒ V′ = V₂T₁/T₂
        </T>
      </Fade>

      {/* beat 5 — combine */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={314} size={16} fill={AMBER_DARK} weight={700}>
          {t("set equal, cancel ⇒ PV/T = same before & after", "equal set karo, cancel ⇒ PV/T pehle-baad same")}
        </T>
      </Fade>

      {/* beat 6 — Avogadro extends the constant */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={348} size={15} fill={INK} script>
          {t(
            "Avogadro: V ∝ n ⇒ constant = nR, same for every gas",
            "Avogadro: V ∝ n ⇒ constant = nR, har gas ke liye same"
          )}
        </T>
      </Fade>

      {/* beat 7 — final equation */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={440} y={378} w={200} h={44} fill={GREEN} textFill="#fff" size={22} script={false}>
          PV = nRT
        </Chip>
      </Fade>

      {/* beat 8 — R is universal */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={465} size={16} fill={GREEN} script>
          {t(
            "R is universal: PV/nT → 8.314 J/(mol·K) for any gas as P→0",
            "R universal hai: PV/nT → 8.314 J/(mol·K) kisi bhi gas ke liye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
