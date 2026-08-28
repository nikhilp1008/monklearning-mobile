/**
 * Ch11 · Section 46 — "Carnot's question: the best possible engine"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 46 not yet uploaded, verify-scene.mjs could
 * not be run. First section of the Carnot subtopic. Re-run once audio
 * lands.
 *
 * Beats (8): 0 hook (1824, Carnot) · 1 the question · 2 the answer
 *  η=1−T2/T1 (boxed, ringed) · 3 Carnot engine = ceiling-achiever ·
 *  4 built from isothermal+adiabatic · 5 irreversibility = waste ·
 *  6 reversible wastes nothing · 7 real-plant tie-back.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 24, red)   | T mid | x243..837 y40..76 (bl 64)
 *  b0 | hook (12,script)    | T mid | x540 y96
 *  b1 | question chip(h30)  | Chip  | x290..790 y122..152
 *  b2 | formula (26,w800)   | T mid | x540 y175 · ring c(540,169) rx144 ry26
 *  b3 | note (12,script)    | T mid | x540 y230
 *  b4 | 2 chips (h28)       | Chip  | x160..520 / x560..920 y256..284
 *  b5 | line (12)           | T mid | x540 y320
 *  b6 | verdict (14,w700)   | T mid | x540 y352
 *  b7 | tie-back chip (h32) | Chip  | x280..800 y385..417
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("Carnot's question: the best possible engine", "Carnot ka sawaal: sabse best engine")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("1824 — Sadi Carnot asked the deepest version of the question", "1824 — Sadi Carnot ne sabse deep sawaal poocha")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={290} y={122} w={500} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("among ALL engines T₁↔T₂ — which is BEST?", "sab engines T₁↔T₂ mein — kaunsa BEST hai?")}
        </Chip>
      </Fade>

      {/* beat 2 — the answer */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={26} fill={INK} weight={800} script={false}>
          η_Carnot = 1 − T₂/T₁
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={ringD(540, 169, 144, 26)} stroke={AMBER} sw={2.6} dur={0.9} />

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={230} size={12} fill={MUTED} script>
          {t("the Carnot engine = the idealized ceiling-achiever", "Carnot engine = idealized ceiling-achiever")}
        </T>
      </Fade>

      {/* beat 4 — built from reversible steps we know */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={160} y={256} w={360} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          {t("isothermal (reservoir contact)", "isothermal (reservoir contact)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Chip x={560} y={256} w={360} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          {t("adiabatic (insulated)", "adiabatic (insulated)")}
        </Chip>
      </Fade>

      {/* beat 5 — why reversibility */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={320} size={12} fill={INK} script={false}>
          {t("irreversibility = wasted opportunity (friction, gap, turbulence)", "irreversibility = wasted opportunity (friction, gap, turbulence)")}
        </T>
      </Fade>

      {/* beat 6 — the verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={352} size={14} fill={GREEN} weight={700} script={false}>
          {t("reversible ⇒ wastes NOTHING — the perfect yardstick", "reversible ⇒ kuch waste nahi — perfect yardstick")}
        </T>
      </Fade>

      {/* beat 7 — tie back to the real world */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={280} y={385} w={520} h={32} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("a real plant at 42% = 42% of the way to the Carnot ceiling", "real plant 42% = Carnot ceiling tak 42% raasta")}
        </Chip>
      </Fade>
    </Scene>
  );
}
