/**
 * Ch12 · Section 24 — Worked example [NEET]: scaling the rms speed
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 8.31, 13.35, 18.81, 31.95]):
 *  0 title + problem · 1 at fixed ρ: P∝v²rms · 2 ratio P2/P1=(v2/v1)² · 3
 *    substitute (3)²=9 · 4 answer: P becomes 9x · 5 THE TRAP: careless "3x"
 *    struck out · 6 rule: square the factor first
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 23, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | problem (14, ink, script)       | T mid | x540 y96
 *  b1 | reasoning (15, ink, script)     | T mid | x540 y130
 *  b2 | ratio (16, ink)                 | T mid | x540 y164
 *  b3 | substitute (16, ink)             | T mid | x540 y194
 *  b4 | answer (20, green, bold)         | T mid | x540 y230
 *  b5 | "3× careless" + strike (red)    | T/Draw| x540 y280
 *  b5 | correction (15, green)          | T mid | x540 y315
 *  b6 | rule (script 16, ink, bold)     | T mid | x540 y360
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("scaling the rms speed [NEET]", "rms speed ko scale karna [NEET]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={96} size={14} fill={INK} script>
          {t(
            "vrms → 3×vrms, ρ unchanged ⇒ pressure changes by what factor?",
            "vrms → 3×vrms, ρ same ⇒ pressure kis factor se badalta?"
          )}
        </T>
      </Fade>

      {/* beat 1 — reasoning */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK} script>
          {t("at fixed density: P ∝ v²rms", "fixed density par: P ∝ v²rms")}
        </T>
      </Fade>

      {/* beat 2 — ratio */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={164} size={16} fill={INK}>
          P₂/P₁ = (v₂/v₁)²
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={194} size={16} fill={INK}>
          = (3)² = 9
        </T>
      </Fade>

      {/* beat 4 — answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={230} size={20} fill={GREEN} weight={700}>
          {t("P becomes 9× larger", "P 9× bada ho jata")}
        </T>
      </Fade>

      {/* beat 5 — THE TRAP */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={280} size={17} fill={RED} weight={700}>
          {t("careless answer: 3×", "careless jawab: 3×")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d={crossD(495, 261, 90, 24)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={315} size={15} fill={GREEN} script>
          {t(
            "P follows v² (it comes from kinetic energy), not v itself",
            "P follows v² (kinetic energy se aata hai), na ki v khud"
          )}
        </T>
      </Fade>

      {/* beat 6 — the rule */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={360} size={16} fill={INK} script weight={700}>
          {t(
            "rule: whenever a speed is scaled, square the factor first",
            "rule: jab bhi speed scale ho, pehle factor ko square karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
