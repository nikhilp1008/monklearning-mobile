/**
 * Ch05 · Section 55 — "Sticking clay, and the equal-mass swap" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.4, 30.7, 52.1, 76.9, 101.4, 110.7, 128.3, 147.5] · dur 172.3;
 *        hi [0, 10.6, 31.2, 53.9, 72.7, 95.3, 106.5, 121.9, 143.5] · dur 168.3):
 *  0 title + subtitle
 *  1 Ex1 setup chip + 'sticks' signal
 *  2 momentum → V = 2 m/s
 *  3 energies → 24 J lost
 *  4 meaning: p intact, energy not
 *  5 pivot line
 *  6 Ex2 setup chip
 *  7 the 90-second trap
 *  8 CASE 1 swap + verdict
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  Ex1: lbl st x80 bl114 · chip x80..520 y124..160 · amber cx300 bl186
 *   b2 st x90 bl226 / bl254 · b3 bl294 / bl322
 *   b4 green cx300 bl362 · red bl388 · b5 amber cx300 bl428
 *  Ex2: lbl st x560 bl114 · chip x560..1030 y124..160
 *   b7 red st x570 bl226 / bl252
 *   b8 green bl292 · chip x570..900 y312..350 · script cx740 bl376 · amber bl402
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
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

export default function Ch05Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Sticking Clay & the Equal-Mass Swap", "Chipakti Clay & Equal-Mass Swap")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "a clean sticking question — then a pattern that beats algebra",
            "ek saaf chipakne waala sawaal — phir ek pattern jo algebra ko harata hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex1 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 1 — the clay that sticks", "Ex 1 — chipakti clay")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={124} w={440} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "2 kg clay @ 6 m/s → sticks to 4 kg at rest · V? ΔK?",
            "2 kg clay @ 6 m/s → 4 kg (aaram) se chipakti · V? ΔK?"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={300} y={186} size={12.5} fill={AMBER_DARK} script>
          {t(
            "'sticks' — that word IS the signal: perfectly inelastic",
            "'chipakti' — wahi shabd signal hai: perfectly inelastic"
          )}
        </T>
      </Fade>

      {/* beat 2 — momentum first */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={90} y={226} size={14} fill={INK} anchor="start" weight={700}>
          {t("p = 2 × 6 = 12 · after: 6 kg at V", "p = 2 × 6 = 12 · baad: 6 kg, V par")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={90} y={254} size={15} fill={GREEN} anchor="start" weight={800}>
          12 = 6V → V = 2 m/s
        </T>
      </Fade>

      {/* beat 3 — the energy books */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={90} y={294} size={14} fill={INK} anchor="start" weight={700}>
          K_before = ½·2·36 = 36 J
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={90} y={322} size={14} fill={INK} anchor="start" weight={800}>
          {t("K_after = ½·6·4 = 12 J → 24 J lost", "K_after = ½·6·4 = 12 J → 24 J gaye")}
        </T>
      </Fade>

      {/* beat 4 — the meaning */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={300} y={362} size={13} fill={GREEN} script>
          {t("momentum intact: 12 before, 12 after ✓", "momentum salaamat: 12 pehle, 12 baad ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <T x={300} y={388} size={12.5} fill={RED} script>
          {t(
            "24 J → heat + squashed clay — the inelastic signature",
            "24 J → heat + kuchli clay — inelastic ki pehchaan"
          )}
        </T>
      </Fade>

      {/* beat 5 — pivot */}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={300} y={428} size={13} fill={AMBER_DARK} script>
          {t("now: from sticking → perfectly elastic", "ab: chipakne se → perfectly elastic")}
        </T>
      </Fade>

      {/* beat 6 — Ex2 setup */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={560} y={114} size={13} fill={RED} script anchor="start">
          {t("Ex 2 — NEET: identical balls", "Ex 2 — NEET: ek jaisi balls")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={560} y={124} w={470} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "identical balls · elastic · head-on · target at rest — after?",
            "ek jaisi balls · elastic · head-on · target aaram par — baad?"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the 90-second trap */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={570} y={226} size={13} fill={RED} script anchor="start">
          {t(
            "the dutiful route: p-equation + KE-equation + 90 s of algebra",
            "farz-adaayigi: p-equation + KE-equation + 90 s ki algebra"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={570} y={252} size={13} fill={RED} script anchor="start">
          {t("90 seconds = a whole NEET question", "90 seconds = NEET ka ek poora sawaal")}
        </T>
      </Fade>

      {/* beat 8 — the pattern */}
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={570} y={292} size={13} fill={GREEN} script anchor="start">
          {t(
            "recognise: equal masses + elastic + at rest = CASE 1",
            "pehchano: equal masses + elastic + aaram = CASE 1"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <Chip x={570} y={312} w={330} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          {t("SWAP: ball 1 stops · ball 2 takes u", "SWAP: ball 1 rukti · ball 2 u leti")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 14)}>
        <T x={740} y={376} size={12.5} fill={MUTED} script>
          {t(
            "answered in ~3 seconds — while others square velocities",
            "~3 seconds mein jawab — jab baaqi velocities square kar rahe hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 20)}>
        <T x={740} y={402} size={13} fill={AMBER_DARK} script>
          {t(
            "the special cases ARE the intended route",
            "special cases HI asli intended raasta hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
