/**
 * Ch05 · Section 38 — "Forms of energy and conservation — key formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.3, 32.1, 48.6, 66.4, 91.2, 116.1, 132.5, 153.0] · dur 177.8;
 *        hi [0, 6.4, 31.0, 47.6, 65.8, 90.6, 115.5, 128.5, 151.9] · dur 176.7):
 *  0 title · 1 the law chip + include-every-form · 2 Joule constant card
 *  3 E = mc² card · 4 power-plant chain · 5 conversion constants row
 *  6 units lines · 7 u↔MeV insight · 8 two anchors band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | chip x80..720 y112..152 · red cx400 bl178
 *  b2 | lbl st x80 bl216 · chip x80..360 y226..264
 *  b3 | lbl st x560 bl216 · chip x560..920 y226..264 · muted cx740 bl290
 *  b4 | chips y320..356: x80/x300/x520/x710 · arrows · script cx540 bl396
 *  b5 | chips y415..451: x80..300 / x320..520 / x540..760
 *  b6 | st x790 bl430 / bl456
 *  b7 | cx540 bl486
 *  b8 | bar x66 y505..585 · lines st x84 bl525 / bl551 / bl577
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Forms of Energy & Conservation — Key Formulas", "Forms of Energy & Conservation — Key Formulas")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t("short — but every line is high-yield", "chhoti — par har line high-yield")}
        </T>
      </Fade>

      {/* beat 1 — the law */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={112} w={640} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          K + U + heat + chemical + electrical + … = constant (isolated)
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={400} y={178} size={13} fill={RED} script>
          {t(
            "include EVERY form — especially friction's heat",
            "HAR roop shamil karo — khaas taur par friction ki heat"
          )}
        </T>
      </Fade>

      {/* beat 2 — Joule's constant */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={80} y={216} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Joule's exchange rate", "Joule ka exchange rate")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={80} y={226} w={280} h={38} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          1 cal = 4.186 J ≈ 4.2
        </Chip>
      </Fade>

      {/* beat 3 — the headline */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={560} y={216} size={13} fill={AMBER_DARK} script anchor="start">
          {t("the headline", "sabse badi")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={560} y={226} w={360} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          E = mc² · ΔE = Δm c²
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={740} y={290} size={12.5} fill={MUTED} script>
          {t(
            "c = 3×10⁸ m/s — you'll square it constantly",
            "c = 3×10⁸ m/s — ise lagatar square karoge"
          )}
        </T>
      </Fade>

      {/* beat 4 — the power-plant chain */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={80} y={320} w={190} h={36} fill={CREAM} stroke={INK} textFill={INK} size={11.5} script={false}>
          {t("coal — chemical", "coal — chemical")}
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d={arrowD(274, 338, 296, 338)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <Chip x={300} y={320} w={190} h={36} fill={CREAM} stroke={INK} textFill={INK} size={11.5} script={false}>
          {t("combustion — heat", "combustion — heat")}
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.6)} d={arrowD(494, 338, 516, 338)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 5.1)}>
        <Chip x={520} y={320} w={170} h={36} fill={CREAM} stroke={INK} textFill={INK} size={11.5} script={false}>
          {t("turbine — KE", "turbine — KE")}
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6.4)} d={arrowD(694, 338, 716, 338)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 6.9)}>
        <Chip x={720} y={320} w={230} h={36} fill={CREAM} stroke={INK} textFill={INK} size={11.5} script={false}>
          {t("generator — electrical", "generator — electrical")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={540} y={396} size={13} fill={AMBER_DARK} script>
          {t(
            "trace device by device — the shortfall is waste heat, never destroyed energy",
            "device dar device track karo — kami waste heat hai, nasht energy nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — conversion constants */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={80} y={415} w={220} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          1 eV = 1.6×10⁻¹⁹ J
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <Chip x={320} y={415} w={200} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          1 u ↔ 931.5 MeV
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <Chip x={540} y={415} w={220} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          1 kWh = 3.6×10⁶ J
        </Chip>
      </Fade>

      {/* beat 6 — units */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={790} y={430} size={13.5} fill={INK} anchor="start" weight={700}>
          [E] = M L² T⁻²
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={790} y={456} size={13.5} fill={INK} anchor="start" weight={700}>
          c: L T⁻¹ · m: kg
        </T>
      </Fade>

      {/* beat 7 — the u ↔ MeV insight */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={486} size={13} fill={GREEN} script>
          {t(
            "1 u ↔ 931.5 MeV is not a new law — it is E = mc² applied to one u",
            "1 u ↔ 931.5 MeV koi naya law nahi — ye E = mc² hi hai, ek u par lagaya hua"
          )}
        </T>
      </Fade>

      {/* beat 8 — two anchors */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 505 v 85" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={525} size={13} fill={GREEN} script anchor="start">
          {t(
            "anchor 1: 1 kg ↔ 9×10¹⁶ J — then scale by the given mass",
            "anchor 1: 1 kg ↔ 9×10¹⁶ J — phir diye mass se scale karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={84} y={551} size={13} fill={GREEN} script anchor="start">
          {t(
            "anchor 2: mass defect × 931.5 MeV — skip SI units entirely",
            "anchor 2: mass defect × 931.5 MeV — SI units bilkul chhodo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 16)}>
        <T x={84} y={577} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "two numbers — half this subtopic's questions collapse to one line",
            "do numbers — is subtopic ke aadhe sawaal ek line mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
