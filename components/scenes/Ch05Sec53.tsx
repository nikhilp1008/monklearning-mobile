/**
 * Ch05 · Section 53 — "The elastic shortcut, and the three special cases"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.9, 39.0, 60.9, 85.6, 110.4, 122.4, 137.2, 159.8] · dur 184.7 —
 *        b0 lasts ~1s in hi → hi-tiny title;
 *        hi [0, 1, 21.5, 42.7, 64.6, 89.0, 100.4, 113.1, 132.3] · dur 157.2):
 *  0 title (hi tiny) · 1 linear + quadratic problem · 2 the divide trick
 *  3 hero chip u₁−u₂ = v₂−v₁ · 4 two linear equations · 5 discipline note
 *  6 special-cases intro · 7 case 1 equal masses · 8 cases 2+3 + logic line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  b1 | cx540 bl112 / bl138 · b2 | cx540 bl172 / bl198
 *  b3 | chip x360..720 y220..264 · script cx540 bl292
 *  b4 | cx540 bl326 / bl352 · b5 | cx540 bl378 · b6 | cx540 bl410
 *  cases: c1 cx210 bl445/470/494 · c2 cx540 bl445/470 · c3 cx870 bl445/470
 *  b8 | logic cx540 bl530
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

export default function Ch05Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title (hi: ~1s beat) */}
      <Fade on={beat >= 0} delay={dl(0, en ? 0.3 : 0.2)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("The Elastic Shortcut & Three Special Cases", "Elastic Shortcut & Teen Special Cases")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, en ? 6 : 0.5)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "a nasty quadratic becomes a simple line",
            "ek badsurat quadratic ek seedhi line ban jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the problem */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={112} size={13} fill={INK} script>
          {t(
            "momentum: LINEAR · kinetic energy: QUADRATIC",
            "momentum: LINEAR · kinetic energy: QUADRATIC"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={540} y={138} size={13} fill={RED} script>
          {t(
            "substitution between them = slow, a graveyard of sign errors",
            "unke beech substitution = dheema, sign errors ka qabristan"
          )}
        </T>
      </Fade>

      {/* beat 2 — the divide trick */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={540} y={172} size={13} fill={INK} script>
          {t(
            "group the masses · divide energy ÷ momentum, term by term",
            "masses group karo · energy ÷ momentum, term dar term"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={540} y={198} size={13} fill={GREEN} script>
          {t(
            "the masses cancel — the squares collapse to a line",
            "masses cancel — squares simatkar ek line ban jaate hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — the hero result */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={360} y={220} w={360} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={17} script={false}>
          u₁ − u₂ = v₂ − v₁
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={540} y={292} size={13} fill={GREEN} script>
          {t(
            "speed of approach = speed of separation — simply reversed",
            "speed of approach = speed of separation — bas ulti"
          )}
        </T>
      </Fade>

      {/* beat 4 — two linear equations */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={540} y={326} size={13} fill={GREEN} script>
          {t(
            "now two LINEAR equations — eliminate, done in seconds",
            "ab do LINEAR equations — eliminate karo, seconds mein khatam"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={540} y={352} size={13} fill={RED} script>
          {t(
            "never grind the KE quadratic by hand",
            "KE quadratic ko haath se kabhi mat ghiso"
          )}
        </T>
      </Fade>

      {/* beat 5 — the discipline */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={378} size={13} fill={AMBER_DARK} script>
          {t(
            "discipline: elastic → always use approach = separation",
            "anushasan: elastic → hamesha approach = separation lo"
          )}
        </T>
      </Fade>

      {/* beat 6 — special cases intro */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={410} size={13} fill={AMBER_DARK} script>
          {t(
            "target at rest → three special cases, worth memorising outright",
            "target aaram par → teen special cases, poore yaad karne laayak"
          )}
        </T>
      </Fade>

      {/* beat 7 — case 1 */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={210} y={445} size={13} fill={GREEN} script>
          {t("m₁ = m₂ — they SWAP", "m₁ = m₂ — SWAP ho jaate hain")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={210} y={470} size={12} fill={INK} script>
          {t("striker stops · target takes u", "striker rukta · target u lekar udta")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={210} y={494} size={12} fill={MUTED} script>
          {t("carrom · Newton's cradle", "carrom · Newton's cradle")}
        </T>
      </Fade>

      {/* beat 8 — cases 2 and 3 */}
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={540} y={445} size={13} fill={AMBER_DARK} script>
          {t("heavy → light: light gets ~2u", "heavy → light: light ko ~2u")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={540} y={470} size={12} fill={MUTED} script>
          {t("a truck strikes a football", "truck football se takraata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={870} y={445} size={13} fill={RED} script>
          {t("light → heavy: rebounds ~−u", "light → heavy: ~−u par wapas")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 11)}>
        <T x={870} y={470} size={12} fill={MUTED} script>
          {t("a ball off a wall", "deewar se lauti gend")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 16)}>
        <T x={540} y={530} size={13} fill={GREEN} script>
          {t(
            "swap · double · rebound — read the mass ratio, know the answer first",
            "swap · double · rebound — mass ratio padho, jawab pehle jaan lo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
