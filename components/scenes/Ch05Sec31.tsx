/**
 * Ch05 · Section 31 — "Conservative and non-conservative forces — key formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.6, 28.9, 46.7, 67.4, 84.0, 104.9, 129.7, 150.6] · dur 175.5;
 *        hi [0, 9.1, 27.7, 45.8, 67.5, 85.2, 105.4, 129.5, 150.3] · dur 175.1):
 *  0 title · 1 W_cons = −ΔU · 2 F = −dU/dx (−∇U) · 3 conservation two ways
 *  4 W_nc = ΔE · 5 friction heat bookkeeping · 6 curl test
 *  7 examples line · 8 sign-of-U note band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  rows: labels bl 116/230/344 · chips y126..164 / 240..278 / 354..392 · notes bl 190/304/418
 *  S1 x80..420 · S2 x560..940 · S3 x80..500 · S4 x560..900 · S5 x80..480 · S6 x560..1000
 *  b7 line cx540 bl455 · b8 bar x66 y480..575 · lines st x84 bl500/526/552
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

export default function Ch05Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Conservative & Non-Conservative — Key Formulas", "Conservative & Non-Conservative — Key Formulas")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "the exact tools JEE Main tests every year — a clean page",
            "wahi tools jo JEE Main har saal poochhta hai — ek saaf page"
          )}
        </T>
      </Fade>

      {/* beat 1 — W_cons = −ΔU */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={80} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("1 · conservative work ↔ U", "1 · conservative work ↔ U")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={126} w={340} h={38} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          W_cons = −ΔU = Ui − Uf
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={250} y={190} size={12.5} fill={GREEN} script>
          {t("+ work → energy came OUT of storage", "+ work → energy bhandar se BAHAR aayi")}
        </T>
      </Fade>

      {/* beat 2 — force from U */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={560} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("2 · force from the potential", "2 · potential se force")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={560} y={126} w={380} h={38} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          F = −dU⁄dx · 3-D: F = −∇U
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 11)}>
        <T x={750} y={190} size={12.5} fill={MUTED} script>
          {t("always minus the slope — downhill", "hamesha slope ka minus — downhill")}
        </T>
      </Fade>

      {/* beat 3 — conservation, two ways */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={80} y={230} size={13} fill={AMBER_DARK} script anchor="start">
          {t("3 · conservation (only conservative work)", "3 · conservation (sirf conservative work)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={80} y={240} w={420} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          Ki + Ui = Kf + Uf ⇔ ΔE = 0
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={290} y={304} size={12.5} fill={MUTED} script>
          {t("two writings of one law — pick the cleaner", "ek law ke do roop — jo saaf ho wahi lo")}
        </T>
      </Fade>

      {/* beat 4 — the modified theorem */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={560} y={230} size={13} fill={AMBER_DARK} script anchor="start">
          {t("4 · the modified theorem", "4 · modified theorem")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={560} y={240} w={340} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          W_nc = ΔE = Ef − Ei
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <T x={730} y={304} size={12.5} fill={RED} script>
          {t("reach for it the instant friction appears", "friction dikhte hi isi ki taraf haath")}
        </T>
      </Fade>

      {/* beat 5 — friction heat */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={80} y={344} size={13} fill={AMBER_DARK} script anchor="start">
          {t("5 · friction's heat bookkeeping", "5 · friction ka heat hisaab")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={80} y={354} w={400} h={38} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          |W_fric| = f × d_slide = heat
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <T x={280} y={418} size={12.5} fill={RED} script>
          {t(
            "sliding = TOTAL path length — next section shows why",
            "sliding = KUL path length — agla section batayega kyun"
          )}
        </T>
      </Fade>

      {/* beat 6 — the curl test */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={560} y={344} size={13} fill={AMBER_DARK} script anchor="start">
          {t("6 · the vector test", "6 · vector test")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={560} y={354} w={440} h={38} fill={CREAM} stroke={INK} textFill={INK} size={13.5} script={false}>
          ∇×F = 0 · 2-D: ∂Fy⁄∂x = ∂Fx⁄∂y
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={780} y={418} size={12.5} fill={GREEN} script>
          {t(
            "cross-derivatives match → conservative",
            "cross-derivatives milen → conservative"
          )}
        </T>
      </Fade>

      {/* beat 7 — the examples */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={455} size={13} fill={INK} script>
          {t(
            "conservative: gravity · spring · electrostatic — non-conservative: friction · drag · air resistance",
            "conservative: gravity · spring · electrostatic — non-conservative: friction · drag · air resistance"
          )}
        </T>
      </Fade>

      {/* beat 8 — the sign of U */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 480 v 90" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={500} size={13} fill={INK} script anchor="start">
          {t(
            "attractive (gravity, ± charges) → U negative — energy needed to pull apart",
            "attractive (gravity, ± charges) → U negative — alag kheenchne ko energy chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={84} y={526} size={13} fill={INK} script anchor="start">
          {t(
            "repulsive (like charges) → U positive — stored, ready to fling apart",
            "repulsive (same charges) → U positive — jama, phenkne ko taiyar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 17)}>
        <T x={84} y={552} size={13} fill={GREEN} script anchor="start">
          {t(
            "that's why −G m₁ m₂ ⁄ r wears the minus: gravity always attracts",
            "isiliye −G m₁ m₂ ⁄ r minus pehnta hai: gravity hamesha kheenchti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
