/**
 * C11 Ch08 · Section 13 — "Assign hybridization: just count sigma bonds"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 6.4, 20.65, 24.58, 32.51, 47.45, 66.65, 83.63]):
 *  0 title (always-on, seq1) · 1 bond→sigma mapping (single/double/triple icons) ·
 *  2 σ-count = steric number · 3 SN lookup chips (4→sp3, 3→sp2, 2→sp) · 4 red note
 *  (π never raises SN) · 5 charged-centre cards (carbocation/carbanion) · 6 propyne
 *  worked mini-example · 7 red closer (never draw orbitals, count σ)
 *
 * Layout plan:
 *  b1 | 3 bond icons + σ-labels          | Draw+T| x200/540/880 y95..118
 *  b2 | "σ-count = SN" (15, w700)        | T mid | x540 y150
 *  b3 | 3 SN chips                       | Chip  | x125../415../705.. y175..215
 *  b4 | margin bar + red note            | Draw+T| x60 y240..268 · x76 y258
 *  b5 | 2 charged-centre cards           | rect+T| x150../620.. y290..340
 *  b6 | propyne structure + σ tags       | Draw+T| y378..442
 *  b7 | margin bar + red closer          | Draw+T| x60 y470..500 · x76 y490
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, tripleBondD } from "./chem-kit";

export default function C11Ch08Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t("Assign hybridization: just count sigma bonds", "Hybridization batao: bas sigma bonds gino")}
        </T>
      </Fade>

      {/* beat 1 — bond type → sigma/pi mapping */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={bondD(185, 95, 215, 95)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={doubleBondD(525, 95, 555, 95, 3)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={tripleBondD(865, 95, 895, 95, 4)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={200} y={118} size={13} fill={INK}>
          {t("single = 1σ", "single = 1σ")}
        </T>
        <T x={540} y={118} size={13} fill={INK}>
          {t("double = 1σ + 1π", "double = 1σ + 1π")}
        </T>
        <T x={880} y={118} size={13} fill={INK}>
          {t("triple = 1σ + 2π", "triple = 1σ + 2π")}
        </T>
      </Fade>

      {/* beat 2 — sigma-count = steric number */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={150} size={15} fill={INK} weight={700}>
          {t("σ-count = the steric number (SN)", "σ-count = steric number (SN)")}
        </T>
      </Fade>

      {/* beat 3 — SN lookup */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={125} y={175} w={210} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          SN 4 → sp³
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={415} y={175} w={210} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          SN 3 → sp²
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={705} y={175} w={210} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          SN 2 → sp
        </Chip>
      </Fade>

      {/* beat 4 — pi never raises SN */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 60 240 L 60 268" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={258} size={15} fill={RED} script anchor="start">
          {t(
            "π bonds always use leftover unhybridized p — they NEVER raise the steric number",
            "π bonds hamesha leftover p use karte — steric number KABHI nahi badhate"
          )}
        </T>
      </Fade>

      {/* beat 5 — charged / heteroatom centres */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Rect x={150} y={290} width={370} height={50} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.6} />
        <T x={335} y={320} size={14} fill={INK}>
          {t("carbocation: 3σ + 0 lp → sp²", "carbocation: 3σ + 0 lp → sp²")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Rect x={620} y={290} width={340} height={50} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.6} />
        <T x={790} y={320} size={14} fill={INK}>
          {t("carbanion: 3σ + 1 lp → sp³", "carbanion: 3σ + 1 lp → sp³")}
        </T>
      </Fade>

      {/* beat 6 — propyne worked mini-example */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={540} y={378} size={14} fill={MUTED}>
          {t("propyne: CH3−C≡CH", "propyne: CH3−C≡CH")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={190} y={403} size={13} fill={GREEN} weight={700}>
          4σ → sp³
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={300} y={403} size={13} fill={GREEN} weight={700}>
          2σ → sp
        </T>
        <T x={400} y={403} size={13} fill={GREEN} weight={700}>
          2σ → sp
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={190} y={438} size={16} fill={INK} weight={700}>
          CH₃
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.5)} d={bondD(230, 434, 293, 434)} stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={tripleBondD(300, 434, 400, 434, 5)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d={bondD(407, 434, 440, 434)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <T x={455} y={438} size={16} fill={INK} weight={700}>
          H
        </T>
      </Fade>

      {/* beat 7 — the exam habit */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 470 L 60 500" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={490} size={15} fill={RED} script anchor="start">
          {t(
            "never draw orbitals in an exam — count σ bonds (+ lone pairs) and read it off",
            "exam mein orbitals mat banao — σ bonds (+ lone pairs) gino aur seedha padho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
