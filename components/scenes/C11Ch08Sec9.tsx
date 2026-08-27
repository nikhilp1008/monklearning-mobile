/**
 * C11 Ch08 · Section 9 — "Worked example — read a bond-line ring (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 9.64, 20.91, 31.66, 50.09, 56.58, 72.28, 92.33]):
 *  0 title (always-on, seq1) · 1 the given ring (diagram: hexagon, one C=C, one
 *  C-OH) · 2 count vertices/bonds · 3 fill H by tetravalence, sp² tags · 4 formula
 *  C6H10O (boxed) · 5 classification → cyclohexenol · 6 red note (1 C=C ≠ aromatic)
 *  · 7 closer (alicyclic vs aromatic is the whole mark)
 *
 * Left column: the ring (given, cx=280 cy=230 r=70). Right column: the reasoning,
 * anchor-start x=520.
 * Layout plan:
 *  b1 | hexagon (5 sides) + C=C edge   | Draw  | c(280,230) r70
 *  b1 | OH stub + label                | Draw+T| V90(280,300)→(280,325), label y340
 *  b2 | count lines ×2 (14, ink)       | T st  | x520 y150/180
 *  b3 | sp² tags ×2 on ring            | T     | x375 y192/268
 *  b3 | sp³ line (14, ink)             | T st  | x520 y210
 *  b4 | formula box "C6H10O" (26,w800) | rect+T| x520 y260
 *  b5 | classification (15/18)         | T st  | x520 y310/340
 *  b6 | margin bar + red note          | Draw+T| x60 y400..430 · x76 y420
 *  b7 | closer (18, green, w800)       | T mid | x540 y480
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { doubleBondD, bondD } from "./chem-kit";

export default function C11Ch08Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} script>
          {t("Worked example — read a bond-line ring (JEE Advanced)", "Worked example — bond-line ring padho (JEE Adv)")}
        </T>
      </Fade>

      {/* beat 1 — the given: 6-vertex ring, one C=C, one C-OH */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 340.6 265 L 280 300 L 219.4 265 L 219.4 195 L 280 160 L 340.6 195"
        stroke={INK}
        sw={2.6}
        dur={1.1}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d={doubleBondD(340.6, 195, 340.6, 265, 3)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Draw on={beat >= 1} delay={dl(1, 2)} d={bondD(280, 300, 280, 325)} stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={280} y={340} size={16} fill={INK} weight={700}>
          OH
        </T>
      </Fade>

      {/* beat 2 — count */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={520} y={150} size={14} fill={INK} anchor="start">
          {t("6 vertices = 6 carbons", "6 vertices = 6 carbons")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={520} y={180} size={14} fill={INK} anchor="start">
          {t("1 ring C=C, 1 ring C−OH", "1 ring C=C, 1 ring C−OH")}
        </T>
      </Fade>

      {/* beat 3 — fill H by tetravalence */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={378} y={192} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          sp²
        </T>
        <T x={378} y={268} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          sp²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={520} y={210} size={14} fill={INK} anchor="start">
          {t("+ 4 sp³ C × 2H each", "+ 4 sp³ C × 2H each")}
        </T>
      </Fade>

      {/* beat 4 — molecular formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Rect x={520} y={236} width={160} height={44} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={600} y={265} size={24} fill={INK} weight={800}>
          C₆H₁₀O
        </T>
      </Fade>

      {/* beat 5 — classification */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={520} y={310} size={15} fill={INK} anchor="start">
          {t("cyclic → carbocyclic → alicyclic + OH", "cyclic → carbocyclic → alicyclic + OH")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={520} y={340} size={18} fill={GREEN} weight={800} anchor="start">
          {t("= a cyclohexenol", "= ek cyclohexenol")}
        </T>
      </Fade>

      {/* beat 6 — one C=C is not aromatic */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 400 L 60 430" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={420} size={15} fill={RED} script anchor="start">
          {t(
            "one ring C=C is NOT aromatic — aromatic needs conjugated, planar, (4n+2) π",
            "ek ring C=C aromatic NAHI — aromatic ke liye conjugated, planar, (4n+2) π chahiye"
          )}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={480} size={18} fill={GREEN} weight={800}>
          {t("alicyclic vs aromatic — the exact discrimination Advanced tests", "alicyclic vs aromatic — Advanced ka exact test")}
        </T>
      </Fade>
    </Scene>
  );
}
