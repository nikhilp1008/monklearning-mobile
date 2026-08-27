/**
 * P12Ch01 · Section 21 — "Worked Example: Equilateral Triangle, Superposition and Equilibrium"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem setup: 3 equal charges +q at vertices of an equilateral triangle of side L
 *  - Find net force on any one charge at vertex C
 *  - Individual force magnitudes: F₁ = F₂ = F = k q² / L²
 *  - Angle between forces: θ = 60°
 *  - Resultant net force: F_net = √(F² + F² + 2 F² cos 60°) = √3 F = √3 (k q² / L²)
 *  - Drawn equilateral triangle with vector forces and 60° angle arc
 *
 * Beats (en [0, 6, 18, 32, 44, 56, 68, 80, 94]):
 *  0 Title "worked example: equilateral triangle & superposition" + drawn underline
 *  1 Hook note: applying vector superposition on a symmetrical geometry!
 *  2 Badge 1 & Problem setup: 3 equal +q charges at vertices of equilateral triangle of side L
 *  3 Drawn triangle geometry with charges at A, B, C
 *  4 Badge 2 & Pairwise Forces: F₁ = F₂ = F = k q² / L² at angle θ = 60°
 *  5 Parallelogram calculation: F_net = √(F² + F² + 2 F² · ½) = √3 F
 *  6 Final Magnitude Result: F_net = √3 (k q² / L²) directed along angle bisector
 *  7 Symmetry insight: net force at centroid = 0 (perfect equilibrium)!
 *  8 Grand Verdict: F_net = √3 (k q² / L²) (Vector superposition on triangle!)
 */

import React from "react";
import { Circle, G, Polygon, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
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

export default function P12Ch01Sec21({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: equilateral triangle & superposition",
            "worked example: equilateral triangle & superposition"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 260 70 C 440 66, 640 74, 820 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "applying vector superposition on a symmetrical geometry!",
            "symmetrical geometry par vector superposition apply karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Badge 1 & Drawn Equilateral Triangle ── */}
      <Badge n={1} cx={52} cy={155} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={160} size={14} fill={RED} weight={700} anchor="start">
          {t("TRIANGLE GEOMETRY SETUP", "TRIANGLE GEOMETRY SETUP")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 230)">
          {/* Triangle outline */}
          <Polygon points="60,130 200,130 130,20" fill="none" stroke="#94a3b8" strokeWidth={1.8} />

          {/* Side L labels */}
          <T x={130} y={145} anchor="middle" size={11} fill={MUTED}>side L</T>

          {/* Vertices A, B, C */}
          <Circle cx={60} cy={130} r={12} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />
          <T x={60} y={134} anchor="middle" size={10} fill={RED} weight={800}>A (+q)</T>

          <Circle cx={200} cy={130} r={12} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />
          <T x={200} y={134} anchor="middle" size={10} fill={RED} weight={800}>B (+q)</T>

          <Circle cx={130} cy={20} r={12} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />
          <T x={130} y={24} anchor="middle" size={10} fill={RED} weight={800}>C (+q)</T>

          {/* Force arrows on C */}
          <Draw on={beat >= 3} delay={dl(3, 0.5)} d={arrowD(130, 20, 160, -10)} stroke="#0284c7" sw={2} />
          <Draw on={beat >= 3} delay={dl(3, 0.5)} d={arrowD(130, 20, 100, -10)} stroke="#0284c7" sw={2} />
          <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(130, 20, 130, -30)} stroke={RED} sw={2.5} />
          <T x={145} y={-20} anchor="start" size={12} fill={RED} weight={800}>F_net = √3 F</T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Badge 2 & Resultant Formula ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("VECTOR RESULTANT AT 60° ANGLE", "VECTOR RESULTANT AT 60° ANGLE")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(540, 185)">
          <Rect x={0} y={10} width={450} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            F_net = √(F² + F² + 2F² cos 60°) = √3 F
          </T>
          <T x={225} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("where individual magnitude F = k q² / L²", "jahan individual force F = k q² / L²")}
          </T>
          <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 120 56 h 210 M 120 60 h 210" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 7: Centroid Equilibrium Insight ── */}
      <Fade on={beat >= 7} dim={beat >= 8}>
        <G transform="translate(540, 310)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={GREEN}>
            {t("SYMMETRY EQUILIBRIUM INSIGHT:", "SYMMETRY EQUILIBRIUM INSIGHT:")}
          </T>
          <T x={0} y={50} anchor="start" size={16} fill={GREEN} weight={800}>
            Net force on charge at centroid = 0 !
          </T>
          <T x={0} y={80} anchor="start" size={12.5} script={true} fill={MUTED}>
            {t("Symmetrical 3-force cancellation at central centroid point!", "Centroid point par saare 3 forces cancel ho jaate hain!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 8: Grand Verdict Chip ── */}
      <Fade on={beat >= 8}>
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
            "★ VERDICT: F_net = √3 (k q² / L²) (Vector superposition on triangle!)",
            "★ VERDICT: F_net = √3 (k q² / L²) (Vector superposition on triangle!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
