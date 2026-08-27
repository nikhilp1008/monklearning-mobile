/**
 * Ch05 · Section 61 — "Vertical circle — key formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.3, 35.2, 60.0, 78.3, 93.1, 114.9, 137.7, 152.9] · dur 177.8;
 *        hi [0, 8.2, 33.0, 57.9, 73.0, 87.7, 108.0, 129.7, 144.6] · dur 169.5):
 *  0 title · 1 master tension equation · 2 energy relation · 3 critical-speed chips
 *  4 6mg chip · 5 three regimes · 6 rod chip · 7 units · 8 one conceptual line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  S1 chip x80..520 y110..148 · note cx300 bl174
 *  S2 chip x560..1010 y110..148 · note cx785 bl174
 *  S3 chips y210..246: x80..230 / x250..410 / x430..610 · note cx345 bl272
 *  S4 chip x650..1010 y210..246 · note cx830 bl272
 *  S5 st x80 bl320/346/372 · note cx280 bl398
 *  S6 chip x560..1010 y310..348 · note cx785 bl374
 *  S7 st x560 bl420
 *  b8 | bar x66 y460..545 · lines st x84 bl480/506/532
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

export default function Ch05Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Vertical Circle — Key Formulas", "Vertical Circle — Key Formulas")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the last formula sheet of the chapter — every line examinable",
            "chapter ki aakhri formula sheet — har line examinable"
          )}
        </T>
      </Fade>

      {/* beat 1 — master tension equation */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={80} y={110} w={440} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          {t("T = mv²⁄R + mg cos θ (θ from bottom)", "T = mv²⁄R + mg cos θ (θ bottom se)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={300} y={174} size={12.5} fill={AMBER_DARK} script>
          {t(
            "bottom: cos = 1, T max · top: mg flips → T min",
            "bottom: cos = 1, T max · top: mg palta → T min"
          )}
        </T>
      </Fade>

      {/* beat 2 — energy relation */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={560} y={110} w={450} h={38} fill={CREAM} stroke={INK} textFill={INK} size={13.5} script={false}>
          v² = u² − 2gR(1 − cos θ)
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={785} y={174} size={12.5} fill={MUTED} script>
          {t(
            "height risen = R(1 − cos θ) — just energy conservation",
            "uthi height = R(1 − cos θ) — bas energy conservation"
          )}
        </T>
      </Fade>

      {/* beat 3 — the critical speeds */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={80} y={210} w={150} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          top √(gR)
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <Chip x={250} y={210} w={160} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          side √(3gR)
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <Chip x={430} y={210} w={180} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          bottom √(5gR)
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={345} y={272} size={12.5} fill={AMBER_DARK} script>
          {t(
            "the most examined numbers in this application",
            "is application ke sabse zyada poochhe numbers"
          )}
        </T>
      </Fade>

      {/* beat 4 — the 6mg gift */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={650} y={210} w={360} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={13.5} script={false}>
          T_bottom − T_top = 6mg
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={830} y={272} size={12.5} fill={GREEN} script>
          {t("any speed, any radius — a gift", "koi bhi speed, koi bhi radius — tohfa")}
        </T>
      </Fade>

      {/* beat 5 — the regimes */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={80} y={320} size={13} fill={GREEN} script anchor="start">
          {t("≥ √(5gR) → the full loop", "≥ √(5gR) → poora loop")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={80} y={346} size={13} fill={RED} script anchor="start">
          {t("√(2gR)…√(5gR) → leaves the track partway", "√(2gR)…√(5gR) → beech mein track chhodta")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={80} y={372} size={13} fill={AMBER_DARK} script anchor="start">
          {t("≤ √(2gR) → pendulum oscillation", "≤ √(2gR) → pendulum jaisa jhoolna")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 18)}>
        <T x={280} y={398} size={12.5} fill={MUTED} script>
          {t("classify FIRST — always", "PEHLE classify karo — hamesha")}
        </T>
      </Fade>

      {/* beat 6 — the rod */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={560} y={310} w={450} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12.5} script={false}>
          {t(
            "ROD: v_top can be 0 → v_bottom,min = 2√(gR)",
            "ROD: v_top 0 ho sakti → v_bottom,min = 2√(gR)"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={785} y={374} size={12.5} fill={MUTED} script>
          {t(
            "noticeably less than the string's √(5gR)",
            "string ke √(5gR) se saaf kam"
          )}
        </T>
      </Fade>

      {/* beat 7 — units */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={560} y={420} size={13} fill={INK} anchor="start" weight={700}>
          [T] = N = M L T⁻² · R: m · v: m/s · g: m/s²
        </T>
      </Fade>

      {/* beat 8 — the one line */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 460 v 85" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "a string can only PULL — T ≥ 0 · a rod can PUSH as well",
            "string sirf KHINCH sakti hai — T ≥ 0 · rod DHAKKA bhi de sakta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={84} y={506} size={13} fill={GREEN} script anchor="start">
          {t(
            "that single physical difference sets the whole contrast",
            "wahi ek physical farq poora contrast tay karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 15)}>
        <T x={84} y={532} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "understand it, and both families of problems open at once",
            "ise samjho, aur sawaalon ke dono parivar ek saath khul jaate hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
