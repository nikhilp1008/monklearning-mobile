/**
 * Ch04 · Section 18 — "Momentum Conservation: the formula set"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.5, 18.9, 30.5, 42.4, 55.4, 66.5, 78.3, 89.0, 102.0]):
 *  0 title · 1 band1 + master · 2 units line · 3 band2 recoil ·
 *  4 band3 + inelastic · 5 elastic pair line · 6 band4 + e ratio ·
 *  7 e range line · 8 band5 + v_cm · 9 thrust line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · bands x60..1020:
 *  band1 y84..172  hdr bl 104 · lines cx540 bl 130 / 156
 *  band2 y182..246 hdr bl 202 · line cx540 bl 232
 *  band3 y256..344 hdr bl 276 · lines cx540 bl 302 / 330
 *  band4 y354..442 hdr bl 374 · lines cx540 bl 400 / 428
 *  band5 y452..540 hdr bl 472 · lines cx540 bl 498 / 526
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
  MUTED,
  AMBER,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

function band(y: number, h: number) {
  return `M 72 ${y} h 936 q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h -936 q -12 0 -12 -12 v -${
    h - 24
  } q 0 -12 12 -12`;
}

export default function Ch04Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const hdr = (k: number, y: number, txt: string) => (
    <Fade on={beat >= k} delay={dl(k, 1)}>
      <T x={84} y={y} size={11} fill={MUTED} script anchor="start">
        {txt}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Subtopic 2 — the conservation toolkit in one frame",
            "Subtopic 2 — conservation toolkit ek frame mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — the master statement */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={band(84, 88)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(1, 104, t("1 · the master statement", "1 · master statement"))}
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={130} size={15} fill={INK} weight={700}>
          {t(
            "Σ mᵢuᵢ = Σ mᵢvᵢ  (F_ext = 0) — everything below is a special case",
            "Σ mᵢuᵢ = Σ mᵢvᵢ  (F_ext = 0) — neeche sab iske special cases hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — units */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={156} size={14} fill={INK} weight={600}>
          {t(
            "SI: kg·m⁄s · [M¹ L¹ T⁻¹] — identical to impulse",
            "SI: kg·m⁄s · [M¹ L¹ T⁻¹] — impulse jaisa hi"
          )}
        </T>
      </Fade>

      {/* beat 3 — recoil */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={band(182, 64)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(3, 202, t("2 · recoil ⁄ explosion from rest", "2 · recoil ⁄ explosion, rest se"))}
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={232} size={15} fill={INK} weight={700}>
          {t(
            "m₁v₁ + m₂v₂ = 0 ⇒ v₂ = −(m₁⁄m₂)v₁ — the lighter body flies faster",
            "m₁v₁ + m₂v₂ = 0 ⇒ v₂ = −(m₁⁄m₂)v₁ — halki body tez udti hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — perfectly inelastic */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={band(256, 88)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(4, 276, t("3 · collisions", "3 · collisions"))}
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={540} y={302} size={15} fill={INK} weight={700}>
          {t(
            "stick together: v = (m₁u₁ + m₂u₂) ⁄ (m₁ + m₂) — the Board numerical",
            "chipak gaye: v = (m₁u₁ + m₂u₂) ⁄ (m₁ + m₂) — Board ka numerical"
          )}
        </T>
      </Fade>

      {/* beat 5 — elastic pair */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={330} size={14} fill={INK} weight={600}>
          {t(
            "elastic: v₁ = [(m₁−m₂)u₁ + 2m₂u₂]⁄(m₁+m₂) · v₂ = same with 1 ↔ 2",
            "elastic: v₁ = [(m₁−m₂)u₁ + 2m₂u₂]⁄(m₁+m₂) · v₂ = wahi, 1 ↔ 2 karke"
          )}
        </T>
      </Fade>

      {/* beat 6 — restitution */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={band(354, 88)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(6, 374, t("4 · coefficient of restitution", "4 · coefficient of restitution"))}
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={400} size={15} fill={INK} weight={700}>
          {t(
            "e = separation ⁄ approach = (v₂ − v₁) ⁄ (u₁ − u₂) — SPEEDS, not energies",
            "e = separation ⁄ approach = (v₂ − v₁) ⁄ (u₁ − u₂) — SPEEDS, energies nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the e range */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={428} size={14} fill={INK} weight={600}>
          {t(
            "dimensionless · elastic e = 1 · perfectly inelastic e = 0 · reality in between",
            "dimensionless · elastic e = 1 · perfectly inelastic e = 0 · asli duniya beech mein"
          )}
        </T>
      </Fade>

      {/* beat 8 — centre of mass */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d={band(452, 88)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(8, 472, t("5 · centre of mass · thrust", "5 · centre of mass · thrust"))}
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={540} y={498} size={15} fill={INK} weight={700}>
          {t(
            "v_cm = Σ mᵢvᵢ ⁄ Σ mᵢ — constant when F_ext = 0 (your error-checker)",
            "v_cm = Σ mᵢvᵢ ⁄ Σ mᵢ — F_ext = 0 par constant (aapka error-checker)"
          )}
        </T>
      </Fade>

      {/* beat 9 — thrust */}
      <Fade on={beat >= 9} delay={dl(9, 1)}>
        <T x={540} y={526} size={15} fill={GREEN} weight={700}>
          {t(
            "thrust: F = v_rel · dm⁄dt — exhaust speed × burn rate",
            "thrust: F = v_rel · dm⁄dt — exhaust speed × burn rate"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
