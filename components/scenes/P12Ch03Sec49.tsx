/**
 * P12Ch02 · Section 49 — "Worked example: monthly energy and the bill"
 * Beats (en [0,1,3,4,5,6,7]): 7 beats
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

export default function P12Ch03Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("JEE Main: Monthly Energy Consumption & Electricity Bill", "JEE Main: Monthly Energy Consumption & Electricity Bill")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MONTHLY ENERGY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 3} delay={dl(3, 0.2)} />
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MONTHLY ENERGY CONSUMPTION (kWh)", "MONTHLY ENERGY CONSUMPTION (kWh)")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 3}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Power Rating: P = 1.5 kW (1500 Watts).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Total Operating Hours: t = 2 h/day × 30 days = 60 hours.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Total Energy: W = P × t = 1.5 kW × 60 h = 90 kWh.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Electricity Board Units: Energy = 90 Units !
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Equivalent to 90 × 3.6 × 10⁶ = 3.24 × 10⁸ Joules of energy)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: BILL COST */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MONTHLY BILL COST CALCULATION", "MONTHLY BILL COST CALCULATION")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Tariff Unit Rate: Rate = ₹8 per kWh (₹8 / Unit).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Total Bill Formula: Total Cost = Total Units × Unit Rate.
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Multiply Values: Cost = 90 kWh × ₹8 / kWh = ₹720.
          </T>

          <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Monthly Geyser Bill: Total Cost = ₹720 !
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Standard practical problem for CBSE Board &amp; JEE Main)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MONTHLY ELECTRICITY BILL WORKED EXAMPLE VERDICT", "MONTHLY ELECTRICITY BILL WORKED EXAMPLE VERDICT")}
          </T>
        </Fade>

        <Fade on={beat >= 6}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Total energy consumed by 1.5 kW appliance over 60 hours is W = P × t = 90 kWh (90 commercial units).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            At ₹8/unit tariff, monthly electricity cost for operating this single appliance is ₹720.
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 6}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Result: Energy W = 90 kWh, Monthly Geyser Cost = ₹720! ✓",
            "★ Result: Energy W = 90 kWh, Monthly Geyser Cost = ₹720! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
