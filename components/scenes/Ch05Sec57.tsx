/**
 * Ch05 · Section 57 — "Pitfalls, and the two-step collision reflex" (tips)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.6, 32.7, 55.6, 76.7, 101.6, 125.6, 136.5, 149.0] · dur 173.8 —
 *        b3 lasts ~1s in hi → hi-tiny delays;
 *        hi [0, 10.7, 30.9, 55.6, 56.6, 81.4, 106.2, 115.8, 127.6] · dur 152.5):
 *  0 title · 1 P1 KE not always · 2 P2 momentum is a vector · 3 P3 quadratic grind
 *  4 P4 oblique mishandling · 5 P5 dropped signs · 6 method chips
 *  7 memory aids · 8 two-step reflex band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  P1: lbl st x80 bl112 · lines st x90 bl140/166 · P2: bl206 · bl234/260
 *  P3: bl300 · bl328/354
 *  P4: st x570 bl112 · bl140/166 · P5: bl206 · bl234/260
 *  b6 | chips x570..790 / x820..1030 y300..338 · note cx800 bl366
 *  b7 | cx800 bl404 / bl430
 *  b8 | bar x66 y460..570 · lines st x84 bl480/506/532
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

export default function Ch05Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Pitfalls & the Two-Step Collision Reflex", "Pitfalls & Two-Step Collision Reflex")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "five pitfalls — then the master key that closes the subtopic",
            "paanch pitfalls — phir wo master key jo subtopic band karti hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — P1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={112} size={13} fill={RED} script anchor="start">
          {t("pitfall 1 — assuming KE is conserved", "pitfall 1 — KE conserve maan lena")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={90} y={140} size={12.5} fill={INK} script anchor="start">
          {t(
            "KE survives ONLY in elastic — momentum survives in all",
            "KE sirf elastic mein bachti hai — momentum sab mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13)}>
        <T x={90} y={166} size={12.5} fill={RED} script anchor="start">
          {t(
            "write KE for an inelastic case → everything after is wrong",
            "inelastic mein KE likho → uske baad ka sab galat"
          )}
        </T>
      </Fade>

      {/* beat 2 — P2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={206} size={13} fill={RED} script anchor="start">
          {t("pitfall 2 — momentum is a VECTOR", "pitfall 2 — momentum ek VECTOR hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={90} y={234} size={12.5} fill={INK} script anchor="start">
          {t(
            "2-D: conserve x and y separately — two equations",
            "2-D: x aur y alag-alag conserve karo — do equations"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <T x={90} y={260} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "adding bare speeds, ignoring direction → nonsense",
            "seedha speeds jodna, direction bhoolkar → bakwaas"
          )}
        </T>
      </Fade>

      {/* beat 3 — P3 (hi: ~1s beat) */}
      <Fade on={beat >= 3} delay={dl(3, en ? 0.5 : 0.2)}>
        <T x={80} y={300} size={13} fill={RED} script anchor="start">
          {t("pitfall 3 — grinding the quadratic", "pitfall 3 — quadratic ghisna")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, en ? 4 : 0.4)}>
        <T x={90} y={328} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "always approach = separation — linear, fast, safe",
            "hamesha approach = separation — linear, tez, surakshit"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, en ? 13 : 0.7)}>
        <T x={90} y={354} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "same answer — only one is safe under time pressure",
            "wahi jawab — par waqt ke dabav mein sirf ek surakshit"
          )}
        </T>
      </Fade>

      {/* beat 4 — P4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={570} y={112} size={13} fill={RED} script anchor="start">
          {t("pitfall 4 — oblique mishandling", "pitfall 4 — oblique ka galat haath")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={580} y={140} size={12.5} fill={INK} script anchor="start">
          {t(
            "collision physics ONLY along the line of impact",
            "collision physics SIRF line of impact ke along"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={580} y={166} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "resolve first — the ⊥ components pass through untouched",
            "pehle resolve karo — ⊥ components waise ke waise"
          )}
        </T>
      </Fade>

      {/* beat 5 — P5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={570} y={206} size={13} fill={RED} script anchor="start">
          {t("pitfall 5 — dropped velocity signs", "pitfall 5 — velocity ke gire signs")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={580} y={234} size={12.5} fill={INK} script anchor="start">
          {t(
            "fix a + direction at the start — hold it throughout",
            "shuru mein + direction tay karo — aakhir tak nibhao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={580} y={260} size={12.5} fill={RED} script anchor="start">
          {t(
            "a rebounding ball is NEGATIVE — or p silently lies",
            "wapas uchhalti gend NEGATIVE hai — warna p chupchaap jhooth bolta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the method picture */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={570} y={300} w={220} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          {t("1 · momentum (always)", "1 · momentum (hamesha)")}
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3)} d={arrowD(794, 319, 816, 319)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <Chip x={820} y={300} w={210} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("2 · partner equation", "2 · partner equation")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={800} y={366} size={12.5} fill={AMBER_DARK} script>
          {t(
            "elastic → shortcut · given e → restitution · stick → equal v",
            "elastic → shortcut · e diya → restitution · chipke → barabar v"
          )}
        </T>
      </Fade>

      {/* beat 7 — memory aids */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={800} y={404} size={13} fill={GREEN} script>
          {t(
            "aids: momentum always · energy only if elastic",
            "aids: momentum hamesha · energy sirf elastic mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={800} y={430} size={13} fill={GREEN} script>
          {t(
            "equal-mass swap · oblique equal-mass → 90° apart",
            "equal-mass swap · oblique equal-mass → 90° alag"
          )}
        </T>
      </Fade>

      {/* beat 8 — the two-step reflex */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 460 v 88" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "step 1: write conservation of momentum — never wrong to start there",
            "step 1: conservation of momentum likho — wahan se shuru kabhi galat nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={84} y={506} size={13} fill={GREEN} script anchor="start">
          {t(
            "step 2: attach the right partner for the collision type",
            "step 2: collision ke type ka sahi partner jodo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 17)}>
        <T x={84} y={532} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "two steps, every single time — nothing in JEE/NEET can surprise you",
            "do steps, har ek baar — JEE/NEET ka kuchh bhi chaunka nahi sakta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
