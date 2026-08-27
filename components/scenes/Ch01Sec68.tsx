/**
 * Ch01 · Section 68 — "The reading formula, and the universal zero-error rule"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.8, 23.7, 38.6, 57.2, 65.5, 74.4, 88]):
 *  0 title
 *  1 vernier formula box + three piece-labels
 *  2 "just before" ⇒ fraction always added
 *  3 screw formula box — identical, vernier → circular
 *  4 heading: universal zero-error rule
 *  5 black bar: corrected = observed − zero error
 *  6 positive case: reads high → subtract → down
 *  7 negative case: subtract a negative → up · [L], metre
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | box x140..940 y84..134 · 20 bl 114 · labels 13 bl 160 cx415/545/690
 *  b2 | amber 14 mid bl 200
 *  b3 | box x140..940 y230..280 · 20 bl 260 · muted 13 mid bl 310
 *  b4 | amber script 15 mid bl 356
 *  b5 | bar x220..860 y378..416 · cream 18 bl 403
 *  b6 | 14 mid bl 462
 *  b7 | 14 mid bl 498 · muted 13 mid bl 545
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
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

export default function Ch01Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const box = (x: number, y: number, w: number, h: number) =>
    `M ${x + 12} ${y} h ${w - 24} q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h ${-(w - 24)} q -12 0 -12 -12 v ${-(h - 24)} q 0 -12 12 -12`;

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "one reading formula — learn it once",
            "reading ka ek formula — ek baar seekho"
          )}
        </T>
      </Fade>

      {/* beat 1 — the vernier formula */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={box(140, 84, 800, 50)} stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={540} y={116} size={20} fill={INK} weight={700}>
          reading = MSR + (VSR × LC) − zero error
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={400} y={160} size={13} fill={AMBER_DARK} script>
          {t("main reading", "main reading")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={580} y={160} size={13} fill={AMBER_DARK} script>
          {t("fractional part", "bhinnatmak hissa")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={790} y={160} size={13} fill={AMBER_DARK} script>
          {t("correction", "correction")}
        </T>
      </Fade>

      {/* beat 2 — just before */}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={540} y={200} size={14} fill={AMBER_DARK} script>
          {t(
            "MSR = the mark JUST BEFORE the vernier zero ⇒ the fraction is always ADDED",
            "MSR = vernier zero se THEEK PEHLE ka nishaan ⇒ bhinn hamesha JODTA hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the screw formula */}
      <Draw on={beat >= 3} delay={dl(3, 1)} d={box(140, 230, 800, 50)} stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={540} y={262} size={20} fill={INK} weight={700}>
          reading = MSR + (circular div × LC) − zero error
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={540} y={310} size={13} fill={MUTED} script>
          {t(
            "identical structure — only the word 'vernier' became 'circular'",
            "wahi dhaancha — sirf 'vernier' shabd 'circular' ban gaya"
          )}
        </T>
      </Fade>

      {/* beat 4 — heading */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={540} y={356} size={15} fill={AMBER_DARK} script>
          {t(
            "the universal zero-error rule — the highest-yield line in this subtopic",
            "saarvbhaumik zero-error niyam — is subtopic ki sabse zyada upaj waali line"
          )}
        </T>
      </Fade>

      {/* beat 5 — the black bar */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Rect x={220} y={378} width={640} height={38} rx={10} fill={INK} />
        <T x={540} y={403} size={18} fill={CREAM} weight={700}>
          corrected = observed − zero error
        </T>
      </Fade>

      {/* beat 6 — positive case */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={462} size={14} fill={RED} script>
          {t(
            "+ve error → the instrument reads too high → subtract → the number comes DOWN",
            "+ve error → instrument zyada dikhata → ghatao → number NEECHE aata"
          )}
        </T>
      </Fade>

      {/* beat 7 — negative case */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={498} size={14} fill={GREEN} script>
          {t(
            "−ve error → subtracting a negative → the number goes UP (minus a minus = plus)",
            "−ve error → negative ghataana → number UPAR jaata (minus ka minus = plus)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={540} y={545} size={13} fill={MUTED} script>
          {t(
            "both cases, one rule — and every quantity here is a length: [L], SI unit the metre",
            "dono maamle, ek niyam — aur yahan har quantity lambai hai: [L], SI unit metre"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
