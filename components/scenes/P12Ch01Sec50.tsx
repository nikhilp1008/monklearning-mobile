/**
 * P12Ch01 · Section 50 — "Worked Example: Quarter Ring With Two Surviving Components"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Quarter ring lying in 1st quadrant (from θ = 0 to θ = π/2 = 90°) with uniform charge density λ
 *  - E_x = ∫₀^(π/2) k λ cos θ dθ / R = (k λ / R) [ sin θ ]₀^(π/2) = k λ / R (pointing left, -x)
 *  - E_y = ∫₀^(π/2) k λ sin θ dθ / R = (k λ / R) [ -cos θ ]₀^(π/2) = k λ / R (pointing down, -y)
 *  - Both x and y components SURVIVE with equal magnitude k λ / R!
 *  - Net magnitude: E_net = √(E_x² + E_y²) = √2 (k λ / R)
 *  - Angle: θ = 45° in 3rd quadrant (bisecting the quarter arc!)
 *
 * Beats (en [0, 6, 16, 30, 44, 56, 70, 82, 92]):
 *  0 Title "worked example: quarter ring with two surviving components" + drawn underline
 *  1 Hook note: resolving vector components when symmetry does NOT cancel both axes!
 *  2 Badge 1 & Component E_x: E_x = k λ / R (along -x axis)
 *  3 Badge 2 & Component E_y: E_y = k λ / R (along -y axis)
 *  4 Badge 3 & Net Field Vector: E_net = √2 k λ / R at 45° angle
 *  5 Comparison with semicircle: Semicircle has 1 component (2 k λ / R) vs Quarter ring 2 components (√2 k λ / R)!
 *  6 Grand Verdict: E_x = E_y = k λ / R  ⇒  E_net = √2 k λ / R at 45° angle!
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

export default function P12Ch01Sec50({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: quarter ring with two surviving components",
            "worked example: quarter ring with two surviving components"
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
            "resolving vector components when symmetry does NOT cancel both axes!",
            "dono axes ke vector components resolve karna jab symmetry cancellation incomplete ho!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Component E_x ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("HORIZONTAL COMPONENT E_x = k λ / R", "HORIZONTAL COMPONENT E_x = k λ / R")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            E_x = k λ / R  (along -x axis)
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Integrated from θ = 0 to 90°", "θ = 0 se 90° tak integrate karke")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Component E_y ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("VERTICAL COMPONENT E_y = k λ / R", "VERTICAL COMPONENT E_y = k λ / R")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={18} fill={RED} weight={800}>
            E_y = k λ / R  (along -y axis)
          </T>
          <T x={0} y={65} anchor="start" size={13.5} fill={INK} weight={700}>
            Both components have EQUAL magnitude!
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 3 & Net Field Magnitude ── */}
      <Badge n={3} cx={52} cy={300} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={305} size={14} fill={RED} weight={700} anchor="start">
          {t("NET VECTOR RESULTANT E_net", "NET VECTOR RESULTANT E_net")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 325)">
          <T x={0} y={25} anchor="start" size={24} fill={GREEN} weight={800}>
            E_net = √(E_x² + E_y²) = √2 (k λ / R) at 45°
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
            "★ VERDICT: E_x = E_y = k λ / R  ⇒  E_net = √2 k λ / R at 45° angle!",
            "★ VERDICT: E_x = E_y = k λ / R  ⇒  E_net = √2 k λ / R at 45° angle!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
