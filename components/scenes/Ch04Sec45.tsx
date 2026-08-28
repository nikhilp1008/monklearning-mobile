/**
 * Ch04 · Section 45 — "Worked Example 4 [JEE Advanced]: dragging the crate"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.4, 29.8, 40.6, 63.7, 76.4, 101.2, 123.7, 139.6]):
 *  0 title
 *  1 problem + find (a) (b)
 *  2 two panels: horizontal pull vs angled pull, "15 N difference" note
 *  3 part (a): N = mg, F = μmg = 75 N box
 *  4 part (b) setup: λ = tan⁻¹μ
 *  5 λ = 37° + 3-4-5 triangle note
 *  6 F_min = 60 N box (long route)
 *  7 cross-check mg·sinλ = 60 N line
 *  8 red margin: 15 N saved, 20%, trolley insight
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  panels | L crate x120..220 y210..270 arr (225,240)→(300,240) "F"(310,234 st) ·
 *    "horizontal" cx170 bl 295 · R crate x620..720 y210..270 arr (725,240)→(790,180) ·
 *    "F"(800,174 st) · "at λ" cx670 bl 295 · diff note cx540 bl 330
 *  b3 line st x84 bl 370 box x360..620 y384..420 bl 408
 *  b4 st x84 bl 450 · b5 line bl 480 note bl 504
 *  b6 box x96..408 y525..567 bl 552
 *  b7 line st x460 bl 552
 *  b8 lines st x650 bl 420 / 444 / 468 / 492 / 516 (kept ≤ x1044)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — dragging the crate",
            "Example 4 [JEE Advanced] — crate ghaseetna"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "crate 10 kg on a floor with μ = 0.75 — a rope drags it",
            "μ = 0.75 waale farsh par 10 kg crate — rope se ghaseeta jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "(a) horizontal vs optimal-angle force  (b) that angle + F_min",
            "(a) horizontal vs optimal-angle force  (b) wo angle + F_min"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two panels */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 120 210 h 100 v 60 h -100 z"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d={arrowD(225, 240, 300, 240)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={310} y={234} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          F
        </T>
        <T x={170} y={295} size={12} fill={MUTED} script>
          {t("horizontal pull", "horizontal khinchai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.5)}
        d="M 620 210 h 100 v 60 h -100 z"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.5)}
        d={arrowD(725, 240, 790, 180)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={800} y={174} size={14} fill={GREEN} weight={700} anchor="start">
          F
        </T>
        <T x={670} y={295} size={12} fill={MUTED} script>
          {t("pull at λ", "λ par khinchai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={540} y={330} size={13} fill={AMBER_DARK} script>
          {t(
            "same crate, same floor — the difference is worth 15 N",
            "wahi crate, wahi farsh — fark ki keemat 15 N hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — part (a) */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={84} y={370} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "(a) N = mg = 100 N ⇒ F = μmg",
            "(a) N = mg = 100 N ⇒ F = μmg"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5)}
        d="M 372 384 h 236 q 12 0 12 12 v 12 q 0 12 -12 12 h -236 q -12 0 -12 -12 v -12 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <T x={490} y={408} size={16} fill={INK} weight={800}>
          F = 75 N
        </T>
      </Fade>

      {/* beat 4 — part (b) setup */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={84} y={450} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "(b) minimum force → pull at λ = tan⁻¹μ",
            "(b) minimum force → λ = tan⁻¹μ par kheencho"
          )}
        </T>
      </Fade>

      {/* beat 5 — λ = 37° */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={84} y={480} size={15} fill={INK} weight={700} anchor="start">
          λ = tan⁻¹(0.75) = 37°
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={84} y={504} size={12} fill={GREEN} script anchor="start">
          {t(
            "0.75 = ¾ — the 3-4-5 triangle hiding inside every JEE 0.6/0.75/0.8",
            "0.75 = ¾ — har JEE 0.6/0.75/0.8 mein chhupa 3-4-5 triangle"
          )}
        </T>
      </Fade>

      {/* beat 6 — F_min the long way */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 96 525 h 312 q 12 0 12 12 v 30 q 0 12 -12 12 h -312 q -12 0 -12 -12 v -30 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={252} y={552} size={15} fill={INK} weight={800}>
          F_min = 75 ÷ 1.25 = 60 N
        </T>
      </Fade>

      {/* beat 7 — cross-check */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={460} y={552} size={13} fill={GREEN} script anchor="start">
          {t(
            "check: mg·sinλ = 100(0.6) = 60 N ✓",
            "check: mg·sinλ = 100(0.6) = 60 N ✓"
          )}
        </T>
      </Fade>

      {/* beat 8 — the saving */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={650} y={420} size={14} fill={RED} script anchor="start">
          {t("F: 75 N → 60 N", "F: 75 N → 60 N")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={650} y={444} size={13} fill={RED} script anchor="start">
          {t(
            "a 15 N (≈20%) saving — from angle alone",
            "15 N (≈20%) ki bachat — sirf angle se"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={650} y={468} size={13} fill={GREEN} script anchor="start">
          {t(
            "lifting cuts N (and friction) faster",
            "uthaana N (aur friction) tez kam karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 11)}>
        <T x={650} y={492} size={13} fill={GREEN} script anchor="start">
          {t(
            "than it wastes the pull vertically",
            "utna hi khinchai vertically barbaad hone se"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 15)}>
        <T x={650} y={516} size={13} fill={GREEN} script anchor="start">
          {t(
            "your shoulders solved this every trolley tilt",
            "kandhon ne ye har trolley tilt mein hal kiya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
