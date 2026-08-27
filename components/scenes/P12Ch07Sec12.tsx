/**
 * P12Ch07 · Section 12 — "The four traps that cost marks in AC fundamentals"
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

export default function P12Ch07Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("The Four Traps That Cost Marks in AC Fundamentals", "The Four Traps That Cost Marks in AC Fundamentals")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Meter Readings & Charge Traps */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("TRAP 1 & 2: AC METERS READ RMS & HALF-CYCLE MEAN CHARGE", "TRAP 1 & 2: AC METERS READ RMS & HALF-CYCLE MEAN CHARGE")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={14} fill={INK} weight={800}>
            AC Meters read RMS values (NOT Peak values!)
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            Half-cycle charge ΔQ = I_mean (T/2) = (2I₀/π)(T/2)!
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Waveform & Frequency Traps */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("TRAP 3 & 4: NON-SINUSOIDAL WAVEFORMS & ω = 2πf", "TRAP 3 & 4: NON-SINUSOIDAL WAVEFORMS & ω = 2πf")}
        </T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={14} fill={INK} weight={800}>
            Square wave I_rms = I₀ | Triangle wave I_rms = I₀ / √3
          </T>
          <T x={240} y={52} anchor="middle" size={14} fill={GREEN} weight={800}>
            Don't forget factor 2π when converting f to ω!
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Exam Pitfall Shield */}
      <Badge n={3} cx={52} cy={340} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={345} size={14} fill={RED} weight={700} anchor="start">
          {t("CBSE & NEET PITFALL MASTERY SHIELD", "CBSE & NEET PITFALL MASTERY SHIELD")}
        </T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 360)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            Always check: 1. Meter reading = RMS | 2. Waveform shape | 3. f vs ω | 4. Full cycle average = 0!
          </T>
        </G>
      </Fade>

      {/* Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={490} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Four Traps Avoided: AC meters read RMS, non-sinusoidal waves need special integration, and ω = 2πf! ✓",
            "★ Four Traps Avoided: AC meters read RMS, non-sinusoidal waves need special integration, aur ω = 2πf! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
