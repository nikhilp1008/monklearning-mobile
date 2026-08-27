/**
 * Ch03 · Section 7 — "The toolkit: resultants, the range, and component addition"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.7, 25.1, 40.6, 49.0, 69.0, 70.0, 84.5, 95.9, 120.0]):
 *  0 title
 *  1 parallelogram-law header
 *  2 R = √(A²+B²+2AB cosθ) box
 *  3 tan α box
 *  4 red: α measured from A, say so
 *  5 range header
 *  6 |A−B| ≤ R ≤ A+B box
 *  7 component-addition header
 *  8 Rx/Ry formulas
 *  9 verdict: 2 → parallelogram, ≥3 → components + chip
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  L col: b1 header st x84 bl 108, underline M84 116 h340 ·
 *  b2 box x84..470 y130..176 text cx277 bl 160 s16 · caption st x84 bl 198 s11
 *  b3 box x84..470 y216..262 text cx277 bl 246 s16
 *  b4 red st x84 bl 290 / 312 s12
 *  R col: b5 header st x580 bl 108, underline M580 116 h300 ·
 *  b6 box x580..1000 y130..176 text cx790 bl 160 s17 · caption st x580 bl 198 s11
 *  b7 header st x580 bl 246, underline M580 254 h340
 *  b8 "Rx=Ax+Bx" st x600 bl 288 · "Ry=Ay+By" st x800 bl 288 · caption st x600 bl 314
 *  b9 bar M66 356 v48 · lines st x84 bl 376 / 400 · chip x740 y420 w240 h36
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={20} fill={INK} script>
          {t("TOOLKIT 2 — combining vectors", "TOOLKIT 2 — vectors ko jodna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 380 64 h 320" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — parallelogram law header */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={108} size={14} fill={INK} script anchor="start">
          {t("PARALLELOGRAM LAW — θ tail-to-tail", "PARALLELOGRAM LAW — θ tail-to-tail")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 84 116 h 340" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 2 — magnitude */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 96 130 h 362 q 12 0 12 12 v 22 q 0 12 -12 12 h -362 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={277} y={160} size={16} fill={INK} weight={800}>
          R = √(A² + B² + 2AB cos θ)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={84} y={198} size={11} fill={MUTED} script anchor="start">
          {t(
            "PLUS in the middle — cosθ carries all the angle information",
            "beech mein PLUS — angle ki poori khabar cosθ mein hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — direction */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 96 216 h 362 q 12 0 12 12 v 22 q 0 12 -12 12 h -362 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={277} y={246} size={16} fill={INK} weight={800}>
          tan α = B sinθ ⁄ (A + B cosθ)
        </T>
      </Fade>

      {/* beat 4 — measured from A */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={84} y={290} size={12} fill={RED} script anchor="start">
          {t(
            "α is measured from A — say so, or the answer is ambiguous",
            "α ko A se naapa gaya hai — bolo, warna jawaab adhoora"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={84} y={312} size={12} fill={RED} script anchor="start">
          {t(
            "measure from B instead? the roles swap completely",
            "B se naapoge? roles poori tarah swap ho jate hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — the range header */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={580} y={108} size={14} fill={INK} script anchor="start">
          {t("RANGE OF THE RESULTANT", "RESULTANT KI RANGE")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 580 116 h 300" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 6 — the band */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 592 130 h 396 q 12 0 12 12 v 22 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={790} y={160} size={17} fill={INK} weight={800}>
          |A − B|  ≤  R  ≤  A + B
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={580} y={198} size={11} fill={GREEN} script anchor="start">
          {t(
            "every possible resultant lives inside this band — nothing escapes",
            "har mumkin resultant isi band ke andar hai — kuchh nahi bachta"
          )}
        </T>
      </Fade>

      {/* beat 7 — component addition header */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={580} y={246} size={14} fill={INK} script anchor="start">
          {t("COMPONENT ADDITION — the workhorse", "COMPONENT ADDITION — asli workhorse")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d="M 580 254 h 340" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 8 — axis by axis */}
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={600} y={288} size={15} fill={INK} weight={700} anchor="start">
          Rx = Ax + Bx
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.8)}>
        <T x={800} y={288} size={15} fill={INK} weight={700} anchor="start">
          Ry = Ay + By
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={600} y={314} size={11} fill={GREEN} script anchor="start">
          {t(
            "along one axis, vectors are ordinary signed numbers — axes never talk",
            "ek axis par vectors aam signed numbers hain — axes baat nahi karte"
          )}
        </T>
      </Fade>

      {/* beat 9 — which method when */}
      <Draw on={beat >= 9} delay={dl(9, 0.8)} d="M 66 356 v 48" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={84} y={376} size={13} fill={INK} script anchor="start">
          {t(
            "exactly two vectors → the parallelogram formula is quick and clean",
            "sirf do vectors → parallelogram formula tez aur saaf hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 7)}>
        <T x={84} y={400} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "three or more → components, every time: just two columns of numbers",
            "teen ya zyada → components, har baar: bas do columns ke numbers"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 11)}>
        <Chip x={740} y={430} w={240} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("see 3+ → RESOLVE, no hesitation", "3+ dikhe → seedha RESOLVE")}
        </Chip>
      </Fade>
    </Scene>
  );
}
