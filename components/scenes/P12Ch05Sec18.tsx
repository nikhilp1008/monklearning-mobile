/**
 * P12Ch05 · Section 18 — "How dip changes as you travel, and what the model ignores"
 * Subtopic: Earth's Magnetism
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch05Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("How Dip Changes From Equator to Poles", "How Dip Changes From Equator to Poles")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: DIP AT EQUATOR (0°) VS DIP AT POLES (90°) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIP AT EQUATOR (0°) VS DIP AT POLES (90°)", "DIP AT EQUATOR (0°) VS DIP AT POLES (90°)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Magnetic Equator: Dip angle I = 0° (field B_E is horizontal).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Equator Components: B_H = B_E , B_V = 0 (horizontal needle).
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Magnetic Poles: Dip angle I = 90° (field B_E is vertical).
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Pole Components: B_H = 0 , B_V = B_E (vertical needle)!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (As you travel north from equator to north pole, dip needle tilts down)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: WHY COMPASS IS USELESS AT MAGNETIC POLES */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("WHY COMPASS IS USELESS AT MAGNETIC POLES", "WHY COMPASS IS USELESS AT MAGNETIC POLES")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Restoring Torque: Standard horizontal compass responds ONLY to B_H.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Zero Horizontal Component: At magnetic poles, B_H = 0.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Zero Restoring Torque: Torque τ = m B_H sin θ = 0 in any direction.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Spin Trap: Horizontal compass needle spins aimlessly at poles!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Must use a dip circle or 3D magnetometer near magnetic poles)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("LOCAL ANOMALIES & SOLAR WIND PERTURBATIONS", "LOCAL ANOMALIES & SOLAR WIND PERTURBATIONS")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Geological Ore Deposits: Concentrated iron/magnetite ores cause local B vector distortions.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Space Weather &amp; Solar Wind: Ionospheric currents alter B by ~1% dynamically (magnetic storms).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Dip I increases from 0° at equator to 90° at poles where B_H = 0! ✓",
            "★ Dip I increases from 0° at equator to 90° at poles where B_H = 0! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
