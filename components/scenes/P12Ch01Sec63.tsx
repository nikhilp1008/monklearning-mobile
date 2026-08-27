/**
 * P12Ch01 · Section 63 — "Pitfalls and Pro-Tips for Flux and Gauss's Law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Pitfall 1: Forgetting that area normal Ā is perpendicular to the physical surface!
 *    θ in E A cos θ is between Ē and Ā (normal), NOT between Ē and the plane surface!
 *  - Pitfall 2: Confusing net flux ∮ Ē · dĀ = Q_enc / ε₀ with local electric field E!
 *    Even if Q_enc = 0 (net flux = 0), E on the surface is NOT necessarily zero! (e.g. external dipole outside sphere).
 *  - Pitfall 3: Claiming Gauss's law is invalid for non-symmetric surfaces (it is ALWAYS valid, just unhelpful for E!).
 *
 * Beats (en [0, 6, 20, 34, 48, 60, 72, 86]):
 *  0 Title "pitfalls & pro-tips for flux & gauss's law" + drawn underline
 *  1 Hook note: avoiding common exam traps in vector orientation and Gauss's law interpretations!
 *  2 Badge 1 & Pitfall 1: Angle θ is with Area NORMAL Ā (NOT the plane surface!)
 *  3 Badge 2 & Pitfall 2: Net Flux = 0 DOES NOT mean Electric Field E = 0!
 *  4 Badge 3 & Pitfall 3: E in ∮ Ē · dĀ is created by ALL charges, while flux is determined ONLY by Q_enc!
 *  5 Pro-tip summary for board exams
 *  6 Grand Verdict: Angle θ with Normal  |  Net Flux=0 ≠ E=0  |  E comes from ALL charges!
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "pitfalls & pro-tips for flux & gauss's law",
            "pitfalls & pro-tips for flux & gauss's law"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 180 70 C 440 66, 640 74, 900 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "avoiding common exam traps in vector orientation and Gauss's law interpretations!",
            "vector orientation aur Gauss's law interpretations me exam traps se bachna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Pitfall 1 ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 1: Angle θ is with Area NORMAL (NOT the plane surface!)", "PITFALL 1: Angle θ Area NORMAL ke sath hota hai")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={18} fill={INK} weight={800}>
            If E makes 30° with surface plane, θ = 60° with normal!
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Always use θ = 90° - plane angle!", "Hamesha θ = 90° - plane angle use karein!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Pitfall 2 ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 2: Net Flux = 0 DOES NOT Mean Field E = 0", "PITFALL 2: Net Flux = 0 MATLAB Field E = 0 NAHI")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={16} fill={INK} weight={800}>
            Q_enc = 0 ⇒ Net Flux = 0, but E can be non-zero!
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Grand Verdict Chip ── */}
      <Fade on={beat >= 6}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: Angle θ with Normal  |  Net Flux=0 ≠ E=0  |  E comes from ALL charges!",
            "★ VERDICT: Angle θ with Normal  |  Net Flux=0 ≠ E=0  |  E comes from ALL charges!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
