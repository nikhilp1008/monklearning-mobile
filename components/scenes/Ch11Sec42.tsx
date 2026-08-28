/**
 * Ch11 · Section 42 — "The equivalence of the two statements"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 42 not yet uploaded, verify-scene.mjs could
 * not be run. The classic composite-device proof — double-check by eye
 * once verified. Re-run once audio lands.
 *
 * Beats (7): 0 hook · 1 magic device C (violates Clausius) · 2 ordinary
 *  engine (Q1,W,Q2) · 3 combine: net cold-reservoir change = 0 · 4 net
 *  result chip · 5 verdict: Kelvin-Planck violation · 6 closing: one
 *  prohibition, two faces.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 23, red)  | T mid | x299..781 y41..76 (bl 64)
 *  b0 | hook (11,script)   | T mid | x540 y92
 *  b1 | device C circle r40| Draw  | c(660,230) dashed red
 *  b2 | HOT/COLD boxes     | Draw  | x300..780 y110..148 / y330..368
 *  b2 | engine circle r40  | Draw  | c(420,230)
 *  b2 | Q1,W,Q2(engine)    | Draw  | arrows + labels
 *  b3 | Q2(device C) ×2    | Draw  | cold→C, C→hot + note (net=0)
 *  b4 | result chip (h32)  | Chip  | x260..780 y420..452
 *  b5 | verdict (16,w800)  | T mid | x540 y468
 *  b6 | closing (11,script)| T mid | x540 y495
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("the equivalence of the two statements", "dono statements ki equivalence")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={92} size={11} fill={MUTED} script>
          {t("violate one, and you can violate the other — the JEE-Advanced classic", "ek todo, doosra khud toot jaata — JEE-Advanced classic")}
        </T>
      </Fade>

      {/* beat 1 — the magic device */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 620 230 a 40 40 0 1 0 0.01 0" stroke={RED} sw={2.2} dur={0.7} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={660} y={227} size={11} fill={RED} weight={800} script={false}>
          {t("DEVICE C", "DEVICE C")}
        </T>
        <T x={660} y={242} size={10} fill={RED} script={false}>
          {t("(magic)", "(magic)")}
        </T>
      </Fade>

      {/* beat 2 — the ordinary engine + reservoirs */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 300 110 h 480 v 38 h -480 z" stroke={INK} sw={2.2} dur={0.7} fill={AMBER} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={133} size={13} fill={INK} weight={700} script={false}>
          {t("HOT RESERVOIR", "HOT RESERVOIR")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 300 330 h 480 v 38 h -480 z" stroke={INK} sw={2.2} dur={0.7} fill={MUTED} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={540} y={353} size={13} fill={CREAM} weight={700} script={false}>
          {t("COLD RESERVOIR", "COLD RESERVOIR")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d="M 380 230 a 40 40 0 1 0 0.01 0" stroke={INK} sw={2.4} dur={0.7} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={420} y={235} size={12} fill={INK} weight={800} script={false}>
          {t("ENGINE", "ENGINE")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3)} d={arrowD(420, 148, 420, 190)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={445} y={172} size={14} fill={AMBER_DARK} weight={800} anchor="start" script={false}>
          Q₁
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d={arrowD(462, 230, 520, 230)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={525} y={235} size={15} fill={AMBER_DARK} weight={800} anchor="start" script={false}>
          W
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.2)} d={arrowD(420, 270, 420, 330)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={445} y={305} size={14} fill={AMBER_DARK} weight={800} anchor="start" script={false}>
          Q₂
        </T>
      </Fade>

      {/* beat 3 — device C's flows: net cold-reservoir change = 0 */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(660, 330, 660, 270)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={605} y={305} size={14} fill={RED} weight={800} anchor="end" script={false}>
          Q₂
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(660, 190, 660, 148)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={605} y={172} size={14} fill={RED} weight={800} anchor="end" script={false}>
          Q₂
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={540} y={395} size={12} fill={MUTED} script>
          {t("net cold-reservoir change = 0", "cold-reservoir ka net change = 0")}
        </T>
      </Fade>

      {/* beat 4 — the net result */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={260} y={420} w={520} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("(Q₁−Q₂) from HOT alone → converted ENTIRELY to work", "(Q₁−Q₂) sirf HOT se → POORA work mein")}
        </Chip>
      </Fade>

      {/* beat 5 — the verdict */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={468} size={16} fill={RED} weight={800} script={false}>
          {t("that's a KELVIN-PLANCK violation!", "yeh KELVIN-PLANCK violation hai!")}
        </T>
      </Fade>

      {/* beat 6 — closing */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={495} size={11} fill={MUTED} script>
          {t("one prohibition, two faces — break one, break the other", "ek prohibition, do faces — ek todo, doosra toota")}
        </T>
      </Fade>
    </Scene>
  );
}
