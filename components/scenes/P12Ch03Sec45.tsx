/**
 * P12Ch02 · Section 45 — "Derivation: the power formula and Joule's law"
 * Beats (en [0,2,3,4,5,6,7]): 7 beats
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

export default function P12Ch03Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Board Derivation: Power & Joule's Law", "Board Derivation: Power & Joule's Law")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: WORK & POWER DERIVATION */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("WORK & POWER DERIVATION (P = dW/dt)", "WORK & POWER DERIVATION (P = dW/dt)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 2}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Infinitesimal Work: dW = dq × V (work done pushing charge dq across V).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Express Charge Flow: dq = I dt  =&gt;  dW = (I dt) V = V I dt.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Rate of Work (Power): P = dW / dt = V I (Watts).
          </T>

          <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Fundamental Power Law: P = V I (Electrical energy rate)!
          </T>
        </Fade>

        <Fade on={beat >= 4}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Valid for any electrical component: resistor, battery, motor)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: JOULE HEATING DERIVATION */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("JOULE HEATING DERIVATION (H = I² R t)", "JOULE HEATING DERIVATION (H = I² R t)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 4}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Ohm's Substitution: Replace V = I R into P = V I.
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Power Forms: P = (I R) I = I² R = V² / R.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Total Heat Energy: H = P × t = I² R t (steady current).
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Joule's Law: H = I² R t (100% Board Exam Ready)!
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Notice I² dependence: 2x current yields 4x heat output)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("BOARD DERIVATION SUMMARY VERDICT", "BOARD DERIVATION SUMMARY VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Work dW = V dq = VI dt leads to power P = VI. Substituting V = IR gives P = I² R = V² / R.
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Integrating power over time t yields Joule's Law of heating H = I² R t (Joules).
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Derived! P = VI = I²R = V²/R and Joule's Law H = I²Rt. 100% board ready! ✓",
            "★ Derived! P = VI = I²R = V²/R and Joule's Law H = I²Rt. 100% board ready! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
