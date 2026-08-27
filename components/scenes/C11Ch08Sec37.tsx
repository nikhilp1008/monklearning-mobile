/**
 * C11 Ch08 · Section 37 — "Worked example — most stable carbocation (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.85, 17.66, 26.45, 37.38, 48.13, 59.73, 72.36]):
 *  0 title (always-on, seq1) · 1 four candidate formulas · 2 checklist: check
 *  RESONANCE first · 3 diagram: benzyl cation ring drawn · 4 allyl+benzyl both
 *  resonance-stabilised, benzyl wins · 5 tert-butyl: best alkyl but no resonance
 *  · 6 red trap (reflex tertiary pick) · 7 closer (resonance > hyperconj >
 *  induction)
 *
 * Four formula labels y95. Benzyl ring c(540,210) r55, circle r32.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, ringD as hexRingD } from "./chem-kit";

export default function C11Ch08Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} script>
          {t("Worked example — most stable carbocation (NEET)", "Worked example — sabse stable carbocation (NEET)")}
        </T>
      </Fade>

      {/* beat 1 — the four candidates */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={150} y={95} size={14} fill={INK} weight={700}>
          CH₃⁺
        </T>
        <T x={400} y={95} size={14} fill={INK} weight={700}>
          (CH₃)₃C⁺
        </T>
        <T x={650} y={95} size={14} fill={INK} weight={700}>
          CH₂=CH-CH₂⁺
        </T>
        <T x={900} y={95} size={14} fill={INK} weight={700}>
          C₆H₅CH₂⁺
        </T>
      </Fade>

      {/* beat 2 — check resonance first */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={125} size={13} fill={INK}>
          {t("run the checklist — check RESONANCE first", "checklist chalao — pehle RESONANCE check karo")}
        </T>
      </Fade>

      {/* beat 3 — the benzyl cation, drawn */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={hexRingD(540, 210, 55)} stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <Circle cx={540} cy={210} r={32} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={bondD(586.6, 237.5, 645, 258)} stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={660} y={262} size={16} fill={INK} weight={700} anchor="start">
          CH₂⁺
        </T>
        <T x={540} y={300} size={13} fill={MUTED}>
          {t("benzyl cation", "benzyl cation")}
        </T>
      </Fade>

      {/* beat 4 — allyl + benzyl resonance, benzyl wins */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={330} size={13} fill={INK}>
          {t("allyl + benzyl both resonance-stabilised — benzyl spreads over the whole ring", "allyl + benzyl dono resonance-stabilised — benzyl pure ring mein failta")}
        </T>
      </Fade>

      {/* beat 5 — tert-butyl has no resonance */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={360} size={13} fill={INK}>
          {t("tert-butyl = best pure-alkyl (3°, hyperconj.) but NO resonance", "tert-butyl = best pure-alkyl (3°, hyperconj.) par resonance NAHI")}
        </T>
      </Fade>

      {/* beat 6 — the trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 375 L 60 405" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={393} size={15} fill={RED} script anchor="start">
          {t(
            "trap: reflexively picking the tertiary cation — any allylic/benzylic delocalisation wins",
            "trap: bina soche tertiary chun lena — koi bhi allylic/benzylic delocalisation jeet jaata"
          )}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={430} size={14} fill={INK} weight={700}>
          {t("answer: benzyl — rule: resonance > hyperconjugation > induction", "answer: benzyl — rule: resonance > hyperconjugation > induction")}
        </T>
      </Fade>
    </Scene>
  );
}
