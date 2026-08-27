/**
 * Ch05 · Section 23 — "Mechanical energy — key formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.0, 33.0, 57.9, 73.5, 90.6, 99.2, 118.4, 138.6] · dur 163.4;
 *        hi [0, 8.1, 31.9, 54.6, 68.4, 84.5, 93.4, 115.1, 130.0] · dur 154.8):
 *  0 title · 1 KE three ways · 2 ΔU = −∫F·dr · 3 F = −dU/dx
 *  4 standard three PEs · 5 E = K + U · 6 units · 7 equilibrium package
 *  8 carry-one-line verdict (K = p²/2m)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  S1: lbl st x80 bl116 · chip x80..420 y126..164 · p-line st x90 bl192 · note cx250 bl220
 *  S2: lbl st x560 bl116 · chip x560..940 y126..164 · note cx760 bl192
 *  S3: lbl bl258 · chip x80..300 y268..306 · note cx220 bl332
 *  S4: lbl st x560 bl258 · chips y268..304: x560..660 / x680..830 / x850..960 · note cx770 bl332
 *  S5: chip x80..300 y352..392 · lbl cx190 bl418
 *  b6: st x560 bl362 / bl390
 *  b7: chip x80..680 y440..478
 *  b8: bar x66 y500..570 · lines st x84 bl520 / bl546
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Mechanical Energy — Key Formulas", "Mechanical Energy — Key Formulas")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "a clean page — several of these are quietly examined every year",
            "ek saaf page — inmein se kai har saal chupchaap poochhe jaate hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — KE, three ways */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={80} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("kinetic energy — three faces", "kinetic energy — teen chehre")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={126} w={340} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          K = ½ m v² = p² ⁄ 2m
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={90} y={192} size={15} fill={INK} anchor="start" weight={700}>
          p = √(2 m K)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 14)}>
        <T x={250} y={220} size={12.5} fill={MUTED} script>
          {t(
            "NEET hands you one face, asks another · K ≥ 0 always",
            "NEET ek chehra deta hai, doosra poochhta hai · K ≥ 0 hamesha"
          )}
        </T>
      </Fade>

      {/* beat 2 — PE, general definition */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={560} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("potential energy — general definition", "potential energy — general definition")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={560} y={126} w={380} h={38} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          ΔU = − ∫ F · dr = − W_conservative
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={760} y={192} size={13} fill={GREEN} script>
          {t(
            "work out → PE down (gravity on a falling stone)",
            "work bahar → PE neeche (girte patthar par gravity)"
          )}
        </T>
      </Fade>

      {/* beat 3 — the inverse */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={80} y={258} size={13} fill={AMBER_DARK} script anchor="start">
          {t("the inverse — a workhorse", "ulta roop — ek workhorse")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={80} y={268} w={220} h={38} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          F = − dU⁄dx
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={220} y={332} size={12.5} fill={MUTED} script>
          {t("behind every PE-curve question", "har PE-curve sawaal ke peechhe yehi")}
        </T>
      </Fade>

      {/* beat 4 — the standard three */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={560} y={258} size={13} fill={AMBER_DARK} script anchor="start">
          {t("the standard three — know the regime", "standard teen — regime pehchano")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={560} y={268} w={100} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          m g h
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <Chip x={680} y={268} w={150} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          −G m₁m₂ ⁄ r
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <Chip x={850} y={268} w={110} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          ½ k x²
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <T x={770} y={332} size={12.5} fill={RED} script>
          {t(
            "that regime decision is where the marks hide",
            "wahi regime ka faisla — marks wahin chhipe hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — the headline */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={80} y={352} w={220} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={17} script={false}>
          E = K + U
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={190} y={418} size={12.5} fill={GREEN} script>
          {t(
            "the headline — the next subtopic lives on it",
            "sabse badi — agla subtopic isi par tikega"
          )}
        </T>
      </Fade>

      {/* beat 6 — units */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={362} size={14} fill={INK} anchor="start" weight={700}>
          [K] = [U] = [W] = M L² T⁻² (J)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={560} y={390} size={14} fill={INK} anchor="start" weight={700}>
          [p] = M L T⁻¹ · k: N⁄m = M T⁻²
        </T>
      </Fade>

      {/* beat 7 — equilibrium, packaged */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={80} y={440} w={600} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12.5} script={false}>
          U′ = 0 equilibrium · U″&gt;0 stable · U″&lt;0 unstable · U″= 0 neutral
        </Chip>
      </Fade>

      {/* beat 8 — carry one line */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 500 v 58" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={84} y={520} size={13} fill={GREEN} script anchor="start">
          {t(
            "carry ONE line: K = p² ⁄ 2m → p = √(2mK)",
            "EK line saath le jao: K = p² ⁄ 2m → p = √(2mK)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={84} y={546} size={13} fill={GREEN} script anchor="start">
          {t(
            "the light-vs-heavy NEET disguise — p scales as √K",
            "light-vs-heavy waala NEET bhes — p, √K ke hisaab se chalta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
