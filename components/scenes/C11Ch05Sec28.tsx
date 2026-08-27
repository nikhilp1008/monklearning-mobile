/**
 * C11 Chemistry Ch05 · Section 28 — "Enthalpy of solution: the
 * lattice-hydration tug-of-war"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,7.08,14.17,24.92,37.21,48.9,58.79,66.73]):
 *  0 heading + underline (anchor)
 *  1 text: dissolving = tug-of-war between two steps
 *  2 lattice arrow (red, up, endothermic) — ionic solid → gaseous ions
 *  3 hydration arrow (green, down, exothermic) — gaseous ions → aqueous ions
 *  4 net arrow + red label: ΔsolH = Δlattice + Δhyd
 *  5 chip: lattice wins ⇒ cold pack (NH4NO3)
 *  6 chip: hydration wins ⇒ hand warmer (CaCl2)
 *  7 green stamp: sign tells you which one
 *
 * Layout plan:
 *  b0 | heading (17,w800)+underline   | y81..100 (bl95); y104
 *  b1 | text1 (14, muted)             | T mid | y114..129 (bl125)
 *  b2 | ionic-solid dot+label         | circle+T | (200,315) bl340
 *  b2 | gaseous-ions dot+label        | circle+T | (540,175) bl160
 *  b2 | lattice arrow (red)           | Draw  | (220,303)→(525,190)
 *  b3 | aqueous-ions dot+label        | circle+T | (880,315) bl340
 *  b3 | hydration arrow (green)       | Draw  | (555,190)→(860,303)
 *  b4 | net arrow (ink)               | Draw  | (220,355)→(860,355)
 *  b4 | net label (14, red)           | T mid | y376..390 (bl380)
 *  b5 | cold-pack chip (14)           | Chip  | x240..840 y400..435
 *  b6 | hand-warmer chip (14)         | Chip  | x260..780 y447..482
 *  b7 | final stamp (14, green)       | Chip  | x300..780 y494..529
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("enthalpy of solution: lattice vs hydration", "enthalpy of solution: lattice vs hydration")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={95} size={17} weight={800} fill={INK}>
          {t("What happens, energetically, when something dissolves?", "kuch dissolve hone par energetically kya hota hai?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 340 104 C 410 101, 670 101, 740 104" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — tug-of-war intro */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={125} size={14} fill={MUTED}>
          {t(
            "dissolving an ionic solid = tug-of-war between two steps",
            "ionic solid dissolve karna = do steps ke beech tug-of-war"
          )}
        </T>
      </Fade>

      {/* beat 2 — lattice step (endothermic) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={200} cy={315} r={5} fill={INK} />
        <T x={200} y={340} size={13} fill={INK}>
          {t("ionic solid", "ionic solid")}
        </T>
        <Circle cx={540} cy={175} r={5} fill={INK} />
        <T x={540} y={160} size={13} fill={INK}>
          {t("gaseous ions", "gaseous ions")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={arrowD(220, 303, 525, 190)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={320} y={225} size={13} weight={700} fill={RED}>
          {t("lattice (+)", "lattice (+)")}
        </T>
      </Fade>

      {/* beat 3 — hydration step (exothermic) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Circle cx={880} cy={315} r={5} fill={INK} />
        <T x={880} y={340} size={13} fill={INK}>
          {t("aqueous ions", "aqueous ions")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={arrowD(555, 190, 860, 303)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={755} y={225} size={13} weight={700} fill={GREEN}>
          {t("hydration (−)", "hydration (−)")}
        </T>
      </Fade>

      {/* beat 4 — net arrow + label */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={arrowD(220, 355, 860, 355)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={380} size={14} weight={700} fill={RED}>
          {t("net = ΔsolH = Δlattice + Δhyd", "net = ΔsolH = Δlattice + Δhyd")}
        </T>
      </Fade>

      {/* beat 5 — cold pack */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <Chip x={240} y={400} w={600} h={35} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "lattice wins ⇒ dissolving COOLS water — instant COLD pack (NH4NO3)",
            "lattice jeetta hai ⇒ paani THANDA hota hai — instant COLD pack (NH4NO3)"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — hand warmer */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <Chip x={260} y={447} w={520} h={35} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "hydration wins ⇒ solution WARMS — hand warmer (CaCl2)",
            "hydration jeetta hai ⇒ solution GARAM hota hai — hand warmer (CaCl2)"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — final stamp */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={300} y={494} w={480} h={35} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("ΔsolH sign tells you: cold pack or hand warmer", "ΔsolH ka sign bata deta hai: cold pack ya hand warmer")}
        </Chip>
      </Fade>
    </Scene>
  );
}
