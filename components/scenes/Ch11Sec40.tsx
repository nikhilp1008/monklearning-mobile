/**
 * Ch11 · Section 40 — "Two faces of one law, and reversibility"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 40 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 bans on impossible machines · 2 Kelvin-Planck
 *  card · 3 Clausius card · 4 equivalence (≡) · 5 reversible defined ·
 *  6 irreversible ⇒ entropy · 7 guardrail: quasi-static ≠ reversible.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 24, red)  | T mid | x269..810 y40..76 (bl 64)
 *  b0 | hook (12,script)   | T mid | x540 y96
 *  b1 | line (12,script)   | T mid | x540 y120
 *  b2 | KP card (h70)      | Draw  | x100..520 y145..215
 *  b3 | Clausius card(h70) | Draw  | x560..980 y145..215
 *  b4 | "≡" (24,w800)      | T mid | x540 y188
 *  b4 | note (12,script)   | T mid | x540 y240
 *  b5 | line (13)          | T mid | x540 y270
 *  b6 | line (12)          | T mid | x540 y300
 *  b7 | guardrail chip     | Chip  | x290..790 y330..362
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("two faces of one law, and reversibility", "ek law ke do chehre, aur reversibility")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("born from two very practical frustrations", "do practical frustrations se paida hua")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={12} fill={MUTED} script>
          {t("both are bans on IMPOSSIBLE MACHINES", "dono IMPOSSIBLE MACHINES par ban hain")}
        </T>
      </Fade>

      {/* beat 2 — Kelvin-Planck */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 100 145 h 420 v 70 h -420 z" stroke={AMBER} sw={2.2} dur={0.7} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={310} y={168} size={13} fill={INK} weight={800} script={false}>
          KELVIN-PLANCK
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={310} y={195} size={13} fill={INK} script={false}>
          {t("no engine has η = 1", "kisi engine ka η = 1 nahi")}
        </T>
      </Fade>

      {/* beat 3 — Clausius */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 560 145 h 420 v 70 h -420 z" stroke={AMBER} sw={2.2} dur={0.7} fill={CREAM} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={770} y={168} size={13} fill={INK} weight={800} script={false}>
          CLAUSIUS
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={770} y={195} size={12} fill={INK} script={false}>
          {t("heat never flows cold→hot free", "heat kabhi free mein cold→hot nahi")}
        </T>
      </Fade>

      {/* beat 4 — the equivalence */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={188} size={24} fill={GREEN} weight={800} script={false}>
          ≡
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={240} size={12} fill={MUTED} script>
          {t("same prohibition, two views", "same prohibition, do views")}
        </T>
      </Fade>

      {/* beat 5 — reversible, defined */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={270} size={13} fill={INK} script={false}>
          {t("reversible: infinitely slow, no dissipation — retraces exactly", "reversible: infinitely slow, no dissipation — exact retrace")}
        </T>
      </Fade>

      {/* beat 6 — irreversible generates entropy */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={300} size={12} fill={INK} script={false}>
          {t("irreversible (every real process) ⇒ generates ENTROPY", "irreversible (har real process) ⇒ ENTROPY banata hai")}
        </T>
      </Fade>

      {/* beat 7 — the guardrail */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={290} y={330} w={500} h={32} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("quasi-static ALONE isn't enough — need NO dissipation too", "sirf quasi-static kaafi nahi — dissipation bhi NAHI hona")}
        </Chip>
      </Fade>
    </Scene>
  );
}
