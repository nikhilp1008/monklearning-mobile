/**
 * Ch11 · Section 54 — "Entropy: the universe's odometer"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 54 not yet uploaded, verify-scene.mjs could
 * not be run. First section of the Entropy subtopic. Re-run once audio
 * lands.
 *
 * Beats (8): 0 hook · 1 entropy = disorder/microstates · 2 dS=Q/T +
 *  whisper analogy · 3 universe's S never decreases · 4 ΔS≥0 boxed ·
 *  5 shuffled-deck scorecard · 6 freezer: system↓ but universe↑ ·
 *  7 dQ/T = the heartbeat.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 24, red)  | T mid | x322..758 y40..76 (bl 64)
 *  b0 | hook (12,script)   | T mid | x540 y96
 *  b1 | def chip (h30)     | Chip  | x260..820 y122..152
 *  b2 | formula (18,w800)  | T mid | x540 y172
 *  b2 | note (11,script)   | T mid | x540 y198
 *  b3 | line (13,w700)     | T mid | x540 y225
 *  b4 | ΔS≥0 chip (h36)    | Chip  | x400..680 y255..291
 *  b5 | note (12,script)   | T mid | x540 y325
 *  b6 | line (12)          | T mid | x540 y355
 *  b7 | heartbeat chip     | Chip  | x340..740 y385..417
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("entropy: the universe's odometer", "entropy: universe ka odometer")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("direction begged for a number that always increases", "direction ko ek number chahiye tha jo hamesha badhe")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={260} y={122} w={560} h={30} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          {t("entropy = disorder — microstates consistent with the bulk state", "entropy = disorder — bulk state ke microstates")}
        </Chip>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={172} size={18} fill={INK} weight={800} script={false}>
          dS = Q/T
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={540} y={198} size={11} fill={MUTED} script>
          {t("colder system ⇒ bigger effect (whisper: library vs party)", "colder system ⇒ zyada effect (whisper: library vs party)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={225} size={13} fill={INK} weight={700} script={false}>
          {t("the universe's total entropy NEVER decreases", "universe ki total entropy KABHI nahi ghatti")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={400} y={255} w={280} h={36} fill={INK} textFill={CREAM} size={20} script={false}>
          ΔS_universe ≥ 0
        </Chip>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={325} size={12} fill={MUTED} script>
          {t("the shuffled-deck scorecard — ordered=low S, mixed=high S", "shuffled-deck scorecard — ordered=kam S, mixed=zyada S")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={355} size={12} fill={INK} script={false}>
          {t("freezer: system's S falls — surroundings rise MORE (universe ↑)", "freezer: system ka S girta — surroundings zyada badhte (universe ↑)")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={340} y={385} w={400} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("dQ/T = the heartbeat of entropy", "dQ/T = entropy ka heartbeat")}
        </Chip>
      </Fade>
    </Scene>
  );
}
