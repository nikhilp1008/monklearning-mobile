/**
 * Ch12 · Section 14 — Worked example [CBSE]: compress and heat a sealed gas
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 12.7, 24.39]):
 *  0 title + problem · 1 THE PICTURE: wide before-cylinder → arrow → narrow
 *    after-cylinder, both changes push P up · 2 given-data chips · 3 fixed
 *    mass ⇒ combined gas law, skip moles · 4 rearranged formula · 5 substitute
 *    numbers · 6 verdict ≈5.3 atm + units caution
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 24, red)          | T mid | x260..820 y37..78 (bl66)
 *  b0 | problem (14, ink, script)       | T mid | x540 y98
 *  b1 | before panel + 4 dots           | Draw  | x130..390 y150..230
 *  b1 | after panel + 4 dots            | Draw  | x760..870 y150..230
 *  b1 | arrow + "compress + heat"       | Draw  | (400,190)→(750,190) y175
 *  b1 | caption (13, amber_dark)        | T mid | x540 y255
 *  b2 | before/after data chips ×2      | Chip  | x120..540 / x580..920 y285..317
 *  b3 | reasoning (15, ink, script)     | T mid | x540 y348
 *  b4 | formula (16, ink, bold)         | T mid | x540 y382
 *  b5 | substitute (16, amber_dark)     | T mid | x540 y414
 *  b6 | answer chip (big, green)        | Chip  | x400..680 y445..489
 *  b6 | caution (script 15, red)        | T mid | x540 y525
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={66} size={24} fill={RED} script>
          {t("compress and heat a sealed gas [CBSE]", "sealed gas ko compress aur heat karna [CBSE]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={98} size={14} fill={INK} script>
          {t(
            "2 L @ 27°C, 1 atm → compressed to 0.5 L, heated to 127°C ⇒ new P?",
            "2 L @ 27°C, 1 atm → 0.5 L compress, 127°C heat ⇒ naya P?"
          )}
        </T>
      </Fade>

      {/* beat 1 — THE PICTURE: wide -> narrow, both changes push P up */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 130 150 h 260 v 80 h -260 z" stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={260} y={138} size={14} fill={INK} weight={700}>
          V₁=2L, T₁=300K
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={200} cy={180} r={5} fill={RED} />
        <Circle cx={260} cy={200} r={5} fill={RED} />
        <Circle cx={320} cy={165} r={5} fill={RED} />
        <Circle cx={350} cy={210} r={5} fill={RED} />
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 2)} d={arrowD(400, 190, 750, 190)} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={575} y={175} size={13} fill={AMBER_DARK} script>
          {t("compress + heat", "compress + heat")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 3.4)} d="M 760 150 h 110 v 80 h -110 z" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={815} y={138} size={14} fill={INK} weight={700}>
          V₂=0.5L, T₂=400K
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <Circle cx={790} cy={175} r={5} fill={RED} />
        <Circle cx={810} cy={195} r={5} fill={RED} />
        <Circle cx={830} cy={180} r={5} fill={RED} />
        <Circle cx={800} cy={205} r={5} fill={RED} />
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={540} y={255} size={13} fill={AMBER_DARK} script>
          {t("both changes push the pressure up", "dono changes pressure ko upar dhakelte")}
        </T>
      </Fade>

      {/* beat 2 — given data */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={120} y={285} w={420} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("before: P₁=1 atm, V₁=2 L, T₁=300 K", "before: P₁=1 atm, V₁=2 L, T₁=300 K")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Chip x={580} y={285} w={340} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("after: V₂=0.5 L, T₂=400 K, P₂=?", "after: V₂=0.5 L, T₂=400 K, P₂=?")}
        </Chip>
      </Fade>

      {/* beat 3 — reasoning */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={348} size={15} fill={INK} script>
          {t(
            "fixed mass ⇒ combined gas law, no moles needed",
            "fixed mass ⇒ combined gas law, moles ki zaroorat nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — rearranged formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={382} size={16} fill={INK} weight={700}>
          P₂ = P₁ × (V₁/V₂) × (T₂/T₁)
        </T>
      </Fade>

      {/* beat 5 — substitute */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={414} size={16} fill={AMBER_DARK}>
          = 1 × 4 × 4/3 ≈ 5.3 atm
        </T>
      </Fade>

      {/* beat 6 — verdict + units caution */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={400} y={445} w={280} h={44} fill={GREEN} textFill="#fff" size={21} script={false}>
          P₂ ≈ 5.3 atm
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={525} size={15} fill={RED} script>
          {t(
            "litres never converted (cancel in ratio) — but T must be kelvin!",
            "litres kabhi convert nahi hue (ratio mein cancel) — par T kelvin mein hi!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
