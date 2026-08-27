/**
 * Ch01 · Section 31 — "Error is not the same thing as a mistake"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.3, 32.3, 43.9, 67.8, 84.1, 105.9, 120.8]):
 *  0 title + the railway-clock story (drawn clock)
 *  1 thumb early, thumb late — unavoidable wrongness
 *  2 ERROR ≠ MISTAKE, underlined
 *  3 two panels: 7×8 = 54 (mistake, crossed) vs 92.3 vs 92.34 (error)
 *  4 the mistake vanishes with care
 *  5 the error is the instrument's limit
 *  6 the dividing line: eliminate vs estimate & reduce
 *  7 the spirit of experimental physics
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red) mid bl 62 · story (script 15) x60 st bl 106 ·
 *       clock c(880,95) r22 (drawn)
 *  b1 | lines x60 st / x500 st bl 146
 *  b2 | "ERROR" (sans 24) (420,196) · "≠" (red 26) (540,196) · "MISTAKE" (660,196)
 *       underline y212 x340..740
 *  b3 | panels y230..400: red x60..520 · amber x560..1020 · headers bl 260 ·
 *       contents bl 315 · labels bl 375 · cross over "54"
 *  b4 | note (script 14, green) x60 st bl 430
 *  b5 | note (script 14, red) x560 st bl 430
 *  b6 | chips y460..500: x140..420 / 460..800 · "never zero!" (script 13) x830 st bl 486
 *  b7 | bar x51 y520..590 · lines (script 15) x62 st bl 545 / 580
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
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the railway station */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("error is NOT a mistake", "error galti NAHI hoti")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={60} y={106} size={15} fill={MUTED} script anchor="start">
          {t(
            "platform clock, incoming train — you time it with your thumb…",
            "platform ki ghadi, aati hui train — thumb se time karo…"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 858 95 A 22 22 0 1 1 902 95 A 22 22 0 1 1 858 95 M 880 95 L 880 80 M 880 95 L 891 101"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />

      {/* beat 1 — the unavoidable wrongness */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={60} y={146} size={15} fill={INK} script anchor="start">
          {t(
            "a fraction early once, a fraction late the next time…",
            "kabhi thoda pehle daba, kabhi thoda baad mein…"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={520} y={146} size={14} fill={AMBER_DARK} script anchor="start">
          {t("a tiny, unavoidable wrongness", "ek chhoti, atal si galat-nisbat")}
        </T>
      </Fade>

      {/* beat 2 — the headline */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={420} y={196} size={24} fill={INK} weight={800}>
          ERROR
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={540} y={196} size={26} fill={RED} weight={800}>
          ≠
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={660} y={196} size={24} fill={INK} weight={800}>
          MISTAKE
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.5)}
        d="M 340 212 C 460 208, 620 214, 740 210"
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />

      {/* beat 3 — the two panels */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 72 230 h 436 q 12 0 12 12 v 146 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -146 q 0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={290} y={260} size={15} fill={RED} script>
          MISTAKE
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={290} y={315} size={24} fill={INK} weight={700}>
          7 × 8 = 54
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5)}
        d={crossD(320, 297, 26, 22)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={290} y={375} size={14} fill={MUTED} script>
          {t("avoidable carelessness", "laaparwahi — bach sakti thi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 11)}
        d="M 572 230 h 436 q 12 0 12 12 v 146 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -146 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={790} y={260} size={15} fill={AMBER_DARK} script>
          ERROR
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={790} y={315} size={17} fill={INK} weight={700}>
          {t("measured 92.3 cm · true 92.34 cm", "napa 92.3 cm · sach 92.34 cm")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 17)}>
        <T x={790} y={375} size={14} fill={MUTED} script>
          {t("a completely different animal", "bilkul alag cheez")}
        </T>
      </Fade>

      {/* beat 4 — the mistake vanishes with care */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={60} y={430} size={14} fill={GREEN} script anchor="start">
          {t(
            "7×8 = 56 — concentrate, check, and it disappears forever",
            "7×8 = 56 — dhyaan do, check karo, hamesha ke liye gayab"
          )}
        </T>
      </Fade>

      {/* beat 5 — the error is the instrument's limit */}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={560} y={430} size={14} fill={RED} script anchor="start">
          {t(
            "the scale is marked in mm — it CANNOT see the next digit",
            "scale mm mein bana hai — agla digit dikh hi NAHI sakta"
          )}
        </T>
      </Fade>

      {/* beat 6 — the dividing line */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={140} y={460} w={280} h={40} fill={GREEN} textFill="#fff" size={15}>
          {t("mistakes: ELIMINATE", "galtiyan: KHATAM karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <Chip x={460} y={460} w={340} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("errors: ESTIMATE & REDUCE", "errors: NAAPO aur GHATAO")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={830} y={486} size={13} fill={RED} script anchor="start">
          {t("never zero!", "kabhi zero nahi!")}
        </T>
      </Fade>

      {/* beat 7 — the spirit */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 51 525 L 51 590"
        stroke={GREEN}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={62} y={545} size={15} fill={GREEN} script anchor="start">
          {t(
            "state honestly how imperfect the number is — then shrink that imperfection",
            "imaandari se batao number kitna adhoora hai — phir us kami ko chhota karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={62} y={580} size={13} fill={MUTED} script anchor="start">
          {t(
            "(everything in this subtopic is machinery for exactly that)",
            "(is subtopic ki saari machinery isi ke liye hai)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
