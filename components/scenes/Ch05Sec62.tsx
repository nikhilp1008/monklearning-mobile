/**
 * Ch05 · Section 62 — "Tension at the bottom, and where the string goes slack"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.7, 32.6, 57.4, 79.7, 104.5, 114.4] · dur 139.2;
 *        hi [0, 13.4, 29.3, 54.1, 75.0, 99.8, 109.1] · dur 133.9):
 *  0 title + subtitle
 *  1 setup chip
 *  2 completion check: v_top = 4
 *  3 compare to √(gR) → completes
 *  4 tension at the bottom → 164 N
 *  5 ordering note
 *  6 order-matters band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  b1 | chip x120..960 y110..148
 *  b2 | st x120 bl200 / bl230 · b3 | bl280 / bl310 · muted bl336
 *  b4 | st x600 bl200 / bl230 · chip x600..880 y250..288 · red cx740 bl314
 *  b5 | amber cx540 bl400
 *  b6 | bar x66 y430..520 · lines st x84 bl450 / bl476 / bl502
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

export default function Ch05Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Tension at the Bottom — Completion First", "Bottom par Tension — Pehle Completion")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the vertical-circle machinery at work — in the right order",
            "vertical-circle machinery kaam par — sahi kram mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={120} y={110} w={840} h={38} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          {t(
            "2 kg · R = 0.5 m · v_bottom = 6 m/s · does it complete? T at the bottom? · g = 10",
            "2 kg · R = 0.5 m · v_bottom = 6 m/s · poora karti hai? bottom par T? · g = 10"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — the completion check */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={120} y={200} size={14} fill={INK} anchor="start" weight={700}>
          {t("rise = 2R → v_t² = v_b² − 4gR", "chadhai = 2R → v_t² = v_b² − 4gR")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={120} y={230} size={14} fill={INK} anchor="start" weight={800}>
          = 36 − 20 = 16 → v_top = 4 m/s
        </T>
      </Fade>

      {/* beat 3 — compare */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={120} y={280} size={14} fill={INK} anchor="start" weight={700}>
          {t("need at the top: √(gR) = √5 ≈ 2.24", "top par chahiye: √(gR) = √5 ≈ 2.24")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={120} y={310} size={14} fill={GREEN} anchor="start" weight={800}>
          {t("4 > 2.24 ✓ — the loop is completed", "4 > 2.24 ✓ — loop poora hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={120} y={336} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "only NOW does the tension question make sense",
            "sirf AB tension waala sawaal maayne rakhta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — tension at the bottom */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={600} y={200} size={14} fill={INK} anchor="start" weight={700}>
          {t("at the bottom: T − mg = mv²⁄R", "bottom par: T − mg = mv²⁄R")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={600} y={230} size={14} fill={INK} anchor="start" weight={700}>
          T = (2 × 36 ÷ 0.5) + 20 = 144 + 20
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <Chip x={600} y={250} w={280} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          T = 164 N
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 19)}>
        <T x={740} y={314} size={12.5} fill={RED} script>
          {t(
            "8× the weight — ropes snap at the BOTTOM, not the top",
            "weight ka 8 guna — rassiyan BOTTOM par tootti hain, top par nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the ordering note */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={400} size={13} fill={AMBER_DARK} script>
          {t(
            "ordering rule: completion first (v_top vs √gR) → only then the tension",
            "kram ka niyam: pehle completion (v_top vs √gR) → uske baad hi tension"
          )}
        </T>
      </Fade>

      {/* beat 6 — order matters */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 66 430 v 85" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={84} y={450} size={13} fill={RED} script anchor="start">
          {t("getting the order backwards costs marks", "kram ulta karna marks mein padta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={84} y={476} size={13} fill={RED} script anchor="start">
          {t(
            "no completion → a bottom-tension answer may be meaningless",
            "completion nahi → bottom-tension ka jawab bemaani ho sakta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 15)}>
        <T x={84} y={502} size={13} fill={GREEN} script anchor="start">
          {t(
            "confirm it stays on the track — THEN find the forces. Order matters.",
            "pehle pakka karo track par hai — PHIR forces nikaalo. Kram maayne rakhta hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
