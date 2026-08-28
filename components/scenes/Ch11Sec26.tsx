/**
 * Ch11 · Section 26 — "Degrees of freedom and equipartition"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 26 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 point atom vs dumbbell · 2 monoatomic 3 DOF ·
 *  3 diatomic +2 rotation = 5 · 4 equipartition: ½kT per DOF ·
 *  5 Cv=(f/2)R boxed · 6 more DOF ⇒ bigger Cv, smaller γ · 7 guardrail:
 *  f=5 at room temp, not 7.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)  | T mid | x275..805 y38..77 (bl 64)
 *  b0 | hook (12,script)   | T mid | x540 y96
 *  b1 | line (12,script)   | T mid | x540 y120
 *  b2 | dot + 3 arrows     | Draw  | c(260,195) r12
 *  b2 | label (12)         | T mid | x260 y255
 *  b3 | dumbbell + 2 arrows + 2 rotation arcs | Draw | c(730,195)/(790,195) r10
 *  b3 | label (12)         | T mid | x760 y255
 *  b4 | equipartition (13) | T mid | x540 y290
 *  b5 | "Cv=(f/2)R" chip   | Chip  | x440..640 y310..342
 *  b6 | verdict (13,w700)  | T mid | x540 y375
 *  b7 | guardrail chip     | Chip  | x260..820 y400..434
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("degrees of freedom and equipartition", "degrees of freedom aur equipartition")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("why is Cv = 3/2 R for helium but 5/2 R for nitrogen?", "helium ke liye Cv=3/2R par nitrogen ke liye 5/2R kyun?")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={12} fill={MUTED} script>
          {t("point atom: translates only · dumbbell: tumbles too", "point atom: sirf translate · dumbbell: tumble bhi")}
        </T>
      </Fade>

      {/* beat 2 — monoatomic: 3 translational DOF */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 248 195 a 12 12 0 1 0 0.01 0" stroke={INK} sw={2.2} dur={0.5} fill={INK} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(260, 175, 260, 150)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(278, 205, 305, 225)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(242, 205, 215, 225)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={260} y={255} size={12} fill={GREEN} script={false}>
          {t("monoatomic: 3 DOF (translation)", "monoatomic: 3 DOF (translation)")}
        </T>
      </Fade>

      {/* beat 3 — diatomic: +2 rotational DOF */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Circle cx={730} cy={195} r={10} fill={INK} />
        <Circle cx={790} cy={195} r={10} fill={INK} />
        <Line x1={740} y1={195} x2={780} y2={195} stroke={INK} strokeWidth={2.4} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(760, 175, 760, 150)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={arrowD(802, 205, 825, 222)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d="M 700 175 Q 760 155, 820 175" stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d="M 700 215 Q 760 235, 820 215" stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={760} y={255} size={12} fill={AMBER_DARK} script={false}>
          {t("diatomic: +2 rotation = 5 DOF", "diatomic: +2 rotation = 5 DOF")}
        </T>
      </Fade>

      {/* beat 4 — the equipartition theorem */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={290} size={13} fill={INK} script={false}>
          {t("equipartition: ½kT per DOF, per molecule (½R per mole)", "equipartition: ½kT per DOF, per molecule (½R per mole)")}
        </T>
      </Fade>

      {/* beat 5 — the formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={440} y={310} w={200} h={32} fill={INK} textFill={CREAM} size={18} script={false}>
          Cv = (f/2) R
        </Chip>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={375} size={13} fill={INK} weight={700} script={false}>
          {t("more DOF ⇒ bigger Cv, smaller γ", "zyada DOF ⇒ bada Cv, chota γ")}
        </T>
      </Fade>

      {/* beat 7 — guardrail */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={260} y={400} w={560} h={34} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("room temp diatomic: f=5 (vibration frozen, NOT 7)", "room temp diatomic: f=5 (vibration frozen, 7 nahi)")}
        </Chip>
      </Fade>
    </Scene>
  );
}
