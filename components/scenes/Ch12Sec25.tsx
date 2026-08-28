/**
 * Ch12 · Section 25 — Worked example [JEE Main]: total kinetic energy from P and V
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.71, 20.71, 21.71, 22.71, 23.71, 38.05]):
 *  0 title + problem · 1 pressure-energy relation: PV=(2/3)E ⇒ E=(3/2)PV · 2
 *    write formula · 3 substitute ⇒ 450 J · 4 per molecule ≈1.1×10⁻²⁰ J · 5
 *    answer chips + no-T-or-M note · 6 verdict: (P,V) encodes total KE
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 23, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | problem (13, ink, script)       | T mid | x540 y94
 *  b1 | reasoning (14, ink, script)     | T mid | x540 y126
 *  b2 | formula (16, ink, bold)         | T mid | x540 y158
 *  b3 | substitute (15, ink)            | T mid | x540 y188
 *  b4 | per-molecule (15, ink)          | T mid | x540 y218
 *  b5 | answer chips ×2                  | Chip  | x290..570 / x600..940 y254..292
 *  b5 | note (13, red, script)          | T mid | x540 y320
 *  b6 | verdict (script 16, green)      | T mid | x540 y360
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("total kinetic energy from P and V [JEE Main]", "P aur V se total kinetic energy [JEE Main]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={13} fill={INK} script>
          {t(
            "2 L vessel, P=1.5×10⁵ Pa ⇒ E_total? per molecule (N=4×10²²)?",
            "2 L vessel, P=1.5×10⁵ Pa ⇒ E_total? per molecule (N=4×10²²)?"
          )}
        </T>
      </Fade>

      {/* beat 1 — pressure-energy relation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={126} size={14} fill={INK} script>
          {t(
            "pressure-energy relation: PV = (2/3)E ⇒ E = (3/2)PV",
            "pressure-energy relation: PV = (2/3)E ⇒ E = (3/2)PV"
          )}
        </T>
      </Fade>

      {/* beat 2 — write formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={158} size={16} fill={INK} weight={700}>
          E = (3/2)PV
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={188} size={15} fill={INK}>
          = (3/2)(1.5×10⁵)(2×10⁻³) = 450 J
        </T>
      </Fade>

      {/* beat 4 — per molecule */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={218} size={15} fill={INK}>
          per molecule = 450 / 4×10²² ≈ 1.1×10⁻²⁰ J
        </T>
      </Fade>

      {/* beat 5 — answer chips + note */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={290} y={254} w={280} h={38} fill={GREEN} textFill="#fff" size={16} script={false}>
          E_total ≈ 450 J
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={600} y={254} w={340} h={38} fill={GREEN} textFill="#fff" size={15} script={false}>
          per molecule ≈ 1.1×10⁻²⁰ J
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={320} size={13} fill={RED} script>
          {t("no T or M needed!", "T ya M ki zaroorat nahi!")}
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={360} size={16} fill={GREEN} script>
          {t(
            "(P,V) already encodes the total kinetic energy",
            "(P,V) pehle se total kinetic energy encode karta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
