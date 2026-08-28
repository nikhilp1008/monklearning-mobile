/**
 * Ch11 · Section 7 — "The zeroth law predicts, then the masses compute"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (8): 0 hook · 1 two baths + thermometer readings · 2 convert to T ·
 *  3 deep move: thermometer reads SAME in both (system 3) · 4 mass-weighted
 *  mean formula · 5 compute T_f=318.7K · 6 convert back to reading · 7
 *  verdict: qualitative first, masses second.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)     | T mid | x182..898 y34..81 (bl 68)
 *  b0 | hook (13,script)      | T mid | x540 y104
 *  b1 | bath boxes (h95)      | Draw  | x150..405 / 445..700 y128..223
 *  b1 | labels(15) + reading(16) | T mid | x277/x572  y160 / y195
 *  b2 | T_A/T_B stamps (15)   | T mid | x277 / x572  y245
 *  b3 | insight chip (h34)    | Chip  | x200..850 y270..304
 *  b3 | subnote (11,script)   | T mid | x525 y322
 *  b4 | formula (14,w800)     | T mid | x540 y352
 *  b5 | working (12)          | T mid | x540 y378
 *  b5 | T_f stamp (h30)       | Chip  | x320..540 y392..422
 *  b6 | working2 (12)         | T mid | x540 y445
 *  b6 | P_final stamp (h30)   | Chip  | x320..540 y460..490
 *  b7 | verdict chip (h30)    | Chip  | x240..840 y515..545
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("the zeroth law predicts, then the masses compute", "zeroth law predict karta hai, phir masses compute karte hain")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={104} size={13} fill={MUTED} script>
          {t("the qualitative answer comes before any arithmetic", "qualitative answer arithmetic se pehle aata hai")}
        </T>
      </Fade>

      {/* beat 1 — two baths, one thermometer */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 128 h 255 v 95 h -255 z" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 445 128 h 255 v 95 h -255 z" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={277} y={160} size={15} fill={INK} weight={700} script={false}>
          {t("Bath A — 2 kg water", "Bath A — 2 kg paani")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={572} y={160} size={15} fill={INK} weight={700} script={false}>
          {t("Bath B — 1 kg water", "Bath B — 1 kg paani")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={277} y={195} size={16} fill={AMBER_DARK} weight={800} script={false}>
          1.10 P_tr
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={572} y={195} size={16} fill={AMBER_DARK} weight={800} script={false}>
          1.30 P_tr
        </T>
      </Fade>

      {/* beat 2 — convert to temperature */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={277} y={245} size={15} fill={GREEN} weight={700} script={false}>
          T_A ≈ 300.5 K
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={572} y={245} size={15} fill={GREEN} weight={700} script={false}>
          T_B ≈ 355.1 K
        </T>
      </Fade>

      {/* beat 3 — the deep move */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={200} y={270} w={650} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          {t("equilibrium ⇒ thermometer reads the SAME in both!", "equilibrium ⇒ thermometer dono mein SAME padhta hai!")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={525} y={322} size={11} fill={MUTED} script>
          {t("(the thermometer is itself a third system)", "(thermometer khud teesra system hai)")}
        </T>
      </Fade>

      {/* beat 4 — mass-weighted mean */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={352} size={14} fill={INK} weight={800} script={false}>
          heat lost = heat gained ⇒ T_f = (m_A T_A + m_B T_B)/(m_A+m_B)
        </T>
      </Fade>

      {/* beat 5 — compute the final temperature */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={378} size={12} fill={INK} script={false}>
          = (2×300.5 + 1×355.1) / 3
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={320} y={392} w={220} h={30} fill={INK} textFill={CREAM} size={16} script={false}>
          T_f ≈ 318.7 K
        </Chip>
      </Fade>

      {/* beat 6 — convert back to a reading */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={445} size={12} fill={INK} script={false}>
          P_final = P_tr × (318.7 / 273.16)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={320} y={460} w={220} h={30} fill={AMBER} textFill={INK} size={16} script={false}>
          ≈ 1.17 P_tr
        </Chip>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={240} y={515} w={600} h={30} fill={INK} textFill={CREAM} size={14} script={false}>
          {t("qualitative first, masses second — leans toward heavier bath", "qualitative pehle, masses baad mein — heavier bath ki taraf")}
        </Chip>
      </Fade>
    </Scene>
  );
}
