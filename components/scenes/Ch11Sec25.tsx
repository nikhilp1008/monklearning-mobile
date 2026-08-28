/**
 * Ch11 · Section 25 — "Heat capacity, and why a gas needs two"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 25 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook (spanner vs water) · 1 c=per kg, C=per mol ·
 *  2 solids/liquids: one number enough · 3 two cylinders, common start ·
 *  4 left heated: rigid, Cv, all→U · 5 right heated: free piston, Cp,
 *  some→work · 6 verdict Cp>Cv · 7 leaky-bucket analogy.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)    | T mid | x254..826 y38..77 (bl 64)
 *  b0 | hook (11,script)     | T mid | x540 y94
 *  b1 | line (11,script)     | T mid | x540 y118
 *  b2 | line (11,script)     | T mid | x540 y142
 *  b3 | left/right labels    | T mid | x260/740 y167
 *  b3 | boxes (h100) + pistons (initial, both y185) | Draw | x150..370/630..850 y200..300
 *  b4 | left bolts + stove + heat arrows + "Cv" label | Draw/T | y300..312, label y350
 *  b5 | right piston rises to y165 + arrow + stove + heat arrows + "Cp" label
 *  b6 | verdict (16,w800)    | T mid | x540 y390
 *  b7 | 2 buckets + labels   | Draw  | x220..300/700..780 y420..480, labels y500
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("heat capacity, and why a gas needs two", "heat capacity, aur gas ko do kyun chahiye")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={94} size={11} fill={MUTED} script>
          {t("spanner heats fast, water barely warms — heat capacity", "spanner jaldi garam, paani mushkil se — heat capacity")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={118} size={11} fill={MUTED} script>
          {t("c = per kg, C = per mol — water's large c keeps coasts mild", "c = per kg, C = per mol — paani ka bada c coast ko mild rakhta")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={142} size={11} fill={MUTED} script>
          {t("solids/liquids barely expand ⇒ ONE number is enough", "solids/liquids mushkil se phailte ⇒ EK number kaafi")}
        </T>
      </Fade>

      {/* beat 3 — two cylinders, common starting point */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={260} y={167} size={12} fill={INK} script={false}>
          {t("sealed, rigid", "sealed, rigid")}
        </T>
        <T x={740} y={167} size={12} fill={INK} script={false}>
          {t("free piston", "free piston")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 150 200 V 300 H 370 V 200" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 630 200 V 300 H 850 V 200" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 150 185 h 220 v 15 h -220 z" stroke={INK} sw={2} dur={0.5} fill={MUTED} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d="M 630 185 h 220 v 15 h -220 z" stroke={INK} sw={2} dur={0.5} fill={MUTED} />

      {/* beat 4 — left: heated, rigid, Cv */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Circle cx={210} cy={192} r={2.2} fill={INK} />
        <Circle cx={310} cy={192} r={2.2} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 150 300 h 220 v 12 h -220 z" stroke={INK} sw={1.6} dur={0.5} fill={AMBER_DARK} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={arrowD(210, 328, 210, 305)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.1)} d={arrowD(310, 328, 310, 305)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={260} y={350} size={13} fill={GREEN} weight={700} script={false}>
          {t("Cv: ALL heat → U", "Cv: SAARA heat → U")}
        </T>
      </Fade>

      {/* beat 5 — right: heated, free piston, Cp */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 630 300 h 220 v 12 h -220 z" stroke={INK} sw={1.6} dur={0.5} fill={AMBER_DARK} />
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={arrowD(690, 328, 690, 305)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={arrowD(790, 328, 790, 305)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d={arrowD(740, 183, 740, 168)} stroke={AMBER} sw={2.2} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d="M 630 165 h 220 v 15 h -220 z" stroke={INK} sw={2} dur={0.5} fill={AMBER} />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={740} y={350} size={13} fill={AMBER_DARK} weight={700} script={false}>
          {t("Cp: SOME heat → work", "Cp: KUCH heat → work")}
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={390} size={16} fill={INK} weight={800} script={false}>
          Cp {">"} Cv — {t("always", "hamesha")}
        </T>
      </Fade>

      {/* beat 7 — the leaky-bucket analogy */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 220 420 L 300 420 L 290 480 L 230 480 Z" stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d="M 700 420 L 780 420 L 770 480 L 710 480 Z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <Circle cx={768} cy={452} r={2.4} fill={RED} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={260} y={500} size={11} fill={GREEN} script={false}>
          {t("plugged ⇒ Cv (all heat kept)", "plugged ⇒ Cv (sab heat rehta)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={740} y={500} size={11} fill={AMBER_DARK} script={false}>
          {t("leaky ⇒ Cp ('leaks' as work)", "leaky ⇒ Cp (work ban ke bahar)")}
        </T>
      </Fade>
    </Scene>
  );
}
