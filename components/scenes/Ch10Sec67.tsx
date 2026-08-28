/**
 * Ch10 · Section 67 — "Clausius-Clapeyron: the sign that explains everything"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 3-6 are exactly 1s apart and hi beats 0-1 are exactly
 * 1s apart, so all Fade/Draw delays in this file stay ≤ ~0.3s.
 *
 * Beats (en [0,6.49,18.18,24.58,25.58,26.58,27.58]):
 *  0 the deepest idea: a single sign, from Clausius-Clapeyron
 *  1 dP/dT = L / (T·ΔV), ΔV = volume change of the transition
 *  2 computing is beyond syllabus — the SIGN of ΔV is the whole insight
 *  3 water fusion: ice→water shrinks, ΔV<0, slope<0 — melts easier under P
 *  4 normal substance: solid denser, ΔV>0, slope>0 — melts harder under P
 *  5 the whole water-vs-normal difference comes from one sign
 *  6 you rarely need to compute it — read the sign
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | chip x340 y100 w400 h42 "dP/dT = L / (T·ΔV)"
 *  b2 | note mid x540 bl168
 *  b3 | water header x280 bl193 · axes x230..330 y200..280 · line ·
 *       label mid x280 bl300
 *  b4 | normal header x730 bl193 · axes x680..780 y200..280 · line ·
 *       label mid x730 bl300
 *  b5 | note mid x540 bl335
 *  b6 | note mid x540 bl362
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
  INK_LIGHT,
  MUTED,
  CREAM,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={18} fill={INK} script>
          {t("Clausius-Clapeyron — the sign that explains everything", "Clausius-Clapeyron — jo sign sab kuch samjhaata")}
        </T>
      </Fade>

      {/* beat 0 — the deepest idea */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("the deepest idea here: a single sign", "sabse gehri baat: ek hi sign")}
        </T>
      </Fade>

      {/* beat 1 — the relation */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={340} y={100} w={400} h={42} fill={CREAM} stroke={AMBER} textFill={INK} size={19} script={false}>
          dP/dT = L / (T·ΔV)
        </Chip>
      </Fade>

      {/* beat 2 — the sign is the whole insight */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={168} size={12} fill={MUTED} script anchor="middle">
          {t("computing is beyond syllabus — the SIGN of ΔV is the whole insight", "compute karna syllabus se pare — ΔV ka SIGN hi sab kuch")}
        </T>
      </Fade>

      {/* beat 3 — water: negative slope */}
      <Fade on={beat >= 3} delay={dl(3, 0.05)}>
        <T x={280} y={193} size={12} fill={RED} weight={700} anchor="middle">{t("water", "paani")}</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.15)} d="M230 200 v80 M230 280 h100" stroke={INK_LIGHT} sw={1.4} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 0.25)} d="M250 278 L232 198" stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 0.45)}>
        <T x={280} y={300} size={11} fill={RED} anchor="middle">
          {t("ΔV<0 → slope<0 → melts easier under P", "ΔV<0 → slope<0 → P se aasaan melt")}
        </T>
      </Fade>

      {/* beat 4 — normal substance: positive slope */}
      <Fade on={beat >= 4} delay={dl(4, 0.05)}>
        <T x={730} y={193} size={12} fill={GREEN} weight={700} anchor="middle">{t("normal substance", "normal substance")}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M680 200 v80 M680 280 h100" stroke={INK_LIGHT} sw={1.4} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 0.25)} d="M700 278 L778 198" stroke={GREEN} sw={2.2} dur={0.35} />
      <Fade on={beat >= 4} delay={dl(4, 0.45)}>
        <T x={730} y={300} size={11} fill={GREEN} anchor="middle">
          {t("ΔV>0 → slope>0 → melts harder under P", "ΔV>0 → slope>0 → P se mushkil melt")}
        </T>
      </Fade>

      {/* beat 5 — the whole difference */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={335} size={13} fill={INK} script weight={700} anchor="middle">
          {t("regelation or no regelation — comes from one sign", "regelation ho ya na ho — ek hi sign se aata")}
        </T>
      </Fade>

      {/* beat 6 — read the sign */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={362} size={12} fill={MUTED} script anchor="middle">
          {t("you rarely need to compute it — read the sign", "compute karna kam hi zaroori — sign padho")}
        </T>
      </Fade>
    </Scene>
  );
}
