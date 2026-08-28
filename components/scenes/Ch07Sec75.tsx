/**
 * Ch07 · Section 75 — "Master formula sheet: the complete Chapter 7 toolkit"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * A six-band formula map — one revealed row per subtopic (beats 1-6), then
 * the golden links box (beat 7) and the "revise, don't re-derive" note (beat 8).
 *
 * Beats (en [0, 1, 2, 22.14, 45.01, 67.11, 84.77, 101.84, 119.25]):
 *  0 title
 *  1 band 1: Newton's law + G
 *  2 band 2: field intensity (4 cases)
 *  3 band 3: g variations (4 cases)
 *  4 band 4: potential & energy (4 results)
 *  5 band 5: Kepler & satellites (3 results)
 *  6 band 6: G and two-body (4 results)
 *  7 green box: the golden links
 *  8 red margin: revise, don't re-derive
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  bands st x90, size 12.5, one line each: bl92/122/152/182/212/242
 *  labels (amber, size 11, weight800) prefix each band inline
 *  b7 green box x90..990 y270..322 (bl302, size 13)
 *  b8 bar x66 y350..402 lines bl372/398
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec75({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the complete toolkit */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "Chapter 7 toolkit — restated, not re-taught",
            "Chapter 7 toolkit — dohraya gaya, dobara padhaya nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — Newton's law + G */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={90} y={92} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>
          Newton:
        </T>
        <T x={175} y={92} size={12.5} fill={INK} anchor="start" weight={700}>
          F = Gm₁m₂⁄r² · G = 6.67×10⁻¹¹, [M⁻¹L³T⁻²]
        </T>
      </Fade>

      {/* beat 2 — field intensity */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={90} y={122} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("Field:", "Field:")}
        </T>
        <T x={175} y={122} size={12.5} fill={INK} anchor="start" weight={700}>
          {t(
            "outside GM⁄r² · shell-in 0 · solid GMr⁄R³ · ring GMx⁄(a²+x²)^(3⁄2)",
            "outside GM⁄r² · shell-in 0 · solid GMr⁄R³ · ring GMx⁄(a²+x²)^(3⁄2)"
          )}
        </T>
      </Fade>

      {/* beat 3 — g variations */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={90} y={152} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>
          g:
        </T>
        <T x={175} y={152} size={12.5} fill={INK} anchor="start" weight={700}>
          GM⁄R²=(4⁄3)πGRρ · alt g(1−2h⁄R) · depth g(1−d⁄R) · rot g−ω²Rcos²λ
        </T>
      </Fade>

      {/* beat 4 — potential and energy */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={90} y={182} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("Potential:", "Potential:")}
        </T>
        <T x={175} y={182} size={12.5} fill={INK} anchor="start" weight={700}>
          U=−GMm⁄r · V=−GM⁄r · E=−dV⁄dr · v(e)=√(2GM⁄R)=√(2gR)
        </T>
      </Fade>

      {/* beat 5 — Kepler and satellites */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={90} y={212} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("Satellites:", "Satellites:")}
        </T>
        <T x={225} y={212} size={12.5} fill={INK} anchor="start" weight={700}>
          v(o)=√(GM⁄r) · T=2π√(r³⁄GM) · E=−GMm⁄2r (K=−E, U=2E)
        </T>
      </Fade>

      {/* beat 6 — G and two-body */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={90} y={242} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("Two-body:", "Two-body:")}
        </T>
        <T x={210} y={242} size={12.5} fill={INK} anchor="start" weight={700}>
          M=gR²⁄G · ρ=3g⁄4πGR · ω²=G(m₁+m₂)⁄r³ · μ=m₁m₂⁄(m₁+m₂)
        </T>
      </Fade>

      {/* beat 7 — the golden links */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.6)}
          d="M 90 270 h 900 q 12 0 12 12 v 40 q 0 12 -12 12 h -900 q -12 0 -12 -12 v -40 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={296} size={14} fill={INK} weight={800}>
          {t(
            "golden links: v(e)=√2·v(o) · T=2π√(R⁄g)≈84 min · M=4π²r³⁄GT²",
            "golden links: v(e)=√2·v(o) · T=2π√(R⁄g)≈84 min · M=4π²r³⁄GT²"
          )}
        </T>
      </Fade>

      {/* beat 8 — revise, don't re-derive */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 350 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={84} y={372} size={13} fill={RED} script anchor="start">
          {t(
            "revise from this sheet — do NOT re-derive",
            "is sheet se revise karo — DOBARA derive mat karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={84} y={398} size={13} fill={RED} script anchor="start">
          {t(
            "every result here you've already proved in the chapter",
            "yahan ka har result aap chapter mein pehle prove kar chuke"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
