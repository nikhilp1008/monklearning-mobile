/**
 * C11 Chemistry Ch03 · Section 6 — "Mendeleev's crystal ball: predicting the eka-elements"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.17, 28.07, 40.87, 47.79, 63.91, 76.97, 81.66]):
 *  0 title + underline
 *  1 real grid: Al/Si (period 3) drawn; dashed "?" gap cells below them
 *    (eka-Al, eka-Si) — the bold gaps Mendeleev left
 *  2 prediction card: eka-silicon → oxide EO₂
 *  3 prediction card + chloride ECl₄
 *  4 red-margin: germanium delivered EXACTLY GeO₂, GeCl₄ — match!
 *  5 the gap cells fill in: dashed "?" → real Ga(31)/Ge(32), green ring
 *  6 new heading: why interpolation was allowed to work
 *  7 trend diagram: known—predicted—known dots on a smooth rising curve
 *
 * Layout plan:
 *  b1 | Al, Si cells               | Draw   | x350..584  y100..156
 *  b1 | eka-Al, eka-Si dashed cells| rect   | x350..584  y170..226
 *  b2/3 | prediction card          | Draw   | x650..990  y100..226
 *  b4 | red margin bar + line      | Draw   | x70  y256..296 (bl 280)
 *  b5 | Ga/Ge fill + green rings   | Draw   | same cells as b1 row2
 *  b6 | heading (18,w800,ink)      | T mid  | x?..?      y302..320 (bl 316)
 *  b6 | underline (amber)          | Draw   | y324 x330..750
 *  b7 | 3-point trend curve        | Draw   | x350..730  y340..402
 *  b7 | caption (script 14,green)  | T mid  | x?..?      y432..453 (bl 446)
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const COLX = [350, 474];
const CELL_W = 110;
const CELL_H = 56;

export default function C11Ch03Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("Mendeleev's crystal ball: the eka-elements", "Mendeleev ka crystal ball: eka-elements")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — real cells (Al, Si) drawn; dashed gap cells below them */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={`M ${COLX[0]} 100 h ${CELL_W} v ${CELL_H} h ${-CELL_W} z`} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={`M ${COLX[1]} 100 h ${CELL_W} v ${CELL_H} h ${-CELL_W} z`} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={COLX[0] + 8} y={116} size={11} fill={INK} anchor="start">13</T>
        <T x={COLX[0] + CELL_W / 2} y={133.5} size={22} fill={INK} weight={800}>Al</T>
        <T x={COLX[1] + 8} y={116} size={11} fill={INK} anchor="start">14</T>
        <T x={COLX[1] + CELL_W / 2} y={133.5} size={22} fill={INK} weight={800}>Si</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Rect x={COLX[0]} y={170} width={CELL_W} height={CELL_H} rx={3} fill="none" stroke={MUTED} strokeWidth={2} strokeDasharray="6 5" />
        <Rect x={COLX[1]} y={170} width={CELL_W} height={CELL_H} rx={3} fill="none" stroke={MUTED} strokeWidth={2} strokeDasharray="6 5" />
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 1.7)}>
        <T x={COLX[0] + CELL_W / 2} y={206.8} size={26} fill={RED} weight={800}>?</T>
        <T x={COLX[0] + CELL_W / 2} y={246} size={12} fill={MUTED} script>{t("eka-Al", "eka-Al")}</T>
        <T x={COLX[1] + CELL_W / 2} y={206.8} size={26} fill={RED} weight={800}>?</T>
        <T x={COLX[1] + CELL_W / 2} y={246} size={12} fill={MUTED} script>{t("eka-Si", "eka-Si")}</T>
      </Fade>

      {/* beats 2/3 — the eka-silicon prediction */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 650 100 h 340 v 126 h -340 z" stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={670} y={128} size={14} weight={800} fill={INK} anchor="start">
          {t("eka-silicon, predicted:", "eka-silicon, predicted:")}
        </T>
        <T x={670} y={160} size={18} weight={700} fill={INK} anchor="start">
          {t("oxide: EO₂", "oxide: EO₂")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={670} y={192} size={18} weight={700} fill={INK} anchor="start">
          {t("chloride: ECl₄", "chloride: ECl₄")}
        </T>
      </Fade>

      {/* beat 4 — germanium delivers, exactly */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 70 256 L 70 296" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={94} y={280} size={16} weight={700} fill={INK} anchor="start">
          {t("germanium: EXACTLY GeO₂ and GeCl₄ — match!", "germanium: bilkul GeO₂ aur GeCl₄ — match!")}
        </T>
      </Fade>

      {/* beat 5 — the gaps fill in: gallium, germanium, confirmed */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={COLX[0] + 8} y={186} size={11} fill={GREEN} anchor="start">31</T>
        <T x={COLX[0] + CELL_W / 2} y={203.5} size={22} fill={GREEN} weight={800}>Ga</T>
        <T x={COLX[0] + CELL_W / 2} y={246} size={12} fill={GREEN} script>{t("gallium", "gallium")}</T>
        <T x={COLX[1] + 8} y={186} size={11} fill={GREEN} anchor="start">32</T>
        <T x={COLX[1] + CELL_W / 2} y={203.5} size={22} fill={GREEN} weight={800}>Ge</T>
        <T x={COLX[1] + CELL_W / 2} y={246} size={12} fill={GREEN} script>{t("germanium", "germanium")}</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={ringD(COLX[0] + CELL_W / 2, 198, 62, 36)} stroke={GREEN} sw={2.6} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={ringD(COLX[1] + CELL_W / 2, 198, 62, 36)} stroke={GREEN} sw={2.6} dur={0.6} />

      {/* beat 6 — new heading */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={316} size={18} weight={800} fill={INK}>
          {t("why interpolation was allowed to work", "interpolation kaam kyun kar gaya")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 330 324 C 410 321, 670 321, 750 324" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 7 — smooth trend: known, predicted, known */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 350 396 Q 445 386 540 371 Q 635 356 730 346" stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Circle cx={350} cy={396} r={6} fill={INK} />
        <Circle cx={730} cy={346} r={6} fill={INK} />
        <Circle cx={540} cy={371} r={6} fill="#FFFEFB" stroke={GREEN} strokeWidth={2.4} />
        <T x={350} y={420} size={12} fill={MUTED}>{t("known", "known")}</T>
        <T x={540} y={420} size={12} fill={GREEN}>{t("predicted ⇒ confirmed", "predict ⇒ confirm")}</T>
        <T x={730} y={420} size={12} fill={MUTED}>{t("known", "known")}</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={540} y={446} size={14} fill={GREEN} script>
          {t("smooth trend ⇒ a gap sits between its neighbours", "smooth trend ⇒ gap neighbours ke beech baithta")}
        </T>
      </Fade>
    </Scene>
  );
}
