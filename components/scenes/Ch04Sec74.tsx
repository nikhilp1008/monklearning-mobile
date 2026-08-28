/**
 * Ch04 · Section 74 — "Connected Bodies and Pulleys: the formula set"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.29, 26.62, 40.36, 55.13, 73.81, 98.65, 116.31, 140.97]):
 *  0 title
 *  1 band1: master statement — a = net driving force / total mass
 *  2 band2: blocks in contact — a=F/(m1+m2), Nc=m2F/(m1+m2)
 *  3 band3: Atwood — a=(m1-m2)g/(m1+m2), T=2m1m2g/(m1+m2)
 *  4 band4: table+hanging — a=m2g/(m1+m2), T=m1m2g/(m1+m2)
 *  5 band5: incline+hanging — a=(m2-m1sinθ)g/(m1+m2)
 *  6 band6: constraints — a1=a2 (fixed pulley), free end = 2×load (movable)
 *  7 band7: accelerating frame — g_eff = g±a0
 *  8 red margin: the one move — ΣF=ma per body, ADD, T cancels
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · bands x60..1020, each h40:
 *  b1 y78..118 hdr bl92 · form bl112 · b2 y124..164 hdr bl138 · form bl158
 *  b3 y170..210 hdr bl184 · form bl204 · b4 y216..256 hdr bl230 · form bl250
 *  b5 y262..302 hdr bl276 · form bl296 · b6 y308..348 hdr bl322 · form bl342
 *  b7 y354..394 hdr bl368 · form bl388
 *  b8 | bar x66 y430..500 · lines st x84 bl 450 / 476
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

function band(y: number, h: number) {
  return `M 72 ${y} h 936 q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h -936 q -12 0 -12 -12 v -${
    h - 24
  } q 0 -12 12 -12`;
}

export default function Ch04Sec74({ currentTime, reveals, language }: SceneProps) {
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
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "every connected-body relation, on one board",
            "har connected-body relation, ek board par"
          )}
        </T>
      </Fade>

      {/* beat 1 — master statement */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={band(78, 40)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(1, 92, t("the master statement", "master statement"))}
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={112} size={14} fill={INK} weight={700}>
          {t(
            "a = net driving force ÷ total mass — every row below is just this",
            "a = net driving force ÷ total mass — neeche har row bas yahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — blocks in contact */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={band(124, 40)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(2, 138, t("blocks in contact", "contact mein blocks"))}
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={158} size={13} fill={INK} weight={700}>
          a = F ÷ (m₁+m₂)&nbsp;&nbsp;·&nbsp;&nbsp;Nc = m₂F ÷ (m₁+m₂)
        </T>
      </Fade>

      {/* beat 3 — Atwood */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={band(170, 40)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(3, 184, t("Atwood (m₁ > m₂)", "Atwood (m₁ > m₂)"))}
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={204} size={13} fill={INK} weight={700}>
          a = (m₁−m₂)g ÷ (m₁+m₂)&nbsp;&nbsp;·&nbsp;&nbsp;T = 2m₁m₂g ÷ (m₁+m₂)
        </T>
      </Fade>

      {/* beat 4 — table+hanging */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={band(216, 40)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(4, 230, t("table + hanging, frictionless", "table + hanging, friction ke bina"))}
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={540} y={250} size={13} fill={INK} weight={700}>
          a = m₂g ÷ (m₁+m₂)&nbsp;&nbsp;·&nbsp;&nbsp;T = m₁m₂g ÷ (m₁+m₂)
        </T>
      </Fade>

      {/* beat 5 — incline+hanging */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={band(262, 40)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(5, 276, t("incline + hanging (m₂ hangs) — the general case", "incline + hanging (m₂ latakta) — general case"))}
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={296} size={13} fill={INK} weight={700}>
          a = (m₂ − m₁sinθ)g ÷ (m₁+m₂)
        </T>
      </Fade>

      {/* beat 6 — constraints */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={band(308, 40)} stroke={GREEN} sw={2} dur={0.5} />
      {hdr(6, 322, t("constraints — never skip this one", "constraints — ise kabhi mat chhodo"))}
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={342} size={13} fill={INK} weight={700}>
          {t(
            "a₁ = a₂ (fixed pulley) · free end = 2×load (one movable pulley)",
            "a₁ = a₂ (fixed pulley) · free end = 2×load (ek movable pulley)"
          )}
        </T>
      </Fade>

      {/* beat 7 — accelerating frame */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={band(354, 40)} stroke={AMBER} sw={2} dur={0.5} />
      {hdr(7, 368, t("accelerating frame", "accelerating frame"))}
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={388} size={14} fill={INK} weight={700}>
          {t(
            "replace g by g_eff = g ± a₀ — reuse any formula above unchanged",
            "g ki jagah g_eff = g ± a₀ — upar ka koi bhi formula waise hi reuse"
          )}
        </T>
      </Fade>

      {/* beat 8 — the one move */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 430 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={450} size={14} fill={RED} script anchor="start">
          {t(
            "ΣF = ma for each body, consistent signs, then ADD the equations",
            "har body ke liye ΣF = ma, consistent signs, phir equations JODO"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={476} size={14} fill={GREEN} script anchor="start">
          {t(
            "T cancels, a falls out in one line — this regenerates every formula above",
            "T cancel, a ek line mein nikal aata — ye upar ka har formula bana deta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
