/**
 * Ch11 · Section 50 — "Carnot's theorem: why efficiency is substance-independent"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 50 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 suppose X beats R · 2 run R backwards, driven by
 *  X · 3 net effect: cold→hot, no work · 4 Clausius violation ⇒ η_X≤η_R
 *  (boxed) · 5 claim 2: two reversible engines · 6 all reversible tie
 *  (boxed) · 7 defines absolute temperature scale.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 22, red)  | T mid | x201..879 y42..75 (bl 64)
 *  b0 | hook (11,script)   | T mid | x540 y92
 *  b1 | line (12)          | T mid | x540 y120
 *  b2 | line (11)          | T mid | x540 y145
 *  b3 | line (11)          | T mid | x540 y170
 *  b4 | chip1 (h30)        | Chip  | x330..750 y195..225
 *  b5 | line (11)          | T mid | x540 y245
 *  b6 | chip2 (h30)        | Chip  | x330..750 y270..300
 *  b7 | line (11,script)   | T mid | x540 y330
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Carnot's theorem: why efficiency is substance-independent", "Carnot's theorem: efficiency substance-independent kyun")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={92} size={11} fill={MUTED} script>
          {t("two claims, one trick: assume opposite, build a violation", "do claims, ek trick: opposite maano, violation banao")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={12} fill={INK} script={false}>
          {t("suppose engine X is MORE efficient than reversible R", "maan lo X engine reversible R se ZYADA efficient hai")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={145} size={11} fill={INK} script={false}>
          {t("run R backwards (as fridge), driven by X's work", "R ko reverse chalao (fridge), X ke work se")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={170} size={11} fill={INK} script={false}>
          {t("X needs LESS heat than R pumps back ⇒ net: cold→hot, no work", "X ko KAM heat chahiye R se ⇒ net: cold→hot, no work")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={330} y={195} w={420} h={30} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("Clausius violation! ⇒ η_X ≤ η_R", "Clausius violation! ⇒ η_X ≤ η_R")}
        </Chip>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={245} size={11} fill={INK} script={false}>
          {t("claim 2: two reversible engines — apply both ways, each ≤ other", "claim 2: do reversible engines — dono taraf, ek ≤ doosra")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={330} y={270} w={420} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("⇒ all reversible engines TIE, any substance", "⇒ sab reversible engines TIE, koi bhi substance")}
        </Chip>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={330} size={11} fill={MUTED} script>
          {t("substance-independence ⇒ defines an ABSOLUTE temperature scale", "substance-independence ⇒ ABSOLUTE temperature scale defines")}
        </T>
      </Fade>
    </Scene>
  );
}
