/**
 * C11 Ch08 · Section 31 — "Every reaction: who keeps the electrons?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 11.26, 26.71, 41.05, 58.37, 76.63, 86.36, 102.23, 114.43]):
 *  0 title (always-on, seq1) · 1 auto-rickshaw analogy + A-B bond drawn · 2 Option
 *  A: homolytic (single-barb arrows → 2 radicals) · 3 Option B: heterolytic
 *  (double-barb arrow → cation+anion) · 4 red note (conditions) · 5 reactions =
 *  electron-rich seeking electron-poor · 6 nucleophile/electrophile defs · 7 red
 *  note (predicting from stability) · 8 red note (density not charge, NH3/BF3)
 *
 * Original bond top-center. Homolytic outcome LEFT (x~270), heterolytic
 * outcome RIGHT (x~810).
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, curvedArrowD } from "./chem-kit";

export default function C11Ch08Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={RED} script>
          {t("Every reaction: who keeps the electrons?", "Har reaction: electrons kis ke paas rehte?")}
        </T>
      </Fade>

      {/* beat 1 — the analogy + the shared bond */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={92} size={13} fill={MUTED} script>
          {t("two friends share one auto (the bond) — partnership ends...", "do dost ek auto share karte (bond) — partnership khatam hoti...")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={bondD(460, 135, 620, 135)} stroke={INK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={445} y={140} size={16} fill={INK} weight={700} anchor="end">
          A
        </T>
        <T x={635} y={140} size={16} fill={INK} weight={700} anchor="start">
          B
        </T>
        <Circle cx={534} cy={122} r={2.4} fill={INK} />
        <Circle cx={546} cy={122} r={2.4} fill={INK} />
      </Fade>

      {/* beat 2 — Option A: homolytic (sell & split) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={270} y={188} size={13} fill={AMBER_DARK} weight={700}>
          {t("Option A — sell & split (homolytic)", "Option A — bech ke split (homolytic)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={bondD(200, 228, 340, 228)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d={curvedArrowD(270, 222, 205, 205, -15, true)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.4)}
        d={curvedArrowD(270, 222, 335, 205, 15, true)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={175} y={255} size={16} fill={INK} weight={700}>
          A•
        </T>
        <T x={365} y={255} size={16} fill={INK} weight={700}>
          •B
        </T>
        <T x={270} y={278} size={12} fill={MUTED}>
          {t("2 radicals", "2 radicals")}
        </T>
      </Fade>

      {/* beat 3 — Option B: heterolytic (one keeps it all) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={810} y={188} size={13} fill={AMBER_DARK} weight={700}>
          {t("Option B — one keeps all (heterolytic)", "Option B — ek sab rakhe (heterolytic)")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={bondD(740, 228, 880, 228)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={curvedArrowD(810, 222, 875, 205, 20, false)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={715} y={255} size={16} fill={INK} weight={700}>
          A⁺
        </T>
        <T x={905} y={255} size={16} fill={INK} weight={700}>
          B⁻
        </T>
        <T x={810} y={278} size={12} fill={MUTED}>
          {t("cation + anion", "cation + anion")}
        </T>
      </Fade>

      {/* beat 4 — the conditions */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 60 310 L 60 340" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={328} size={15} fill={RED} script anchor="start">
          {t(
            "homolytic: nonpolar bonds, heat/UV. heterolytic: polar bonds, polar solvents",
            "homolytic: nonpolar bonds, heat/UV. heterolytic: polar bonds, polar solvents"
          )}
        </T>
      </Fade>

      {/* beat 5 — reactions in one sentence */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={365} size={14} fill={INK} weight={700}>
          {t("reactions = electron-rich centres seeking electron-poor centres", "reactions = electron-rich centres, electron-poor dhoondte hain")}
        </T>
      </Fade>

      {/* beat 6 — nucleophile / electrophile */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={392} size={13} fill={INK}>
          {t("nucleophile = electron-rich, donates (Lewis base) · electrophile = electron-poor, accepts (Lewis acid)", "nucleophile = electron-rich, deta hai (Lewis base) · electrophile = electron-poor, leta hai (Lewis acid)")}
        </T>
      </Fade>

      {/* beat 7 — predicting, not memorising */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 415 L 60 445" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={433} size={15} fill={RED} script anchor="start">
          {t(
            "a bond breaks the way that gives the MORE STABLE fragments — predicting, not memorising",
            "bond usi tarah tootta jo MORE STABLE fragments de — predicting, memorising nahi"
          )}
        </T>
      </Fade>

      {/* beat 8 — density, not charge */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 60 465 L 60 495" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={76} y={483} size={15} fill={RED} script anchor="start">
          {t(
            "labels are about electron DENSITY, not charge — neutral NH3 = nucleophile, neutral BF3 = electrophile",
            "labels electron DENSITY ke bare mein, charge nahi — neutral NH3 = nucleophile, BF3 = electrophile"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
