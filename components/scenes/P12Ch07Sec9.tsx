/**
 * P12Ch07 · Section 09 — "Worked example: what does a 220 V label actually promise?"
 * Subtopic: AC Fundamentals, Peak, RMS & Mean Values
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
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

export default function P12Ch07Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Real-World Physics: Decoding the '220 V AC' Appliance Label", "Real-World Physics: Decoding the '220 V AC' Appliance Label")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Label = RMS Voltage */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("APPLIANCE SPECIFICATION: '220 V' MEANS V_rms = 220 V", "APPLIANCE SPECIFICATION: '220 V' MEANS V_rms = 220 V")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Label Rating = V_rms = 220 V
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            All AC rating plates and meters specify RMS values by default!
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Peak Voltage & Peak-to-Peak Breakdown */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("ACTUAL PEAK V₀ = 311 V & PEAK-TO-PEAK V_p-p = 622 V", "ACTUAL PEAK V₀ = 311 V & PEAK-TO-PEAK V_p-p = 622 V")}
        </T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={GREEN} weight={800}>
            V₀ = √2 × 220 V = 311 V
          </T>
          <T x={240} y={52} anchor="middle" size={16} fill={INK} weight={800}>
            Insulation must withstand 311 V (Peak-to-Peak = 622 V!)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Danger Comparison (220 V AC vs 220 V DC) */}
      <Badge n={3} cx={52} cy={340} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={345} size={14} fill={RED} weight={700} anchor="start">
          {t("WHY 220 V AC IS MORE DANGEROUS THAN 220 V DC", "WHY 220 V AC IS MORE DANGEROUS THAN 220 V DC")}
        </T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 360)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            220 V AC reaches a dangerous peak of 311 V, whereas 220 V DC remains fixed at 220 V! Thus 220 V AC is significantly more dangerous!
          </T>
        </G>
      </Fade>

      {/* Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={490} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Real-World Fact: A 220 V AC label promises V_rms = 220 V, reaching peak voltage V₀ = 311 V and peak-to-peak 622 V! ✓",
            "★ Real-World Fact: 220 V AC label V_rms = 220 V promise karta hai, reaching peak voltage V₀ = 311 V aur peak-to-peak 622 V! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
