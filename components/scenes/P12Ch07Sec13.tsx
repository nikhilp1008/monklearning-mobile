/**
 * P12Ch07 · Section 13 — "Pro-tips: the fastest power route and a free sanity check"
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

export default function P12Ch07Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Pro-Tips: Fastest Power Route & Sanity Check V₀ > V_rms > V_mean", "Pro-Tips: Fastest Power Route & Sanity Check V₀ > V_rms > V_mean")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Fast Power Route */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("FASTEST POWER ROUTE: P = V_rms I_rms DIRECTLY", "FASTEST POWER ROUTE: P = V_rms I_rms DIRECTLY")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            ⟨P⟩ = V_rms I_rms = V_rms² / R
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            Skip converting to peak amplitude V₀ unless explicitly asked!
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: FREE SANITY CHECK V0 > V_rms > V_mean */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("FREE SANITY CHECK: V₀ (1.0) > V_rms (0.707) > V_mean (0.637)", "FREE SANITY CHECK: V₀ (1.0) > V_rms (0.707) > V_mean (0.637)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={GREEN} weight={800}>
            V₀ (1.0) &gt; V_rms (0.707) &gt; V_mean (0.637)
          </T>
          <T x={240} y={52} anchor="middle" size={14} fill={INK} weight={700}>
            {t("If V_mean > V_rms in your solution, re-check your math!", "Agar V_mean > V_rms aaye solution me, instantly math re-check karo!")}
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Subtopic 1 Complete */}
      <Badge n={3} cx={52} cy={340} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={345} size={14} fill={RED} weight={700} anchor="start">
          {t("SUBTOPIC 1 MASTERY SUMMARY", "SUBTOPIC 1 MASTERY SUMMARY")}
        </T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 360)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            Subtopic 1 (Sec 1 – 13) Complete: Peak, RMS, Mean Values, Form Factor, and AC Power Fundamentals!
          </T>
        </G>
      </Fade>

      {/* Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={490} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Subtopic 1 Complete: AC Fundamentals, RMS, Half-Cycle Mean, and Power (Sec 1 – 13)! ✓",
            "★ Subtopic 1 Complete: AC Fundamentals, RMS, Half-Cycle Mean, aur Power (Sec 1 – 13)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
