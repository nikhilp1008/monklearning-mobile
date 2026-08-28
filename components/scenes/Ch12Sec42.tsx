/**
 * Ch12 · Section 42 — Worked example [CBSE]: internal energy of a diatomic gas
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 12.69, 17.13, 29.59, 35.05, 48.7]):
 *  0 title + problem · 1 only trans+rot ⇒ room T ⇒ f=5 not 7 · 2 formula
 *    U=(f/2)nRT · 3 substitute · 4 answer ≈1.87×10⁴ J · 5 key decision: f=5 ✓
 *    vs f=7 ✗ chips · 6 takeaway: U needs only f,n,T
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 22, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | problem (13, ink, script)       | T mid | x540 y92
 *  b1 | reasoning (13, ink, script)     | T mid | x540 y122
 *  b2 | formula (16, ink)               | T mid | x540 y152
 *  b3 | substitute (14, ink)            | T mid | x540 y182
 *  b4 | answer (20, amber_dark, bold)   | T mid | x540 y216
 *  b5 | f=5✓ chip · f=7✗ chip+strike    | Chip/Draw| x400 / x560 y250..286
 *  b6 | takeaway (script 15, green)     | T mid | x540 y330
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("internal energy of a diatomic gas [CBSE]", "diatomic gas ki internal energy [CBSE]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={13} fill={INK} script>
          {t(
            "3 mol diatomic gas @300K, only trans+rot active ⇒ U? (R=8.314)",
            "3 mol diatomic gas @300K, sirf trans+rot active ⇒ U? (R=8.314)"
          )}
        </T>
      </Fade>

      {/* beat 1 — reasoning */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={122} size={13} fill={INK} script>
          {t(
            "only translation+rotation ⇒ room T ⇒ f = 5, not 7",
            "sirf translation+rotation ⇒ room T ⇒ f = 5, na ki 7"
          )}
        </T>
      </Fade>

      {/* beat 2 — formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={152} size={16} fill={INK} weight={700}>
          U = (f/2)nRT
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={182} size={14} fill={INK}>
          = (5/2)(3)(8.314)(300)
        </T>
      </Fade>

      {/* beat 4 — answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={216} size={20} fill={AMBER_DARK} weight={700}>
          ≈ 1.87×10⁴ J
        </T>
      </Fade>

      {/* beat 5 — the key decision */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={370} y={250} w={140} h={36} fill={GREEN} textFill="#fff" size={16} script={false}>
          f = 5 ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <Chip x={560} y={250} w={140} h={36} fill={RED} textFill="#fff" size={16} script={false}>
          f = 7 ✗
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={crossD(560, 250, 140, 36)} stroke={INK} sw={2} dur={0.4} />

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={330} size={15} fill={GREEN} script>
          {t(
            "U needs only f, n, and T — never volume or pressure",
            "U ko sirf f, n, aur T chahiye — kabhi V ya P nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
