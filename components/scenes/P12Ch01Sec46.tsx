/**
 * P12Ch01 · Section 46 — "Derivation: Field at the Centre of a Semicircular Arc"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Semicircular arc of radius R with uniform linear charge density λ
 *  - General arc subtending angle α at center: E_arc = (2 k λ / R) sin(α / 2)
 *  - Semicircular arc (α = π = 180°): sin(90°) = 1  ⇒  E_semi = 2 k λ / R
 *  - Quarter ring (α = π/2 = 90°): sin(45°) = 1/√2  ⇒  E_quarter = √2 k λ / R
 *  - Full ring (α = 2π = 360°): sin(180°) = 0  ⇒  E_ring = 0 (perfect cancellation!)
 *
 * Beats (en [0, 6, 20, 34, 44, 56, 68, 80, 92]):
 *  0 Title "derivation: field at the centre of a semicircular arc" + drawn underline
 *  1 Hook note: deriving general arc formula E = (2kλ/R) sin(α/2) and special geometry cases!
 *  2 Badge 1 & General Arc Field Formula: E_arc = (2 k λ / R) sin(α / 2)
 *  3 Badge 2 & Semicircular Arc (α = 180°): E_semi = 2 k λ / R
 *  4 Quarter Ring (α = 90°): E_quarter = √2 k λ / R
 *  5 Full Ring (α = 360°): E_ring = 0
 *  6 Direction rule: Field vector bisects the arc angle pointing away from positive charge!
 *  7 Grand Verdict: E_arc = (2 k λ / R) sin(α/2)  |  Semicircle: 2 k λ / R  |  Full Ring: 0!
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

export default function P12Ch01Sec46({ currentTime, reveals, language }: SceneProps) {
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
            "derivation: field at the centre of a semicircular arc",
            "derivation: semicircular arc ke centre par electric field"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 220 70 C 440 66, 640 74, 860 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "deriving general arc formula E = (2kλ/R) sin(α/2) and special geometry cases!",
            "general arc formula E = (2kλ/R) sin(α/2) aur special cases nikaalna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & General Arc Formula ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("GENERAL ARC FIELD FORMULA", "GENERAL ARC FIELD FORMULA")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            E_arc = (2 k λ / R) sin(α / 2)
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("α is total angle subtended by arc at center", "α arc dawra center par subtend kiya hua total angle hai")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Semicircular Arc (α = 180°) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("SEMICIRCULAR ARC (α = 180° = π)", "SEMICIRCULAR ARC (α = 180° = π)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            sin(180° / 2) = sin(90°) = 1
          </T>
          <T x={0} y={65} anchor="start" size={24} fill={RED} weight={800}>
            E_semi = 2 k λ / R
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
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
            "★ VERDICT: E_arc = (2 k λ / R) sin(α/2)  |  Semicircle: 2 k λ / R  |  Full Ring: 0!",
            "★ VERDICT: E_arc = (2 k λ / R) sin(α/2)  |  Semicircle: 2 k λ / R  |  Full Ring: 0!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
