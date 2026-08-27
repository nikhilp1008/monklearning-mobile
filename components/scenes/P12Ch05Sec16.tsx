/**
 * P12Ch05 · Section 16 — "The Earth as one colossal bar magnet"
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

export default function P12Ch05Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Earth as One Colossal Bar Magnet", "The Earth as One Colossal Bar Magnet")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: GEOGRAPHIC AXIS VS MAGNETIC AXIS (11.3° TILT) */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GEOGRAPHIC AXIS VS MAGNETIC AXIS (11.3° TILT)", "GEOGRAPHIC AXIS VS MAGNETIC AXIS (11.3° TILT)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Rotation Axis: Geographic N-S axis defined by Earth's spin.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Magnetic Tilt: Dipole axis tilted by ~11.3° to rotation axis.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Dipole Orientation: Dipole moment vector points S to N.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Pole Trap: Geographic North holds a MAGNETIC SOUTH pole!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (That's why N-pole of compass needle is attracted to Geographic North)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: ORIGIN: THE GEODYNAMO EFFECT */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ORIGIN: THE GEODYNAMO EFFECT", "ORIGIN: THE GEODYNAMO EFFECT")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Molten Core: Convection currents of liquid metallic iron &amp; nickel.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Circulation: Earth's rotation creates giant circulating charge loops.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Dynamo Action: Circulating electric currents generate field B.
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Surface Field: B ≈ 10⁻⁴ T (0.1 to 0.6 Gauss at surface)!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Earth is not a permanent magnet; heat prevents permanent ferromagnetism)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("CRITICAL POLE NAMING CONVENTION", "CRITICAL POLE NAMING CONVENTION")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Compass Behavior: North-seeking pole of compass points Geographic North.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Magnetic Identity: Geographic North Pole contains Magnetic South Pole (Nm ≈ 79.7° N, 108° W).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Earth's magnetic dipole axis is tilted 11.3°, driven by core geodynamo circulation! ✓",
            "★ Earth's magnetic dipole axis is tilted 11.3°, driven by core geodynamo circulation! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
