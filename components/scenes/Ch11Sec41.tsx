/**
 * Ch11 · Section 41 — "Key statements and definitions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 41 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 Kelvin-Planck card (formal) · 2 Clausius card
 *  (formal) · 3 equivalence note · 4 reversible defined · 5 irreversible
 *  sources · 6 nuance: sole effect · 7 statistical arrow.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 24, red)  | T mid | x335..745 y40..76 (bl 64)
 *  b0 | hook (11,script)   | T mid | x540 y92
 *  b1 | KP card (h44)      | Draw  | x140..940 y112..156
 *  b2 | Clausius card(h44) | Draw  | x140..940 y164..208
 *  b3 | note (11,script)   | T mid | x540 y228
 *  b4 | line (12)          | T mid | x540 y252
 *  b5 | line (11)          | T mid | x540 y278
 *  b6 | nuance chip (h30)  | Chip  | x260..820 y305..335
 *  b7 | note (11,script)   | T mid | x540 y354
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("key statements and definitions", "key statements aur definitions")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={92} size={11} fill={MUTED} script>
          {t("little algebra — learn these word for word", "kam algebra — yeh word-for-word yaad karo")}
        </T>
      </Fade>

      {/* beat 1 — Kelvin-Planck, formal */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 140 112 h 800 v 44 h -800 z" stroke={AMBER} sw={2} dur={0.7} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={130} size={12} fill={INK} weight={800} script={false}>
          {t("KELVIN-PLANCK (engine form)", "KELVIN-PLANCK (engine form)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={150} size={11} fill={INK} script={false}>
          {t("no process converts reservoir heat entirely into work", "koi process reservoir heat ko poora work mein nahi badalta")}
        </T>
      </Fade>

      {/* beat 2 — Clausius, formal */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 140 164 h 800 v 44 h -800 z" stroke={AMBER} sw={2} dur={0.7} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={182} size={12} fill={INK} weight={800} script={false}>
          {t("CLAUSIUS (refrigerator form)", "CLAUSIUS (refrigerator form)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={202} size={11} fill={INK} script={false}>
          {t("heat never flows cold→hot without work input", "heat kabhi bina work ke cold→hot nahi jaata")}
        </T>
      </Fade>

      {/* beat 3 — equivalence */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={228} size={11} fill={MUTED} script>
          {t("logically identical — a violation of either builds the other", "logically identical — ek ka violation doosra bana deta")}
        </T>
      </Fade>

      {/* beat 4 — reversible, defined */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={252} size={12} fill={INK} script={false}>
          {t("reversible: quasi-static + no dissipation ⇒ retraces exactly", "reversible: quasi-static + no dissipation ⇒ exact retrace")}
        </T>
      </Fade>

      {/* beat 5 — irreversible sources */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={278} size={11} fill={INK} script={false}>
          {t("irreversible sources: finite-ΔT flow, friction, free expansion, mixing, sudden change", "irreversible sources: finite-ΔT flow, friction, free expansion, mixing, sudden change")}
        </T>
      </Fade>

      {/* beat 6 — the nuance */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={260} y={305} w={560} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          {t("cold→hot forbidden only as SOLE effect — WITH work, legal!", "cold→hot sirf SOLE effect mein mana — work ke saath legal!")}
        </Chip>
      </Fade>

      {/* beat 7 — statistical arrow */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={354} size={11} fill={MUTED} script>
          {t("cyclic, macroscopic systems — the arrow is statistically certain", "cyclic, macroscopic systems — arrow statistically certain hai")}
        </T>
      </Fade>
    </Scene>
  );
}
