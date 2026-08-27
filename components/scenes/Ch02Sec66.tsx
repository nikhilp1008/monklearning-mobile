/**
 * Ch02 · Section 66 — "The always-true definitions and the three integration templates"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.5, 26.6, 51.5, 70.1, 87.1, 112, 132.7, 157.5]):
 *  0 title
 *  1 always-true card
 *  2 master key with its one-line derivation
 *  3 templates heading: indexed by diagnosis
 *  4 template a = f(t)
 *  5 template a = f(v) — two branches
 *  6 template a = f(x)
 *  7 red consistency: eq ③ falls out
 *  8 units line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 card x80..1000 y80..130 (bl 112) · b2 card x80..1000 y145..204 (bl 172 · sub bl 196)
 *  b3 heading cx540 bl 232
 *  chips x90..230 h34: T1 y252 · T2 y320 · T3 y396
 *  contents st x260: T1 bl 276 · T2 bl 342 / 366 · T3 bl 420
 *  b7 | bar x66 y460..515 · lines st x84 bl 480 / 506
 *  b8 | line st x84 bl 545
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — organised by diagnosis */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "the sheet — organised by diagnosis, on purpose",
            "sheet — jaan-boojh kar diagnosis se saji hui"
          )}
        </T>
      </Fade>

      {/* beat 1 — always true */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 92 80 h 896 q 12 0 12 12 v 26 q 0 12 -12 12 h -896 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={540} y={112} size={15} fill={INK} weight={700}>
          {t(
            "v = dx⁄dt · a = dv⁄dt = d²x⁄dt² — always true, no stamp",
            "v = dx⁄dt · a = dv⁄dt = d²x⁄dt² — hamesha sach, koi stamp nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the master key, rebuildable */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 92 145 h 896 q 12 0 12 12 v 35 q 0 12 -12 12 h -896 q -12 0 -12 -12 v -35 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={172} size={14} fill={INK} weight={700}>
          a = dv⁄dt = (dv⁄dx)·(dx⁄dt) = v·dv⁄dx
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={540} y={196} size={11} fill={MUTED} script>
          {t(
            "learn the MIDDLE step: insert dx, and dx⁄dt is v — regenerate it in five seconds",
            "BEECH ka kadam seekho: dx ghusao, aur dx⁄dt hai v — paanch second mein dobara banao"
          )}
        </T>
      </Fade>

      {/* beat 3 — the index */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={540} y={232} size={13} fill={AMBER_DARK} script>
          {t(
            "three templates — indexed by what a DEPENDS ON, not by which letters appear",
            "teen templates — is se chune ki a KIS PAR nirbhar hai, aksharon se nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — a = f(t) */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Chip x={90} y={252} w={140} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          a = f(t)
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={260} y={276} size={13} fill={INK} anchor="start" weight={600}>
          {t(
            "v = v₀ + ∫ f(t) dt · then x = x₀ + ∫ v dt — two climbs, two constants",
            "v = v₀ + ∫ f(t) dt · phir x = x₀ + ∫ v dt — do chadhaai, do constants"
          )}
        </T>
      </Fade>

      {/* beat 5 — a = f(v), the branch */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Chip x={90} y={320} w={140} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          a = f(v)
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={260} y={342} size={13} fill={INK} anchor="start" weight={600}>
          {t("want v(t):  ∫ dv ⁄ f(v) = ∫ dt", "v(t) chahiye:  ∫ dv ⁄ f(v) = ∫ dt")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={260} y={366} size={13} fill={INK} anchor="start" weight={600}>
          {t(
            "want v(x):  ∫ v dv ⁄ f(v) = ∫ dx — the extra v upstairs",
            "v(x) chahiye:  ∫ v dv ⁄ f(v) = ∫ dx — upar waala extra v"
          )}
        </T>
      </Fade>

      {/* beat 6 — a = f(x) */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={90} y={396} w={140} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          a = f(x)
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={260} y={420} size={13} fill={INK} anchor="start" weight={600}>
          {t(
            "∫ v dv = ∫ f(x) dx → (v² − v₀²) ⁄ 2 = ∫ f(x) dx — the left side, always",
            "∫ v dv = ∫ f(x) dx → (v² − v₀²) ⁄ 2 = ∫ f(x) dx — baayan hissa, hamesha"
          )}
        </T>
      </Fade>

      {/* beat 7 — perform this once */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 460 v 55" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={480} size={13} fill={RED} script anchor="start">
          {t(
            "do this once, for confidence: put f(x) = a (constant) → (v² − u²) ⁄ 2 = a·s",
            "bharose ke liye ek baar karo: f(x) = a (constant) rakho → (v² − u²) ⁄ 2 = a·s"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={84} y={506} size={13} fill={RED} script anchor="start">
          {t(
            "⇒ v² = u² + 2as — the old equation ③ was always a special case of v dv = a dx",
            "⇒ v² = u² + 2as — puraana equation ③ hamesha v dv = a dx ka khaas roop tha"
          )}
        </T>
      </Fade>

      {/* beat 8 — same quantities */}
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={545} size={12} fill={MUTED} script anchor="start">
          {t(
            "units unchanged: x in m · v in m/s [L T⁻¹] · a in m/s² [L T⁻²] — new machinery, same quantities",
            "units waise hi: x m mein · v m/s [L T⁻¹] · a m/s² [L T⁻²] — naya auzaar, wahi quantities"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
