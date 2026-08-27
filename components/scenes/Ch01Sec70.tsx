/**
 * Ch01 · Section 70 — "The three-beat rhythm: an end-to-end illustration"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.1, 26.2, 49.2, 66.3, 85.9, 99.2, 117.6]):
 *  0 title + rhythm roadmap chips
 *  1 the arrangement: 1 MSD = 1 mm · 10 VSD over 9 mm
 *  2 beat 1: LC = 0.1 mm = 0.01 cm · convert NOW
 *  3 jaws closed: 2nd line, past zero — +ve error caught
 *  4 zero error = +2 × 0.01 = +0.02 cm (×LC!)
 *  5 beat 2: MSR 4.5 · 8th coincides
 *  6 observed = 4.5 + 8 × 0.01 = 4.58
 *  7 beat 3: corrected = 4.58 − (+0.02) = 4.56 cm green box + closing
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | chips y70..98 x330/490/650 (w140/140/160)
 *  b1 | script 14 mid bl 134
 *  b2 | 18 st x120 bl 180 · amber 13 st x120 bl 210
 *  b3 | red script 14 st x120 bl 254
 *  b4 | 18 st x120 bl 296 · muted 13 st x600 bl 296
 *  b5 | script 14 st x120 bl 344
 *  b6 | 18 st x120 bl 388 · muted 13 st x600 bl 388
 *  b7 | box x220..860 y420..470 (20 bl 452) · green script mid bl 510
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + roadmap */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "the three-beat rhythm — end to end, once, slowly",
            "teen-taal lay — shuru se aakhir tak, ek baar, dheere"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <Chip x={330} y={70} w={140} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t("1 · find LC", "1 · LC nikaalo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <Chip x={490} y={70} w={140} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t("2 · read", "2 · reading lo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <Chip x={650} y={70} w={160} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t("3 · correct zero", "3 · zero sudhaaro")}
        </Chip>
      </Fade>

      {/* beat 1 — the arrangement */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={134} size={14} fill={INK} script>
          {t(
            "1 MSD = 1 mm · ten vernier divisions span 9 mm — the standard arrangement",
            "1 MSD = 1 mm · das vernier divisions 9 mm mein — maanak vyavastha"
          )}
        </T>
      </Fade>

      {/* beat 2 — beat one: least count */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={120} y={180} size={18} fill={INK} weight={700} anchor="start">
          LC = 1 mm ÷ 10 = 0.1 mm = 0.01 cm
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={120} y={210} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "convert to cm NOW — mixing units mid-problem is how marks are lost",
            "cm mein ABHI badlo — sawaal ke beech units milane se hi marks jaate hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — the zero check */}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={120} y={254} size={14} fill={RED} script anchor="start">
          {t(
            "jaws closed → the 2nd line coincides, sitting PAST zero ⇒ a +ve zero error — caught early",
            "jabde band → doosri line milti hai, zero se AAGE ⇒ +ve zero error — pehle hi pakda"
          )}
        </T>
      </Fade>

      {/* beat 4 — its size */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={120} y={296} size={18} fill={INK} weight={700} anchor="start">
          zero error = +2 × 0.01 = +0.02 cm
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={600} y={296} size={13} fill={MUTED} script anchor="start">
          {t("× LC — the '2' is not a length by itself", "× LC — '2' apne aap mein lambai nahi")}
        </T>
      </Fade>

      {/* beat 5 — beat two: the object */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={120} y={344} size={14} fill={INK} script anchor="start">
          {t(
            "object in: MSR = 4.5 cm (the last mark before) · the 8th division coincides",
            "vastu andar: MSR = 4.5 cm (pehle waala aakhri nishaan) · aathvi division milti hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — observed */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={120} y={388} size={18} fill={INK} weight={700} anchor="start">
          observed = 4.5 + 8 × 0.01 = 4.58 cm
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={600} y={388} size={13} fill={MUTED} script anchor="start">
          {t("the 8th contributes 0.08 cm — not 'eight'", "aathvi ka yogdaan 0.08 cm — 'aath' nahi")}
        </T>
      </Fade>

      {/* beat 7 — corrected */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 232 420 h 616 q 12 0 12 12 v 26 q 0 12 -12 12 h -616 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={540} y={452} size={20} fill={GREEN} weight={700}>
          corrected = 4.58 − (+0.02) = 4.56 cm
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={540} y={510} size={14} fill={GREEN} script>
          {t(
            "three beats, in that order, every single time",
            "teen taalein, isi kram mein, har ek baar"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
