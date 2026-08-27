/**
 * Ch01 · Section 18 — "Not a classroom trick: predicting physics you were never taught"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.6, 30.0, 48.0, 62.4, 77.4, 96.4, 116.3]):
 *  0 title + subline: the check runs in reverse
 *  1 the unknown relation: Q = ? aˣ bʸ cᶻ — just demand balance
 *  2 x · y · z pinned one by one, no choice left
 *  3 the blind spot: one pure number out front; the structure is free
 *  4 story card: atomic blast energy from radius, time, density
 *  5 story card: ripples & star pulsation → a first weapon
 *  6 the dimensionless family: ratios of similar things
 *  7 strain = L/L = [M⁰L⁰T⁰] — spotting one is often the whole question
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)  | T mid | x225..855 y30..76 (bl 62) · underline y88
 *  b0 | subline (script 15)     | T mid | x315..765 y87..114 (bl 106)
 *  b1 | "Q = ? aˣ bʸ cᶻ" (22)   | T mid | x215..385 y143..166 (bl 160) · underline y176
 *  b1 | note (script 15)        | T st  | x480..800 bl 160
 *  b2 | chips ×3 (h32) y190..222 x220/290/360 w60 · underline y232 · note x450 st bl 212
 *  b3 | "blind spot" x60..193 bl 262 · "a pure number — 2 · π · 2π" x260 st (sans 18)
 *  b3 | "structure comes free" (script 15, green) x640 st bl 262
 *  b4 | card x60..520 y300..390 · header bl 330 · sub bl 366
 *  b5 | card x560..1020 y300..390 · header bl 330 · sub bl 366
 *  b5 | weapon line (script 16) | T mid | x330..750 bl 430
 *  b6 | family (sans 16) x60..440 bl 480 · note x520 st bl 480 · underline y496
 *  b7 | strain line (sans 20) x60..430 bl 540 · verdict (script 15, green) x62 st bl 580 · bar x51
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — from defence to prediction */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("run the spell-checker in REVERSE", "spell-checker ko ULTA chalao")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 340 88 C 460 84, 620 91, 740 87"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={106} size={15} fill={MUTED} script>
          {t(
            "from catching errors → to predicting physics",
            "galtiyan pakadne se → physics predict karne tak"
          )}
        </T>
      </Fade>

      {/* beat 1 — the unknown relation */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={300} y={160} size={22} fill={INK} weight={800}>
          Q = ? aˣ bʸ cᶻ
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d="M 215 176 C 265 172, 330 178, 385 174"
        stroke={AMBER}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={480} y={160} size={15} fill={AMBER_DARK} script anchor="start">
          {t("just demand both recipes balance", "bas dono recipes balance karo")}
        </T>
      </Fade>

      {/* beat 2 — the exponents get pinned */}
      {["x ✓", "y ✓", "z ✓"].map((label, i) => (
        <Fade key={label} on={beat >= 2} delay={dl(2, 2 + i * 2.5)}>
          <Chip x={220 + i * 70} y={190} w={60} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}
      <Draw
        on={beat >= 2}
        delay={dl(2, 10)}
        d="M 210 232 C 280 228, 360 234, 430 230"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 11)}>
        <T x={450} y={212} size={15} fill={GREEN} script anchor="start">
          {t("pinned one by one — no choice left", "ek-ek karke fix — koi choice nahi")}
        </T>
      </Fade>

      {/* beat 3 — the one blind spot */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={60} y={262} size={14} fill={MUTED} script anchor="start">
          {t("the only blind spot:", "bas ek andha kona:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={260} y={262} size={18} fill={INK} weight={700} anchor="start">
          {t("a pure number out front — 2 · π · 2π", "aage ka pure number — 2 · π · 2π")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={660} y={262} size={15} fill={GREEN} script anchor="start">
          {t("the structure comes free", "structure muft mein milta hai")}
        </T>
      </Fade>

      {/* beat 4 — the atomic blast story */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.5)}
        d="M 72 300 h 436 q 12 0 12 12 v 66 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -66 q 0 -12 12 -12"
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={290} y={330} size={16} fill={INK} script>
          {t("the energy of an atomic blast", "atomic blast ki energy")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={290} y={366} size={14} fill={MUTED} script>
          {t("from radius, time & air density alone", "sirf radius, time aur hawa ki density se")}
        </T>
      </Fade>

      {/* beat 5 — ripples, stars, and a weapon */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d="M 572 300 h 436 q 12 0 12 12 v 66 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -66 q 0 -12 12 -12"
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={790} y={330} size={16} fill={INK} script>
          {t("water ripples · a star's pulse", "paani ki leharein · taare ki dhadkan")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={790} y={366} size={14} fill={MUTED} script>
          {t("(we'll derive the star ourselves, soon)", "(taara hum khud derive karenge, jaldi)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={540} y={430} size={16} fill={AMBER_DARK} script>
          {t(
            "not a chore — your fast, deep FIRST weapon",
            "chore nahi — tumhara tez, gehra PEHLA hathiyaar"
          )}
        </T>
      </Fade>

      {/* beat 6 — the dimensionless family */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={60} y={480} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "strain = L/L · refractive index = v/v · rel. density = ρ/ρ",
            "strain = L/L · refractive index = v/v · rel. density = ρ/ρ"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d="M 60 496 C 180 492, 320 498, 440 494"
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={560} y={480} size={14} fill={MUTED} script anchor="start">
          {t("similar ÷ similar — everything cancels", "same ÷ same — sab kat jaata hai")}
        </T>
      </Fade>

      {/* beat 7 — pure numbers, and why they matter */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={60} y={540} size={20} fill={INK} weight={800} anchor="start">
          strain = L/L = [M⁰ L⁰ T⁰]
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 7)}
        d="M 51 562 L 51 590"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 7.6)}>
        <T x={62} y={582} size={15} fill={GREEN} script anchor="start">
          {t(
            "spot a dimensionless quantity → often the whole question, done",
            "dimensionless quantity pehchano → aksar poora sawaal wahin khatam"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
