/**
 * Ch02 · Section 23 — "The reading rules: what slope gives, what area gives"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.3, 34, 56.8, 79.2, 104, 123.7, 141.5]):
 *  0 title · table frame + headers
 *  1 row x-t: slope → v · area → nothing useful (crossed)
 *  2 row v-t: slope → a · area → Δx signed / distance magnitudes
 *  3 row a-t: slope → jerk (rare) · area → Δv
 *  4 which-slope card: tangent vs chord
 *  5 area-formula card: net SIGNED area
 *  6 Δv card: Δv, NOT v
 *  7 red note: v-t is fully loaded
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  table x60..1020 y84..312 · verticals x260/x640 · header bl 106 ·
 *  rows bl 152 / 218 / 284 (lines y114/180/246/312)
 *  b4 | card x60..520 y340..425 (hdr bl 362 · lines bl 388/412)
 *  b5 | card x560..1020 y340..425 (hdr bl 362 · formula bl 392 · sub bl 414)
 *  b6 | card x60..520 y445..510 (formula bl 478)
 *  b7 | bar x66 y530..592 · lines st x84 bl 550 / 576
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — commit this table */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "reading rules — little to compute, much to read",
            "reading rules — ginti kam, padhna zyada"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 60 84 h 960 v 228 h -960 z M 260 84 V 312 M 640 84 V 312 M 60 114 H 1020"
        stroke={INK}
        sw={2}
        dur={1.4}
      />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={160} y={106} size={13} fill={MUTED} script>
          graph
        </T>
        <T x={450} y={106} size={13} fill={MUTED} script>
          {t("slope gives", "slope kya deta hai")}
        </T>
        <T x={830} y={106} size={13} fill={MUTED} script>
          {t("area gives", "area kya deta hai")}
        </T>
      </Fade>

      {/* beat 1 — x-t: one-reading graph */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={160} y={152} size={14} fill={AMBER_DARK} script>
          x-t
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={450} y={152} size={15} fill={INK} weight={700}>
          v = dx⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={830} y={152} size={12} fill={MUTED} script>
          {t("— nothing useful", "— kuchh kaam ka nahi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 11)}
        d={crossD(777, 139, 106, 16)}
        stroke={RED}
        sw={1.8}
        dur={0.5}
      />
      <Draw on={beat >= 1} delay={dl(1, 13)} d="M 60 180 H 1020" stroke={INK} sw={1.2} dur={0.4} />

      {/* beat 2 — v-t: the rich row */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={160} y={218} size={14} fill={GREEN} script>
          v-t
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={450} y={218} size={15} fill={INK} weight={700}>
          a = dv⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={830} y={218} size={13} fill={INK} weight={600}>
          {t("Δx (signed) · distance (magnitudes)", "Δx (signed) · distance (magnitudes)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 16)} d="M 60 246 H 1020" stroke={INK} sw={1.2} dur={0.4} />

      {/* beat 3 — a-t */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={160} y={284} size={14} fill={RED} script>
          a-t
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={450} y={284} size={12} fill={MUTED} script>
          {t("jerk — real, rarely needed here", "jerk — asli hai, yahan kam lagta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={830} y={284} size={15} fill={INK} weight={700}>
          Δv = ∫ a dt
        </T>
      </Fade>

      {/* beat 4 — which slope, written properly */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 72 340 h 436 q 12 0 12 12 v 61 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -61 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={290} y={362} size={12} fill={AMBER_DARK} script>
          {t("which slope? the question tells you", "kaunsa slope? sawaal batata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={290} y={388} size={13} fill={INK} weight={600}>
          {t("'at t = 4 s' → tangent: v = dx⁄dt", "'t = 4 s par' → tangent: v = dx⁄dt")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={290} y={412} size={13} fill={INK} weight={600}>
          {t("'between 2 & 6 s' → chord: v̄ = Δx⁄Δt", "'2 se 6 s ke beech' → chord: v̄ = Δx⁄Δt")}
        </T>
      </Fade>

      {/* beat 5 — the signed area formula */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 572 340 h 436 q 12 0 12 12 v 61 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -61 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={790} y={362} size={12} fill={GREEN} script>
          {t("the area formula", "area ka formula")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={790} y={392} size={14} fill={INK} weight={700}>
          Δx = ∫ v dt = net SIGNED area
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={790} y={414} size={11} fill={MUTED} script>
          {t(
            "strip the sign and it stops being true",
            "sign hatao aur yeh sach nahi rehta"
          )}
        </T>
      </Fade>

      {/* beat 6 — Δv, not v */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 72 445 h 436 q 12 0 12 12 v 41 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={290} y={478} size={14} fill={INK} weight={700}>
          {t("Δv = ∫ a dt — it says Δv, NOT v", "Δv = ∫ a dt — Δv likha hai, v NAHI")}
        </T>
      </Fade>

      {/* beat 7 — the fully loaded graph */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 530 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={550} size={13} fill={RED} script anchor="start">
          {t(
            "only v-t is fully loaded — a slope you want AND an area you want",
            "sirf v-t poora bhara hai — slope bhi kaam ka AUR area bhi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={576} size={13} fill={RED} script anchor="start">
          {t(
            "that is why exams reach for v-t more than the other two combined",
            "isiliye exams v-t ko baaki dono se zyada uthate hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
